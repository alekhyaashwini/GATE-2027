import { Router } from 'express';
import { db } from '../db.js';

export const syncRouter = Router();

// POST /api/sync - Universal Bidirectional State Sync (Solves Dual-Persistence Drift)
syncRouter.post('/', (req, res) => {
  try {
    const {
      xp,
      streak,
      level,
      mistakes = [],
      bookmarks = [],
      notes = {},
      paper = 'RA'
    } = req.body;

    // 1. Sync User Stats (Keep the higher XP / streak)
    const existingStats = db.prepare('SELECT * FROM user_stats WHERE id = "default"').get() as any || {
      xp: 0,
      level: 1,
      streak_days: 0,
      total_questions_solved: 0,
      total_mocks_completed: 0
    };

    const mergedXp = Math.max(existingStats.xp || 0, Number(xp) || 0);
    const mergedStreak = Math.max(existingStats.streak_days || 0, Number(streak) || 0);
    const calculatedLevel = Math.max(1, Math.floor(mergedXp / 250) + 1);

    db.prepare(`
      INSERT INTO user_stats (id, xp, level, streak_days, last_study_date)
      VALUES ("default", ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET
        xp = excluded.xp,
        level = excluded.level,
        streak_days = excluded.streak_days,
        last_study_date = excluded.last_study_date
    `).run(
      mergedXp,
      calculatedLevel,
      mergedStreak,
      new Date().toISOString().split('T')[0]
    );

    // 2. Sync Bookmarks
    if (Array.isArray(bookmarks)) {
      const insertBookmark = db.prepare('INSERT OR IGNORE INTO bookmarks (id, user_id, question_id, created_at) VALUES (?, "default", ?, ?)');
      bookmarks.forEach(qId => {
        if (qId) insertBookmark.run(`bm-${qId}`, qId, new Date().toISOString());
      });
    }

    // 3. Sync Mistakes
    if (Array.isArray(mistakes)) {
      const upsertMistake = db.prepare(`
        INSERT INTO mistake_records 
        (id, question_id, paper, topic_id, topic_title, category, user_reasoning, attempted_answer, date_logged, next_review_date, review_stage, resolved)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          category = excluded.category,
          user_reasoning = excluded.user_reasoning,
          resolved = excluded.resolved,
          review_stage = excluded.review_stage,
          next_review_date = excluded.next_review_date
      `);

      mistakes.forEach(m => {
        if (m.id && m.questionId) {
          upsertMistake.run(
            m.id,
            m.questionId,
            m.paper || paper,
            m.topicId || 'ra-robotics-kinematics-transforms',
            m.topicTitle || 'General Topic',
            m.category || 'concept_gap',
            m.userReasoning || '',
            typeof m.attemptedAnswer === 'object' ? JSON.stringify(m.attemptedAnswer) : String(m.attemptedAnswer || ''),
            m.dateLogged || new Date().toISOString().split('T')[0],
            m.nextReviewDate || new Date().toISOString().split('T')[0],
            m.reviewStage || 0,
            m.resolved ? 1 : 0
          );
        }
      });
    }

    // 4. Fetch consolidated server state
    const allBookmarks = (db.prepare('SELECT question_id FROM bookmarks').all() as any[]).map(b => b.question_id);
    const allMistakes = db.prepare('SELECT * FROM mistake_records ORDER BY date_logged DESC').all() as any[];
    const totalQuestions = (db.prepare('SELECT COUNT(*) as count FROM questions').get() as any).count;
    const examTargets = db.prepare('SELECT * FROM exam_targets ORDER BY target_date ASC').all();
    const updatedStats = db.prepare('SELECT * FROM user_stats WHERE id = "default"').get() as any;

    res.json({
      success: true,
      syncedAt: new Date().toISOString(),
      stats: {
        xp: updatedStats.xp,
        level: updatedStats.level,
        streakDays: updatedStats.streak_days,
        totalQuestionsBank: totalQuestions
      },
      bookmarks: allBookmarks,
      mistakes: allMistakes.map(m => ({
        id: m.id,
        questionId: m.question_id,
        paper: m.paper,
        topicId: m.topic_id,
        topicTitle: m.topic_title,
        category: m.category,
        userReasoning: m.user_reasoning,
        attemptedAnswer: m.attempted_answer,
        dateLogged: m.date_logged,
        nextReviewDate: m.next_review_date,
        reviewStage: m.review_stage,
        resolved: Boolean(m.resolved)
      })),
      examTargets
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/sync/status - Server health and database record audit
syncRouter.get('/status', (req, res) => {
  try {
    const totalQuestions = (db.prepare('SELECT COUNT(*) as cnt FROM questions').get() as any).cnt;
    const totalSyllabus = (db.prepare('SELECT COUNT(*) as cnt FROM syllabus_nodes').get() as any).cnt;
    const totalMistakes = (db.prepare('SELECT COUNT(*) as cnt FROM mistake_records').get() as any).cnt;
    const totalAttempts = (db.prepare('SELECT COUNT(*) as cnt FROM test_attempts').get() as any).cnt;
    const stats = db.prepare('SELECT * FROM user_stats WHERE id = "default"').get() as any;

    res.json({
      success: true,
      engine: 'GATE Quest 2027 SQLite Engine (v1.1 Concept Spec)',
      status: 'healthy',
      counts: {
        questions: totalQuestions,
        syllabusNodes: totalSyllabus,
        mistakesLogged: totalMistakes,
        mockAttempts: totalAttempts
      },
      userStats: stats
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});
