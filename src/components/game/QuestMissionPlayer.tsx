import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { SYLLABUS_NODES } from '../../data/syllabusData';
import { QUESTION_BANK } from '../../data/questionBank';
import { getBossDataForTopic, TopicBossData } from '../../data/gameBossData';
import { Question } from '../../types';
import { KaTeXRenderer } from '../common/KaTeXRenderer';
import { 
  X, 
  Swords, 
  Shield, 
  Heart, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  AlertTriangle, 
  BookOpen, 
  RotateCcw, 
  Trophy, 
  Play, 
  Flame, 
  Lightbulb, 
  HelpCircle,
  Award,
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuestMissionPlayerProps {
  topicId: string;
  onClose: () => void;
}

export const QuestMissionPlayer: React.FC<QuestMissionPlayerProps> = ({ topicId, onClose }) => {
  const { activePaper, earnXp, markTopicStudied, recordTopicPractice, setSelectedTopicId, setActiveTab } = useApp();

  const node = useMemo(() => {
    return SYLLABUS_NODES.find(n => n.id === topicId) || SYLLABUS_NODES[0];
  }, [topicId]);

  const bossData: TopicBossData = useMemo(() => {
    return getBossDataForTopic(node.id, node.paper, node.topic);
  }, [node]);

  // Topic questions
  const topicQuestions = useMemo(() => {
    const list = QUESTION_BANK.filter(q => q.topicId === node.id);
    if (list.length > 0) return list;
    // Fallback to active paper questions
    return QUESTION_BANK.filter(q => q.paper === node.paper);
  }, [node]);

  // Game Phases: 'intel' -> 'checkpoint' -> 'battle' -> 'victory' (or 'defeat')
  const [phase, setPhase] = useState<'intel' | 'checkpoint' | 'battle' | 'victory' | 'defeat'>('intel');
  const [intelCardIndex, setIntelCardIndex] = useState(0);

  // Checkpoint puzzle state
  const [selectedPuzzleOption, setSelectedPuzzleOption] = useState<string | null>(null);
  const [puzzleAnswered, setPuzzleAnswered] = useState(false);
  const [puzzleSuccess, setPuzzleSuccess] = useState(false);

  // Battle state
  const [bossHp, setBossHp] = useState(100);
  const [playerShield, setPlayerShield] = useState(100);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userSelectedOption, setUserSelectedOption] = useState<string>('');
  const [userNatInput, setUserNatInput] = useState<string>('');
  const [battleFeedback, setBattleFeedback] = useState<{ isHit: boolean; text: string } | null>(null);
  const [eliminatedOptions, setEliminatedOptions] = useState<string[]>([]);
  const [showFormulaScroll, setShowFormulaScroll] = useState(false);
  const [showTacticalHint, setShowTacticalHint] = useState(false);
  const [criticalStrikeCharged, setCriticalStrikeCharged] = useState(false);

  const currentQ: Question = topicQuestions[currentQuestionIndex] || topicQuestions[0];

  // 1. Checkpoint handling
  const handleVerifyPuzzle = () => {
    if (!selectedPuzzleOption) return;
    const opt = bossData.checkpointPuzzle.options.find(o => o.id === selectedPuzzleOption);
    setPuzzleAnswered(true);
    if (opt?.isCorrect) {
      setPuzzleSuccess(true);
      setCriticalStrikeCharged(true);
      earnXp(50, 'Passed Concept Diagnostic Checkpoint');
    } else {
      setPuzzleSuccess(false);
    }
  };

  // 2. Battle Question Check
  const handleAttackBoss = () => {
    if (!currentQ) return;

    let isCorrect = false;
    if (currentQ.type === 'MCQ') {
      isCorrect = userSelectedOption === currentQ.correctAnswer;
    } else if (currentQ.type === 'MSQ') {
      isCorrect = userSelectedOption === currentQ.correctAnswer;
    } else if (currentQ.type === 'NAT') {
      const val = parseFloat(userNatInput);
      if (!isNaN(val) && typeof currentQ.correctAnswer === 'object' && 'min' in currentQ.correctAnswer) {
        isCorrect = val >= currentQ.correctAnswer.min && val <= currentQ.correctAnswer.max;
      }
    }

    recordTopicPractice(node.id, isCorrect);

    if (isCorrect) {
      // Player deals damage to Boss!
      const damage = criticalStrikeCharged ? 55 : 40;
      const nextHp = Math.max(0, bossHp - damage);
      setBossHp(nextHp);
      setBattleFeedback({
        isHit: true,
        text: `⚔️ Critical Hit! You dealt ${damage} DMG to ${bossData.bossName}! Accurate mathematical reasoning penetrated their defenses!`
      });
      earnXp(40, 'Accurate Exam Strike on Boss');

      if (nextHp <= 0) {
        // VICTORY!
        setTimeout(() => {
          setPhase('victory');
          markTopicStudied(node.id, true);
          earnXp(250, `Defeated Boss ${bossData.bossName}`);
          try {
            confetti({ particleCount: 100, spread: 80, origin: { y: 0.5 } });
          } catch {}
        }, 800);
      } else {
        // Next question if available
        if (currentQuestionIndex < topicQuestions.length - 1) {
          setTimeout(() => {
            setCurrentQuestionIndex(prev => prev + 1);
            setUserSelectedOption('');
            setUserNatInput('');
            setBattleFeedback(null);
            setEliminatedOptions([]);
            setShowFormulaScroll(false);
            setShowTacticalHint(false);
          }, 1500);
        }
      }
    } else {
      // Boss counter-attacks player shield!
      const damage = 30;
      const nextShield = Math.max(0, playerShield - damage);
      setPlayerShield(nextShield);
      setBattleFeedback({
        isHit: false,
        text: `⚠️ Trap Triggered! ${bossData.bossName} counter-attacked for ${damage} Shield DMG! ${currentQ.trapAlert || 'Review the distractor analysis below.'}`
      });

      if (nextShield <= 0) {
        setTimeout(() => setPhase('defeat'), 1000);
      }
    }
  };

  // Power-up: Distractor Shield (eliminate 1 wrong option)
  const handleUseDistractorShield = () => {
    if (!currentQ.options || currentQ.options.length <= 2) return;
    const wrongOpts = currentQ.options.filter(o => o.id !== currentQ.correctAnswer && !eliminatedOptions.includes(o.id));
    if (wrongOpts.length > 0) {
      setEliminatedOptions(prev => [...prev, wrongOpts[0].id]);
      earnXp(10, 'Used Tactical Distractor Elimination');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-750 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Battle HUD */}
        <div className="flex items-center justify-between bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-6 py-3.5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
              <Swords className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase text-amber-400 tracking-wider">
                  QUEST MISSION · {node.paper} WORLD
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                  {node.topic}
                </span>
              </div>
              <h2 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                <span>Trial: {bossData.bossName}</span>
                <span className="text-xs text-slate-400 font-normal">({bossData.element})</span>
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Phase indicator pills */}
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px]">
              <span className={`px-2 py-0.5 rounded-md ${phase === 'intel' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}>
                1. Intel
              </span>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              <span className={`px-2 py-0.5 rounded-md ${phase === 'checkpoint' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}>
                2. Checkpoint
              </span>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              <span className={`px-2 py-0.5 rounded-md ${phase === 'battle' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}>
                3. Boss Battle
              </span>
            </div>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Phase Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs flex-1 scrollbar-thin">
          
          {/* ============================================================== */}
          {/* PHASE 1: CONCEPT INTEL & HOLOGRAM DOSSIER */}
          {/* ============================================================== */}
          {phase === 'intel' && (
            <div className="space-y-6 max-w-2xl mx-auto py-2">
              {/* Lore Card */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <Flame className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                    Enemy Reconnaissance Dossier
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">{bossData.bossName}</div>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    {bossData.lore}
                  </p>
                  <div className="mt-2 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <strong>Known Vulnerability:</strong> {bossData.bossWeakness}
                  </div>
                </div>
              </div>

              {/* Interactive Intel Card Selector */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-mono font-bold text-slate-300 uppercase tracking-wider text-[11px]">
                    Concept Intel Briefings ({intelCardIndex + 1} of {bossData.conceptCards.length})
                  </span>
                  <div className="flex items-center gap-1">
                    {bossData.conceptCards.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setIntelCardIndex(idx)}
                        className={`w-6 h-6 rounded-md font-mono text-[10px] font-bold transition-all ${
                          intelCardIndex === idx
                            ? 'bg-amber-500 text-slate-950 scale-105'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Intel Card */}
                {(() => {
                  const card = bossData.conceptCards[intelCardIndex];
                  return (
                    <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3 animate-in fade-in duration-150">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                          {card.badge}
                        </span>
                        <span className="text-slate-500 text-[10px] font-mono">Exam Weaponry</span>
                      </div>

                      <h3 className="text-base font-bold text-white">{card.title}</h3>
                      <p className="text-slate-300 leading-relaxed text-xs">{card.content}</p>

                      {card.keyFormula && (
                        <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 font-mono text-center text-amber-300 overflow-x-auto">
                          <KaTeXRenderer content={card.keyFormula} block />
                        </div>
                      )}

                      {card.pitfallWarning && (
                        <div className="p-3 bg-rose-950/20 border border-rose-500/30 rounded-lg text-rose-300 flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                          <div>
                            <strong className="font-mono text-rose-400">GATE Trap Warning: </strong>
                            <span>{card.pitfallWarning}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setIntelCardIndex(prev => Math.max(0, prev - 1))}
                  disabled={intelCardIndex === 0}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800 disabled:opacity-30 text-slate-300 text-xs font-medium"
                >
                  Previous Intel
                </button>

                {intelCardIndex < bossData.conceptCards.length - 1 ? (
                  <button
                    onClick={() => setIntelCardIndex(prev => prev + 1)}
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-xs flex items-center gap-1.5"
                  >
                    <span>Next Intel Card</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => setPhase('checkpoint')}
                    className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-sm transition-transform hover:scale-105"
                  >
                    <Zap className="w-4 h-4 fill-slate-950" />
                    <span>Proceed to Diagnostic Checkpoint</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* PHASE 2: DIAGNOSTIC GATE / CHECKPOINT PUZZLE */}
          {/* ============================================================== */}
          {phase === 'checkpoint' && (
            <div className="space-y-6 max-w-2xl mx-auto py-2">
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                <div className="text-[10px] font-mono uppercase font-bold text-amber-400 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Phase 2: Intuition Checkpoint</span>
                </div>
                <h3 className="text-base font-bold text-white">Prove Your Foundation Before Entering Battle</h3>
                <p className="text-slate-400 text-xs">
                  Pass this diagnostic question to charge a <strong>1.5x Critical Strike</strong> on the Boss!
                </p>
              </div>

              {/* Puzzle Card */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <div className="text-sm font-semibold text-slate-100 leading-relaxed font-sans">
                  <KaTeXRenderer content={bossData.checkpointPuzzle.prompt} />
                </div>

                {/* Puzzle Options */}
                <div className="space-y-2 pt-2">
                  {bossData.checkpointPuzzle.options.map(opt => {
                    const isSelected = selectedPuzzleOption === opt.id;
                    let borderClass = 'border-slate-800 bg-slate-900 hover:border-slate-700';

                    if (puzzleAnswered) {
                      if (opt.isCorrect) borderClass = 'border-emerald-500 bg-emerald-950/20 text-emerald-200';
                      else if (isSelected && !opt.isCorrect) borderClass = 'border-rose-500 bg-rose-950/20 text-rose-300';
                    } else if (isSelected) {
                      borderClass = 'border-amber-400 bg-amber-500/10 text-amber-200';
                    }

                    return (
                      <button
                        key={opt.id}
                        disabled={puzzleAnswered}
                        onClick={() => setSelectedPuzzleOption(opt.id)}
                        className={`w-full text-left p-3 rounded-lg border transition-all flex items-start gap-3 ${borderClass}`}
                      >
                        <span className="font-mono font-bold text-xs shrink-0 mt-0.5">{opt.id}.</span>
                        <div className="text-xs flex-1">
                          <KaTeXRenderer content={opt.text} />
                          {puzzleAnswered && isSelected && (
                            <div className="mt-2 text-[11px] font-sans font-medium text-slate-300 bg-slate-950/80 p-2 rounded border border-slate-800">
                              {opt.feedback}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Verification result */}
                {puzzleAnswered && (
                  <div className={`p-3 rounded-lg flex items-center gap-2 font-mono text-xs ${
                    puzzleSuccess 
                      ? 'bg-emerald-950/30 border border-emerald-500/40 text-emerald-300' 
                      : 'bg-rose-950/30 border border-rose-500/40 text-rose-300'
                  }`}>
                    {puzzleSuccess ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertTriangle className="w-4 h-4 text-rose-400" />}
                    <span>
                      {puzzleSuccess
                        ? 'Diagnostic Passed! Critical Strike Charged for Boss Encounter (+50 XP)!'
                        : 'Diagnostic missed. Study the reasoning, then challenge the Boss with extra care.'}
                    </span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setPhase('intel')}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs"
                >
                  Review Intel
                </button>

                {!puzzleAnswered ? (
                  <button
                    disabled={!selectedPuzzleOption}
                    onClick={handleVerifyPuzzle}
                    className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-bold text-xs"
                  >
                    Verify Answer
                  </button>
                ) : (
                  <button
                    onClick={() => setPhase('battle')}
                    className="px-5 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-2 shadow-md animate-pulse"
                  >
                    <Swords className="w-4 h-4" />
                    <span>Engage {bossData.bossName}!</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* PHASE 3: BOSS BATTLE ARENA (EXAM SOLVER GAME) */}
          {/* ============================================================== */}
          {phase === 'battle' && (
            <div className="space-y-5">
              {/* Boss & Player Status Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Boss Health Bar */}
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-rose-400 flex items-center gap-1.5">
                      <Flame className="w-4 h-4 text-rose-500 fill-rose-500" />
                      <span>{bossData.bossName}</span>
                    </span>
                    <span className="tabular-nums text-slate-400">{bossHp} / 100 HP</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-slate-800">
                    <div 
                      className="bg-gradient-to-r from-rose-600 to-amber-500 h-full transition-all duration-300"
                      style={{ width: `${bossHp}%` }}
                    />
                  </div>
                </div>

                {/* Player Shield Bar */}
                <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-sky-400 flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-sky-400" />
                      <span>Candidate Exam Shield</span>
                    </span>
                    <span className="tabular-nums text-slate-400">{playerShield} / 100</span>
                  </div>
                  <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-slate-800">
                    <div 
                      className="bg-gradient-to-r from-sky-500 to-emerald-400 h-full transition-all duration-300"
                      style={{ width: `${playerShield}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Power-up Inventory Bar */}
              <div className="flex items-center justify-between bg-slate-950 border border-slate-800 p-2.5 rounded-xl text-[11px] font-mono">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Tactical Exam Arsenal:</span>
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleUseDistractorShield}
                    disabled={eliminatedOptions.length >= 2 || !currentQ.options}
                    className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 disabled:opacity-30 border border-slate-700 text-slate-300 rounded-md transition-colors"
                    title="Eliminate 1 wrong option"
                  >
                    🛡️ Distractor Shield ({2 - eliminatedOptions.length} left)
                  </button>

                  <button
                    onClick={() => setShowFormulaScroll(!showFormulaScroll)}
                    className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 rounded-md transition-colors"
                    title="Reveal key formula from Codex"
                  >
                    📜 Formula Scroll
                  </button>

                  <button
                    onClick={() => setShowTacticalHint(!showTacticalHint)}
                    className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 rounded-md transition-colors"
                    title="Get a tactical hint"
                  >
                    💡 Hint
                  </button>
                </div>
              </div>

              {/* Active Formula Scroll Popout */}
              {showFormulaScroll && (
                <div className="p-3 bg-slate-950 border border-amber-500/30 rounded-xl text-xs space-y-1">
                  <div className="font-mono text-amber-400 font-bold uppercase text-[10px]">Governing Formula Weaponry:</div>
                  <div className="font-mono text-center text-slate-200">
                    <KaTeXRenderer content={node.keyFormulas?.[0] || '$$\\sum \\text{Forces} = 0$$'} block />
                  </div>
                </div>
              )}

              {/* Active Hint Popout */}
              {showTacticalHint && (
                <div className="p-3 bg-slate-950 border border-sky-500/30 rounded-xl text-xs text-slate-300 space-y-1">
                  <div className="font-mono text-sky-400 font-bold uppercase text-[10px]">Tactical Clue:</div>
                  <p>{currentQ.hints?.[0] || 'Derive using standard syllabus equations step-by-step.'}</p>
                </div>
              )}

              {/* Battle Question Box */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800/80 pb-2">
                  <span>{currentQ.provenanceLabel} · {currentQ.type} · {currentQ.marks} Marks</span>
                  <span className="text-amber-400 font-bold">Question {currentQuestionIndex + 1} of {topicQuestions.length}</span>
                </div>

                <div className="text-xs text-slate-100 leading-relaxed font-sans">
                  <KaTeXRenderer content={currentQ.text} />
                </div>

                {/* MCQ Options */}
                {currentQ.type === 'MCQ' && currentQ.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {currentQ.options.map(opt => {
                      const isEliminated = eliminatedOptions.includes(opt.id);
                      const isSelected = userSelectedOption === opt.id;

                      return (
                        <button
                          key={opt.id}
                          disabled={isEliminated}
                          onClick={() => setUserSelectedOption(opt.id)}
                          className={`p-3 rounded-lg border text-left font-mono text-xs transition-all flex items-start gap-2.5 ${
                            isEliminated
                              ? 'opacity-20 line-through bg-slate-950 border-slate-900 cursor-not-allowed'
                              : isSelected
                              ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <span className="font-bold shrink-0">{opt.id}.</span>
                          <span className="flex-1">
                            <KaTeXRenderer content={opt.text} />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* NAT Input */}
                {currentQ.type === 'NAT' && (
                  <div className="pt-2 flex items-center gap-3 max-w-sm">
                    <input
                      type="text"
                      placeholder="Enter numerical solution..."
                      value={userNatInput}
                      onChange={e => setUserNatInput(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 text-slate-200 text-xs px-3 py-2 rounded-lg font-mono focus:outline-hidden focus:border-amber-500"
                    />
                  </div>
                )}

                {/* Battle Feedback banner */}
                {battleFeedback && (
                  <div className={`p-3 rounded-lg text-xs font-mono flex items-start gap-2 ${
                    battleFeedback.isHit
                      ? 'bg-emerald-950/40 border border-emerald-500/40 text-emerald-300'
                      : 'bg-rose-950/40 border border-rose-500/40 text-rose-300'
                  }`}>
                    {battleFeedback.isHit ? <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" /> : <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />}
                    <span>{battleFeedback.text}</span>
                  </div>
                )}
              </div>

              {/* Attack Action */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-white text-xs font-mono"
                >
                  Retreat to Base
                </button>

                <button
                  onClick={handleAttackBoss}
                  disabled={!userSelectedOption && !userNatInput}
                  className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 disabled:opacity-40 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
                >
                  <Swords className="w-4 h-4 fill-slate-950" />
                  <span>Execute Attack Strike</span>
                </button>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* PHASE 4: VICTORY & LOOT DROP */}
          {/* ============================================================== */}
          {phase === 'victory' && (
            <div className="space-y-6 max-w-md mx-auto text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 mx-auto flex items-center justify-center animate-bounce">
                <Trophy className="w-8 h-8 fill-amber-400 text-amber-400" />
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase font-bold text-emerald-400 tracking-wider">
                  Trial Conquered!
                </span>
                <h2 className="text-2xl font-extrabold text-white">Boss Defeated!</h2>
                <p className="text-xs text-slate-400">
                  You conquered <strong className="text-slate-200">{bossData.bossName}</strong> with mathematical rigor and precision.
                </p>
              </div>

              {/* Loot Box */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3 font-mono text-xs text-left">
                <div className="text-[10px] text-slate-400 uppercase font-bold border-b border-slate-800 pb-1">
                  Rewards Claimed:
                </div>
                <div className="flex items-center justify-between text-amber-400">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> +250 Quest XP
                  </span>
                  <span>Claimed ✓</span>
                </div>
                <div className="flex items-center justify-between text-emerald-400">
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4" /> {bossData.rewardRelic}
                  </span>
                  <span>Unlocked ✓</span>
                </div>
                <div className="flex items-center justify-between text-sky-400">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Topic Mastery Marked
                  </span>
                  <span>100% ✓</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    setSelectedTopicId(node.id);
                    setActiveTab('notes');
                  }}
                  className="flex-1 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Inspect Notes</span>
                </button>

                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5"
                >
                  <span>Return to World Map</span>
                </button>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* DEFEAT SCREEN */}
          {/* ============================================================== */}
          {phase === 'defeat' && (
            <div className="space-y-6 max-w-md mx-auto text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-400 mx-auto flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-rose-400" />
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase font-bold text-rose-400 tracking-wider">
                  Shield Depleted
                </span>
                <h2 className="text-2xl font-extrabold text-white">Traps Overcame Your Defenses</h2>
                <p className="text-xs text-slate-400">
                  {bossData.bossName} took advantage of distractor traps. Review the concept intel and formulas, then counter-attack!
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setPhase('intel');
                    setBossHp(100);
                    setPlayerShield(100);
                    setBattleFeedback(null);
                  }}
                  className="flex-1 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Re-Attempt Trial</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
