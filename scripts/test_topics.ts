import fs from 'fs';
import path from 'path';

// Definition of 15 syllabus nodes
const TOPICS = [
  { id: 'ra-math-la', paper: 'RA', subject: 'Engineering Mathematics', title: 'Linear Algebra' },
  { id: 'ra-math-calc-de', paper: 'RA', subject: 'Engineering Mathematics', title: 'Calculus, Differential Equations & Numerical Methods' },
  { id: 'ra-mechatronics-circuits-sensors', paper: 'RA', subject: 'Basics of Mechatronics', title: 'Sensors, Actuators & Digital Circuits' },
  { id: 'ra-robotics-kinematics-transforms', paper: 'RA', subject: 'Principles of Robotics & Automation', title: 'Robot Kinematics & Coordinate Transformations' },
  { id: 'ra-robotics-dynamics-path-endeffectors', paper: 'RA', subject: 'Principles of Robotics & Automation', title: 'Robot Trajectory, End-Effectors & Repeatability' },
  { id: 'ra-cim-plc-automation', paper: 'RA', subject: 'Principles of Robotics & Automation', title: 'CIM, PLC, CNC & Workcells' },
  { id: 'ra-b1-control-systems', paper: 'RA', subject: 'Engineering Common & Control', title: 'Control Systems & PID' },
  { id: 'ra-b2-mechanics-materials', paper: 'RA', subject: 'Engineering Common & Mechanics', title: 'Mechanics of Materials' },
  { id: 'da-prob-stats', paper: 'DA', subject: 'Probability & Statistics', title: 'Probability & Statistics' },
  { id: 'da-linear-algebra', paper: 'DA', subject: 'Linear Algebra', title: 'Linear Algebra, SVD & PCA' },
  { id: 'da-calc-opt', paper: 'DA', subject: 'Calculus & Optimization', title: 'Calculus & Convex Optimization' },
  { id: 'da-prog-dsa', paper: 'DA', subject: 'Programming & Data Structures', title: 'Programming, Python, Data Structures & Algorithms' },
  { id: 'da-dbms', paper: 'DA', subject: 'Database Management Systems', title: 'Database Management Systems & SQL' },
  { id: 'da-machine-learning', paper: 'DA', subject: 'Machine Learning', title: 'Supervised & Unsupervised Machine Learning' },
  { id: 'da-ai-search-logic', paper: 'DA', subject: 'Artificial Intelligence', title: 'AI Heuristic Search, Adversarial Search & Logic' }
];

console.log("Topics count:", TOPICS.length);
