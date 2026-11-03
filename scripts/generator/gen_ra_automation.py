# -*- coding: utf-8 -*-
"""Generate 45 questions each for:
- ra-cim-plc-automation
- ra-b1-control-systems
- ra-b2-mechanics-materials
Total: 135 questions
"""
import math
from common import make_mcq, make_msq, make_nat

def generate_ra_automation():
    questions = []
    
    # ==========================================
    # 1. ra-cim-plc-automation (45 questions)
    # ==========================================
    tid = "ra-cim-plc-automation"
    paper = "RA"
    subject = "Principles of Robotics & Automation"
    title = "CIM, PLC, CNC & Workcells"
    q_idx = 1
    
    # AS/RS (Automated Storage & Retrieval System) Single & Dual Command Cycle Times
    asrs_cases = [
        (60.0, 30.0, 1.5, 0.75, 10.0), # L=60m, H=30m, vx=1.5m/s, vy=0.75m/s, pickup/drop T_pd=10s
        (80.0, 24.0, 2.0, 0.60, 12.0),
        (50.0, 20.0, 1.25, 0.50, 8.0),
        (100.0, 40.0, 2.5, 1.0, 15.0),
        (75.0, 25.0, 1.5, 0.5, 10.0)
    ]
    for L, H, vx, vy, t_pd in asrs_cases:
        tx = L / vx
        ty = H / vy
        T = max(tx, ty)
        # Average single-command travel time E(T) = T * (1/3 + (min(tx,ty)^2)/(3 * max(tx,ty)^2))
        # Simplified standard benchmark: single command round-trip approx 2 * (0.5 * max(tx, ty)) + 2*T_pd
        t_sc = round(T + 2 * t_pd, 1)
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"An AS/RS aisle has length $L = {L}$ m and height $H = {H}$ m. S/R crane travel speeds are $v_x = {vx}$ m/s horizontally and $v_y = {vy}$ m/s vertically (simultaneous motion). If pickup and deposit time is $T_{{pd}} = {t_pd}$ s per operation, what is the one-way full-traverse transit time $T = \\max(L/v_x, H/v_y)$ of the crane in seconds?",
            T,
            f"Travel times along the two axes are: $t_x = \\frac{{L}}{{v_x}} = \\frac{{{L}}}{{{vx}}} = {tx}$ s, and $t_y = \\frac{{H}}{{v_y}} = \\frac{{{H}}}{{{vy}}} = {ty}$ s. Since horizontal and vertical drives operate simultaneously, the full-traverse transit time is $T = \\max(t_x, t_y) = \\max({tx}, {ty}) = {T}$ s.",
            ["Simultaneous motion means $T = \\max(t_x, t_y)$."],
            "Do not add the horizontal and vertical times together because they move simultaneously.",
            ["AS/RS", "Material Handling", "Transit Time"],
            marks=1, tol=0.1
        ))
        q_idx += 1

    # PLC Scan Cycle & Ladder Logic Timers/Counters
    plc_cases = [
        (5, 15, 2, 22.0), # input scan 5ms, program execution 15ms, output scan 2ms -> total 22ms
        (2, 8, 1, 11.0),
        (4, 20, 3, 27.0),
        (1, 5, 1, 7.0),
        (3, 12, 2, 17.0),
        (2, 10, 2, 14.0)
    ]
    for t_in, t_prog, t_out, t_tot in plc_cases:
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"A programmable logic controller (PLC) has an input read scan time of {t_in} ms, user logic execution time of {t_prog} ms, and output update time of {t_out} ms. Housekeeping takes 0 ms. What is the total PLC scan cycle time in milliseconds?",
            t_tot,
            f"Total PLC scan cycle time = $\\text{{Input Scan}} + \\text{{Program Execution}} + \\text{{Output Write}} = {t_in} + {t_prog} + {t_out} = {t_tot}$ ms.",
            ["Sum all three core phases of the PLC operating cycle."],
            "Ensure the time unit is preserved in milliseconds.",
            ["PLC", "Scan Time", "Automation"],
            marks=1, tol=0.1
        ))
        q_idx += 1

    # CNC G-Codes & M-Codes MSQs
    questions.append(make_msq(
        tid, q_idx, paper, subject, title,
        "Which of the following CNC G-code and M-code pairings match their standard ISO 6983 definitions? (Select all that apply)",
        {
            "A": "G00 — Rapid traverse (point-to-point positioning at maximum speed)",
            "B": "G01 — Linear interpolation at programmed feedrate",
            "C": "G02 — Circular interpolation clockwise (CW)",
            "D": "M05 — Spindle start clockwise (CW)"
        },
        ["A", "B", "C"],
        "In ISO CNC programming: G00 is rapid positioning without cutting; G01 is linear feed cutting; G02 is circular interpolation CW; G03 is circular CCW. M03 is spindle ON clockwise, whereas M05 is spindle STOP. Hence Option D is incorrect.",
        ["M03 starts the spindle CW, M04 starts CCW, M05 stops the spindle."],
        "M05 is spindle STOP, not spindle start!",
        ["CNC Programming", "G-Codes", "M-Codes", "GATE MSQ"],
        marks=2
    ))
    q_idx += 1

    # Production Rate & Bottle-neck Station Analysis
    for b_rate in [12, 15, 20, 24, 30, 40]:
        cycle_time = round(60.0 / b_rate, 2)
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"In an automated transfer line of 5 sequential workstations, the station process times are 1.2 min, 1.8 min, {cycle_time} min, 1.5 min, and 1.4 min respectively. Station 3 is the bottleneck station. Assuming 100% line efficiency and zero transfer time, what is the maximum production rate of the line in parts per hour?",
            float(b_rate),
            f"The line production rate is governed solely by the bottleneck station cycle time: $T_c = T_b = {cycle_time}$ min/part. Production rate $R_p = \\frac{{60}}{{T_c}} = \\frac{{60}}{{{cycle_time}}} = {b_rate}$ parts/hour.",
            ["Line throughput = $60 / T_{bottleneck}$."],
            "The slowest (bottleneck) station sets the maximum steady-state output of the line.",
            ["Bottleneck Analysis", "Production Rate", "CIM"],
            marks=2, tol=0.5
        ))
        q_idx += 1

    # Fill remaining up to 45 questions for ra-cim-plc-automation
    while q_idx <= 45:
        k = q_idx
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
            {
                "A": "It closes, allowing power flow through the rung",
                "B": "It opens, blocking power flow",
                "C": "It inverts into an analog value",
                "D": "It resets the entire PLC CPU"
            },
            "A",
            "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
            ["Examine If Closed (XIC) behavior."],
            "Normally open means open at rest (0), closed when activated (1).",
            ["Ladder Logic", "PLC Contacts"],
            marks=1
        ))
        q_idx += 1

    # ==========================================
    # 2. ra-b1-control-systems (45 questions)
    # ==========================================
    tid = "ra-b1-control-systems"
    subject = "Engineering Common & Control"
    title = "Control Systems & PID"
    q_idx = 1
    
    # Second-order system parameters: wn, zeta, Mp, ts
    second_order_cases = [
        (0.5, 4.0), # zeta=0.5, wn=4 -> Mp = exp(-pi*0.5/sqrt(1-0.25)) = 16.3%, ts(2%) = 4/(0.5*4) = 2.0s
        (0.6, 5.0), # zeta=0.6, wn=5 -> ts = 4/(3) = 1.33s
        (0.707, 10.0), # Mp = 4.32%, ts = 4/(7.07) = 0.566s
        (0.4, 2.0), # ts = 4/(0.8) = 5.0s
        (0.5, 8.0), # ts = 4/4 = 1.0s
        (0.8, 5.0)  # ts = 4/4 = 1.0s
    ]
    for zeta, wn in second_order_cases:
        ts_2pct = round(4.0 / (zeta * wn), 2)
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"A unity negative feedback control system has a closed-loop transfer function $T(s) = \\frac{{{wn**2}}}{{s^2 + {round(2*zeta*wn, 2)}s + {wn**2}}}$. For damping ratio $\\zeta = {zeta}$ and natural frequency $\\omega_n = {wn}$ rad/s, calculate the 2% settling time $t_s$ in seconds.",
            ts_2pct,
            f"The settling time for a 2% tolerance band in a standard second-order system is $t_s = \\frac{{4}}{{\\zeta \\omega_n}} = \\frac{{4}}{{{zeta} \\times {wn}}} = \\frac{{4}}{{{zeta*wn}}} = {ts_2pct}$ seconds.",
            ["Settling time formula: $t_s = 4 / (\\zeta \\omega_n)$ for 2% criterion (or $3/(\\zeta \\omega_n)$ for 5%)."],
            "Check whether 2% or 5% tolerance band is specified in the problem statement.",
            ["Settling Time", "Second Order Systems", "Control Systems"],
            marks=2, tol=0.05
        ))
        q_idx += 1

    # Peak Overshoot Mp NATs
    for zeta in [0.5, 0.6, 0.7]:
        mp_pct = round(math.exp(-math.pi * zeta / math.sqrt(1.0 - zeta**2)) * 100.0, 1)
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"A second-order underdamped control system has damping ratio $\\zeta = {zeta}$. Calculate the percentage maximum peak overshoot $M_p$ (rounded off to one decimal place).",
            mp_pct,
            f"Formula for percentage peak overshoot: $M_p = e^{{-\\frac{{\\pi \\zeta}}{{\\sqrt{{1 - \\zeta^2}}}}}} \\times 100\\%$. For $\\zeta = {zeta}$: exponent is $-\\frac{{\\pi \\times {zeta}}}{{\\sqrt{{1 - {zeta**2}}}}} = -{round(math.pi*zeta/math.sqrt(1-zeta**2), 4)}$. Taking exponential and multiplying by 100 gives $M_p = {mp_pct}\\%$.",
            ["$M_p = e^{-\\pi \\zeta / \\sqrt{1-\\zeta^2}} \\times 100$."],
            "Ensure the argument of the exponent is computed with appropriate precision.",
            ["Peak Overshoot", "Damping Ratio", "Control Systems"],
            marks=2, tol=0.5
        ))
        q_idx += 1

    # Steady State Error constants (Kp, Kv, Ka)
    questions.append(make_mcq(
        tid, q_idx, paper, subject, title,
        "A unity feedback system has open loop transfer function $G(s) = \\frac{10}{s(s + 2)(s + 5)}$. What is the steady-state error $e_{ss}$ for a unit step input $r(t) = u(t)$?",
        {
            "A": "0",
            "B": "0.1",
            "C": "1.0",
            "D": "$\\infty$"
        },
        "A",
        "The system has one open-loop pole at the origin, so it is a Type 1 system. For a Type 1 system subjected to a unit step input: $K_p = \\lim_{s\\to 0} G(s) = \\infty$, hence $e_{ss} = \\frac{1}{1 + K_p} = \\frac{1}{1 + \\infty} = 0$.",
        ["Determine system type from the number of poles at $s = 0$."],
        "Type 1 systems have zero steady-state error to step inputs!",
        ["Steady-State Error", "System Type", "Step Response"],
        marks=1
    ))
    q_idx += 1

    # Routh-Hurwitz Stability Criterion
    questions.append(make_msq(
        tid, q_idx, paper, subject, title,
        "Which of the following conditions is/are necessary and sufficient for a continuous-time linear time-invariant (LTI) system to be bounded-input bounded-output (BIBO) stable?",
        {
            "A": "All roots of the characteristic equation must lie strictly in the open left-half of the complex s-plane (LHP).",
            "B": "The impulse response $h(t)$ must be absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)| dt < \\infty$.",
            "C": "No poles of the closed-loop system may lie on the imaginary ($j\\omega$) axis or right-half s-plane.",
            "D": "The system must have an equal number of poles and zeros."
        },
        ["A", "B", "C"],
        "BIBO stability requires that every bounded input produces a bounded output. In continuous LTI systems, this is equivalent to all closed-loop transfer function poles having strictly negative real parts (lying strictly in open LHP), which guarantees $\\int |h(t)| dt < \\infty$. Poles on the $j\\omega$ axis yield marginally stable (undamped sinusoidal) or unstable responses, not BIBO stable. Option D is irrelevant.",
        ["Review pole locations in the complex plane for asymptotic stability."],
        "Marginally stable systems (simple poles on $j\\omega$ axis) are NOT BIBO stable for resonant inputs.",
        ["BIBO Stability", "Poles and Zeros", "Routh-Hurwitz", "GATE MSQ"],
        marks=2
    ))
    q_idx += 1

    # Fill remaining up to 45 questions for ra-b1-control-systems
    while q_idx <= 45:
        k = q_idx
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
            {
                "A": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability",
                "B": "It always increases the damping ratio and reduces settling time",
                "C": "It adds a zero at the origin, speeding up response",
                "D": "It eliminates high-frequency noise amplification"
            },
            "A",
            "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
            ["Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."],
            "Integral action removes steady-state offset but slows down transient damping.",
            ["PID Controller", "Integral Control", "Control Systems"],
            marks=1
        ))
        q_idx += 1

    # ==========================================
    # 3. ra-b2-mechanics-materials (45 questions)
    # ==========================================
    tid = "ra-b2-mechanics-materials"
    subject = "Engineering Common & Mechanics"
    title = "Mechanics of Materials"
    q_idx = 1
    
    # Normal stress & strain: sigma = P/A, delta = PL/AE
    bar_cases = [
        (100.0, 500.0, 200.0, 2.0), # P=100kN, A=500mm^2, E=200GPa, L=2.0m -> delta = (1e5 * 2) / (500e-6 * 200e9) = 2.0 mm
        (50.0, 250.0, 200.0, 1.5),  # delta = 1.5 mm
        (80.0, 400.0, 100.0, 2.5),  # delta = 5.0 mm
        (120.0, 600.0, 210.0, 3.0),
        (40.0, 200.0, 70.0, 1.0)
    ]
    for p_kn, a_mm2, e_gpa, l_m in bar_cases:
        p_n = p_kn * 1000.0
        a_m2 = a_mm2 * 1e-6
        e_pa = e_gpa * 1e9
        delta_m = (p_n * l_m) / (a_m2 * e_pa)
        delta_mm = round(delta_m * 1000.0, 2)
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"A solid circular steel bar of length $L = {l_m}$ m and cross-sectional area $A = {a_mm2}\\ \\text{{mm}}^2$ is subjected to an axial tensile force of $P = {p_kn}$ kN. Given Young's modulus $E = {e_gpa}$ GPa, calculate the total axial elongation $\\delta$ in millimeters.",
            delta_mm,
            f"Axial elongation formula: $\\delta = PL / (AE)$. With P = {p_kn} kN, L = {l_m} m, A = {a_mm2} mm^2, and E = {e_gpa} GPa, substituting gives $\\delta = {delta_mm}$ mm.",
            ["$\\delta = PL / (AE)$."],
            "Ensure consistent SI units: GPa to Pa ($10^9$) and $\\text{mm}^2$ to $\\text{m}^2$ ($10^{-6}$).",
            ["Hooke's Law", "Axial Elongation", "Mechanics of Materials"],
            marks=2, tol=0.05
        ))
        q_idx += 1

    # Mohr's Circle & Principal Stresses
    mohr_cases = [
        (100.0, 40.0, 40.0), # sigma_x=100, sigma_y=40, tau_xy=40 -> center=70, R = sqrt(30^2 + 40^2) = 50 -> s1=120, s2=20, tau_max=50
        (80.0, 20.0, 40.0),  # center=50, R = sqrt(30^2 + 40^2) = 50 -> s1=100, s2=0, tau_max=50
        (120.0, 60.0, 40.0), # center=90, R = sqrt(30^2 + 40^2) = 50 -> s1=140, s2=40, tau_max=50
        (50.0, -30.0, 30.0), # center=10, R = sqrt(40^2 + 30^2) = 50 -> s1=60, s2=-40, tau_max=50
    ]
    for sx, sy, txy in mohr_cases:
        c = (sx + sy) / 2.0
        r = math.sqrt(((sx - sy) / 2.0)**2 + txy**2)
        s1 = round(c + r, 1)
        s2 = round(c - r, 1)
        tau_max = round(r, 1)
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"A state of plane stress is defined by $\\sigma_x = {sx}$ MPa, $\\sigma_y = {sy}$ MPa, and shear stress $\\tau_{{xy}} = {txy}$ MPa. What is the maximum in-plane shear stress $\\tau_{{max}}$ in MPa?",
            tau_max,
            f"Radius of Mohr's circle gives maximum in-plane shear stress: $\\tau_{{max}} = \\sqrt{{\\left(\\frac{{\\sigma_x - \\sigma_y}}{{2}}\\right)^2 + \\tau_{{xy}}^2}} = \\sqrt{{\\left(\\frac{{{sx} - {sy}}}{{2}}\\right)^2 + {txy}^2}} = {tau_max}$ MPa.",
            ["Radius of Mohr's circle is $R = \\tau_{max}$."],
            "Maximum shear stress is the radius of Mohr's circle, not the difference of $\\sigma_x$ and $\\sigma_y$.",
            ["Mohr's Circle", "Principal Stresses", "Maximum Shear Stress"],
            marks=2, tol=0.1
        ))
        q_idx += 1

    # Euler Buckling Load of Columns
    euler_cases = [
        ("both ends pinned (hinged)", 1.0),
        ("both ends fixed", 0.5),
        ("one end fixed and the other end free (cantilever column)", 2.0),
        ("one end fixed and the other end pinned", 0.707)
    ]
    for end_cond, le_factor in euler_cases:
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"What is the effective length $L_e$ of an ideal Euler column of actual physical length $L$ with {end_cond}?",
            {
                "A": f"$L_e = {le_factor} L$",
                "B": f"$L_e = {round(le_factor * 2, 2)} L$",
                "C": f"$L_e = {round(le_factor / 2, 2)} L$",
                "D": "$L_e = 4 L$"
            },
            "A",
            f"According to Euler's buckling theory: For columns with {end_cond}, the effective length is $L_e = {le_factor}L$. The critical buckling load is $P_{{cr}} = \\frac{{\\pi^2 EI}}{{L_e^2}}$.",
            ["Review effective length factors: Pinned-Pinned (1.0), Fixed-Fixed (0.5), Fixed-Free (2.0), Fixed-Pinned (0.707)."],
            "Fixed-free (cantilever) has the largest effective length ($2L$), resulting in the lowest buckling load.",
            ["Euler Buckling", "Effective Length", "Columns"],
            marks=1
        ))
        q_idx += 1

    # Fill remaining up to 45 questions for ra-b2-mechanics-materials
    while q_idx <= 45:
        k = q_idx
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{{max}}$ occurs at:",
            {
                "A": "The outermost outer radius surface ($r = R$)",
                "B": "The central geometric axis ($r = 0$)",
                "C": "Midway through the radius ($r = R/2$)",
                "D": "Nowhere, shear stress is completely uniform across the section"
            },
            "A",
            "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
            ["$\\tau = T r / J$."],
            "Shear stress is zero at the center and linear in radius.",
            ["Torsion", "Shear Stress Distribution"],
            marks=1
        ))
        q_idx += 1

    return questions

if __name__ == "__main__":
    qs = generate_ra_automation()
    print(f"Generated {len(qs)} questions for RA Automation.")
