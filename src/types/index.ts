export type PaperType = 'RA' | 'DA' | 'GA';

export type QuestionType = 'MCQ' | 'MSQ' | 'NAT';

export type QuestionProvenance = 
  | 'official_pyq' 
  | 'syllabus_overlap_pyq' 
  | 'official_sample' 
  | 'author_practice'
  | 'generated_transfer';

export type MistakeCategory = 
  | 'concept_gap' 
  | 'question_misread' 
  | 'formula_recall' 
  | 'calculation_error' 
  | 'option_trap' 
  | 'time_pressure' 
  | 'careless_error';

export interface SyllabusNode {
  id: string;
  paper: PaperType;
  section: string; // e.g. "Part A - Principles of Robotics", "Linear Algebra"
  subject: string;
  topic: string;
  subtopics: string[];
  description: string;
  prerequisites?: string[];
  overlapTags?: string[]; // e.g. ["DA - Linear Algebra", "ME - Kinematics"]
  weightage: 'High' | 'Medium' | 'Foundational';
  keyFormulas?: string[]; // LaTeX strings
  externalResources?: {
    title: string;
    provider: string;
    url: string;
    type: 'NPTEL' | 'Official' | 'Discussion' | 'Video' | 'YouTube';
    youtubeId?: string;
    channel?: string;
    duration?: string;
  }[];
}

export interface Question {
  id: string;
  paper: PaperType;
  subject: string;
  topicId: string;
  topicTitle: string;
  year?: number;
  provenance: QuestionProvenance;
  provenanceLabel: string; // e.g., "GATE 2024 DA (Official PYQ)", "GATE 2023 ME Overlap"
  originalPaper?: string; // e.g. "ME", "EE", "IN", "DA"
  type: QuestionType;
  marks: 1 | 2;
  negativeMarking: number; // e.g. 0.33 for 1-mark MCQ, 0.66 for 2-mark MCQ, 0 for MSQ/NAT
  difficulty: 'Easy' | 'Medium' | 'Hard';
  text: string;
  imageUrl?: string;
  options?: {
    id: string;
    text: string;
  }[];
  // For MCQ: option id (e.g. "B")
  // For MSQ: array of option ids (e.g. ["A", "C"])
  // For NAT: numerical value or range
  correctAnswer: string | string[] | { min: number; max: number; exact?: number };
  explanation: string;
  hints: string[];
  trapAlert?: string;
  tags: string[];
}

export interface UserTopicProgress {
  topicId: string;
  studied: boolean;
  practicedCount: number;
  correctCount: number;
  revisedCount: number;
  lastStudiedDate?: string;
  masteryScore: number; // 0 - 100
  confidence: 'Low' | 'Medium' | 'High';
}

export interface StructuredUserNote {
  topicId: string;
  topicTitle: string;
  paper: PaperType;
  definitionSummary: string;
  keyFormulas: string;
  workedExample: string;
  commonMistakes: string;
  examTraps: string;
  crossLinks: string;
  customNotes?: string;
  updatedAt: string;
}

export interface MistakeEntry {
  id: string;
  questionId: string;
  paper: PaperType;
  topicId: string;
  topicTitle: string;
  category: MistakeCategory;
  userReasoning: string;
  attemptedAnswer: any;
  dateLogged: string;
  nextReviewDate: string;
  reviewStage: number; // 0: Due tomorrow, 1: Due in 3 days, 2: Due in 7 days, 3: Mastered
  resolved: boolean;
}

export interface TestSession {
  id: string;
  title: string;
  paper: PaperType;
  durationMinutes: number;
  questions: Question[];
  userAnswers: Record<string, any>;
  markedForReview: Record<string, boolean>;
  startTime: number;
  isCompleted: boolean;
  score?: number;
  totalMarks?: number;
  positiveMarks?: number;
  negativeMarks?: number;
  accuracy?: number;
  timeSpentSeconds?: Record<string, number>;
}

export interface UserStats {
  xp: number;
  level: number;
  streakDays: number;
  longestStreak: number;
  lastActiveDate: string;
  totalQuestionsSolved: number;
  totalMocksCompleted: number;
  accuracyRate: number;
  streakFreezes: number;
  studyHistory?: Record<string, { questionsSolved: number; topicsStudied: number; notesRevised: number }>;
}
