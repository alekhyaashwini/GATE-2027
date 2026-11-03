import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { QUESTION_BANK } from '../../data/questionBank';
import { TestSession, Question } from '../../types';
import { KaTeXRenderer } from '../common/KaTeXRenderer';
import { 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Award, 
  Play, 
  RotateCcw, 
  FileCheck,
  Check,
  Bookmark
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const MockTestView: React.FC<{ onOpenCalculator: () => void }> = ({ onOpenCalculator }) => {
  const { 
    activePaper, 
    activeTestSession, 
    startTestSession, 
    updateTestAnswer, 
    toggleMarkForReview, 
    completeTestSession, 
    cancelTestSession,
    completedTests,
    logMistake
  } = useApp();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [lastFinishedTest, setLastFinishedTest] = useState<TestSession | null>(null);

  const handleStartMock = (title: string, durationMinutes: number, count: number) => {
    // Pick questions matching active paper
    const paperQuestions = QUESTION_BANK.filter(q => q.paper === activePaper);
    const shuffled = [...paperQuestions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(count, paperQuestions.length));

    const session: TestSession = {
      id: `mock-${Date.now()}`,
      title: `${activePaper} · ${title}`,
      paper: activePaper,
      durationMinutes,
      questions: selected,
      userAnswers: {},
      markedForReview: {},
      startTime: Date.now(),
      isCompleted: false,
    };

    startTestSession(session);
    setCurrentQuestionIndex(0);
    setLastFinishedTest(null);
  };

  const handleSubmitTest = () => {
    setIsSubmitModalOpen(false);
    const result = completeTestSession();
    if (result) {
      setLastFinishedTest(result);
      try {
        confetti({ particleCount: 75, spread: 70, origin: { y: 0.6 } });
      } catch {}
    }
  };

  // Keep a ref to the latest handleSubmitTest to avoid stale closures in the timer
  const submitRef = useRef(handleSubmitTest);
  useEffect(() => {
    submitRef.current = handleSubmitTest;
  });

  // Active timer for test
  useEffect(() => {
    if (!activeTestSession || activeTestSession.isCompleted) return;

    // Calculate initial remaining seconds
    const elapsed = Math.floor((Date.now() - activeTestSession.startTime) / 1000);
    const totalSecs = activeTestSession.durationMinutes * 60;
    const remaining = Math.max(0, totalSecs - elapsed);
    setSecondsRemaining(remaining);

    const interval = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          submitRef.current();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [activeTestSession]);

  // If no active test and not reviewing results, show Mock Launchpad
  if (!activeTestSession && !lastFinishedTest) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
            <FileCheck className="w-3.5 h-3.5" />
            <span>MODULE 8.5 · GATE EXAM SIMULATION ENGINE</span>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            GATE 2027 {activePaper} Mock Test Arena
          </h1>
          <p className="text-xs text-slate-400 max-w-2xl mt-1">
            Authentic exam environment with TCS iON-style question palette, negative marking rules, timer pressure, and performance analytics.
          </p>
        </div>

        {/* Test Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
                Quick Sprint
              </div>
              <h3 className="text-base font-bold text-white mt-1">Sectional Speed Test</h3>
              <p className="text-xs text-slate-400 mt-2">
                5 curated questions covering core engineering concepts under strict 15-minute time pressure.
              </p>
              <div className="mt-3 text-xs text-slate-400 font-mono space-y-1">
                <div>Duration: <strong className="text-slate-200">15 Minutes</strong></div>
                <div>Questions: <strong className="text-slate-200">5 Questions</strong></div>
                <div>Marking: <strong className="text-slate-200">+1/+2, −0.33/−0.66</strong></div>
              </div>
            </div>
            <button
              onClick={() => handleStartMock('Sectional Speed Test', 15, 5)}
              className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Play className="w-3.5 h-3.5 fill-slate-950" />
              <span>Launch Speed Test</span>
            </button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-[11px] font-mono text-sky-400 uppercase tracking-wider font-semibold">
                Standard Mock
              </div>
              <h3 className="text-base font-bold text-white mt-1">Subject Mastery Test</h3>
              <p className="text-xs text-slate-400 mt-2">
                15 mixed-topic questions with balanced MCQ, MSQ, and NAT numerical problems.
              </p>
              <div className="mt-3 text-xs text-slate-400 font-mono space-y-1">
                <div>Duration: <strong className="text-slate-200">30 Minutes</strong></div>
                <div>Questions: <strong className="text-slate-200">15 Questions</strong></div>
                <div>Marking: <strong className="text-slate-200">Official GATE Rules</strong></div>
              </div>
            </div>
            <button
              onClick={() => handleStartMock('Subject Mastery Test', 30, 15)}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Launch Mastery Test</span>
            </button>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                Endurance Test
              </div>
              <h3 className="text-base font-bold text-white mt-1">Full Section Challenge</h3>
              <p className="text-xs text-slate-400 mt-2">
                30 high-yield questions testing calculation speed, trap evasion, and formulas under fatigue.
              </p>
              <div className="mt-3 text-xs text-slate-400 font-mono space-y-1">
                <div>Duration: <strong className="text-slate-200">60 Minutes</strong></div>
                <div>Questions: <strong className="text-slate-200">30 Questions</strong></div>
                <div>Marking: <strong className="text-slate-200">Standard GATE</strong></div>
              </div>
            </div>
            <button
              onClick={() => handleStartMock('Full Section Challenge', 60, 30)}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 border border-slate-700"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Launch Section Mock</span>
            </button>
          </div>

          <div className="bg-slate-900 border border-amber-500/30 rounded-xl p-5 flex flex-col justify-between space-y-4 relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-amber-500/10 rounded-full blur-xl pointer-events-none"></div>
            <div>
              <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold flex items-center gap-1">
                <span>⭐ Grand Mock Exam</span>
              </div>
              <h3 className="text-base font-bold text-white mt-1">Full 65-Q Simulation</h3>
              <p className="text-xs text-slate-400 mt-2">
                Full 65 questions GATE exam covering all syllabus nodes with genuine 100-mark scoring rules.
              </p>
              <div className="mt-3 text-xs text-slate-400 font-mono space-y-1">
                <div>Duration: <strong className="text-slate-200">180 Minutes (3 hrs)</strong></div>
                <div>Questions: <strong className="text-slate-200">65 Questions</strong></div>
                <div>Bank Pool: <strong className="text-emerald-400">{QUESTION_BANK.filter(q => q.paper === activePaper).length} Qs Available</strong></div>
              </div>
            </div>
            <button
              onClick={() => handleStartMock('Full GATE 65-Question Mock Exam', 180, 65)}
              className="w-full py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20"
            >
              <Play className="w-3.5 h-3.5 fill-slate-950" />
              <span>Launch Full 65-Q Exam</span>
            </button>
          </div>
        </div>

        {/* Test Attempt History */}
        {completedTests.length > 0 && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
              Past Mock Test Results ({completedTests.length})
            </h3>
            <div className="divide-y divide-slate-800">
              {completedTests.map(test => (
                <div key={test.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                  <div>
                    <div className="font-semibold text-slate-200">{test.title}</div>
                    <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                      {new Date(test.startTime).toLocaleDateString()} · {test.questions.length} Questions
                    </div>
                  </div>
                  <div className="flex items-center gap-4 font-mono">
                    <div className="text-right">
                      <div className="text-amber-400 font-bold">{test.score} / {test.totalMarks} Marks</div>
                      <div className="text-[10px] text-slate-400">Accuracy: {test.accuracy}%</div>
                    </div>
                    <button
                      onClick={() => setLastFinishedTest(test)}
                      className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px]"
                    >
                      Scorecard
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Scorecard View for Finished Test
  if (lastFinishedTest) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center space-y-4">
          <Award className="w-12 h-12 text-amber-400 mx-auto" />
          <div>
            <div className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
              Test Completed Successfully
            </div>
            <h1 className="text-2xl font-bold text-white mt-1">
              {lastFinishedTest.title}
            </h1>
          </div>

          {/* Marks Scoreboard */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto font-mono text-center pt-2">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Score Obtained</div>
              <div className="text-2xl font-extrabold text-amber-400 tabular-nums">
                {lastFinishedTest.score}
              </div>
              <div className="text-[10px] text-slate-400">out of {lastFinishedTest.totalMarks}</div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Accuracy</div>
              <div className="text-2xl font-extrabold text-emerald-400 tabular-nums">
                {lastFinishedTest.accuracy}%
              </div>
              <div className="text-[10px] text-slate-400">on attempted</div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Positive Marks</div>
              <div className="text-2xl font-extrabold text-slate-200 tabular-nums">
                +{lastFinishedTest.positiveMarks}
              </div>
              <div className="text-[10px] text-slate-400">from correct answers</div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Negative Marks</div>
              <div className="text-2xl font-extrabold text-rose-400 tabular-nums">
                −{lastFinishedTest.negativeMarks}
              </div>
              <div className="text-[10px] text-slate-400">deducted (MCQ)</div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setLastFinishedTest(null)}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-colors"
            >
              Return to Mock Test Hub
            </button>
          </div>
        </div>

        {/* Detailed Question Review */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
            Detailed Question Breakdown & Explanations
          </h3>

          {lastFinishedTest.questions.map((q, idx) => {
            const userAns = lastFinishedTest.userAnswers[q.id];
            let isQCorrect = false;

            if (userAns !== undefined && userAns !== null && userAns !== '') {
              if (q.type === 'MCQ') isQCorrect = userAns === q.correctAnswer;
              else if (q.type === 'MSQ') {
                const corr = Array.isArray(q.correctAnswer) ? q.correctAnswer : [q.correctAnswer];
                const u = Array.isArray(userAns) ? userAns : [userAns];
                isQCorrect = corr.length === u.length && corr.every(i => u.includes(i));
              } else if (q.type === 'NAT') {
                const val = parseFloat(userAns);
                if (!isNaN(val) && typeof q.correctAnswer === 'object' && 'min' in q.correctAnswer) {
                  isQCorrect = val >= q.correctAnswer.min && val <= q.correctAnswer.max;
                }
              }
            }

            return (
              <div key={q.id} className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-slate-800 pb-2">
                  <span className="font-mono font-semibold text-slate-300">Question #{idx + 1} ({q.type})</span>
                  <div className="flex items-center gap-2">
                    {userAns === undefined ? (
                      <span className="text-slate-400 font-mono">Unattempted</span>
                    ) : isQCorrect ? (
                      <span className="text-emerald-400 font-mono font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>+{q.marks} Correct</span>
                      </span>
                    ) : (
                      <span className="text-rose-400 font-mono font-bold flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>−{q.negativeMarking} Incorrect</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-xs text-slate-100">
                  <KaTeXRenderer content={q.text} />
                </div>

                <div className="text-xs bg-slate-950 p-3 rounded-lg border border-slate-800 text-slate-300 space-y-1">
                  <div>
                    <strong className="text-slate-400">Your Answer: </strong>
                    <span className="font-mono text-amber-300">
                      {userAns !== undefined ? JSON.stringify(userAns) : 'None'}
                    </span>
                  </div>
                  <div>
                    <strong className="text-slate-400">Official Correct Answer: </strong>
                    <span className="font-mono text-emerald-400">
                      {typeof q.correctAnswer === 'object' && 'exact' in q.correctAnswer 
                        ? `${q.correctAnswer.exact} (Range: ${q.correctAnswer.min} to ${q.correctAnswer.max})`
                        : JSON.stringify(q.correctAnswer)}
                    </span>
                  </div>
                </div>

                <div className="text-xs text-slate-300 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 leading-relaxed">
                  <div className="font-mono font-bold text-[10px] text-slate-400 uppercase mb-1">
                    Solution Derivation:
                  </div>
                  <KaTeXRenderer content={q.explanation} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Active Test Session (TCS iON Examination Environment)
  if (!activeTestSession) return null;

  const activeQuestions = activeTestSession.questions;
  const currentQ = activeQuestions[currentQuestionIndex] || activeQuestions[0];
  const userAns = activeTestSession.userAnswers[currentQ.id];
  const isMarked = activeTestSession.markedForReview[currentQ.id] || false;

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-4">
      {/* Test Exam Top Banner */}
      <div className="bg-slate-950 border border-slate-800 rounded-xl px-5 py-3 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
            {activeTestSession.title}
          </h2>
          <div className="text-[11px] text-slate-400 font-mono">
            Question {currentQuestionIndex + 1} of {activeQuestions.length}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Scientific Calculator */}
          <button
            onClick={onOpenCalculator}
            className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 rounded-lg text-xs font-mono"
          >
            GATE Calc
          </button>

          {/* Timer Display */}
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 px-3 py-1.5 rounded-lg text-amber-400 font-mono text-sm font-bold">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="tabular-nums tracking-widest">{formatTimer(secondsRemaining)}</span>
          </div>

          {/* Submit Button */}
          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-colors shadow-xs"
          >
            Submit Test
          </button>
        </div>
      </div>

      {/* 2-Zone Exam Screen: Question Area (8 cols) + Palette (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Question Box (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 min-h-[420px] flex flex-col justify-between space-y-6">
            <div>
              {/* Question Metadata */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono">
                <span className="text-amber-400 font-bold uppercase">{currentQ.type} · +{currentQ.marks} Marks</span>
                <span className="text-slate-400">{currentQ.topicTitle}</span>
              </div>

              {/* Question Text */}
              <div className="text-sm text-slate-100 font-sans leading-relaxed pt-4">
                <KaTeXRenderer content={currentQ.text} />
              </div>

              {/* Options / Input */}
              <div className="mt-6 space-y-2">
                {currentQ.type === 'MCQ' && currentQ.options && (
                  <div className="space-y-2">
                    {currentQ.options.map(opt => (
                      <button
                        key={opt.id}
                        onClick={() => updateTestAnswer(currentQ.id, opt.id)}
                        className={`w-full text-left p-3.5 rounded-lg border text-xs flex items-center gap-3 transition-colors ${
                          userAns === opt.id
                            ? 'bg-amber-500/10 border-amber-500 text-amber-200'
                            : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-200'
                        }`}
                      >
                        <span className="w-6 h-6 rounded bg-slate-900 border border-slate-700 flex items-center justify-center font-mono font-bold shrink-0">
                          {opt.id}
                        </span>
                        <span className="flex-1">
                          <KaTeXRenderer content={opt.text} />
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                {currentQ.type === 'MSQ' && currentQ.options && (
                  <div className="space-y-2">
                    <div className="text-[11px] text-amber-400 font-mono">
                      *MSQ: Select one or more correct options.
                    </div>
                    {currentQ.options.map(opt => {
                      const curArr: string[] = Array.isArray(userAns) ? userAns : [];
                      const isChecked = curArr.includes(opt.id);

                      return (
                        <button
                          key={opt.id}
                          onClick={() => {
                            const next = isChecked ? curArr.filter(i => i !== opt.id) : [...curArr, opt.id];
                            updateTestAnswer(currentQ.id, next);
                          }}
                          className={`w-full text-left p-3.5 rounded-lg border text-xs flex items-center gap-3 transition-colors ${
                            isChecked
                              ? 'bg-amber-500/10 border-amber-500 text-amber-200'
                              : 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-200'
                          }`}
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
                  <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2">
                    <div className="text-xs text-slate-400">
                      Enter numerical response:
                    </div>
                    <input
                      type="text"
                      placeholder="e.g. 16.24"
                      value={userAns || ''}
                      onChange={e => updateTestAnswer(currentQ.id, e.target.value)}
                      className="w-full max-w-xs bg-slate-900 border border-slate-700 text-slate-100 text-sm font-mono px-3 py-2 rounded-lg focus:outline-hidden focus:border-amber-500"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Exam Controls */}
            <div className="flex items-center justify-between border-t border-slate-800 pt-4 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleMarkForReview(currentQ.id)}
                  className={`px-3 py-2 text-xs font-mono font-semibold rounded-lg border transition-colors ${
                    isMarked 
                      ? 'bg-purple-950/50 border-purple-500 text-purple-300' 
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {isMarked ? 'Marked for Review ✓' : 'Mark for Review'}
                </button>

                <button
                  onClick={() => updateTestAnswer(currentQ.id, undefined)}
                  className="px-3 py-2 text-xs font-mono text-slate-400 hover:text-white bg-slate-950 border border-slate-800 rounded-lg transition-colors"
                >
                  Clear Response
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 bg-slate-950 hover:bg-slate-800 disabled:opacity-30 border border-slate-800 rounded-lg text-xs font-semibold text-slate-300"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentQuestionIndex(prev => Math.min(activeQuestions.length - 1, prev + 1))}
                  disabled={currentQuestionIndex === activeQuestions.length - 1}
                  className="px-5 py-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-30 text-slate-950 rounded-lg text-xs font-bold transition-colors shadow-xs"
                >
                  Save & Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Question Palette (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
              Official Question Palette
            </h3>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-emerald-600 text-white flex items-center justify-center text-[9px] font-bold">✓</span>
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-slate-800 text-slate-300 flex items-center justify-center text-[9px]">•</span>
                <span>Not Answered</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded bg-purple-600 text-white flex items-center justify-center text-[9px]">★</span>
                <span>Marked Review</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3.5 h-3.5 rounded border border-slate-700 bg-slate-950 flex items-center justify-center text-[9px]">○</span>
                <span>Not Visited</span>
              </div>
            </div>

            {/* Palette Grid */}
            <div className="grid grid-cols-5 gap-2 max-h-[300px] overflow-y-auto p-1">
              {activeQuestions.map((q, idx) => {
                const ans = activeTestSession.userAnswers[q.id];
                const marked = activeTestSession.markedForReview[q.id];
                const hasAnswer = ans !== undefined && ans !== null && ans !== '' && !(Array.isArray(ans) && ans.length === 0);
                const isCurrent = currentQuestionIndex === idx;

                let btnBg = 'bg-slate-950 text-slate-400 border-slate-800';
                if (marked) {
                  btnBg = 'bg-purple-600 text-white border-purple-500 font-bold';
                } else if (hasAnswer) {
                  btnBg = 'bg-emerald-600 text-white border-emerald-500 font-bold';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-9 rounded-lg border text-xs font-mono transition-all flex items-center justify-center ${btnBg} ${
                      isCurrent ? 'ring-2 ring-amber-400' : ''
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Summary */}
            <div className="pt-3 border-t border-slate-800 text-xs font-mono text-slate-400 space-y-1">
              <div className="flex justify-between">
                <span>Total Answered:</span>
                <strong className="text-emerald-400">
                  {Object.values(activeTestSession.userAnswers).filter(a => a !== undefined && a !== '').length}
                </strong>
              </div>
              <div className="flex justify-between">
                <span>Marked for Review:</span>
                <strong className="text-purple-400">
                  {Object.values(activeTestSession.markedForReview).filter(Boolean).length}
                </strong>
              </div>
            </div>

            <button
              onClick={() => setIsSubmitModalOpen(true)}
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-xs transition-colors shadow-xs"
            >
              Submit & View Scorecard
            </button>
          </div>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 max-w-md w-full space-y-4">
            <h3 className="text-base font-bold text-white uppercase font-mono">
              Confirm Final Test Submission
            </h3>
            <p className="text-xs text-slate-300">
              Are you sure you want to conclude this test session? Your responses will be evaluated and marks calculated according to GATE 2027 negative marking rules.
            </p>
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs font-mono space-y-1 text-slate-400">
              <div>Total Questions: {activeQuestions.length}</div>
              <div>Answered: {Object.values(activeTestSession.userAnswers).filter(a => a !== undefined && a !== '').length}</div>
              <div>Marked Review: {Object.values(activeTestSession.markedForReview).filter(Boolean).length}</div>
            </div>
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-xs font-semibold"
              >
                Continue Test
              </button>
              <button
                onClick={handleSubmitTest}
                className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold"
              >
                Submit Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
