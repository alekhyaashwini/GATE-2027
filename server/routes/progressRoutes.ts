import { Router } from 'express';
import { db } from '../db.js';

export const progressRouter = Router();

// GET /api/progress/dashboard - Comprehensive Analytics Dashboard (Section 8.10)
progressRouter.get('/dashboard', (req, res) => {
  try {
    const { paper = 'RA' } = req.query;
    const cleanPaper = String(paper).toUpperCase();

    // 1. User stats
    const stats = db.prepare('SELECT * FROM user_stats WHERE id = "default"').get() as any;

    // 2. Syllabus coverage
    const totalNodes = db.prepare('SELECT COUNT(*) as count FROM syllabus_nodes WHERE paper = ?').get(cleanPaper) as any;
    const studiedNodes = db.prepare('SELECT COUNT(*) as count FROM topic_progress WHERE paper = ? AND studied = 1').get(cleanPaper) as any;
    const masteredNodes = db.prepare('SELECT COUNT(*) as count FROM topic_progress WHERE paper = ? AND mastery_score >= 80').get(cleanPaper) as any;

    const totalCount = totalNodes?.count || 1;
    const studiedCount = studiedNodes?.count || 0;
    const masteredCount = masteredNodes?.count || 0;

    const syllabusCoveragePercent = Math.round((studiedCount / totalCount) * 100);
    const masteryPercent = Math.round((masteredCount / totalCount) * 100);

    // 3. Weak topics / high-risk nodes (practiced with low mastery or high mistakes)
    const weakTopics = db.prepare(`
      SELECT tp.topic_id, sn.topic as topic_title, sn.subject, tp.mastery_score, tp.practiced_count, tp.correct_count, tp.confidence
      FROM topic_progress tp
      JOIN syllabus_nodes sn ON tp.topic_id = sn.id
      WHERE tp.paper = ? AND tp.practiced_count > 0 AND tp.mastery_score < 70
      ORDER BY tp.mastery_score ASC, tp.practiced_count DESC
      LIMIT 5
    `).all(cleanPaper) as any[];

    // 4. Topic mastery heatmap data
    const topicProgressRows = db.prepare(`
      SELECT sn.id, sn.topic, sn.subject, sn.weightage, 
             COALESCE(tp.mastery_score, 0) as mastery_score,
             COALESCE(tp.studied, 0) as studied,
             COALESCE(tp.practiced_count, 0) as practiced_count,
             COALESCE(tp.correct_count, 0) as correct_count,
             COALESCE(tp.confidence, 'Low') as confidence
      FROM syllabus_nodes sn
      LEFT JOIN topic_progress tp ON sn.id = tp.topic_id
      WHERE sn.paper = ?
      ORDER BY sn.order_index ASC
    `).all(cleanPaper) as any[];

    // 5. Recent test mock scores
    const recentTests = db.prepare(`
      SELECT id, title, score, total_marks, accuracy, start_time
      FROM test_attempts
      WHERE paper = ? AND is_completed = 1
      ORDER BY start_time DESC
      LIMIT 5
    `).all(cleanPaper) as any[];

    // 6. Readiness estimate formula (Section 8.10)
    // Formula: 40% syllabus coverage + 40% mastery % + 20% mock test accuracy
    let mockAccuracyAvg = 0;
    if (recentTests.length > 0) {
      const sumAcc = recentTests.reduce((acc, t) => acc + (t.accuracy || 0), 0);
      mockAccuracyAvg = sumAcc / recentTests.length;
    }
    const readinessScore = Math.min(100, Math.round(
      (syllabusCoveragePercent * 0.4) +
      (masteryPercent * 0.4) +
      (mockAccuracyAvg * 0.2)
    ));

    res.json({
      success: true,
      paper: cleanPaper,
      userStats: {
        xp: stats.xp,
        level: stats.level,
        streakDays: stats.streak_days,
        longestStreak: stats.longest_streak,
        streakFreezes: stats.streak_freezes,
        totalQuestionsSolved: stats.total_questions_solved,
        totalMocksCompleted: stats.total_mocks_completed,
        studyHistory: stats.study_history ? JSON.parse(stats.study_history) : {}
      },
      coverage: {
        totalTopics: totalCount,
        studiedTopics: studiedCount,
        masteredTopics: masteredCount,
        coveragePercent: syllabusCoveragePercent,
        masteryPercent: masteryPercent
      },
      readiness: {
        score: readinessScore,
        label: readinessScore >= 75 ? 'Exam Ready' : (readinessScore >= 50 ? 'Progressing Well' : 'Building Foundations'),
        disclaimer: 'Readiness estimate is a model projection based on syllabus coverage and practice accuracy, not a guarantee of GATE percentile.'
      },
      weakTopics,
      topicHeatmap: topicProgressRows,
      recentTests
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/progress/topic - Mark topic studied, practiced, or revised
progressRouter.post('/topic', (req, res) => {
  try {
    const { topicId, studied, confidence } = req.body;
    if (!topicId) {
      return res.status(400).json({ success: false, error: 'topicId required' });
    }

    const node = db.prepare('SELECT paper FROM syllabus_nodes WHERE id = ?').get(topicId) as any;
    if (!node) {
      return res.status(404).json({ success: false, error: 'Topic not found' });
    }

    const now = new Date().toISOString();
    db.prepare(`
      INSERT INTO topic_progress (topic_id, paper, studied, practiced_count, correct_count, revised_count, last_studied_date, mastery_score, confidence)
      VALUES (?, ?, ?, 0, 0, 0, ?, 10, ?)
      ON CONFLICT(topic_id) DO UPDATE SET
        studied = COALESCE(?, studied),
        confidence = COALESCE(?, confidence),
        last_studied_date = excluded.last_studied_date
    `).run(
      topicId,
      node.paper,
      studied !== undefined ? (studied ? 1 : 0) : 1,
      now,
      confidence || 'Low',
      studied !== undefined ? (studied ? 1 : 0) : null,
      confidence || null
    );

    res.json({ success: true, message: 'Topic progress updated' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/progress/activity - Record daily activity for streak maintenance
progressRouter.post('/activity', (req, res) => {
  try {
    const { activityType = 'study' } = req.body; // 'study' | 'practice' | 'note' | 'mock'
    const today = new Date().toISOString().split('T')[0];

    const stats = db.prepare('SELECT * FROM user_stats WHERE id = "default"').get() as any;
    let history = stats.study_history ? JSON.parse(stats.study_history) : {};

    if (!history[today]) {
      history[today] = { questionsSolved: 0, topicsStudied: 0, notesRevised: 0 };
    }

    if (activityType === 'practice') history[today].questionsSolved += 1;
    if (activityType === 'study') history[today].topicsStudied += 1;
    if (activityType === 'note') history[today].notesRevised += 1;

    let newStreak = stats.streak_days;
    let newLongest = stats.longest_streak;

    if (stats.last_active_date !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      if (stats.last_active_date === yesterday) {
        newStreak += 1;
      } else if (!stats.last_active_date) {
        newStreak = 1;
      } else {
        // Missed a day
        if (stats.streak_freezes > 0) {
          // Use streak freeze
          db.prepare('UPDATE user_stats SET streak_freezes = streak_freezes - 1 WHERE id = "default"').run();
          newStreak += 1;
        } else {
          newStreak = 1;
        }
      }
      if (newStreak > newLongest) newLongest = newStreak;
    }

    db.prepare(`
      UPDATE user_stats 
      SET last_active_date = ?, streak_days = ?, longest_streak = ?, study_history = ?
      WHERE id = "default"
    `).run(today, newStreak, newLongest, JSON.stringify(history));

    res.json({
      success: true,
      streakDays: newStreak,
      longestStreak: newLongest,
      lastActiveDate: today
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// POST /api/progress/xp - Award XP & calculate level-ups
progressRouter.post('/xp', (req, res) => {
  try {
    const { amount, reason } = req.body;
    if (!amount || typeof amount !== 'number') {
      return res.status(400).json({ success: false, error: 'Valid XP amount required' });
    }

    const stats = db.prepare('SELECT xp, level FROM user_stats WHERE id = "default"').get() as any;
    const newXp = stats.xp + amount;
    // Simple level curve: Level = 1 + floor(XP / 200)
    const newLevel = 1 + Math.floor(newXp / 200);

    db.prepare('UPDATE user_stats SET xp = ?, level = ? WHERE id = "default"').run(newXp, newLevel);

    // Log progress event
    const eventId = `event-${Date.now()}`;
    db.prepare(`
      INSERT INTO progress_events (id, timestamp, event_type, paper, details, xp_earned)
      VALUES (?, ?, 'xp_reward', 'ALL', ?, ?)
    `).run(eventId, new Date().toISOString(), reason || 'Activity reward', amount);

    res.json({
      success: true,
      xp: newXp,
      level: newLevel,
      xpAdded: amount,
      levelUp: newLevel > stats.level
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});
