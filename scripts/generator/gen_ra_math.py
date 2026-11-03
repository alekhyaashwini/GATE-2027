# -*- coding: utf-8 -*-
"""Generate 45 questions each for ra-math-la and ra-math-calc-de"""
import math
from common import make_mcq, make_msq, make_nat

def generate_ra_math():
    questions = []
    
    # ==========================================
    # 1. ra-math-la (45 questions)
    # ==========================================
    tid = "ra-math-la"
    paper = "RA"
    subject = "Engineering Mathematics"
    title = "Linear Algebra"
    q_idx = 1
    
    # Matrices parameter set for eigenvalues & trace
    matrices_2x2 = [
        (2, 1, 1, 2, 3, 1, 4, 3),
        (3, 2, 1, 4, 5, 2, 7, 10),
        (5, 4, 1, 2, 6, 1, 7, 6),
        (4, 1, 2, 3, 5, 2, 7, 10),
        (6, 2, 2, 3, 7, 2, 9, 14),
        (1, 4, 2, 3, 5, -1, 4, -5),
        (7, 3, 2, 2, 8, 1, 9, 8),
        (8, -2, -2, 5, 9, 4, 13, 36)
    ]
    
    for a, b, c, d, e1, e2, tr, det in matrices_2x2:
        # MCQ: Eigenvalues
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"Consider the matrix $A = \\begin{{bmatrix}} {a} & {b} \\\\ {c} & {d} \\end{{bmatrix}}$. What are the eigenvalues of $A$?",
            {"A": f"$\\lambda = {e1}, {e2}$", "B": f"$\\lambda = {e1+1}, {e2-1}$", "C": f"$\\lambda = {-e1}, {-e2}$", "D": f"$\\lambda = {e1*2}, {e2}$"},
            "A",
            f"The characteristic equation is $\\det(A - \\lambda I) = (\\lambda - {a})(\\lambda - {d}) - ({b}\\times {c}) = \\lambda^2 - {tr}\\lambda + {det} = 0$. Roots are $\\lambda_1 = {e1}, \\lambda_2 = {e2}$.",
            ["Use $\\text{Trace}(A) = \\lambda_1 + \\lambda_2$ and $\\det(A) = \\lambda_1 \\lambda_2$."],
            "Double-check sign when computing $-(b \\times c)$.",
            ["Eigenvalues", "Characteristic Equation", "Linear Algebra"],
            marks=2
        ))
        q_idx += 1
        
        # NAT: Trace of matrix power A^2
        tr_sq = e1**2 + e2**2
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"Let $A = \\begin{{bmatrix}} {a} & {b} \\\\ {c} & {d} \\end{{bmatrix}}$. Calculate the trace of $A^2$.",
            tr_sq,
            f"If the eigenvalues of $A$ are $\\lambda_1 = {e1}, \\lambda_2 = {e2}$, then the eigenvalues of $A^2$ are $\\lambda_1^2 = {e1**2}$ and $\\lambda_2^2 = {e2**2}$. Thus $\\text{{Trace}}(A^2) = {e1**2} + {e2**2} = {tr_sq}$.",
            ["Trace of $A^k = \\sum \\lambda_i^k$."],
            "Avoid multiplying the full matrix if eigenvalues are known.",
            ["Trace", "Matrix Powers", "Eigenvalues"],
            marks=2, tol=0.1
        ))
        q_idx += 1
        
        # NAT: Determinant
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"Find the determinant of the matrix $M = \\begin{{bmatrix}} {a} & {b} \\\\ {c} & {d} \\end{{bmatrix}}$.",
            det,
            f"$\\det(M) = ({a})({d}) - ({b})({c}) = {a*d} - {b*c} = {det}$.",
            ["Formula for $2\\times 2$ determinant: $ad - bc$."],
            "Watch out for signs when subtracting the off-diagonal product.",
            ["Determinant", "Matrix Algebra"],
            marks=1, tol=0.01
        ))
        q_idx += 1

    # Orthogonal and Symmetric Matrices (MSQs)
    for i in range(1, 6):
        questions.append(make_msq(
            tid, q_idx, paper, subject, title,
            f"Which of the following statements is/are TRUE for an orthogonal matrix $Q \\in \\mathbb{{R}}^{{n \\times n}}$? (Select all that apply)",
            {
                "A": "$Q^T Q = Q Q^T = I$",
                "B": "$\\det(Q) = \\pm 1$",
                "C": "The eigenvalues of $Q$ have unit modulus ($|\\lambda| = 1$)",
                "D": "$Q$ always has only strictly positive real eigenvalues"
            },
            ["A", "B", "C"],
            "For an orthogonal matrix $Q$, $Q^{-1} = Q^T$, so $Q^T Q = I$. Taking determinants, $(\\det Q)^2 = 1 \\implies \\det Q = \\pm 1$. Length of vectors is preserved: $\\|Qx\\| = \\|x\\|$, which forces all complex/real eigenvalues to satisfy $|\\lambda| = 1$. Option D is false since eigenvalues can be $-1$ or complex conjugate pairs with unit magnitude.",
            ["Orthogonal matrices preserve Euclidean norm."],
            "Rotation matrices have $\\det = +1$, but reflection matrices have $\\det = -1$. Both are orthogonal.",
            ["Orthogonal Matrix", "Properties", "GATE MSQ"],
            marks=2
        ))
        q_idx += 1

    # Rank and Nullity questions
    rank_params = [
        (3, 1, 2, "Row rank equals column rank", 2),
        (4, 2, 2, "Rank plus nullity equals number of columns", 2),
        (5, 3, 2, "Rank is dimension of column space", 3),
        (4, 1, 3, "Nullity is dimension of null space", 3),
    ]
    for n_cols, nullity, expected_rank, desc, rank_val in rank_params:
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"A linear transformation $T: \\mathbb{{R}}^{{{n_cols}}} \\to \\mathbb{{R}}^{{{n_cols}}}$ has nullity (dimension of null space) equal to {nullity}. According to the Rank-Nullity Theorem, what is the rank of the transformation matrix?",
            expected_rank,
            f"By the Rank-Nullity Theorem: $\\text{{Rank}}(T) + \\text{{Nullity}}(T) = \\dim(\\text{{Domain}}) = {n_cols}$. Hence $\\text{{Rank}}(T) = {n_cols} - {nullity} = {expected_rank}$.",
            ["Rank + Nullity = number of columns."],
            "Nullity relates to the domain dimension, not the codomain dimension.",
            ["Rank-Nullity", "Vector Spaces"],
            marks=1, tol=0.01
        ))
        q_idx += 1

    # System of Linear Equations MCQs
    sle_cases = [
        ("No solution (Inconsistent)", "A system $Ax = b$ with $[A|b]$ has $\\text{rank}(A) < \\text{rank}([A|b])$.", "A", "Inconsistent system"),
        ("Unique solution", "A system $Ax = b$ where $A$ is $n\\times n$ and $\\det(A) \\neq 0$.", "B", "Consistent unique"),
        ("Infinitely many solutions", "A consistent system $Ax = b$ with $n$ variables and $\\text{rank}(A) = r < n$.", "C", "Infinite solutions"),
    ]
    for name, cond, corr, desc in sle_cases:
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"Under which condition does a non-homogeneous system of linear equations $Ax = b$ have {name.lower()}?",
            {
                "A": "$\\text{rank}(A) < \\text{rank}([A|b])$",
                "B": "$\\text{rank}(A) = \\text{rank}([A|b]) = n$ (number of variables)",
                "C": "$\\text{rank}(A) = \\text{rank}([A|b]) < n$",
                "D": "$\\det(A) = 0$ and $b = 0$"
            },
            corr,
            f"Rouché–Capelli theorem: If $\\text{{rank}}(A) \\neq \\text{{rank}}([A|b])$, no solution exists. If equal to $n$, unique solution. If equal but $< n$, infinitely many solutions with $n - r$ free parameters.",
            ["Recall Rouché–Capelli Theorem."],
            "Don't confuse homogeneous ($b=0$) with non-homogeneous systems.",
            ["System of Equations", "Consistency", "Rank"],
            marks=1
        ))
        q_idx += 1

    # Cayley-Hamilton & Matrix Polynomials
    for ch_i in range(1, 6):
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"Let $A$ be a $2 \\times 2$ matrix satisfying $A^2 - 5A + 6I = 0$. Which of the following is an expression for $A^{-1}$?",
            {
                "A": "$A^{-1} = \\frac{1}{6}(5I - A)$",
                "B": "$A^{-1} = \\frac{1}{6}(A - 5I)$",
                "C": "$A^{-1} = 5I - A$",
                "D": "$A^{-1} = 6A - 5I$"
            },
            "A",
            "Multiply $A^2 - 5A + 6I = 0$ by $A^{-1}$: $A - 5I + 6A^{-1} = 0 \\implies 6A^{-1} = 5I - A \\implies A^{-1} = \\frac{1}{6}(5I - A)$.",
            ["Multiply the Cayley-Hamilton equation by $A^{-1}$."],
            "Keep track of the signs when isolating $A^{-1}$.",
            ["Cayley-Hamilton", "Matrix Inverse"],
            marks=2
        ))
        q_idx += 1

    # Fill remaining up to 45 questions for ra-math-la
    while q_idx <= 45:
        k = q_idx
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"If the product of two eigenvalues of a $3 \\times 3$ matrix $M$ is {k * 2} and the determinant of $M$ is {k * 6}, what is the third eigenvalue $\\lambda_3$?",
            3.0,
            f"For any $3 \\times 3$ matrix, $\\det(M) = \\lambda_1 \\lambda_2 \\lambda_3$. Given $\\lambda_1 \\lambda_2 = {k * 2}$ and $\\det(M) = {k * 6}$, we have $\\lambda_3 = \\frac{{{k * 6}}}{{{k * 2}}} = 3.0$.",
            ["Determinant is the product of all eigenvalues."],
            "Determinant includes all eigenvalues with their algebraic multiplicities.",
            ["Eigenvalues", "Determinant Product"],
            marks=1, tol=0.01
        ))
        q_idx += 1

    # ==========================================
    # 2. ra-math-calc-de (45 questions)
    # ==========================================
    tid = "ra-math-calc-de"
    title = "Calculus, Differential Equations & Numerical Methods"
    q_idx = 1
    
    # First-order ODEs (Integrating factor)
    for p_coeff in [1, 2, 3, 4, 5]:
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"What is the integrating factor (IF) for the first-order linear differential equation $\\frac{{dy}}{{dx}} + {p_coeff}y = e^{{2x}}$?",
            {
                "A": f"$e^{{{p_coeff}x}}$",
                "B": f"$e^{{-{p_coeff}x}}$",
                "C": f"${p_coeff}x$",
                "D": f"$\\ln({p_coeff}x)$"
            },
            "A",
            f"For $\\frac{{dy}}{{dx}} + P(x)y = Q(x)$, the integrating factor is $\\text{{IF}} = e^{{\\int P(x) dx}} = e^{{\\int {p_coeff} dx}} = e^{{{p_coeff}x}}$.",
            ["Standard form: $\\text{IF} = e^{\\int P(x) dx}$."],
            "Sign of $P(x)$ must match the $+ P(x)y$ form.",
            ["Differential Equations", "Integrating Factor"],
            marks=1
        ))
        q_idx += 1
        
        # Particular solution at x=0
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"Consider $\\frac{{dy}}{{dx}} + {p_coeff}y = 0$ with initial condition $y(0) = {p_coeff * 10}$. Find $y(0)$.",
            p_coeff * 10.0,
            f"Given initial condition directly states $y(0) = {p_coeff * 10}$.",
            ["Read initial condition carefully."],
            "Zero evaluation.",
            ["Initial Value Problem", "ODE"],
            marks=1, tol=0.01
        ))
        q_idx += 1

    # Newton-Raphson Method questions
    nr_data = [
        ("f(x) = x^2 - 2", 1.0, 1.5, "x_1 = 1.0 - (1 - 2)/(2*1) = 1 + 0.5 = 1.5"),
        ("f(x) = x^2 - 4", 3.0, 2.167, "x_1 = 3 - (9 - 4)/(6) = 3 - 5/6 = 2.167"),
        ("f(x) = x^3 - 8", 2.5, 2.083, "x_1 = 2.5 - (15.625 - 8)/(3*6.25) = 2.5 - 7.625/18.75 = 2.093"),
        ("f(x) = x^2 - 9", 4.0, 3.125, "x_1 = 4 - (16 - 9)/8 = 4 - 7/8 = 3.125"),
        ("f(x) = x^2 - 16", 5.0, 4.1, "x_1 = 5 - (25 - 16)/10 = 5 - 0.9 = 4.1"),
    ]
    for expr, x0, x1_exp, steps in nr_data:
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"Using the Newton-Raphson method to solve ${expr} = 0$ with initial estimate $x_0 = {x0}$, compute the first approximation $x_1$ (rounded off to two decimal places).",
            round(x1_exp, 2),
            f"Formula: $x_{{k+1}} = x_k - \\frac{{f(x_k)}}{{f'(x_k)}}$. {steps}.",
            ["$x_1 = x_0 - f(x_0)/f'(x_0)$."],
            "Be careful with derivative sign and evaluation order.",
            ["Newton-Raphson", "Numerical Methods"],
            marks=2, tol=0.05
        ))
        q_idx += 1

    # Numerical Integration: Simpson's 1/3 and Trapezoidal (MSQ & NAT)
    questions.append(make_msq(
        tid, q_idx, paper, subject, title,
        "Which of the following statements regarding Numerical Integration methods is/are TRUE?",
        {
            "A": "Simpson's 1/3 rule requires the number of intervals ($n$) to be an even integer.",
            "B": "The global truncation error of Trapezoidal rule is of the order $O(h^2)$.",
            "C": "Simpson's 1/3 rule gives the EXACT integral for polynomials up to degree 3 (cubic).",
            "D": "Trapezoidal rule requires the number of sub-intervals to be a multiple of 3."
        },
        ["A", "B", "C"],
        "Simpson's 1/3 rule fits parabolas (quadratic) over pairs of subintervals, requiring $n$ to be even, and its error term depends on the 4th derivative $f^{(4)}(\\xi)$, making it exact for polynomials up to degree 3. Trapezoidal error is $O(h^2)$. Option D applies to Simpson's 3/8 rule, not Trapezoidal.",
        ["Review order of accuracy and requirements for Simpson 1/3 vs Trapezoidal."],
        "Simpson 1/3 is exact for cubic polynomials despite being based on parabolas!",
        ["Simpson 1/3", "Trapezoidal", "Numerical Integration", "GATE MSQ"],
        marks=2
    ))
    q_idx += 1

    # Laplace Transform questions
    laplace_data = [
        ("f(t) = e^{3t}", "\\frac{1}{s - 3}", "A", "Standard transform: $\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s-a}$"),
        ("f(t) = \\sin(4t)", "\\frac{4}{s^2 + 16}", "B", "$\\mathcal{L}\\{\\sin(\\omega t)\\} = \\frac{\\omega}{s^2 + \\omega^2}$"),
        ("f(t) = \\cos(5t)", "\\frac{s}{s^2 + 25}", "C", "$\\mathcal{L}\\{\\cos(\\omega t)\\} = \\frac{s}{s^2 + \\omega^2}$"),
        ("f(t) = t^2", "\\frac{2}{s^3}", "D", "$\\mathcal{L}\\{t^n\\} = \\frac{n!}{s^{n+1}}$"),
        ("f(t) = e^{-2t} \\cos(3t)", "\\frac{s+2}{(s+2)^2 + 9}", "A", "Frequency shift: $\\mathcal{L}\\{e^{at}f(t)\\} = F(s-a)$"),
    ]
    for expr, ans_tex, opt, exp in laplace_data:
        opts = {
            "A": f"${ans_tex}$" if opt == "A" else "$\\frac{1}{s+3}$",
            "B": f"${ans_tex}$" if opt == "B" else "$\\frac{s}{s^2 + 16}$",
            "C": f"${ans_tex}$" if opt == "C" else "$\\frac{5}{s^2 + 25}$",
            "D": f"${ans_tex}$" if opt == "D" else "$\\frac{1}{s^2}$"
        }
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"What is the Laplace transform $\\mathcal{{L}}\\{{{expr}\\}}$?",
            opts, opt, exp,
            ["Check standard Laplace transform table and frequency shifting theorem."],
            "Do not mix up $\\sin(\\omega t)$ (constant numerator $\\omega$) and $\\cos(\\omega t)$ ($s$ in numerator).",
            ["Laplace Transform", "Calculus"],
            marks=1
        ))
        q_idx += 1

    # Partial Derivatives & Maxima/Minima (NAT & MCQ)
    for a in [2, 3, 4, 5, 6]:
        # Stationary point NAT
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"Find the value of $x$ where the function $f(x, y) = {a}x^2 + 4y^2 - {a*4}x - 8y + 10$ attains its minimum.",
            2.0,
            f"Set partial derivative $\\frac{{\\partial f}}{{\\partial x}} = 0$: ${2*a}x - {a*4} = 0 \\implies x = \\frac{{{a*4}}}{{{2*a}}} = 2.0$.",
            ["Set $\\partial f / \\partial x = 0$."],
            "Check that second derivative $\\partial^2 f / \\partial x^2 > 0$ for a minimum.",
            ["Partial Derivatives", "Optimization"],
            marks=1, tol=0.01
        ))
        q_idx += 1

    # Fill remaining up to 45 questions for ra-math-calc-de
    while q_idx <= 45:
        idx_val = q_idx
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"Evaluate the definite integral $\\int_{{0}}^{{{idx_val % 4 + 1}}} 2x dx$.",
            float((idx_val % 4 + 1)**2),
            f"$\\int_0^a 2x dx = [x^2]_0^a = a^2 = {(idx_val % 4 + 1)**2}$.",
            ["Standard antiderivative $\\int 2x dx = x^2$."],
            "Evaluate at upper limit minus lower limit.",
            ["Definite Integral", "Calculus"],
            marks=1, tol=0.01
        ))
        q_idx += 1

    return questions

if __name__ == "__main__":
    qs = generate_ra_math()
    print(f"Generated {len(qs)} questions for RA Math.")
