import { Router } from 'express';
import { db } from '../db.js';
import { validateAnswer, calculateTopicMastery } from '../scoring.js';

export const questionRouter = Router();

// GET /api/questions - List questions with filters
questionRouter.get('/', (req, res) => {
  try {
    const { paper, topicId, type, difficulty, provenance, search, limit = 50, offset = 0 } = req.query;

    let query = 'SELECT * FROM questions WHERE 1=1';
    const params: any[] = [];

    if (paper) {
      query += ' AND paper = ?';
      params.push(String(paper).toUpperCase());
    }
    if (topicId) {
      query += ' AND topic_id = ?';
      params.push(String(topicId));
    }
    if (type) {
      query += ' AND type = ?';
      params.push(String(type).toUpperCase());
    }
    if (difficulty) {
      query += ' AND difficulty = ?';
      params.push(String(difficulty));
    }
    if (provenance) {
      query += ' AND provenance = ?';
      params.push(String(provenance));
    }
    if (search) {
      query += ' AND (text LIKE ? OR topic_title LIKE ? OR tags LIKE ?)';
      const term = `%${search}%`;
      params.push(term, term, term);
    }

    query += ' ORDER BY id ASC LIMIT ? OFFSET ?';
    params.push(Number(limit), Number(offset));

    const rows = db.prepare(query).all(...params) as any[];

    // Check bookmarks for user
    const bookmarks = new Set((db.prepare('SELECT question_id FROM bookmarks').all() as any[]).map(b => b.question_id));

    const parsed = rows.map(r => {
      let parsedAnswer = r.correct_answer;
      try {
        parsedAnswer = JSON.parse(r.correct_answer);
      } catch {
        parsedAnswer = r.correct_answer;
      }

      return {
        id: r.id,
        paper: r.paper,
        subject: r.subject,
        topicId: r.topic_id,
        topicTitle: r.topic_title,
        year: r.year,
        provenance: r.provenance,
        provenanceLabel: r.provenance_label,
        originalPaper: r.original_paper,
        type: r.type,
        marks: r.marks,
        negativeMarking: r.negative_marking,
        difficulty: r.difficulty,
        text: r.text,
        imageUrl: r.image_url,
        options: r.options ? JSON.parse(r.options) : undefined,
        correctAnswer: parsedAnswer,
        explanation: r.explanation,
        hints: r.hints ? JSON.parse(r.hints) : [],
        trapAlert: r.trap_alert,
        tags: r.tags ? JSON.parse(r.tags) : [],
        isBookmarked: bookmarks.has(r.id),
        version: r.version
      };
    });

    res.json({ success: true, count: parsed.length, data: parsed });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/questions/bookmarks - List bookmarked questions
questionRouter.get('/bookmarks', (req, res) => {
  try {
    const rows = db.prepare(`
      SELECT q.*, b.date_bookmarked 
      FROM questions q 
      JOIN bookmarks b ON q.id = b.question_id
      ORDER BY b.date_bookmarked DESC
    `).all() as any[];

    const parsed = rows.map(r => ({
      id: r.id,
      paper: r.paper,
      subject: r.subject,
      topicId: r.topic_id,
      topicTitle: r.topic_title,
      type: r.type,
      marks: r.marks,
      difficulty: r.difficulty,
      text: r.text,
      options: r.options ? JSON.parse(r.options) : undefined,
      provenanceLabel: r.provenance_label,
      dateBookmarked: r.date_bookmarked
    }));

    res.json({ success: true, count: parsed.length, data: parsed });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/questions/:id - Single question detail
questionRouter.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const r = db.prepare('SELECT * FROM questions WHERE id = ?').get(id) as any;
    if (!r) {
      return res.status(404).json({ success: false, error: 'Question not found' });
    }

    const bookmark = db.prepare('SELECT question_id FROM bookmarks WHERE question_id = ?').get(id);

    let parsedAnswer = r.correct_answer;
    try {
      parsedAnswer = JSON.parse(r.correct_answer);
    } catch {
      parsedAnswer = r.correct_answer;
    }

    const question = {
      id: r.id,
      paper: r.paper,
      subject: r.subject,
      topicId: r.topic_id,
      topicTitle: r.topic_title,
      year: r.year,
      provenance: r.provenance,
      provenanceLabel: r.provenance_label,
      originalPaper: r.original_paper,
      type: r.type,
      marks: r.marks,
      negativeMarking: r.negative_marking,
      difficulty: r.difficulty,
      text: r.text,
      imageUrl: r.image_url,
      options: r.options ? JSON.parse(r.options) : undefined,
      correctAnswer: parsedAnswer,
      explanation: r.explanation,
      hints: r.hints ? JSON.parse(r.hints) : [],
      trapAlert: r.trap_alert,
      tags: r.tags ? JSON.parse(r.tags) : [],
      isBookmarked: !!bookmark,
      version: r.version
    };

    res.json({ success: true, data: question });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/questions/validate - Independent answer validation & topic progress update
questionRouter.post('/validate', (req, res) => {
  try {
    const { questionId, userResponse, hintsUsedCount = 0 } = req.body;
    if (!questionId) {
      return res.status(400).json({ success: false, error: 'Missing questionId' });
    }

    const q = db.prepare('SELECT * FROM questions WHERE id = ?').get(questionId) as any;
    if (!q) {
      return res.status(404).json({ success: false, error: 'Question not found' });
    }

    let parsedAnswer = q.correct_answer;
    try {
      parsedAnswer = JSON.parse(q.correct_answer);
    } catch {
      parsedAnswer = q.correct_answer;
    }

    const result = validateAnswer(
      q.type,
      q.marks,
      q.negative_marking,
      parsedAnswer,
      userResponse,
      hintsUsedCount
    );

    // Update topic progress in SQLite
    const topicId = q.topic_id;
    let tp = db.prepare('SELECT * FROM topic_progress WHERE topic_id = ?').get(topicId) as any;
    if (!tp) {
      db.prepare(`
        INSERT INTO topic_progress (topic_id, paper, studied, practiced_count, correct_count, revised_count, last_studied_date, mastery_score, confidence)
        VALUES (?, ?, 1, 0, 0, 0, ?, 0, 'Low')
      `).run(topicId, q.paper, new Date().toISOString());
      tp = { practiced_count: 0, correct_count: 0, revised_count: 0 };
    }

    const newPracticed = tp.practiced_count + 1;
    const newCorrect = tp.correct_count + (result.isCorrect ? 1 : 0);

    // Get count of unresolved mistakes for this topic
    const unresolvedMistakes = db.prepare('SELECT COUNT(*) as count FROM mistake_records WHERE topic_id = ? AND resolved = 0').get(topicId) as any;

    const mastery = calculateTopicMastery(newPracticed, newCorrect, unresolvedMistakes?.count || 0, tp.revised_count || 0);

    db.prepare(`
      UPDATE topic_progress 
      SET practiced_count = ?, correct_count = ?, last_studied_date = ?, mastery_score = ?, confidence = ?
      WHERE topic_id = ?
    `).run(newPracticed, newCorrect, new Date().toISOString(), mastery.masteryScore, mastery.confidence, topicId);

    // Award XP if correct (10 XP for 1 mark, 25 XP for 2 marks)
    let xpEarned = 0;
    if (result.isCorrect) {
      xpEarned = q.marks === 2 ? 25 : 15;
      if (hintsUsedCount > 0) xpEarned = Math.max(5, xpEarned - 5 * hintsUsedCount); // Penalize hints
      db.prepare('UPDATE user_stats SET xp = xp + ?, total_questions_solved = total_questions_solved + 1 WHERE id = "default"').run(xpEarned);
    }

    res.json({
      success: true,
      validation: {
        isCorrect: result.isCorrect,
        marksAwarded: result.marksAwarded,
        userResponse,
        correctAnswer: parsedAnswer,
        explanation: q.explanation,
        trapAlert: q.trap_alert,
        xpEarned,
        updatedTopicMastery: mastery
      }
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/questions/:id/bookmark - Toggle bookmark
questionRouter.post('/:id/bookmark', (req, res) => {
  try {
    const { id } = req.params;
    const q = db.prepare('SELECT paper FROM questions WHERE id = ?').get(id) as any;
    if (!q) {
      return res.status(404).json({ success: false, error: 'Question not found' });
    }

    const existing = db.prepare('SELECT * FROM bookmarks WHERE question_id = ?').get(id);
    let bookmarked = false;
    if (existing) {
      db.prepare('DELETE FROM bookmarks WHERE question_id = ?').run(id);
      bookmarked = false;
    } else {
      db.prepare('INSERT INTO bookmarks (question_id, paper, date_bookmarked) VALUES (?, ?, ?)').run(id, q.paper, new Date().toISOString());
      bookmarked = true;
    }

    res.json({ success: true, questionId: id, isBookmarked: bookmarked });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/questions - Create or import a custom practice question (Section 8.3 & 10)
questionRouter.post('/', (req, res) => {
  try {
    const {
      id,
      paper,
      subject,
      topicId,
      topicTitle,
      year,
      provenance = 'author_practice',
      provenanceLabel = 'User Authored Practice',
      originalPaper,
      type,
      marks = 1,
      negativeMarking = type === 'MCQ' ? (marks === 2 ? 0.66 : 0.33) : 0,
      difficulty = 'Medium',
      text,
      options,
      correctAnswer,
      explanation,
      hints = [],
      trapAlert,
      tags = []
    } = req.body;

    if (!paper || !topicId || !text || !correctAnswer || !type) {
      return res.status(400).json({ success: false, error: 'Missing required question fields (paper, topicId, text, correctAnswer, type)' });
    }

    const qId = id || `custom-q-${Date.now()}`;

    db.prepare(`
      INSERT INTO questions 
      (id, paper, subject, topic_id, topic_title, year, provenance, provenance_label, original_paper, type, marks, negative_marking, difficulty, text, options, correct_answer, explanation, hints, trap_alert, tags, version)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)
    `).run(
      qId,
      paper,
      subject || 'General Engineering',
      topicId,
      topicTitle || 'Custom Topic',
      year || null,
      provenance,
      provenanceLabel,
      originalPaper || null,
      type,
      marks,
      negativeMarking,
      difficulty,
      text,
      options ? JSON.stringify(options) : null,
      typeof correctAnswer === 'object' ? JSON.stringify(correctAnswer) : String(correctAnswer),
      explanation || 'Solution to custom problem.',
      JSON.stringify(hints),
      trapAlert || null,
      JSON.stringify(tags)
    );

    res.json({ success: true, message: 'Question created successfully', questionId: qId });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/questions/recommended - AI Weakness-Targeted Practice Session (Section 8.8)
questionRouter.get('/recommended', (req, res) => {
  try {
    const { paper = 'RA', count = 10 } = req.query;
    const targetPaper = String(paper).toUpperCase();

    // 1. Identify active mistake topics
    const mistakeTopics = db.prepare(`
      SELECT topic_id, COUNT(*) as cnt 
      FROM mistake_records 
      WHERE paper = ? AND resolved = 0 
      GROUP BY topic_id 
      ORDER BY cnt DESC 
      LIMIT 3
    `).all(targetPaper) as any[];

    // 2. Identify low-mastery topics (< 65%)
    const lowMasteryTopics = db.prepare(`
      SELECT topic_id 
      FROM topic_progress 
      WHERE mastery_score < 65 
      ORDER BY mastery_score ASC 
      LIMIT 3
    `).all() as any[];

    const focusTopicIds = new Set<string>();
    mistakeTopics.forEach(m => focusTopicIds.add(m.topic_id));
    lowMasteryTopics.forEach(l => focusTopicIds.add(l.topic_id));

    let questions: any[] = [];

    if (focusTopicIds.size > 0) {
      const placeholders = Array.from(focusTopicIds).map(() => '?').join(',');
      const rows = db.prepare(`
        SELECT * FROM questions 
        WHERE paper = ? AND topic_id IN (${placeholders})
        ORDER BY RANDOM() 
        LIMIT ?
      `).all(targetPaper, ...Array.from(focusTopicIds), Number(count)) as any[];
      questions = rows;
    }

    // Fallback if no specific weak topics yet: grab high-weightage questions
    if (questions.length < Number(count)) {
      const needed = Number(count) - questions.length;
      const existingIds = questions.map(q => q.id);
      const notInClause = existingIds.length > 0 ? `AND id NOT IN (${existingIds.map(() => '?').join(',')})` : '';
      
      const fallbackRows = db.prepare(`
        SELECT * FROM questions 
        WHERE paper = ? ${notInClause}
        ORDER BY RANDOM() 
        LIMIT ?
      `).all(targetPaper, ...existingIds, needed) as any[];

      questions = [...questions, ...fallbackRows];
    }

    const parsed = questions.map(r => {
      let parsedAnswer = r.correct_answer;
      try { parsedAnswer = JSON.parse(r.correct_answer); } catch {}
      return {
        id: r.id,
        paper: r.paper,
        subject: r.subject,
        topicId: r.topic_id,
        topicTitle: r.topic_title,
        type: r.type,
        marks: r.marks,
        negativeMarking: r.negative_marking,
        difficulty: r.difficulty,
        text: r.text,
        options: r.options ? JSON.parse(r.options) : undefined,
        correctAnswer: parsedAnswer,
        explanation: r.explanation,
        trapAlert: r.trap_alert,
        hints: r.hints ? JSON.parse(r.hints) : [],
        tags: r.tags ? JSON.parse(r.tags) : []
      };
    });

    res.json({
      success: true,
      count: parsed.length,
      focusTopics: Array.from(focusTopicIds),
      reason: focusTopicIds.size > 0 
        ? `Targeting ${focusTopicIds.size} topics with active mistakes or low mastery.` 
        : 'Curated balanced high-yield workout across core syllabus nodes.',
      questions: parsed
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});
