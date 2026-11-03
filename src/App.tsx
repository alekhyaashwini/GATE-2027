import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { GateCountdown } from './components/common/GateCountdown';
import { GateCalculator } from './components/common/GateCalculator';
import { DataBackupModal } from './components/common/DataBackupModal';
import { StudyStreakModal } from './components/common/StudyStreakModal';
import { SyllabusQuestView } from './components/syllabus/SyllabusQuestView';
import { NotesWorkspaceView } from './components/notes/NotesWorkspaceView';
import { PracticeArenaView } from './components/practice/PracticeArenaView';
import { MockTestView } from './components/mock/MockTestView';
import { SimulationsView } from './components/simulations/SimulationsView';
import { FormulaCheatSheetsView } from './components/formulas/FormulaCheatSheetsView';
import { GeneralAptitudeView } from './components/aptitude/GeneralAptitudeView';
import { AiMistakeAnalystModal } from './components/mistakes/AiMistakeAnalystModal';

function AppContent() {
  const { activeTab, activeTestSession } = useApp();
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isBackupOpen, setIsBackupOpen] = useState(false);
  const [isStreakOpen, setIsStreakOpen] = useState(false);
  const [isMistakeModalOpen, setIsMistakeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Bar Header */}
      <Header
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenDataBackup={() => setIsBackupOpen(true)}
        onOpenStreakTracker={() => setIsStreakOpen(true)}
        onOpenMistakeAnalyzer={() => setIsMistakeModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {/* Render Countdown Banner on the dashboard tabs when not in an active timed test session */}
        {(!activeTestSession || activeTestSession.isCompleted) && activeTab === 'syllabus' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
            <ErrorBoundary moduleName="Countdown">
              <GateCountdown />
            </ErrorBoundary>
          </div>
        )}

        {/* Dynamic Tab Views */}
        {activeTab === 'syllabus' && (
          <ErrorBoundary moduleName="Syllabus Quest">
            <SyllabusQuestView />
          </ErrorBoundary>
        )}
        {activeTab === 'notes' && (
          <ErrorBoundary moduleName="Notes Workspace">
            <NotesWorkspaceView />
          </ErrorBoundary>
        )}
        {activeTab === 'practice' && (
          <ErrorBoundary moduleName="Practice Arena">
            <PracticeArenaView onOpenCalculator={() => setIsCalculatorOpen(true)} />
          </ErrorBoundary>
        )}
        {activeTab === 'mock' && (
          <ErrorBoundary moduleName="Mock Test">
            <MockTestView onOpenCalculator={() => setIsCalculatorOpen(true)} />
          </ErrorBoundary>
        )}
        {activeTab === 'simulations' && (
          <ErrorBoundary moduleName="Simulations">
            <SimulationsView />
          </ErrorBoundary>
        )}
        {activeTab === 'formulas' && (
          <ErrorBoundary moduleName="Formula Cheat Sheets">
            <FormulaCheatSheetsView />
          </ErrorBoundary>
        )}
        {activeTab === 'aptitude' && (
          <ErrorBoundary moduleName="General Aptitude">
            <GeneralAptitudeView onOpenCalculator={() => setIsCalculatorOpen(true)} />
          </ErrorBoundary>
        )}
      </main>

      {/* AI Mistake Analyzer & Error Doctor Modal */}
      <AiMistakeAnalystModal
        isOpen={isMistakeModalOpen}
        onClose={() => setIsMistakeModalOpen(false)}
      />

      {/* Global TCS iON-style GATE Scientific Calculator Modal */}
      <ErrorBoundary moduleName="Calculator">
        <GateCalculator
          isOpen={isCalculatorOpen}
          onClose={() => setIsCalculatorOpen(false)}
        />
      </ErrorBoundary>

      {/* Global Data Backup & Aspirant Profile Modal */}
      <ErrorBoundary moduleName="Data Backup">
        <DataBackupModal
          isOpen={isBackupOpen}
          onClose={() => setIsBackupOpen(false)}
        />
      </ErrorBoundary>

      {/* Global Study Streak Tracker Modal */}
      <ErrorBoundary moduleName="Streak Tracker">
        <StudyStreakModal
          isOpen={isStreakOpen}
          onClose={() => setIsStreakOpen(false)}
        />
      </ErrorBoundary>

      {/* Quiet Academic Footer (Anti-Slop Restraint) */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-6 px-4 sm:px-6 text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-400">GATE QUEST 2027</span>
            <span>·</span>
            <span>Robotics & Automation (RA) · Data Science & AI (DA)</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="https://gate2027.iitm.ac.in/"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-slate-300 transition-colors"
            >
              IIT Madras Official Portal
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://nptel.ac.in/"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-slate-300 transition-colors"
            >
              NPTEL
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://gateoverflow.in/"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-slate-300 transition-colors"
            >
              GATE Overflow
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
