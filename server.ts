import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

import { initDatabase } from './server/db.js';
import { syllabusRouter } from './server/routes/syllabusRoutes.js';
import { questionRouter } from './server/routes/questionRoutes.js';
import { testRouter } from './server/routes/testRoutes.js';
import { noteRouter } from './server/routes/noteRoutes.js';
import { mistakeRouter } from './server/routes/mistakeRoutes.js';
import { revisionRouter } from './server/routes/revisionRoutes.js';
import { resourceRouter } from './server/routes/resourceRoutes.js';
import { progressRouter } from './server/routes/progressRoutes.js';
import { targetRouter } from './server/routes/targetRoutes.js';
import { backupRouter } from './server/routes/backupRoutes.js';
import { syncRouter } from './server/routes/syncRoutes.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize SQLite Database schema & seeds
try {
  initDatabase();
  console.log('✅ SQLite Database initialized successfully at gate_quest_2027.db');
} catch (dbErr) {
  console.error('❌ Failed to initialize SQLite database:', dbErr);
}

// Mount REST API Routers
app.use('/api/syllabus', syllabusRouter);
app.use('/api/questions', questionRouter);
app.use('/api/tests', testRouter);
app.use('/api/notes', noteRouter);
app.use('/api/mistakes', mistakeRouter);
app.use('/api/revision', revisionRouter);
app.use('/api/resources', resourceRouter);
app.use('/api/progress', progressRouter);
app.use('/api/targets', targetRouter);
app.use('/api/backup', backupRouter);
app.use('/api/sync', syncRouter);

// Initialize Gemini if API key is present
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  try {
    aiClient = new GoogleGenAI({ apiKey });
  } catch (err) {
    console.error('Failed to initialize GoogleGenAI client:', err);
  }
}

// AI Question Coach API
app.post('/api/ai/coach', async (req, res) => {
  const { action, question, topicTitle, paper, userNotes } = req.body;

  if (!action) {
    return res.status(400).json({ error: 'Missing action parameter' });
  }

  // Fallback prompt generation or Gemini call
  if (!aiClient) {
    // Provide rich pedagogical heuristic response
    return res.json({
      success: true,
      mode: 'heuristic',
      response: generateHeuristicCoachResponse(action, question, topicTitle, paper)
    });
  }

  try {
    let systemInstruction = `You are the GATE Quest 2027 AI Exam Coach specializing in Robotics & Automation (RA) and Data Science & Artificial Intelligence (DA).
Your mission is rigorous academic coaching: question interpretation, identification of givens and traps, mathematical precision using LaTeX ($...$ and $$...$$), and conceptual clarity.
Always be exam-accurate, encouraging, clear, and focused on GATE problem-solving tactics. Never hallucinate answers or misrepresent non-official questions as official PYQs.`;

    let userPrompt = '';
    if (action === 'hint') {
      userPrompt = `The student is working on this GATE question from ${paper || 'GATE'} on the topic "${topicTitle || 'General'}":
Question: "${question?.text || 'Unknown'}"
Type: ${question?.type}
Marks: ${question?.marks}
Provide a targeted, 2-tier progressive hint:
1. Conceptual Clue: Which fundamental law, theorem, or equation governs this problem?
2. Method Strategy: What should the first step be (e.g. identify state matrix, compute determinant, apply Bayes theorem, setup DH table)?
Do NOT reveal the final answer. Keep it concise, formatted in markdown with LaTeX.`;
    } else if (action === 'breakdown') {
      userPrompt = `Break down this GATE ${paper} question:
Question: "${question?.text || 'Unknown'}"
Options / Data: ${JSON.stringify(question?.options || question?.answer)}

Please provide a structured 4-part breakdown:
1. Target Variable / Claim (What is specifically being computed or tested?)
2. Givens & Boundary Conditions (Extracted parameters with units)
3. Essential Equations (In LaTeX)
4. Common Exam Traps (Where aspirants make calculation, sign, or interpretation errors)`;
    } else if (action === 'explain') {
      userPrompt = `Provide a comprehensive master-class solution for this GATE ${paper} question:
Question: "${question?.text || 'Unknown'}"
Correct Answer: ${question?.answer}
Explanation context: "${question?.explanation || ''}"
Options: ${JSON.stringify(question?.options || 'None')}

Explain:
1. Step-by-step rigorous analytical derivation with clear intermediate results.
2. Why the correct answer is valid.
3. Why each distractor option is incorrect (if MCQ/MSQ) or unit pitfalls (if NAT).
4. Memory mnemonic or key takeaway for the Codex.`;
    } else if (action === 'generate_similar') {
      userPrompt = `Generate one fresh, high-quality GATE-standard practice transfer question on the topic "${topicTitle}" for paper "${paper}".
Make it realistic for GATE 2027 (either 1 mark or 2 marks).
Include:
- Question text (with LaTeX for formulas)
- Question type (MCQ, MSQ, or NAT)
- 4 options if MCQ/MSQ, or numerical range if NAT
- Correct Answer
- Step-by-step verified solution
Ensure calculations are clean and mathematically sound.`;
    } else if (action === 'explain_concept') {
      userPrompt = `Provide an ultra-clear, concise concept master guide for the GATE syllabus node "${topicTitle}" in ${paper}.
Include:
1. Core Definition (2-3 sentences)
2. Must-Know Formulas (KaTeX LaTeX formatting)
3. 1 High-Yield Worked Example with solution
4. Top 2 Exam Pitfalls to avoid in GATE 2027`;
    }

    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.3,
      }
    });

    return res.json({
      success: true,
      mode: 'gemini',
      response: response.text || 'No response generated.'
    });
  } catch (err: any) {
    console.error('Gemini API call failed:', err);
    return res.json({
      success: true,
      mode: 'heuristic_fallback',
      response: generateHeuristicCoachResponse(action, question, topicTitle, paper),
      warning: 'AI live response failed; generated local coach guidance.'
    });
  }
});

// AI Mistake Diagnostic Analyst API
app.post('/api/ai/analyze-mistakes', async (req, res) => {
  const { mistakes, paper, userQuery } = req.body;

  if (!mistakes || !Array.isArray(mistakes)) {
    return res.status(400).json({ error: 'Missing or invalid mistakes array' });
  }

  if (!aiClient) {
    return res.json({
      success: true,
      mode: 'heuristic',
      response: generateHeuristicMistakeAnalysis(mistakes, paper, userQuery)
    });
  }

  try {
    const systemInstruction = `You are the GATE 2027 AI Exam Doctor and Mistake Analyst specializing in Robotics & Automation (RA) and Data Science & AI (DA).
Your goal is to mathematically and pedagogically diagnose error patterns, point out common trap fallacies, and provide a clear, encouraging, actionable roadmap to crack GATE 2027. Use Markdown with LaTeX ($...$, $$...$$).`;

    const summary = mistakes.slice(0, 10).map((m: any, i: number) => 
      `${i + 1}. [Category: ${m.category}] Topic: ${m.topicTitle} | Learner Reflection: "${m.userReasoning || 'None'}"`
    ).join('\n');

    const prompt = userQuery
      ? `The student has logged these mistakes in GATE ${paper}:\n${summary}\n\nStudent question: "${userQuery}". Give a focused, actionable response with clear mathematical insight.`
      : `The student has logged these mistakes in GATE ${paper}:\n${summary}\n\nDeliver a comprehensive 3-part diagnostic report:
1. 🔍 Root-Cause Diagnosis: Identify recurring patterns (e.g. concept gap vs calculation slip vs option trap).
2. ⚠️ High-Risk Syllabus Nodes: Pinpoint specific topics at risk of losing marks in GATE 2027.
3. 📋 3-Step Remedial Prescription: Prescribe exact actions (formulas to commit to memory, derivation checks, timed drills).`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.3,
      }
    });

    return res.json({
      success: true,
      mode: 'gemini',
      response: response.text || 'No diagnosis generated.'
    });
  } catch (err) {
    console.error('Gemini mistake analysis error:', err);
    return res.json({
      success: true,
      mode: 'heuristic_fallback',
      response: generateHeuristicMistakeAnalysis(mistakes, paper, userQuery)
    });
  }
});

function generateHeuristicMistakeAnalysis(mistakes: any[], paper: string, userQuery?: string) {
  if (userQuery) {
    return `### 🤖 AI Mistake Doctor Advice
Regarding your question: *"${userQuery}"*

1. **Analytical Review**: In GATE ${paper}, recurring errors usually stem from boundary conditions (e.g. strict inequalities, singular matrices, degree-to-radian conversions).
2. **Action**: Re-derive the problem from first principles without looking at the answer key. Write out every intermediate unit.
3. **Verification**: Solve a similar transfer problem in Practice mode to confirm that this conceptual gap is permanently closed.`;
  }

  const categoryCounts: Record<string, number> = {};
  const topicCounts: Record<string, number> = {};

  mistakes.forEach(m => {
    categoryCounts[m.category] = (categoryCounts[m.category] || 0) + 1;
    topicCounts[m.topicTitle] = (topicCounts[m.topicTitle] || 0) + 1;
  });

  const dominantCategory = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'concept_gap';
  const weakTopics = Object.entries(topicCounts).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([t, count]) => `**${t}** (${count} errors)`);

  let categoryInsight = '';
  if (dominantCategory === 'concept_gap') {
    categoryInsight = 'Your primary bottleneck is **Fundamental Concept Gaps**. You are attempting questions before mastering the governing theorems. Spend 15 minutes reviewing the Notes Workspace before doing sets.';
  } else if (dominantCategory === 'calculation_error') {
    categoryInsight = 'Your primary bottleneck is **Calculation & Unit Slips**. Your conceptual logic is sound, but arithmetic mistakes, sign inversions (e.g. $-\\sin\\theta$ positioning), or degree vs radian modes are costing you 0.66 or 2 marks.';
  } else if (dominantCategory === 'option_trap') {
    categoryInsight = 'Your primary bottleneck is falling for **Distractor Option Traps**. GATE question makers specifically place intermediate calculation results as options (A) or (B). Always double check the final requested quantity!';
  } else if (dominantCategory === 'formula_recall') {
    categoryInsight = 'Your primary bottleneck is **Formula Recall Under Pressure**. Use the Codex formula cards daily for 5-minute active recall drills.';
  } else {
    categoryInsight = 'Your errors are spread across multiple categories. Standardizing your 3-step solution method will provide immediate score stabilization.';
  }

  return `### 🩺 AI Diagnostic Mistake Report · GATE ${paper}

#### 1. 🔍 Root-Cause Analysis
- **Dominant Pattern**: ${categoryInsight}
- **Logged Errors Analyzed**: ${mistakes.length} items.

#### 2. ⚠️ High-Risk Syllabus Topics
${weakTopics.length > 0 ? weakTopics.map(w => `- ${w}`).join('\n') : '- No concentrated weak topic detected yet.'}

#### 3. 📋 Your 3-Step Remedial Prescription for GATE 2027
1. **Targeted Concept Deep Dive**: Open your **Notes Workspace** for the high-risk topics above. Ensure the 6-part template has your own notes written in Section 4 (*Common Mistakes*).
2. **Reattempt with the GATE Calculator**: Practice re-solving these questions with the **Gate Calculator** in DEG vs RAD mode to eliminate mechanical math errors.
3. **Spaced Verification**: Use the **Reattempt** button below every 3 days. When you solve an item twice consecutively with zero hints, mark it **Resolved**.`;
}

function generateHeuristicCoachResponse(action: string, question: any, topicTitle: string, paper: string) {
  if (action === 'hint') {
    return `### 💡 Coach Hint for ${topicTitle || 'Problem'}
1. **Core Concept**: Check the fundamental relationships in this subtopic. If dealing with kinematics, remember $T = \\begin{bmatrix} R & p \\\\ 0 & 1 \\end{bmatrix}$; if dealing with eigenvalues, recall $\\det(A - \\lambda I) = 0$ and $\\text{Tr}(A) = \\sum \\lambda_i$.
2. **Strategy**: Eliminate dimensional mismatches first. Isolate given quantities and substitute into canonical form before computing powers or matrix inverses.`;
  }
  if (action === 'breakdown') {
    return `### 🔍 Question Breakdown
- **Target**: Determine the exact value/property required by the question prompt.
- **Givens**: Note all constants, constraints (e.g., orthogonal, symmetric, positive definite, or link lengths $l_1, l_2$).
- **Core Formula**: Ensure proper units (radians vs degrees, seconds vs minutes).
- **Distractor Warning**: Common pitfalls include sign inversion in rotation matrices ($-\\sin\\theta$ positioning) and confusing sample variance with population variance ($N-1$ vs $N$).`;
  }
  if (action === 'explain') {
    return `### 📘 Detailed Solution & Analysis
${question?.explanation || 'Apply standard syllabus definitions to arrive at the solution.'}

**Exam Takeaway**:
Review the underlying theorem in your topic notes. Practice similar numerical variations to verify speed under 3-minute GATE time pressure.`;
  }
  if (action === 'generate_similar') {
    return `### 🎯 Practice Transfer Challenge
**Topic**: ${topicTitle || 'Core Concept'} (${paper || 'GATE'})
**Question**: Consider a $2 \\times 2$ matrix $M = \\begin{bmatrix} 4 & 2 \\\\ 1 & 3 \\end{bmatrix}$. What are the eigenvalues of $M$?
- (A) $\\lambda = 2, 5$
- (B) $\\lambda = 1, 6$
- (C) $\\lambda = 3, 4$
- (D) $\\lambda = -1, 8$

**Answer**: (A)
**Reasoning**: Characteristic equation $\\det(M - \\lambda I) = (4-\\lambda)(3-\\lambda) - 2 = \\lambda^2 - 7\\lambda + 10 = 0 \\implies (\\lambda-2)(\\lambda-5)=0$. Hence $\\lambda_1 = 2, \\lambda_2 = 5$.`;
  }
  return `### 📌 Concept Guide: ${topicTitle}
Review key formulas and definitions in the Codex and your per-topic Notes Workspace.`;
}

// Development with Vite or Production static files
async function startServer() {
  if (!isProduction) {
    console.log('⏳ Initializing Vite dev server...');
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== 'true' },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  function listenOnPort(port: number) {
    const server = app.listen(port, () => {
      console.log(`\n🚀 GATE Quest server is running live!`);
      console.log(`👉 Open in your browser: http://localhost:${port}`);
      console.log(`📚 Database: gate_quest_2027.db (SQLite)`);
      console.log(`⚡ Keep this CMD window open while studying in your browser.`);
      console.log(`⚡ Press Ctrl+C in CMD anytime to stop the server\n`);
    });

    server.on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        console.warn(`⚠️ Port ${port} is busy, trying port ${port + 1}...`);
        listenOnPort(port + 1);
      } else {
        console.error('Server error:', err);
      }
    });
  }

  listenOnPort(Number(PORT));
}

startServer();
