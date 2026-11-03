import json
import datetime
from fastapi import FastAPI, HTTPException, Depends, Query, Response
from fastapi.middleware.cors import CORSMiddleware
import sqlite3

from backend.database import get_db, get_db_connection
from backend.models import (
    ValidationRequest,
    StructuredUserNoteModel,
    MistakeLogRequest,
    MistakeUpdateRequest,
    RevisionReviewRequest,
    GenerateRevisionCardRequest,
    TestAttemptStartRequest,
    TestAnswerAutosaveRequest,
    TestAttemptCompleteRequest,
    ProgressTopicUpdateRequest,
    ActivityLogRequest,
    XpRewardRequest,
    ExamTargetUpdateRequest,
)
from backend.scoring import validate_gate_answer, calculate_topic_mastery, calculate_sm2_spaced_review

app = FastAPI(
    title="GATE Quest 2027 API",
    description="Backend API for GATE Quest 2027 gamified learning platform for Robotics & Automation (RA) and Data Science & AI (DA)",
    version="1.1"
)

# Enable CORS for local Vite dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------------------------------------------------------------
# 1. Syllabus & Tracker (Section 8.1)
# -------------------------------------------------------------
@app.get("/api/syllabus")
def list_syllabus(
    paper: str = Query(None),
    section: str = Query(None),
    weightage: str = Query(None),
    search: str = Query(None),
    conn: sqlite3.Connection = Depends(get_db)
):
    query = "SELECT * FROM syllabus_nodes WHERE 1=1"
    params = []
    if paper:
        query += " AND paper = ?"
        params.append(paper.upper())
    if section:
        query += " AND section LIKE ?"
        params.append(f"%{section}%")
    if weightage:
        query += " AND weightage = ?"
        params.append(weightage)
    if search:
        query += " AND (topic LIKE ? OR description LIKE ? OR subtopics LIKE ?)"
        term = f"%{search}%"
        params.extend([term, term, term])

    query += " ORDER BY order_index ASC"
    rows = conn.execute(query, params).fetchall()

    results = []
    for r in rows:
        results.append({
            "id": r["id"],
            "paper": r["paper"],
            "section": r["section"],
            "subject": r["subject"],
            "topic": r["topic"],
            "subtopics": json.loads(r["subtopics"] or "[]"),
            "description": r["description"],
            "prerequisites": json.loads(r["prerequisites"] or "[]"),
            "overlapTags": json.loads(r["overlap_tags"] or "[]"),
            "weightage": r["weightage"],
            "keyFormulas": json.loads(r["key_formulas"] or "[]"),
            "externalResources": json.loads(r["external_resources"] or "[]"),
            "orderIndex": r["order_index"]
        })
    return {"success": True, "count": len(results), "data": results}

@app.get("/api/syllabus/{topic_id}")
def get_syllabus_node(topic_id: str, conn: sqlite3.Connection = Depends(get_db)):
    r = conn.execute("SELECT * FROM syllabus_nodes WHERE id = ?", (topic_id,)).fetchone()
    if not r:
        raise HTTPException(status_code=404, detail="Syllabus node not found")

    progress = conn.execute("SELECT * FROM topic_progress WHERE topic_id = ?", (topic_id,)).fetchone()
    note = conn.execute("SELECT * FROM user_notes WHERE topic_id = ?", (topic_id,)).fetchone()
    q_count = conn.execute("SELECT COUNT(*) as count FROM questions WHERE topic_id = ?", (topic_id,)).fetchone()["count"]

    return {
        "success": True,
        "data": {
            "id": r["id"],
            "paper": r["paper"],
            "section": r["section"],
            "subject": r["subject"],
            "topic": r["topic"],
            "subtopics": json.loads(r["subtopics"] or "[]"),
            "description": r["description"],
            "prerequisites": json.loads(r["prerequisites"] or "[]"),
            "overlapTags": json.loads(r["overlap_tags"] or "[]"),
            "weightage": r["weightage"],
            "keyFormulas": json.loads(r["key_formulas"] or "[]"),
            "externalResources": json.loads(r["external_resources"] or "[]"),
            "progress": dict(progress) if progress else {"studied": False, "masteryScore": 0, "confidence": "Low"},
            "hasNote": bool(note),
            "questionCount": q_count
        }
    }

# -------------------------------------------------------------
# 2. Question Bank & Answer Validation (Sections 8.3 & 8.4)
# -------------------------------------------------------------
@app.get("/api/questions")
def list_questions(
    paper: str = Query(None),
    topicId: str = Query(None),
    type: str = Query(None),
    difficulty: str = Query(None),
    provenance: str = Query(None),
    search: str = Query(None),
    limit: int = 50,
    offset: int = 0,
    conn: sqlite3.Connection = Depends(get_db)
):
    query = "SELECT * FROM questions WHERE 1=1"
    params = []
    if paper:
        query += " AND paper = ?"
        params.append(paper.upper())
    if topicId:
        query += " AND topic_id = ?"
        params.append(topicId)
    if type:
        query += " AND type = ?"
        params.append(type.upper())
    if difficulty:
        query += " AND difficulty = ?"
        params.append(difficulty)
    if provenance:
        query += " AND provenance = ?"
        params.append(provenance)
    if search:
        query += " AND (text LIKE ? OR topic_title LIKE ? OR tags LIKE ?)"
        term = f"%{search}%"
        params.extend([term, term, term])

    query += " ORDER BY id ASC LIMIT ? OFFSET ?"
    params.extend([limit, offset])

    rows = conn.execute(query, params).fetchall()
    bookmarks = {b["question_id"] for b in conn.execute("SELECT question_id FROM bookmarks").fetchall()}

    results = []
    for r in rows:
        try:
            parsed_ans = json.loads(r["correct_answer"])
        except Exception:
            parsed_ans = r["correct_answer"]

        results.append({
            "id": r["id"],
            "paper": r["paper"],
            "subject": r["subject"],
            "topicId": r["topic_id"],
            "topicTitle": r["topic_title"],
            "year": r["year"],
            "provenance": r["provenance"],
            "provenanceLabel": r["provenance_label"],
            "originalPaper": r["original_paper"],
            "type": r["type"],
            "marks": r["marks"],
            "negativeMarking": r["negative_marking"],
            "difficulty": r["difficulty"],
            "text": r["text"],
            "options": json.loads(r["options"]) if r["options"] else None,
            "correctAnswer": parsed_ans,
            "explanation": r["explanation"],
            "hints": json.loads(r["hints"] or "[]"),
            "trapAlert": r["trap_alert"],
            "tags": json.loads(r["tags"] or "[]"),
            "isBookmarked": r["id"] in bookmarks
        })
    return {"success": True, "count": len(results), "data": results}

@app.post("/api/questions/validate")
def validate_question_answer(payload: ValidationRequest, conn: sqlite3.Connection = Depends(get_db)):
    q = conn.execute("SELECT * FROM questions WHERE id = ?", (payload.questionId,)).fetchone()
    if not q:
        raise HTTPException(status_code=404, detail="Question not found")

    try:
        parsed_ans = json.loads(q["correct_answer"])
    except Exception:
        parsed_ans = q["correct_answer"]

    result = validate_gate_answer(
        q["type"],
        q["marks"],
        q["negative_marking"],
        parsed_ans,
        payload.userResponse,
        payload.hintsUsedCount or 0
    )

    # Update topic progress in SQLite
    topic_id = q["topic_id"]
    tp = conn.execute("SELECT * FROM topic_progress WHERE topic_id = ?", (topic_id,)).fetchone()
    practiced = (tp["practiced_count"] if tp else 0) + 1
    correct = (tp["correct_count"] if tp else 0) + (1 if result["is_correct"] else 0)
    revised = tp["revised_count"] if tp else 0

    unresolved = conn.execute("SELECT COUNT(*) as count FROM mistake_records WHERE topic_id = ? AND resolved = 0", (topic_id,)).fetchone()["count"]
    mastery = calculate_topic_mastery(practiced, correct, unresolved, revised)

    conn.execute("""
        INSERT INTO topic_progress (topic_id, paper, studied, practiced_count, correct_count, revised_count, last_studied_date, mastery_score, confidence)
        VALUES (?, ?, 1, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(topic_id) DO UPDATE SET
            practiced_count = excluded.practiced_count,
            correct_count = excluded.correct_count,
            last_studied_date = excluded.last_studied_date,
            mastery_score = excluded.mastery_score,
            confidence = excluded.confidence
    """, (topic_id, q["paper"], practiced, correct, revised, datetime.datetime.now().isoformat(), mastery["mastery_score"], mastery["confidence"]))

    xp_earned = 0
    if result["is_correct"]:
        xp_earned = 25 if q["marks"] == 2 else 15
        if payload.hintsUsedCount:
            xp_earned = max(5, xp_earned - 5 * payload.hintsUsedCount)
        conn.execute("UPDATE user_stats SET xp = xp + ?, total_questions_solved = total_questions_solved + 1 WHERE id = 'default'", (xp_earned,))

    conn.commit()

    return {
        "success": True,
        "validation": {
            "isCorrect": result["is_correct"],
            "marksAwarded": result["marks_awarded"],
            "userResponse": payload.userResponse,
            "correctAnswer": parsed_ans,
            "explanation": q["explanation"],
            "trapAlert": q["trap_alert"],
            "xpEarned": xp_earned,
            "updatedTopicMastery": mastery
        }
    }

# -------------------------------------------------------------
# 3. Notes Workspace (Section 8.13)
# -------------------------------------------------------------
@app.get("/api/notes")
def search_notes(paper: str = Query(None), search: str = Query(None), conn: sqlite3.Connection = Depends(get_db)):
    query = "SELECT * FROM user_notes WHERE 1=1"
    params = []
    if paper:
        query += " AND paper = ?"
        params.append(paper.upper())
    if search:
        query += """ AND (
            topic_title LIKE ? OR definition_summary LIKE ? OR key_formulas LIKE ? 
            OR worked_example LIKE ? OR common_mistakes LIKE ? OR exam_traps LIKE ? OR custom_notes LIKE ?
        )"""
        term = f"%{search}%"
        params.extend([term]*7)

    query += " ORDER BY updated_at DESC"
    rows = conn.execute(query, params).fetchall()
    return {"success": True, "count": len(rows), "data": [dict(r) for r in rows]}

@app.get("/api/notes/{topic_id}")
def get_topic_note(topic_id: str, conn: sqlite3.Connection = Depends(get_db)):
    note = conn.execute("SELECT * FROM user_notes WHERE topic_id = ?", (topic_id,)).fetchone()
    if not note:
        node = conn.execute("SELECT * FROM syllabus_nodes WHERE id = ?", (topic_id,)).fetchone()
        if not node:
            raise HTTPException(status_code=404, detail="Topic node not found")
        formulas = json.loads(node["key_formulas"] or "[]")
        note = {
            "topic_id": topic_id,
            "topic_title": node["topic"],
            "paper": node["paper"],
            "definition_summary": node["description"] or f"Summary for {node['topic']}",
            "key_formulas": "\n\n".join([f"$${f}$$" for f in formulas]),
            "worked_example": "Problem statement and derivation steps.",
            "common_mistakes": "1. Unit conversion errors.\n2. Algebraic sign inversion.",
            "exam_traps": "Check negative marking rules.",
            "cross_links": ", ".join(json.loads(node["overlap_tags"] or "[]")),
            "custom_notes": "",
            "updated_at": datetime.datetime.now().isoformat()
        }
    else:
        note = dict(note)

    # Backlinks
    mistakes = [dict(m) for m in conn.execute("SELECT id, question_id, category, user_reasoning, date_logged, resolved FROM mistake_records WHERE topic_id = ?", (topic_id,)).fetchall()]
    cards = [dict(c) for c in conn.execute("SELECT id, title, next_review_date, repetitions FROM revision_cards WHERE topic_id = ?", (topic_id,)).fetchall()]

    return {"success": True, "data": note, "backlinks": {"mistakes": mistakes, "flashcards": cards}}

@app.put("/api/notes/{topic_id}")
def save_topic_note(topic_id: str, payload: StructuredUserNoteModel, conn: sqlite3.Connection = Depends(get_db)):
    node = conn.execute("SELECT topic, paper FROM syllabus_nodes WHERE id = ?", (topic_id,)).fetchone()
    title = payload.topicTitle or (node["topic"] if node else "Topic Note")
    paper = payload.paper or (node["paper"] if node else "RA")
    now = datetime.datetime.now().isoformat()

    conn.execute("""
        INSERT INTO user_notes 
        (topic_id, topic_title, paper, definition_summary, key_formulas, worked_example, common_mistakes, exam_traps, cross_links, custom_notes, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(topic_id) DO UPDATE SET
            topic_title = excluded.topic_title,
            paper = excluded.paper,
            definition_summary = excluded.definition_summary,
            key_formulas = excluded.key_formulas,
            worked_example = excluded.worked_example,
            common_mistakes = excluded.common_mistakes,
            exam_traps = excluded.exam_traps,
            cross_links = excluded.cross_links,
            custom_notes = excluded.custom_notes,
            updated_at = excluded.updated_at
    """, (topic_id, title, paper, payload.definitionSummary, payload.keyFormulas, payload.workedExample, payload.commonMistakes, payload.examTraps, payload.crossLinks, payload.customNotes, now))

    conn.execute("UPDATE user_stats SET xp = xp + 15 WHERE id = 'default'")
    conn.commit()
    return {"success": True, "message": "Note saved", "updatedAt": now}

# -------------------------------------------------------------
# 4. Mistake Notebook (Section 8.6)
# -------------------------------------------------------------
@app.get("/api/mistakes")
def list_mistakes(
    paper: str = Query(None),
    category: str = Query(None),
    resolved: Optional[bool] = Query(None),
    conn: sqlite3.Connection = Depends(get_db)
):
    query = "SELECT * FROM mistake_records WHERE 1=1"
    params = []
    if paper:
        query += " AND paper = ?"
        params.append(paper.upper())
    if category:
        query += " AND category = ?"
        params.append(category)
    if resolved is not None:
        query += " AND resolved = ?"
        params.append(1 if resolved else 0)

    query += " ORDER BY date_logged DESC"
    rows = conn.execute(query, params).fetchall()
    return {"success": True, "count": len(rows), "data": [dict(r) for r in rows]}

@app.post("/api/mistakes")
def log_mistake(payload: MistakeLogRequest, conn: sqlite3.Connection = Depends(get_db)):
    q = conn.execute("SELECT paper, topic_id, topic_title FROM questions WHERE id = ?", (payload.questionId,)).fetchone()
    if not q:
        raise HTTPException(status_code=404, detail="Question not found")

    m_id = f"mistake-{int(datetime.datetime.now().timestamp() * 1000)}"
    today = datetime.date.today().isoformat()
    tomorrow = (datetime.date.today() + datetime.timedelta(days=1)).isoformat()

    conn.execute("""
        INSERT INTO mistake_records 
        (id, question_id, paper, topic_id, topic_title, category, user_reasoning, attempted_answer, date_logged, next_review_date, review_stage, resolved)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, 0)
    """, (m_id, payload.questionId, q["paper"], q["topic_id"], q["topic_title"], payload.category, payload.userReasoning, json.dumps(payload.attemptedAnswer) if payload.attemptedAnswer else None, today, tomorrow))

    conn.commit()
    return {"success": True, "mistakeId": m_id, "message": "Mistake logged"}

@app.post("/api/mistakes/{mistake_id}/resolve")
def resolve_mistake(mistake_id: str, conn: sqlite3.Connection = Depends(get_db)):
    conn.execute("UPDATE mistake_records SET resolved = 1 WHERE id = ?", (mistake_id,))
    conn.execute("UPDATE user_stats SET xp = xp + 20 WHERE id = 'default'")
    conn.commit()
    return {"success": True, "message": "Mistake resolved"}

# -------------------------------------------------------------
# 5. Countdown Targets (Section 8.12)
# -------------------------------------------------------------
@app.get("/api/targets")
def get_exam_targets(conn: sqlite3.Connection = Depends(get_db)):
    rows = conn.execute("SELECT * FROM exam_targets ORDER BY is_primary DESC, target_date ASC").fetchall()
    now = datetime.datetime.now(datetime.timezone.utc)
    enriched = []
    for r in rows:
        target_dt = datetime.datetime.fromisoformat(r["target_date"].replace("Z", "+00:00"))
        diff = target_dt - now
        days = max(0, diff.days)
        hours = max(0, (diff.seconds // 3600))
        enriched.append({
            "id": r["id"],
            "paper": r["paper"],
            "name": r["name"],
            "targetDate": r["target_date"],
            "isPrimary": bool(r["is_primary"]),
            "countdown": {
                "daysRemaining": days,
                "hoursRemaining": hours,
                "isFinalWeek": days <= 7,
                "isPassed": diff.total_seconds() <= 0
            }
        })
    return {"success": True, "data": enriched}

# -------------------------------------------------------------
# 6. Analytics & Progress Dashboard (Section 8.10)
# -------------------------------------------------------------
@app.get("/api/progress/dashboard")
def get_progress_dashboard(paper: str = "RA", conn: sqlite3.Connection = Depends(get_db)):
    clean_paper = paper.upper()
    stats = dict(conn.execute("SELECT * FROM user_stats WHERE id = 'default'").fetchone())
    total_topics = conn.execute("SELECT COUNT(*) as count FROM syllabus_nodes WHERE paper = ?", (clean_paper,)).fetchone()["count"]
    studied_topics = conn.execute("SELECT COUNT(*) as count FROM topic_progress WHERE paper = ? AND studied = 1", (clean_paper,)).fetchone()["count"]
    mastered_topics = conn.execute("SELECT COUNT(*) as count FROM topic_progress WHERE paper = ? AND mastery_score >= 80", (clean_paper,)).fetchone()["count"]

    coverage_pct = round((studied_topics / max(1, total_topics)) * 100)
    mastery_pct = round((mastered_topics / max(1, total_topics)) * 100)
    readiness = min(100, round(coverage_pct * 0.5 + mastery_pct * 0.5))

    weak_topics = [
        dict(r) for r in conn.execute("""
            SELECT tp.topic_id, sn.topic as topic_title, tp.mastery_score, tp.practiced_count, tp.correct_count
            FROM topic_progress tp JOIN syllabus_nodes sn ON tp.topic_id = sn.id
            WHERE tp.paper = ? AND tp.practiced_count > 0 AND tp.mastery_score < 70
            ORDER BY tp.mastery_score ASC LIMIT 5
        """, (clean_paper,)).fetchall()
    ]

    return {
        "success": True,
        "paper": clean_paper,
        "userStats": stats,
        "coverage": {
            "totalTopics": total_topics,
            "studiedTopics": studied_topics,
            "masteredTopics": mastered_topics,
            "coveragePercent": coverage_pct,
            "masteryPercent": mastery_pct
        },
        "readiness": {
            "score": readiness,
            "label": "Exam Ready" if readiness >= 75 else ("Progressing Well" if readiness >= 50 else "Building Foundations"),
            "disclaimer": "Readiness estimate is an analytical projection and not a guarantee of GATE score."
        },
        "weakTopics": weak_topics
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="0.0.0.0", port=8000, reload=True)
