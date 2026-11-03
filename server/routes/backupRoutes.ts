import { Router } from 'express';
import { db } from '../db.js';

export const backupRouter = Router();

// GET /api/backup/export - Export entire state as structured JSON
backupRouter.get('/export', (req, res) => {
  try {
    const stats = db.prepare('SELECT * FROM user_stats WHERE id = "default"').get();
    const progress = db.prepare('SELECT * FROM topic_progress').all();
    const notes = db.prepare('SELECT * FROM user_notes').all();
    const mistakes = db.prepare('SELECT * FROM mistake_records').all();
    const testAttempts = db.prepare('SELECT * FROM test_attempts').all();
    const attemptAnswers = db.prepare('SELECT * FROM attempt_answers').all();
    const bookmarks = db.prepare('SELECT * FROM bookmarks').all();
    const targets = db.prepare('SELECT * FROM exam_targets').all();
    const revisionCards = db.prepare('SELECT * FROM revision_cards').all();

    const dump = {
      version: '1.1',
      exportedAt: new Date().toISOString(),
      userStats: stats,
      topicProgress: progress,
      userNotes: notes,
      mistakes: mistakes,
      testAttempts: testAttempts,
      attemptAnswers: attemptAnswers,
      bookmarks: bookmarks,
      examTargets: targets,
      revisionCards: revisionCards
    };

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename="gate_quest_2027_backup_${new Date().toISOString().split('T')[0]}.json"`);
    res.json(dump);
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/backup/import - Restore state from JSON
backupRouter.post('/import', (req, res) => {
  try {
    const dump = req.body;
    if (!dump || typeof dump !== 'object') {
      return res.status(400).json({ success: false, error: 'Invalid backup JSON payload' });
    }

    // Restore user notes
    if (Array.isArray(dump.userNotes)) {
      const insertNote = db.prepare(`
        INSERT INTO user_notes (topic_id, topic_title, paper, definition_summary, key_formulas, worked_example, common_mistakes, exam_traps, cross_links, custom_notes, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(topic_id) DO UPDATE SET
          definition_summary = excluded.definition_summary,
          key_formulas = excluded.key_formulas,
          worked_example = excluded.worked_example,
          common_mistakes = excluded.common_mistakes,
          exam_traps = excluded.exam_traps,
          cross_links = excluded.cross_links,
          custom_notes = excluded.custom_notes,
          updated_at = excluded.updated_at
      `);
      dump.userNotes.forEach((n: any) => {
        insertNote.run(
          n.topic_id || n.topicId,
          n.topic_title || n.topicTitle,
          n.paper,
          n.definition_summary || n.definitionSummary || '',
          n.key_formulas || n.keyFormulas || '',
          n.worked_example || n.workedExample || '',
          n.common_mistakes || n.commonMistakes || '',
          n.exam_traps || n.examTraps || '',
          n.cross_links || n.crossLinks || '',
          n.custom_notes || n.customNotes || '',
          n.updated_at || n.updatedAt || new Date().toISOString()
        );
      });
    }

    // Restore mistakes
    if (Array.isArray(dump.mistakes)) {
      const insertMistake = db.prepare(`
        INSERT INTO mistake_records (id, question_id, paper, topic_id, topic_title, category, user_reasoning, attempted_answer, date_logged, next_review_date, review_stage, resolved)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
          category = excluded.category,
          user_reasoning = excluded.user_reasoning,
          review_stage = excluded.review_stage,
          resolved = excluded.resolved
      `);
      dump.mistakes.forEach((m: any) => {
        insertMistake.run(
          m.id,
          m.question_id || m.questionId,
          m.paper,
          m.topic_id || m.topicId,
          m.topic_title || m.topicTitle,
          m.category,
          m.user_reasoning || m.userReasoning || '',
          m.attempted_answer || (m.attemptedAnswer ? JSON.stringify(m.attemptedAnswer) : null),
          m.date_logged || m.dateLogged,
          m.next_review_date || m.nextReviewDate,
          m.review_stage !== undefined ? m.review_stage : (m.reviewStage || 0),
          m.resolved ? 1 : 0
        );
      });
    }

    res.json({ success: true, message: 'Data imported successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/backup/reset - Clear and reset user data
backupRouter.post('/reset', (req, res) => {
  try {
    db.exec(`
      DELETE FROM test_attempts;
      DELETE FROM attempt_answers;
      DELETE FROM mistake_records;
      DELETE FROM user_notes;
      DELETE FROM bookmarks;
      DELETE FROM topic_progress;
      UPDATE user_stats SET xp = 150, level = 1, streak_days = 1, longest_streak = 1, total_questions_solved = 0, total_mocks_completed = 0, accuracy_rate = 0, study_history = '{}' WHERE id = 'default';
    `);

    res.json({ success: true, message: 'All user study data has been safely reset' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});
