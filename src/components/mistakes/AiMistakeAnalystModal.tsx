import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { SYLLABUS_NODES } from '../../data/syllabusData';
import { KaTeXRenderer } from '../common/KaTeXRenderer';
import { 
  X, 
  Bot, 
  Sparkles, 
  Send, 
  RotateCw, 
  AlertTriangle, 
  CheckCircle2, 
  BookOpen, 
  ArrowRight,
  TrendingDown,
  Target,
  Clock,
  Layers,
  HelpCircle,
  Activity
} from 'lucide-react';

interface AiMistakeAnalystModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiMistakeAnalystModal: React.FC<AiMistakeAnalystModalProps> = ({ isOpen, onClose }) => {
  const { 
    activePaper, 
    mistakes, 
    topicProgress, 
    setSelectedTopicId, 
    setActiveTab, 
    resolveMistake 
  } = useApp();

  const [activeTabMode, setActiveTabMode] = useState<'dashboard' | 'where' | 'focus' | 'ask'>('dashboard');
  const [loading, setLoading] = useState(false);
  const [aiDiagnosis, setAiDiagnosis] = useState<string | null>(null);
  const [chatQuery, setChatQuery] = useState('');
  const [chatHistory, setChatHistory] = useState<{ sender: 'ai' | 'user'; text: string }[]>([]);
  const [chatLoading, setChatLoading] = useState(false);

  if (!isOpen) return null;

  // Filter mistakes for active paper
  const paperMistakes = mistakes.filter(m => m.paper === activePaper);
  const unresolvedMistakes = paperMistakes.filter(m => !m.resolved);
  const resolvedMistakes = paperMistakes.filter(m => m.resolved);

  // Group mistakes by category
  const categoryCounts = useMemo(() => {
    const counts = {
      concept_gap: 0,
      calculation_error: 0,
      formula_recall: 0,
      option_trap: 0
    };
    paperMistakes.forEach(m => {
      if (m.category in counts) {
        counts[m.category as keyof typeof counts]++;
      }
    });
    return counts;
  }, [paperMistakes]);

  const totalMistakesCount = paperMistakes.length || 1; // avoid divide by 0
  const pctConcept = Math.round((categoryCounts.concept_gap / totalMistakesCount) * 100);
  const pctCalc = Math.round((categoryCounts.calculation_error / totalMistakesCount) * 100);
  const pctFormula = Math.round((categoryCounts.formula_recall / totalMistakesCount) * 100);
  const pctTrap = Math.round((categoryCounts.option_trap / totalMistakesCount) * 100);

  // Group mistakes by topic to find which topics need improvement
  const topicMistakeMap = useMemo(() => {
    const map: Record<string, { topicId: string; topicTitle: string; count: number; unresolved: number }> = {};
    paperMistakes.forEach(m => {
      if (!map[m.topicId]) {
        map[m.topicId] = {
          topicId: m.topicId,
          topicTitle: m.topicTitle,
          count: 0,
          unresolved: 0
        };
      }
      map[m.topicId].count++;
      if (!m.resolved) map[m.topicId].unresolved++;
    });
    return Object.values(map).sort((a, b) => b.unresolved - a.unresolved || b.count - a.count);
  }, [paperMistakes]);

  // Overall accuracy rate for active paper
  const overallAccuracy = useMemo(() => {
    let totalPracticed = 0;
    let totalCorrect = 0;
    Object.entries(topicProgress).forEach(([tId, p]) => {
      const node = SYLLABUS_NODES.find(n => n.id === tId);
      if (node && node.paper === activePaper) {
        totalPracticed += p.practicedCount || 0;
        totalCorrect += p.correctCount || 0;
      }
    });
    if (totalPracticed === 0) return 75; // default benchmark
    return Math.round((totalCorrect / totalPracticed) * 100);
  }, [topicProgress, activePaper]);

  const fetchAiDiagnosis = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/ai/analyze-mistakes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mistakes: paperMistakes,
          paper: activePaper
        })
      });
      const data = await res.json();
      if (data.success) {
        setAiDiagnosis(data.response);
      }
    } catch {
      setAiDiagnosis('Unable to contact AI Mistake Doctor. Please verify your local server connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleSendChat = async () => {
    if (!chatQuery.trim()) return;
    const query = chatQuery.trim();
    setChatQuery('');
    setChatHistory(prev => [...prev, { sender: 'user', text: query }]);
    setChatLoading(true);

    try {
      const res = await fetch('/api/ai/analyze-mistakes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mistakes: paperMistakes,
          paper: activePaper,
          userQuery: query
        })
      });
      const data = await res.json();
      if (data.success) {
        setChatHistory(prev => [...prev, { sender: 'ai', text: data.response }]);
      } else {
        setChatHistory(prev => [...prev, { sender: 'ai', text: 'Sorry, I could not generate an answer right now.' }]);
      }
    } catch {
      setChatHistory(prev => [...prev, { sender: 'ai', text: 'Error contacting AI analyst service.' }]);
    } finally {
      setChatLoading(false);
    }
  };

  const handleJumpToPractice = (topicId: string) => {
    setSelectedTopicId(topicId);
    setActiveTab('practice');
    onClose();
  };

  const handleJumpToNotes = (topicId: string) => {
    setSelectedTopicId(topicId);
    setActiveTab('notes');
    onClose();
  };

  // SVG circular gauge math helpers
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const accuracyStrokeOffset = circumference - (overallAccuracy / 100) * circumference;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-5 animate-in fade-in duration-150">
      <div 
        className="bg-slate-900 border border-slate-750 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between bg-slate-950 px-6 py-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400">
              <Bot className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Mistake Analyzer & Error Diagnostic Doctor
                </h2>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 font-semibold border border-rose-500/30">
                  GATE {activePaper}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Visual circular diagnostic dashboard pinpointing root causes and priority focus areas
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sub-nav Tabs inside Popup */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-slate-950/70 border-b border-slate-800/80 text-xs overflow-x-auto">
          <button
            onClick={() => setActiveTabMode('dashboard')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
              activeTabMode === 'dashboard'
                ? 'bg-amber-500 text-slate-950 shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Circle Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTabMode('where')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
              activeTabMode === 'where'
                ? 'bg-amber-500 text-slate-950 shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Where Was The Mistake? ({paperMistakes.length})</span>
          </button>

          <button
            onClick={() => setActiveTabMode('focus')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
              activeTabMode === 'focus'
                ? 'bg-amber-500 text-slate-950 shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>Topics To Improve ({topicMistakeMap.length})</span>
          </button>

          <button
            onClick={() => setActiveTabMode('ask')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
              activeTabMode === 'ask'
                ? 'bg-amber-500 text-slate-950 shadow-xs'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            <span>Ask Mistake Doctor</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 scrollbar-thin">
          {/* TAB 1: CIRCULAR VISUAL DASHBOARD */}
          {activeTabMode === 'dashboard' && (
            <div className="space-y-6">
              {/* 3 Circular Gauges Container */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* CIRCLE 1: Accuracy & Error Rate */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col items-center text-center space-y-3 relative overflow-hidden">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Overall Accuracy & Error Rate
                  </div>

                  <div className="relative w-28 h-28 flex items-center justify-center my-1">
                    <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                      {/* Background Ring */}
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        className="stroke-slate-800"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      {/* Accuracy Progress Ring */}
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke={overallAccuracy >= 75 ? '#10b981' : overallAccuracy >= 50 ? '#f59e0b' : '#f43f5e'}
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={accuracyStrokeOffset}
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-2xl font-bold font-mono text-white">
                        {overallAccuracy}%
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Accuracy
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-300">
                    {overallAccuracy >= 75 ? (
                      <span className="text-emerald-400 font-semibold flex items-center justify-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Solid Exam Tempo
                      </span>
                    ) : (
                      <span className="text-amber-400 font-semibold flex items-center justify-center gap-1">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Focus on Traps Required
                      </span>
                    )}
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {100 - overallAccuracy}% error margin across practiced sets
                    </div>
                  </div>
                </div>

                {/* CIRCLE 2: Root-Cause Donut Meter */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col items-center text-center space-y-3">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Error Root Cause Breakdown
                  </div>

                  <div className="relative w-28 h-28 flex items-center justify-center my-1">
                    <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r={radius} className="stroke-slate-800" strokeWidth="8" fill="transparent" />
                      {/* Concept Gap Segment */}
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="#8b5cf6" // purple
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - (pctConcept / 100) * circumference}
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-xl font-bold font-mono text-white">
                        {paperMistakes.length}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Logged
                      </span>
                    </div>
                  </div>

                  {/* Root Cause Legend */}
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] font-mono text-left w-full pt-1">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0"></span>
                      <span className="text-slate-300">Concept: {pctConcept}%</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
                      <span className="text-slate-300">Calc: {pctCalc}%</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                      <span className="text-slate-300">Formula: {pctFormula}%</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                      <span className="text-slate-300">Trap: {pctTrap}%</span>
                    </div>
                  </div>
                </div>

                {/* CIRCLE 3: Top Priority Topic Bleed Meter */}
                <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 flex flex-col items-center text-center space-y-3">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Top Priority Bleed Topic
                  </div>

                  <div className="relative w-28 h-28 flex items-center justify-center my-1">
                    <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r={radius} className="stroke-slate-800" strokeWidth="8" fill="transparent" />
                      <circle
                        cx="50"
                        cy="50"
                        r={radius}
                        stroke="#f43f5e"
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference - (Math.min(100, (topicMistakeMap[0]?.unresolved || 1) * 25) / 100) * circumference}
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-xl font-bold font-mono text-rose-400">
                        {topicMistakeMap[0]?.unresolved || 0}
                      </span>
                      <span className="text-[9px] text-slate-400 font-mono">
                        Active Errs
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-300 truncate w-full px-1">
                    <strong className="text-amber-300 block truncate">
                      {topicMistakeMap[0]?.topicTitle || 'No Active Blunders'}
                    </strong>
                    <span className="text-[11px] text-slate-400">
                      {topicMistakeMap[0]?.unresolved 
                        ? 'Highest negative mark risk in your prep' 
                        : 'Clean record! Maintain daily streak'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Fast Action Shortcuts */}
              <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5 text-center sm:text-left">
                  <span className="font-bold text-white block">
                    Need deep diagnostic prescriptions?
                  </span>
                  <span className="text-slate-400 text-[11px]">
                    The Mistake Doctor scans your logged reasoning to identify whether you fall for standard GATE traps.
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={fetchAiDiagnosis}
                    disabled={loading || paperMistakes.length === 0}
                    className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-lg flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition-all disabled:opacity-40"
                  >
                    {loading ? <RotateCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5 fill-slate-950" />}
                    <span>{aiDiagnosis ? 'Refresh Diagnosis' : 'Generate Full AI Diagnosis'}</span>
                  </button>
                </div>
              </div>

              {/* Render AI Diagnosis if generated */}
              {aiDiagnosis && (
                <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    <Bot className="w-4 h-4 text-amber-400" />
                    <span>AI Doctor Diagnostic Prescription:</span>
                  </div>
                  <div className="text-slate-200 text-xs leading-relaxed font-sans">
                    <KaTeXRenderer content={aiDiagnosis} />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: WHERE WAS THE MISTAKE (LOGGED INCIDENTS) */}
          {activeTabMode === 'where' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white">
                  Identified Mistakes in GATE {activePaper} ({paperMistakes.length})
                </span>
                <span className="text-slate-400 font-mono">
                  {unresolvedMistakes.length} unresolved · {resolvedMistakes.length} resolved
                </span>
              </div>

              {paperMistakes.length === 0 ? (
                <div className="text-center py-12 bg-slate-950 rounded-xl border border-slate-800 text-slate-400 space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <p className="font-semibold text-slate-200">No mistakes logged yet in GATE {activePaper}!</p>
                  <p className="text-xs max-w-sm mx-auto">
                    When you attempt questions in the Practice Arena or Mock Tests, any incorrect answers can be logged here with 1 click to track their root cause.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {paperMistakes.map(m => (
                    <div 
                      key={m.id}
                      className={`p-4 rounded-xl border transition-all ${
                        m.resolved 
                          ? 'bg-slate-950/60 border-slate-800/80 opacity-70' 
                          : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-bold uppercase ${
                            m.category === 'concept_gap' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                            m.category === 'calculation_error' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                            m.category === 'formula_recall' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                            'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                          }`}>
                            {m.category.replace('_', ' ')}
                          </span>

                          <strong className="text-xs text-white">
                            {m.topicTitle}
                          </strong>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-mono">
                          <span className="text-slate-500 text-[11px]">{m.dateLogged}</span>
                          {!m.resolved ? (
                            <button
                              onClick={() => resolveMistake(m.id)}
                              className="px-2 py-0.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded text-[11px] transition-colors"
                            >
                              Mark Resolved
                            </button>
                          ) : (
                            <span className="text-emerald-400 text-[11px] font-semibold flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Resolved
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Reasoning & Remediation */}
                      <div className="mt-3 space-y-1.5 text-xs">
                        <div className="text-slate-300">
                          <strong className="text-slate-400 font-mono text-[11px]">Where the thinking slipped: </strong>
                          <span>{m.userReasoning || 'Candidate marked incorrect choice during speed practice.'}</span>
                        </div>

                        {m.attemptedAnswer && (
                          <div className="text-slate-400 font-mono text-[11px]">
                            Your attempted response: <span className="text-rose-400">{String(m.attemptedAnswer)}</span>
                          </div>
                        )}
                      </div>

                      {/* Action buttons */}
                      <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-end gap-2 text-xs">
                        <button
                          onClick={() => handleJumpToNotes(m.topicId)}
                          className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 rounded-lg text-[11px] font-mono flex items-center gap-1"
                        >
                          <BookOpen className="w-3 h-3 text-amber-400" />
                          <span>Review Notes</span>
                        </button>

                        <button
                          onClick={() => handleJumpToPractice(m.topicId)}
                          className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-[11px] font-mono flex items-center gap-1"
                        >
                          <span>Practice Similar Qs</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: TOPICS TO IMPROVE / FOCUS MATRIX */}
          {activeTabMode === 'focus' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-400">
                Ranked by mistake density and syllabus importance. Prioritize reviewing the top topics first to plug mark leaks.
              </div>

              {topicMistakeMap.length === 0 ? (
                <div className="text-center py-12 bg-slate-950 rounded-xl border border-slate-800 text-slate-400">
                  <Target className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <p className="font-semibold text-slate-200">No high-risk topics detected!</p>
                  <p className="text-xs">Your practice error density is clean across all nodes.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {topicMistakeMap.map((t, idx) => {
                    const node = SYLLABUS_NODES.find(n => n.id === t.topicId);
                    const mastery = topicProgress[t.topicId]?.masteryScore || 0;
                    const isCritical = t.unresolved >= 2 || mastery < 50;

                    return (
                      <div 
                        key={t.topicId}
                        className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                          isCritical
                            ? 'bg-rose-950/20 border-rose-500/30'
                            : 'bg-slate-950 border-slate-800'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-slate-500">#{idx + 1}</span>
                            <h4 className="text-sm font-bold text-white">
                              {t.topicTitle}
                            </h4>
                            {isCritical && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
                                High Attention
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                            <span>Syllabus: <strong className="text-slate-300">{node?.section || 'Core Engineering'}</strong></span>
                            <span>·</span>
                            <span>Weight: <strong className="text-amber-400">{node?.weightage || 'High'}</strong></span>
                            <span>·</span>
                            <span>Mistakes: <strong className="text-rose-400">{t.unresolved} unresolved</strong></span>
                            <span>·</span>
                            <span>Mastery: <strong className="text-emerald-400">{mastery}%</strong></span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => handleJumpToNotes(t.topicId)}
                            className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 rounded-lg text-xs font-mono flex items-center gap-1.5"
                          >
                            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                            <span>Read Notes</span>
                          </button>

                          <button
                            onClick={() => handleJumpToPractice(t.topicId)}
                            className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs font-mono flex items-center gap-1 shadow-xs"
                          >
                            <span>Fix Weakness</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: INTERACTIVE AI CHAT DOCTOR */}
          {activeTabMode === 'ask' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-400">
                Ask specific questions about concepts you keep fumbling, such as: <em>&quot;Why do I keep messing up rotation order in 3D transforms?&quot;</em> or <em>&quot;How to spot an MSQ trap in A* search?&quot;</em>
              </div>

              {/* Chat Message Window */}
              <div className="space-y-3 min-h-[220px] max-h-64 overflow-y-auto p-4 bg-slate-950 rounded-xl border border-slate-800 scrollbar-thin">
                {chatHistory.length === 0 && (
                  <div className="text-center py-8 text-slate-500 text-xs font-mono">
                    <Bot className="w-6 h-6 mx-auto mb-1 text-slate-600" />
                    <span>Ask your first question below to diagnose a tricky trap.</span>
                  </div>
                )}

                {chatHistory.map((msg, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-lg text-xs ${
                      msg.sender === 'user'
                        ? 'bg-amber-500/10 border border-amber-500/20 text-amber-200 ml-10'
                        : 'bg-slate-900 border border-slate-800 text-slate-200 mr-10'
                    }`}
                  >
                    <div className="font-mono text-[10px] text-slate-500 mb-1 uppercase font-bold">
                      {msg.sender === 'user' ? 'You' : 'Mistake Doctor'}
                    </div>
                    <KaTeXRenderer content={msg.text} />
                  </div>
                ))}

                {chatLoading && (
                  <div className="p-2.5 text-slate-400 text-xs flex items-center gap-2 font-mono">
                    <RotateCw className="w-3.5 h-3.5 animate-spin text-amber-400" />
                    <span>Analyzing your error pattern...</span>
                  </div>
                )}
              </div>

              {/* Input Area */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="e.g.: How do I avoid sign errors in Cayley-Hamilton inversion?"
                  value={chatQuery}
                  onChange={e => setChatQuery(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSendChat()}
                  className="flex-1 px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-amber-500 font-mono"
                />
                <button
                  onClick={handleSendChat}
                  disabled={!chatQuery.trim() || chatLoading}
                  className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Send</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-950 px-6 py-3.5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Targeting GATE 2027 Zero-Defect Accuracy</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-medium text-xs transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
