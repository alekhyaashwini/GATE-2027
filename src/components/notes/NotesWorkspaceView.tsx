import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { SYLLABUS_NODES } from '../../data/syllabusData';
import { QUESTION_BANK } from '../../data/questionBank';
import { DETAILED_TOPIC_NOTES } from '../../data/topicNotesData';
import { KaTeXRenderer } from '../common/KaTeXRenderer';
import { VideoLectureModal, VideoResource } from '../common/VideoLectureModal';
import { StructuredUserNote } from '../../types';
import { 
  Search, 
  FileText, 
  Save, 
  Download, 
  Eye, 
  Edit3, 
  Play, 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink,
  BookOpen,
  Sparkles,
  Youtube,
  Clock,
  Copy,
  Check,
  Code2,
  HelpCircle,
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';

export const NotesWorkspaceView: React.FC = () => {
  const { 
    activePaper, 
    selectedTopicId, 
    setSelectedTopicId, 
    getTopicNote, 
    saveTopicNote, 
    mistakes,
    topicProgress,
    setActiveTab,
    earnXp
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'edit' | 'preview'>('preview');
  const [activeSubTab, setActiveSubTab] = useState<'editor' | 'videos' | 'backlinks'>('editor');
  const [savedFeedback, setSavedFeedback] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Video lecture modal state
  const [selectedVideo, setSelectedVideo] = useState<VideoResource | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Copied formula state
  const [copiedFormulaIdx, setCopiedFormulaIdx] = useState<number | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  // Quiz state
  const [quizSelectedOption, setQuizSelectedOption] = useState<string | null>(null);
  const [quizAnswerSubmitted, setQuizAnswerSubmitted] = useState(false);
  const [showQuizHint, setShowQuizHint] = useState(false);

  // Filter topics for the active paper
  const paperTopics = useMemo(() => {
    return SYLLABUS_NODES.filter(n => n.paper === activePaper);
  }, [activePaper]);

  // Current active topic node
  const activeNode = useMemo(() => {
    return paperTopics.find(n => n.id === selectedTopicId) || paperTopics[0] || SYLLABUS_NODES[0];
  }, [paperTopics, selectedTopicId]);

  // Active detailed metadata
  const detailedMeta = useMemo(() => {
    return DETAILED_TOPIC_NOTES[activeNode.id];
  }, [activeNode.id]);

  // Active topic note draft state
  const [draftNote, setDraftNote] = useState<StructuredUserNote>(() => getTopicNote(activeNode.id));

  // Sync draft when selected topic changes
  React.useEffect(() => {
    setDraftNote(getTopicNote(activeNode.id));
    setHasUnsavedChanges(false);
    setQuizSelectedOption(null);
    setQuizAnswerSubmitted(false);
    setShowQuizHint(false);
  }, [activeNode.id]);

  const handleSave = () => {
    saveTopicNote(draftNote);
    setHasUnsavedChanges(false);
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2000);
  };

  const updateDraft = (field: keyof StructuredUserNote, val: string) => {
    setDraftNote(prev => ({ ...prev, [field]: val }));
    setHasUnsavedChanges(true);
  };

  // Backlinks
  const topicMistakes = useMemo(() => {
    return mistakes.filter(m => m.topicId === activeNode.id);
  }, [mistakes, activeNode.id]);

  const topicQuestions = useMemo(() => {
    return QUESTION_BANK.filter(q => q.topicId === activeNode.id);
  }, [activeNode.id]);

  // Video lectures
  const videoResources = useMemo(() => {
    return activeNode.externalResources?.filter(r => r.type === 'YouTube' || r.url.includes('youtube.com')) || [];
  }, [activeNode.externalResources]);

  // Full-text search across topics
  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return paperTopics;
    const q = searchQuery.toLowerCase();
    return paperTopics.filter(t => 
      t.topic.toLowerCase().includes(q) ||
      t.section.toLowerCase().includes(q) ||
      t.subtopics.some(s => s.toLowerCase().includes(q))
    );
  }, [paperTopics, searchQuery]);

  // Export note to Markdown
  const exportCurrentNoteMarkdown = () => {
    const md = `# ${draftNote.topicTitle} — GATE ${activePaper} Master Note
Generated on: ${new Date().toLocaleDateString()}

## 1. Definition & Core Summary
${draftNote.definitionSummary}

## 2. Key Formulas (LaTeX)
${draftNote.keyFormulas}

## 3. Worked Exam Example
${draftNote.workedExample}

## 4. Common Mistakes & Pitfalls
${draftNote.commonMistakes}

## 5. Exam Traps & Tricks
${draftNote.examTraps}

## 6. Cross-Links & Syllabus Overlaps
${draftNote.crossLinks}

---
*Created in GATE Quest 2027 Notes Workspace*`;

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${activeNode.id}_GATE_${activePaper}_Notes.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const copyFormulaToClipboard = (formulaText: string, idx: number) => {
    navigator.clipboard.writeText(formulaText);
    setCopiedFormulaIdx(idx);
    setTimeout(() => setCopiedFormulaIdx(null), 1500);
  };

  const copyCodeSnippet = (codeText: string) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 1500);
  };

  const handleQuizAnswer = (optionId: string) => {
    setQuizSelectedOption(optionId);
    setQuizAnswerSubmitted(true);
    const quiz = detailedMeta?.interactiveQuiz;
    const selected = quiz?.options.find(o => o.id === optionId);
    if (selected?.isCorrect) {
      earnXp(25, `Solved Checkpoint Quiz for ${activeNode.topic}`);
    }
  };

  // Check if simulation exists for this topic
  const hasSimulation = useMemo(() => {
    const tId = activeNode.id;
    return tId.includes('kinematics') || tId.includes('transforms') || tId.includes('control') || tId.includes('linear-algebra') || tId.includes('machine-learning');
  }, [activeNode.id]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Video Lecture Modal */}
      <VideoLectureModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        video={selectedVideo}
        allVideos={videoResources}
        topicTitle={activeNode.topic}
        topicId={activeNode.id}
        onSelectVideo={setSelectedVideo}
      />

      {/* Advanced Futuristic HUD Header */}
      <div className="relative mb-6 p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
        {/* Subtle glowing backdrop highlight */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-mono mb-1.5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>MODULE 8.13 · EXAM COMPENDIUM · {activePaper}</span>
              <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[10px] font-semibold">
                GATE 2027 HIGH-YIELD
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>{activeNode.topic}</span>
            </h1>

            <div className="flex items-center gap-3 text-xs text-slate-400 mt-2 font-mono flex-wrap">
              <span className="text-slate-300 font-semibold">{activeNode.section}</span>
              <span className="text-slate-600">|</span>
              <span>Weight: <strong className="text-amber-400">{activeNode.weightage}</strong></span>
              <span className="text-slate-600">|</span>
              <span>Mastery: <strong className="text-emerald-400">{topicProgress[activeNode.id]?.masteryScore || 0}%</strong></span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">{videoResources.length} Video Lectures</span>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center bg-slate-950/80 border border-slate-800 rounded-xl p-1 shadow-inner">
              <button
                onClick={() => setViewMode('preview')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                  viewMode === 'preview'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Master View</span>
              </button>
              <button
                onClick={() => setViewMode('edit')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                  viewMode === 'edit'
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Note</span>
              </button>
            </div>

            <button
              onClick={handleSave}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 shadow-md ${
                savedFeedback
                  ? 'bg-emerald-600 text-white'
                  : hasUnsavedChanges
                  ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }`}
            >
              {savedFeedback ? <CheckCircle2 className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              <span>{savedFeedback ? 'Saved in SQLite!' : hasUnsavedChanges ? 'Save Changes *' : 'Save Note'}</span>
            </button>

            <button
              onClick={exportCurrentNoteMarkdown}
              className="px-3.5 py-2 text-xs font-medium bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-xl transition-colors flex items-center gap-1.5"
              title="Download Markdown booklet for offline study"
            >
              <Download className="w-4 h-4 text-slate-400" />
              <span>Export MD</span>
            </button>

            <button
              onClick={() => {
                setSelectedTopicId(activeNode.id);
                setActiveTab('practice');
              }}
              className="px-4 py-2 text-xs font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 rounded-xl transition-all flex items-center gap-1.5 shadow-md shadow-amber-500/20"
            >
              <Play className="w-3.5 h-3.5 fill-slate-950" />
              <span>Solve PYQs</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Topic Navigator + Note Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Navigator & Curated Lectures (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          {/* Topic search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder={`Search ${activePaper} syllabus notes...`}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-hidden focus:border-amber-500"
            />
          </div>

          {/* Topics List */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl divide-y divide-slate-800/80 max-h-[500px] overflow-y-auto shadow-inner">
            {filteredTopics.map(topic => {
              const isSelected = topic.id === activeNode.id;
              const progress = topicProgress[topic.id];
              const topicMistakeCount = mistakes.filter(m => m.topicId === topic.id && !m.resolved).length;
              const vCount = topic.externalResources?.filter(r => r.type === 'YouTube' || r.url.includes('youtube.com')).length || 0;

              return (
                <button
                  key={topic.id}
                  onClick={() => {
                    if (topic.id === activeNode.id) return;
                    if (hasUnsavedChanges && !window.confirm('You have unsaved changes to your current topic note. Discard changes and switch topic?')) {
                      return;
                    }
                    setSelectedTopicId(topic.id);
                    setDraftNote(getTopicNote(topic.id));
                    setHasUnsavedChanges(false);
                  }}
                  className={`w-full text-left p-3.5 transition-all flex items-start justify-between gap-2 ${
                    isSelected
                      ? 'bg-amber-500/10 border-l-4 border-amber-400 pl-3'
                      : 'hover:bg-slate-800/60'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-mono text-slate-500 truncate mb-0.5">
                      {topic.section.split('—')[1] || topic.section}
                    </div>
                    <div className={`text-sm font-semibold truncate ${isSelected ? 'text-amber-400' : 'text-slate-200'}`}>
                      {topic.topic}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-1">
                      <span className={progress?.studied ? 'text-emerald-400 font-medium' : 'text-slate-500'}>
                        {progress?.studied ? '✓ Studied' : 'Pending'}
                      </span>
                      <span aria-hidden="true" className="text-slate-700">·</span>
                      <span className="text-amber-400/90 font-mono">
                        {progress?.masteryScore || 0}%
                      </span>
                      {vCount > 0 && (
                        <>
                          <span aria-hidden="true" className="text-slate-700">·</span>
                          <span className="flex items-center gap-1 text-red-400/90 font-mono text-[10px]">
                            <Youtube className="w-3 h-3" /> {vCount} vids
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {topicMistakeCount > 0 && (
                    <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 border border-rose-500/30 px-1.5 py-0.5 rounded-md shrink-0">
                      {topicMistakeCount} err
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Curated YouTube Video Lectures Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <Youtube className="w-4 h-4 text-red-500" />
                <span>Video Lectures ({videoResources.length})</span>
              </div>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                Free Lectures
              </span>
            </div>

            {videoResources.length === 0 ? (
              <p className="text-xs text-slate-400 italic">No external video links attached to this topic yet.</p>
            ) : (
              <div className="space-y-2.5">
                {videoResources.map((res, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col gap-2 group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-semibold text-xs text-slate-200 group-hover:text-amber-400 transition-colors leading-snug">
                        {res.title}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span className="text-slate-500 truncate">{res.channel || res.provider}</span>
                      {res.duration && (
                        <span className="flex items-center gap-1 text-slate-400 shrink-0">
                          <Clock className="w-3 h-3" />
                          {res.duration}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        setSelectedVideo(res);
                        setIsVideoModalOpen(true);
                      }}
                      className="mt-1 w-full py-1.5 bg-red-600/10 hover:bg-red-600/20 text-red-400 hover:text-red-300 border border-red-500/20 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-red-400" />
                      <span>Watch in App (+35 XP)</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Interactive Content (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Sub-tabs header */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3 flex-wrap">
            <button
              onClick={() => setActiveSubTab('editor')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors flex items-center gap-2 ${
                activeSubTab === 'editor'
                  ? 'bg-slate-800 text-amber-400 border border-amber-400/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Full Study Compendium</span>
            </button>

            <button
              onClick={() => setActiveSubTab('videos')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors flex items-center gap-2 ${
                activeSubTab === 'videos'
                  ? 'bg-slate-800 text-amber-400 border border-amber-400/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Youtube className="w-4 h-4 text-red-400" />
              <span>Video Masterclass ({videoResources.length})</span>
            </button>

            <button
              onClick={() => setActiveSubTab('backlinks')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors flex items-center gap-2 ${
                activeSubTab === 'backlinks'
                  ? 'bg-slate-800 text-amber-400 border border-amber-400/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Auto-Backlinks & Mistakes ({topicMistakes.length})</span>
            </button>

            {hasSimulation && (
              <button
                onClick={() => setActiveTab('simulations')}
                className="ml-auto px-3.5 py-1.5 text-xs font-bold bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Launch 3D Simulation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sub-tab 1: Video Masterclass Screen */}
          {activeSubTab === 'videos' && (
            <div className="space-y-4">
              <div className="p-5 bg-slate-900 border border-slate-800 rounded-2xl">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-2 flex items-center gap-2">
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span>Curated Video Lectures for {activeNode.topic}</span>
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  Hand-selected lectures from NPTEL IIT courses, 3Blue1Brown, Stanford CS229, and top GATE mentors. Watch them directly in-app without leaving your study session.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {videoResources.map((res, idx) => (
                    <div key={idx} className="p-4 bg-slate-950 border border-slate-800 rounded-xl flex flex-col justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-mono font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                          Lecture {idx + 1}
                        </span>
                        <h4 className="text-sm font-bold text-white mt-1.5 leading-snug">
                          {res.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 font-mono">
                          Channel: <span className="text-slate-300 font-medium">{res.channel || res.provider}</span>
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-900">
                        <span className="text-xs text-slate-500 font-mono">
                          {res.duration || 'Full Lecture'}
                        </span>
                        <button
                          onClick={() => {
                            setSelectedVideo(res);
                            setIsVideoModalOpen(true);
                          }}
                          className="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg text-xs flex items-center gap-1.5 transition-colors"
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Play Video</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Sub-tab 2: Backlinks & Mistake Hub */}
          {activeSubTab === 'backlinks' && (
            <div className="space-y-6">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-md">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>Linked Mistakes for this Topic ({topicMistakes.length})</span>
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  Every mistake logged during practice automatically feeds into this topic note so you revise from your own error log.
                </p>

                {topicMistakes.length === 0 ? (
                  <div className="p-4 bg-slate-950 rounded-xl text-xs text-emerald-400 border border-emerald-500/20 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Zero active errors logged for {activeNode.topic}. Keep practicing to verify retention!</span>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {topicMistakes.map(m => {
                      const q = QUESTION_BANK.find(item => item.id === m.questionId);
                      return (
                        <div key={m.id} className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl">
                          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                            <span className="font-mono text-rose-400 font-bold uppercase">{m.category.replace('_', ' ')}</span>
                            <span className="font-mono text-slate-500">Stage {m.reviewStage} · Due: {new Date(m.nextReviewDate).toLocaleDateString()}</span>
                          </div>
                          <div className="text-xs text-slate-200 mb-2">
                            {q?.text ? <KaTeXRenderer content={q.text.slice(0, 180) + '...'} /> : 'Question reference'}
                          </div>
                          {m.userReasoning && (
                            <div className="text-[11px] text-amber-300/90 bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20">
                              <strong>Learner Reflection:</strong> {m.userReasoning}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Linked Practice Questions */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-md">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>Practice Questions Available ({topicQuestions.length})</span>
                </h3>
                <div className="space-y-2">
                  {topicQuestions.map(q => (
                    <div key={q.id} className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs text-slate-300">
                          <KaTeXRenderer content={q.text.slice(0, 140) + '...'} />
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono mt-1">
                          {q.provenanceLabel} · {q.type} · {q.marks} Mark
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedTopicId(q.topicId);
                          setActiveTab('practice');
                        }}
                        className="px-3 py-1.5 text-xs font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg shrink-0 transition-colors"
                      >
                        Solve
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Sub-tab 3: Note Editor or Clean KaTeX Preview */}
          {activeSubTab === 'editor' && (
            viewMode === 'edit' ? (
              /* Editable 6-Part Structured Template */
              <div className="space-y-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>6-Part Structured Note Editor (Section 8.13)</span>
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    KaTeX ($...$, $$...$$) & Markdown Enabled
                  </span>
                </div>

                {/* 1. Definition */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 font-mono uppercase tracking-wider mb-1.5">
                    1. Core Definition & Syllabus Overview
                  </label>
                  <textarea
                    rows={4}
                    value={draftNote.definitionSummary}
                    onChange={e => updateDraft('definitionSummary', e.target.value)}
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 font-mono focus:outline-hidden focus:border-amber-500"
                  />
                </div>

                {/* 2. Formulas */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 font-mono uppercase tracking-wider mb-1.5">
                    2. Key Formulas (LaTeX)
                  </label>
                  <textarea
                    rows={5}
                    value={draftNote.keyFormulas}
                    onChange={e => updateDraft('keyFormulas', e.target.value)}
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 font-mono focus:outline-hidden focus:border-amber-500"
                  />
                </div>

                {/* 3. Worked Example */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 font-mono uppercase tracking-wider mb-1.5">
                    3. Worked Exam Example with Step-by-Step Derivation
                  </label>
                  <textarea
                    rows={6}
                    value={draftNote.workedExample}
                    onChange={e => updateDraft('workedExample', e.target.value)}
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 font-mono focus:outline-hidden focus:border-amber-500"
                  />
                </div>

                {/* 4. Common Mistakes */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 font-mono uppercase tracking-wider mb-1.5">
                    4. Common Student Misconceptions & Calculation Traps
                  </label>
                  <textarea
                    rows={3}
                    value={draftNote.commonMistakes}
                    onChange={e => updateDraft('commonMistakes', e.target.value)}
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 font-mono focus:outline-hidden focus:border-amber-500"
                  />
                </div>

                {/* 5. Exam Traps */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 font-mono uppercase tracking-wider mb-1.5">
                    5. GATE Exam Traps & Tricks
                  </label>
                  <textarea
                    rows={3}
                    value={draftNote.examTraps}
                    onChange={e => updateDraft('examTraps', e.target.value)}
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 font-mono focus:outline-hidden focus:border-amber-500"
                  />
                </div>

                {/* 6. Cross-Links */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 font-mono uppercase tracking-wider mb-1.5">
                    6. Cross-Links & Syllabus Overlaps
                  </label>
                  <input
                    type="text"
                    value={draftNote.crossLinks}
                    onChange={e => updateDraft('crossLinks', e.target.value)}
                    className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 font-mono focus:outline-hidden focus:border-amber-500"
                  />
                </div>
              </div>
            ) : (
              /* Beautiful Rendered KaTeX Master View */
              <div className="space-y-6">
                {/* Section 1: Definition */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md">
                  <h3 className="text-xs font-bold text-amber-400 font-mono uppercase tracking-wider mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>1. Definition & Theoretical Foundations</span>
                  </h3>
                  <div className="text-sm text-slate-200 leading-relaxed font-sans">
                    <KaTeXRenderer content={draftNote.definitionSummary} />
                  </div>
                </div>

                {/* Section 2: Key Formulas with Copy HUD */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xs font-bold text-sky-400 font-mono uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      <span>2. Must-Know Formulas (KaTeX LaTeX)</span>
                    </h3>
                    <button
                      onClick={() => copyFormulaToClipboard(draftNote.keyFormulas, 999)}
                      className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[11px] font-mono flex items-center gap-1.5 transition-colors"
                    >
                      {copiedFormulaIdx === 999 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedFormulaIdx === 999 ? 'Copied All!' : 'Copy LaTeX'}</span>
                    </button>
                  </div>

                  <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 overflow-x-auto text-sm text-slate-100 leading-loose">
                    <KaTeXRenderer content={draftNote.keyFormulas} />
                  </div>
                </div>

                {/* Section 3: Worked Exam Example */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md">
                  <h3 className="text-xs font-bold text-emerald-400 font-mono uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>3. Worked Exam Example & Derivation</span>
                  </h3>
                  <div className="p-5 bg-slate-950 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <KaTeXRenderer content={draftNote.workedExample} />
                  </div>
                </div>

                {/* Optional Section: Code Implementation */}
                {detailedMeta?.codeSnippet && (
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xs font-bold text-purple-400 font-mono uppercase tracking-wider flex items-center gap-2">
                        <Code2 className="w-4 h-4" />
                        <span>Interactive Algorithm Implementation ({detailedMeta.codeSnippet.title})</span>
                      </h3>
                      <button
                        onClick={() => copyCodeSnippet(detailedMeta.codeSnippet!.code)}
                        className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-[11px] font-mono flex items-center gap-1.5 transition-colors"
                      >
                        {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedCode ? 'Copied Code!' : 'Copy Python'}</span>
                      </button>
                    </div>

                    <pre className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-purple-300 overflow-x-auto leading-relaxed">
                      <code>{detailedMeta.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}

                {/* Section 4 & 5: Traps & Common Mistakes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md">
                    <h3 className="text-xs font-bold text-rose-400 font-mono uppercase tracking-wider mb-2.5 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>4. Common Mistakes & Pitfalls</span>
                    </h3>
                    <div className="text-xs text-slate-300 leading-relaxed">
                      <KaTeXRenderer content={draftNote.commonMistakes} />
                    </div>
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md">
                    <h3 className="text-xs font-bold text-amber-400 font-mono uppercase tracking-wider mb-2.5 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>5. GATE Distractor Traps</span>
                    </h3>
                    <div className="text-xs text-slate-300 leading-relaxed">
                      <KaTeXRenderer content={draftNote.examTraps} />
                    </div>
                  </div>
                </div>

                {/* Interactive Checkpoint Quiz */}
                {detailedMeta?.interactiveQuiz && (
                  <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/20 border border-amber-500/30 rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono uppercase tracking-wider">
                        <HelpCircle className="w-4 h-4" />
                        <span>Interactive Checkpoint Quiz</span>
                      </div>
                      <span className="text-[11px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        +25 XP for Correct Answer
                      </span>
                    </div>

                    <div className="text-sm font-semibold text-white mb-4">
                      <KaTeXRenderer content={detailedMeta.interactiveQuiz.question} />
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      {detailedMeta.interactiveQuiz.options.map(option => {
                        const isSelected = quizSelectedOption === option.id;
                        let btnStyle = 'bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-200';
                        if (quizAnswerSubmitted) {
                          if (option.isCorrect) {
                            btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold';
                          } else if (isSelected && !option.isCorrect) {
                            btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-200';
                          }
                        }

                        return (
                          <button
                            key={option.id}
                            onClick={() => handleQuizAnswer(option.id)}
                            className={`p-3 rounded-xl border text-left text-xs transition-all flex items-start gap-3 ${btnStyle}`}
                          >
                            <span className="w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center font-mono font-bold shrink-0">
                              {option.id}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div><KaTeXRenderer content={option.text} /></div>
                              {quizAnswerSubmitted && isSelected && (
                                <p className={`mt-1.5 text-[11px] font-mono ${option.isCorrect ? 'text-emerald-300' : 'text-rose-300'}`}>
                                  {option.feedback}
                                </p>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Hint Toggle */}
                    <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <button
                        onClick={() => setShowQuizHint(!showQuizHint)}
                        className="text-amber-400 hover:text-amber-300 font-mono text-[11px] underline"
                      >
                        {showQuizHint ? 'Hide Hint' : 'Show Clue / Hint'}
                      </button>
                      {showQuizHint && (
                        <p className="text-[11px] text-slate-400 italic font-mono">
                          {detailedMeta.interactiveQuiz.hint}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Section 6: Cross-Links Footer */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
                  <div>
                    <strong className="text-slate-300 font-mono">Cross-Syllabus Overlaps: </strong>
                    <span className="text-amber-400/90">{draftNote.crossLinks}</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">
                    Last Verified: {new Date(draftNote.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
