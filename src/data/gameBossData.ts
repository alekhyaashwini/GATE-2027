export interface ConceptCard {
  id: string;
  badge: string;
  title: string;
  content: string;
  keyFormula?: string;
  pitfallWarning?: string;
}

export interface CheckpointPuzzle {
  prompt: string;
  options: { id: string; text: string; isCorrect: boolean; feedback: string }[];
  hint: string;
}

export interface TopicBossData {
  topicId: string;
  paper: 'RA' | 'DA' | 'GA';
  bossName: string;
  bossTitle: string;
  element: string; // e.g. "Kinematics", "Linear Algebra", "Optimization"
  avatarIcon: string; // Icon identifier
  accentColor: string; // Tailwind color theme
  lore: string;
  bossWeakness: string;
  conceptCards: ConceptCard[];
  checkpointPuzzle: CheckpointPuzzle;
  rewardRelic: string;
}

export const TOPIC_BOSSES: Record<string, TopicBossData> = {
  'ra-robotics-kinematics-transforms': {
    topicId: 'ra-robotics-kinematics-transforms',
    paper: 'RA',
    bossName: 'The Homogeneous Frame Overlord',
    bossTitle: 'Guardian of 3D Spatial Transforms & DH Frames',
    element: 'Spatial Kinematics',
    avatarIcon: 'Cpu',
    accentColor: 'amber',
    lore: 'A high-dimensional construct that warps serial link postures. It feeds on sign errors in $R_z(\\theta)$ and improper frame inversion formulas.',
    bossWeakness: 'Orthogonal Transposes ($R^{-1} = R^T$) & Standard DH Matrix Chaining',
    conceptCards: [
      {
        id: 'c1',
        badge: 'Mental Model',
        title: 'Frame Mapping vs Point Transformation',
        content: 'When moving from Frame A to Frame B, $^A P = ^A_B T \\cdot ^B P$. But to inspect a target in the robot gripper frame, you MUST invert: $^B P = (^A_B R)^T (^A P - ^A P_{Borg})$. Never multiply by $^A_B T$ to express in $\{B\}$!',
        keyFormula: '$$^B P = (^A_B R)^T (^A P - ^A P_{Borg})$$',
        pitfallWarning: 'GATE traps often give coordinates in {A} and ask for {B}, expecting you to forget the rotation matrix transpose!'
      },
      {
        id: 'c2',
        badge: 'DH Algorithm',
        title: 'The 4 DH Parameters Rule',
        content: 'Every serial joint link transformation is factored into 4 pure operations: Rotation $\\theta_i$ about $Z_{i-1}$, Translation $d_i$ along $Z_{i-1}$, Translation $a_i$ along $X_i$, and Twist $\\alpha_i$ about $X_i$.',
        keyFormula: '$$T_{i-1}^i = \\text{Rot}(Z, \\theta_i) \\cdot \\text{Trans}(Z, d_i) \\cdot \\text{Trans}(X, a_i) \\cdot \\text{Rot}(X, \\alpha_i)$$',
        pitfallWarning: 'Notice $a_i$ and $\\alpha_i$ are measured along/about $X_i$, while $d_i$ and $\\theta_i$ belong to $Z_{i-1}$!'
      },
      {
        id: 'c3',
        badge: 'Exam Intuition',
        title: 'Planar 2-Link Manipulator Coordinates',
        content: 'For a 2R arm with link lengths $l_1, l_2$ and joint angles $\\theta_1, \\theta_2$, the second link direction is at absolute angle $(\\theta_1 + \\theta_2)$. Always verify $X = l_1\\cos\\theta_1 + l_2\\cos(\\theta_1+\\theta_2)$.',
        keyFormula: '$$x = l_1 \\cos\\theta_1 + l_2 \\cos(\\theta_1 + \\theta_2), \\quad y = l_1 \\sin\\theta_1 + l_2 \\sin(\\theta_1 + \\theta_2)$$'
      }
    ],
    checkpointPuzzle: {
      prompt: 'If $R$ is a valid 3D spatial rotation matrix, which fundamental identity allows you to compute its inverse in $O(1)$ time without Gaussian elimination?',
      options: [
        { id: 'A', text: '$R^{-1} = R^T$ because columns of $R$ are orthonormal', isCorrect: true, feedback: 'Spot on! The columns and rows of any valid rotation matrix form an orthonormal basis, so $R^T R = I$.' },
        { id: 'B', text: '$R^{-1} = -R$ because rotation is skew-symmetric', isCorrect: false, feedback: 'Incorrect! Angular velocity matrices are skew-symmetric, but rotation matrices are orthogonal.' },
        { id: 'C', text: '$R^{-1} = \\det(R) \\cdot R$', isCorrect: false, feedback: 'Incorrect! For a proper rotation matrix $\\det(R) = +1$, so this would imply $R^{-1} = R$, which is false unless $R$ is symmetric.' },
        { id: 'D', text: '$R^{-1} = I - R$', isCorrect: false, feedback: 'Incorrect! That applies to projection matrices, not rotation matrices.' }
      ],
      hint: 'Recall that rotation preserves dot products, lengths, and angles.'
    },
    rewardRelic: 'The DH Crystal of Orthonormal Frames'
  },

  'ra-math-la': {
    topicId: 'ra-math-la',
    paper: 'RA',
    bossName: 'The Spectral Decomposition Titan',
    bossTitle: 'Guardian of Eigenvalues & Null Spaces',
    element: 'Linear Algebra',
    avatarIcon: 'Layers',
    accentColor: 'indigo',
    lore: 'An ancient mathematical behemoth that collapses non-invertible state vectors into singularity. It crushes aspirants who confuse eigenvalues with pivots.',
    bossWeakness: 'Characteristic Polynomial Root Finding & Cayley-Hamilton Theorem',
    conceptCards: [
      {
        id: 'la-1',
        badge: 'Core Law',
        title: 'Trace and Determinant Invariant Identities',
        content: 'For any $n \\times n$ matrix $A$, the sum of all eigenvalues equals $\\text{Trace}(A)$, and the product of all eigenvalues equals $\\det(A)$. In GATE, always verify candidate options against Trace and Determinant before computing roots manually!',
        keyFormula: '$$\\sum_{i=1}^n \\lambda_i = \\text{Tr}(A), \\quad \\prod_{i=1}^n \\lambda_i = \\det(A)$$'
      },
      {
        id: 'la-2',
        badge: 'Theorem Strike',
        title: 'Cayley-Hamilton Shortcut',
        content: 'Every square matrix satisfies its own characteristic polynomial: $p(A) = 0$. Use this to compute high matrix powers $A^8, A^{100}$ or the inverse $A^{-1}$ without tedious matrix multiplications.',
        keyFormula: '$$A^2 - \\text{Tr}(A)A + \\det(A)I = 0 \\implies A^{-1} = \\frac{1}{\\det(A)}(\\text{Tr}(A)I - A)$$'
      }
    ],
    checkpointPuzzle: {
      prompt: 'A $3 \\times 3$ matrix $A$ has eigenvalues $\\lambda = 1, 2, 4$. What is the determinant of $(2A^{-1})$?',
      options: [
        { id: 'A', text: '$1$', isCorrect: true, feedback: 'Correct! $\\det(A) = 1 \\times 2 \\times 4 = 8$. For a $3 \\times 3$ matrix, $\\det(2A^{-1}) = 2^3 \\cdot \\det(A^{-1}) = 8 \\cdot (1/8) = 1$.' },
        { id: 'B', text: '$0.25$', isCorrect: false, feedback: 'Trap alert! You multiplied by 2 instead of $2^n = 2^3 = 8$ for a 3x3 matrix!' },
        { id: 'C', text: '$2$', isCorrect: false, feedback: 'Incorrect! Remember $\\det(k A) = k^n \\det(A)$ where $n=3$.' },
        { id: 'D', text: '$8$', isCorrect: false, feedback: 'Incorrect. Remember $\\det(A^{-1}) = 1/\\det(A)$.' }
      ],
      hint: 'Remember the scalar determinant rule: for an n x n matrix, det(k*M) = k^n * det(M).'
    },
    rewardRelic: 'The Cayley-Hamilton Prism'
  },

  'ra-b1-control-systems': {
    topicId: 'ra-b1-control-systems',
    paper: 'RA',
    bossName: 'The Nyquist-Bode Leviathan',
    bossTitle: 'Overlord of Closed-Loop Stability & Resonance',
    element: 'Control Systems',
    avatarIcon: 'Activity',
    accentColor: 'rose',
    lore: 'Dwelling in the complex s-plane, this entity pushes closed-loop poles into the right half-plane, inducing runaway oscillatory divergence.',
    bossWeakness: 'Routh-Hurwitz Sign Variations & Second-Order Damping Formulations',
    conceptCards: [
      {
        id: 'cs-1',
        badge: 'Transient Response',
        title: 'Standard Second-Order Damping Relations',
        content: 'Closed-loop transfer function: $T(s) = \\frac{\\omega_n^2}{s^2 + 2\\zeta\\omega_n s + \\omega_n^2}$. Maximum overshoot $M_p$ depends ONLY on damping ratio $\\zeta$, completely independent of natural frequency $\\omega_n$!',
        keyFormula: '$$M_p = e^{-\\frac{\\pi \\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%, \\quad t_s \\approx \\frac{4}{\\zeta \\omega_n} \\ (2\\% \\text{ band})$$'
      },
      {
        id: 'cs-2',
        badge: 'Routh Stability',
        title: 'The Auxiliary Polynomial & Sustained Oscillations',
        content: 'When an entire row of zeros appears in a Routh array, symmetric roots exist on the imaginary axis $j\\omega$. The auxiliary equation $A(s)=0$ yields the exact frequency of sustained oscillation.',
        keyFormula: '$$\\omega_{osc} = \\sqrt{\\text{roots of } A(s)}$$'
      }
    ],
    checkpointPuzzle: {
      prompt: 'If a second-order feedback control system has damping ratio $\\zeta = 1$, what is its transient step response classification?',
      options: [
        { id: 'A', text: 'Critically Damped (fastest return to steady state with zero overshoot)', isCorrect: true, feedback: 'Exactly! At $\\zeta = 1$, poles are real and repeated at $-\\omega_n$, yielding the fastest non-oscillatory response.' },
        { id: 'B', text: 'Underdamped with 4.3% overshoot', isCorrect: false, feedback: 'Incorrect! That corresponds to $\\zeta \\approx 0.707$.' },
        { id: 'C', text: 'Undamped sustained oscillation', isCorrect: false, feedback: 'Incorrect! Undamped occurs at $\\zeta = 0$.' },
        { id: 'D', text: 'Overdamped with sluggish slow response', isCorrect: false, feedback: 'Incorrect! Overdamped occurs when $\\zeta > 1$.' }
      ],
      hint: 'Think about repeated real roots of the characteristic equation.'
    },
    rewardRelic: 'The Resonant Damping Seal'
  },

  'da-prob-stats': {
    topicId: 'da-prob-stats',
    paper: 'DA',
    bossName: 'The Bayesian Oracle of Distributions',
    bossTitle: 'Mistress of Conditional Probability & Likelihood',
    element: 'Probability & Statistics',
    avatarIcon: 'BarChart2',
    accentColor: 'emerald',
    lore: 'A probabilistic entity that confounds learners with base-rate fallacies and posterior likelihood illusions.',
    bossWeakness: 'Bayes Theorem Denominator Partition & Gaussian Variance Normalization',
    conceptCards: [
      {
        id: 'ps-1',
        badge: 'Bayes Core',
        title: 'Total Probability Partitioning',
        content: 'The denominator of Bayes Theorem is the Law of Total Probability: $P(B) = \\sum P(B|A_i)P(A_i)$. Never compute posterior without correctly weighting each branch by its prior!',
        keyFormula: '$$P(A|B) = \\frac{P(B|A) P(A)}{P(B|A)P(A) + P(B|A^c)P(A^c)}$$'
      },
      {
        id: 'ps-2',
        badge: 'Expectation Arithmetic',
        title: 'Linearity of Expectation and Variance',
        content: '$E[aX + bY] = aE[X] + bE[Y]$ holds REGARDLESS of whether $X$ and $Y$ are independent! However, $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y) + 2\\text{Cov}(X, Y)$. The covariance term vanishes only if $X, Y$ are uncorrelated.',
        keyFormula: '$$\\text{Var}(X) = E[X^2] - (E[X])^2$$'
      }
    ],
    checkpointPuzzle: {
      prompt: 'If $X$ is a Poisson random variable with parameter $\\lambda = 4$, what is the expectation of $X^2$, i.e., $E[X^2]$?',
      options: [
        { id: 'A', text: '$20$', isCorrect: true, feedback: 'Brilliant! For a Poisson distribution, $E[X] = \\lambda = 4$ and $\\text{Var}(X) = \\lambda = 4$. Using $\\text{Var}(X) = E[X^2] - (E[X])^2 \\implies 4 = E[X^2] - 16 \\implies E[X^2] = 20$.' },
        { id: 'B', text: '$16$', isCorrect: false, feedback: 'Trap! 16 is $(E[X])^2$, but you forgot to add the variance!' },
        { id: 'C', text: '$4$', isCorrect: false, feedback: 'Incorrect. 4 is the expectation $E[X]$, not $E[X^2]$.' },
        { id: 'D', text: '$24$', isCorrect: false, feedback: 'Incorrect math calculation.' }
      ],
      hint: 'Recall that for Poisson, Variance = Lambda and E[X] = Lambda.'
    },
    rewardRelic: 'The Gaussian Bell Amulet'
  },

  'da-machine-learning': {
    topicId: 'da-machine-learning',
    paper: 'DA',
    bossName: 'The Overfitting Chimera',
    bossTitle: 'Arch-Demon of Variance & High-Dimensional Loss',
    element: 'Machine Learning',
    avatarIcon: 'Cpu',
    accentColor: 'purple',
    lore: 'An adversarial creature that fits training data with zero training error while producing disastrous test error on unseen GATE questions.',
    bossWeakness: 'L1/L2 Regularization, Margin Maximization & Cross-Entropy Gradients',
    conceptCards: [
      {
        id: 'ml-1',
        badge: 'Regularization Strike',
        title: 'L1 Lasso vs L2 Ridge Geometry',
        content: 'Ridge (L2) adds $\\lambda \\|w\\|_2^2$ penalty (spherical contours) leading to weight shrinkage. Lasso (L1) adds $\\lambda \\|w\\|_1$ penalty (diamond-shaped contours with sharp corners on axes) which forces sparse coefficients to zero, performing automatic feature selection!',
        keyFormula: '$$\\text{Lasso: } \\min_w \\|y - Xw\\|^2 + \\lambda \\sum |w_i|, \\quad \\text{Ridge: } \\min_w \\|y - Xw\\|^2 + \\lambda \\sum w_i^2$$'
      },
      {
        id: 'ml-2',
        badge: 'SVM Geometry',
        title: 'Support Vector Distance to Hyperplane',
        content: 'For a decision boundary $w^T x + b = 0$, the geometric margin between the two support vector hyperplanes is exactly $\\frac{2}{\\|w\\|}$. Minimizing $\\frac{1}{2}\\|w\\|^2$ maximizes this margin.',
        keyFormula: '$$\\text{Geometric Margin} = \\frac{2}{\\|w\\|}$$'
      }
    ],
    checkpointPuzzle: {
      prompt: 'In a hard-margin Linear Support Vector Machine, which data points determine the position of the optimal decision boundary?',
      options: [
        { id: 'A', text: 'Only the support vectors lying exactly on the margin hyperplanes', isCorrect: true, feedback: 'Correct! The decision boundary depends exclusively on points on the margin hyperplanes ($y_i(w^T x_i + b) = 1$). All other points have zero Lagrange multipliers!' },
        { id: 'B', text: 'The mean centroid of each class', isCorrect: false, feedback: 'Incorrect! That describes Nearest Centroid or LDA, not SVM.' },
        { id: 'C', text: 'All data points in the training set with equal weight', isCorrect: false, feedback: 'Incorrect! Non-support vector points have dual multiplier alpha = 0 and exert zero influence.' },
        { id: 'D', text: 'Outliers situated furthest from the boundary', isCorrect: false, feedback: 'Incorrect! In hard margin, outliers cause infeasibility, but they do not define standard margins.' }
      ],
      hint: 'Think about the KKT complementary slackness condition: alpha_i * (1 - y_i(w*x_i + b)) = 0.'
    },
    rewardRelic: 'The Hyperplane Blade of Maximum Margin'
  }
};

// Fallback generator for topics not explicitly enumerated in boss map
export function getBossDataForTopic(topicId: string, paper: 'RA' | 'DA' | 'GA', topicTitle: string): TopicBossData {
  if (TOPIC_BOSSES[topicId]) {
    return TOPIC_BOSSES[topicId];
  }

  return {
    topicId,
    paper,
    bossName: `The ${topicTitle} Guardian`,
    bossTitle: `Keeper of ${topicTitle}`,
    element: paper === 'RA' ? 'Robotics & Automation' : (paper === 'GA' ? 'General Aptitude' : 'Data Science & AI'),
    avatarIcon: 'Cpu',
    accentColor: paper === 'RA' ? 'amber' : (paper === 'GA' ? 'emerald' : 'sky'),
    lore: `A formidable GATE 2027 trial testing your mastery of ${topicTitle}. Conquer the concept checkpoints and solve exam challenges to claim victory!`,
    bossWeakness: 'Step-by-step analytical derivation and distractor elimination',
    conceptCards: [
      {
        id: 'fc1',
        badge: 'Core Concept',
        title: `Mastering ${topicTitle}`,
        content: `Build solid physical and computational intuition for ${topicTitle}. Focus on fundamental definitions, boundary constraints, and verifying dimensional units.`,
        keyFormula: '$$\\text{Target Parameter} = f(\\text{Inputs}, \\text{Constraints})$$'
      },
      {
        id: 'fc2',
        badge: 'Exam Tactics',
        title: 'GATE 2027 Trap Awareness',
        content: 'Identify what is explicitly given vs what must be inferred. Watch out for negative marking traps and unit consistency (mm vs meters, degrees vs radians).',
        pitfallWarning: 'Carefully verify whether question is MCQ (negative marks) or MSQ/NAT (zero negative marks).'
      }
    ],
    checkpointPuzzle: {
      prompt: `Which approach is most effective for solving GATE numerical problems in ${topicTitle}?`,
      options: [
        { id: 'A', text: 'Extract givens, write governing formula with units, compute step-by-step', isCorrect: true, feedback: 'Precisely! Methodical derivation guarantees high accuracy and eliminates careless arithmetic traps.' },
        { id: 'B', text: 'Memorize final numbers from old question papers', isCorrect: false, feedback: 'Never do this! GATE questions always modify parameters and boundary conditions.' },
        { id: 'C', text: 'Rely purely on elimination without solving', isCorrect: false, feedback: 'Dangerous in NAT and MSQ questions where guessing carries zero partial credit!' }
      ],
      hint: 'Focus on first principles and clear derivation.'
    },
    rewardRelic: `Mastery Seal of ${topicTitle}`
  };
}
