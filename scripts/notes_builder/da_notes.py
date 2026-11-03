# -*- coding: utf-8 -*-
"""Exhaustive textbook-grade notes for all 7 Data Science & Artificial Intelligence (DA) syllabus nodes"""

def get_da_notes():
    notes = {}

    # ==========================================
    # 1. da-prob-stats
    # ==========================================
    notes['da-prob-stats'] = {
        "topicId": "da-prob-stats",
        "topicTitle": "Probability & Statistics: Distributions, Inference & Bayes",
        "paper": "DA",
        "definitionSummary": (
            "Probability theory and statistical inference underpin machine learning algorithms, hypothesis testing, and Bayesian decision theory.\n\n"
            "### 1. Conditional Probability & Bayes' Rule\n"
            "Conditional probability of event $A$ given $B$ with $P(B) > 0$ is $P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}$.\n"
            "Bayes' Theorem provides the mathematical inversion to compute posterior belief:\n"
            "$$P(A_i \\mid B) = \\frac{P(B \\mid A_i) P(A_i)}{\\sum_{j=1}^k P(B \\mid A_j) P(A_j)}$$\n"
            "Independence: Events $A$ and $B$ are independent iff $P(A \\cap B) = P(A)P(B)$.\n\n"
            "### 2. Random Variables & Key Distributions\n"
            "- **Binomial**: $P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$, with mean $\\mathbb{E}[X] = np$, variance $\\text{Var}(X) = np(1-p)$.\n"
            "- **Poisson**: $P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$, with mean and variance both equal to $\\lambda$.\n"
            "- **Uniform**: $f(x) = \\frac{1}{b-a}$ on $[a, b]$, mean $(a+b)/2$, variance $(b-a)^2/12$.\n"
            "- **Exponential**: $f(x) = \\lambda e^{-\\lambda x}$ ($x \\ge 0$), mean $1/\\lambda$, variance $1/\\lambda^2$ (possesses the memoryless property).\n"
            "- **Normal (Gaussian)**: $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$, standard normal $Z = \\frac{X-\\mu}{\\sigma} \\sim \\mathcal{N}(0, 1)$.\n\n"
            "### 3. Expectation, Variance & Covariance\n"
            "Linearity of expectation always holds: $\\mathbb{E}[aX + bY] = a\\mathbb{E}[X] + b\\mathbb{E}[Y]$.\n"
            "Variance: $\\text{Var}(aX + b) = a^2 \\text{Var}(X)$. If $X, Y$ are independent, $\\text{Var}(X \\pm Y) = \\text{Var}(X) + \\text{Var}(Y)$.\n"
            "Covariance $\\text{Cov}(X, Y) = \\mathbb{E}[XY] - \\mathbb{E}[X]\\mathbb{E}[Y]$, Pearson correlation coefficient $\\rho = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y} \\in [-1, 1]$.\n\n"
            "### 4. Statistical Inference & Hypothesis Testing\n"
            "Central Limit Theorem (CLT): For i.i.d. random variables with mean $\\mu$ and variance $\\sigma^2$, sample mean $\\bar{X}_n$ converges in distribution to $\\mathcal{N}\\left(\\mu, \\frac{\\sigma^2}{n}\\right)$ as $n \\to \\infty$.\n"
            "Type I error ($\\alpha$): Rejecting null $H_0$ when $H_0$ is true (false positive). Type II error ($\\beta$): Failing to reject $H_0$ when $H_0$ is false (false negative). Statistical Power = $1 - \\beta$."
        ),
        "keyFormulas": (
            "$$P(A \\mid B) = \\frac{P(B \\mid A) P(A)}{P(B)} \\quad \\text{(Bayes' Rule)}$$\n\n"
            "$$\\text{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2$$\n\n"
            "$$Z = \\frac{\\bar{X} - \\mu}{\\sigma / \\sqrt{n}} \\sim \\mathcal{N}(0, 1) \\quad \\text{(Central Limit Theorem)}$$\n\n"
            "$$P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!} \\quad [\\mathbb{E}[X] = \\text{Var}(X) = \\lambda]$$\n\n"
            "$$\\rho_{XY} = \\frac{\\text{Cov}(X, Y)}{\\sigma_X \\sigma_Y} = \\frac{\\mathbb{E}[(X-\\mu_X)(Y-\\mu_Y)]}{\\sigma_X \\sigma_Y}$$"
        ),
        "workedExample": (
            "**GATE Problem**: A rare disease has prevalence $P(D) = 0.01$ (1%). A diagnostic test has Sensitivity (True Positive rate) $P(+ \\mid D) = 0.95$ and Specificity (True Negative rate) $P(- \\mid D^c) = 0.90$. If a random person tests positive, what is the posterior probability that they actually have the disease?\n\n"
            "1. Identify terms:\n"
            "   - Prior $P(D) = 0.01, P(D^c) = 0.99$\n"
            "   - Likelihood $P(+ \\mid D) = 0.95$\n"
            "   - False positive rate $P(+ \\mid D^c) = 1 - \\text{Specificity} = 1 - 0.90 = 0.10$\n"
            "2. Total probability of testing positive:\n"
            "   $P(+) = P(+ \\mid D)P(D) + P(+ \\mid D^c)P(D^c) = (0.95)(0.01) + (0.10)(0.99) = 0.0095 + 0.0990 = 0.1085$.\n"
            "3. Bayes' formula for posterior:\n"
            "   $P(D \\mid +) = \\frac{P(+ \\mid D)P(D)}{P(+)} = \\frac{0.0095}{0.1085} \\approx 0.08756 = 8.76\\%$.\n"
            "Conclusion: Even with 95% sensitivity and 90% specificity, a positive test means only an 8.76% chance of having the disease due to low base prevalence."
        ),
        "commonMistakes": (
            "1. Base-Rate Fallacy: Assuming that a test with 95% accuracy implies a 95% chance of being sick upon testing positive.\n"
            "2. Variance Subtraction Trap: $\\text{Var}(X - Y) = \\text{Var}(X) + \\text{Var}(Y) - 2\\text{Cov}(X, Y)$. Variances never subtract; if $X, Y$ are independent, $\\text{Var}(X - Y) = \\text{Var}(X) + \\text{Var}(Y)$!\n"
            "3. Zero correlation ($\\rho = 0$) does NOT imply independence in general; it only implies independence for jointly Gaussian variables."
        ),
        "examTraps": (
            "*GATE Trap*: P-value is NOT the probability that the null hypothesis is true! It is the probability of observing test statistics at least as extreme as the observed sample, assuming the null hypothesis $H_0$ is true."
        ),
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
                {"id": "A", "text": "97", "isCorrect": True, "feedback": "Correct! Var(aX + bY) = a^2 Var(X) + b^2 Var(Y) = 4(4) + 9(9) = 16 + 81 = 97."},
                {"id": "B", "text": "-65", "isCorrect": False, "feedback": "Variance cannot be negative!"},
                {"id": "C", "text": "25", "isCorrect": False, "feedback": "Remember the scalar coefficients are squared: 2^2=4, (-3)^2=9."},
                {"id": "D", "text": "43", "isCorrect": False, "feedback": "Incorrect."}
            ],
            "hint": "Use $\\text{Var}(aX + bY) = a^2 \\text{Var}(X) + b^2 \\text{Var}(Y)$ for independent variables."
        }
    }

    # ==========================================
    # 2. da-linear-algebra
    # ==========================================
    notes['da-linear-algebra'] = {
        "topicId": "da-linear-algebra",
        "topicTitle": "Linear Algebra, SVD & PCA",
        "paper": "DA",
        "definitionSummary": (
            "Matrix decompositions and projection techniques form the mathematical core of high-dimensional data analysis and machine learning.\n\n"
            "### 1. Vector Spaces & Orthogonal Projections\n"
            "For a subspace $S \\subset \\mathbb{R}^n$ spanned by orthogonal basis vectors, the orthogonal projection of vector $y$ onto vector $u$ is $\\text{proj}_u(y) = \\frac{y \\cdot u}{\\|u\\|^2} u$. For a subspace spanned by the columns of matrix $A$, the projection matrix is $P = A(A^T A)^{-1} A^T$, satisfying idempotency $P^2 = P$ and symmetry $P^T = P$.\n\n"
            "### 2. Singular Value Decomposition (SVD)\n"
            "Any arbitrary real matrix $A \\in \\mathbb{R}^{m \\times n}$ can be factored as:\n"
            "$$A = U \\Sigma V^T$$\n"
            "- $U \\in \\mathbb{R}^{m \\times m}$: Orthonormal eigenvectors of $A A^T$ (left singular vectors).\n"
            "- $V \\in \\mathbb{R}^{n \\times n}$: Orthonormal eigenvectors of $A^T A$ (right singular vectors).\n"
            "- $\\Sigma \\in \\mathbb{R}^{m \\times n}$: Diagonal matrix of non-negative singular values $\\sigma_1 \\ge \\sigma_2 \\ge \\dots \\ge 0$, where $\\sigma_i = \\sqrt{\\lambda_i(A^T A)}$.\n"
            "Eckart-Young Theorem: The optimal low-rank matrix approximation of rank $k$ is $A_k = \\sum_{i=1}^k \\sigma_i u_i v_i^T$.\n\n"
            "### 3. Principal Component Analysis (PCA)\n"
            "PCA finds orthogonal directions that maximize data variance. Given zero-centered data matrix $X \\in \\mathbb{R}^{n \\times d}$, the sample covariance matrix is $C = \\frac{1}{n} X^T X$.\n"
            "Principal components $v_1, \\dots, v_d$ are the eigenvectors of $C$, with corresponding eigenvalues $\\lambda_1 \\ge \\lambda_2 \\ge \\dots \\ge \\lambda_d$ representing the variance along each component.\n"
            "The proportion of total variance explained by component $k$ is $\\frac{\\lambda_k}{\\sum_{i=1}^d \\lambda_i}$."
        ),
        "keyFormulas": (
            "$$A = U \\Sigma V^T = \\sum_{i=1}^r \\sigma_i u_i v_i^T \\quad \\text{(SVD)}$$\n\n"
            "$$\\sigma_i = \\sqrt{\\lambda_i(A^T A)} \\ge 0$$\n\n"
            "$$A^+ = V \\Sigma^+ U^T \\quad \\text{(Moore-Penrose Pseudo-Inverse)}$$\n\n"
            "$$C = \\frac{1}{n} X^T X, \\quad C v_i = \\lambda_i v_i \\quad \\text{(PCA)}$$\n\n"
            "$$\\text{Explained Variance Ratio} = \\frac{\\lambda_k}{\\sum_{i=1}^d \\lambda_i}$$\n\n"
            "$$P = A(A^T A)^{-1} A^T \\quad \\text{(Subspace Projection Matrix)}$$"
        ),
        "workedExample": (
            "**GATE Problem**: In a PCA experiment on a 3D dataset, the sample covariance matrix has eigenvalues $\\lambda_1 = 12, \\lambda_2 = 5, \\lambda_3 = 3$. What percentage of total variance is captured by the first two principal components?\n\n"
            "1. Total variance = Trace of covariance matrix = $\\sum \\lambda_i = 12 + 5 + 3 = 20$.\n"
            "2. Variance captured by PC1 and PC2: $\\lambda_1 + \\lambda_2 = 12 + 5 = 17$.\n"
            "3. Cumulative explained variance percentage: $\\frac{17}{20} \\times 100\\% = 85.0\\%$."
        ),
        "commonMistakes": (
            "1. Forgetting to mean-center data before performing PCA (without centering, PC1 simply points towards the dataset centroid).\n"
            "2. Order inversion in Moore-Penrose pseudo-inverse: $A^+ = V \\Sigma^+ U^T$, NOT $U \\Sigma^+ V^T$.\n"
            "3. Assuming singular values can be negative; by mathematical definition, singular values $\\sigma_i \\ge 0$ are non-negative real numbers."
        ),
        "examTraps": (
            "*GATE Trap*: In SVD, the rank of matrix $A$ equals the exact number of NON-ZERO singular values. If a $100 \\times 50$ matrix has 4 non-zero singular values, its rank is strictly 4."
        ),
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
                {"id": "A", "text": "Positive square roots of the eigenvalues of $A^T A$", "isCorrect": True, "feedback": "Correct! $\\sigma_i = \\sqrt{\\lambda_i(A^T A)}$."},
                {"id": "B", "text": "Eigenvalues of $A$", "isCorrect": False, "feedback": "Only true for positive semi-definite symmetric matrices."},
                {"id": "C", "text": "Absolute values of the trace of $A$", "isCorrect": False, "feedback": "Incorrect."},
                {"id": "D", "text": "Diagonal elements of $A$", "isCorrect": False, "feedback": "Incorrect."}
            ],
            "hint": "Recall that $A^T A = V \\Sigma^2 V^T$."
        }
    }

    # ==========================================
    # 3. da-calc-opt
    # ==========================================
    notes['da-calc-opt'] = {
        "topicId": "da-calc-opt",
        "topicTitle": "Calculus & Convex Optimization",
        "paper": "DA",
        "definitionSummary": (
            "Convex optimization forms the computational engine of loss function minimization and model parameter training.\n\n"
            "### 1. Multivariable Calculus & Hessian Matrix\n"
            "For a scalar field $f: \\mathbb{R}^n \\to \\mathbb{R}$:\n"
            "- Gradient vector $\\nabla f(x) = \\left[\\frac{\\partial f}{\\partial x_1}, \\dots, \\frac{\\partial f}{\\partial x_n}\\right]^T \\in \\mathbb{R}^n$ points in the direction of steepest ascent.\n"
            "- Hessian matrix $H = \\nabla^2 f(x) \\in \\mathbb{R}^{n \\times n}$ with $H_{ij} = \\frac{\\partial^2 f}{\\partial x_i \\partial x_j}$ captures local curvature.\n"
            "Stationary point classification: At $\\nabla f(x^*) = 0$:\n"
            "1. Local Minimum: $H(x^*)$ is Positive Definite ($H \\succ 0$, all eigenvalues $> 0$).\n"
            "2. Local Maximum: $H(x^*)$ is Negative Definite ($H \\prec 0$, all eigenvalues $< 0$).\n"
            "3. Saddle Point: $H(x^*)$ is Indefinite (has both positive and negative eigenvalues).\n\n"
            "### 2. Convex Sets & Convex Functions\n"
            "A set $C$ is convex if for all $x, y \\in C$ and $\\alpha \\in [0, 1]$, $\\alpha x + (1-\\alpha)y \\in C$.\n"
            "A function $f$ is convex iff its epigraph is a convex set. Equivalent conditions for twice differentiable functions:\n"
            "- First-Order Condition: $f(y) \\ge f(x) + \\nabla f(x)^T (y - x)$ for all $x, y$ (tangent plane is a global underestimator).\n"
            "- Second-Order Condition: $\\nabla^2 f(x) \\succeq 0$ (Positive Semi-Definite) for all $x$.\n"
            "Fundamental theorem: For convex functions, EVERY local minimum is guaranteed to be a global minimum.\n\n"
            "### 3. Gradient Descent & KKT Conditions\n"
            "Gradient descent update: $x_{k+1} = x_k - \\eta \\nabla f(x_k)$, where $\\eta > 0$ is the learning rate.\n"
            "For constrained optimization $\\min f(x)$ s.t. $g_i(x) \\le 0, h_j(x) = 0$, the Karush-Kuhn-Tucker (KKT) conditions are necessary for optimality under constraint qualifications (Slater's condition) and sufficient for convex problems:\n"
            "1. Stationarity: $\\nabla f(x) + \\sum \\lambda_i \\nabla g_i(x) + \\sum \\nu_j \\nabla h_j(x) = 0$\n"
            "2. Primal Feasibility: $g_i(x) \\le 0, h_j(x) = 0$\n"
            "3. Dual Feasibility: $\\lambda_i \\ge 0$\n"
            "4. Complementary Slackness: $\\lambda_i g_i(x) = 0$"
        ),
        "keyFormulas": (
            "$$x_{k+1} = x_k - \\eta \\nabla f(x_k) \\quad \\text{(Gradient Descent)}$$\n\n"
            "$$f(y) \\ge f(x) + \\nabla f(x)^T (y - x) \\quad \\text{(First-Order Convexity Condition)}$$\n\n"
            "$$\\nabla^2 f(x) \\succeq 0 \\iff f \\text{ is convex} \\quad \\text{(Second-Order Condition)}$$\n\n"
            "$$\\mathcal{L}(x, \\lambda, \\nu) = f(x) + \\sum_{i=1}^m \\lambda_i g_i(x) + \\sum_{j=1}^p \\nu_j h_j(x)$$\n\n"
            "$$\\lambda_i g_i(x) = 0, \\; \\lambda_i \\ge 0 \\quad \\text{(Complementary Slackness)}$$"
        ),
        "workedExample": (
            "**GATE Problem**: Consider the objective function $f(x_1, x_2) = 2x_1^2 + x_2^2 - 4x_1 - 2x_2 + 5$. Find the stationary point and determine whether it is a local minimum, maximum, or saddle point.\n\n"
            "1. First partial derivatives:\n"
            "   $\\frac{\\partial f}{\\partial x_1} = 4x_1 - 4 = 0 \\implies x_1 = 1$\n"
            "   $\\frac{\\partial f}{\\partial x_2} = 2x_2 - 2 = 0 \\implies x_2 = 1$\n"
            "   Stationary point: $x^* = (1, 1)$.\n"
            "2. Hessian matrix:\n"
            "   $H = \\begin{bmatrix} \\frac{\\partial^2 f}{\\partial x_1^2} & \\frac{\\partial^2 f}{\\partial x_1 \\partial x_2} \\\\ \\frac{\\partial^2 f}{\\partial x_2 \\partial x_1} & \\frac{\\partial^2 f}{\\partial x_2^2} \\end{bmatrix} = \\begin{bmatrix} 4 & 0 \\\\ 0 & 2 \\end{bmatrix}$.\n"
            "3. Eigenvalues of $H$ are $\\lambda_1 = 4 > 0, \\lambda_2 = 2 > 0$.\n"
            "4. Since $H$ is Positive Definite ($H \\succ 0$) everywhere, $(1, 1)$ is a strict global minimum.\n"
            "   Minimum value: $f(1, 1) = 2(1) + 1 - 4(1) - 2(1) + 5 = 2$."
        ),
        "commonMistakes": (
            "1. Confusing local minima with saddle points when the Hessian has zero eigenvalues (semidefinite case requires higher order tests).\n"
            "2. Forgetting dual feasibility: Lagrange multipliers for inequality constraints must be non-negative: $\\lambda_i \\ge 0$.\n"
            "3. Choosing learning rate $\\eta$ too large in gradient descent, which causes numerical oscillation and divergence."
        ),
        "examTraps": (
            "*GATE Trap*: If complementary slackness $\\lambda_i g_i(x) = 0$ holds, either the constraint is active ($g_i(x) = 0, \\lambda_i \\ge 0$), or the constraint is inactive ($g_i(x) < 0$), which FORCES $\\lambda_i = 0$ strictly!"
        ),
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
                {"id": "A", "text": "Saddle Point", "isCorrect": True, "feedback": "Correct! An indefinite Hessian with both positive and negative eigenvalues denotes a saddle point."},
                {"id": "B", "text": "Local Minimum", "isCorrect": False, "feedback": "Local minimum requires all eigenvalues to be strictly positive."},
                {"id": "C", "text": "Local Maximum", "isCorrect": False, "feedback": "Local maximum requires all eigenvalues to be strictly negative."},
                {"id": "D", "text": "Global Minimum", "isCorrect": False, "feedback": "Incorrect."}
            ],
            "hint": "Check the signs of the eigenvalues: one positive and one negative."
        }
    }

    # ==========================================
    # 4. da-prog-dsa
    # ==========================================
    notes['da-prog-dsa'] = {
        "topicId": "da-prog-dsa",
        "topicTitle": "Programming, Python, Data Structures & Algorithms",
        "paper": "DA",
        "definitionSummary": (
            "Data structures and algorithmic complexity govern scalable feature pipelines, search graph traversal, and computational efficiency in AI.\n\n"
            "### 1. Asymptotic Complexity & Master Theorem\n"
            "Divide-and-conquer recurrences of form $T(n) = a T(n/b) + \\Theta(n^d)$:\n"
            "- Case 1: If $\\log_b a > d \\implies T(n) = \\Theta(n^{\\log_b a})$. (e.g. Strassen's matrix multiply: $7 T(n/2) + O(n^2) \\implies \\Theta(n^{\\log_2 7}) \\approx \\Theta(n^{2.81})$).\n"
            "- Case 2: If $\\log_b a = d \\implies T(n) = \\Theta(n^d \\log n)$. (e.g. Merge Sort: $2 T(n/2) + O(n) \\implies \\Theta(n \\log n)$).\n"
            "- Case 3: If $\\log_b a < d \\implies T(n) = \\Theta(n^d)$. (e.g. Binary Search: $T(n/2) + O(1) \\implies \\Theta(\\log n)$).\n\n"
            "### 2. Python Core Internals\n"
            "- **Immutability**: `int`, `float`, `str`, `tuple`, `frozenset` are immutable. Any modification creates a new object in memory.\n"
            "- **Mutability**: `list`, `dict`, `set` are mutable. Passing them to functions passes by object reference; in-place operations (`list.append()`) mutate caller state.\n"
            "- **Time Complexities**: List append $O(1)$ amortized; list insert at 0 is $O(n)$; dict lookup/insert is $O(1)$ average, $O(n)$ worst case under hash collisions.\n\n"
            "### 3. Non-Linear Data Structures: Trees & Graphs\n"
            "- **Binary Search Trees (BST)**: Inorder traversal produces strictly sorted keys. Search/insert is $O(h)$, where height $h = \\log n$ for balanced trees (AVL, Red-Black) and $O(n)$ for degenerate skewed trees.\n"
            "- **Heaps & Priority Queues**: Complete binary tree satisfying heap property ($A[parent] \\le A[child]$ for min-heap). Array representation: child nodes of index $i$ are at $2i+1$ and $2i+2$. Heapify takes $O(n)$ time; extract-min takes $O(\\log n)$.\n"
            "- **Graph Traversals**: BFS uses a FIFO Queue, finds shortest path on unweighted graphs ($O(V + E)$). DFS uses a LIFO Stack or recursion, used for cycle detection and topological sorting of DAGs."
        ),
        "keyFormulas": (
            "$$T(n) = a T(n/b) + \\Theta(n^d) \\implies \\begin{cases} \\Theta(n^{\\log_b a}) & \\text{if } \\log_b a > d \\\\ \\Theta(n^d \\log n) & \\text{if } \\log_b a = d \\\\ \\Theta(n^d) & \\text{if } \\log_b a < d \\end{cases}$$\n\n"
            "$$\\text{Max nodes in binary tree of height } h = 2^{h+1} - 1$$\n\n"
            "$$\\text{Min-heap array indices: } \\text{Parent}(i) = \\lfloor (i-1)/2 \\rfloor, \\; \\text{Left}(i) = 2i+1, \\; \\text{Right}(i) = 2i+2$$\n\n"
            "$$\\text{Hash table load factor } \\alpha = \\frac{n}{m} \\quad (n \\text{ elements}, m \\text{ slots})$$"
        ),
        "workedExample": (
            "**GATE Problem**: Solve the recurrence relation $T(n) = 4 T(n/2) + \\Theta(n)$ with $T(1) = \\Theta(1)$.\n\n"
            "1. Identify parameters: $a = 4, b = 2, f(n) = \\Theta(n) \\implies d = 1$.\n"
            "2. Compute $\\log_b a = \\log_2 4 = 2$.\n"
            "3. Compare with $d$: $\\log_b a = 2 > d = 1$.\n"
            "4. Applies Case 1 of Master Theorem:\n"
            "   $T(n) = \\Theta(n^{\\log_b a}) = \\Theta(n^2)$."
        ),
        "commonMistakes": (
            "1. Default argument mutability trap in Python: `def fn(x, arr=[])` retains list elements across subsequent function calls because the default list is instantiated once at function definition time.\n"
            "2. Confusing Binary Tree height conventions: check if height of single root is defined as 0 or 1.\n"
            "3. Assuming QuickSort is always $O(n \\log n)$; worst-case is $O(n^2)$ on already sorted arrays when using first or last element as pivot."
        ),
        "examTraps": (
            "*GATE Trap*: Building a binary heap from an unsorted array of $n$ elements using `Bottom-Up Heapify` takes $O(n)$ linear time, NOT $O(n \\log n)$! Inserting elements one by one takes $O(n \\log n)$."
        ),
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
                {"id": "A", "text": "$O(n)$", "isCorrect": True, "feedback": "Correct! In the worst case (skewed tree), the tree degenerates into a linked list of height n, giving O(n) search and insert."},
                {"id": "B", "text": "$O(\\log n)$", "isCorrect": False, "feedback": "O(log n) is the average case for balanced trees, but worst case is O(n)."},
                {"id": "C", "text": "$O(1)$", "isCorrect": False, "feedback": "Incorrect."},
                {"id": "D", "text": "$O(n \\log n)$", "isCorrect": False, "feedback": "Incorrect."}
            ],
            "hint": "Consider inserting sorted keys 1, 2, 3, 4 into an initially empty BST."
        }
    }

    # ==========================================
    # 5. da-dbms
    # ==========================================
    notes['da-dbms'] = {
        "topicId": "da-dbms",
        "topicTitle": "Database Management Systems & SQL",
        "paper": "DA",
        "definitionSummary": (
            "Relational algebra, normal forms, transaction ACID properties, and indexing ensure data integrity and query performance in AI databases.\n\n"
            "### 1. Functional Dependencies & Normalization\n"
            "Given relation schema $R$ and functional dependencies (FD) $F$:\n"
            "- **Attribute Closure ($X^+$)**: Set of all attributes functionally determined by $X$. If $X^+ = R$, $X$ is a superkey. A minimal superkey is a **candidate key**.\n"
            "- **1NF**: All attribute domains contain only atomic, scalar values (no nested relations or multivalued sets).\n"
            "- **2NF**: Relation is in 1NF and NO non-prime attribute is partially dependent on any candidate key.\n"
            "- **3NF**: Relation is in 2NF and for every non-trivial FD $X \\to Y$, either $X$ is a superkey OR $Y$ is a prime attribute (member of some candidate key). Eliminates transitive dependencies.\n"
            "- **BCNF (Boyce-Codd NF)**: For every non-trivial FD $X \\to Y$, $X$ MUST be a superkey. BCNF is strictly stronger than 3NF.\n\n"
            "### 2. Transactions, Concurrency & Serializability\n"
            "ACID Properties:\n"
            "- **Atomicity**: All operations succeed or none do (rollback via undo log).\n"
            "- **Consistency**: Preserves database invariants and schema constraints.\n"
            "- **Isolation**: Concurrent execution results in a state equivalent to serial execution.\n"
            "- **Durability**: Committed updates persist across power failures via Write-Ahead Logging (WAL).\n"
            "Conflict Serializability: A schedule is conflict serializable iff its precedence (serialization) graph contains NO directed cycles.\n\n"
            "### 3. B+ Tree Indexing\n"
            "B+ trees are self-balancing search trees optimized for disk blocks:\n"
            "- Internal nodes contain only routing keys and child pointers (maximizing fan-out and minimizing tree height).\n"
            "- ALL actual data pointers and record references reside exclusively in leaf nodes.\n"
            "- Leaf nodes are doubly linked sequentially, enabling ultra-fast range queries (`BETWEEN a AND b`)."
        ),
        "keyFormulas": (
            "$$\\text{BCNF Condition: } X \\to Y \\implies X \\text{ is a superkey}$$\n\n"
            "$$\\text{3NF Condition: } X \\to Y \\implies X \\text{ is a superkey } \\lor Y \\text{ is a prime attribute}$$\n\n"
            "$$\\text{Fan-out } B = \\left\\lfloor \\frac{\\text{Block Size} - P_{ptr}}{\\text{Key Size} + P_{ptr}} \\right\\rfloor + 1$$\n\n"
            "$$\\text{Precedence Graph acyclic } \\iff \\text{Conflict Serializable Schedule}$$"
        ),
        "workedExample": (
            "**GATE Problem**: Relation $R(A, B, C, D)$ has functional dependencies $F = \\{A \\to B, B \\to C, C \\to D\\}$. Find all candidate keys and the highest normal form of $R$.\n\n"
            "1. Find candidate keys:\n"
            "   Attribute $A$ does not appear on the right side of any dependency, so $A$ MUST be in every candidate key.\n"
            "   Compute closure $A^+$: $A^+ = \\{A\\} \\to \\{A, B\\} \\to \\{A, B, C\\} \\to \\{A, B, C, D\\}$.\n"
            "   Since $A^+ = R$, $\\{A\\}$ is the unique candidate key.\n"
            "2. Prime attribute: $\\{A\\}$. Non-prime attributes: $\\{B, C, D\\}$.\n"
            "3. Check normal forms:\n"
            "   - In $B \\to C$: $B$ is not a superkey, and $C$ is not a prime attribute. Thus $R$ violates 3NF (transitive dependency $A \\to B \\to C$) and BCNF.\n"
            "   - Check 2NF: The candidate key is single attribute $A$, so no partial dependency can exist. Thus $R$ is in 2NF.\n"
            "   Highest Normal Form: 2NF."
        ),
        "commonMistakes": (
            "1. Believing that lossless-join and dependency preservation can always both be achieved in BCNF (BCNF decomposition guarantees lossless join, but cannot always preserve all functional dependencies; 3NF can always preserve both!).\n"
            "2. Using `WHERE` clause with aggregate functions in SQL (must use `HAVING` clause after `GROUP BY`).\n"
            "3. Confusing View Serializability with Conflict Serializability (Conflict serializable implies View serializable, but not vice versa)."
        ),
        "examTraps": (
            "*GATE Trap*: A relation with only two attributes $R(A, B)$ is ALWAYS in BCNF regardless of the functional dependencies!"
        ),
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
                {"id": "A", "text": "3NF", "isCorrect": True, "feedback": "Correct! 3NF decomposition can always achieve both lossless join and dependency preservation, whereas BCNF may lose dependencies."},
                {"id": "B", "text": "BCNF", "isCorrect": False, "feedback": "BCNF cannot always guarantee dependency preservation."},
                {"id": "C", "text": "4NF", "isCorrect": False, "feedback": "Incorrect."},
                {"id": "D", "text": "2NF", "isCorrect": False, "feedback": "Incorrect."}
            ],
            "hint": "Recall the tradeoff between BCNF and 3NF."
        }
    }

    # ==========================================
    # 6. da-machine-learning
    # ==========================================
    notes['da-machine-learning'] = {
        "topicId": "da-machine-learning",
        "topicTitle": "Supervised & Unsupervised Machine Learning",
        "paper": "DA",
        "definitionSummary": (
            "Machine learning formulates statistical estimation algorithms across supervised classification, regression, and unsupervised clustering.\n\n"
            "### 1. Linear & Regularized Regression\n"
            "- **Ordinary Least Squares (OLS)**: Minimizes Mean Squared Error $J(\\theta) = \\frac{1}{2n} \\|X\\theta - y\\|^2$. Closed-form normal equation: $\\hat{\\theta} = (X^T X)^{-1} X^T y$.\n"
            "- **Ridge Regression (L2)**: Penalizes weight magnitude $\\lambda \\sum \\theta_j^2$. Analytical solution: $\\hat{\\theta}_{ridge} = (X^T X + \\lambda I)^{-1} X^T y$. Shrinks weights smoothly towards zero, preventing multicollinearity explosion.\n"
            "- **Lasso Regression (L1)**: Penalizes absolute weight sum $\\lambda \\sum |\\theta_j|$. Induces exact sparsity by setting irrelevant feature weights to exactly 0 (automatic feature selection).\n\n"
            "### 2. Classification & Evaluation Metrics\n"
            "- **Logistic Regression**: Models posterior class probability via sigmoid $\\sigma(z) = \\frac{1}{1 + e^{-z}}$. Loss is Binary Cross-Entropy (Log Loss):\n"
            "$$J(\\theta) = -\\frac{1}{n} \\sum [y^{(i)} \\log(\\hat{y}^{(i)}) + (1 - y^{(i)}) \\log(1 - \\hat{y}^{(i)})]$$\n"
            "- **Confusion Matrix**: Precision $P = \\frac{TP}{TP + FP}$, Recall $R = \\frac{TP}{TP + FN}$, $F_1 = 2 \\frac{P \\cdot R}{P + R}$. ROC curve plots TPR vs FPR at varying thresholds; AUC measures ranking capability.\n\n"
            "### 3. Support Vector Machines & Decision Trees\n"
            "- **SVM**: Maximizes margin $\\frac{2}{\\|w\\|}$, equivalent to minimizing $\\frac{1}{2}\\|w\\|^2$ subject to $y_i(w^T x_i + b) \\ge 1$. Kernel trick maps non-linear data into high-dimensional Hilbert spaces using Mercer kernels: $K(x, x') = \\phi(x)^T \\phi(x')$.\n"
            "- **Decision Trees**: Split features by maximizing Information Gain: $\\text{Gain}(S, A) = H(S) - \\sum \\frac{|S_v|}{|S|} H(S_v)$, where Shannon Entropy is $H(S) = -\\sum p_i \\log_2 p_i$."
        ),
        "keyFormulas": (
            "$$\\hat{\\theta}_{OLS} = (X^T X)^{-1} X^T y, \\quad \\hat{\\theta}_{Ridge} = (X^T X + \\lambda I)^{-1} X^T y$$\n\n"
            "$$\\sigma(z) = \\frac{1}{1 + e^{-z}} = \\frac{e^z}{1 + e^z}$$\n\n"
            "$$F_1 = 2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}} = \\frac{2 \\text{TP}}{2 \\text{TP} + \\text{FP} + \\text{FN}}$$\n\n"
            "$$H(S) = -\\sum_{i=1}^c p_i \\log_2 p_i \\quad \\text{(Shannon Entropy)}$$\n\n"
            "$$\\text{Gini}(S) = 1 - \\sum_{i=1}^c p_i^2 \\quad \\text{(Gini Impurity)}$$"
        ),
        "workedExample": (
            "**GATE Problem**: A classifier is evaluated on 100 test samples producing: $\\text{TP} = 40, \\text{FP} = 10, \\text{FN} = 10, \\text{TN} = 40$. Calculate Precision, Recall, and $F_1$-score.\n\n"
            "1. Precision $P = \\frac{\\text{TP}}{\\text{TP} + \\text{FP}} = \\frac{40}{40 + 10} = \\frac{40}{50} = 0.80$.\n"
            "2. Recall $R = \\frac{\\text{TP}}{\\text{TP} + \\text{FN}} = \\frac{40}{40 + 10} = \\frac{40}{50} = 0.80$.\n"
            "3. $F_1$-Score: $F_1 = 2 \\cdot \\frac{P \\cdot R}{P + R} = 2 \\cdot \\frac{0.80 \\times 0.80}{0.80 + 0.80} = 2 \\cdot \\frac{0.64}{1.60} = 0.80$."
        ),
        "commonMistakes": (
            "1. Believing Ridge regression induces sparse feature weights (only L1 Lasso sets weights exactly to zero; L2 Ridge shrinks weights smoothly).\n"
            "2. Using Accuracy to evaluate models on severely imbalanced datasets (e.g. 99% accuracy by predicting only majority class).\n"
            "3. Forgetting that K-Means is sensitive to initial centroid placement and converges to a local minimum, not necessarily the global optimum."
        ),
        "examTraps": (
            "*GATE Trap*: Support vectors in SVM are ONLY those training data points that lie directly on the margin boundaries ($y_i(w^T x_i + b) = 1$) or violate the margin (in soft-margin SVM). Removing all non-support vector data points leaves the learned decision boundary completely unchanged!"
        ),
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
                {"id": "A", "text": "L1 Regularization (Lasso)", "isCorrect": True, "feedback": "Correct! L1 diamond constraint contours intersect coordinate axes, driving weights to exact zeros."},
                {"id": "B", "text": "L2 Regularization (Ridge)", "isCorrect": False, "feedback": "L2 decays weights towards zero, but rarely sets them to exactly zero."},
                {"id": "C", "text": "Batch Normalization", "isCorrect": False, "feedback": "Incorrect."},
                {"id": "D", "text": "Dropout with rate 0", "isCorrect": False, "feedback": "Incorrect."}
            ],
            "hint": "Recall the geometric difference between L1 diamond contours and L2 circular contours."
        }
    }

    # ==========================================
    # 7. da-ai-search-logic
    # ==========================================
    notes['da-ai-search-logic'] = {
        "topicId": "da-ai-search-logic",
        "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
        "paper": "DA",
        "definitionSummary": (
            "Heuristic search and formal logic formulate problem solving as graph state exploration and symbolic reasoning.\n\n"
            "### 1. Informed Heuristic Search & A* Algorithm\n"
            "A* evaluates nodes using $f(n) = g(n) + h(n)$:\n"
            "- $g(n)$: Exact path cost from start node to node $n$.\n"
            "- $h(n)$: Estimated heuristic cost from $n$ to the goal.\n"
            "- **Admissibility**: $h(n)$ never overestimates true cost: $h(n) \\le h^*(n)$ for all $n$, and $h(\\text{Goal}) = 0$. Guarantees optimality for **Tree Search**.\n"
            "- **Consistency (Monotonicity)**: Satisfies triangle inequality: $h(n) \\le c(n, a, n') + h(n')$. Consistency guarantees $f(n)$ values are non-decreasing along any path, ensuring that the first time a node is expanded in **Graph Search**, its path is guaranteed optimal without reopening closed nodes.\n\n"
            "### 2. Adversarial Search & Alpha-Beta Pruning\n"
            "Minimax computes optimal decisions in two-player zero-sum games with perfect information.\n"
            "Alpha-Beta pruning eliminates subtrees that cannot influence the final root decision, reducing effective branching factor from $b$ to $\\sqrt{b}$ in optimal move ordering:\n"
            "- $\\alpha$: Lower bound (highest score the Maximizing player is assured of).\n"
            "- $\\beta$: Upper bound (lowest score the Minimizing player will permit).\n"
            "- Pruning condition: Prune branch whenever $\\alpha \\ge \\beta$.\n\n"
            "### 3. Propositional Logic & Resolution Refutation\n"
            "- Implication equivalence: $P \\implies Q \\equiv \\neg P \\lor Q \\equiv \\neg Q \\implies \\neg P$.\n"
            "- Resolution Rule: From clauses $(A \\lor B)$ and $(\\neg B \\lor C)$, derives the resolvent $(A \\lor C)$.\n"
            "- Resolution Refutation: To prove $KB \\models \\alpha$, convert $(KB \\land \\neg \\alpha)$ to Conjunctive Normal Form (CNF) and apply resolution until deriving the empty clause $\\square$ (Contradiction)."
        ),
        "keyFormulas": (
            "$$f(n) = g(n) + h(n) \\quad \\text{(A* Evaluation Function)}$$\n\n"
            "$$h(n) \\le h^*(n) \\quad \\text{(Admissibility)}$$\n\n"
            "$$h(n) \\le c(n, a, n') + h(n') \\quad \\text{(Consistency / Triangle Inequality)}$$\n\n"
            "$$\\alpha \\ge \\beta \\implies \\text{Prune Remaining Subtree} \\quad \\text{(Alpha-Beta)}$$\n\n"
            "$$\\frac{A \\lor B, \\quad \\neg B \\lor C}{A \\lor C} \\quad \\text{(Resolution Inference Rule)}$$"
        ),
        "workedExample": (
            "**GATE Problem**: Consider A* search. Prove that if $h(n)$ is consistent ($h(n) \\le c(n, a, n') + h(n')$), then the sequence of $f$-values along any path is non-decreasing ($f(n') \\ge f(n)$).\n\n"
            "1. Given consistency: $h(n) \\le c(n, a, n') + h(n')$.\n"
            "2. Add $g(n)$ to both sides:\n"
            "   $g(n) + h(n) \\le g(n) + c(n, a, n') + h(n')$.\n"
            "3. Left side is $f(n) = g(n) + h(n)$.\n"
            "4. Since $g(n') = g(n) + c(n, a, n')$, the right side equals:\n"
            "   $g(n') + h(n') = f(n')$.\n"
            "5. Therefore: $f(n) \\le f(n')$.\n"
            "This proves that $f$-values never decrease along a search path, guaranteeing monotonic frontier expansion."
        ),
        "commonMistakes": (
            "1. Believing that admissibility is sufficient for Graph Search without node reopening (Consistency is strictly required for Graph Search without reopening closed nodes).\n"
            "2. Updating Alpha at MIN nodes or Beta at MAX nodes (Alpha is updated ONLY at MAX nodes; Beta is updated ONLY at MIN nodes).\n"
            "3. Conflating logical validity (tautology) with satisfiability (satisfiable means true in AT LEAST ONE model; valid means true in ALL models)."
        ),
        "examTraps": (
            "*GATE Trap*: Alpha-Beta pruning does NOT change the minimax value of the root node in any way! It returns the exact same optimal value and best move as full Minimax, but evaluates vastly fewer game states."
        ),
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
                {"id": "A", "text": "Whenever $\\alpha \\ge \\beta$", "isCorrect": True, "feedback": "Correct! When alpha >= beta, the current branch cannot affect the optimal choice."},
                {"id": "B", "text": "Whenever $\\alpha < \\beta$", "isCorrect": False, "feedback": "Alpha < Beta represents the active unpruned search window."},
                {"id": "C", "text": "When $f(n) = 0$", "isCorrect": False, "feedback": "Incorrect."},
                {"id": "D", "text": "Only at terminal leaf nodes", "isCorrect": False, "feedback": "Pruning occurs at internal branch nodes."}
            ],
            "hint": "Alpha is max's guarantee; Beta is min's ceiling. When the ceiling drops below the guarantee, prune!"
        }
    }

    return notes
