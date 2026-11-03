# -*- coding: utf-8 -*-
"""
GATE Quest 2027 Question Bank Generator
Generates 45 high-yield, exam-grade questions for each of the 15 syllabus nodes (675 questions total).
Includes 1-mark MCQs, 2-mark MCQs, MSQs (Multiple Select), and NATs (Numerical Answer Type)
with complete mathematical derivations, KaTeX formulas, GATE traps, and hints.
"""

import json
import math
import os

topics = [
    {"id": "ra-math-la", "paper": "RA", "subject": "Engineering Mathematics", "title": "Linear Algebra"},
    {"id": "ra-math-calc-de", "paper": "RA", "subject": "Engineering Mathematics", "title": "Calculus, Differential Equations & Numerical Methods"},
    {"id": "ra-mechatronics-circuits-sensors", "paper": "RA", "subject": "Basics of Mechatronics", "title": "Sensors, Actuators & Digital Circuits"},
    {"id": "ra-robotics-kinematics-transforms", "paper": "RA", "subject": "Principles of Robotics & Automation", "title": "Robot Kinematics & Coordinate Transformations"},
    {"id": "ra-robotics-dynamics-path-endeffectors", "paper": "RA", "subject": "Principles of Robotics & Automation", "title": "Robot Trajectory, End-Effectors & Repeatability"},
    {"id": "ra-cim-plc-automation", "paper": "RA", "subject": "Principles of Robotics & Automation", "title": "CIM, PLC, CNC & Workcells"},
    {"id": "ra-b1-control-systems", "paper": "RA", "subject": "Engineering Common & Control", "title": "Control Systems & PID"},
    {"id": "ra-b2-mechanics-materials", "paper": "RA", "subject": "Engineering Common & Mechanics", "title": "Mechanics of Materials"},
    {"id": "da-prob-stats", "paper": "DA", "subject": "Probability & Statistics", "title": "Probability & Statistics"},
    {"id": "da-linear-algebra", "paper": "DA", "subject": "Linear Algebra", "title": "Linear Algebra, SVD & PCA"},
    {"id": "da-calc-opt", "paper": "DA", "subject": "Calculus & Optimization", "title": "Calculus & Convex Optimization"},
    {"id": "da-prog-dsa", "paper": "DA", "subject": "Programming & Data Structures", "title": "Programming, Python, Data Structures & Algorithms"},
    {"id": "da-dbms", "paper": "DA", "subject": "Database Management Systems", "title": "Database Management Systems & SQL"},
    {"id": "da-machine-learning", "paper": "DA", "subject": "Machine Learning", "title": "Supervised & Unsupervised Machine Learning"},
    {"id": "da-ai-search-logic", "paper": "DA", "subject": "Artificial Intelligence", "title": "AI Heuristic Search, Adversarial Search & Logic"},
]

all_questions = []

def make_mcq(tid, num, paper, subject, title, text, options, ans, exp, hints, trap, tags, marks=2, diff="Medium"):
    neg = 0.66 if marks == 2 else 0.33
    return {
        "id": f"{tid}-q{num:02d}",
        "paper": paper,
        "subject": subject,
        "topicId": tid,
        "topicTitle": title,
        "provenance": "author_practice",
        "provenanceLabel": "GATE 2027 Curated Practice",
        "type": "MCQ",
        "marks": marks,
        "negativeMarking": neg,
        "difficulty": diff,
        "text": text,
        "options": [{"id": k, "text": v} for k, v in options.items()],
        "correctAnswer": ans,
        "explanation": exp,
        "hints": hints,
        "trapAlert": trap,
        "tags": tags
    }

def make_msq(tid, num, paper, subject, title, text, options, ans_list, exp, hints, trap, tags, marks=2, diff="Hard"):
    return {
        "id": f"{tid}-q{num:02d}",
        "paper": paper,
        "subject": subject,
        "topicId": tid,
        "topicTitle": title,
        "provenance": "author_practice",
        "provenanceLabel": "GATE 2027 Curated Practice (MSQ)",
        "type": "MSQ",
        "marks": marks,
        "negativeMarking": 0,
        "difficulty": diff,
        "text": text,
        "options": [{"id": k, "text": v} for k, v in options.items()],
        "correctAnswer": ans_list,
        "explanation": exp,
        "hints": hints,
        "trapAlert": trap,
        "tags": tags
    }

def make_nat(tid, num, paper, subject, title, text, exact, exp, hints, trap, tags, marks=2, tol=0.1, diff="Medium"):
    val = round(float(exact), 3)
    return {
        "id": f"{tid}-q{num:02d}",
        "paper": paper,
        "subject": subject,
        "topicId": tid,
        "topicTitle": title,
        "provenance": "author_practice",
        "provenanceLabel": "GATE 2027 Curated Practice (NAT)",
        "type": "NAT",
        "marks": marks,
        "negativeMarking": 0,
        "difficulty": diff,
        "text": text,
        "correctAnswer": {
            "exact": val,
            "min": round(val - tol, 3),
            "max": round(val + tol, 3)
        },
        "explanation": exp,
        "hints": hints,
        "trapAlert": trap,
        "tags": tags
    }

print("Generator functions defined.")
