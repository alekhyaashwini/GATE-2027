import { Router } from 'express';
import { db } from '../db.js';

export const syllabusRouter = Router();

// GET /api/syllabus - List all syllabus nodes with optional filters
syllabusRouter.get('/', (req, res) => {
  try {
    const { paper, section, weightage, search } = req.query;

    let query = 'SELECT * FROM syllabus_nodes WHERE 1=1';
    const params: any[] = [];

    if (paper) {
      query += ' AND paper = ?';
      params.push(String(paper).toUpperCase());
    }
    if (section) {
      query += ' AND section LIKE ?';
      params.push(`%${section}%`);
    }
    if (weightage) {
      query += ' AND weightage = ?';
      params.push(String(weightage));
    }
    if (search) {
      query += ' AND (topic LIKE ? OR description LIKE ? OR subtopics LIKE ?)';
      const term = `%${search}%`;
      params.push(term, term, term);
    }

    query += ' ORDER BY order_index ASC';

    const rows = db.prepare(query).all(...params) as any[];

    // Parse JSON fields
    const parsed = rows.map(r => ({
      ...r,
      subtopics: JSON.parse(r.subtopics || '[]'),
      prerequisites: JSON.parse(r.prerequisites || '[]'),
      overlapTags: JSON.parse(r.overlap_tags || '[]'),
      keyFormulas: JSON.parse(r.key_formulas || '[]'),
      externalResources: JSON.parse(r.external_resources || '[]')
    }));

    res.json({ success: true, count: parsed.length, data: parsed });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/syllabus/:id - Get a single syllabus node with user progress and notes
syllabusRouter.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const row = db.prepare('SELECT * FROM syllabus_nodes WHERE id = ?').get(id) as any;

    if (!row) {
      return res.status(404).json({ success: false, error: 'Syllabus node not found' });
    }

    // Get topic progress if any
    const progress = db.prepare('SELECT * FROM topic_progress WHERE topic_id = ?').get(id) as any;

    // Get user note if any
    const note = db.prepare('SELECT * FROM user_notes WHERE topic_id = ?').get(id) as any;

    // Get question count for this topic
    const qCount = db.prepare('SELECT COUNT(*) as count FROM questions WHERE topic_id = ?').get(id) as any;

    const data = {
      ...row,
      subtopics: JSON.parse(row.subtopics || '[]'),
      prerequisites: JSON.parse(row.prerequisites || '[]'),
      overlapTags: JSON.parse(row.overlap_tags || '[]'),
      keyFormulas: JSON.parse(row.key_formulas || '[]'),
      externalResources: JSON.parse(row.external_resources || '[]'),
      progress: progress || {
        studied: false,
        practicedCount: 0,
        correctCount: 0,
        revisedCount: 0,
        masteryScore: 0,
        confidence: 'Low'
      },
      hasNote: !!note,
      questionCount: qCount?.count || 0
    };

    res.json({ success: true, data });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});
