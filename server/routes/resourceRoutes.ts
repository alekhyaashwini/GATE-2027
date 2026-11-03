import { Router } from 'express';
import { db } from '../db.js';

export const resourceRouter = Router();

// GET /api/resources - List curated external resources
resourceRouter.get('/', (req, res) => {
  try {
    const { paper, topicId, type } = req.query;
    let query = 'SELECT * FROM resources WHERE 1=1';
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
      params.push(String(type));
    }

    query += ' ORDER BY title ASC';
    const rows = db.prepare(query).all(...params) as any[];

    res.json({ success: true, count: rows.length, data: rows });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/resources - Add custom learner resource link
resourceRouter.post('/', (req, res) => {
  try {
    const { paper, topicId, title, provider, url, type = 'Web' } = req.body;
    if (!paper || !topicId || !title || !url) {
      return res.status(400).json({ success: false, error: 'paper, topicId, title, and url required' });
    }

    const resId = `res-custom-${Date.now()}`;
    const today = new Date().toISOString().split('T')[0];

    db.prepare(`
      INSERT INTO resources (id, paper, topic_id, title, provider, url, type, last_verified, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'active')
    `).run(resId, paper.toUpperCase(), topicId, title, provider || 'External', url, type, today);

    res.json({ success: true, resourceId: resId, message: 'Resource link saved' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/resources/verify - Link health check (Section 8.11)
resourceRouter.post('/verify', async (req, res) => {
  try {
    const { id } = req.body;
    const r = db.prepare('SELECT * FROM resources WHERE id = ?').get(id) as any;
    if (!r) {
      return res.status(404).json({ success: false, error: 'Resource not found' });
    }

    let status = 'active';
    try {
      // Basic URL format validation
      new URL(r.url);
      status = 'active';
    } catch {
      status = 'broken';
    }

    const today = new Date().toISOString().split('T')[0];
    db.prepare('UPDATE resources SET last_verified = ?, status = ? WHERE id = ?').run(today, status, id);

    res.json({ success: true, id, status, lastVerified: today });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});
