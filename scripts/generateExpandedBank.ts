import fs from 'fs';
import path from 'path';

interface Question {
  id: string;
  paper: 'RA' | 'DA';
  subject: string;
  topicId: string;
  topicTitle: string;
  year?: number;
  provenance: 'syllabus_overlap_pyq' | 'author_practice' | 'official_mock';
  provenanceLabel: string;
  originalPaper?: string;
  type: 'MCQ' | 'MSQ' | 'NAT';
  marks: 1 | 2;
  negativeMarking: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  text: string;
  options?: { id: string; text: string }[];
  correctAnswer: string | string[] | { exact: number; min: number; max: number };
  explanation: string;
  hints: string[];
  trapAlert?: string;
  tags: string[];
}

// 15 syllabus nodes
const TOPICS = [
  { id: 'ra-math-la', paper: 'RA' as const, subject: 'Engineering Mathematics', title: 'Linear Algebra' },
  { id: 'ra-math-calc-de', paper: 'RA' as const, subject: 'Engineering Mathematics', title: 'Calculus, Differential Equations & Numerical Methods' },
  { id: 'ra-mechatronics-circuits-sensors', paper: 'RA' as const, subject: 'Basics of Mechatronics', title: 'Sensors, Actuators & Digital Circuits' },
  { id: 'ra-robotics-kinematics-transforms', paper: 'RA' as const, subject: 'Principles of Robotics & Automation', title: 'Robot Kinematics & Coordinate Transformations' },
  { id: 'ra-robotics-dynamics-path-endeffectors', paper: 'RA' as const, subject: 'Principles of Robotics & Automation', title: 'Robot Trajectory, End-Effectors & Repeatability' },
  { id: 'ra-cim-plc-automation', paper: 'RA' as const, subject: 'Principles of Robotics & Automation', title: 'CIM, PLC, CNC & Workcells' },
  { id: 'ra-b1-control-systems', paper: 'RA' as const, subject: 'Engineering Common & Control', title: 'Control Systems & PID' },
  { id: 'ra-b2-mechanics-materials', paper: 'RA' as const, subject: 'Engineering Common & Mechanics', title: 'Mechanics of Materials' },
  { id: 'da-prob-stats', paper: 'DA' as const, subject: 'Probability & Statistics', title: 'Probability & Statistics' },
  { id: 'da-linear-algebra', paper: 'DA' as const, subject: 'Linear Algebra', title: 'Linear Algebra, SVD & PCA' },
  { id: 'da-calc-opt', paper: 'DA' as const, subject: 'Calculus & Optimization', title: 'Calculus & Convex Optimization' },
  { id: 'da-prog-dsa', paper: 'DA' as const, subject: 'Programming & Data Structures', title: 'Programming, Python, Data Structures & Algorithms' },
  { id: 'da-dbms', paper: 'DA' as const, subject: 'Database Management Systems', title: 'Database Management Systems & SQL' },
  { id: 'da-machine-learning', paper: 'DA' as const, subject: 'Machine Learning', title: 'Supervised & Unsupervised Machine Learning' },
  { id: 'da-ai-search-logic', paper: 'DA' as const, subject: 'Artificial Intelligence', title: 'AI Heuristic Search, Adversarial Search & Logic' }
];

console.log("Preparing to generate bank for", TOPICS.length, "topics...");
