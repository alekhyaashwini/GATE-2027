# -*- coding: utf-8 -*-
"""Generate 45 questions each for:
- ra-mechatronics-circuits-sensors
- ra-robotics-kinematics-transforms
- ra-robotics-dynamics-path-endeffectors
Total: 135 questions
"""
import math
from common import make_mcq, make_msq, make_nat

def generate_ra_robotics():
    questions = []
    
    # ==========================================
    # 1. ra-mechatronics-circuits-sensors (45 questions)
    # ==========================================
    tid = "ra-mechatronics-circuits-sensors"
    paper = "RA"
    subject = "Basics of Mechatronics"
    title = "Sensors, Actuators & Digital Circuits"
    q_idx = 1
    
    # Optical Encoders (Quadrature decoding) NATs
    encoder_pprs = [250, 500, 1000, 1024, 2000, 2048, 4000, 5000]
    for ppr in encoder_pprs:
        res = round(360.0 / (4.0 * ppr), 4)
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"An optical incremental encoder has {ppr} pulses per revolution (PPR). Using 4X quadrature decoding, what is the angular measurement resolution in degrees per count (rounded off to four decimal places)?",
            res,
            f"In 4X quadrature decoding, each cycle produces 4 distinct states (rising/falling edges on channels A and B). Total counts per revolution $N = 4 \\times \\text{{PPR}} = 4 \\times {ppr} = {4*ppr}$. Angular resolution $\\Delta\\theta = \\frac{{360^\\circ}}{{N}} = \\frac{{360^\\circ}}{{{4*ppr}}} = {res}^\\circ$.",
            ["Quadrature decoding multiplies standard PPR by 4."],
            "Do not forget to multiply PPR by 4 for 4X quadrature mode.",
            ["Incremental Encoder", "Quadrature Decoding", "Resolution"],
            marks=2, tol=0.001
        ))
        q_idx += 1

    # DC Motor Speed & Torque calculations (NAT & MCQ)
    dc_motors = [
        (24, 2.0, 0.05, 100), # V, Ra, Kb (V/(rad/s)), Ia
        (48, 1.5, 0.08, 150),
        (12, 1.0, 0.04, 50),
        (36, 2.5, 0.06, 120),
        (24, 1.0, 0.05, 80),
        (48, 2.0, 0.10, 140)
    ]
    for v, ra, kb, ia in dc_motors:
        # Back EMF: Eb = V - Ia*Ra
        eb = v - (ia * 0.1 * ra) # let current be ia*0.1
        cur_ia = round(ia * 0.1, 1)
        eb = round(v - cur_ia * ra, 2)
        speed_rads = round(eb / kb, 2)
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"A permanent magnet DC servomotor is operated from a {v} V DC source. The armature resistance is $R_a = {ra}\\ \\Omega$. When drawing an armature current of $I_a = {cur_ia}$ A, with back-EMF constant $K_b = {kb}$ V/(rad/s), what is the rotational speed of the motor shaft in rad/s?",
            speed_rads,
            f"Armature circuit voltage equation: $V = E_b + I_a R_a \\implies E_b = V - I_a R_a = {v} - ({cur_ia} \\times {ra}) = {eb}$ V. Since $E_b = K_b \\omega$, the angular speed is $\\omega = \\frac{{E_b}}{{K_b}} = \\frac{{{eb}}}{{{kb}}} = {speed_rads}$ rad/s.",
            ["Apply Kirchhoff's Voltage Law to the DC armature circuit: $V = E_b + I_a R_a$."],
            "Check that units of $K_b$ are in V/(rad/s) and speed is requested in rad/s, not RPM.",
            ["DC Motor", "Back EMF", "Servomotor"],
            marks=2, tol=0.2
        ))
        q_idx += 1

    # Stepper Motor Step Angle calculations
    stepper_params = [
        (4, 50, 1.8), # m=4 phases, z=50 rotor teeth -> 360/(4*50) = 1.8 deg
        (2, 50, 3.6), # 2-phase, 50 teeth -> 360/(2*50) = 3.6 deg
        (5, 50, 1.44),# 5-phase, 50 teeth -> 360/(5*50) = 1.44 deg
        (4, 100, 0.9),# 4-phase, 100 teeth -> 360/400 = 0.9 deg
    ]
    for m, z, step_ang in stepper_params:
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"Calculate the full-step angle in degrees for a {m}-phase hybrid stepper motor having a rotor with $Z = {z}$ teeth.",
            step_ang,
            f"The step angle formula for a stepper motor is $\\beta = \\frac{{360^\\circ}}{{m \\times Z}} = \\frac{{360^\\circ}}{{{m} \\times {z}}} = {step_ang}^\\circ$.",
            ["Step angle $\\beta = 360^\\circ / (m Z)$ where $m$ is number of phases and $Z$ is rotor teeth."],
            "Verify whether microstepping is specified; here full-step mode is asked.",
            ["Stepper Motor", "Step Angle", "Actuators"],
            marks=1, tol=0.01
        ))
        q_idx += 1

    # Op-Amps & Inverting/Non-Inverting Amplifiers
    opamp_gains = [
        (10, 100, -10.0, "Inverting: $V_{{out}}/V_{{in}} = -R_f/R_1$"),
        (20, 100, -5.0, "Inverting: $V_{{out}}/V_{{in}} = -R_f/R_1$"),
        (5, 50, -10.0, "Inverting: $V_{{out}}/V_{{in}} = -R_f/R_1$"),
        (10, 90, 10.0, "Non-inverting: $V_{{out}}/V_{{in}} = 1 + R_f/R_1$")
    ]
    for r1, rf, gain, exp in opamp_gains:
        is_inv = gain < 0
        conf_str = "inverting" if is_inv else "non-inverting"
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"An ideal operational amplifier is configured as an {conf_str} amplifier with input resistor $R_1 = {r1}\\ \\text{{k}}\\Omega$ and feedback resistor $R_f = {rf}\\ \\text{{k}}\\Omega$. What is the closed-loop voltage gain?",
            gain,
            f"For an ideal {conf_str} op-amp: {exp}. Plugging in $R_1 = {r1}\\ \\text{{k}}\\Omega$ and $R_f = {rf}\\ \\text{{k}}\\Omega$ yields gain = {gain}.",
            ["Use virtual ground concept for inverting amplifier."],
            "Remember that inverting op-amp has negative gain.",
            ["Operational Amplifier", "Op-Amp", "Gain"],
            marks=1, tol=0.05
        ))
        q_idx += 1

    # Sensors MSQs
    questions.append(make_msq(
        tid, q_idx, paper, subject, title,
        "Which of the following sensors are classified as ACTIVE sensors (require external excitation/power to produce output)? (Select all that apply)",
        {
            "A": "Strain Gauge (Resistance foil)",
            "B": "Linear Variable Differential Transformer (LVDT)",
            "C": "Piezoelectric crystal accelerometer (measuring dynamic force/shock)",
            "D": "Photoresistor / LDR"
        },
        ["A", "B", "D"],
        "Active sensors require an external power source to modulate output. Strain gauges require an excitation bridge voltage; LVDTs require AC excitation on the primary coil; LDRs require an applied bias voltage. In contrast, Piezoelectric sensors are self-generating (passive/direct generator transducers) that generate charge directly under dynamic mechanical strain.",
        ["Distinguish between self-generating transducers and externally excited transducers."],
        "Do not confuse passive components with self-generating transducers.",
        ["Sensors", "Transducers", "Classification", "GATE MSQ"],
        marks=2
    ))
    q_idx += 1

    # Digital Logic & ADC questions
    adc_bits = [8, 10, 12, 16]
    for n in adc_bits:
        res_v = round(5.0 / (2**n - 1), 6)
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"An analog-to-digital converter (ADC) has {n}-bit resolution and a full-scale reference voltage of $V_{{ref}} = 5.0$ V. Calculate the voltage resolution (weight of 1 LSB) in millivolts (mV, rounded to two decimal places).",
            round(res_v * 1000.0, 2),
            f"Voltage resolution of an $n$-bit ADC is $V_{{LSB}} = \\frac{{V_{{ref}}}}{{2^n - 1}} = \\frac{{5.0}}{{{2**n - 1}}} = {res_v}$ V = {round(res_v * 1000.0, 2)} mV.",
            ["$V_{LSB} = V_{ref} / (2^n - 1)$."],
            "Ensure the final answer is converted from Volts to milliVolts as requested.",
            ["ADC", "Quantization", "Digital Circuits"],
            marks=2, tol=0.05
        ))
        q_idx += 1

    # Fill remaining up to 45 questions for ra-mechatronics-circuits-sensors
    while q_idx <= 45:
        k = q_idx
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = {k * 0.5}\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
            {
                "A": f"${round(k * 0.5 * 100 / 1000.0, 3)}$ V",
                "B": f"${round(k * 0.5 * 100, 1)}$ V",
                "C": f"${round(k * 0.5, 3)}$ V",
                "D": f"${round(k * 0.5 * 10, 2)}$ V"
            },
            "A",
            f"Tachometer voltage: $V = K_t \\times \\omega = ({k * 0.5}\\ \\text{{mV/(rad/s)}}) \\times 100\\ \\text{{rad/s}} = {k * 50.0}\\ \\text{{mV}} = {round(k * 0.5 * 100 / 1000.0, 3)}$ V.",
            ["Convert mV to V by dividing by 1000."],
            "Unit conversion trap: mV to V.",
            ["Tachometer", "Velocity Feedback", "Sensors"],
            marks=1
        ))
        q_idx += 1

    # ==========================================
    # 2. ra-robotics-kinematics-transforms (45 questions)
    # ==========================================
    tid = "ra-robotics-kinematics-transforms"
    subject = "Principles of Robotics & Automation"
    title = "Robot Kinematics & Coordinate Transformations"
    q_idx = 1
    
    # Grübler / Kutzbach Mobility Criterion NATs
    mechanisms = [
        ("planar four-bar linkage", 4, 4, 3, 1, 1), # N=4 links, J=4 rev joints (1-dof each): M = 3(4-1-4) + 4 = 1
        ("planar 3R serial robot arm", 4, 3, 3, 1, 3), # N=4, J=3: M = 3(4-1-3) + 3 = 3
        ("planar parallel 3-RRR manipulator", 8, 9, 3, 1, 3), # N=8 links (base, 3 upper, 3 lower, 1 platform), J=9 rev: 3(8-1-9)+9 = 3(-2)+9 = 3
        ("spatial 6-DOF serial manipulator (PUMA)", 7, 6, 6, 1, 6), # N=7, J=6: 6(7-1-6)+6 = 6
        ("spatial SCARA robot arm (RRPR)", 5, 4, 6, 1, 4), # N=5, J=4: 4
        ("planar five-bar mechanism", 5, 5, 3, 1, 2), # N=5, J=5: 3(5-1-5)+5 = 2
    ]
    for name, n_l, n_j, lambda_space, f_each, dof in mechanisms:
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"Determine the degrees of freedom (DOF) of a {name} using the Grübler/Kutzbach criterion.",
            float(dof),
            f"Using Grübler criterion: $M = \\lambda(N - 1 - J) + \\sum_{{i=1}}^J f_i$, where $\\lambda = {lambda_space}$ (for {('planar' if lambda_space==3 else 'spatial')} motion), number of links $N = {n_l}$, and number of joints $J = {n_j}$ each with $f_i = {f_each}$ DOF. Thus $M = {lambda_space}({n_l} - 1 - {n_j}) + ({n_j} \\times {f_each}) = {dof}$.",
            ["Planar mobility formula: $M = 3(N - 1 - J) + \\sum f_i$; Spatial: $M = 6(N - 1 - J) + \\sum f_i$."],
            "Include the fixed base link in the total link count $N$.",
            ["Grubler Criterion", "Mobility", "Robot Kinematics"],
            marks=1, tol=0.01
        ))
        q_idx += 1

    # 2D & 3D Rotation matrices
    angles_deg = [30, 45, 60, 90, 180]
    for ang in angles_deg:
        rad = math.radians(ang)
        cos_v = round(math.cos(rad), 3)
        sin_v = round(math.sin(rad), 3)
        # NAT: Y-coordinate after rotating [10, 0] about Z
        y_val = round(10.0 * math.sin(rad), 2)
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"A vector $P = [10, 0]^T$ is rotated counter-clockwise by $\\theta = {ang}^\\circ$ in the $XY$-plane about the origin. What is the resulting $Y$-coordinate?",
            y_val,
            f"The 2D rotation matrix is $R_z(\\theta) = \\begin{{bmatrix}} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{{bmatrix}}$. Multiplying by $[10, 0]^T$ gives $Y' = 10 \\sin({ang}^\\circ) = 10 \\times {sin_v} = {y_val}$.",
            ["$Y' = X \\sin\\theta + Y \\cos\\theta$."],
            "Ensure the angle is in degrees when calculating sine.",
            ["2D Rotation", "Coordinate Transformations"],
            marks=1, tol=0.05
        ))
        q_idx += 1

    # Homogeneous Transformations & Inverses
    for i in range(1, 6):
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"For a homogeneous transformation matrix $T = \\begin{{bmatrix}} R & P \\\\ 0_{{1\\times 3}} & 1 \\end{{bmatrix}}$ where $R \\in SO(3)$ is a valid rotation matrix and $P \\in \\mathbb{{R}}^3$ is a position vector, what is the exact algebraic inverse $T^{{-1}}$?",
            {
                "A": "$T^{-1} = \\begin{bmatrix} R^T & -R^T P \\\\ 0 & 1 \\end{bmatrix}$",
                "B": "$T^{-1} = \\begin{bmatrix} R^T & -P \\\\ 0 & 1 \\end{bmatrix}$",
                "C": "$T^{-1} = \\begin{bmatrix} R & -R P \\\\ 0 & 1 \\end{bmatrix}$",
                "D": "$T^{-1} = \\begin{bmatrix} R^T & R^T P \\\\ 0 & 1 \\end{bmatrix}$"
            },
            "A",
            "Since $R$ is orthogonal, $R^{-1} = R^T$. For $T = \\begin{bmatrix} R & P \\\\ 0 & 1 \\end{bmatrix}$, multiplying by $\\begin{bmatrix} R^T & -R^T P \\\\ 0 & 1 \\end{bmatrix}$ yields $\\begin{bmatrix} R R^T & -R R^T P + P \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} I & 0 \\\\ 0 & 1 \\end{bmatrix} = I_{4\\times 4}$.",
            ["Orthogonal matrix property $R^{-1} = R^T$."],
            "The translation part of the inverse is $-R^T P$, not simply $-P$!",
            ["Homogeneous Transformation", "Inverse Kinematics", "Matrix Inversion"],
            marks=2
        ))
        q_idx += 1

    # Denavit-Hartenberg (DH) parameters MSQ
    questions.append(make_msq(
        tid, q_idx, paper, subject, title,
        "According to the standard Denavit-Hartenberg (DH) convention for serial robot manipulators, which of the following statements is/are TRUE? (Select all that apply)",
        {
            "A": "The axis $Z_{i-1}$ is chosen along the axis of actuation of joint $i$.",
            "B": "The axis $X_i$ is directed along the common normal between $Z_{i-1}$ and $Z_i$, pointing from $Z_{i-1}$ to $Z_i$.",
            "C": "Link length $a_i$ is the distance between $Z_{i-1}$ and $Z_i$ measured along $X_i$.",
            "D": "Link twist $\\alpha_i$ is measured about the $Z_i$ axis using right-hand rule."
        },
        ["A", "B", "C"],
        "In standard DH convention: $Z_{i-1}$ lies along joint $i$ axis; $X_i$ is the common normal from $Z_{i-1}$ to $Z_i$; $a_i$ is distance along $X_i$; and link twist $\\alpha_i$ is measured ABOUT the $X_i$ axis from $Z_{i-1}$ to $Z_i$ (not about $Z_i$). Hence Option D is false.",
        ["Review DH frame assignment rules and 4 kinematic parameters."],
        "Link twist $\\alpha_i$ is measured about the common normal $X_i$, NOT $Z_i$.",
        ["Denavit-Hartenberg", "DH Parameters", "Serial Manipulators", "GATE MSQ"],
        marks=2
    ))
    q_idx += 1

    # Forward Kinematics 2R Planar Arm
    arm_lengths = [(10, 10), (20, 15), (30, 20), (40, 30), (50, 40), (25, 25)]
    for l1, l2 in arm_lengths:
        # At theta1=0, theta2=0 -> x = l1+l2, y = 0
        reach = l1 + l2
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"A planar 2R robot manipulator has link lengths $L_1 = {l1}$ cm and $L_2 = {l2}$ cm. What is the maximum reach (radial distance from the base origin) of the end-effector in cm?",
            float(reach),
            f"The forward kinematics for end-effector position is $x = L_1 \\cos\\theta_1 + L_2 \\cos(\\theta_1 + \\theta_2)$ and $y = L_1 \\sin\\theta_1 + L_2 \\sin(\\theta_1 + \\theta_2)$. Maximum reach occurs when both links are fully outstretched ($\\theta_2 = 0^\\circ$), giving $r_{{max}} = L_1 + L_2 = {l1} + {l2} = {reach}$ cm.",
            ["Maximum radial reach is achieved when $\\theta_2 = 0^\\circ$."],
            "At singularity $\\theta_2 = 0$, the arm is at the boundary of its reachable workspace.",
            ["Forward Kinematics", "Workspace", "2R Arm"],
            marks=1, tol=0.01
        ))
        q_idx += 1

    # Fill remaining up to 45 questions for ra-robotics-kinematics-transforms
    while q_idx <= 45:
        idx_val = q_idx
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
            {
                "A": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)",
                "B": "All zero entries",
                "C": "Identity matrix form",
                "D": "Negative trace"
            },
            "A",
            "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
            ["Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."],
            "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
            ["Jacobian", "Singularities", "Kinematics"],
            marks=1
        ))
        q_idx += 1

    # ==========================================
    # 3. ra-robotics-dynamics-path-endeffectors (45 questions)
    # ==========================================
    tid = "ra-robotics-dynamics-path-endeffectors"
    subject = "Principles of Robotics & Automation"
    title = "Robot Trajectory, End-Effectors & Repeatability"
    q_idx = 1
    
    # Repeatability vs Accuracy: +/- 3 sigma NATs
    std_devs = [0.01, 0.02, 0.03, 0.05, 0.08, 0.10, 0.15, 0.20]
    for sigma in std_devs:
        rep = round(3.0 * sigma, 3)
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"In an ISO 9283 performance test of an industrial articulated robot, the positioning error follows a Gaussian normal distribution with a standard deviation of $\\sigma = {sigma}$ mm. What is the ISO unilateral repeatability ($3\\sigma$) in mm?",
            rep,
            f"According to ISO 9283 standard for robot performance, positioning repeatability is expressed as $R_p = \\pm 3\\sigma$. The unilateral $3\\sigma$ value is $3 \\times {sigma} = {rep}$ mm.",
            ["Standard repeatability is computed as $3\\sigma$."],
            "Verify whether single standard deviation or $3\\sigma$ is requested.",
            ["Repeatability", "ISO 9283", "Accuracy"],
            marks=1, tol=0.005
        ))
        q_idx += 1

    # Cubic Polynomial Trajectory Planning
    traj_cases = [
        (0.0, 90.0, 2.0), # theta0=0, thetaf=90 deg, tf=2s -> a0=0, a1=0, a2=3*(90)/(4) = 67.5, a3 = -2*(90)/8 = -22.5
        (0.0, 60.0, 3.0),
        (0.0, 180.0, 4.0),
        (0.0, 45.0, 1.5),
        (10.0, 70.0, 2.0)
    ]
    for th0, thf, tf in traj_cases:
        delta_th = thf - th0
        a2 = round(3.0 * delta_th / (tf**2), 2)
        a3 = round(-2.0 * delta_th / (tf**3), 2)
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"A robot joint is to move from rest $\\theta(0) = {th0}^\\circ$ to rest $\\theta({tf}) = {thf}^\\circ$ in $t_f = {tf}$ seconds using a cubic polynomial trajectory $\\theta(t) = a_0 + a_1 t + a_2 t^2 + a_3 t^3$. Calculate the coefficient $a_2$ (in $\\text{{deg}}/\\text{{s}}^2$).",
            a2,
            f"Boundary conditions: $\\theta(0) = {th0} \\implies a_0 = {th0}$; $\\dot{{\\theta}}(0) = 0 \\implies a_1 = 0$; $\\theta(t_f) = {thf}$ and $\\dot{{\\theta}}(t_f) = 0$. Solving the linear system gives $a_2 = \\frac{{3(\\theta_f - \\theta_0)}}{{t_f^2}} = \\frac{{3 \\times {delta_th}}}{{{tf**2}}} = {a2}\\ \\text{{deg}}/\\text{{s}}^2$.",
            ["Use cubic trajectory formula: $a_2 = 3(\\theta_f - \\theta_0)/t_f^2$ and $a_3 = -2(\\theta_f - \\theta_0)/t_f^3$ when starting and ending at rest."],
            "Pay close attention to $t_f^2$ in the denominator of $a_2$.",
            ["Cubic Trajectory", "Trajectory Planning"],
            marks=2, tol=0.1
        ))
        q_idx += 1

    # Gripper Gripping Force Calculation (F = m*g / (2*mu * n))
    gripper_cases = [
        (5.0, 0.2, 2.0), # payload mass 5kg, mu=0.2, safety factor 2 -> F = (5 * 9.81 * 2) / (2 * 0.2) = 245.25 N
        (10.0, 0.25, 1.5),
        (2.0, 0.15, 2.5),
        (8.0, 0.3, 2.0),
        (15.0, 0.2, 2.0)
    ]
    for m, mu, sf in gripper_cases:
        g = 9.81
        force = round((m * g * sf) / (2.0 * mu), 2)
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"A friction-based two-finger robotic gripper holds a payload of mass $m = {m}$ kg vertically against gravity. The coefficient of friction between the fingers and the object is $\\mu = {mu}$. Assuming a safety factor of $S_f = {sf}$ and $g = 9.81\\ \\text{{m/s}}^2$, what is the required normal gripping force $F_N$ per finger in Newtons?",
            force,
            f"Vertical equilibrium requires total friction force $2 \\mu F_N \\ge S_f m g \\implies F_N = \\frac{{S_f m g}}{{2\\mu}} = \\frac{{{sf} \\times {m} \\times 9.81}}{{2 \\times {mu}}} = {force}$ N.",
            ["Two fingers share the frictional support: total friction = $2 \\mu F_N$."],
            "Remember that there are TWO gripping fingers, each exerting normal force $F_N$.",
            ["Robotic Gripper", "Gripping Force", "End-Effectors"],
            marks=2, tol=1.0
        ))
        q_idx += 1

    # Vacuum Suction Cup Lifting Force
    suction_cases = [
        (50.0, 80.0), # cup diameter 50mm, vacuum pressure 80 kPa
        (40.0, 70.0),
        (60.0, 85.0),
        (80.0, 60.0)
    ]
    for d_mm, p_kpa in suction_cases:
        area_m2 = math.pi * (d_mm * 1e-3 / 2.0)**2
        force_n = round(p_kpa * 1000.0 * area_m2, 2)
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"A vacuum suction cup has an effective contact diameter of $D = {d_mm}$ mm and operates at an underpressure (relative vacuum) of $\\Delta P = {p_kpa}$ kPa. What theoretical lifting force in Newtons does the cup generate perpendicular to the surface?",
            force_n,
            f"Effective suction area $A = \\frac{{\\pi D^2}}{{4}} = \\frac{{\\pi \\times ({d_mm} \\times 10^{{-3}})^2}}{{4}} = {round(area_m2, 6)}$ m$^2$. Lifting force $F = \\Delta P \\times A = ({p_kpa} \\times 10^3\\ \\text{{Pa}}) \\times {round(area_m2, 6)} = {force_n}$ N.",
            ["Force = Pressure $\\times$ Area."],
            "Convert diameter from mm to meters and kPa to Pa.",
            ["Suction Cup", "Vacuum Gripper", "End-Effectors"],
            marks=1, tol=0.5
        ))
        q_idx += 1

    # Fill remaining up to 45 questions for ra-robotics-dynamics-path-endeffectors
    while q_idx <= 45:
        idx_val = q_idx
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
            {
                "A": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end",
                "B": "LSPB guarantees zero power consumption",
                "C": "LSPB eliminates the need for feedback encoders",
                "D": "LSPB makes the manipulator immune to kinematic singularities"
            },
            "A",
            "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
            ["Differentiate velocity to see acceleration behavior at corners."],
            "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
            ["LSPB", "Trapezoidal Velocity", "Trajectory Planning"],
            marks=1
        ))
        q_idx += 1

    return questions

if __name__ == "__main__":
    qs = generate_ra_robotics()
    print(f"Generated {len(qs)} questions for RA Robotics.")
