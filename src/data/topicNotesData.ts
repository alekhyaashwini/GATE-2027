import { StructuredUserNote } from '../types';

export interface InteractiveCheckQuestion {
  question: string;
  options: { id: string; text: string; isCorrect: boolean; feedback: string }[];
  hint: string;
}

export interface DetailedTopicContent extends StructuredUserNote {
  codeSnippet?: {
    language: string;
    title: string;
    code: string;
  };
  interactiveQuiz?: InteractiveCheckQuestion;
}

export const DETAILED_TOPIC_NOTES: Record<string, DetailedTopicContent> = {
  "ra-math-la": {
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra: Vector Spaces, Eigenvalues & Orthogonality",
    "paper": "RA",
    "definitionSummary": "Linear algebra forms the foundational mathematical language of robotics, spatial mechanisms, and modern control theory.\n\n### 1. Vector Spaces, Subspaces & Basis\nA vector space $V$ over $\\mathbb{R}$ is a set of mathematical objects equipped with vector addition and scalar multiplication satisfying the 8 vector space axioms. In spatial robotics, positions $P \\in \\mathbb{R}^3$, joint configurations $q \\in \\mathbb{R}^n$, and spatial twists reside in vector spaces.\n\nA subset $W \\subseteq V$ is a valid subspace iff it contains the zero vector and is closed under vector addition and scalar multiplication. The dimension of a subspace is the cardinal number of any basis spanning it.\n\n### 2. Matrix Rank & Rank-Nullity Theorem\nFor an $m \\times n$ matrix $A$, the row rank always equals the column rank. The Rank-Nullity Theorem states:\n$$\\text{Rank}(A) + \\text{Nullity}(A) = n$$\nwhere $n$ is the number of columns. In robotics, when the $6 \\times n$ Manipulator Jacobian $J(q)$ experiences rank deficiency ($\\text{Rank}(J) < \\min(6, n)$), the robot is in a kinematic singularity, losing instantaneous degrees of freedom in Cartesian space.\n\n### 3. Systems of Linear Equations ($Ax = b$)\n- **Unique Solution**: $\\text{Rank}(A) = \\text{Rank}([A \\mid b]) = n$ (iff $\\det(A) \\neq 0$ for square matrices).\n- **Infinitely Many Solutions**: $\\text{Rank}(A) = \\text{Rank}([A \\mid b]) = r < n$, with $(n - r)$ free variables.\n- **Inconsistent (No Solution)**: $\\text{Rank}(A) < \\text{Rank}([A \\mid b])$.\n\n### 4. Eigenvalues, Eigenvectors & Cayley-Hamilton Theorem\nFor $A \\in \\mathbb{R}^{n \\times n}$, scalar $\\lambda$ and non-zero vector $v \\neq 0$ satisfy $(A - \\lambda I)v = 0$. The Cayley-Hamilton Theorem proves that every square matrix satisfies its own characteristic equation: $P(A) = 0$, giving an exact algebraic method to compute matrix powers $A^k$ and state transition matrices $e^{At}$.",
    "keyFormulas": "$$\\det(A - \\lambda I) = 0 \\quad \\text{(Characteristic Polynomial)}$$\n\n$$\\text{Trace}(A) = \\sum_{i=1}^n \\lambda_i, \\quad \\det(A) = \\prod_{i=1}^n \\lambda_i$$\n\n$$A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A) = \\frac{1}{\\det(A)} C^T$$\n\n$$\\text{Rank}(A) + \\text{Nullity}(A) = n \\quad \\text{(Rank-Nullity Theorem)}$$\n\n$$A = Q \\Lambda Q^T \\quad \\text{(Spectral Theorem for Real Symmetric Matrices)}$$\n\n$$R \\in SO(3) \\implies R^T R = I, \\quad R^{-1} = R^T, \\quad \\det(R) = +1$$",
    "workedExample": "**GATE Problem**: Let $A = \\begin{bmatrix} 3 & 2 \\\\ 2 & 3 \\end{bmatrix}$. Evaluate $A^5$ using the Cayley-Hamilton theorem.\n\n1. Characteristic equation: $\\det(A - \\lambda I) = (3-\\lambda)^2 - 4 = \\lambda^2 - 6\\lambda + 5 = 0 \\implies \\lambda_1 = 5, \\lambda_2 = 1$.\n2. By Cayley-Hamilton: $A^2 - 6A + 5I = 0 \\implies A^2 = 6A - 5I$.\n3. Write $\\lambda^5 = Q(\\lambda)(\\lambda^2 - 6\\lambda + 5) + (p\\lambda + q)$. Substituting roots:\n   - At $\\lambda = 5$: $5^5 = 3125 = 5p + q$\n   - At $\\lambda = 1$: $1^5 = 1 = p + q$\n4. Subtracting yields $4p = 3124 \\implies p = 781$, so $q = -780$.\n5. Thus $A^5 = 781A - 780I = 781\\begin{bmatrix} 3 & 2 \\\\ 2 & 3 \\end{bmatrix} - 780\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 1563 & 1562 \\\\ 1562 & 1563 \\end{bmatrix}$.",
    "commonMistakes": "1. Considering the zero vector $v=0$ as an eigenvector (eigenvectors must be non-zero).\n2. Forgetting to multiply scalar remainder terms by identity matrix $I$ in Cayley-Hamilton expressions.\n3. Confusing orthogonal matrices with general matrices whose columns are merely mutually perpendicular but not normalized to unit length.",
    "examTraps": "*GATE Trap*: A matrix with repeated eigenvalues is diagonalizable if and only if geometric multiplicity equals algebraic multiplicity. If geometric multiplicity < algebraic multiplicity, the matrix is defective and cannot be diagonalized!",
    "crossLinks": "RA - Robot Kinematics (Rotation Matrices), DA - Linear Algebra (SVD & PCA), RA - Control Systems (State Space)",
    "customNotes": "For triangular matrices, eigenvalues are directly the diagonal entries.",
    "updatedAt": "2026-11-03T08:30:00.000Z",
    "codeSnippet": {
      "language": "python",
      "title": "Cayley-Hamilton Verification",
      "code": "import numpy as np\nA = np.array([[3.0, 2.0], [2.0, 3.0]])\nprint('A^5:\\n', np.linalg.matrix_power(A.astype(int), 5))"
    },
    "interactiveQuiz": {
      "question": "If a $3 \\times 3$ matrix $M$ has eigenvalues $\\lambda = 1, 2, -3$, what is $\\det(M^2 - I)$?",
      "options": [
        {
          "id": "A",
          "text": "0",
          "isCorrect": true,
          "feedback": "Correct! Eigenvalues of M^2 - I are lambda_i^2 - 1. For lambda = 1, 1^2 - 1 = 0, so the product of eigenvalues (determinant) is 0."
        },
        {
          "id": "B",
          "text": "24",
          "isCorrect": false,
          "feedback": "Incorrect."
        },
        {
          "id": "C",
          "text": "-48",
          "isCorrect": false,
          "feedback": "Incorrect."
        },
        {
          "id": "D",
          "text": "16",
          "isCorrect": false,
          "feedback": "Incorrect."
        }
      ],
      "hint": "Eigenvalues of P(M) are P(lambda_i). Evaluate P(1) for P(x) = x^2 - 1."
    }
  },
  "ra-math-calc-de": {
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "paper": "RA",
    "definitionSummary": "Differential equations and numerical methods govern the continuous dynamic modeling of robot joints, motor speed response, and sensor filtering.\n\n### 1. First-Order & Linear Higher-Order ODEs\nA first-order linear differential equation has standard form $\\frac{dy}{dx} + P(x)y = Q(x)$. Multiplying by the integrating factor $\\text{IF} = e^{\\int P(x)dx}$ yields the analytical solution $y \\cdot (\\text{IF}) = \\int Q(x)(\\text{IF})dx + C$.\n\nHigher-order linear ODEs with constant coefficients $a y'' + b y' + c y = f(t)$ govern mass-spring-damper suspensions and electrical circuits. The solution consists of the Complementary Function (CF, homogeneous solution) plus the Particular Integral (PI, forced response).\n\n### 2. Laplace Transforms & Transient Dynamics\nThe unilateral Laplace transform $\\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^\\infty f(t) e^{-st} dt$ maps linear differential equations into algebraic equations in the complex frequency domain $s$. Key operational theorems:\n- Differentiation: $\\mathcal{L}\\{f'(t)\\} = s F(s) - f(0^-)$\n- Shifting theorem: $\\mathcal{L}\\{e^{at} f(t)\\} = F(s - a)$\n- Initial Value Theorem: $\\lim_{t \\to 0^+} f(t) = \\lim_{s \\to \\infty} s F(s)$\n- Final Value Theorem: $\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0} s F(s)$ (valid only if all poles of $sF(s)$ lie strictly in the open left-half complex plane).\n\n### 3. Numerical Methods\n- **Newton-Raphson Method**: Iterative root-finding using tangent lines $x_{k+1} = x_k - \\frac{f(x_k)}{f'(x_k)}$. Possesses quadratic convergence ($p=2$) for simple roots.\n- **Numerical Integration**: Trapezoidal rule approximates curves with straight line chords ($O(h^2)$ global error). Simpson's 1/3 rule fits quadratic parabolas over pairs of intervals ($O(h^4)$ global error), requiring an even number of subintervals $n$.",
    "keyFormulas": "$$\\text{IF} = e^{\\int P(x) dx}, \\quad y \\cdot (\\text{IF}) = \\int Q(x) (\\text{IF}) dx + C$$\n\n$$\\mathcal{L}\\{f'(t)\\} = s F(s) - f(0), \\quad \\mathcal{L}\\{f''(t)\\} = s^2 F(s) - s f(0) - f'(0)$$\n\n$$\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0} s F(s) \\quad \\text{(Final Value Theorem)}$$\n\n$$x_{k+1} = x_k - \\frac{f(x_k)}{f'(x_k)} \\quad \\text{(Newton-Raphson)}$$\n\n$$\\int_a^b f(x) dx \\approx \\frac{h}{3}[y_0 + 4(y_1 + y_3 + \\dots) + 2(y_2 + y_4 + \\dots) + y_n]$$",
    "workedExample": "**GATE Problem**: Solve the initial value problem $\\frac{dy}{dx} + 2y = 4e^{-2x}$ with $y(0) = 3$.\n\n1. Identify $P(x) = 2, Q(x) = 4e^{-2x}$.\n2. Integrating Factor: $\\text{IF} = e^{\\int 2 dx} = e^{2x}$.\n3. Multiply equation by IF: $y \\cdot e^{2x} = \\int 4e^{-2x} e^{2x} dx = \\int 4 dx = 4x + C$.\n4. General solution: $y(x) = (4x + C)e^{-2x}$.\n5. Apply initial condition $y(0) = 3$: $3 = (0 + C)e^0 \\implies C = 3$.\n6. Particular solution: $y(x) = (4x + 3)e^{-2x}$.",
    "commonMistakes": "1. Applying Final Value Theorem when poles of $sF(s)$ lie on the imaginary axis (e.g., $1/(s^2+1)$ has no steady-state limit; it oscillates indefinitely).\n2. Using Simpson's 1/3 rule with an odd number of subintervals.\n3. Neglecting initial conditions $f(0)$ when taking Laplace transforms of derivatives.",
    "examTraps": "*GATE Trap*: In Newton-Raphson, if the starting point $x_0$ is chosen near a local extremum where $f'(x_0) \\approx 0$, the algorithm divides by near-zero and diverges wildly.",
    "crossLinks": "RA - Control Systems (Transfer Functions), DA - Calculus (Convex Optimization)",
    "customNotes": "Simpson's 1/3 rule gives the exact analytical integral for polynomials up to degree 3.",
    "updatedAt": "2026-11-03T08:30:00.000Z",
    "codeSnippet": {
      "language": "python",
      "title": "Newton-Raphson Root Finding",
      "code": "def newton_raphson(f, df, x0, tol=1e-6, max_iter=20):\n    x = x0\n    for _ in range(max_iter):\n        dx = f(x) / df(x)\n        x = x - dx\n        if abs(dx) < tol: break\n    return x\n\n# Solve x^2 - 2 = 0\nprint('sqrt(2) approx:', newton_raphson(lambda x: x**2 - 2, lambda x: 2*x, 1.0))"
    },
    "interactiveQuiz": {
      "question": "What is the order of convergence of the Newton-Raphson method for a simple root?",
      "options": [
        {
          "id": "A",
          "text": "2 (Quadratic)",
          "isCorrect": true,
          "feedback": "Correct! Error at step k+1 is proportional to the square of the error at step k."
        },
        {
          "id": "B",
          "text": "1 (Linear)",
          "isCorrect": false,
          "feedback": "Linear convergence occurs for multiple roots, not simple roots."
        },
        {
          "id": "C",
          "text": "1.618",
          "isCorrect": false,
          "feedback": "1.618 is the golden ratio convergence of the Secant method."
        },
        {
          "id": "D",
          "text": "3 (Cubic)",
          "isCorrect": false,
          "feedback": "Incorrect."
        }
      ],
      "hint": "Recall that Newton-Raphson doubles the number of accurate digits per iteration."
    }
  },
  "ra-mechatronics-circuits-sensors": {
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "paper": "RA",
    "definitionSummary": "Mechatronics integrates precision mechanical actuation, solid-state sensing, and analog/digital conditioning to drive industrial robots.\n\n### 1. Angular Encoders & Velocity Feedback\n- **Incremental Optical Encoders**: Use code disks with transparent and opaque sectors. Two photodiodes produce channels A and B in phase quadrature ($90^\\circ$ electrical shift). Using 4X quadrature decoding (detecting both rising and falling edges of A and B), resolution is $\\Delta\\theta = \\frac{360^\\circ}{4 \\times \\text{PPR}}$. Channel Z (index) provides a single home reference pulse per revolution.\n- **Absolute Optical Encoders**: Output a unique multi-bit binary or Gray code word for each angular increment. Gray code prevents multi-bit transition race conditions by ensuring only ONE bit changes between adjacent sector states.\n\n### 2. Actuators: DC Motors, BLDC & Steppers\n- **DC Servomotors**: Governed by $V_t = E_b + I_a R_a = K_b \\omega + I_a R_a$ and developed electromagnetic torque $T_e = K_t I_a$. In SI units ($V/(rad/s)$ and $N\\cdot m/A$), $K_b = K_t$.\n- **Stepper Motors**: Convert digital pulses into discrete angular steps $\\beta = \\frac{360^\\circ}{m \\cdot Z}$, where $m$ is phases and $Z$ is rotor teeth. Steppers offer precise open-loop position control without encoder feedback, but can lose synchronization if torque exceeds stall limits.\n- **BLDC Motors**: Electrically commutated using Hall sensors or back-EMF zero-crossing, offering superior heat dissipation (heat generated in stator, not rotor) and longer lifespan.\n\n### 3. Operational Amplifiers & Signal Conditioning\n- **Inverting Amplifier**: $V_{out} = -\\frac{R_f}{R_1} V_{in}$ (virtual ground at inverting terminal).\n- **Non-Inverting Amplifier**: $V_{out} = \\left(1 + \\frac{R_f}{R_1}\\right) V_{in}$.\n- **Instrumentation Amplifier**: 3-op-amp topology offering very high CMRR (Common Mode Rejection Ratio) to amplify microvolt bridge signals from strain gauges.",
    "keyFormulas": "$$\\Delta\\theta = \\frac{360^\\circ}{4 \\times \\text{PPR}} \\quad \\text{(4X Quadrature Resolution)}$$\n\n$$V_t = K_b \\omega + I_a R_a, \\quad T_e = K_t I_a$$\n\n$$\\beta = \\frac{360^\\circ}{m \\times Z} \\quad \\text{(Stepper Motor Step Angle)}$$\n\n$$V_{out} = -\\frac{R_f}{R_1} V_{in} \\; (\\text{Inverting}), \\quad V_{out} = \\left(1 + \\frac{R_f}{R_1}\\right) V_{in} \\; (\\text{Non-Inverting})$$\n\n$$V_{LSB} = \\frac{V_{ref}}{2^n - 1} \\approx \\frac{V_{ref}}{2^n} \\quad \\text{(ADC Resolution)}$$",
    "workedExample": "**GATE Problem**: A permanent magnet DC servomotor is powered by a 24 V DC source with $R_a = 2.0\\ \\Omega$ and $K_b = 0.05\\ \\text{V/(rad/s)}$. When drawing $I_a = 4.0$ A:\n1. Find the back-EMF $E_b$: $E_b = V_t - I_a R_a = 24 - (4.0 \\times 2.0) = 16.0$ V.\n2. Find the angular speed $\\omega$: $\\omega = \\frac{E_b}{K_b} = \\frac{16.0}{0.05} = 320$ rad/s.\n3. In RPM: $N = \\frac{320 \\times 60}{2\\pi} \\approx 3055.7$ RPM.\n4. Electromagnetic torque: $T = K_t I_a = 0.05 \\times 4.0 = 0.20\\ \\text{N}\\cdot\\text{m}$.",
    "commonMistakes": "1. Forgetting to multiply PPR by 4 when 4X quadrature decoding is specified.\n2. Mixing units between rad/s and RPM in back-EMF equations.\n3. Confusing active sensors (requiring external power, like strain gauges/LVDTs) with self-generating passive transducers (like piezoelectric crystals/thermocouples).",
    "examTraps": "*GATE Trap*: In Gray code to binary conversion, the MSB remains identical, but subsequent binary bits are obtained by XORing the current binary bit with the next Gray bit: $B_k = B_{k+1} \\oplus G_k$.",
    "crossLinks": "RA - Kinematics (Joint Encoders), RA - Control Systems (Motor Transfer Functions)",
    "customNotes": "Hall sensors in BLDC motors provide 6 discrete commutation states per electrical cycle (120-degree conduction).",
    "updatedAt": "2026-11-03T08:30:00.000Z",
    "codeSnippet": {
      "language": "python",
      "title": "Encoder Resolution & Step Angle Calculator",
      "code": "def encoder_res(ppr, quad=True):\n    counts = ppr * 4 if quad else ppr\n    return 360.0 / counts\n\nprint('1024 PPR 4X Resolution (deg):', encoder_res(1024)) # 0.08789 deg"
    },
    "interactiveQuiz": {
      "question": "Why is Gray code preferred over standard Binary code on absolute optical encoder disks?",
      "options": [
        {
          "id": "A",
          "text": "Only one bit changes state between adjacent positions, eliminating race conditions",
          "isCorrect": true,
          "feedback": "Correct! Gray code eliminates multi-bit switching ambiguity errors."
        },
        {
          "id": "B",
          "text": "It uses fewer tracks for the same resolution",
          "isCorrect": false,
          "feedback": "Both require the same number of tracks (n tracks for 2^n positions)."
        },
        {
          "id": "C",
          "text": "It produces analog voltage directly",
          "isCorrect": false,
          "feedback": "Incorrect."
        },
        {
          "id": "D",
          "text": "It requires zero optical sensors",
          "isCorrect": false,
          "feedback": "Incorrect."
        }
      ],
      "hint": "Consider what happens when converting from binary 0111 (7) to 1000 (8) if bits switch asynchronously."
    }
  },
  "ra-robotics-kinematics-transforms": {
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "paper": "RA",
    "definitionSummary": "Robot kinematics analyzes spatial motion, coordinate mapping, and serial chain posture without considering actuator torques.\n\n### 1. Mobility & Gr\u00fcbler Criterion\nGr\u00fcbler's formula computes degrees of freedom: $M = \\lambda(N - 1 - J) + \\sum f_i$, with $\\lambda = 3$ for planar mechanisms and $\\lambda = 6$ for spatial mechanisms. $N$ includes the ground link. For a planar 3R robot arm: $M = 3(4 - 1 - 3) + 3 = 3$ DOF.\n\n### 2. Homogeneous Transformation Matrices ($4 \\times 4$)\nTo combine 3D rotation $R \\in SO(3)$ and translation $P \\in \\mathbb{R}^3$ into a single matrix multiplication, homogeneous coordinates are used:\n$$T = \\begin{bmatrix} R & P \\\\ 0_{1\\times 3} & 1 \\end{bmatrix}$$\nThe inverse of a homogeneous transform is given by:\n$$T^{-1} = \\begin{bmatrix} R^T & -R^T P \\\\ 0 & 1 \\end{bmatrix}$$\n\n### 3. Denavit-Hartenberg (DH) Convention\nStandard DH assigns a coordinate frame to each link using 4 kinematic parameters:\n1. $a_i$ (link length): distance from $Z_{i-1}$ to $Z_i$ along $X_i$.\n2. $\\alpha_i$ (link twist): angle from $Z_{i-1}$ to $Z_i$ about $X_i$.\n3. $d_i$ (link offset): distance from $X_{i-1}$ to $X_i$ along $Z_{i-1}$ (variable for prismatic joints).\n4. $\\theta_i$ (joint angle): angle from $X_{i-1}$ to $X_i$ about $Z_{i-1}$ (variable for revolute joints).\n\n### 4. Manipulator Jacobian & Singularities\nThe Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to Cartesian end-effector velocity $v = J(q) \\dot{q}$. When $\\det(J) = 0$ (rank deficient), the arm is at a **kinematic singularity**, where it loses degrees of freedom and requires infinite joint velocity to achieve certain Cartesian speeds.",
    "keyFormulas": "$$M = \\lambda (N - 1 - J) + \\sum_{i=1}^J f_i \\quad [\\lambda=3 \\text{ Planar}, \\lambda=6 \\text{ Spatial}]$$\n\n$$T = \\begin{bmatrix} R & P \\\\ 0 & 1 \\end{bmatrix} \\implies T^{-1} = \\begin{bmatrix} R^T & -R^T P \\\\ 0 & 1 \\end{bmatrix}$$\n\n$$T_{i-1}^i = \\text{Rot}(Z, \\theta_i) \\text{Trans}(Z, d_i) \\text{Trans}(X, a_i) \\text{Rot}(X, \\alpha_i)$$\n\n$$\\begin{bmatrix} v \\\\ \\omega \\end{bmatrix} = J(q) \\dot{q}, \\quad \\det(J) = 0 \\iff \\text{Singularity}$$",
    "workedExample": "**GATE Problem**: A planar 2R manipulator has link lengths $L_1 = 40$ cm, $L_2 = 30$ cm. What are the end-effector coordinates $(x, y)$ when joint angles are $\\theta_1 = 30^\\circ$ and $\\theta_2 = 60^\\circ$?\n\n1. Forward kinematics equations for 2R arm:\n   $x = L_1 \\cos\\theta_1 + L_2 \\cos(\\theta_1 + \\theta_2)$\n   $y = L_1 \\sin\\theta_1 + L_2 \\sin(\\theta_1 + \\theta_2)$\n2. Note that $(\\theta_1 + \\theta_2) = 30^\\circ + 60^\\circ = 90^\\circ$.\n3. $x = 40 \\cos(30^\\circ) + 30 \\cos(90^\\circ) = 40(0.866) + 30(0) = 34.64$ cm.\n4. $y = 40 \\sin(30^\\circ) + 30 \\sin(90^\\circ) = 40(0.5) + 30(1) = 20 + 30 = 50.0$ cm.",
    "commonMistakes": "1. Pre-multiplication vs post-multiplication: pre-multiply for rotations about fixed base frames; post-multiply for rotations about current frames.\n2. Forgetting that translation part of $T^{-1}$ is $-R^T P$, not $-P$.\n3. Misidentifying link twist $\\alpha_i$ (measured about $X_i$, NOT $Z_i$).",
    "examTraps": "*GATE Trap*: For a planar 2R robot, the boundary singularity occurs when $\\theta_2 = 0^\\circ$ (fully outstretched, reach = $L_1+L_2$) or $\\theta_2 = 180^\\circ$ (folded back, reach = $|L_1-L_2|$). The Jacobian determinant is $\\det(J) = L_1 L_2 \\sin\\theta_2 = 0$.",
    "crossLinks": "RA - Math Linear Algebra, RA - Trajectory Planning, RA - Mechatronics",
    "customNotes": "SCARA robots feature 4 DOF (RRPR) with high vertical stiffness and compliance in horizontal plane.",
    "updatedAt": "2026-11-03T08:30:00.000Z",
    "codeSnippet": {
      "language": "python",
      "title": "2R Planar Arm Forward Kinematics",
      "code": "import numpy as np\n\ndef fk_2r(l1, l2, th1_deg, th2_deg):\n    t1, t2 = np.radians(th1_deg), np.radians(th2_deg)\n    x = l1 * np.cos(t1) + l2 * np.cos(t1 + t2)\n    y = l1 * np.sin(t1) + l2 * np.sin(t1 + t2)\n    return x, y\n\nprint('End-effector (x, y):', fk_2r(40, 30, 30, 60)) # (34.64, 50.0)"
    },
    "interactiveQuiz": {
      "question": "At which joint angle $\\theta_2$ does a planar 2R robot arm with link lengths $L_1$ and $L_2$ experience an internal kinematic singularity?",
      "options": [
        {
          "id": "A",
          "text": "$\\theta_2 = 0^\\circ$ or $180^\\circ$",
          "isCorrect": true,
          "feedback": "Correct! $\\det(J) = L_1 L_2 \\sin\\theta_2 = 0$ when $\\theta_2 = 0^\\circ$ or $180^\\circ$."
        },
        {
          "id": "B",
          "text": "$\\theta_2 = 90^\\circ$",
          "isCorrect": false,
          "feedback": "At 90 deg, sin(90)=1, which gives maximum manipulability."
        },
        {
          "id": "C",
          "text": "$\\theta_1 = 45^\\circ$",
          "isCorrect": false,
          "feedback": "Singularity depends solely on relative joint angle theta2, not base angle theta1."
        },
        {
          "id": "D",
          "text": "$\\theta_2 = 45^\\circ$",
          "isCorrect": false,
          "feedback": "Incorrect."
        }
      ],
      "hint": "When does $\\det(J) = L_1 L_2 \\sin\\theta_2$ equal zero?"
    }
  },
  "ra-robotics-dynamics-path-endeffectors": {
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "paper": "RA",
    "definitionSummary": "Trajectory formulation converts desired Cartesian waypoints into smooth, actuator-compatible joint position and velocity profiles.\n\n### 1. Polynomial Trajectory Planning\n- **Cubic Polynomial**: $\\theta(t) = a_0 + a_1 t + a_2 t^2 + a_3 t^3$. Satisfies 4 boundary conditions $(\\theta_0, \\theta_f, \\dot{\\theta}_0, \\dot{\\theta}_f)$. Provides continuous velocity, but non-zero boundary accelerations (jerk impulses).\n- **Quintic Polynomial**: 5th order polynomial with 6 coefficients satisfying position, velocity, and zero boundary accelerations $\\ddot{\\theta}_0 = \\ddot{\\theta}_f = 0$.\n- **LSPB (Trapezoidal Velocity)**: Linear Segment with Parabolic Blends divides motion into constant acceleration blend, constant velocity cruise, and constant deceleration blend.\n\n### 2. Robotic Grippers & Clamping Force\nFriction grippers hold objects via tangential shear friction: $2 \\mu F_N \\ge S_f m (g + a)$, where $S_f$ is safety factor and factor of 2 accounts for two opposing jaws.\nVacuum cups generate lifting force perpendicular to the surface: $F = \\Delta P \\cdot A = \\Delta P \\cdot \\frac{\\pi D^2}{4}$.\n\n### 3. Repeatability vs Accuracy (ISO 9283)\nAccuracy measures the distance between commanded target point and actual mean cluster center. Repeatability measures scatter agreement among repeated trials ($R_p = \\pm 3\\sigma$).",
    "keyFormulas": "$$a_2 = \\frac{3(\\theta_f - \\theta_0)}{t_f^2}, \\quad a_3 = -\\frac{2(\\theta_f - \\theta_0)}{t_f^3} \\quad \\text{(Cubic starting/ending at rest)}$$\n\n$$F_N \\ge \\frac{S_f \\cdot m (g + a)}{2 \\mu} \\quad \\text{(Two-finger gripper force)}$$\n\n$$F_{vac} = \\Delta P \\times A = \\Delta P \\times \\frac{\\pi D^2}{4} \\quad \\text{(Suction cup lifting force)}$$\n\n$$R_p = \\pm 3\\sigma \\quad \\text{(ISO 9283 Positioning Repeatability)}$$",
    "workedExample": "**GATE Problem**: A 2-finger friction gripper holds a $m = 6.0$ kg payload. The coefficient of friction is $\\mu = 0.25$. If the robot accelerates upwards at $a = 2.19\\ \\text{m/s}^2$ with a safety factor of $S_f = 2.0$ (take $g = 9.81\\ \\text{m/s}^2$):\n1. Total vertical force needed: $F_{req} = S_f m (g + a) = 2.0 \\times 6.0 \\times (9.81 + 2.19) = 12.0 \\times 12.0 = 144.0$ N.\n2. Total frictional resistance from 2 jaws: $2 \\mu F_N$.\n3. Normal force per finger: $F_N = \\frac{144.0}{2 \\times 0.25} = \\frac{144.0}{0.5} = 288.0$ N.",
    "commonMistakes": "1. Forgetting factor of 2 for two opposing gripper fingers.\n2. Forgetting to add upward acceleration $a$ to gravity $g$.\n3. Confusing ISO repeatability ($3\\sigma$) with single standard deviation ($\\sigma$).",
    "examTraps": "*GATE Trap*: In cubic trajectory planning, maximum velocity does NOT occur at $t = t_f$. For symmetric start and end at rest, peak velocity occurs exactly at midpoint $t = t_f / 2$, with value $v_{max} = 1.5 \\frac{\\theta_f - \\theta_0}{t_f}$.",
    "crossLinks": "RA - Kinematics, RA - Mechatronics (Actuator Sizing)",
    "customNotes": "Vacuum suction cups require non-porous smooth surfaces; porous materials cause rapid underpressure decay.",
    "updatedAt": "2026-11-03T08:30:00.000Z",
    "codeSnippet": {
      "language": "python",
      "title": "Gripper Force Calculator",
      "code": "def gripper_normal_force(mass, mu, a_up=0.0, sf=2.0, g=9.81):\n    return (sf * mass * (g + a_up)) / (2.0 * mu)\n\nprint('Gripper FN (N):', gripper_normal_force(6.0, 0.25, 2.19, 2.0)) # 288.0 N"
    },
    "interactiveQuiz": {
      "question": "Why is a quintic (5th order) polynomial preferred over a cubic polynomial for high-speed trajectory planning?",
      "options": [
        {
          "id": "A",
          "text": "It allows setting boundary accelerations to zero, preventing infinite motor jerk",
          "isCorrect": true,
          "feedback": "Correct! Quintic trajectories ensure zero boundary accelerations, avoiding severe mechanical shock."
        },
        {
          "id": "B",
          "text": "It eliminates the need for inverse kinematics",
          "isCorrect": false,
          "feedback": "Incorrect."
        },
        {
          "id": "C",
          "text": "It runs in constant execution time",
          "isCorrect": false,
          "feedback": "Incorrect."
        },
        {
          "id": "D",
          "text": "It requires only two coefficients",
          "isCorrect": false,
          "feedback": "Incorrect. Quintic uses 6 coefficients."
        }
      ],
      "hint": "Consider the derivative of acceleration (jerk) at start and end times."
    }
  },
  "ra-cim-plc-automation": {
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "paper": "RA",
    "definitionSummary": "Computer Integrated Manufacturing (CIM) and Programmable Logic Controllers (PLCs) form the control backbone of factory automation.\n\n### 1. PLC Operating Cycle & Ladder Logic\nA PLC repeatedly executes a 3-phase scan cycle:\n1. **Input Scan**: Reads physical input terminal states into the Input Image Table.\n2. **Program Execution**: Solves ladder rungs sequentially from left-to-right, top-to-bottom.\n3. **Output Scan**: Writes Output Image Table values to physical actuator terminals.\nScan time $T_{scan} = T_{in} + T_{exec} + T_{out}$. Key ladder elements: NO contact ($-[/]-$), NC contact ($-[/]-$), TON (Timer On-Delay), CTU (Up-Counter).\n\n### 2. CNC Programming (G-Codes & M-Codes)\n- G00: Rapid traverse (non-cutting positioning at maximum velocity)\n- G01: Linear interpolation at programmed feedrate\n- G02 / G03: Circular interpolation clockwise (CW) / counter-clockwise (CCW)\n- G90 / G91: Absolute / Incremental dimensioning\n- M03 / M04 / M05: Spindle ON CW / Spindle ON CCW / Spindle STOP\n- M08 / M09: Coolant ON / Coolant OFF; M30: Program End and Rewind\n\n### 3. Automated Material Handling & Workcells\n- **AS/RS**: Automated Storage and Retrieval Systems travel time $T = \\max(L/v_x, H/v_y)$.\n- **Production Rate**: For a balanced transfer line of $m$ stations, throughput is limited by the bottleneck station: $R_p = 60 / T_{bottleneck}$ parts/hour.",
    "keyFormulas": "$$T_{scan} = T_{input} + T_{program} + T_{output}$$\n\n$$T = \\max\\left(\\frac{L}{v_x}, \\frac{H}{v_y}\\right) \\quad \\text{(AS/RS Simultaneous Transit Time)}$$\n\n$$R_p = \\frac{60}{T_b} \\quad \\text{(Line Production Rate governed by Bottleneck $T_b$)}$$",
    "workedExample": "**GATE Problem**: An AS/RS crane operates in an aisle of length $L = 80$ m and height $H = 24$ m. Drive speeds are $v_x = 2.0$ m/s horizontally and $v_y = 0.60$ m/s vertically. Pickup and drop takes $T_{pd} = 12$ s total. What is the transit time $T$?\n\n1. Horizontal travel time: $t_x = 80 / 2.0 = 40.0$ s.\n2. Vertical travel time: $t_y = 24 / 0.60 = 40.0$ s.\n3. Simultaneous travel transit time: $T = \\max(t_x, t_y) = \\max(40, 40) = 40.0$ s.",
    "commonMistakes": "1. Adding horizontal and vertical transit times together instead of taking $\\max(t_x, t_y)$ for simultaneous crane drives.\n2. Confusing G02 (CW) with G03 (CCW).\n3. Assuming M05 starts the spindle (M03 starts CW, M05 stops).",
    "examTraps": "*GATE Trap*: A PLC program does NOT change physical outputs immediately when a rung evaluates to True. Outputs are updated ONLY during the Output Scan phase at the end of the scan cycle!",
    "crossLinks": "RA - Mechatronics (Digital Circuits), RA - Control Systems",
    "customNotes": "G90 denotes absolute coordinates referenced to workpiece origin; G91 denotes incremental moves from tool position.",
    "updatedAt": "2026-11-03T08:30:00.000Z",
    "codeSnippet": {
      "language": "python",
      "title": "AS/RS Cycle Time Calculator",
      "code": "def asrs_time(L, H, vx, vy, t_pd):\n    t_traverse = max(L / vx, H / vy)\n    return t_traverse, t_traverse + 2 * t_pd\n\nprint('AS/RS times (s):', asrs_time(80, 24, 2.0, 0.6, 12.0)) # (40.0, 64.0)"
    },
    "interactiveQuiz": {
      "question": "Which G-code is used for circular interpolation in a counter-clockwise (CCW) direction?",
      "options": [
        {
          "id": "A",
          "text": "G03",
          "isCorrect": true,
          "feedback": "Correct! G02 is circular CW, G03 is circular CCW."
        },
        {
          "id": "B",
          "text": "G02",
          "isCorrect": false,
          "feedback": "G02 is circular clockwise (CW)."
        },
        {
          "id": "C",
          "text": "G01",
          "isCorrect": false,
          "feedback": "G01 is linear feed interpolation."
        },
        {
          "id": "D",
          "text": "G00",
          "isCorrect": false,
          "feedback": "G00 is rapid non-cutting traverse."
        }
      ],
      "hint": "G02 is clockwise; G03 is counter-clockwise."
    }
  },
  "ra-b1-control-systems": {
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "paper": "RA",
    "definitionSummary": "Feedback control ensures precision trajectory tracking and disturbance rejection in robot joints.\n\n### 1. Closed-Loop Dynamics & Second-Order Systems\nStandard second-order closed-loop transfer function:\n$$T(s) = \\frac{\\omega_n^2}{s^2 + 2\\zeta \\omega_n s + \\omega_n^2}$$\n- Underdamped ($0 < \\zeta < 1$): Complex conjugate poles $-\\zeta\\omega_n \\pm j\\omega_d$, oscillatory transient.\n- Critically damped ($\\zeta = 1$): Fastest non-oscillatory return.\n- Overdamped ($\\zeta > 1$): Sluggish exponential response.\nKey time-domain metrics: Peak overshoot $M_p = e^{-\\frac{\\pi \\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%$, settling time $t_s = \\frac{4}{\\zeta\\omega_n}$ (2% criterion).\n\n### 2. Steady-State Error & System Type\nSteady-state error $e_{ss} = \\lim_{s \\to 0} \\frac{s R(s)}{1 + G(s)H(s)}$. System type (number of open-loop poles at origin $s=0$):\n- Type 0: $e_{ss} = \\frac{1}{1+K_p}$ for step; $\\infty$ for ramp.\n- Type 1: $e_{ss} = 0$ for step; $\\frac{1}{K_v}$ for ramp.\n- Type 2: $e_{ss} = 0$ for step and ramp; $\\frac{1}{K_a}$ for parabolic.\n\n### 3. PID Controller Action\n$$u(t) = K_p e(t) + K_i \\int_0^t e(\\tau) d\\tau + K_d \\frac{de(t)}{dt} \\iff G_c(s) = K_p + \\frac{K_i}{s} + K_d s$$\n- **P (Proportional)**: Reduces rise time, but cannot eliminate steady-state error alone.\n- **I (Integral)**: Eliminates steady-state offset by increasing system type by 1, but decreases stability margin.\n- **D (Derivative)**: Adds anticipatory phase lead and damping, reducing overshoot and settling time.",
    "keyFormulas": "$$M_p = e^{-\\frac{\\pi \\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%, \\quad t_s(2\\%) = \\frac{4}{\\zeta \\omega_n}, \\quad t_p = \\frac{\\pi}{\\omega_d}$$\n\n$$e_{ss} = \\frac{1}{1+K_p} \\; (\\text{Step}), \\quad e_{ss} = \\frac{1}{K_v} \\; (\\text{Ramp}), \\quad e_{ss} = \\frac{1}{K_a} \\; (\\text{Parabolic})$$\n\n$$G_c(s) = K_p + \\frac{K_i}{s} + K_d s = \\frac{K_d s^2 + K_p s + K_i}{s}$$\n\n$$\\dot{x} = A x + B u, \\quad y = C x + D u \\quad \\text{(State-Space)}$$",
    "workedExample": "**GATE Problem**: A unity feedback system has open-loop transfer function $G(s) = \\frac{25}{s(s + 6)}$. Find $\\omega_n, \\zeta, M_p$, and $2\\%$ settling time $t_s$.\n\n1. Closed-loop transfer function: $T(s) = \\frac{G(s)}{1 + G(s)} = \\frac{25}{s^2 + 6s + 25}$.\n2. Compare with standard form: $\\omega_n^2 = 25 \\implies \\omega_n = 5$ rad/s.\n3. $2\\zeta\\omega_n = 6 \\implies 2\\zeta(5) = 6 \\implies \\zeta = 0.6$.\n4. Peak overshoot: $M_p = e^{-\\frac{\\pi(0.6)}{\\sqrt{1-0.36}}} = e^{-\\frac{1.88496}{0.8}} = e^{-2.356} \\times 100\\% \\approx 9.48\\%$.\n5. Settling time (2%): $t_s = \\frac{4}{\\zeta\\omega_n} = \\frac{4}{0.6 \\times 5} = \\frac{4}{3} \\approx 1.33$ seconds.",
    "commonMistakes": "1. Evaluating steady-state error using closed-loop poles instead of open-loop poles at $s=0$.\n2. Confusing the 2% criterion ($4/(\\zeta\\omega_n)$) with the 5% criterion ($3/(\\zeta\\omega_n)$).\n3. Believing derivative control (D) removes steady-state offset (only Integral control does).",
    "examTraps": "*GATE Trap*: In Routh-Hurwitz, if an entire row becomes zero, form the auxiliary equation $A(s) = 0$ using coefficients from the row immediately above, differentiate $\\frac{dA}{ds}$, and replace the zero row. The roots of $A(s) = 0$ are symmetric about the origin (often marginal imaginary poles $\\pm j\\omega$).",
    "crossLinks": "RA - Linear Algebra (Eigenvalues as Poles), RA - Mechatronics (Motor Control)",
    "customNotes": "Derivative kick is avoided in commercial drives by feeding only position output $-K_d \\dot{y}$ to derivative action rather than error derivative.",
    "updatedAt": "2026-11-03T08:30:00.000Z",
    "codeSnippet": {
      "language": "python",
      "title": "Second-Order Response Calculator",
      "code": "import math\n\ndef second_order(zeta, wn):\n    mp = math.exp(-math.pi * zeta / math.sqrt(1 - zeta**2)) * 100\n    ts = 4.0 / (zeta * wn)\n    return mp, ts\n\nprint('zeta=0.6, wn=5 -> Mp (%):', round(second_order(0.6, 5)[0], 2)) # 9.48%"
    },
    "interactiveQuiz": {
      "question": "What is the primary effect of adding Integral (I) control action to a closed-loop positioning system?",
      "options": [
        {
          "id": "A",
          "text": "It increases system type number by 1, eliminating steady-state offset for step inputs",
          "isCorrect": true,
          "feedback": "Correct! Ki/s introduces a pole at the origin, eliminating steady-state error."
        },
        {
          "id": "B",
          "text": "It improves phase margin and speeds up initial rise time",
          "isCorrect": false,
          "feedback": "Integral action adds negative phase lag, which reduces phase margin."
        },
        {
          "id": "C",
          "text": "It eliminates sensor noise amplification",
          "isCorrect": false,
          "feedback": "Incorrect."
        },
        {
          "id": "D",
          "text": "It guarantees overdamped transient response",
          "isCorrect": false,
          "feedback": "Incorrect."
        }
      ],
      "hint": "Integral action integrates error over time: Ki/s."
    }
  },
  "ra-b2-mechanics-materials": {
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials: Stress, Torsion & Buckling",
    "paper": "RA",
    "definitionSummary": "Mechanics of materials governs structural deflection, stress limits, and buckling stability in robot arms and shafts.\n\n### 1. Stress, Strain & Mohr's Circle\nUnder plane stress $(\\sigma_x, \\sigma_y, \\tau_{xy})$, principal normal stresses are:\n$$\\sigma_{1,2} = \\frac{\\sigma_x + \\sigma_y}{2} \\pm \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$$\nThe maximum in-plane shear stress is the radius of Mohr's circle: $\\tau_{max} = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$.\n\n### 2. Pure Bending & Torsion\n- **Euler-Bernoulli Flexure Formula**: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$. Maximum bending stress $\\sigma_{max} = \\frac{M}{Z}$, where $Z = I / y_{max}$ is section modulus.\n- **Torsion of Circular Shafts**: $\\frac{T}{J} = \\frac{\\tau}{r} = \\frac{G \\theta}{L}$. Polar second moment of area for solid circular shaft $J = \\frac{\\pi d^4}{32}$, giving outer shear stress $\\tau_{max} = \\frac{16T}{\\pi d^3}$.\n\n### 3. Euler Buckling of Columns\nCritical axial compressive buckling load: $P_{cr} = \\frac{\\pi^2 E I}{(L_e)^2}$, where effective length $L_e$ depends on end conditions: Pinned-Pinned ($L$), Fixed-Fixed ($0.5L$), Fixed-Free ($2.0L$), Fixed-Pinned ($0.707L$).",
    "keyFormulas": "$$\\sigma_{1,2} = \\frac{\\sigma_x + \\sigma_y}{2} \\pm R, \\quad \\tau_{max} = R = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$$\n\n$$\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}, \\quad \\sigma_{max} = \\frac{M}{Z}$$\n\n$$\\frac{T}{J} = \\frac{\\tau}{r} = \\frac{G \\theta}{L}, \\quad \\tau_{max} = \\frac{16 T}{\\pi d^3}$$\n\n$$P_{cr} = \\frac{\\pi^2 E I}{(L_e)^2} \\quad \\text{(Euler Critical Buckling Load)}$$",
    "workedExample": "**GATE Problem**: A solid circular steel shaft of diameter $d = 50$ mm transmits a torque $T = 1.0\\ \\text{kN}\\cdot\\text{m}$. What is the maximum shear stress $\\tau_{max}$?\n\n1. Torsion formula: $\\tau_{max} = \\frac{16 T}{\\pi d^3}$.\n2. Convert units: $T = 1000$ N\u00b7m, $d = 0.05$ m.\n3. $d^3 = (0.05)^3 = 1.25 \\times 10^{-4}$ m$^3$.\n4. $\\tau_{max} = \\frac{16 \\times 1000}{\\pi \\times 1.25 \\times 10^{-4}} = \\frac{16000}{3.927 \\times 10^{-4}} = 4.074 \\times 10^7\\ \\text{Pa} = 40.74$ MPa.",
    "commonMistakes": "1. Unit mismatch: computing with MPa and mm simultaneously without consistent $10^6$ or $10^{-3}$ factors.\n2. Using diameter instead of radius for $y$ or $r$ in bending and torsion formulas.\n3. Forgetting that Euler buckling always occurs about the axis with MINIMUM area moment of inertia $I_{min}$.",
    "examTraps": "*GATE Trap*: A fixed-free (cantilever) column has $L_e = 2L$, so its critical buckling load is $P_{cr} = \\frac{\\pi^2 E I}{4 L^2}$. Aspirants often forget the factor of 4 reduction!",
    "crossLinks": "RA - Robotics Grippers (Structural Deflection), RA - Actuators (Drive Shaft Torsion)",
    "customNotes": "Tresca failure theory uses maximum shear stress $\\tau_{max} \\le \\sigma_y / 2$; Von Mises distortion energy uses octahedral shear stress.",
    "updatedAt": "2026-11-03T08:30:00.000Z",
    "codeSnippet": {
      "language": "python",
      "title": "Shaft Shear Stress Calculator",
      "code": "import math\n\ndef shaft_shear(T_nm, d_mm):\n    d_m = d_mm * 1e-3\n    tau = (16.0 * T_nm) / (math.pi * (d_m**3))\n    return tau * 1e-6 # in MPa\n\nprint('Shaft Tau Max (MPa):', round(shaft_shear(1000, 50), 2)) # 40.74 MPa"
    },
    "interactiveQuiz": {
      "question": "What is the ratio of the Euler buckling load of a column with both ends fixed to that of a column with both ends pinned (same material and cross-section)?",
      "options": [
        {
          "id": "A",
          "text": "4",
          "isCorrect": true,
          "feedback": "Correct! Le_fixed = 0.5L. P_cr is inversely proportional to Le^2, so (L / 0.5L)^2 = 2^2 = 4."
        },
        {
          "id": "B",
          "text": "2",
          "isCorrect": false,
          "feedback": "Remember that effective length is squared in the denominator."
        },
        {
          "id": "C",
          "text": "16",
          "isCorrect": false,
          "feedback": "Incorrect."
        },
        {
          "id": "D",
          "text": "0.25",
          "isCorrect": false,
          "feedback": "Fixed ends stiffen the column, increasing buckling load, not reducing it."
        }
      ],
      "hint": "Compare Le = 0.5L with Le = L in P_cr = pi^2 EI / Le^2."
    }
  },
  "da-prob-stats": {
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics: Distributions, Inference & Bayes",
    "paper": "DA",
    "definitionSummary": "Probability theory and statistical inference underpin machine learning algorithms, hypothesis testing, and Bayesian decision theory.\n\n### 1. Conditional Probability & Bayes' Rule\nConditional probability of event $A$ given $B$ with $P(B) > 0$ is $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$.\nBayes' Theorem provides the mathematical inversion to compute posterior belief:\n$$P(A_i \\mid B) = \\frac{P(B \\mid A_i) P(A_i)}{\\sum_{j=1}^k P(B \\mid A_j) P(A_j)}$$\nIndependence: Events $A$ and $B$ are independent iff $P(A \\cap B) = P(A)P(B)$.\n\n### 2. Random Variables & Key Distributions\n- **Binomial**: $P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$, with mean $\\mathbb{E}[X] = np$, variance $\\text{Var}(X) = np(1-p)$.\n- **Poisson**: $P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$, with mean and variance both equal to $\\lambda$.\n- **Uniform**: $f(x) = \\frac{1}{b-a}$ on $[a, b]$, mean $(a+b)/2$, variance $(b-a)^2/12$.\n- **Exponential**: $f(x) = \\lambda e^{-\\lambda x}$ ($x \\ge 0$), mean $1/\\lambda$, variance $1/\\lambda^2$ (possesses the memoryless property).\n- **Normal (Gaussian)**: $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$, standard normal $Z = \\frac{X-\\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)$.\n\n### 3. Expectation, Variance & Covariance\nLinearity of expectation always holds: $\\mathbb{E}[aX + bY] = a\\mathbb{E}[X] + b\\mathbb{E}[Y]$.\nVariance: $\\text{Var}(aX + b) = a^2 \\text{Var}(X)$. If $X, Y$ are independent, $\\text{Var}(X \\pm Y) = \\text{Var}(X) + \\text{Var}(Y)$.\nCovariance $\\text{Cov}(X, Y) = \\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y]$, Pearson correlation coefficient $\\rho = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y} \\in [-1, 1]$.\n\n### 4. Statistical Inference & Hypothesis Testing\nCentral Limit Theorem (CLT): For i.i.d. random variables with mean $\\mu$ and variance $\\sigma^2$, sample mean $\\bar{X}_n$ converges in distribution to $\\mathcal{N}\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$ as $n \\to \\infty$.\nType I error ($\\alpha$): Rejecting null $H_0$ when $H_0$ is true (false positive). Type II error ($\\beta$): Failing to reject $H_0$ when $H_0$ is false (false negative). Statistical Power = $1 - \\beta$.",
    "keyFormulas": "$$P(A \\mid B) = \\frac{P(B \\mid A) P(A)}{P(B)} \\quad \\text{(Bayes' Rule)}$$\n\n$$\\text{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2$$\n\n$$Z = \\frac{\\bar{X} - \\mu}{\\sigma / \\sqrt{n}} \\sim \\mathcal{N}(0, 1) \\quad \\text{(Central Limit Theorem)}$$\n\n$$P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!} \\quad [\\mathbb{E}[X] = \\text{Var}(X) = \\lambda]$$\n\n$$\\rho_{XY} = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y} = \\frac{\\mathbb{E}[(X-\\mu_X)(Y-\\mu_Y)]}{\\sigma_X \\sigma_Y}$$",
    "workedExample": "**GATE Problem**: A rare disease has prevalence $P(D) = 0.01$ (1%). A diagnostic test has Sensitivity (True Positive rate) $P(+ \\mid D) = 0.95$ and Specificity (True Negative rate) $P(- \\mid D^c) = 0.90$. If a random person tests positive, what is the posterior probability that they actually have the disease?\n\n1. Identify terms:\n   - Prior $P(D) = 0.01, P(D^c) = 0.99$\n   - Likelihood $P(+ \\mid D) = 0.95$\n   - False positive rate $P(+ \\mid D^c) = 1 - \\text{Specificity} = 1 - 0.90 = 0.10$\n2. Total probability of testing positive:\n   $P(+) = P(+ \\mid D)P(D) + P(+ \\mid D^c)P(D^c) = (0.95)(0.01) + (0.10)(0.99) = 0.0095 + 0.0990 = 0.1085$.\n3. Bayes' formula for posterior:\n   $P(D \\mid +) = \\frac{P(+ \\mid D)P(D)}{P(+)} = \\frac{0.0095}{0.1085} \\approx 0.08756 = 8.76\\%$.\nConclusion: Even with 95% sensitivity and 90% specificity, a positive test means only an 8.76% chance of having the disease due to low base prevalence.",
    "commonMistakes": "1. Base-Rate Fallacy: Assuming that a test with 95% accuracy implies a 95% chance of being sick upon testing positive.\n2. Variance Subtraction Trap: $\\text{Var}(X - Y) = \\text{Var}(X) + \\text{Var}(Y) - 2\\text{Cov}(X, Y)$. Variances never subtract; if $X, Y$ are independent, $\\text{Var}(X - Y) = \\text{Var}(X) + \\text{Var}(Y)$!\n3. Zero correlation ($\\rho = 0$) does NOT imply independence in general; it only implies independence for jointly Gaussian variables.",
    "examTraps": "*GATE Trap*: P-value is NOT the probability that the null hypothesis is true! It is the probability of observing test statistics at least as extreme as the observed sample, assuming the null hypothesis $H_0$ is true.",
    "crossLinks": "DA - Machine Learning (Naive Bayes & Loss Functions), DA - Optimization",
    "customNotes": "The exponential distribution is the ONLY continuous distribution possessing the memoryless property: $P(X > s + t \\mid X > s) = P(X > t)$.",
    "updatedAt": "2026-11-03T08:30:00.000Z",
    "codeSnippet": {
      "language": "python",
      "title": "Bayes Posterior Calculator",
      "code": "def bayes_posterior(prior, sensitivity, specificity):\n    p_pos = sensitivity * prior + (1 - specificity) * (1 - prior)\n    return (sensitivity * prior) / p_pos\n\nprint('Posterior P(D|+):', round(bayes_posterior(0.01, 0.95, 0.90) * 100, 2), '%') # 8.76%"
    },
    "interactiveQuiz": {
      "question": "If two random variables $X$ and $Y$ are independent with $\\text{Var}(X) = 4$ and $\\text{Var}(Y) = 9$, what is $\\text{Var}(2X - 3Y)$?",
      "options": [
        {
          "id": "A",
          "text": "97",
          "isCorrect": true,
          "feedback": "Correct! Var(aX + bY) = a^2 Var(X) + b^2 Var(Y) = 4(4) + 9(9) = 16 + 81 = 97."
        },
        {
          "id": "B",
          "text": "-65",
          "isCorrect": false,
          "feedback": "Variance cannot be negative!"
        },
        {
          "id": "C",
          "text": "25",
          "isCorrect": false,
          "feedback": "Remember the scalar coefficients are squared: 2^2=4, (-3)^2=9."
        },
        {
          "id": "D",
          "text": "43",
          "isCorrect": false,
          "feedback": "Incorrect."
        }
      ],
      "hint": "Use $\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y)$ for independent variables."
    }
  },
  "da-linear-algebra": {
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "paper": "DA",
    "definitionSummary": "Matrix decompositions and projection techniques form the mathematical core of high-dimensional data analysis and machine learning.\n\n### 1. Vector Spaces & Orthogonal Projections\nFor a subspace $S \\subset \\mathbb{R}^n$ spanned by orthogonal basis vectors, the orthogonal projection of vector $y$ onto vector $u$ is $\\text{proj}_u(y) = \\frac{y \\cdot u}{\\|u\\|^2} u$. For a subspace spanned by the columns of matrix $A$, the projection matrix is $P = A(A^T A)^{-1} A^T$, satisfying idempotency $P^2 = P$ and symmetry $P^T = P$.\n\n### 2. Singular Value Decomposition (SVD)\nAny arbitrary real matrix $A \\in \\mathbb{R}^{m \\times n}$ can be factored as:\n$$A = U \\Sigma V^T$$\n- $U \\in \\mathbb{R}^{m \\times m}$: Orthonormal eigenvectors of $A A^T$ (left singular vectors).\n- $V \\in \\mathbb{R}^{n \\times n}$: Orthonormal eigenvectors of $A^T A$ (right singular vectors).\n- $\\Sigma \\in \\mathbb{R}^{m \\times n}$: Diagonal matrix of non-negative singular values $\\sigma_1 \\ge \\sigma_2 \\ge \\dots \\ge 0$, where $\\sigma_i = \\sqrt{\\lambda_i(A^T A)}$.\nEckart-Young Theorem: The optimal low-rank matrix approximation of rank $k$ is $A_k = \\sum_{i=1}^k \\sigma_i u_i v_i^T$.\n\n### 3. Principal Component Analysis (PCA)\nPCA finds orthogonal directions that maximize data variance. Given zero-centered data matrix $X \\in \\mathbb{R}^{n \\times d}$, the sample covariance matrix is $C = \\frac{1}{n} X^T X$.\nPrincipal components $v_1, \\dots, v_d$ are the eigenvectors of $C$, with corresponding eigenvalues $\\lambda_1 \\ge \\lambda_2 \\ge \\dots \\ge \\lambda_d$ representing the variance along each component.\nThe proportion of total variance explained by component $k$ is $\\frac{\\lambda_k}{\\sum_{i=1}^d \\lambda_i}$.",
    "keyFormulas": "$$A = U \\Sigma V^T = \\sum_{i=1}^r \\sigma_i u_i v_i^T \\quad \\text{(SVD)}$$\n\n$$\\sigma_i = \\sqrt{\\lambda_i(A^T A)} \\ge 0$$\n\n$$A^+ = V \\Sigma^+ U^T \\quad \\text{(Moore-Penrose Pseudo-Inverse)}$$\n\n$$C = \\frac{1}{n} X^T X, \\quad C v_i = \\lambda_i v_i \\quad \\text{(PCA)}$$\n\n$$\\text{Explained Variance Ratio} = \\frac{\\lambda_k}{\\sum_{i=1}^d \\lambda_i}$$\n\n$$P = A(A^T A)^{-1} A^T \\quad \\text{(Subspace Projection Matrix)}$$",
    "workedExample": "**GATE Problem**: In a PCA experiment on a 3D dataset, the sample covariance matrix has eigenvalues $\\lambda_1 = 12, \\lambda_2 = 5, \\lambda_3 = 3$. What percentage of total variance is captured by the first two principal components?\n\n1. Total variance = Trace of covariance matrix = $\\sum \\lambda_i = 12 + 5 + 3 = 20$.\n2. Variance captured by PC1 and PC2: $\\lambda_1 + \\lambda_2 = 12 + 5 = 17$.\n3. Cumulative explained variance percentage: $\\frac{17}{20} \\times 100\\% = 85.0\\%$.",
    "commonMistakes": "1. Forgetting to mean-center data before performing PCA (without centering, PC1 simply points towards the dataset centroid).\n2. Order inversion in Moore-Penrose pseudo-inverse: $A^+ = V \\Sigma^+ U^T$, NOT $U \\Sigma^+ V^T$.\n3. Assuming singular values can be negative; by mathematical definition, singular values $\\sigma_i \\ge 0$ are non-negative real numbers.",
    "examTraps": "*GATE Trap*: In SVD, the rank of matrix $A$ equals the exact number of NON-ZERO singular values. If a $100 \\times 50$ matrix has 4 non-zero singular values, its rank is strictly 4.",
    "crossLinks": "DA - Machine Learning (Dimensionality Reduction), RA - Linear Algebra",
    "customNotes": "Frobenius norm of matrix $A$ satisfies $\\|A\\|_F^2 = \\text{Trace}(A^T A) = \\sum_{i=1}^r \\sigma_i^2$.",
    "updatedAt": "2026-11-03T08:30:00.000Z",
    "codeSnippet": {
      "language": "python",
      "title": "SVD & Low-Rank Approximation",
      "code": "import numpy as np\nA = np.array([[3, 2, 2], [2, 3, -2]])\nU, S, Vt = np.linalg.svd(A)\nprint('Singular values:', S)\nprint('Rank:', np.sum(S > 1e-10))"
    },
    "interactiveQuiz": {
      "question": "For any real matrix $A$, what are the singular values of $A$?",
      "options": [
        {
          "id": "A",
          "text": "Positive square roots of the eigenvalues of $A^T A$",
          "isCorrect": true,
          "feedback": "Correct! $\\sigma_i = \\sqrt{\\lambda_i(A^T A)}$."
        },
        {
          "id": "B",
          "text": "Eigenvalues of $A$",
          "isCorrect": false,
          "feedback": "Only true for positive semi-definite symmetric matrices."
        },
        {
          "id": "C",
          "text": "Absolute values of the trace of $A$",
          "isCorrect": false,
          "feedback": "Incorrect."
        },
        {
          "id": "D",
          "text": "Diagonal elements of $A$",
          "isCorrect": false,
          "feedback": "Incorrect."
        }
      ],
      "hint": "Recall that $A^T A = V \\Sigma^2 V^T$."
    }
  },
  "da-calc-opt": {
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "paper": "DA",
    "definitionSummary": "Convex optimization forms the computational engine of loss function minimization and model parameter training.\n\n### 1. Multivariable Calculus & Hessian Matrix\nFor a scalar field $f: \\mathbb{R}^n \\to \\mathbb{R}$:\n- Gradient vector $\\nabla f(x) = \\left[\\frac{\\partial f}{\\partial x_1}, \\dots, \\frac{\\partial f}{\\partial x_n}\\right]^T \\in \\mathbb{R}^n$ points in the direction of steepest ascent.\n- Hessian matrix $H = \\nabla^2 f(x) \\in \\mathbb{R}^{n \\times n}$ with $H_{ij} = \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}$ captures local curvature.\nStationary point classification: At $\\nabla f(x^*) = 0$:\n1. Local Minimum: $H(x^*)$ is Positive Definite ($H \\succ 0$, all eigenvalues $> 0$).\n2. Local Maximum: $H(x^*)$ is Negative Definite ($H \\prec 0$, all eigenvalues $< 0$).\n3. Saddle Point: $H(x^*)$ is Indefinite (has both positive and negative eigenvalues).\n\n### 2. Convex Sets & Convex Functions\nA set $C$ is convex if for all $x, y \\in C$ and $\\alpha \\in [0, 1]$, $\\alpha x + (1-\\alpha)y \\in C$.\nA function $f$ is convex iff its epigraph is a convex set. Equivalent conditions for twice differentiable functions:\n- First-Order Condition: $f(y) \\ge f(x) + \\nabla f(x)^T (y - x)$ for all $x, y$ (tangent plane is a global underestimator).\n- Second-Order Condition: $\\nabla^2 f(x) \\succeq 0$ (Positive Semi-Definite) for all $x$.\nFundamental theorem: For convex functions, EVERY local minimum is guaranteed to be a global minimum.\n\n### 3. Gradient Descent & KKT Conditions\nGradient descent update: $x_{k+1} = x_k - \\eta \\nabla f(x_k)$, where $\\eta > 0$ is the learning rate.\nFor constrained optimization $\\min f(x)$ s.t. $g_i(x) \\le 0, h_j(x) = 0$, the Karush-Kuhn-Tucker (KKT) conditions are necessary for optimality under constraint qualifications (Slater's condition) and sufficient for convex problems:\n1. Stationarity: $\\nabla f(x) + \\sum \\lambda_i \\nabla g_i(x) + \\sum \\nu_j \\nabla h_j(x) = 0$\n2. Primal Feasibility: $g_i(x) \\le 0, h_j(x) = 0$\n3. Dual Feasibility: $\\lambda_i \\ge 0$\n4. Complementary Slackness: $\\lambda_i g_i(x) = 0$",
    "keyFormulas": "$$x_{k+1} = x_k - \\eta \\nabla f(x_k) \\quad \\text{(Gradient Descent)}$$\n\n$$f(y) \\ge f(x) + \\nabla f(x)^T (y - x) \\quad \\text{(First-Order Convexity Condition)}$$\n\n$$\\nabla^2 f(x) \\succeq 0 \\iff f \\text{ is convex} \\quad \\text{(Second-Order Condition)}$$\n\n$$\\mathcal{L}(x, \\lambda, \\nu) = f(x) + \\sum_{i=1}^m \\lambda_i g_i(x) + \\sum_{j=1}^p \\nu_j h_j(x)$$\n\n$$\\lambda_i g_i(x) = 0, \\; \\lambda_i \\ge 0 \\quad \\text{(Complementary Slackness)}$$",
    "workedExample": "**GATE Problem**: Consider the objective function $f(x_1, x_2) = 2x_1^2 + x_2^2 - 4x_1 - 2x_2 + 5$. Find the stationary point and determine whether it is a local minimum, maximum, or saddle point.\n\n1. First partial derivatives:\n   $\\frac{\\partial f}{\\partial x_1} = 4x_1 - 4 = 0 \\implies x_1 = 1$\n   $\\frac{\\partial f}{\\partial x_2} = 2x_2 - 2 = 0 \\implies x_2 = 1$\n   Stationary point: $x^* = (1, 1)$.\n2. Hessian matrix:\n   $H = \\begin{bmatrix} \\frac{\\partial^2 f}{\\partial x_1^2} & \\frac{\\partial^2 f}{\\partial x_1 \\partial x_2} \\\\ \\frac{\\partial^2 f}{\\partial x_2 \\partial x_1} & \\frac{\\partial^2 f}{\\partial x_2^2} \\end{bmatrix} = \\begin{bmatrix} 4 & 0 \\\\ 0 & 2 \\end{bmatrix}$.\n3. Eigenvalues of $H$ are $\\lambda_1 = 4 > 0, \\lambda_2 = 2 > 0$.\n4. Since $H$ is Positive Definite ($H \\succ 0$) everywhere, $(1, 1)$ is a strict global minimum.\n   Minimum value: $f(1, 1) = 2(1) + 1 - 4(1) - 2(1) + 5 = 2$.",
    "commonMistakes": "1. Confusing local minima with saddle points when the Hessian has zero eigenvalues (semidefinite case requires higher order tests).\n2. Forgetting dual feasibility: Lagrange multipliers for inequality constraints must be non-negative: $\\lambda_i \\ge 0$.\n3. Choosing learning rate $\\eta$ too large in gradient descent, which causes numerical oscillation and divergence.",
    "examTraps": "*GATE Trap*: If complementary slackness $\\lambda_i g_i(x) = 0$ holds, either the constraint is active ($g_i(x) = 0, \\lambda_i \\ge 0$), or the constraint is inactive ($g_i(x) < 0$), which FORCES $\\lambda_i = 0$ strictly!",
    "crossLinks": "DA - Machine Learning (Gradient Descent & SVM KKT), RA - Control Systems",
    "customNotes": "Slater's condition states that if the problem is convex and there exists a strictly feasible point $g_i(x) < 0$, strong duality holds (zero duality gap).",
    "updatedAt": "2026-11-03T08:30:00.000Z",
    "codeSnippet": {
      "language": "python",
      "title": "Gradient Descent 1D Simulation",
      "code": "def gd(x0, lr, steps=20):\n    x = x0\n    for _ in range(steps):\n        grad = 4 * x - 4 # f(x) = 2x^2 - 4x\n        x -= lr * grad\n    return x\n\nprint('Optimal x:', round(gd(5.0, 0.1), 4)) # Converges to 1.0"
    },
    "interactiveQuiz": {
      "question": "If the Hessian matrix of a twice-differentiable function at a stationary point has eigenvalues $\\lambda_1 = 3$ and $\\lambda_2 = -2$, what is the nature of this stationary point?",
      "options": [
        {
          "id": "A",
          "text": "Saddle Point",
          "isCorrect": true,
          "feedback": "Correct! An indefinite Hessian with both positive and negative eigenvalues denotes a saddle point."
        },
        {
          "id": "B",
          "text": "Local Minimum",
          "isCorrect": false,
          "feedback": "Local minimum requires all eigenvalues to be strictly positive."
        },
        {
          "id": "C",
          "text": "Local Maximum",
          "isCorrect": false,
          "feedback": "Local maximum requires all eigenvalues to be strictly negative."
        },
        {
          "id": "D",
          "text": "Global Minimum",
          "isCorrect": false,
          "feedback": "Incorrect."
        }
      ],
      "hint": "Check the signs of the eigenvalues: one positive and one negative."
    }
  },
  "da-prog-dsa": {
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "paper": "DA",
    "definitionSummary": "Data structures and algorithmic complexity govern scalable feature pipelines, search graph traversal, and computational efficiency in AI.\n\n### 1. Asymptotic Complexity & Master Theorem\nDivide-and-conquer recurrences of form $T(n) = a T(n/b) + \\Theta(n^d)$:\n- Case 1: If $\\log_b a > d \\implies T(n) = \\Theta(n^{\\log_b a})$. (e.g. Strassen's matrix multiply: $7 T(n/2) + O(n^2) \\implies \\Theta(n^{\\log_2 7}) \\approx \\Theta(n^{2.81})$).\n- Case 2: If $\\log_b a = d \\implies T(n) = \\Theta(n^d \\log n)$. (e.g. Merge Sort: $2 T(n/2) + O(n) \\implies \\Theta(n \\log n)$).\n- Case 3: If $\\log_b a < d \\implies T(n) = \\Theta(n^d)$. (e.g. Binary Search: $T(n/2) + O(1) \\implies \\Theta(\\log n)$).\n\n### 2. Python Core Internals\n- **Immutability**: `int`, `float`, `str`, `tuple`, `frozenset` are immutable. Any modification creates a new object in memory.\n- **Mutability**: `list`, `dict`, `set` are mutable. Passing them to functions passes by object reference; in-place operations (`list.append()`) mutate caller state.\n- **Time Complexities**: List append $O(1)$ amortized; list insert at 0 is $O(n)$; dict lookup/insert is $O(1)$ average, $O(n)$ worst case under hash collisions.\n\n### 3. Non-Linear Data Structures: Trees & Graphs\n- **Binary Search Trees (BST)**: Inorder traversal produces strictly sorted keys. Search/insert is $O(h)$, where height $h = \\log n$ for balanced trees (AVL, Red-Black) and $O(n)$ for degenerate skewed trees.\n- **Heaps & Priority Queues**: Complete binary tree satisfying heap property ($A[parent] \\le A[child]$ for min-heap). Array representation: child nodes of index $i$ are at $2i+1$ and $2i+2$. Heapify takes $O(n)$ time; extract-min takes $O(\\log n)$.\n- **Graph Traversals**: BFS uses a FIFO Queue, finds shortest path on unweighted graphs ($O(V + E)$). DFS uses a LIFO Stack or recursion, used for cycle detection and topological sorting of DAGs.",
    "keyFormulas": "$$T(n) = a T(n/b) + \\Theta(n^d) \\implies \\begin{cases} \\Theta(n^{\\log_b a}) & \\text{if } \\log_b a > d \\\\ \\Theta(n^d \\log n) & \\text{if } \\log_b a = d \\\\ \\Theta(n^d) & \\text{if } \\log_b a < d \\end{cases}$$\n\n$$\\text{Max nodes in binary tree of height } h = 2^{h+1} - 1$$\n\n$$\\text{Min-heap array indices: } \\text{Parent}(i) = \\lfloor (i-1)/2 \\rfloor, \\; \\text{Left}(i) = 2i+1, \\; \\text{Right}(i) = 2i+2$$\n\n$$\\text{Hash table load factor } \\alpha = \\frac{n}{m} \\quad (n \\text{ elements}, m \\text{ slots})$$",
    "workedExample": "**GATE Problem**: Solve the recurrence relation $T(n) = 4 T(n/2) + \\Theta(n)$ with $T(1) = \\Theta(1)$.\n\n1. Identify parameters: $a = 4, b = 2, f(n) = \\Theta(n) \\implies d = 1$.\n2. Compute $\\log_b a = \\log_2 4 = 2$.\n3. Compare with $d$: $\\log_b a = 2 > d = 1$.\n4. Applies Case 1 of Master Theorem:\n   $T(n) = \\Theta(n^{\\log_b a}) = \\Theta(n^2)$.",
    "commonMistakes": "1. Default argument mutability trap in Python: `def fn(x, arr=[])` retains list elements across subsequent function calls because the default list is instantiated once at function definition time.\n2. Confusing Binary Tree height conventions: check if height of single root is defined as 0 or 1.\n3. Assuming QuickSort is always $O(n \\log n)$; worst-case is $O(n^2)$ on already sorted arrays when using first or last element as pivot.",
    "examTraps": "*GATE Trap*: Building a binary heap from an unsorted array of $n$ elements using `Bottom-Up Heapify` takes $O(n)$ linear time, NOT $O(n \\log n)$! Inserting elements one by one takes $O(n \\log n)$.",
    "crossLinks": "DA - AI Search (BFS, DFS, Priority Queues in A*), DA - DBMS (B+ Trees)",
    "customNotes": "In Python, `dict` preserves insertion order starting from Python 3.7+.",
    "updatedAt": "2026-11-03T08:30:00.000Z",
    "codeSnippet": {
      "language": "python",
      "title": "Inorder Traversal for BST Verification",
      "code": "def is_bst(root, min_v=float('-inf'), max_v=float('inf')):\n    if not root: return True\n    if not (min_v < root['val'] < max_v): return False\n    return is_bst(root['left'], min_v, root['val']) and is_bst(root['right'], root['val'], max_v)\n\nprint('BST Valid:', is_bst({'val': 10, 'left': {'val': 5, 'left': None, 'right': None}, 'right': {'val': 15, 'left': None, 'right': None}}))"
    },
    "interactiveQuiz": {
      "question": "What is the worst-case time complexity of inserting an element into a Binary Search Tree (BST) with $n$ elements?",
      "options": [
        {
          "id": "A",
          "text": "$O(n)$",
          "isCorrect": true,
          "feedback": "Correct! In the worst case (skewed tree), the tree degenerates into a linked list of height n, giving O(n) search and insert."
        },
        {
          "id": "B",
          "text": "$O(\\log n)$",
          "isCorrect": false,
          "feedback": "O(log n) is the average case for balanced trees, but worst case is O(n)."
        },
        {
          "id": "C",
          "text": "$O(1)$",
          "isCorrect": false,
          "feedback": "Incorrect."
        },
        {
          "id": "D",
          "text": "$O(n \\log n)$",
          "isCorrect": false,
          "feedback": "Incorrect."
        }
      ],
      "hint": "Consider inserting sorted keys 1, 2, 3, 4 into an initially empty BST."
    }
  },
  "da-dbms": {
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "paper": "DA",
    "definitionSummary": "Relational algebra, normal forms, transaction ACID properties, and indexing ensure data integrity and query performance in AI databases.\n\n### 1. Functional Dependencies & Normalization\nGiven relation schema $R$ and functional dependencies (FD) $F$:\n- **Attribute Closure ($X^+$)**: Set of all attributes functionally determined by $X$. If $X^+ = R$, $X$ is a superkey. A minimal superkey is a **candidate key**.\n- **1NF**: All attribute domains contain only atomic, scalar values (no nested relations or multivalued sets).\n- **2NF**: Relation is in 1NF and NO non-prime attribute is partially dependent on any candidate key.\n- **3NF**: Relation is in 2NF and for every non-trivial FD $X \\to Y$, either $X$ is a superkey OR $Y$ is a prime attribute (member of some candidate key). Eliminates transitive dependencies.\n- **BCNF (Boyce-Codd NF)**: For every non-trivial FD $X \\to Y$, $X$ MUST be a superkey. BCNF is strictly stronger than 3NF.\n\n### 2. Transactions, Concurrency & Serializability\nACID Properties:\n- **Atomicity**: All operations succeed or none do (rollback via undo log).\n- **Consistency**: Preserves database invariants and schema constraints.\n- **Isolation**: Concurrent execution results in a state equivalent to serial execution.\n- **Durability**: Committed updates persist across power failures via Write-Ahead Logging (WAL).\nConflict Serializability: A schedule is conflict serializable iff its precedence (serialization) graph contains NO directed cycles.\n\n### 3. B+ Tree Indexing\nB+ trees are self-balancing search trees optimized for disk blocks:\n- Internal nodes contain only routing keys and child pointers (maximizing fan-out and minimizing tree height).\n- ALL actual data pointers and record references reside exclusively in leaf nodes.\n- Leaf nodes are doubly linked sequentially, enabling ultra-fast range queries (`BETWEEN a AND b`).",
    "keyFormulas": "$$\\text{BCNF Condition: } X \\to Y \\implies X \\text{ is a superkey}$$\n\n$$\\text{3NF Condition: } X \\to Y \\implies X \\text{ is a superkey } \\lor Y \\text{ is a prime attribute}$$\n\n$$\\text{Fan-out } B = \\left\\lfloor \\frac{\\text{Block Size} - P_{ptr}}{\\text{Key Size} + P_{ptr}} \\right\\rfloor + 1$$\n\n$$\\text{Precedence Graph acyclic } \\iff \\text{Conflict Serializable Schedule}$$",
    "workedExample": "**GATE Problem**: Relation $R(A, B, C, D)$ has functional dependencies $F = \\{A \\to B, B \\to C, C \\to D\\}$. Find all candidate keys and the highest normal form of $R$.\n\n1. Find candidate keys:\n   Attribute $A$ does not appear on the right side of any dependency, so $A$ MUST be in every candidate key.\n   Compute closure $A^+$: $A^+ = \\{A\\} \\to \\{A, B\\} \\to \\{A, B, C\\} \\to \\{A, B, C, D\\}$.\n   Since $A^+ = R$, $\\{A\\}$ is the unique candidate key.\n2. Prime attribute: $\\{A\\}$. Non-prime attributes: $\\{B, C, D\\}$.\n3. Check normal forms:\n   - In $B \\to C$: $B$ is not a superkey, and $C$ is not a prime attribute. Thus $R$ violates 3NF (transitive dependency $A \\to B \\to C$) and BCNF.\n   - Check 2NF: The candidate key is single attribute $A$, so no partial dependency can exist. Thus $R$ is in 2NF.\n   Highest Normal Form: 2NF.",
    "commonMistakes": "1. Believing that lossless-join and dependency preservation can always both be achieved in BCNF (BCNF decomposition guarantees lossless join, but cannot always preserve all functional dependencies; 3NF can always preserve both!).\n2. Using `WHERE` clause with aggregate functions in SQL (must use `HAVING` clause after `GROUP BY`).\n3. Confusing View Serializability with Conflict Serializability (Conflict serializable implies View serializable, but not vice versa).",
    "examTraps": "*GATE Trap*: A relation with only two attributes $R(A, B)$ is ALWAYS in BCNF regardless of the functional dependencies!",
    "crossLinks": "DA - Programming (Data Structures B-Trees), DA - Machine Learning (Data Wrangling)",
    "customNotes": "Natural join $R \\bowtie S$ is equivalent to cross product followed by equality selection on common attributes and projection to eliminate duplicates.",
    "updatedAt": "2026-11-03T08:30:00.000Z",
    "codeSnippet": {
      "language": "python",
      "title": "Attribute Closure Calculator",
      "code": "def compute_closure(attrs, fds):\n    closure = set(attrs)\n    changed = True\n    while changed:\n        changed = False\n        for lhs, rhs in fds:\n            if set(lhs).issubset(closure) and not set(rhs).issubset(closure):\n                closure.update(rhs)\n                changed = True\n    return sorted(list(closure))\n\nfds = [(['A'], ['B']), (['B'], ['C']), (['C'], ['D'])]\nprint('Closure A+:', compute_closure(['A'], fds)) # ['A', 'B', 'C', 'D']"
    },
    "interactiveQuiz": {
      "question": "Which normal form guarantees both a lossless-join decomposition AND dependency preservation for any arbitrary relational schema?",
      "options": [
        {
          "id": "A",
          "text": "3NF",
          "isCorrect": true,
          "feedback": "Correct! 3NF decomposition can always achieve both lossless join and dependency preservation, whereas BCNF may lose dependencies."
        },
        {
          "id": "B",
          "text": "BCNF",
          "isCorrect": false,
          "feedback": "BCNF cannot always guarantee dependency preservation."
        },
        {
          "id": "C",
          "text": "4NF",
          "isCorrect": false,
          "feedback": "Incorrect."
        },
        {
          "id": "D",
          "text": "2NF",
          "isCorrect": false,
          "feedback": "Incorrect."
        }
      ],
      "hint": "Recall the tradeoff between BCNF and 3NF."
    }
  },
  "da-machine-learning": {
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "paper": "DA",
    "definitionSummary": "Machine learning formulates statistical estimation algorithms across supervised classification, regression, and unsupervised clustering.\n\n### 1. Linear & Regularized Regression\n- **Ordinary Least Squares (OLS)**: Minimizes Mean Squared Error $J(\\theta) = \\frac{1}{2n} \\|X\\theta - y\\|^2$. Closed-form normal equation: $\\hat{\\theta} = (X^T X)^{-1} X^T y$.\n- **Ridge Regression (L2)**: Penalizes weight magnitude $\\lambda \\sum \\theta_j^2$. Analytical solution: $\\hat{\\theta}_{ridge} = (X^T X + \\lambda I)^{-1} X^T y$. Shrinks weights smoothly towards zero, preventing multicollinearity explosion.\n- **Lasso Regression (L1)**: Penalizes absolute weight sum $\\lambda \\sum |\\theta_j|$. Induces exact sparsity by setting irrelevant feature weights to exactly 0 (automatic feature selection).\n\n### 2. Classification & Evaluation Metrics\n- **Logistic Regression**: Models posterior class probability via sigmoid $\\sigma(z) = \\frac{1}{1 + e^{-z}}$. Loss is Binary Cross-Entropy (Log Loss):\n$$J(\\theta) = -\\frac{1}{n} \\sum [y^{(i)} \\log(\\hat{y}^{(i)}) + (1 - y^{(i)}) \\log(1 - \\hat{y}^{(i)})]$$\n- **Confusion Matrix**: Precision $P = \\frac{TP}{TP + FP}$, Recall $R = \\frac{TP}{TP + FN}$, $F_1 = 2 \\frac{P \\cdot R}{P + R}$. ROC curve plots TPR vs FPR at varying thresholds; AUC measures ranking capability.\n\n### 3. Support Vector Machines & Decision Trees\n- **SVM**: Maximizes margin $\\frac{2}{\\|w\\|}$, equivalent to minimizing $\\frac{1}{2}\\|w\\|^2$ subject to $y_i(w^T x_i + b) \\ge 1$. Kernel trick maps non-linear data into high-dimensional Hilbert spaces using Mercer kernels: $K(x, x') = \\phi(x)^T \\phi(x')$.\n- **Decision Trees**: Split features by maximizing Information Gain: $\\text{Gain}(S, A) = H(S) - \\sum \\frac{|S_v|}{|S|} H(S_v)$, where Shannon Entropy is $H(S) = -\\sum p_i \\log_2 p_i$.",
    "keyFormulas": "$$\\hat{\\theta}_{OLS} = (X^T X)^{-1} X^T y, \\quad \\hat{\\theta}_{Ridge} = (X^T X + \\lambda I)^{-1} X^T y$$\n\n$$\\sigma(z) = \\frac{1}{1 + e^{-z}} = \\frac{e^z}{1 + e^z}$$\n\n$$F_1 = 2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}} = \\frac{2 \\text{TP}}{2 \\text{TP} + \\text{FP} + \\text{FN}}$$\n\n$$H(S) = -\\sum_{i=1}^c p_i \\log_2 p_i \\quad \\text{(Shannon Entropy)}$$\n\n$$\\text{Gini}(S) = 1 - \\sum_{i=1}^c p_i^2 \\quad \\text{(Gini Impurity)}$$",
    "workedExample": "**GATE Problem**: A classifier is evaluated on 100 test samples producing: $\\text{TP} = 40, \\text{FP} = 10, \\text{FN} = 10, \\text{TN} = 40$. Calculate Precision, Recall, and $F_1$-score.\n\n1. Precision $P = \\frac{\\text{TP}}{\\text{TP} + \\text{FP}} = \\frac{40}{40 + 10} = \\frac{40}{50} = 0.80$.\n2. Recall $R = \\frac{\\text{TP}}{\\text{TP} + \\text{FN}} = \\frac{40}{40 + 10} = \\frac{40}{50} = 0.80$.\n3. $F_1$-Score: $F_1 = 2 \\cdot \\frac{P \\cdot R}{P + R} = 2 \\cdot \\frac{0.80 \\times 0.80}{0.80 + 0.80} = 2 \\cdot \\frac{0.64}{1.60} = 0.80$.",
    "commonMistakes": "1. Believing Ridge regression induces sparse feature weights (only L1 Lasso sets weights exactly to zero; L2 Ridge shrinks weights smoothly).\n2. Using Accuracy to evaluate models on severely imbalanced datasets (e.g. 99% accuracy by predicting only majority class).\n3. Forgetting that K-Means is sensitive to initial centroid placement and converges to a local minimum, not necessarily the global optimum.",
    "examTraps": "*GATE Trap*: Support vectors in SVM are ONLY those training data points that lie directly on the margin boundaries ($y_i(w^T x_i + b) = 1$) or violate the margin (in soft-margin SVM). Removing all non-support vector data points leaves the learned decision boundary completely unchanged!",
    "crossLinks": "DA - Probability & Statistics, DA - Calculus & Optimization",
    "customNotes": "Random Forests reduce variance via Bagging (Bootstrap Aggregation) + random feature subspace sampling.",
    "updatedAt": "2026-11-03T08:30:00.000Z",
    "codeSnippet": {
      "language": "python",
      "title": "Entropy & Gini Calculator",
      "code": "import math\n\ndef entropy(p):\n    if p == 0 or p == 1: return 0\n    return -(p * math.log2(p) + (1-p) * math.log2(1-p))\n\nprint('Entropy at p=0.5 (max uncertainty):', entropy(0.5)) # 1.0 bit"
    },
    "interactiveQuiz": {
      "question": "Which regularization technique can be used for automatic feature selection by setting irrelevant feature weights to exactly zero?",
      "options": [
        {
          "id": "A",
          "text": "L1 Regularization (Lasso)",
          "isCorrect": true,
          "feedback": "Correct! L1 diamond constraint contours intersect coordinate axes, driving weights to exact zeros."
        },
        {
          "id": "B",
          "text": "L2 Regularization (Ridge)",
          "isCorrect": false,
          "feedback": "L2 decays weights towards zero, but rarely sets them to exactly zero."
        },
        {
          "id": "C",
          "text": "Batch Normalization",
          "isCorrect": false,
          "feedback": "Incorrect."
        },
        {
          "id": "D",
          "text": "Dropout with rate 0",
          "isCorrect": false,
          "feedback": "Incorrect."
        }
      ],
      "hint": "Recall the geometric difference between L1 diamond contours and L2 circular contours."
    }
  },
  "da-ai-search-logic": {
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "paper": "DA",
    "definitionSummary": "Heuristic search and formal logic formulate problem solving as graph state exploration and symbolic reasoning.\n\n### 1. Informed Heuristic Search & A* Algorithm\nA* evaluates nodes using $f(n) = g(n) + h(n)$:\n- $g(n)$: Exact path cost from start node to node $n$.\n- $h(n)$: Estimated heuristic cost from $n$ to the goal.\n- **Admissibility**: $h(n)$ never overestimates true cost: $h(n) \\le h^*(n)$ for all $n$, and $h(\\text{Goal}) = 0$. Guarantees optimality for **Tree Search**.\n- **Consistency (Monotonicity)**: Satisfies triangle inequality: $h(n) \\le c(n, a, n') + h(n')$. Consistency guarantees $f(n)$ values are non-decreasing along any path, ensuring that the first time a node is expanded in **Graph Search**, its path is guaranteed optimal without reopening closed nodes.\n\n### 2. Adversarial Search & Alpha-Beta Pruning\nMinimax computes optimal decisions in two-player zero-sum games with perfect information.\nAlpha-Beta pruning eliminates subtrees that cannot influence the final root decision, reducing effective branching factor from $b$ to $\\sqrt{b}$ in optimal move ordering:\n- $\\alpha$: Lower bound (highest score the Maximizing player is assured of).\n- $\\beta$: Upper bound (lowest score the Minimizing player will permit).\n- Pruning condition: Prune branch whenever $\\alpha \\ge \\beta$.\n\n### 3. Propositional Logic & Resolution Refutation\n- Implication equivalence: $P \\implies Q \\equiv \\neg P \\lor Q \\equiv \\neg Q \\implies \\neg P$.\n- Resolution Rule: From clauses $(A \\lor B)$ and $(\\neg B \\lor C)$, derives the resolvent $(A \\lor C)$.\n- Resolution Refutation: To prove $KB \\models \\alpha$, convert $(KB \\land \\neg \\alpha)$ to Conjunctive Normal Form (CNF) and apply resolution until deriving the empty clause $\\square$ (Contradiction).",
    "keyFormulas": "$$f(n) = g(n) + h(n) \\quad \\text{(A* Evaluation Function)}$$\n\n$$h(n) \\le h^*(n) \\quad \\text{(Admissibility)}$$\n\n$$h(n) \\le c(n, a, n') + h(n') \\quad \\text{(Consistency / Triangle Inequality)}$$\n\n$$\\alpha \\ge \\beta \\implies \\text{Prune Remaining Subtree} \\quad \\text{(Alpha-Beta)}$$\n\n$$\\frac{A \\lor B, \\quad \\neg B \\lor C}{A \\lor C} \\quad \\text{(Resolution Inference Rule)}$$",
    "workedExample": "**GATE Problem**: Consider A* search. Prove that if $h(n)$ is consistent ($h(n) \\le c(n, a, n') + h(n')$), then the sequence of $f$-values along any path is non-decreasing ($f(n') \\ge f(n)$).\n\n1. Given consistency: $h(n) \\le c(n, a, n') + h(n')$.\n2. Add $g(n)$ to both sides:\n   $g(n) + h(n) \\le g(n) + c(n, a, n') + h(n')$.\n3. Left side is $f(n) = g(n) + h(n)$.\n4. Since $g(n') = g(n) + c(n, a, n')$, the right side equals:\n   $g(n') + h(n') = f(n')$.\n5. Therefore: $f(n) \\le f(n')$.\nThis proves that $f$-values never decrease along a search path, guaranteeing monotonic frontier expansion.",
    "commonMistakes": "1. Believing that admissibility is sufficient for Graph Search without node reopening (Consistency is strictly required for Graph Search without reopening closed nodes).\n2. Updating Alpha at MIN nodes or Beta at MAX nodes (Alpha is updated ONLY at MAX nodes; Beta is updated ONLY at MIN nodes).\n3. Conflating logical validity (tautology) with satisfiability (satisfiable means true in AT LEAST ONE model; valid means true in ALL models).",
    "examTraps": "*GATE Trap*: Alpha-Beta pruning does NOT change the minimax value of the root node in any way! It returns the exact same optimal value and best move as full Minimax, but evaluates vastly fewer game states.",
    "crossLinks": "DA - Programming (Graph Traversal BFS/DFS), DA - Discrete Mathematics (Logic)",
    "customNotes": "Iterative Deepening A* (IDA*) combines memory efficiency of depth-first search with optimality of A*, using f-value cutoffs instead of depth bounds.",
    "updatedAt": "2026-11-03T08:30:00.000Z",
    "codeSnippet": {
      "language": "python",
      "title": "A* Path Evaluation Function",
      "code": "def a_star_f(g, h):\n    return g + h\n\n# Node n with g=4, h=6 -> f=10\nprint('f(n):', a_star_f(4, 6))"
    },
    "interactiveQuiz": {
      "question": "In the Minimax algorithm with Alpha-Beta pruning, when is a branch pruned?",
      "options": [
        {
          "id": "A",
          "text": "Whenever $\\alpha \\ge \\beta$",
          "isCorrect": true,
          "feedback": "Correct! When alpha >= beta, the current branch cannot affect the optimal choice."
        },
        {
          "id": "B",
          "text": "Whenever $\\alpha < \\beta$",
          "isCorrect": false,
          "feedback": "Alpha < Beta represents the active unpruned search window."
        },
        {
          "id": "C",
          "text": "When $f(n) = 0$",
          "isCorrect": false,
          "feedback": "Incorrect."
        },
        {
          "id": "D",
          "text": "Only at terminal leaf nodes",
          "isCorrect": false,
          "feedback": "Pruning occurs at internal branch nodes."
        }
      ],
      "hint": "Alpha is max's guarantee; Beta is min's ceiling. When the ceiling drops below the guarantee, prune!"
    }
  }
};
