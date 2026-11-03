import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { SYLLABUS_NODES } from '../../data/syllabusData';
import { InteractiveStudyGuide } from '../study/InteractiveStudyGuide';
import { VideoLectureModal, VideoResource } from '../common/VideoLectureModal';
import { GuidedRoadmapMilestones } from './GuidedRoadmapMilestones';
import { 
  CheckCircle, 
  Circle, 
  BookOpen, 
  Play, 
  Layers, 
  ArrowRight,
  Filter,
  Check,
  Zap,
  Bookmark,
  Map,
  LayoutGrid,
  Sparkles,
  ChevronRight,
  GraduationCap,
  Youtube,
  Milestone,
  BarChart3
} from 'lucide-react';

export const SyllabusQuestView: React.FC = () => {
  const { 
    activePaper, 
    topicProgress, 
    markTopicStudied, 
    updateTopicConfidence,
    setSelectedTopicId, 
    setActiveTab
  } = useApp();

  const [selectedSection, setSelectedSection] = useState<string>('All');
  const [filterStatus, setFilterStatus] = useState<'All' | 'Studied' | 'Unstudied' | 'Mastered'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewStyle, setViewStyle] = useState<'roadmap' | 'milestones' | 'marks' | 'grid'>('roadmap');
  const [activeStudyTopicId, setActiveStudyTopicId] = useState<string | null>(null);

  // Video modal state
  const [selectedVideo, setSelectedVideo] = useState<VideoResource | null>(null);
  const [videoList, setVideoList] = useState<VideoResource[]>([]);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoTopicTitle, setVideoTopicTitle] = useState('');
  const [videoTopicId, setVideoTopicId] = useState('');

  // Filter topics for active paper
  const paperTopics = useMemo(() => {
    return SYLLABUS_NODES.filter(n => n.paper === activePaper);
  }, [activePaper]);

  // Unique sections
  const sections = useMemo(() => {
    return ['All', ...Array.from(new Set(paperTopics.map(n => n.section)))];
  }, [paperTopics]);

  // Filtered topics
  const filteredTopics = useMemo(() => {
    return paperTopics.filter(node => {
      if (selectedSection !== 'All' && node.section !== selectedSection) return false;
      const progress = topicProgress[node.id];
      if (filterStatus === 'Studied' && !progress?.studied) return false;
      if (filterStatus === 'Unstudied' && progress?.studied) return false;
      if (filterStatus === 'Mastered' && (progress?.masteryScore || 0) < 75) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          node.topic.toLowerCase().includes(q) ||
          node.subject.toLowerCase().includes(q) ||
          node.subtopics.some(s => s.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [paperTopics, selectedSection, filterStatus, searchQuery, topicProgress]);

  // Stats calculation
  const totalTopics = paperTopics.length;
  const studiedTopics = paperTopics.filter(t => topicProgress[t.id]?.studied).length;
  const masteredTopics = paperTopics.filter(t => (topicProgress[t.id]?.masteryScore || 0) >= 75).length;
  const averageMastery = totalTopics > 0 
    ? Math.round(paperTopics.reduce((acc, t) => acc + (topicProgress[t.id]?.masteryScore || 0), 0) / totalTopics)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Banner & Syllabus Progress */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>OFFICIAL GATE 2027 CURRICULUM · {activePaper}</span>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              {activePaper === 'RA' ? 'Robotics & Automation (RA)' : 'Data Science & Artificial Intelligence (DA)'}
            </h1>
            <p className="text-xs text-slate-400 max-w-2xl mt-1">
              {activePaper === 'RA'
                ? 'Comprehensive syllabus coverage: Kinematics, Dynamics, Mechatronics, CIM, Control Systems, Microcontrollers, and Vision.'
                : 'Complete foundational syllabus: Linear Algebra, Probability & Statistics, Calculus, Data Structures, Relational Databases, and Machine Learning.'}
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="flex items-center gap-4 bg-slate-950/80 border border-slate-800 p-3 rounded-lg font-mono">
            <div>
              <div className="text-[10px] text-slate-400 uppercase">Coverage</div>
              <div className="text-lg font-bold text-amber-400 tabular-nums">
                {Math.round((studiedTopics / Math.max(1, totalTopics)) * 100)}%
              </div>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <div className="text-[10px] text-slate-400 uppercase">Mastered</div>
              <div className="text-lg font-bold text-emerald-400 tabular-nums">
                {masteredTopics}/{totalTopics}
              </div>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <div className="text-[10px] text-slate-400 uppercase">Avg Mastery</div>
              <div className="text-lg font-bold text-sky-400 tabular-nums">
                {averageMastery}%
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 pt-4 border-t border-slate-800/80">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-mono">
            <span>Overall Syllabus Completion</span>
            <span className="tabular-nums">{studiedTopics} of {totalTopics} Topics Completed</span>
          </div>
          <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
            <div
              className="bg-amber-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(studiedTopics / Math.max(1, totalTopics)) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-3 rounded-xl text-xs">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {/* View mode switcher */}
          <div className="flex items-center bg-slate-950 rounded-lg p-0.5 border border-slate-800 mr-2 shrink-0">
            <button
              onClick={() => setViewStyle('roadmap')}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
                viewStyle === 'roadmap' ? 'bg-amber-500 text-slate-950 font-bold shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>Roadmap Timeline</span>
            </button>
            <button
              onClick={() => setViewStyle('milestones')}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
                viewStyle === 'milestones' ? 'bg-amber-500 text-slate-950 font-bold shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Milestone className="w-3.5 h-3.5" />
              <span>Guided Milestones</span>
            </button>
            <button
              onClick={() => setViewStyle('marks')}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
                viewStyle === 'marks' ? 'bg-amber-500 text-slate-950 font-bold shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Marks Division</span>
            </button>
            <button
              onClick={() => setViewStyle('grid')}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
                viewStyle === 'grid' ? 'bg-amber-500 text-slate-950 font-bold shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Topic Grid</span>
            </button>
          </div>

          <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
          <span className="font-semibold text-slate-400 font-mono uppercase text-[11px] shrink-0">Section:</span>
          {sections.map(sec => (
            <button
              key={sec}
              onClick={() => setSelectedSection(sec)}
              className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-colors font-medium ${
                selectedSection === sec
                  ? 'bg-amber-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white bg-slate-950'
              }`}
            >
              {sec.includes('—') ? sec.split('—')[1].trim() : sec}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center bg-slate-950 rounded-lg p-0.5 border border-slate-800">
            {(['All', 'Studied', 'Unstudied', 'Mastered'] as const).map(st => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-colors ${
                  filterStatus === st ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search topics..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-hidden focus:border-amber-500 w-36 sm:w-48"
          />
        </div>
      </div>

      {/* ============================================================== */}
      {/* GUIDED MILESTONES & MARKS DIVISION BLUEPRINT                   */}
      {/* ============================================================== */}
      {(viewStyle === 'milestones' || viewStyle === 'marks') && (
        <GuidedRoadmapMilestones />
      )}

      {/* ============================================================== */}
      {/* 1. LEARNING ROADMAP VIEW (Linear, Focused, Prerequisite Flow)   */}
      {/* ============================================================== */}
      {viewStyle === 'roadmap' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3 mb-5">
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-400 font-bold tracking-wider flex items-center gap-1.5">
                  <Map className="w-3.5 h-3.5" />
                  <span>Curriculum Pathway · {activePaper}</span>
                </span>
                <h2 className="text-base font-bold text-white mt-0.5">
                  Step-by-Step Topic Progression
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Follow the structured roadmap from mathematical foundations to core engineering applications.
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" /> Mastered (&ge;75%)
                </span>
                <span className="flex items-center gap-1.5 text-amber-400">
                  <Sparkles className="w-3.5 h-3.5" /> Interactive Guide Ready
                </span>
              </div>
            </div>

            {/* Timeline View */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-6 my-4">
              {filteredTopics.map((node, index) => {
                const progress = topicProgress[node.id] || { masteryScore: 0, studied: false };
                const isMastered = (progress.masteryScore || 0) >= 75;

                return (
                  <div key={node.id} className="relative group">
                    {/* Node Dot on Timeline */}
                    <div className={`absolute -left-[31px] sm:-left-[39px] top-4 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isMastered 
                        ? 'bg-emerald-500 border-emerald-400 text-slate-950 shadow-sm shadow-emerald-500/50' 
                        : progress.studied 
                        ? 'bg-amber-500 border-amber-400 text-slate-950 shadow-sm shadow-amber-500/50' 
                        : 'bg-slate-950 border-slate-700 text-slate-500'
                    }`}>
                      {isMastered ? (
                        <Check className="w-3 h-3 stroke-[3]" />
                      ) : (
                        <span className="text-[10px] font-mono font-bold">{index + 1}</span>
                      )}
                    </div>

                    {/* Roadmap Card */}
                    <div className={`p-5 rounded-xl border transition-all ${
                      isMastered 
                        ? 'bg-slate-950/80 border-emerald-500/30' 
                        : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                    }`}>
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="space-y-1.5 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] font-mono font-bold uppercase text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                              {node.section}
                            </span>
                            <span className="text-[10px] font-mono text-slate-400">
                              Weightage: <strong className="text-slate-200">{node.weightage}</strong>
                            </span>
                            {progress.studied && (
                              <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                Completed
                              </span>
                            )}
                          </div>

                          <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                            {node.topic}
                          </h3>

                          <p className="text-xs text-slate-400 line-clamp-2">
                            {node.description}
                          </p>

                          {/* Subtopics Pills */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {node.subtopics.slice(0, 4).map((sub, sIdx) => (
                              <span 
                                key={sIdx}
                                className="text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300 px-2 py-0.5 rounded"
                              >
                                {sub}
                              </span>
                            ))}
                            {node.subtopics.length > 4 && (
                              <span className="text-[11px] font-mono text-slate-500 px-1 py-0.5">
                                +{node.subtopics.length - 4} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Node Actions */}
                        <div className="flex items-center gap-2.5 shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-slate-800">
                          <div className="text-right font-mono text-xs pr-2 hidden sm:block">
                            <div className="text-slate-400 text-[10px] uppercase">Mastery</div>
                            <div className={`text-base font-bold tabular-nums ${isMastered ? 'text-emerald-400' : 'text-amber-400'}`}>
                              {progress.masteryScore || 0}%
                            </div>
                          </div>

                          <button
                            onClick={() => {
                              setSelectedTopicId(node.id);
                              setActiveTab('notes');
                            }}
                            className="px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
                            title="Review formulas and revision notes"
                          >
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>Notes</span>
                          </button>

                          {node.externalResources?.some(r => r.type === 'YouTube' || r.url.includes('youtube.com')) && (
                            <button
                              onClick={() => {
                                const vList = (node.externalResources || []).filter(r => r.type === 'YouTube' || r.url.includes('youtube.com'));
                                if (vList.length > 0) {
                                  setSelectedVideo(vList[0]);
                                  setVideoList(vList);
                                  setVideoTopicTitle(node.topic);
                                  setVideoTopicId(node.id);
                                  setVideoModalOpen(true);
                                }
                              }}
                              className="px-3 py-2 bg-red-600/10 hover:bg-red-600/20 text-red-400 border border-red-500/20 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
                              title="Watch curated YouTube lectures"
                            >
                              <Youtube className="w-3.5 h-3.5 text-red-500" />
                              <span className="hidden sm:inline">Lectures ({node.externalResources?.filter(r => r.type === 'YouTube' || r.url.includes('youtube.com')).length})</span>
                            </button>
                          )}

                          <button
                            onClick={() => setActiveStudyTopicId(node.id)}
                            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs flex items-center gap-2 shadow-sm transition-all"
                            title="Open interactive 4-step concept guide & practice"
                          >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Study Guide</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 2. SYLLABUS CARD GRID VIEW */}
      {/* ============================================================== */}
      {viewStyle === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTopics.map((node) => {
            const progress = topicProgress[node.id] || {
              topicId: node.id,
              studied: false,
              practicedCount: 0,
              correctCount: 0,
              revisedCount: 0,
              masteryScore: 0,
              confidence: 'Low'
            };

            return (
              <div
                key={node.id}
                className={`bg-slate-900 border rounded-xl p-5 transition-all flex flex-col justify-between ${
                  progress.studied ? 'border-slate-800' : 'border-slate-800/60'
                }`}
              >
                <div>
                  {/* Node Header */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="text-[11px] font-mono text-amber-400/90 font-medium">
                        {node.section}
                      </div>
                      <h3 className="text-base font-bold text-white mt-0.5">
                        {node.topic}
                      </h3>
                    </div>

                    {/* Studied Toggle Button */}
                    <button
                      onClick={() => markTopicStudied(node.id, !progress.studied)}
                      className={`p-1.5 rounded-lg transition-colors flex items-center gap-1 text-xs font-semibold ${
                        progress.studied
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                      }`}
                      title={progress.studied ? 'Marked as Completed' : 'Mark as Completed'}
                    >
                      {progress.studied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Done</span>
                        </>
                      ) : (
                        <>
                          <Circle className="w-3.5 h-3.5" />
                          <span>Pending</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {node.description}
                  </p>

                  {/* Subtopics Checklist preview */}
                  <div className="space-y-1 mb-4 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
                    <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider mb-1 font-semibold">
                      Key Subtopics
                    </div>
                    {node.subtopics.slice(0, 3).map((sub, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 shrink-0" />
                        <span className="truncate">{sub}</span>
                      </div>
                    ))}
                    {node.subtopics.length > 3 && (
                      <div className="text-[11px] text-slate-400 font-mono pt-1">
                        + {node.subtopics.length - 3} more subtopics
                      </div>
                    )}
                  </div>

                  {/* Overlap & Weightage tags */}
                  <div className="text-xs text-slate-400 mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono">
                    <span>Weightage: <strong className="text-slate-200">{node.weightage}</strong></span>
                    {node.overlapTags && node.overlapTags.length > 0 && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>Common with: {node.overlapTags.join(', ')}</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Bottom Actions & Mastery */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="text-xs font-mono">
                      <span className="text-slate-400">Mastery: </span>
                      <strong className={progress.masteryScore >= 75 ? 'text-emerald-400' : progress.masteryScore >= 40 ? 'text-amber-400' : 'text-slate-400'}>
                        {progress.masteryScore}%
                      </strong>
                    </div>

                    <select
                      value={progress.confidence}
                      onChange={e => updateTopicConfidence(node.id, e.target.value as any)}
                      className="bg-slate-950 border border-slate-800 text-[11px] text-slate-300 rounded px-1.5 py-0.5 font-mono"
                      title="Self-rated exam confidence"
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    {node.externalResources?.some(r => r.type === 'YouTube' || r.url.includes('youtube.com')) && (
                      <button
                        onClick={() => {
                          const vList = (node.externalResources || []).filter(r => r.type === 'YouTube' || r.url.includes('youtube.com'));
                          if (vList.length > 0) {
                            setSelectedVideo(vList[0]);
                            setVideoList(vList);
                            setVideoTopicTitle(node.topic);
                            setVideoTopicId(node.id);
                            setVideoModalOpen(true);
                          }
                        }}
                        className="px-2.5 py-1.5 bg-red-600/10 hover:bg-red-600/20 text-red-400 border border-red-500/20 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                        title="Watch curated video lectures"
                      >
                        <Youtube className="w-3.5 h-3.5 text-red-500" />
                        <span>Videos</span>
                      </button>
                    )}

                    <button
                      onClick={() => {
                        setSelectedTopicId(node.id);
                        setActiveTab('notes');
                      }}
                      className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition-colors flex items-center gap-1"
                      title="Open structured per-topic notes"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Notes</span>
                    </button>

                    <button
                      onClick={() => setActiveStudyTopicId(node.id)}
                      className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition-all flex items-center gap-1.5"
                      title="Open interactive study guide"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Study Guide</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Interactive 4-Step Study Guide Modal */}
      {activeStudyTopicId && (
        <InteractiveStudyGuide
          topicId={activeStudyTopicId}
          onClose={() => setActiveStudyTopicId(null)}
        />
      )}

      {/* Video Lecture Modal */}
      <VideoLectureModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        video={selectedVideo}
        allVideos={videoList}
        topicTitle={videoTopicTitle}
        topicId={videoTopicId}
        onSelectVideo={setSelectedVideo}
      />
    </div>
  );
};