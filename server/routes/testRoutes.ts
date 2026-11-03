import { Router } from 'express';
import { db } from '../db.js';
import { validateAnswer, analyzeTimeBleed, calculateProjectedGateRank } from '../scoring.js';

export const testRouter = Router();

// GET /api/tests - List all test blueprints/mocks
testRouter.get('/', (req, res) => {
  try {
    const { paper } = req.query;
    let query = 'SELECT * FROM tests WHERE 1=1';
    const params: any[] = [];
    if (paper) {
      query += ' AND paper = ?';
      params.push(String(paper).toUpperCase());
    }

    const rows = db.prepare(query).all(...params) as any[];
    const parsed = rows.map(r => ({
      ...r,
      questionIds: JSON.parse(r.question_ids || '[]')
    }));

    res.json({ success: true, count: parsed.length, data: parsed });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/tests - Create custom practice test / sectional mock
testRouter.post('/', (req, res) => {
  try {
    const { title, paper, durationMinutes, questionIds, testType = 'custom', instructions } = req.body;
    if (!title || !paper || !questionIds || !Array.isArray(questionIds) || questionIds.length === 0) {
      return res.status(400).json({ success: false, error: 'Invalid test configuration (title, paper, questionIds required)' });
    }

    const testId = `test-${Date.now()}`;
    const totalMarks = questionIds.length * 2; // rough default or sum from questions

    db.prepare(`
      INSERT INTO tests (id, title, paper, duration_minutes, question_ids, test_type, total_marks, instructions, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      testId,
      title,
      paper,
      durationMinutes || 30,
      JSON.stringify(questionIds),
      testType,
      totalMarks,
      instructions || 'Follow official GATE 2027 marking scheme.',
      new Date().toISOString()
    );

    res.json({ success: true, testId });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/tests/attempts - List completed or active test attempts
testRouter.get('/attempts', (req, res) => {
  try {
    const { paper, isCompleted } = req.query;
    let query = 'SELECT * FROM test_attempts WHERE 1=1';
    const params: any[] = [];

    if (paper) {
      query += ' AND paper = ?';
      params.push(String(paper).toUpperCase());
    }
    if (isCompleted !== undefined) {
      query += ' AND is_completed = ?';
      params.push(isCompleted === 'true' ? 1 : 0);
    }

    query += ' ORDER BY start_time DESC LIMIT 20';
    const rows = db.prepare(query).all(...params) as any[];

    const parsed = rows.map(r => ({
      ...r,
      isCompleted: Boolean(r.is_completed),
      timeSpentSeconds: r.time_spent_seconds ? JSON.parse(r.time_spent_seconds) : {}
    }));

    res.json({ success: true, count: parsed.length, data: parsed });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/tests/attempts/start - Start or resume a test session
testRouter.post('/attempts/start', (req, res) => {
  try {
    const { testId, title, paper, durationMinutes, questionIds } = req.body;
    if (!testId && (!questionIds || questionIds.length === 0)) {
      return res.status(400).json({ success: false, error: 'Must provide testId or questionIds' });
    }

    let testConfig: any = null;
    let finalQIds: string[] = questionIds || [];

    if (testId) {
      testConfig = db.prepare('SELECT * FROM tests WHERE id = ?').get(testId) as any;
      if (testConfig) {
        finalQIds = JSON.parse(testConfig.question_ids || '[]');
      }
    }

    // Check if an uncompleted attempt exists for this test to resume
    const existingAttempt = db.prepare('SELECT * FROM test_attempts WHERE test_id = ? AND is_completed = 0').get(testId) as any;
    if (existingAttempt) {
      // Fetch already saved answers
      const answers = db.prepare('SELECT * FROM attempt_answers WHERE attempt_id = ?').all(existingAttempt.id) as any[];
      const userAnswersMap: Record<string, any> = {};
      const markedForReviewMap: Record<string, boolean> = {};

      answers.forEach(a => {
        let resp = a.user_response;
        try { resp = JSON.parse(a.user_response); } catch {}
        userAnswersMap[a.question_id] = resp;
        markedForReviewMap[a.question_id] = Boolean(a.is_marked_for_review);
      });

      return res.json({
        success: true,
        isResumed: true,
        attempt: {
          ...existingAttempt,
          isCompleted: false,
          userAnswers: userAnswersMap,
          markedForReview: markedForReviewMap,
          questionIds: finalQIds
        }
      });
    }

    // Create new attempt
    const attemptId = `attempt-${Date.now()}`;
    const attemptTitle = title || testConfig?.title || 'Custom Test Session';
    const attemptPaper = paper || testConfig?.paper || 'RA';
    const duration = durationMinutes || testConfig?.duration_minutes || 30;

    db.prepare(`
      INSERT INTO test_attempts 
      (id, test_id, title, paper, duration_minutes, start_time, is_completed, score, total_marks, positive_marks, negative_marks, accuracy, time_spent_seconds)
      VALUES (?, ?, ?, ?, ?, ?, 0, 0, 0, 0, 0, 0, '{}')
    `).run(
      attemptId,
      testId || attemptId,
      attemptTitle,
      attemptPaper,
      duration,
      Date.now()
    );

    res.json({
      success: true,
      isResumed: false,
      attemptId,
      title: attemptTitle,
      paper: attemptPaper,
      durationMinutes: duration,
      questionIds: finalQIds
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/tests/attempts/:id/answer - Autosave an answer during test
testRouter.post('/attempts/:id/answer', (req, res) => {
  try {
    const { id } = req.params;
    const { questionId, response, timeSpentSeconds = 0, isMarkedForReview = false } = req.body;

    if (!questionId) {
      return res.status(400).json({ success: false, error: 'questionId required' });
    }

    const checkAttempt = db.prepare('SELECT is_completed FROM test_attempts WHERE id = ?').get(id) as any;
    if (!checkAttempt) {
      return res.status(404).json({ success: false, error: 'Attempt not found' });
    }
    if (checkAttempt.is_completed) {
      return res.status(400).json({ success: false, error: 'Attempt is already completed' });
    }

    const answerId = `${id}-${questionId}`;
    const existing = db.prepare('SELECT id FROM attempt_answers WHERE id = ?').get(answerId);

    const serializedResponse = response !== undefined && response !== null 
      ? (typeof response === 'object' ? JSON.stringify(response) : String(response))
      : null;

    if (existing) {
      db.prepare(`
        UPDATE attempt_answers 
        SET user_response = ?, time_spent_seconds = ?, is_marked_for_review = ?
        WHERE id = ?
      `).run(serializedResponse, timeSpentSeconds, isMarkedForReview ? 1 : 0, answerId);
    } else {
      db.prepare(`
        INSERT INTO attempt_answers (id, attempt_id, question_id, user_response, time_spent_seconds, is_marked_for_review)
        VALUES (?, ?, ?, ?, ?, ?)
      `).run(answerId, id, questionId, serializedResponse, timeSpentSeconds, isMarkedForReview ? 1 : 0);
    }

    res.json({ success: true, message: 'Answer autosaved' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/tests/attempts/:id/complete - Submit and score test attempt (Section 8.5)
testRouter.post('/attempts/:id/complete', (req, res) => {
  try {
    const { id } = req.params;
    const { userAnswers = {}, markedForReview = {}, timeSpentSeconds = {} } = req.body;

    const attempt = db.prepare('SELECT * FROM test_attempts WHERE id = ?').get(id) as any;
    if (!attempt) {
      return res.status(404).json({ success: false, error: 'Attempt not found' });
    }

    // Fetch questions for this test
    const test = db.prepare('SELECT question_ids FROM tests WHERE id = ?').get(attempt.test_id) as any;
    let questionIds: string[] = test ? JSON.parse(test.question_ids || '[]') : Object.keys(userAnswers);

    let totalMarks = 0;
    let positiveMarks = 0;
    let negativeMarks = 0;
    let correctCount = 0;
    let attemptedCount = 0;

    const questionResults: any[] = [];

    questionIds.forEach(qId => {
      const q = db.prepare('SELECT * FROM questions WHERE id = ?').get(qId) as any;
      if (!q) return;

      totalMarks += q.marks;

      let parsedAnswer = q.correct_answer;
      try { parsedAnswer = JSON.parse(q.correct_answer); } catch {}

      const userResp = userAnswers[qId];
      const isAttempted = userResp !== undefined && userResp !== null && userResp !== '';
      if (isAttempted) attemptedCount++;

      const validation = validateAnswer(
        q.type,
        q.marks,
        q.negative_marking,
        parsedAnswer,
        userResp
      );

      if (validation.isCorrect) {
        positiveMarks += validation.marksAwarded;
        correctCount++;
      } else if (isAttempted && validation.marksAwarded < 0) {
        negativeMarks += Math.abs(validation.marksAwarded);
      }

      // Record answer in SQLite
      const answerId = `${id}-${qId}`;
      const serializedResp = isAttempted 
        ? (typeof userResp === 'object' ? JSON.stringify(userResp) : String(userResp))
        : null;

      db.prepare(`
        INSERT INTO attempt_answers (id, attempt_id, question_id, user_response, is_correct, marks_awarded, time_spent_seconds, is_marked_for_review)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          user_response = excluded.user_response,
          is_correct = excluded.is_correct,
          marks_awarded = excluded.marks_awarded,
          time_spent_seconds = excluded.time_spent_seconds,
          is_marked_for_review = excluded.is_marked_for_review
      `).run(
        answerId,
        id,
        qId,
        serializedResp,
        validation.isCorrect ? 1 : 0,
        validation.marksAwarded,
        timeSpentSeconds[qId] || 0,
        markedForReview[qId] ? 1 : 0
      );

      questionResults.push({
        questionId: q.id,
        topicId: q.topic_id,
        topicTitle: q.topic_title,
        type: q.type,
        marks: q.marks,
        userResponse: userResp,
        correctAnswer: parsedAnswer,
        isCorrect: validation.isCorrect,
        marksAwarded: validation.marksAwarded,
        explanation: q.explanation,
        trapAlert: q.trap_alert
      });
    });

    const netScore = Number((positiveMarks - negativeMarks).toFixed(2));
    const accuracy = attemptedCount > 0 ? Number(((correctCount / attemptedCount) * 100).toFixed(1)) : 0;

    // Run Time Bleed & Pacing Analysis
    const questionMetadata = questionResults.map(qr => ({
      id: qr.questionId,
      marks: qr.marks as (1 | 2),
      type: qr.type
    }));
    const validationMap: Record<string, { isCorrect: boolean; marksAwarded: number }> = {};
    questionResults.forEach(qr => {
      validationMap[qr.questionId] = { isCorrect: qr.isCorrect, marksAwarded: qr.marksAwarded };
    });
    const timeBleedAnalysis = analyzeTimeBleed(questionMetadata, timeSpentSeconds, validationMap);

    // Calculate Projected Rank (normalized to 100-mark scale if not already 100)
    const normalizedMarks100 = totalMarks > 0 ? (netScore / totalMarks) * 100 : 0;
    const projectedRank = calculateProjectedGateRank(normalizedMarks100, (attempt.paper as 'RA' | 'DA') || 'RA');

    // Update attempt
    db.prepare(`
      UPDATE test_attempts 
      SET is_completed = 1, completed_at = ?, score = ?, total_marks = ?, positive_marks = ?, negative_marks = ?, accuracy = ?, time_spent_seconds = ?
      WHERE id = ?
    `).run(
      Date.now(),
      netScore,
      totalMarks,
      Number(positiveMarks.toFixed(2)),
      Number(negativeMarks.toFixed(2)),
      accuracy,
      JSON.stringify(timeSpentSeconds),
      id
    );

    // Award XP (50 XP for mock completion + bonus for score)
    const xpBonus = 50 + Math.max(0, Math.round(netScore * 5));
    db.prepare('UPDATE user_stats SET xp = xp + ?, total_mocks_completed = total_mocks_completed + 1 WHERE id = "default"').run(xpBonus);

    res.json({
      success: true,
      result: {
        attemptId: id,
        title: attempt.title,
        paper: attempt.paper,
        score: netScore,
        totalMarks,
        positiveMarks: Number(positiveMarks.toFixed(2)),
        negativeMarks: Number(negativeMarks.toFixed(2)),
        accuracy,
        correctCount,
        attemptedCount,
        totalQuestions: questionIds.length,
        xpEarned: xpBonus,
        timeBleedAnalysis,
        projectedRank,
        questionResults
      }
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/tests/attempts/:id - Get detailed score report for a past attempt
testRouter.get('/attempts/:id', (req, res) => {
  try {
    const { id } = req.params;
    const attempt = db.prepare('SELECT * FROM test_attempts WHERE id = ?').get(id) as any;
    if (!attempt) {
      return res.status(404).json({ success: false, error: 'Attempt not found' });
    }

    const answers = db.prepare('SELECT * FROM attempt_answers WHERE attempt_id = ?').all(id) as any[];

    const questionResults = answers.map(a => {
      const q = db.prepare('SELECT * FROM questions WHERE id = ?').get(a.question_id) as any;
      let parsedUserResp = a.user_response;
      try { parsedUserResp = JSON.parse(a.user_response); } catch {}
      let parsedCorrect = q?.correct_answer;
      try { parsedCorrect = JSON.parse(q.correct_answer); } catch {}

      return {
        questionId: a.question_id,
        topicId: q?.topic_id,
        topicTitle: q?.topic_title,
        type: q?.type,
        marks: q?.marks,
        userResponse: parsedUserResp,
        correctAnswer: parsedCorrect,
        isCorrect: Boolean(a.is_correct),
        marksAwarded: a.marks_awarded,
        timeSpentSeconds: a.time_spent_seconds,
        isMarkedForReview: Boolean(a.is_marked_for_review),
        explanation: q?.explanation,
        trapAlert: q?.trap_alert
      };
    });

    res.json({
      success: true,
      attempt: {
        ...attempt,
        isCompleted: Boolean(attempt.is_completed),
        timeSpentSeconds: attempt.time_spent_seconds ? JSON.parse(attempt.time_spent_seconds) : {},
        questionResults
      }
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/tests/projected-rank - Instant projected AIR and GATE score calculator (Section 8.12)
testRouter.get('/projected-rank', (req, res) => {
  try {
    const marks = parseFloat(String(req.query.marks || '50'));
    const paper = (String(req.query.paper || 'RA').toUpperCase() as 'RA' | 'DA');
    const projection = calculateProjectedGateRank(marks, paper);
    res.json({ success: true, projection });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/tests/generate-balanced-mock - Generates a quota-balanced GATE mock test
testRouter.post('/generate-balanced-mock', (req, res) => {
  try {
    const { paper = 'RA', tier = 'sectional' } = req.body;
    const targetPaper = String(paper).toUpperCase();

    // Fetch all questions for paper
    const allQuestions = db.prepare('SELECT id, type, marks, topic_id FROM questions WHERE paper = ?').all(targetPaper) as any[];
    if (allQuestions.length === 0) {
      return res.status(404).json({ success: false, error: `No questions found for paper ${targetPaper}` });
    }

    let selectedIds: string[] = [];
    let title = '';
    let durationMinutes = 30;

    if (tier === 'grand-65') {
      title = `${targetPaper} Grand 65-Question Full GATE Mock Exam`;
      durationMinutes = 180;
      // 25 1-mark questions, 40 2-mark questions
      const ones = allQuestions.filter(q => q.marks === 1).sort(() => 0.5 - Math.random()).slice(0, 25);
      const twos = allQuestions.filter(q => q.marks === 2).sort(() => 0.5 - Math.random()).slice(0, 40);
      selectedIds = [...ones, ...twos].map(q => q.id);
    } else if (tier === 'endurance-30') {
      title = `${targetPaper} Endurance Section Mock (30 Qs)`;
      durationMinutes = 60;
      const ones = allQuestions.filter(q => q.marks === 1).sort(() => 0.5 - Math.random()).slice(0, 10);
      const twos = allQuestions.filter(q => q.marks === 2).sort(() => 0.5 - Math.random()).slice(0, 20);
      selectedIds = [...ones, ...twos].map(q => q.id);
    } else {
      // Standard Sectional (15 Qs)
      title = `${targetPaper} Balanced Sectional Mock (15 Qs)`;
      durationMinutes = 30;
      const ones = allQuestions.filter(q => q.marks === 1).sort(() => 0.5 - Math.random()).slice(0, 5);
      const twos = allQuestions.filter(q => q.marks === 2).sort(() => 0.5 - Math.random()).slice(0, 10);
      selectedIds = [...ones, ...twos].map(q => q.id);
    }

    res.json({
      success: true,
      test: {
        title,
        paper: targetPaper,
        durationMinutes,
        questionCount: selectedIds.length,
        questionIds: selectedIds
      }
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});
