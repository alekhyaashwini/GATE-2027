# -*- coding: utf-8 -*-
"""Exhaustive textbook-grade notes for all 8 Robotics & Automation (RA) syllabus nodes"""

def get_ra_notes():
    notes = {}

    # ==========================================
    # 1. ra-math-la
    # ==========================================
    notes['ra-math-la'] = {
        "topicId": "ra-math-la",
        "topicTitle": "Linear Algebra: Vector Spaces, Eigenvalues & Orthogonality",
        "paper": "RA",
        "definitionSummary": (
            "Linear algebra forms the foundational mathematical language of robotics, spatial mechanisms, and modern control theory.\n\n"
            "### 1. Vector Spaces, Subspaces & Basis\n"
            "A vector space $V$ over $\\mathbb{R}$ is a set of mathematical objects equipped with vector addition and scalar multiplication satisfying the 8 vector space axioms. In spatial robotics, positions $P \\in \\mathbb{R}^3$, joint configurations $q \\in \\mathbb{R}^n$, and spatial twists reside in vector spaces.\n\n"
            "A subset $W \\subseteq V$ is a valid subspace iff it contains the zero vector and is closed under vector addition and scalar multiplication. The dimension of a subspace is the cardinal number of any basis spanning it.\n\n"
            "### 2. Matrix Rank & Rank-Nullity Theorem\n"
            "For an $m \\times n$ matrix $A$, the row rank always equals the column rank. The Rank-Nullity Theorem states:\n"
            "$$\\text{Rank}(A) + \\text{Nullity}(A) = n$$\n"
            "where $n$ is the number of columns. In robotics, when the $6 \\times n$ Manipulator Jacobian $J(q)$ experiences rank deficiency ($\\text{Rank}(J) < \\min(6, n)$), the robot is in a kinematic singularity, losing instantaneous degrees of freedom in Cartesian space.\n\n"
            "### 3. Systems of Linear Equations ($Ax = b$)\n"
            "- **Unique Solution**: $\\text{Rank}(A) = \\text{Rank}([A \\mid b]) = n$ (iff $\\det(A) \\neq 0$ for square matrices).\n"
            "- **Infinitely Many Solutions**: $\\text{Rank}(A) = \\text{Rank}([A \\mid b]) = r < n$, with $(n - r)$ free variables.\n"
            "- **Inconsistent (No Solution)**: $\\text{Rank}(A) < \\text{Rank}([A \\mid b])$.\n\n"
            "### 4. Eigenvalues, Eigenvectors & Cayley-Hamilton Theorem\n"
            "For $A \\in \\mathbb{R}^{n \\times n}$, scalar $\\lambda$ and non-zero vector $v \\neq 0$ satisfy $(A - \\lambda I)v = 0$. The Cayley-Hamilton Theorem proves that every square matrix satisfies its own characteristic equation: $P(A) = 0$, giving an exact algebraic method to compute matrix powers $A^k$ and state transition matrices $e^{At}$."
        ),
        "keyFormulas": (
            "$$\\det(A - \\lambda I) = 0 \\quad \\text{(Characteristic Polynomial)}$$\n\n"
            "$$\\text{Trace}(A) = \\sum_{i=1}^n \\lambda_i, \\quad \\det(A) = \\prod_{i=1}^n \\lambda_i$$\n\n"
            "$$A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A) = \\frac{1}{\\det(A)} C^T$$\n\n"
            "$$\\text{Rank}(A) + \\text{Nullity}(A) = n \\quad \\text{(Rank-Nullity Theorem)}$$\n\n"
            "$$A = Q \\Lambda Q^T \\quad \\text{(Spectral Theorem for Real Symmetric Matrices)}$$\n\n"
            "$$R \\in SO(3) \\implies R^T R = I, \\quad R^{-1} = R^T, \\quad \\det(R) = +1$$"
        ),
        "workedExample": (
            "**GATE Problem**: Let $A = \\begin{bmatrix} 3 & 2 \\\\ 2 & 3 \\end{bmatrix}$. Evaluate $A^5$ using the Cayley-Hamilton theorem.\n\n"
            "1. Characteristic equation: $\\det(A - \\lambda I) = (3-\\lambda)^2 - 4 = \\lambda^2 - 6\\lambda + 5 = 0 \\implies \\lambda_1 = 5, \\lambda_2 = 1$.\n"
            "2. By Cayley-Hamilton: $A^2 - 6A + 5I = 0 \\implies A^2 = 6A - 5I$.\n"
            "3. Write $\\lambda^5 = Q(\\lambda)(\\lambda^2 - 6\\lambda + 5) + (p\\lambda + q)$. Substituting roots:\n"
            "   - At $\\lambda = 5$: $5^5 = 3125 = 5p + q$\n"
            "   - At $\\lambda = 1$: $1^5 = 1 = p + q$\n"
            "4. Subtracting yields $4p = 3124 \\implies p = 781$, so $q = -780$.\n"
            "5. Thus $A^5 = 781A - 780I = 781\\begin{bmatrix} 3 & 2 \\\\ 2 & 3 \\end{bmatrix} - 780\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 1563 & 1562 \\\\ 1562 & 1563 \\end{bmatrix}$."
        ),
        "commonMistakes": (
            "1. Considering the zero vector $v=0$ as an eigenvector (eigenvectors must be non-zero).\n"
            "2. Forgetting to multiply scalar remainder terms by identity matrix $I$ in Cayley-Hamilton expressions.\n"
            "3. Confusing orthogonal matrices with general matrices whose columns are merely mutually perpendicular but not normalized to unit length."
        ),
        "examTraps": (
            "*GATE Trap*: A matrix with repeated eigenvalues is diagonalizable if and only if geometric multiplicity equals algebraic multiplicity. If geometric multiplicity < algebraic multiplicity, the matrix is defective and cannot be diagonalized!"
        ),
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
                {"id": "A", "text": "0", "isCorrect": True, "feedback": "Correct! Eigenvalues of M^2 - I are lambda_i^2 - 1. For lambda = 1, 1^2 - 1 = 0, so the product of eigenvalues (determinant) is 0."},
                {"id": "B", "text": "24", "isCorrect": False, "feedback": "Incorrect."},
                {"id": "C", "text": "-48", "isCorrect": False, "feedback": "Incorrect."},
                {"id": "D", "text": "16", "isCorrect": False, "feedback": "Incorrect."}
            ],
            "hint": "Eigenvalues of P(M) are P(lambda_i). Evaluate P(1) for P(x) = x^2 - 1."
        }
    }

    # ==========================================
    # 2. ra-math-calc-de
    # ==========================================
    notes['ra-math-calc-de'] = {
        "topicId": "ra-math-calc-de",
        "topicTitle": "Calculus, Differential Equations & Numerical Methods",
        "paper": "RA",
        "definitionSummary": (
            "Differential equations and numerical methods govern the continuous dynamic modeling of robot joints, motor speed response, and sensor filtering.\n\n"
            "### 1. First-Order & Linear Higher-Order ODEs\n"
            "A first-order linear differential equation has standard form $\\frac{dy}{dx} + P(x)y = Q(x)$. Multiplying by the integrating factor $\\text{IF} = e^{\\int P(x)dx}$ yields the analytical solution $y \\cdot (\\text{IF}) = \\int Q(x)(\\text{IF})dx + C$.\n\n"
            "Higher-order linear ODEs with constant coefficients $a y'' + b y' + c y = f(t)$ govern mass-spring-damper suspensions and electrical circuits. The solution consists of the Complementary Function (CF, homogeneous solution) plus the Particular Integral (PI, forced response).\n\n"
            "### 2. Laplace Transforms & Transient Dynamics\n"
            "The unilateral Laplace transform $\\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^\\infty f(t) e^{-st} dt$ maps linear differential equations into algebraic equations in the complex frequency domain $s$. Key operational theorems:\n"
            "- Differentiation: $\\mathcal{L}\\{f'(t)\\} = s F(s) - f(0^-)$\n"
            "- Shifting theorem: $\\mathcal{L}\\{e^{at} f(t)\\} = F(s - a)$\n"
            "- Initial Value Theorem: $\\lim_{t \\to 0^+} f(t) = \\lim_{s \\to \\infty} s F(s)$\n"
            "- Final Value Theorem: $\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0} s F(s)$ (valid only if all poles of $sF(s)$ lie strictly in the open left-half complex plane).\n\n"
            "### 3. Numerical Methods\n"
            "- **Newton-Raphson Method**: Iterative root-finding using tangent lines $x_{k+1} = x_k - \\frac{f(x_k)}{f'(x_k)}$. Possesses quadratic convergence ($p=2$) for simple roots.\n"
            "- **Numerical Integration**: Trapezoidal rule approximates curves with straight line chords ($O(h^2)$ global error). Simpson's 1/3 rule fits quadratic parabolas over pairs of intervals ($O(h^4)$ global error), requiring an even number of subintervals $n$."
        ),
        "keyFormulas": (
            "$$\\text{IF} = e^{\\int P(x) dx}, \\quad y \\cdot (\\text{IF}) = \\int Q(x) (\\text{IF}) dx + C$$\n\n"
            "$$\\mathcal{L}\\{f'(t)\\} = s F(s) - f(0), \\quad \\mathcal{L}\\{f''(t)\\} = s^2 F(s) - s f(0) - f'(0)$$\n\n"
            "$$\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0} s F(s) \\quad \\text{(Final Value Theorem)}$$\n\n"
            "$$x_{k+1} = x_k - \\frac{f(x_k)}{f'(x_k)} \\quad \\text{(Newton-Raphson)}$$\n\n"
            "$$\\int_a^b f(x) dx \\approx \\frac{h}{3}[y_0 + 4(y_1 + y_3 + \\dots) + 2(y_2 + y_4 + \\dots) + y_n]$$"
        ),
        "workedExample": (
            "**GATE Problem**: Solve the initial value problem $\\frac{dy}{dx} + 2y = 4e^{-2x}$ with $y(0) = 3$.\n\n"
            "1. Identify $P(x) = 2, Q(x) = 4e^{-2x}$.\n"
            "2. Integrating Factor: $\\text{IF} = e^{\\int 2 dx} = e^{2x}$.\n"
            "3. Multiply equation by IF: $y \\cdot e^{2x} = \\int 4e^{-2x} e^{2x} dx = \\int 4 dx = 4x + C$.\n"
            "4. General solution: $y(x) = (4x + C)e^{-2x}$.\n"
            "5. Apply initial condition $y(0) = 3$: $3 = (0 + C)e^0 \\implies C = 3$.\n"
            "6. Particular solution: $y(x) = (4x + 3)e^{-2x}$."
        ),
        "commonMistakes": (
            "1. Applying Final Value Theorem when poles of $sF(s)$ lie on the imaginary axis (e.g., $1/(s^2+1)$ has no steady-state limit; it oscillates indefinitely).\n"
            "2. Using Simpson's 1/3 rule with an odd number of subintervals.\n"
            "3. Neglecting initial conditions $f(0)$ when taking Laplace transforms of derivatives."
        ),
        "examTraps": (
            "*GATE Trap*: In Newton-Raphson, if the starting point $x_0$ is chosen near a local extremum where $f'(x_0) \\approx 0$, the algorithm divides by near-zero and diverges wildly."
        ),
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
                {"id": "A", "text": "2 (Quadratic)", "isCorrect": True, "feedback": "Correct! Error at step k+1 is proportional to the square of the error at step k."},
                {"id": "B", "text": "1 (Linear)", "isCorrect": False, "feedback": "Linear convergence occurs for multiple roots, not simple roots."},
                {"id": "C", "text": "1.618", "isCorrect": False, "feedback": "1.618 is the golden ratio convergence of the Secant method."},
                {"id": "D", "text": "3 (Cubic)", "isCorrect": False, "feedback": "Incorrect."}
            ],
            "hint": "Recall that Newton-Raphson doubles the number of accurate digits per iteration."
        }
    }

    # ==========================================
    # 3. ra-mechatronics-circuits-sensors
    # ==========================================
    notes['ra-mechatronics-circuits-sensors'] = {
        "topicId": "ra-mechatronics-circuits-sensors",
        "topicTitle": "Sensors, Actuators & Digital Circuits",
        "paper": "RA",
        "definitionSummary": (
            "Mechatronics integrates precision mechanical actuation, solid-state sensing, and analog/digital conditioning to drive industrial robots.\n\n"
            "### 1. Angular Encoders & Velocity Feedback\n"
            "- **Incremental Optical Encoders**: Use code disks with transparent and opaque sectors. Two photodiodes produce channels A and B in phase quadrature ($90^\\circ$ electrical shift). Using 4X quadrature decoding (detecting both rising and falling edges of A and B), resolution is $\\Delta\\theta = \\frac{360^\\circ}{4 \\times \\text{PPR}}$. Channel Z (index) provides a single home reference pulse per revolution.\n"
            "- **Absolute Optical Encoders**: Output a unique multi-bit binary or Gray code word for each angular increment. Gray code prevents multi-bit transition race conditions by ensuring only ONE bit changes between adjacent sector states.\n\n"
            "### 2. Actuators: DC Motors, BLDC & Steppers\n"
            "- **DC Servomotors**: Governed by $V_t = E_b + I_a R_a = K_b \\omega + I_a R_a$ and developed electromagnetic torque $T_e = K_t I_a$. In SI units ($V/(rad/s)$ and $N\\cdot m/A$), $K_b = K_t$.\n"
            "- **Stepper Motors**: Convert digital pulses into discrete angular steps $\\beta = \\frac{360^\\circ}{m \\cdot Z}$, where $m$ is phases and $Z$ is rotor teeth. Steppers offer precise open-loop position control without encoder feedback, but can lose synchronization if torque exceeds stall limits.\n"
            "- **BLDC Motors**: Electrically commutated using Hall sensors or back-EMF zero-crossing, offering superior heat dissipation (heat generated in stator, not rotor) and longer lifespan.\n\n"
            "### 3. Operational Amplifiers & Signal Conditioning\n"
            "- **Inverting Amplifier**: $V_{out} = -\\frac{R_f}{R_1} V_{in}$ (virtual ground at inverting terminal).\n"
            "- **Non-Inverting Amplifier**: $V_{out} = \\left(1 + \\frac{R_f}{R_1}\\right) V_{in}$.\n"
            "- **Instrumentation Amplifier**: 3-op-amp topology offering very high CMRR (Common Mode Rejection Ratio) to amplify microvolt bridge signals from strain gauges."
        ),
        "keyFormulas": (
            "$$\\Delta\\theta = \\frac{360^\\circ}{4 \\times \\text{PPR}} \\quad \\text{(4X Quadrature Resolution)}$$\n\n"
            "$$V_t = K_b \\omega + I_a R_a, \\quad T_e = K_t I_a$$\n\n"
            "$$\\beta = \\frac{360^\\circ}{m \\times Z} \\quad \\text{(Stepper Motor Step Angle)}$$\n\n"
            "$$V_{out} = -\\frac{R_f}{R_1} V_{in} \\; (\\text{Inverting}), \\quad V_{out} = \\left(1 + \\frac{R_f}{R_1}\\right) V_{in} \\; (\\text{Non-Inverting})$$\n\n"
            "$$V_{LSB} = \\frac{V_{ref}}{2^n - 1} \\approx \\frac{V_{ref}}{2^n} \\quad \\text{(ADC Resolution)}$$"
        ),
        "workedExample": (
            "**GATE Problem**: A permanent magnet DC servomotor is powered by a 24 V DC source with $R_a = 2.0\\ \\Omega$ and $K_b = 0.05\\ \\text{V/(rad/s)}$. When drawing $I_a = 4.0$ A:\n"
            "1. Find the back-EMF $E_b$: $E_b = V_t - I_a R_a = 24 - (4.0 \\times 2.0) = 16.0$ V.\n"
            "2. Find the angular speed $\\omega$: $\\omega = \\frac{E_b}{K_b} = \\frac{16.0}{0.05} = 320$ rad/s.\n"
            "3. In RPM: $N = \\frac{320 \\times 60}{2\\pi} \\approx 3055.7$ RPM.\n"
            "4. Electromagnetic torque: $T = K_t I_a = 0.05 \\times 4.0 = 0.20\\ \\text{N}\\cdot\\text{m}$."
        ),
        "commonMistakes": (
            "1. Forgetting to multiply PPR by 4 when 4X quadrature decoding is specified.\n"
            "2. Mixing units between rad/s and RPM in back-EMF equations.\n"
            "3. Confusing active sensors (requiring external power, like strain gauges/LVDTs) with self-generating passive transducers (like piezoelectric crystals/thermocouples)."
        ),
        "examTraps": (
            "*GATE Trap*: In Gray code to binary conversion, the MSB remains identical, but subsequent binary bits are obtained by XORing the current binary bit with the next Gray bit: $B_k = B_{k+1} \\oplus G_k$."
        ),
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
                {"id": "A", "text": "Only one bit changes state between adjacent positions, eliminating race conditions", "isCorrect": True, "feedback": "Correct! Gray code eliminates multi-bit switching ambiguity errors."},
                {"id": "B", "text": "It uses fewer tracks for the same resolution", "isCorrect": False, "feedback": "Both require the same number of tracks (n tracks for 2^n positions)."},
                {"id": "C", "text": "It produces analog voltage directly", "isCorrect": False, "feedback": "Incorrect."},
                {"id": "D", "text": "It requires zero optical sensors", "isCorrect": False, "feedback": "Incorrect."}
            ],
            "hint": "Consider what happens when converting from binary 0111 (7) to 1000 (8) if bits switch asynchronously."
        }
    }

    # ==========================================
    # 4. ra-robotics-kinematics-transforms
    # ==========================================
    notes['ra-robotics-kinematics-transforms'] = {
        "topicId": "ra-robotics-kinematics-transforms",
        "topicTitle": "Robot Kinematics & Coordinate Transformations",
        "paper": "RA",
        "definitionSummary": (
            "Robot kinematics analyzes spatial motion, coordinate mapping, and serial chain posture without considering actuator torques.\n\n"
            "### 1. Mobility & Grübler Criterion\n"
            "Grübler's formula computes degrees of freedom: $M = \\lambda(N - 1 - J) + \\sum f_i$, with $\\lambda = 3$ for planar mechanisms and $\\lambda = 6$ for spatial mechanisms. $N$ includes the ground link. For a planar 3R robot arm: $M = 3(4 - 1 - 3) + 3 = 3$ DOF.\n\n"
            "### 2. Homogeneous Transformation Matrices ($4 \\times 4$)\n"
            "To combine 3D rotation $R \\in SO(3)$ and translation $P \\in \\mathbb{R}^3$ into a single matrix multiplication, homogeneous coordinates are used:\n"
            "$$T = \\begin{bmatrix} R & P \\\\ 0_{1\\times 3} & 1 \\end{bmatrix}$$\n"
            "The inverse of a homogeneous transform is given by:\n"
            "$$T^{-1} = \\begin{bmatrix} R^T & -R^T P \\\\ 0 & 1 \\end{bmatrix}$$\n\n"
            "### 3. Denavit-Hartenberg (DH) Convention\n"
            "Standard DH assigns a coordinate frame to each link using 4 kinematic parameters:\n"
            "1. $a_i$ (link length): distance from $Z_{i-1}$ to $Z_i$ along $X_i$.\n"
            "2. $\\alpha_i$ (link twist): angle from $Z_{i-1}$ to $Z_i$ about $X_i$.\n"
            "3. $d_i$ (link offset): distance from $X_{i-1}$ to $X_i$ along $Z_{i-1}$ (variable for prismatic joints).\n"
            "4. $\\theta_i$ (joint angle): angle from $X_{i-1}$ to $X_i$ about $Z_{i-1}$ (variable for revolute joints).\n\n"
            "### 4. Manipulator Jacobian & Singularities\n"
            "The Jacobian matrix $J(q)$ relates joint velocities $\\dot{q}$ to Cartesian end-effector velocity $v = J(q) \\dot{q}$. When $\\det(J) = 0$ (rank deficient), the arm is at a **kinematic singularity**, where it loses degrees of freedom and requires infinite joint velocity to achieve certain Cartesian speeds."
        ),
        "keyFormulas": (
            "$$M = \\lambda (N - 1 - J) + \\sum_{i=1}^J f_i \\quad [\\lambda=3 \\text{ Planar}, \\lambda=6 \\text{ Spatial}]$$\n\n"
            "$$T = \\begin{bmatrix} R & P \\\\ 0 & 1 \\end{bmatrix} \\implies T^{-1} = \\begin{bmatrix} R^T & -R^T P \\\\ 0 & 1 \\end{bmatrix}$$\n\n"
            "$$T_{i-1}^i = \\text{Rot}(Z, \\theta_i) \\text{Trans}(Z, d_i) \\text{Trans}(X, a_i) \\text{Rot}(X, \\alpha_i)$$\n\n"
            "$$\\begin{bmatrix} v \\\\ \\omega \\end{bmatrix} = J(q) \\dot{q}, \\quad \\det(J) = 0 \\iff \\text{Singularity}$$"
        ),
        "workedExample": (
            "**GATE Problem**: A planar 2R manipulator has link lengths $L_1 = 40$ cm, $L_2 = 30$ cm. What are the end-effector coordinates $(x, y)$ when joint angles are $\\theta_1 = 30^\\circ$ and $\\theta_2 = 60^\\circ$?\n\n"
            "1. Forward kinematics equations for 2R arm:\n"
            "   $x = L_1 \\cos\\theta_1 + L_2 \\cos(\\theta_1 + \\theta_2)$\n"
            "   $y = L_1 \\sin\\theta_1 + L_2 \\sin(\\theta_1 + \\theta_2)$\n"
            "2. Note that $(\\theta_1 + \\theta_2) = 30^\\circ + 60^\\circ = 90^\\circ$.\n"
            "3. $x = 40 \\cos(30^\\circ) + 30 \\cos(90^\\circ) = 40(0.866) + 30(0) = 34.64$ cm.\n"
            "4. $y = 40 \\sin(30^\\circ) + 30 \\sin(90^\\circ) = 40(0.5) + 30(1) = 20 + 30 = 50.0$ cm."
        ),
        "commonMistakes": (
            "1. Pre-multiplication vs post-multiplication: pre-multiply for rotations about fixed base frames; post-multiply for rotations about current frames.\n"
            "2. Forgetting that translation part of $T^{-1}$ is $-R^T P$, not $-P$.\n"
            "3. Misidentifying link twist $\\alpha_i$ (measured about $X_i$, NOT $Z_i$)."
        ),
        "examTraps": (
            "*GATE Trap*: For a planar 2R robot, the boundary singularity occurs when $\\theta_2 = 0^\\circ$ (fully outstretched, reach = $L_1+L_2$) or $\\theta_2 = 180^\\circ$ (folded back, reach = $|L_1-L_2|$). The Jacobian determinant is $\\det(J) = L_1 L_2 \\sin\\theta_2 = 0$."
        ),
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
                {"id": "A", "text": "$\\theta_2 = 0^\\circ$ or $180^\\circ$", "isCorrect": True, "feedback": "Correct! $\\det(J) = L_1 L_2 \\sin\\theta_2 = 0$ when $\\theta_2 = 0^\\circ$ or $180^\\circ$."},
                {"id": "B", "text": "$\\theta_2 = 90^\\circ$", "isCorrect": False, "feedback": "At 90 deg, sin(90)=1, which gives maximum manipulability."},
                {"id": "C", "text": "$\\theta_1 = 45^\\circ$", "isCorrect": False, "feedback": "Singularity depends solely on relative joint angle theta2, not base angle theta1."},
                {"id": "D", "text": "$\\theta_2 = 45^\\circ$", "isCorrect": False, "feedback": "Incorrect."}
            ],
            "hint": "When does $\\det(J) = L_1 L_2 \\sin\\theta_2$ equal zero?"
        }
    }

    # ==========================================
    # 5. ra-robotics-dynamics-path-endeffectors
    # ==========================================
    notes['ra-robotics-dynamics-path-endeffectors'] = {
        "topicId": "ra-robotics-dynamics-path-endeffectors",
        "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
        "paper": "RA",
        "definitionSummary": (
            "Trajectory formulation converts desired Cartesian waypoints into smooth, actuator-compatible joint position and velocity profiles.\n\n"
            "### 1. Polynomial Trajectory Planning\n"
            "- **Cubic Polynomial**: $\\theta(t) = a_0 + a_1 t + a_2 t^2 + a_3 t^3$. Satisfies 4 boundary conditions $(\\theta_0, \\theta_f, \\dot{\\theta}_0, \\dot{\\theta}_f)$. Provides continuous velocity, but non-zero boundary accelerations (jerk impulses).\n"
            "- **Quintic Polynomial**: 5th order polynomial with 6 coefficients satisfying position, velocity, and zero boundary accelerations $\\ddot{\\theta}_0 = \\ddot{\\theta}_f = 0$.\n"
            "- **LSPB (Trapezoidal Velocity)**: Linear Segment with Parabolic Blends divides motion into constant acceleration blend, constant velocity cruise, and constant deceleration blend.\n\n"
            "### 2. Robotic Grippers & Clamping Force\n"
            "Friction grippers hold objects via tangential shear friction: $2 \\mu F_N \\ge S_f m (g + a)$, where $S_f$ is safety factor and factor of 2 accounts for two opposing jaws.\n"
            "Vacuum cups generate lifting force perpendicular to the surface: $F = \\Delta P \\cdot A = \\Delta P \\cdot \\frac{\\pi D^2}{4}$.\n\n"
            "### 3. Repeatability vs Accuracy (ISO 9283)\n"
            "Accuracy measures the distance between commanded target point and actual mean cluster center. Repeatability measures scatter agreement among repeated trials ($R_p = \\pm 3\\sigma$)."
        ),
        "keyFormulas": (
            "$$a_2 = \\frac{3(\\theta_f - \\theta_0)}{t_f^2}, \\quad a_3 = -\\frac{2(\\theta_f - \\theta_0)}{t_f^3} \\quad \\text{(Cubic starting/ending at rest)}$$\n\n"
            "$$F_N \\ge \\frac{S_f \\cdot m (g + a)}{2 \\mu} \\quad \\text{(Two-finger gripper force)}$$\n\n"
            "$$F_{vac} = \\Delta P \\times A = \\Delta P \\times \\frac{\\pi D^2}{4} \\quad \\text{(Suction cup lifting force)}$$\n\n"
            "$$R_p = \\pm 3\\sigma \\quad \\text{(ISO 9283 Positioning Repeatability)}$$"
        ),
        "workedExample": (
            "**GATE Problem**: A 2-finger friction gripper holds a $m = 6.0$ kg payload. The coefficient of friction is $\\mu = 0.25$. If the robot accelerates upwards at $a = 2.19\\ \\text{m/s}^2$ with a safety factor of $S_f = 2.0$ (take $g = 9.81\\ \\text{m/s}^2$):\n"
            "1. Total vertical force needed: $F_{req} = S_f m (g + a) = 2.0 \\times 6.0 \\times (9.81 + 2.19) = 12.0 \\times 12.0 = 144.0$ N.\n"
            "2. Total frictional resistance from 2 jaws: $2 \\mu F_N$.\n"
            "3. Normal force per finger: $F_N = \\frac{144.0}{2 \\times 0.25} = \\frac{144.0}{0.5} = 288.0$ N."
        ),
        "commonMistakes": (
            "1. Forgetting factor of 2 for two opposing gripper fingers.\n"
            "2. Forgetting to add upward acceleration $a$ to gravity $g$.\n"
            "3. Confusing ISO repeatability ($3\\sigma$) with single standard deviation ($\\sigma$)."
        ),
        "examTraps": (
            "*GATE Trap*: In cubic trajectory planning, maximum velocity does NOT occur at $t = t_f$. For symmetric start and end at rest, peak velocity occurs exactly at midpoint $t = t_f / 2$, with value $v_{max} = 1.5 \\frac{\\theta_f - \\theta_0}{t_f}$."
        ),
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
                {"id": "A", "text": "It allows setting boundary accelerations to zero, preventing infinite motor jerk", "isCorrect": True, "feedback": "Correct! Quintic trajectories ensure zero boundary accelerations, avoiding severe mechanical shock."},
                {"id": "B", "text": "It eliminates the need for inverse kinematics", "isCorrect": False, "feedback": "Incorrect."},
                {"id": "C", "text": "It runs in constant execution time", "isCorrect": False, "feedback": "Incorrect."},
                {"id": "D", "text": "It requires only two coefficients", "isCorrect": False, "feedback": "Incorrect. Quintic uses 6 coefficients."}
            ],
            "hint": "Consider the derivative of acceleration (jerk) at start and end times."
        }
    }

    # ==========================================
    # 6. ra-cim-plc-automation
    # ==========================================
    notes['ra-cim-plc-automation'] = {
        "topicId": "ra-cim-plc-automation",
        "topicTitle": "CIM, PLC, CNC & Workcells",
        "paper": "RA",
        "definitionSummary": (
            "Computer Integrated Manufacturing (CIM) and Programmable Logic Controllers (PLCs) form the control backbone of factory automation.\n\n"
            "### 1. PLC Operating Cycle & Ladder Logic\n"
            "A PLC repeatedly executes a 3-phase scan cycle:\n"
            "1. **Input Scan**: Reads physical input terminal states into the Input Image Table.\n"
            "2. **Program Execution**: Solves ladder rungs sequentially from left-to-right, top-to-bottom.\n"
            "3. **Output Scan**: Writes Output Image Table values to physical actuator terminals.\n"
            "Scan time $T_{scan} = T_{in} + T_{exec} + T_{out}$. Key ladder elements: NO contact ($-[/]-$), NC contact ($-[/]-$), TON (Timer On-Delay), CTU (Up-Counter).\n\n"
            "### 2. CNC Programming (G-Codes & M-Codes)\n"
            "- G00: Rapid traverse (non-cutting positioning at maximum velocity)\n"
            "- G01: Linear interpolation at programmed feedrate\n"
            "- G02 / G03: Circular interpolation clockwise (CW) / counter-clockwise (CCW)\n"
            "- G90 / G91: Absolute / Incremental dimensioning\n"
            "- M03 / M04 / M05: Spindle ON CW / Spindle ON CCW / Spindle STOP\n"
            "- M08 / M09: Coolant ON / Coolant OFF; M30: Program End and Rewind\n\n"
            "### 3. Automated Material Handling & Workcells\n"
            "- **AS/RS**: Automated Storage and Retrieval Systems travel time $T = \\max(L/v_x, H/v_y)$.\n"
            "- **Production Rate**: For a balanced transfer line of $m$ stations, throughput is limited by the bottleneck station: $R_p = 60 / T_{bottleneck}$ parts/hour."
        ),
        "keyFormulas": (
            "$$T_{scan} = T_{input} + T_{program} + T_{output}$$\n\n"
            "$$T = \\max\\left(\\frac{L}{v_x}, \\frac{H}{v_y}\\right) \\quad \\text{(AS/RS Simultaneous Transit Time)}$$\n\n"
            "$$R_p = \\frac{60}{T_b} \\quad \\text{(Line Production Rate governed by Bottleneck $T_b$)}$$"
        ),
        "workedExample": (
            "**GATE Problem**: An AS/RS crane operates in an aisle of length $L = 80$ m and height $H = 24$ m. Drive speeds are $v_x = 2.0$ m/s horizontally and $v_y = 0.60$ m/s vertically. Pickup and drop takes $T_{pd} = 12$ s total. What is the transit time $T$?\n\n"
            "1. Horizontal travel time: $t_x = 80 / 2.0 = 40.0$ s.\n"
            "2. Vertical travel time: $t_y = 24 / 0.60 = 40.0$ s.\n"
            "3. Simultaneous travel transit time: $T = \\max(t_x, t_y) = \\max(40, 40) = 40.0$ s."
        ),
        "commonMistakes": (
            "1. Adding horizontal and vertical transit times together instead of taking $\\max(t_x, t_y)$ for simultaneous crane drives.\n"
            "2. Confusing G02 (CW) with G03 (CCW).\n"
            "3. Assuming M05 starts the spindle (M03 starts CW, M05 stops)."
        ),
        "examTraps": (
            "*GATE Trap*: A PLC program does NOT change physical outputs immediately when a rung evaluates to True. Outputs are updated ONLY during the Output Scan phase at the end of the scan cycle!"
        ),
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
                {"id": "A", "text": "G03", "isCorrect": True, "feedback": "Correct! G02 is circular CW, G03 is circular CCW."},
                {"id": "B", "text": "G02", "isCorrect": False, "feedback": "G02 is circular clockwise (CW)."},
                {"id": "C", "text": "G01", "isCorrect": False, "feedback": "G01 is linear feed interpolation."},
                {"id": "D", "text": "G00", "isCorrect": False, "feedback": "G00 is rapid non-cutting traverse."}
            ],
            "hint": "G02 is clockwise; G03 is counter-clockwise."
        }
    }

    # ==========================================
    # 7. ra-b1-control-systems
    # ==========================================
    notes['ra-b1-control-systems'] = {
        "topicId": "ra-b1-control-systems",
        "topicTitle": "Control Systems & PID",
        "paper": "RA",
        "definitionSummary": (
            "Feedback control ensures precision trajectory tracking and disturbance rejection in robot joints.\n\n"
            "### 1. Closed-Loop Dynamics & Second-Order Systems\n"
            "Standard second-order closed-loop transfer function:\n"
            "$$T(s) = \\frac{\\omega_n^2}{s^2 + 2\\zeta \\omega_n s + \\omega_n^2}$$\n"
            "- Underdamped ($0 < \\zeta < 1$): Complex conjugate poles $-\\zeta\\omega_n \\pm j\\omega_d$, oscillatory transient.\n"
            "- Critically damped ($\\zeta = 1$): Fastest non-oscillatory return.\n"
            "- Overdamped ($\\zeta > 1$): Sluggish exponential response.\n"
            "Key time-domain metrics: Peak overshoot $M_p = e^{-\\frac{\\pi \\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%$, settling time $t_s = \\frac{4}{\\zeta\\omega_n}$ (2% criterion).\n\n"
            "### 2. Steady-State Error & System Type\n"
            "Steady-state error $e_{ss} = \\lim_{s \\to 0} \\frac{s R(s)}{1 + G(s)H(s)}$. System type (number of open-loop poles at origin $s=0$):\n"
            "- Type 0: $e_{ss} = \\frac{1}{1+K_p}$ for step; $\\infty$ for ramp.\n"
            "- Type 1: $e_{ss} = 0$ for step; $\\frac{1}{K_v}$ for ramp.\n"
            "- Type 2: $e_{ss} = 0$ for step and ramp; $\\frac{1}{K_a}$ for parabolic.\n\n"
            "### 3. PID Controller Action\n"
            "$$u(t) = K_p e(t) + K_i \\int_0^t e(\\tau) d\\tau + K_d \\frac{de(t)}{dt} \\iff G_c(s) = K_p + \\frac{K_i}{s} + K_d s$$\n"
            "- **P (Proportional)**: Reduces rise time, but cannot eliminate steady-state error alone.\n"
            "- **I (Integral)**: Eliminates steady-state offset by increasing system type by 1, but decreases stability margin.\n"
            "- **D (Derivative)**: Adds anticipatory phase lead and damping, reducing overshoot and settling time."
        ),
        "keyFormulas": (
            "$$M_p = e^{-\\frac{\\pi \\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%, \\quad t_s(2\\%) = \\frac{4}{\\zeta \\omega_n}, \\quad t_p = \\frac{\\pi}{\\omega_d}$$\n\n"
            "$$e_{ss} = \\frac{1}{1+K_p} \\; (\\text{Step}), \\quad e_{ss} = \\frac{1}{K_v} \\; (\\text{Ramp}), \\quad e_{ss} = \\frac{1}{K_a} \\; (\\text{Parabolic})$$\n\n"
            "$$G_c(s) = K_p + \\frac{K_i}{s} + K_d s = \\frac{K_d s^2 + K_p s + K_i}{s}$$\n\n"
            "$$\\dot{x} = A x + B u, \\quad y = C x + D u \\quad \\text{(State-Space)}$$"
        ),
        "workedExample": (
            "**GATE Problem**: A unity feedback system has open-loop transfer function $G(s) = \\frac{25}{s(s + 6)}$. Find $\\omega_n, \\zeta, M_p$, and $2\\%$ settling time $t_s$.\n\n"
            "1. Closed-loop transfer function: $T(s) = \\frac{G(s)}{1 + G(s)} = \\frac{25}{s^2 + 6s + 25}$.\n"
            "2. Compare with standard form: $\\omega_n^2 = 25 \\implies \\omega_n = 5$ rad/s.\n"
            "3. $2\\zeta\\omega_n = 6 \\implies 2\\zeta(5) = 6 \\implies \\zeta = 0.6$.\n"
            "4. Peak overshoot: $M_p = e^{-\\frac{\\pi(0.6)}{\\sqrt{1-0.36}}} = e^{-\\frac{1.88496}{0.8}} = e^{-2.356} \\times 100\\% \\approx 9.48\\%$.\n"
            "5. Settling time (2%): $t_s = \\frac{4}{\\zeta\\omega_n} = \\frac{4}{0.6 \\times 5} = \\frac{4}{3} \\approx 1.33$ seconds."
        ),
        "commonMistakes": (
            "1. Evaluating steady-state error using closed-loop poles instead of open-loop poles at $s=0$.\n"
            "2. Confusing the 2% criterion ($4/(\\zeta\\omega_n)$) with the 5% criterion ($3/(\\zeta\\omega_n)$).\n"
            "3. Believing derivative control (D) removes steady-state offset (only Integral control does)."
        ),
        "examTraps": (
            "*GATE Trap*: In Routh-Hurwitz, if an entire row becomes zero, form the auxiliary equation $A(s) = 0$ using coefficients from the row immediately above, differentiate $\\frac{dA}{ds}$, and replace the zero row. The roots of $A(s) = 0$ are symmetric about the origin (often marginal imaginary poles $\\pm j\\omega$)."
        ),
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
                {"id": "A", "text": "It increases system type number by 1, eliminating steady-state offset for step inputs", "isCorrect": True, "feedback": "Correct! Ki/s introduces a pole at the origin, eliminating steady-state error."},
                {"id": "B", "text": "It improves phase margin and speeds up initial rise time", "isCorrect": False, "feedback": "Integral action adds negative phase lag, which reduces phase margin."},
                {"id": "C", "text": "It eliminates sensor noise amplification", "isCorrect": False, "feedback": "Incorrect."},
                {"id": "D", "text": "It guarantees overdamped transient response", "isCorrect": False, "feedback": "Incorrect."}
            ],
            "hint": "Integral action integrates error over time: Ki/s."
        }
    }

    # ==========================================
    # 8. ra-b2-mechanics-materials
    # ==========================================
    notes['ra-b2-mechanics-materials'] = {
        "topicId": "ra-b2-mechanics-materials",
        "topicTitle": "Mechanics of Materials: Stress, Torsion & Buckling",
        "paper": "RA",
        "definitionSummary": (
            "Mechanics of materials governs structural deflection, stress limits, and buckling stability in robot arms and shafts.\n\n"
            "### 1. Stress, Strain & Mohr's Circle\n"
            "Under plane stress $(\\sigma_x, \\sigma_y, \\tau_{xy})$, principal normal stresses are:\n"
            "$$\\sigma_{1,2} = \\frac{\\sigma_x + \\sigma_y}{2} \\pm \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$$\n"
            "The maximum in-plane shear stress is the radius of Mohr's circle: $\\tau_{max} = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$.\n\n"
            "### 2. Pure Bending & Torsion\n"
            "- **Euler-Bernoulli Flexure Formula**: $\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}$. Maximum bending stress $\\sigma_{max} = \\frac{M}{Z}$, where $Z = I / y_{max}$ is section modulus.\n"
            "- **Torsion of Circular Shafts**: $\\frac{T}{J} = \\frac{\\tau}{r} = \\frac{G \\theta}{L}$. Polar second moment of area for solid circular shaft $J = \\frac{\\pi d^4}{32}$, giving outer shear stress $\\tau_{max} = \\frac{16T}{\\pi d^3}$.\n\n"
            "### 3. Euler Buckling of Columns\n"
            "Critical axial compressive buckling load: $P_{cr} = \\frac{\\pi^2 E I}{(L_e)^2}$, where effective length $L_e$ depends on end conditions: Pinned-Pinned ($L$), Fixed-Fixed ($0.5L$), Fixed-Free ($2.0L$), Fixed-Pinned ($0.707L$)."
        ),
        "keyFormulas": (
            "$$\\sigma_{1,2} = \\frac{\\sigma_x + \\sigma_y}{2} \\pm R, \\quad \\tau_{max} = R = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}$$\n\n"
            "$$\\frac{M}{I} = \\frac{\\sigma}{y} = \\frac{E}{R}, \\quad \\sigma_{max} = \\frac{M}{Z}$$\n\n"
            "$$\\frac{T}{J} = \\frac{\\tau}{r} = \\frac{G \\theta}{L}, \\quad \\tau_{max} = \\frac{16 T}{\\pi d^3}$$\n\n"
            "$$P_{cr} = \\frac{\\pi^2 E I}{(L_e)^2} \\quad \\text{(Euler Critical Buckling Load)}$$"
        ),
        "workedExample": (
            "**GATE Problem**: A solid circular steel shaft of diameter $d = 50$ mm transmits a torque $T = 1.0\\ \\text{kN}\\cdot\\text{m}$. What is the maximum shear stress $\\tau_{max}$?\n\n"
            "1. Torsion formula: $\\tau_{max} = \\frac{16 T}{\\pi d^3}$.\n"
            "2. Convert units: $T = 1000$ N·m, $d = 0.05$ m.\n"
            "3. $d^3 = (0.05)^3 = 1.25 \\times 10^{-4}$ m$^3$.\n"
            "4. $\\tau_{max} = \\frac{16 \\times 1000}{\\pi \\times 1.25 \\times 10^{-4}} = \\frac{16000}{3.927 \\times 10^{-4}} = 4.074 \\times 10^7\\ \\text{Pa} = 40.74$ MPa."
        ),
        "commonMistakes": (
            "1. Unit mismatch: computing with MPa and mm simultaneously without consistent $10^6$ or $10^{-3}$ factors.\n"
            "2. Using diameter instead of radius for $y$ or $r$ in bending and torsion formulas.\n"
            "3. Forgetting that Euler buckling always occurs about the axis with MINIMUM area moment of inertia $I_{min}$."
        ),
        "examTraps": (
            "*GATE Trap*: A fixed-free (cantilever) column has $L_e = 2L$, so its critical buckling load is $P_{cr} = \\frac{\\pi^2 E I}{4 L^2}$. Aspirants often forget the factor of 4 reduction!"
        ),
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
                {"id": "A", "text": "4", "isCorrect": True, "feedback": "Correct! Le_fixed = 0.5L. P_cr is inversely proportional to Le^2, so (L / 0.5L)^2 = 2^2 = 4."},
                {"id": "B", "text": "2", "isCorrect": False, "feedback": "Remember that effective length is squared in the denominator."},
                {"id": "C", "text": "16", "isCorrect": False, "feedback": "Incorrect."},
                {"id": "D", "text": "0.25", "isCorrect": False, "feedback": "Fixed ends stiffen the column, increasing buckling load, not reducing it."}
            ],
            "hint": "Compare Le = 0.5L with Le = L in P_cr = pi^2 EI / Le^2."
        }
    }

    return notes
