import sys
import os
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

import unittest
from backend.scoring import validate_gate_answer, calculate_topic_mastery, calculate_sm2_spaced_review
from backend.database import get_db_connection

class TestFastApiBackend(unittest.TestCase):
    def test_database_connection(self):
        conn = get_db_connection()
        count = conn.execute("SELECT COUNT(*) as count FROM syllabus_nodes").fetchone()["count"]
        self.assertGreater(count, 0)
        conn.close()

    def test_gate_mcq_scoring(self):
        # 1-mark correct
        res1 = validate_gate_answer("MCQ", 1, 0.33, "A", "A")
        self.assertTrue(res1["is_correct"])
        self.assertEqual(res1["marks_awarded"], 1.0)

        # 1-mark wrong
        res2 = validate_gate_answer("MCQ", 1, 0.33, "A", "B")
        self.assertFalse(res2["is_correct"])
        self.assertEqual(res2["marks_awarded"], -0.33)

        # 2-mark wrong
        res3 = validate_gate_answer("MCQ", 2, 0.66, "C", "D")
        self.assertFalse(res3["is_correct"])
        self.assertEqual(res3["marks_awarded"], -0.66)

    def test_gate_msq_scoring(self):
        # exact match
        res = validate_gate_answer("MSQ", 2, 0.0, ["A", "D"], ["D", "A"])
        self.assertTrue(res["is_correct"])
        self.assertEqual(res["marks_awarded"], 2.0)

        # partial or wrong option
        res_wrong = validate_gate_answer("MSQ", 2, 0.0, ["A", "D"], ["A", "B"])
        self.assertFalse(res_wrong["is_correct"])
        self.assertEqual(res_wrong["marks_awarded"], 0.0)

    def test_gate_nat_scoring(self):
        # range
        res = validate_gate_answer("NAT", 2, 0.0, {"min": 42.0, "max": 42.8}, 42.4)
        self.assertTrue(res["is_correct"])
        self.assertEqual(res["marks_awarded"], 2.0)

        res_wrong = validate_gate_answer("NAT", 2, 0.0, {"min": 42.0, "max": 42.8}, 50.0)
        self.assertFalse(res_wrong["is_correct"])
        self.assertEqual(res_wrong["marks_awarded"], 0.0)

    def test_topic_mastery(self):
        m = calculate_topic_mastery(10, 9, 0, 2)
        self.assertGreaterEqual(m["mastery_score"], 80)
        self.assertEqual(m["confidence"], "High")

    def test_sm2_spaced_repetition(self):
        sm = calculate_sm2_spaced_review(4, 0, 1, 2.5)
        self.assertEqual(sm["interval"], 1)
        self.assertEqual(sm["repetitions"], 1)

if __name__ == "__main__":
    unittest.main()
