import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Flame, 
  Trophy, 
  Shield, 
  Calendar, 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  Play, 
  BookOpen, 
  Zap,
  TrendingUp,
  Award
} from 'lucide-react';

interface StudyStreakModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudyStreakModal: React.FC<StudyStreakModalProps> = ({ isOpen, onClose }) => {
  const { stats, setActiveTab, earnXp, useStreakFreeze } = useApp();
  const [selectedCellDate, setSelectedCellDate] = useState<string | null>(null);
  const [freezeClaimed, setFreezeClaimed] = useState(false);

  if (!isOpen) return null;

  const todayStr = new Date().toISOString().split('T')[0];
  const history = stats.studyHistory || {};
  const todayActivity = history[todayStr] || { questionsSolved: 0, topicsStudied: 0, notesRevised: 0 };
  const totalTodayActions = todayActivity.questionsSolved + todayActivity.topicsStudied + todayActivity.notesRevised;
  const isStreakSafeToday = totalTodayActions > 0;

  // Generate last 60 days for visual heatmap
  const heatmapDays = useMemo(() => {
    const days: { dateStr: string; displayLabel: string; count: number; details: any; dayOfWeek: number }[] = [];
    const now = new Date();

    for (let i = 59; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const entry = history[dateStr];
      const count = entry ? (entry.questionsSolved + entry.topicsStudied + entry.notesRevised) : 0;

      days.push({
        dateStr,
        displayLabel: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        count,
        details: entry,
        dayOfWeek: d.getDay()
      });
    }
    return days;
  }, [history]);

  // Streak milestones
  const milestones = [
    { days: 3, title: '3-Day Spark', xp: 50, desc: 'Built the study habit' },
    { days: 7, title: '7-Day Blaze', xp: 150, desc: '1 solid week of GATE consistency' },
    { days: 14, title: '14-Day Inferno', xp: 300, desc: 'Two weeks of uninterrupted focus' },
    { days: 30, title: '30-Day Legend', xp: 750, desc: 'A full month of disciplined preparation' },
    { days: 60, title: '60-Day Titan', xp: 1500, desc: 'Iron will on the road to GATE 2027' },
  ];

  const handleUseFreeze = () => {
    if (useStreakFreeze()) {
      setFreezeClaimed(true);
      setTimeout(() => setFreezeClaimed(false), 3000);
    }
  };

  const selectedDayInfo = selectedCellDate ? heatmapDays.find(d => d.dateStr === selectedCellDate) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-750 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between bg-gradient-to-r from-amber-950/40 via-slate-950 to-slate-950 px-6 py-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400">
              <Flame className="w-5 h-5 fill-amber-500 text-amber-500 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-white tracking-tight">
                  Daily Study Streak Tracker
                </h2>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                  Consistency Hub
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Reward regular daily engagement without harsh penalties
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs scrollbar-thin">
          {/* Main Streak Stats Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Current Streak */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between text-slate-400 font-mono text-[11px]">
                <span>Current Streak</span>
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
              </div>
              <div className="my-2">
                <div className="text-3xl font-extrabold text-amber-400 font-mono tracking-tight flex items-baseline gap-1.5">
                  <span>{stats.streakDays}</span>
                  <span className="text-xs text-amber-300 font-sans font-medium">Days</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1 font-sans">
                  {isStreakSafeToday ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Extended today!
                    </span>
                  ) : (
                    <span className="text-amber-300/90 flex items-center gap-1">
                      <Circle className="w-3 h-3 text-amber-400" /> Study today to extend
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Longest Record */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400 font-mono text-[11px]">
                <span>Personal Best</span>
                <Trophy className="w-4 h-4 text-amber-400" />
              </div>
              <div className="my-2">
                <div className="text-3xl font-extrabold text-slate-200 font-mono tracking-tight flex items-baseline gap-1.5">
                  <span>{stats.longestStreak || stats.streakDays}</span>
                  <span className="text-xs text-slate-400 font-sans font-medium">Days</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-sans">
                  All-time longest streak
                </div>
              </div>
            </div>

            {/* Streak Freeze & Protection */}
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-slate-400 font-mono text-[11px]">
                <span>Streak Shield</span>
                <Shield className="w-4 h-4 text-sky-400" />
              </div>
              <div className="my-2">
                <div className="text-3xl font-extrabold text-sky-400 font-mono tracking-tight flex items-baseline gap-1.5">
                  <span>{stats.streakFreezes ?? 1}</span>
                  <span className="text-xs text-sky-300 font-sans font-medium">Available</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-sans">
                  Protects 1 missed study day
                </div>
              </div>
            </div>
          </div>

          {/* Today's Habit Checklist */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="font-bold text-slate-200 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Today&apos;s Consistency Goal ({new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })})</span>
              </span>
              <span className={`text-[11px] font-semibold ${isStreakSafeToday ? 'text-emerald-400' : 'text-amber-400'}`}>
                {isStreakSafeToday ? 'Streak Safe ✓' : 'Action Required'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              {/* Practice Goal */}
              <div className={`p-3 rounded-lg border transition-all ${
                todayActivity.questionsSolved > 0 
                  ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-200' 
                  : 'bg-slate-900/60 border-slate-800 text-slate-400'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-300">Practice Set</span>
                  {todayActivity.questionsSolved > 0 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-slate-600 shrink-0" />
                  )}
                </div>
                <div className="text-[11px] font-mono mt-1 text-slate-400">
                  {todayActivity.questionsSolved} questions solved
                </div>
              </div>

              {/* Study Topic Goal */}
              <div className={`p-3 rounded-lg border transition-all ${
                todayActivity.topicsStudied > 0 
                  ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-200' 
                  : 'bg-slate-900/60 border-slate-800 text-slate-400'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-300">Syllabus Topic</span>
                  {todayActivity.topicsStudied > 0 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-slate-600 shrink-0" />
                  )}
                </div>
                <div className="text-[11px] font-mono mt-1 text-slate-400">
                  {todayActivity.topicsStudied} topics explored
                </div>
              </div>

              {/* Notes Workspace Goal */}
              <div className={`p-3 rounded-lg border transition-all ${
                todayActivity.notesRevised > 0 
                  ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-200' 
                  : 'bg-slate-900/60 border-slate-800 text-slate-400'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-slate-300">Notes Updated</span>
                  {todayActivity.notesRevised > 0 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-slate-600 shrink-0" />
                  )}
                </div>
                <div className="text-[11px] font-mono mt-1 text-slate-400">
                  {todayActivity.notesRevised} notes recorded
                </div>
              </div>
            </div>
          </div>

          {/* 60-Day Study Heatmap Calendar */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-amber-400" />
                <span className="font-bold text-slate-200 font-mono">60-Day Study Consistency Map</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-xs bg-slate-900 border border-slate-800 inline-block" />
                <span className="w-2.5 h-2.5 rounded-xs bg-amber-900/50 border border-amber-800/60 inline-block" />
                <span className="w-2.5 h-2.5 rounded-xs bg-amber-600 border border-amber-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-xs bg-amber-400 border border-amber-300 inline-block" />
                <span>More</span>
              </div>
            </div>

            {/* Grid of days */}
            <div className="grid grid-flow-col grid-rows-7 gap-1.5 overflow-x-auto py-1">
              {heatmapDays.map((day) => {
                let colorClass = 'bg-slate-900 border-slate-800 hover:border-slate-600';
                if (day.count === 1) colorClass = 'bg-amber-950/70 border-amber-800/80 hover:border-amber-600';
                else if (day.count === 2) colorClass = 'bg-amber-700/80 border-amber-600 hover:border-amber-400';
                else if (day.count >= 3) colorClass = 'bg-amber-400 border-amber-300 hover:bg-amber-300';

                const isSelected = selectedCellDate === day.dateStr;

                return (
                  <button
                    key={day.dateStr}
                    onClick={() => setSelectedCellDate(day.dateStr)}
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-xs border transition-transform hover:scale-125 focus:outline-hidden ${colorClass} ${
                      isSelected ? 'ring-2 ring-white scale-125' : ''
                    }`}
                    title={`${day.displayLabel}: ${day.count} activities`}
                  />
                );
              })}
            </div>

            {/* Selected Day Details Inspection */}
            {selectedDayInfo && (
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg text-slate-300 flex items-center justify-between text-[11px] font-mono">
                <div>
                  <span className="font-bold text-amber-400">{selectedDayInfo.displayLabel}:</span>{' '}
                  {selectedDayInfo.count > 0 ? (
                    <span>
                      {selectedDayInfo.details?.questionsSolved || 0} questions · {selectedDayInfo.details?.topicsStudied || 0} topics · {selectedDayInfo.details?.notesRevised || 0} notes
                    </span>
                  ) : (
                    <span className="text-slate-500">No study logged on this day</span>
                  )}
                </div>
                <button
                  onClick={() => setSelectedCellDate(null)}
                  className="text-slate-500 hover:text-slate-300 text-[10px]"
                >
                  Clear
                </button>
              </div>
            )}
          </div>

          {/* Milestones & Badges */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-slate-200 font-mono">Consistency Milestones</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {milestones.map((m) => {
                const isUnlocked = stats.streakDays >= m.days;
                return (
                  <div
                    key={m.days}
                    className={`p-3 rounded-xl border flex items-center justify-between gap-3 ${
                      isUnlocked
                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-500'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg ${
                        isUnlocked ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-600'
                      }`}>
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-xs text-white">{m.title}</div>
                        <div className="text-[11px] text-slate-400">{m.desc}</div>
                      </div>
                    </div>

                    <div className="text-right shrink-0 font-mono">
                      <span className={`text-[11px] font-bold ${isUnlocked ? 'text-amber-400' : 'text-slate-500'}`}>
                        +{m.xp} XP
                      </span>
                      <div className="text-[10px] text-slate-500">
                        {isUnlocked ? 'Unlocked' : `${stats.streakDays}/${m.days}d`}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer Quick Actions */}
        <div className="bg-slate-950 px-6 py-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Complete any practice set or note update to maintain streak.</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                setActiveTab('notes');
              }}
              className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Revise Notes</span>
            </button>

            <button
              onClick={() => {
                onClose();
                setActiveTab('practice');
              }}
              className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <Play className="w-3.5 h-3.5 fill-slate-950" />
              <span>Practice Questions</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
