import { Router } from 'express';
import { db } from '../db.js';
import { calculateNextSpacedReview } from '../scoring.js';

export const revisionRouter = Router();

// GET /api/revision/due - Get cards due for review today or overdue
revisionRouter.get('/due', (req, res) => {
  try {
    const { paper } = req.query;
    const today = new Date().toISOString().split('T')[0];

    let query = 'SELECT * FROM revision_cards WHERE next_review_date <= ?';
    const params: any[] = [today];

    if (paper) {
      query += ' AND paper = ?';
      params.push(String(paper).toUpperCase());
    }

    query += ' ORDER BY next_review_date ASC LIMIT 50';
    const rows = db.prepare(query).all(...params) as any[];

    res.json({ success: true, count: rows.length, data: rows });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/revision/all - List all cards in the codex/revision deck
revisionRouter.get('/all', (req, res) => {
  try {
    const { paper, category } = req.query;
    let query = 'SELECT * FROM revision_cards WHERE 1=1';
    const params: any[] = [];

    if (paper) {
      query += ' AND paper = ?';
      params.push(String(paper).toUpperCase());
    }
    if (category) {
      query += ' AND category = ?';
      params.push(String(category));
    }

    query += ' ORDER BY title ASC';
    const rows = db.prepare(query).all(...params) as any[];

    res.json({ success: true, count: rows.length, data: rows });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/revision/:id/review - Record active recall review rating (0-5)
revisionRouter.post('/:id/review', (req, res) => {
  try {
    const { id } = req.params;
    const { quality = 4 } = req.body; // 0: blackout, 3: correct with effort, 5: perfect recall

    const card = db.prepare('SELECT * FROM revision_cards WHERE id = ?').get(id) as any;
    if (!card) {
      return res.status(404).json({ success: false, error: 'Revision card not found' });
    }

    const next = calculateNextSpacedReview(
      Number(quality),
      card.repetitions || 0,
      card.interval_days || 1,
      card.ease_factor || 2.5
    );

    const today = new Date().toISOString().split('T')[0];

    db.prepare(`
      UPDATE revision_cards 
      SET last_reviewed = ?, next_review_date = ?, interval_days = ?, repetitions = ?, ease_factor = ?
      WHERE id = ?
    `).run(today, next.nextDateStr, next.interval, next.repetitions, next.easeFactor, id);

    // Update topic progress revision count
    if (card.topic_id) {
      db.prepare(`
        UPDATE topic_progress 
        SET revised_count = revised_count + 1 
        WHERE topic_id = ?
      `).run(card.topic_id);
    }

    // Award XP (10 XP for active recall revision)
    db.prepare('UPDATE user_stats SET xp = xp + 10 WHERE id = "default"').run();

    res.json({
      success: true,
      cardId: id,
      nextReviewDate: next.nextDateStr,
      intervalDays: next.interval,
      repetitions: next.repetitions
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/revision/generate - Generate flashcard from a topic note's key formula (Section 8.13 -> 8.7)
revisionRouter.post('/generate', (req, res) => {
  try {
    const { topicId, title, frontPrompt, backFormula, examTip } = req.body;
    if (!topicId || !frontPrompt || !backFormula) {
      return res.status(400).json({ success: false, error: 'topicId, frontPrompt, and backFormula required' });
    }

    const node = db.prepare('SELECT paper, topic, subject FROM syllabus_nodes WHERE id = ?').get(topicId) as any;
    const cardId = `card-gen-${Date.now()}`;
    const today = new Date().toISOString().split('T')[0];

    db.prepare(`
      INSERT INTO revision_cards 
      (id, paper, topic_id, category, title, front_prompt, back_formula, explanation, exam_tip, next_review_date, interval_days, repetitions, ease_factor)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 0, 2.5)
    `).run(
      cardId,
      node?.paper || 'RA',
      topicId,
      node?.subject || 'General',
      title || `${node?.topic || 'Topic'} Formula`,
      frontPrompt,
      backFormula,
      'Generated from Notes Workspace',
      examTip || '',
      today
    );

    res.json({ success: true, cardId, message: 'Card added to Revision deck' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});
