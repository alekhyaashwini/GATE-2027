import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { QUESTION_BANK } from '../../data/questionBank';
import { SYLLABUS_NODES } from '../../data/syllabusData';
import { Question } from '../../types';
import { KaTeXRenderer } from '../common/KaTeXRenderer';
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
  Clock
} from 'lucide-react';

export const PracticeArenaView: React.FC<{ onOpenCalculator: () => void }> = ({ onOpenCalculator }) => {
  const { 
    activePaper, 
    selectedTopicId, 
    setSelectedTopicId, 
    recordTopicPractice, 
    logMistake, 
    bookmarkedQuestionIds, 
    toggleBookmarkQuestion,
    setActiveTab
  } = useApp();

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userSelectedOption, setUserSelectedOption] = useState<string>('');
  const [userMsqOptions, setUserMsqOptions] = useState<string[]>([]);
  const [userNatInput, setUserNatInput] = useState<string>('');
  
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [revealedHintIndex, setRevealedHintIndex] = useState<number>(-1);
  const [showInterpretationPrompts, setShowInterpretationPrompts] = useState(false);
  const [showMistakeDialog, setShowMistakeDialog] = useState(false);
  const [mistakeReason, setMistakeReason] = useState('');
  const [mistakeCat, setMistakeCat] = useState<'concept_gap' | 'calculation_error' | 'option_trap' | 'formula_recall'>('concept_gap');

  // Filter questions for active paper and optionally selected topic
  const questions = useMemo(() => {
    let pool = QUESTION_BANK.filter(q => q.paper === activePaper);
    if (selectedTopicId) {
      const topicMatches = pool.filter(q => q.topicId === selectedTopicId);
      if (topicMatches.length > 0) {
        return topicMatches;
      }
    }
    return pool;
  }, [activePaper, selectedTopicId]);

  const currentQ: Question = questions[activeQuestionIndex] || questions[0];

  // Reset inputs when question changes
  const resetQuestionState = () => {
    setUserSelectedOption('');
    setUserMsqOptions([]);
    setUserNatInput('');
    setIsAnswerSubmitted(false);
    setIsCorrect(null);
    setRevealedHintIndex(-1);
    setShowInterpretationPrompts(false);
    setShowMistakeDialog(false);
  };

  const handleNext = () => {
    if (activeQuestionIndex < questions.length - 1) {
      setActiveQuestionIndex(prev => prev + 1);
      resetQuestionState();
    }
  };

  const handlePrev = () => {
    if (activeQuestionIndex > 0) {
      setActiveQuestionIndex(prev => prev - 1);
      resetQuestionState();
    }
  };

  const handleCheckAnswer = () => {
    if (!currentQ) return;

    let correct = false;
    let attemptedAnswer: any = null;

    if (currentQ.type === 'MCQ') {
      correct = userSelectedOption === currentQ.correctAnswer;
      attemptedAnswer = userSelectedOption;
    } else if (currentQ.type === 'MSQ') {
      const expected: string[] = Array.isArray(currentQ.correctAnswer)
        ? currentQ.correctAnswer
        : typeof currentQ.correctAnswer === 'string'
          ? [currentQ.correctAnswer]
          : [];
      correct = expected.length === userMsqOptions.length && expected.every(item => userMsqOptions.includes(item));
      attemptedAnswer = userMsqOptions;
    } else if (currentQ.type === 'NAT') {
      const val = parseFloat(userNatInput);
      if (!isNaN(val) && typeof currentQ.correctAnswer === 'object' && 'min' in currentQ.correctAnswer) {
        correct = val >= currentQ.correctAnswer.min && val <= currentQ.correctAnswer.max;
      }
      attemptedAnswer = userNatInput;
    }

    setIsCorrect(correct);
    setIsAnswerSubmitted(true);
    recordTopicPractice(currentQ.topicId, correct);

    // If incorrect, prompt mistake logger
    if (!correct) {
      logMistake(currentQ.id, 'concept_gap', 'Mistake during practice arena', attemptedAnswer);
    }
  };

  const handleMsqToggle = (optId: string) => {
    setUserMsqOptions(prev => {
      if (prev.includes(optId)) {
        return prev.filter(id => id !== optId);
      }
      return [...prev, optId];
    });
  };

  const isBookmarked = currentQ && bookmarkedQuestionIds.includes(currentQ.id);

  if (!currentQ) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center text-slate-400">
        <p className="text-sm">No practice questions found for the current selection.</p>
        <button
          onClick={() => setSelectedTopicId(null)}
          className="mt-3 px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs"
        >
          View All {activePaper} Questions
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Filter and Switcher strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-3 rounded-xl text-xs">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-mono">Topic:</span>
          <select
            value={selectedTopicId || ''}
            onChange={e => {
              setSelectedTopicId(e.target.value || null);
              setActiveQuestionIndex(0);
              resetQuestionState();
            }}
            className="bg-slate-950 border border-slate-800 text-slate-200 text-xs px-2.5 py-1.5 rounded-lg max-w-[280px] font-sans truncate"
          >
            <option value="">All Topics ({activePaper} — {QUESTION_BANK.filter(q => q.paper === activePaper).length} Questions)</option>
            {SYLLABUS_NODES.filter(n => n.paper === activePaper).map(node => {
              const qCount = QUESTION_BANK.filter(q => q.topicId === node.id).length;
              return (
                <option key={node.id} value={node.id}>
                  {node.topic} ({qCount} Questions)
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCalculator}
            className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-mono flex items-center gap-1"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>GATE Calc</span>
          </button>

        </div>
      </div>

      {/* Main Question Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-sm space-y-6">
        {/* Question Header & Provenance */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-amber-400 font-semibold uppercase">{currentQ.provenanceLabel}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{currentQ.type} Question</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">+{currentQ.marks} {currentQ.marks > 1 ? 'Marks' : 'Mark'}</span>
              {currentQ.negativeMarking > 0 && (
                <>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span className="text-rose-400">−{currentQ.negativeMarking} Neg</span>
                </>
              )}
            </div>
            <div className="text-xs text-slate-400 font-sans">
              Subject: <strong className="text-slate-200">{currentQ.subject}</strong> · Topic: <strong className="text-slate-200">{currentQ.topicTitle}</strong>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleBookmarkQuestion(currentQ.id)}
              className={`p-1.5 rounded-lg border transition-colors ${
                isBookmarked 
                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/40' 
                  : 'bg-slate-950 text-slate-400 hover:text-white border-slate-800'
              }`}
              title={isBookmarked ? 'Bookmarked' : 'Bookmark Question'}
            >
              <Bookmark className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setSelectedTopicId(currentQ.topicId);
                setActiveTab('notes');
              }}
              className="px-2.5 py-1.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-lg text-xs font-mono flex items-center gap-1 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Topic Notes</span>
            </button>
          </div>
        </div>

        {/* Question Text */}
        <div className="text-base text-slate-100 font-sans leading-relaxed tracking-normal">
          <KaTeXRenderer content={currentQ.text} />
        </div>

        {/* Question Interpretation Prompts (Section 8.4) */}
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-3">
          <button
            onClick={() => setShowInterpretationPrompts(!showInterpretationPrompts)}
            className="w-full flex items-center justify-between text-xs font-mono text-slate-400 hover:text-slate-200 text-left"
          >
            <div className="flex items-center gap-1.5 text-sky-400">
              <HelpCircle className="w-3.5 h-3.5" />
              <span className="font-semibold">Question Interpretation Strategy Prompts</span>
            </div>
            <span>{showInterpretationPrompts ? 'Hide' : 'Show Guide'}</span>
          </button>

          {showInterpretationPrompts && (
            <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-300 space-y-2 font-sans">
              <div>
                <strong className="text-amber-400 font-mono">1. What is being asked? </strong>
                <span>Isolate the exact target parameter (scalar, vector, coordinate, or boundary condition).</span>
              </div>
              <div>
                <strong className="text-amber-400 font-mono">2. Which givens matter? </strong>
                <span>Check for coordinate conventions, reference frames, and degree vs radian requirements.</span>
              </div>
              <div>
                <strong className="text-amber-400 font-mono">3. Which concept applies? </strong>
                <span>Check whether standard transform equations, characteristic polynomials, or Bayes theorem solve it directly.</span>
              </div>
            </div>
          )}
        </div>

        {/* Answer Input Controls */}
        <div className="space-y-3 pt-2">
          {currentQ.type === 'MCQ' && currentQ.options && (
            <div className="space-y-2">
              {currentQ.options.map(opt => {
                const isSelected = userSelectedOption === opt.id;
                let optionStyle = 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-200';

                if (isAnswerSubmitted) {
                  if (opt.id === currentQ.correctAnswer) {
                    optionStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200';
                  } else if (isSelected && opt.id !== currentQ.correctAnswer) {
                    optionStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-amber-500/10 border-amber-500 text-amber-200';
                }

                return (
                  <button
                    key={opt.id}
                    disabled={isAnswerSubmitted}
                    onClick={() => setUserSelectedOption(opt.id)}
                    className={`w-full text-left p-3.5 rounded-lg border text-xs flex items-center gap-3 transition-colors ${optionStyle}`}
                  >
                    <span className="w-6 h-6 rounded-md bg-slate-900 border border-slate-700 flex items-center justify-center font-mono font-bold shrink-0">
                      {opt.id}
                    </span>
                    <span className="flex-1">
                      <KaTeXRenderer content={opt.text} />
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {currentQ.type === 'MSQ' && currentQ.options && (
            <div className="space-y-2">
              <div className="text-[11px] text-amber-400 font-mono">
                *Multiple Select Question (MSQ): One or more options may be correct. No negative marks.
              </div>
              {currentQ.options.map(opt => {
                const isChecked = userMsqOptions.includes(opt.id);
                const isAnswer = Array.isArray(currentQ.correctAnswer) 
                  ? currentQ.correctAnswer.includes(opt.id)
                  : currentQ.correctAnswer === opt.id;

                let optionStyle = 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-200';

                if (isAnswerSubmitted) {
                  if (isAnswer) {
                    optionStyle = 'bg-emerald-950/40 border-emerald-500 text-emerald-200';
                  } else if (isChecked && !isAnswer) {
                    optionStyle = 'bg-rose-950/40 border-rose-500 text-rose-200';
                  }
                } else if (isChecked) {
                  optionStyle = 'bg-amber-500/10 border-amber-500 text-amber-200';
                }

                return (
                  <button
                    key={opt.id}
                    disabled={isAnswerSubmitted}
                    onClick={() => handleMsqToggle(opt.id)}
                    className={`w-full text-left p-3.5 rounded-lg border text-xs flex items-center gap-3 transition-colors ${optionStyle}`}
                  >
                    <span className={`w-5 h-5 rounded flex items-center justify-center font-mono text-[10px] border ${
                      isChecked ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold' : 'border-slate-700 bg-slate-900'
                    }`}>
                      {isChecked ? '✓' : ''}
                    </span>
                    <span className="w-5 font-mono font-bold text-slate-400">{opt.id}.</span>
                    <span className="flex-1">
                      <KaTeXRenderer content={opt.text} />
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {currentQ.type === 'NAT' && (
            <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-3">
              <div className="text-xs text-slate-400">
                Enter numerical answer (use virtual calculator if needed). Rounded as specified in prompt.
              </div>
              <div className="flex items-center gap-3 max-w-sm">
                <input
                  type="text"
                  disabled={isAnswerSubmitted}
                  placeholder="e.g. 42.4"
                  value={userNatInput}
                  onChange={e => setUserNatInput(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 text-slate-100 text-sm font-mono px-3 py-2 rounded-lg focus:outline-hidden focus:border-amber-500"
                />
                <button
                  onClick={onOpenCalculator}
                  className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-mono shrink-0"
                >
                  Calc
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800 flex-wrap gap-3">
          <div className="flex items-center gap-2">
            {!isAnswerSubmitted ? (
              <button
                onClick={handleCheckAnswer}
                disabled={
                  (currentQ.type === 'MCQ' && !userSelectedOption) ||
                  (currentQ.type === 'MSQ' && userMsqOptions.length === 0) ||
                  (currentQ.type === 'NAT' && !userNatInput.trim())
                }
                className="px-5 py-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:hover:bg-amber-500 text-slate-950 rounded-lg text-xs font-bold transition-colors shadow-xs"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={resetQuestionState}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>
            )}

            {/* Hint reveal */}
            {currentQ.hints && currentQ.hints.length > 0 && (
              <button
                onClick={() => setRevealedHintIndex(prev => Math.min(prev + 1, currentQ.hints.length - 1))}
                className="px-3 py-2 bg-slate-950 hover:bg-slate-800 text-amber-300 border border-amber-500/20 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>
                  {revealedHintIndex < 0 ? 'Need a Hint?' : `Hint (${revealedHintIndex + 1}/${currentQ.hints.length})`}
                </span>
              </button>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">
              Q {activeQuestionIndex + 1} of {questions.length}
            </span>
            <button
              onClick={handlePrev}
              disabled={activeQuestionIndex === 0}
              className="p-1.5 bg-slate-950 hover:bg-slate-800 disabled:opacity-30 border border-slate-800 rounded-lg text-slate-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={activeQuestionIndex === questions.length - 1}
              className="p-1.5 bg-slate-950 hover:bg-slate-800 disabled:opacity-30 border border-slate-800 rounded-lg text-slate-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Revealed Hints */}
        {revealedHintIndex >= 0 && (
          <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg text-xs text-amber-200 space-y-1.5">
            <div className="font-mono font-bold uppercase tracking-wider text-[11px] text-amber-400 flex items-center gap-1">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Progressive Hint #{revealedHintIndex + 1}</span>
            </div>
            <div>
              <KaTeXRenderer content={currentQ.hints[revealedHintIndex]} />
            </div>
          </div>
        )}

        {/* Result Evaluation & Master Solution */}
        {isAnswerSubmitted && (
          <div className="space-y-4 pt-4 border-t border-slate-800 animate-in fade-in duration-200">
            {/* Feedback Banner */}
            <div className={`p-4 rounded-lg flex items-center justify-between text-xs font-semibold ${
              isCorrect 
                ? 'bg-emerald-950/40 border border-emerald-500/40 text-emerald-300'
                : 'bg-rose-950/40 border border-rose-500/40 text-rose-300'
            }`}>
              <div className="flex items-center gap-2">
                {isCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <XCircle className="w-5 h-5 text-rose-400" />}
                <div>
                  <div className="text-sm font-bold">
                    {isCorrect ? 'Correct! Marks Awarded' : 'Incorrect Attempt'}
                  </div>
                  <div className="text-[11px] font-mono font-normal opacity-90">
                    {isCorrect 
                      ? `+${currentQ.marks} marks · Topic mastery increased`
                      : currentQ.negativeMarking > 0 
                        ? `−${currentQ.negativeMarking} negative marks (MCQ official rule)` 
                        : '0 negative marking for MSQ/NAT'}
                  </div>
                </div>
              </div>

              {!isCorrect && (
                <button
                  onClick={() => setShowMistakeDialog(true)}
                  className="px-3 py-1.5 bg-rose-600/30 hover:bg-rose-600/40 border border-rose-500/40 rounded-lg text-xs font-mono text-rose-200 flex items-center gap-1.5 transition-colors"
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Log Error Type</span>
                </button>
              )}
            </div>

            {/* Trap Alert if present */}
            {currentQ.trapAlert && (
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg text-xs text-amber-300 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-mono">GATE Exam Trap: </strong>
                  <span>{currentQ.trapAlert}</span>
                </div>
              </div>
            )}

            {/* Full Explanation */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                Verified Solution & Derivation
              </div>
              <div className="text-xs text-slate-200 leading-relaxed font-sans prose prose-invert max-w-none">
                <KaTeXRenderer content={currentQ.explanation} />
              </div>
            </div>
          </div>
        )}

        {/* Mistake Logging Dialog */}
        {showMistakeDialog && (
          <div className="p-4 bg-slate-950 border border-slate-700 rounded-lg space-y-3 text-xs">
            <div className="font-mono font-semibold text-rose-300 uppercase">
              Classify Mistake in Mistake Notebook (8.6)
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'concept_gap', label: 'Concept Gap' },
                { id: 'calculation_error', label: 'Calculation Error' },
                { id: 'option_trap', label: 'Option Trap' },
                { id: 'formula_recall', label: 'Formula Recall' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setMistakeCat(cat.id as any)}
                  className={`p-2 rounded text-left border font-mono text-[11px] transition-colors ${
                    mistakeCat === cat.id 
                      ? 'bg-rose-500/20 border-rose-500 text-rose-200 font-bold' 
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <textarea
              rows={2}
              value={mistakeReason}
              onChange={e => setMistakeReason(e.target.value)}
              placeholder="What was your thought process? (e.g., forgot that rotation order matters, inverted the sign in determinant...)"
              className="w-full p-2 bg-slate-900 border border-slate-800 rounded text-slate-200 text-xs font-mono"
            />

            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setShowMistakeDialog(false)}
                className="px-3 py-1 bg-slate-900 text-slate-400 hover:text-white rounded"
              >
                Close
              </button>
              <button
                onClick={() => {
                  logMistake(currentQ.id, mistakeCat, mistakeReason);
                  setShowMistakeDialog(false);
                }}
                className="px-3 py-1 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded"
              >
                Save Mistake
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Question Jumper & Quick Palette Grid */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-200">Question Palette</span>
            <span className="text-slate-400 font-mono">
              ({questions.length} questions available for {selectedTopicId ? 'this topic' : activePaper})
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-amber-500 inline-block"></span> Current
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-sm bg-slate-800 border border-slate-700 inline-block"></span> Unvisited
            </span>
          </div>
        </div>

        <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-15 gap-1.5 max-h-40 overflow-y-auto pr-1">
          {questions.map((q, idx) => {
            const isCurrent = idx === activeQuestionIndex;
            return (
              <button
                key={q.id}
                onClick={() => {
                  setActiveQuestionIndex(idx);
                  resetQuestionState();
                }}
                className={`h-8 rounded-lg font-mono text-xs font-semibold flex items-center justify-center transition-all ${
                  isCurrent
                    ? 'bg-amber-500 text-slate-950 font-bold ring-2 ring-amber-400 scale-105'
                    : 'bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
                title={`Q${idx + 1} (${q.type}, ${q.marks}M)`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
