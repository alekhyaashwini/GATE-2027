import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Clock, Calendar, Edit3, Check, X, AlertCircle } from 'lucide-react';
import { SYLLABUS_NODES } from '../../data/syllabusData';

interface CountdownState {
  totalSeconds: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const GateCountdown: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { targetExamDate, setTargetExamDate, nextMockDate, activePaper, topicProgress, mistakes, stats } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [tempDate, setTempDate] = useState(targetExamDate.split('T')[0]);
  const [tempTime, setTempTime] = useState('09:00');
  const [countdown, setCountdown] = useState<CountdownState>({
    totalSeconds: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetExamDate).getTime();
      const diff = target - now;

      if (diff <= 0) {
        setCountdown({ totalSeconds: 0, days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setCountdown({ totalSeconds, days, hours, minutes, seconds, isPast: false });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetExamDate]);

  // Secondary counter: next mock
  const daysToNextMock = Math.max(0, Math.ceil((new Date(nextMockDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24)));

  // Current paper syllabus stats
  const paperTopics = SYLLABUS_NODES.filter(n => n.paper === activePaper);
  const studiedCount = paperTopics.filter(t => topicProgress[t.id]?.studied).length;
  const coveragePct = paperTopics.length > 0 ? Math.round((studiedCount / paperTopics.length) * 100) : 0;
  const unresolvedMistakes = mistakes.filter(m => m.paper === activePaper && !m.resolved).length;

  const handleSaveDate = () => {
    setTargetExamDate(`${tempDate}T${tempTime}:00`);
    setIsEditing(false);
  };

  // Milestone marker check
  const getMilestoneNudge = (daysLeft: number) => {
    const milestones = [120, 90, 60, 30, 14, 7, 1];
    const closest = milestones.find(m => Math.abs(m - daysLeft) <= 3) || null;
    if (closest) {
      return {
        milestoneDay: closest,
        message: `Milestone ${closest} Days Out: ${coveragePct}% ${activePaper} syllabus covered · ${stats.totalMocksCompleted} mocks completed · ${unresolvedMistakes} mistake items to review.`
      };
    }
    return null;
  };

  const milestoneNudge = getMilestoneNudge(countdown.days);

  if (compact) {
    return (
      <div className="flex items-center gap-2 text-xs font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-md">
        <Clock className="w-3.5 h-3.5 text-amber-400" />
        <span className="tabular-nums font-semibold tracking-wide">
          {countdown.isPast ? 'GATE 2027 Concluded' : `${countdown.days}d ${countdown.hours}h to GATE 2027`}
        </span>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-sm text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-amber-400" />
          <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider font-mono">
            GATE 2027 Official Countdown
          </h3>
          <span className="text-xs text-slate-400 font-sans">
            (IIT Madras · 6–7 Feb 2027 Weekend 1)
          </span>
        </div>

        <div className="flex items-center gap-2">
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 font-mono transition-colors"
              title="Edit exam shift date"
            >
              <Edit3 className="w-3 h-3" />
              <span>Edit Date/Shift</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <input
                type="date"
                value={tempDate}
                onChange={e => setTempDate(e.target.value)}
                className="bg-slate-950 border border-slate-700 text-xs px-2 py-1 rounded text-slate-200 font-mono"
              />
              <input
                type="time"
                value={tempTime}
                onChange={e => setTempTime(e.target.value)}
                className="bg-slate-950 border border-slate-700 text-xs px-2 py-1 rounded text-slate-200 font-mono"
              />
              <button
                onClick={handleSaveDate}
                className="text-emerald-400 hover:text-emerald-300 p-1"
                title="Save"
              >
                <Check className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="text-rose-400 hover:text-rose-300 p-1"
                title="Cancel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Countdown Display */}
      <div className="grid grid-cols-4 gap-3 my-4 text-center">
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-3">
          <div className="text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
            {countdown.days}
          </div>
          <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-1">
            Days
          </div>
        </div>

        <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-3">
          <div className="text-3xl font-extrabold text-slate-200 font-mono tabular-nums">
            {String(countdown.hours).padStart(2, '0')}
          </div>
          <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-1">
            Hours
          </div>
        </div>

        <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-3">
          <div className="text-3xl font-extrabold text-slate-200 font-mono tabular-nums">
            {String(countdown.minutes).padStart(2, '0')}
          </div>
          <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-1">
            Minutes
          </div>
        </div>

        <div className="bg-slate-950/70 border border-slate-800/80 rounded-lg p-3">
          <div className="text-3xl font-extrabold text-slate-300 font-mono tabular-nums">
            {String(countdown.seconds).padStart(2, '0')}
          </div>
          <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mt-1">
            Seconds
          </div>
        </div>
      </div>

      {/* Milestone Nudge Bar */}
      {milestoneNudge ? (
        <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs px-3 py-2 rounded-lg mb-3">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{milestoneNudge.message}</span>
        </div>
      ) : (
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 border-t border-slate-800/80 pt-3 gap-2">
          <div className="flex items-center gap-2">
            <span className="font-medium text-slate-300">Phase 1 Status:</span>
            <span>{coveragePct}% syllabus explored</span>
            <span aria-hidden="true">·</span>
            <span>{studiedCount}/{paperTopics.length} topics</span>
          </div>

          <div className="flex items-center gap-3">
            <span>Next Weekly Mock: <strong className="text-slate-200 font-mono tabular-nums">{daysToNextMock} days</strong></span>
            <span aria-hidden="true">·</span>
            <span>Mistakes in Queue: <strong className="text-amber-400 font-mono tabular-nums">{unresolvedMistakes}</strong></span>
          </div>
        </div>
      )}
    </div>
  );
};
