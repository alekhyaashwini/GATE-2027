import { DatabaseSync } from 'node:sqlite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { SYLLABUS_NODES } from '../src/data/syllabusData.js';
import { QUESTION_BANK } from '../src/data/questionBank.js';
import { FORMULA_CHEAT_SHEETS } from '../src/data/formulaCheatSheetsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.resolve(__dirname, '..', 'gate_quest_2027.db');

export const db = new DatabaseSync(DB_PATH);

// Enable WAL mode and foreign key constraints for performance & integrity
db.exec('PRAGMA journal_mode = WAL;');
db.exec('PRAGMA foreign_keys = ON;');

export function initDatabase() {
  db.exec(`
    -- 1. Papers
    CREATE TABLE IF NOT EXISTS papers (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      exam_date TEXT NOT NULL,
      description TEXT
    );

    -- 2. Syllabus Nodes
    CREATE TABLE IF NOT EXISTS syllabus_nodes (
      id TEXT PRIMARY KEY,
      paper TEXT NOT NULL,
      section TEXT NOT NULL,
      subject TEXT NOT NULL,
      topic TEXT NOT NULL,
      subtopics TEXT NOT NULL,
      description TEXT NOT NULL,
      prerequisites TEXT,
      overlap_tags TEXT,
      weightage TEXT NOT NULL,
      key_formulas TEXT,
      external_resources TEXT,
      order_index INTEGER DEFAULT 0
    );

    -- 3. Resources
    CREATE TABLE IF NOT EXISTS resources (
      id TEXT PRIMARY KEY,
      paper TEXT NOT NULL,
      topic_id TEXT NOT NULL,
      title TEXT NOT NULL,
      provider TEXT NOT NULL,
      url TEXT NOT NULL,
      type TEXT NOT NULL,
      last_verified TEXT,
      status TEXT DEFAULT 'active'
    );

    -- 4. Questions
    CREATE TABLE IF NOT EXISTS questions (
      id TEXT PRIMARY KEY,
      paper TEXT NOT NULL,
      subject TEXT NOT NULL,
      topic_id TEXT NOT NULL,
      topic_title TEXT NOT NULL,
      year INTEGER,
      provenance TEXT NOT NULL,
      provenance_label TEXT NOT NULL,
      original_paper TEXT,
      type TEXT NOT NULL,
      marks INTEGER NOT NULL,
      negative_marking REAL NOT NULL,
      difficulty TEXT NOT NULL,
      text TEXT NOT NULL,
      image_url TEXT,
      options TEXT,
      correct_answer TEXT NOT NULL,
      explanation TEXT NOT NULL,
      hints TEXT,
      trap_alert TEXT,
      tags TEXT,
      version INTEGER DEFAULT 1
    );

    -- 5. Question Versions
    CREATE TABLE IF NOT EXISTS question_versions (
      id TEXT PRIMARY KEY,
      question_id TEXT NOT NULL,
      version INTEGER NOT NULL,
      updated_at TEXT NOT NULL,
      changes_summary TEXT,
      previous_data TEXT
    );

    -- 6. Tests
    CREATE TABLE IF NOT EXISTS tests (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      paper TEXT NOT NULL,
      duration_minutes INTEGER NOT NULL,
      question_ids TEXT NOT NULL,
      test_type TEXT NOT NULL,
      total_marks REAL NOT NULL,
      instructions TEXT,
      created_at TEXT NOT NULL
    );

    -- 7. Test Attempts
    CREATE TABLE IF NOT EXISTS test_attempts (
      id TEXT PRIMARY KEY,
      test_id TEXT NOT NULL,
      title TEXT NOT NULL,
      paper TEXT NOT NULL,
      duration_minutes INTEGER NOT NULL,
      start_time INTEGER NOT NULL,
      completed_at INTEGER,
      is_completed INTEGER DEFAULT 0,
      score REAL DEFAULT 0,
      total_marks REAL DEFAULT 0,
      positive_marks REAL DEFAULT 0,
      negative_marks REAL DEFAULT 0,
      accuracy REAL DEFAULT 0,
      time_spent_seconds TEXT
    );

    -- 8. Attempt Answers
    CREATE TABLE IF NOT EXISTS attempt_answers (
      id TEXT PRIMARY KEY,
      attempt_id TEXT NOT NULL,
      question_id TEXT NOT NULL,
      user_response TEXT,
      is_correct INTEGER DEFAULT 0,
      marks_awarded REAL DEFAULT 0,
      time_spent_seconds INTEGER DEFAULT 0,
      is_marked_for_review INTEGER DEFAULT 0
    );

    -- 9. User Notes (Section 8.13 Structured Workspace)
    CREATE TABLE IF NOT EXISTS user_notes (
      topic_id TEXT PRIMARY KEY,
      topic_title TEXT NOT NULL,
      paper TEXT NOT NULL,
      definition_summary TEXT NOT NULL,
      key_formulas TEXT NOT NULL,
      worked_example TEXT NOT NULL,
      common_mistakes TEXT NOT NULL,
      exam_traps TEXT NOT NULL,
      cross_links TEXT NOT NULL,
      custom_notes TEXT,
      updated_at TEXT NOT NULL
    );

    -- 10. Mistake Records (Section 8.6 Mistake Notebook)
    CREATE TABLE IF NOT EXISTS mistake_records (
      id TEXT PRIMARY KEY,
      question_id TEXT NOT NULL,
      paper TEXT NOT NULL,
      topic_id TEXT NOT NULL,
      topic_title TEXT NOT NULL,
      category TEXT NOT NULL,
      user_reasoning TEXT,
      attempted_answer TEXT,
      date_logged TEXT NOT NULL,
      next_review_date TEXT NOT NULL,
      review_stage INTEGER DEFAULT 0,
      resolved INTEGER DEFAULT 0
    );

    -- 11. Revision Cards (Section 8.7 Spaced Repetition)
    CREATE TABLE IF NOT EXISTS revision_cards (
      id TEXT PRIMARY KEY,
      paper TEXT NOT NULL,
      topic_id TEXT NOT NULL,
      category TEXT NOT NULL,
      title TEXT NOT NULL,
      front_prompt TEXT NOT NULL,
      back_formula TEXT NOT NULL,
      explanation TEXT,
      exam_tip TEXT,
      last_reviewed TEXT,
      next_review_date TEXT NOT NULL,
      interval_days INTEGER DEFAULT 1,
      repetitions INTEGER DEFAULT 0,
      ease_factor REAL DEFAULT 2.5
    );

    -- 12. Achievements
    CREATE TABLE IF NOT EXISTS achievements (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      icon TEXT NOT NULL,
      category TEXT NOT NULL,
      unlocked_at TEXT,
      progress INTEGER DEFAULT 0,
      max_progress INTEGER NOT NULL,
      is_unlocked INTEGER DEFAULT 0
    );

    -- 13. Progress Events (Activity Log)
    CREATE TABLE IF NOT EXISTS progress_events (
      id TEXT PRIMARY KEY,
      timestamp TEXT NOT NULL,
      event_type TEXT NOT NULL,
      paper TEXT NOT NULL,
      topic_id TEXT,
      details TEXT,
      xp_earned INTEGER DEFAULT 0
    );

    -- 14. Exam Targets (Section 8.12 Countdown Timer)
    CREATE TABLE IF NOT EXISTS exam_targets (
      id TEXT PRIMARY KEY,
      paper TEXT NOT NULL,
      name TEXT NOT NULL,
      target_date TEXT NOT NULL,
      is_primary INTEGER DEFAULT 0,
      notes TEXT
    );

    -- 15. User Stats
    CREATE TABLE IF NOT EXISTS user_stats (
      id TEXT PRIMARY KEY,
      xp INTEGER DEFAULT 0,
      level INTEGER DEFAULT 1,
      streak_days INTEGER DEFAULT 0,
      longest_streak INTEGER DEFAULT 0,
      last_active_date TEXT,
      total_questions_solved INTEGER DEFAULT 0,
      total_mocks_completed INTEGER DEFAULT 0,
      accuracy_rate REAL DEFAULT 0,
      streak_freezes INTEGER DEFAULT 2,
      study_history TEXT
    );

    -- 16. Topic Progress
    CREATE TABLE IF NOT EXISTS topic_progress (
      topic_id TEXT PRIMARY KEY,
      paper TEXT NOT NULL,
      studied INTEGER DEFAULT 0,
      practiced_count INTEGER DEFAULT 0,
      correct_count INTEGER DEFAULT 0,
      revised_count INTEGER DEFAULT 0,
      last_studied_date TEXT,
      mastery_score INTEGER DEFAULT 0,
      confidence TEXT DEFAULT 'Low'
    );

    -- 17. Bookmarks
    CREATE TABLE IF NOT EXISTS bookmarks (
      question_id TEXT PRIMARY KEY,
      paper TEXT NOT NULL,
      date_bookmarked TEXT NOT NULL
    );

    -- Indices for fast lookups & filters
    CREATE INDEX IF NOT EXISTS idx_syllabus_paper ON syllabus_nodes(paper);
    CREATE INDEX IF NOT EXISTS idx_questions_paper_topic ON questions(paper, topic_id);
    CREATE INDEX IF NOT EXISTS idx_mistakes_paper_resolved ON mistake_records(paper, resolved);
    CREATE INDEX IF NOT EXISTS idx_revision_next_date ON revision_cards(next_review_date);
    CREATE INDEX IF NOT EXISTS idx_attempt_answers_attempt ON attempt_answers(attempt_id);
  `);

  seedDefaultData();
}

function seedDefaultData() {
  // 1. Papers
  const checkPapers = db.prepare('SELECT COUNT(*) as count FROM papers').get() as { count: number };
  if (checkPapers.count === 0) {
    const insertPaper = db.prepare('INSERT INTO papers (id, name, exam_date, description) VALUES (?, ?, ?, ?)');
    insertPaper.run('RA', 'Robotics & Automation', '2027-02-06T09:00:00Z', 'GATE 2027 paper on Robotics, Mechatronics, Kinematics, Control, and Automation.');
    insertPaper.run('DA', 'Data Science & Artificial Intelligence', '2027-02-13T09:00:00Z', 'GATE 2027 paper on Probability, Linear Algebra, Machine Learning, AI, and DBMS.');
  }

  // 2. Exam Targets (8.12)
  const checkTargets = db.prepare('SELECT COUNT(*) as count FROM exam_targets').get() as { count: number };
  if (checkTargets.count === 0) {
    const insertTarget = db.prepare('INSERT INTO exam_targets (id, paper, name, target_date, is_primary, notes) VALUES (?, ?, ?, ?, ?, ?)');
    insertTarget.run('target-ra-main', 'RA', 'GATE 2027 Weekend 1 (Primary Target)', '2027-02-06T09:00:00Z', 1, 'Official opening weekend for GATE 2027.');
    insertTarget.run('target-da-main', 'DA', 'GATE 2027 Weekend 2', '2027-02-13T09:00:00Z', 0, 'Second exam weekend.');
    insertTarget.run('target-mock-next', 'RA', 'Weekly Sectional Mock', new Date(Date.now() + 6 * 86400000).toISOString(), 0, 'Target date for weekly practice mock.');
  }

  // 3. Syllabus Nodes
  const checkSyllabus = db.prepare('SELECT COUNT(*) as count FROM syllabus_nodes').get() as { count: number };
  if (checkSyllabus.count === 0) {
    const insertSyllabus = db.prepare(`
      INSERT INTO syllabus_nodes 
      (id, paper, section, subject, topic, subtopics, description, prerequisites, overlap_tags, weightage, key_formulas, external_resources, order_index)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    SYLLABUS_NODES.forEach((node, idx) => {
      insertSyllabus.run(
        node.id,
        node.paper,
        node.section,
        node.subject,
        node.topic,
        JSON.stringify(node.subtopics || []),
        node.description || '',
        JSON.stringify(node.prerequisites || []),
        JSON.stringify(node.overlapTags || []),
        node.weightage || 'Medium',
        JSON.stringify(node.keyFormulas || []),
        JSON.stringify(node.externalResources || []),
        idx
      );

      // Also seed external resources table
      if (node.externalResources && node.externalResources.length > 0) {
        const insertRes = db.prepare(`
          INSERT OR IGNORE INTO resources (id, paper, topic_id, title, provider, url, type, last_verified, status)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `);
        node.externalResources.forEach((res, rIdx) => {
          insertRes.run(
            `res-${node.id}-${rIdx}`,
            node.paper,
            node.id,
            res.title,
            res.provider,
            res.url,
            res.type,
            new Date().toISOString().split('T')[0],
            'active'
          );
        });
      }
    });
  }

  // Refresh latest external resources & YouTube lectures for all syllabus nodes
  try {
    const updateSyllabusRes = db.prepare('UPDATE syllabus_nodes SET external_resources = ? WHERE id = ?');
    const upsertRes = db.prepare(`
      INSERT INTO resources (id, paper, topic_id, title, provider, url, type, last_verified, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'active')
      ON CONFLICT(id) DO UPDATE SET title = excluded.title, url = excluded.url, provider = excluded.provider, type = excluded.type
    `);

    SYLLABUS_NODES.forEach(node => {
      if (node.externalResources && node.externalResources.length > 0) {
        updateSyllabusRes.run(JSON.stringify(node.externalResources), node.id);
        node.externalResources.forEach((res, rIdx) => {
          upsertRes.run(
            `res-${node.id}-${rIdx}`,
            node.paper,
            node.id,
            res.title,
            res.provider,
            res.url,
            res.type,
            new Date().toISOString().split('T')[0]
          );
        });
      }
    });
  } catch (syncErr) {
    console.warn('Resource sync notice:', syncErr);
  }

  // 4. Questions (Sync full bank with 40-50+ questions per topic)
  const checkQuestions = db.prepare('SELECT COUNT(*) as count FROM questions').get() as { count: number };
  if (checkQuestions.count < QUESTION_BANK.length) {
    const upsertQuestion = db.prepare(`
      INSERT INTO questions 
      (id, paper, subject, topic_id, topic_title, year, provenance, provenance_label, original_paper, type, marks, negative_marking, difficulty, text, image_url, options, correct_answer, explanation, hints, trap_alert, tags, version)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)
      ON CONFLICT(id) DO UPDATE SET
        paper = excluded.paper,
        subject = excluded.subject,
        topic_id = excluded.topic_id,
        topic_title = excluded.topic_title,
        text = excluded.text,
        options = excluded.options,
        correct_answer = excluded.correct_answer,
        explanation = excluded.explanation,
        hints = excluded.hints,
        trap_alert = excluded.trap_alert,
        tags = excluded.tags
    `);

    QUESTION_BANK.forEach(q => {
      upsertQuestion.run(
        q.id,
        q.paper,
        q.subject,
        q.topicId,
        q.topicTitle,
        q.year || null,
        q.provenance,
        q.provenanceLabel,
        q.originalPaper || null,
        q.type,
        q.marks,
        q.negativeMarking,
        q.difficulty,
        q.text,
        q.imageUrl || null,
        q.options ? JSON.stringify(q.options) : null,
        typeof q.correctAnswer === 'object' ? JSON.stringify(q.correctAnswer) : String(q.correctAnswer),
        q.explanation,
        JSON.stringify(q.hints || []),
        q.trapAlert || null,
        JSON.stringify(q.tags || [])
      );
    });
    console.log(`✅ Synced ${QUESTION_BANK.length} questions into SQLite database.`);
  }

  // 5. Revision Cards (Codex formulas)
  const checkCards = db.prepare('SELECT COUNT(*) as count FROM revision_cards').get() as { count: number };
  if (checkCards.count === 0) {
    const insertCard = db.prepare(`
      INSERT INTO revision_cards 
      (id, paper, topic_id, category, title, front_prompt, back_formula, explanation, exam_tip, next_review_date, interval_days, repetitions, ease_factor)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 0, 2.5)
    `);

    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

    FORMULA_CHEAT_SHEETS.forEach(c => {
      insertCard.run(
        c.id,
        c.paper === 'COMMON' ? 'RA' : c.paper,
        c.category.toLowerCase().replace(/[^a-z0-9]/g, '-'),
        c.category,
        c.title,
        `What is the formula and key relation for **${c.title}**?`,
        c.formulaLatex,
        c.description,
        c.examTip,
        tomorrow
      );
    });
  }

  // 6. Predefined Tests (Section 8.5)
  const checkTests = db.prepare('SELECT COUNT(*) as count FROM tests').get() as { count: number };
  if (checkTests.count === 0) {
    const insertTest = db.prepare(`
      INSERT INTO tests (id, title, paper, duration_minutes, question_ids, test_type, total_marks, instructions, created_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const raQIds = QUESTION_BANK.filter(q => q.paper === 'RA').map(q => q.id);
    const daQIds = QUESTION_BANK.filter(q => q.paper === 'DA').map(q => q.id);

    insertTest.run(
      'mock-ra-sectional-01',
      'GATE RA: Spatial Kinematics & Robotics Sectional Test',
      'RA',
      30,
      JSON.stringify(raQIds),
      'sectional',
      raQIds.length * 2,
      'Standard GATE marking: 1-mark & 2-mark MCQ negative marking applies (-0.33 / -0.66). NAT has no negative marks.',
      new Date().toISOString()
    );

    insertTest.run(
      'mock-da-sectional-01',
      'GATE DA: Machine Learning & Linear Algebra Diagnostic Mock',
      'DA',
      30,
      JSON.stringify(daQIds),
      'sectional',
      daQIds.length * 2,
      'Standard GATE marking rules. Maintain 3 minutes per question pace.',
      new Date().toISOString()
    );
  }

  // 7. Achievements
  const checkAchievements = db.prepare('SELECT COUNT(*) as count FROM achievements').get() as { count: number };
  if (checkAchievements.count === 0) {
    const insertAch = db.prepare(`
      INSERT INTO achievements (id, title, description, icon, category, progress, max_progress, is_unlocked)
      VALUES (?, ?, ?, ?, ?, 0, ?, 0)
    `);

    insertAch.run('first-step', 'First Frontier', 'Master your first syllabus topic in RA or DA', 'Compass', 'mastery', 1);
    insertAch.run('practice-streak-3', 'Dedication Spark', 'Maintain a 3-day study streak', 'Flame', 'streak', 3);
    insertAch.run('solve-10-pyqs', 'PYQ Hunter', 'Correctly solve 10 official or overlap PYQs', 'Crosshair', 'practice', 10);
    insertAch.run('mistake-master', 'Error Hunter', 'Resolve 5 mistakes from your mistake notebook', 'CheckCircle2', 'revision', 5);
    insertAch.run('mock-champion', 'Exam Arena', 'Complete your first full-length or sectional timed mock', 'Trophy', 'mock', 1);
  }

  // 8. Default User Stats
  const checkStats = db.prepare('SELECT COUNT(*) as count FROM user_stats').get() as { count: number };
  if (checkStats.count === 0) {
    const insertStats = db.prepare(`
      INSERT INTO user_stats (id, xp, level, streak_days, longest_streak, last_active_date, total_questions_solved, total_mocks_completed, accuracy_rate, streak_freezes, study_history)
      VALUES ('default', 150, 1, 1, 1, ?, 0, 0, 0, 2, '{}')
    `);
    insertStats.run(new Date().toISOString().split('T')[0]);
  }
}
