# -*- coding: utf-8 -*-
"""Combines all 15 comprehensive notes into src/data/topicNotesData.ts"""

import sys
import os
import json

sys.path.insert(0, os.path.dirname(__file__))

from ra_notes import get_ra_notes
from da_notes import get_da_notes

all_notes = {}
all_notes.update(get_ra_notes())
all_notes.update(get_da_notes())

print(f"Total notes assembled: {len(all_notes)} / 15 syllabus nodes")
assert len(all_notes) == 15, f"Expected 15 nodes, got {len(all_notes)}"

# Format as TypeScript module
ts_output = """import { StructuredUserNote } from '../types';

export interface InteractiveCheckQuestion {
  question: string;
  options: { id: string; text: string; isCorrect: boolean; feedback: string }[];
  hint: string;
}

export interface DetailedTopicContent extends StructuredUserNote {
  codeSnippet?: {
    language: string;
    title: string;
    code: string;
  };
  interactiveQuiz?: InteractiveCheckQuestion;
}

export const DETAILED_TOPIC_NOTES: Record<string, DetailedTopicContent> = """

ts_output += json.dumps(all_notes, indent=2) + ";\n"

target_path = os.path.join(os.path.dirname(__file__), "..", "..", "src", "data", "topicNotesData.ts")
with open(target_path, "w", encoding="utf-8") as f:
    f.write(ts_output)

print(f"Successfully wrote exhaustive notes to {target_path}")
