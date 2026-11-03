import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { FORMULA_CHEAT_SHEETS, FormulaSheetItem } from '../../data/formulaCheatSheetsData';
import { KaTeXRenderer } from '../common/KaTeXRenderer';
import { 
  Search, 
  Copy, 
  Check, 
  Printer, 
  BookOpen, 
  AlertTriangle, 
  Lightbulb, 
  Layers,
  Compass,
  FileText
} from 'lucide-react';

export const FormulaCheatSheetsView: React.FC = () => {
  const { activePaper } = useApp();
  const [selectedPaper, setSelectedPaper] = useState<'ALL' | 'RA' | 'DA'>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Sync default selection with active paper
  React.useEffect(() => {
    setSelectedPaper(activePaper as 'RA' | 'DA');
  }, [activePaper]);

  // Extract all unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    FORMULA_CHEAT_SHEETS.forEach(f => cats.add(f.category));
    return ['ALL', ...Array.from(cats).sort()];
  }, []);

  // Filter formulas based on paper, category, and search query
  const filteredFormulas = useMemo(() => {
    return FORMULA_CHEAT_SHEETS.filter(item => {
      // Paper filter
      if (selectedPaper !== 'ALL') {
        if (item.paper !== 'COMMON' && item.paper !== selectedPaper) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'ALL' && item.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const inTitle = item.title.toLowerCase().includes(query);
        const inDesc = item.description.toLowerCase().includes(query);
        const inFormula = item.formulaLatex.toLowerCase().includes(query);
        const inVars = item.variables.some(v => v.symbol.toLowerCase().includes(query) || v.meaning.toLowerCase().includes(query));
        return inTitle || inDesc || inFormula || inVars;
      }

      return true;
    });
  }, [selectedPaper, selectedCategory, searchQuery]);

  const handleCopyLatex = (formula: FormulaSheetItem) => {
    navigator.clipboard.writeText(formula.formulaLatex);
    setCopiedId(formula.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Banner / HUD */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">
              <FileText className="w-3.5 h-3.5" />
              <span>OFFICIAL FORMULA CHEAT SHEETS · GATE 2027</span>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Rapid Revision & Equation Reference
            </h1>
            <p className="text-xs text-slate-400 max-w-2xl">
              High-yield mathematical relations, transfer functions, coordinate transform matrices, and exam trap alerts for instant recall.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
              title="Print or export cheat sheet to PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search formulas by name, symbol, or concept (e.g. SVD, Jacobian, DH, Bayes)..."
              className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-hidden font-sans"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Paper Switcher */}
            <div className="flex items-center bg-slate-950 border border-slate-800 p-1 rounded-xl text-xs">
              <button
                onClick={() => setSelectedPaper('ALL')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  selectedPaper === 'ALL'
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Papers
              </button>
              <button
                onClick={() => setSelectedPaper('RA')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  selectedPaper === 'RA'
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                RA Only
              </button>
              <button
                onClick={() => setSelectedPaper('DA')}
                className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                  selectedPaper === 'DA'
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                DA Only
              </button>
            </div>

            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-200 text-xs px-3 py-2 rounded-xl focus:outline-hidden focus:border-amber-500 font-sans"
            >
              <option value="ALL">All Categories ({categories.length - 1})</option>
              {categories.filter(c => c !== 'ALL').map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Formula Count & Status */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1 font-mono">
        <span>
          Showing <strong>{filteredFormulas.length}</strong> formula cheat sheets
        </span>
        <span className="text-amber-400">
          Pro-Tip: Click "Copy LaTeX" to copy formulas directly into your personal notes.
        </span>
      </div>

      {/* High-Density Formula Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filteredFormulas.map(item => {
          const isCopied = copiedId === item.id;
          return (
            <div
              key={item.id}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 shadow-sm transition-all flex flex-col justify-between space-y-4 relative group"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950 text-slate-400 border border-slate-800">
                      {item.paper === 'COMMON' ? 'RA & DA Common' : `${item.paper} Core`}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopyLatex(item)}
                    className="p-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-[11px] font-mono"
                    title="Copy LaTeX formula to clipboard"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy LaTeX</span>
                      </>
                    )}
                  </button>
                </div>

                <h3 className="text-base font-bold text-white mt-3 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {item.description}
                </p>

                {/* Primary LaTeX Equation Container */}
                <div className="mt-3.5 p-4 bg-slate-950 rounded-xl border border-slate-800 text-center overflow-x-auto">
                  <div className="inline-block py-1">
                    <KaTeXRenderer content={`$$${item.formulaLatex}$$`} />
                  </div>
                </div>

                {/* Variable Glossary */}
                {item.variables && item.variables.length > 0 && (
                  <div className="mt-3.5 bg-slate-950/60 rounded-xl p-3 border border-slate-800/60 space-y-1.5 text-xs">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-semibold">
                      Variable Legend:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 text-slate-300">
                      {item.variables.map((v, vIdx) => (
                        <div key={vIdx} className="flex items-start gap-1.5">
                          <span className="font-mono text-amber-300 font-semibold shrink-0">
                            <KaTeXRenderer content={`$${v.symbol}$`} />:
                          </span>
                          <span className="text-slate-400 text-[11px] leading-tight">
                            {v.meaning}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer: Exam Tip & Traps */}
              <div className="space-y-2 pt-2 border-t border-slate-800/80">
                {/* Exam Tip */}
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="text-[11px] leading-relaxed">
                    <strong className="text-emerald-400">Exam Shortcut:</strong> {item.examTip}
                  </div>
                </div>

                {/* GATE Trap Warning */}
                {item.gateTrapAlert && (
                  <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div className="text-[11px] leading-relaxed">
                      <strong className="text-rose-400">GATE Trap:</strong> {item.gateTrapAlert}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filteredFormulas.length === 0 && (
        <div className="text-center py-12 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400">
          <FileText className="w-8 h-8 text-slate-500 mx-auto mb-2" />
          <p className="text-sm font-semibold text-slate-300">No formula cheat sheets match your filters.</p>
          <button
            onClick={() => {
              setSelectedPaper('ALL');
              setSelectedCategory('ALL');
              setSearchQuery('');
            }}
            className="mt-3 px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
};
