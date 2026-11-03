import { Router } from 'express';
import { db } from '../db.js';

export const targetRouter = Router();

// Calculate countdown details and milestone status
function calculateCountdown(targetDateStr: string) {
  const targetTime = new Date(targetDateStr).getTime();
  const nowTime = Date.now();
  const diffMs = targetTime - nowTime;

  if (diffMs <= 0) {
    return {
      daysRemaining: 0,
      hoursRemaining: 0,
      minutesRemaining: 0,
      secondsRemaining: 0,
      isFinalWeek: false,
      isPassed: true,
      currentMilestone: null
    };
  }

  const daysRemaining = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesRemaining = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const secondsRemaining = Math.floor((diffMs % (1000 * 60)) / 1000);

  const isFinalWeek = daysRemaining <= 7;

  // Milestone checkpoints (120, 90, 60, 30, 14, 7, 1)
  let currentMilestone = null;
  if (daysRemaining <= 1) {
    currentMilestone = { checkpoint: 1, message: 'Final 24 Hours: Formula recall only. Rest well and verify exam center details.' };
  } else if (daysRemaining <= 7) {
    currentMilestone = { checkpoint: 7, message: 'Final Week Checkpoint: Consolidate your Notes Workspace and avoid starting unfamiliar topics.' };
  } else if (daysRemaining <= 14) {
    currentMilestone = { checkpoint: 14, message: 'T-14 Days: High-yield revision sprint. Resolve remaining items in Mistake Notebook.' };
  } else if (daysRemaining <= 30) {
    currentMilestone = { checkpoint: 30, message: 'T-30 Days: Full mock test phase. Practice strictly under 3-hour exam timing.' };
  } else if (daysRemaining <= 60) {
    currentMilestone = { checkpoint: 60, message: 'T-60 Days: Core syllabus closure. Ensure all High-weightage topics are practiced.' };
  } else if (daysRemaining <= 90) {
    currentMilestone = { checkpoint: 90, message: 'T-90 Days: Mid-preparation audit. Target weak topics identified in your dashboard.' };
  } else if (daysRemaining <= 120) {
    currentMilestone = { checkpoint: 120, message: 'T-120 Days: Establish consistent daily problem-solving routine.' };
  }

  return {
    daysRemaining,
    hoursRemaining,
    minutesRemaining,
    secondsRemaining,
    isFinalWeek,
    isPassed: false,
    currentMilestone
  };
}

// GET /api/targets - Get all exam targets with live countdown metrics (Section 8.12)
targetRouter.get('/', (req, res) => {
  try {
    const targets = db.prepare('SELECT * FROM exam_targets ORDER BY is_primary DESC, target_date ASC').all() as any[];

    const enriched = targets.map(t => {
      const countdown = calculateCountdown(t.target_date);
      return {
        id: t.id,
        paper: t.paper,
        name: t.name,
        targetDate: t.target_date,
        isPrimary: Boolean(t.is_primary),
        notes: t.notes,
        countdown
      };
    });

    res.json({ success: true, count: enriched.length, data: enriched });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// PUT /api/targets/:id - Update target date or session shift
targetRouter.put('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { targetDate, name, notes } = req.body;

    if (!targetDate) {
      return res.status(400).json({ success: false, error: 'targetDate required' });
    }

    db.prepare(`
      UPDATE exam_targets 
      SET target_date = ?,
          name = COALESCE(?, name),
          notes = COALESCE(?, notes)
      WHERE id = ?
    `).run(targetDate, name || null, notes || null, id);

    const updated = db.prepare('SELECT * FROM exam_targets WHERE id = ?').get(id) as any;
    const countdown = calculateCountdown(updated.target_date);

    res.json({
      success: true,
      message: 'Exam target updated',
      target: {
        ...updated,
        isPrimary: Boolean(updated.is_primary),
        countdown
      }
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});
