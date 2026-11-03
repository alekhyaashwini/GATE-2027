import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { SYLLABUS_NODES } from '../../data/syllabusData';
import { QUESTION_BANK } from '../../data/questionBank';
import { getBossDataForTopic } from '../../data/gameBossData';
import { KaTeXRenderer } from '../common/KaTeXRenderer';
import { 
  X, 
  BookOpen, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  Play, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';

interface InteractiveStudyGuideProps {
  topicId: string;
  onClose: () => void;
}

export const InteractiveStudyGuide: React.FC<InteractiveStudyGuideProps> = ({ topicId, onClose }) => {
  const { markTopicStudied, recordTopicPractice, setSelectedTopicId, setActiveTab, earnXp } = useApp();

  const node = SYLLABUS_NODES.find(n => n.id === topicId) || SYLLABUS_NODES[0];
  const conceptData = getBossDataForTopic(node.id, node.paper, node.topic);

  // Active step: 0 = Mental Model, 1 = Formulas, 2 = Traps, 3 = Diagnostic Check
  const [activeStep, setActiveStep] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [checkedAnswer, setCheckedAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const steps = [
    { title: 'Core Concept', desc: 'Mental model & intuition' },
    { title: 'Key Formulas', desc: 'Governing relations' },
    { title: 'GATE Traps', desc: 'Where candidates lose marks' },
    { title: 'Diagnostic Check', desc: 'Quick self-evaluation' }
  ];

  const handleVerifyDiagnostic = () => {
    if (!selectedOption) return;
    const opt = conceptData.checkpointPuzzle.options.find(o => o.id === selectedOption);
    setCheckedAnswer(true);
    if (opt?.isCorrect) {
      setIsCorrect(true);
      markTopicStudied(node.id, true);
      earnXp(50, 'Mastered Concept Diagnostic');
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-750 rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between bg-slate-950 px-6 py-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold uppercase text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                Interactive Study Guide
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {node.paper} · {node.section.split('—')[1] || node.section}
              </span>
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight mt-1">
              {node.topic}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Navigation */}
        <div className="bg-slate-950/60 px-6 py-2.5 border-b border-slate-800 flex items-center justify-between overflow-x-auto text-xs font-mono scrollbar-none">
          {steps.map((st, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                activeStep === i
                  ? 'bg-amber-500/15 text-amber-300 font-bold border border-amber-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                activeStep === i ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}>
                {i + 1}
              </span>
              <span>{st.title}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs flex-1 scrollbar-thin">
          {/* STEP 1: Core Concept & Mental Model */}
          {activeStep === 0 && (
            <div className="space-y-4 max-w-2xl mx-auto py-2">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
                <div className="font-mono text-[10px] uppercase font-bold text-amber-400 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span>Physical & Mathematical Intuition</span>
                </div>
                <h3 className="text-base font-bold text-white">
                  {conceptData.conceptCards[0]?.title || node.topic}
                </h3>
                <p className="text-slate-300 leading-relaxed text-xs">
                  {conceptData.conceptCards[0]?.content || node.description}
                </p>
              </div>

              {/* Subtopics Checklist */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <div className="font-mono text-[10px] uppercase text-slate-400 font-bold">
                  Syllabus Breakdown
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                  {node.subtopics.map((sub, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Key Formulas & Derivations */}
          {activeStep === 1 && (
            <div className="space-y-4 max-w-2xl mx-auto py-2">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                <div className="font-mono text-[10px] uppercase font-bold text-sky-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  <span>Must-Know Governing Equations</span>
                </div>
                <p className="text-slate-400 text-xs">
                  Commit these governing relationships to memory. In GATE, 80% of numerical calculations use these directly.
                </p>

                <div className="space-y-3 pt-2">
                  {node.keyFormulas?.map((f, idx) => (
                    <div key={idx} className="p-4 bg-slate-900 rounded-lg border border-slate-800 font-mono text-center text-slate-100 overflow-x-auto">
                      <KaTeXRenderer content={`$$${f}$$`} block />
                    </div>
                  )) || (
                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 font-mono text-center text-slate-200">
                      <KaTeXRenderer content="$$f(x) = y$$" block />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Classic GATE Traps */}
          {activeStep === 2 && (
            <div className="space-y-4 max-w-2xl mx-auto py-2">
              <div className="p-4 bg-slate-950 rounded-xl border border-rose-500/20 space-y-3">
                <div className="font-mono text-[10px] uppercase font-bold text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-400" />
                  <span>Where Aspirants Lose Marks in GATE</span>
                </div>
                <h3 className="text-sm font-bold text-white">Avoid Distractor Pitfalls</h3>
                
                <div className="space-y-2.5 text-slate-300">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <strong className="text-amber-400 font-mono text-xs">Trap 1: Coordinate Frame Reference Inversion:</strong>
                    <p className="text-slate-400 text-xs mt-1">
                      Always double check whether you are transforming from frame A to frame B ($^A_B T$) or expressing point P in frame B ($^B P = (^A_B R)^T (^A P - d)$).
                    </p>
                  </div>

                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <strong className="text-amber-400 font-mono text-xs">Trap 2: Calculator Angle Mode (RAD vs DEG):</strong>
                    <p className="text-slate-400 text-xs mt-1">
                      Trigonometric functions in robot kinematics are computed in degrees for joint angles, while numerical calculus algorithms use radians. Always verify your calculator mode.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Diagnostic Quick Check */}
          {activeStep === 3 && (
            <div className="space-y-4 max-w-2xl mx-auto py-2">
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                <div className="font-mono text-[10px] uppercase font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Diagnostic Intuition Check</span>
                </div>

                <div className="text-sm font-semibold text-slate-100 leading-relaxed font-sans">
                  <KaTeXRenderer content={conceptData.checkpointPuzzle.prompt} />
                </div>

                <div className="space-y-2 pt-2">
                  {conceptData.checkpointPuzzle.options.map(opt => {
                    const isSelected = selectedOption === opt.id;
                    let borderClass = 'border-slate-800 bg-slate-900 hover:border-slate-700';

                    if (checkedAnswer) {
                      if (opt.isCorrect) borderClass = 'border-emerald-500 bg-emerald-950/20 text-emerald-200';
                      else if (isSelected && !opt.isCorrect) borderClass = 'border-rose-500 bg-rose-950/20 text-rose-300';
                    } else if (isSelected) {
                      borderClass = 'border-amber-400 bg-amber-500/10 text-amber-200';
                    }

                    return (
                      <button
                        key={opt.id}
                        disabled={checkedAnswer}
                        onClick={() => setSelectedOption(opt.id)}
                        className={`w-full text-left p-3 rounded-lg border transition-all flex items-start gap-3 ${borderClass}`}
                      >
                        <span className="font-mono font-bold text-xs shrink-0 mt-0.5">{opt.id}.</span>
                        <div className="text-xs flex-1">
                          <KaTeXRenderer content={opt.text} />
                          {checkedAnswer && isSelected && (
                            <div className="mt-2 text-[11px] font-sans font-medium text-slate-300 bg-slate-950 p-2 rounded border border-slate-800">
                              {opt.feedback}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {checkedAnswer && (
                  <div className={`p-3 rounded-lg flex items-center gap-2 font-mono text-xs ${
                    isCorrect ? 'bg-emerald-950/30 border border-emerald-500/40 text-emerald-300' : 'bg-rose-950/30 border border-rose-500/40 text-rose-300'
                  }`}>
                    {isCorrect ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertTriangle className="w-4 h-4 text-rose-400" />}
                    <span>{isCorrect ? 'Correct intuition! Topic marked studied.' : 'Incorrect intuition. Review the steps above.'}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className="px-3.5 py-1.5 rounded-lg bg-slate-800 disabled:opacity-30 text-slate-300 text-xs font-medium"
          >
            Previous
          </button>

          <div className="flex items-center gap-2">
            {activeStep < 3 ? (
              <button
                onClick={() => setActiveStep(prev => prev + 1)}
                className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <span>Continue</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : !checkedAnswer ? (
              <button
                onClick={handleVerifyDiagnostic}
                disabled={!selectedOption}
                className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-bold text-xs"
              >
                Verify Answer
              </button>
            ) : (
              <button
                onClick={() => {
                  onClose();
                  setSelectedTopicId(node.id);
                  setActiveTab('practice');
                }}
                className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-slate-950" />
                <span>Practice Topic Questions</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
