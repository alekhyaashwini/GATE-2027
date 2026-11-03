export interface FormulaSheetItem {
  id: string;
  paper: 'RA' | 'DA' | 'COMMON';
  category: string;
  subject: string;
  title: string;
  formulaLatex: string;
  description: string;
  variables: { symbol: string; meaning: string }[];
  conditionsOrBounds?: string;
  examTip: string;
  gateTrapAlert?: string;
}

export const FORMULA_CHEAT_SHEETS: FormulaSheetItem[] = [
  // ==========================================
  // ENGINEERING MATHEMATICS (COMMON TO RA & DA)
  // ==========================================
  {
    id: 'f-la-eig',
    paper: 'COMMON',
    subject: 'Engineering Mathematics',
    category: 'Linear Algebra',
    title: 'Characteristic Equation & Eigenvalue Properties',
    formulaLatex: '\\det(A - \\lambda I) = 0, \\quad \\sum_{i=1}^n \\lambda_i = \\text{Tr}(A), \\quad \\prod_{i=1}^n \\lambda_i = \\det(A)',
    description: 'Relates matrix trace and determinant to the sum and product of all eigenvalues.',
    variables: [
      { symbol: '\\lambda_i', meaning: 'Eigenvalues of matrix A' },
      { symbol: '\\text{Tr}(A)', meaning: 'Trace: sum of principal diagonal elements' },
      { symbol: '\\det(A)', meaning: 'Determinant of matrix A' }
    ],
    conditionsOrBounds: 'Applicable to any square matrix A of size n x n.',
    examTip: 'Always use Trace and Determinant as quick checks to eliminate wrong options in 2x2 and 3x3 eigenvalue problems within 10 seconds.',
    gateTrapAlert: 'If one eigenvalue is 0, then det(A) = 0 and matrix is non-invertible (singular).'
  },
  {
    id: 'f-la-cayley',
    paper: 'COMMON',
    subject: 'Engineering Mathematics',
    category: 'Linear Algebra',
    title: 'Cayley-Hamilton Theorem & Matrix Inverses',
    formulaLatex: 'P(\\lambda) = 0 \\implies P(A) = 0, \\quad A^2 - \\text{Tr}(A)A + \\det(A)I = 0 \\implies A^{-1} = \\frac{1}{\\det(A)}(\\text{Tr}(A)I - A)',
    description: 'Every square matrix satisfies its own characteristic polynomial equation.',
    variables: [
      { symbol: 'P(A)', meaning: 'Matrix polynomial matching characteristic equation' },
      { symbol: 'A^{-1}', meaning: 'Matrix inverse evaluated without full cofactor expansion' }
    ],
    examTip: 'To find high matrix powers (e.g., A^4 or A^100), divide lambda^k by characteristic polynomial using remainder theorem: lambda^k = Q(lambda)P(lambda) + R(lambda).',
    gateTrapAlert: 'Do not forget to multiply scalar constant terms by the Identity matrix I.'
  },
  {
    id: 'f-la-rank-nullity',
    paper: 'COMMON',
    subject: 'Engineering Mathematics',
    category: 'Linear Algebra',
    title: 'Rank-Nullity Theorem',
    formulaLatex: '\\text{Rank}(T) + \\text{Nullity}(T) = n = \\dim(\\text{Domain})',
    description: 'For any linear map or m x n matrix, the dimension of the column space (rank) plus dimension of the null space equals number of columns.',
    variables: [
      { symbol: '\\text{Rank}(T)', meaning: 'Dimension of Range/Column Space (dim Im(T))' },
      { symbol: '\\text{Nullity}(T)', meaning: 'Dimension of Kernel/Null Space (dim Ker(T))' },
      { symbol: 'n', meaning: 'Number of columns (dimension of input domain)' }
    ],
    examTip: 'Nullity is the number of free variables in the homogeneous system Ax = 0.',
    gateTrapAlert: 'n is the number of COLUMNS, not rows.'
  },
  {
    id: 'f-calc-newton-raphson',
    paper: 'COMMON',
    subject: 'Engineering Mathematics',
    category: 'Calculus & Numerical Methods',
    title: 'Newton-Raphson Iteration & Order of Convergence',
    formulaLatex: 'x_{k+1} = x_k - \\frac{f(x_k)}{f\'(x_k)}, \\quad |e_{k+1}| \\approx C |e_k|^2 \\quad \\text{(Quadratic Convergence)}',
    description: 'Iterative root-finding algorithm using local tangent line intersections.',
    variables: [
      { symbol: 'x_{k+1}', meaning: 'Updated root approximation' },
      { symbol: 'f\'(x_k)', meaning: 'First derivative evaluated at current estimate' },
      { symbol: 'p = 2', meaning: 'Order of convergence for simple roots' }
    ],
    conditionsOrBounds: 'Requires f\'(x) != 0 in neighborhood of root. Fails if starting near local extrema.',
    examTip: 'Convergence is quadratic (order 2) for simple roots, but drops to linear (order 1) for multiple roots!',
    gateTrapAlert: 'Watch out for initial points where f\'(x0) = 0; the method divides by zero and diverges.'
  },
  {
    id: 'f-calc-simpson',
    paper: 'COMMON',
    subject: 'Engineering Mathematics',
    category: 'Calculus & Numerical Methods',
    title: 'Simpson’s 1/3 Rule & Truncation Error',
    formulaLatex: '\\int_a^b f(x) dx \\approx \\frac{h}{3}[y_0 + 4(y_1 + y_3 + \\dots) + 2(y_2 + y_4 + \\dots) + y_n], \\quad E = -\\frac{(b-a)h^4}{180} f^{(4)}(\\xi)',
    description: 'Numerical integration fitting second-degree parabolic arcs over pairs of intervals.',
    variables: [
      { symbol: 'h', meaning: 'Step size: (b - a) / n' },
      { symbol: 'n', meaning: 'Number of subintervals (MUST BE AN EVEN INTEGER)' },
      { symbol: 'E', meaning: 'Global truncation error proportional to h^4' }
    ],
    conditionsOrBounds: 'Subintervals n must be even. Exact for polynomials up to degree 3.',
    examTip: 'Even though Simpson 1/3 is based on quadratic parabolas, its error depends on f^(4)(xi), making it exact for cubic polynomials!',
    gateTrapAlert: 'Never use Simpson’s 1/3 rule with an odd number of intervals.'
  },
  {
    id: 'f-de-first-order',
    paper: 'COMMON',
    subject: 'Engineering Mathematics',
    category: 'Differential Equations',
    title: 'First-Order Linear ODE & Integrating Factor',
    formulaLatex: '\\frac{dy}{dx} + P(x)y = Q(x) \\implies \\text{IF} = e^{\\int P(x) dx}, \\quad y \\cdot (\\text{IF}) = \\int Q(x) \\cdot (\\text{IF}) dx + C',
    description: 'Standard analytical solution for non-homogeneous first-order linear differential equations.',
    variables: [
      { symbol: '\\text{IF}', meaning: 'Integrating factor e^{int P dx}' },
      { symbol: 'C', meaning: 'Constant determined by initial conditions' }
    ],
    examTip: 'Ensure the coefficient of dy/dx is 1 before reading off P(x). If x dy/dx + 2y = 4, divide by x first: P(x) = 2/x.',
    gateTrapAlert: 'Sign error in P(x) inverts the integrating factor and destroys the solution.'
  },

  // ==========================================
  // ROBOTICS & AUTOMATION (RA)
  // ==========================================
  {
    id: 'f-ra-rot-3d',
    paper: 'RA',
    subject: 'Principles of Robotics & Automation',
    category: 'Robot Kinematics',
    title: 'Elementary 3D Rotation Matrices (SO(3))',
    formulaLatex: 'R_x(\\phi) = \\begin{bmatrix} 1 & 0 & 0 \\\\ 0 & c\\phi & -s\\phi \\\\ 0 & s\\phi & c\\phi \\end{bmatrix}, \\quad R_y(\\theta) = \\begin{bmatrix} c\\theta & 0 & s\\theta \\\\ 0 & 1 & 0 \\\\ -s\\theta & 0 & c\\theta \\end{bmatrix}, \\quad R_z(\\psi) = \\begin{bmatrix} c\\psi & -s\\psi & 0 \\\\ s\\psi & c\\psi & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}',
    description: 'Standard coordinate rotations about the principal Cartesian axes.',
    variables: [
      { symbol: 'c\\theta, s\\theta', meaning: '\\cos\\theta and \\sin\\theta' },
      { symbol: 'SO(3)', meaning: 'Special Orthogonal Group: R^T R = I, \\det(R) = +1' }
    ],
    examTip: 'Note the sign difference in R_y(\\theta): the negative sine appears in row 3 col 1 (-s\\theta), while row 1 col 3 is +s\\theta!',
    gateTrapAlert: 'Pre-multiplication applies rotation about the FIXED reference frame; post-multiplication applies rotation about the CURRENT moving frame.'
  },
  {
    id: 'f-ra-dh-transform',
    paper: 'RA',
    subject: 'Principles of Robotics & Automation',
    category: 'Robot Kinematics',
    title: 'Standard Denavit-Hartenberg (DH) $4 \\times 4$ Matrix',
    formulaLatex: 'T_{i-1}^i = \\begin{bmatrix} \\cos\\theta_i & -\\sin\\theta_i \\cos\\alpha_i & \\sin\\theta_i \\sin\\alpha_i & a_i \\cos\\theta_i \\\\ \\sin\\theta_i & \\cos\\theta_i \\cos\\alpha_i & -\\cos\\theta_i \\sin\\alpha_i & a_i \\sin\\theta_i \\\\ 0 & \\sin\\alpha_i & \\cos\\alpha_i & d_i \\\\ 0 & 0 & 0 & 1 \\end{bmatrix}',
    description: 'Relates coordinate frame {i} to {i-1} via 4 kinematic parameters: (a_i, \\alpha_i, d_i, \\theta_i).',
    variables: [
      { symbol: 'a_i', meaning: 'Link length: distance from Z_{i-1} to Z_i along X_i' },
      { symbol: '\\alpha_i', meaning: 'Link twist: angle from Z_{i-1} to Z_i about X_i' },
      { symbol: 'd_i', meaning: 'Link offset: distance from X_{i-1} to X_i along Z_{i-1} (variable in prismatic)' },
      { symbol: '\\theta_i', meaning: 'Joint angle: angle from X_{i-1} to X_i about Z_{i-1} (variable in revolute)' }
    ],
    examTip: 'Remember the DH sequence: Rot(Z, \\theta_i) -> Trans(Z, d_i) -> Trans(X, a_i) -> Rot(X, \\alpha_i).',
    gateTrapAlert: 'Common normal X_i is perpendicular to BOTH Z_{i-1} and Z_i. If axes intersect, a_i = 0.'
  },
  {
    id: 'f-ra-grubler',
    paper: 'RA',
    subject: 'Principles of Robotics & Automation',
    category: 'Robot Kinematics',
    title: 'Grübler / Kutzbach Mobility Criterion',
    formulaLatex: 'M = \\lambda (N - 1 - J) + \\sum_{i=1}^J f_i \\quad [\\lambda = 3 \\text{ for Planar}, \\; \\lambda = 6 \\text{ for Spatial}]',
    description: 'Calculates the degrees of freedom (DOF) of an open or closed kinematic mechanism.',
    variables: [
      { symbol: 'M', meaning: 'Mobility / Degrees of Freedom (DOF)' },
      { symbol: 'N', meaning: 'Total number of links (INCLUDING the fixed ground link)' },
      { symbol: 'J', meaning: 'Total number of kinematic joints' },
      { symbol: 'f_i', meaning: 'Degrees of freedom permitted by joint i (f=1 for standard revolute/prismatic)' }
    ],
    examTip: 'Always count the ground/base as Link 1! For a 4-bar planar mechanism: M = 3(4 - 1 - 4) + 4 = 1.',
    gateTrapAlert: 'Watch out for planar vs spatial mechanisms. Using lambda = 6 on a planar linkage gives wrong negative mobility.'
  },
  {
    id: 'f-ra-jacobian-singularity',
    paper: 'RA',
    subject: 'Principles of Robotics & Automation',
    category: 'Robot Kinematics',
    title: 'Manipulator Jacobian & Singularities',
    formulaLatex: '\\begin{bmatrix} v \\\\ \\omega \\end{bmatrix} = J(q) \\dot{q}, \\quad \\det(J(q)) = 0 \\iff \\text{Kinematic Singularity}',
    description: 'Maps joint velocity vector to end-effector linear and angular velocity in Cartesian space.',
    variables: [
      { symbol: 'J(q)', meaning: 'Manipulator Jacobian matrix of dimension 6 x n' },
      { symbol: '\\dot{q}', meaning: 'Joint velocity vector' },
      { symbol: '\\det(J) = 0', meaning: 'Rank deficiency leading to lost degrees of freedom' }
    ],
    examTip: 'At singularities, the robot cannot move in certain Cartesian directions, and static force transmission in that direction approaches infinity.',
    gateTrapAlert: 'Inverse velocity requires J^{-1}. Near singularities, required joint velocities blow up towards infinity.'
  },
  {
    id: 'f-ra-cubic-traj',
    paper: 'RA',
    subject: 'Principles of Robotics & Automation',
    category: 'Trajectory Planning',
    title: 'Cubic Polynomial Joint Trajectory',
    formulaLatex: '\\theta(t) = a_0 + a_1 t + a_2 t^2 + a_3 t^3, \\quad a_2 = \\frac{3(\\theta_f - \\theta_0)}{t_f^2}, \\quad a_3 = -\\frac{2(\\theta_f - \\theta_0)}{t_f^3} \\; [\\text{when } \\dot{\\theta}_0 = \\dot{\\theta}_f = 0]',
    description: 'Generates smooth position profile between two setpoints with zero start and end velocities.',
    variables: [
      { symbol: '\\theta_0, \\theta_f', meaning: 'Initial and final joint angles' },
      { symbol: 't_f', meaning: 'Total motion duration in seconds' },
      { symbol: '\\dot{\\theta}(t)', meaning: 'Parabolic joint velocity profile' }
    ],
    examTip: 'Maximum velocity for a cubic trajectory with zero boundary velocities occurs at midpoint t = t_f / 2, with value v_max = 1.5 * (\\theta_f - \\theta_0) / t_f.',
    gateTrapAlert: 'A cubic polynomial does NOT guarantee zero acceleration at boundaries; use a quintic (5th order) polynomial to enforce zero jerk/acceleration.'
  },
  {
    id: 'f-ra-iso-repeatability',
    paper: 'RA',
    subject: 'Principles of Robotics & Automation',
    category: 'Robot Performance',
    title: 'Robot ISO 9283 Repeatability vs Accuracy',
    formulaLatex: 'R_p = \\pm 3\\sigma = \\bar{l} + 3S_l, \\quad \\text{Accuracy} = \\|P_{target} - \\bar{P}_{actual}\\|',
    description: 'ISO performance metrics for industrial robot positioning capability.',
    variables: [
      { symbol: 'R_p', meaning: 'Repeatability: closeness of agreement among repeated cycles' },
      { symbol: '\\sigma, S_l', meaning: 'Standard deviation of position errors' },
      { symbol: 'Accuracy', meaning: 'Systematic error between commanded target and cluster mean' }
    ],
    examTip: 'Repeatability is almost always much better (smaller value) than absolute accuracy in industrial manipulators.',
    gateTrapAlert: 'Do not confuse 1\\sigma with 3\\sigma. GATE questions frequently specify 3-sigma unilateral repeatability.'
  },
  {
    id: 'f-ra-gripper-force',
    paper: 'RA',
    subject: 'Principles of Robotics & Automation',
    category: 'End-Effectors',
    title: 'Friction-Based Mechanical Gripper Clamping Force',
    formulaLatex: 'F_N \\ge \\frac{S_f \\cdot m (g + a)}{2 \\mu \\cdot n}',
    description: 'Required normal pinching force per finger to prevent payload slippage under gravity and robot acceleration.',
    variables: [
      { symbol: 'F_N', meaning: 'Normal clamping force per gripper finger (Newtons)' },
      { symbol: 'S_f', meaning: 'Safety factor (typically 1.5 to 2.5)' },
      { symbol: 'm', meaning: 'Payload mass (kg)' },
      { symbol: '\\mu', meaning: 'Coefficient of friction between jaws and object' },
      { symbol: 'n', meaning: 'Number of friction contact surfaces per finger (typically 1)' }
    ],
    examTip: 'Factor of 2 in the denominator accounts for two opposing gripper jaws providing frictional resistance on both sides!',
    gateTrapAlert: 'Remember to add robot dynamic acceleration a to gravity g if the robot accelerates vertically upwards.'
  },
  {
    id: 'f-ra-encoder-res',
    paper: 'RA',
    subject: 'Basics of Mechatronics',
    category: 'Sensors & Transducers',
    title: 'Quadrature Optical Encoder Angular Resolution',
    formulaLatex: '\\Delta\\theta = \\frac{360^\\circ}{4 \\times \\text{PPR}} = \\frac{2\\pi}{4 \\times \\text{PPR}} \\text{ radians/count}',
    description: 'Resolution achieved by 4X quadrature decoding on two out-of-phase channels A and B.',
    variables: [
      { symbol: '\\text{PPR}', meaning: 'Pulses per revolution on code disk' },
      { symbol: '4 \\times \\text{PPR}', meaning: 'Total quadrature counts per shaft revolution' }
    ],
    examTip: 'Quadrature decoding evaluates both rising and falling edges of channels A and B, effectively multiplying resolution by 4.',
    gateTrapAlert: 'If question does NOT state 4X quadrature, basic resolution is 360 / PPR.'
  },
  {
    id: 'f-ra-dc-motor',
    paper: 'RA',
    subject: 'Basics of Mechatronics',
    category: 'Actuators',
    title: 'DC Motor Armature Equation & Mechanical Torque',
    formulaLatex: 'V_t = E_b + I_a R_a = K_b \\omega + I_a R_a, \\quad T_e = K_t I_a \\quad [K_t = K_b \\text{ in SI units}]',
    description: 'Coupled electrical-mechanical governing equations for permanent magnet DC servomotors.',
    variables: [
      { symbol: 'V_t', meaning: 'Terminal voltage (V)' },
      { symbol: 'E_b', meaning: 'Back-EMF induced by rotor rotation (V)' },
      { symbol: 'K_b', meaning: 'Back-EMF constant (V/(rad/s))' },
      { symbol: 'K_t', meaning: 'Torque constant (N·m/A)' },
      { symbol: 'R_a, I_a', meaning: 'Armature resistance and current' }
    ],
    examTip: 'At stall (\\omega = 0), back-EMF E_b = 0 and current reaches maximum: I_stall = V_t / R_a.',
    gateTrapAlert: 'Ensure \\omega is in rad/s, not RPM. Convert with \\omega = 2\\pi N / 60.'
  },
  {
    id: 'f-ra-second-order-ctrl',
    paper: 'RA',
    subject: 'Engineering Common & Control',
    category: 'Control Systems',
    title: 'Standard Second-Order System Dynamics',
    formulaLatex: 'T(s) = \\frac{\\omega_n^2}{s^2 + 2\\zeta \\omega_n s + \\omega_n^2}, \\quad M_p = e^{-\\frac{\\pi \\zeta}{\\sqrt{1-\\zeta^2}}} \\times 100\\%, \\quad t_s(2\\%) = \\frac{4}{\\zeta \\omega_n}',
    description: 'Transient response parameters for underdamped closed-loop control systems (0 < \\zeta < 1).',
    variables: [
      { symbol: '\\zeta', meaning: 'Damping ratio (0 < \\zeta < 1 for oscillatory underdamped)' },
      { symbol: '\\omega_n', meaning: 'Undamped natural angular frequency (rad/s)' },
      { symbol: 'M_p', meaning: 'Percentage maximum peak overshoot' },
      { symbol: 't_s', meaning: 'Settling time for 2% tolerance band (or 3 / (\\zeta \\omega_n) for 5%)' }
    ],
    examTip: 'For \\zeta = 0.707 (optimal damping), peak overshoot is approximately 4.3%, and peak time is \\pi / \\omega_d.',
    gateTrapAlert: 'Check if question asks for 2% or 5% settling time tolerance band!'
  },
  {
    id: 'f-ra-routh-hurwitz',
    paper: 'RA',
    subject: 'Engineering Common & Control',
    category: 'Control Systems',
    title: 'Routh-Hurwitz Stability Criterion',
    formulaLatex: 'q(s) = a_0 s^n + a_1 s^{n-1} + \\dots + a_n = 0, \\quad b_1 = \\frac{a_1 a_2 - a_0 a_3}{a_1}, \\quad c_1 = \\frac{b_1 a_3 - a_1 b_2}{b_1}',
    description: 'Determines whether any roots of characteristic polynomial have non-negative real parts without factoring.',
    variables: [
      { symbol: 'q(s)', meaning: 'Closed-loop characteristic equation' },
      { symbol: 'b_1, c_1', meaning: 'Routh array first-column coefficients' }
    ],
    conditionsOrBounds: 'System is BIBO stable iff all elements in the first column of the Routh array are strictly positive.',
    examTip: 'The number of sign changes in the first column equals the exact number of roots with positive real parts (unstable poles in RHP).',
    gateTrapAlert: 'A row of all zeros indicates roots symmetric about the origin (pairs of real roots +-\\sigma or imaginary roots +-j\\omega).'
  },
  {
    id: 'f-ra-steady-state-err',
    paper: 'RA',
    subject: 'Engineering Common & Control',
    category: 'Control Systems',
    title: 'Steady-State Error Constants ($K_p, K_v, K_a$)',
    formulaLatex: 'e_{ss} = \\lim_{s \\to 0} \\frac{s R(s)}{1 + G(s)H(s)}, \\quad K_p = \\lim_{s\\to 0} G(s)H(s), \\quad K_v = \\lim_{s\\to 0} s G(s)H(s), \\quad K_a = \\lim_{s\\to 0} s^2 G(s)H(s)',
    description: 'Quantifies tracking accuracy for step, ramp, and parabolic inputs based on system type number.',
    variables: [
      { symbol: 'K_p', meaning: 'Position error constant (finite for Type 0; \\infty for Type 1+)' },
      { symbol: 'K_v', meaning: 'Velocity error constant (finite for Type 1)' },
      { symbol: 'K_a', meaning: 'Acceleration error constant (finite for Type 2)' }
    ],
    examTip: 'Type 0: finite error to Step (1/(1+Kp)), \\infty to Ramp. Type 1: 0 error to Step, finite to Ramp (1/Kv). Type 2: 0 error to Step & Ramp, finite to Parabola (1/Ka).',
    gateTrapAlert: 'Type number is the number of pure poles at s = 0 in open loop G(s)H(s), not closed-loop T(s).'
  },
  {
    id: 'f-ra-mohrs-circle',
    paper: 'RA',
    subject: 'Engineering Common & Mechanics',
    category: 'Mechanics of Materials',
    title: 'Plane Stress Transformation & Mohr’s Circle',
    formulaLatex: '\\sigma_{1,2} = \\frac{\\sigma_x + \\sigma_y}{2} \\pm \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}, \\quad \\tau_{max} = R = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2}',
    description: 'Graphical and analytical formulation for principal normal and maximum in-plane shear stresses.',
    variables: [
      { symbol: '\\sigma_1, \\sigma_2', meaning: 'Major and minor principal normal stresses' },
      { symbol: '\\tau_{max}', meaning: 'Maximum in-plane shear stress (radius of Mohr’s circle)' },
      { symbol: 'C', meaning: 'Center of Mohr’s circle: ((\\sigma_x + \\sigma_y)/2, 0)' }
    ],
    examTip: 'The sum of normal stresses on any two perpendicular planes is an invariant: \\sigma_x + \\sigma_y = \\sigma_1 + \\sigma_2.',
    gateTrapAlert: 'Maximum absolute shear stress for 3D is \\tau_{abs,max} = (\\sigma_{max} - \\sigma_{min}) / 2. If \\sigma_1, \\sigma_2 have same sign, \\sigma_3 = 0 must be included!'
  },
  {
    id: 'f-ra-torsion-shaft',
    paper: 'RA',
    subject: 'Engineering Common & Mechanics',
    category: 'Mechanics of Materials',
    title: 'Torsion of Circular Shafts',
    formulaLatex: '\\frac{T}{J} = \\frac{\\tau}{r} = \\frac{G \\theta}{L}, \\quad J_{solid} = \\frac{\\pi d^4}{32}, \\quad \\tau_{max} = \\frac{16 T}{\\pi d^3}',
    description: 'Elastic shear stress distribution and angle of twist in circular robot drive shafts under torque.',
    variables: [
      { symbol: 'T', meaning: 'Applied twisting moment / torque (N·m)' },
      { symbol: 'J', meaning: 'Polar second moment of area (m^4)' },
      { symbol: '\\tau_{max}', meaning: 'Maximum shear stress at outer boundary r = d/2' },
      { symbol: 'G', meaning: 'Shear modulus / modulus of rigidity (Pa)' },
      { symbol: '\\theta', meaning: 'Angle of twist in radians' }
    ],
    examTip: 'Torsional stiffness k_t = T / \\theta = G J / L.',
    gateTrapAlert: 'Shear stress is ZERO at the neutral center line and varies linearly to maximum at the outer surface.'
  },
  {
    id: 'f-ra-euler-buckling',
    paper: 'RA',
    subject: 'Engineering Common & Mechanics',
    category: 'Mechanics of Materials',
    title: 'Euler Critical Buckling Load of Columns',
    formulaLatex: 'P_{cr} = \\frac{\\pi^2 E I}{(L_e)^2}, \\quad L_e = \\begin{cases} L & \\text{Pinned-Pinned} \\\\ 0.5 L & \\text{Fixed-Fixed} \\\\ 2.0 L & \\text{Fixed-Free (Cantilever)} \\\\ 0.707 L & \\text{Fixed-Pinned} \\end{cases}',
    description: 'Critical compressive axial load causing elastic instability in long slender columns and linkages.',
    variables: [
      { symbol: 'P_{cr}', meaning: 'Euler critical buckling load (Newtons)' },
      { symbol: 'I', meaning: 'Minimum area moment of inertia of the cross-section (m^4)' },
      { symbol: 'L_e', meaning: 'Effective buckling length dependent on support constraints' }
    ],
    examTip: 'Buckling always occurs about the axis with the MINIMUM moment of inertia I_min.',
    gateTrapAlert: 'Fixed-Free column has Le = 2L, cutting critical load to P_cr = \\pi^2 EI / (4L^2) — a 75% reduction compared to pinned-pinned!'
  },

  // ==========================================
  // DATA SCIENCE & ARTIFICIAL INTELLIGENCE (DA)
  // ==========================================
  {
    id: 'f-da-bayes',
    paper: 'DA',
    subject: 'Probability & Statistics',
    category: 'Probability',
    title: 'Bayes’ Theorem & Total Probability',
    formulaLatex: 'P(A \\mid B) = \\frac{P(B \\mid A) P(A)}{P(B)} = \\frac{P(B \\mid A) P(A)}{\\sum_{j=1}^k P(B \\mid A_j) P(A_j)}',
    description: 'Inverts conditional probabilities to compute posterior belief given new evidence.',
    variables: [
      { symbol: 'P(A \\mid B)', meaning: 'Posterior probability of hypothesis A given evidence B' },
      { symbol: 'P(B \\mid A)', meaning: 'Likelihood of observing evidence B under hypothesis A' },
      { symbol: 'P(A)', meaning: 'Prior probability of hypothesis A' },
      { symbol: 'P(B)', meaning: 'Total probability of evidence (marginal evidence probability)' }
    ],
    examTip: 'In medical test questions, False Positive Rate is 1 - Specificity, and True Positive Rate is Sensitivity.',
    gateTrapAlert: 'Base-rate fallacy: When disease prior P(D) is very tiny (e.g. 0.1%), even a 99% accurate test yields mostly false positives!'
  },
  {
    id: 'f-da-poisson',
    paper: 'DA',
    subject: 'Probability & Statistics',
    category: 'Probability Distributions',
    title: 'Poisson Distribution PMF, Mean & Variance',
    formulaLatex: 'P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad \\mathbb{E}[X] = \\lambda, \\quad \\text{Var}(X) = \\lambda',
    description: 'Models count of independent rare events occurring within a fixed time or space interval.',
    variables: [
      { symbol: '\\lambda', meaning: 'Average arrival rate / expected number of events' },
      { symbol: 'k', meaning: 'Observed count (k = 0, 1, 2, ...)' }
    ],
    conditionsOrBounds: 'Mean equals Variance for any Poisson distribution: \\mathbb{E}[X] = \\text{Var}(X) = \\lambda.',
    examTip: 'P(X = 0) = e^{-\\lambda}. Therefore, P(X \\ge 1) = 1 - e^{-\\lambda}.',
    gateTrapAlert: 'Ensure \\lambda is scaled to the exact time window asked (e.g., if arrival is 2/min, rate for 3 mins is \\lambda = 6).'
  },
  {
    id: 'f-da-normal-dist',
    paper: 'DA',
    subject: 'Probability & Statistics',
    category: 'Probability Distributions',
    title: 'Normal (Gaussian) Distribution & Standardization',
    formulaLatex: 'f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{(x - \\mu)^2}{2\\sigma^2}}, \\quad Z = \\frac{X - \\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)',
    description: 'Continuous symmetric bell-shaped distribution governed by Central Limit Theorem.',
    variables: [
      { symbol: '\\mu', meaning: 'Mean / Median / Mode' },
      { symbol: '\\sigma', meaning: 'Standard deviation' },
      { symbol: 'Z', meaning: 'Standard normal variable with mean 0 and variance 1' }
    ],
    examTip: 'Empirical Rule: P(\\mu - \\sigma \\le X \\le \\mu + \\sigma) \\approx 68.27\\%, P(\\mu \\pm 2\\sigma) \\approx 95.45\\%, P(\\mu \\pm 3\\sigma) \\approx 99.73\\%.',
    gateTrapAlert: 'Divide by standard deviation \\sigma in Z formula, NOT the variance \\sigma^2.'
  },
  {
    id: 'f-da-svd',
    paper: 'DA',
    subject: 'Linear Algebra',
    category: 'SVD & Dimensionality Reduction',
    title: 'Singular Value Decomposition (SVD)',
    formulaLatex: 'A_{m \\times n} = U_{m \\times m} \\Sigma_{m \\times n} V^T_{n \\times n}, \\quad \\sigma_i = \\sqrt{\\lambda_i(A^T A)}',
    description: 'Factorization decomposing any arbitrary matrix into left singular vectors, singular values, and right singular vectors.',
    variables: [
      { symbol: 'U', meaning: 'Orthonormal eigenvectors of A A^T (Left singular vectors)' },
      { symbol: 'V', meaning: 'Orthonormal eigenvectors of A^T A (Right singular vectors)' },
      { symbol: '\\Sigma', meaning: 'Diagonal matrix of singular values sorted in descending order: \\sigma_1 \\ge \\sigma_2 \\ge \\dots \\ge 0' }
    ],
    examTip: 'Eckart-Young-Mirsky Theorem: The best rank-k approximation of A in Frobenius norm is A_k = \\sum_{i=1}^k \\sigma_i u_i v_i^T.',
    gateTrapAlert: 'Moore-Penrose pseudo-inverse is A^+ = V \\Sigma^+ U^T. Watch the transposed order (V first, not U)!'
  },
  {
    id: 'f-da-pca',
    paper: 'DA',
    subject: 'Linear Algebra',
    category: 'PCA & Feature Extraction',
    title: 'Principal Component Analysis (PCA) & Variance Ratio',
    formulaLatex: 'C = \\frac{1}{n} X^T X, \\quad C v_i = \\lambda_i v_i, \\quad \\text{Explained Variance Ratio} = \\frac{\\lambda_k}{\\sum_{i=1}^d \\lambda_i}',
    description: 'Unsupervised linear technique identifying orthogonal axes of maximal variance in centered data.',
    variables: [
      { symbol: 'C', meaning: 'Sample covariance matrix of zero-centered data X' },
      { symbol: 'v_i', meaning: 'Principal directions (eigenvectors of covariance matrix)' },
      { symbol: '\\lambda_i', meaning: 'Variance along i-th principal component (eigenvalue)' }
    ],
    examTip: 'Total variance equals the trace of the covariance matrix: \\text{Tr}(C) = \\sum \\lambda_i.',
    gateTrapAlert: 'Data MUST be centered (zero mean) before performing PCA; otherwise the first component merely points towards the data mean.'
  },
  {
    id: 'f-da-ols',
    paper: 'DA',
    subject: 'Machine Learning',
    category: 'Supervised Learning',
    title: 'Ordinary Least Squares (OLS) Normal Equation',
    formulaLatex: '\\hat{\\theta} = (X^T X)^{-1} X^T y, \\quad J(\\theta) = \\frac{1}{2n} \\|X\\theta - y\\|_2^2',
    description: 'Analytical closed-form global minimum solution for multiple linear regression.',
    variables: [
      { symbol: 'X', meaning: 'Design matrix of size n x d (assumed full column rank d)' },
      { symbol: 'y', meaning: 'Target labels vector of size n x 1' },
      { symbol: '\\hat{\\theta}', meaning: 'Optimal parameter weight vector of size d x 1' }
    ],
    examTip: 'If (X^T X) is singular (multicollinearity / d > n), Ridge regularization solves it: \\hat{\\theta} = (X^T X + \\lambda I)^{-1} X^T y.',
    gateTrapAlert: 'Matrix dimensions: X^T X is d x d (invertible), while X X^T is n x n. Never write (X X^T)^{-1} X y!'
  },
  {
    id: 'f-da-f1-score',
    paper: 'DA',
    subject: 'Machine Learning',
    category: 'Model Evaluation',
    title: 'Precision, Recall & Harmonic Mean $F_1$-Score',
    formulaLatex: 'P = \\frac{\\text{TP}}{\\text{TP} + \\text{FP}}, \\quad R = \\frac{\\text{TP}}{\\text{TP} + \\text{FN}}, \\quad F_1 = 2 \\cdot \\frac{P \\cdot R}{P + R} = \\frac{2\\text{TP}}{2\\text{TP} + \\text{FP} + \\text{FN}}',
    description: 'Balanced performance metric for imbalanced classification tasks.',
    variables: [
      { symbol: 'P', meaning: 'Precision: exactness (how many selected items are relevant)' },
      { symbol: 'R', meaning: 'Recall / Sensitivity: completeness (how many relevant items were selected)' },
      { symbol: 'F_1', meaning: 'Harmonic mean penalizing extreme disparities between P and R' }
    ],
    examTip: 'Harmonic mean is always closer to the smaller of P and R. If P = 1.0 and R = 0.0, F_1 is 0, whereas arithmetic mean would misleadingly report 0.5.',
    gateTrapAlert: 'Denominator of Precision is predicted positives (TP + FP); denominator of Recall is actual positives (TP + FN).'
  },
  {
    id: 'f-da-a-star',
    paper: 'DA',
    subject: 'Artificial Intelligence',
    category: 'Search & Heuristics',
    title: 'A* Search Evaluation Function & Consistency',
    formulaLatex: 'f(n) = g(n) + h(n), \\quad h(n) \\le c(n, a, n\') + h(n\') \\; \\text{(Consistency / Triangle Inequality)}',
    description: 'Informed graph search algorithm finding least-cost paths.',
    variables: [
      { symbol: 'g(n)', meaning: 'Exact known cost from start state to current node n' },
      { symbol: 'h(n)', meaning: 'Estimated heuristic cost from node n to nearest goal state' },
      { symbol: 'h^*(n)', meaning: 'True optimal cost from n to goal' }
    ],
    conditionsOrBounds: 'Admissibility: h(n) <= h*(n). Consistency: h(n) <= c(n, a, n\') + h(n\'). Consistency implies Admissibility.',
    examTip: 'Under tree search, admissibility guarantees optimal path. Under graph search with closed set, consistency guarantees optimal path without node re-opening!',
    gateTrapAlert: 'If h(n) = 0 for all nodes, A* degenerates into Dijkstra’s / Uniform Cost Search.'
  }
];
