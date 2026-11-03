# -*- coding: utf-8 -*-
"""
Builds exhaustive, textbook-grade, in-depth mathematical notes
for all 15 syllabus nodes across GATE RA and DA.
"""

import json
import os

notes = {}

# 1. ra-math-la
notes['ra-math-la'] = {
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra: Vector Spaces, Eigenvalues & Orthogonality",
    "paper": "RA",
    "definitionSummary": (
        "Linear algebra forms the foundational mathematical language of robotics, spatial mechanisms, and modern control theory.\n\n"
        "### 1. Vector Spaces, Subspaces & Basis\n"
        "A vector space $V$ over $\\mathbb{R}$ is a set of mathematical objects equipped with vector addition and scalar multiplication satisfying the 8 vector space axioms (associativity, commutativity, additive identity, additive inverse, scalar distributivity). In robotics, spatial positions $P = [x, y, z]^T \\in \\mathbb{R}^3$, joint angle configurations $q = [\\theta_1, \\dots, \\theta_n]^T \\in \\mathbb{R}^n$, and spatial twists $\\mathcal{V} \\in \\text{se}(3)$ reside in vector spaces.\n\n"
        "A subset $W \\subseteq V$ is a valid subspace if and only if it is non-empty, closed under vector addition ($u, v \\in W \\implies u + v \\in W$), and closed under scalar multiplication ($c \\in \\mathbb{R}, u \\in W \\implies cu \\in W$). A set of vectors $\\{v_1, v_2, \\dots, v_k\\}$ is linearly independent if $\\sum c_i v_i = 0 \\implies c_1 = c_2 = \\dots = c_k = 0$.\n\n"
        "### 2. Matrix Rank & Rank-Nullity Theorem\n"
        "For an $m \\times n$ matrix $A$, the row rank always equals the column rank. The fundamental theorem of linear algebra (Rank-Nullity Theorem) states:\n"
        "$$\\text{Rank}(A) + \\text{Nullity}(A) = n$$\n"
        "where $n$ is the number of columns (dimension of the domain). In robotics kinematics, when the $6 \\times n$ Manipulator Jacobian matrix $J(q)$ experiences rank deficiency ($\\text{Rank}(J) < \\min(6, n)$), the robot is in a **kinematic singularity**, losing instantaneous mobility in one or more Cartesian directions.\n\n"
        "### 3. Systems of Linear Equations ($Ax = b$)\n"
        "According to the Rouché–Capelli theorem, given the augmented matrix $[A \\mid b]$:\n"
        "- **Consistent with Unique Solution**: $\\text{Rank}(A) = \\text{Rank}([A \\mid b]) = n$ (where $n$ is number of variables). For square matrices, this holds iff $\\det(A) \\neq 0$.\n"
        "- **Consistent with Infinitely Many Solutions**: $\\text{Rank}(A) = \\text{Rank}([A \\mid b]) = r < n$, with $(n - r)$ linearly independent free parameters.\n"
        "- **Inconsistent (No Solution)**: $\\text{Rank}(A) < \\text{Rank}([A \\mid b])$.\n\n"
        "### 4. Eigenvalues, Eigenvectors & Cayley-Hamilton Theorem\n"
        "For a square matrix $A \\in \\mathbb{R}^{n \\times n}$, scalar $\\lambda$ and non-zero vector $v \\neq 0$ satisfy:\n"
        "$$A v = \\lambda v \\iff (A - \\lambda I)v = 0 \\iff \\det(A - \\lambda I) = 0$$\n"
        "The Cayley-Hamilton Theorem establishes that every square matrix satisfies its own characteristic equation: if $P(\\lambda) = \\det(A - \\lambda I) = (-1)^n \\lambda^n + c_{n-1} \\lambda^{n-1} + \\dots + c_0 = 0$, then $P(A) = 0$. This provides a powerful closed-form method to calculate matrix inverses and powers without full cofactor expansion.\n\n"
        "### 5. Orthogonal Transformations & Special Orthogonal Group $SO(3)$\n"
        "A real square matrix $Q$ is orthogonal if $Q^T Q = Q Q^T = I$, implying $Q^{-1} = Q^T$. Orthogonal matrices preserve Euclidean vector lengths ($\\|Qx\\| = \\|x\\|$) and angles between vectors ($Qx \\cdot Qy = x \\cdot y$). Rotation matrices in 3D robotics form the Special Orthogonal Group $SO(3) = \\{R \\in \\mathbb{R}^{3 \\times 3} \\mid R^T R = I, \\det(R) = +1\\}$."
    ),
    "keyFormulas": (
        "$$\\det(A - \\lambda I) = 0 \\quad \\text{(Characteristic Polynomial)}$$\n\n"
        "$$\\text{Trace}(A) = \\sum_{i=1}^n a_{ii} = \\sum_{i=1}^n \\lambda_i, \\quad \\det(A) = \\prod_{i=1}^n \\lambda_i$$\n\n"
        "$$A^{-1} = \\frac{1}{\\det(A)} \\text{adj}(A) = \\frac{1}{\\det(A)} C^T$$\n\n"
        "$$\\text{Rank}(A) + \\text{Nullity}(A) = n \\quad \\text{(Rank-Nullity Theorem)}$$\n\n"
        "$$A = Q \\Lambda Q^T \\quad \\text{(Spectral Theorem for Real Symmetric Matrices)}$$\n\n"
        "$$R \\in SO(3) \\implies R^T R = I, \\quad R^{-1} = R^T, \\quad \\det(R) = +1$$"
    ),
    "workedExample": (
        "**GATE Exam Problem**:\n"
        "Let $A = \\begin{bmatrix} 3 & 2 \\\\ 2 & 3 \\end{bmatrix}$. Find: (a) the eigenvalues and eigenvectors of $A$, and (b) evaluate $A^5$ using the Cayley-Hamilton theorem.\n\n"
        "**Step 1: Characteristic Equation & Eigenvalues**\n"
        "$$\\det(A - \\lambda I) = \\det \\begin{bmatrix} 3 - \\lambda & 2 \\\\ 2 & 3 - \\lambda \\end{bmatrix} = (3 - \\lambda)^2 - 4 = \\lambda^2 - 6\\lambda + 5 = 0$$\n"
        "Factoring gives $(\\lambda - 5)(\\lambda - 1) = 0 \\implies \\lambda_1 = 5, \\; \\lambda_2 = 1$.\n"
        "Verification check: $\\text{Trace}(A) = 3 + 3 = 6 = 5 + 1$, and $\\det(A) = 9 - 4 = 5 = 5 \\times 1$.\n\n"
        "**Step 2: Eigenvectors**\n"
        "- For $\\lambda_1 = 5$: $(A - 5I)v_1 = \\begin{bmatrix} -2 & 2 \\\\ 2 & -2 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = 0 \\implies -2x + 2y = 0 \\implies x = y$. Normalized eigenvector: $v_1 = \\frac{1}{\\sqrt{2}}[1, 1]^T$.\n"
        "- For $\\lambda_2 = 1$: $(A - I)v_2 = \\begin{bmatrix} 2 & 2 \\\\ 2 & 2 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = 0 \\implies x + y = 0 \\implies x = -y$. Normalized eigenvector: $v_2 = \\frac{1}{\\sqrt{2}}[1, -1]^T$.\n"
        "Notice $v_1 \\cdot v_2 = \\frac{1}{2}(1 - 1) = 0$ (orthogonal, as guaranteed by the Spectral Theorem for symmetric matrices).\n\n"
        "**Step 3: Cayley-Hamilton Evaluation for $A^5$**\n"
        "By Cayley-Hamilton: $A^2 - 6A + 5I = 0 \\implies A^2 = 6A - 5I$.\n"
        "We can express $\\lambda^5 = Q(\\lambda)(\\lambda^2 - 6\\lambda + 5) + (p\\lambda + q)$. Since $\\lambda_1=5$ and $\\lambda_2=1$ are roots of the characteristic polynomial:\n"
        "- At $\\lambda = 5$: $5^5 = 3125 = 5p + q$\n"
        "- At $\\lambda = 1$: $1^5 = 1 = p + q$\n"
        "Subtracting the equations: $4p = 3124 \\implies p = 781$.\n"
        "Then $q = 1 - 781 = -780$.\n"
        "Therefore, by Cayley-Hamilton: $A^5 = 781A - 780I$.\n"
        "$$A^5 = 781 \\begin{bmatrix} 3 & 2 \\\\ 2 & 3 \\end{bmatrix} - 780 \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 2343 - 780 & 1562 \\\\ 1562 & 2343 - 780 \\end{bmatrix} = \\begin{bmatrix} 1563 & 1562 \\\\ 1562 & 1563 \\end{bmatrix}$$\n"
        "Quick trace check: $\\text{Trace}(A^5) = 1563 + 1563 = 3126 = 5^5 + 1^5 = 3125 + 1 = 3126$! Exactly verified."
    ),
    "commonMistakes": (
        "1. **Zero Eigenvector Blunder**: By definition, the zero vector $v = 0$ is NEVER an eigenvector, even though $A(0) = \\lambda(0)$ holds trivially.\n"
        "2. **Matrix Power Remainder Forgetfulness**: In Cayley-Hamilton expansion $A^k = pA + qI$, forgetting to multiply the constant scalar $q$ by the identity matrix $I$.\n"
        "3. **Orthogonal vs Orthonormal**: An orthogonal matrix must have columns that are unit length (norm = 1) in addition to being mutually orthogonal. If columns are orthogonal but have norm $k \\neq 1$, then $Q^{-1} = \\frac{1}{k^2} Q^T$."
    ),
    "examTraps": (
        "*GATE Trap Alert*: If a matrix has repeated eigenvalues (algebraic multiplicity > 1), it is diagonalizable IF AND ONLY IF its geometric multiplicity (dimension of eigenspace $\\text{Nullity}(A - \\lambda I)$) equals its algebraic multiplicity. If geometric multiplicity < algebraic multiplicity, the matrix is defective and CANNOT be diagonalized."
    ),
    "crossLinks": "RA - Robot Kinematics (Spatial Rotation Matrices), DA - Linear Algebra (SVD & PCA), RA - Control Systems (State Space Controllability)",
    "customNotes": "Remember the diagonal determinant shortcut: for upper or lower triangular matrices, the eigenvalues are simply the diagonal entries themselves.",
    "updatedAt": "2026-11-03T08:30:00.000Z",
    "codeSnippet": {
        "language": "python",
        "title": "Matrix Power & Cayley-Hamilton Verification",
        "code": "import numpy as np\n\nA = np.array([[3.0, 2.0], [2.0, 3.0]])\neigvals, eigvecs = np.linalg.eig(A)\nprint('Eigenvalues:', eigvals)  # [5. 1.]\n\n# Direct matrix power vs Cayley-Hamilton\nA_5 = np.linalg.matrix_power(A.astype(int), 5)\nprint('A^5:\\n', A_5)\n# Result: [[1563, 1562], [1562, 1563]]"
    },
    "interactiveQuiz": {
        "question": "If a $3 \\times 3$ matrix $M$ has eigenvalues $\\lambda = 1, 2, -3$, what is $\\det(M^2 - I)$?",
        "options": [
            {"id": "A", "text": "0", "isCorrect": True, "feedback": "Correct! Eigenvalues of $M^2 - I$ are $\\lambda_i^2 - 1$. For $\\lambda=1$, $1^2 - 1 = 0$. Since one eigenvalue is 0, the determinant (product of eigenvalues) is strictly 0."},
            {"id": "B", "text": "24", "isCorrect": False, "feedback": "Incorrect. Recall that det(A) is the product of eigenvalues."},
            {"id": "C", "text": "-48", "isCorrect": False, "feedback": "Incorrect. Check the factor for lambda = 1."},
            {"id": "D", "text": "16", "isCorrect": False, "feedback": "Incorrect."}
        ],
        "hint": "The eigenvalues of any polynomial matrix $P(M)$ are $P(\\lambda_i)$. What is $P(1)$ when $P(\\lambda) = \\lambda^2 - 1$?"
    }
}

print("Node 1 created.")
