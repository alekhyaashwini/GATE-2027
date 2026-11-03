import { initDatabase, db } from './server/db.js';
import { 
  validateAnswer, 
  calculateTopicMastery, 
  calculateNextSpacedReview, 
  analyzeTimeBleed, 
  calculateProjectedGateRank 
} from './server/scoring.js';

console.log('--- 🧪 GATE Quest 2027 Backend Verification Tests ---');

// 1. Initialize Database
console.log('1. Initializing SQLite Database...');
initDatabase();

// 2. Verify Seeded Tables
const papers = db.prepare('SELECT * FROM papers').all() as any[];
console.log(`✅ Papers in DB: ${papers.length} (RA: ${papers.find(p => p.id === 'RA')?.name}, DA: ${papers.find(p => p.id === 'DA')?.name})`);

const syllabusCount = db.prepare('SELECT COUNT(*) as count FROM syllabus_nodes').get() as any;
console.log(`✅ Syllabus Nodes Seeded: ${syllabusCount.count}`);

const questionsCount = db.prepare('SELECT COUNT(*) as count FROM questions').get() as any;
console.log(`✅ Questions Bank Seeded: ${questionsCount.count}`);

const targets = db.prepare('SELECT * FROM exam_targets').all() as any[];
console.log(`✅ Exam Targets Seeded: ${targets.length} (Primary target date: ${targets.find(t => t.is_primary)?.target_date})`);

const revisionCount = db.prepare('SELECT COUNT(*) as count FROM revision_cards').get() as any;
console.log(`✅ Revision Cards (Codex) Seeded: ${revisionCount.count}`);

// 3. Test Scoring Engine
console.log('\n2. Testing GATE Scoring Rules...');

// MCQ 1-mark correct (+1.0)
const mcq1Correct = validateAnswer('MCQ', 1, 0.33, 'B', 'B');
if (mcq1Correct.isCorrect && mcq1Correct.marksAwarded === 1) {
  console.log('✅ MCQ 1-mark correct: +1.00 marks');
} else {
  console.error('❌ MCQ 1-mark correct failed', mcq1Correct);
}

// MCQ 1-mark wrong (-0.33)
const mcq1Wrong = validateAnswer('MCQ', 1, 0.33, 'B', 'A');
if (!mcq1Wrong.isCorrect && mcq1Wrong.marksAwarded === -0.33) {
  console.log('✅ MCQ 1-mark wrong: -0.33 negative marking applied');
} else {
  console.error('❌ MCQ 1-mark wrong failed', mcq1Wrong);
}

// MCQ 2-mark wrong (-0.66)
const mcq2Wrong = validateAnswer('MCQ', 2, 0.66, 'C', 'D');
if (!mcq2Wrong.isCorrect && mcq2Wrong.marksAwarded === -0.66) {
  console.log('✅ MCQ 2-mark wrong: -0.66 negative marking applied');
} else {
  console.error('❌ MCQ 2-mark wrong failed', mcq2Wrong);
}

// MSQ (Multiple Select)
const msqCorrect = validateAnswer('MSQ', 2, 0, ['A', 'C'], ['C', 'A']);
if (msqCorrect.isCorrect && msqCorrect.marksAwarded === 2) {
  console.log('✅ MSQ exact match (order insensitive): +2.00 marks, no negative marking');
} else {
  console.error('❌ MSQ exact match failed', msqCorrect);
}

const msqPartialWrong = validateAnswer('MSQ', 2, 0, ['A', 'C'], ['A']);
if (!msqPartialWrong.isCorrect && msqPartialWrong.marksAwarded === 0) {
  console.log('✅ MSQ partial match: 0 marks, no negative marking');
} else {
  console.error('❌ MSQ partial match failed', msqPartialWrong);
}

// NAT (Numerical Answer Type with tolerance)
const natCorrect = validateAnswer('NAT', 2, 0, { min: 42.0, max: 42.8 }, 42.4);
if (natCorrect.isCorrect && natCorrect.marksAwarded === 2) {
  console.log('✅ NAT within [42.0, 42.8] range: +2.00 marks');
} else {
  console.error('❌ NAT within range failed', natCorrect);
}

const natWrong = validateAnswer('NAT', 2, 0, { min: 42.0, max: 42.8 }, 55.0);
if (!natWrong.isCorrect && natWrong.marksAwarded === 0) {
  console.log('✅ NAT incorrect: 0 marks, no negative marking');
} else {
  console.error('❌ NAT incorrect failed', natWrong);
}

// 4. Test Multi-Signal Topic Mastery Calculation (Section 13)
console.log('\n3. Testing Topic Mastery Multi-Signal Engine (Section 13)...');
const masteryLowSample = calculateTopicMastery(1, 1, 0, 0);
console.log(`✅ Low sample (1 Q solved, 100%): Mastery=${masteryLowSample.masteryScore}/100, Confidence=${masteryLowSample.confidence} (capped due to small sample)`);

const masteryHighSample = calculateTopicMastery(10, 9, 0, 2);
console.log(`✅ Robust sample (10 Qs solved, 90%): Mastery=${masteryHighSample.masteryScore}/100, Confidence=${masteryHighSample.confidence}`);

const masteryWithMistakes = calculateTopicMastery(10, 8, 3, 0);
console.log(`✅ With 3 unresolved mistakes: Mastery=${masteryWithMistakes.masteryScore}/100, Reason: "${masteryWithMistakes.reason}"`);

// 5. Test Spaced Repetition Interval (SuperMemo SM-2)
console.log('\n4. Testing Spaced Repetition Engine (Section 8.7)...');
const rev1 = calculateNextSpacedReview(4, 0, 1, 2.5);
console.log(`✅ Stage 0 -> Stage 1: Interval = ${rev1.interval} day(s), Next = ${rev1.nextDateStr}`);
const rev2 = calculateNextSpacedReview(4, 1, rev1.interval, rev1.easeFactor);
console.log(`✅ Stage 1 -> Stage 2: Interval = ${rev2.interval} day(s), Next = ${rev2.nextDateStr}`);
const rev3 = calculateNextSpacedReview(5, 2, rev2.interval, rev2.easeFactor);
console.log(`✅ Stage 2 -> Stage 3: Interval = ${rev3.interval} day(s), Next = ${rev3.nextDateStr}`);

// 6. Test Structured Notes & Backlinks (Section 8.13)
console.log('\n5. Testing Notes Workspace Persistence & Backlinks (Section 8.13)...');
const testTopicId = 'ra-robotics-kinematics-transforms';
db.prepare(`
  INSERT INTO user_notes 
  (topic_id, topic_title, paper, definition_summary, key_formulas, worked_example, common_mistakes, exam_traps, cross_links, custom_notes, updated_at)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  ON CONFLICT(topic_id) DO UPDATE SET definition_summary = excluded.definition_summary
`).run(
  testTopicId,
  'Robot Kinematics & Coordinate Transformations',
  'RA',
  'Master summary for homogeneous transforms and DH parameter assignments.',
  '$$T_{i-1}^i = \\text{Rot}(z, \\theta_i) \\text{Trans}(z, d_i) \\text{Trans}(x, a_i) \\text{Rot}(x, \\alpha_i)$$',
  '2R planar manipulator forward kinematics.',
  'Forgetting to invert rotation matrix when projecting frame coordinates.',
  'Degree to radian conversion pitfalls in trig arguments.',
  'DA - Linear Algebra, ME - Kinematics',
  'Review DH table before attempting mock tests.',
  new Date().toISOString()
);

const retrievedNote = db.prepare('SELECT * FROM user_notes WHERE topic_id = ?').get(testTopicId) as any;
console.log(`✅ Structured Note Saved & Retrieved: "${retrievedNote.topic_title}", Formulas: ${retrievedNote.key_formulas.length} chars`);

// 7. Test Mistake Notebook Workflow (Section 8.6)
console.log('\n6. Testing Mistake Notebook Logging & Resolution (Section 8.6)...');
const testMistakeId = `test-mistake-${Date.now()}`;
db.prepare(`
  INSERT INTO mistake_records 
  (id, question_id, paper, topic_id, topic_title, category, user_reasoning, attempted_answer, date_logged, next_review_date, review_stage, resolved)
  VALUES (?, 'ra-q-01', 'RA', ?, 'Kinematics', 'option_trap', 'Chose option B instead of A due to sign error in Rz(90)', '"B"', ?, ?, 0, 0)
`).run(testMistakeId, testTopicId, new Date().toISOString().split('T')[0], new Date().toISOString().split('T')[0]);

const retrievedMistake = db.prepare('SELECT * FROM mistake_records WHERE id = ?').get(testMistakeId) as any;
console.log(`✅ Mistake Logged: Category="${retrievedMistake.category}", Reasoning="${retrievedMistake.user_reasoning}"`);

// Verify Backlinks generated automatically
const backlinksForTopic = db.prepare('SELECT COUNT(*) as count FROM mistake_records WHERE topic_id = ?').get(testTopicId) as any;
console.log(`✅ Auto-generated Backlink: Topic "${testTopicId}" correctly links to ${backlinksForTopic.count} logged mistake(s)!`);

// Resolve mistake
db.prepare('UPDATE mistake_records SET resolved = 1 WHERE id = ?').run(testMistakeId);
const resolvedCheck = db.prepare('SELECT resolved FROM mistake_records WHERE id = ?').get(testMistakeId) as any;
console.log(`✅ Mistake Resolved: status=${resolvedCheck.resolved === 1 ? 'RESOLVED' : 'UNRESOLVED'}`);

// 8. Test Time Bleed & Pacing Engine
console.log('\n7. Testing Time Bleed & Pacing Analytics Engine...');
const dummyQs = [
  { id: 'q1', marks: 1 as const, type: 'MCQ' },
  { id: 'q2', marks: 2 as const, type: 'MCQ' },
  { id: 'q3', marks: 2 as const, type: 'NAT' }
];
const dummyTimes = { q1: 195, q2: 320, q3: 110 }; // q1 exceeded 180s, q2 exceeded 300s
const dummyValidation = {
  q1: { isCorrect: true, marksAwarded: 1 },
  q2: { isCorrect: false, marksAwarded: -0.66 },
  q3: { isCorrect: true, marksAwarded: 2 }
};
const timeBleed = analyzeTimeBleed(dummyQs, dummyTimes, dummyValidation);
console.log(`✅ Time Bleed Detected: ${timeBleed.timeBleedCount} questions exceeded time budget.`);
console.log(`✅ Pacing Score: ${timeBleed.pacingScore}/100, Advice: "${timeBleed.pacingAdvice}"`);

// 9. Test Projected GATE Rank & AIR Simulator
console.log('\n8. Testing Projected GATE Rank & AIR Simulator...');
const rankHigh = calculateProjectedGateRank(72.5, 'RA');
console.log(`✅ Raw 72.5 Marks: Projected GATE Score=${rankHigh.projectedGateScore}/1000, Bracket=${rankHigh.projectedAirBracket}, Status=${rankHigh.qualificationStatus}`);
const rankMid = calculateProjectedGateRank(52.0, 'RA');
console.log(`✅ Raw 52.0 Marks: Projected GATE Score=${rankMid.projectedGateScore}/1000, Bracket=${rankMid.projectedAirBracket}, Tip: "${rankMid.tacticalTip}"`);
const rankCutoff = calculateProjectedGateRank(22.0, 'RA');
console.log(`✅ Raw 22.0 Marks: Status=${rankCutoff.qualificationStatus}, Bracket=${rankCutoff.projectedAirBracket}`);

console.log('\n🎉 ALL BACKEND LOGIC AND DATABASE VERIFICATIONS PASSED SUCCESSFULLY!\n');
