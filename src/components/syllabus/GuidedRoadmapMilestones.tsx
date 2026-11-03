import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Milestone, 
  Target, 
  Award, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  BookOpen, 
  Play, 
  Sparkles, 
  Layers, 
  BarChart3, 
  ShieldCheck, 
  HelpCircle,
  TrendingUp,
  Percent,
  Check
} from 'lucide-react';

export interface StudyMilestone {
  id: string;
  milestoneNumber: number;
  phase: string;
  title: string;
  description: string;
  targetMarks: number;
  estimatedHours: number;
  topicIds: string[];
  keyOutcomes: string[];
  prerequisites: string;
}

export const RA_MILESTONES: StudyMilestone[] = [
  {
    id: 'ra-m1',
    milestoneNumber: 1,
    phase: 'Phase 1: Mathematical Bedrock',
    title: 'Linear Algebra & Engineering Mathematics',
    description: 'Master vector spaces, matrices, determinants, eigenvalues, Cayley-Hamilton, and numerical integration required for spatial transformations.',
    targetMarks: 13,
    estimatedHours: 35,
    topicIds: ['ra-math-la', 'ra-math-calc-de'],
    keyOutcomes: [
      'Eigenvalues and eigenvector computation without sign errors',
      'Cayley-Hamilton theorem to compute high powers and matrix inverses',
      'Newton-Raphson iteration and Simpson’s 1/3 numerical integration'
    ],
    prerequisites: 'High school calculus and matrix multiplication'
  },
  {
    id: 'ra-m2',
    milestoneNumber: 2,
    phase: 'Phase 2: Spatial Geometry & Kinematics',
    title: 'Robot Kinematics, 3D Rotations & DH Parameters',
    description: 'The highest weightage core of GATE RA. Master 2D/3D rotation matrices, $4 \\times 4$ homogeneous transforms, and Denavit-Hartenberg parameters.',
    targetMarks: 25,
    estimatedHours: 50,
    topicIds: ['ra-robotics-kinematics-transforms', 'ra-robotics-dynamics-path-endeffectors'],
    keyOutcomes: [
      'Coordinate frame transformations and frame inversion $^B P = R^T(^A P - P_{org})$',
      'Assigning DH axes $(z_i, x_i)$ and deriving the 4 parameters $(a_i, \\alpha_i, d_i, \\theta_i)$',
      'Forward kinematics for SCARA, 2R/3R planar, and articulated manipulators',
      'Cubic/quintic trajectory planning and repeatability ISO standards $(\\pm 3\\sigma)$'
    ],
    prerequisites: 'Milestone 1 (Linear Algebra)'
  },
  {
    id: 'ra-m3',
    milestoneNumber: 3,
    phase: 'Phase 3: Hardware & Actuation',
    title: 'Mechatronics, Sensors, Actuators & Circuits',
    description: 'Transducers and drives that bridge software control with physical robot motion in automation workcells.',
    targetMarks: 16,
    estimatedHours: 40,
    topicIds: ['ra-mechatronics-circuits-sensors'],
    keyOutcomes: [
      'Optical incremental encoders, quadrature decoding, and PPR resolution',
      'DC motor torque-speed relations $(T_e = K_t I_a, E_b = K_b \\omega)$',
      'Stepper motor step angle calculations and BLDC electronic commutation',
      'Logic gates, flip-flops, multiplexers, and ADC/DAC resolution'
    ],
    prerequisites: 'Basic electric circuits and digital logic'
  },
  {
    id: 'ra-m4',
    milestoneNumber: 4,
    phase: 'Phase 4: Factory Automation',
    title: 'Industrial Automation, PLCs, AS/RS & CNC',
    description: 'Deterministic manufacturing automation, PLC ladder diagrams, material handling systems, and automated storage.',
    targetMarks: 14,
    estimatedHours: 30,
    topicIds: ['ra-cim-plc-automation'],
    keyOutcomes: [
      'Writing PLC ladder logic using NO/NC contacts, timers (TON), and counters (CTU)',
      'Calculating AS/RS cycle times and throughput for single/dual command cycles',
      'CNC G-codes (G00, G01, G02, G03) and M-codes for automated tool paths'
    ],
    prerequisites: 'Milestone 3 (Digital circuits)'
  },
  {
    id: 'ra-m5',
    milestoneNumber: 5,
    phase: 'Phase 5: Dynamic Regulation',
    title: 'Control Systems, Stability & PID Controllers',
    description: 'Linear system theory ensuring steady-state precision, zero steady-state error, and dynamic damping in robotic joints.',
    targetMarks: 16,
    estimatedHours: 40,
    topicIds: ['ra-b1-control-systems'],
    keyOutcomes: [
      'Second-order transient response ($M_p, t_s, t_p, \\zeta, \\omega_n$)',
      'Routh-Hurwitz stability criterion and auxiliary polynomials for $j\\omega$ roots',
      'Bode plots, Gain Margin (GM) and Phase Margin (PM) frequency stability',
      'PID controller design: tuning $K_p, K_i, K_d$ for minimum overshoot'
    ],
    prerequisites: 'Milestone 1 (Laplace transforms & ODEs)'
  },
  {
    id: 'ra-m6',
    milestoneNumber: 6,
    phase: 'Phase 6: Structural Sizing',
    title: 'Mechanics of Materials & Machine Elements',
    description: 'Load capacity, bending stresses, shaft torsion, and Euler buckling ensuring robot links withstand acceleration forces.',
    targetMarks: 16,
    estimatedHours: 35,
    topicIds: ['ra-b2-mechanics-materials'],
    keyOutcomes: [
      'Mohr’s circle, principal stresses, and maximum shear stress theory',
      'Bending stress formula $(\\sigma/y = M/I)$ and shaft torsion $(\\tau/r = T/J)$',
      'Euler column buckling critical load $P_{cr} = \\pi^2 E I / L_e^2$'
    ],
    prerequisites: 'Engineering mechanics'
  }
];

export const DA_MILESTONES: StudyMilestone[] = [
  {
    id: 'da-m1',
    milestoneNumber: 1,
    phase: 'Phase 1: Mathematical Foundations',
    title: 'Linear Algebra, Matrix Decompositions & SVD',
    description: 'Vector spaces, matrix rank, spectral decomposition, Singular Value Decomposition (SVD), and Principal Component Analysis (PCA).',
    targetMarks: 15,
    estimatedHours: 40,
    topicIds: ['da-linear-algebra'],
    keyOutcomes: [
      'Rank-Nullity theorem and orthogonal projection into column/null spaces',
      'Symmetric matrix diagonalization and eigenvalues / eigenvectors',
      'Singular Value Decomposition $A = U \\Sigma V^T$ and low-rank approximation',
      'Principal Component Analysis (PCA) via sample covariance matrix'
    ],
    prerequisites: 'Matrix multiplication and determinant algebra'
  },
  {
    id: 'da-m2',
    milestoneNumber: 2,
    phase: 'Phase 2: Uncertainty Modeling',
    title: 'Probability Distributions & Statistical Inference',
    description: 'The primary bedrock of machine learning: Bayes’ theorem, random variables, expectation, CLT, and hypothesis testing.',
    targetMarks: 18,
    estimatedHours: 45,
    topicIds: ['da-prob-stats'],
    keyOutcomes: [
      'Bayes’ theorem and conditional probability updating',
      'Discrete (Binomial, Poisson) & Continuous (Normal, Uniform) distributions',
      'Expectation, variance, covariance, and correlation coefficient',
      'Central Limit Theorem (CLT), confidence intervals, and hypothesis testing (t-test, z-test, p-values)'
    ],
    prerequisites: 'Basic calculus and set theory'
  },
  {
    id: 'da-m3',
    milestoneNumber: 3,
    phase: 'Phase 3: Loss Minimization',
    title: 'Multivariable Calculus & Convex Optimization',
    description: 'Objective function optimization governing loss landscapes in regression, SVMs, and neural networks.',
    targetMarks: 12,
    estimatedHours: 30,
    topicIds: ['da-calc-opt'],
    keyOutcomes: [
      'Gradient vector $\\nabla f$ and Hessian matrix $\\nabla^2 f$ for local minima',
      'Convex functions, convexity tests, and Jensen’s inequality',
      'Gradient Descent variants (SGD, Momentum, Adam)',
      'Constrained optimization, Lagrange multipliers, and KKT conditions'
    ],
    prerequisites: 'Milestone 1 (Linear Algebra)'
  },
  {
    id: 'da-m4',
    milestoneNumber: 4,
    phase: 'Phase 4: Algorithmic Efficiency',
    title: 'Programming, Data Structures & Graph Algorithms',
    description: 'Python structures, asymptotic complexity, heaps, binary search trees, and shortest path graph algorithms.',
    targetMarks: 16,
    estimatedHours: 40,
    topicIds: ['da-prog-dsa'],
    keyOutcomes: [
      'Asymptotic notation (Big-O, Big-\\Omega, Big-\\Theta) and recurrence relations',
      'Binary search trees, AVL trees, and Binary Min/Max Heaps',
      'Sorting algorithms: QuickSort, MergeSort, HeapSort time and space bounds',
      'Graph algorithms: BFS, DFS, Dijkstra’s shortest path, Prim’s and Kruskal’s MST'
    ],
    prerequisites: 'Basic Python programming'
  },
  {
    id: 'da-m5',
    milestoneNumber: 5,
    phase: 'Phase 5: Enterprise Data Systems',
    title: 'Relational Model, SQL, Normalization & B+ Trees',
    description: 'Structured database management, relational algebra operators, schema normalization, and B+ tree indexing.',
    targetMarks: 10,
    estimatedHours: 25,
    topicIds: ['da-dbms'],
    keyOutcomes: [
      'Relational algebra (selection, projection, cross-product, joins)',
      'Complex SQL queries (joins, group by, having, subqueries)',
      'Functional dependencies and normal forms (1NF, 2NF, 3NF, BCNF)',
      'B and B+ tree indexing height, search cost, and node fanout',
      'Transactions, ACID properties, serializability, and 2-phase locking'
    ],
    prerequisites: 'Set theory and relational logic'
  },
  {
    id: 'da-m6',
    milestoneNumber: 6,
    phase: 'Phase 6: AI & Predictive Models',
    title: 'Machine Learning & Artificial Intelligence Search',
    description: 'Supervised classification/regression, regularization, clustering, and heuristic state-space search.',
    targetMarks: 29,
    estimatedHours: 65,
    topicIds: ['da-machine-learning', 'da-ai-search-logic'],
    keyOutcomes: [
      'Linear regression (OLS, Ridge L2, Lasso L1) and Logistic regression cross-entropy',
      'Support Vector Machines (SVM), geometric margin, and kernel trick',
      'Decision trees: Entropy, Information Gain, and Gini Impurity',
      'K-Means clustering and distance metrics',
      'A* search, admissible/consistent heuristics, and Alpha-Beta game pruning',
      'Propositional logic, truth tables, and resolution refutation'
    ],
    prerequisites: 'Milestones 1, 2 & 3'
  }
];

export const GuidedRoadmapMilestones: React.FC = () => {
  const { activePaper, topicProgress, setSelectedTopicId, setActiveTab } = useApp();
  const [activeSection, setActiveSection] = useState<'milestones' | 'marks' | 'strategy'>('milestones');
  const [targetScore, setTargetScore] = useState<number>(70);

  const milestones = activePaper === 'RA' ? RA_MILESTONES : DA_MILESTONES;

  // Calculate milestone progress
  const milestoneProgress = milestones.map(m => {
    const scores = m.topicIds.map(tId => topicProgress[tId]?.masteryScore || 0);
    const avgScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    const studiedCount = m.topicIds.filter(tId => topicProgress[tId]?.studied).length;
    const isCompleted = avgScore >= 75 && studiedCount === m.topicIds.length;
    return {
      ...m,
      avgScore,
      studiedCount,
      totalTopics: m.topicIds.length,
      isCompleted
    };
  });

  const totalTargetMarks = milestones.reduce((sum, m) => sum + m.targetMarks, 0);
  const completedMilestonesCount = milestoneProgress.filter(m => m.isCompleted).length;

  return (
    <div className="space-y-6">
      {/* Navigation Sub-Tabs */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveSection('milestones')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
              activeSection === 'milestones'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Milestone className="w-4 h-4" />
            <span>Guided Milestones Roadmap ({completedMilestonesCount}/{milestones.length})</span>
          </button>

          <button
            onClick={() => setActiveSection('marks')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
              activeSection === 'marks'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>GATE 2027 Marks Division & Pattern</span>
          </button>

          <button
            onClick={() => setActiveSection('strategy')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
              activeSection === 'strategy'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>AIR Score Simulator ({targetScore} Marks)</span>
          </button>
        </div>

        <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
          <span>Syllabus Target:</span>
          <strong className="text-amber-400">85 Subject + 15 GA = 100 Marks</strong>
        </div>
      </div>

      {/* 1. GUIDED MILESTONES ROADMAP VIEW */}
      {activeSection === 'milestones' && (
        <div className="space-y-5">
          <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase font-bold text-amber-400 tracking-wider">
                STRUCTURED STUDY PHASES · GATE 2027 {activePaper}
              </span>
              <h2 className="text-lg font-bold text-white mt-0.5">
                Guided Milestone Roadmap: Foundations to Top 50 AIR
              </h2>
              <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                Work through these 6 progressive milestones in sequential order. Do not skip milestones—higher-level robotics and machine learning questions rely heavily on the earlier mathematical tools.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-slate-950 p-3.5 rounded-xl border border-slate-800 shrink-0 font-mono text-xs">
              <div>
                <div className="text-slate-500 text-[10px] uppercase">Milestones Mastered</div>
                <div className="text-base font-bold text-emerald-400">{completedMilestonesCount} / {milestones.length}</div>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div>
                <div className="text-slate-500 text-[10px] uppercase">Total Core Marks</div>
                <div className="text-base font-bold text-amber-400">~{totalTargetMarks} Marks</div>
              </div>
            </div>
          </div>

          {/* Milestones Cards Grid */}
          <div className="grid grid-cols-1 gap-4">
            {milestoneProgress.map((m) => {
              return (
                <div
                  key={m.id}
                  className={`p-6 rounded-2xl border transition-all ${
                    m.isCompleted
                      ? 'bg-slate-900/90 border-emerald-500/40 shadow-lg shadow-emerald-500/5'
                      : m.studiedCount > 0
                      ? 'bg-slate-900 border-amber-500/30'
                      : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-bold font-mono text-xs flex items-center justify-center shrink-0">
                          M{m.milestoneNumber}
                        </span>
                        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                          {m.phase}
                        </span>
                        <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800">
                          Weight: <strong className="text-amber-300">~{m.targetMarks} Marks</strong>
                        </span>
                        <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-0.5 rounded border border-slate-800 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-500" />
                          <span>~{m.estimatedHours} hrs</span>
                        </span>
                        {m.isCompleted && (
                          <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Milestone Cleared</span>
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {m.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {m.description}
                      </p>

                      {/* Key Competency Outcomes */}
                      <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80 mt-2 space-y-1.5">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                          Must-Master GATE Competencies:
                        </div>
                        {m.keyOutcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                            <span>{outcome}</span>
                          </div>
                        ))}
                      </div>

                      <div className="text-[11px] font-mono text-slate-400 pt-1">
                        <span>Prerequisite: </span>
                        <span className="text-slate-300 font-medium">{m.prerequisites}</span>
                      </div>
                    </div>

                    {/* Right Action & Progress Column */}
                    <div className="lg:w-64 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800 pt-4 lg:pt-0 lg:pl-6 space-y-4 shrink-0">
                      <div>
                        <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                          <span className="text-slate-400">Topic Mastery</span>
                          <span className={`font-bold ${m.avgScore >= 75 ? 'text-emerald-400' : 'text-amber-400'}`}>
                            {m.avgScore}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              m.avgScore >= 75 ? 'bg-emerald-500' : 'bg-gradient-to-r from-amber-500 to-amber-400'
                            }`}
                            style={{ width: `${Math.min(100, m.avgScore)}%` }}
                          />
                        </div>
                        <div className="text-[10px] font-mono text-slate-500 mt-1 text-right">
                          {m.studiedCount}/{m.totalTopics} Topics Completed
                        </div>
                      </div>

                      <div className="space-y-2">
                        <button
                          onClick={() => {
                            setSelectedTopicId(m.topicIds[0]);
                            setActiveTab('notes');
                          }}
                          className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                          <span>Study Notes & Formulas</span>
                        </button>

                        <button
                          onClick={() => {
                            setSelectedTopicId(m.topicIds[0]);
                            setActiveTab('practice');
                          }}
                          className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <Play className="w-3.5 h-3.5 fill-slate-950" />
                          <span>Solve Milestone PYQs</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. OFFICIAL GATE 2027 MARKS DIVISION & EXAM PATTERN */}
      {activeSection === 'marks' && (
        <div className="space-y-6">
          {/* Top Pattern Summary Banner */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
            <span className="text-[10px] font-mono uppercase font-bold text-amber-400 tracking-wider">
              OFFICIAL GATE 2027 EXAM BLUEPRINT · IIT MADRAS
            </span>
            <h2 className="text-xl font-bold text-white mt-1">
              GATE {activePaper} 2027 Question & Marks Distribution
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              The examination consists of 65 questions totaling 100 marks to be completed in 180 minutes (3 hours).
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Total Marks</span>
                <div className="text-2xl font-extrabold text-white font-mono mt-0.5">100</div>
                <span className="text-[10px] text-slate-400">180 Mins duration</span>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Total Questions</span>
                <div className="text-2xl font-extrabold text-amber-400 font-mono mt-0.5">65 Qs</div>
                <span className="text-[10px] text-slate-400">~2.77 min / question</span>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[10px] font-mono text-slate-500 uppercase">General Aptitude (GA)</span>
                <div className="text-2xl font-extrabold text-sky-400 font-mono mt-0.5">15 Marks</div>
                <span className="text-[10px] text-slate-400">10 Questions (5x1m + 5x2m)</span>
              </div>

              <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[10px] font-mono text-slate-500 uppercase">Core Subject + Math</span>
                <div className="text-2xl font-extrabold text-emerald-400 font-mono mt-0.5">85 Marks</div>
                <span className="text-[10px] text-slate-400">55 Questions (25x1m + 30x2m)</span>
              </div>
            </div>
          </div>

          {/* Question Types & Negative Marking Rules */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase">MCQ Questions</span>
                <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                  Negative Marks Apply
                </span>
              </div>
              <h4 className="text-sm font-bold text-white">Multiple Choice (Single Correct)</h4>
              <p className="text-xs text-slate-400">
                Four choices (A, B, C, D) with exactly one correct option.
              </p>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
                <div>• 1-Mark MCQ: <strong className="text-emerald-400">+1.00</strong> | Wrong: <strong className="text-rose-400">-0.33</strong></div>
                <div>• 2-Mark MCQ: <strong className="text-emerald-400">+2.00</strong> | Wrong: <strong className="text-rose-400">-0.66</strong></div>
              </div>
            </div>

            <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-sky-400 uppercase">MSQ Questions</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Zero Negative Marking
                </span>
              </div>
              <h4 className="text-sm font-bold text-white">Multiple Select (One or More Correct)</h4>
              <p className="text-xs text-slate-400">
                One, two, three, or all four options may be correct. No partial marking is awarded.
              </p>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
                <div>• Correct: <strong className="text-emerald-400">+1.00 or +2.00</strong></div>
                <div>• Wrong/Partial: <strong className="text-slate-400">0.00 (No penalty)</strong></div>
              </div>
            </div>

            <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">NAT Questions</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Zero Negative Marking
                </span>
              </div>
              <h4 className="text-sm font-bold text-white">Numerical Answer Type</h4>
              <p className="text-xs text-slate-400">
                Enter numerical value using the on-screen virtual numeric keypad within specified rounding.
              </p>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 space-y-1">
                <div>• Correct: <strong className="text-emerald-400">+1.00 or +2.00</strong></div>
                <div>• Wrong: <strong className="text-slate-400">0.00 (No penalty)</strong></div>
              </div>
            </div>
          </div>

          {/* Subject-Wise Expected Marks Breakdown Table */}
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-amber-400" />
              <span>Section-Wise Expected Weightage Breakdown ({activePaper})</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400">
                    <th className="py-2.5 px-3">Syllabus Section</th>
                    <th className="py-2.5 px-3">Expected Qs</th>
                    <th className="py-2.5 px-3">Expected Marks</th>
                    <th className="py-2.5 px-3">Weightage %</th>
                    <th className="py-2.5 px-3">Priority Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-200">
                  {activePaper === 'RA' ? (
                    <>
                      <tr>
                        <td className="py-3 px-3 font-bold text-white">Principles of Robotics & Spatial Transforms</td>
                        <td className="py-3 px-3">14 – 16 Qs</td>
                        <td className="py-3 px-3 text-amber-400 font-bold">22 – 25 Marks</td>
                        <td className="py-3 px-3">24%</td>
                        <td className="py-3 px-3"><span className="text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">Highest Core</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-bold text-white">Basics of Mechatronics, Sensors & Actuators</td>
                        <td className="py-3 px-3">10 – 12 Qs</td>
                        <td className="py-3 px-3 text-amber-400 font-bold">16 – 18 Marks</td>
                        <td className="py-3 px-3">17%</td>
                        <td className="py-3 px-3"><span className="text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">High Yield</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-bold text-white">Engineering Mathematics (Linear Algebra, Calculus)</td>
                        <td className="py-3 px-3">8 – 9 Qs</td>
                        <td className="py-3 px-3 text-amber-400 font-bold">13 – 15 Marks</td>
                        <td className="py-3 px-3">14%</td>
                        <td className="py-3 px-3"><span className="text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">High Yield</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-bold text-white">Control Systems & Actuator Stability (Part B1)</td>
                        <td className="py-3 px-3">8 – 9 Qs</td>
                        <td className="py-3 px-3 text-amber-400 font-bold">12 – 15 Marks</td>
                        <td className="py-3 px-3">14%</td>
                        <td className="py-3 px-3"><span className="text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">Medium-High</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-bold text-white">Mechanics of Materials & Link Design (Part B2)</td>
                        <td className="py-3 px-3">8 – 9 Qs</td>
                        <td className="py-3 px-3 text-amber-400 font-bold">12 – 15 Marks</td>
                        <td className="py-3 px-3">14%</td>
                        <td className="py-3 px-3"><span className="text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">Medium-High</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-bold text-white">Computer Integrated Manufacturing (CIM & PLCs)</td>
                        <td className="py-3 px-3">6 – 8 Qs</td>
                        <td className="py-3 px-3 text-amber-400 font-bold">10 – 12 Marks</td>
                        <td className="py-3 px-3">11%</td>
                        <td className="py-3 px-3"><span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Moderate</span></td>
                      </tr>
                      <tr className="bg-slate-950 font-bold">
                        <td className="py-3 px-3 text-amber-400">General Aptitude (Verbal & Numerical Ability)</td>
                        <td className="py-3 px-3">10 Qs</td>
                        <td className="py-3 px-3 text-amber-400">15 Marks</td>
                        <td className="py-3 px-3">15%</td>
                        <td className="py-3 px-3"><span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Mandatory</span></td>
                      </tr>
                    </>
                  ) : (
                    <>
                      <tr>
                        <td className="py-3 px-3 font-bold text-white">Machine Learning (Supervised, Unsupervised)</td>
                        <td className="py-3 px-3">12 – 14 Qs</td>
                        <td className="py-3 px-3 text-amber-400 font-bold">18 – 22 Marks</td>
                        <td className="py-3 px-3">20%</td>
                        <td className="py-3 px-3"><span className="text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">Highest Core</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-bold text-white">Probability & Statistics (Bayes, Distributions)</td>
                        <td className="py-3 px-3">10 – 12 Qs</td>
                        <td className="py-3 px-3 text-amber-400 font-bold">15 – 18 Marks</td>
                        <td className="py-3 px-3">17%</td>
                        <td className="py-3 px-3"><span className="text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded">High Yield</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-bold text-white">Programming, Data Structures & Algorithms</td>
                        <td className="py-3 px-3">10 – 12 Qs</td>
                        <td className="py-3 px-3 text-amber-400 font-bold">15 – 18 Marks</td>
                        <td className="py-3 px-3">16%</td>
                        <td className="py-3 px-3"><span className="text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">High Yield</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-bold text-white">Linear Algebra (SVD, PCA, Vector Spaces)</td>
                        <td className="py-3 px-3">8 – 10 Qs</td>
                        <td className="py-3 px-3 text-amber-400 font-bold">12 – 15 Marks</td>
                        <td className="py-3 px-3">14%</td>
                        <td className="py-3 px-3"><span className="text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">Foundational</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-bold text-white">Artificial Intelligence (A* Search, Logic)</td>
                        <td className="py-3 px-3">7 – 8 Qs</td>
                        <td className="py-3 px-3 text-amber-400 font-bold">10 – 12 Marks</td>
                        <td className="py-3 px-3">11%</td>
                        <td className="py-3 px-3"><span className="text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">Medium</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-bold text-white">Calculus & Convex Optimization</td>
                        <td className="py-3 px-3">6 – 8 Qs</td>
                        <td className="py-3 px-3 text-amber-400 font-bold">10 – 12 Marks</td>
                        <td className="py-3 px-3">11%</td>
                        <td className="py-3 px-3"><span className="text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">Medium</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-bold text-white">Database Management & Warehousing (DBMS)</td>
                        <td className="py-3 px-3">5 – 7 Qs</td>
                        <td className="py-3 px-3 text-amber-400 font-bold">8 – 10 Marks</td>
                        <td className="py-3 px-3">9%</td>
                        <td className="py-3 px-3"><span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Direct Scoring</span></td>
                      </tr>
                      <tr className="bg-slate-950 font-bold">
                        <td className="py-3 px-3 text-amber-400">General Aptitude (Verbal & Numerical Ability)</td>
                        <td className="py-3 px-3">10 Qs</td>
                        <td className="py-3 px-3 text-amber-400">15 Marks</td>
                        <td className="py-3 px-3">15%</td>
                        <td className="py-3 px-3"><span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Mandatory</span></td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* 3. AIR SCORE SIMULATOR & STRATEGY */}
      {activeSection === 'strategy' && (
        <div className="space-y-6">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
            <span className="text-[10px] font-mono uppercase font-bold text-amber-400 tracking-wider">
              TACTICAL EXAM SIMULATOR · GATE 2027
            </span>
            <h2 className="text-xl font-bold text-white mt-1">
              Target Score & Rank Benchmark Simulator
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl">
              Adjust your target score to see exactly how many 1-mark and 2-mark questions you must solve with realistic accuracy to secure your desired All India Rank (AIR).
            </p>

            {/* Slider */}
            <div className="mt-6 p-5 bg-slate-950 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-slate-300 font-bold">Target GATE Score:</span>
                <span className="text-2xl font-extrabold text-amber-400 font-mono">{targetScore} / 100 Marks</span>
              </div>
              <input
                type="range"
                min="30"
                max="90"
                step="5"
                value={targetScore}
                onChange={e => setTargetScore(Number(e.target.value))}
                className="w-full accent-amber-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
                <span>30 (Qualifying)</span>
                <span>50 (New IITs/NITs)</span>
                <span>65 (Top Old IITs)</span>
                <span>80+ (Top 10 AIR)</span>
              </div>
            </div>

            {/* Simulated Strategy Plan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-slate-500">Predicted Rank Range</span>
                <div className="text-xl font-extrabold text-emerald-400 font-mono mt-1">
                  {targetScore >= 80 ? 'AIR 1 – 25' : targetScore >= 70 ? 'AIR 25 – 100' : targetScore >= 55 ? 'AIR 100 – 400' : targetScore >= 40 ? 'AIR 400 – 1500' : 'AIR 1500+'}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  {targetScore >= 70 ? 'Guaranteed call for IISc / IIT Bombay / IIT Madras direct M.Tech & PSU interviews.' : 'Eligible for Top NITs, IIITs, and new IITs specialization rounds.'}
                </p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-slate-500">Recommended Attempts</span>
                <div className="text-xl font-extrabold text-amber-400 font-mono mt-1">
                  {Math.min(65, Math.round(targetScore * 0.72))} Questions
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Assuming ~85% accuracy with minimal negative marking penalties on MCQs.
                </p>
              </div>

              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-[10px] font-mono uppercase text-slate-500">Golden Rule for GATE</span>
                <div className="text-sm font-bold text-white mt-1">
                  Never Guess 2-Mark MCQs
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  A wrong 2-mark MCQ costs <strong>-0.66 marks</strong>. However, MSQs and NATs carry 0 negative marks—attempt all of them!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
