import { Question } from '../types';

export const EXPANDED_QUESTION_BANK: Question[] = [
  {
    "id": "ra-math-la-q01",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Consider the matrix $A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}$. What are the eigenvalues of $A$?",
    "options": [
      {
        "id": "A",
        "text": "$\\lambda = 3, 1$"
      },
      {
        "id": "B",
        "text": "$\\lambda = 4, 0$"
      },
      {
        "id": "C",
        "text": "$\\lambda = -3, -1$"
      },
      {
        "id": "D",
        "text": "$\\lambda = 6, 1$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The characteristic equation is $\\det(A - \\lambda I) = (\\lambda - 2)(\\lambda - 2) - (1\\times 1) = \\lambda^2 - 4\\lambda + 3 = 0$. Roots are $\\lambda_1 = 3, \\lambda_2 = 1$.",
    "hints": [
      "Use $\\text{Trace}(A) = \\lambda_1 + \\lambda_2$ and $\\det(A) = \\lambda_1 \\lambda_2$."
    ],
    "trapAlert": "Double-check sign when computing $-(b \\times c)$.",
    "tags": [
      "Eigenvalues",
      "Characteristic Equation",
      "Linear Algebra"
    ]
  },
  {
    "id": "ra-math-la-q02",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Let $A = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}$. Calculate the trace of $A^2$.",
    "correctAnswer": {
      "exact": 10.0,
      "min": 9.9,
      "max": 10.1
    },
    "explanation": "If the eigenvalues of $A$ are $\\lambda_1 = 3, \\lambda_2 = 1$, then the eigenvalues of $A^2$ are $\\lambda_1^2 = 9$ and $\\lambda_2^2 = 1$. Thus $\\text{Trace}(A^2) = 9 + 1 = 10$.",
    "hints": [
      "Trace of $A^k = \\sum \\lambda_i^k$."
    ],
    "trapAlert": "Avoid multiplying the full matrix if eigenvalues are known.",
    "tags": [
      "Trace",
      "Matrix Powers",
      "Eigenvalues"
    ]
  },
  {
    "id": "ra-math-la-q03",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Find the determinant of the matrix $M = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}$.",
    "correctAnswer": {
      "exact": 3.0,
      "min": 2.99,
      "max": 3.01
    },
    "explanation": "$\\det(M) = (2)(2) - (1)(1) = 4 - 1 = 3$.",
    "hints": [
      "Formula for $2\\times 2$ determinant: $ad - bc$."
    ],
    "trapAlert": "Watch out for signs when subtracting the off-diagonal product.",
    "tags": [
      "Determinant",
      "Matrix Algebra"
    ]
  },
  {
    "id": "ra-math-la-q04",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Consider the matrix $A = \\begin{bmatrix} 3 & 2 \\\\ 1 & 4 \\end{bmatrix}$. What are the eigenvalues of $A$?",
    "options": [
      {
        "id": "A",
        "text": "$\\lambda = 5, 2$"
      },
      {
        "id": "B",
        "text": "$\\lambda = 6, 1$"
      },
      {
        "id": "C",
        "text": "$\\lambda = -5, -2$"
      },
      {
        "id": "D",
        "text": "$\\lambda = 10, 2$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The characteristic equation is $\\det(A - \\lambda I) = (\\lambda - 3)(\\lambda - 4) - (2\\times 1) = \\lambda^2 - 7\\lambda + 10 = 0$. Roots are $\\lambda_1 = 5, \\lambda_2 = 2$.",
    "hints": [
      "Use $\\text{Trace}(A) = \\lambda_1 + \\lambda_2$ and $\\det(A) = \\lambda_1 \\lambda_2$."
    ],
    "trapAlert": "Double-check sign when computing $-(b \\times c)$.",
    "tags": [
      "Eigenvalues",
      "Characteristic Equation",
      "Linear Algebra"
    ]
  },
  {
    "id": "ra-math-la-q05",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Let $A = \\begin{bmatrix} 3 & 2 \\\\ 1 & 4 \\end{bmatrix}$. Calculate the trace of $A^2$.",
    "correctAnswer": {
      "exact": 29.0,
      "min": 28.9,
      "max": 29.1
    },
    "explanation": "If the eigenvalues of $A$ are $\\lambda_1 = 5, \\lambda_2 = 2$, then the eigenvalues of $A^2$ are $\\lambda_1^2 = 25$ and $\\lambda_2^2 = 4$. Thus $\\text{Trace}(A^2) = 25 + 4 = 29$.",
    "hints": [
      "Trace of $A^k = \\sum \\lambda_i^k$."
    ],
    "trapAlert": "Avoid multiplying the full matrix if eigenvalues are known.",
    "tags": [
      "Trace",
      "Matrix Powers",
      "Eigenvalues"
    ]
  },
  {
    "id": "ra-math-la-q06",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Find the determinant of the matrix $M = \\begin{bmatrix} 3 & 2 \\\\ 1 & 4 \\end{bmatrix}$.",
    "correctAnswer": {
      "exact": 10.0,
      "min": 9.99,
      "max": 10.01
    },
    "explanation": "$\\det(M) = (3)(4) - (2)(1) = 12 - 2 = 10$.",
    "hints": [
      "Formula for $2\\times 2$ determinant: $ad - bc$."
    ],
    "trapAlert": "Watch out for signs when subtracting the off-diagonal product.",
    "tags": [
      "Determinant",
      "Matrix Algebra"
    ]
  },
  {
    "id": "ra-math-la-q07",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Consider the matrix $A = \\begin{bmatrix} 5 & 4 \\\\ 1 & 2 \\end{bmatrix}$. What are the eigenvalues of $A$?",
    "options": [
      {
        "id": "A",
        "text": "$\\lambda = 6, 1$"
      },
      {
        "id": "B",
        "text": "$\\lambda = 7, 0$"
      },
      {
        "id": "C",
        "text": "$\\lambda = -6, -1$"
      },
      {
        "id": "D",
        "text": "$\\lambda = 12, 1$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The characteristic equation is $\\det(A - \\lambda I) = (\\lambda - 5)(\\lambda - 2) - (4\\times 1) = \\lambda^2 - 7\\lambda + 6 = 0$. Roots are $\\lambda_1 = 6, \\lambda_2 = 1$.",
    "hints": [
      "Use $\\text{Trace}(A) = \\lambda_1 + \\lambda_2$ and $\\det(A) = \\lambda_1 \\lambda_2$."
    ],
    "trapAlert": "Double-check sign when computing $-(b \\times c)$.",
    "tags": [
      "Eigenvalues",
      "Characteristic Equation",
      "Linear Algebra"
    ]
  },
  {
    "id": "ra-math-la-q08",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Let $A = \\begin{bmatrix} 5 & 4 \\\\ 1 & 2 \\end{bmatrix}$. Calculate the trace of $A^2$.",
    "correctAnswer": {
      "exact": 37.0,
      "min": 36.9,
      "max": 37.1
    },
    "explanation": "If the eigenvalues of $A$ are $\\lambda_1 = 6, \\lambda_2 = 1$, then the eigenvalues of $A^2$ are $\\lambda_1^2 = 36$ and $\\lambda_2^2 = 1$. Thus $\\text{Trace}(A^2) = 36 + 1 = 37$.",
    "hints": [
      "Trace of $A^k = \\sum \\lambda_i^k$."
    ],
    "trapAlert": "Avoid multiplying the full matrix if eigenvalues are known.",
    "tags": [
      "Trace",
      "Matrix Powers",
      "Eigenvalues"
    ]
  },
  {
    "id": "ra-math-la-q09",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Find the determinant of the matrix $M = \\begin{bmatrix} 5 & 4 \\\\ 1 & 2 \\end{bmatrix}$.",
    "correctAnswer": {
      "exact": 6.0,
      "min": 5.99,
      "max": 6.01
    },
    "explanation": "$\\det(M) = (5)(2) - (4)(1) = 10 - 4 = 6$.",
    "hints": [
      "Formula for $2\\times 2$ determinant: $ad - bc$."
    ],
    "trapAlert": "Watch out for signs when subtracting the off-diagonal product.",
    "tags": [
      "Determinant",
      "Matrix Algebra"
    ]
  },
  {
    "id": "ra-math-la-q10",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Consider the matrix $A = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$. What are the eigenvalues of $A$?",
    "options": [
      {
        "id": "A",
        "text": "$\\lambda = 5, 2$"
      },
      {
        "id": "B",
        "text": "$\\lambda = 6, 1$"
      },
      {
        "id": "C",
        "text": "$\\lambda = -5, -2$"
      },
      {
        "id": "D",
        "text": "$\\lambda = 10, 2$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The characteristic equation is $\\det(A - \\lambda I) = (\\lambda - 4)(\\lambda - 3) - (1\\times 2) = \\lambda^2 - 7\\lambda + 10 = 0$. Roots are $\\lambda_1 = 5, \\lambda_2 = 2$.",
    "hints": [
      "Use $\\text{Trace}(A) = \\lambda_1 + \\lambda_2$ and $\\det(A) = \\lambda_1 \\lambda_2$."
    ],
    "trapAlert": "Double-check sign when computing $-(b \\times c)$.",
    "tags": [
      "Eigenvalues",
      "Characteristic Equation",
      "Linear Algebra"
    ]
  },
  {
    "id": "ra-math-la-q11",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Let $A = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$. Calculate the trace of $A^2$.",
    "correctAnswer": {
      "exact": 29.0,
      "min": 28.9,
      "max": 29.1
    },
    "explanation": "If the eigenvalues of $A$ are $\\lambda_1 = 5, \\lambda_2 = 2$, then the eigenvalues of $A^2$ are $\\lambda_1^2 = 25$ and $\\lambda_2^2 = 4$. Thus $\\text{Trace}(A^2) = 25 + 4 = 29$.",
    "hints": [
      "Trace of $A^k = \\sum \\lambda_i^k$."
    ],
    "trapAlert": "Avoid multiplying the full matrix if eigenvalues are known.",
    "tags": [
      "Trace",
      "Matrix Powers",
      "Eigenvalues"
    ]
  },
  {
    "id": "ra-math-la-q12",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Find the determinant of the matrix $M = \\begin{bmatrix} 4 & 1 \\\\ 2 & 3 \\end{bmatrix}$.",
    "correctAnswer": {
      "exact": 10.0,
      "min": 9.99,
      "max": 10.01
    },
    "explanation": "$\\det(M) = (4)(3) - (1)(2) = 12 - 2 = 10$.",
    "hints": [
      "Formula for $2\\times 2$ determinant: $ad - bc$."
    ],
    "trapAlert": "Watch out for signs when subtracting the off-diagonal product.",
    "tags": [
      "Determinant",
      "Matrix Algebra"
    ]
  },
  {
    "id": "ra-math-la-q13",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Consider the matrix $A = \\begin{bmatrix} 6 & 2 \\\\ 2 & 3 \\end{bmatrix}$. What are the eigenvalues of $A$?",
    "options": [
      {
        "id": "A",
        "text": "$\\lambda = 7, 2$"
      },
      {
        "id": "B",
        "text": "$\\lambda = 8, 1$"
      },
      {
        "id": "C",
        "text": "$\\lambda = -7, -2$"
      },
      {
        "id": "D",
        "text": "$\\lambda = 14, 2$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The characteristic equation is $\\det(A - \\lambda I) = (\\lambda - 6)(\\lambda - 3) - (2\\times 2) = \\lambda^2 - 9\\lambda + 14 = 0$. Roots are $\\lambda_1 = 7, \\lambda_2 = 2$.",
    "hints": [
      "Use $\\text{Trace}(A) = \\lambda_1 + \\lambda_2$ and $\\det(A) = \\lambda_1 \\lambda_2$."
    ],
    "trapAlert": "Double-check sign when computing $-(b \\times c)$.",
    "tags": [
      "Eigenvalues",
      "Characteristic Equation",
      "Linear Algebra"
    ]
  },
  {
    "id": "ra-math-la-q14",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Let $A = \\begin{bmatrix} 6 & 2 \\\\ 2 & 3 \\end{bmatrix}$. Calculate the trace of $A^2$.",
    "correctAnswer": {
      "exact": 53.0,
      "min": 52.9,
      "max": 53.1
    },
    "explanation": "If the eigenvalues of $A$ are $\\lambda_1 = 7, \\lambda_2 = 2$, then the eigenvalues of $A^2$ are $\\lambda_1^2 = 49$ and $\\lambda_2^2 = 4$. Thus $\\text{Trace}(A^2) = 49 + 4 = 53$.",
    "hints": [
      "Trace of $A^k = \\sum \\lambda_i^k$."
    ],
    "trapAlert": "Avoid multiplying the full matrix if eigenvalues are known.",
    "tags": [
      "Trace",
      "Matrix Powers",
      "Eigenvalues"
    ]
  },
  {
    "id": "ra-math-la-q15",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Find the determinant of the matrix $M = \\begin{bmatrix} 6 & 2 \\\\ 2 & 3 \\end{bmatrix}$.",
    "correctAnswer": {
      "exact": 14.0,
      "min": 13.99,
      "max": 14.01
    },
    "explanation": "$\\det(M) = (6)(3) - (2)(2) = 18 - 4 = 14$.",
    "hints": [
      "Formula for $2\\times 2$ determinant: $ad - bc$."
    ],
    "trapAlert": "Watch out for signs when subtracting the off-diagonal product.",
    "tags": [
      "Determinant",
      "Matrix Algebra"
    ]
  },
  {
    "id": "ra-math-la-q16",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Consider the matrix $A = \\begin{bmatrix} 1 & 4 \\\\ 2 & 3 \\end{bmatrix}$. What are the eigenvalues of $A$?",
    "options": [
      {
        "id": "A",
        "text": "$\\lambda = 5, -1$"
      },
      {
        "id": "B",
        "text": "$\\lambda = 6, -2$"
      },
      {
        "id": "C",
        "text": "$\\lambda = -5, 1$"
      },
      {
        "id": "D",
        "text": "$\\lambda = 10, -1$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The characteristic equation is $\\det(A - \\lambda I) = (\\lambda - 1)(\\lambda - 3) - (4\\times 2) = \\lambda^2 - 4\\lambda + -5 = 0$. Roots are $\\lambda_1 = 5, \\lambda_2 = -1$.",
    "hints": [
      "Use $\\text{Trace}(A) = \\lambda_1 + \\lambda_2$ and $\\det(A) = \\lambda_1 \\lambda_2$."
    ],
    "trapAlert": "Double-check sign when computing $-(b \\times c)$.",
    "tags": [
      "Eigenvalues",
      "Characteristic Equation",
      "Linear Algebra"
    ]
  },
  {
    "id": "ra-math-la-q17",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Let $A = \\begin{bmatrix} 1 & 4 \\\\ 2 & 3 \\end{bmatrix}$. Calculate the trace of $A^2$.",
    "correctAnswer": {
      "exact": 26.0,
      "min": 25.9,
      "max": 26.1
    },
    "explanation": "If the eigenvalues of $A$ are $\\lambda_1 = 5, \\lambda_2 = -1$, then the eigenvalues of $A^2$ are $\\lambda_1^2 = 25$ and $\\lambda_2^2 = 1$. Thus $\\text{Trace}(A^2) = 25 + 1 = 26$.",
    "hints": [
      "Trace of $A^k = \\sum \\lambda_i^k$."
    ],
    "trapAlert": "Avoid multiplying the full matrix if eigenvalues are known.",
    "tags": [
      "Trace",
      "Matrix Powers",
      "Eigenvalues"
    ]
  },
  {
    "id": "ra-math-la-q18",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Find the determinant of the matrix $M = \\begin{bmatrix} 1 & 4 \\\\ 2 & 3 \\end{bmatrix}$.",
    "correctAnswer": {
      "exact": -5.0,
      "min": -5.01,
      "max": -4.99
    },
    "explanation": "$\\det(M) = (1)(3) - (4)(2) = 3 - 8 = -5$.",
    "hints": [
      "Formula for $2\\times 2$ determinant: $ad - bc$."
    ],
    "trapAlert": "Watch out for signs when subtracting the off-diagonal product.",
    "tags": [
      "Determinant",
      "Matrix Algebra"
    ]
  },
  {
    "id": "ra-math-la-q19",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Consider the matrix $A = \\begin{bmatrix} 7 & 3 \\\\ 2 & 2 \\end{bmatrix}$. What are the eigenvalues of $A$?",
    "options": [
      {
        "id": "A",
        "text": "$\\lambda = 8, 1$"
      },
      {
        "id": "B",
        "text": "$\\lambda = 9, 0$"
      },
      {
        "id": "C",
        "text": "$\\lambda = -8, -1$"
      },
      {
        "id": "D",
        "text": "$\\lambda = 16, 1$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The characteristic equation is $\\det(A - \\lambda I) = (\\lambda - 7)(\\lambda - 2) - (3\\times 2) = \\lambda^2 - 9\\lambda + 8 = 0$. Roots are $\\lambda_1 = 8, \\lambda_2 = 1$.",
    "hints": [
      "Use $\\text{Trace}(A) = \\lambda_1 + \\lambda_2$ and $\\det(A) = \\lambda_1 \\lambda_2$."
    ],
    "trapAlert": "Double-check sign when computing $-(b \\times c)$.",
    "tags": [
      "Eigenvalues",
      "Characteristic Equation",
      "Linear Algebra"
    ]
  },
  {
    "id": "ra-math-la-q20",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Let $A = \\begin{bmatrix} 7 & 3 \\\\ 2 & 2 \\end{bmatrix}$. Calculate the trace of $A^2$.",
    "correctAnswer": {
      "exact": 65.0,
      "min": 64.9,
      "max": 65.1
    },
    "explanation": "If the eigenvalues of $A$ are $\\lambda_1 = 8, \\lambda_2 = 1$, then the eigenvalues of $A^2$ are $\\lambda_1^2 = 64$ and $\\lambda_2^2 = 1$. Thus $\\text{Trace}(A^2) = 64 + 1 = 65$.",
    "hints": [
      "Trace of $A^k = \\sum \\lambda_i^k$."
    ],
    "trapAlert": "Avoid multiplying the full matrix if eigenvalues are known.",
    "tags": [
      "Trace",
      "Matrix Powers",
      "Eigenvalues"
    ]
  },
  {
    "id": "ra-math-la-q21",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Find the determinant of the matrix $M = \\begin{bmatrix} 7 & 3 \\\\ 2 & 2 \\end{bmatrix}$.",
    "correctAnswer": {
      "exact": 8.0,
      "min": 7.99,
      "max": 8.01
    },
    "explanation": "$\\det(M) = (7)(2) - (3)(2) = 14 - 6 = 8$.",
    "hints": [
      "Formula for $2\\times 2$ determinant: $ad - bc$."
    ],
    "trapAlert": "Watch out for signs when subtracting the off-diagonal product.",
    "tags": [
      "Determinant",
      "Matrix Algebra"
    ]
  },
  {
    "id": "ra-math-la-q22",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Consider the matrix $A = \\begin{bmatrix} 8 & -2 \\\\ -2 & 5 \\end{bmatrix}$. What are the eigenvalues of $A$?",
    "options": [
      {
        "id": "A",
        "text": "$\\lambda = 9, 4$"
      },
      {
        "id": "B",
        "text": "$\\lambda = 10, 3$"
      },
      {
        "id": "C",
        "text": "$\\lambda = -9, -4$"
      },
      {
        "id": "D",
        "text": "$\\lambda = 18, 4$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The characteristic equation is $\\det(A - \\lambda I) = (\\lambda - 8)(\\lambda - 5) - (-2\\times -2) = \\lambda^2 - 13\\lambda + 36 = 0$. Roots are $\\lambda_1 = 9, \\lambda_2 = 4$.",
    "hints": [
      "Use $\\text{Trace}(A) = \\lambda_1 + \\lambda_2$ and $\\det(A) = \\lambda_1 \\lambda_2$."
    ],
    "trapAlert": "Double-check sign when computing $-(b \\times c)$.",
    "tags": [
      "Eigenvalues",
      "Characteristic Equation",
      "Linear Algebra"
    ]
  },
  {
    "id": "ra-math-la-q23",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Let $A = \\begin{bmatrix} 8 & -2 \\\\ -2 & 5 \\end{bmatrix}$. Calculate the trace of $A^2$.",
    "correctAnswer": {
      "exact": 97.0,
      "min": 96.9,
      "max": 97.1
    },
    "explanation": "If the eigenvalues of $A$ are $\\lambda_1 = 9, \\lambda_2 = 4$, then the eigenvalues of $A^2$ are $\\lambda_1^2 = 81$ and $\\lambda_2^2 = 16$. Thus $\\text{Trace}(A^2) = 81 + 16 = 97$.",
    "hints": [
      "Trace of $A^k = \\sum \\lambda_i^k$."
    ],
    "trapAlert": "Avoid multiplying the full matrix if eigenvalues are known.",
    "tags": [
      "Trace",
      "Matrix Powers",
      "Eigenvalues"
    ]
  },
  {
    "id": "ra-math-la-q24",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Find the determinant of the matrix $M = \\begin{bmatrix} 8 & -2 \\\\ -2 & 5 \\end{bmatrix}$.",
    "correctAnswer": {
      "exact": 36.0,
      "min": 35.99,
      "max": 36.01
    },
    "explanation": "$\\det(M) = (8)(5) - (-2)(-2) = 40 - 4 = 36$.",
    "hints": [
      "Formula for $2\\times 2$ determinant: $ad - bc$."
    ],
    "trapAlert": "Watch out for signs when subtracting the off-diagonal product.",
    "tags": [
      "Determinant",
      "Matrix Algebra"
    ]
  },
  {
    "id": "ra-math-la-q25",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (MSQ)",
    "type": "MSQ",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Hard",
    "text": "Which of the following statements is/are TRUE for an orthogonal matrix $Q \\in \\mathbb{R}^{n \\times n}$? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "$Q^T Q = Q Q^T = I$"
      },
      {
        "id": "B",
        "text": "$\\det(Q) = \\pm 1$"
      },
      {
        "id": "C",
        "text": "The eigenvalues of $Q$ have unit modulus ($|\\lambda| = 1$)"
      },
      {
        "id": "D",
        "text": "$Q$ always has only strictly positive real eigenvalues"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "For an orthogonal matrix $Q$, $Q^{-1} = Q^T$, so $Q^T Q = I$. Taking determinants, $(\\det Q)^2 = 1 \\implies \\det Q = \\pm 1$. Length of vectors is preserved: $\\|Qx\\| = \\|x\\|$, which forces all complex/real eigenvalues to satisfy $|\\lambda| = 1$. Option D is false since eigenvalues can be $-1$ or complex conjugate pairs with unit magnitude.",
    "hints": [
      "Orthogonal matrices preserve Euclidean norm."
    ],
    "trapAlert": "Rotation matrices have $\\det = +1$, but reflection matrices have $\\det = -1$. Both are orthogonal.",
    "tags": [
      "Orthogonal Matrix",
      "Properties",
      "GATE MSQ"
    ]
  },
  {
    "id": "ra-math-la-q26",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (MSQ)",
    "type": "MSQ",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Hard",
    "text": "Which of the following statements is/are TRUE for an orthogonal matrix $Q \\in \\mathbb{R}^{n \\times n}$? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "$Q^T Q = Q Q^T = I$"
      },
      {
        "id": "B",
        "text": "$\\det(Q) = \\pm 1$"
      },
      {
        "id": "C",
        "text": "The eigenvalues of $Q$ have unit modulus ($|\\lambda| = 1$)"
      },
      {
        "id": "D",
        "text": "$Q$ always has only strictly positive real eigenvalues"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "For an orthogonal matrix $Q$, $Q^{-1} = Q^T$, so $Q^T Q = I$. Taking determinants, $(\\det Q)^2 = 1 \\implies \\det Q = \\pm 1$. Length of vectors is preserved: $\\|Qx\\| = \\|x\\|$, which forces all complex/real eigenvalues to satisfy $|\\lambda| = 1$. Option D is false since eigenvalues can be $-1$ or complex conjugate pairs with unit magnitude.",
    "hints": [
      "Orthogonal matrices preserve Euclidean norm."
    ],
    "trapAlert": "Rotation matrices have $\\det = +1$, but reflection matrices have $\\det = -1$. Both are orthogonal.",
    "tags": [
      "Orthogonal Matrix",
      "Properties",
      "GATE MSQ"
    ]
  },
  {
    "id": "ra-math-la-q27",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (MSQ)",
    "type": "MSQ",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Hard",
    "text": "Which of the following statements is/are TRUE for an orthogonal matrix $Q \\in \\mathbb{R}^{n \\times n}$? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "$Q^T Q = Q Q^T = I$"
      },
      {
        "id": "B",
        "text": "$\\det(Q) = \\pm 1$"
      },
      {
        "id": "C",
        "text": "The eigenvalues of $Q$ have unit modulus ($|\\lambda| = 1$)"
      },
      {
        "id": "D",
        "text": "$Q$ always has only strictly positive real eigenvalues"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "For an orthogonal matrix $Q$, $Q^{-1} = Q^T$, so $Q^T Q = I$. Taking determinants, $(\\det Q)^2 = 1 \\implies \\det Q = \\pm 1$. Length of vectors is preserved: $\\|Qx\\| = \\|x\\|$, which forces all complex/real eigenvalues to satisfy $|\\lambda| = 1$. Option D is false since eigenvalues can be $-1$ or complex conjugate pairs with unit magnitude.",
    "hints": [
      "Orthogonal matrices preserve Euclidean norm."
    ],
    "trapAlert": "Rotation matrices have $\\det = +1$, but reflection matrices have $\\det = -1$. Both are orthogonal.",
    "tags": [
      "Orthogonal Matrix",
      "Properties",
      "GATE MSQ"
    ]
  },
  {
    "id": "ra-math-la-q28",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (MSQ)",
    "type": "MSQ",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Hard",
    "text": "Which of the following statements is/are TRUE for an orthogonal matrix $Q \\in \\mathbb{R}^{n \\times n}$? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "$Q^T Q = Q Q^T = I$"
      },
      {
        "id": "B",
        "text": "$\\det(Q) = \\pm 1$"
      },
      {
        "id": "C",
        "text": "The eigenvalues of $Q$ have unit modulus ($|\\lambda| = 1$)"
      },
      {
        "id": "D",
        "text": "$Q$ always has only strictly positive real eigenvalues"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "For an orthogonal matrix $Q$, $Q^{-1} = Q^T$, so $Q^T Q = I$. Taking determinants, $(\\det Q)^2 = 1 \\implies \\det Q = \\pm 1$. Length of vectors is preserved: $\\|Qx\\| = \\|x\\|$, which forces all complex/real eigenvalues to satisfy $|\\lambda| = 1$. Option D is false since eigenvalues can be $-1$ or complex conjugate pairs with unit magnitude.",
    "hints": [
      "Orthogonal matrices preserve Euclidean norm."
    ],
    "trapAlert": "Rotation matrices have $\\det = +1$, but reflection matrices have $\\det = -1$. Both are orthogonal.",
    "tags": [
      "Orthogonal Matrix",
      "Properties",
      "GATE MSQ"
    ]
  },
  {
    "id": "ra-math-la-q29",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (MSQ)",
    "type": "MSQ",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Hard",
    "text": "Which of the following statements is/are TRUE for an orthogonal matrix $Q \\in \\mathbb{R}^{n \\times n}$? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "$Q^T Q = Q Q^T = I$"
      },
      {
        "id": "B",
        "text": "$\\det(Q) = \\pm 1$"
      },
      {
        "id": "C",
        "text": "The eigenvalues of $Q$ have unit modulus ($|\\lambda| = 1$)"
      },
      {
        "id": "D",
        "text": "$Q$ always has only strictly positive real eigenvalues"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "For an orthogonal matrix $Q$, $Q^{-1} = Q^T$, so $Q^T Q = I$. Taking determinants, $(\\det Q)^2 = 1 \\implies \\det Q = \\pm 1$. Length of vectors is preserved: $\\|Qx\\| = \\|x\\|$, which forces all complex/real eigenvalues to satisfy $|\\lambda| = 1$. Option D is false since eigenvalues can be $-1$ or complex conjugate pairs with unit magnitude.",
    "hints": [
      "Orthogonal matrices preserve Euclidean norm."
    ],
    "trapAlert": "Rotation matrices have $\\det = +1$, but reflection matrices have $\\det = -1$. Both are orthogonal.",
    "tags": [
      "Orthogonal Matrix",
      "Properties",
      "GATE MSQ"
    ]
  },
  {
    "id": "ra-math-la-q30",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A linear transformation $T: \\mathbb{R}^{3} \\to \\mathbb{R}^{3}$ has nullity (dimension of null space) equal to 1. According to the Rank-Nullity Theorem, what is the rank of the transformation matrix?",
    "correctAnswer": {
      "exact": 2.0,
      "min": 1.99,
      "max": 2.01
    },
    "explanation": "By the Rank-Nullity Theorem: $\\text{Rank}(T) + \\text{Nullity}(T) = \\dim(\\text{Domain}) = 3$. Hence $\\text{Rank}(T) = 3 - 1 = 2$.",
    "hints": [
      "Rank + Nullity = number of columns."
    ],
    "trapAlert": "Nullity relates to the domain dimension, not the codomain dimension.",
    "tags": [
      "Rank-Nullity",
      "Vector Spaces"
    ]
  },
  {
    "id": "ra-math-la-q31",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A linear transformation $T: \\mathbb{R}^{4} \\to \\mathbb{R}^{4}$ has nullity (dimension of null space) equal to 2. According to the Rank-Nullity Theorem, what is the rank of the transformation matrix?",
    "correctAnswer": {
      "exact": 2.0,
      "min": 1.99,
      "max": 2.01
    },
    "explanation": "By the Rank-Nullity Theorem: $\\text{Rank}(T) + \\text{Nullity}(T) = \\dim(\\text{Domain}) = 4$. Hence $\\text{Rank}(T) = 4 - 2 = 2$.",
    "hints": [
      "Rank + Nullity = number of columns."
    ],
    "trapAlert": "Nullity relates to the domain dimension, not the codomain dimension.",
    "tags": [
      "Rank-Nullity",
      "Vector Spaces"
    ]
  },
  {
    "id": "ra-math-la-q32",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A linear transformation $T: \\mathbb{R}^{5} \\to \\mathbb{R}^{5}$ has nullity (dimension of null space) equal to 3. According to the Rank-Nullity Theorem, what is the rank of the transformation matrix?",
    "correctAnswer": {
      "exact": 2.0,
      "min": 1.99,
      "max": 2.01
    },
    "explanation": "By the Rank-Nullity Theorem: $\\text{Rank}(T) + \\text{Nullity}(T) = \\dim(\\text{Domain}) = 5$. Hence $\\text{Rank}(T) = 5 - 3 = 2$.",
    "hints": [
      "Rank + Nullity = number of columns."
    ],
    "trapAlert": "Nullity relates to the domain dimension, not the codomain dimension.",
    "tags": [
      "Rank-Nullity",
      "Vector Spaces"
    ]
  },
  {
    "id": "ra-math-la-q33",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A linear transformation $T: \\mathbb{R}^{4} \\to \\mathbb{R}^{4}$ has nullity (dimension of null space) equal to 1. According to the Rank-Nullity Theorem, what is the rank of the transformation matrix?",
    "correctAnswer": {
      "exact": 3.0,
      "min": 2.99,
      "max": 3.01
    },
    "explanation": "By the Rank-Nullity Theorem: $\\text{Rank}(T) + \\text{Nullity}(T) = \\dim(\\text{Domain}) = 4$. Hence $\\text{Rank}(T) = 4 - 1 = 3$.",
    "hints": [
      "Rank + Nullity = number of columns."
    ],
    "trapAlert": "Nullity relates to the domain dimension, not the codomain dimension.",
    "tags": [
      "Rank-Nullity",
      "Vector Spaces"
    ]
  },
  {
    "id": "ra-math-la-q34",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Under which condition does a non-homogeneous system of linear equations $Ax = b$ have no solution (inconsistent)?",
    "options": [
      {
        "id": "A",
        "text": "$\\text{rank}(A) < \\text{rank}([A|b])$"
      },
      {
        "id": "B",
        "text": "$\\text{rank}(A) = \\text{rank}([A|b]) = n$ (number of variables)"
      },
      {
        "id": "C",
        "text": "$\\text{rank}(A) = \\text{rank}([A|b]) < n$"
      },
      {
        "id": "D",
        "text": "$\\det(A) = 0$ and $b = 0$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Rouch\u00e9\u2013Capelli theorem: If $\\text{rank}(A) \\neq \\text{rank}([A|b])$, no solution exists. If equal to $n$, unique solution. If equal but $< n$, infinitely many solutions with $n - r$ free parameters.",
    "hints": [
      "Recall Rouch\u00e9\u2013Capelli Theorem."
    ],
    "trapAlert": "Don't confuse homogeneous ($b=0$) with non-homogeneous systems.",
    "tags": [
      "System of Equations",
      "Consistency",
      "Rank"
    ]
  },
  {
    "id": "ra-math-la-q35",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Under which condition does a non-homogeneous system of linear equations $Ax = b$ have unique solution?",
    "options": [
      {
        "id": "A",
        "text": "$\\text{rank}(A) < \\text{rank}([A|b])$"
      },
      {
        "id": "B",
        "text": "$\\text{rank}(A) = \\text{rank}([A|b]) = n$ (number of variables)"
      },
      {
        "id": "C",
        "text": "$\\text{rank}(A) = \\text{rank}([A|b]) < n$"
      },
      {
        "id": "D",
        "text": "$\\det(A) = 0$ and $b = 0$"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Rouch\u00e9\u2013Capelli theorem: If $\\text{rank}(A) \\neq \\text{rank}([A|b])$, no solution exists. If equal to $n$, unique solution. If equal but $< n$, infinitely many solutions with $n - r$ free parameters.",
    "hints": [
      "Recall Rouch\u00e9\u2013Capelli Theorem."
    ],
    "trapAlert": "Don't confuse homogeneous ($b=0$) with non-homogeneous systems.",
    "tags": [
      "System of Equations",
      "Consistency",
      "Rank"
    ]
  },
  {
    "id": "ra-math-la-q36",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Under which condition does a non-homogeneous system of linear equations $Ax = b$ have infinitely many solutions?",
    "options": [
      {
        "id": "A",
        "text": "$\\text{rank}(A) < \\text{rank}([A|b])$"
      },
      {
        "id": "B",
        "text": "$\\text{rank}(A) = \\text{rank}([A|b]) = n$ (number of variables)"
      },
      {
        "id": "C",
        "text": "$\\text{rank}(A) = \\text{rank}([A|b]) < n$"
      },
      {
        "id": "D",
        "text": "$\\det(A) = 0$ and $b = 0$"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Rouch\u00e9\u2013Capelli theorem: If $\\text{rank}(A) \\neq \\text{rank}([A|b])$, no solution exists. If equal to $n$, unique solution. If equal but $< n$, infinitely many solutions with $n - r$ free parameters.",
    "hints": [
      "Recall Rouch\u00e9\u2013Capelli Theorem."
    ],
    "trapAlert": "Don't confuse homogeneous ($b=0$) with non-homogeneous systems.",
    "tags": [
      "System of Equations",
      "Consistency",
      "Rank"
    ]
  },
  {
    "id": "ra-math-la-q37",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Let $A$ be a $2 \\times 2$ matrix satisfying $A^2 - 5A + 6I = 0$. Which of the following is an expression for $A^-1$?",
    "options": [
      {
        "id": "A",
        "text": "$A^{-1} = \\frac{1}{6}(5I - A)$"
      },
      {
        "id": "B",
        "text": "$A^{-1} = \\frac{1}{6}(A - 5I)$"
      },
      {
        "id": "C",
        "text": "$A^{-1} = 5I - A$"
      },
      {
        "id": "D",
        "text": "$A^{-1} = 6A - 5I$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Multiply $A^2 - 5A + 6I = 0$ by $A^{-1}$: $A - 5I + 6A^{-1} = 0 \\implies 6A^{-1} = 5I - A \\implies A^{-1} = \\frac{1}{6}(5I - A)$.",
    "hints": [
      "Multiply the Cayley-Hamilton equation by $A^{-1}$."
    ],
    "trapAlert": "Keep track of the signs when isolating $A^{-1}$.",
    "tags": [
      "Cayley-Hamilton",
      "Matrix Inverse"
    ]
  },
  {
    "id": "ra-math-la-q38",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Let $A$ be a $2 \\times 2$ matrix satisfying $A^2 - 5A + 6I = 0$. Which of the following is an expression for $A^-1$?",
    "options": [
      {
        "id": "A",
        "text": "$A^{-1} = \\frac{1}{6}(5I - A)$"
      },
      {
        "id": "B",
        "text": "$A^{-1} = \\frac{1}{6}(A - 5I)$"
      },
      {
        "id": "C",
        "text": "$A^{-1} = 5I - A$"
      },
      {
        "id": "D",
        "text": "$A^{-1} = 6A - 5I$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Multiply $A^2 - 5A + 6I = 0$ by $A^{-1}$: $A - 5I + 6A^{-1} = 0 \\implies 6A^{-1} = 5I - A \\implies A^{-1} = \\frac{1}{6}(5I - A)$.",
    "hints": [
      "Multiply the Cayley-Hamilton equation by $A^{-1}$."
    ],
    "trapAlert": "Keep track of the signs when isolating $A^{-1}$.",
    "tags": [
      "Cayley-Hamilton",
      "Matrix Inverse"
    ]
  },
  {
    "id": "ra-math-la-q39",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Let $A$ be a $2 \\times 2$ matrix satisfying $A^2 - 5A + 6I = 0$. Which of the following is an expression for $A^-1$?",
    "options": [
      {
        "id": "A",
        "text": "$A^{-1} = \\frac{1}{6}(5I - A)$"
      },
      {
        "id": "B",
        "text": "$A^{-1} = \\frac{1}{6}(A - 5I)$"
      },
      {
        "id": "C",
        "text": "$A^{-1} = 5I - A$"
      },
      {
        "id": "D",
        "text": "$A^{-1} = 6A - 5I$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Multiply $A^2 - 5A + 6I = 0$ by $A^{-1}$: $A - 5I + 6A^{-1} = 0 \\implies 6A^{-1} = 5I - A \\implies A^{-1} = \\frac{1}{6}(5I - A)$.",
    "hints": [
      "Multiply the Cayley-Hamilton equation by $A^{-1}$."
    ],
    "trapAlert": "Keep track of the signs when isolating $A^{-1}$.",
    "tags": [
      "Cayley-Hamilton",
      "Matrix Inverse"
    ]
  },
  {
    "id": "ra-math-la-q40",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Let $A$ be a $2 \\times 2$ matrix satisfying $A^2 - 5A + 6I = 0$. Which of the following is an expression for $A^-1$?",
    "options": [
      {
        "id": "A",
        "text": "$A^{-1} = \\frac{1}{6}(5I - A)$"
      },
      {
        "id": "B",
        "text": "$A^{-1} = \\frac{1}{6}(A - 5I)$"
      },
      {
        "id": "C",
        "text": "$A^{-1} = 5I - A$"
      },
      {
        "id": "D",
        "text": "$A^{-1} = 6A - 5I$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Multiply $A^2 - 5A + 6I = 0$ by $A^{-1}$: $A - 5I + 6A^{-1} = 0 \\implies 6A^{-1} = 5I - A \\implies A^{-1} = \\frac{1}{6}(5I - A)$.",
    "hints": [
      "Multiply the Cayley-Hamilton equation by $A^{-1}$."
    ],
    "trapAlert": "Keep track of the signs when isolating $A^{-1}$.",
    "tags": [
      "Cayley-Hamilton",
      "Matrix Inverse"
    ]
  },
  {
    "id": "ra-math-la-q41",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Let $A$ be a $2 \\times 2$ matrix satisfying $A^2 - 5A + 6I = 0$. Which of the following is an expression for $A^-1$?",
    "options": [
      {
        "id": "A",
        "text": "$A^{-1} = \\frac{1}{6}(5I - A)$"
      },
      {
        "id": "B",
        "text": "$A^{-1} = \\frac{1}{6}(A - 5I)$"
      },
      {
        "id": "C",
        "text": "$A^{-1} = 5I - A$"
      },
      {
        "id": "D",
        "text": "$A^{-1} = 6A - 5I$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Multiply $A^2 - 5A + 6I = 0$ by $A^{-1}$: $A - 5I + 6A^{-1} = 0 \\implies 6A^{-1} = 5I - A \\implies A^{-1} = \\frac{1}{6}(5I - A)$.",
    "hints": [
      "Multiply the Cayley-Hamilton equation by $A^{-1}$."
    ],
    "trapAlert": "Keep track of the signs when isolating $A^{-1}$.",
    "tags": [
      "Cayley-Hamilton",
      "Matrix Inverse"
    ]
  },
  {
    "id": "ra-math-la-q42",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "If the product of two eigenvalues of a $3 \\times 3$ matrix $M$ is 84 and the determinant of $M$ is 252, what is the third eigenvalue $\\lambda_3$?",
    "correctAnswer": {
      "exact": 3.0,
      "min": 2.99,
      "max": 3.01
    },
    "explanation": "For any $3 \\times 3$ matrix, $\\det(M) = \\lambda_1 \\lambda_2 \\lambda_3$. Given $\\lambda_1 \\lambda_2 = 84$ and $\\det(M) = 252$, we have $\\lambda_3 = \\frac{252}{84} = 3.0$.",
    "hints": [
      "Determinant is the product of all eigenvalues."
    ],
    "trapAlert": "Determinant includes all eigenvalues with their algebraic multiplicities.",
    "tags": [
      "Eigenvalues",
      "Determinant Product"
    ]
  },
  {
    "id": "ra-math-la-q43",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "If the product of two eigenvalues of a $3 \\times 3$ matrix $M$ is 86 and the determinant of $M$ is 258, what is the third eigenvalue $\\lambda_3$?",
    "correctAnswer": {
      "exact": 3.0,
      "min": 2.99,
      "max": 3.01
    },
    "explanation": "For any $3 \\times 3$ matrix, $\\det(M) = \\lambda_1 \\lambda_2 \\lambda_3$. Given $\\lambda_1 \\lambda_2 = 86$ and $\\det(M) = 258$, we have $\\lambda_3 = \\frac{258}{86} = 3.0$.",
    "hints": [
      "Determinant is the product of all eigenvalues."
    ],
    "trapAlert": "Determinant includes all eigenvalues with their algebraic multiplicities.",
    "tags": [
      "Eigenvalues",
      "Determinant Product"
    ]
  },
  {
    "id": "ra-math-la-q44",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "If the product of two eigenvalues of a $3 \\times 3$ matrix $M$ is 88 and the determinant of $M$ is 264, what is the third eigenvalue $\\lambda_3$?",
    "correctAnswer": {
      "exact": 3.0,
      "min": 2.99,
      "max": 3.01
    },
    "explanation": "For any $3 \\times 3$ matrix, $\\det(M) = \\lambda_1 \\lambda_2 \\lambda_3$. Given $\\lambda_1 \\lambda_2 = 88$ and $\\det(M) = 264$, we have $\\lambda_3 = \\frac{264}{88} = 3.0$.",
    "hints": [
      "Determinant is the product of all eigenvalues."
    ],
    "trapAlert": "Determinant includes all eigenvalues with their algebraic multiplicities.",
    "tags": [
      "Eigenvalues",
      "Determinant Product"
    ]
  },
  {
    "id": "ra-math-la-q45",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-la",
    "topicTitle": "Linear Algebra",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "If the product of two eigenvalues of a $3 \\times 3$ matrix $M$ is 90 and the determinant of $M$ is 270, what is the third eigenvalue $\\lambda_3$?",
    "correctAnswer": {
      "exact": 3.0,
      "min": 2.99,
      "max": 3.01
    },
    "explanation": "For any $3 \\times 3$ matrix, $\\det(M) = \\lambda_1 \\lambda_2 \\lambda_3$. Given $\\lambda_1 \\lambda_2 = 90$ and $\\det(M) = 270$, we have $\\lambda_3 = \\frac{270}{90} = 3.0$.",
    "hints": [
      "Determinant is the product of all eigenvalues."
    ],
    "trapAlert": "Determinant includes all eigenvalues with their algebraic multiplicities.",
    "tags": [
      "Eigenvalues",
      "Determinant Product"
    ]
  },
  {
    "id": "ra-math-calc-de-q01",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the integrating factor (IF) for the first-order linear differential equation $\\frac{dy}{dx} + 1y = e^{2x}$?",
    "options": [
      {
        "id": "A",
        "text": "$e^{1x}$"
      },
      {
        "id": "B",
        "text": "$e^{-1x}$"
      },
      {
        "id": "C",
        "text": "$1x$"
      },
      {
        "id": "D",
        "text": "$\\ln(1x)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "For $\\frac{dy}{dx} + P(x)y = Q(x)$, the integrating factor is $\\text{IF} = e^{\\int P(x) dx} = e^{\\int 1 dx} = e^{1x}$.",
    "hints": [
      "Standard form: $\\text{IF} = e^{\\int P(x) dx}$."
    ],
    "trapAlert": "Sign of $P(x)$ must match the $+ P(x)y$ form.",
    "tags": [
      "Differential Equations",
      "Integrating Factor"
    ]
  },
  {
    "id": "ra-math-calc-de-q02",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Consider $\\frac{dy}{dx} + 1y = 0$ with initial condition $y(0) = 10$. Find $y(0)$.",
    "correctAnswer": {
      "exact": 10.0,
      "min": 9.99,
      "max": 10.01
    },
    "explanation": "Given initial condition directly states $y(0) = 10$.",
    "hints": [
      "Read initial condition carefully."
    ],
    "trapAlert": "Zero evaluation.",
    "tags": [
      "Initial Value Problem",
      "ODE"
    ]
  },
  {
    "id": "ra-math-calc-de-q03",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the integrating factor (IF) for the first-order linear differential equation $\\frac{dy}{dx} + 2y = e^{2x}$?",
    "options": [
      {
        "id": "A",
        "text": "$e^{2x}$"
      },
      {
        "id": "B",
        "text": "$e^{-2x}$"
      },
      {
        "id": "C",
        "text": "$2x$"
      },
      {
        "id": "D",
        "text": "$\\ln(2x)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "For $\\frac{dy}{dx} + P(x)y = Q(x)$, the integrating factor is $\\text{IF} = e^{\\int P(x) dx} = e^{\\int 2 dx} = e^{2x}$.",
    "hints": [
      "Standard form: $\\text{IF} = e^{\\int P(x) dx}$."
    ],
    "trapAlert": "Sign of $P(x)$ must match the $+ P(x)y$ form.",
    "tags": [
      "Differential Equations",
      "Integrating Factor"
    ]
  },
  {
    "id": "ra-math-calc-de-q04",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Consider $\\frac{dy}{dx} + 2y = 0$ with initial condition $y(0) = 20$. Find $y(0)$.",
    "correctAnswer": {
      "exact": 20.0,
      "min": 19.99,
      "max": 20.01
    },
    "explanation": "Given initial condition directly states $y(0) = 20$.",
    "hints": [
      "Read initial condition carefully."
    ],
    "trapAlert": "Zero evaluation.",
    "tags": [
      "Initial Value Problem",
      "ODE"
    ]
  },
  {
    "id": "ra-math-calc-de-q05",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the integrating factor (IF) for the first-order linear differential equation $\\frac{dy}{dx} + 3y = e^{2x}$?",
    "options": [
      {
        "id": "A",
        "text": "$e^{3x}$"
      },
      {
        "id": "B",
        "text": "$e^{-3x}$"
      },
      {
        "id": "C",
        "text": "$3x$"
      },
      {
        "id": "D",
        "text": "$\\ln(3x)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "For $\\frac{dy}{dx} + P(x)y = Q(x)$, the integrating factor is $\\text{IF} = e^{\\int P(x) dx} = e^{\\int 3 dx} = e^{3x}$.",
    "hints": [
      "Standard form: $\\text{IF} = e^{\\int P(x) dx}$."
    ],
    "trapAlert": "Sign of $P(x)$ must match the $+ P(x)y$ form.",
    "tags": [
      "Differential Equations",
      "Integrating Factor"
    ]
  },
  {
    "id": "ra-math-calc-de-q06",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Consider $\\frac{dy}{dx} + 3y = 0$ with initial condition $y(0) = 30$. Find $y(0)$.",
    "correctAnswer": {
      "exact": 30.0,
      "min": 29.99,
      "max": 30.01
    },
    "explanation": "Given initial condition directly states $y(0) = 30$.",
    "hints": [
      "Read initial condition carefully."
    ],
    "trapAlert": "Zero evaluation.",
    "tags": [
      "Initial Value Problem",
      "ODE"
    ]
  },
  {
    "id": "ra-math-calc-de-q07",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the integrating factor (IF) for the first-order linear differential equation $\\frac{dy}{dx} + 4y = e^{2x}$?",
    "options": [
      {
        "id": "A",
        "text": "$e^{4x}$"
      },
      {
        "id": "B",
        "text": "$e^{-4x}$"
      },
      {
        "id": "C",
        "text": "$4x$"
      },
      {
        "id": "D",
        "text": "$\\ln(4x)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "For $\\frac{dy}{dx} + P(x)y = Q(x)$, the integrating factor is $\\text{IF} = e^{\\int P(x) dx} = e^{\\int 4 dx} = e^{4x}$.",
    "hints": [
      "Standard form: $\\text{IF} = e^{\\int P(x) dx}$."
    ],
    "trapAlert": "Sign of $P(x)$ must match the $+ P(x)y$ form.",
    "tags": [
      "Differential Equations",
      "Integrating Factor"
    ]
  },
  {
    "id": "ra-math-calc-de-q08",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Consider $\\frac{dy}{dx} + 4y = 0$ with initial condition $y(0) = 40$. Find $y(0)$.",
    "correctAnswer": {
      "exact": 40.0,
      "min": 39.99,
      "max": 40.01
    },
    "explanation": "Given initial condition directly states $y(0) = 40$.",
    "hints": [
      "Read initial condition carefully."
    ],
    "trapAlert": "Zero evaluation.",
    "tags": [
      "Initial Value Problem",
      "ODE"
    ]
  },
  {
    "id": "ra-math-calc-de-q09",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the integrating factor (IF) for the first-order linear differential equation $\\frac{dy}{dx} + 5y = e^{2x}$?",
    "options": [
      {
        "id": "A",
        "text": "$e^{5x}$"
      },
      {
        "id": "B",
        "text": "$e^{-5x}$"
      },
      {
        "id": "C",
        "text": "$5x$"
      },
      {
        "id": "D",
        "text": "$\\ln(5x)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "For $\\frac{dy}{dx} + P(x)y = Q(x)$, the integrating factor is $\\text{IF} = e^{\\int P(x) dx} = e^{\\int 5 dx} = e^{5x}$.",
    "hints": [
      "Standard form: $\\text{IF} = e^{\\int P(x) dx}$."
    ],
    "trapAlert": "Sign of $P(x)$ must match the $+ P(x)y$ form.",
    "tags": [
      "Differential Equations",
      "Integrating Factor"
    ]
  },
  {
    "id": "ra-math-calc-de-q10",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Consider $\\frac{dy}{dx} + 5y = 0$ with initial condition $y(0) = 50$. Find $y(0)$.",
    "correctAnswer": {
      "exact": 50.0,
      "min": 49.99,
      "max": 50.01
    },
    "explanation": "Given initial condition directly states $y(0) = 50$.",
    "hints": [
      "Read initial condition carefully."
    ],
    "trapAlert": "Zero evaluation.",
    "tags": [
      "Initial Value Problem",
      "ODE"
    ]
  },
  {
    "id": "ra-math-calc-de-q11",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Using the Newton-Raphson method to solve $f(x) = x^2 - 2 = 0$ with initial estimate $x_0 = 1.0$, compute the first approximation $x_1$ (rounded off to two decimal places).",
    "correctAnswer": {
      "exact": 1.5,
      "min": 1.45,
      "max": 1.55
    },
    "explanation": "Formula: $x_{k+1} = x_k - \\frac{f(x_k)}{f'(x_k)}$. x_1 = 1.0 - (1 - 2)/(2*1) = 1 + 0.5 = 1.5.",
    "hints": [
      "$x_1 = x_0 - f(x_0)/f'(x_0)$."
    ],
    "trapAlert": "Be careful with derivative sign and evaluation order.",
    "tags": [
      "Newton-Raphson",
      "Numerical Methods"
    ]
  },
  {
    "id": "ra-math-calc-de-q12",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Using the Newton-Raphson method to solve $f(x) = x^2 - 4 = 0$ with initial estimate $x_0 = 3.0$, compute the first approximation $x_1$ (rounded off to two decimal places).",
    "correctAnswer": {
      "exact": 2.17,
      "min": 2.12,
      "max": 2.22
    },
    "explanation": "Formula: $x_{k+1} = x_k - \\frac{f(x_k)}{f'(x_k)}$. x_1 = 3 - (9 - 4)/(6) = 3 - 5/6 = 2.167.",
    "hints": [
      "$x_1 = x_0 - f(x_0)/f'(x_0)$."
    ],
    "trapAlert": "Be careful with derivative sign and evaluation order.",
    "tags": [
      "Newton-Raphson",
      "Numerical Methods"
    ]
  },
  {
    "id": "ra-math-calc-de-q13",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Using the Newton-Raphson method to solve $f(x) = x^3 - 8 = 0$ with initial estimate $x_0 = 2.5$, compute the first approximation $x_1$ (rounded off to two decimal places).",
    "correctAnswer": {
      "exact": 2.08,
      "min": 2.03,
      "max": 2.13
    },
    "explanation": "Formula: $x_{k+1} = x_k - \\frac{f(x_k)}{f'(x_k)}$. x_1 = 2.5 - (15.625 - 8)/(3*6.25) = 2.5 - 7.625/18.75 = 2.093.",
    "hints": [
      "$x_1 = x_0 - f(x_0)/f'(x_0)$."
    ],
    "trapAlert": "Be careful with derivative sign and evaluation order.",
    "tags": [
      "Newton-Raphson",
      "Numerical Methods"
    ]
  },
  {
    "id": "ra-math-calc-de-q14",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Using the Newton-Raphson method to solve $f(x) = x^2 - 9 = 0$ with initial estimate $x_0 = 4.0$, compute the first approximation $x_1$ (rounded off to two decimal places).",
    "correctAnswer": {
      "exact": 3.12,
      "min": 3.07,
      "max": 3.17
    },
    "explanation": "Formula: $x_{k+1} = x_k - \\frac{f(x_k)}{f'(x_k)}$. x_1 = 4 - (16 - 9)/8 = 4 - 7/8 = 3.125.",
    "hints": [
      "$x_1 = x_0 - f(x_0)/f'(x_0)$."
    ],
    "trapAlert": "Be careful with derivative sign and evaluation order.",
    "tags": [
      "Newton-Raphson",
      "Numerical Methods"
    ]
  },
  {
    "id": "ra-math-calc-de-q15",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Using the Newton-Raphson method to solve $f(x) = x^2 - 16 = 0$ with initial estimate $x_0 = 5.0$, compute the first approximation $x_1$ (rounded off to two decimal places).",
    "correctAnswer": {
      "exact": 4.1,
      "min": 4.05,
      "max": 4.15
    },
    "explanation": "Formula: $x_{k+1} = x_k - \\frac{f(x_k)}{f'(x_k)}$. x_1 = 5 - (25 - 16)/10 = 5 - 0.9 = 4.1.",
    "hints": [
      "$x_1 = x_0 - f(x_0)/f'(x_0)$."
    ],
    "trapAlert": "Be careful with derivative sign and evaluation order.",
    "tags": [
      "Newton-Raphson",
      "Numerical Methods"
    ]
  },
  {
    "id": "ra-math-calc-de-q16",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (MSQ)",
    "type": "MSQ",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Hard",
    "text": "Which of the following statements regarding Numerical Integration methods is/are TRUE?",
    "options": [
      {
        "id": "A",
        "text": "Simpson's 1/3 rule requires the number of intervals ($n$) to be an even integer."
      },
      {
        "id": "B",
        "text": "The global truncation error of Trapezoidal rule is of the order $O(h^2)$."
      },
      {
        "id": "C",
        "text": "Simpson's 1/3 rule gives the EXACT integral for polynomials up to degree 3 (cubic)."
      },
      {
        "id": "D",
        "text": "Trapezoidal rule requires the number of sub-intervals to be a multiple of 3."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Simpson's 1/3 rule fits parabolas (quadratic) over pairs of subintervals, requiring $n$ to be even, and its error term depends on the 4th derivative $f^{(4)}(\\xi)$, making it exact for polynomials up to degree 3. Trapezoidal error is $O(h^2)$. Option D applies to Simpson's 3/8 rule, not Trapezoidal.",
    "hints": [
      "Review order of accuracy and requirements for Simpson 1/3 vs Trapezoidal."
    ],
    "trapAlert": "Simpson 1/3 is exact for cubic polynomials despite being based on parabolas!",
    "tags": [
      "Simpson 1/3",
      "Trapezoidal",
      "Numerical Integration",
      "GATE MSQ"
    ]
  },
  {
    "id": "ra-math-calc-de-q17",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the Laplace transform $\\mathcal{L}\\{f(t) = e^{3t}\\}$?",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{s - 3}$"
      },
      {
        "id": "B",
        "text": "$\\frac{s}{s^2 + 16}$"
      },
      {
        "id": "C",
        "text": "$\\frac{5}{s^2 + 25}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{s^2}$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Standard transform: $\\mathcal{L}\\{e^{at}\\} = \\frac{1}{s-a}$",
    "hints": [
      "Check standard Laplace transform table and frequency shifting theorem."
    ],
    "trapAlert": "Do not mix up $\\sin(\\omega t)$ (constant numerator $\\omega$) and $\\cos(\\omega t)$ ($s$ in numerator).",
    "tags": [
      "Laplace Transform",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q18",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the Laplace transform $\\mathcal{L}\\{f(t) = \\sin(4t)\\}$?",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{s+3}$"
      },
      {
        "id": "B",
        "text": "$\\frac{4}{s^2 + 16}$"
      },
      {
        "id": "C",
        "text": "$\\frac{5}{s^2 + 25}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{s^2}$"
      }
    ],
    "correctAnswer": "B",
    "explanation": "$\\mathcal{L}\\{\\sin(\\omega t)\\} = \\frac{\\omega}{s^2 + \\omega^2}$",
    "hints": [
      "Check standard Laplace transform table and frequency shifting theorem."
    ],
    "trapAlert": "Do not mix up $\\sin(\\omega t)$ (constant numerator $\\omega$) and $\\cos(\\omega t)$ ($s$ in numerator).",
    "tags": [
      "Laplace Transform",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q19",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the Laplace transform $\\mathcal{L}\\{f(t) = \\cos(5t)\\}$?",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{s+3}$"
      },
      {
        "id": "B",
        "text": "$\\frac{s}{s^2 + 16}$"
      },
      {
        "id": "C",
        "text": "$\\frac{s}{s^2 + 25}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{s^2}$"
      }
    ],
    "correctAnswer": "C",
    "explanation": "$\\mathcal{L}\\{\\cos(\\omega t)\\} = \\frac{s}{s^2 + \\omega^2}$",
    "hints": [
      "Check standard Laplace transform table and frequency shifting theorem."
    ],
    "trapAlert": "Do not mix up $\\sin(\\omega t)$ (constant numerator $\\omega$) and $\\cos(\\omega t)$ ($s$ in numerator).",
    "tags": [
      "Laplace Transform",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q20",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the Laplace transform $\\mathcal{L}\\{f(t) = t^2\\}$?",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{1}{s+3}$"
      },
      {
        "id": "B",
        "text": "$\\frac{s}{s^2 + 16}$"
      },
      {
        "id": "C",
        "text": "$\\frac{5}{s^2 + 25}$"
      },
      {
        "id": "D",
        "text": "$\\frac{2}{s^3}$"
      }
    ],
    "correctAnswer": "D",
    "explanation": "$\\mathcal{L}\\{t^n\\} = \\frac{n!}{s^{n+1}}$",
    "hints": [
      "Check standard Laplace transform table and frequency shifting theorem."
    ],
    "trapAlert": "Do not mix up $\\sin(\\omega t)$ (constant numerator $\\omega$) and $\\cos(\\omega t)$ ($s$ in numerator).",
    "tags": [
      "Laplace Transform",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q21",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the Laplace transform $\\mathcal{L}\\{f(t) = e^{-2t} \\cos(3t)\\}$?",
    "options": [
      {
        "id": "A",
        "text": "$\\frac{s+2}{(s+2)^2 + 9}$"
      },
      {
        "id": "B",
        "text": "$\\frac{s}{s^2 + 16}$"
      },
      {
        "id": "C",
        "text": "$\\frac{5}{s^2 + 25}$"
      },
      {
        "id": "D",
        "text": "$\\frac{1}{s^2}$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Frequency shift: $\\mathcal{L}\\{e^{at}f(t)\\} = F(s-a)$",
    "hints": [
      "Check standard Laplace transform table and frequency shifting theorem."
    ],
    "trapAlert": "Do not mix up $\\sin(\\omega t)$ (constant numerator $\\omega$) and $\\cos(\\omega t)$ ($s$ in numerator).",
    "tags": [
      "Laplace Transform",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q22",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Find the value of $x$ where the function $f(x, y) = 2x^2 + 4y^2 - 8x - 8y + 10$ attains its minimum.",
    "correctAnswer": {
      "exact": 2.0,
      "min": 1.99,
      "max": 2.01
    },
    "explanation": "Set partial derivative $\\frac{\\partial f}{\\partial x} = 0$: $4x - 8 = 0 \\implies x = \\frac{8}{4} = 2.0$.",
    "hints": [
      "Set $\\partial f / \\partial x = 0$."
    ],
    "trapAlert": "Check that second derivative $\\partial^2 f / \\partial x^2 > 0$ for a minimum.",
    "tags": [
      "Partial Derivatives",
      "Optimization"
    ]
  },
  {
    "id": "ra-math-calc-de-q23",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Find the value of $x$ where the function $f(x, y) = 3x^2 + 4y^2 - 12x - 8y + 10$ attains its minimum.",
    "correctAnswer": {
      "exact": 2.0,
      "min": 1.99,
      "max": 2.01
    },
    "explanation": "Set partial derivative $\\frac{\\partial f}{\\partial x} = 0$: $6x - 12 = 0 \\implies x = \\frac{12}{6} = 2.0$.",
    "hints": [
      "Set $\\partial f / \\partial x = 0$."
    ],
    "trapAlert": "Check that second derivative $\\partial^2 f / \\partial x^2 > 0$ for a minimum.",
    "tags": [
      "Partial Derivatives",
      "Optimization"
    ]
  },
  {
    "id": "ra-math-calc-de-q24",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Find the value of $x$ where the function $f(x, y) = 4x^2 + 4y^2 - 16x - 8y + 10$ attains its minimum.",
    "correctAnswer": {
      "exact": 2.0,
      "min": 1.99,
      "max": 2.01
    },
    "explanation": "Set partial derivative $\\frac{\\partial f}{\\partial x} = 0$: $8x - 16 = 0 \\implies x = \\frac{16}{8} = 2.0$.",
    "hints": [
      "Set $\\partial f / \\partial x = 0$."
    ],
    "trapAlert": "Check that second derivative $\\partial^2 f / \\partial x^2 > 0$ for a minimum.",
    "tags": [
      "Partial Derivatives",
      "Optimization"
    ]
  },
  {
    "id": "ra-math-calc-de-q25",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Find the value of $x$ where the function $f(x, y) = 5x^2 + 4y^2 - 20x - 8y + 10$ attains its minimum.",
    "correctAnswer": {
      "exact": 2.0,
      "min": 1.99,
      "max": 2.01
    },
    "explanation": "Set partial derivative $\\frac{\\partial f}{\\partial x} = 0$: $10x - 20 = 0 \\implies x = \\frac{20}{10} = 2.0$.",
    "hints": [
      "Set $\\partial f / \\partial x = 0$."
    ],
    "trapAlert": "Check that second derivative $\\partial^2 f / \\partial x^2 > 0$ for a minimum.",
    "tags": [
      "Partial Derivatives",
      "Optimization"
    ]
  },
  {
    "id": "ra-math-calc-de-q26",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Find the value of $x$ where the function $f(x, y) = 6x^2 + 4y^2 - 24x - 8y + 10$ attains its minimum.",
    "correctAnswer": {
      "exact": 2.0,
      "min": 1.99,
      "max": 2.01
    },
    "explanation": "Set partial derivative $\\frac{\\partial f}{\\partial x} = 0$: $12x - 24 = 0 \\implies x = \\frac{24}{12} = 2.0$.",
    "hints": [
      "Set $\\partial f / \\partial x = 0$."
    ],
    "trapAlert": "Check that second derivative $\\partial^2 f / \\partial x^2 > 0$ for a minimum.",
    "tags": [
      "Partial Derivatives",
      "Optimization"
    ]
  },
  {
    "id": "ra-math-calc-de-q27",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{4} 2x dx$.",
    "correctAnswer": {
      "exact": 16.0,
      "min": 15.99,
      "max": 16.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 16$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q28",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{1} 2x dx$.",
    "correctAnswer": {
      "exact": 1.0,
      "min": 0.99,
      "max": 1.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 1$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q29",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{2} 2x dx$.",
    "correctAnswer": {
      "exact": 4.0,
      "min": 3.99,
      "max": 4.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 4$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q30",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{3} 2x dx$.",
    "correctAnswer": {
      "exact": 9.0,
      "min": 8.99,
      "max": 9.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 9$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q31",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{4} 2x dx$.",
    "correctAnswer": {
      "exact": 16.0,
      "min": 15.99,
      "max": 16.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 16$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q32",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{1} 2x dx$.",
    "correctAnswer": {
      "exact": 1.0,
      "min": 0.99,
      "max": 1.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 1$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q33",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{2} 2x dx$.",
    "correctAnswer": {
      "exact": 4.0,
      "min": 3.99,
      "max": 4.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 4$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q34",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{3} 2x dx$.",
    "correctAnswer": {
      "exact": 9.0,
      "min": 8.99,
      "max": 9.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 9$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q35",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{4} 2x dx$.",
    "correctAnswer": {
      "exact": 16.0,
      "min": 15.99,
      "max": 16.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 16$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q36",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{1} 2x dx$.",
    "correctAnswer": {
      "exact": 1.0,
      "min": 0.99,
      "max": 1.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 1$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q37",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{2} 2x dx$.",
    "correctAnswer": {
      "exact": 4.0,
      "min": 3.99,
      "max": 4.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 4$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q38",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{3} 2x dx$.",
    "correctAnswer": {
      "exact": 9.0,
      "min": 8.99,
      "max": 9.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 9$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q39",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{4} 2x dx$.",
    "correctAnswer": {
      "exact": 16.0,
      "min": 15.99,
      "max": 16.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 16$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q40",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{1} 2x dx$.",
    "correctAnswer": {
      "exact": 1.0,
      "min": 0.99,
      "max": 1.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 1$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q41",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{2} 2x dx$.",
    "correctAnswer": {
      "exact": 4.0,
      "min": 3.99,
      "max": 4.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 4$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q42",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{3} 2x dx$.",
    "correctAnswer": {
      "exact": 9.0,
      "min": 8.99,
      "max": 9.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 9$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q43",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{4} 2x dx$.",
    "correctAnswer": {
      "exact": 16.0,
      "min": 15.99,
      "max": 16.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 16$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q44",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{1} 2x dx$.",
    "correctAnswer": {
      "exact": 1.0,
      "min": 0.99,
      "max": 1.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 1$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-math-calc-de-q45",
    "paper": "RA",
    "subject": "Engineering Mathematics",
    "topicId": "ra-math-calc-de",
    "topicTitle": "Calculus, Differential Equations & Numerical Methods",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Evaluate the definite integral $\\int_{0}^{2} 2x dx$.",
    "correctAnswer": {
      "exact": 4.0,
      "min": 3.99,
      "max": 4.01
    },
    "explanation": "$\\int_0^a 2x dx = [x^2]_0^a = a^2 = 4$.",
    "hints": [
      "Standard antiderivative $\\int 2x dx = x^2$."
    ],
    "trapAlert": "Evaluate at upper limit minus lower limit.",
    "tags": [
      "Definite Integral",
      "Calculus"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q01",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An optical incremental encoder has 250 pulses per revolution (PPR). Using 4X quadrature decoding, what is the angular measurement resolution in degrees per count (rounded off to four decimal places)?",
    "correctAnswer": {
      "exact": 0.36,
      "min": 0.36,
      "max": 0.36
    },
    "explanation": "In 4X quadrature decoding, each cycle produces 4 distinct states (rising/falling edges on channels A and B). Total counts per revolution $N = 4 \\times \\text{PPR} = 4 \\times 250 = 1000$. Angular resolution $\\Delta\\theta = \\frac{360^\\circ}{N} = \\frac{360^\\circ}{1000} = 0.36^\\circ$.",
    "hints": [
      "Quadrature decoding multiplies standard PPR by 4."
    ],
    "trapAlert": "Do not forget to multiply PPR by 4 for 4X quadrature mode.",
    "tags": [
      "Incremental Encoder",
      "Quadrature Decoding",
      "Resolution"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q02",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An optical incremental encoder has 500 pulses per revolution (PPR). Using 4X quadrature decoding, what is the angular measurement resolution in degrees per count (rounded off to four decimal places)?",
    "correctAnswer": {
      "exact": 0.18,
      "min": 0.18,
      "max": 0.18
    },
    "explanation": "In 4X quadrature decoding, each cycle produces 4 distinct states (rising/falling edges on channels A and B). Total counts per revolution $N = 4 \\times \\text{PPR} = 4 \\times 500 = 2000$. Angular resolution $\\Delta\\theta = \\frac{360^\\circ}{N} = \\frac{360^\\circ}{2000} = 0.18^\\circ$.",
    "hints": [
      "Quadrature decoding multiplies standard PPR by 4."
    ],
    "trapAlert": "Do not forget to multiply PPR by 4 for 4X quadrature mode.",
    "tags": [
      "Incremental Encoder",
      "Quadrature Decoding",
      "Resolution"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q03",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An optical incremental encoder has 1000 pulses per revolution (PPR). Using 4X quadrature decoding, what is the angular measurement resolution in degrees per count (rounded off to four decimal places)?",
    "correctAnswer": {
      "exact": 0.09,
      "min": 0.09,
      "max": 0.09
    },
    "explanation": "In 4X quadrature decoding, each cycle produces 4 distinct states (rising/falling edges on channels A and B). Total counts per revolution $N = 4 \\times \\text{PPR} = 4 \\times 1000 = 4000$. Angular resolution $\\Delta\\theta = \\frac{360^\\circ}{N} = \\frac{360^\\circ}{4000} = 0.09^\\circ$.",
    "hints": [
      "Quadrature decoding multiplies standard PPR by 4."
    ],
    "trapAlert": "Do not forget to multiply PPR by 4 for 4X quadrature mode.",
    "tags": [
      "Incremental Encoder",
      "Quadrature Decoding",
      "Resolution"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q04",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An optical incremental encoder has 1024 pulses per revolution (PPR). Using 4X quadrature decoding, what is the angular measurement resolution in degrees per count (rounded off to four decimal places)?",
    "correctAnswer": {
      "exact": 0.09,
      "min": 0.09,
      "max": 0.09
    },
    "explanation": "In 4X quadrature decoding, each cycle produces 4 distinct states (rising/falling edges on channels A and B). Total counts per revolution $N = 4 \\times \\text{PPR} = 4 \\times 1024 = 4096$. Angular resolution $\\Delta\\theta = \\frac{360^\\circ}{N} = \\frac{360^\\circ}{4096} = 0.0879^\\circ$.",
    "hints": [
      "Quadrature decoding multiplies standard PPR by 4."
    ],
    "trapAlert": "Do not forget to multiply PPR by 4 for 4X quadrature mode.",
    "tags": [
      "Incremental Encoder",
      "Quadrature Decoding",
      "Resolution"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q05",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An optical incremental encoder has 2000 pulses per revolution (PPR). Using 4X quadrature decoding, what is the angular measurement resolution in degrees per count (rounded off to four decimal places)?",
    "correctAnswer": {
      "exact": 0.04,
      "min": 0.04,
      "max": 0.04
    },
    "explanation": "In 4X quadrature decoding, each cycle produces 4 distinct states (rising/falling edges on channels A and B). Total counts per revolution $N = 4 \\times \\text{PPR} = 4 \\times 2000 = 8000$. Angular resolution $\\Delta\\theta = \\frac{360^\\circ}{N} = \\frac{360^\\circ}{8000} = 0.045^\\circ$.",
    "hints": [
      "Quadrature decoding multiplies standard PPR by 4."
    ],
    "trapAlert": "Do not forget to multiply PPR by 4 for 4X quadrature mode.",
    "tags": [
      "Incremental Encoder",
      "Quadrature Decoding",
      "Resolution"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q06",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An optical incremental encoder has 2048 pulses per revolution (PPR). Using 4X quadrature decoding, what is the angular measurement resolution in degrees per count (rounded off to four decimal places)?",
    "correctAnswer": {
      "exact": 0.04,
      "min": 0.04,
      "max": 0.04
    },
    "explanation": "In 4X quadrature decoding, each cycle produces 4 distinct states (rising/falling edges on channels A and B). Total counts per revolution $N = 4 \\times \\text{PPR} = 4 \\times 2048 = 8192$. Angular resolution $\\Delta\\theta = \\frac{360^\\circ}{N} = \\frac{360^\\circ}{8192} = 0.0439^\\circ$.",
    "hints": [
      "Quadrature decoding multiplies standard PPR by 4."
    ],
    "trapAlert": "Do not forget to multiply PPR by 4 for 4X quadrature mode.",
    "tags": [
      "Incremental Encoder",
      "Quadrature Decoding",
      "Resolution"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q07",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An optical incremental encoder has 4000 pulses per revolution (PPR). Using 4X quadrature decoding, what is the angular measurement resolution in degrees per count (rounded off to four decimal places)?",
    "correctAnswer": {
      "exact": 0.02,
      "min": 0.02,
      "max": 0.02
    },
    "explanation": "In 4X quadrature decoding, each cycle produces 4 distinct states (rising/falling edges on channels A and B). Total counts per revolution $N = 4 \\times \\text{PPR} = 4 \\times 4000 = 16000$. Angular resolution $\\Delta\\theta = \\frac{360^\\circ}{N} = \\frac{360^\\circ}{16000} = 0.0225^\\circ$.",
    "hints": [
      "Quadrature decoding multiplies standard PPR by 4."
    ],
    "trapAlert": "Do not forget to multiply PPR by 4 for 4X quadrature mode.",
    "tags": [
      "Incremental Encoder",
      "Quadrature Decoding",
      "Resolution"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q08",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An optical incremental encoder has 5000 pulses per revolution (PPR). Using 4X quadrature decoding, what is the angular measurement resolution in degrees per count (rounded off to four decimal places)?",
    "correctAnswer": {
      "exact": 0.02,
      "min": 0.02,
      "max": 0.02
    },
    "explanation": "In 4X quadrature decoding, each cycle produces 4 distinct states (rising/falling edges on channels A and B). Total counts per revolution $N = 4 \\times \\text{PPR} = 4 \\times 5000 = 20000$. Angular resolution $\\Delta\\theta = \\frac{360^\\circ}{N} = \\frac{360^\\circ}{20000} = 0.018^\\circ$.",
    "hints": [
      "Quadrature decoding multiplies standard PPR by 4."
    ],
    "trapAlert": "Do not forget to multiply PPR by 4 for 4X quadrature mode.",
    "tags": [
      "Incremental Encoder",
      "Quadrature Decoding",
      "Resolution"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q09",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A permanent magnet DC servomotor is operated from a 24 V DC source. The armature resistance is $R_a = 2.0\\ \\Omega$. When drawing an armature current of $I_a = 10.0$ A, with back-EMF constant $K_b = 0.05$ V/(rad/s), what is the rotational speed of the motor shaft in rad/s?",
    "correctAnswer": {
      "exact": 80.0,
      "min": 79.8,
      "max": 80.2
    },
    "explanation": "Armature circuit voltage equation: $V = E_b + I_a R_a \\implies E_b = V - I_a R_a = 24 - (10.0 \\times 2.0) = 4.0$ V. Since $E_b = K_b \\omega$, the angular speed is $\\omega = \\frac{E_b}{K_b} = \\frac{4.0}{0.05} = 80.0$ rad/s.",
    "hints": [
      "Apply Kirchhoff's Voltage Law to the DC armature circuit: $V = E_b + I_a R_a$."
    ],
    "trapAlert": "Check that units of $K_b$ are in V/(rad/s) and speed is requested in rad/s, not RPM.",
    "tags": [
      "DC Motor",
      "Back EMF",
      "Servomotor"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q10",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A permanent magnet DC servomotor is operated from a 48 V DC source. The armature resistance is $R_a = 1.5\\ \\Omega$. When drawing an armature current of $I_a = 15.0$ A, with back-EMF constant $K_b = 0.08$ V/(rad/s), what is the rotational speed of the motor shaft in rad/s?",
    "correctAnswer": {
      "exact": 318.75,
      "min": 318.55,
      "max": 318.95
    },
    "explanation": "Armature circuit voltage equation: $V = E_b + I_a R_a \\implies E_b = V - I_a R_a = 48 - (15.0 \\times 1.5) = 25.5$ V. Since $E_b = K_b \\omega$, the angular speed is $\\omega = \\frac{E_b}{K_b} = \\frac{25.5}{0.08} = 318.75$ rad/s.",
    "hints": [
      "Apply Kirchhoff's Voltage Law to the DC armature circuit: $V = E_b + I_a R_a$."
    ],
    "trapAlert": "Check that units of $K_b$ are in V/(rad/s) and speed is requested in rad/s, not RPM.",
    "tags": [
      "DC Motor",
      "Back EMF",
      "Servomotor"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q11",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A permanent magnet DC servomotor is operated from a 12 V DC source. The armature resistance is $R_a = 1.0\\ \\Omega$. When drawing an armature current of $I_a = 5.0$ A, with back-EMF constant $K_b = 0.04$ V/(rad/s), what is the rotational speed of the motor shaft in rad/s?",
    "correctAnswer": {
      "exact": 175.0,
      "min": 174.8,
      "max": 175.2
    },
    "explanation": "Armature circuit voltage equation: $V = E_b + I_a R_a \\implies E_b = V - I_a R_a = 12 - (5.0 \\times 1.0) = 7.0$ V. Since $E_b = K_b \\omega$, the angular speed is $\\omega = \\frac{E_b}{K_b} = \\frac{7.0}{0.04} = 175.0$ rad/s.",
    "hints": [
      "Apply Kirchhoff's Voltage Law to the DC armature circuit: $V = E_b + I_a R_a$."
    ],
    "trapAlert": "Check that units of $K_b$ are in V/(rad/s) and speed is requested in rad/s, not RPM.",
    "tags": [
      "DC Motor",
      "Back EMF",
      "Servomotor"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q12",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A permanent magnet DC servomotor is operated from a 36 V DC source. The armature resistance is $R_a = 2.5\\ \\Omega$. When drawing an armature current of $I_a = 12.0$ A, with back-EMF constant $K_b = 0.06$ V/(rad/s), what is the rotational speed of the motor shaft in rad/s?",
    "correctAnswer": {
      "exact": 100.0,
      "min": 99.8,
      "max": 100.2
    },
    "explanation": "Armature circuit voltage equation: $V = E_b + I_a R_a \\implies E_b = V - I_a R_a = 36 - (12.0 \\times 2.5) = 6.0$ V. Since $E_b = K_b \\omega$, the angular speed is $\\omega = \\frac{E_b}{K_b} = \\frac{6.0}{0.06} = 100.0$ rad/s.",
    "hints": [
      "Apply Kirchhoff's Voltage Law to the DC armature circuit: $V = E_b + I_a R_a$."
    ],
    "trapAlert": "Check that units of $K_b$ are in V/(rad/s) and speed is requested in rad/s, not RPM.",
    "tags": [
      "DC Motor",
      "Back EMF",
      "Servomotor"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q13",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A permanent magnet DC servomotor is operated from a 24 V DC source. The armature resistance is $R_a = 1.0\\ \\Omega$. When drawing an armature current of $I_a = 8.0$ A, with back-EMF constant $K_b = 0.05$ V/(rad/s), what is the rotational speed of the motor shaft in rad/s?",
    "correctAnswer": {
      "exact": 320.0,
      "min": 319.8,
      "max": 320.2
    },
    "explanation": "Armature circuit voltage equation: $V = E_b + I_a R_a \\implies E_b = V - I_a R_a = 24 - (8.0 \\times 1.0) = 16.0$ V. Since $E_b = K_b \\omega$, the angular speed is $\\omega = \\frac{E_b}{K_b} = \\frac{16.0}{0.05} = 320.0$ rad/s.",
    "hints": [
      "Apply Kirchhoff's Voltage Law to the DC armature circuit: $V = E_b + I_a R_a$."
    ],
    "trapAlert": "Check that units of $K_b$ are in V/(rad/s) and speed is requested in rad/s, not RPM.",
    "tags": [
      "DC Motor",
      "Back EMF",
      "Servomotor"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q14",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A permanent magnet DC servomotor is operated from a 48 V DC source. The armature resistance is $R_a = 2.0\\ \\Omega$. When drawing an armature current of $I_a = 14.0$ A, with back-EMF constant $K_b = 0.1$ V/(rad/s), what is the rotational speed of the motor shaft in rad/s?",
    "correctAnswer": {
      "exact": 200.0,
      "min": 199.8,
      "max": 200.2
    },
    "explanation": "Armature circuit voltage equation: $V = E_b + I_a R_a \\implies E_b = V - I_a R_a = 48 - (14.0 \\times 2.0) = 20.0$ V. Since $E_b = K_b \\omega$, the angular speed is $\\omega = \\frac{E_b}{K_b} = \\frac{20.0}{0.1} = 200.0$ rad/s.",
    "hints": [
      "Apply Kirchhoff's Voltage Law to the DC armature circuit: $V = E_b + I_a R_a$."
    ],
    "trapAlert": "Check that units of $K_b$ are in V/(rad/s) and speed is requested in rad/s, not RPM.",
    "tags": [
      "DC Motor",
      "Back EMF",
      "Servomotor"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q15",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Calculate the full-step angle in degrees for a 4-phase hybrid stepper motor having a rotor with $Z = 50$ teeth.",
    "correctAnswer": {
      "exact": 1.8,
      "min": 1.79,
      "max": 1.81
    },
    "explanation": "The step angle formula for a stepper motor is $\\beta = \\frac{360^\\circ}{m \\times Z} = \\frac{360^\\circ}{4 \\times 50} = 1.8^\\circ$.",
    "hints": [
      "Step angle $\\beta = 360^\\circ / (m Z)$ where $m$ is number of phases and $Z$ is rotor teeth."
    ],
    "trapAlert": "Verify whether microstepping is specified; here full-step mode is asked.",
    "tags": [
      "Stepper Motor",
      "Step Angle",
      "Actuators"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q16",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Calculate the full-step angle in degrees for a 2-phase hybrid stepper motor having a rotor with $Z = 50$ teeth.",
    "correctAnswer": {
      "exact": 3.6,
      "min": 3.59,
      "max": 3.61
    },
    "explanation": "The step angle formula for a stepper motor is $\\beta = \\frac{360^\\circ}{m \\times Z} = \\frac{360^\\circ}{2 \\times 50} = 3.6^\\circ$.",
    "hints": [
      "Step angle $\\beta = 360^\\circ / (m Z)$ where $m$ is number of phases and $Z$ is rotor teeth."
    ],
    "trapAlert": "Verify whether microstepping is specified; here full-step mode is asked.",
    "tags": [
      "Stepper Motor",
      "Step Angle",
      "Actuators"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q17",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Calculate the full-step angle in degrees for a 5-phase hybrid stepper motor having a rotor with $Z = 50$ teeth.",
    "correctAnswer": {
      "exact": 1.44,
      "min": 1.43,
      "max": 1.45
    },
    "explanation": "The step angle formula for a stepper motor is $\\beta = \\frac{360^\\circ}{m \\times Z} = \\frac{360^\\circ}{5 \\times 50} = 1.44^\\circ$.",
    "hints": [
      "Step angle $\\beta = 360^\\circ / (m Z)$ where $m$ is number of phases and $Z$ is rotor teeth."
    ],
    "trapAlert": "Verify whether microstepping is specified; here full-step mode is asked.",
    "tags": [
      "Stepper Motor",
      "Step Angle",
      "Actuators"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q18",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Calculate the full-step angle in degrees for a 4-phase hybrid stepper motor having a rotor with $Z = 100$ teeth.",
    "correctAnswer": {
      "exact": 0.9,
      "min": 0.89,
      "max": 0.91
    },
    "explanation": "The step angle formula for a stepper motor is $\\beta = \\frac{360^\\circ}{m \\times Z} = \\frac{360^\\circ}{4 \\times 100} = 0.9^\\circ$.",
    "hints": [
      "Step angle $\\beta = 360^\\circ / (m Z)$ where $m$ is number of phases and $Z$ is rotor teeth."
    ],
    "trapAlert": "Verify whether microstepping is specified; here full-step mode is asked.",
    "tags": [
      "Stepper Motor",
      "Step Angle",
      "Actuators"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q19",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An ideal operational amplifier is configured as an inverting amplifier with input resistor $R_1 = 10\\ \\text{k}\\Omega$ and feedback resistor $R_f = 100\\ \\text{k}\\Omega$. What is the closed-loop voltage gain?",
    "correctAnswer": {
      "exact": -10.0,
      "min": -10.05,
      "max": -9.95
    },
    "explanation": "For an ideal inverting op-amp: Inverting: $V_{{out}}/V_{{in}} = -R_f/R_1$. Plugging in $R_1 = 10\\ \\text{k}\\Omega$ and $R_f = 100\\ \\text{k}\\Omega$ yields gain = -10.0.",
    "hints": [
      "Use virtual ground concept for inverting amplifier."
    ],
    "trapAlert": "Remember that inverting op-amp has negative gain.",
    "tags": [
      "Operational Amplifier",
      "Op-Amp",
      "Gain"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q20",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An ideal operational amplifier is configured as an inverting amplifier with input resistor $R_1 = 20\\ \\text{k}\\Omega$ and feedback resistor $R_f = 100\\ \\text{k}\\Omega$. What is the closed-loop voltage gain?",
    "correctAnswer": {
      "exact": -5.0,
      "min": -5.05,
      "max": -4.95
    },
    "explanation": "For an ideal inverting op-amp: Inverting: $V_{{out}}/V_{{in}} = -R_f/R_1$. Plugging in $R_1 = 20\\ \\text{k}\\Omega$ and $R_f = 100\\ \\text{k}\\Omega$ yields gain = -5.0.",
    "hints": [
      "Use virtual ground concept for inverting amplifier."
    ],
    "trapAlert": "Remember that inverting op-amp has negative gain.",
    "tags": [
      "Operational Amplifier",
      "Op-Amp",
      "Gain"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q21",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An ideal operational amplifier is configured as an inverting amplifier with input resistor $R_1 = 5\\ \\text{k}\\Omega$ and feedback resistor $R_f = 50\\ \\text{k}\\Omega$. What is the closed-loop voltage gain?",
    "correctAnswer": {
      "exact": -10.0,
      "min": -10.05,
      "max": -9.95
    },
    "explanation": "For an ideal inverting op-amp: Inverting: $V_{{out}}/V_{{in}} = -R_f/R_1$. Plugging in $R_1 = 5\\ \\text{k}\\Omega$ and $R_f = 50\\ \\text{k}\\Omega$ yields gain = -10.0.",
    "hints": [
      "Use virtual ground concept for inverting amplifier."
    ],
    "trapAlert": "Remember that inverting op-amp has negative gain.",
    "tags": [
      "Operational Amplifier",
      "Op-Amp",
      "Gain"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q22",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An ideal operational amplifier is configured as an non-inverting amplifier with input resistor $R_1 = 10\\ \\text{k}\\Omega$ and feedback resistor $R_f = 90\\ \\text{k}\\Omega$. What is the closed-loop voltage gain?",
    "correctAnswer": {
      "exact": 10.0,
      "min": 9.95,
      "max": 10.05
    },
    "explanation": "For an ideal non-inverting op-amp: Non-inverting: $V_{{out}}/V_{{in}} = 1 + R_f/R_1$. Plugging in $R_1 = 10\\ \\text{k}\\Omega$ and $R_f = 90\\ \\text{k}\\Omega$ yields gain = 10.0.",
    "hints": [
      "Use virtual ground concept for inverting amplifier."
    ],
    "trapAlert": "Remember that inverting op-amp has negative gain.",
    "tags": [
      "Operational Amplifier",
      "Op-Amp",
      "Gain"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q23",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (MSQ)",
    "type": "MSQ",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Hard",
    "text": "Which of the following sensors are classified as ACTIVE sensors (require external excitation/power to produce output)? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Strain Gauge (Resistance foil)"
      },
      {
        "id": "B",
        "text": "Linear Variable Differential Transformer (LVDT)"
      },
      {
        "id": "C",
        "text": "Piezoelectric crystal accelerometer (measuring dynamic force/shock)"
      },
      {
        "id": "D",
        "text": "Photoresistor / LDR"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "Active sensors require an external power source to modulate output. Strain gauges require an excitation bridge voltage; LVDTs require AC excitation on the primary coil; LDRs require an applied bias voltage. In contrast, Piezoelectric sensors are self-generating (passive/direct generator transducers) that generate charge directly under dynamic mechanical strain.",
    "hints": [
      "Distinguish between self-generating transducers and externally excited transducers."
    ],
    "trapAlert": "Do not confuse passive components with self-generating transducers.",
    "tags": [
      "Sensors",
      "Transducers",
      "Classification",
      "GATE MSQ"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q24",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An analog-to-digital converter (ADC) has 8-bit resolution and a full-scale reference voltage of $V_{ref} = 5.0$ V. Calculate the voltage resolution (weight of 1 LSB) in millivolts (mV, rounded to two decimal places).",
    "correctAnswer": {
      "exact": 19.61,
      "min": 19.56,
      "max": 19.66
    },
    "explanation": "Voltage resolution of an $n$-bit ADC is $V_{LSB} = \\frac{V_{ref}}{2^n - 1} = \\frac{5.0}{255} = 0.019608$ V = 19.61 mV.",
    "hints": [
      "$V_{LSB} = V_{ref} / (2^n - 1)$."
    ],
    "trapAlert": "Ensure the final answer is converted from Volts to milliVolts as requested.",
    "tags": [
      "ADC",
      "Quantization",
      "Digital Circuits"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q25",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An analog-to-digital converter (ADC) has 10-bit resolution and a full-scale reference voltage of $V_{ref} = 5.0$ V. Calculate the voltage resolution (weight of 1 LSB) in millivolts (mV, rounded to two decimal places).",
    "correctAnswer": {
      "exact": 4.89,
      "min": 4.84,
      "max": 4.94
    },
    "explanation": "Voltage resolution of an $n$-bit ADC is $V_{LSB} = \\frac{V_{ref}}{2^n - 1} = \\frac{5.0}{1023} = 0.004888$ V = 4.89 mV.",
    "hints": [
      "$V_{LSB} = V_{ref} / (2^n - 1)$."
    ],
    "trapAlert": "Ensure the final answer is converted from Volts to milliVolts as requested.",
    "tags": [
      "ADC",
      "Quantization",
      "Digital Circuits"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q26",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An analog-to-digital converter (ADC) has 12-bit resolution and a full-scale reference voltage of $V_{ref} = 5.0$ V. Calculate the voltage resolution (weight of 1 LSB) in millivolts (mV, rounded to two decimal places).",
    "correctAnswer": {
      "exact": 1.22,
      "min": 1.17,
      "max": 1.27
    },
    "explanation": "Voltage resolution of an $n$-bit ADC is $V_{LSB} = \\frac{V_{ref}}{2^n - 1} = \\frac{5.0}{4095} = 0.001221$ V = 1.22 mV.",
    "hints": [
      "$V_{LSB} = V_{ref} / (2^n - 1)$."
    ],
    "trapAlert": "Ensure the final answer is converted from Volts to milliVolts as requested.",
    "tags": [
      "ADC",
      "Quantization",
      "Digital Circuits"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q27",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An analog-to-digital converter (ADC) has 16-bit resolution and a full-scale reference voltage of $V_{ref} = 5.0$ V. Calculate the voltage resolution (weight of 1 LSB) in millivolts (mV, rounded to two decimal places).",
    "correctAnswer": {
      "exact": 0.08,
      "min": 0.03,
      "max": 0.13
    },
    "explanation": "Voltage resolution of an $n$-bit ADC is $V_{LSB} = \\frac{V_{ref}}{2^n - 1} = \\frac{5.0}{65535} = 7.6e-05$ V = 0.08 mV.",
    "hints": [
      "$V_{LSB} = V_{ref} / (2^n - 1)$."
    ],
    "trapAlert": "Ensure the final answer is converted from Volts to milliVolts as requested.",
    "tags": [
      "ADC",
      "Quantization",
      "Digital Circuits"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q28",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = 14.0\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
    "options": [
      {
        "id": "A",
        "text": "$1.4$ V"
      },
      {
        "id": "B",
        "text": "$1400.0$ V"
      },
      {
        "id": "C",
        "text": "$14.0$ V"
      },
      {
        "id": "D",
        "text": "$140.0$ V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tachometer voltage: $V = K_t \\times \\omega = (14.0\\ \\text{mV/(rad/s)}) \\times 100\\ \\text{rad/s} = 1400.0\\ \\text{mV} = 1.4$ V.",
    "hints": [
      "Convert mV to V by dividing by 1000."
    ],
    "trapAlert": "Unit conversion trap: mV to V.",
    "tags": [
      "Tachometer",
      "Velocity Feedback",
      "Sensors"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q29",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = 14.5\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
    "options": [
      {
        "id": "A",
        "text": "$1.45$ V"
      },
      {
        "id": "B",
        "text": "$1450.0$ V"
      },
      {
        "id": "C",
        "text": "$14.5$ V"
      },
      {
        "id": "D",
        "text": "$145.0$ V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tachometer voltage: $V = K_t \\times \\omega = (14.5\\ \\text{mV/(rad/s)}) \\times 100\\ \\text{rad/s} = 1450.0\\ \\text{mV} = 1.45$ V.",
    "hints": [
      "Convert mV to V by dividing by 1000."
    ],
    "trapAlert": "Unit conversion trap: mV to V.",
    "tags": [
      "Tachometer",
      "Velocity Feedback",
      "Sensors"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q30",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = 15.0\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
    "options": [
      {
        "id": "A",
        "text": "$1.5$ V"
      },
      {
        "id": "B",
        "text": "$1500.0$ V"
      },
      {
        "id": "C",
        "text": "$15.0$ V"
      },
      {
        "id": "D",
        "text": "$150.0$ V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tachometer voltage: $V = K_t \\times \\omega = (15.0\\ \\text{mV/(rad/s)}) \\times 100\\ \\text{rad/s} = 1500.0\\ \\text{mV} = 1.5$ V.",
    "hints": [
      "Convert mV to V by dividing by 1000."
    ],
    "trapAlert": "Unit conversion trap: mV to V.",
    "tags": [
      "Tachometer",
      "Velocity Feedback",
      "Sensors"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q31",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = 15.5\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
    "options": [
      {
        "id": "A",
        "text": "$1.55$ V"
      },
      {
        "id": "B",
        "text": "$1550.0$ V"
      },
      {
        "id": "C",
        "text": "$15.5$ V"
      },
      {
        "id": "D",
        "text": "$155.0$ V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tachometer voltage: $V = K_t \\times \\omega = (15.5\\ \\text{mV/(rad/s)}) \\times 100\\ \\text{rad/s} = 1550.0\\ \\text{mV} = 1.55$ V.",
    "hints": [
      "Convert mV to V by dividing by 1000."
    ],
    "trapAlert": "Unit conversion trap: mV to V.",
    "tags": [
      "Tachometer",
      "Velocity Feedback",
      "Sensors"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q32",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = 16.0\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
    "options": [
      {
        "id": "A",
        "text": "$1.6$ V"
      },
      {
        "id": "B",
        "text": "$1600.0$ V"
      },
      {
        "id": "C",
        "text": "$16.0$ V"
      },
      {
        "id": "D",
        "text": "$160.0$ V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tachometer voltage: $V = K_t \\times \\omega = (16.0\\ \\text{mV/(rad/s)}) \\times 100\\ \\text{rad/s} = 1600.0\\ \\text{mV} = 1.6$ V.",
    "hints": [
      "Convert mV to V by dividing by 1000."
    ],
    "trapAlert": "Unit conversion trap: mV to V.",
    "tags": [
      "Tachometer",
      "Velocity Feedback",
      "Sensors"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q33",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = 16.5\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
    "options": [
      {
        "id": "A",
        "text": "$1.65$ V"
      },
      {
        "id": "B",
        "text": "$1650.0$ V"
      },
      {
        "id": "C",
        "text": "$16.5$ V"
      },
      {
        "id": "D",
        "text": "$165.0$ V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tachometer voltage: $V = K_t \\times \\omega = (16.5\\ \\text{mV/(rad/s)}) \\times 100\\ \\text{rad/s} = 1650.0\\ \\text{mV} = 1.65$ V.",
    "hints": [
      "Convert mV to V by dividing by 1000."
    ],
    "trapAlert": "Unit conversion trap: mV to V.",
    "tags": [
      "Tachometer",
      "Velocity Feedback",
      "Sensors"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q34",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = 17.0\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
    "options": [
      {
        "id": "A",
        "text": "$1.7$ V"
      },
      {
        "id": "B",
        "text": "$1700.0$ V"
      },
      {
        "id": "C",
        "text": "$17.0$ V"
      },
      {
        "id": "D",
        "text": "$170.0$ V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tachometer voltage: $V = K_t \\times \\omega = (17.0\\ \\text{mV/(rad/s)}) \\times 100\\ \\text{rad/s} = 1700.0\\ \\text{mV} = 1.7$ V.",
    "hints": [
      "Convert mV to V by dividing by 1000."
    ],
    "trapAlert": "Unit conversion trap: mV to V.",
    "tags": [
      "Tachometer",
      "Velocity Feedback",
      "Sensors"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q35",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = 17.5\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
    "options": [
      {
        "id": "A",
        "text": "$1.75$ V"
      },
      {
        "id": "B",
        "text": "$1750.0$ V"
      },
      {
        "id": "C",
        "text": "$17.5$ V"
      },
      {
        "id": "D",
        "text": "$175.0$ V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tachometer voltage: $V = K_t \\times \\omega = (17.5\\ \\text{mV/(rad/s)}) \\times 100\\ \\text{rad/s} = 1750.0\\ \\text{mV} = 1.75$ V.",
    "hints": [
      "Convert mV to V by dividing by 1000."
    ],
    "trapAlert": "Unit conversion trap: mV to V.",
    "tags": [
      "Tachometer",
      "Velocity Feedback",
      "Sensors"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q36",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = 18.0\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
    "options": [
      {
        "id": "A",
        "text": "$1.8$ V"
      },
      {
        "id": "B",
        "text": "$1800.0$ V"
      },
      {
        "id": "C",
        "text": "$18.0$ V"
      },
      {
        "id": "D",
        "text": "$180.0$ V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tachometer voltage: $V = K_t \\times \\omega = (18.0\\ \\text{mV/(rad/s)}) \\times 100\\ \\text{rad/s} = 1800.0\\ \\text{mV} = 1.8$ V.",
    "hints": [
      "Convert mV to V by dividing by 1000."
    ],
    "trapAlert": "Unit conversion trap: mV to V.",
    "tags": [
      "Tachometer",
      "Velocity Feedback",
      "Sensors"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q37",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = 18.5\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
    "options": [
      {
        "id": "A",
        "text": "$1.85$ V"
      },
      {
        "id": "B",
        "text": "$1850.0$ V"
      },
      {
        "id": "C",
        "text": "$18.5$ V"
      },
      {
        "id": "D",
        "text": "$185.0$ V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tachometer voltage: $V = K_t \\times \\omega = (18.5\\ \\text{mV/(rad/s)}) \\times 100\\ \\text{rad/s} = 1850.0\\ \\text{mV} = 1.85$ V.",
    "hints": [
      "Convert mV to V by dividing by 1000."
    ],
    "trapAlert": "Unit conversion trap: mV to V.",
    "tags": [
      "Tachometer",
      "Velocity Feedback",
      "Sensors"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q38",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = 19.0\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
    "options": [
      {
        "id": "A",
        "text": "$1.9$ V"
      },
      {
        "id": "B",
        "text": "$1900.0$ V"
      },
      {
        "id": "C",
        "text": "$19.0$ V"
      },
      {
        "id": "D",
        "text": "$190.0$ V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tachometer voltage: $V = K_t \\times \\omega = (19.0\\ \\text{mV/(rad/s)}) \\times 100\\ \\text{rad/s} = 1900.0\\ \\text{mV} = 1.9$ V.",
    "hints": [
      "Convert mV to V by dividing by 1000."
    ],
    "trapAlert": "Unit conversion trap: mV to V.",
    "tags": [
      "Tachometer",
      "Velocity Feedback",
      "Sensors"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q39",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = 19.5\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
    "options": [
      {
        "id": "A",
        "text": "$1.95$ V"
      },
      {
        "id": "B",
        "text": "$1950.0$ V"
      },
      {
        "id": "C",
        "text": "$19.5$ V"
      },
      {
        "id": "D",
        "text": "$195.0$ V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tachometer voltage: $V = K_t \\times \\omega = (19.5\\ \\text{mV/(rad/s)}) \\times 100\\ \\text{rad/s} = 1950.0\\ \\text{mV} = 1.95$ V.",
    "hints": [
      "Convert mV to V by dividing by 1000."
    ],
    "trapAlert": "Unit conversion trap: mV to V.",
    "tags": [
      "Tachometer",
      "Velocity Feedback",
      "Sensors"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q40",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = 20.0\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
    "options": [
      {
        "id": "A",
        "text": "$2.0$ V"
      },
      {
        "id": "B",
        "text": "$2000.0$ V"
      },
      {
        "id": "C",
        "text": "$20.0$ V"
      },
      {
        "id": "D",
        "text": "$200.0$ V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tachometer voltage: $V = K_t \\times \\omega = (20.0\\ \\text{mV/(rad/s)}) \\times 100\\ \\text{rad/s} = 2000.0\\ \\text{mV} = 2.0$ V.",
    "hints": [
      "Convert mV to V by dividing by 1000."
    ],
    "trapAlert": "Unit conversion trap: mV to V.",
    "tags": [
      "Tachometer",
      "Velocity Feedback",
      "Sensors"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q41",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = 20.5\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
    "options": [
      {
        "id": "A",
        "text": "$2.05$ V"
      },
      {
        "id": "B",
        "text": "$2050.0$ V"
      },
      {
        "id": "C",
        "text": "$20.5$ V"
      },
      {
        "id": "D",
        "text": "$205.0$ V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tachometer voltage: $V = K_t \\times \\omega = (20.5\\ \\text{mV/(rad/s)}) \\times 100\\ \\text{rad/s} = 2050.0\\ \\text{mV} = 2.05$ V.",
    "hints": [
      "Convert mV to V by dividing by 1000."
    ],
    "trapAlert": "Unit conversion trap: mV to V.",
    "tags": [
      "Tachometer",
      "Velocity Feedback",
      "Sensors"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q42",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = 21.0\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
    "options": [
      {
        "id": "A",
        "text": "$2.1$ V"
      },
      {
        "id": "B",
        "text": "$2100.0$ V"
      },
      {
        "id": "C",
        "text": "$21.0$ V"
      },
      {
        "id": "D",
        "text": "$210.0$ V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tachometer voltage: $V = K_t \\times \\omega = (21.0\\ \\text{mV/(rad/s)}) \\times 100\\ \\text{rad/s} = 2100.0\\ \\text{mV} = 2.1$ V.",
    "hints": [
      "Convert mV to V by dividing by 1000."
    ],
    "trapAlert": "Unit conversion trap: mV to V.",
    "tags": [
      "Tachometer",
      "Velocity Feedback",
      "Sensors"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q43",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = 21.5\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
    "options": [
      {
        "id": "A",
        "text": "$2.15$ V"
      },
      {
        "id": "B",
        "text": "$2150.0$ V"
      },
      {
        "id": "C",
        "text": "$21.5$ V"
      },
      {
        "id": "D",
        "text": "$215.0$ V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tachometer voltage: $V = K_t \\times \\omega = (21.5\\ \\text{mV/(rad/s)}) \\times 100\\ \\text{rad/s} = 2150.0\\ \\text{mV} = 2.15$ V.",
    "hints": [
      "Convert mV to V by dividing by 1000."
    ],
    "trapAlert": "Unit conversion trap: mV to V.",
    "tags": [
      "Tachometer",
      "Velocity Feedback",
      "Sensors"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q44",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = 22.0\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
    "options": [
      {
        "id": "A",
        "text": "$2.2$ V"
      },
      {
        "id": "B",
        "text": "$2200.0$ V"
      },
      {
        "id": "C",
        "text": "$22.0$ V"
      },
      {
        "id": "D",
        "text": "$220.0$ V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tachometer voltage: $V = K_t \\times \\omega = (22.0\\ \\text{mV/(rad/s)}) \\times 100\\ \\text{rad/s} = 2200.0\\ \\text{mV} = 2.2$ V.",
    "hints": [
      "Convert mV to V by dividing by 1000."
    ],
    "trapAlert": "Unit conversion trap: mV to V.",
    "tags": [
      "Tachometer",
      "Velocity Feedback",
      "Sensors"
    ]
  },
  {
    "id": "ra-mechatronics-circuits-sensors-q45",
    "paper": "RA",
    "subject": "Basics of Mechatronics",
    "topicId": "ra-mechatronics-circuits-sensors",
    "topicTitle": "Sensors, Actuators & Digital Circuits",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a mechatronic drive train, a tachometer generates an output voltage of $V(t) = 22.5\\omega(t)$ mV/(rad/s). If the shaft speed is 100 rad/s, what is the output voltage in Volts?",
    "options": [
      {
        "id": "A",
        "text": "$2.25$ V"
      },
      {
        "id": "B",
        "text": "$2250.0$ V"
      },
      {
        "id": "C",
        "text": "$22.5$ V"
      },
      {
        "id": "D",
        "text": "$225.0$ V"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Tachometer voltage: $V = K_t \\times \\omega = (22.5\\ \\text{mV/(rad/s)}) \\times 100\\ \\text{rad/s} = 2250.0\\ \\text{mV} = 2.25$ V.",
    "hints": [
      "Convert mV to V by dividing by 1000."
    ],
    "trapAlert": "Unit conversion trap: mV to V.",
    "tags": [
      "Tachometer",
      "Velocity Feedback",
      "Sensors"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q01",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Determine the degrees of freedom (DOF) of a planar four-bar linkage using the Gr\u00fcbler/Kutzbach criterion.",
    "correctAnswer": {
      "exact": 1.0,
      "min": 0.99,
      "max": 1.01
    },
    "explanation": "Using Gr\u00fcbler criterion: $M = \\lambda(N - 1 - J) + \\sum_{i=1}^J f_i$, where $\\lambda = 3$ (for planar motion), number of links $N = 4$, and number of joints $J = 4$ each with $f_i = 1$ DOF. Thus $M = 3(4 - 1 - 4) + (4 \\times 1) = 1$.",
    "hints": [
      "Planar mobility formula: $M = 3(N - 1 - J) + \\sum f_i$; Spatial: $M = 6(N - 1 - J) + \\sum f_i$."
    ],
    "trapAlert": "Include the fixed base link in the total link count $N$.",
    "tags": [
      "Grubler Criterion",
      "Mobility",
      "Robot Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q02",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Determine the degrees of freedom (DOF) of a planar 3R serial robot arm using the Gr\u00fcbler/Kutzbach criterion.",
    "correctAnswer": {
      "exact": 3.0,
      "min": 2.99,
      "max": 3.01
    },
    "explanation": "Using Gr\u00fcbler criterion: $M = \\lambda(N - 1 - J) + \\sum_{i=1}^J f_i$, where $\\lambda = 3$ (for planar motion), number of links $N = 4$, and number of joints $J = 3$ each with $f_i = 1$ DOF. Thus $M = 3(4 - 1 - 3) + (3 \\times 1) = 3$.",
    "hints": [
      "Planar mobility formula: $M = 3(N - 1 - J) + \\sum f_i$; Spatial: $M = 6(N - 1 - J) + \\sum f_i$."
    ],
    "trapAlert": "Include the fixed base link in the total link count $N$.",
    "tags": [
      "Grubler Criterion",
      "Mobility",
      "Robot Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q03",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Determine the degrees of freedom (DOF) of a planar parallel 3-RRR manipulator using the Gr\u00fcbler/Kutzbach criterion.",
    "correctAnswer": {
      "exact": 3.0,
      "min": 2.99,
      "max": 3.01
    },
    "explanation": "Using Gr\u00fcbler criterion: $M = \\lambda(N - 1 - J) + \\sum_{i=1}^J f_i$, where $\\lambda = 3$ (for planar motion), number of links $N = 8$, and number of joints $J = 9$ each with $f_i = 1$ DOF. Thus $M = 3(8 - 1 - 9) + (9 \\times 1) = 3$.",
    "hints": [
      "Planar mobility formula: $M = 3(N - 1 - J) + \\sum f_i$; Spatial: $M = 6(N - 1 - J) + \\sum f_i$."
    ],
    "trapAlert": "Include the fixed base link in the total link count $N$.",
    "tags": [
      "Grubler Criterion",
      "Mobility",
      "Robot Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q04",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Determine the degrees of freedom (DOF) of a spatial 6-DOF serial manipulator (PUMA) using the Gr\u00fcbler/Kutzbach criterion.",
    "correctAnswer": {
      "exact": 6.0,
      "min": 5.99,
      "max": 6.01
    },
    "explanation": "Using Gr\u00fcbler criterion: $M = \\lambda(N - 1 - J) + \\sum_{i=1}^J f_i$, where $\\lambda = 6$ (for spatial motion), number of links $N = 7$, and number of joints $J = 6$ each with $f_i = 1$ DOF. Thus $M = 6(7 - 1 - 6) + (6 \\times 1) = 6$.",
    "hints": [
      "Planar mobility formula: $M = 3(N - 1 - J) + \\sum f_i$; Spatial: $M = 6(N - 1 - J) + \\sum f_i$."
    ],
    "trapAlert": "Include the fixed base link in the total link count $N$.",
    "tags": [
      "Grubler Criterion",
      "Mobility",
      "Robot Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q05",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Determine the degrees of freedom (DOF) of a spatial SCARA robot arm (RRPR) using the Gr\u00fcbler/Kutzbach criterion.",
    "correctAnswer": {
      "exact": 4.0,
      "min": 3.99,
      "max": 4.01
    },
    "explanation": "Using Gr\u00fcbler criterion: $M = \\lambda(N - 1 - J) + \\sum_{i=1}^J f_i$, where $\\lambda = 6$ (for spatial motion), number of links $N = 5$, and number of joints $J = 4$ each with $f_i = 1$ DOF. Thus $M = 6(5 - 1 - 4) + (4 \\times 1) = 4$.",
    "hints": [
      "Planar mobility formula: $M = 3(N - 1 - J) + \\sum f_i$; Spatial: $M = 6(N - 1 - J) + \\sum f_i$."
    ],
    "trapAlert": "Include the fixed base link in the total link count $N$.",
    "tags": [
      "Grubler Criterion",
      "Mobility",
      "Robot Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q06",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Determine the degrees of freedom (DOF) of a planar five-bar mechanism using the Gr\u00fcbler/Kutzbach criterion.",
    "correctAnswer": {
      "exact": 2.0,
      "min": 1.99,
      "max": 2.01
    },
    "explanation": "Using Gr\u00fcbler criterion: $M = \\lambda(N - 1 - J) + \\sum_{i=1}^J f_i$, where $\\lambda = 3$ (for planar motion), number of links $N = 5$, and number of joints $J = 5$ each with $f_i = 1$ DOF. Thus $M = 3(5 - 1 - 5) + (5 \\times 1) = 2$.",
    "hints": [
      "Planar mobility formula: $M = 3(N - 1 - J) + \\sum f_i$; Spatial: $M = 6(N - 1 - J) + \\sum f_i$."
    ],
    "trapAlert": "Include the fixed base link in the total link count $N$.",
    "tags": [
      "Grubler Criterion",
      "Mobility",
      "Robot Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q07",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A vector $P = [10, 0]^T$ is rotated counter-clockwise by $\\theta = 30^\\circ$ in the $XY$-plane about the origin. What is the resulting $Y$-coordinate?",
    "correctAnswer": {
      "exact": 5.0,
      "min": 4.95,
      "max": 5.05
    },
    "explanation": "The 2D rotation matrix is $R_z(\\theta) = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$. Multiplying by $[10, 0]^T$ gives $Y' = 10 \\sin(30^\\circ) = 10 \\times 0.5 = 5.0$.",
    "hints": [
      "$Y' = X \\sin\\theta + Y \\cos\\theta$."
    ],
    "trapAlert": "Ensure the angle is in degrees when calculating sine.",
    "tags": [
      "2D Rotation",
      "Coordinate Transformations"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q08",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A vector $P = [10, 0]^T$ is rotated counter-clockwise by $\\theta = 45^\\circ$ in the $XY$-plane about the origin. What is the resulting $Y$-coordinate?",
    "correctAnswer": {
      "exact": 7.07,
      "min": 7.02,
      "max": 7.12
    },
    "explanation": "The 2D rotation matrix is $R_z(\\theta) = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$. Multiplying by $[10, 0]^T$ gives $Y' = 10 \\sin(45^\\circ) = 10 \\times 0.707 = 7.07$.",
    "hints": [
      "$Y' = X \\sin\\theta + Y \\cos\\theta$."
    ],
    "trapAlert": "Ensure the angle is in degrees when calculating sine.",
    "tags": [
      "2D Rotation",
      "Coordinate Transformations"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q09",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A vector $P = [10, 0]^T$ is rotated counter-clockwise by $\\theta = 60^\\circ$ in the $XY$-plane about the origin. What is the resulting $Y$-coordinate?",
    "correctAnswer": {
      "exact": 8.66,
      "min": 8.61,
      "max": 8.71
    },
    "explanation": "The 2D rotation matrix is $R_z(\\theta) = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$. Multiplying by $[10, 0]^T$ gives $Y' = 10 \\sin(60^\\circ) = 10 \\times 0.866 = 8.66$.",
    "hints": [
      "$Y' = X \\sin\\theta + Y \\cos\\theta$."
    ],
    "trapAlert": "Ensure the angle is in degrees when calculating sine.",
    "tags": [
      "2D Rotation",
      "Coordinate Transformations"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q10",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A vector $P = [10, 0]^T$ is rotated counter-clockwise by $\\theta = 90^\\circ$ in the $XY$-plane about the origin. What is the resulting $Y$-coordinate?",
    "correctAnswer": {
      "exact": 10.0,
      "min": 9.95,
      "max": 10.05
    },
    "explanation": "The 2D rotation matrix is $R_z(\\theta) = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$. Multiplying by $[10, 0]^T$ gives $Y' = 10 \\sin(90^\\circ) = 10 \\times 1.0 = 10.0$.",
    "hints": [
      "$Y' = X \\sin\\theta + Y \\cos\\theta$."
    ],
    "trapAlert": "Ensure the angle is in degrees when calculating sine.",
    "tags": [
      "2D Rotation",
      "Coordinate Transformations"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q11",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A vector $P = [10, 0]^T$ is rotated counter-clockwise by $\\theta = 180^\\circ$ in the $XY$-plane about the origin. What is the resulting $Y$-coordinate?",
    "correctAnswer": {
      "exact": 0.0,
      "min": -0.05,
      "max": 0.05
    },
    "explanation": "The 2D rotation matrix is $R_z(\\theta) = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$. Multiplying by $[10, 0]^T$ gives $Y' = 10 \\sin(180^\\circ) = 10 \\times 0.0 = 0.0$.",
    "hints": [
      "$Y' = X \\sin\\theta + Y \\cos\\theta$."
    ],
    "trapAlert": "Ensure the angle is in degrees when calculating sine.",
    "tags": [
      "2D Rotation",
      "Coordinate Transformations"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q12",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "For a homogeneous transformation matrix $T = \\begin{bmatrix} R & P \\\\ 0_{1\\times 3} & 1 \\end{bmatrix}$ where $R \\in SO(3)$ is a valid rotation matrix and $P \\in \\mathbb{R}^3$ is a position vector, what is the exact algebraic inverse $T^{-1}$?",
    "options": [
      {
        "id": "A",
        "text": "$T^{-1} = \\begin{bmatrix} R^T & -R^T P \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "id": "B",
        "text": "$T^{-1} = \\begin{bmatrix} R^T & -P \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "id": "C",
        "text": "$T^{-1} = \\begin{bmatrix} R & -R P \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "id": "D",
        "text": "$T^{-1} = \\begin{bmatrix} R^T & R^T P \\\\ 0 & 1 \\end{bmatrix}$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Since $R$ is orthogonal, $R^{-1} = R^T$. For $T = \\begin{bmatrix} R & P \\\\ 0 & 1 \\end{bmatrix}$, multiplying by $\\begin{bmatrix} R^T & -R^T P \\\\ 0 & 1 \\end{bmatrix}$ yields $\\begin{bmatrix} R R^T & -R R^T P + P \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} I & 0 \\\\ 0 & 1 \\end{bmatrix} = I_{4\\times 4}$.",
    "hints": [
      "Orthogonal matrix property $R^{-1} = R^T$."
    ],
    "trapAlert": "The translation part of the inverse is $-R^T P$, not simply $-P$!",
    "tags": [
      "Homogeneous Transformation",
      "Inverse Kinematics",
      "Matrix Inversion"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q13",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "For a homogeneous transformation matrix $T = \\begin{bmatrix} R & P \\\\ 0_{1\\times 3} & 1 \\end{bmatrix}$ where $R \\in SO(3)$ is a valid rotation matrix and $P \\in \\mathbb{R}^3$ is a position vector, what is the exact algebraic inverse $T^{-1}$?",
    "options": [
      {
        "id": "A",
        "text": "$T^{-1} = \\begin{bmatrix} R^T & -R^T P \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "id": "B",
        "text": "$T^{-1} = \\begin{bmatrix} R^T & -P \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "id": "C",
        "text": "$T^{-1} = \\begin{bmatrix} R & -R P \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "id": "D",
        "text": "$T^{-1} = \\begin{bmatrix} R^T & R^T P \\\\ 0 & 1 \\end{bmatrix}$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Since $R$ is orthogonal, $R^{-1} = R^T$. For $T = \\begin{bmatrix} R & P \\\\ 0 & 1 \\end{bmatrix}$, multiplying by $\\begin{bmatrix} R^T & -R^T P \\\\ 0 & 1 \\end{bmatrix}$ yields $\\begin{bmatrix} R R^T & -R R^T P + P \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} I & 0 \\\\ 0 & 1 \\end{bmatrix} = I_{4\\times 4}$.",
    "hints": [
      "Orthogonal matrix property $R^{-1} = R^T$."
    ],
    "trapAlert": "The translation part of the inverse is $-R^T P$, not simply $-P$!",
    "tags": [
      "Homogeneous Transformation",
      "Inverse Kinematics",
      "Matrix Inversion"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q14",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "For a homogeneous transformation matrix $T = \\begin{bmatrix} R & P \\\\ 0_{1\\times 3} & 1 \\end{bmatrix}$ where $R \\in SO(3)$ is a valid rotation matrix and $P \\in \\mathbb{R}^3$ is a position vector, what is the exact algebraic inverse $T^{-1}$?",
    "options": [
      {
        "id": "A",
        "text": "$T^{-1} = \\begin{bmatrix} R^T & -R^T P \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "id": "B",
        "text": "$T^{-1} = \\begin{bmatrix} R^T & -P \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "id": "C",
        "text": "$T^{-1} = \\begin{bmatrix} R & -R P \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "id": "D",
        "text": "$T^{-1} = \\begin{bmatrix} R^T & R^T P \\\\ 0 & 1 \\end{bmatrix}$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Since $R$ is orthogonal, $R^{-1} = R^T$. For $T = \\begin{bmatrix} R & P \\\\ 0 & 1 \\end{bmatrix}$, multiplying by $\\begin{bmatrix} R^T & -R^T P \\\\ 0 & 1 \\end{bmatrix}$ yields $\\begin{bmatrix} R R^T & -R R^T P + P \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} I & 0 \\\\ 0 & 1 \\end{bmatrix} = I_{4\\times 4}$.",
    "hints": [
      "Orthogonal matrix property $R^{-1} = R^T$."
    ],
    "trapAlert": "The translation part of the inverse is $-R^T P$, not simply $-P$!",
    "tags": [
      "Homogeneous Transformation",
      "Inverse Kinematics",
      "Matrix Inversion"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q15",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "For a homogeneous transformation matrix $T = \\begin{bmatrix} R & P \\\\ 0_{1\\times 3} & 1 \\end{bmatrix}$ where $R \\in SO(3)$ is a valid rotation matrix and $P \\in \\mathbb{R}^3$ is a position vector, what is the exact algebraic inverse $T^{-1}$?",
    "options": [
      {
        "id": "A",
        "text": "$T^{-1} = \\begin{bmatrix} R^T & -R^T P \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "id": "B",
        "text": "$T^{-1} = \\begin{bmatrix} R^T & -P \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "id": "C",
        "text": "$T^{-1} = \\begin{bmatrix} R & -R P \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "id": "D",
        "text": "$T^{-1} = \\begin{bmatrix} R^T & R^T P \\\\ 0 & 1 \\end{bmatrix}$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Since $R$ is orthogonal, $R^{-1} = R^T$. For $T = \\begin{bmatrix} R & P \\\\ 0 & 1 \\end{bmatrix}$, multiplying by $\\begin{bmatrix} R^T & -R^T P \\\\ 0 & 1 \\end{bmatrix}$ yields $\\begin{bmatrix} R R^T & -R R^T P + P \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} I & 0 \\\\ 0 & 1 \\end{bmatrix} = I_{4\\times 4}$.",
    "hints": [
      "Orthogonal matrix property $R^{-1} = R^T$."
    ],
    "trapAlert": "The translation part of the inverse is $-R^T P$, not simply $-P$!",
    "tags": [
      "Homogeneous Transformation",
      "Inverse Kinematics",
      "Matrix Inversion"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q16",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "For a homogeneous transformation matrix $T = \\begin{bmatrix} R & P \\\\ 0_{1\\times 3} & 1 \\end{bmatrix}$ where $R \\in SO(3)$ is a valid rotation matrix and $P \\in \\mathbb{R}^3$ is a position vector, what is the exact algebraic inverse $T^{-1}$?",
    "options": [
      {
        "id": "A",
        "text": "$T^{-1} = \\begin{bmatrix} R^T & -R^T P \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "id": "B",
        "text": "$T^{-1} = \\begin{bmatrix} R^T & -P \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "id": "C",
        "text": "$T^{-1} = \\begin{bmatrix} R & -R P \\\\ 0 & 1 \\end{bmatrix}$"
      },
      {
        "id": "D",
        "text": "$T^{-1} = \\begin{bmatrix} R^T & R^T P \\\\ 0 & 1 \\end{bmatrix}$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Since $R$ is orthogonal, $R^{-1} = R^T$. For $T = \\begin{bmatrix} R & P \\\\ 0 & 1 \\end{bmatrix}$, multiplying by $\\begin{bmatrix} R^T & -R^T P \\\\ 0 & 1 \\end{bmatrix}$ yields $\\begin{bmatrix} R R^T & -R R^T P + P \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} I & 0 \\\\ 0 & 1 \\end{bmatrix} = I_{4\\times 4}$.",
    "hints": [
      "Orthogonal matrix property $R^{-1} = R^T$."
    ],
    "trapAlert": "The translation part of the inverse is $-R^T P$, not simply $-P$!",
    "tags": [
      "Homogeneous Transformation",
      "Inverse Kinematics",
      "Matrix Inversion"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q17",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (MSQ)",
    "type": "MSQ",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Hard",
    "text": "According to the standard Denavit-Hartenberg (DH) convention for serial robot manipulators, which of the following statements is/are TRUE? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "The axis $Z_{i-1}$ is chosen along the axis of actuation of joint $i$."
      },
      {
        "id": "B",
        "text": "The axis $X_i$ is directed along the common normal between $Z_{i-1}$ and $Z_i$, pointing from $Z_{i-1}$ to $Z_i$."
      },
      {
        "id": "C",
        "text": "Link length $a_i$ is the distance between $Z_{i-1}$ and $Z_i$ measured along $X_i$."
      },
      {
        "id": "D",
        "text": "Link twist $\\alpha_i$ is measured about the $Z_i$ axis using right-hand rule."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "In standard DH convention: $Z_{i-1}$ lies along joint $i$ axis; $X_i$ is the common normal from $Z_{i-1}$ to $Z_i$; $a_i$ is distance along $X_i$; and link twist $\\alpha_i$ is measured ABOUT the $X_i$ axis from $Z_{i-1}$ to $Z_i$ (not about $Z_i$). Hence Option D is false.",
    "hints": [
      "Review DH frame assignment rules and 4 kinematic parameters."
    ],
    "trapAlert": "Link twist $\\alpha_i$ is measured about the common normal $X_i$, NOT $Z_i$.",
    "tags": [
      "Denavit-Hartenberg",
      "DH Parameters",
      "Serial Manipulators",
      "GATE MSQ"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q18",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A planar 2R robot manipulator has link lengths $L_1 = 10$ cm and $L_2 = 10$ cm. What is the maximum reach (radial distance from the base origin) of the end-effector in cm?",
    "correctAnswer": {
      "exact": 20.0,
      "min": 19.99,
      "max": 20.01
    },
    "explanation": "The forward kinematics for end-effector position is $x = L_1 \\cos\\theta_1 + L_2 \\cos(\\theta_1 + \\theta_2)$ and $y = L_1 \\sin\\theta_1 + L_2 \\sin(\\theta_1 + \\theta_2)$. Maximum reach occurs when both links are fully outstretched ($\\theta_2 = 0^\\circ$), giving $r_{max} = L_1 + L_2 = 10 + 10 = 20$ cm.",
    "hints": [
      "Maximum radial reach is achieved when $\\theta_2 = 0^\\circ$."
    ],
    "trapAlert": "At singularity $\\theta_2 = 0$, the arm is at the boundary of its reachable workspace.",
    "tags": [
      "Forward Kinematics",
      "Workspace",
      "2R Arm"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q19",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A planar 2R robot manipulator has link lengths $L_1 = 20$ cm and $L_2 = 15$ cm. What is the maximum reach (radial distance from the base origin) of the end-effector in cm?",
    "correctAnswer": {
      "exact": 35.0,
      "min": 34.99,
      "max": 35.01
    },
    "explanation": "The forward kinematics for end-effector position is $x = L_1 \\cos\\theta_1 + L_2 \\cos(\\theta_1 + \\theta_2)$ and $y = L_1 \\sin\\theta_1 + L_2 \\sin(\\theta_1 + \\theta_2)$. Maximum reach occurs when both links are fully outstretched ($\\theta_2 = 0^\\circ$), giving $r_{max} = L_1 + L_2 = 20 + 15 = 35$ cm.",
    "hints": [
      "Maximum radial reach is achieved when $\\theta_2 = 0^\\circ$."
    ],
    "trapAlert": "At singularity $\\theta_2 = 0$, the arm is at the boundary of its reachable workspace.",
    "tags": [
      "Forward Kinematics",
      "Workspace",
      "2R Arm"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q20",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A planar 2R robot manipulator has link lengths $L_1 = 30$ cm and $L_2 = 20$ cm. What is the maximum reach (radial distance from the base origin) of the end-effector in cm?",
    "correctAnswer": {
      "exact": 50.0,
      "min": 49.99,
      "max": 50.01
    },
    "explanation": "The forward kinematics for end-effector position is $x = L_1 \\cos\\theta_1 + L_2 \\cos(\\theta_1 + \\theta_2)$ and $y = L_1 \\sin\\theta_1 + L_2 \\sin(\\theta_1 + \\theta_2)$. Maximum reach occurs when both links are fully outstretched ($\\theta_2 = 0^\\circ$), giving $r_{max} = L_1 + L_2 = 30 + 20 = 50$ cm.",
    "hints": [
      "Maximum radial reach is achieved when $\\theta_2 = 0^\\circ$."
    ],
    "trapAlert": "At singularity $\\theta_2 = 0$, the arm is at the boundary of its reachable workspace.",
    "tags": [
      "Forward Kinematics",
      "Workspace",
      "2R Arm"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q21",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A planar 2R robot manipulator has link lengths $L_1 = 40$ cm and $L_2 = 30$ cm. What is the maximum reach (radial distance from the base origin) of the end-effector in cm?",
    "correctAnswer": {
      "exact": 70.0,
      "min": 69.99,
      "max": 70.01
    },
    "explanation": "The forward kinematics for end-effector position is $x = L_1 \\cos\\theta_1 + L_2 \\cos(\\theta_1 + \\theta_2)$ and $y = L_1 \\sin\\theta_1 + L_2 \\sin(\\theta_1 + \\theta_2)$. Maximum reach occurs when both links are fully outstretched ($\\theta_2 = 0^\\circ$), giving $r_{max} = L_1 + L_2 = 40 + 30 = 70$ cm.",
    "hints": [
      "Maximum radial reach is achieved when $\\theta_2 = 0^\\circ$."
    ],
    "trapAlert": "At singularity $\\theta_2 = 0$, the arm is at the boundary of its reachable workspace.",
    "tags": [
      "Forward Kinematics",
      "Workspace",
      "2R Arm"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q22",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A planar 2R robot manipulator has link lengths $L_1 = 50$ cm and $L_2 = 40$ cm. What is the maximum reach (radial distance from the base origin) of the end-effector in cm?",
    "correctAnswer": {
      "exact": 90.0,
      "min": 89.99,
      "max": 90.01
    },
    "explanation": "The forward kinematics for end-effector position is $x = L_1 \\cos\\theta_1 + L_2 \\cos(\\theta_1 + \\theta_2)$ and $y = L_1 \\sin\\theta_1 + L_2 \\sin(\\theta_1 + \\theta_2)$. Maximum reach occurs when both links are fully outstretched ($\\theta_2 = 0^\\circ$), giving $r_{max} = L_1 + L_2 = 50 + 40 = 90$ cm.",
    "hints": [
      "Maximum radial reach is achieved when $\\theta_2 = 0^\\circ$."
    ],
    "trapAlert": "At singularity $\\theta_2 = 0$, the arm is at the boundary of its reachable workspace.",
    "tags": [
      "Forward Kinematics",
      "Workspace",
      "2R Arm"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q23",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A planar 2R robot manipulator has link lengths $L_1 = 25$ cm and $L_2 = 25$ cm. What is the maximum reach (radial distance from the base origin) of the end-effector in cm?",
    "correctAnswer": {
      "exact": 50.0,
      "min": 49.99,
      "max": 50.01
    },
    "explanation": "The forward kinematics for end-effector position is $x = L_1 \\cos\\theta_1 + L_2 \\cos(\\theta_1 + \\theta_2)$ and $y = L_1 \\sin\\theta_1 + L_2 \\sin(\\theta_1 + \\theta_2)$. Maximum reach occurs when both links are fully outstretched ($\\theta_2 = 0^\\circ$), giving $r_{max} = L_1 + L_2 = 25 + 25 = 50$ cm.",
    "hints": [
      "Maximum radial reach is achieved when $\\theta_2 = 0^\\circ$."
    ],
    "trapAlert": "At singularity $\\theta_2 = 0$, the arm is at the boundary of its reachable workspace.",
    "tags": [
      "Forward Kinematics",
      "Workspace",
      "2R Arm"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q24",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q25",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q26",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q27",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q28",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q29",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q30",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q31",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q32",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q33",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q34",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q35",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q36",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q37",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q38",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q39",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q40",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q41",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q42",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q43",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q44",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-kinematics-transforms-q45",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-kinematics-transforms",
    "topicTitle": "Robot Kinematics & Coordinate Transformations",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a robot manipulator, kinematic singularities occur when the Jacobian matrix $J(q)$ has:",
    "options": [
      {
        "id": "A",
        "text": "Rank deficiency ($\\det(J(q)) = 0$ for square Jacobian)"
      },
      {
        "id": "B",
        "text": "All zero entries"
      },
      {
        "id": "C",
        "text": "Identity matrix form"
      },
      {
        "id": "D",
        "text": "Negative trace"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A kinematic singularity is a configuration in which the manipulator loses one or more degrees of freedom in Cartesian space. Mathematically, the Jacobian matrix loses rank (i.e. $\\det(J) = 0$). In this configuration, infinite joint velocity would be required to produce finite end-effector velocity in certain directions.",
    "hints": [
      "Jacobian maps joint velocities to Cartesian velocities: $v = J \\dot{q}$."
    ],
    "trapAlert": "Singularity corresponds to $\\det(J) = 0$ or loss of full row rank.",
    "tags": [
      "Jacobian",
      "Singularities",
      "Kinematics"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q01",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In an ISO 9283 performance test of an industrial articulated robot, the positioning error follows a Gaussian normal distribution with a standard deviation of $\\sigma = 0.01$ mm. What is the ISO unilateral repeatability ($3\\sigma$) in mm?",
    "correctAnswer": {
      "exact": 0.03,
      "min": 0.02,
      "max": 0.03
    },
    "explanation": "According to ISO 9283 standard for robot performance, positioning repeatability is expressed as $R_p = \\pm 3\\sigma$. The unilateral $3\\sigma$ value is $3 \\times 0.01 = 0.03$ mm.",
    "hints": [
      "Standard repeatability is computed as $3\\sigma$."
    ],
    "trapAlert": "Verify whether single standard deviation or $3\\sigma$ is requested.",
    "tags": [
      "Repeatability",
      "ISO 9283",
      "Accuracy"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q02",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In an ISO 9283 performance test of an industrial articulated robot, the positioning error follows a Gaussian normal distribution with a standard deviation of $\\sigma = 0.02$ mm. What is the ISO unilateral repeatability ($3\\sigma$) in mm?",
    "correctAnswer": {
      "exact": 0.06,
      "min": 0.06,
      "max": 0.07
    },
    "explanation": "According to ISO 9283 standard for robot performance, positioning repeatability is expressed as $R_p = \\pm 3\\sigma$. The unilateral $3\\sigma$ value is $3 \\times 0.02 = 0.06$ mm.",
    "hints": [
      "Standard repeatability is computed as $3\\sigma$."
    ],
    "trapAlert": "Verify whether single standard deviation or $3\\sigma$ is requested.",
    "tags": [
      "Repeatability",
      "ISO 9283",
      "Accuracy"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q03",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In an ISO 9283 performance test of an industrial articulated robot, the positioning error follows a Gaussian normal distribution with a standard deviation of $\\sigma = 0.03$ mm. What is the ISO unilateral repeatability ($3\\sigma$) in mm?",
    "correctAnswer": {
      "exact": 0.09,
      "min": 0.08,
      "max": 0.1
    },
    "explanation": "According to ISO 9283 standard for robot performance, positioning repeatability is expressed as $R_p = \\pm 3\\sigma$. The unilateral $3\\sigma$ value is $3 \\times 0.03 = 0.09$ mm.",
    "hints": [
      "Standard repeatability is computed as $3\\sigma$."
    ],
    "trapAlert": "Verify whether single standard deviation or $3\\sigma$ is requested.",
    "tags": [
      "Repeatability",
      "ISO 9283",
      "Accuracy"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q04",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In an ISO 9283 performance test of an industrial articulated robot, the positioning error follows a Gaussian normal distribution with a standard deviation of $\\sigma = 0.05$ mm. What is the ISO unilateral repeatability ($3\\sigma$) in mm?",
    "correctAnswer": {
      "exact": 0.15,
      "min": 0.14,
      "max": 0.15
    },
    "explanation": "According to ISO 9283 standard for robot performance, positioning repeatability is expressed as $R_p = \\pm 3\\sigma$. The unilateral $3\\sigma$ value is $3 \\times 0.05 = 0.15$ mm.",
    "hints": [
      "Standard repeatability is computed as $3\\sigma$."
    ],
    "trapAlert": "Verify whether single standard deviation or $3\\sigma$ is requested.",
    "tags": [
      "Repeatability",
      "ISO 9283",
      "Accuracy"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q05",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In an ISO 9283 performance test of an industrial articulated robot, the positioning error follows a Gaussian normal distribution with a standard deviation of $\\sigma = 0.08$ mm. What is the ISO unilateral repeatability ($3\\sigma$) in mm?",
    "correctAnswer": {
      "exact": 0.24,
      "min": 0.23,
      "max": 0.24
    },
    "explanation": "According to ISO 9283 standard for robot performance, positioning repeatability is expressed as $R_p = \\pm 3\\sigma$. The unilateral $3\\sigma$ value is $3 \\times 0.08 = 0.24$ mm.",
    "hints": [
      "Standard repeatability is computed as $3\\sigma$."
    ],
    "trapAlert": "Verify whether single standard deviation or $3\\sigma$ is requested.",
    "tags": [
      "Repeatability",
      "ISO 9283",
      "Accuracy"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q06",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In an ISO 9283 performance test of an industrial articulated robot, the positioning error follows a Gaussian normal distribution with a standard deviation of $\\sigma = 0.1$ mm. What is the ISO unilateral repeatability ($3\\sigma$) in mm?",
    "correctAnswer": {
      "exact": 0.3,
      "min": 0.29,
      "max": 0.3
    },
    "explanation": "According to ISO 9283 standard for robot performance, positioning repeatability is expressed as $R_p = \\pm 3\\sigma$. The unilateral $3\\sigma$ value is $3 \\times 0.1 = 0.3$ mm.",
    "hints": [
      "Standard repeatability is computed as $3\\sigma$."
    ],
    "trapAlert": "Verify whether single standard deviation or $3\\sigma$ is requested.",
    "tags": [
      "Repeatability",
      "ISO 9283",
      "Accuracy"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q07",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In an ISO 9283 performance test of an industrial articulated robot, the positioning error follows a Gaussian normal distribution with a standard deviation of $\\sigma = 0.15$ mm. What is the ISO unilateral repeatability ($3\\sigma$) in mm?",
    "correctAnswer": {
      "exact": 0.45,
      "min": 0.45,
      "max": 0.46
    },
    "explanation": "According to ISO 9283 standard for robot performance, positioning repeatability is expressed as $R_p = \\pm 3\\sigma$. The unilateral $3\\sigma$ value is $3 \\times 0.15 = 0.45$ mm.",
    "hints": [
      "Standard repeatability is computed as $3\\sigma$."
    ],
    "trapAlert": "Verify whether single standard deviation or $3\\sigma$ is requested.",
    "tags": [
      "Repeatability",
      "ISO 9283",
      "Accuracy"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q08",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In an ISO 9283 performance test of an industrial articulated robot, the positioning error follows a Gaussian normal distribution with a standard deviation of $\\sigma = 0.2$ mm. What is the ISO unilateral repeatability ($3\\sigma$) in mm?",
    "correctAnswer": {
      "exact": 0.6,
      "min": 0.59,
      "max": 0.6
    },
    "explanation": "According to ISO 9283 standard for robot performance, positioning repeatability is expressed as $R_p = \\pm 3\\sigma$. The unilateral $3\\sigma$ value is $3 \\times 0.2 = 0.6$ mm.",
    "hints": [
      "Standard repeatability is computed as $3\\sigma$."
    ],
    "trapAlert": "Verify whether single standard deviation or $3\\sigma$ is requested.",
    "tags": [
      "Repeatability",
      "ISO 9283",
      "Accuracy"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q09",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A robot joint is to move from rest $\\theta(0) = 0.0^\\circ$ to rest $\\theta(2.0) = 90.0^\\circ$ in $t_f = 2.0$ seconds using a cubic polynomial trajectory $\\theta(t) = a_0 + a_1 t + a_2 t^2 + a_3 t^3$. Calculate the coefficient $a_2$ (in $\\text{deg}/\\text{s}^2$).",
    "correctAnswer": {
      "exact": 67.5,
      "min": 67.4,
      "max": 67.6
    },
    "explanation": "Boundary conditions: $\\theta(0) = 0.0 \\implies a_0 = 0.0$; $\\dot{\\theta}(0) = 0 \\implies a_1 = 0$; $\\theta(t_f) = 90.0$ and $\\dot{\\theta}(t_f) = 0$. Solving the linear system gives $a_2 = \\frac{3(\\theta_f - \\theta_0)}{t_f^2} = \\frac{3 \\times 90.0}{4.0} = 67.5\\ \\text{deg}/\\text{s}^2$.",
    "hints": [
      "Use cubic trajectory formula: $a_2 = 3(\\theta_f - \\theta_0)/t_f^2$ and $a_3 = -2(\\theta_f - \\theta_0)/t_f^3$ when starting and ending at rest."
    ],
    "trapAlert": "Pay close attention to $t_f^2$ in the denominator of $a_2$.",
    "tags": [
      "Cubic Trajectory",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q10",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A robot joint is to move from rest $\\theta(0) = 0.0^\\circ$ to rest $\\theta(3.0) = 60.0^\\circ$ in $t_f = 3.0$ seconds using a cubic polynomial trajectory $\\theta(t) = a_0 + a_1 t + a_2 t^2 + a_3 t^3$. Calculate the coefficient $a_2$ (in $\\text{deg}/\\text{s}^2$).",
    "correctAnswer": {
      "exact": 20.0,
      "min": 19.9,
      "max": 20.1
    },
    "explanation": "Boundary conditions: $\\theta(0) = 0.0 \\implies a_0 = 0.0$; $\\dot{\\theta}(0) = 0 \\implies a_1 = 0$; $\\theta(t_f) = 60.0$ and $\\dot{\\theta}(t_f) = 0$. Solving the linear system gives $a_2 = \\frac{3(\\theta_f - \\theta_0)}{t_f^2} = \\frac{3 \\times 60.0}{9.0} = 20.0\\ \\text{deg}/\\text{s}^2$.",
    "hints": [
      "Use cubic trajectory formula: $a_2 = 3(\\theta_f - \\theta_0)/t_f^2$ and $a_3 = -2(\\theta_f - \\theta_0)/t_f^3$ when starting and ending at rest."
    ],
    "trapAlert": "Pay close attention to $t_f^2$ in the denominator of $a_2$.",
    "tags": [
      "Cubic Trajectory",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q11",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A robot joint is to move from rest $\\theta(0) = 0.0^\\circ$ to rest $\\theta(4.0) = 180.0^\\circ$ in $t_f = 4.0$ seconds using a cubic polynomial trajectory $\\theta(t) = a_0 + a_1 t + a_2 t^2 + a_3 t^3$. Calculate the coefficient $a_2$ (in $\\text{deg}/\\text{s}^2$).",
    "correctAnswer": {
      "exact": 33.75,
      "min": 33.65,
      "max": 33.85
    },
    "explanation": "Boundary conditions: $\\theta(0) = 0.0 \\implies a_0 = 0.0$; $\\dot{\\theta}(0) = 0 \\implies a_1 = 0$; $\\theta(t_f) = 180.0$ and $\\dot{\\theta}(t_f) = 0$. Solving the linear system gives $a_2 = \\frac{3(\\theta_f - \\theta_0)}{t_f^2} = \\frac{3 \\times 180.0}{16.0} = 33.75\\ \\text{deg}/\\text{s}^2$.",
    "hints": [
      "Use cubic trajectory formula: $a_2 = 3(\\theta_f - \\theta_0)/t_f^2$ and $a_3 = -2(\\theta_f - \\theta_0)/t_f^3$ when starting and ending at rest."
    ],
    "trapAlert": "Pay close attention to $t_f^2$ in the denominator of $a_2$.",
    "tags": [
      "Cubic Trajectory",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q12",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A robot joint is to move from rest $\\theta(0) = 0.0^\\circ$ to rest $\\theta(1.5) = 45.0^\\circ$ in $t_f = 1.5$ seconds using a cubic polynomial trajectory $\\theta(t) = a_0 + a_1 t + a_2 t^2 + a_3 t^3$. Calculate the coefficient $a_2$ (in $\\text{deg}/\\text{s}^2$).",
    "correctAnswer": {
      "exact": 60.0,
      "min": 59.9,
      "max": 60.1
    },
    "explanation": "Boundary conditions: $\\theta(0) = 0.0 \\implies a_0 = 0.0$; $\\dot{\\theta}(0) = 0 \\implies a_1 = 0$; $\\theta(t_f) = 45.0$ and $\\dot{\\theta}(t_f) = 0$. Solving the linear system gives $a_2 = \\frac{3(\\theta_f - \\theta_0)}{t_f^2} = \\frac{3 \\times 45.0}{2.25} = 60.0\\ \\text{deg}/\\text{s}^2$.",
    "hints": [
      "Use cubic trajectory formula: $a_2 = 3(\\theta_f - \\theta_0)/t_f^2$ and $a_3 = -2(\\theta_f - \\theta_0)/t_f^3$ when starting and ending at rest."
    ],
    "trapAlert": "Pay close attention to $t_f^2$ in the denominator of $a_2$.",
    "tags": [
      "Cubic Trajectory",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q13",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A robot joint is to move from rest $\\theta(0) = 10.0^\\circ$ to rest $\\theta(2.0) = 70.0^\\circ$ in $t_f = 2.0$ seconds using a cubic polynomial trajectory $\\theta(t) = a_0 + a_1 t + a_2 t^2 + a_3 t^3$. Calculate the coefficient $a_2$ (in $\\text{deg}/\\text{s}^2$).",
    "correctAnswer": {
      "exact": 45.0,
      "min": 44.9,
      "max": 45.1
    },
    "explanation": "Boundary conditions: $\\theta(0) = 10.0 \\implies a_0 = 10.0$; $\\dot{\\theta}(0) = 0 \\implies a_1 = 0$; $\\theta(t_f) = 70.0$ and $\\dot{\\theta}(t_f) = 0$. Solving the linear system gives $a_2 = \\frac{3(\\theta_f - \\theta_0)}{t_f^2} = \\frac{3 \\times 60.0}{4.0} = 45.0\\ \\text{deg}/\\text{s}^2$.",
    "hints": [
      "Use cubic trajectory formula: $a_2 = 3(\\theta_f - \\theta_0)/t_f^2$ and $a_3 = -2(\\theta_f - \\theta_0)/t_f^3$ when starting and ending at rest."
    ],
    "trapAlert": "Pay close attention to $t_f^2$ in the denominator of $a_2$.",
    "tags": [
      "Cubic Trajectory",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q14",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A friction-based two-finger robotic gripper holds a payload of mass $m = 5.0$ kg vertically against gravity. The coefficient of friction between the fingers and the object is $\\mu = 0.2$. Assuming a safety factor of $S_f = 2.0$ and $g = 9.81\\ \\text{m/s}^2$, what is the required normal gripping force $F_N$ per finger in Newtons?",
    "correctAnswer": {
      "exact": 245.25,
      "min": 244.25,
      "max": 246.25
    },
    "explanation": "Vertical equilibrium requires total friction force $2 \\mu F_N \\ge S_f m g \\implies F_N = \\frac{S_f m g}{2\\mu} = \\frac{2.0 \\times 5.0 \\times 9.81}{2 \\times 0.2} = 245.25$ N.",
    "hints": [
      "Two fingers share the frictional support: total friction = $2 \\mu F_N$."
    ],
    "trapAlert": "Remember that there are TWO gripping fingers, each exerting normal force $F_N$.",
    "tags": [
      "Robotic Gripper",
      "Gripping Force",
      "End-Effectors"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q15",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A friction-based two-finger robotic gripper holds a payload of mass $m = 10.0$ kg vertically against gravity. The coefficient of friction between the fingers and the object is $\\mu = 0.25$. Assuming a safety factor of $S_f = 1.5$ and $g = 9.81\\ \\text{m/s}^2$, what is the required normal gripping force $F_N$ per finger in Newtons?",
    "correctAnswer": {
      "exact": 294.3,
      "min": 293.3,
      "max": 295.3
    },
    "explanation": "Vertical equilibrium requires total friction force $2 \\mu F_N \\ge S_f m g \\implies F_N = \\frac{S_f m g}{2\\mu} = \\frac{1.5 \\times 10.0 \\times 9.81}{2 \\times 0.25} = 294.3$ N.",
    "hints": [
      "Two fingers share the frictional support: total friction = $2 \\mu F_N$."
    ],
    "trapAlert": "Remember that there are TWO gripping fingers, each exerting normal force $F_N$.",
    "tags": [
      "Robotic Gripper",
      "Gripping Force",
      "End-Effectors"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q16",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A friction-based two-finger robotic gripper holds a payload of mass $m = 2.0$ kg vertically against gravity. The coefficient of friction between the fingers and the object is $\\mu = 0.15$. Assuming a safety factor of $S_f = 2.5$ and $g = 9.81\\ \\text{m/s}^2$, what is the required normal gripping force $F_N$ per finger in Newtons?",
    "correctAnswer": {
      "exact": 163.5,
      "min": 162.5,
      "max": 164.5
    },
    "explanation": "Vertical equilibrium requires total friction force $2 \\mu F_N \\ge S_f m g \\implies F_N = \\frac{S_f m g}{2\\mu} = \\frac{2.5 \\times 2.0 \\times 9.81}{2 \\times 0.15} = 163.5$ N.",
    "hints": [
      "Two fingers share the frictional support: total friction = $2 \\mu F_N$."
    ],
    "trapAlert": "Remember that there are TWO gripping fingers, each exerting normal force $F_N$.",
    "tags": [
      "Robotic Gripper",
      "Gripping Force",
      "End-Effectors"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q17",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A friction-based two-finger robotic gripper holds a payload of mass $m = 8.0$ kg vertically against gravity. The coefficient of friction between the fingers and the object is $\\mu = 0.3$. Assuming a safety factor of $S_f = 2.0$ and $g = 9.81\\ \\text{m/s}^2$, what is the required normal gripping force $F_N$ per finger in Newtons?",
    "correctAnswer": {
      "exact": 261.6,
      "min": 260.6,
      "max": 262.6
    },
    "explanation": "Vertical equilibrium requires total friction force $2 \\mu F_N \\ge S_f m g \\implies F_N = \\frac{S_f m g}{2\\mu} = \\frac{2.0 \\times 8.0 \\times 9.81}{2 \\times 0.3} = 261.6$ N.",
    "hints": [
      "Two fingers share the frictional support: total friction = $2 \\mu F_N$."
    ],
    "trapAlert": "Remember that there are TWO gripping fingers, each exerting normal force $F_N$.",
    "tags": [
      "Robotic Gripper",
      "Gripping Force",
      "End-Effectors"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q18",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A friction-based two-finger robotic gripper holds a payload of mass $m = 15.0$ kg vertically against gravity. The coefficient of friction between the fingers and the object is $\\mu = 0.2$. Assuming a safety factor of $S_f = 2.0$ and $g = 9.81\\ \\text{m/s}^2$, what is the required normal gripping force $F_N$ per finger in Newtons?",
    "correctAnswer": {
      "exact": 735.75,
      "min": 734.75,
      "max": 736.75
    },
    "explanation": "Vertical equilibrium requires total friction force $2 \\mu F_N \\ge S_f m g \\implies F_N = \\frac{S_f m g}{2\\mu} = \\frac{2.0 \\times 15.0 \\times 9.81}{2 \\times 0.2} = 735.75$ N.",
    "hints": [
      "Two fingers share the frictional support: total friction = $2 \\mu F_N$."
    ],
    "trapAlert": "Remember that there are TWO gripping fingers, each exerting normal force $F_N$.",
    "tags": [
      "Robotic Gripper",
      "Gripping Force",
      "End-Effectors"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q19",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A vacuum suction cup has an effective contact diameter of $D = 50.0$ mm and operates at an underpressure (relative vacuum) of $\\Delta P = 80.0$ kPa. What theoretical lifting force in Newtons does the cup generate perpendicular to the surface?",
    "correctAnswer": {
      "exact": 157.08,
      "min": 156.58,
      "max": 157.58
    },
    "explanation": "Effective suction area $A = \\frac{\\pi D^2}{4} = \\frac{\\pi \\times (50.0 \\times 10^{-3})^2}{4} = 0.001963$ m$^2$. Lifting force $F = \\Delta P \\times A = (80.0 \\times 10^3\\ \\text{Pa}) \\times 0.001963 = 157.08$ N.",
    "hints": [
      "Force = Pressure $\\times$ Area."
    ],
    "trapAlert": "Convert diameter from mm to meters and kPa to Pa.",
    "tags": [
      "Suction Cup",
      "Vacuum Gripper",
      "End-Effectors"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q20",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A vacuum suction cup has an effective contact diameter of $D = 40.0$ mm and operates at an underpressure (relative vacuum) of $\\Delta P = 70.0$ kPa. What theoretical lifting force in Newtons does the cup generate perpendicular to the surface?",
    "correctAnswer": {
      "exact": 87.96,
      "min": 87.46,
      "max": 88.46
    },
    "explanation": "Effective suction area $A = \\frac{\\pi D^2}{4} = \\frac{\\pi \\times (40.0 \\times 10^{-3})^2}{4} = 0.001257$ m$^2$. Lifting force $F = \\Delta P \\times A = (70.0 \\times 10^3\\ \\text{Pa}) \\times 0.001257 = 87.96$ N.",
    "hints": [
      "Force = Pressure $\\times$ Area."
    ],
    "trapAlert": "Convert diameter from mm to meters and kPa to Pa.",
    "tags": [
      "Suction Cup",
      "Vacuum Gripper",
      "End-Effectors"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q21",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A vacuum suction cup has an effective contact diameter of $D = 60.0$ mm and operates at an underpressure (relative vacuum) of $\\Delta P = 85.0$ kPa. What theoretical lifting force in Newtons does the cup generate perpendicular to the surface?",
    "correctAnswer": {
      "exact": 240.33,
      "min": 239.83,
      "max": 240.83
    },
    "explanation": "Effective suction area $A = \\frac{\\pi D^2}{4} = \\frac{\\pi \\times (60.0 \\times 10^{-3})^2}{4} = 0.002827$ m$^2$. Lifting force $F = \\Delta P \\times A = (85.0 \\times 10^3\\ \\text{Pa}) \\times 0.002827 = 240.33$ N.",
    "hints": [
      "Force = Pressure $\\times$ Area."
    ],
    "trapAlert": "Convert diameter from mm to meters and kPa to Pa.",
    "tags": [
      "Suction Cup",
      "Vacuum Gripper",
      "End-Effectors"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q22",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A vacuum suction cup has an effective contact diameter of $D = 80.0$ mm and operates at an underpressure (relative vacuum) of $\\Delta P = 60.0$ kPa. What theoretical lifting force in Newtons does the cup generate perpendicular to the surface?",
    "correctAnswer": {
      "exact": 301.59,
      "min": 301.09,
      "max": 302.09
    },
    "explanation": "Effective suction area $A = \\frac{\\pi D^2}{4} = \\frac{\\pi \\times (80.0 \\times 10^{-3})^2}{4} = 0.005027$ m$^2$. Lifting force $F = \\Delta P \\times A = (60.0 \\times 10^3\\ \\text{Pa}) \\times 0.005027 = 301.59$ N.",
    "hints": [
      "Force = Pressure $\\times$ Area."
    ],
    "trapAlert": "Convert diameter from mm to meters and kPa to Pa.",
    "tags": [
      "Suction Cup",
      "Vacuum Gripper",
      "End-Effectors"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q23",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q24",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q25",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q26",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q27",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q28",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q29",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q30",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q31",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q32",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q33",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q34",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q35",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q36",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q37",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q38",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q39",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q40",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q41",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q42",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q43",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q44",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-robotics-dynamics-path-endeffectors-q45",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-robotics-dynamics-path-endeffectors",
    "topicTitle": "Robot Trajectory, End-Effectors & Repeatability",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In robot trajectory generation, why are Linear Segments with Parabolic Blends (LSPB) preferred over simple linear point-to-point interpolation?",
    "options": [
      {
        "id": "A",
        "text": "LSPB provides continuous velocity and finite acceleration, eliminating infinite jerk at trajectory start and end"
      },
      {
        "id": "B",
        "text": "LSPB guarantees zero power consumption"
      },
      {
        "id": "C",
        "text": "LSPB eliminates the need for feedback encoders"
      },
      {
        "id": "D",
        "text": "LSPB makes the manipulator immune to kinematic singularities"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A pure linear trajectory has step changes in velocity at the boundaries, implying infinite acceleration (infinite actuator torque/jerk) which causes severe mechanical shock and motor saturation. LSPB blends the linear segment with parabolic acceleration/deceleration phases, bounding acceleration.",
    "hints": [
      "Differentiate velocity to see acceleration behavior at corners."
    ],
    "trapAlert": "Pure linear velocity has discontinuous derivatives, leading to infinite acceleration impulses.",
    "tags": [
      "LSPB",
      "Trapezoidal Velocity",
      "Trajectory Planning"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q01",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An AS/RS aisle has length $L = 60.0$ m and height $H = 30.0$ m. S/R crane travel speeds are $v_x = 1.5$ m/s horizontally and $v_y = 0.75$ m/s vertically (simultaneous motion). If pickup and deposit time is $T_{pd} = 10.0$ s per operation, what is the one-way full-traverse transit time $T = \\max(L/v_x, H/v_y)$ of the crane in seconds?",
    "correctAnswer": {
      "exact": 40.0,
      "min": 39.9,
      "max": 40.1
    },
    "explanation": "Travel times along the two axes are: $t_x = \\frac{L}{v_x} = \\frac{60.0}{1.5} = 40.0$ s, and $t_y = \\frac{H}{v_y} = \\frac{30.0}{0.75} = 40.0$ s. Since horizontal and vertical drives operate simultaneously, the full-traverse transit time is $T = \\max(t_x, t_y) = \\max(40.0, 40.0) = 40.0$ s.",
    "hints": [
      "Simultaneous motion means $T = \\max(t_x, t_y)$."
    ],
    "trapAlert": "Do not add the horizontal and vertical times together because they move simultaneously.",
    "tags": [
      "AS/RS",
      "Material Handling",
      "Transit Time"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q02",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An AS/RS aisle has length $L = 80.0$ m and height $H = 24.0$ m. S/R crane travel speeds are $v_x = 2.0$ m/s horizontally and $v_y = 0.6$ m/s vertically (simultaneous motion). If pickup and deposit time is $T_{pd} = 12.0$ s per operation, what is the one-way full-traverse transit time $T = \\max(L/v_x, H/v_y)$ of the crane in seconds?",
    "correctAnswer": {
      "exact": 40.0,
      "min": 39.9,
      "max": 40.1
    },
    "explanation": "Travel times along the two axes are: $t_x = \\frac{L}{v_x} = \\frac{80.0}{2.0} = 40.0$ s, and $t_y = \\frac{H}{v_y} = \\frac{24.0}{0.6} = 40.0$ s. Since horizontal and vertical drives operate simultaneously, the full-traverse transit time is $T = \\max(t_x, t_y) = \\max(40.0, 40.0) = 40.0$ s.",
    "hints": [
      "Simultaneous motion means $T = \\max(t_x, t_y)$."
    ],
    "trapAlert": "Do not add the horizontal and vertical times together because they move simultaneously.",
    "tags": [
      "AS/RS",
      "Material Handling",
      "Transit Time"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q03",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An AS/RS aisle has length $L = 50.0$ m and height $H = 20.0$ m. S/R crane travel speeds are $v_x = 1.25$ m/s horizontally and $v_y = 0.5$ m/s vertically (simultaneous motion). If pickup and deposit time is $T_{pd} = 8.0$ s per operation, what is the one-way full-traverse transit time $T = \\max(L/v_x, H/v_y)$ of the crane in seconds?",
    "correctAnswer": {
      "exact": 40.0,
      "min": 39.9,
      "max": 40.1
    },
    "explanation": "Travel times along the two axes are: $t_x = \\frac{L}{v_x} = \\frac{50.0}{1.25} = 40.0$ s, and $t_y = \\frac{H}{v_y} = \\frac{20.0}{0.5} = 40.0$ s. Since horizontal and vertical drives operate simultaneously, the full-traverse transit time is $T = \\max(t_x, t_y) = \\max(40.0, 40.0) = 40.0$ s.",
    "hints": [
      "Simultaneous motion means $T = \\max(t_x, t_y)$."
    ],
    "trapAlert": "Do not add the horizontal and vertical times together because they move simultaneously.",
    "tags": [
      "AS/RS",
      "Material Handling",
      "Transit Time"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q04",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An AS/RS aisle has length $L = 100.0$ m and height $H = 40.0$ m. S/R crane travel speeds are $v_x = 2.5$ m/s horizontally and $v_y = 1.0$ m/s vertically (simultaneous motion). If pickup and deposit time is $T_{pd} = 15.0$ s per operation, what is the one-way full-traverse transit time $T = \\max(L/v_x, H/v_y)$ of the crane in seconds?",
    "correctAnswer": {
      "exact": 40.0,
      "min": 39.9,
      "max": 40.1
    },
    "explanation": "Travel times along the two axes are: $t_x = \\frac{L}{v_x} = \\frac{100.0}{2.5} = 40.0$ s, and $t_y = \\frac{H}{v_y} = \\frac{40.0}{1.0} = 40.0$ s. Since horizontal and vertical drives operate simultaneously, the full-traverse transit time is $T = \\max(t_x, t_y) = \\max(40.0, 40.0) = 40.0$ s.",
    "hints": [
      "Simultaneous motion means $T = \\max(t_x, t_y)$."
    ],
    "trapAlert": "Do not add the horizontal and vertical times together because they move simultaneously.",
    "tags": [
      "AS/RS",
      "Material Handling",
      "Transit Time"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q05",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "An AS/RS aisle has length $L = 75.0$ m and height $H = 25.0$ m. S/R crane travel speeds are $v_x = 1.5$ m/s horizontally and $v_y = 0.5$ m/s vertically (simultaneous motion). If pickup and deposit time is $T_{pd} = 10.0$ s per operation, what is the one-way full-traverse transit time $T = \\max(L/v_x, H/v_y)$ of the crane in seconds?",
    "correctAnswer": {
      "exact": 50.0,
      "min": 49.9,
      "max": 50.1
    },
    "explanation": "Travel times along the two axes are: $t_x = \\frac{L}{v_x} = \\frac{75.0}{1.5} = 50.0$ s, and $t_y = \\frac{H}{v_y} = \\frac{25.0}{0.5} = 50.0$ s. Since horizontal and vertical drives operate simultaneously, the full-traverse transit time is $T = \\max(t_x, t_y) = \\max(50.0, 50.0) = 50.0$ s.",
    "hints": [
      "Simultaneous motion means $T = \\max(t_x, t_y)$."
    ],
    "trapAlert": "Do not add the horizontal and vertical times together because they move simultaneously.",
    "tags": [
      "AS/RS",
      "Material Handling",
      "Transit Time"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q06",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A programmable logic controller (PLC) has an input read scan time of 5 ms, user logic execution time of 15 ms, and output update time of 2 ms. Housekeeping takes 0 ms. What is the total PLC scan cycle time in milliseconds?",
    "correctAnswer": {
      "exact": 22.0,
      "min": 21.9,
      "max": 22.1
    },
    "explanation": "Total PLC scan cycle time = $\\text{Input Scan} + \\text{Program Execution} + \\text{Output Write} = 5 + 15 + 2 = 22.0$ ms.",
    "hints": [
      "Sum all three core phases of the PLC operating cycle."
    ],
    "trapAlert": "Ensure the time unit is preserved in milliseconds.",
    "tags": [
      "PLC",
      "Scan Time",
      "Automation"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q07",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A programmable logic controller (PLC) has an input read scan time of 2 ms, user logic execution time of 8 ms, and output update time of 1 ms. Housekeeping takes 0 ms. What is the total PLC scan cycle time in milliseconds?",
    "correctAnswer": {
      "exact": 11.0,
      "min": 10.9,
      "max": 11.1
    },
    "explanation": "Total PLC scan cycle time = $\\text{Input Scan} + \\text{Program Execution} + \\text{Output Write} = 2 + 8 + 1 = 11.0$ ms.",
    "hints": [
      "Sum all three core phases of the PLC operating cycle."
    ],
    "trapAlert": "Ensure the time unit is preserved in milliseconds.",
    "tags": [
      "PLC",
      "Scan Time",
      "Automation"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q08",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A programmable logic controller (PLC) has an input read scan time of 4 ms, user logic execution time of 20 ms, and output update time of 3 ms. Housekeeping takes 0 ms. What is the total PLC scan cycle time in milliseconds?",
    "correctAnswer": {
      "exact": 27.0,
      "min": 26.9,
      "max": 27.1
    },
    "explanation": "Total PLC scan cycle time = $\\text{Input Scan} + \\text{Program Execution} + \\text{Output Write} = 4 + 20 + 3 = 27.0$ ms.",
    "hints": [
      "Sum all three core phases of the PLC operating cycle."
    ],
    "trapAlert": "Ensure the time unit is preserved in milliseconds.",
    "tags": [
      "PLC",
      "Scan Time",
      "Automation"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q09",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A programmable logic controller (PLC) has an input read scan time of 1 ms, user logic execution time of 5 ms, and output update time of 1 ms. Housekeeping takes 0 ms. What is the total PLC scan cycle time in milliseconds?",
    "correctAnswer": {
      "exact": 7.0,
      "min": 6.9,
      "max": 7.1
    },
    "explanation": "Total PLC scan cycle time = $\\text{Input Scan} + \\text{Program Execution} + \\text{Output Write} = 1 + 5 + 1 = 7.0$ ms.",
    "hints": [
      "Sum all three core phases of the PLC operating cycle."
    ],
    "trapAlert": "Ensure the time unit is preserved in milliseconds.",
    "tags": [
      "PLC",
      "Scan Time",
      "Automation"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q10",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A programmable logic controller (PLC) has an input read scan time of 3 ms, user logic execution time of 12 ms, and output update time of 2 ms. Housekeeping takes 0 ms. What is the total PLC scan cycle time in milliseconds?",
    "correctAnswer": {
      "exact": 17.0,
      "min": 16.9,
      "max": 17.1
    },
    "explanation": "Total PLC scan cycle time = $\\text{Input Scan} + \\text{Program Execution} + \\text{Output Write} = 3 + 12 + 2 = 17.0$ ms.",
    "hints": [
      "Sum all three core phases of the PLC operating cycle."
    ],
    "trapAlert": "Ensure the time unit is preserved in milliseconds.",
    "tags": [
      "PLC",
      "Scan Time",
      "Automation"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q11",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A programmable logic controller (PLC) has an input read scan time of 2 ms, user logic execution time of 10 ms, and output update time of 2 ms. Housekeeping takes 0 ms. What is the total PLC scan cycle time in milliseconds?",
    "correctAnswer": {
      "exact": 14.0,
      "min": 13.9,
      "max": 14.1
    },
    "explanation": "Total PLC scan cycle time = $\\text{Input Scan} + \\text{Program Execution} + \\text{Output Write} = 2 + 10 + 2 = 14.0$ ms.",
    "hints": [
      "Sum all three core phases of the PLC operating cycle."
    ],
    "trapAlert": "Ensure the time unit is preserved in milliseconds.",
    "tags": [
      "PLC",
      "Scan Time",
      "Automation"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q12",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (MSQ)",
    "type": "MSQ",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Hard",
    "text": "Which of the following CNC G-code and M-code pairings match their standard ISO 6983 definitions? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "G00 \u2014 Rapid traverse (point-to-point positioning at maximum speed)"
      },
      {
        "id": "B",
        "text": "G01 \u2014 Linear interpolation at programmed feedrate"
      },
      {
        "id": "C",
        "text": "G02 \u2014 Circular interpolation clockwise (CW)"
      },
      {
        "id": "D",
        "text": "M05 \u2014 Spindle start clockwise (CW)"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "In ISO CNC programming: G00 is rapid positioning without cutting; G01 is linear feed cutting; G02 is circular interpolation CW; G03 is circular CCW. M03 is spindle ON clockwise, whereas M05 is spindle STOP. Hence Option D is incorrect.",
    "hints": [
      "M03 starts the spindle CW, M04 starts CCW, M05 stops the spindle."
    ],
    "trapAlert": "M05 is spindle STOP, not spindle start!",
    "tags": [
      "CNC Programming",
      "G-Codes",
      "M-Codes",
      "GATE MSQ"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q13",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In an automated transfer line of 5 sequential workstations, the station process times are 1.2 min, 1.8 min, 5.0 min, 1.5 min, and 1.4 min respectively. Station 3 is the bottleneck station. Assuming 100% line efficiency and zero transfer time, what is the maximum production rate of the line in parts per hour?",
    "correctAnswer": {
      "exact": 12.0,
      "min": 11.5,
      "max": 12.5
    },
    "explanation": "The line production rate is governed solely by the bottleneck station cycle time: $T_c = T_b = 5.0$ min/part. Production rate $R_p = \\frac{60}{T_c} = \\frac{60}{5.0} = 12$ parts/hour.",
    "hints": [
      "Line throughput = $60 / T_{bottleneck}$."
    ],
    "trapAlert": "The slowest (bottleneck) station sets the maximum steady-state output of the line.",
    "tags": [
      "Bottleneck Analysis",
      "Production Rate",
      "CIM"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q14",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In an automated transfer line of 5 sequential workstations, the station process times are 1.2 min, 1.8 min, 4.0 min, 1.5 min, and 1.4 min respectively. Station 3 is the bottleneck station. Assuming 100% line efficiency and zero transfer time, what is the maximum production rate of the line in parts per hour?",
    "correctAnswer": {
      "exact": 15.0,
      "min": 14.5,
      "max": 15.5
    },
    "explanation": "The line production rate is governed solely by the bottleneck station cycle time: $T_c = T_b = 4.0$ min/part. Production rate $R_p = \\frac{60}{T_c} = \\frac{60}{4.0} = 15$ parts/hour.",
    "hints": [
      "Line throughput = $60 / T_{bottleneck}$."
    ],
    "trapAlert": "The slowest (bottleneck) station sets the maximum steady-state output of the line.",
    "tags": [
      "Bottleneck Analysis",
      "Production Rate",
      "CIM"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q15",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In an automated transfer line of 5 sequential workstations, the station process times are 1.2 min, 1.8 min, 3.0 min, 1.5 min, and 1.4 min respectively. Station 3 is the bottleneck station. Assuming 100% line efficiency and zero transfer time, what is the maximum production rate of the line in parts per hour?",
    "correctAnswer": {
      "exact": 20.0,
      "min": 19.5,
      "max": 20.5
    },
    "explanation": "The line production rate is governed solely by the bottleneck station cycle time: $T_c = T_b = 3.0$ min/part. Production rate $R_p = \\frac{60}{T_c} = \\frac{60}{3.0} = 20$ parts/hour.",
    "hints": [
      "Line throughput = $60 / T_{bottleneck}$."
    ],
    "trapAlert": "The slowest (bottleneck) station sets the maximum steady-state output of the line.",
    "tags": [
      "Bottleneck Analysis",
      "Production Rate",
      "CIM"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q16",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In an automated transfer line of 5 sequential workstations, the station process times are 1.2 min, 1.8 min, 2.5 min, 1.5 min, and 1.4 min respectively. Station 3 is the bottleneck station. Assuming 100% line efficiency and zero transfer time, what is the maximum production rate of the line in parts per hour?",
    "correctAnswer": {
      "exact": 24.0,
      "min": 23.5,
      "max": 24.5
    },
    "explanation": "The line production rate is governed solely by the bottleneck station cycle time: $T_c = T_b = 2.5$ min/part. Production rate $R_p = \\frac{60}{T_c} = \\frac{60}{2.5} = 24$ parts/hour.",
    "hints": [
      "Line throughput = $60 / T_{bottleneck}$."
    ],
    "trapAlert": "The slowest (bottleneck) station sets the maximum steady-state output of the line.",
    "tags": [
      "Bottleneck Analysis",
      "Production Rate",
      "CIM"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q17",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In an automated transfer line of 5 sequential workstations, the station process times are 1.2 min, 1.8 min, 2.0 min, 1.5 min, and 1.4 min respectively. Station 3 is the bottleneck station. Assuming 100% line efficiency and zero transfer time, what is the maximum production rate of the line in parts per hour?",
    "correctAnswer": {
      "exact": 30.0,
      "min": 29.5,
      "max": 30.5
    },
    "explanation": "The line production rate is governed solely by the bottleneck station cycle time: $T_c = T_b = 2.0$ min/part. Production rate $R_p = \\frac{60}{T_c} = \\frac{60}{2.0} = 30$ parts/hour.",
    "hints": [
      "Line throughput = $60 / T_{bottleneck}$."
    ],
    "trapAlert": "The slowest (bottleneck) station sets the maximum steady-state output of the line.",
    "tags": [
      "Bottleneck Analysis",
      "Production Rate",
      "CIM"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q18",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In an automated transfer line of 5 sequential workstations, the station process times are 1.2 min, 1.8 min, 1.5 min, 1.5 min, and 1.4 min respectively. Station 3 is the bottleneck station. Assuming 100% line efficiency and zero transfer time, what is the maximum production rate of the line in parts per hour?",
    "correctAnswer": {
      "exact": 40.0,
      "min": 39.5,
      "max": 40.5
    },
    "explanation": "The line production rate is governed solely by the bottleneck station cycle time: $T_c = T_b = 1.5$ min/part. Production rate $R_p = \\frac{60}{T_c} = \\frac{60}{1.5} = 40$ parts/hour.",
    "hints": [
      "Line throughput = $60 / T_{bottleneck}$."
    ],
    "trapAlert": "The slowest (bottleneck) station sets the maximum steady-state output of the line.",
    "tags": [
      "Bottleneck Analysis",
      "Production Rate",
      "CIM"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q19",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q20",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q21",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q22",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q23",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q24",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q25",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q26",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q27",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q28",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q29",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q30",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q31",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q32",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q33",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q34",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q35",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q36",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q37",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q38",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q39",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q40",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q41",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q42",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q43",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q44",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-cim-plc-automation-q45",
    "paper": "RA",
    "subject": "Principles of Robotics & Automation",
    "topicId": "ra-cim-plc-automation",
    "topicTitle": "CIM, PLC, CNC & Workcells",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a PLC ladder logic diagram, what is the behavior of a Normally Open (NO, $-[ \\ ]-$) contact when its assigned input bit becomes logic HIGH (1)?",
    "options": [
      {
        "id": "A",
        "text": "It closes, allowing power flow through the rung"
      },
      {
        "id": "B",
        "text": "It opens, blocking power flow"
      },
      {
        "id": "C",
        "text": "It inverts into an analog value"
      },
      {
        "id": "D",
        "text": "It resets the entire PLC CPU"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Normally Open contact examines if the referenced bit is ON (1). When true, the contact conducts (closes), enabling power flow to downstream output coils or function blocks on that rung.",
    "hints": [
      "Examine If Closed (XIC) behavior."
    ],
    "trapAlert": "Normally open means open at rest (0), closed when activated (1).",
    "tags": [
      "Ladder Logic",
      "PLC Contacts"
    ]
  },
  {
    "id": "ra-b1-control-systems-q01",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A unity negative feedback control system has a closed-loop transfer function $T(s) = \\frac{16.0}{s^2 + 4.0s + 16.0}$. For damping ratio $\\zeta = 0.5$ and natural frequency $\\omega_n = 4.0$ rad/s, calculate the 2% settling time $t_s$ in seconds.",
    "correctAnswer": {
      "exact": 2.0,
      "min": 1.95,
      "max": 2.05
    },
    "explanation": "The settling time for a 2% tolerance band in a standard second-order system is $t_s = \\frac{4}{\\zeta \\omega_n} = \\frac{4}{0.5 \\times 4.0} = \\frac{4}{2.0} = 2.0$ seconds.",
    "hints": [
      "Settling time formula: $t_s = 4 / (\\zeta \\omega_n)$ for 2% criterion (or $3/(\\zeta \\omega_n)$ for 5%)."
    ],
    "trapAlert": "Check whether 2% or 5% tolerance band is specified in the problem statement.",
    "tags": [
      "Settling Time",
      "Second Order Systems",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q02",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A unity negative feedback control system has a closed-loop transfer function $T(s) = \\frac{25.0}{s^2 + 6.0s + 25.0}$. For damping ratio $\\zeta = 0.6$ and natural frequency $\\omega_n = 5.0$ rad/s, calculate the 2% settling time $t_s$ in seconds.",
    "correctAnswer": {
      "exact": 1.33,
      "min": 1.28,
      "max": 1.38
    },
    "explanation": "The settling time for a 2% tolerance band in a standard second-order system is $t_s = \\frac{4}{\\zeta \\omega_n} = \\frac{4}{0.6 \\times 5.0} = \\frac{4}{3.0} = 1.33$ seconds.",
    "hints": [
      "Settling time formula: $t_s = 4 / (\\zeta \\omega_n)$ for 2% criterion (or $3/(\\zeta \\omega_n)$ for 5%)."
    ],
    "trapAlert": "Check whether 2% or 5% tolerance band is specified in the problem statement.",
    "tags": [
      "Settling Time",
      "Second Order Systems",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q03",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A unity negative feedback control system has a closed-loop transfer function $T(s) = \\frac{100.0}{s^2 + 14.14s + 100.0}$. For damping ratio $\\zeta = 0.707$ and natural frequency $\\omega_n = 10.0$ rad/s, calculate the 2% settling time $t_s$ in seconds.",
    "correctAnswer": {
      "exact": 0.57,
      "min": 0.52,
      "max": 0.62
    },
    "explanation": "The settling time for a 2% tolerance band in a standard second-order system is $t_s = \\frac{4}{\\zeta \\omega_n} = \\frac{4}{0.707 \\times 10.0} = \\frac{4}{7.069999999999999} = 0.57$ seconds.",
    "hints": [
      "Settling time formula: $t_s = 4 / (\\zeta \\omega_n)$ for 2% criterion (or $3/(\\zeta \\omega_n)$ for 5%)."
    ],
    "trapAlert": "Check whether 2% or 5% tolerance band is specified in the problem statement.",
    "tags": [
      "Settling Time",
      "Second Order Systems",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q04",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A unity negative feedback control system has a closed-loop transfer function $T(s) = \\frac{4.0}{s^2 + 1.6s + 4.0}$. For damping ratio $\\zeta = 0.4$ and natural frequency $\\omega_n = 2.0$ rad/s, calculate the 2% settling time $t_s$ in seconds.",
    "correctAnswer": {
      "exact": 5.0,
      "min": 4.95,
      "max": 5.05
    },
    "explanation": "The settling time for a 2% tolerance band in a standard second-order system is $t_s = \\frac{4}{\\zeta \\omega_n} = \\frac{4}{0.4 \\times 2.0} = \\frac{4}{0.8} = 5.0$ seconds.",
    "hints": [
      "Settling time formula: $t_s = 4 / (\\zeta \\omega_n)$ for 2% criterion (or $3/(\\zeta \\omega_n)$ for 5%)."
    ],
    "trapAlert": "Check whether 2% or 5% tolerance band is specified in the problem statement.",
    "tags": [
      "Settling Time",
      "Second Order Systems",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q05",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A unity negative feedback control system has a closed-loop transfer function $T(s) = \\frac{64.0}{s^2 + 8.0s + 64.0}$. For damping ratio $\\zeta = 0.5$ and natural frequency $\\omega_n = 8.0$ rad/s, calculate the 2% settling time $t_s$ in seconds.",
    "correctAnswer": {
      "exact": 1.0,
      "min": 0.95,
      "max": 1.05
    },
    "explanation": "The settling time for a 2% tolerance band in a standard second-order system is $t_s = \\frac{4}{\\zeta \\omega_n} = \\frac{4}{0.5 \\times 8.0} = \\frac{4}{4.0} = 1.0$ seconds.",
    "hints": [
      "Settling time formula: $t_s = 4 / (\\zeta \\omega_n)$ for 2% criterion (or $3/(\\zeta \\omega_n)$ for 5%)."
    ],
    "trapAlert": "Check whether 2% or 5% tolerance band is specified in the problem statement.",
    "tags": [
      "Settling Time",
      "Second Order Systems",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q06",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A unity negative feedback control system has a closed-loop transfer function $T(s) = \\frac{25.0}{s^2 + 8.0s + 25.0}$. For damping ratio $\\zeta = 0.8$ and natural frequency $\\omega_n = 5.0$ rad/s, calculate the 2% settling time $t_s$ in seconds.",
    "correctAnswer": {
      "exact": 1.0,
      "min": 0.95,
      "max": 1.05
    },
    "explanation": "The settling time for a 2% tolerance band in a standard second-order system is $t_s = \\frac{4}{\\zeta \\omega_n} = \\frac{4}{0.8 \\times 5.0} = \\frac{4}{4.0} = 1.0$ seconds.",
    "hints": [
      "Settling time formula: $t_s = 4 / (\\zeta \\omega_n)$ for 2% criterion (or $3/(\\zeta \\omega_n)$ for 5%)."
    ],
    "trapAlert": "Check whether 2% or 5% tolerance band is specified in the problem statement.",
    "tags": [
      "Settling Time",
      "Second Order Systems",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q07",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A second-order underdamped control system has damping ratio $\\zeta = 0.5$. Calculate the percentage maximum peak overshoot $M_p$ (rounded off to one decimal place).",
    "correctAnswer": {
      "exact": 16.3,
      "min": 15.8,
      "max": 16.8
    },
    "explanation": "Formula for percentage peak overshoot: $M_p = e^{-\\frac{\\pi \\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$. For $\\zeta = 0.5$: exponent is $-\\frac{\\pi \\times 0.5}{\\sqrt{1 - 0.25}} = -1.8138$. Taking exponential and multiplying by 100 gives $M_p = 16.3\\%$.",
    "hints": [
      "$M_p = e^{-\\pi \\zeta / \\sqrt{1-\\zeta^2}} \\times 100$."
    ],
    "trapAlert": "Ensure the argument of the exponent is computed with appropriate precision.",
    "tags": [
      "Peak Overshoot",
      "Damping Ratio",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q08",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A second-order underdamped control system has damping ratio $\\zeta = 0.6$. Calculate the percentage maximum peak overshoot $M_p$ (rounded off to one decimal place).",
    "correctAnswer": {
      "exact": 9.5,
      "min": 9.0,
      "max": 10.0
    },
    "explanation": "Formula for percentage peak overshoot: $M_p = e^{-\\frac{\\pi \\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$. For $\\zeta = 0.6$: exponent is $-\\frac{\\pi \\times 0.6}{\\sqrt{1 - 0.36}} = -2.3562$. Taking exponential and multiplying by 100 gives $M_p = 9.5\\%$.",
    "hints": [
      "$M_p = e^{-\\pi \\zeta / \\sqrt{1-\\zeta^2}} \\times 100$."
    ],
    "trapAlert": "Ensure the argument of the exponent is computed with appropriate precision.",
    "tags": [
      "Peak Overshoot",
      "Damping Ratio",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q09",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A second-order underdamped control system has damping ratio $\\zeta = 0.7$. Calculate the percentage maximum peak overshoot $M_p$ (rounded off to one decimal place).",
    "correctAnswer": {
      "exact": 4.6,
      "min": 4.1,
      "max": 5.1
    },
    "explanation": "Formula for percentage peak overshoot: $M_p = e^{-\\frac{\\pi \\zeta}{\\sqrt{1 - \\zeta^2}}} \\times 100\\%$. For $\\zeta = 0.7$: exponent is $-\\frac{\\pi \\times 0.7}{\\sqrt{1 - 0.48999999999999994}} = -3.0794$. Taking exponential and multiplying by 100 gives $M_p = 4.6\\%$.",
    "hints": [
      "$M_p = e^{-\\pi \\zeta / \\sqrt{1-\\zeta^2}} \\times 100$."
    ],
    "trapAlert": "Ensure the argument of the exponent is computed with appropriate precision.",
    "tags": [
      "Peak Overshoot",
      "Damping Ratio",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q10",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "A unity feedback system has open loop transfer function $G(s) = \\frac{10}{s(s + 2)(s + 5)}$. What is the steady-state error $e_{ss}$ for a unit step input $r(t) = u(t)$?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "0.1"
      },
      {
        "id": "C",
        "text": "1.0"
      },
      {
        "id": "D",
        "text": "$\\infty$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The system has one open-loop pole at the origin, so it is a Type 1 system. For a Type 1 system subjected to a unit step input: $K_p = \\lim_{s\\to 0} G(s) = \\infty$, hence $e_{ss} = \\frac{1}{1 + K_p} = \\frac{1}{1 + \\infty} = 0$.",
    "hints": [
      "Determine system type from the number of poles at $s = 0$."
    ],
    "trapAlert": "Type 1 systems have zero steady-state error to step inputs!",
    "tags": [
      "Steady-State Error",
      "System Type",
      "Step Response"
    ]
  },
  {
    "id": "ra-b1-control-systems-q11",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (MSQ)",
    "type": "MSQ",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Hard",
    "text": "Which of the following conditions is/are necessary and sufficient for a continuous-time linear time-invariant (LTI) system to be bounded-input bounded-output (BIBO) stable?",
    "options": [
      {
        "id": "A",
        "text": "All roots of the characteristic equation must lie strictly in the open left-half of the complex s-plane (LHP)."
      },
      {
        "id": "B",
        "text": "The impulse response $h(t)$ must be absolutely integrable: $\\int_{-\\infty}^{\\infty} |h(t)| dt < \\infty$."
      },
      {
        "id": "C",
        "text": "No poles of the closed-loop system may lie on the imaginary ($j\\omega$) axis or right-half s-plane."
      },
      {
        "id": "D",
        "text": "The system must have an equal number of poles and zeros."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "BIBO stability requires that every bounded input produces a bounded output. In continuous LTI systems, this is equivalent to all closed-loop transfer function poles having strictly negative real parts (lying strictly in open LHP), which guarantees $\\int |h(t)| dt < \\infty$. Poles on the $j\\omega$ axis yield marginally stable (undamped sinusoidal) or unstable responses, not BIBO stable. Option D is irrelevant.",
    "hints": [
      "Review pole locations in the complex plane for asymptotic stability."
    ],
    "trapAlert": "Marginally stable systems (simple poles on $j\\omega$ axis) are NOT BIBO stable for resonant inputs.",
    "tags": [
      "BIBO Stability",
      "Poles and Zeros",
      "Routh-Hurwitz",
      "GATE MSQ"
    ]
  },
  {
    "id": "ra-b1-control-systems-q12",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q13",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q14",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q15",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q16",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q17",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q18",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q19",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q20",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q21",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q22",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q23",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q24",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q25",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q26",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q27",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q28",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q29",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q30",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q31",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q32",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q33",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q34",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q35",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q36",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q37",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q38",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q39",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q40",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q41",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q42",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q43",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q44",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b1-control-systems-q45",
    "paper": "RA",
    "subject": "Engineering Common & Control",
    "topicId": "ra-b1-control-systems",
    "topicTitle": "Control Systems & PID",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effect of adding an Integral (I) action in a PID controller on the closed-loop system response?",
    "options": [
      {
        "id": "A",
        "text": "It increases the system type by 1, eliminating steady-state error to step inputs, but tends to decrease relative stability"
      },
      {
        "id": "B",
        "text": "It always increases the damping ratio and reduces settling time"
      },
      {
        "id": "C",
        "text": "It adds a zero at the origin, speeding up response"
      },
      {
        "id": "D",
        "text": "It eliminates high-frequency noise amplification"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Integral control introduces a pole at the origin ($K_i / s$), which increments the system type number by one. This drives steady-state error for step inputs to zero, but adds negative phase shift (lag), reducing phase margin and decreasing relative stability.",
    "hints": [
      "Integral control $u(t) = K_i \\int e(t)dt \\implies \\frac{K_i}{s}$."
    ],
    "trapAlert": "Integral action removes steady-state offset but slows down transient damping.",
    "tags": [
      "PID Controller",
      "Integral Control",
      "Control Systems"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q01",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A solid circular steel bar of length $L = 2.0$ m and cross-sectional area $A = 500.0\\ \\text{mm}^2$ is subjected to an axial tensile force of $P = 100.0$ kN. Given Young's modulus $E = 200.0$ GPa, calculate the total axial elongation $\\delta$ in millimeters.",
    "correctAnswer": {
      "exact": 2.0,
      "min": 1.95,
      "max": 2.05
    },
    "explanation": "Axial elongation formula: $\\delta = PL / (AE)$. With P = 100.0 kN, L = 2.0 m, A = 500.0 mm^2, and E = 200.0 GPa, substituting gives $\\delta = 2.0$ mm.",
    "hints": [
      "$\\delta = PL / (AE)$."
    ],
    "trapAlert": "Ensure consistent SI units: GPa to Pa ($10^9$) and $\\text{mm}^2$ to $\\text{m}^2$ ($10^{-6}$).",
    "tags": [
      "Hooke's Law",
      "Axial Elongation",
      "Mechanics of Materials"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q02",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A solid circular steel bar of length $L = 1.5$ m and cross-sectional area $A = 250.0\\ \\text{mm}^2$ is subjected to an axial tensile force of $P = 50.0$ kN. Given Young's modulus $E = 200.0$ GPa, calculate the total axial elongation $\\delta$ in millimeters.",
    "correctAnswer": {
      "exact": 1.5,
      "min": 1.45,
      "max": 1.55
    },
    "explanation": "Axial elongation formula: $\\delta = PL / (AE)$. With P = 50.0 kN, L = 1.5 m, A = 250.0 mm^2, and E = 200.0 GPa, substituting gives $\\delta = 1.5$ mm.",
    "hints": [
      "$\\delta = PL / (AE)$."
    ],
    "trapAlert": "Ensure consistent SI units: GPa to Pa ($10^9$) and $\\text{mm}^2$ to $\\text{m}^2$ ($10^{-6}$).",
    "tags": [
      "Hooke's Law",
      "Axial Elongation",
      "Mechanics of Materials"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q03",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A solid circular steel bar of length $L = 2.5$ m and cross-sectional area $A = 400.0\\ \\text{mm}^2$ is subjected to an axial tensile force of $P = 80.0$ kN. Given Young's modulus $E = 100.0$ GPa, calculate the total axial elongation $\\delta$ in millimeters.",
    "correctAnswer": {
      "exact": 5.0,
      "min": 4.95,
      "max": 5.05
    },
    "explanation": "Axial elongation formula: $\\delta = PL / (AE)$. With P = 80.0 kN, L = 2.5 m, A = 400.0 mm^2, and E = 100.0 GPa, substituting gives $\\delta = 5.0$ mm.",
    "hints": [
      "$\\delta = PL / (AE)$."
    ],
    "trapAlert": "Ensure consistent SI units: GPa to Pa ($10^9$) and $\\text{mm}^2$ to $\\text{m}^2$ ($10^{-6}$).",
    "tags": [
      "Hooke's Law",
      "Axial Elongation",
      "Mechanics of Materials"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q04",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A solid circular steel bar of length $L = 3.0$ m and cross-sectional area $A = 600.0\\ \\text{mm}^2$ is subjected to an axial tensile force of $P = 120.0$ kN. Given Young's modulus $E = 210.0$ GPa, calculate the total axial elongation $\\delta$ in millimeters.",
    "correctAnswer": {
      "exact": 2.86,
      "min": 2.81,
      "max": 2.91
    },
    "explanation": "Axial elongation formula: $\\delta = PL / (AE)$. With P = 120.0 kN, L = 3.0 m, A = 600.0 mm^2, and E = 210.0 GPa, substituting gives $\\delta = 2.86$ mm.",
    "hints": [
      "$\\delta = PL / (AE)$."
    ],
    "trapAlert": "Ensure consistent SI units: GPa to Pa ($10^9$) and $\\text{mm}^2$ to $\\text{m}^2$ ($10^{-6}$).",
    "tags": [
      "Hooke's Law",
      "Axial Elongation",
      "Mechanics of Materials"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q05",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A solid circular steel bar of length $L = 1.0$ m and cross-sectional area $A = 200.0\\ \\text{mm}^2$ is subjected to an axial tensile force of $P = 40.0$ kN. Given Young's modulus $E = 70.0$ GPa, calculate the total axial elongation $\\delta$ in millimeters.",
    "correctAnswer": {
      "exact": 2.86,
      "min": 2.81,
      "max": 2.91
    },
    "explanation": "Axial elongation formula: $\\delta = PL / (AE)$. With P = 40.0 kN, L = 1.0 m, A = 200.0 mm^2, and E = 70.0 GPa, substituting gives $\\delta = 2.86$ mm.",
    "hints": [
      "$\\delta = PL / (AE)$."
    ],
    "trapAlert": "Ensure consistent SI units: GPa to Pa ($10^9$) and $\\text{mm}^2$ to $\\text{m}^2$ ($10^{-6}$).",
    "tags": [
      "Hooke's Law",
      "Axial Elongation",
      "Mechanics of Materials"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q06",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A state of plane stress is defined by $\\sigma_x = 100.0$ MPa, $\\sigma_y = 40.0$ MPa, and shear stress $\\tau_{xy} = 40.0$ MPa. What is the maximum in-plane shear stress $\\tau_{max}$ in MPa?",
    "correctAnswer": {
      "exact": 50.0,
      "min": 49.9,
      "max": 50.1
    },
    "explanation": "Radius of Mohr's circle gives maximum in-plane shear stress: $\\tau_{max} = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2} = \\sqrt{\\left(\\frac{100.0 - 40.0}{2}\\right)^2 + 40.0^2} = 50.0$ MPa.",
    "hints": [
      "Radius of Mohr's circle is $R = \\tau_{max}$."
    ],
    "trapAlert": "Maximum shear stress is the radius of Mohr's circle, not the difference of $\\sigma_x$ and $\\sigma_y$.",
    "tags": [
      "Mohr's Circle",
      "Principal Stresses",
      "Maximum Shear Stress"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q07",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A state of plane stress is defined by $\\sigma_x = 80.0$ MPa, $\\sigma_y = 20.0$ MPa, and shear stress $\\tau_{xy} = 40.0$ MPa. What is the maximum in-plane shear stress $\\tau_{max}$ in MPa?",
    "correctAnswer": {
      "exact": 50.0,
      "min": 49.9,
      "max": 50.1
    },
    "explanation": "Radius of Mohr's circle gives maximum in-plane shear stress: $\\tau_{max} = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2} = \\sqrt{\\left(\\frac{80.0 - 20.0}{2}\\right)^2 + 40.0^2} = 50.0$ MPa.",
    "hints": [
      "Radius of Mohr's circle is $R = \\tau_{max}$."
    ],
    "trapAlert": "Maximum shear stress is the radius of Mohr's circle, not the difference of $\\sigma_x$ and $\\sigma_y$.",
    "tags": [
      "Mohr's Circle",
      "Principal Stresses",
      "Maximum Shear Stress"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q08",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A state of plane stress is defined by $\\sigma_x = 120.0$ MPa, $\\sigma_y = 60.0$ MPa, and shear stress $\\tau_{xy} = 40.0$ MPa. What is the maximum in-plane shear stress $\\tau_{max}$ in MPa?",
    "correctAnswer": {
      "exact": 50.0,
      "min": 49.9,
      "max": 50.1
    },
    "explanation": "Radius of Mohr's circle gives maximum in-plane shear stress: $\\tau_{max} = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2} = \\sqrt{\\left(\\frac{120.0 - 60.0}{2}\\right)^2 + 40.0^2} = 50.0$ MPa.",
    "hints": [
      "Radius of Mohr's circle is $R = \\tau_{max}$."
    ],
    "trapAlert": "Maximum shear stress is the radius of Mohr's circle, not the difference of $\\sigma_x$ and $\\sigma_y$.",
    "tags": [
      "Mohr's Circle",
      "Principal Stresses",
      "Maximum Shear Stress"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q09",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A state of plane stress is defined by $\\sigma_x = 50.0$ MPa, $\\sigma_y = -30.0$ MPa, and shear stress $\\tau_{xy} = 30.0$ MPa. What is the maximum in-plane shear stress $\\tau_{max}$ in MPa?",
    "correctAnswer": {
      "exact": 50.0,
      "min": 49.9,
      "max": 50.1
    },
    "explanation": "Radius of Mohr's circle gives maximum in-plane shear stress: $\\tau_{max} = \\sqrt{\\left(\\frac{\\sigma_x - \\sigma_y}{2}\\right)^2 + \\tau_{xy}^2} = \\sqrt{\\left(\\frac{50.0 - -30.0}{2}\\right)^2 + 30.0^2} = 50.0$ MPa.",
    "hints": [
      "Radius of Mohr's circle is $R = \\tau_{max}$."
    ],
    "trapAlert": "Maximum shear stress is the radius of Mohr's circle, not the difference of $\\sigma_x$ and $\\sigma_y$.",
    "tags": [
      "Mohr's Circle",
      "Principal Stresses",
      "Maximum Shear Stress"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q10",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effective length $L_e$ of an ideal Euler column of actual physical length $L$ with both ends pinned (hinged)?",
    "options": [
      {
        "id": "A",
        "text": "$L_e = 1.0 L$"
      },
      {
        "id": "B",
        "text": "$L_e = 2.0 L$"
      },
      {
        "id": "C",
        "text": "$L_e = 0.5 L$"
      },
      {
        "id": "D",
        "text": "$L_e = 4 L$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to Euler's buckling theory: For columns with both ends pinned (hinged), the effective length is $L_e = 1.0L$. The critical buckling load is $P_{cr} = \\frac{\\pi^2 EI}{L_e^2}$.",
    "hints": [
      "Review effective length factors: Pinned-Pinned (1.0), Fixed-Fixed (0.5), Fixed-Free (2.0), Fixed-Pinned (0.707)."
    ],
    "trapAlert": "Fixed-free (cantilever) has the largest effective length ($2L$), resulting in the lowest buckling load.",
    "tags": [
      "Euler Buckling",
      "Effective Length",
      "Columns"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q11",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effective length $L_e$ of an ideal Euler column of actual physical length $L$ with both ends fixed?",
    "options": [
      {
        "id": "A",
        "text": "$L_e = 0.5 L$"
      },
      {
        "id": "B",
        "text": "$L_e = 1.0 L$"
      },
      {
        "id": "C",
        "text": "$L_e = 0.25 L$"
      },
      {
        "id": "D",
        "text": "$L_e = 4 L$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to Euler's buckling theory: For columns with both ends fixed, the effective length is $L_e = 0.5L$. The critical buckling load is $P_{cr} = \\frac{\\pi^2 EI}{L_e^2}$.",
    "hints": [
      "Review effective length factors: Pinned-Pinned (1.0), Fixed-Fixed (0.5), Fixed-Free (2.0), Fixed-Pinned (0.707)."
    ],
    "trapAlert": "Fixed-free (cantilever) has the largest effective length ($2L$), resulting in the lowest buckling load.",
    "tags": [
      "Euler Buckling",
      "Effective Length",
      "Columns"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q12",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effective length $L_e$ of an ideal Euler column of actual physical length $L$ with one end fixed and the other end free (cantilever column)?",
    "options": [
      {
        "id": "A",
        "text": "$L_e = 2.0 L$"
      },
      {
        "id": "B",
        "text": "$L_e = 4.0 L$"
      },
      {
        "id": "C",
        "text": "$L_e = 1.0 L$"
      },
      {
        "id": "D",
        "text": "$L_e = 4 L$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to Euler's buckling theory: For columns with one end fixed and the other end free (cantilever column), the effective length is $L_e = 2.0L$. The critical buckling load is $P_{cr} = \\frac{\\pi^2 EI}{L_e^2}$.",
    "hints": [
      "Review effective length factors: Pinned-Pinned (1.0), Fixed-Fixed (0.5), Fixed-Free (2.0), Fixed-Pinned (0.707)."
    ],
    "trapAlert": "Fixed-free (cantilever) has the largest effective length ($2L$), resulting in the lowest buckling load.",
    "tags": [
      "Euler Buckling",
      "Effective Length",
      "Columns"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q13",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the effective length $L_e$ of an ideal Euler column of actual physical length $L$ with one end fixed and the other end pinned?",
    "options": [
      {
        "id": "A",
        "text": "$L_e = 0.707 L$"
      },
      {
        "id": "B",
        "text": "$L_e = 1.41 L$"
      },
      {
        "id": "C",
        "text": "$L_e = 0.35 L$"
      },
      {
        "id": "D",
        "text": "$L_e = 4 L$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "According to Euler's buckling theory: For columns with one end fixed and the other end pinned, the effective length is $L_e = 0.707L$. The critical buckling load is $P_{cr} = \\frac{\\pi^2 EI}{L_e^2}$.",
    "hints": [
      "Review effective length factors: Pinned-Pinned (1.0), Fixed-Fixed (0.5), Fixed-Free (2.0), Fixed-Pinned (0.707)."
    ],
    "trapAlert": "Fixed-free (cantilever) has the largest effective length ($2L$), resulting in the lowest buckling load.",
    "tags": [
      "Euler Buckling",
      "Effective Length",
      "Columns"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q14",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q15",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q16",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q17",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q18",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q19",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q20",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q21",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q22",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q23",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q24",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q25",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q26",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q27",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q28",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q29",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q30",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q31",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q32",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q33",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q34",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q35",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q36",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q37",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q38",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q39",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q40",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q41",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q42",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q43",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q44",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "ra-b2-mechanics-materials-q45",
    "paper": "RA",
    "subject": "Engineering Common & Mechanics",
    "topicId": "ra-b2-mechanics-materials",
    "topicTitle": "Mechanics of Materials",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 RA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In a circular shaft subjected to pure torsion $T$, the maximum shear stress $\\tau_{max}$ occurs at:",
    "options": [
      {
        "id": "A",
        "text": "The outermost outer radius surface ($r = R$)"
      },
      {
        "id": "B",
        "text": "The central geometric axis ($r = 0$)"
      },
      {
        "id": "C",
        "text": "Midway through the radius ($r = R/2$)"
      },
      {
        "id": "D",
        "text": "Nowhere, shear stress is completely uniform across the section"
      }
    ],
    "correctAnswer": "A",
    "explanation": "From the torsion equation $\\frac{T}{J} = \\frac{\\tau}{r}$, shear stress varies linearly with radial distance $r$. Thus $\\tau = 0$ at the neutral center line and reaches its maximum value $\\tau_{max} = \\frac{T R}{J}$ at the outer boundary ($r = R$).",
    "hints": [
      "$\\tau = T r / J$."
    ],
    "trapAlert": "Shear stress is zero at the center and linear in radius.",
    "tags": [
      "Torsion",
      "Shear Stress Distribution"
    ]
  },
  {
    "id": "da-prob-stats-q01",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A rare medical condition has prevalence $P(D) = 1.0\\%$ in a population. A diagnostic test has sensitivity (true positive rate) of $95.0\\%$ and specificity (true negative rate) of $90.0\\%$. If an individual tests positive, what is the posterior probability $P(D \\mid +)$ that they actually have the condition (in percent, rounded off to two decimal places)?",
    "correctAnswer": {
      "exact": 8.76,
      "min": 8.26,
      "max": 9.26
    },
    "explanation": "Apply Bayes' Rule: $P(D \\mid +) = \\frac{P(+ \\mid D)P(D)}{P(+ \\mid D)P(D) + P(+ \\mid D^c)P(D^c)} = \\frac{0.95 \\times 0.01}{0.95 \\times 0.01 + (1 - 0.9) \\times (1 - 0.01)} = \\frac{0.0095}{0.1085} = 0.0876 = 8.76\\%$.",
    "hints": [
      "Use Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+)}$.",
      "False positive rate is $1 - \\text{specificity}$."
    ],
    "trapAlert": "Base rate fallacy trap: Even with a 95% accurate test, if disease prevalence is very low, most positives can be false alarms!",
    "tags": [
      "Bayes Theorem",
      "Conditional Probability",
      "Medical Diagnosis"
    ]
  },
  {
    "id": "da-prob-stats-q02",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A rare medical condition has prevalence $P(D) = 5.0\\%$ in a population. A diagnostic test has sensitivity (true positive rate) of $90.0\\%$ and specificity (true negative rate) of $95.0\\%$. If an individual tests positive, what is the posterior probability $P(D \\mid +)$ that they actually have the condition (in percent, rounded off to two decimal places)?",
    "correctAnswer": {
      "exact": 48.65,
      "min": 48.15,
      "max": 49.15
    },
    "explanation": "Apply Bayes' Rule: $P(D \\mid +) = \\frac{P(+ \\mid D)P(D)}{P(+ \\mid D)P(D) + P(+ \\mid D^c)P(D^c)} = \\frac{0.9 \\times 0.05}{0.9 \\times 0.05 + (1 - 0.95) \\times (1 - 0.05)} = \\frac{0.045}{0.0925} = 0.4865 = 48.65\\%$.",
    "hints": [
      "Use Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+)}$.",
      "False positive rate is $1 - \\text{specificity}$."
    ],
    "trapAlert": "Base rate fallacy trap: Even with a 95% accurate test, if disease prevalence is very low, most positives can be false alarms!",
    "tags": [
      "Bayes Theorem",
      "Conditional Probability",
      "Medical Diagnosis"
    ]
  },
  {
    "id": "da-prob-stats-q03",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A rare medical condition has prevalence $P(D) = 2.0\\%$ in a population. A diagnostic test has sensitivity (true positive rate) of $98.0\\%$ and specificity (true negative rate) of $95.0\\%$. If an individual tests positive, what is the posterior probability $P(D \\mid +)$ that they actually have the condition (in percent, rounded off to two decimal places)?",
    "correctAnswer": {
      "exact": 28.57,
      "min": 28.07,
      "max": 29.07
    },
    "explanation": "Apply Bayes' Rule: $P(D \\mid +) = \\frac{P(+ \\mid D)P(D)}{P(+ \\mid D)P(D) + P(+ \\mid D^c)P(D^c)} = \\frac{0.98 \\times 0.02}{0.98 \\times 0.02 + (1 - 0.95) \\times (1 - 0.02)} = \\frac{0.0196}{0.0686} = 0.2857 = 28.57\\%$.",
    "hints": [
      "Use Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+)}$.",
      "False positive rate is $1 - \\text{specificity}$."
    ],
    "trapAlert": "Base rate fallacy trap: Even with a 95% accurate test, if disease prevalence is very low, most positives can be false alarms!",
    "tags": [
      "Bayes Theorem",
      "Conditional Probability",
      "Medical Diagnosis"
    ]
  },
  {
    "id": "da-prob-stats-q04",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A rare medical condition has prevalence $P(D) = 10.0\\%$ in a population. A diagnostic test has sensitivity (true positive rate) of $92.0\\%$ and specificity (true negative rate) of $88.0\\%$. If an individual tests positive, what is the posterior probability $P(D \\mid +)$ that they actually have the condition (in percent, rounded off to two decimal places)?",
    "correctAnswer": {
      "exact": 46.0,
      "min": 45.5,
      "max": 46.5
    },
    "explanation": "Apply Bayes' Rule: $P(D \\mid +) = \\frac{P(+ \\mid D)P(D)}{P(+ \\mid D)P(D) + P(+ \\mid D^c)P(D^c)} = \\frac{0.92 \\times 0.1}{0.92 \\times 0.1 + (1 - 0.88) \\times (1 - 0.1)} = \\frac{0.092}{0.2} = 0.4600 = 46.0\\%$.",
    "hints": [
      "Use Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+)}$.",
      "False positive rate is $1 - \\text{specificity}$."
    ],
    "trapAlert": "Base rate fallacy trap: Even with a 95% accurate test, if disease prevalence is very low, most positives can be false alarms!",
    "tags": [
      "Bayes Theorem",
      "Conditional Probability",
      "Medical Diagnosis"
    ]
  },
  {
    "id": "da-prob-stats-q05",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A rare medical condition has prevalence $P(D) = 1.0\\%$ in a population. A diagnostic test has sensitivity (true positive rate) of $99.0\\%$ and specificity (true negative rate) of $99.0\\%$. If an individual tests positive, what is the posterior probability $P(D \\mid +)$ that they actually have the condition (in percent, rounded off to two decimal places)?",
    "correctAnswer": {
      "exact": 50.0,
      "min": 49.5,
      "max": 50.5
    },
    "explanation": "Apply Bayes' Rule: $P(D \\mid +) = \\frac{P(+ \\mid D)P(D)}{P(+ \\mid D)P(D) + P(+ \\mid D^c)P(D^c)} = \\frac{0.99 \\times 0.01}{0.99 \\times 0.01 + (1 - 0.99) \\times (1 - 0.01)} = \\frac{0.0099}{0.0198} = 0.5000 = 50.0\\%$.",
    "hints": [
      "Use Bayes' Theorem: $P(D|+) = \\frac{P(+|D)P(D)}{P(+)}$.",
      "False positive rate is $1 - \\text{specificity}$."
    ],
    "trapAlert": "Base rate fallacy trap: Even with a 95% accurate test, if disease prevalence is very low, most positives can be false alarms!",
    "tags": [
      "Bayes Theorem",
      "Conditional Probability",
      "Medical Diagnosis"
    ]
  },
  {
    "id": "da-prob-stats-q06",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Network request arrivals at an AI model server follow a Poisson distribution with an average arrival rate of $\\lambda = 2.0$ requests per second. What is the probability of receiving exactly $k = 0$ requests in a randomly chosen one-second interval (rounded off to three decimal places)?",
    "correctAnswer": {
      "exact": 0.14,
      "min": 0.13,
      "max": 0.15
    },
    "explanation": "Poisson PMF formula: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$. For $\\lambda = 2.0$ and $k = 0$: $P(X = 0) = \\frac{2.0^{0} e^{-2.0}}{1} = 0.135$.",
    "hints": [
      "Poisson PMF: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$."
    ],
    "trapAlert": "Remember that $0! = 1$ and $\\lambda^0 = 1$.",
    "tags": [
      "Poisson Distribution",
      "Discrete Random Variables"
    ]
  },
  {
    "id": "da-prob-stats-q07",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Network request arrivals at an AI model server follow a Poisson distribution with an average arrival rate of $\\lambda = 3.0$ requests per second. What is the probability of receiving exactly $k = 0$ requests in a randomly chosen one-second interval (rounded off to three decimal places)?",
    "correctAnswer": {
      "exact": 0.05,
      "min": 0.04,
      "max": 0.06
    },
    "explanation": "Poisson PMF formula: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$. For $\\lambda = 3.0$ and $k = 0$: $P(X = 0) = \\frac{3.0^{0} e^{-3.0}}{1} = 0.05$.",
    "hints": [
      "Poisson PMF: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$."
    ],
    "trapAlert": "Remember that $0! = 1$ and $\\lambda^0 = 1$.",
    "tags": [
      "Poisson Distribution",
      "Discrete Random Variables"
    ]
  },
  {
    "id": "da-prob-stats-q08",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Network request arrivals at an AI model server follow a Poisson distribution with an average arrival rate of $\\lambda = 1.0$ requests per second. What is the probability of receiving exactly $k = 1$ requests in a randomly chosen one-second interval (rounded off to three decimal places)?",
    "correctAnswer": {
      "exact": 0.37,
      "min": 0.36,
      "max": 0.38
    },
    "explanation": "Poisson PMF formula: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$. For $\\lambda = 1.0$ and $k = 1$: $P(X = 1) = \\frac{1.0^{1} e^{-1.0}}{1} = 0.368$.",
    "hints": [
      "Poisson PMF: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$."
    ],
    "trapAlert": "Remember that $0! = 1$ and $\\lambda^0 = 1$.",
    "tags": [
      "Poisson Distribution",
      "Discrete Random Variables"
    ]
  },
  {
    "id": "da-prob-stats-q09",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Network request arrivals at an AI model server follow a Poisson distribution with an average arrival rate of $\\lambda = 4.0$ requests per second. What is the probability of receiving exactly $k = 0$ requests in a randomly chosen one-second interval (rounded off to three decimal places)?",
    "correctAnswer": {
      "exact": 0.02,
      "min": 0.01,
      "max": 0.03
    },
    "explanation": "Poisson PMF formula: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$. For $\\lambda = 4.0$ and $k = 0$: $P(X = 0) = \\frac{4.0^{0} e^{-4.0}}{1} = 0.018$.",
    "hints": [
      "Poisson PMF: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$."
    ],
    "trapAlert": "Remember that $0! = 1$ and $\\lambda^0 = 1$.",
    "tags": [
      "Poisson Distribution",
      "Discrete Random Variables"
    ]
  },
  {
    "id": "da-prob-stats-q10",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Network request arrivals at an AI model server follow a Poisson distribution with an average arrival rate of $\\lambda = 2.0$ requests per second. What is the probability of receiving exactly $k = 1$ requests in a randomly chosen one-second interval (rounded off to three decimal places)?",
    "correctAnswer": {
      "exact": 0.27,
      "min": 0.26,
      "max": 0.28
    },
    "explanation": "Poisson PMF formula: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$. For $\\lambda = 2.0$ and $k = 1$: $P(X = 1) = \\frac{2.0^{1} e^{-2.0}}{1} = 0.271$.",
    "hints": [
      "Poisson PMF: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$."
    ],
    "trapAlert": "Remember that $0! = 1$ and $\\lambda^0 = 1$.",
    "tags": [
      "Poisson Distribution",
      "Discrete Random Variables"
    ]
  },
  {
    "id": "da-prob-stats-q11",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Network request arrivals at an AI model server follow a Poisson distribution with an average arrival rate of $\\lambda = 1.5$ requests per second. What is the probability of receiving exactly $k = 0$ requests in a randomly chosen one-second interval (rounded off to three decimal places)?",
    "correctAnswer": {
      "exact": 0.22,
      "min": 0.21,
      "max": 0.23
    },
    "explanation": "Poisson PMF formula: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$. For $\\lambda = 1.5$ and $k = 0$: $P(X = 0) = \\frac{1.5^{0} e^{-1.5}}{1} = 0.223$.",
    "hints": [
      "Poisson PMF: $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$."
    ],
    "trapAlert": "Remember that $0! = 1$ and $\\lambda^0 = 1$.",
    "tags": [
      "Poisson Distribution",
      "Discrete Random Variables"
    ]
  },
  {
    "id": "da-prob-stats-q12",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (MSQ)",
    "type": "MSQ",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Hard",
    "text": "Let $X$ and $Y$ be two independent random variables with finite variances $\\text{Var}(X)$ and $\\text{Var}(Y)$. Which of the following statements is/are ALWAYS TRUE? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "$\\mathbb{E}[X + Y] = \\mathbb{E}[X] + \\mathbb{E}[Y]$"
      },
      {
        "id": "B",
        "text": "$\\mathbb{E}[XY] = \\mathbb{E}[X]\\mathbb{E}[Y]$"
      },
      {
        "id": "C",
        "text": "$\\text{Var}(X - Y) = \\text{Var}(X) - \\text{Var}(Y)$"
      },
      {
        "id": "D",
        "text": "$\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y)$"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "Linearity of expectation (A) always holds, regardless of independence. For independent random variables, expectation of product equals product of expectations (B). Furthermore, $\\text{Var}(X - Y) = \\text{Var}(X) + \\text{Var}(Y) - 2\\text{Cov}(X, Y) = \\text{Var}(X) + \\text{Var}(Y)$ (Option C is false because variances always add, never subtract). Option D is true.",
    "hints": [
      "Variances of independent variables always add: $\\text{Var}(X - Y) = \\text{Var}(X) + \\text{Var}(Y)$."
    ],
    "trapAlert": "Variance subtraction trap: $\\text{Var}(X - Y) = \\text{Var}(X) + (-1)^2 \\text{Var}(Y) = \\text{Var}(X) + \\text{Var}(Y)$!",
    "tags": [
      "Variance",
      "Expectation",
      "Independence",
      "GATE MSQ"
    ]
  },
  {
    "id": "da-prob-stats-q13",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A continuous random variable $X \\sim \\mathcal{N}(\\mu = 100.0, \\sigma^2 = 225.0)$. What is the cumulative probability $P(X \\le 115.0)$ (rounded off to four decimal places)?",
    "correctAnswer": {
      "exact": 0.84,
      "min": 0.83,
      "max": 0.85
    },
    "explanation": "Standardize to standard normal variable $Z$: $Z = \\frac{X - \\mu}{\\sigma} = \\frac{115.0 - 100.0}{15.0} = 1.0$. From standard normal CDF tables, $\\Phi(1.0) = 0.8413$.",
    "hints": [
      "Compute Z-score: $Z = (X - \\mu)/\\sigma$."
    ],
    "trapAlert": "Do not square the standard deviation in the denominator of the Z-score.",
    "tags": [
      "Normal Distribution",
      "Z-Score",
      "Gaussian"
    ]
  },
  {
    "id": "da-prob-stats-q14",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A continuous random variable $X \\sim \\mathcal{N}(\\mu = 50.0, \\sigma^2 = 25.0)$. What is the cumulative probability $P(X \\le 60.0)$ (rounded off to four decimal places)?",
    "correctAnswer": {
      "exact": 0.98,
      "min": 0.97,
      "max": 0.99
    },
    "explanation": "Standardize to standard normal variable $Z$: $Z = \\frac{X - \\mu}{\\sigma} = \\frac{60.0 - 50.0}{5.0} = 2.0$. From standard normal CDF tables, $\\Phi(2.0) = 0.9772$.",
    "hints": [
      "Compute Z-score: $Z = (X - \\mu)/\\sigma$."
    ],
    "trapAlert": "Do not square the standard deviation in the denominator of the Z-score.",
    "tags": [
      "Normal Distribution",
      "Z-Score",
      "Gaussian"
    ]
  },
  {
    "id": "da-prob-stats-q15",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A continuous random variable $X \\sim \\mathcal{N}(\\mu = 0.0, \\sigma^2 = 1.0)$. What is the cumulative probability $P(X \\le 0.0)$ (rounded off to four decimal places)?",
    "correctAnswer": {
      "exact": 0.5,
      "min": 0.49,
      "max": 0.51
    },
    "explanation": "Standardize to standard normal variable $Z$: $Z = \\frac{X - \\mu}{\\sigma} = \\frac{0.0 - 0.0}{1.0} = 0.0$. From standard normal CDF tables, $\\Phi(0.0) = 0.5$.",
    "hints": [
      "Compute Z-score: $Z = (X - \\mu)/\\sigma$."
    ],
    "trapAlert": "Do not square the standard deviation in the denominator of the Z-score.",
    "tags": [
      "Normal Distribution",
      "Z-Score",
      "Gaussian"
    ]
  },
  {
    "id": "da-prob-stats-q16",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A continuous random variable $X \\sim \\mathcal{N}(\\mu = 200.0, \\sigma^2 = 400.0)$. What is the cumulative probability $P(X \\le 220.0)$ (rounded off to four decimal places)?",
    "correctAnswer": {
      "exact": 0.84,
      "min": 0.83,
      "max": 0.85
    },
    "explanation": "Standardize to standard normal variable $Z$: $Z = \\frac{X - \\mu}{\\sigma} = \\frac{220.0 - 200.0}{20.0} = 1.0$. From standard normal CDF tables, $\\Phi(1.0) = 0.8413$.",
    "hints": [
      "Compute Z-score: $Z = (X - \\mu)/\\sigma$."
    ],
    "trapAlert": "Do not square the standard deviation in the denominator of the Z-score.",
    "tags": [
      "Normal Distribution",
      "Z-Score",
      "Gaussian"
    ]
  },
  {
    "id": "da-prob-stats-q17",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q18",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q19",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q20",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q21",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q22",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q23",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q24",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q25",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q26",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q27",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q28",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q29",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q30",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q31",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q32",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q33",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q34",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q35",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q36",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q37",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q38",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q39",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q40",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q41",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q42",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q43",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q44",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-prob-stats-q45",
    "paper": "DA",
    "subject": "Probability & Statistics",
    "topicId": "da-prob-stats",
    "topicTitle": "Probability & Statistics",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In statistical hypothesis testing, a Type I error occurs when:",
    "options": [
      {
        "id": "A",
        "text": "The null hypothesis $H_0$ is rejected when it is actually true"
      },
      {
        "id": "B",
        "text": "The null hypothesis $H_0$ is accepted when it is actually false"
      },
      {
        "id": "C",
        "text": "The sample size is too large"
      },
      {
        "id": "D",
        "text": "The p-value is greater than 0.5"
      }
    ],
    "correctAnswer": "A",
    "explanation": "A Type I error (significance level $\\alpha$) occurs when the researcher falsely rejects a true null hypothesis $H_0$ (false positive). In contrast, Type II error ($\\beta$) occurs when failing to reject a false $H_0$ (false negative).",
    "hints": [
      "Type I = False alarm (Reject true $H_0$)."
    ],
    "trapAlert": "Type I error probability is $\\alpha$; Type II error probability is $\\beta$. Power is $1 - \\beta$.",
    "tags": [
      "Hypothesis Testing",
      "Type I Error",
      "Statistics"
    ]
  },
  {
    "id": "da-linear-algebra-q01",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A $2 \\times 2$ diagonal matrix is given by $A = \\begin{bmatrix} 3 & 0 \\\\ 0 & 4 \\end{bmatrix}$. What is the largest singular value $\\sigma_1$ of matrix $A$?",
    "correctAnswer": {
      "exact": 4.0,
      "min": 3.99,
      "max": 4.01
    },
    "explanation": "For a diagonal matrix with non-negative entries, the singular values are simply the diagonal entries arranged in descending order: $\\sigma_1 = \\max(3, 4) = 4$.",
    "hints": [
      "Singular values of diagonal matrices are $|a_{ii}|$, sorted descending."
    ],
    "trapAlert": "Singular values are always real and non-negative by definition: $\\sigma_i \\ge 0$.",
    "tags": [
      "SVD",
      "Singular Values",
      "Linear Algebra"
    ]
  },
  {
    "id": "da-linear-algebra-q02",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A $2 \\times 2$ diagonal matrix is given by $A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 2 \\end{bmatrix}$. What is the largest singular value $\\sigma_1$ of matrix $A$?",
    "correctAnswer": {
      "exact": 2.0,
      "min": 1.99,
      "max": 2.01
    },
    "explanation": "For a diagonal matrix with non-negative entries, the singular values are simply the diagonal entries arranged in descending order: $\\sigma_1 = \\max(1, 2) = 2$.",
    "hints": [
      "Singular values of diagonal matrices are $|a_{ii}|$, sorted descending."
    ],
    "trapAlert": "Singular values are always real and non-negative by definition: $\\sigma_i \\ge 0$.",
    "tags": [
      "SVD",
      "Singular Values",
      "Linear Algebra"
    ]
  },
  {
    "id": "da-linear-algebra-q03",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A $2 \\times 2$ diagonal matrix is given by $A = \\begin{bmatrix} 6 & 0 \\\\ 0 & 8 \\end{bmatrix}$. What is the largest singular value $\\sigma_1$ of matrix $A$?",
    "correctAnswer": {
      "exact": 8.0,
      "min": 7.99,
      "max": 8.01
    },
    "explanation": "For a diagonal matrix with non-negative entries, the singular values are simply the diagonal entries arranged in descending order: $\\sigma_1 = \\max(6, 8) = 8$.",
    "hints": [
      "Singular values of diagonal matrices are $|a_{ii}|$, sorted descending."
    ],
    "trapAlert": "Singular values are always real and non-negative by definition: $\\sigma_i \\ge 0$.",
    "tags": [
      "SVD",
      "Singular Values",
      "Linear Algebra"
    ]
  },
  {
    "id": "da-linear-algebra-q04",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A $2 \\times 2$ diagonal matrix is given by $A = \\begin{bmatrix} 5 & 0 \\\\ 0 & 12 \\end{bmatrix}$. What is the largest singular value $\\sigma_1$ of matrix $A$?",
    "correctAnswer": {
      "exact": 12.0,
      "min": 11.99,
      "max": 12.01
    },
    "explanation": "For a diagonal matrix with non-negative entries, the singular values are simply the diagonal entries arranged in descending order: $\\sigma_1 = \\max(5, 12) = 12$.",
    "hints": [
      "Singular values of diagonal matrices are $|a_{ii}|$, sorted descending."
    ],
    "trapAlert": "Singular values are always real and non-negative by definition: $\\sigma_i \\ge 0$.",
    "tags": [
      "SVD",
      "Singular Values",
      "Linear Algebra"
    ]
  },
  {
    "id": "da-linear-algebra-q05",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A $2 \\times 2$ diagonal matrix is given by $A = \\begin{bmatrix} 9 & 0 \\\\ 0 & 12 \\end{bmatrix}$. What is the largest singular value $\\sigma_1$ of matrix $A$?",
    "correctAnswer": {
      "exact": 12.0,
      "min": 11.99,
      "max": 12.01
    },
    "explanation": "For a diagonal matrix with non-negative entries, the singular values are simply the diagonal entries arranged in descending order: $\\sigma_1 = \\max(9, 12) = 12$.",
    "hints": [
      "Singular values of diagonal matrices are $|a_{ii}|$, sorted descending."
    ],
    "trapAlert": "Singular values are always real and non-negative by definition: $\\sigma_i \\ge 0$.",
    "tags": [
      "SVD",
      "Singular Values",
      "Linear Algebra"
    ]
  },
  {
    "id": "da-linear-algebra-q06",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A $2 \\times 2$ diagonal matrix is given by $A = \\begin{bmatrix} 4 & 0 \\\\ 0 & 3 \\end{bmatrix}$. What is the largest singular value $\\sigma_1$ of matrix $A$?",
    "correctAnswer": {
      "exact": 4.0,
      "min": 3.99,
      "max": 4.01
    },
    "explanation": "For a diagonal matrix with non-negative entries, the singular values are simply the diagonal entries arranged in descending order: $\\sigma_1 = \\max(4, 3) = 4$.",
    "hints": [
      "Singular values of diagonal matrices are $|a_{ii}|$, sorted descending."
    ],
    "trapAlert": "Singular values are always real and non-negative by definition: $\\sigma_i \\ge 0$.",
    "tags": [
      "SVD",
      "Singular Values",
      "Linear Algebra"
    ]
  },
  {
    "id": "da-linear-algebra-q07",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In Principal Component Analysis (PCA) on a 3-dimensional dataset, the sample covariance matrix has eigenvalues $\\lambda_1 = 10.0$, $\\lambda_2 = 6.0$, and $\\lambda_3 = 4.0$. What percentage of the total dataset variance is explained by the first principal component (rounded off to one decimal place)?",
    "correctAnswer": {
      "exact": 50.0,
      "min": 49.8,
      "max": 50.2
    },
    "explanation": "Total variance in PCA is given by the sum of all eigenvalues: $\\sum \\lambda_i = 10.0 + 6.0 + 4.0 = 20.0$. The proportion of variance explained by the first principal component is $\\frac{\\lambda_1}{\\sum \\lambda_i} = \\frac{10.0}{20.0} = 50.0\\%$.",
    "hints": [
      "Proportion explained by PC_k = $\\lambda_k / \\sum \\lambda_i$."
    ],
    "trapAlert": "Sum of eigenvalues equals the total trace of the covariance matrix.",
    "tags": [
      "PCA",
      "Explained Variance",
      "Covariance Matrix"
    ]
  },
  {
    "id": "da-linear-algebra-q08",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In Principal Component Analysis (PCA) on a 3-dimensional dataset, the sample covariance matrix has eigenvalues $\\lambda_1 = 12.0$, $\\lambda_2 = 5.0$, and $\\lambda_3 = 3.0$. What percentage of the total dataset variance is explained by the first principal component (rounded off to one decimal place)?",
    "correctAnswer": {
      "exact": 60.0,
      "min": 59.8,
      "max": 60.2
    },
    "explanation": "Total variance in PCA is given by the sum of all eigenvalues: $\\sum \\lambda_i = 12.0 + 5.0 + 3.0 = 20.0$. The proportion of variance explained by the first principal component is $\\frac{\\lambda_1}{\\sum \\lambda_i} = \\frac{12.0}{20.0} = 60.0\\%$.",
    "hints": [
      "Proportion explained by PC_k = $\\lambda_k / \\sum \\lambda_i$."
    ],
    "trapAlert": "Sum of eigenvalues equals the total trace of the covariance matrix.",
    "tags": [
      "PCA",
      "Explained Variance",
      "Covariance Matrix"
    ]
  },
  {
    "id": "da-linear-algebra-q09",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In Principal Component Analysis (PCA) on a 3-dimensional dataset, the sample covariance matrix has eigenvalues $\\lambda_1 = 14.0$, $\\lambda_2 = 4.0$, and $\\lambda_3 = 2.0$. What percentage of the total dataset variance is explained by the first principal component (rounded off to one decimal place)?",
    "correctAnswer": {
      "exact": 70.0,
      "min": 69.8,
      "max": 70.2
    },
    "explanation": "Total variance in PCA is given by the sum of all eigenvalues: $\\sum \\lambda_i = 14.0 + 4.0 + 2.0 = 20.0$. The proportion of variance explained by the first principal component is $\\frac{\\lambda_1}{\\sum \\lambda_i} = \\frac{14.0}{20.0} = 70.0\\%$.",
    "hints": [
      "Proportion explained by PC_k = $\\lambda_k / \\sum \\lambda_i$."
    ],
    "trapAlert": "Sum of eigenvalues equals the total trace of the covariance matrix.",
    "tags": [
      "PCA",
      "Explained Variance",
      "Covariance Matrix"
    ]
  },
  {
    "id": "da-linear-algebra-q10",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In Principal Component Analysis (PCA) on a 3-dimensional dataset, the sample covariance matrix has eigenvalues $\\lambda_1 = 16.0$, $\\lambda_2 = 3.0$, and $\\lambda_3 = 1.0$. What percentage of the total dataset variance is explained by the first principal component (rounded off to one decimal place)?",
    "correctAnswer": {
      "exact": 80.0,
      "min": 79.8,
      "max": 80.2
    },
    "explanation": "Total variance in PCA is given by the sum of all eigenvalues: $\\sum \\lambda_i = 16.0 + 3.0 + 1.0 = 20.0$. The proportion of variance explained by the first principal component is $\\frac{\\lambda_1}{\\sum \\lambda_i} = \\frac{16.0}{20.0} = 80.0\\%$.",
    "hints": [
      "Proportion explained by PC_k = $\\lambda_k / \\sum \\lambda_i$."
    ],
    "trapAlert": "Sum of eigenvalues equals the total trace of the covariance matrix.",
    "tags": [
      "PCA",
      "Explained Variance",
      "Covariance Matrix"
    ]
  },
  {
    "id": "da-linear-algebra-q11",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In Principal Component Analysis (PCA) on a 3-dimensional dataset, the sample covariance matrix has eigenvalues $\\lambda_1 = 15.0$, $\\lambda_2 = 7.0$, and $\\lambda_3 = 3.0$. What percentage of the total dataset variance is explained by the first principal component (rounded off to one decimal place)?",
    "correctAnswer": {
      "exact": 60.0,
      "min": 59.8,
      "max": 60.2
    },
    "explanation": "Total variance in PCA is given by the sum of all eigenvalues: $\\sum \\lambda_i = 15.0 + 7.0 + 3.0 = 25.0$. The proportion of variance explained by the first principal component is $\\frac{\\lambda_1}{\\sum \\lambda_i} = \\frac{15.0}{25.0} = 60.0\\%$.",
    "hints": [
      "Proportion explained by PC_k = $\\lambda_k / \\sum \\lambda_i$."
    ],
    "trapAlert": "Sum of eigenvalues equals the total trace of the covariance matrix.",
    "tags": [
      "PCA",
      "Explained Variance",
      "Covariance Matrix"
    ]
  },
  {
    "id": "da-linear-algebra-q12",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "In Principal Component Analysis (PCA) on a 3-dimensional dataset, the sample covariance matrix has eigenvalues $\\lambda_1 = 18.0$, $\\lambda_2 = 2.0$, and $\\lambda_3 = 0.0$. What percentage of the total dataset variance is explained by the first principal component (rounded off to one decimal place)?",
    "correctAnswer": {
      "exact": 90.0,
      "min": 89.8,
      "max": 90.2
    },
    "explanation": "Total variance in PCA is given by the sum of all eigenvalues: $\\sum \\lambda_i = 18.0 + 2.0 + 0.0 = 20.0$. The proportion of variance explained by the first principal component is $\\frac{\\lambda_1}{\\sum \\lambda_i} = \\frac{18.0}{20.0} = 90.0\\%$.",
    "hints": [
      "Proportion explained by PC_k = $\\lambda_k / \\sum \\lambda_i$."
    ],
    "trapAlert": "Sum of eigenvalues equals the total trace of the covariance matrix.",
    "tags": [
      "PCA",
      "Explained Variance",
      "Covariance Matrix"
    ]
  },
  {
    "id": "da-linear-algebra-q13",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (MSQ)",
    "type": "MSQ",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Hard",
    "text": "Consider the Singular Value Decomposition (SVD) of a matrix $A \\in \\mathbb{R}^{m \\times n}$ given by $A = U \\Sigma V^T$ with rank $r$. Which of the following statements is/are TRUE? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "The columns of $U$ are orthonormal eigenvectors of $A A^T$."
      },
      {
        "id": "B",
        "text": "The columns of $V$ are orthonormal eigenvectors of $A^T A$."
      },
      {
        "id": "C",
        "text": "The non-zero singular values of $A$ are the positive square roots of the non-zero eigenvalues of $A^T A$."
      },
      {
        "id": "D",
        "text": "The Moore-Penrose pseudo-inverse $A^+$ is given by $A^+ = U \\Sigma^+ V^T$."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "In SVD: $A A^T = U \\Sigma V^T V \\Sigma^T U^T = U \\Sigma \\Sigma^T U^T$, so columns of $U$ (left singular vectors) are eigenvectors of $A A^T$ (Option A). Similarly, $A^T A = V \\Sigma^T \\Sigma V^T$, so columns of $V$ are eigenvectors of $A^T A$ (Option B). Non-zero singular values $\\sigma_i = \\sqrt{\\lambda_i(A^T A)}$ (Option C). The pseudo-inverse is $A^+ = V \\Sigma^+ U^T$ (Option D has transposed order, hence false).",
    "hints": [
      "Review SVD derivation: $A^T A = V \\Sigma^2 V^T$."
    ],
    "trapAlert": "Pseudo-inverse order trap: $A^+ = V \\Sigma^+ U^T$, NOT $U \\Sigma^+ V^T$!",
    "tags": [
      "SVD",
      "Singular Vectors",
      "Pseudo-Inverse",
      "GATE MSQ"
    ]
  },
  {
    "id": "da-linear-algebra-q14",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "What is the Euclidean length of the orthogonal projection of vector $y = [2, 2]^T$ onto the 1D subspace spanned by vector $u = [1, 0]^T$?",
    "correctAnswer": {
      "exact": 2.0,
      "min": 1.99,
      "max": 2.01
    },
    "explanation": "The orthogonal projection formula is $\\text{proj}_u(y) = \\frac{y \\cdot u}{\\|u\\|^2} u$. Length is $\\|\\text{proj}_u(y)\\| = \\frac{|y \\cdot u|}{\\|u\\|} = \\frac{|2|}{\\sqrt{1}} = 2.0$.",
    "hints": [
      "Length of projection = $|y \\cdot u| / \\|u\\|$."
    ],
    "trapAlert": "Subspace projection uses dot product divided by length of the basis vector.",
    "tags": [
      "Orthogonal Projection",
      "Vector Spaces"
    ]
  },
  {
    "id": "da-linear-algebra-q15",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "What is the Euclidean length of the orthogonal projection of vector $y = [3, 4]^T$ onto the 1D subspace spanned by vector $u = [1, 0]^T$?",
    "correctAnswer": {
      "exact": 3.0,
      "min": 2.99,
      "max": 3.01
    },
    "explanation": "The orthogonal projection formula is $\\text{proj}_u(y) = \\frac{y \\cdot u}{\\|u\\|^2} u$. Length is $\\|\\text{proj}_u(y)\\| = \\frac{|y \\cdot u|}{\\|u\\|} = \\frac{|3|}{\\sqrt{1}} = 3.0$.",
    "hints": [
      "Length of projection = $|y \\cdot u| / \\|u\\|$."
    ],
    "trapAlert": "Subspace projection uses dot product divided by length of the basis vector.",
    "tags": [
      "Orthogonal Projection",
      "Vector Spaces"
    ]
  },
  {
    "id": "da-linear-algebra-q16",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "What is the Euclidean length of the orthogonal projection of vector $y = [4, 3]^T$ onto the 1D subspace spanned by vector $u = [0, 1]^T$?",
    "correctAnswer": {
      "exact": 3.0,
      "min": 2.99,
      "max": 3.01
    },
    "explanation": "The orthogonal projection formula is $\\text{proj}_u(y) = \\frac{y \\cdot u}{\\|u\\|^2} u$. Length is $\\|\\text{proj}_u(y)\\| = \\frac{|y \\cdot u|}{\\|u\\|} = \\frac{|3|}{\\sqrt{1}} = 3.0$.",
    "hints": [
      "Length of projection = $|y \\cdot u| / \\|u\\|$."
    ],
    "trapAlert": "Subspace projection uses dot product divided by length of the basis vector.",
    "tags": [
      "Orthogonal Projection",
      "Vector Spaces"
    ]
  },
  {
    "id": "da-linear-algebra-q17",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "What is the Euclidean length of the orthogonal projection of vector $y = [5, 12]^T$ onto the 1D subspace spanned by vector $u = [1, 0]^T$?",
    "correctAnswer": {
      "exact": 5.0,
      "min": 4.99,
      "max": 5.01
    },
    "explanation": "The orthogonal projection formula is $\\text{proj}_u(y) = \\frac{y \\cdot u}{\\|u\\|^2} u$. Length is $\\|\\text{proj}_u(y)\\| = \\frac{|y \\cdot u|}{\\|u\\|} = \\frac{|5|}{\\sqrt{1}} = 5.0$.",
    "hints": [
      "Length of projection = $|y \\cdot u| / \\|u\\|$."
    ],
    "trapAlert": "Subspace projection uses dot product divided by length of the basis vector.",
    "tags": [
      "Orthogonal Projection",
      "Vector Spaces"
    ]
  },
  {
    "id": "da-linear-algebra-q18",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "What is the Euclidean length of the orthogonal projection of vector $y = [6, 8]^T$ onto the 1D subspace spanned by vector $u = [0, 1]^T$?",
    "correctAnswer": {
      "exact": 8.0,
      "min": 7.99,
      "max": 8.01
    },
    "explanation": "The orthogonal projection formula is $\\text{proj}_u(y) = \\frac{y \\cdot u}{\\|u\\|^2} u$. Length is $\\|\\text{proj}_u(y)\\| = \\frac{|y \\cdot u|}{\\|u\\|} = \\frac{|8|}{\\sqrt{1}} = 8.0$.",
    "hints": [
      "Length of projection = $|y \\cdot u| / \\|u\\|$."
    ],
    "trapAlert": "Subspace projection uses dot product divided by length of the basis vector.",
    "tags": [
      "Orthogonal Projection",
      "Vector Spaces"
    ]
  },
  {
    "id": "da-linear-algebra-q19",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q20",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q21",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q22",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q23",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q24",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q25",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q26",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q27",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q28",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q29",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q30",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q31",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q32",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q33",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q34",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q35",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q36",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q37",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q38",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q39",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q40",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q41",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q42",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q43",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q44",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-linear-algebra-q45",
    "paper": "DA",
    "subject": "Linear Algebra",
    "topicId": "da-linear-algebra",
    "topicTitle": "Linear Algebra, SVD & PCA",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "Let $A$ be a real symmetric matrix ($A = A^T$). Which of the following is guaranteed to be true?",
    "options": [
      {
        "id": "A",
        "text": "All eigenvalues of $A$ are strictly real numbers, and eigenvectors corresponding to distinct eigenvalues are orthogonal"
      },
      {
        "id": "B",
        "text": "All eigenvalues of $A$ are strictly positive"
      },
      {
        "id": "C",
        "text": "The determinant of $A$ is always 1"
      },
      {
        "id": "D",
        "text": "The trace of $A$ is always 0"
      }
    ],
    "correctAnswer": "A",
    "explanation": "By the Spectral Theorem for real symmetric matrices: All eigenvalues are strictly real, and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal. Positive definiteness is not guaranteed unless all eigenvalues are strictly positive.",
    "hints": [
      "Spectral theorem for symmetric matrices."
    ],
    "trapAlert": "Symmetric matrices can have negative eigenvalues unless they are positive definite.",
    "tags": [
      "Symmetric Matrix",
      "Spectral Theorem",
      "Eigenvalues"
    ]
  },
  {
    "id": "da-calc-opt-q01",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Consider the objective function $f(x) = 1.0 x^2$. Using gradient descent with learning rate $\\eta = 0.1$ and initial point $x_0 = 4.0$, calculate the next iterate $x_1$.",
    "correctAnswer": {
      "exact": 3.2,
      "min": 3.19,
      "max": 3.21
    },
    "explanation": "Gradient: $\\nabla f(x) = \\frac{df}{dx} = 2.0 x$. At $x_0 = 4.0$, the gradient is $\\nabla f(4.0) = 2.0 \\times 4.0 = 8.0$. Gradient descent update: $x_1 = x_0 - \\eta \\nabla f(x_0) = 4.0 - (0.1 \\times 8.0) = 4.0 - 0.8 = 3.2$.",
    "hints": [
      "$x_{k+1} = x_k - \\eta \\nabla f(x_k)$."
    ],
    "trapAlert": "Gradient descent moves in the negative gradient direction.",
    "tags": [
      "Gradient Descent",
      "Optimization",
      "Learning Rate"
    ]
  },
  {
    "id": "da-calc-opt-q02",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Consider the objective function $f(x) = 2.0 x^2$. Using gradient descent with learning rate $\\eta = 0.05$ and initial point $x_0 = 5.0$, calculate the next iterate $x_1$.",
    "correctAnswer": {
      "exact": 4.0,
      "min": 3.99,
      "max": 4.01
    },
    "explanation": "Gradient: $\\nabla f(x) = \\frac{df}{dx} = 4.0 x$. At $x_0 = 5.0$, the gradient is $\\nabla f(5.0) = 4.0 \\times 5.0 = 20.0$. Gradient descent update: $x_1 = x_0 - \\eta \\nabla f(x_0) = 5.0 - (0.05 \\times 20.0) = 5.0 - 1.0 = 4.0$.",
    "hints": [
      "$x_{k+1} = x_k - \\eta \\nabla f(x_k)$."
    ],
    "trapAlert": "Gradient descent moves in the negative gradient direction.",
    "tags": [
      "Gradient Descent",
      "Optimization",
      "Learning Rate"
    ]
  },
  {
    "id": "da-calc-opt-q03",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Consider the objective function $f(x) = 0.5 x^2$. Using gradient descent with learning rate $\\eta = 0.2$ and initial point $x_0 = 6.0$, calculate the next iterate $x_1$.",
    "correctAnswer": {
      "exact": 4.8,
      "min": 4.79,
      "max": 4.81
    },
    "explanation": "Gradient: $\\nabla f(x) = \\frac{df}{dx} = 1.0 x$. At $x_0 = 6.0$, the gradient is $\\nabla f(6.0) = 1.0 \\times 6.0 = 6.0$. Gradient descent update: $x_1 = x_0 - \\eta \\nabla f(x_0) = 6.0 - (0.2 \\times 6.0) = 6.0 - 1.2 = 4.8$.",
    "hints": [
      "$x_{k+1} = x_k - \\eta \\nabla f(x_k)$."
    ],
    "trapAlert": "Gradient descent moves in the negative gradient direction.",
    "tags": [
      "Gradient Descent",
      "Optimization",
      "Learning Rate"
    ]
  },
  {
    "id": "da-calc-opt-q04",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Consider the objective function $f(x) = 3.0 x^2$. Using gradient descent with learning rate $\\eta = 0.1$ and initial point $x_0 = 2.0$, calculate the next iterate $x_1$.",
    "correctAnswer": {
      "exact": 0.8,
      "min": 0.79,
      "max": 0.81
    },
    "explanation": "Gradient: $\\nabla f(x) = \\frac{df}{dx} = 6.0 x$. At $x_0 = 2.0$, the gradient is $\\nabla f(2.0) = 6.0 \\times 2.0 = 12.0$. Gradient descent update: $x_1 = x_0 - \\eta \\nabla f(x_0) = 2.0 - (0.1 \\times 12.0) = 2.0 - 1.2 = 0.8$.",
    "hints": [
      "$x_{k+1} = x_k - \\eta \\nabla f(x_k)$."
    ],
    "trapAlert": "Gradient descent moves in the negative gradient direction.",
    "tags": [
      "Gradient Descent",
      "Optimization",
      "Learning Rate"
    ]
  },
  {
    "id": "da-calc-opt-q05",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Consider the objective function $f(x) = 1.0 x^2$. Using gradient descent with learning rate $\\eta = 0.25$ and initial point $x_0 = 10.0$, calculate the next iterate $x_1$.",
    "correctAnswer": {
      "exact": 5.0,
      "min": 4.99,
      "max": 5.01
    },
    "explanation": "Gradient: $\\nabla f(x) = \\frac{df}{dx} = 2.0 x$. At $x_0 = 10.0$, the gradient is $\\nabla f(10.0) = 2.0 \\times 10.0 = 20.0$. Gradient descent update: $x_1 = x_0 - \\eta \\nabla f(x_0) = 10.0 - (0.25 \\times 20.0) = 10.0 - 5.0 = 5.0$.",
    "hints": [
      "$x_{k+1} = x_k - \\eta \\nabla f(x_k)$."
    ],
    "trapAlert": "Gradient descent moves in the negative gradient direction.",
    "tags": [
      "Gradient Descent",
      "Optimization",
      "Learning Rate"
    ]
  },
  {
    "id": "da-calc-opt-q06",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (MSQ)",
    "type": "MSQ",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Hard",
    "text": "Let $f: \\mathbb{R}^n \\to \\mathbb{R}$ be a twice continuously differentiable function. Which of the following conditions is/are TRUE regarding its convexity?",
    "options": [
      {
        "id": "A",
        "text": "$f$ is convex if and only if its Hessian matrix $\\nabla^2 f(x)$ is positive semi-definite (PSD) for all $x \\in \\mathbb{R}^n$."
      },
      {
        "id": "B",
        "text": "For any convex function, every local minimum is also a global minimum."
      },
      {
        "id": "C",
        "text": "The first-order condition for convexity is $f(y) \\ge f(x) + \\nabla f(x)^T (y - x)$ for all $x, y$."
      },
      {
        "id": "D",
        "text": "If $\\nabla^2 f(x)$ has both positive and negative eigenvalues at a critical point, that point is a local minimum."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Convexity characterizations: The second-order condition states $f$ is convex iff $\\nabla^2 f(x) \\succeq 0$ (PSD) everywhere (Option A). For convex functions on convex domains, any local minimum is automatically a global minimum (Option B). The first-order Taylor tangent under-estimator condition is $f(y) \\ge f(x) + \\nabla f(x)^T(y-x)$ (Option C). If the Hessian has both positive and negative eigenvalues (indefinite), the critical point is a saddle point, not a minimum (Option D is false).",
    "hints": [
      "Review first and second order characterizations of convex functions."
    ],
    "trapAlert": "Indefinite Hessian at a stationary point denotes a saddle point, NOT a minimum.",
    "tags": [
      "Convex Optimization",
      "Hessian",
      "Convexity",
      "GATE MSQ"
    ]
  },
  {
    "id": "da-calc-opt-q07",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Compute the second-order Taylor series approximation of $f(x) = e^x$ around $x_0 = 0$ evaluated at $x = 0.1$ (rounded off to four decimal places).",
    "correctAnswer": {
      "exact": 1.1,
      "min": 1.1,
      "max": 1.1
    },
    "explanation": "The second-order Taylor series around 0 is $P_2(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 = 1 + x + \\frac{x^2}{2}$. At $x = 0.1$: $P_2(0.1) = 1 + 0.1 + \\frac{0.01}{2} = 1.105$.",
    "hints": [
      "$P_2(x) = 1 + x + x^2/2$."
    ],
    "trapAlert": "Include the $x^2/2$ term for the second-order expansion.",
    "tags": [
      "Taylor Series",
      "Approximation",
      "Calculus"
    ]
  },
  {
    "id": "da-calc-opt-q08",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Compute the second-order Taylor series approximation of $f(x) = e^x$ around $x_0 = 0$ evaluated at $x = 0.2$ (rounded off to four decimal places).",
    "correctAnswer": {
      "exact": 1.22,
      "min": 1.22,
      "max": 1.22
    },
    "explanation": "The second-order Taylor series around 0 is $P_2(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 = 1 + x + \\frac{x^2}{2}$. At $x = 0.2$: $P_2(0.2) = 1 + 0.2 + \\frac{0.04}{2} = 1.22$.",
    "hints": [
      "$P_2(x) = 1 + x + x^2/2$."
    ],
    "trapAlert": "Include the $x^2/2$ term for the second-order expansion.",
    "tags": [
      "Taylor Series",
      "Approximation",
      "Calculus"
    ]
  },
  {
    "id": "da-calc-opt-q09",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Compute the second-order Taylor series approximation of $f(x) = e^x$ around $x_0 = 0$ evaluated at $x = 0.5$ (rounded off to four decimal places).",
    "correctAnswer": {
      "exact": 1.62,
      "min": 1.62,
      "max": 1.62
    },
    "explanation": "The second-order Taylor series around 0 is $P_2(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 = 1 + x + \\frac{x^2}{2}$. At $x = 0.5$: $P_2(0.5) = 1 + 0.5 + \\frac{0.25}{2} = 1.625$.",
    "hints": [
      "$P_2(x) = 1 + x + x^2/2$."
    ],
    "trapAlert": "Include the $x^2/2$ term for the second-order expansion.",
    "tags": [
      "Taylor Series",
      "Approximation",
      "Calculus"
    ]
  },
  {
    "id": "da-calc-opt-q10",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Compute the second-order Taylor series approximation of $f(x) = e^x$ around $x_0 = 0$ evaluated at $x = -0.1$ (rounded off to four decimal places).",
    "correctAnswer": {
      "exact": 0.91,
      "min": 0.91,
      "max": 0.92
    },
    "explanation": "The second-order Taylor series around 0 is $P_2(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 = 1 + x + \\frac{x^2}{2}$. At $x = -0.1$: $P_2(-0.1) = 1 + -0.1 + \\frac{0.01}{2} = 0.905$.",
    "hints": [
      "$P_2(x) = 1 + x + x^2/2$."
    ],
    "trapAlert": "Include the $x^2/2$ term for the second-order expansion.",
    "tags": [
      "Taylor Series",
      "Approximation",
      "Calculus"
    ]
  },
  {
    "id": "da-calc-opt-q11",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q12",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q13",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q14",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q15",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q16",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q17",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q18",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q19",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q20",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q21",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q22",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q23",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q24",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q25",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q26",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q27",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q28",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q29",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q30",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q31",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q32",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q33",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q34",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q35",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q36",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q37",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q38",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q39",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q40",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q41",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q42",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q43",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q44",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-calc-opt-q45",
    "paper": "DA",
    "subject": "Calculus & Optimization",
    "topicId": "da-calc-opt",
    "topicTitle": "Calculus & Convex Optimization",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In constrained convex optimization, the Karush-Kuhn-Tucker (KKT) conditions are:",
    "options": [
      {
        "id": "A",
        "text": "Necessary for optimality under Slater's condition, and sufficient for convex problems"
      },
      {
        "id": "B",
        "text": "Only applicable to unconstrained problems"
      },
      {
        "id": "C",
        "text": "Never satisfied if inequality constraints are active"
      },
      {
        "id": "D",
        "text": "Require the objective function to be non-differentiable"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The KKT conditions generalize Lagrange multipliers to problems with inequality constraints. For convex optimization problems satisfying constraint qualification (such as Slater's condition), the KKT conditions are both necessary and sufficient for global optimality.",
    "hints": [
      "KKT conditions include primal feasibility, dual feasibility, complementary slackness, and stationarity."
    ],
    "trapAlert": "KKT conditions apply to inequality-constrained problems, not just equalities.",
    "tags": [
      "KKT Conditions",
      "Constrained Optimization"
    ]
  },
  {
    "id": "da-prog-dsa-q01",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Using the Master Theorem, what is the asymptotic time complexity of the recurrence relation $T(n) = 2 T(n/2) + \\Theta(n^{1})$ with $T(1) = \\Theta(1)$?",
    "options": [
      {
        "id": "A",
        "text": "$\\Theta(n \\log n)$"
      },
      {
        "id": "B",
        "text": "$\\Theta(n^{1})$"
      },
      {
        "id": "C",
        "text": "$\\Theta(2^n)$"
      },
      {
        "id": "D",
        "text": "$\\Theta(n^2 \\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Compare $\\log_b a$ with $d$: Merge sort recurrence: $a=2, b=2, d=1 \\implies \\log_b a = 1 = d$. Thus $T(n) = \\Theta(n \\log n)$.",
    "hints": [
      "Compare $\\log_b(a)$ with the exponent $d$ of the non-recursive work."
    ],
    "trapAlert": "Check which case of the Master Theorem applies ($<, =, >$).",
    "tags": [
      "Master Theorem",
      "Recurrences",
      "Algorithms"
    ]
  },
  {
    "id": "da-prog-dsa-q02",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Using the Master Theorem, what is the asymptotic time complexity of the recurrence relation $T(n) = 4 T(n/2) + \\Theta(n^{1})$ with $T(1) = \\Theta(1)$?",
    "options": [
      {
        "id": "A",
        "text": "$\\Theta(n^2)$"
      },
      {
        "id": "B",
        "text": "$\\Theta(n^{1})$"
      },
      {
        "id": "C",
        "text": "$\\Theta(2^n)$"
      },
      {
        "id": "D",
        "text": "$\\Theta(n^2 \\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Compare $\\log_b a$ with $d$: $a=4, b=2, d=1 \\implies \\log_2 4 = 2 > d \\implies \\Theta(n^{\\log_b a}) = \\Theta(n^2)$. Thus $T(n) = \\Theta(n^2)$.",
    "hints": [
      "Compare $\\log_b(a)$ with the exponent $d$ of the non-recursive work."
    ],
    "trapAlert": "Check which case of the Master Theorem applies ($<, =, >$).",
    "tags": [
      "Master Theorem",
      "Recurrences",
      "Algorithms"
    ]
  },
  {
    "id": "da-prog-dsa-q03",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Using the Master Theorem, what is the asymptotic time complexity of the recurrence relation $T(n) = 8 T(n/2) + \\Theta(n^{2})$ with $T(1) = \\Theta(1)$?",
    "options": [
      {
        "id": "A",
        "text": "$\\Theta(n^3)$"
      },
      {
        "id": "B",
        "text": "$\\Theta(n^{2})$"
      },
      {
        "id": "C",
        "text": "$\\Theta(2^n)$"
      },
      {
        "id": "D",
        "text": "$\\Theta(n^2 \\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Compare $\\log_b a$ with $d$: $a=8, b=2, d=2 \\implies \\log_2 8 = 3 > d \\implies \\Theta(n^3)$. Thus $T(n) = \\Theta(n^3)$.",
    "hints": [
      "Compare $\\log_b(a)$ with the exponent $d$ of the non-recursive work."
    ],
    "trapAlert": "Check which case of the Master Theorem applies ($<, =, >$).",
    "tags": [
      "Master Theorem",
      "Recurrences",
      "Algorithms"
    ]
  },
  {
    "id": "da-prog-dsa-q04",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Using the Master Theorem, what is the asymptotic time complexity of the recurrence relation $T(n) = 1 T(n/2) + \\Theta(n^{0})$ with $T(1) = \\Theta(1)$?",
    "options": [
      {
        "id": "A",
        "text": "$\\Theta(\\log n)$"
      },
      {
        "id": "B",
        "text": "$\\Theta(n^{0})$"
      },
      {
        "id": "C",
        "text": "$\\Theta(2^n)$"
      },
      {
        "id": "D",
        "text": "$\\Theta(n^2 \\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Compare $\\log_b a$ with $d$: Binary search recurrence: $a=1, b=2, d=0 \\implies \\log_2 1 = 0 = d \\implies \\Theta(\\log n)$. Thus $T(n) = \\Theta(\\log n)$.",
    "hints": [
      "Compare $\\log_b(a)$ with the exponent $d$ of the non-recursive work."
    ],
    "trapAlert": "Check which case of the Master Theorem applies ($<, =, >$).",
    "tags": [
      "Master Theorem",
      "Recurrences",
      "Algorithms"
    ]
  },
  {
    "id": "da-prog-dsa-q05",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Using the Master Theorem, what is the asymptotic time complexity of the recurrence relation $T(n) = 2 T(n/2) + \\Theta(n^{0})$ with $T(1) = \\Theta(1)$?",
    "options": [
      {
        "id": "A",
        "text": "$\\Theta(n)$"
      },
      {
        "id": "B",
        "text": "$\\Theta(n^{0})$"
      },
      {
        "id": "C",
        "text": "$\\Theta(2^n)$"
      },
      {
        "id": "D",
        "text": "$\\Theta(n^2 \\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Compare $\\log_b a$ with $d$: $a=2, b=2, d=0 \\implies \\log_2 2 = 1 > 0 \\implies \\Theta(n)$. Thus $T(n) = \\Theta(n)$.",
    "hints": [
      "Compare $\\log_b(a)$ with the exponent $d$ of the non-recursive work."
    ],
    "trapAlert": "Check which case of the Master Theorem applies ($<, =, >$).",
    "tags": [
      "Master Theorem",
      "Recurrences",
      "Algorithms"
    ]
  },
  {
    "id": "da-prog-dsa-q06",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "Using the Master Theorem, what is the asymptotic time complexity of the recurrence relation $T(n) = 3 T(n/3) + \\Theta(n^{1})$ with $T(1) = \\Theta(1)$?",
    "options": [
      {
        "id": "A",
        "text": "$\\Theta(n \\log n)$"
      },
      {
        "id": "B",
        "text": "$\\Theta(n^{1})$"
      },
      {
        "id": "C",
        "text": "$\\Theta(2^n)$"
      },
      {
        "id": "D",
        "text": "$\\Theta(n^2 \\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Compare $\\log_b a$ with $d$: $a=3, b=3, d=1 \\implies \\log_3 3 = 1 = d \\implies \\Theta(n \\log n)$. Thus $T(n) = \\Theta(n \\log n)$.",
    "hints": [
      "Compare $\\log_b(a)$ with the exponent $d$ of the non-recursive work."
    ],
    "trapAlert": "Check which case of the Master Theorem applies ($<, =, >$).",
    "tags": [
      "Master Theorem",
      "Recurrences",
      "Algorithms"
    ]
  },
  {
    "id": "da-prog-dsa-q07",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "What is the maximum number of nodes in a binary tree of height $h = 3$ (where the height of a single root node is 0)?",
    "correctAnswer": {
      "exact": 15.0,
      "min": 14.99,
      "max": 15.01
    },
    "explanation": "The maximum number of nodes in a binary tree of height $h$ is given by $\\sum_{i=0}^h 2^i = 2^{h+1} - 1 = 2^{4} - 1 = 15$.",
    "hints": [
      "Geometric sum formula: $2^{h+1} - 1$."
    ],
    "trapAlert": "Check whether the height convention considers a single node as height 0 or height 1.",
    "tags": [
      "Binary Trees",
      "Tree Height",
      "Data Structures"
    ]
  },
  {
    "id": "da-prog-dsa-q08",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "What is the maximum number of nodes in a binary tree of height $h = 4$ (where the height of a single root node is 0)?",
    "correctAnswer": {
      "exact": 31.0,
      "min": 30.99,
      "max": 31.01
    },
    "explanation": "The maximum number of nodes in a binary tree of height $h$ is given by $\\sum_{i=0}^h 2^i = 2^{h+1} - 1 = 2^{5} - 1 = 31$.",
    "hints": [
      "Geometric sum formula: $2^{h+1} - 1$."
    ],
    "trapAlert": "Check whether the height convention considers a single node as height 0 or height 1.",
    "tags": [
      "Binary Trees",
      "Tree Height",
      "Data Structures"
    ]
  },
  {
    "id": "da-prog-dsa-q09",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 1,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "What is the maximum number of nodes in a binary tree of height $h = 10$ (where the height of a single root node is 0)?",
    "correctAnswer": {
      "exact": 2047.0,
      "min": 2046.99,
      "max": 2047.01
    },
    "explanation": "The maximum number of nodes in a binary tree of height $h$ is given by $\\sum_{i=0}^h 2^i = 2^{h+1} - 1 = 2^{11} - 1 = 2047$.",
    "hints": [
      "Geometric sum formula: $2^{h+1} - 1$."
    ],
    "trapAlert": "Check whether the height convention considers a single node as height 0 or height 1.",
    "tags": [
      "Binary Trees",
      "Tree Height",
      "Data Structures"
    ]
  },
  {
    "id": "da-prog-dsa-q10",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (MSQ)",
    "type": "MSQ",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Hard",
    "text": "Which of the following built-in Python data types are IMMUTABLE (cannot be modified in-place after creation)? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "tuple"
      },
      {
        "id": "B",
        "text": "str (string)"
      },
      {
        "id": "C",
        "text": "list"
      },
      {
        "id": "D",
        "text": "frozenset"
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "D"
    ],
    "explanation": "In Python, immutable objects include int, float, bool, str, tuple, and frozenset. Any operation that modifies them returns a new object. Conversely, list, dict, and set are mutable objects whose elements can be altered in-place without altering their object identity.",
    "hints": [
      "Immutable objects cannot be modified after instantiation."
    ],
    "trapAlert": "Lists and dictionaries are mutable, while tuples and frozensets are immutable.",
    "tags": [
      "Python",
      "Mutability",
      "Data Structures",
      "GATE MSQ"
    ]
  },
  {
    "id": "da-prog-dsa-q11",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Keys 10, 17, and 24 are inserted sequentially into an initially empty hash table of size $m = 7$ using hash function $h(k) = k \\bmod 7$ with open addressing and linear probing. At which slot index is key 24 stored?",
    "correctAnswer": {
      "exact": 5.0,
      "min": 4.99,
      "max": 5.01
    },
    "explanation": "1. Key 10: $h(10) = 10 \\bmod 7 = 3$ (slot 3 empty -> stored at 3).\n2. Key 17: $h(17) = 17 \\bmod 7 = 3$ (collision at 3, probe slot 4 -> stored at 4).\n3. Key 24: $h(24) = 24 \\bmod 7 = 3$ (collision at 3, 4, probe slot 5 -> stored at 5).",
    "hints": [
      "Linear probing checks $(h(k) + i) \\bmod m$ for $i = 0, 1, 2, \\dots$."
    ],
    "trapAlert": "Be sure to increment probe index modulo table size $m$.",
    "tags": [
      "Hashing",
      "Linear Probing",
      "Collision Resolution"
    ]
  },
  {
    "id": "da-prog-dsa-q12",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q13",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q14",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q15",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q16",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q17",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q18",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q19",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q20",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q21",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q22",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q23",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q24",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q25",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q26",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q27",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q28",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q29",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q30",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q31",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q32",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q33",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q34",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q35",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q36",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q37",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q38",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q39",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q40",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q41",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q42",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q43",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q44",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-prog-dsa-q45",
    "paper": "DA",
    "subject": "Programming & Data Structures",
    "topicId": "da-prog-dsa",
    "topicTitle": "Programming, Python, Data Structures & Algorithms",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case time complexity of QuickSort on an array of $n$ elements when the pivot is always chosen as the smallest or largest element (such as in an already sorted array)?",
    "options": [
      {
        "id": "A",
        "text": "$O(n^2)$"
      },
      {
        "id": "B",
        "text": "$O(n \\log n)$"
      },
      {
        "id": "C",
        "text": "$O(n)$"
      },
      {
        "id": "D",
        "text": "$O(\\log n)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "When the pivot divides the problem into subproblems of size 0 and $n-1$, the recurrence becomes $T(n) = T(n-1) + O(n) = O(n^2)$. Randomized pivot selection or median-of-three is used in practice to avoid this worst case.",
    "hints": [
      "Worst-case partition produces unbalanced trees."
    ],
    "trapAlert": "Average case is $O(n \\log n)$, but unbalanced worst-case degrades to $O(n^2)$.",
    "tags": [
      "QuickSort",
      "Sorting",
      "Complexity"
    ]
  },
  {
    "id": "da-dbms-q01",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "A relational database schema $R$ is in BCNF if and only if:",
    "options": [
      {
        "id": "A",
        "text": "For every non-trivial functional dependency $X \\to Y$, $X$ is a superkey"
      },
      {
        "id": "B",
        "text": "For every non-trivial functional dependency $X \\to Y$, either $X$ is a superkey or $Y$ is a prime attribute"
      },
      {
        "id": "C",
        "text": "No non-prime attribute is partially dependent on any candidate key"
      },
      {
        "id": "D",
        "text": "All attributes hold atomic values only"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Definition of BCNF: For every non-trivial functional dependency $X \\to Y$, $X$ must be a superkey..",
    "hints": [
      "Distinguish between requirements of 1NF, 2NF, 3NF, and BCNF."
    ],
    "trapAlert": "BCNF is strictly stronger than 3NF because it does not allow $Y$ to be a prime attribute when $X$ is not a superkey.",
    "tags": [
      "Normalization",
      "Functional Dependencies",
      "Database Design"
    ]
  },
  {
    "id": "da-dbms-q02",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "A relational database schema $R$ is in 3NF if and only if:",
    "options": [
      {
        "id": "A",
        "text": "For every non-trivial functional dependency $X \\to Y$, $X$ is a superkey"
      },
      {
        "id": "B",
        "text": "For every non-trivial functional dependency $X \\to Y$, either $X$ is a superkey or $Y$ is a prime attribute"
      },
      {
        "id": "C",
        "text": "No non-prime attribute is partially dependent on any candidate key"
      },
      {
        "id": "D",
        "text": "All attributes hold atomic values only"
      }
    ],
    "correctAnswer": "B",
    "explanation": "Definition of 3NF: For every non-trivial functional dependency $X \\to Y$, either $X$ is a superkey OR $Y$ is a prime attribute..",
    "hints": [
      "Distinguish between requirements of 1NF, 2NF, 3NF, and BCNF."
    ],
    "trapAlert": "BCNF is strictly stronger than 3NF because it does not allow $Y$ to be a prime attribute when $X$ is not a superkey.",
    "tags": [
      "Normalization",
      "Functional Dependencies",
      "Database Design"
    ]
  },
  {
    "id": "da-dbms-q03",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "A relational database schema $R$ is in 2NF if and only if:",
    "options": [
      {
        "id": "A",
        "text": "For every non-trivial functional dependency $X \\to Y$, $X$ is a superkey"
      },
      {
        "id": "B",
        "text": "For every non-trivial functional dependency $X \\to Y$, either $X$ is a superkey or $Y$ is a prime attribute"
      },
      {
        "id": "C",
        "text": "No non-prime attribute is partially dependent on any candidate key"
      },
      {
        "id": "D",
        "text": "All attributes hold atomic values only"
      }
    ],
    "correctAnswer": "C",
    "explanation": "Definition of 2NF: No non-prime attribute is partially dependent on any candidate key..",
    "hints": [
      "Distinguish between requirements of 1NF, 2NF, 3NF, and BCNF."
    ],
    "trapAlert": "BCNF is strictly stronger than 3NF because it does not allow $Y$ to be a prime attribute when $X$ is not a superkey.",
    "tags": [
      "Normalization",
      "Functional Dependencies",
      "Database Design"
    ]
  },
  {
    "id": "da-dbms-q04",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "A relational database schema $R$ is in 1NF if and only if:",
    "options": [
      {
        "id": "A",
        "text": "For every non-trivial functional dependency $X \\to Y$, $X$ is a superkey"
      },
      {
        "id": "B",
        "text": "For every non-trivial functional dependency $X \\to Y$, either $X$ is a superkey or $Y$ is a prime attribute"
      },
      {
        "id": "C",
        "text": "No non-prime attribute is partially dependent on any candidate key"
      },
      {
        "id": "D",
        "text": "All attributes hold atomic values only"
      }
    ],
    "correctAnswer": "D",
    "explanation": "Definition of 1NF: All attribute values are atomic (no repeating groups or multivalued attributes)..",
    "hints": [
      "Distinguish between requirements of 1NF, 2NF, 3NF, and BCNF."
    ],
    "trapAlert": "BCNF is strictly stronger than 3NF because it does not allow $Y$ to be a prime attribute when $X$ is not a superkey.",
    "tags": [
      "Normalization",
      "Functional Dependencies",
      "Database Design"
    ]
  },
  {
    "id": "da-dbms-q05",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "Consider a relation $R(A, B, C, D)$ with functional dependencies: $A \\to B$, $B \\to C$, and $C \\to D$. How many candidate keys does relation $R$ possess?",
    "correctAnswer": {
      "exact": 1.0,
      "min": 0.99,
      "max": 1.01
    },
    "explanation": "Compute closure: $A^+ = \\{A, B, C, D\\}$. $A$ never appears on the right side of any dependency, so $A$ MUST be part of every candidate key. Since $A^+$ contains all attributes, $\\{A\\}$ is the unique candidate key.",
    "hints": [
      "Find attributes that never appear on the right side of any dependency."
    ],
    "trapAlert": "Any attribute not appearing on any right-hand side must be in every candidate key.",
    "tags": [
      "Candidate Keys",
      "Attribute Closure",
      "DBMS"
    ]
  },
  {
    "id": "da-dbms-q06",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (MSQ)",
    "type": "MSQ",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Hard",
    "text": "Which of the following statements correctly characterize the ACID properties in database transaction management? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "Atomicity ensures that either all operations of the transaction are committed or none are (all-or-nothing)."
      },
      {
        "id": "B",
        "text": "Consistency guarantees that a transaction transforms the database from one valid state to another, satisfying all integrity constraints."
      },
      {
        "id": "C",
        "text": "Isolation ensures that concurrent execution of transactions results in a system state equivalent to serial execution."
      },
      {
        "id": "D",
        "text": "Durability guarantees that once a transaction commits, its updates persist even in the event of subsequent system crashes."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "All four statements are the precise standard definitions of ACID properties: Atomicity (all-or-nothing), Consistency (preservation of invariants), Isolation (concurrency control/serializability), and Durability (persistence via write-ahead logging).",
    "hints": [
      "Review ACID transaction guarantees."
    ],
    "trapAlert": "All four choices are foundational guarantees of transaction management.",
    "tags": [
      "ACID Properties",
      "Transactions",
      "Concurrency",
      "GATE MSQ"
    ]
  },
  {
    "id": "da-dbms-q07",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In an SQL query, which clause is specifically used to filter groups AFTER aggregate functions (such as `COUNT`, `AVG`, `SUM`) have been computed?",
    "options": [
      {
        "id": "A",
        "text": "HAVING"
      },
      {
        "id": "B",
        "text": "WHERE"
      },
      {
        "id": "C",
        "text": "ORDER BY"
      },
      {
        "id": "D",
        "text": "GROUP BY"
      }
    ],
    "correctAnswer": "A",
    "explanation": "`WHERE` filters individual rows BEFORE aggregation. `HAVING` filters aggregated group records AFTER the `GROUP BY` clause evaluates aggregate functions.",
    "hints": [
      "`WHERE` cannot be used with aggregate functions in standard SQL."
    ],
    "trapAlert": "Use `WHERE` for row filtering and `HAVING` for group filtering.",
    "tags": [
      "SQL",
      "Aggregation",
      "HAVING Clause"
    ]
  },
  {
    "id": "da-dbms-q08",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q09",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q10",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q11",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q12",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q13",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q14",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q15",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q16",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q17",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q18",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q19",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q20",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q21",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q22",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q23",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q24",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q25",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q26",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q27",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q28",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q29",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q30",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q31",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q32",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q33",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q34",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q35",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q36",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q37",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q38",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q39",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q40",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q41",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q42",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q43",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q44",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-dbms-q45",
    "paper": "DA",
    "subject": "Database Management Systems",
    "topicId": "da-dbms",
    "topicTitle": "Database Management Systems & SQL",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In B+ Trees used for database indexing, why are data pointers stored ONLY at the leaf nodes rather than internal nodes?",
    "options": [
      {
        "id": "A",
        "text": "It maximizes internal node fan-out, reducing tree height and disk I/O operations"
      },
      {
        "id": "B",
        "text": "It prevents duplicate keys from ever being inserted"
      },
      {
        "id": "C",
        "text": "It removes the need for logarithmic search"
      },
      {
        "id": "D",
        "text": "It eliminates disk block storage completely"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Storing data pointers exclusively at leaf nodes allows internal nodes to hold more index keys per disk block (higher fan-out). A higher fan-out drastically reduces the height of the B+ tree, minimizing expensive disk block accesses during queries.",
    "hints": [
      "Internal nodes only contain keys and child pointers."
    ],
    "trapAlert": "High fan-out yields shorter trees and fewer disk seeks.",
    "tags": [
      "B+ Tree",
      "Indexing",
      "Storage"
    ]
  },
  {
    "id": "da-machine-learning-q01",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A binary machine learning classifier evaluates a test set producing: True Positives $\\text{TP} = 80$, False Positives $\\text{FP} = 20$, False Negatives $\\text{FN} = 10$, and True Negatives $\\text{TN} = 890$. Calculate the $F_1$-score of the classifier (rounded off to four decimal places).",
    "correctAnswer": {
      "exact": 0.84,
      "min": 0.83,
      "max": 0.85
    },
    "explanation": "1. Precision = $\\frac{\\text{TP}}{\\text{TP} + \\text{FP}} = \\frac{80}{100} = 0.8000$.\n2. Recall = $\\frac{\\text{TP}}{\\text{TP} + \\text{FN}} = \\frac{80}{90} = 0.8889$.\n3. $F_1$-score = $2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}} = 0.8421$.",
    "hints": [
      "$F_1$ is harmonic mean of Precision and Recall: $2 P R / (P + R)$."
    ],
    "trapAlert": "Recall divides by actual positives ($\text{TP} + \text{FN}$), while precision divides by predicted positives ($\text{TP} + \text{FP}$).",
    "tags": [
      "Confusion Matrix",
      "F1 Score",
      "Precision and Recall"
    ]
  },
  {
    "id": "da-machine-learning-q02",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A binary machine learning classifier evaluates a test set producing: True Positives $\\text{TP} = 90$, False Positives $\\text{FP} = 10$, False Negatives $\\text{FN} = 30$, and True Negatives $\\text{TN} = 870$. Calculate the $F_1$-score of the classifier (rounded off to four decimal places).",
    "correctAnswer": {
      "exact": 0.82,
      "min": 0.81,
      "max": 0.83
    },
    "explanation": "1. Precision = $\\frac{\\text{TP}}{\\text{TP} + \\text{FP}} = \\frac{90}{100} = 0.9000$.\n2. Recall = $\\frac{\\text{TP}}{\\text{TP} + \\text{FN}} = \\frac{90}{120} = 0.7500$.\n3. $F_1$-score = $2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}} = 0.8182$.",
    "hints": [
      "$F_1$ is harmonic mean of Precision and Recall: $2 P R / (P + R)$."
    ],
    "trapAlert": "Recall divides by actual positives ($\text{TP} + \text{FN}$), while precision divides by predicted positives ($\text{TP} + \text{FP}$).",
    "tags": [
      "Confusion Matrix",
      "F1 Score",
      "Precision and Recall"
    ]
  },
  {
    "id": "da-machine-learning-q03",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A binary machine learning classifier evaluates a test set producing: True Positives $\\text{TP} = 50$, False Positives $\\text{FP} = 50$, False Negatives $\\text{FN} = 0$, and True Negatives $\\text{TN} = 900$. Calculate the $F_1$-score of the classifier (rounded off to four decimal places).",
    "correctAnswer": {
      "exact": 0.67,
      "min": 0.66,
      "max": 0.68
    },
    "explanation": "1. Precision = $\\frac{\\text{TP}}{\\text{TP} + \\text{FP}} = \\frac{50}{100} = 0.5000$.\n2. Recall = $\\frac{\\text{TP}}{\\text{TP} + \\text{FN}} = \\frac{50}{50} = 1.0000$.\n3. $F_1$-score = $2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}} = 0.6667$.",
    "hints": [
      "$F_1$ is harmonic mean of Precision and Recall: $2 P R / (P + R)$."
    ],
    "trapAlert": "Recall divides by actual positives ($\text{TP} + \text{FN}$), while precision divides by predicted positives ($\text{TP} + \text{FP}$).",
    "tags": [
      "Confusion Matrix",
      "F1 Score",
      "Precision and Recall"
    ]
  },
  {
    "id": "da-machine-learning-q04",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A binary machine learning classifier evaluates a test set producing: True Positives $\\text{TP} = 75$, False Positives $\\text{FP} = 25$, False Negatives $\\text{FN} = 25$, and True Negatives $\\text{TN} = 875$. Calculate the $F_1$-score of the classifier (rounded off to four decimal places).",
    "correctAnswer": {
      "exact": 0.75,
      "min": 0.74,
      "max": 0.76
    },
    "explanation": "1. Precision = $\\frac{\\text{TP}}{\\text{TP} + \\text{FP}} = \\frac{75}{100} = 0.7500$.\n2. Recall = $\\frac{\\text{TP}}{\\text{TP} + \\text{FN}} = \\frac{75}{100} = 0.7500$.\n3. $F_1$-score = $2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}} = 0.75$.",
    "hints": [
      "$F_1$ is harmonic mean of Precision and Recall: $2 P R / (P + R)$."
    ],
    "trapAlert": "Recall divides by actual positives ($\text{TP} + \text{FN}$), while precision divides by predicted positives ($\text{TP} + \text{FP}$).",
    "tags": [
      "Confusion Matrix",
      "F1 Score",
      "Precision and Recall"
    ]
  },
  {
    "id": "da-machine-learning-q05",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (NAT)",
    "type": "NAT",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Medium",
    "text": "A binary machine learning classifier evaluates a test set producing: True Positives $\\text{TP} = 60$, False Positives $\\text{FP} = 40$, False Negatives $\\text{FN} = 20$, and True Negatives $\\text{TN} = 880$. Calculate the $F_1$-score of the classifier (rounded off to four decimal places).",
    "correctAnswer": {
      "exact": 0.67,
      "min": 0.66,
      "max": 0.68
    },
    "explanation": "1. Precision = $\\frac{\\text{TP}}{\\text{TP} + \\text{FP}} = \\frac{60}{100} = 0.6000$.\n2. Recall = $\\frac{\\text{TP}}{\\text{TP} + \\text{FN}} = \\frac{60}{80} = 0.7500$.\n3. $F_1$-score = $2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}} = 0.6667$.",
    "hints": [
      "$F_1$ is harmonic mean of Precision and Recall: $2 P R / (P + R)$."
    ],
    "trapAlert": "Recall divides by actual positives ($\text{TP} + \text{FN}$), while precision divides by predicted positives ($\text{TP} + \text{FP}$).",
    "tags": [
      "Confusion Matrix",
      "F1 Score",
      "Precision and Recall"
    ]
  },
  {
    "id": "da-machine-learning-q06",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 2,
    "negativeMarking": 0.66,
    "difficulty": "Medium",
    "text": "In Ordinary Least Squares (OLS) multiple linear regression with design matrix $X \\in \\mathbb{R}^{n \\times d}$ of full column rank and target vector $y \\in \\mathbb{R}^n$, the closed-form parameter estimate $\\hat{\\theta}$ that minimizes the sum of squared errors is:",
    "options": [
      {
        "id": "A",
        "text": "$\\hat{\\theta} = (X^T X)^{-1} X^T y$"
      },
      {
        "id": "B",
        "text": "$\\hat{\\theta} = (X X^T)^{-1} X y$"
      },
      {
        "id": "C",
        "text": "$\\hat{\\theta} = X^T (X X^T)^{-1} y$"
      },
      {
        "id": "D",
        "text": "$\\hat{\\theta} = X^{-1} y$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The objective is $J(\\theta) = \\|X\\theta - y\\|^2$. Setting the gradient with respect to $\\theta$ to zero gives the normal equations: $X^T X \\theta = X^T y$. Since $X$ has full column rank, $X^T X$ is invertible, giving $\\hat{\\theta} = (X^T X)^{-1} X^T y$.",
    "hints": [
      "Differentiate $\\|X\\theta - y\\|^2$ and set to zero."
    ],
    "trapAlert": "Matrix dimensions: $X^T X$ is $d \\times d$, whereas $X X^T$ is $n \\times n$.",
    "tags": [
      "Linear Regression",
      "OLS",
      "Normal Equations"
    ]
  },
  {
    "id": "da-machine-learning-q07",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (MSQ)",
    "type": "MSQ",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Hard",
    "text": "Which of the following statements comparing L1 (Lasso) and L2 (Ridge) regularization is/are TRUE? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "L1 regularization adds penalty $\\lambda \\sum |\\theta_i|$ and promotes sparse weight vectors by driving some coefficients exactly to zero."
      },
      {
        "id": "B",
        "text": "L2 regularization adds penalty $\\lambda \\sum \\theta_i^2$ and shrinks weights towards zero without typically setting them exactly to zero."
      },
      {
        "id": "C",
        "text": "Lasso can be used as an automatic feature selection mechanism."
      },
      {
        "id": "D",
        "text": "Ridge regression has no closed-form analytical solution."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C"
    ],
    "explanation": "L1 regularization (Lasso) uses diamond-shaped constraint contours that intersect coordinate axes, inducing exact sparsity (zero weights) which performs feature selection (Options A & C). Ridge uses spherical contours that decay weights continuously (Option B). Ridge DOES have a closed form solution: $\\hat{\\theta} = (X^T X + \\lambda I)^{-1} X^T y$, so Option D is false.",
    "hints": [
      "Geometric contour intuition: diamond corners for L1 vs circles for L2."
    ],
    "trapAlert": "Ridge has an exact analytical solution $(X^T X + \\lambda I)^{-1} X^T y$.",
    "tags": [
      "Regularization",
      "Ridge",
      "Lasso",
      "GATE MSQ"
    ]
  },
  {
    "id": "da-machine-learning-q08",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q09",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q10",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q11",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q12",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q13",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q14",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q15",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q16",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q17",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q18",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q19",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q20",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q21",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q22",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q23",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q24",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q25",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q26",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q27",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q28",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q29",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q30",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q31",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q32",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q33",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q34",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q35",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q36",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q37",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q38",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q39",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q40",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q41",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q42",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q43",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q44",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-machine-learning-q45",
    "paper": "DA",
    "subject": "Machine Learning",
    "topicId": "da-machine-learning",
    "topicTitle": "Supervised & Unsupervised Machine Learning",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In Logistic Regression, what is the output range of the standard sigmoid activation function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$?",
    "options": [
      {
        "id": "A",
        "text": "$(0, 1)$"
      },
      {
        "id": "B",
        "text": "$[-1, 1]$"
      },
      {
        "id": "C",
        "text": "$[0, \\infty)$"
      },
      {
        "id": "D",
        "text": "$(-\\infty, \\infty)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The sigmoid function $\\sigma(z) = \\frac{1}{1 + e^{-z}}$ maps the real line $(-\\infty, \\infty)$ onto the open interval $(0, 1)$, allowing the output to be interpreted as the posterior probability $P(y = 1 \\mid x)$.",
    "hints": [
      "Analyze limits as $z \\to \\infty$ and $z \\to -\\infty$."
    ],
    "trapAlert": "Sigmoid outputs strictly between 0 and 1, unlike tanh which outputs between -1 and 1.",
    "tags": [
      "Logistic Regression",
      "Sigmoid Function",
      "Probability"
    ]
  },
  {
    "id": "da-ai-search-logic-q01",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Curated Practice (MSQ)",
    "type": "MSQ",
    "marks": 2,
    "negativeMarking": 0,
    "difficulty": "Hard",
    "text": "In A* heuristic search with evaluation function $f(n) = g(n) + h(n)$, which of the following conditions is/are TRUE? (Select all that apply)",
    "options": [
      {
        "id": "A",
        "text": "A heuristic $h(n)$ is admissible if it never overestimates the true cost to reach the nearest goal ($h(n) \\le h^*(n)$)."
      },
      {
        "id": "B",
        "text": "Under tree search, admissibility of $h(n)$ is sufficient to guarantee that A* finds an optimal path."
      },
      {
        "id": "C",
        "text": "Under graph search, consistency (monotonicity: $h(n) \\le c(n, a, n') + h(n')$) guarantees optimality without reopening closed nodes."
      },
      {
        "id": "D",
        "text": "Every consistent heuristic is automatically admissible."
      }
    ],
    "correctAnswer": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "All four statements are foundational theorems in AI search: 1) Admissibility means $h(n) \\le h^*(n)$. 2) Admissibility guarantees optimality for Tree Search. 3) Consistency (triangle inequality) guarantees monotonic $f$-values along any path, ensuring optimal first arrival in Graph Search. 4) Every consistent heuristic with $h(Goal)=0$ is admissible.",
    "hints": [
      "Review admissibility ($h \\le h^*$) vs consistency (triangle inequality)."
    ],
    "trapAlert": "Consistency is a strictly stronger condition than admissibility.",
    "tags": [
      "A* Search",
      "Admissibility",
      "Heuristics",
      "GATE MSQ"
    ]
  },
  {
    "id": "da-ai-search-logic-q02",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In the Minimax algorithm with Alpha-Beta pruning, a branch is pruned when:",
    "options": [
      {
        "id": "A",
        "text": "$\\alpha \\ge \\beta$"
      },
      {
        "id": "B",
        "text": "$\\alpha < \\beta$"
      },
      {
        "id": "C",
        "text": "$\\alpha = 0$"
      },
      {
        "id": "D",
        "text": "$\\beta = \\infty$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "Alpha represents the lower bound (minimum score the maximizing player is assured of), while Beta represents the upper bound (maximum score the minimizing player will allow). Whenever $\\alpha \\ge \\beta$, the current node cannot influence the final minimax decision, allowing the rest of its subtree to be pruned.",
    "hints": [
      "Alpha is max's best; Beta is min's best."
    ],
    "trapAlert": "Pruning occurs when the interval $[\u0007lpha, \beta]$ collapses or inverts ($\u0007lpha \\ge \beta$).",
    "tags": [
      "Alpha-Beta Pruning",
      "Adversarial Search",
      "Minimax"
    ]
  },
  {
    "id": "da-ai-search-logic-q03",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In propositional logic, the implication $P \\implies Q$ is logically equivalent to:",
    "options": [
      {
        "id": "A",
        "text": "$\\neg P \\lor Q$"
      },
      {
        "id": "B",
        "text": "$\\neg Q \\implies \\neg P$ (Contrapositive)"
      },
      {
        "id": "C",
        "text": "$P \\land \\neg Q$"
      },
      {
        "id": "D",
        "text": "Both A and B"
      }
    ],
    "correctAnswer": "D",
    "explanation": "$P \\implies Q$ is false only when $P$ is True and $Q$ is False. Hence it is equivalent to $\\neg P \\lor Q$. By contraposition, it is also equivalent to $\\neg Q \\implies \\neg P$. Both (A) and (B) are logically equivalent.",
    "hints": [
      "Construct truth tables for implication and contrapositive."
    ],
    "trapAlert": "Implication is true whenever the premise $P$ is false.",
    "tags": [
      "Propositional Logic",
      "Implication",
      "Logical Equivalence"
    ]
  },
  {
    "id": "da-ai-search-logic-q04",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case space complexity of Breadth-First Search (BFS) on a tree with branching factor $b$ and maximum depth $m$ (solution at depth $d$)?",
    "options": [
      {
        "id": "A",
        "text": "$O(b^d)$"
      },
      {
        "id": "B",
        "text": "$O(b m)$"
      },
      {
        "id": "C",
        "text": "$O(b d)$"
      },
      {
        "id": "D",
        "text": "$O(1)$"
      }
    ],
    "correctAnswer": "A",
    "explanation": "BFS must keep all frontier nodes in memory: $O(b^d)$",
    "hints": [
      "Consider whether search keeps the entire tree level or only the current branch in memory."
    ],
    "trapAlert": "BFS suffers from exponential memory consumption, whereas DFS and IDS use linear memory.",
    "tags": [
      "Search Algorithms",
      "Space Complexity",
      "AI"
    ]
  },
  {
    "id": "da-ai-search-logic-q05",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case space complexity of Depth-First Search (DFS) on a tree with branching factor $b$ and maximum depth $m$ (solution at depth $d$)?",
    "options": [
      {
        "id": "A",
        "text": "$O(b^d)$"
      },
      {
        "id": "B",
        "text": "$O(b m)$"
      },
      {
        "id": "C",
        "text": "$O(b d)$"
      },
      {
        "id": "D",
        "text": "$O(1)$"
      }
    ],
    "correctAnswer": "B",
    "explanation": "DFS only needs to store single path from root to current node: $O(bm)$",
    "hints": [
      "Consider whether search keeps the entire tree level or only the current branch in memory."
    ],
    "trapAlert": "BFS suffers from exponential memory consumption, whereas DFS and IDS use linear memory.",
    "tags": [
      "Search Algorithms",
      "Space Complexity",
      "AI"
    ]
  },
  {
    "id": "da-ai-search-logic-q06",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "What is the worst-case space complexity of Iterative Deepening Search (IDS) on a tree with branching factor $b$ and maximum depth $m$ (solution at depth $d$)?",
    "options": [
      {
        "id": "A",
        "text": "$O(b^d)$"
      },
      {
        "id": "B",
        "text": "$O(b m)$"
      },
      {
        "id": "C",
        "text": "$O(b d)$"
      },
      {
        "id": "D",
        "text": "$O(1)$"
      }
    ],
    "correctAnswer": "C",
    "explanation": "IDS combines BFS optimality with DFS linear space: $O(bd)$",
    "hints": [
      "Consider whether search keeps the entire tree level or only the current branch in memory."
    ],
    "trapAlert": "BFS suffers from exponential memory consumption, whereas DFS and IDS use linear memory.",
    "tags": [
      "Search Algorithms",
      "Space Complexity",
      "AI"
    ]
  },
  {
    "id": "da-ai-search-logic-q07",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q08",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q09",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q10",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q11",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q12",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q13",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q14",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q15",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q16",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q17",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q18",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q19",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q20",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q21",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q22",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q23",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q24",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q25",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q26",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q27",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q28",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q29",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q30",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q31",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q32",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q33",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q34",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q35",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q36",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q37",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q38",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q39",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q40",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q41",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q42",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q43",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q44",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  },
  {
    "id": "da-ai-search-logic-q45",
    "paper": "DA",
    "subject": "Artificial Intelligence",
    "topicId": "da-ai-search-logic",
    "topicTitle": "AI Heuristic Search, Adversarial Search & Logic",
    "provenance": "author_practice",
    "provenanceLabel": "GATE 2027 DA Practice",
    "type": "MCQ",
    "marks": 1,
    "negativeMarking": 0.33,
    "difficulty": "Medium",
    "text": "In automated theorem proving and resolution in propositional logic, the resolution inference rule takes clauses $(A \\lor B)$ and $(\\neg B \\lor C)$ and derives:",
    "options": [
      {
        "id": "A",
        "text": "$A \\lor C$ (the resolvent)"
      },
      {
        "id": "B",
        "text": "$A \\land C$"
      },
      {
        "id": "C",
        "text": "$B \\lor \\neg B$"
      },
      {
        "id": "D",
        "text": "Empty clause directly"
      }
    ],
    "correctAnswer": "A",
    "explanation": "The resolution rule cancels complementary literals $B$ and $\\neg B$: from $(A \\lor B)$ and $(\\neg B \\lor C)$, it derives the resolvent $(A \\lor C)$. This is sound and refutation-complete for CNF clauses.",
    "hints": [
      "Complementary literals cancel out."
    ],
    "trapAlert": "Resolution yields the disjunction of the remaining literals.",
    "tags": [
      "Resolution",
      "Theorem Proving",
      "Inference"
    ]
  }
];
