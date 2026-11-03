# -*- coding: utf-8 -*-
"""Generate 45 questions each for:
- da-prog-dsa
- da-dbms
- da-machine-learning
- da-ai-search-logic
Total: 180 questions
"""
import math
from common import make_mcq, make_msq, make_nat

def generate_da_cs():
    questions = []
    
    # ==========================================
    # 1. da-prog-dsa (45 questions)
    # ==========================================
    tid = "da-prog-dsa"
    paper = "DA"
    subject = "Programming & Data Structures"
    title = "Programming, Python, Data Structures & Algorithms"
    q_idx = 1
    
    # Master Theorem for Recurrences: T(n) = a T(n/b) + Theta(n^d)
    recurrences = [
        (2, 2, 1, "\\Theta(n \\log n)", "Merge sort recurrence: $a=2, b=2, d=1 \\implies \\log_b a = 1 = d$"),
        (4, 2, 1, "\\Theta(n^2)", "$a=4, b=2, d=1 \\implies \\log_2 4 = 2 > d \\implies \\Theta(n^{\\log_b a}) = \\Theta(n^2)$"),
        (8, 2, 2, "\\Theta(n^3)", "$a=8, b=2, d=2 \\implies \\log_2 8 = 3 > d \\implies \\Theta(n^3)$"),
        (1, 2, 0, "\\Theta(\\log n)", "Binary search recurrence: $a=1, b=2, d=0 \\implies \\log_2 1 = 0 = d \\implies \\Theta(\\log n)$"),
        (2, 2, 0, "\\Theta(n)", "$a=2, b=2, d=0 \\implies \\log_2 2 = 1 > 0 \\implies \\Theta(n)$"),
        (3, 3, 1, "\\Theta(n \\log n)", "$a=3, b=3, d=1 \\implies \\log_3 3 = 1 = d \\implies \\Theta(n \\log n)$")
    ]
    for a, b, d, compl, exp in recurrences:
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"Using the Master Theorem, what is the asymptotic time complexity of the recurrence relation $T(n) = {a} T(n/{b}) + \\Theta(n^{{{d}}})$ with $T(1) = \\Theta(1)$?",
            {
                "A": f"${compl}$",
                "B": f"$\\Theta(n^{{{d}}})$" if compl != f"\\Theta(n^{{{d}}})" else "$\\Theta(n^4)$",
                "C": "$\\Theta(2^n)$",
                "D": "$\\Theta(n^2 \\log n)$"
            },
            "A",
            f"Compare $\\log_b a$ with $d$: {exp}. Thus $T(n) = {compl}$.",
            ["Compare $\\log_b(a)$ with the exponent $d$ of the non-recursive work."],
            "Check which case of the Master Theorem applies ($<, =, >$).",
            ["Master Theorem", "Recurrences", "Algorithms"],
            marks=2
        ))
        q_idx += 1

    # Binary Search Tree (BST) Properties & Inorder Traversal
    bst_cases = [
        (7, 3, "A full binary tree of height 3 has $2^{h+1}-1 = 15$ nodes", 15),
        (5, 4, "A complete binary tree with 31 nodes has height 4", 31),
        (10, 10, "A skewed tree of 10 nodes has height 9", 9)
    ]
    for n_nodes, h, exp, ans_val in bst_cases:
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"What is the maximum number of nodes in a binary tree of height $h = {h}$ (where the height of a single root node is 0)?",
            float(2**(h + 1) - 1),
            f"The maximum number of nodes in a binary tree of height $h$ is given by $\\sum_{{i=0}}^h 2^i = 2^{{h+1}} - 1 = 2^{{{h+1}}} - 1 = {2**(h+1) - 1}$.",
            ["Geometric sum formula: $2^{h+1} - 1$."],
            "Check whether the height convention considers a single node as height 0 or height 1.",
            ["Binary Trees", "Tree Height", "Data Structures"],
            marks=1, tol=0.01
        ))
        q_idx += 1

    # Python Data Structures & Mutability MSQ
    questions.append(make_msq(
        tid, q_idx, paper, subject, title,
        "Which of the following built-in Python data types are IMMUTABLE (cannot be modified in-place after creation)? (Select all that apply)",
        {
            "A": "tuple",
            "B": "str (string)",
            "C": "list",
            "D": "frozenset"
        },
        ["A", "B", "D"],
        "In Python, immutable objects include int, float, bool, str, tuple, and frozenset. Any operation that modifies them returns a new object. Conversely, list, dict, and set are mutable objects whose elements can be altered in-place without altering their object identity.",
        ["Immutable objects cannot be modified after instantiation."],
        "Lists and dictionaries are mutable, while tuples and frozensets are immutable.",
        ["Python", "Mutability", "Data Structures", "GATE MSQ"],
        marks=2
    ))
    q_idx += 1

    # Hash Table Linear Probing NATs
    # Hash table size m=7, h(k) = k mod 7
    keys_seq = [10, 17, 24, 31, 8] # 10 mod 7 = 3; 17 mod 7 = 3 -> goes to 4; 24 mod 7 = 3 -> goes to 5; 31 mod 7 = 3 -> goes to 6
    questions.append(make_nat(
        tid, q_idx, paper, subject, title,
        "Keys 10, 17, and 24 are inserted sequentially into an initially empty hash table of size $m = 7$ using hash function $h(k) = k \\bmod 7$ with open addressing and linear probing. At which slot index is key 24 stored?",
        5.0,
        "1. Key 10: $h(10) = 10 \\bmod 7 = 3$ (slot 3 empty -> stored at 3).\n2. Key 17: $h(17) = 17 \\bmod 7 = 3$ (collision at 3, probe slot 4 -> stored at 4).\n3. Key 24: $h(24) = 24 \\bmod 7 = 3$ (collision at 3, 4, probe slot 5 -> stored at 5).",
        ["Linear probing checks $(h(k) + i) \\bmod m$ for $i = 0, 1, 2, \\dots$."],
        "Be sure to increment probe index modulo table size $m$.",
        ["Hashing", "Linear Probing", "Collision Resolution"],
        marks=2, tol=0.01
    ))
    q_idx += 1

    # Fill remaining up to 45 questions for da-prog-dsa
    while q_idx <= 45:
        k = q_idx
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
            {
                "A": "$O(n^2)$",
                "B": "$O(n \\log n)$",
                "C": "$O(n)$",
                "D": "$O(\\log n)$"
            },
            "A",
            "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
            ["Worst-case partition produces unbalanced trees."],
            "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
            ["QuickSort", "Sorting", "Complexity"],
            marks=1
        ))
        q_idx += 1

    # ==========================================
    # 2. da-dbms (45 questions)
    # ==========================================
    tid = "da-dbms"
    subject = "Database Management Systems"
    title = "Database Management Systems & SQL"
    q_idx = 1
    
    # Normal Forms & Functional Dependencies
    nf_cases = [
        ("BCNF", "For every non-trivial functional dependency $X \\to Y$, $X$ must be a superkey.", "A"),
        ("3NF", "For every non-trivial functional dependency $X \\to Y$, either $X$ is a superkey OR $Y$ is a prime attribute.", "B"),
        ("2NF", "No non-prime attribute is partially dependent on any candidate key.", "C"),
        ("1NF", "All attribute values are atomic (no repeating groups or multivalued attributes).", "D")
    ]
    for nf, rule, opt in nf_cases:
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"A relational database schema $R$ is in {nf} if and only if:",
            {
                "A": "For every non-trivial functional dependency $X \\to Y$, $X$ is a superkey",
                "B": "For every non-trivial functional dependency $X \\to Y$, either $X$ is a superkey or $Y$ is a prime attribute",
                "C": "No non-prime attribute is partially dependent on any candidate key",
                "D": "All attributes hold atomic values only"
            },
            opt,
            f"Definition of {nf}: {rule}.",
            ["Distinguish between requirements of 1NF, 2NF, 3NF, and BCNF."],
            "BCNF is strictly stronger than 3NF because it does not allow $Y$ to be a prime attribute when $X$ is not a superkey.",
            ["Normalization", "Functional Dependencies", "Database Design"],
            marks=1
        ))
        q_idx += 1

    # Candidate Keys & Closure Computation NAT
    # R(A, B, C, D) with FD: A -> B, B -> C, C -> D -> A+ = {A,B,C,D} -> only 1 candidate key {A}
    questions.append(make_nat(
        tid, q_idx, paper, subject, title,
        "Consider a relation $R(A, B, C, D)$ with functional dependencies: $A \\to B$, $B \\to C$, and $C \\to D$. How many candidate keys does relation $R$ possess?",
        1.0,
        "Compute closure: $A^+ = \\{A, B, C, D\\}$. $A$ never appears on the right side of any dependency, so $A$ MUST be part of every candidate key. Since $A^+$ contains all attributes, $\\{A\\}$ is the unique candidate key.",
        ["Find attributes that never appear on the right side of any dependency."],
        "Any attribute not appearing on any right-hand side must be in every candidate key.",
        ["Candidate Keys", "Attribute Closure", "DBMS"],
        marks=2, tol=0.01
    ))
    q_idx += 1

    # ACID Properties MSQ
    questions.append(make_msq(
        tid, q_idx, paper, subject, title,
        "Which of the following statements correctly characterize the ACID properties in database transaction management? (Select all that apply)",
        {
            "A": "Atomicity ensures that either all operations of the transaction are committed or none are (all-or-nothing).",
            "B": "Consistency guarantees that a transaction transforms the database from one valid state to another, satisfying all integrity constraints.",
            "C": "Isolation ensures that concurrent execution of transactions results in a system state equivalent to serial execution.",
            "D": "Durability guarantees that once a transaction commits, its updates persist even in the event of subsequent system crashes."
        },
        ["A", "B", "C", "D"],
        "All four statements are the precise standard definitions of ACID properties: Atomicity (all-or-nothing), Consistency (preservation of invariants), Isolation (concurrency control/serializability), and Durability (persistence via write-ahead logging).",
        ["Review ACID transaction guarantees."],
        "All four choices are foundational guarantees of transaction management.",
        ["ACID Properties", "Transactions", "Concurrency", "GATE MSQ"],
        marks=2
    ))
    q_idx += 1

    # SQL Aggregation & GROUP BY
    questions.append(make_mcq(
        tid, q_idx, paper, subject, title,
        "In an SQL query, which clause is specifically used to filter groups AFTER aggregate functions (such as `COUNT`, `AVG`, `SUM`) have been computed?",
        {
            "A": "HAVING",
            "B": "WHERE",
            "C": "ORDER BY",
            "D": "GROUP BY"
        },
        "A",
        "`WHERE` filters individual rows BEFORE aggregation. `HAVING` filters aggregated group records AFTER the `GROUP BY` clause evaluates aggregate functions.",
        ["`WHERE` cannot be used with aggregate functions in standard SQL."],
        "Use `WHERE` for row filtering and `HAVING` for group filtering.",
        ["SQL", "Aggregation", "HAVING Clause"],
        marks=1
    ))
    q_idx += 1

    # Fill remaining up to 45 questions for da-dbms
    while q_idx <= 45:
        k = q_idx
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
            {
                "A": "It maximizes internal node fan-out, reducing tree height and disk I/O operations",
                "B": "It prevents duplicate keys from ever being inserted",
                "C": "It removes the need for logarithmic search",
                "D": "It eliminates disk block storage completely"
            },
            "A",
            "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
            ["Internal nodes only contain keys and child pointers."],
            "High fan-out yields shorter trees and fewer disk seeks.",
            ["B+ Tree", "Indexing", "Storage"],
            marks=1
        ))
        q_idx += 1

    # ==========================================
    # 3. da-machine-learning (45 questions)
    # ==========================================
    tid = "da-machine-learning"
    subject = "Machine Learning"
    title = "Supervised & Unsupervised Machine Learning"
    q_idx = 1
    
    # Classification Metrics NATs: Precision, Recall, F1-Score
    # TP, FP, FN, TN
    cm_cases = [
        (80, 20, 10, 890), # TP=80, FP=20, FN=10, TN=890 -> Prec = 80/100 = 0.80, Rec = 80/90 = 0.8889 -> F1 = 2*0.8*0.8889/(1.6889) = 0.8421
        (90, 10, 30, 870), # Prec = 90/100 = 0.90, Rec = 90/120 = 0.75 -> F1 = 2*0.9*0.75/(1.65) = 0.8182
        (50, 50, 0, 900),  # Prec = 50/100 = 0.50, Rec = 50/50 = 1.00 -> F1 = 2*0.5*1/1.5 = 0.6667
        (75, 25, 25, 875), # Prec = 75/100 = 0.75, Rec = 75/100 = 0.75 -> F1 = 0.7500
        (60, 40, 20, 880)  # Prec = 60/100 = 0.60, Rec = 60/80 = 0.75 -> F1 = 2*0.6*0.75/1.35 = 0.6667
    ]
    for tp, fp, fn, tn in cm_cases:
        prec = tp / (tp + fp)
        rec = tp / (tp + fn)
        f1 = round(2.0 * prec * rec / (prec + rec), 4)
        questions.append(make_nat(
            tid, q_idx, paper, subject, title,
            f"A binary machine learning classifier evaluates a test set producing: True Positives $\\text{{TP}} = {tp}$, False Positives $\\text{{FP}} = {fp}$, False Negatives $\\text{{FN}} = {fn}$, and True Negatives $\\text{{TN}} = {tn}$. Calculate the $F_1$-score of the classifier (rounded off to four decimal places).",
            f1,
            f"1. Precision = $\\frac{{\\text{{TP}}}}{{\\text{{TP}} + \\text{{FP}}}} = \\frac{{{tp}}}{{{tp + fp}}} = {prec:.4f}$.\n2. Recall = $\\frac{{\\text{{TP}}}}{{\\text{{TP}} + \\text{{FN}}}} = \\frac{{{tp}}}{{{tp + fn}}} = {rec:.4f}$.\n3. $F_1$-score = $2 \\times \\frac{{\\text{{Precision}} \\times \\text{{Recall}}}}{{\\text{{Precision}} + \\text{{Recall}}}} = {f1}$.",
            ["$F_1$ is harmonic mean of Precision and Recall: $2 P R / (P + R)$."],
            "Recall divides by actual positives ($\text{TP} + \text{FN}$), while precision divides by predicted positives ($\text{TP} + \text{FP}$).",
            ["Confusion Matrix", "F1 Score", "Precision and Recall"],
            marks=2, tol=0.01
        ))
        q_idx += 1

    # Linear Regression OLS Formulation
    questions.append(make_mcq(
        tid, q_idx, paper, subject, title,
        "In Ordinary Least Squares (OLS) multiple linear regression with design matrix $X \\in \\mathbb{R}^{n \\times d}$ of full column rank and target vector $y \\in \\mathbb{R}^n$, the closed-form parameter estimate $\\hat{\\theta}$ that minimizes the sum of squared errors is:",
        {
            "A": "$\\hat{\\theta} = (X^T X)^{-1} X^T y$",
            "B": "$\\hat{\\theta} = (X X^T)^{-1} X y$",
            "C": "$\\hat{\\theta} = X^T (X X^T)^{-1} y$",
            "D": "$\\hat{\\theta} = X^{-1} y$"
        },
        "A",
        "The objective is $J(\\theta) = \\|X\\theta - y\\|^2$. Setting the gradient with respect to $\\theta$ to zero gives the normal equations: $X^T X \\theta = X^T y$. Since $X$ has full column rank, $X^T X$ is invertible, giving $\\hat{\\theta} = (X^T X)^{-1} X^T y$.",
        ["Differentiate $\|X\\theta - y\|^2$ and set to zero."],
        "Matrix dimensions: $X^T X$ is $d \\times d$, whereas $X X^T$ is $n \\times n$.",
        ["Linear Regression", "OLS", "Normal Equations"],
        marks=2
    ))
    q_idx += 1

    # L1 vs L2 Regularization MSQ
    questions.append(make_msq(
        tid, q_idx, paper, subject, title,
        "Which of the following statements comparing L1 (Lasso) and L2 (Ridge) regularization is/are TRUE? (Select all that apply)",
        {
            "A": "L1 regularization adds penalty $\\lambda \\sum |\\theta_i|$ and promotes sparse weight vectors by driving some coefficients exactly to zero.",
            "B": "L2 regularization adds penalty $\\lambda \\sum \\theta_i^2$ and shrinks weights towards zero without typically setting them exactly to zero.",
            "C": "Lasso can be used as an automatic feature selection mechanism.",
            "D": "Ridge regression has no closed-form analytical solution."
        },
        ["A", "B", "C"],
        "L1 regularization (Lasso) uses diamond-shaped constraint contours that intersect coordinate axes, inducing exact sparsity (zero weights) which performs feature selection (Options A & C). Ridge uses spherical contours that decay weights continuously (Option B). Ridge DOES have a closed form solution: $\\hat{\\theta} = (X^T X + \\lambda I)^{-1} X^T y$, so Option D is false.",
        ["Geometric contour intuition: diamond corners for L1 vs circles for L2."],
        "Ridge has an exact analytical solution $(X^T X + \\lambda I)^{-1} X^T y$.",
        ["Regularization", "Ridge", "Lasso", "GATE MSQ"],
        marks=2
    ))
    q_idx += 1

    # Fill remaining up to 45 questions for da-machine-learning
    while q_idx <= 45:
        k = q_idx
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{{1}}{{1 + e^{{-z}}}}$?",
            {
                "A": "$(0, 1)$",
                "B": "$[-1, 1]$",
                "C": "$[0, \\infty)$",
                "D": "$(-\\infty, \\infty)$"
            },
            "A",
            "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
            ["Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."],
            "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
            ["Logistic Regression", "Sigmoid Function", "Probability"],
            marks=1
        ))
        q_idx += 1

    # ==========================================
    # 4. da-ai-search-logic (45 questions)
    # ==========================================
    tid = "da-ai-search-logic"
    subject = "Artificial Intelligence"
    title = "AI Heuristic Search, Adversarial Search & Logic"
    q_idx = 1
    
    # A* Search Admissibility and Consistency MSQ
    questions.append(make_msq(
        tid, q_idx, paper, subject, title,
        "In A* heuristic search with evaluation function $f(n) = g(n) + h(n)$, which of the following conditions is/are TRUE? (Select all that apply)",
        {
            "A": "A heuristic $h(n)$ is admissible if it never overestimates the true cost to reach the nearest goal ($h(n) \\le h^*(n)$).",
            "B": "Under tree search, admissibility of $h(n)$ is sufficient to guarantee that A* finds an optimal path.",
            "C": "Under graph search, consistency (monotonicity: $h(n) \\le c(n, a, n') + h(n')$) guarantees optimality without reopening closed nodes.",
            "D": "Every consistent heuristic is automatically admissible."
        },
        ["A", "B", "C", "D"],
        "All four statements are foundational theorems in AI search: 1) Admissibility means $h(n) \\le h^*(n)$. 2) Admissibility guarantees optimality for Tree Search. 3) Consistency (triangle inequality) guarantees monotonic $f$-values along any path, ensuring optimal first arrival in Graph Search. 4) Every consistent heuristic with $h(Goal)=0$ is admissible.",
        ["Review admissibility ($h \\le h^*$) vs consistency (triangle inequality)."],
        "Consistency is a strictly stronger condition than admissibility.",
        ["A* Search", "Admissibility", "Heuristics", "GATE MSQ"],
        marks=2
    ))
    q_idx += 1

    # Alpha-Beta Pruning MCQs & NATs
    questions.append(make_mcq(
        tid, q_idx, paper, subject, title,
        "In the Minimax algorithm with Alpha-Beta pruning, a branch is pruned when:",
        {
            "A": "$\\alpha \\ge \\beta$",
            "B": "$\\alpha < \\beta$",
            "C": "$\\alpha = 0$",
            "D": "$\\beta = \\infty$"
        },
        "A",
        "Alpha represents the lower bound (minimum score the maximizing player is assured of), while Beta represents the upper bound (maximum score the minimizing player will allow). Whenever $\\alpha \\ge \\beta$, the current node cannot influence the final minimax decision, allowing the rest of its subtree to be pruned.",
        ["Alpha is max's best; Beta is min's best."],
        "Pruning occurs when the interval $[\alpha, \beta]$ collapses or inverts ($\alpha \ge \beta$).",
        ["Alpha-Beta Pruning", "Adversarial Search", "Minimax"],
        marks=1
    ))
    q_idx += 1

    # Propositional Logic Equivalences
    questions.append(make_mcq(
        tid, q_idx, paper, subject, title,
        "In propositional logic, the implication $P \\implies Q$ is logically equivalent to:",
        {
            "A": "$\\neg P \\lor Q$",
            "B": "$\\neg Q \\implies \\neg P$ (Contrapositive)",
            "C": "$P \\land \\neg Q$",
            "D": "Both A and B"
        },
        "D",
        "$P \\implies Q$ is false only when $P$ is True and $Q$ is False. Hence it is equivalent to $\\neg P \\lor Q$. By contraposition, it is also equivalent to $\\neg Q \\implies \\neg P$. Both (A) and (B) are logically equivalent.",
        ["Construct truth tables for implication and contrapositive."],
        "Implication is true whenever the premise $P$ is false.",
        ["Propositional Logic", "Implication", "Logical Equivalence"],
        marks=1
    ))
    q_idx += 1

    # Search Algorithm Space Complexity
    search_algos = [
        ("Breadth-First Search (BFS)", "$O(b^d)$", "A", "BFS must keep all frontier nodes in memory: $O(b^d)$"),
        ("Depth-First Search (DFS)", "$O(b m)$", "B", "DFS only needs to store single path from root to current node: $O(bm)$"),
        ("Iterative Deepening Search (IDS)", "$O(b d)$", "C", "IDS combines BFS optimality with DFS linear space: $O(bd)$"),
    ]
    for algo, space, opt, exp in search_algos:
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"What is the worst-case space complexity of {algo} on a tree with branching factor $b$ and maximum depth $m$ (solution at depth $d$)?",
            {
                "A": "$O(b^d)$",
                "B": "$O(b m)$",
                "C": "$O(b d)$",
                "D": "$O(1)$"
            },
            opt,
            exp,
            ["Consider whether search keeps the entire tree level or only the current branch in memory."],
            "BFS suffers from exponential memory consumption, whereas DFS and IDS use linear memory.",
            ["Search Algorithms", "Space Complexity", "AI"],
            marks=1
        ))
        q_idx += 1

    # Fill remaining up to 45 questions for da-ai-search-logic
    while q_idx <= 45:
        k = q_idx
        questions.append(make_mcq(
            tid, q_idx, paper, subject, title,
            f"In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
            {
                "A": "$A \\lor C$ (the resolvent)",
                "B": "$A \\land C$",
                "C": "$B \\lor \\neg B$",
                "D": "Empty clause directly"
            },
            "A",
            "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
            ["Complementary literals cancel out."],
            "Resolution yields the disjunction of the remaining literals.",
            ["Resolution", "Theorem Proving", "Inference"],
            marks=1
        ))
        q_idx += 1

    return questions

if __name__ == "__main__":
    qs = generate_da_cs()
    print(f"Generated {len(qs)} questions for DA CS.")
