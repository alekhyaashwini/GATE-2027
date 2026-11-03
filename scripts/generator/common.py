# -*- coding: utf-8 -*-
"""Common helpers for GATE question bank generation"""

def make_mcq(tid, num, paper, subject, title, text, options, ans, exp, hints=None, trap=None, tags=None, marks=2, diff="Medium"):
    neg = 0.66 if marks == 2 else 0.33
    return {
        "id": f"{tid}-q{num:02d}",
        "paper": paper,
        "subject": subject,
        "topicId": tid,
        "topicTitle": title,
        "provenance": "author_practice",
        "provenanceLabel": f"GATE 2027 {paper} Practice",
        "type": "MCQ",
        "marks": marks,
        "negativeMarking": neg,
        "difficulty": diff,
        "text": text,
        "options": [{"id": k, "text": v} for k, v in options.items()],
        "correctAnswer": ans,
        "explanation": exp,
        "hints": hints or ["Break down the formula step by step.", "Check given boundary conditions."],
        "trapAlert": trap or "Watch out for unit mismatch and sign inversion.",
        "tags": tags or [title, "GATE 2027"]
    }

def make_msq(tid, num, paper, subject, title, text, options, ans_list, exp, hints=None, trap=None, tags=None, marks=2, diff="Hard"):
    return {
        "id": f"{tid}-q{num:02d}",
        "paper": paper,
        "subject": subject,
        "topicId": tid,
        "topicTitle": title,
        "provenance": "author_practice",
        "provenanceLabel": f"GATE 2027 {paper} Curated Practice (MSQ)",
        "type": "MSQ",
        "marks": marks,
        "negativeMarking": 0,
        "difficulty": diff,
        "text": text,
        "options": [{"id": k, "text": v} for k, v in options.items()],
        "correctAnswer": ans_list,
        "explanation": exp,
        "hints": hints or ["Multiple options may be correct. Check each statement independently."],
        "trapAlert": trap or "In MSQ, zero partial marks are awarded. All correct choices must be selected with no incorrect choices.",
        "tags": tags or [title, "MSQ", "GATE 2027"]
    }

def make_nat(tid, num, paper, subject, title, text, exact, exp, hints=None, trap=None, tags=None, marks=2, tol=0.1, diff="Medium"):
    val = round(float(exact), 2)
    return {
        "id": f"{tid}-q{num:02d}",
        "paper": paper,
        "subject": subject,
        "topicId": tid,
        "topicTitle": title,
        "provenance": "author_practice",
        "provenanceLabel": f"GATE 2027 {paper} Curated Practice (NAT)",
        "type": "NAT",
        "marks": marks,
        "negativeMarking": 0,
        "difficulty": diff,
        "text": text,
        "correctAnswer": {
            "exact": val,
            "min": round(val - tol, 2),
            "max": round(val + tol, 2)
        },
        "explanation": exp,
        "hints": hints or ["Perform exact calculation and round to the specified decimal places."],
        "trapAlert": trap or "Numerical Answer Types have zero negative marking. Ensure your rounding follows GATE virtual calculator precision.",
        "tags": tags or [title, "NAT", "GATE 2027"]
    }
