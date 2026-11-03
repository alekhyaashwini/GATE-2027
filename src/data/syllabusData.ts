import { SyllabusNode } from '../types';

export const SYLLABUS_NODES: SyllabusNode[] = [
  // ==========================================
  // ROBOTICS & AUTOMATION (RA) - PART A
  // ==========================================
  {
    id: 'ra-math-la',
    paper: 'RA',
    section: 'Part A — Common: Engineering Mathematics',
    subject: 'Engineering Mathematics',
    topic: 'Linear Algebra',
    subtopics: [
      'Vector spaces and subspaces',
      'Matrices, rank, and systems of linear equations',
      'Eigenvalues and eigenvectors',
      'Cayley-Hamilton Theorem',
      'Orthogonal matrices and basis transformations'
    ],
    description: 'Foundational linear algebra essential for spatial rotation matrices, robot kinematics transformations, and state-space control.',
    prerequisites: ['Basic Matrix Operations'],
    overlapTags: ['DA - Linear Algebra', 'ME - Math', 'EE - Math'],
    weightage: 'High',
    keyFormulas: [
      '\\det(A - \\lambda I) = 0',
      'A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A)',
      '\\text{Tr}(A) = \\sum_{i=1}^n \\lambda_i, \\quad \\det(A) = \\prod_{i=1}^n \\lambda_i'
    ],
    externalResources: [
      {
        title: 'Essence of Linear Algebra: Linear Transformations & Matrices',
        provider: '3Blue1Brown',
        url: 'https://www.youtube.com/watch?v=k7RM-ot2NWY',
        type: 'YouTube',
        youtubeId: 'k7RM-ot2NWY',
        channel: '3Blue1Brown',
        duration: '15 mins'
      },
      {
        title: 'MIT 18.06: The Geometry of Linear Equations & Matrices',
        provider: 'MIT OpenCourseWare (Prof. Gilbert Strang)',
        url: 'https://www.youtube.com/watch?v=7UJ4CFr9KA8',
        type: 'YouTube',
        youtubeId: '7UJ4CFr9KA8',
        channel: 'MIT OpenCourseWare',
        duration: '40 mins'
      },
      {
        title: 'Eigenvectors and Eigenvalues: Essence of Linear Algebra',
        provider: '3Blue1Brown',
        url: 'https://www.youtube.com/watch?v=PFDu9oVAE-g',
        type: 'YouTube',
        youtubeId: 'PFDu9oVAE-g',
        channel: '3Blue1Brown',
        duration: '17 mins'
      }
    ]
  },
  {
    id: 'ra-math-calc-de',
    paper: 'RA',
    section: 'Part A — Common: Engineering Mathematics',
    subject: 'Engineering Mathematics',
    topic: 'Calculus, Differential Equations & Numerical Methods',
    subtopics: [
      'Partial derivatives and maxima/minima',
      'First-order ODEs and linear higher-order ODEs with constant coefficients',
      'Laplace transforms and inverse Laplace',
      'Numerical integration (Trapezoidal, Simpson’s 1/3)',
      'Newton-Raphson method for non-linear equations'
    ],
    description: 'Dynamic system modeling, robot joint trajectory rates, and transient control response solution techniques.',
    prerequisites: ['Differential Calculus'],
    overlapTags: ['DA - Calculus', 'ME - Differential Equations'],
    weightage: 'High',
    keyFormulas: [
      'x_{k+1} = x_k - \\frac{f(x_k)}{f\'(x_k)}',
      '\\mathcal{L}\\{e^{at} f(t)\\} = F(s - a)',
      '\\int_a^b f(x) dx \\approx \\frac{h}{3}[y_0 + 4(y_1 + y_3 + \\dots) + 2(y_2 + y_4 + \\dots) + y_n]'
    ],
    externalResources: [
      {
        title: 'Essence of Calculus: The Core Idea Behind Derivatives & Rates',
        provider: '3Blue1Brown',
        url: 'https://www.youtube.com/watch?v=WUvTyaaNkzM',
        type: 'YouTube',
        youtubeId: 'WUvTyaaNkzM',
        channel: '3Blue1Brown',
        duration: '18 mins'
      },
      {
        title: 'Differential Equations: The Essence Behind Rate Equations',
        provider: '3Blue1Brown',
        url: 'https://www.youtube.com/watch?v=p_di4Zn4wDg',
        type: 'YouTube',
        youtubeId: 'p_di4Zn4wDg',
        channel: '3Blue1Brown',
        duration: '16 mins'
      },
      {
        title: 'Newton-Raphson Method, Simpson 1/3 & Numerical Integration for GATE',
        provider: 'Gate Smashers',
        url: 'https://www.youtube.com/watch?v=FNI_p_b8b_c',
        type: 'YouTube',
        youtubeId: 'FNI_p_b8b_c',
        channel: 'Gate Smashers',
        duration: '25 mins'
      }
    ]
  },
  {
    id: 'ra-mechatronics-circuits-sensors',
    paper: 'RA',
    section: 'Part A — Basics of Mechatronics',
    subject: 'Basics of Mechatronics',
    topic: 'Sensors, Actuators & Digital Circuits',
    subtopics: [
      'Encoders (incremental and absolute optical encoders)',
      'IMUs, gyroscopes, strain gauges, and tachometers',
      'DC motors, BLDC motors, stepper motors, and servomotors',
      'Hydraulic and pneumatic drive systems',
      'Logic gates, flip-flops, multiplexers, and ADCs/DACs'
    ],
    description: 'Transducers and drives that bridge computational control with physical robot motion in automation workcells.',
    prerequisites: ['Basic Physics', 'Introductory Circuits'],
    overlapTags: ['IN - Transducers', 'EE - Electrical Machines'],
    weightage: 'High',
    keyFormulas: [
      'V_t = E_b + I_a R_a = K_b \\omega + I_a R_a',
      'T_e = K_t I_a',
      '\\text{Resolution} = \\frac{360^\\circ}{\\text{Pulses per revolution (PPR)} \\times 4}'
    ],
    externalResources: [
      {
        title: 'NPTEL: Sensors, Actuators & Mechatronic Systems Architecture',
        provider: 'NPTEL (Prof. Pushparaj Mani Pathak - IIT Roorkee)',
        url: 'https://www.youtube.com/watch?v=T4F4rE_0n7M',
        type: 'YouTube',
        youtubeId: 'T4F4rE_0n7M',
        channel: 'NPTEL-NOC IITR',
        duration: '45 mins'
      },
      {
        title: 'Optical Incremental Encoders & Quadrature Decoding Explained',
        provider: 'Instrumentation & Control Tech',
        url: 'https://www.youtube.com/watch?v=8_iT8C2YJ4A',
        type: 'YouTube',
        youtubeId: '8_iT8C2YJ4A',
        channel: 'RealPars',
        duration: '12 mins'
      },
      {
        title: 'DC Motors, Stepper vs Servo Motors in Robotics',
        provider: 'RealPars Automation',
        url: 'https://www.youtube.com/watch?v=bngx2d857a0',
        type: 'YouTube',
        youtubeId: 'bngx2d857a0',
        channel: 'RealPars',
        duration: '15 mins'
      }
    ]
  },
  {
    id: 'ra-robotics-kinematics-transforms',
    paper: 'RA',
    section: 'Part A — Principles of Robotics & Automation',
    subject: 'Principles of Robotics & Automation',
    topic: 'Robot Kinematics & Coordinate Transformations',
    subtopics: [
      'Degrees of freedom (Grübler/Kutzbach criterion)',
      '2D and 3D Rotation matrices (Euler angles, Roll-Pitch-Yaw)',
      'Homogeneous transformation matrices ($4 \\times 4$)',
      'Denavit-Hartenberg (DH) convention & link parameters (a, \\alpha, d, \\theta)',
      'Forward kinematics of serial manipulators (SCARA, Articulated, Cartesian)',
      'Singularities and Jacobian concept'
    ],
    description: 'Core robotics topic governing coordinate frame mapping and serial manipulator posture representation.',
    prerequisites: ['Linear Algebra', 'Vector Mechanics'],
    overlapTags: ['ME - Kinematics', 'IN - Robotics'],
    weightage: 'High',
    keyFormulas: [
      'R_z(\\theta) = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta & 0 \\\\ \\sin\\theta & \\cos\\theta & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}',
      'T_{i-1}^i = \\begin{bmatrix} \\cos\\theta_i & -\\sin\\theta_i \\cos\\alpha_i & \\sin\\theta_i \\sin\\alpha_i & a_i \\cos\\theta_i \\\\ \\sin\\theta_i & \\cos\\theta_i \\cos\\alpha_i & -\\cos\\theta_i \\sin\\alpha_i & a_i \\sin\\theta_i \\\\ 0 & \\sin\\alpha_i & \\cos\\alpha_i & d_i \\\\ 0 & 0 & 0 & 1 \\end{bmatrix}',
      '\\text{DOF} = 6(N - 1 - J) + \\sum f_i'
    ],
    externalResources: [
      {
        title: 'Modern Robotics: Homogeneous Transformation Matrices & 4x4 SE(3)',
        provider: 'Northwestern University (Prof. Kevin Lynch)',
        url: 'https://www.youtube.com/watch?v=vlb3P7arbkU',
        type: 'YouTube',
        youtubeId: 'vlb3P7arbkU',
        channel: 'Northwestern Robotics',
        duration: '18 mins'
      },
      {
        title: 'Modern Robotics: Rotation Matrices & Spatial Orientations SO(3)',
        provider: 'Northwestern University (Prof. Kevin Lynch)',
        url: 'https://www.youtube.com/watch?v=OZucG1DY_sY',
        type: 'YouTube',
        youtubeId: 'OZucG1DY_sY',
        channel: 'Northwestern Robotics',
        duration: '20 mins'
      },
      {
        title: 'Visualizing 3D Spatial Rotations and Quaternions',
        provider: '3Blue1Brown',
        url: 'https://www.youtube.com/watch?v=d4EgbgTm0Bg',
        type: 'YouTube',
        youtubeId: 'd4EgbgTm0Bg',
        channel: '3Blue1Brown',
        duration: '22 mins'
      }
    ]
  },
  {
    id: 'ra-robotics-dynamics-path-endeffectors',
    paper: 'RA',
    section: 'Part A — Principles of Robotics & Automation',
    subject: 'Principles of Robotics & Automation',
    topic: 'Robot Trajectory, End-Effectors & Repeatability',
    subtopics: [
      'Cubic and quintic polynomial trajectory planning',
      'Trapezoidal velocity profiles and acceleration limits',
      'Mechanical grippers, vacuum suckers, and compliance',
      'Accuracy, repeatability, and workspace volume resolution'
    ],
    description: 'Motion profile formulation and gripping technology for industrial pick-and-place and welding robots.',
    prerequisites: ['Robot Kinematics'],
    overlapTags: ['ME - Dynamics'],
    weightage: 'Medium',
    keyFormulas: [
      '\\theta(t) = a_0 + a_1 t + a_2 t^2 + a_3 t^3',
      '\\text{Repeatability} = \\pm 3\\sigma'
    ],
    externalResources: [
      {
        title: 'Modern Robotics: Point-to-Point Trajectories & Time Scaling',
        provider: 'Northwestern University (Prof. Kevin Lynch)',
        url: 'https://www.youtube.com/watch?v=1JRMqfEm79c',
        type: 'YouTube',
        youtubeId: '1JRMqfEm79c',
        channel: 'Northwestern Robotics',
        duration: '24 mins'
      },
      {
        title: 'Understanding Robot Trajectory and Motion Planning',
        provider: 'Brian Douglas (Control Lectures)',
        url: 'https://www.youtube.com/watch?v=gT8o_zXbFdg',
        type: 'YouTube',
        youtubeId: 'gT8o_zXbFdg',
        channel: 'Brian Douglas',
        duration: '15 mins'
      }
    ]
  },
  {
    id: 'ra-cim-plc-automation',
    paper: 'RA',
    section: 'Part A — Computer Integrated Manufacturing',
    subject: 'CIM & Industrial Automation',
    topic: 'PLCs, AS/RS, CNC & Material Handling',
    subtopics: [
      'Programmable Logic Controllers (Ladder diagram logic, timers, counters)',
      'Automated Storage and Retrieval Systems (AS/RS)',
      'Automated Guided Vehicles (AGVs) and conveyor loops',
      'CNC programming (G-codes, M-codes, circular interpolation)',
      'Auto-ID (Barcodes, RFID, Machine Vision detection)'
    ],
    description: 'Factory-level automation architectures, industrial controllers, and deterministic shop-floor workflows.',
    prerequisites: ['Digital Logic'],
    overlapTags: ['ME - Manufacturing', 'PI - Industrial Engineering'],
    weightage: 'High',
    keyFormulas: [
      '\\text{AS/RS Cycle Time} = 2 \\times \\max(t_x, t_y) + 2 t_{pickup}',
      '\\text{Tact Time} = \\frac{\\text{Net Available Operating Time}}{\\text{Customer Demand}}'
    ],
    externalResources: [
      {
        title: 'PLC Ladder Logic Basics: Inputs, Outputs, Timers & Counters',
        provider: 'RealPars Industrial Solutions',
        url: 'https://www.youtube.com/watch?v=ZXKApu_4r_c',
        type: 'YouTube',
        youtubeId: 'ZXKApu_4r_c',
        channel: 'RealPars',
        duration: '18 mins'
      },
      {
        title: 'CNC G-Code & M-Code Programming for Machining Centers',
        provider: 'Titans of CNC Academy',
        url: 'https://www.youtube.com/watch?v=F_3qg1zTzV0',
        type: 'YouTube',
        youtubeId: 'F_3qg1zTzV0',
        channel: 'Titans of CNC',
        duration: '20 mins'
      },
      {
        title: 'NPTEL: Automated Storage & Retrieval Systems (AS/RS) Cycle Times',
        provider: 'NPTEL (IIT Kharagpur)',
        url: 'https://www.youtube.com/watch?v=X6K9E7801aE',
        type: 'YouTube',
        youtubeId: 'X6K9E7801aE',
        channel: 'NPTEL-NOC IITKGP',
        duration: '42 mins'
      }
    ]
  },
  {
    id: 'ra-b1-control-systems',
    paper: 'RA',
    section: 'Part B1 — Electrical Engineering',
    subject: 'Control Systems',
    topic: 'Feedback Control Systems & Stability',
    subtopics: [
      'Transfer functions, block diagram reduction, and signal flow graphs',
      'Transient response of second-order systems (damping ratio \\zeta, natural frequency \\omega_n)',
      'Routh-Hurwitz stability criterion',
      'Root Locus plotting and Bode stability margins',
      'PID controller design and tuning parameters (Kp, Ki, Kd)'
    ],
    description: 'Linear system theory ensuring steady-state accuracy and dynamic stability in robotic joint actuators.',
    prerequisites: ['Laplace Transforms'],
    overlapTags: ['EE - Control Systems', 'IN - Control Systems'],
    weightage: 'High',
    keyFormulas: [
      '\\frac{C(s)}{R(s)} = \\frac{\\omega_n^2}{s^2 + 2\\zeta \\omega_n s + \\omega_n^2}',
      'M_p = e^{-\\frac{\\pi \\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%',
      't_s \\approx \\frac{4}{\\zeta \\omega_n} \\quad (2\\% \\text{ criterion})'
    ],
    externalResources: [
      {
        title: 'Control System Lectures: Bode Plots, Gain Margin & Phase Margin',
        provider: 'Brian Douglas (Control Systems Lectures)',
        url: 'https://www.youtube.com/watch?v=_eh1conN6YM',
        type: 'YouTube',
        youtubeId: '_eh1conN6YM',
        channel: 'Brian Douglas',
        duration: '14 mins'
      },
      {
        title: 'Understanding PID Control: Proportional, Integral & Derivative Action',
        provider: 'Brian Douglas (MATLAB Tech Talks)',
        url: 'https://www.youtube.com/watch?v=wkfEZmsQqiA',
        type: 'YouTube',
        youtubeId: 'wkfEZmsQqiA',
        channel: 'MATLAB Tech Talks',
        duration: '16 mins'
      },
      {
        title: 'The Root Locus Method: Poles, Zeros & Closed Loop Stability',
        provider: 'Brian Douglas',
        url: 'https://www.youtube.com/watch?v=CRvVDoQJjYI',
        type: 'YouTube',
        youtubeId: 'CRvVDoQJjYI',
        channel: 'Brian Douglas',
        duration: '15 mins'
      }
    ]
  },
  {
    id: 'ra-b2-mechanics-materials',
    paper: 'RA',
    section: 'Part B2 — Mechanical Engineering',
    subject: 'Mechanical Engineering',
    topic: 'Mechanics of Materials & Machine Design',
    subtopics: [
      'Stress and strain, Mohr\'s circle, Hooke\'s law',
      'Bending and shear stress in beams',
      'Torsion of circular shafts and power transmission',
      'Deflection of beams and column buckling (Euler formula)',
      'Gears, shafts, belts, and bearings in robot arm drivetrains'
    ],
    description: 'Structural strength and drivetrain sizing under static payload and dynamic acceleration torques.',
    prerequisites: ['Engineering Mechanics'],
    overlapTags: ['ME - Strength of Materials'],
    weightage: 'High',
    keyFormulas: [
      '\\frac{\\sigma}{y} = \\frac{M}{I} = \\frac{E}{R}',
      '\\frac{\\tau}{r} = \\frac{T}{J} = \\frac{G\\theta}{L}',
      'P_{cr} = \\frac{\\pi^2 E I}{L_e^2}'
    ],
    externalResources: [
      {
        title: 'An Introduction to Stress and Strain: Normal, Shear & Hooke\'s Law',
        provider: 'The Efficient Engineer',
        url: 'https://www.youtube.com/watch?v=aQf6Q8t1FQE',
        type: 'YouTube',
        youtubeId: 'aQf6Q8t1FQE',
        channel: 'The Efficient Engineer',
        duration: '18 mins'
      },
      {
        title: 'Understanding Stress Transformation and Mohr\'s Circle',
        provider: 'The Efficient Engineer',
        url: 'https://www.youtube.com/watch?v=QAoIWfcWHxo',
        type: 'YouTube',
        youtubeId: 'QAoIWfcWHxo',
        channel: 'The Efficient Engineer',
        duration: '14 mins'
      },
      {
        title: 'Understanding Euler Column Buckling & Link Load Capacity',
        provider: 'The Efficient Engineer',
        url: 'https://www.youtube.com/watch?v=H208v1P_9mU',
        type: 'YouTube',
        youtubeId: 'H208v1P_9mU',
        channel: 'The Efficient Engineer',
        duration: '16 mins'
      }
    ]
  },

  // ==========================================
  // DATA SCIENCE & ARTIFICIAL INTELLIGENCE (DA)
  // ==========================================
  {
    id: 'da-prob-stats',
    paper: 'DA',
    section: 'DA Core Section 1',
    subject: 'Probability and Statistics',
    topic: 'Probability Distributions & Inference',
    subtopics: [
      'Axioms of probability, conditional probability, and Bayes\' Theorem',
      'Discrete random variables (Bernoulli, Binomial, Poisson, Geometric)',
      'Continuous random variables (Uniform, Exponential, Normal / Gaussian)',
      'Expectation, variance, covariance, and correlation coefficient',
      'Central Limit Theorem, sampling distributions, and confidence intervals',
      'Hypothesis testing (t-test, z-test, p-values, Type I & Type II errors)'
    ],
    description: 'Probabilistic foundation of machine learning, noise modeling, and statistical significance testing.',
    prerequisites: ['Basic Calculus'],
    overlapTags: ['RA - Math', 'CS - Probability'],
    weightage: 'High',
    keyFormulas: [
      'P(A|B) = \\frac{P(B|A) P(A)}{P(B)}',
      'f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x - \\mu}{\\sigma}\\right)^2}',
      '\\text{Var}(X) = E[X^2] - (E[X])^2'
    ],
    externalResources: [
      {
        title: 'Bayes Theorem: The Geometry of Changing Beliefs',
        provider: '3Blue1Brown',
        url: 'https://www.youtube.com/watch?v=HZGCoVF3YvM',
        type: 'YouTube',
        youtubeId: 'HZGCoVF3YvM',
        channel: '3Blue1Brown',
        duration: '15 mins'
      },
      {
        title: 'Probability is Not Likelihood: Mathematical Intuition',
        provider: 'StatQuest with Josh Starmer',
        url: 'https://www.youtube.com/watch?v=pYxNSUDSFH4',
        type: 'YouTube',
        youtubeId: 'pYxNSUDSFH4',
        channel: 'StatQuest',
        duration: '10 mins'
      },
      {
        title: 'Hypothesis Testing, P-values, Type I & Type II Errors Explained',
        provider: 'StatQuest with Josh Starmer',
        url: 'https://www.youtube.com/watch?v=vemZtEM63GY',
        type: 'YouTube',
        youtubeId: 'vemZtEM63GY',
        channel: 'StatQuest',
        duration: '14 mins'
      }
    ]
  },
  {
    id: 'da-linear-algebra',
    paper: 'DA',
    section: 'DA Core Section 2',
    subject: 'Linear Algebra',
    topic: 'Linear Algebra & Matrix Decompositions',
    subtopics: [
      'Vector spaces, subspaces, linear independence, span, and basis',
      'Row space, column space, null space, and Rank-Nullity theorem',
      'Orthogonal projections and Gram-Schmidt orthogonalization',
      'Eigenvalues, eigenvectors, and diagonalization of symmetric matrices',
      'Singular Value Decomposition (SVD) and low-rank approximation',
      'Principal Component Analysis (PCA) derivation via covariance matrix'
    ],
    description: 'Dimensionality reduction, spectral graph theory, and neural network weight transformations.',
    prerequisites: ['Matrix Algebra'],
    overlapTags: ['RA - Math Linear Algebra'],
    weightage: 'High',
    keyFormulas: [
      'A = U \\Sigma V^T',
      '\\text{dim}(\\text{Col}(A)) + \\text{dim}(\\text{Null}(A)) = n',
      '\\Sigma_{cov} = \\frac{1}{m} X^T X = V \\Lambda V^T'
    ],
    externalResources: [
      {
        title: 'Eigenvectors and Eigenvalues: Essence of Linear Algebra',
        provider: '3Blue1Brown',
        url: 'https://www.youtube.com/watch?v=PFDu9oVAE-g',
        type: 'YouTube',
        youtubeId: 'PFDu9oVAE-g',
        channel: '3Blue1Brown',
        duration: '17 mins'
      },
      {
        title: 'Principal Component Analysis (PCA) Step-by-Step with Covariance',
        provider: 'StatQuest with Josh Starmer',
        url: 'https://www.youtube.com/watch?v=FgakZw6K1QQ',
        type: 'YouTube',
        youtubeId: 'FgakZw6K1QQ',
        channel: 'StatQuest',
        duration: '21 mins'
      },
      {
        title: 'Singular Value Decomposition (SVD) Clearly Explained',
        provider: 'StatQuest with Josh Starmer',
        url: 'https://www.youtube.com/watch?v=P5mlg91as1U',
        type: 'YouTube',
        youtubeId: 'P5mlg91as1U',
        channel: 'StatQuest',
        duration: '15 mins'
      }
    ]
  },
  {
    id: 'da-calc-opt',
    paper: 'DA',
    section: 'DA Core Section 3',
    subject: 'Calculus and Optimization',
    topic: 'Multivariable Calculus & Convex Optimization',
    subtopics: [
      'Functions of multiple variables, gradient vector $\\nabla f$, and Hessian matrix $\\nabla^2 f$',
      'Taylor series expansion in multiple variables',
      'Convex sets, convex functions, and Jensen’s inequality',
      'Unconstrained optimization and Gradient Descent variants (SGD, Momentum, Adam)',
      'Constrained optimization, Lagrange multipliers, and KKT conditions'
    ],
    description: 'Objective function minimization governing loss landscapes in regression, SVMs, and deep learning.',
    prerequisites: ['Single Variable Calculus', 'Linear Algebra'],
    overlapTags: ['RA - Math'],
    weightage: 'High',
    keyFormulas: [
      '\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)',
      '\\mathcal{L}(x, \\lambda, \\mu) = f(x) + \\sum \\lambda_i g_i(x) + \\sum \\mu_j h_j(x)',
      'H_{ij} = \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}'
    ],
    externalResources: [
      {
        title: 'Gradient Descent, How Neural Networks Learn & Loss Landscapes',
        provider: '3Blue1Brown',
        url: 'https://www.youtube.com/watch?v=IHZwWFHWa-w',
        type: 'YouTube',
        youtubeId: 'IHZwWFHWa-w',
        channel: '3Blue1Brown',
        duration: '21 mins'
      },
      {
        title: 'Gradient Descent Step-by-Step with Learning Rates',
        provider: 'StatQuest with Josh Starmer',
        url: 'https://www.youtube.com/watch?v=sDv4f4s2SB8',
        type: 'YouTube',
        youtubeId: 'sDv4f4s2SB8',
        channel: 'StatQuest',
        duration: '24 mins'
      },
      {
        title: 'Stochastic Gradient Descent (SGD) and Mini-Batch Explained',
        provider: 'StatQuest with Josh Starmer',
        url: 'https://www.youtube.com/watch?v=vMh0zPT04mg',
        type: 'YouTube',
        youtubeId: 'vMh0zPT04mg',
        channel: 'StatQuest',
        duration: '12 mins'
      }
    ]
  },
  {
    id: 'da-prog-dsa',
    paper: 'DA',
    section: 'DA Core Section 4',
    subject: 'Programming, Data Structures and Algorithms',
    topic: 'Data Structures, Searching, Sorting & Graph Algorithms',
    subtopics: [
      'Python data structures (lists, tuples, dictionaries, sets, comprehensions)',
      'Asymptotic notation (Big-O, Big-Omega, Big-Theta) and recurrence relations',
      'Arrays, linked lists, stacks, queues, and priority queues (Binary Heaps)',
      'Binary Search Trees (BST), AVL trees balance and operations',
      'Sorting algorithms: QuickSort, MergeSort, HeapSort (stability and time bounds)',
      'Graph algorithms: BFS, DFS, Dijkstra’s shortest path, Prim’s and Kruskal’s MST'
    ],
    description: 'Algorithmic efficiency and core computer science foundations tested in GATE DA questions.',
    prerequisites: ['Basic Programming'],
    overlapTags: ['RA - Mechatronics Programming', 'CS - Algorithms'],
    weightage: 'High',
    keyFormulas: [
      'T(n) = a T(n/b) + f(n) \\quad (\\text{Master Theorem})',
      '\\text{Heapify Time} = O(n), \\quad \\text{HeapSort} = O(n \\log n)'
    ],
    externalResources: [
      {
        title: 'Dijkstra’s Algorithm Shortest Path on Weighted Graphs',
        provider: 'Abdul Bari',
        url: 'https://www.youtube.com/watch?v=XB4MIexjvY0',
        type: 'YouTube',
        youtubeId: 'XB4MIexjvY0',
        channel: 'Abdul Bari',
        duration: '23 mins'
      },
      {
        title: 'Asymptotic Notations: Big-O, Omega, and Theta Explained',
        provider: 'Abdul Bari',
        url: 'https://www.youtube.com/watch?v=A03oI0znAoc',
        type: 'YouTube',
        youtubeId: 'A03oI0znAoc',
        channel: 'Abdul Bari',
        duration: '18 mins'
      },
      {
        title: 'Heap Sort and Priority Queues: Step-by-Step Algorithm',
        provider: 'Abdul Bari',
        url: 'https://www.youtube.com/watch?v=HqPJF2L5h9U',
        type: 'YouTube',
        youtubeId: 'HqPJF2L5h9U',
        channel: 'Abdul Bari',
        duration: '25 mins'
      }
    ]
  },
  {
    id: 'da-dbms',
    paper: 'DA',
    section: 'DA Core Section 5',
    subject: 'Database Management and Warehousing',
    topic: 'Relational Model, SQL & Normalization',
    subtopics: [
      'Relational algebra (selection, projection, cross-product, joins)',
      'SQL queries (nested subqueries, group by, having, window functions)',
      'Functional dependencies and normal forms (1NF, 2NF, 3NF, BCNF)',
      'Indexing and B/B+ trees (search cost and height calculations)',
      'Transactions, ACID properties, serializability, and two-phase locking (2PL)',
      'Data warehousing concepts (star schema, snowflake schema, OLAP operations)'
    ],
    description: 'Structured enterprise data manipulation, relational algebra formalisms, and query execution planning.',
    prerequisites: ['Set Theory'],
    overlapTags: ['CS - DBMS'],
    weightage: 'Medium',
    keyFormulas: [
      '\\text{Fanout} = \\lfloor \\frac{B - P}{K + P} \\rfloor + 1',
      '\\Pi_{attributes} (\\sigma_{condition} (R \\bowtie S))'
    ],
    externalResources: [
      {
        title: 'Relational Algebra & Normalization (1NF, 2NF, 3NF, BCNF) for GATE',
        provider: 'Gate Smashers',
        url: 'https://www.youtube.com/watch?v=5Fs14GquzFw',
        type: 'YouTube',
        youtubeId: '5Fs14GquzFw',
        channel: 'Gate Smashers',
        duration: '32 mins'
      },
      {
        title: 'B-Tree & B+ Tree Indexing in Databases: Search & Node Capacity',
        provider: 'Abdul Bari',
        url: 'https://www.youtube.com/watch?v=aZjYr87r1b8',
        type: 'YouTube',
        youtubeId: 'aZjYr87r1b8',
        channel: 'Abdul Bari',
        duration: '30 mins'
      },
      {
        title: 'ACID Properties in DBMS: Atomicity, Consistency, Isolation, Durability',
        provider: 'Gate Smashers',
        url: 'https://www.youtube.com/watch?v=GAe5N0-Y-0Y',
        type: 'YouTube',
        youtubeId: 'GAe5N0-Y-0Y',
        channel: 'Gate Smashers',
        duration: '15 mins'
      }
    ]
  },
  {
    id: 'da-machine-learning',
    paper: 'DA',
    section: 'DA Core Section 6',
    subject: 'Machine Learning',
    topic: 'Supervised & Unsupervised Machine Learning',
    subtopics: [
      'Linear regression (ordinary least squares, ridge L2 regularization, lasso L1)',
      'Logistic regression, cross-entropy loss, and ROC-AUC curve metrics',
      'Support Vector Machines (hard/soft margin, kernel trick, dual formulation)',
      'Decision trees (entropy, information gain, Gini impurity) and Random Forests',
      'K-Nearest Neighbors (distance metrics and curse of dimensionality)',
      'K-Means clustering (Lloyd algorithm, elbow method) and Hierarchical clustering',
      'Multilayer Perceptron (forward pass, backpropagation, activation functions)'
    ],
    description: 'High-weightage core of GATE DA comprising statistical learning algorithms and classification boundaries.',
    prerequisites: ['Probability and Statistics', 'Linear Algebra', 'Calculus'],
    overlapTags: [],
    weightage: 'High',
    keyFormulas: [
      '\\hat{\\beta} = (X^T X)^{-1} X^T y',
      '\\text{Entropy}(S) = - \\sum p_i \\log_2 p_i',
      '\\sigma(z) = \\frac{1}{1 + e^{-z}}, \\quad \\mathcal{L}_{CE} = -[y \\log \\hat{y} + (1 - y) \\log(1 - \\hat{y})]'
    ],
    externalResources: [
      {
        title: 'Support Vector Machines (SVM) & The Kernel Trick Explained',
        provider: 'StatQuest with Josh Starmer',
        url: 'https://www.youtube.com/watch?v=efR1C6CvhmE',
        type: 'YouTube',
        youtubeId: 'efR1C6CvhmE',
        channel: 'StatQuest',
        duration: '20 mins'
      },
      {
        title: 'Decision Trees, Entropy & Gini Impurity Step-by-Step',
        provider: 'StatQuest with Josh Starmer',
        url: 'https://www.youtube.com/watch?v=7VeUPuFGJHk',
        type: 'YouTube',
        youtubeId: '7VeUPuFGJHk',
        channel: 'StatQuest',
        duration: '18 mins'
      },
      {
        title: 'Machine Learning Fundamentals: Bias and Variance Explained',
        provider: 'StatQuest with Josh Starmer',
        url: 'https://www.youtube.com/watch?v=EuBBz3bI-aA',
        type: 'YouTube',
        youtubeId: 'EuBBz3bI-aA',
        channel: 'StatQuest',
        duration: '16 mins'
      }
    ]
  },
  {
    id: 'da-ai-search-logic',
    paper: 'DA',
    section: 'DA Core Section 7',
    subject: 'Artificial Intelligence',
    topic: 'Heuristic Search & Knowledge Representation',
    subtopics: [
      'Uninformed search strategies (BFS, DFS, Uniform Cost Search)',
      'Informed heuristic search (Greedy Best-First, A* search, admissibility & consistency)',
      'Adversarial game search (Minimax algorithm, Alpha-Beta pruning)',
      'Propositional logic, truth tables, satisfiability (SAT), and resolution refutation',
      'First-order predicate logic, universal/existential quantifiers, and unification'
    ],
    description: 'Goal-directed problem solving, state space exploration, and formal logical deduction systems.',
    prerequisites: ['Discrete Math', 'Graph Theory'],
    overlapTags: ['CS - Artificial Intelligence'],
    weightage: 'High',
    keyFormulas: [
      'f(n) = g(n) + h(n), \\quad h(n) \\le h^*(n) \\implies \\text{Admissible}',
      'h(n) \\le c(n, a, n\') + h(n\') \\implies \\text{Monotonic / Consistent}'
    ],
    externalResources: [
      {
        title: 'A* Pathfinding Algorithm Explained Visually',
        provider: 'Sebastian Lague',
        url: 'https://www.youtube.com/watch?v=-L-WgKMFuhE',
        type: 'YouTube',
        youtubeId: '-L-WgKMFuhE',
        channel: 'Sebastian Lague',
        duration: '11 mins'
      },
      {
        title: 'Game Search: Minimax Algorithm & Alpha-Beta Pruning with Cutoffs',
        provider: 'Abdul Bari',
        url: 'https://www.youtube.com/watch?v=l-hh51ncgDI',
        type: 'YouTube',
        youtubeId: 'l-hh51ncgDI',
        channel: 'Abdul Bari',
        duration: '22 mins'
      },
      {
        title: 'Propositional & First-Order Predicate Logic for GATE',
        provider: 'Gate Smashers',
        url: 'https://www.youtube.com/watch?v=X8Lmx7XfVvQ',
        type: 'YouTube',
        youtubeId: 'X8Lmx7XfVvQ',
        channel: 'Gate Smashers',
        duration: '28 mins'
      }
    ]
  }
];
