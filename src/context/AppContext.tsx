import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  PaperType, 
  UserTopicProgress, 
  StructuredUserNote, 
  MistakeEntry, 
  UserStats, 
  TestSession,
  MistakeCategory 
} from '../types';
import { SYLLABUS_NODES } from '../data/syllabusData';
import { QUESTION_BANK } from '../data/questionBank';
import { DETAILED_TOPIC_NOTES } from '../data/topicNotesData';

export type ActiveTab = 'syllabus' | 'practice' | 'mock' | 'aptitude' | 'simulations' | 'notes' | 'formulas';

interface AppContextType {
  activePaper: PaperType;
  setActivePaper: (paper: PaperType) => void;
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  selectedTopicId: string | null;
  setSelectedTopicId: (id: string | null) => void;
  
  // Exam Target Date (8.12)
  targetExamDate: string; // ISO string
  setTargetExamDate: (dateStr: string) => void;
  nextMockDate: string;
  setNextMockDate: (dateStr: string) => void;

  // Topic Progress
  topicProgress: Record<string, UserTopicProgress>;
  markTopicStudied: (topicId: string, studied: boolean) => void;
  recordTopicPractice: (topicId: string, isCorrect: boolean) => void;
  recordTopicRevision: (topicId: string) => void;
  updateTopicConfidence: (topicId: string, confidence: 'Low' | 'Medium' | 'High') => void;

  // Structured Notes Workspace (8.13)
  userNotes: Record<string, StructuredUserNote>;
  saveTopicNote: (note: StructuredUserNote) => void;
  getTopicNote: (topicId: string) => StructuredUserNote;

  // Mistake Notebook (8.6)
  mistakes: MistakeEntry[];
  logMistake: (questionId: string, category: MistakeCategory, userReasoning?: string, attemptedAnswer?: any) => void;
  resolveMistake: (mistakeId: string) => void;
  updateMistakeStage: (mistakeId: string, stage: number) => void;

  // Gamification & XP & Streak
  stats: UserStats;
  earnXp: (amount: number, reason: string) => void;
  recordDailyActivity: (type: 'practice' | 'study' | 'note' | 'mock') => void;
  useStreakFreeze: () => boolean;

  // Test Session (8.5)
  activeTestSession: TestSession | null;
  startTestSession: (session: TestSession) => void;
  updateTestAnswer: (questionId: string, answer: any) => void;
  toggleMarkForReview: (questionId: string) => void;
  completeTestSession: () => TestSession | null;
  cancelTestSession: () => void;
  completedTests: TestSession[];

  // Bookmarks
  bookmarkedQuestionIds: string[];
  toggleBookmarkQuestion: (questionId: string) => void;

  // Data Export / Import
  exportUserDataJson: () => string;
  importUserDataJson: (jsonStr: string) => boolean;
  resetAllData: () => void;
}

const LOCAL_STORAGE_KEY = 'gate_quest_2027_state_v1';

const AppContext = createContext<AppContextType | undefined>(undefined);

// Generate default structured template for any topic
export function createDefaultNoteTemplate(topicId: string): StructuredUserNote {
  if (DETAILED_TOPIC_NOTES[topicId]) {
    const detailed = DETAILED_TOPIC_NOTES[topicId];
    return {
      topicId: detailed.topicId,
      topicTitle: detailed.topicTitle,
      paper: detailed.paper,
      definitionSummary: detailed.definitionSummary,
      keyFormulas: detailed.keyFormulas,
      workedExample: detailed.workedExample,
      commonMistakes: detailed.commonMistakes,
      examTraps: detailed.examTraps,
      crossLinks: detailed.crossLinks,
      customNotes: detailed.customNotes || '',
      updatedAt: detailed.updatedAt
    };
  }

  const node = SYLLABUS_NODES.find(n => n.id === topicId);
  const paper = node?.paper || 'RA';
  const topicTitle = node?.topic || 'Topic Note';

  return {
    topicId,
    topicTitle,
    paper,
    definitionSummary: node?.description || `High-yield preparation summary for ${topicTitle}.`,
    keyFormulas: node?.keyFormulas?.map(f => `$$${f}$$`).join('\n\n') || '$$E = mc^2$$',
    workedExample: `**Problem Statement**:\nCalculate the characteristic response or target parameter given standard syllabus boundary conditions.\n\n**Solution Steps**:\n1. Identify given variables.\n2. Apply governing relation.\n3. Verify dimensional consistency.`,
    commonMistakes: `1. Unit conversion errors (radians vs degrees, mm vs meters).\n2. Algebraic sign inversion during matrix transpose or feedback loop subtraction.`,
    examTraps: `Watch out for boundary condition qualifiers (e.g. "strictly positive", "non-singular", "symmetric"). Check if negative marking applies.`,
    crossLinks: node?.overlapTags?.join(', ') || 'Related syllabus nodes',
    customNotes: '',
    updatedAt: new Date().toISOString()
  };
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePaper, setActivePaper] = useState<PaperType>('RA');
  const [activeTab, setActiveTab] = useState<ActiveTab>('syllabus');
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>('ra-robotics-kinematics-transforms');
  
  // Default first exam weekend per 8.12: 6 Feb 2027
  const [targetExamDate, setTargetExamDate] = useState<string>('2027-02-06T09:00:00');
  const [nextMockDate, setNextMockDate] = useState<string>('2026-11-08T10:00:00');

  const [topicProgress, setTopicProgress] = useState<Record<string, UserTopicProgress>>(() => {
    const init: Record<string, UserTopicProgress> = {};
    SYLLABUS_NODES.forEach(node => {
      init[node.id] = {
        topicId: node.id,
        studied: false,
        practicedCount: 0,
        correctCount: 0,
        revisedCount: 0,
        masteryScore: 0,
        confidence: 'Low'
      };
    });
    return init;
  });

  const [userNotes, setUserNotes] = useState<Record<string, StructuredUserNote>>({});
  const [mistakes, setMistakes] = useState<MistakeEntry[]>([]);
  const [bookmarkedQuestionIds, setBookmarkedQuestionIds] = useState<string[]>([]);
  
  const [stats, setStats] = useState<UserStats>(() => {
    const today = new Date();
    const d1 = new Date(today); d1.setDate(d1.getDate() - 1);
    const d2 = new Date(today); d2.setDate(d2.getDate() - 2);
    const d3 = new Date(today); d3.setDate(d3.getDate() - 3);

    const fmt = (d: Date) => d.toISOString().split('T')[0];

    return {
      xp: 250,
      level: 1,
      streakDays: 4,
      longestStreak: 7,
      lastActiveDate: fmt(today),
      totalQuestionsSolved: 8,
      totalMocksCompleted: 0,
      accuracyRate: 75,
      streakFreezes: 1,
      studyHistory: {
        [fmt(d3)]: { questionsSolved: 2, topicsStudied: 1, notesRevised: 1 },
        [fmt(d2)]: { questionsSolved: 3, topicsStudied: 1, notesRevised: 0 },
        [fmt(d1)]: { questionsSolved: 2, topicsStudied: 0, notesRevised: 1 },
        [fmt(today)]: { questionsSolved: 1, topicsStudied: 1, notesRevised: 1 },
      }
    };
  });

  const [activeTestSession, setActiveTestSession] = useState<TestSession | null>(null);
  const [completedTests, setCompletedTests] = useState<TestSession[]>([]);

  // Load from backend API with localStorage fallback
  useEffect(() => {
    // 1. Initial restore from local cache
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.activePaper) setActivePaper(parsed.activePaper);
        if (parsed.targetExamDate) setTargetExamDate(parsed.targetExamDate);
        if (parsed.nextMockDate) setNextMockDate(parsed.nextMockDate);
        if (parsed.topicProgress) setTopicProgress(prev => ({ ...prev, ...parsed.topicProgress }));
        if (parsed.userNotes) setUserNotes(parsed.userNotes);
        if (parsed.mistakes) setMistakes(parsed.mistakes);
        if (parsed.bookmarkedQuestionIds) setBookmarkedQuestionIds(parsed.bookmarkedQuestionIds);
        if (parsed.stats) setStats(parsed.stats);
        if (parsed.completedTests) setCompletedTests(parsed.completedTests);
      }
    } catch (e) {
      console.warn('Failed to restore saved progress from localStorage', e);
    }

    // 2. Fetch fresh persistent state from SQLite Backend API
    const fetchBackendState = async () => {
      try {
        // Fetch Notes
        const notesRes = await fetch('/api/notes');
        if (notesRes.ok) {
          const notesData = await notesRes.json();
          if (notesData.success && notesData.data) {
            const notesMap: Record<string, StructuredUserNote> = {};
            notesData.data.forEach((n: any) => {
              notesMap[n.topicId] = n;
            });
            setUserNotes(prev => ({ ...prev, ...notesMap }));
          }
        }

        // Fetch Mistakes
        const mistakesRes = await fetch('/api/mistakes');
        if (mistakesRes.ok) {
          const mistakesData = await mistakesRes.json();
          if (mistakesData.success && Array.isArray(mistakesData.data)) {
            setMistakes(mistakesData.data);
          }
        }

        // Fetch Targets
        const targetsRes = await fetch('/api/targets');
        if (targetsRes.ok) {
          const targetsData = await targetsRes.json();
          if (targetsData.success && Array.isArray(targetsData.data)) {
            const primary = targetsData.data.find((t: any) => t.isPrimary);
            if (primary?.targetDate) {
              setTargetExamDate(primary.targetDate);
            }
          }
        }

        // Fetch Bookmarks
        const bRes = await fetch('/api/questions/bookmarks');
        if (bRes.ok) {
          const bData = await bRes.json();
          if (bData.success && Array.isArray(bData.data)) {
            setBookmarkedQuestionIds(bData.data.map((b: any) => b.id));
          }
        }
      } catch (err) {
        console.info('Backend API sync using offline cache mode:', err);
      }
    };

    fetchBackendState();
  }, []);

  // Save to localStorage on state changes
  useEffect(() => {
    try {
      const payload = {
        activePaper,
        targetExamDate,
        nextMockDate,
        topicProgress,
        userNotes,
        mistakes,
        bookmarkedQuestionIds,
        stats,
        completedTests
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(payload));
    } catch (e) {
      console.warn('Failed to save progress to localStorage', e);
    }
  }, [activePaper, targetExamDate, nextMockDate, topicProgress, userNotes, mistakes, bookmarkedQuestionIds, stats, completedTests]);

  // XP & Leveling logic
  const earnXp = (amount: number, _reason: string) => {
    setStats(prev => {
      const newXp = prev.xp + amount;
      // 500 XP per level
      const newLevel = Math.floor(newXp / 500) + 1;
      return {
        ...prev,
        xp: newXp,
        level: newLevel,
      };
    });
  };

  const recordDailyActivity = (type: 'practice' | 'study' | 'note' | 'mock') => {
    const today = new Date().toISOString().split('T')[0];
    setStats(prev => {
      const history = { ...(prev.studyHistory || {}) };
      const currentDay = history[today] || { questionsSolved: 0, topicsStudied: 0, notesRevised: 0 };

      if (type === 'practice' || type === 'mock') currentDay.questionsSolved += 1;
      else if (type === 'study') currentDay.topicsStudied += 1;
      else if (type === 'note') currentDay.notesRevised += 1;
      history[today] = currentDay;

      let newStreak = prev.streakDays;
      let newLongest = prev.longestStreak || prev.streakDays;
      let newFreezes = prev.streakFreezes ?? 1;

      if (prev.lastActiveDate !== today) {
        const prevDate = new Date(prev.lastActiveDate);
        const currDate = new Date(today);
        const diffTime = currDate.getTime() - prevDate.getTime();
        const diffDays = Math.round(diffTime / (1000 * 3600 * 24));

        if (diffDays === 1) {
          newStreak = prev.streakDays + 1;
        } else if (diffDays > 1) {
          if (diffDays === 2 && newFreezes > 0) {
            newFreezes -= 1;
            newStreak = prev.streakDays + 1;
          } else {
            newStreak = 1;
          }
        }
        if (newStreak > newLongest) {
          newLongest = newStreak;
        }
      }

      return {
        ...prev,
        lastActiveDate: today,
        streakDays: newStreak,
        longestStreak: Math.max(newLongest, newStreak),
        streakFreezes: newFreezes,
        studyHistory: history,
      };
    });
  };

  const useStreakFreeze = (): boolean => {
    let success = false;
    setStats(prev => {
      if ((prev.streakFreezes ?? 0) <= 0) return prev;
      success = true;
      return {
        ...prev,
        streakFreezes: (prev.streakFreezes ?? 1) - 1,
      };
    });
    return success;
  };

  const markTopicStudied = (topicId: string, studied: boolean) => {
    setTopicProgress(prev => {
      const current = prev[topicId] || {
        topicId,
        studied: false,
        practicedCount: 0,
        correctCount: 0,
        revisedCount: 0,
        masteryScore: 0,
        confidence: 'Low'
      };
      const updated = {
        ...current,
        studied,
        lastStudiedDate: new Date().toISOString(),
        masteryScore: Math.min(100, current.masteryScore + (studied ? 25 : -25))
      };
      return { ...prev, [topicId]: updated };
    });

    if (studied) {
      earnXp(50, 'Studied syllabus topic');
      recordDailyActivity('study');
    }

    // Backend sync
    fetch('/api/progress/topic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topicId, studied })
    }).catch(e => console.info('Offline progress save:', e));
  };

  const recordTopicPractice = (topicId: string, isCorrect: boolean) => {
    setTopicProgress(prev => {
      const current = prev[topicId] || {
        topicId,
        studied: true,
        practicedCount: 0,
        correctCount: 0,
        revisedCount: 0,
        masteryScore: 0,
        confidence: 'Low'
      };

      const newPracticed = current.practicedCount + 1;
      const newCorrect = current.correctCount + (isCorrect ? 1 : 0);
      const accuracy = newCorrect / newPracticed;
      const baseMastery = current.studied ? 30 : 10;
      const computedScore = Math.min(100, Math.round(baseMastery + accuracy * 50 + (current.revisedCount * 10)));

      let conf: 'Low' | 'Medium' | 'High' = 'Low';
      if (computedScore >= 75) conf = 'High';
      else if (computedScore >= 45) conf = 'Medium';

      return {
        ...prev,
        [topicId]: {
          ...current,
          practicedCount: newPracticed,
          correctCount: newCorrect,
          masteryScore: computedScore,
          confidence: conf
        }
      };
    });

    setStats(prev => ({
      ...prev,
      totalQuestionsSolved: prev.totalQuestionsSolved + 1,
      accuracyRate: Math.round(((prev.totalQuestionsSolved * (prev.accuracyRate / 100) + (isCorrect ? 1 : 0)) / (prev.totalQuestionsSolved + 1)) * 100)
    }));

    if (isCorrect) {
      earnXp(30, 'Correct practice answer');
    }
    recordDailyActivity('practice');
  };

  const recordTopicRevision = (topicId: string) => {
    setTopicProgress(prev => {
      const current = prev[topicId];
      if (!current) return prev;
      return {
        ...prev,
        [topicId]: {
          ...current,
          revisedCount: current.revisedCount + 1,
          masteryScore: Math.min(100, current.masteryScore + 15)
        }
      };
    });
    earnXp(40, 'Completed spaced revision');
    recordDailyActivity('study');
  };

  const updateTopicConfidence = (topicId: string, confidence: 'Low' | 'Medium' | 'High') => {
    setTopicProgress(prev => {
      const current = prev[topicId];
      if (!current) return prev;
      return {
        ...prev,
        [topicId]: { ...current, confidence }
      };
    });
  };

  // Structured Notes Workspace
  const saveTopicNote = (note: StructuredUserNote) => {
    setUserNotes(prev => ({
      ...prev,
      [note.topicId]: {
        ...note,
        updatedAt: new Date().toISOString()
      }
    }));
    earnXp(20, 'Updated structured topic note');
    recordDailyActivity('note');

    // Sync to SQLite backend
    fetch(`/api/notes/${note.topicId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note)
    }).catch(e => console.info('Offline note save:', e));
  };

  const getTopicNote = (topicId: string): StructuredUserNote => {
    if (userNotes[topicId]) {
      return userNotes[topicId];
    }
    return createDefaultNoteTemplate(topicId);
  };

  // Mistakes
  const logMistake = (questionId: string, category: MistakeCategory, userReasoning = '', attemptedAnswer = null) => {
    const q = QUESTION_BANK.find(item => item.id === questionId);
    if (!q) return;

    // Check if mistake already logged for this question
    setMistakes(prev => {
      const exists = prev.find(m => m.questionId === questionId && !m.resolved);
      if (exists) return prev;

      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);

      const newEntry: MistakeEntry = {
        id: `mistake-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        questionId,
        paper: q.paper,
        topicId: q.topicId,
        topicTitle: q.topicTitle,
        category,
        userReasoning,
        attemptedAnswer,
        dateLogged: new Date().toISOString(),
        nextReviewDate: tomorrow.toISOString(),
        reviewStage: 0,
        resolved: false
      };

      return [newEntry, ...prev];
    });

    // Sync to SQLite backend
    fetch('/api/mistakes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId, category, userReasoning, attemptedAnswer })
    }).catch(e => console.info('Offline mistake log:', e));
  };

  const resolveMistake = (mistakeId: string) => {
    setMistakes(prev => prev.map(m => m.id === mistakeId ? { ...m, resolved: true } : m));
    earnXp(100, 'Mastered and resolved mistake in notebook');

    // Sync to SQLite backend
    fetch(`/api/mistakes/${mistakeId}/resolve`, {
      method: 'POST'
    }).catch(e => console.info('Offline mistake resolve:', e));
  };

  const updateMistakeStage = (mistakeId: string, stage: number) => {
    setMistakes(prev => prev.map(m => {
      if (m.id !== mistakeId) return m;
      const nextDate = new Date();
      if (stage === 1) nextDate.setDate(nextDate.getDate() + 3);
      else if (stage === 2) nextDate.setDate(nextDate.getDate() + 7);
      else nextDate.setDate(nextDate.getDate() + 14);

      return {
        ...m,
        reviewStage: stage,
        nextReviewDate: nextDate.toISOString(),
        resolved: stage >= 3
      };
    }));
    earnXp(50, 'Spaced repetition mistake verified');

    // Sync to SQLite backend
    fetch(`/api/mistakes/${mistakeId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reviewStage: stage })
    }).catch(e => console.info('Offline mistake stage update:', e));
  };

  // Test sessions
  const startTestSession = (session: TestSession) => {
    setActiveTestSession(session);
  };

  const updateTestAnswer = (questionId: string, answer: any) => {
    if (!activeTestSession) return;
    setActiveTestSession(prev => {
      if (!prev) return null;
      return {
        ...prev,
        userAnswers: { ...prev.userAnswers, [questionId]: answer }
      };
    });
  };

  const toggleMarkForReview = (questionId: string) => {
    if (!activeTestSession) return;
    setActiveTestSession(prev => {
      if (!prev) return null;
      return {
        ...prev,
        markedForReview: {
          ...prev.markedForReview,
          [questionId]: !prev.markedForReview[questionId]
        }
      };
    });
  };

  const completeTestSession = (): TestSession | null => {
    if (!activeTestSession) return null;

    let score = 0;
    let positiveMarks = 0;
    let negativeMarks = 0;
    let totalMarks = 0;
    let correctCount = 0;

    activeTestSession.questions.forEach(q => {
      totalMarks += q.marks;
      const userAns = activeTestSession.userAnswers[q.id];
      if (userAns !== undefined && userAns !== null && userAns !== '') {
        // Evaluation logic
        let isCorrect = false;
        if (q.type === 'MCQ') {
          isCorrect = userAns === q.correctAnswer;
        } else if (q.type === 'MSQ') {
          const correctArr = Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer];
          const userArr = Array.isArray(userAns) ? userAns : [userAns];
          isCorrect = correctArr.length === userArr.length && correctArr.every(val => userArr.includes(val));
        } else if (q.type === 'NAT') {
          const numVal = parseFloat(userAns);
          if (!isNaN(numVal) && typeof q.correctAnswer === 'object' && 'min' in q.correctAnswer) {
            isCorrect = numVal >= q.correctAnswer.min && numVal <= q.correctAnswer.max;
          }
        }

        if (isCorrect) {
          score += q.marks;
          positiveMarks += q.marks;
          correctCount++;
          recordTopicPractice(q.topicId, true);
        } else {
          score -= q.negativeMarking;
          negativeMarks += q.negativeMarking;
          recordTopicPractice(q.topicId, false);
          // Log mistake automatically for error analysis
          logMistake(q.id, 'concept_gap', 'Missed during timed mock test', userAns);
        }
      }
    });

    const finishedSession: TestSession = {
      ...activeTestSession,
      isCompleted: true,
      score: Math.max(0, parseFloat(score.toFixed(2))),
      totalMarks,
      positiveMarks: parseFloat(positiveMarks.toFixed(2)),
      negativeMarks: parseFloat(negativeMarks.toFixed(2)),
      accuracy: Math.round((correctCount / Math.max(1, Object.keys(activeTestSession.userAnswers).length)) * 100)
    };

    setCompletedTests(prev => [finishedSession, ...prev]);
    setActiveTestSession(null);
    earnXp(250, 'Completed full timed GATE mock test');
    recordDailyActivity('mock');
    setStats(prev => ({ ...prev, totalMocksCompleted: prev.totalMocksCompleted + 1 }));

    return finishedSession;
  };

  const cancelTestSession = () => {
    setActiveTestSession(null);
  };

  // Bookmarks
  const toggleBookmarkQuestion = (questionId: string) => {
    setBookmarkedQuestionIds(prev => {
      if (prev.includes(questionId)) {
        return prev.filter(id => id !== questionId);
      }
      return [...prev, questionId];
    });

    fetch(`/api/questions/${questionId}/bookmark`, { method: 'POST' })
      .catch(e => console.info('Offline bookmark toggle:', e));
  };

  // Data Export / Import
  const exportUserDataJson = (): string => {
    const backup = {
      exportDate: new Date().toISOString(),
      activePaper,
      targetExamDate,
      nextMockDate,
      topicProgress,
      userNotes,
      mistakes,
      bookmarkedQuestionIds,
      stats,
      completedTests
    };
    return JSON.stringify(backup, null, 2);
  };

  const importUserDataJson = (jsonStr: string): boolean => {
    try {
      const data = JSON.parse(jsonStr);
      if (data.topicProgress) setTopicProgress(data.topicProgress);
      if (data.userNotes) setUserNotes(data.userNotes);
      if (data.mistakes) setMistakes(data.mistakes);
      if (data.bookmarkedQuestionIds) setBookmarkedQuestionIds(data.bookmarkedQuestionIds);
      if (data.stats) setStats(data.stats);
      if (data.completedTests) setCompletedTests(data.completedTests);
      if (data.targetExamDate) setTargetExamDate(data.targetExamDate);
      return true;
    } catch {
      return false;
    }
  };

  const resetAllData = () => {
    fetch('/api/backup/reset', { method: 'POST' }).finally(() => {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      window.location.reload();
    });
  };

  return (
    <AppContext.Provider value={{
      activePaper,
      setActivePaper,
      activeTab,
      setActiveTab,
      selectedTopicId,
      setSelectedTopicId,
      targetExamDate,
      setTargetExamDate,
      nextMockDate,
      setNextMockDate,
      topicProgress,
      markTopicStudied,
      recordTopicPractice,
      recordTopicRevision,
      updateTopicConfidence,
      userNotes,
      saveTopicNote,
      getTopicNote,
      mistakes,
      logMistake,
      resolveMistake,
      updateMistakeStage,
      stats,
      earnXp,
      recordDailyActivity,
      useStreakFreeze,
      activeTestSession,
      startTestSession,
      updateTestAnswer,
      toggleMarkForReview,
      completeTestSession,
      cancelTestSession,
      completedTests,
      bookmarkedQuestionIds,
      toggleBookmarkQuestion,
      exportUserDataJson,
      importUserDataJson,
      resetAllData,
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
