# -*- coding: utf-8 -*-
"""
Combines all generated questions into:
1. src/data/expandedQuestionBank.ts
2. Updates src/data/questionBank.ts
3. Updates SQLite database gate_quest_2027.db
"""

import sys
import os
import json
import sqlite3

sys.path.insert(0, os.path.dirname(__file__))

from gen_ra_math import generate_ra_math
from gen_ra_robotics import generate_ra_robotics
from gen_ra_automation import generate_ra_automation
from gen_da_math import generate_da_math
from gen_da_cs import generate_da_cs

print("Generating question sets across all 15 syllabus nodes...")
all_qs = []
all_qs.extend(generate_ra_math())
all_qs.extend(generate_ra_robotics())
all_qs.extend(generate_ra_automation())
all_qs.extend(generate_da_math())
all_qs.extend(generate_da_cs())

print(f"Total generated questions: {len(all_qs)}")

# Verify counts per topic
counts = {}
for q in all_qs:
    tid = q["topicId"]
    counts[tid] = counts.get(tid, 0) + 1

print("\n--- Question Counts Per Topic ---")
for tid, c in sorted(counts.items()):
    print(f"  {tid:40s}: {c} questions")

# Check if every topic has at least 45 questions
for tid, c in counts.items():
    assert c >= 45, f"Topic {tid} has only {c} questions! Expected at least 45."

print("\nAll 15 topics have at least 45 questions! Writing TypeScript file...")

# Write to src/data/expandedQuestionBank.ts
ts_content = """import { Question } from '../types';

export const EXPANDED_QUESTION_BANK: Question[] = """

ts_content += json.dumps(all_qs, indent=2) + ";\n"

output_path = os.path.join(os.path.dirname(__file__), "..", "..", "src", "data", "expandedQuestionBank.ts")
with open(output_path, "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully wrote {output_path}")

# Now update SQLite database gate_quest_2027.db
db_path = os.path.join(os.path.dirname(__file__), "..", "..", "gate_quest_2027.db")
if os.path.exists(db_path):
    print("Updating SQLite database questions table...")
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()
    
    # Insert or replace all questions
    for q in all_qs:
        opts_json = json.dumps(q.get("options")) if q.get("options") else None
        
        # Handle correct answer formatting
        ans = q["correctAnswer"]
        if isinstance(ans, dict):
            ca_str = json.dumps(ans)
        elif isinstance(ans, list):
            ca_str = json.dumps(ans)
        else:
            ca_str = str(ans)
            
        hints_json = json.dumps(q.get("hints", []))
        tags_json = json.dumps(q.get("tags", []))
        
        cur.execute("""
            INSERT OR REPLACE INTO questions (
                id, paper, subject, topic_id, topic_title, year, provenance, provenance_label,
                original_paper, type, marks, negative_marking, difficulty, text, options,
                correct_answer, explanation, hints, trap_alert, tags
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            q["id"],
            q["paper"],
            q["subject"],
            q["topicId"],
            q["topicTitle"],
            q.get("year", 2027),
            q.get("provenance", "author_practice"),
            q.get("provenanceLabel", "GATE 2027 Practice"),
            q.get("originalPaper"),
            q["type"],
            q["marks"],
            q["negativeMarking"],
            q["difficulty"],
            q["text"],
            opts_json,
            ca_str,
            q["explanation"],
            hints_json,
            q.get("trapAlert"),
            tags_json
        ))
        
    conn.commit()
    cur.execute("SELECT COUNT(*) FROM questions")
    total_db = cur.fetchone()[0]
    print(f"Total questions in SQLite database: {total_db}")
    conn.close()

print("Build complete!")
