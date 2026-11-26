import React, { useState, useEffect, useMemo } from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  TrendingUp, 
  Flame, 
  Plus, 
  RotateCcw, 
  Trash2, 
  Compass, 
  Award,
  ChevronRight,
  BookOpen,
  Target,
  Sparkles,
  Cpu,
  Brain
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

// Subject definition structure for Syllabus Checklist
interface DashboardSubject {
  id: string;
  name: string;
  phase: number;
  topics: string[];
}

// 1. RA Syllabus Breakdown (Robotics & Automation) - Official IIT Madras Gate 2027 Spec
const RA_SUBJECTS: DashboardSubject[] = [
  { 
    id: 'ra_math', 
    name: 'Engineering Mathematics', 
    phase: 1, 
    topics: [
      'Linear Algebra: Vector spaces, rank, eigenvalues & eigenvectors, Cayley-Hamilton',
      'Calculus: Gradient, divergence, curl, line & surface integrals, Taylor series',
      'Differential Equations: Higher-order linear ODEs, Cauchy-Euler, Laplace transforms',
      'Numerical Methods: Newton-Raphson, Euler & Runge-Kutta, numerical integration',
      'Probability & Statistics: Random variables, normal distribution, correlation & regression'
    ] 
  },
  { 
    id: 'ra_mechatronics', 
    name: 'Basics of Mechatronics & Electronics', 
    phase: 1, 
    topics: [
      'Sensors: Encoders, resolvers, LVDT, tachometers, strain gauges, IMU & LiDAR',
      'Actuators: DC motors, stepper motors, BLDC drives, servo systems & PWM control',
      'Signal Conditioning: Operational amplifiers, filtering, instrumentation amplifiers, ADC/DAC',
      'Embedded Microcontrollers: GPIO, timers, interrupts, I2C, SPI & UART communication',
      'Power Transmission: Harmonic drives, planetary gearboxes, lead screws & timing belts'
    ] 
  },
  { 
    id: 'ra_kinematics', 
    name: 'Robot Kinematics & Coordinate Transforms', 
    phase: 1, 
    topics: [
      'Spatial Transformations: Rotation matrices (SO(3)), Euler angles, angle-axis & quaternions',
      'Homogeneous Transformation Matrices & frame composition rules',
      'Denavit-Hartenberg (D-H) Convention: Standard and modified frame assignment',
      'Forward Kinematics: Kinematic modeling of serial manipulators and SCARA robots',
      'Inverse Kinematics: Analytical & geometric solutions, solvability & workspace singularities'
    ] 
  },
  { 
    id: 'ra_dynamics', 
    name: 'Robot Dynamics & Trajectory Planning', 
    phase: 1, 
    topics: [
      'Velocity Kinematics: Geometric & analytical Jacobians, singularity analysis, manipulability',
      'Robot Dynamics: Euler-Lagrange equations of motion, mass matrix, Coriolis & gravity vectors',
      'Newton-Euler Formulation: Recursive forward-backward dynamics algorithm',
      'Trajectory Generation: Cubic & quintic polynomials, LSPB (trapezoidal) velocity profiles',
      'Grippers & End-Effectors: Force closure, friction cones, grasp stability & payload capacity'
    ] 
  },
  { 
    id: 'ra_control', 
    name: 'Control Systems for Robotics', 
    phase: 2, 
    topics: [
      'System Modeling: Transfer functions, block diagram reduction, signal flow graphs',
      'Time-Domain Analysis: Transient specs, damping ratio, steady-state error & error constants',
      'Stability Analysis: Routh-Hurwitz criterion, Root Locus design & angle/magnitude conditions',
      'Frequency Response: Bode plots, polar plots, Nyquist stability criterion, gain & phase margins',
      'Robot Motion Control: Independent joint PID control, feedforward control, computed torque control'
    ] 
  },
  { 
    id: 'ra_cim', 
    name: 'Industrial Automation, CIM & PLC', 
    phase: 2, 
    topics: [
      'Programmable Logic Controllers (PLC): Architecture, scan cycle, ladder logic, timers & counters',
      'Computer Integrated Manufacturing: FMS, automated cell control, group technology & CAPP',
      'Material Handling: Automated Guided Vehicles (AGV), AS/RS systems & conveyor sequencing',
      'CNC Systems: Machine axes, interpolators, tooling & G-code/M-code part programming',
      'Industrial Networks: Fieldbus, Modbus, Profibus, Industrial Ethernet & OPC-UA protocols'
    ] 
  },
  { 
    id: 'ra_autonomy', 
    name: 'Autonomous Robots & Robot Intelligence', 
    phase: 2, 
    topics: [
      'Mobile Robot Kinematics: Differential drive, unicycle model, Ackermann steering & omni wheels',
      'Mapping & Localization: Occupancy grid maps, Bayesian filtering, EKF-SLAM & graph SLAM',
      'Path Planning: Dijkstra, A* heuristic search, RRT/RRT* sampling-based planning, potential fields',
      'Robot Vision: Pinhole camera model, intrinsic/extrinsic calibration, stereo vision, visual odometry',
      'Robot Operating System: ROS 2 computation graph, nodes, topics, services, actions & tf2'
    ] 
  },
  { 
    id: 'ra_aptitude', 
    name: 'General Aptitude (Common 15 Marks)', 
    phase: 2, 
    topics: [
      'Quantitative Aptitude: Percentages, ratios, time-speed-distance, work, basic combinatorics',
      'Analytical Reasoning: Syllogisms, deductive logic, series completion, data sufficiency',
      'Spatial Aptitude: Paper folding, 2D/3D transformations, pattern mirror reflections',
      'Verbal Ability: Grammar, vocabulary, sentence completion, reading comprehension'
    ] 
  }
];

// 2. DA Syllabus Breakdown (Data Science & AI) - Official IIT Madras Gate 2027 Spec
const DA_SUBJECTS: DashboardSubject[] = [
  { 
    id: 'da_la', 
    name: 'Linear Algebra', 
    phase: 1, 
    topics: [
      'Vector Spaces: Subspaces, linear independence, basis, dimension & rank-nullity theorem',
      'Matrices & Systems: Determinants, inverse, Gaussian elimination, row echelon form',
      'Eigenvalues & Eigenvectors: Characteristic equation, diagonalization, spectral theorem',
      'Matrix Decompositions: LU, QR decomposition, Cholesky factorization',
      'Singular Value Decomposition (SVD): Low-rank approximation & pseudo-inverse applications'
    ] 
  },
  { 
    id: 'da_calc', 
    name: 'Calculus & Optimization', 
    phase: 1, 
    topics: [
      'Functions of Single Variable: Limits, continuity, differentiability, mean value theorems',
      'Multivariable Calculus: Partial derivatives, directional derivative, gradient, Hessian matrix',
      'Taylor Series: Multivariate Taylor expansions, maxima, minima & saddle point analysis',
      'Convex Optimization: Convex sets, convex functions, epigraph, Jensen’s inequality',
      'Optimization Algorithms: Gradient descent, SGD, momentum, Adam, Lagrange multipliers, KKT conditions'
    ] 
  },
  { 
    id: 'da_prob', 
    name: 'Probability & Statistics', 
    phase: 1, 
    topics: [
      'Probability Foundations: Sample space, axioms, conditional probability, Bayes’ theorem, independence',
      'Random Variables: PMF, PDF, CDF, expectation, variance, covariance & correlation coefficient',
      'Distributions: Bernoulli, Binomial, Poisson, Uniform, Exponential, Gaussian (Normal), Central Limit Theorem',
      'Estimation Theory: Law of large numbers, Maximum Likelihood Estimation (MLE), point estimation',
      'Hypothesis Testing: Null/alternative hypotheses, Type I/II errors, p-values, z-test, t-test, Chi-square'
    ] 
  },
  { 
    id: 'da_prog', 
    name: 'Programming, Data Structures & Algorithms', 
    phase: 1, 
    topics: [
      'Python Programming: Syntax, functions, OOP, list comprehensions, Numpy & Pandas basics',
      'Basic Data Structures: Arrays, singly/doubly linked lists, stacks, queues, hash tables',
      'Trees & Graphs: Binary search trees (BST), balanced trees, binary heaps, adjacency list/matrix',
      'Searching & Sorting: Binary search, quicksort, mergesort, heapsort, Big-O asymptotic analysis',
      'Algorithm Paradigms: Divide & conquer, dynamic programming, memoization, greedy strategies'
    ] 
  },
  { 
    id: 'da_dbms', 
    name: 'Database Management & Data Warehousing', 
    phase: 2, 
    topics: [
      'Relational Model: Relational algebra, domain constraints, integrity rules, ER diagrams',
      'SQL Mastery: DDL, DML, complex multi-table JOINs, nested subqueries, aggregations & GROUP BY',
      'Normalization: Functional dependencies, attribute closure, candidate keys, 1NF, 2NF, 3NF & BCNF',
      'Indexing & Storage: B-trees, B+ trees, hash indexes, query evaluation & execution plans',
      'Transactions & Warehousing: ACID properties, conflict serializability, WAL, star/snowflake schemas'
    ] 
  },
  { 
    id: 'da_ml', 
    name: 'Machine Learning', 
    phase: 2, 
    topics: [
      'Supervised Learning: Linear regression, Ridge (L2), Lasso (L1), polynomial regression',
      'Classification: Logistic regression, k-Nearest Neighbors (k-NN), Naive Bayes, Decision Trees',
      'Support Vector Machines (SVM): Hard/soft margin, kernel trick, slack variables & dual problem',
      'Ensemble Methods: Bagging, Random Forests, Gradient Boosted Trees, XGBoost, LightGBM',
      'Unsupervised Learning: K-Means clustering, Hierarchical clustering, DBSCAN, PCA dimensionality reduction',
      'Model Validation: Bias-variance tradeoff, cross-validation, precision, recall, F1-score, ROC-AUC'
    ] 
  },
  { 
    id: 'da_ai', 
    name: 'Artificial Intelligence & Deep Learning', 
    phase: 2, 
    topics: [
      'Heuristic Search: Uninformed search (BFS, DFS), Informed search (A*, Greedy Best-First, admissibility)',
      'Adversarial Search: Minimax algorithm, Alpha-Beta pruning, game playing algorithms',
      'Knowledge Representation: Propositional logic, first-order predicate logic, inference rules & resolution',
      'Neural Networks: Perceptrons, Multi-Layer Perceptrons, forward pass, backpropagation, activation functions',
      'Deep Architectures: Convolutional Neural Networks (CNN), Recurrent Networks (RNN, LSTM), Transformers basics'
    ] 
  },
  { 
    id: 'da_aptitude', 
    name: 'General Aptitude (Common 15 Marks)', 
    phase: 2, 
    topics: [
      'Quantitative Aptitude: Percentages, ratios, series, permutations & combinations, probability',
      'Analytical Reasoning: Deductive inference, syllogisms, truth-teller logic, graph analysis',
      'Spatial Aptitude: 2D shape assembly, mirror reflection, rotational transformations',
      'Verbal Ability: Grammar correction, vocabulary, contextual comprehension, sentence ordering'
    ] 
  }
];

// Study Phase Schedule
const PHASES = [
  { n: '1. Core Foundations', s: '2026-11-11', e: '2026-12-06' },
  { n: '2. Advanced & Branch Modules', s: '2026-12-07', e: '2026-12-31' },
  { n: '3. Practice & PYQ Revision', s: '2027-01-01', e: '2027-01-24' },
  { n: '4. Final Mock Stretch', s: '2027-01-25', e: '2027-02-05' }
];

const PLAN_TOTAL_HOURS = 369;
const WEEKLY_TARGET_HOURS = 30;
const STORAGE_KEY = 'gate2027_dashboard_progress_v3';

interface DashboardState {
  done: Record<string, boolean>; // key: subjectId + index
  mocks: Array<{ d: string; s: number }>;
  hours: Record<string, number>; // dateStr -> hours
  exam: string; // ISO date 'YYYY-MM-DD'
  selectedTrack: 'RA' | 'DA';
}

const parseDate = (s: string) => {
  const parts = s.split('-');
  return new Date(+parts[0], +parts[1] - 1, +parts[2]);
};

const toIso = (d: Date) => 
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

const getDayZero = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const DAY_MS = 864e5;

const formatDate = (s: string) => {
  try {
    return parseDate(s).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  } catch {
    return s;
  }
};

const calcPercent = (part: number, total: number) => 
  total > 0 ? Math.round((part / total) * 100) : 0;

export const DashboardView: React.FC = () => {
  const { activePaper, setActivePaper, setActiveTab } = useApp();

  // Dashboard state: strictly RA or DA
  const [state, setState] = useState<DashboardState>(() => {
    const initialTrack: 'RA' | 'DA' = activePaper === 'DA' ? 'DA' : 'RA';
    const defaultState: DashboardState = {
      done: {},
      mocks: [
        { d: '2026-10-25', s: 42.5 },
        { d: '2026-11-05', s: 51.0 },
        { d: '2026-11-18', s: 58.5 }
      ],
      hours: {},
      exam: '2027-02-06',
      selectedTrack: initialTrack
    };

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Force track to be RA or DA only (sanitize any old ECE reference)
        const validTrack: 'RA' | 'DA' = parsed.selectedTrack === 'DA' ? 'DA' : 'RA';
        return { ...defaultState, ...parsed, selectedTrack: validTrack };
      }
    } catch {
      // fallback
    }
    return defaultState;
  });

  // Keep state.selectedTrack in sync with AppContext activePaper
  useEffect(() => {
    if (activePaper === 'RA' || activePaper === 'DA') {
      if (state.selectedTrack !== activePaper) {
        setState(prev => ({ ...prev, selectedTrack: activePaper }));
      }
    }
  }, [activePaper]);

  // Form inputs
  const [hourInput, setHourInput] = useState<string>('');
  const [mockScoreInput, setMockScoreInput] = useState<string>('');
  const [mockDateInput, setMockDateInput] = useState<string>(toIso(new Date()));
  const [examDateInput, setExamDateInput] = useState<string>(state.exam);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore quota
    }
  }, [state]);

  // Current track subjects: ONLY RA or DA
  const currentSubjects = useMemo(() => {
    return state.selectedTrack === 'DA' ? DA_SUBJECTS : RA_SUBJECTS;
  }, [state.selectedTrack]);

  // Calculations
  const now = getDayZero(new Date());
  const todayIso = toIso(now);
  const examDate = parseDate(state.exam);
  const daysLeft = Math.round((examDate.getTime() - now.getTime()) / DAY_MS);

  // Syllabus completion
  let totalTopics = 0;
  let doneTopics = 0;
  currentSubjects.forEach(subj => {
    totalTopics += subj.topics.length;
    subj.topics.forEach((_, idx) => {
      if (state.done[`${subj.id}_${idx}`]) {
        doneTopics++;
      }
    });
  });
  const syllabusPercent = calcPercent(doneTopics, totalTopics);

  // Hours logged
  const totalHoursLogged = Object.values(state.hours).reduce((acc, h) => acc + h, 0);

  // This week hours (Monday to Sunday)
  const weekStart = new Date(now);
  weekStart.setDate(weekStart.getDate() - ((weekStart.getDay() + 6) % 7));
  let weekHours = 0;
  for (let i = 0; i < 7; i++) {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + i);
    weekHours += state.hours[toIso(d)] || 0;
  }
  const todayHours = state.hours[todayIso] || 0;

  // Study streak
  let streak = 0;
  const checkDay = new Date(now);
  if (!state.hours[todayIso]) {
    checkDay.setDate(checkDay.getDate() - 1);
  }
  while ((state.hours[toIso(checkDay)] || 0) > 0) {
    streak++;
    checkDay.setDate(checkDay.getDate() - 1);
  }

  // Mock test stats
  const mockScores = state.mocks.map(m => m.s);
  const avgMockScore = mockScores.length ? mockScores.reduce((a, b) => a + b, 0) / mockScores.length : 0;
  const bestMockScore = mockScores.length ? Math.max(...mockScores) : 0;

  // Phase timeline calculation
  const phaseStart = parseDate(PHASES[0].s);
  const phaseEnd = parseDate(PHASES[3].e);
  const totalPhaseSpanDays = (phaseEnd.getTime() - phaseStart.getTime()) / DAY_MS + 1;

  let currentPhaseIndex = -1;
  PHASES.forEach((p, idx) => {
    if (now >= parseDate(p.s) && now <= parseDate(p.e)) {
      currentPhaseIndex = idx;
    }
  });
  const isBeforePlan = now < phaseStart;
  const isAfterPlan = now > phaseEnd;

  let timelinePinPercent = 0;
  if (!isBeforePlan && !isAfterPlan) {
    const elapsedDays = (now.getTime() - phaseStart.getTime()) / DAY_MS;
    timelinePinPercent = Math.min(99.5, Math.max(0, (elapsedDays / totalPhaseSpanDays) * 100));
  }

  // Today's focus & plan tailored specifically for RA / DA
  const dayOfWeekIndex = now.getDay();
  const dayName = now.toLocaleDateString('en-GB', { weekday: 'long' });

  const RA_PHASE_DESCRIPTIONS = [
    'Core foundations: Engineering Maths, Linear Algebra, Robot Kinematics (D-H parameters) & Mechatronics',
    'Advanced Robotics: Robot Dynamics (Lagrangian), State-Space Control, PLC/CIM & Autonomous SLAM',
    'Intense practice: Previous year papers, sectional mock tests on robot kinematics & trajectory control',
    'Final stretch: Full 3-hour mocks in actual GATE slot (9:30 AM), formula cheat sheets & mistake notebook review'
  ];

  const DA_PHASE_DESCRIPTIONS = [
    'Core foundations: Linear Algebra (SVD, Eigenvalues), Multivariate Calculus, Probability, Python & Algorithms',
    'Machine Learning & Databases: Relational SQL, Normalization, SVM, Tree Ensembles, Deep Neural Networks',
    'Intense practice: High-yield problem solving, mock tests on optimization, regression & SQL query execution',
    'Final stretch: Full 3-hour mocks in actual GATE slot (9:30 AM), formula cheat sheets & error pattern revision'
  ];

  const currentPhaseDescription = state.selectedTrack === 'DA' 
    ? DA_PHASE_DESCRIPTIONS[Math.max(0, currentPhaseIndex)] 
    : RA_PHASE_DESCRIPTIONS[Math.max(0, currentPhaseIndex)];

  let dailyRecommendation = '';
  if (currentPhaseIndex <= 1) {
    if (dayOfWeekIndex === 6) { // Saturday
      dailyRecommendation = `4 hrs on week’s next unchecked ${state.selectedTrack} syllabus topics + 3 hrs timed problem solving`;
    } else if (dayOfWeekIndex === 0) { // Sunday
      dailyRecommendation = '3 hrs weekly consolidation + 1 hr sectional test; dedicate evening to Engineering Maths & General Aptitude (15M)';
    } else {
      dailyRecommendation = `2.5 hrs deep subject theory & notes on ${state.selectedTrack} + 1.5 hrs high-yield practice on the same topic`;
    }
  } else if (currentPhaseIndex === 2) {
    dailyRecommendation = '2 full-length mocks this week (3 hrs each); spend equal time analyzing mistake log. Otherwise PYQs & weak-topic recovery.';
  } else {
    dailyRecommendation = 'One full mock test every 2–3 days during your actual exam slot time (9:30 AM - 12:30 PM). Revise formula cheat sheets and sleep at least 7.5 hrs.';
  }

  // Find next unchecked topic
  let nextUncheckedSubject: DashboardSubject | null = null;
  let nextUncheckedTopic: string | null = null;
  for (const subj of currentSubjects) {
    for (let i = 0; i < subj.topics.length; i++) {
      if (!state.done[`${subj.id}_${i}`]) {
        nextUncheckedSubject = subj;
        nextUncheckedTopic = subj.topics[i];
        break;
      }
    }
    if (nextUncheckedTopic) break;
  }

  // Toggle topic
  const toggleTopic = (subjId: string, idx: number) => {
    const key = `${subjId}_${idx}`;
    setState(prev => {
      const nextDone = { ...prev.done };
      if (nextDone[key]) {
        delete nextDone[key];
      } else {
        nextDone[key] = true;
      }
      return { ...prev, done: nextDone };
    });
  };

  // Add study hours
  const handleAddHours = () => {
    const val = parseFloat(hourInput);
    if (isNaN(val) || val <= 0 || val > 18) return;
    const currentToday = state.hours[todayIso] || 0;
    const updated = Math.round((currentToday + val) * 10) / 10;
    setState(prev => ({
      ...prev,
      hours: { ...prev.hours, [todayIso]: updated }
    }));
    setHourInput('');
  };

  // Undo today's hours
  const handleUndoHours = () => {
    setState(prev => {
      const nextHours = { ...prev.hours };
      delete nextHours[todayIso];
      return { ...prev, hours: nextHours };
    });
  };

  // Add mock score
  const handleAddMock = () => {
    const score = parseFloat(mockScoreInput);
    if (isNaN(score) || score < 0 || score > 100) return;
    const d = mockDateInput || todayIso;
    const updatedMocks = [...state.mocks, { d, s: Math.round(score * 10) / 10 }];
    updatedMocks.sort((a, b) => (a.d < b.d ? -1 : a.d > b.d ? 1 : 0));
    setState(prev => ({ ...prev, mocks: updatedMocks }));
    setMockScoreInput('');
  };

  // Delete mock score
  const handleDeleteMock = (idx: number) => {
    setState(prev => {
      const nextMocks = [...prev.mocks];
      nextMocks.splice(idx, 1);
      return { ...prev, mocks: nextMocks };
    });
  };

  // Update exam date
  const handleUpdateExamDate = () => {
    if (!examDateInput) return;
    setState(prev => ({ ...prev, exam: examDateInput }));
  };

  // Switch Track between RA and DA
  const handleSelectTrack = (track: 'RA' | 'DA') => {
    setState(prev => ({ ...prev, selectedTrack: track }));
    setActivePaper(track);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 font-sans">
      {/* Header & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span className="text-indigo-400">GATE 2027</span>
              <span>·</span>
              <span className={state.selectedTrack === 'RA' ? 'text-amber-400' : 'text-teal-400'}>
                {state.selectedTrack === 'RA' ? 'Robotics & Automation (RA)' : 'Data Science & AI (DA)'} Dashboard
              </span>
            </h1>
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              Live Prep
            </span>
          </div>
          <p className="text-slate-400 text-sm mt-1">
            Exam Target: <span className="font-semibold text-slate-200">{formatDate(state.exam)}</span> ·{' '}
            <span className="text-amber-400 font-semibold">
              {daysLeft > 0 ? `${daysLeft} days to go` : daysLeft === 0 ? 'Today is Exam Day!' : 'Exam completed'}
            </span>
          </p>
        </div>

        {/* Paper Track Switcher: Strictly RA & DA */}
        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1 gap-1 self-start md:self-auto">
          <button
            onClick={() => handleSelectTrack('RA')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              state.selectedTrack === 'RA'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Robotics & Automation (RA)</span>
          </button>
          <button
            onClick={() => handleSelectTrack('DA')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              state.selectedTrack === 'DA'
                ? 'bg-teal-600 text-white font-bold shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            <span>Data Science & AI (DA)</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-6">
        {/* KPI 1: Days Left */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">
              {Math.max(daysLeft, 0)}
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Days Remaining</span>
            </div>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
            <div 
              className="bg-amber-500 h-full rounded-full transition-all duration-500" 
              style={{ width: `${Math.min(100, Math.max(5, (daysLeft / 450) * 100))}%` }} 
            />
          </div>
        </div>

        {/* KPI 2: Syllabus Done */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">
              {syllabusPercent}%
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Syllabus ({doneTopics}/{totalTopics})</span>
            </div>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
            <div 
              className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
              style={{ width: `${syllabusPercent}%` }} 
            />
          </div>
        </div>

        {/* KPI 3: Hours Logged */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">
              {totalHoursLogged % 1 === 0 ? totalHoursLogged : totalHoursLogged.toFixed(1)}
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span>Logged / {PLAN_TOTAL_HOURS}h plan</span>
            </div>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
            <div 
              className="bg-indigo-500 h-full rounded-full transition-all duration-500" 
              style={{ width: `${Math.min(100, (totalHoursLogged / PLAN_TOTAL_HOURS) * 100)}%` }} 
            />
          </div>
        </div>

        {/* KPI 4: Mocks Taken */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between shadow-xs">
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight">
              {state.mocks.length}
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-purple-400" />
              <span>Mocks Completed</span>
            </div>
          </div>
          <div className="text-[11px] text-slate-400 mt-2 font-mono">
            {state.mocks.length ? (
              <span>Avg <strong className="text-slate-200">{avgMockScore.toFixed(1)}</strong> · Top <strong className="text-amber-400">{bestMockScore}</strong></span>
            ) : (
              <span>No mocks logged</span>
            )}
          </div>
        </div>

        {/* KPI 5: Study Streak */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between shadow-xs col-span-2 sm:col-span-1">
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-1.5">
              <span>{streak}</span>
              <Flame className="w-6 h-6 text-orange-500 fill-orange-500 animate-pulse" />
            </div>
            <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
              <span>Day Study Streak</span>
            </div>
          </div>
          <div className="text-[11px] text-slate-400 mt-2">
            {streak > 0 ? (
              <span className="text-emerald-400 font-semibold">Keep momentum strong!</span>
            ) : (
              <span>Log study today to start streak</span>
            )}
          </div>
        </div>
      </div>

      {/* Phase Timeline Section */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 mb-6 shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <Compass className="w-4 h-4 text-indigo-400" />
            <span>Preparation Phase Timeline</span>
          </h2>
          <span className="text-xs font-mono text-slate-400">
            {isBeforePlan
              ? `Plan starts ${formatDate(PHASES[0].s)}`
              : isAfterPlan
              ? 'Study phases completed! Fine-tune revisions.'
              : currentPhaseIndex >= 0
              ? `${PHASES[currentPhaseIndex].n}: ${formatDate(PHASES[currentPhaseIndex].s)} to ${formatDate(PHASES[currentPhaseIndex].e)}`
              : ''}
          </span>
        </div>

        {/* Visual Timeline Bar */}
        <div className="relative pt-4 pb-2">
          <div className="flex gap-1.5 relative w-full">
            {PHASES.map((p, idx) => {
              const start = parseDate(p.s);
              const end = parseDate(p.e);
              const phaseDays = (end.getTime() - start.getTime()) / DAY_MS + 1;
              const isCurrent = idx === currentPhaseIndex;
              const isPast = isAfterPlan || (currentPhaseIndex > idx);

              return (
                <div
                  key={idx}
                  style={{ flex: phaseDays }}
                  className={`py-2 px-1 text-center rounded-lg text-xs font-semibold transition-all truncate border ${
                    isCurrent
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-md shadow-indigo-600/30'
                      : isPast
                      ? 'bg-emerald-950/70 border-emerald-700/60 text-emerald-300'
                      : 'bg-slate-800/80 border-slate-700/50 text-slate-400'
                  }`}
                  title={`${p.n} (${formatDate(p.s)} - ${formatDate(p.e)})`}
                >
                  <span className="hidden sm:inline">{p.n}</span>
                  <span className="sm:hidden">P{idx + 1}</span>
                </div>
              );
            })}

            {/* Current Day Marker Pin */}
            {!isBeforePlan && !isAfterPlan && (
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-amber-400 shadow-md shadow-amber-400/50 z-10"
                style={{ left: `${timelinePinPercent}%` }}
              >
                <div className="absolute -top-3.5 -left-1.5 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-slate-950 shadow-sm flex items-center justify-center">
                  <div className="w-1 h-1 bg-slate-950 rounded-full" />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Two Column Grid: Today's Focus & Log Study Hours */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Card: Today's Focus */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-400" />
                <span>Today’s Study Directives ({state.selectedTrack})</span>
              </h2>
              <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                {dayName}
              </span>
            </div>

            <div className="text-xs text-slate-400 font-mono mb-2">
              Phase Focus: <span className="text-slate-200">{currentPhaseDescription}</span>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 rounded-lg p-3 text-sm text-slate-200 leading-relaxed mb-4">
              {dailyRecommendation}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80">
            {nextUncheckedSubject && nextUncheckedTopic ? (
              <div className="flex items-start gap-2 text-xs">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400">Next Recommended Topic: </span>
                  <strong className={state.selectedTrack === 'RA' ? 'text-amber-400' : 'text-teal-400'}>
                    {nextUncheckedSubject.name}
                  </strong>
                  <span className="text-slate-400"> → </span>
                  <span className="text-white font-medium underline underline-offset-2">{nextUncheckedTopic}</span>
                </div>
              </div>
            ) : (
              <div className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>All {state.selectedTrack} topics checked! Proceed to full timed mock tests & formula revision.</span>
              </div>
            )}
          </div>
        </div>

        {/* Card: Log Study Hours */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span>Log Study Hours</span>
            </h2>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <input
                type="number"
                min="0"
                max="18"
                step="0.5"
                placeholder="Hours (e.g. 2.5)"
                value={hourInput}
                onChange={e => setHourInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAddHours()}
                className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 w-36 focus:outline-hidden focus:border-indigo-500 font-mono"
              />
              <button
                onClick={handleAddHours}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Today</span>
              </button>
              <button
                onClick={handleUndoHours}
                title="Reset today's hours"
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-3 py-2.5 rounded-lg border border-slate-700 transition-colors flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Undo</span>
              </button>
            </div>
          </div>

          <div className="bg-slate-950/60 border border-slate-800 rounded-lg p-3 text-xs">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-400">
                Today: <strong className="text-white font-mono">{todayHours}h</strong>
              </span>
              <span className="text-slate-400">
                This Week: <strong className="text-white font-mono">{weekHours}h</strong> / {WEEKLY_TARGET_HOURS}h Target
              </span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  weekHours >= WEEKLY_TARGET_HOURS ? 'bg-emerald-500' : 'bg-indigo-500'
                }`}
                style={{ width: `${Math.min(100, (weekHours / WEEKLY_TARGET_HOURS) * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Grid: Mock Tests & Exam Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Card: Mock Tests */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span>Mock Tests Performance</span>
              </h2>
              <span className="text-xs text-slate-400 font-mono">Max 100 Marks</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <input
                type="number"
                min="0"
                max="100"
                step="0.5"
                placeholder="Score /100"
                value={mockScoreInput}
                onChange={e => setMockScoreInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAddMock()}
                className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 w-28 focus:outline-hidden focus:border-purple-500 font-mono"
              />
              <input
                type="date"
                value={mockDateInput}
                onChange={e => setMockDateInput(e.target.value)}
                className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-hidden focus:border-purple-500 font-mono"
              />
              <button
                onClick={handleAddMock}
                className="bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs px-3.5 py-2.5 rounded-lg transition-colors flex items-center gap-1 shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Mock</span>
              </button>
            </div>

            {/* Score Trend SVG Sparkline */}
            {state.mocks.length > 1 ? (
              <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-2.5 my-3">
                <div className="text-[11px] text-slate-400 font-mono mb-1 flex justify-between">
                  <span>Score Trend Curve</span>
                  <span className="text-purple-400">Latest: {state.mocks[state.mocks.length - 1].s}/100</span>
                </div>
                {(() => {
                  const W = 360;
                  const H = 85;
                  const n = state.mocks.length;
                  const pts = state.mocks.map((m, i) => {
                    const x = 15 + (i * (W - 30)) / (n - 1);
                    const y = H - 12 - (m.s / 100) * (H - 24);
                    return [x, y];
                  });
                  const polylinePoints = pts.map(p => p.join(',')).join(' ');

                  return (
                    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-20 overflow-visible">
                      {/* Grid lines */}
                      <line x1="15" x2={W - 15} y1={H - 12} y2={H - 12} stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="15" x2={W - 15} y1={H / 2} y2={H / 2} stroke="#1e293b" strokeWidth="1" />
                      {/* Polyline */}
                      <polyline fill="none" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" points={polylinePoints} />
                      {/* Points */}
                      {pts.map((p, i) => (
                        <g key={i}>
                          <circle cx={p[0]} cy={p[1]} r="4" fill="#a855f7" stroke="#020617" strokeWidth="2" />
                          <text x={p[0]} y={p[1] - 8} fill="#e2e8f0" fontSize="9" textAnchor="middle" fontFamily="monospace">
                            {state.mocks[i].s}
                          </text>
                        </g>
                      ))}
                    </svg>
                  );
                })()}
              </div>
            ) : null}
          </div>

          {/* Past Mocks List */}
          <div className="max-h-36 overflow-y-auto space-y-1.5 pr-1 mt-2 text-xs">
            {state.mocks.length ? (
              state.mocks.slice().reverse().map((m, revIdx) => {
                const originalIndex = state.mocks.length - 1 - revIdx;
                return (
                  <div
                    key={originalIndex}
                    className="flex justify-between items-center bg-slate-950/40 border border-slate-800/80 rounded-md px-3 py-1.5 hover:bg-slate-950/80 transition-colors"
                  >
                    <span className="font-mono text-slate-300">{formatDate(m.d)}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-purple-400 font-mono">{m.s} / 100</span>
                      <button
                        onClick={() => handleDeleteMock(originalIndex)}
                        title="Delete entry"
                        className="text-slate-500 hover:text-red-400 p-1 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-slate-500 text-center py-4 italic">No mock scores logged yet.</div>
            )}
          </div>
        </div>

        {/* Card: Exam Date & Goal Setter */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Official GATE Exam Date</span>
            </h2>

            <div className="flex items-center gap-2 mb-4">
              <input
                type="date"
                value={examDateInput}
                onChange={e => setExamDateInput(e.target.value)}
                className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-hidden focus:border-amber-500 font-mono"
              />
              <button
                onClick={handleUpdateExamDate}
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs px-3.5 py-2.5 rounded-lg border border-slate-700 transition-colors"
              >
                Update Date
              </button>
            </div>

            <div className="bg-slate-950/60 border border-slate-800/90 rounded-lg p-3 text-xs text-slate-400 space-y-2">
              <p>
                Default slot is <strong className="text-slate-200">6 Feb 2027</strong> (GATE 2027 by IIT Madras).
              </p>
              <p>
                Once IIT Madras releases your admit card with exact session schedule for <strong className="text-slate-300">{state.selectedTrack}</strong>, adjust this date to keep your countdown & pacing aligned.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 mt-4 flex items-center justify-between text-xs">
            <span className="text-slate-400">Looking for subject notes?</span>
            <button
              onClick={() => setActiveTab('notes')}
              className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 transition-colors"
            >
              <span>Open Notes Workspace</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Syllabus Progress Section */}
      <section className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <span>Syllabus Preparation & Topic Checklist ({state.selectedTrack === 'RA' ? 'Robotics & Automation' : 'Data Science & AI'})</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Check off topics as you finish theory & PYQs. Your overall completion percentage and next recommendation automatically recalculate.
            </p>
          </div>
          <div className="text-xs font-mono text-emerald-400 font-semibold self-start sm:self-auto bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
            {doneTopics} of {totalTopics} Topics Completed ({syllabusPercent}%)
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentSubjects.map(subj => {
            const completedCount = subj.topics.filter((_, idx) => state.done[`${subj.id}_${idx}`]).length;
            const pct = calcPercent(completedCount, subj.topics.length);
            const isCompleted = pct === 100;

            return (
              <div
                key={subj.id}
                className={`bg-slate-900/90 border rounded-xl p-4 flex flex-col justify-between transition-all ${
                  isCompleted
                    ? 'border-emerald-500/40 bg-emerald-950/10'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="font-bold text-white text-sm tracking-tight">{subj.name}</h3>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                      Phase {subj.phase} · {pct}%
                    </span>
                  </div>

                  {/* Subject Progress Bar */}
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-3">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        isCompleted ? 'bg-emerald-500' : state.selectedTrack === 'RA' ? 'bg-amber-500' : 'bg-teal-500'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  {/* Topic Checkboxes */}
                  <div className="space-y-2 mt-3">
                    {subj.topics.map((topicName, idx) => {
                      const isChecked = Boolean(state.done[`${subj.id}_${idx}`]);
                      return (
                        <label
                          key={idx}
                          className="flex items-start gap-2 text-xs cursor-pointer group py-0.5"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleTopic(subj.id, idx)}
                            className="mt-0.5 rounded-sm border-slate-700 bg-slate-950 text-emerald-500 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                          />
                          <span
                            className={`transition-colors select-none leading-relaxed ${
                              isChecked
                                ? 'text-slate-500 line-through'
                                : 'text-slate-300 group-hover:text-white'
                            }`}
                          >
                            {topicName}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/60 mt-3 text-[11px] text-slate-500 flex justify-between items-center">
                  <span>{completedCount} / {subj.topics.length} done</span>
                  {isCompleted && (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Mastered</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Academic Disclaimer & Official Portal Note */}
      <div className="text-xs text-slate-500 border-t border-slate-800/80 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <p>
          Syllabus is mapped directly to the official GATE 2027 papers for <strong className="text-slate-400">Robotics & Automation (RA)</strong> and <strong className="text-slate-400">Data Science & AI (DA)</strong>. Cross-check updates at{' '}
          <a
            href="https://gate2027.iitm.ac.in/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-slate-400 underline hover:text-slate-200"
          >
            gate2027.iitm.ac.in
          </a>
          .
        </p>
        <div className="text-[11px] font-mono text-slate-400">
          State auto-saved locally in browser
        </div>
      </div>
    </div>
  );
};
