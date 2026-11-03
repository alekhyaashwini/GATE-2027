from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any, Union

class SyllabusNodeFilter(BaseModel):
    paper: Optional[str] = None
    section: Optional[str] = None
    weightage: Optional[str] = None
    search: Optional[str] = None

class ValidationRequest(BaseModel):
    questionId: str
    userResponse: Any
    hintsUsedCount: Optional[int] = 0

class StructuredUserNoteModel(BaseModel):
    topicId: str
    topicTitle: Optional[str] = None
    paper: Optional[str] = "RA"
    definitionSummary: Optional[str] = ""
    keyFormulas: Optional[str] = ""
    workedExample: Optional[str] = ""
    commonMistakes: Optional[str] = ""
    examTraps: Optional[str] = ""
    crossLinks: Optional[str] = ""
    customNotes: Optional[str] = ""

class MistakeLogRequest(BaseModel):
    questionId: str
    category: Optional[str] = "concept_gap"
    userReasoning: Optional[str] = ""
    attemptedAnswer: Optional[Any] = None

class MistakeUpdateRequest(BaseModel):
    category: Optional[str] = None
    userReasoning: Optional[str] = None
    reviewStage: Optional[int] = None

class RevisionReviewRequest(BaseModel):
    quality: int = Field(default=4, ge=0, le=5)

class GenerateRevisionCardRequest(BaseModel):
    topicId: str
    title: Optional[str] = None
    frontPrompt: str
    backFormula: str
    examTip: Optional[str] = ""

class TestAttemptStartRequest(BaseModel):
    testId: Optional[str] = None
    title: Optional[str] = None
    paper: Optional[str] = "RA"
    durationMinutes: Optional[int] = 30
    questionIds: Optional[List[str]] = None

class TestAnswerAutosaveRequest(BaseModel):
    questionId: str
    response: Any
    timeSpentSeconds: Optional[int] = 0
    isMarkedForReview: Optional[bool] = False

class TestAttemptCompleteRequest(BaseModel):
    userAnswers: Optional[Dict[str, Any]] = {}
    markedForReview: Optional[Dict[str, bool]] = {}
    timeSpentSeconds: Optional[Dict[str, int]] = {}

class ProgressTopicUpdateRequest(BaseModel):
    topicId: str
    studied: Optional[bool] = True
    confidence: Optional[str] = "Medium"

class ActivityLogRequest(BaseModel):
    activityType: Optional[str] = "study"

class XpRewardRequest(BaseModel):
    amount: int
    reason: Optional[str] = "Study reward"

class ExamTargetUpdateRequest(BaseModel):
    targetDate: str
    name: Optional[str] = None
    notes: Optional[str] = None
