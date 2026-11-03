import React, { useState, useMemo, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  APTITUDE_PILLARS, 
  GENERAL_APTITUDE_BANK, 
  AptitudeQuestion, 
  AptitudePillar 
} from '../../data/generalAptitudeData';
import { KaTeXRenderer } from '../common/KaTeXRenderer';
import { VideoLectureModal, VideoResource } from '../common/VideoLectureModal';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Lightbulb, 
  BookOpen, 
  Bookmark, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  AlertTriangle,
  Send,
  Clock,
  Search,
  Check,
  Play,
  Award,
  Layers,
  Compass,
  Zap,
  Target,
  FileText,
  Filter,
  BarChart3,
  Flame,
  ExternalLink,
  Timer
} from 'lucide-react';

interface GeneralAptitudeViewProps {
  onOpenCalculator: () => void;
}

export const GeneralAptitudeView: React.FC<GeneralAptitudeViewProps> = ({ onOpenCalculator }) => {
  const { earnXp, recordDailyActivity } = useApp();

  // Active top-level sub-tab: 'practice' | 'mock' | 'formulas' | 'videos'
  const [activeSubTab, setActiveSubTab] = useState<'practice' | 'mock' | 'formulas' | 'videos'>('practice');

  // Filter state for Practice Arena
  const [selectedPillar, setSelectedPillar] = useState<'All' | 'Quantitative' | 'Spatial' | 'Analytical' | 'Verbal'>('All');
  const [selectedType, setSelectedType] = useState<'All' | 'MCQ' | 'MSQ' | 'NAT'>('All');
  const [selectedMarks, setSelectedMarks] = useState<'All' | '1' | '2'>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'All' | 'Easy' | 'Medium' | 'Hard'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);

  // Question solving state
  const [userSelectedOption, setUserSelectedOption] = useState<string>('');
  const [userMsqOptions, setUserMsqOptions] = useState<string[]>([]);
  const [userNatInput, setUserNatInput] = useState<string>('');
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Solved history tracking in local storage
  const [solvedMap, setSolvedMap] = useState<Record<string, { isCorrect: boolean; userAns: string }>>(() => {
    try {
      const saved = localStorage.getItem('gate2027_aptitude_solved');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Bookmarks
  const [bookmarkedSet, setBookmarkedSet] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('gate2027_aptitude_bookmarks');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Video modal state
  const [selectedVideo, setSelectedVideo] = useState<VideoResource | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // 15-Mark Sectional Mock Test State
  const [mockActive, setMockActive] = useState(false);
  const [mockQuestions, setMockQuestions] = useState<AptitudeQuestion[]>([]);
  const [mockCurrentIdx, setMockCurrentIdx] = useState(0);
  const [mockAnswers, setMockAnswers] = useState<Record<string, string>>({});
  const [mockTimeLeft, setMockTimeLeft] = useState(900); // 15 mins = 900 seconds
  const [mockSubmitted, setMockSubmitted] = useState(false);

  // Filtered practice questions
  const filteredQuestions = useMemo(() => {
    return GENERAL_APTITUDE_BANK.filter(q => {
      if (selectedPillar !== 'All' && q.pillar !== selectedPillar) return false;
      if (selectedType !== 'All' && q.type !== selectedType) return false;
      if (selectedMarks !== 'All' && q.marks.toString() !== selectedMarks) return false;
      if (selectedDifficulty !== 'All' && q.difficulty !== selectedDifficulty) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          q.text.toLowerCase().includes(query) ||
          q.topicTitle.toLowerCase().includes(query) ||
          q.pillar.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [selectedPillar, selectedType, selectedMarks, selectedDifficulty, searchQuery]);

  // Current active question
  const currentQ: AptitudeQuestion = filteredQuestions[activeQuestionIdx] || filteredQuestions[0] || GENERAL_APTITUDE_BANK[0];

  // Reset inputs when navigating questions
  useEffect(() => {
    setUserSelectedOption('');
    setUserMsqOptions([]);
    setUserNatInput('');
    setIsAnswerSubmitted(false);
    setIsCorrect(null);
  }, [activeQuestionIdx, selectedPillar, selectedType, selectedMarks, selectedDifficulty]);

  // Save solved map & bookmarks
  const toggleBookmark = (qId: string) => {
    const updated = new Set(bookmarkedSet);
    if (updated.has(qId)) updated.delete(qId);
    else updated.add(qId);
    setBookmarkedSet(updated);
    localStorage.setItem('gate2027_aptitude_bookmarks', JSON.stringify(Array.from(updated)));
  };

  const handleSubmitAnswer = () => {
    if (isAnswerSubmitted) return;

    let correct = false;
    let recordedAns = '';

    if (currentQ.type === 'MCQ') {
      correct = userSelectedOption === currentQ.correctAnswer;
      recordedAns = userSelectedOption;
    } else if (currentQ.type === 'MSQ') {
      const correctArr = Array.isArray(currentQ.correctAnswer) ? currentQ.correctAnswer : [currentQ.correctAnswer];
      correct = 
        userMsqOptions.length === correctArr.length && 
        userMsqOptions.every(opt => correctArr.includes(opt));
      recordedAns = userMsqOptions.join(',');
    } else if (currentQ.type === 'NAT') {
      const userVal = parseFloat(userNatInput.trim());
      const correctVal = parseFloat(currentQ.correctAnswer as string);
      correct = !isNaN(userVal) && Math.abs(userVal - correctVal) <= 0.05;
      recordedAns = userNatInput;
    }

    setIsCorrect(correct);
    setIsAnswerSubmitted(true);

    const newSolved = { ...solvedMap, [currentQ.id]: { isCorrect: correct, userAns: recordedAns } };
    setSolvedMap(newSolved);
    localStorage.setItem('gate2027_aptitude_solved', JSON.stringify(newSolved));

    if (correct) {
      earnXp(currentQ.marks === 2 ? 30 : 15, `Solved Aptitude Q: ${currentQ.topicTitle}`);
      recordDailyActivity('practice');
    }
  };

  // Sectional Mock Test Generator (5x 1-mark + 5x 2-mark)
  const startSectionalMock = () => {
    // Pick 5 1-mark questions and 5 2-mark questions distributed across pillars
    const q1 = GENERAL_APTITUDE_BANK.filter(q => q.marks === 1).sort(() => 0.5 - Math.random()).slice(0, 5);
    const q2 = GENERAL_APTITUDE_BANK.filter(q => q.marks === 2).sort(() => 0.5 - Math.random()).slice(0, 5);
    const mockSet = [...q1, ...q2];
    setMockQuestions(mockSet);
    setMockCurrentIdx(0);
    setMockAnswers({});
    setMockTimeLeft(900);
    setMockSubmitted(false);
    setMockActive(true);
  };

  // Mock test countdown timer
  useEffect(() => {
    if (!mockActive || mockSubmitted) return;
    const interval = setInterval(() => {
      setMockTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setMockSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [mockActive, mockSubmitted]);

  // Mock score calculation
  const mockScoreReport = useMemo(() => {
    if (!mockSubmitted || mockQuestions.length === 0) return null;
    let rawScore = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let unattemptedCount = 0;

    mockQuestions.forEach(q => {
      const ans = mockAnswers[q.id];
      if (!ans) {
        unattemptedCount++;
        return;
      }
      let correct = false;
      if (q.type === 'MCQ') {
        correct = ans === q.correctAnswer;
      } else if (q.type === 'NAT') {
        const u = parseFloat(ans);
        const c = parseFloat(q.correctAnswer as string);
        correct = !isNaN(u) && Math.abs(u - c) <= 0.05;
      }
      if (correct) {
        correctCount++;
        rawScore += q.marks;
      } else {
        wrongCount++;
        if (q.type === 'MCQ') {
          rawScore -= q.marks === 2 ? 0.66 : 0.33;
        }
      }
    });

    return {
      score: Math.max(0, Math.round(rawScore * 100) / 100),
      totalMarks: 15.0,
      correctCount,
      wrongCount,
      unattemptedCount,
      accuracy: (correctCount + wrongCount) > 0 ? Math.round((correctCount / (correctCount + wrongCount)) * 100) : 0
    };
  }, [mockSubmitted, mockQuestions, mockAnswers]);

  // Overall statistics
  const totalQuestions = GENERAL_APTITUDE_BANK.length;
  const solvedCount = Object.keys(solvedMap).length;
  const correctCount = Object.values(solvedMap).filter(v => v.isCorrect).length;
  const overallAccuracy = solvedCount > 0 ? Math.round((correctCount / solvedCount) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Hero Header HUD Banner */}
      <div className="relative p-6 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5 shadow-xs">
                <Target className="w-3.5 h-3.5" />
                <span>15 / 100 Marks Core Section</span>
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Mandatory for GATE RA & DA
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              General Aptitude Preparation Workspace
            </h1>

            <p className="text-sm text-slate-300">
              Master the 4 mandatory GATE pillars: <strong>Quantitative</strong>, <strong>Spatial</strong>, <strong>Analytical</strong>, and <strong>Verbal</strong>. Comprehensive high-yield rulebooks, 250+ targeted practice questions, and timed 15-mark sectional mock tests.
            </p>
          </div>

          {/* Quick HUD Metrics */}
          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <div className="px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-center">
              <span className="text-[10px] font-mono text-slate-400 block uppercase font-semibold">Total Bank</span>
              <span className="text-lg font-bold text-white font-mono">{totalQuestions} Qs</span>
            </div>

            <div className="px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-center">
              <span className="text-[10px] font-mono text-slate-400 block uppercase font-semibold">Solved</span>
              <span className="text-lg font-bold text-amber-400 font-mono">{solvedCount} / {totalQuestions}</span>
            </div>

            <div className="px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-center">
              <span className="text-[10px] font-mono text-slate-400 block uppercase font-semibold">Accuracy</span>
              <span className="text-lg font-bold text-emerald-400 font-mono">{overallAccuracy}%</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Summary Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-slate-800/80">
          {APTITUDE_PILLARS.map(p => {
            const countInPillar = GENERAL_APTITUDE_BANK.filter(q => q.pillar === p.id).length;
            const solvedInPillar = Object.keys(solvedMap).filter(id => id.includes(p.id.toLowerCase().slice(0, 4))).length;
            return (
              <div 
                key={p.id}
                onClick={() => {
                  setSelectedPillar(p.id);
                  setActiveSubTab('practice');
                  setActiveQuestionIdx(0);
                }}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  selectedPillar === p.id && activeSubTab === 'practice'
                    ? 'bg-amber-500/15 border-amber-500/50 shadow-md shadow-amber-500/10'
                    : 'bg-slate-950/50 hover:bg-slate-850 border-slate-800/80'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-white">{p.title}</span>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
                    {p.weightageMarks}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center justify-between font-mono">
                  <span>{countInPillar} Qs</span>
                  <span className="text-emerald-400 font-semibold">{solvedInPillar} Solved</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Sub-Navigation Bar */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-2 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveSubTab('practice')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
              activeSubTab === 'practice'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Practice Arena ({filteredQuestions.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('mock')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
              activeSubTab === 'mock'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Timer className="w-4 h-4" />
            <span>15-Mark Sectional Mock Test</span>
          </button>

          <button
            onClick={() => setActiveSubTab('formulas')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
              activeSubTab === 'formulas'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Formulas & Shortcut Rules</span>
          </button>

          <button
            onClick={() => setActiveSubTab('videos')}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${
              activeSubTab === 'videos'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Play className="w-4 h-4" />
            <span>Curated Video Masterclasses</span>
          </button>
        </div>

        <button
          onClick={onOpenCalculator}
          className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 rounded-xl text-xs font-mono flex items-center gap-1.5 transition-colors"
          title="Open official GATE Virtual Scientific Calculator"
        >
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>GATE Calc</span>
        </button>
      </div>

      {/* ============================================================== */}
      {/* TAB 1: PRACTICE ARENA (250 QUESTIONS) */}
      {/* ============================================================== */}
      {activeSubTab === 'practice' && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-slate-400 font-mono font-semibold">Pillar:</span>
              {(['All', 'Quantitative', 'Spatial', 'Analytical', 'Verbal'] as const).map(p => (
                <button
                  key={p}
                  onClick={() => {
                    setSelectedPillar(p);
                    setActiveQuestionIdx(0);
                  }}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                    selectedPillar === p
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {/* Type Filter */}
              <select
                value={selectedType}
                onChange={e => {
                  setSelectedType(e.target.value as any);
                  setActiveQuestionIdx(0);
                }}
                className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-300 font-mono focus:outline-hidden"
              >
                <option value="All">All Types</option>
                <option value="MCQ">MCQ</option>
                <option value="MSQ">MSQ</option>
                <option value="NAT">NAT</option>
              </select>

              {/* Marks Filter */}
              <select
                value={selectedMarks}
                onChange={e => {
                  setSelectedMarks(e.target.value as any);
                  setActiveQuestionIdx(0);
                }}
                className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-slate-300 font-mono focus:outline-hidden"
              >
                <option value="All">All Marks</option>
                <option value="1">1 Mark</option>
                <option value="2">2 Marks</option>
              </select>

              {/* Search Bar */}
              <div className="relative min-w-[180px]">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={e => {
                    setSearchQuery(e.target.value);
                    setActiveQuestionIdx(0);
                  }}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-hidden focus:border-amber-500/50"
                />
              </div>
            </div>
          </div>

          {/* Question Active Player Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md space-y-6">
            {/* Question Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold uppercase">
                    {currentQ.pillar} Aptitude
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-300 font-semibold">{currentQ.topicTitle}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-400">+{currentQ.marks} {currentQ.marks > 1 ? 'Marks' : 'Mark'}</span>
                  {currentQ.negativeMarking > 0 && (
                    <span className="text-rose-400">−{currentQ.negativeMarking} Neg</span>
                  )}
                </div>
                <div className="text-xs text-slate-500 font-mono">
                  Question {activeQuestionIdx + 1} of {filteredQuestions.length} ({currentQ.type})
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleBookmark(currentQ.id)}
                  className={`p-2 rounded-lg border transition-colors ${
                    bookmarkedSet.has(currentQ.id)
                      ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                      : 'bg-slate-950 hover:bg-slate-800 border-slate-800 text-slate-400'
                  }`}
                  title={bookmarkedSet.has(currentQ.id) ? 'Remove Bookmark' : 'Bookmark Question'}
                >
                  <Bookmark className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1 font-mono text-xs">
                  <button
                    onClick={() => setActiveQuestionIdx(prev => Math.max(0, prev - 1))}
                    disabled={activeQuestionIdx === 0}
                    className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="px-2 text-slate-400">
                    {activeQuestionIdx + 1} / {filteredQuestions.length}
                  </span>
                  <button
                    onClick={() => setActiveQuestionIdx(prev => Math.min(filteredQuestions.length - 1, prev + 1))}
                    disabled={activeQuestionIdx >= filteredQuestions.length - 1}
                    className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Question Statement */}
            <div className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              <KaTeXRenderer content={currentQ.text} />
            </div>

            {/* Options Area (MCQ / MSQ) */}
            {currentQ.options && currentQ.options.length > 0 && (
              <div className="space-y-3 pt-2">
                {currentQ.options.map(opt => {
                  const isSelected = currentQ.type === 'MCQ'
                    ? userSelectedOption === opt.id
                    : userMsqOptions.includes(opt.id);

                  let borderClass = 'border-slate-800 hover:border-slate-700 bg-slate-950/60';
                  if (isSelected) borderClass = 'border-amber-500 bg-amber-500/10 text-white';

                  if (isAnswerSubmitted) {
                    const isActualCorrect = Array.isArray(currentQ.correctAnswer)
                      ? currentQ.correctAnswer.includes(opt.id)
                      : currentQ.correctAnswer === opt.id;
                    if (isActualCorrect) {
                      borderClass = 'border-emerald-500 bg-emerald-500/15 text-emerald-200';
                    } else if (isSelected && !isActualCorrect) {
                      borderClass = 'border-rose-500 bg-rose-500/15 text-rose-200';
                    }
                  }

                  return (
                    <div
                      key={opt.id}
                      onClick={() => {
                        if (isAnswerSubmitted) return;
                        if (currentQ.type === 'MCQ') {
                          setUserSelectedOption(opt.id);
                        } else {
                          setUserMsqOptions(prev => 
                            prev.includes(opt.id) ? prev.filter(x => x !== opt.id) : [...prev, opt.id]
                          );
                        }
                      }}
                      className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${borderClass}`}
                    >
                      <span className={`w-6 h-6 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                      }`}>
                        {opt.id}
                      </span>
                      <div className="text-xs sm:text-sm text-slate-200 pt-0.5 flex-1">
                        <KaTeXRenderer content={opt.text} />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* NAT Input Area */}
            {currentQ.type === 'NAT' && (
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
                <label className="text-xs font-mono text-slate-400 block font-semibold">
                  Numerical Answer Input (Decimal allowed):
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    step="any"
                    disabled={isAnswerSubmitted}
                    placeholder="Enter numerical value..."
                    value={userNatInput}
                    onChange={e => setUserNatInput(e.target.value)}
                    className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white font-mono focus:outline-hidden focus:border-amber-500 max-w-xs"
                  />
                  <span className="text-xs text-slate-500 font-mono">
                    Tolerance: ±0.05
                  </span>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800 flex-wrap gap-3">
              <button
                onClick={() => {
                  setUserSelectedOption('');
                  setUserMsqOptions([]);
                  setUserNatInput('');
                  setIsAnswerSubmitted(false);
                  setIsCorrect(null);
                }}
                className="px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200 font-mono flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>

              <button
                onClick={handleSubmitAnswer}
                disabled={isAnswerSubmitted || (!userSelectedOption && userMsqOptions.length === 0 && !userNatInput.trim())}
                className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-amber-500/20 transition-all disabled:opacity-40 active:scale-95"
              >
                <Send className="w-4 h-4 fill-slate-950" />
                <span>Submit & Verify</span>
              </button>
            </div>

            {/* Explanation & Solution Card */}
            {isAnswerSubmitted && (
              <div className={`p-5 rounded-2xl border space-y-4 animate-in fade-in duration-200 ${
                isCorrect 
                  ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200' 
                  : 'bg-rose-950/20 border-rose-500/40 text-rose-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-300">Correct Answer! (+{currentQ.marks} Marks Earned)</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-400" />
                        <span className="text-rose-300">Incorrect! Correct Answer: {Array.isArray(currentQ.correctAnswer) ? currentQ.correctAnswer.join(', ') : currentQ.correctAnswer}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Step-by-Step Derivation */}
                <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-200 space-y-2">
                  <span className="font-mono text-amber-400 font-bold uppercase tracking-wider text-[11px] block">
                    Mathematical & Analytical Derivation:
                  </span>
                  <KaTeXRenderer content={currentQ.explanation} />
                </div>

                {/* Exam Shortcut Trick */}
                {currentQ.shortcutTrick && (
                  <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-200 flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-mono text-amber-300">Exam Shortcut: </strong>
                      <span>{currentQ.shortcutTrick}</span>
                    </div>
                  </div>
                )}

                {/* GATE Trap Alert */}
                {currentQ.trapAlert && (
                  <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-xs text-rose-200 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-mono text-rose-300">GATE Pitfall Alert: </strong>
                      <span>{currentQ.trapAlert}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Rapid Jump Question Grid (1 to 250) */}
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Question Navigator ({filteredQuestions.length} in this filter)</span>
              </span>
              <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Solved Correct</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Incorrect</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-700"></span> Unsolved</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto p-1 scrollbar-thin">
              {filteredQuestions.map((q, idx) => {
                const status = solvedMap[q.id];
                let bg = 'bg-slate-950 text-slate-400 hover:bg-slate-800 border-slate-800';
                if (status) {
                  bg = status.isCorrect 
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold' 
                    : 'bg-rose-500/20 text-rose-300 border-rose-500/40 font-bold';
                }
                if (idx === activeQuestionIdx) {
                  bg = 'bg-amber-500 text-slate-950 border-amber-400 font-extrabold shadow-md';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setActiveQuestionIdx(idx)}
                    className={`w-8 h-8 rounded-lg text-xs font-mono border flex items-center justify-center transition-all ${bg}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 2: 15-MARK SECTIONAL MOCK TEST */}
      {/* ============================================================== */}
      {activeSubTab === 'mock' && (
        <div className="space-y-6">
          {!mockActive ? (
            /* Mock Test Introduction & Launch Card */
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl text-center space-y-6 max-w-3xl mx-auto shadow-xl">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto shadow-lg">
                <Timer className="w-8 h-8 text-amber-400" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Official GATE 15-Mark Sectional Aptitude Mock
                </h2>
                <p className="text-sm text-slate-300 max-w-xl mx-auto">
                  Experience the exact pressure of the official GATE General Aptitude section: 10 randomized questions strictly balanced across all 4 pillars.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono">
                <div>
                  <span className="text-slate-500 block uppercase">Questions</span>
                  <strong className="text-white text-base">10 Total</strong>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase">Marks</span>
                  <strong className="text-amber-400 text-base">15.0 Marks</strong>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase">Time Limit</span>
                  <strong className="text-emerald-400 text-base">15 Minutes</strong>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase">Marking Scheme</span>
                  <strong className="text-rose-400 text-base">+1 / +2 (−0.33 / −0.66)</strong>
                </div>
              </div>

              <button
                onClick={startSectionalMock}
                className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-xl text-sm shadow-xl shadow-amber-500/20 transition-all hover:scale-102 active:scale-95"
              >
                Start 15-Mark Timed Mock Session
              </button>
            </div>
          ) : !mockSubmitted ? (
            /* Live Mock Test Session */
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-6">
              {/* Mock Header & Timer */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 flex-wrap gap-3">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                    GATE General Aptitude Sectional Test
                  </span>
                  <h3 className="text-base font-bold text-white">
                    Question {mockCurrentIdx + 1} of {mockQuestions.length} ({mockQuestions[mockCurrentIdx]?.type} · +{mockQuestions[mockCurrentIdx]?.marks} Marks)
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <div className={`px-4 py-2 rounded-xl border font-mono font-bold text-sm flex items-center gap-2 ${
                    mockTimeLeft < 180 
                      ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse' 
                      : 'bg-slate-950 text-amber-300 border-slate-800'
                  }`}>
                    <Clock className="w-4 h-4" />
                    <span>
                      {Math.floor(mockTimeLeft / 60)}:{(mockTimeLeft % 60).toString().padStart(2, '0')}
                    </span>
                  </div>

                  <button
                    onClick={() => setMockSubmitted(true)}
                    className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-xs transition-colors"
                  >
                    Submit Test
                  </button>
                </div>
              </div>

              {/* Current Mock Question Statement */}
              {mockQuestions[mockCurrentIdx] && (
                <div className="space-y-6">
                  <div className="text-sm sm:text-base text-slate-200 font-sans">
                    <KaTeXRenderer content={mockQuestions[mockCurrentIdx].text} />
                  </div>

                  {/* Options */}
                  {mockQuestions[mockCurrentIdx].options && (
                    <div className="space-y-3">
                      {mockQuestions[mockCurrentIdx].options!.map(opt => {
                        const isChosen = mockAnswers[mockQuestions[mockCurrentIdx].id] === opt.id;
                        return (
                          <div
                            key={opt.id}
                            onClick={() => {
                              setMockAnswers(prev => ({
                                ...prev,
                                [mockQuestions[mockCurrentIdx].id]: opt.id
                              }));
                            }}
                            className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                              isChosen 
                                ? 'bg-amber-500/15 border-amber-500 text-white' 
                                : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300'
                            }`}
                          >
                            <span className={`w-6 h-6 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 ${
                              isChosen ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                            }`}>
                              {opt.id}
                            </span>
                            <div className="text-xs sm:text-sm text-slate-200 pt-0.5">
                              <KaTeXRenderer content={opt.text} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* NAT Input for Mock */}
                  {mockQuestions[mockCurrentIdx].type === 'NAT' && (
                    <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-2">
                      <label className="text-xs font-mono text-slate-400 block font-semibold">
                        Your Numerical Answer:
                      </label>
                      <input
                        type="number"
                        step="any"
                        placeholder="Enter value..."
                        value={mockAnswers[mockQuestions[mockCurrentIdx].id] || ''}
                        onChange={e => setMockAnswers({
                          ...mockAnswers,
                          [mockQuestions[mockCurrentIdx].id]: e.target.value
                        })}
                        className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white font-mono focus:outline-hidden focus:border-amber-500 max-w-xs"
                      />
                    </div>
                  )}

                  {/* Navigation in Mock */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <button
                      onClick={() => setMockCurrentIdx(prev => Math.max(0, prev - 1))}
                      disabled={mockCurrentIdx === 0}
                      className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 disabled:opacity-40"
                    >
                      Previous
                    </button>

                    <div className="flex items-center gap-1.5">
                      {mockQuestions.map((q, idx) => (
                        <button
                          key={q.id}
                          onClick={() => setMockCurrentIdx(idx)}
                          className={`w-7 h-7 rounded-lg text-xs font-mono border ${
                            mockCurrentIdx === idx
                              ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                              : mockAnswers[q.id]
                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                                : 'bg-slate-950 text-slate-400 border-slate-800'
                          }`}
                        >
                          {idx + 1}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setMockCurrentIdx(prev => Math.min(mockQuestions.length - 1, prev + 1))}
                      disabled={mockCurrentIdx === mockQuestions.length - 1}
                      className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 disabled:opacity-40"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Mock Test Final Scorecard */
            <div className="p-6 sm:p-8 bg-slate-900 border border-slate-800 rounded-2xl space-y-6 shadow-xl max-w-3xl mx-auto">
              <div className="text-center space-y-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 inline-block">
                  Test Attempt Complete
                </span>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  15-Mark Sectional Performance Card
                </h2>
              </div>

              {mockScoreReport && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-slate-950 border border-slate-800 rounded-xl text-center font-mono">
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase font-bold">Total Marks</span>
                    <strong className="text-2xl font-extrabold text-amber-400">
                      {mockScoreReport.score} <span className="text-xs text-slate-400">/ 15</span>
                    </strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase font-bold">Accuracy</span>
                    <strong className="text-2xl font-extrabold text-emerald-400">
                      {mockScoreReport.accuracy}%
                    </strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase font-bold">Correct / Wrong</span>
                    <strong className="text-base text-slate-200">
                      <span className="text-emerald-400">{mockScoreReport.correctCount}</span> / <span className="text-rose-400">{mockScoreReport.wrongCount}</span>
                    </strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase font-bold">AIR Impact</span>
                    <strong className="text-base text-amber-300">
                      {mockScoreReport.score >= 12 ? 'Top 1% Tier' : (mockScoreReport.score >= 8 ? 'Top 10% Tier' : 'Needs Practice')}
                    </strong>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setMockActive(false)}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-xl text-xs transition-colors"
                >
                  Return to Aptitude Arena
                </button>
                <button
                  onClick={startSectionalMock}
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition-colors"
                >
                  Retake New 15-Mark Mock
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 3: FORMULAS & SHORTCUT RULES */}
      {/* ============================================================== */}
      {activeSubTab === 'formulas' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {APTITUDE_PILLARS.map(p => (
            <div key={p.id} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-amber-400" />
                  <h3 className="text-base font-bold text-white">{p.title} Vault</h3>
                </div>
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  {p.weightageMarks}
                </span>
              </div>

              {/* Governing Formulas */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-bold block">
                  Governing Formulas & Relations:
                </span>
                <div className="space-y-2">
                  {p.keyFormulas.map((formula, fIdx) => (
                    <div key={fIdx} className="p-2.5 bg-slate-950 border border-slate-850 rounded-xl text-xs font-mono text-slate-200 overflow-x-auto">
                      <KaTeXRenderer content={`$$${formula}$$`} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Exam Shortcuts & Traps */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-amber-400 uppercase font-bold block">
                  Exam Shortcuts & High-Yield Rules:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {p.examTips.map((tip, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ============================================================== */}
      {/* TAB 4: CURATED VIDEO MASTERCLASSES */}
      {/* ============================================================== */}
      {activeSubTab === 'videos' && (
        <div className="space-y-6">
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl">
            <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-1 flex items-center gap-2">
              <Play className="w-4 h-4 text-red-500" />
              <span>General Aptitude Fast-Track Video Masterclasses</span>
            </h3>
            <p className="text-xs text-slate-400">
              Hand-selected high-yield lectures covering mental shortcuts, cube unfolding techniques, and syllogism Venn diagrams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {APTITUDE_PILLARS.flatMap(p => 
              p.videoLectures.map((vid, vIdx) => (
                <div key={`${p.id}-${vIdx}`} className="p-5 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col justify-between gap-4 shadow-md">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30 font-mono font-bold text-[10px]">
                        {p.title}
                      </span>
                      <span className="text-slate-500 font-mono text-[11px]">{vid.duration}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {vid.title}
                    </h4>
                    <span className="text-xs text-slate-400 font-mono mt-1 block">
                      Channel: {vid.channel}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                    <button
                      onClick={() => {
                        setSelectedVideo({
                          title: vid.title,
                          provider: vid.channel,
                          url: `https://www.youtube.com/watch?v=${vid.youtubeId}`,
                          youtubeId: vid.youtubeId,
                          channel: vid.channel,
                          duration: vid.duration
                        });
                        setIsVideoModalOpen(true);
                      }}
                      className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 transition-colors shadow-md shadow-red-900/30"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Watch Masterclass</span>
                    </button>

                    <a
                      href={`https://www.youtube.com/watch?v=${vid.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                      title="Open on YouTube"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Video Lecture Modal */}
      <VideoLectureModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        video={selectedVideo}
        topicTitle="General Aptitude Masterclass"
        topicId="general-aptitude"
      />
    </div>
  );
};
