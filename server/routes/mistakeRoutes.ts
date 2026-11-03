import { Router } from 'express';
import { db } from '../db.js';

export const mistakeRouter = Router();

// GET /api/mistakes - List mistake notebook entries
mistakeRouter.get('/', (req, res) => {
  try {
    const { paper, category, resolved, dueOnly } = req.query;

    let query = `
      SELECT m.*, q.text as question_text, q.options, q.correct_answer, q.explanation, q.trap_alert
      FROM mistake_records m
      LEFT JOIN questions q ON m.question_id = q.id
      WHERE 1=1
    `;
    const params: any[] = [];

    if (paper) {
      query += ' AND m.paper = ?';
      params.push(String(paper).toUpperCase());
    }
    if (category) {
      query += ' AND m.category = ?';
      params.push(String(category));
    }
    if (resolved !== undefined) {
      query += ' AND m.resolved = ?';
      params.push(resolved === 'true' ? 1 : 0);
    }
    if (dueOnly === 'true') {
      const today = new Date().toISOString().split('T')[0];
      query += ' AND m.next_review_date <= ? AND m.resolved = 0';
      params.push(today);
    }

    query += ' ORDER BY m.date_logged DESC';
    const rows = db.prepare(query).all(...params) as any[];

    const mistakes = rows.map(r => {
      let parsedAnswer = r.correct_answer;
      try { parsedAnswer = JSON.parse(r.correct_answer); } catch {}
      let parsedAttempted = r.attempted_answer;
      try { parsedAttempted = JSON.parse(r.attempted_answer); } catch {}

      return {
        id: r.id,
        questionId: r.question_id,
        paper: r.paper,
        topicId: r.topic_id,
        topicTitle: r.topic_title,
        category: r.category,
        userReasoning: r.user_reasoning,
        attemptedAnswer: parsedAttempted,
        dateLogged: r.date_logged,
        nextReviewDate: r.next_review_date,
        reviewStage: r.review_stage,
        resolved: Boolean(r.resolved),
        question: {
          text: r.question_text,
          options: r.options ? JSON.parse(r.options) : undefined,
          correctAnswer: parsedAnswer,
          explanation: r.explanation,
          trapAlert: r.trap_alert
        }
      };
    });

    res.json({ success: true, count: mistakes.length, data: mistakes });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/mistakes - Log a new mistake
mistakeRouter.post('/', (req, res) => {
  try {
    const { questionId, category = 'concept_gap', userReasoning = '', attemptedAnswer } = req.body;
    if (!questionId) {
      return res.status(400).json({ success: false, error: 'questionId required' });
    }

    const q = db.prepare('SELECT * FROM questions WHERE id = ?').get(questionId) as any;
    if (!q) {
      return res.status(404).json({ success: false, error: 'Question not found' });
    }

    const mistakeId = `mistake-${Date.now()}`;
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

    db.prepare(`
      INSERT INTO mistake_records 
      (id, question_id, paper, topic_id, topic_title, category, user_reasoning, attempted_answer, date_logged, next_review_date, review_stage, resolved)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, 0)
    `).run(
      mistakeId,
      questionId,
      q.paper,
      q.topic_id,
      q.topic_title,
      category,
      userReasoning,
      attemptedAnswer !== undefined ? JSON.stringify(attemptedAnswer) : null,
      today,
      tomorrow
    );

    res.json({ success: true, mistakeId, message: 'Mistake logged to notebook' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// PATCH /api/mistakes/:id - Update reasoning, category, or review stage
mistakeRouter.patch('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { category, userReasoning, reviewStage } = req.body;

    const existing = db.prepare('SELECT * FROM mistake_records WHERE id = ?').get(id) as any;
    if (!existing) {
      return res.status(404).json({ success: false, error: 'Mistake not found' });
    }

    let nextReviewDate = existing.next_review_date;
    if (reviewStage !== undefined) {
      const days = reviewStage === 1 ? 3 : (reviewStage === 2 ? 7 : (reviewStage >= 3 ? 14 : 1));
      nextReviewDate = new Date(Date.now() + days * 86400000).toISOString().split('T')[0];
    }

    db.prepare(`
      UPDATE mistake_records 
      SET category = COALESCE(?, category),
          user_reasoning = COALESCE(?, user_reasoning),
          review_stage = COALESCE(?, review_stage),
          next_review_date = ?
      WHERE id = ?
    `).run(
      category || null,
      userReasoning || null,
      reviewStage !== undefined ? reviewStage : null,
      nextReviewDate,
      id
    );

    res.json({ success: true, message: 'Mistake updated' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/mistakes/:id/resolve - Mark mistake resolved after successful reattempt
mistakeRouter.post('/:id/resolve', (req, res) => {
  try {
    const { id } = req.params;
    db.prepare('UPDATE mistake_records SET resolved = 1 WHERE id = ?').run(id);

    // Award XP for resolving an error (20 XP)
    db.prepare('UPDATE user_stats SET xp = xp + 20 WHERE id = "default"').run();

    res.json({ success: true, message: 'Mistake marked as permanently resolved' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/mistakes/stats - Summary analytics on mistake categories and weak areas
mistakeRouter.get('/stats', (req, res) => {
  try {
    const { paper } = req.query;
    let filter = '';
    const params: any[] = [];
    if (paper) {
      filter = 'WHERE paper = ?';
      params.push(String(paper).toUpperCase());
    }

    const categoryStats = db.prepare(`
      SELECT category, COUNT(*) as count 
      FROM mistake_records 
      ${filter}
      GROUP BY category
    `).all(...params) as any[];

    const topicStats = db.prepare(`
      SELECT topic_id, topic_title, COUNT(*) as error_count 
      FROM mistake_records 
      ${filter}
      GROUP BY topic_id 
      ORDER BY error_count DESC 
      LIMIT 5
    `).all(...params) as any[];

    const totalLogged = db.prepare(`SELECT COUNT(*) as count FROM mistake_records ${filter}`).get(...params) as any;
    const totalResolved = db.prepare(`SELECT COUNT(*) as count FROM mistake_records ${filter ? filter + ' AND' : 'WHERE'} resolved = 1`).get(...params) as any;

    res.json({
      success: true,
      stats: {
        totalLogged: totalLogged?.count || 0,
        totalResolved: totalResolved?.count || 0,
        categories: categoryStats,
        highRiskTopics: topicStats
      }
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});
