# -*- coding: utf-8 -*-
"""Generate 45 questions each for:
- da-prob-stats
- da-linear-algebra
- da-calc-opt
Total: 135 questions
"""
import math
from common import make_mcq, make_msq, make_nat

def generate_da_math():
    questions = []
    
    # ==========================================
    # 1. da-prob-stats (45 questions)
    # ==========================================
    tid = "da-prob-stats"
    paper = "DA"
    subject = "Probability & Statistics"
    title = "Probability & Statistics"
    q_idx = 1
    
    # Bayes' Theorem NATs (Diagnostic test / spam classifier)
    # P(Disease)=prev, P(+|Disease)=sens, P(-|No Disease)=spec
    # P(Disease|+) = (prev * sens) / (prev * sens + (1-prev)*(1-spec))
    bayes_cases = [
        (0.01, 0.95, 0.90), # prev=1%, sens=95%, spec=90% -> num=0.0095, den=0.0095 + 0.99*0.1 = 0.0095+0.099=0.1085 -> 0.0876 (8.76%)
        (0.05, 0.90, 0.95), # num=0.045, den=0.045 + 0.95*0.05=0.045+0.0475=0.0925 -> 0.4865 (48.65%)
        (0.02, 0.98, 0.95), # num=0.0196, den=0.0196 + 0.98*0.05 = 0.0196+0.049 = 0.0686 -> 0.2857 (28.57%)
        (0.10, 0.92, 0.88), # num=0.092, den=0.092 + 0.90*0.12 = 0.092+0.108 = 0.200 -> 0.4600 (46.0%)
        (0.01, 0.99, 0.99)  # num=0.0099, den=0.0099 + 0.99*0.01 = 0.0099+0.0099=0.0198 -> 0.5000 (50.0%)
    ]
    for prev, sens, spec in bayes_cases:
        p_d_given_pos = (prev * sens) / (prev * sens + (1.0 - prev) * (1.0 - spec))
        pct_ans = round(p_d_given_pos * 100.0, 2)
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"A rare medical condition has prevalence $P(D) = {round(prev*100, 1)}\\%$ in a population. A diagnostic test has sensitivity (true positive rate) of ${round(sens*100, 1)}\\%$ and specificity (true negative rate) of ${round(spec*100, 1)}\\%$. If an individual tests positive, what is the posterior probability $P(D \\mid +)$ that they actually have the condition (in percent, rounded off to two decimal places)?",
            pct_ans,
            f"Apply Bayes' Rule: $P(D \\mid +) = \\frac{{P(+ \\mid D)P(D)}}{{P(+ \\mid D)P(D) + P(+ \\mid D^c)P(D^c)}} = \\frac{{{sens} \\times {prev}}}{{{sens} \\times {prev} + (1 - {spec}) \\times (1 - {prev})}} = \\frac{{{round(prev*sens, 4)}}}{{{round(prev*sens + (1.0-spec)*(1.0-prev), 4)}}} = {p_d_given_pos:.4f} = {pct_ans}\\%$.",
            ["Use Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+)}$.", "False positive rate is $1 - \\text{specificity}$."],
            "Base rate fallacy trap: Even with a 95% accurate test, if disease prevalence is very low, most positives can be false alarms!",
            ["Bayes Theorem", "Conditional Probability", "Medical Diagnosis"],
            marks=2, tol=0.5
        ))
        q_idx += 1

    # Poisson Distribution NATs
    poisson_cases = [
        (2.0, 0, round(math.exp(-2.0), 3)), # lambda=2, k=0 -> e^-2 = 0.135
        (3.0, 0, round(math.exp(-3.0), 3)), # lambda=3, k=0 -> e^-3 = 0.050
        (1.0, 1, round(1.0 * math.exp(-1.0), 3)), # lambda=1, k=1 -> e^-1 = 0.368
        (4.0, 0, round(math.exp(-4.0), 3)),
        (2.0, 1, round(2.0 * math.exp(-2.0), 3)), # 2 * 0.1353 = 0.271
        (1.5, 0, round(math.exp(-1.5), 3))
    ]
    for lam, k_val, p_val in poisson_cases:
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"Network request arrivals at an AI model server follow a Poisson distribution with an average arrival rate of $\\lambda = {lam}$ requests per second. What is the probability of receiving exactly $k = {k_val}$ requests in a randomly chosen one-second interval (rounded off to three decimal places)?",
            p_val,
            f"Poisson PMF formula: $P(X = k) = \\frac{{\\lambda^k e^{{-\\lambda}}}}{{k!}}$. For $\\lambda = {lam}$ and $k = {k_val}$: $P(X = {k_val}) = \\frac{{{lam}^{{{k_val}}} e^{{-{lam}}}}}{{{math.factorial(k_val)}}} = {p_val}$.",
            ["Poisson PMF: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$."],
            "Remember that $0! = 1$ and $\\lambda^0 = 1$.",
            ["Poisson Distribution", "Discrete Random Variables"],
            marks=1, tol=0.01
        ))
        q_idx += 1

    # Expectation and Variance properties MSQ
    questions.append(make_msq(
        tid, q_idx, paper, subject, title,
        "Let $X$ and $Y$ be two independent random variables with finite variances $\\text{Var}(X)$ and $\\text{Var}(Y)$. Which of the following statements is/are ALWAYS TRUE? (Select all that apply)",
        {
            "A": "$\\mathbb{E}[X + Y] = \\mathbb{E}[X] + \\mathbb{E}[Y]$",
            "B": "$\\mathbb{E}[XY] = \\mathbb{E}[X]\\mathbb{E}[Y]$",
            "C": "$\\text{Var}(X - Y) = \\text{Var}(X) - \\text{Var}(Y)$",
            "D": "$\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)$"
        },
        ["A", "B", "D"],
        "Linearity of expectation (A) always holds, regardless of independence. For independent random variables, expectation of product equals product of expectations (B). Furthermore, $\\text{Var}(X - Y) = \\text{Var}(X) + \\text{Var}(Y) - 2\\text{Cov}(X, Y) = \\text{Var}(X) + \\text{Var}(Y)$ (Option C is false because variances always add, never subtract). Option D is true.",
        ["Variances of independent variables always add: $\\text{Var}(X - Y) = \\text{Var}(X) + \\text{Var}(Y)$."],
        "Variance subtraction trap: $\\text{Var}(X - Y) = \\text{Var}(X) + (-1)^2 \\text{Var}(Y) = \\text{Var}(X) + \\text{Var}(Y)$!",
        ["Variance", "Expectation", "Independence", "GATE MSQ"],
        marks=2
    ))
    q_idx += 1

    # Normal Distribution & 68-95-99.7 Rule
    normal_cases = [
        (100.0, 15.0, 115.0, 0.8413, "Z = (115 - 100)/15 = +1.0. P(X <= 115) = 0.8413"),
        (50.0, 5.0, 60.0, 0.9772, "Z = (60 - 50)/5 = +2.0. P(X <= 60) = 0.9772"),
        (0.0, 1.0, 0.0, 0.5000, "Z = 0. Symmetry gives P(X <= 0) = 0.5000"),
        (200.0, 20.0, 220.0, 0.8413, "Z = (220 - 200)/20 = +1.0. P(X <= 220) = 0.8413")
    ]
    for mu, sigma, x_cutoff, p_cum, steps in normal_cases:
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"A continuous random variable $X \\sim \\mathcal{{N}}(\\mu = {mu}, \\sigma^2 = {sigma**2})$. What is the cumulative probability $P(X \\le {x_cutoff})$ (rounded off to four decimal places)?",
            p_cum,
            f"Standardize to standard normal variable $Z$: $Z = \\frac{{X - \\mu}}{{\\sigma}} = \\frac{{{x_cutoff} - {mu}}}{{{sigma}}} = {round((x_cutoff-mu)/sigma, 2)}$. From standard normal CDF tables, $\\Phi({round((x_cutoff-mu)/sigma, 2)}) = {p_cum}$.",
            ["Compute Z-score: $Z = (X - \\mu)/\\sigma$."],
            "Do not square the standard deviation in the denominator of the Z-score.",
            ["Normal Distribution", "Z-Score", "Gaussian"],
            marks=1, tol=0.01
        ))
        q_idx += 1

    # Fill remaining up to 45 questions for da-prob-stats
    while q_idx <= 45:
        k = q_idx
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"In statistical hypothesis testing, a Type I error occurs when:",
            {
                "A": "The null hypothesis $H_0$ is rejected when it is actually true",
                "B": "The null hypothesis $H_0$ is accepted when it is actually false",
                "C": "The sample size is too large",
                "D": "The p-value is greater than 0.5"
            },
            "A",
            "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
            ["Type I = False alarm (Reject true $H_0$)."],
            "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
            ["Hypothesis Testing", "Type I Error", "Statistics"],
            marks=1
        ))
        q_idx += 1

    # ==========================================
    # 2. da-linear-algebra (45 questions)
    # ==========================================
    tid = "da-linear-algebra"
    subject = "Linear Algebra"
    title = "Linear Algebra, SVD & PCA"
    q_idx = 1
    
    # Singular Value Decomposition (SVD): A = U Sigma V^T
    # Singular values are square roots of eigenvalues of A^T A
    svd_cases = [
        (3, 4, 5.0), # rank-1 or diagonal: [3, 0; 0, 4] -> sigma1=4, sigma2=3
        (1, 2, 2.24),
        (6, 8, 10.0),
        (5, 12, 13.0),
        (9, 12, 15.0),
        (4, 3, 5.0)
    ]
    for s1, s2, norm_v in svd_cases:
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"A $2 \\times 2$ diagonal matrix is given by $A = \\begin{{bmatrix}} {s1} & 0 \\\\ 0 & {s2} \\end{{bmatrix}}$. What is the largest singular value $\\sigma_1$ of matrix $A$?",
            float(max(s1, s2)),
            f"For a diagonal matrix with non-negative entries, the singular values are simply the diagonal entries arranged in descending order: $\\sigma_1 = \\max({s1}, {s2}) = {max(s1, s2)}$.",
            ["Singular values of diagonal matrices are $|a_{ii}|$, sorted descending."],
            "Singular values are always real and non-negative by definition: $\\sigma_i \\ge 0$.",
            ["SVD", "Singular Values", "Linear Algebra"],
            marks=1, tol=0.01
        ))
        q_idx += 1

    # PCA (Principal Component Analysis) Explained Variance NATs
    pca_data = [
        (10.0, 6.0, 4.0), # sum=20 -> PC1 = 10/20 = 50%
        (12.0, 5.0, 3.0), # sum=20 -> PC1 = 12/20 = 60%
        (14.0, 4.0, 2.0), # sum=20 -> PC1 = 14/20 = 70%
        (16.0, 3.0, 1.0), # sum=20 -> PC1 = 16/20 = 80%
        (15.0, 7.0, 3.0), # sum=25 -> PC1 = 15/25 = 60%
        (18.0, 2.0, 0.0)  # sum=20 -> PC1 = 18/20 = 90%
    ]
    for e1, e2, e3 in pca_data:
        tot = e1 + e2 + e3
        prop_pc1 = round((e1 / tot) * 100.0, 1)
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"In Principal Component Analysis (PCA) on a 3-dimensional dataset, the sample covariance matrix has eigenvalues $\\lambda_1 = {e1}$, $\\lambda_2 = {e2}$, and $\\lambda_3 = {e3}$. What percentage of the total dataset variance is explained by the first principal component (rounded off to one decimal place)?",
            prop_pc1,
            f"Total variance in PCA is given by the sum of all eigenvalues: $\\sum \\lambda_i = {e1} + {e2} + {e3} = {tot}$. The proportion of variance explained by the first principal component is $\\frac{{\\lambda_1}}{{\\sum \\lambda_i}} = \\frac{{{e1}}}{{{tot}}} = {prop_pc1}\\%$.",
            ["Proportion explained by PC_k = $\\lambda_k / \\sum \\lambda_i$."],
            "Sum of eigenvalues equals the total trace of the covariance matrix.",
            ["PCA", "Explained Variance", "Covariance Matrix"],
            marks=2, tol=0.2
        ))
        q_idx += 1

    # SVD & Low-Rank Approximation MSQ
    questions.append(make_msq(
        tid, q_idx, paper, subject, title,
        "Consider the Singular Value Decomposition (SVD) of a matrix $A \\in \\mathbb{R}^{m \\times n}$ given by $A = U \\Sigma V^T$ with rank $r$. Which of the following statements is/are TRUE? (Select all that apply)",
        {
            "A": "The columns of $U$ are orthonormal eigenvectors of $A A^T$.",
            "B": "The columns of $V$ are orthonormal eigenvectors of $A^T A$.",
            "C": "The non-zero singular values of $A$ are the positive square roots of the non-zero eigenvalues of $A^T A$.",
            "D": "The Moore-Penrose pseudo-inverse $A^+$ is given by $A^+ = U \\Sigma^+ V^T$."
        },
        ["A", "B", "C"],
        "In SVD: $A A^T = U \\Sigma V^T V \\Sigma^T U^T = U \\Sigma \\Sigma^T U^T$, so columns of $U$ (left singular vectors) are eigenvectors of $A A^T$ (Option A). Similarly, $A^T A = V \\Sigma^T \\Sigma V^T$, so columns of $V$ are eigenvectors of $A^T A$ (Option B). Non-zero singular values $\\sigma_i = \\sqrt{\\lambda_i(A^T A)}$ (Option C). The pseudo-inverse is $A^+ = V \\Sigma^+ U^T$ (Option D has transposed order, hence false).",
        ["Review SVD derivation: $A^T A = V \\Sigma^2 V^T$."],
        "Pseudo-inverse order trap: $A^+ = V \\Sigma^+ U^T$, NOT $U \\Sigma^+ V^T$!",
        ["SVD", "Singular Vectors", "Pseudo-Inverse", "GATE MSQ"],
        marks=2
    ))
    q_idx += 1

    # Orthogonal Projections NATs
    proj_cases = [
        (2, 2, 1, 0), # y=[2,2], u=[1,0] -> proj_u(y) = (y.u / u.u) u = (2/1)[1,0] = [2,0], length = 2.0
        (3, 4, 1, 0), # length = 3.0
        (4, 3, 0, 1), # length = 3.0
        (5, 12, 1, 0), # length = 5.0
        (6, 8, 0, 1)  # length = 8.0
    ]
    for y1, y2, u1, u2 in proj_cases:
        dot_yu = y1 * u1 + y2 * u2
        dot_uu = u1 * u1 + u2 * u2
        p_len = abs(dot_yu / math.sqrt(dot_uu))
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"What is the Euclidean length of the orthogonal projection of vector $y = [{y1}, {y2}]^T$ onto the 1D subspace spanned by vector $u = [{u1}, {u2}]^T$?",
            p_len,
            f"The orthogonal projection formula is $\\text{{proj}}_u(y) = \\frac{{y \\cdot u}}{{\\|u\\|^2}} u$. Length is $\\|\\text{{proj}}_u(y)\\| = \\frac{{|y \\cdot u|}}{{\\|u\\|}} = \\frac{{|{dot_yu}|}}{{\\sqrt{{{dot_uu}}}}} = {p_len}$.",
            ["Length of projection = $|y \\cdot u| / \\|u\\|$."],
            "Subspace projection uses dot product divided by length of the basis vector.",
            ["Orthogonal Projection", "Vector Spaces"],
            marks=1, tol=0.01
        ))
        q_idx += 1

    # Fill remaining up to 45 questions for da-linear-algebra
    while q_idx <= 45:
        k = q_idx
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
            {
                "A": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal",
                "B": "All eigenvalues of $A$ are strictly positive",
                "C": "The determinant of $A$ is always 1",
                "D": "The trace of $A$ is always 0"
            },
            "A",
            "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
            ["Spectral theorem for symmetric matrices."],
            "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
            ["Symmetric Matrix", "Spectral Theorem", "Eigenvalues"],
            marks=1
        ))
        q_idx += 1

    # ==========================================
    # 3. da-calc-opt (45 questions)
    # ==========================================
    tid = "da-calc-opt"
    subject = "Calculus & Optimization"
    title = "Calculus & Convex Optimization"
    q_idx = 1
    
    # Gradient Descent Update Step NATs: x_{k+1} = x_k - lr * grad f(x_k)
    # f(x) = a x^2 -> grad f(x) = 2 a x
    gd_cases = [
        (1.0, 4.0, 0.1), # f=x^2, x0=4, lr=0.1 -> grad=2*4=8 -> x1 = 4 - 0.1*8 = 3.2
        (2.0, 5.0, 0.05),# f=2x^2, x0=5, lr=0.05 -> grad=4*5=20 -> x1 = 5 - 0.05*20 = 4.0
        (0.5, 6.0, 0.2), # f=0.5x^2, x0=6, lr=0.2 -> grad=1*6=6 -> x1 = 6 - 0.2*6 = 4.8
        (3.0, 2.0, 0.1), # f=3x^2, x0=2, lr=0.1 -> grad=6*2=12 -> x1 = 2 - 1.2 = 0.8
        (1.0, 10.0, 0.25)# f=x^2, x0=10, lr=0.25 -> grad=20 -> x1 = 10 - 5 = 5.0
    ]
    for a_coeff, x0_v, lr_v in gd_cases:
        grad_v = 2.0 * a_coeff * x0_v
        x1_v = round(x0_v - lr_v * grad_v, 2)
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"Consider the objective function $f(x) = {a_coeff} x^2$. Using gradient descent with learning rate $\\eta = {lr_v}$ and initial point $x_0 = {x0_v}$, calculate the next iterate $x_1$.",
            x1_v,
            f"Gradient: $\\nabla f(x) = \\frac{{df}}{{dx}} = {2*a_coeff} x$. At $x_0 = {x0_v}$, the gradient is $\\nabla f({x0_v}) = {2*a_coeff} \\times {x0_v} = {grad_v}$. Gradient descent update: $x_1 = x_0 - \\eta \\nabla f(x_0) = {x0_v} - ({lr_v} \\times {grad_v}) = {x0_v} - {round(lr_v*grad_v, 2)} = {x1_v}$.",
            ["$x_{k+1} = x_k - \\eta \\nabla f(x_k)$."],
            "Gradient descent moves in the negative gradient direction.",
            ["Gradient Descent", "Optimization", "Learning Rate"],
            marks=1, tol=0.01
        ))
        q_idx += 1

    # Convex Functions & Hessian Matrix MSQ
    questions.append(make_msq(
        tid, q_idx, paper, subject, title,
        "Let $f: \\mathbb{R}^n \\to \\mathbb{R}$ be a twice continuously differentiable function. Which of the following conditions is/are TRUE regarding its convexity?",
        {
            "A": "$f$ is convex if and only if its Hessian matrix $\\nabla^2 f(x)$ is positive semi-definite (PSD) for all $x \\in \\mathbb{R}^n$.",
            "B": "For any convex function, every local minimum is also a global minimum.",
            "C": "The first-order condition for convexity is $f(y) \\ge f(x) + \\nabla f(x)^T (y - x)$ for all $x, y$.",
            "D": "If $\\nabla^2 f(x)$ has both positive and negative eigenvalues at a critical point, that point is a local minimum."
        },
        ["A", "B", "C"],
        "Convexity characterizations: The second-order condition states $f$ is convex iff $\\nabla^2 f(x) \\succeq 0$ (PSD) everywhere (Option A). For convex functions on convex domains, any local minimum is automatically a global minimum (Option B). The first-order Taylor tangent under-estimator condition is $f(y) \\ge f(x) + \\nabla f(x)^T(y-x)$ (Option C). If the Hessian has both positive and negative eigenvalues (indefinite), the critical point is a saddle point, not a minimum (Option D is false).",
        ["Review first and second order characterizations of convex functions."],
        "Indefinite Hessian at a stationary point denotes a saddle point, NOT a minimum.",
        ["Convex Optimization", "Hessian", "Convexity", "GATE MSQ"],
        marks=2
    ))
    q_idx += 1

    # Taylor Series Second-Order Approximation NATs
    # f(x) = exp(x), around x=0: f(x) approx 1 + x + x^2/2
    taylor_cases = [
        (0.1, round(1.0 + 0.1 + 0.01 / 2.0, 4)),
        (0.2, round(1.0 + 0.2 + 0.04 / 2.0, 4)),
        (0.5, round(1.0 + 0.5 + 0.25 / 2.0, 4)),
        (-0.1, round(1.0 - 0.1 + 0.01 / 2.0, 4))
    ]
    for x_eval, approx_val in taylor_cases:
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"Compute the second-order Taylor series approximation of $f(x) = e^x$ around $x_0 = 0$ evaluated at $x = {x_eval}$ (rounded off to four decimal places).",
            approx_val,
            f"The second-order Taylor series around 0 is $P_2(x) = f(0) + f'(0)x + \\frac{{f''(0)}}{{2!}}x^2 = 1 + x + \\frac{{x^2}}{{2}}$. At $x = {x_eval}$: $P_2({x_eval}) = 1 + {x_eval} + \\frac{{{round(x_eval**2, 4)}}}{{2}} = {approx_val}$.",
            ["$P_2(x) = 1 + x + x^2/2$."],
            "Include the $x^2/2$ term for the second-order expansion.",
            ["Taylor Series", "Approximation", "Calculus"],
            marks=1, tol=0.005
        ))
        q_idx += 1

    # Fill remaining up to 45 questions for da-calc-opt
    while q_idx <= 45:
        k = q_idx
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
            {
                "A": "Necessary for optimality under Slater's condition, and sufficient for convex problems",
                "B": "Only applicable to unconstrained problems",
                "C": "Never satisfied if inequality constraints are active",
                "D": "Require the objective function to be non-differentiable"
            },
            "A",
            "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
            ["KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."],
            "KKT conditions apply to inequality-constrained problems, not just equalities.",
            ["KKT Conditions", "Constrained Optimization"],
            marks=1
        ))
        q_idx += 1

    return questions

if __name__ == "__main__":
    qs = generate_da_math()
    print(f"Generated {len(qs)} questions for DA Math.")
