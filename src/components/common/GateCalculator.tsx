import React, { useState } from 'react';
import { X, RotateCcw } from 'lucide-react';

interface GateCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GateCalculator: React.FC<GateCalculatorProps> = ({ isOpen, onClose }) => {
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState<number>(0);
  const [isRad, setIsRad] = useState(false);
  const [newNumber, setNewNumber] = useState(true);

  if (!isOpen) return null;

  // Safe recursive-descent expression parser
  // Handles +, -, *, /, parentheses, decimals, and unary minus
  const safeEvaluate = (expr: string): number => {
    let pos = 0;
    const input = expr.replace(/\s+/g, '');

    const peek = (): string => input[pos] ?? '';
    const consume = (ch?: string): string => {
      if (ch !== undefined && input[pos] !== ch) {
        throw new Error(`Expected '${ch}' but got '${input[pos] ?? 'end of input'}'`);
      }
      return input[pos++];
    };

    // Grammar:
    //   expression = term (('+' | '-') term)*
    //   term       = factor (('*' | '/') factor)*
    //   factor     = ['+' | '-'] atom
    //   atom       = number | '(' expression ')'

    const parseExpression = (): number => {
      let result = parseTerm();
      while (peek() === '+' || peek() === '-') {
        const op = consume();
        const right = parseTerm();
        result = op === '+' ? result + right : result - right;
      }
      return result;
    };

    const parseTerm = (): number => {
      let result = parseFactor();
      while (peek() === '*' || peek() === '/') {
        const op = consume();
        const right = parseFactor();
        if (op === '/') {
          if (right === 0) throw new Error('Division by zero');
          result = result / right;
        } else {
          result = result * right;
        }
      }
      return result;
    };

    const parseFactor = (): number => {
      if (peek() === '+') {
        consume();
        return parseFactor();
      }
      if (peek() === '-') {
        consume();
        return -parseFactor();
      }
      return parseAtom();
    };

    const parseAtom = (): number => {
      if (peek() === '(') {
        consume('(');
        const result = parseExpression();
        consume(')');
        return result;
      }
      // Parse a number (integer or decimal)
      const start = pos;
      while (pos < input.length && (input[pos] >= '0' && input[pos] <= '9' || input[pos] === '.')) {
        pos++;
      }
      if (pos === start) {
        throw new Error(`Unexpected character: '${input[pos] ?? 'end of input'}'`);
      }
      const numStr = input.slice(start, pos);
      const num = parseFloat(numStr);
      if (isNaN(num)) {
        throw new Error(`Invalid number: '${numStr}'`);
      }
      return num;
    };

    const result = parseExpression();
    if (pos < input.length) {
      throw new Error(`Unexpected character at position ${pos}: '${input[pos]}'`);
    }
    if (!isFinite(result)) {
      throw new Error('Result is not finite');
    }
    return result;
  };

  const handleDigit = (digit: string) => {
    if (newNumber) {
      setDisplay(digit);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const handleDecimal = () => {
    if (newNumber) {
      setDisplay('0.');
      setNewNumber(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setNewNumber(true);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
      setNewNumber(true);
    }
  };

  const toRadians = (deg: number) => (deg * Math.PI) / 180;
  const toDegrees = (rad: number) => (rad * 180) / Math.PI;

  const handleSciOp = (op: string) => {
    const val = parseFloat(display);
    let result = val;

    try {
      switch (op) {
        case 'sin':
          result = Math.sin(isRad ? val : toRadians(val));
          break;
        case 'cos':
          result = Math.cos(isRad ? val : toRadians(val));
          break;
        case 'tan':
          result = Math.tan(isRad ? val : toRadians(val));
          break;
        case 'asin':
          result = isRad ? Math.asin(val) : toDegrees(Math.asin(val));
          break;
        case 'acos':
          result = isRad ? Math.acos(val) : toDegrees(Math.acos(val));
          break;
        case 'atan':
          result = isRad ? Math.atan(val) : toDegrees(Math.atan(val));
          break;
        case 'ln':
          result = Math.log(val);
          break;
        case 'log10':
          result = Math.log10(val);
          break;
        case 'sqrt':
          result = Math.sqrt(val);
          break;
        case 'cbrt':
          result = Math.cbrt(val);
          break;
        case 'square':
          result = val * val;
          break;
        case 'cube':
          result = val * val * val;
          break;
        case 'inv':
          result = 1 / val;
          break;
        case 'exp':
          result = Math.exp(val);
          break;
        case 'fact':
          let f = 1;
          for (let i = 2; i <= Math.min(val, 20); i++) f *= i;
          result = f;
          break;
        case 'pi':
          result = Math.PI;
          break;
        case 'e':
          result = Math.E;
          break;
        case 'neg':
          result = -val;
          break;
      }

      setDisplay(String(parseFloat(result.toFixed(8))));
      setNewNumber(true);
    } catch {
      setDisplay('Error');
      setNewNumber(true);
    }
  };

  // Memory ops
  const handleMemory = (action: string) => {
    const val = parseFloat(display);
    if (action === 'MC') setMemory(0);
    else if (action === 'MR') {
      setDisplay(String(memory));
      setNewNumber(true);
    } else if (action === 'MS') {
      setMemory(val);
      setNewNumber(true);
    } else if (action === 'M+') {
      setMemory(prev => prev + val);
      setNewNumber(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between bg-slate-950 px-4 py-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 font-mono">
              GATE Official Scientific Calculator
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Display */}
        <div className="p-4 bg-slate-950/80 border-b border-slate-800">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <span className="font-mono">
              Angle Mode: <strong className={isRad ? 'text-amber-400' : 'text-sky-400'}>{isRad ? 'RAD' : 'DEG'}</strong>
            </span>
            {memory !== 0 && <span className="text-emerald-400 font-mono font-bold">M: {memory}</span>}
          </div>
          <div className="text-right text-3xl font-mono font-bold text-white tracking-wider overflow-x-auto whitespace-nowrap p-2 bg-slate-900 rounded border border-slate-800 tabular-nums">
            {display}
          </div>
        </div>

        {/* Buttons Grid */}
        <div className="p-4 space-y-2 text-xs font-mono">
          {/* Deg/Rad & Memory row */}
          <div className="grid grid-cols-6 gap-1.5">
            <button
              onClick={() => setIsRad(!isRad)}
              className={`p-2 rounded font-semibold transition-colors ${
                isRad ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {isRad ? 'RAD' : 'DEG'}
            </button>
            <button onClick={() => handleMemory('MC')} className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded">MC</button>
            <button onClick={() => handleMemory('MR')} className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded">MR</button>
            <button onClick={() => handleMemory('MS')} className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded">MS</button>
            <button onClick={() => handleMemory('M+')} className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded">M+</button>
            <button onClick={handleBackspace} className="p-2 bg-rose-950/40 text-rose-300 border border-rose-900/50 hover:bg-rose-900/50 rounded flex items-center justify-center">
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Scientific Functions */}
          <div className="grid grid-cols-5 gap-1.5 text-slate-300">
            <button onClick={() => handleSciOp('sin')} className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded">sin</button>
            <button onClick={() => handleSciOp('cos')} className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded">cos</button>
            <button onClick={() => handleSciOp('tan')} className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded">tan</button>
            <button onClick={() => handleSciOp('ln')} className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded">ln</button>
            <button onClick={() => handleSciOp('log10')} className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded">log10</button>

            <button onClick={() => handleSciOp('asin')} className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded">asin</button>
            <button onClick={() => handleSciOp('acos')} className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded">acos</button>
            <button onClick={() => handleSciOp('atan')} className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded">atan</button>
            <button onClick={() => handleSciOp('sqrt')} className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded">√x</button>
            <button onClick={() => handleSciOp('square')} className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded">x²</button>

            <button onClick={() => handleSciOp('exp')} className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded">eˣ</button>
            <button onClick={() => handleSciOp('pi')} className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded">π</button>
            <button onClick={() => handleSciOp('e')} className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded">e</button>
            <button onClick={() => handleSciOp('inv')} className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded">1/x</button>
            <button onClick={() => handleSciOp('fact')} className="p-2 bg-slate-800/80 hover:bg-slate-700 rounded">n!</button>
          </div>

          {/* Keypad & Digits */}
          <div className="grid grid-cols-4 gap-1.5 pt-2 border-t border-slate-800 text-sm">
            <button onClick={handleClear} className="p-2.5 bg-rose-600/20 text-rose-300 border border-rose-500/30 rounded font-bold">C</button>
            <button onClick={() => handleSciOp('neg')} className="p-2.5 bg-slate-800 text-slate-200 rounded font-semibold">±</button>
            <button onClick={() => handleDigit('/')} className="p-2.5 bg-slate-800 text-amber-400 rounded font-bold">÷</button>
            <button onClick={() => handleDigit('*')} className="p-2.5 bg-slate-800 text-amber-400 rounded font-bold">×</button>

            <button onClick={() => handleDigit('7')} className="p-2.5 bg-slate-950 text-white rounded font-bold border border-slate-800">7</button>
            <button onClick={() => handleDigit('8')} className="p-2.5 bg-slate-950 text-white rounded font-bold border border-slate-800">8</button>
            <button onClick={() => handleDigit('9')} className="p-2.5 bg-slate-950 text-white rounded font-bold border border-slate-800">9</button>
            <button onClick={() => handleDigit('-')} className="p-2.5 bg-slate-800 text-amber-400 rounded font-bold">−</button>

            <button onClick={() => handleDigit('4')} className="p-2.5 bg-slate-950 text-white rounded font-bold border border-slate-800">4</button>
            <button onClick={() => handleDigit('5')} className="p-2.5 bg-slate-950 text-white rounded font-bold border border-slate-800">5</button>
            <button onClick={() => handleDigit('6')} className="p-2.5 bg-slate-950 text-white rounded font-bold border border-slate-800">6</button>
            <button onClick={() => handleDigit('+')} className="p-2.5 bg-slate-800 text-amber-400 rounded font-bold">+</button>

            <button onClick={() => handleDigit('1')} className="p-2.5 bg-slate-950 text-white rounded font-bold border border-slate-800">1</button>
            <button onClick={() => handleDigit('2')} className="p-2.5 bg-slate-950 text-white rounded font-bold border border-slate-800">2</button>
            <button onClick={() => handleDigit('3')} className="p-2.5 bg-slate-950 text-white rounded font-bold border border-slate-800">3</button>
            <button
              onClick={() => {
                try {
                  // Evaluate expression safely using recursive descent parser
                  const clean = display.replace(/×/g, '*').replace(/÷/g, '/');
                  const evaluated = safeEvaluate(clean);
                  setDisplay(String(parseFloat(evaluated.toFixed(8))));
                  setNewNumber(true);
                } catch {
                  setDisplay('Error');
                  setNewNumber(true);
                }
              }}
              className="row-span-2 p-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded font-bold flex items-center justify-center text-lg shadow-sm"
            >
              =
            </button>

            <button onClick={() => handleDigit('0')} className="col-span-2 p-2.5 bg-slate-950 text-white rounded font-bold border border-slate-800">0</button>
            <button onClick={handleDecimal} className="p-2.5 bg-slate-950 text-white rounded font-bold border border-slate-800">.</button>
          </div>
        </div>
      </div>
    </div>
  );
};
