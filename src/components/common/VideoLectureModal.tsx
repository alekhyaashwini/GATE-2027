import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Youtube, 
  Clock, 
  BookOpen, 
  Lightbulb,
  Search,
  AlertCircle,
  FileText,
  Save,
  Check
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export interface VideoResource {
  title: string;
  provider: string;
  url: string;
  youtubeId?: string;
  channel?: string;
  duration?: string;
  keyConcepts?: string[];
}

interface VideoLectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: VideoResource | null;
  allVideos?: VideoResource[];
  topicTitle: string;
  topicId: string;
  onSelectVideo?: (v: VideoResource) => void;
}

export const VideoLectureModal: React.FC<VideoLectureModalProps> = ({
  isOpen,
  onClose,
  video,
  allVideos = [],
  topicTitle,
  topicId,
  onSelectVideo
}) => {
  const { earnXp, recordDailyActivity } = useApp();
  const [activeVideo, setActiveVideo] = useState<VideoResource | null>(video);
  const [isCompleted, setIsCompleted] = useState(false);
  const [lectureNotes, setLectureNotes] = useState('');
  const [notesSaved, setNotesSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<'video' | 'notes'>('video');

  // Sync active video when prop changes
  useEffect(() => {
    setActiveVideo(video);
    setIsCompleted(false);
    // Load existing lecture scratchpad notes for this video
    if (video) {
      const saved = localStorage.getItem(`gate2027_lecture_notes_${topicId}_${video.youtubeId || video.title}`);
      setLectureNotes(saved || '');
    }
  }, [video, topicId]);

  if (!isOpen || !activeVideo) return null;

  // Extract youtube ID
  let ytId = activeVideo.youtubeId;
  if (!ytId && activeVideo.url.includes('youtube.com')) {
    const match = activeVideo.url.match(/v=([a-zA-Z0-9_-]+)/);
    if (match) ytId = match[1];
  } else if (!ytId && activeVideo.url.includes('youtu.be/')) {
    const match = activeVideo.url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
    if (match) ytId = match[1];
  }

  const directYoutubeUrl = ytId 
    ? `https://www.youtube.com/watch?v=${ytId}`
    : activeVideo.url;

  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    `GATE ${topicTitle} lecture`
  )}`;

  const handleMarkComplete = () => {
    if (!isCompleted) {
      setIsCompleted(true);
      earnXp(35, `Watched lecture: ${activeVideo.title}`);
      recordDailyActivity('study');
    }
  };

  const handleSaveNotes = () => {
    if (activeVideo) {
      localStorage.setItem(
        `gate2027_lecture_notes_${topicId}_${activeVideo.youtubeId || activeVideo.title}`,
        lectureNotes
      );
      setNotesSaved(true);
      setTimeout(() => setNotesSaved(false), 2000);
    }
  };

  const handleSelectVideo = (v: VideoResource) => {
    setActiveVideo(v);
    setIsCompleted(false);
    if (onSelectVideo) onSelectVideo(v);
    const saved = localStorage.getItem(`gate2027_lecture_notes_${topicId}_${v.youtubeId || v.title}`);
    setLectureNotes(saved || '');
  };

  const videoList = allVideos.length > 0 ? allVideos : [activeVideo];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-2 rounded-lg bg-red-500/15 border border-red-500/30 text-red-400 shrink-0">
              <Youtube className="w-5 h-5 text-red-500" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-semibold block truncate">
                Curated Video Masterclass · {topicTitle}
              </span>
              <h2 className="text-sm sm:text-base font-bold text-white truncate">
                {activeVideo.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={directYoutubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/40 rounded-lg text-xs font-semibold transition-all hover:scale-102"
              title="Watch on YouTube in new tab"
            >
              <Youtube className="w-3.5 h-3.5 text-red-400" />
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3 h-3 text-red-300" />
            </a>

            <a
              href={youtubeSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-750 text-slate-300 border border-slate-700 rounded-lg text-xs font-semibold transition-colors"
              title="Search related lectures on YouTube"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span>Search More</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Multi-Video Selector Pills (if more than 1 lecture available) */}
        {videoList.length > 1 && (
          <div className="px-4 py-2 bg-slate-950/70 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto scrollbar-none text-xs font-mono">
            <span className="text-slate-500 shrink-0 text-[11px] uppercase tracking-wider font-semibold">
              Lectures ({videoList.length}):
            </span>
            {videoList.map((v, i) => {
              const isSelected = v.youtubeId === activeVideo.youtubeId || v.title === activeVideo.title;
              return (
                <button
                  key={i}
                  onClick={() => handleSelectVideo(v)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                    isSelected
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-xs'
                      : 'bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-750'
                  }`}
                >
                  <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                    isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-700 text-slate-300'
                  }`}>
                    {i + 1}
                  </span>
                  <span className="truncate max-w-[200px]">{v.title}</span>
                  {v.duration && (
                    <span className="text-[10px] text-slate-500">({v.duration})</span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* View Tabs: Player vs Scratchpad Notes */}
        <div className="px-4 py-1.5 bg-slate-950/40 border-b border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('video')}
              className={`px-3 py-1 rounded-md font-semibold transition-colors flex items-center gap-1.5 ${
                activeTab === 'video'
                  ? 'bg-slate-800 text-white border border-slate-700'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              <Youtube className="w-3.5 h-3.5 text-red-400" />
              <span>Lecture Video</span>
            </button>
            <button
              onClick={() => setActiveTab('notes')}
              className={`px-3 py-1 rounded-md font-semibold transition-colors flex items-center gap-1.5 ${
                activeTab === 'notes'
                  ? 'bg-slate-800 text-amber-300 border border-slate-700'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Lecture Scratchpad</span>
              {lectureNotes.trim() && (
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block"></span>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
            <span>{activeVideo.channel || activeVideo.provider}</span>
            {activeVideo.duration && <span>· {activeVideo.duration}</span>}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'video' ? (
            <div>
              {/* Video Player */}
              <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
                {ytId ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${ytId}?rel=0&modestbranding=1&enablejsapi=1`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div className="text-center p-8">
                    <p className="text-slate-400 mb-4">This external resource opens on the provider portal:</p>
                    <a
                      href={activeVideo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-slate-950 font-bold rounded-xl hover:bg-amber-400 transition-colors shadow-lg"
                    >
                      <span>Launch Video on {activeVideo.provider}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>

              {/* Robust Fallback Bar for Restricted Embeds / Region Locks */}
              <div className="px-4 py-2.5 bg-slate-950/95 border-t border-slate-800/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-[11px]">
                    See <strong>"Video unavailable"</strong>? Some YouTube channels restrict third-party iframe embeds.
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
                  <a
                    href={directYoutubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded-lg font-bold text-xs shadow-md shadow-red-900/30 transition-all hover:scale-102"
                  >
                    <Youtube className="w-3.5 h-3.5 fill-white" />
                    <span>Watch Directly on YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href={youtubeSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-lg font-medium text-xs transition-colors"
                  >
                    <Search className="w-3.5 h-3.5 text-amber-400" />
                    <span>Search Lectures</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* Lecture Scratchpad Notes View */
            <div className="p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <FileText className="w-4 h-4 text-amber-400" />
                    <span>Live Lecture Scratchpad & Formula Notes</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Jot down key derivations, coordinate systems, or shortcut tricks while watching. Saved locally to your browser!
                  </p>
                </div>

                <button
                  onClick={handleSaveNotes}
                  className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  {notesSaved ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-950" />
                      <span>Saved!</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-3.5 h-3.5" />
                      <span>Save Notes</span>
                    </>
                  )}
                </button>
              </div>

              <textarea
                value={lectureNotes}
                onChange={e => setLectureNotes(e.target.value)}
                placeholder={`Type your notes for ${activeVideo.title}...\n\nExample:\n- Homogeneous matrix format: 4x4 with [R | p] on top and [0 0 0 1] on bottom.\n- DH parameters order: a_i (link length), alpha_i (twist), d_i (offset), theta_i (joint angle).`}
                rows={10}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs text-slate-200 font-mono focus:outline-hidden focus:border-amber-500/50 resize-y"
              />
            </div>
          )}
        </div>

        {/* Action Bar & Metadata */}
        <div className="p-3 sm:p-4 bg-slate-950/80 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3 text-slate-400 flex-wrap">
            <span className="flex items-center gap-1 font-mono text-slate-300">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              {activeVideo.channel || activeVideo.provider}
            </span>
            {activeVideo.duration && (
              <span className="flex items-center gap-1 font-mono text-slate-400">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                {activeVideo.duration}
              </span>
            )}
            <span className="bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/20 font-mono text-[11px]">
              High Yield for GATE 2027
            </span>
          </div>

          <button
            onClick={handleMarkComplete}
            disabled={isCompleted}
            className={`w-full sm:w-auto px-4 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
              isCompleted
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default'
                : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/20 active:scale-95'
            }`}
          >
            {isCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Lecture Completed (+35 XP Earned)</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>Mark as Watched (+35 XP)</span>
              </>
            )}
          </button>
        </div>

        {/* Study Advice Pill */}
        <div className="px-4 py-2 bg-slate-900 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>GATE Pro-Tip</strong>: Watch at 1.25x speed, jot formulas into your scratchpad, then switch to the <strong>Notes Workspace</strong> or <strong>Practice Arena</strong> to test your mastery!
          </span>
        </div>
      </div>
    </div>
  );
};
