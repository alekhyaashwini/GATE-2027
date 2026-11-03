import math
import datetime
from typing import Any, Dict, List, Optional, Union

def validate_gate_answer(
    q_type: str,
    marks: int,
    negative_marking: float,
    correct_answer: Any,
    user_response: Any,
    hints_used: int = 0
) -> Dict[str, Any]:
    """
    Validates a student's answer according to official GATE exam rules:
    - MCQ: Single option match. Negative marking applied on wrong (-0.33 for 1 mark, -0.66 for 2 mark).
    - MSQ: Multiple select. All correct options must be selected, no wrong options. 0 negative marks.
    - NAT: Numerical Answer Type. Value must be within [min, max] or exact tolerance. 0 negative marks.
    - Unattempted: 0 marks.
    """
    if user_response is None or user_response == "":
        return {
            "is_correct": False,
            "marks_awarded": 0.0,
            "user_response": user_response,
            "explanation": "Unattempted question."
        }

    is_correct = False
    clean_type = q_type.upper()

    if clean_type == "MCQ":
        is_correct = (str(correct_answer).strip().upper() == str(user_response).strip().upper())
    
    elif clean_type == "MSQ":
        correct_set = set(correct_answer) if isinstance(correct_answer, list) else {str(correct_answer)}
        user_set = set(user_response) if isinstance(user_response, list) else {str(user_response)}
        # normalize to uppercase strings
        correct_set = {str(s).strip().upper() for s in correct_set}
        user_set = {str(s).strip().upper() for s in user_set}
        is_correct = (correct_set == user_set)

    elif clean_type == "NAT":
        try:
            user_val = float(user_response)
            if isinstance(correct_answer, (int, float)):
                is_correct = abs(user_val - float(correct_answer)) <= 0.05
            elif isinstance(correct_answer, dict):
                min_val = correct_answer.get("min", correct_answer.get("exact"))
                max_val = correct_answer.get("max", correct_answer.get("exact"))
                is_correct = (min_val - 0.01 <= user_val <= max_val + 0.01)
            else:
                is_correct = abs(user_val - float(correct_answer)) <= 0.05
        except (ValueError, TypeError):
            return {
                "is_correct": False,
                "marks_awarded": 0.0,
                "user_response": user_response,
                "explanation": "Invalid numerical input."
            }

    marks_awarded = 0.0
    if is_correct:
        marks_awarded = float(marks)
    else:
        if clean_type == "MCQ":
            marks_awarded = -abs(negative_marking if negative_marking else (0.66 if marks == 2 else 0.33))
        else:
            marks_awarded = 0.0

    return {
        "is_correct": is_correct,
        "marks_awarded": round(marks_awarded, 2),
        "user_response": user_response,
        "explanation": "Correct answer!" if is_correct else "Incorrect answer."
    }

def calculate_topic_mastery(
    practiced_count: int,
    correct_count: int,
    mistakes_unresolved: int = 0,
    revised_count: int = 0
) -> Dict[str, Any]:
    """
    Multi-Signal Topic Mastery Calculation Engine (Section 13)
    Signals:
    1. Accuracy rate on topic questions (0 - 100)
    2. Sample size / diversity penalty
    3. Independent attempts
    4. Mistake resolution / delayed recall
    """
    if practiced_count == 0:
        return {
            "mastery_score": 0,
            "confidence": "Low",
            "reason": "No questions attempted yet for this syllabus node."
        }

    raw_accuracy = (correct_count / practiced_count) * 100.0

    if practiced_count >= 8:
        sample_size_factor = 1.0
        confidence = "High"
    elif practiced_count >= 4:
        sample_size_factor = 0.8
        confidence = "Medium"
    elif practiced_count >= 2:
        sample_size_factor = 0.6
        confidence = "Low"
    else:
        sample_size_factor = 0.4
        confidence = "Low"

    mistake_penalty = min(25, mistakes_unresolved * 5)
    revision_bonus = min(10, revised_count * 3)

    final_score = round((raw_accuracy * sample_size_factor) - mistake_penalty + revision_bonus)
    final_score = max(0, min(100, final_score))

    if practiced_count < 3 and final_score > 65:
        final_score = 65

    reason = f"Accuracy: {round(raw_accuracy)}% ({correct_count}/{practiced_count} solved). "
    if practiced_count < 4:
        reason += f"Sample size is limited ({practiced_count} Qs). Solve more questions to solidify mastery."
    elif mistakes_unresolved > 0:
        reason += f"{mistakes_unresolved} active mistake(s) pending review in Mistake Notebook."
    else:
        reason += "Strong mastery confirmed with verified independent attempts."

    return {
        "mastery_score": final_score,
        "confidence": confidence,
        "reason": reason
    }

def calculate_sm2_spaced_review(
    quality: int,
    repetitions: int,
    interval: int,
    ease_factor: float
) -> Dict[str, Any]:
    """
    SuperMemo SM-2 Spaced Repetition calculation
    Quality: 0 (blackout) to 5 (perfect recall)
    """
    if quality >= 3:
        if repetitions == 0:
            interval = 1
        elif repetitions == 1:
            interval = 3
        elif repetitions == 2:
            interval = 7
        else:
            interval = round(interval * ease_factor)
        repetitions += 1
    else:
        repetitions = 0
        interval = 1

    ease_factor = ease_factor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    if ease_factor < 1.3:
        ease_factor = 1.3

    next_date = datetime.date.today() + datetime.timedelta(days=interval)

    return {
        "interval": interval,
        "repetitions": repetitions,
        "ease_factor": round(ease_factor, 2),
        "next_date_str": next_date.isoformat()
    }

def analyze_time_bleed(
    questions: List[Dict[str, Any]],
    time_spent_map: Dict[str, int],
    validation_results: Dict[str, Dict[str, Any]]
) -> Dict[str, Any]:
    """
    Time Bleed & Pacing Analysis Engine (Section 8.5)
    """
    time_bleed_qs = []
    rushed_guesses = []
    total_time = 0
    total_marks_awarded = 0.0

    for q in questions:
        qid = q.get("id")
        marks = q.get("marks", 1)
        t_spent = time_spent_map.get(qid, 0)
        res = validation_results.get(qid, {"is_correct": False, "marks_awarded": 0.0})
        
        total_time += t_spent
        if res.get("marks_awarded", 0) > 0:
            total_marks_awarded += res["marks_awarded"]

        budget = 100 if marks == 1 else 180
        threshold = 180 if marks == 1 else 300

        if t_spent > threshold:
            time_bleed_qs.append({
                "question_id": qid,
                "marks": marks,
                "time_spent_seconds": t_spent,
                "recommended_seconds": budget,
                "is_correct": res.get("is_correct", False),
                "excess_seconds": t_spent - budget
            })

        if 0 < t_spent < 15 and not res.get("is_correct", False) and res.get("marks_awarded", 0) < 0:
            rushed_guesses.append({
                "question_id": qid,
                "time_spent_seconds": t_spent,
                "marks_lost": abs(res.get("marks_awarded", 0))
            })

    avg_secs_per_mark = round(total_time / total_marks_awarded, 1) if total_marks_awarded > 0 else total_time
    pacing_score = max(20, min(100, 100 - len(time_bleed_qs) * 12 - len(rushed_guesses) * 15))

    advice = "Pacing is balanced across questions."
    if len(time_bleed_qs) >= 3:
        advice = f"High time bleed detected on {len(time_bleed_qs)} questions. Practice abandoning blocked questions within 2.5 minutes."
    elif len(rushed_guesses) >= 2:
        advice = f"Detected {len(rushed_guesses)} rushed guesses under 15 seconds that incurred negative marking."

    return {
        "time_bleed_count": len(time_bleed_qs),
        "rushed_guess_count": len(rushed_guesses),
        "time_bleed_questions": time_bleed_qs,
        "rushed_guess_questions": rushed_guesses,
        "average_seconds_per_mark": avg_secs_per_mark,
        "pacing_score": pacing_score,
        "pacing_advice": advice
    }

def calculate_projected_gate_rank(raw_marks: float, paper: str = "RA") -> Dict[str, Any]:
    """
    Projected GATE Score & All India Rank (AIR) Engine (Section 8.12)
    """
    marks = max(0.0, min(100.0, float(raw_marks)))
    Mq, Mt = 28.0, 76.0
    Sq, St = 350, 900

    if marks >= Mq:
        gate_score = round(Sq + (St - Sq) * ((marks - Mq) / (Mt - Mq)))
    else:
        gate_score = round(100 + (Sq - 100) * (marks / Mq))
    gate_score = max(100, min(1000, gate_score))

    if marks >= 78:
        bracket, pct, status = "AIR 1 – 15", 99.9, "Qualified"
        opps = ["IISc Bangalore M.Tech (AI & Robotics)", "IIT Bombay / Delhi Direct Admission", "Top PSUs (ONGC, IOCL, BARC)"]
        tip = "Focus on zero-defect arithmetic in NAT questions."
    elif marks >= 68:
        bracket, pct, status = "AIR 16 – 75", 99.4, "Qualified"
        opps = ["Top IITs M.Tech (RA / AI)", "IIT Kanpur Robotics Specializations"]
        tip = "Converting 1-2 skipped questions will lock AIR < 30."
    elif marks >= 58:
        bracket, pct, status = "AIR 76 – 250", 98.2, "Qualified"
        opps = ["IIT Roorkee / IIT Guwahati / IIT Hyderabad", "Top NITs (Trichy, Surathkal)"]
        tip = "Eliminate MCQ negative marking guesses to push into Top 50."
    elif marks >= 48:
        bracket, pct, status = "AIR 251 – 700", 95.0, "Qualified"
        opps = ["Newer IITs (IIT Gandhinagar, Mandi)", "Top NITs & IIITs"]
        tip = "Master core Part A Engineering Mathematics to gain 10-15 easy marks."
    elif marks >= 28:
        bracket, pct, status = "AIR 701 – 2500", 88.0, "Qualified"
        opps = ["State Universities, BITS HD, PhD Exemptions"]
        tip = "Solidify core concepts before attempting speed mocks."
    else:
        bracket, pct, status = "AIR > 6000", 60.0, "Below Cutoff"
        opps = ["Preparation Phase"]
        tip = "Focus on Linear Algebra, Transducers, and Kinematics basics first."

    return {
        "raw_marks_out_of_100": round(marks, 2),
        "projected_gate_score": gate_score,
        "projected_air_bracket": bracket,
        "projected_percentile": pct,
        "qualification_status": status,
        "target_opportunities": opps,
        "tactical_tip": tip
    }
