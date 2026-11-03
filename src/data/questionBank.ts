import { Question } from '../types';
import { EXPANDED_QUESTION_BANK } from './expandedQuestionBank';

const INITIAL_BENCHMARK_QUESTIONS: Question[] = [
  // ==========================================
  // RA QUESTIONS (SYLLABUS OVERLAP & ORIGINAL PRACTICE)
  // ==========================================
  {
    id: 'ra-q-01',
    paper: 'RA',
    subject: 'Principles of Robotics & Automation',
    topicId: 'ra-robotics-kinematics-transforms',
    topicTitle: 'Robot Kinematics & Coordinate Transformations',
    year: 2023,
    provenance: 'syllabus_overlap_pyq',
    provenanceLabel: 'GATE 2023 IN Overlap (Official Instrumentation PYQ)',
    originalPaper: 'IN',
    type: 'MCQ',
    marks: 2,
    negativeMarking: 0.66,
    difficulty: 'Medium',
    text: 'A point $P$ has coordinates $[2, 3, 4]^T$ with respect to a frame $\{A\}$. The frame $\{B\}$ is obtained by rotating frame $\{A\}$ about the $Z_A$-axis by an angle of $90^\\circ$ counter-clockwise, followed by translating it by $d = [1, -1, 0]^T$ relative to $\{A\}$. What are the coordinates of point $P$ expressed in frame $\{B\}$, i.e., $^B P$?',
    options: [
      { id: 'A', text: '$[4, -1, 4]^T$' },
      { id: 'B', text: '$[4, 1, 4]^T$' },
      { id: 'C', text: '$[2, -1, 4]^T$' },
      { id: 'D', text: '$[-4, 1, 4]^T$' }
    ],
    correctAnswer: 'A',
    explanation: `We are given $^A P = [2, 3, 4]^T$ and the relation describing frame $\{B\}$ relative to $\{A\}$:
Rotation matrix $^A_B R = R_z(90^\\circ) = \\begin{bmatrix} 0 & -1 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$, and origin position $^A P_{Borg} = [1, -1, 0]^T$.

The homogeneous transformation of $\{B\}$ relative to $\{A\}$ is:
$^A_B T = \\begin{bmatrix} 0 & -1 & 0 & 1 \\\\ 1 & 0 & 0 & -1 \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & 1 \\end{bmatrix}$.

To express point $P$ in frame $\{B\}$, we need the inverse transformation:
$^B P = (^A_B R)^T (^A P - ^A P_{Borg})$.

First:
$^A P - ^A P_{Borg} = \\begin{bmatrix} 2 - 1 \\\\ 3 - (-1) \\\\ 4 - 0 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 4 \\\\ 4 \\end{bmatrix}$.

Now multiply by $(^A_B R)^T = \\begin{bmatrix} 0 & 1 & 0 \\\\ -1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}$:
$^B P = \\begin{bmatrix} 0 & 1 & 0 \\\\ -1 & 0 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 4 \\\\ 4 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ -1 \\\\ 4 \\end{bmatrix}$.

Hence, Option (A) is correct.`,
    hints: [
      'Remember that $^B P = (^A_B R)^T (^A P - ^A P_{Borg})$, not $^A_B R \\cdot ^A P + d$.',
      'The transpose of a rotation matrix represents its inverse: $R^{-1} = R^T$.'
    ],
    trapAlert: 'Aspirants frequently compute $^A_B T \\cdot P$ instead of inverting to find $^B_A T \\cdot P$!',
    tags: ['Coordinate Transforms', 'Rotation Matrix', 'Homogeneous Transformations']
  },
  {
    id: 'ra-q-02',
    paper: 'RA',
    subject: 'Principles of Robotics & Automation',
    topicId: 'ra-robotics-kinematics-transforms',
    topicTitle: 'Robot Kinematics & Coordinate Transformations',
    provenance: 'author_practice',
    provenanceLabel: 'GATE 2027 RA Curated Practice (Author Created - Not PYQ)',
    type: 'NAT',
    marks: 2,
    negativeMarking: 0,
    difficulty: 'Medium',
    text: 'A planar 2-link revolute manipulator has link lengths $l_1 = 40\\text{ cm}$ and $l_2 = 30\\text{ cm}$. The joint angles are measured relative to the local reference axes as $\\theta_1 = 30^\\circ$ and $\\theta_2 = 45^\\circ$ (relative angle of link 2 to link 1). Compute the $X$-coordinate of the end-effector in cm (rounded off to one decimal place).',
    correctAnswer: { min: 42.0, max: 42.8, exact: 42.4 },
    explanation: `Forward kinematics for a 2R planar manipulator:
$x = l_1 \\cos(\\theta_1) + l_2 \\cos(\\theta_1 + \\theta_2)$
$y = l_1 \\sin(\\theta_1) + l_2 \\sin(\\theta_1 + \\theta_2)$

Given:
$l_1 = 40\\text{ cm}, \\theta_1 = 30^\\circ$
$l_2 = 30\\text{ cm}, \\theta_2 = 45^\\circ$
The absolute angle for link 2 is $\\theta_1 + \\theta_2 = 30^\\circ + 45^\\circ = 75^\\circ$.

Calculate:
$x = 40 \\cos(30^\\circ) + 30 \\cos(75^\\circ)$
$\\cos(30^\\circ) \\approx 0.8660 \\implies 40 \\times 0.8660 = 34.64\\text{ cm}$
$\\cos(75^\\circ) = \\cos(45^\\circ + 30^\\circ) = \\frac{\\sqrt{6} - \\sqrt{2}}{4} \\approx 0.2588 \\implies 30 \\times 0.2588 = 7.76\\text{ cm}$

$x = 34.64 + 7.76 = 42.4\\text{ cm}$.`,
    hints: [
      'In standard serial manipulators, link 2 angle is relative to link 1: $\\phi = \\theta_1 + \\theta_2$.',
      'Compute $\\cos(75^\\circ) = 0.2588$ accurately.'
    ],
    trapAlert: 'Do not multiply $l_2$ by $\\cos(\\theta_2)$ alone; the orientation accumulates along the serial kinematic chain!',
    tags: ['Forward Kinematics', 'Planar 2R', 'End-Effector Coordinates']
  },
  {
    id: 'ra-q-03',
    paper: 'RA',
    subject: 'Control Systems',
    topicId: 'ra-b1-control-systems',
    topicTitle: 'Feedback Control Systems & Stability',
    year: 2022,
    provenance: 'syllabus_overlap_pyq',
    provenanceLabel: 'GATE 2022 EE Overlap (Official Electrical PYQ)',
    originalPaper: 'EE',
    type: 'MCQ',
    marks: 1,
    negativeMarking: 0.33,
    difficulty: 'Easy',
    text: 'A unity negative feedback control system has the open-loop transfer function $G(s) = \\frac{K}{s(s + 2)(s + 5)}$. Using the Routh-Hurwitz criterion, find the range of positive gain $K$ for which the closed-loop system is strictly stable.',
    options: [
      { id: 'A', text: '$0 < K < 70$' },
      { id: 'B', text: '$0 < K < 35$' },
      { id: 'C', text: '$K > 70$' },
      { id: 'D', text: '$10 < K < 50$' }
    ],
    correctAnswer: 'A',
    explanation: `The closed-loop characteristic equation is:
$1 + G(s) = 0 \\implies s(s + 2)(s + 5) + K = 0$
$s(s^2 + 7s + 10) + K = 0 \\implies s^3 + 7s^2 + 10s + K = 0$.

Construct the Routh array:
- $s^3$: $1$, $10$
- $s^2$: $7$, $K$
- $s^1$: $\\frac{7 \\times 10 - 1 \\times K}{7} = \\frac{70 - K}{7}$
- $s^0$: $K$

For stability, all elements in the first column must be strictly positive:
1. $70 - K > 0 \\implies K < 70$
2. $K > 0$

Thus, $0 < K < 70$. Option (A) is correct.`,
    hints: [
      'Characteristic equation is $1 + G(s) H(s) = 0$. Expand $s(s+2)(s+5) + K = 0$.',
      'For a 3rd order polynomial $a s^3 + b s^2 + c s + d = 0$, stability requires $bc > ad$ and all coefficients $> 0$.'
    ],
    trapAlert: 'Remember that $bc > ad \\implies 7 \\times 10 > 1 \\times K \\implies K < 70$.',
    tags: ['Control Systems', 'Routh Hurwitz', 'Stability Criterion']
  },
  {
    id: 'ra-q-04',
    paper: 'RA',
    subject: 'Basics of Mechatronics',
    topicId: 'ra-mechatronics-circuits-sensors',
    topicTitle: 'Sensors, Actuators & Digital Circuits',
    provenance: 'author_practice',
    provenanceLabel: 'GATE 2027 RA Curated Practice (Author Created - Not PYQ)',
    type: 'MSQ',
    marks: 2,
    negativeMarking: 0,
    difficulty: 'Hard',
    text: 'Which of the following statements regarding optical encoders and actuators in robotic joint systems are CORRECT? (Select all that apply)',
    options: [
      { id: 'A', text: 'An incremental optical encoder with quadrature decoding provides 4 times the basic pulse resolution per revolution.' },
      { id: 'B', text: 'An absolute encoder retains its exact position across power outages without needing a homing sequence.' },
      { id: 'C', text: 'A stepper motor operated in open-loop mode provides infinite holding torque at high angular velocities.' },
      { id: 'D', text: 'Gray code is preferred over binary code on absolute encoder discs to prevent multi-bit read errors during transitions.' }
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation: `Statement Analysis:
(A) Correct. In quadrature decoding, transitions on both channels A and B (rising and falling edges of both channels) provide $4\\times$ resolution.
(B) Correct. Absolute encoders use unique bit patterns (often Gray code) for each angular sector, so position is immediately known upon power-up without homing.
(C) Incorrect. Stepper motor torque drops rapidly as speed increases due to back-EMF and winding inductance (pull-out torque characteristic). It does NOT provide infinite torque.
(D) Correct. Gray code changes only one bit at any single step transition, preventing spurious multi-bit glitching caused by slight mechanical sensor misalignments.

Correct statements are A, B, and D. (MSQ - No negative marking in GATE).`,
    hints: [
      'Think about quadrature edge counting: 2 channels $\\times$ 2 edges (rising & falling) = 4 states.',
      'Recall why Gray code was invented for optical disc patterns.'
    ],
    tags: ['Sensors', 'Encoders', 'Gray Code', 'Actuators']
  },

  // ==========================================
  // DA QUESTIONS (OFFICIAL PYQS & AUTHENTIC PRACTICE)
  // ==========================================
  {
    id: 'da-q-01',
    paper: 'DA',
    subject: 'Linear Algebra',
    topicId: 'da-linear-algebra',
    topicTitle: 'Linear Algebra & Matrix Decompositions',
    year: 2024,
    provenance: 'official_pyq',
    provenanceLabel: 'GATE 2024 DA (Official Inaugural PYQ)',
    originalPaper: 'DA',
    type: 'MCQ',
    marks: 1,
    negativeMarking: 0.33,
    difficulty: 'Easy',
    text: 'Let $A$ be a $3 \\times 3$ real matrix with eigenvalues $1, -1,$ and $2$. Which of the following is the determinant of the matrix $B = A^3 - 2A^2 + I$?',
    options: [
      { id: 'A', text: '$0$' },
      { id: 'B', text: '$-4$' },
      { id: 'C', text: '$4$' },
      { id: 'D', text: '$8$' }
    ],
    correctAnswer: 'A',
    explanation: `If $\\lambda$ is an eigenvalue of $A$, then for any polynomial $P(A)$, the eigenvalue of $P(A)$ is $P(\\lambda)$.
Given $P(A) = A^3 - 2A^2 + I$.
Eigenvalues of $A$: $\\lambda_1 = 1, \\lambda_2 = -1, \\lambda_3 = 2$.

Compute the eigenvalues of $B = P(A)$:
- For $\\lambda_1 = 1$: $\\mu_1 = 1^3 - 2(1)^2 + 1 = 1 - 2 + 1 = 0$
- For $\\lambda_2 = -1$: $\\mu_2 = (-1)^3 - 2(-1)^2 + 1 = -1 - 2 + 1 = -2$
- For $\\lambda_3 = 2$: $\\mu_3 = 2^3 - 2(2)^2 + 1 = 8 - 8 + 1 = 1$

The determinant of a matrix is the product of its eigenvalues:
$\\det(B) = \\mu_1 \\cdot \\mu_2 \\cdot \\mu_3 = 0 \\cdot (-2) \\cdot 1 = 0$.

Hence, Option (A) is correct.`,
    hints: [
      'Spectral mapping theorem: eigenvalues of $P(A)$ are $P(\\lambda_i)$.',
      'The determinant of any matrix equals the product of all its eigenvalues.'
    ],
    trapAlert: 'Notice immediately that $\\lambda = 1$ yields $1 - 2 + 1 = 0$, making one eigenvalue zero, so determinant must be 0!',
    tags: ['Eigenvalues', 'Matrix Determinant', 'Spectral Mapping']
  },
  {
    id: 'da-q-02',
    paper: 'DA',
    subject: 'Probability and Statistics',
    topicId: 'da-prob-stats',
    topicTitle: 'Probability Distributions & Inference',
    year: 2024,
    provenance: 'official_pyq',
    provenanceLabel: 'GATE 2024 DA (Official Inaugural PYQ)',
    originalPaper: 'DA',
    type: 'NAT',
    marks: 2,
    negativeMarking: 0,
    difficulty: 'Medium',
    text: 'A diagnostic medical test has a sensitivity of $95\\%$ (probability of positive test given patient has the disease) and a specificity of $90\\%$ (probability of negative test given patient does not have the disease). In a population where $2\\%$ of people have the disease, a randomly selected person tests positive. What is the probability (expressed as a percentage between 0 and 100, rounded off to two decimal places) that the person actually has the disease?',
    correctAnswer: { min: 16.0, max: 16.5, exact: 16.24 },
    explanation: `Use Bayes\' Theorem:
Let $D$ = Disease present, $D^c$ = No disease, and $T^+$ = Test positive.

Given:
$P(D) = 0.02 \\implies P(D^c) = 0.98$
$P(T^+ | D) = 0.95$ (Sensitivity)
$P(T^- | D^c) = 0.90 \\implies P(T^+ | D^c) = 1 - 0.90 = 0.10$ (False Positive rate)

By Total Probability:
$P(T^+) = P(T^+ | D)P(D) + P(T^+ | D^c)P(D^c)$
$P(T^+) = (0.95 \\times 0.02) + (0.10 \\times 0.98) = 0.0190 + 0.0980 = 0.1170$.

Applying Bayes\' Rule:
$P(D | T^+) = \\frac{P(T^+ | D) P(D)}{P(T^+)} = \\frac{0.0190}{0.1170} \\approx 0.16239$.

As a percentage: $16.24\\%$.`,
    hints: [
      'Base rate fallacy: Even with high accuracy, a rare disease leads to many false positives.',
      'Denominator is $P(T^+) = (0.95 \\times 0.02) + (0.10 \\times 0.98)$.'
    ],
    trapAlert: 'Specificity is $P(T^- | D^c) = 0.90$, which means false positive rate $P(T^+ | D^c) = 1 - 0.90 = 0.10$, not $0.90$!',
    tags: ['Bayes Theorem', 'Conditional Probability', 'Diagnostic Testing']
  },
  {
    id: 'da-q-03',
    paper: 'DA',
    subject: 'Machine Learning',
    topicId: 'da-machine-learning',
    topicTitle: 'Supervised & Unsupervised Machine Learning',
    provenance: 'official_sample',
    provenanceLabel: 'GATE DA Official Sample / Standard Practice',
    type: 'MSQ',
    marks: 2,
    negativeMarking: 0,
    difficulty: 'Medium',
    text: 'Which of the following statements regarding Linear and Logistic Regression are TRUE? (Select all that apply)',
    options: [
      { id: 'A', text: 'In Ordinary Least Squares (OLS) linear regression, the residuals are orthogonal to the column space of the feature matrix $X$.' },
      { id: 'B', text: 'Ridge regression (L2 regularization) has a closed-form analytical solution: $\\hat{\\beta} = (X^T X + \\lambda I)^{-1} X^T y$.' },
      { id: 'C', text: 'Lasso regression (L1 regularization) tends to produce sparse weight vectors by driving unimportant feature weights exactly to zero.' },
      { id: 'D', text: 'Logistic regression cost function with binary cross-entropy has multiple local minima, making gradient descent prone to getting stuck.' }
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation: `Analysis of statements:
(A) TRUE. The normal equations $X^T (y - X\\hat{\\beta}) = 0$ state that the residual vector $e = y - \\hat{y}$ is orthogonal to each column of $X$.
(B) TRUE. The ridge objective $\\|y - X\\beta\\|_2^2 + \\lambda \\|\\beta\\|_2^2$ yields the closed-form normal equation $\\hat{\\beta} = (X^T X + \\lambda I)^{-1} X^T y$.
(C) TRUE. The L1 penalty $|\\beta_j|$ has sharp diamond contours at coordinate axes, inducing exact zero coefficients (feature selection).
(D) FALSE. The binary cross-entropy loss function for logistic regression is strictly convex with respect to the weights $\\beta$; it has a unique global minimum, not multiple local minima.

Therefore, options A, B, and C are correct.`,
    hints: [
      'Recall the geometry of L1 diamond vs L2 circle constraint boundaries.',
      'Is the log-loss / cross-entropy function convex?'
    ],
    trapAlert: 'Logistic regression loss is convex! Neural networks have multiple local minima, but standard logistic regression does not.',
    tags: ['Linear Regression', 'Logistic Regression', 'Regularization', 'Convexity']
  },
  {
    id: 'da-q-04',
    paper: 'DA',
    subject: 'Artificial Intelligence',
    topicId: 'da-ai-search-logic',
    topicTitle: 'Heuristic Search & Knowledge Representation',
    year: 2024,
    provenance: 'official_pyq',
    provenanceLabel: 'GATE 2024 DA (Official Inaugural PYQ)',
    originalPaper: 'DA',
    type: 'MCQ',
    marks: 1,
    negativeMarking: 0.33,
    difficulty: 'Medium',
    text: 'Consider $A^*$ search on a graph with positive step costs. If the heuristic function $h(n)$ is consistent (monotonic), which of the following is guaranteed?',
    options: [
      { id: 'A', text: 'The sequence of $f(n) = g(n) + h(n)$ values along any path generated by $A^*$ is non-decreasing.' },
      { id: 'B', text: '$A^*$ may expand a node multiple times with decreasing $g(n)$ values.' },
      { id: 'C', text: '$h(n)$ will never underestimate the true cost to the goal.' },
      { id: 'D', text: '$A^*$ will visit fewer nodes than depth-first search in the worst case on cyclic graphs.' }
    ],
    correctAnswer: 'A',
    explanation: `Consistency condition:
$h(n) \\le c(n, a, n\') + h(n\')$
Adding $g(n)$ to both sides:
$g(n) + h(n) \\le g(n) + c(n, a, n\') + h(n\')$
Since $g(n\') = g(n) + c(n, a, n\')$, this gives:
$f(n) \\le f(n\')$.
Hence, the sequence of $f$-values along any path is non-decreasing (monotonic). Furthermore, with a consistent heuristic, the first time a node is selected for expansion, its shortest path $g(n)$ is already optimal, so nodes are never reopened.

Option (A) is correct.`,
    hints: [
      'Triangle inequality property of consistency: $h(n) \\le c(n, a, n\') + h(n\')$.',
      'Does monotonicity imply $f(n)$ is non-decreasing?'
    ],
    trapAlert: 'Consistency ensures no node needs re-expansion, which disproves (B)!',
    tags: ['A* Search', 'Consistency', 'Heuristic Search', 'Monotonicity']
  }
];

export const QUESTION_BANK: Question[] = [
  ...INITIAL_BENCHMARK_QUESTIONS,
  ...EXPANDED_QUESTION_BANK
];
