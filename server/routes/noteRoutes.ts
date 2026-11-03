import { Router } from 'express';
import { db } from '../db.js';
import { DETAILED_TOPIC_NOTES } from '../../src/data/topicNotesData.js';

export const noteRouter = Router();

// GET /api/notes - Full-text search and filter notes
noteRouter.get('/', (req, res) => {
  try {
    const { paper, search, tag } = req.query;

    let query = 'SELECT * FROM user_notes WHERE 1=1';
    const params: any[] = [];

    if (paper) {
      query += ' AND paper = ?';
      params.push(String(paper).toUpperCase());
    }
    if (tag) {
      query += ' AND cross_links LIKE ?';
      params.push(`%${tag}%`);
    }
    if (search) {
      query += ` AND (
        topic_title LIKE ? OR 
        definition_summary LIKE ? OR 
        key_formulas LIKE ? OR 
        worked_example LIKE ? OR 
        common_mistakes LIKE ? OR 
        exam_traps LIKE ? OR 
        custom_notes LIKE ?
      )`;
      const term = `%${search}%`;
      params.push(term, term, term, term, term, term, term);
    }

    query += ' ORDER BY updated_at DESC';
    const rows = db.prepare(query).all(...params) as any[];

    const notes = rows.map(r => ({
      topicId: r.topic_id,
      topicTitle: r.topic_title,
      paper: r.paper,
      definitionSummary: r.definition_summary,
      keyFormulas: r.key_formulas,
      workedExample: r.worked_example,
      commonMistakes: r.common_mistakes,
      examTraps: r.exam_traps,
      crossLinks: r.cross_links,
      customNotes: r.custom_notes,
      updatedAt: r.updated_at
    }));

    res.json({ success: true, count: notes.length, data: notes });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/notes/:topicId - Get single structured note with auto-generated backlinks (Section 8.13)
noteRouter.get('/:topicId', (req, res) => {
  try {
    const { topicId } = req.params;

    let note = db.prepare('SELECT * FROM user_notes WHERE topic_id = ?').get(topicId) as any;

    // If note does not exist yet in db, generate default structured template from syllabus node or DETAILED_TOPIC_NOTES
    if (!note) {
      if (DETAILED_TOPIC_NOTES[topicId]) {
        const d = DETAILED_TOPIC_NOTES[topicId];
        note = {
          topic_id: d.topicId,
          topic_title: d.topicTitle,
          paper: d.paper,
          definition_summary: d.definitionSummary,
          key_formulas: d.keyFormulas,
          worked_example: d.workedExample,
          common_mistakes: d.commonMistakes,
          exam_traps: d.examTraps,
          cross_links: d.crossLinks,
          custom_notes: d.customNotes || '',
          updated_at: d.updatedAt
        };
      } else {
        const node = db.prepare('SELECT * FROM syllabus_nodes WHERE id = ?').get(topicId) as any;
        if (!node) {
          return res.status(404).json({ success: false, error: 'Syllabus node not found' });
        }

        const keyFormulasList = node.key_formulas ? JSON.parse(node.key_formulas) : [];
        const overlapTagsList = node.overlap_tags ? JSON.parse(node.overlap_tags) : [];

        note = {
          topic_id: topicId,
          topic_title: node.topic,
          paper: node.paper,
          definition_summary: node.description || `Foundational overview for ${node.topic}.`,
          key_formulas: keyFormulasList.map((f: string) => `$$${f}$$`).join('\n\n') || '$$E = mc^2$$',
          worked_example: `**GATE Problem Statement**:\nCalculate the characteristic response or target parameter given standard syllabus boundary conditions.\n\n**Solution Steps**:\n1. Identify given variables.\n2. Apply governing relation.\n3. Verify dimensional consistency.`,
          common_mistakes: `1. Unit conversion errors (radians vs degrees, mm vs meters).\n2. Algebraic sign inversion during matrix transpose or feedback loop subtraction.`,
          exam_traps: `Watch out for boundary condition qualifiers (e.g. "strictly positive", "non-singular", "symmetric"). Check if negative marking applies.`,
          cross_links: overlapTagsList.join(', ') || 'Related syllabus nodes',
          custom_notes: '',
          updated_at: new Date().toISOString()
        };
      }
    } else {
      note = {
        topicId: note.topic_id,
        topicTitle: note.topic_title,
        paper: note.paper,
        definitionSummary: note.definition_summary,
        keyFormulas: note.key_formulas,
        workedExample: note.worked_example,
        commonMistakes: note.common_mistakes,
        examTraps: note.exam_traps,
        crossLinks: note.cross_links,
        customNotes: note.custom_notes,
        updatedAt: note.updated_at
      };
    }

    // Auto-generated Backlinks (Section 8.13):
    // 1. Unresolved mistakes referencing this topic
    const mistakes = db.prepare(`
      SELECT id, question_id, category, user_reasoning, date_logged, resolved
      FROM mistake_records 
      WHERE topic_id = ?
      ORDER BY date_logged DESC
    `).all(topicId) as any[];

    // 2. Flashcards / Codex formulas referencing this topic
    const flashcards = db.prepare(`
      SELECT id, title, next_review_date, repetitions 
      FROM revision_cards 
      WHERE topic_id = ?
    `).all(topicId) as any[];

    // 3. Question practice statistics for this topic
    const topicStat = db.prepare('SELECT * FROM topic_progress WHERE topic_id = ?').get(topicId) as any;

    res.json({
      success: true,
      data: note,
      backlinks: {
        mistakes,
        flashcards,
        progress: topicStat || { practiced_count: 0, correct_count: 0, mastery_score: 0 }
      }
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// PUT /api/notes/:topicId - Save/update structured note
noteRouter.post('/:topicId', saveNoteHandler);
noteRouter.put('/:topicId', saveNoteHandler);

function saveNoteHandler(req: any, res: any) {
  try {
    const { topicId } = req.params;
    const {
      topicTitle,
      paper,
      definitionSummary = '',
      keyFormulas = '',
      workedExample = '',
      commonMistakes = '',
      examTraps = '',
      crossLinks = '',
      customNotes = ''
    } = req.body;

    const node = db.prepare('SELECT topic, paper FROM syllabus_nodes WHERE id = ?').get(topicId) as any;
    const finalTitle = topicTitle || node?.topic || 'Topic Note';
    const finalPaper = paper || node?.paper || 'RA';
    const now = new Date().toISOString();

    db.prepare(`
      INSERT INTO user_notes 
      (topic_id, topic_title, paper, definition_summary, key_formulas, worked_example, common_mistakes, exam_traps, cross_links, custom_notes, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(topic_id) DO UPDATE SET
        topic_title = excluded.topic_title,
        paper = excluded.paper,
        definition_summary = excluded.definition_summary,
        key_formulas = excluded.key_formulas,
        worked_example = excluded.worked_example,
        common_mistakes = excluded.common_mistakes,
        exam_traps = excluded.exam_traps,
        cross_links = excluded.cross_links,
        custom_notes = excluded.custom_notes,
        updated_at = excluded.updated_at
    `).run(
      topicId,
      finalTitle,
      finalPaper,
      definitionSummary,
      keyFormulas,
      workedExample,
      commonMistakes,
      examTraps,
      crossLinks,
      customNotes,
      now
    );

    // Also update topic progress mark as studied
    db.prepare(`
      INSERT INTO topic_progress (topic_id, paper, studied, practiced_count, correct_count, revised_count, last_studied_date, mastery_score, confidence)
      VALUES (?, ?, 1, 0, 0, 0, ?, 10, 'Low')
      ON CONFLICT(topic_id) DO UPDATE SET studied = 1, last_studied_date = excluded.last_studied_date
    `).run(topicId, finalPaper, now);

    // Award XP for updating/writing notes (15 XP)
    db.prepare('UPDATE user_stats SET xp = xp + 15 WHERE id = "default"').run();

    res.json({
      success: true,
      message: 'Structured note saved successfully',
      updatedAt: now
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
}

// GET /api/notes/export/:paper - Export all notes for a paper as a single consolidated Markdown document
noteRouter.get('/export/:paper', (req, res) => {
  try {
    const { paper } = req.params;
    const cleanPaper = String(paper).toUpperCase();

    const notes = db.prepare('SELECT * FROM user_notes WHERE paper = ? ORDER BY topic_title ASC').all(cleanPaper) as any[];

    let markdown = `# GATE 2027 ${cleanPaper} Complete Study Compendium\n`;
    markdown += `*Generated automatically from GATE Quest 2027 Notes Workspace on ${new Date().toLocaleDateString()}*\n\n`;
    markdown += `---\n\n`;

    if (notes.length === 0) {
      markdown += `*No notes saved yet for ${cleanPaper}. Save notes in the Notes Workspace to compile your revision booklet.*\n`;
    } else {
      notes.forEach((n, idx) => {
        markdown += `## ${idx + 1}. ${n.topic_title}\n\n`;
        markdown += `### 1. Definition & Core Concepts\n${n.definition_summary}\n\n`;
        markdown += `### 2. Must-Know Formulas (KaTeX)\n${n.key_formulas}\n\n`;
        markdown += `### 3. Worked Example\n${n.worked_example}\n\n`;
        markdown += `### 4. Common Student Pitfalls\n${n.common_mistakes}\n\n`;
        markdown += `### 5. Exam Traps & Boundary Conditions\n${n.exam_traps}\n\n`;
        markdown += `### 6. Cross-topic Overlaps\n${n.cross_links}\n\n`;
        if (n.custom_notes) {
          markdown += `### 7. Personal Revision Reminders\n${n.custom_notes}\n\n`;
        }
        markdown += `---\n\n`;
      });
    }

    res.setHeader('Content-Type', 'text/markdown');
    res.setHeader('Content-Disposition', `attachment; filename="GATE_2027_${cleanPaper}_Notes_Revision.md"`);
    res.send(markdown);
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});
