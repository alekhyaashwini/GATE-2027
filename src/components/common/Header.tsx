import React from 'react';
import { useApp, ActiveTab } from '../../context/AppContext';
import { GateCountdown } from './GateCountdown';
import { Sparkles, Flame, AlertCircle } from 'lucide-react';

interface HeaderProps {
  onOpenCalculator: () => void;
  onOpenDataBackup: () => void;
  onOpenStreakTracker: () => void;
  onOpenMistakeAnalyzer: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenCalculator, 
  onOpenDataBackup, 
  onOpenStreakTracker,
  onOpenMistakeAnalyzer 
}) => {
  const { activePaper, setActivePaper, activeTab, setActiveTab, stats, mistakes } = useApp();

  const paperMistakes = mistakes.filter(m => m.paper === activePaper);
  const unresolvedCount = paperMistakes.filter(m => !m.resolved).length;

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'notes', label: 'Notes Workspace' },
    { id: 'formulas', label: 'Formula Sheets' },
    { id: 'aptitude', label: 'General Aptitude (15M)' },
    { id: 'practice', label: 'Practice' },
    { id: 'mock', label: 'Mock Tests' },
    { id: 'simulations', label: 'Simulations' }
  ];

  return (
    <header className="border-b border-slate-800 bg-slate-950/95 sticky top-0 z-40 backdrop-blur-md">
      {/* Top Bar 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('syllabus')}
            className="text-lg font-bold tracking-tight text-white hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span className="text-amber-400 font-mono">GATE</span>
            <span>QUEST 2027</span>
          </button>

          {/* Paper Switcher */}
          <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 ml-2">
            <button
              onClick={() => setActivePaper('RA')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activePaper === 'RA'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Robotics & Automation"
            >
              RA Paper
            </button>
            <button
              onClick={() => setActivePaper('DA')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activePaper === 'DA'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Data Science & Artificial Intelligence"
            >
              DA Paper
            </button>
          </div>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                activeTab === item.id
                  ? 'text-amber-400 border-b-2 border-amber-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-100 hover:underline hover:underline-offset-4 decoration-slate-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Utilities */}
        <div className="flex items-center gap-2.5 shrink-0">
          <GateCountdown compact />

          {/* Mistake Doctor Quick Trigger */}
          <button
            onClick={onOpenMistakeAnalyzer}
            className={`px-2.5 py-1.5 text-xs font-mono font-bold rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 border ${
              unresolvedCount > 0
                ? 'bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border-rose-500/35 hover:border-rose-400 shadow-2xs animate-pulse'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800'
            }`}
            title="Open Mistake Analyzer & Error Diagnostic Dashboard"
          >
            <AlertCircle className={`w-3.5 h-3.5 ${unresolvedCount > 0 ? 'text-rose-400' : 'text-slate-400'}`} />
            <span>{unresolvedCount > 0 ? `${unresolvedCount} Mistakes` : 'Mistake Doctor'}</span>
          </button>

          <button
            onClick={onOpenStreakTracker}
            className="px-2.5 py-1.5 text-xs font-mono font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-2xs hover:border-amber-400"
            title="Open Study Streak Tracker & 60-Day Consistency Map"
          >
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>{stats.streakDays}d Streak</span>
          </button>

          <button
            onClick={onOpenCalculator}
            className="hidden sm:inline-flex px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors whitespace-nowrap"
            title="Open official virtual GATE scientific calculator"
          >
            Calc
          </button>

          <button
            onClick={onOpenDataBackup}
            className="px-3 py-1.5 text-xs font-medium text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 font-sans shadow-xs font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>Lvl {stats.level} · {stats.xp} XP</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav row */}
      <div className="lg:hidden flex items-center gap-4 px-4 py-2 border-t border-slate-900 overflow-x-auto text-xs font-medium scrollbar-none">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`whitespace-nowrap px-2.5 py-1 rounded-md transition-colors ${
              activeTab === item.id
                ? 'bg-amber-500/20 text-amber-300 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};
