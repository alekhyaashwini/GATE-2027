import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  X, 
  Download, 
  Upload, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  Flame, 
  Trophy, 
  FileText,
  RotateCcw
} from 'lucide-react';

interface DataBackupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DataBackupModal: React.FC<DataBackupModalProps> = ({ isOpen, onClose }) => {
  const { stats, exportUserDataJson, importUserDataJson, resetAllData, topicProgress, mistakes } = useApp();
  const [importText, setImportText] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownloadBackup = () => {
    const jsonStr = exportUserDataJson();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `GATE_QUEST_2027_Backup_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    if (!importText.trim()) return;
    const success = importUserDataJson(importText.trim());
    if (success) {
      setImportStatus('success');
      setTimeout(() => {
        onClose();
        window.location.reload();
      }, 1000);
    } else {
      setImportStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between bg-slate-950 px-5 py-3.5 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Aspirant Profile & Data Management
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5 text-xs">
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-3 text-center font-mono">
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Aspirant Level</div>
              <div className="text-2xl font-extrabold text-amber-400 mt-0.5">
                Level {stats.level}
              </div>
              <div className="text-[10px] text-slate-500">{stats.xp} Total XP</div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Study Streak</div>
              <div className="text-2xl font-extrabold text-rose-400 mt-0.5 flex items-center justify-center gap-1">
                <Flame className="w-5 h-5 fill-rose-500 text-rose-500" />
                <span>{stats.streakDays}d</span>
              </div>
              <div className="text-[10px] text-slate-500">Consistent Days</div>
            </div>

            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Solved</div>
              <div className="text-2xl font-extrabold text-emerald-400 mt-0.5">
                {stats.totalQuestionsSolved}
              </div>
              <div className="text-[10px] text-slate-500">{stats.accuracyRate}% Accuracy</div>
            </div>
          </div>

          {/* Backup & Restore */}
          <div className="space-y-3 pt-2 border-t border-slate-800">
            <div className="font-semibold text-slate-200 font-mono text-[11px] uppercase tracking-wider">
              Local Storage Backup & Device Migration
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              All your structured notes, mistake classifications, and mock test scores are stored locally in your browser. Download a JSON backup to transfer your preparation to another machine or safeguard your progress.
            </p>

            <button
              onClick={handleDownloadBackup}
              className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Complete Study Backup (JSON)</span>
            </button>
          </div>

          {/* Import JSON */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <label className="block text-[11px] font-mono text-slate-400">
              Restore from Backup JSON:
            </label>
            <textarea
              rows={3}
              placeholder="Paste JSON backup payload here..."
              value={importText}
              onChange={e => setImportText(e.target.value)}
              className="w-full p-2 bg-slate-950 border border-slate-800 rounded-lg text-slate-200 font-mono text-[11px] focus:outline-hidden focus:border-amber-500"
            />
            {importStatus === 'success' && (
              <div className="text-emerald-400 text-[11px] font-mono flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Backup imported successfully! Reloading...</span>
              </div>
            )}
            {importStatus === 'error' && (
              <div className="text-rose-400 text-[11px] font-mono flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Invalid JSON payload. Please paste a valid backup file.</span>
              </div>
            )}
            <button
              onClick={handleImport}
              disabled={!importText.trim()}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-200 rounded-lg font-medium transition-colors text-xs flex items-center justify-center gap-1.5"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Restore Study Data</span>
            </button>
          </div>

          {/* Reset */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-slate-500 text-[11px]">
            <span>Need a fresh start?</span>
            <button
              onClick={() => {
                if (window.confirm('Reset all progress, notes, and test history? This cannot be undone.')) {
                  resetAllData();
                }
              }}
              className="text-rose-400 hover:text-rose-300 flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset All Progress</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
