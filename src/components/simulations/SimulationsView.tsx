import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { KaTeXRenderer } from '../common/KaTeXRenderer';
import { 
  Cpu, 
  RotateCw, 
  Sliders, 
  Play, 
  CheckCircle2, 
  BarChart2, 
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';

export const SimulationsView: React.FC = () => {
  const { activePaper, earnXp } = useApp();

  const [simType, setSimType] = useState<'fk_arm' | 'pid_control' | 'pca_eigen' | 'prob_distribution'>('fk_arm');

  // Set default simulation based on active paper
  useEffect(() => {
    if (activePaper === 'RA') {
      setSimType('fk_arm');
    } else {
      setSimType('pca_eigen');
    }
  }, [activePaper]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
          <Activity className="w-3.5 h-3.5" />
          <span>MODULE 8.8 · INTERACTIVE CONCEPT SANDBOX</span>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Physical & Mathematical Interactive Simulations
        </h1>
        <p className="text-xs text-slate-400 max-w-2xl mt-1">
          Manipulate variables, observe dynamic response curves, and build physical intuition for high-yield GATE numerical problems.
        </p>

        {/* Sim Selector Strip */}
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-800 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setSimType('fk_arm')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              simType === 'fk_arm' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white bg-slate-950'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>[RA] 2-Link Robot Arm Kinematics</span>
          </button>

          <button
            onClick={() => setSimType('pid_control')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              simType === 'pid_control' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white bg-slate-950'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>[RA] PID Step Response Controller</span>
          </button>

          <button
            onClick={() => setSimType('pca_eigen')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              simType === 'pca_eigen' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white bg-slate-950'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>[DA] PCA Eigenvectors & Covariance</span>
          </button>

          <button
            onClick={() => setSimType('prob_distribution')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              simType === 'prob_distribution' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white bg-slate-950'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            <span>[DA] Gaussian & Poisson Sampling</span>
          </button>
        </div>
      </div>

      {/* Render Active Simulation */}
      {simType === 'fk_arm' && <RobotArmKinematicsSim onTaskComplete={() => earnXp(100, 'Solved Inverse Kinematics Task')} />}
      {simType === 'pid_control' && <PidStepResponseSim onTaskComplete={() => earnXp(100, 'Tuned Stable PID Response')} />}
      {simType === 'pca_eigen' && <PcaEigenvectorSim onTaskComplete={() => earnXp(100, 'Aligned Principal Component')} />}
      {simType === 'prob_distribution' && <ProbabilityDistributionSim onTaskComplete={() => earnXp(100, 'Completed Empirical Sampling Experiment')} />}
    </div>
  );
};

// ==========================================
// 1. RA: ROBOT ARM FORWARD KINEMATICS SIM
// ==========================================
function RobotArmKinematicsSim({ onTaskComplete }: { onTaskComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [theta1, setTheta1] = useState<number>(30); // degrees
  const [theta2, setTheta2] = useState<number>(45); // degrees
  const [l1, setL1] = useState<number>(120); // mm/px
  const [l2, setL2] = useState<number>(90); // mm/px
  const [targetHit, setTargetHit] = useState<boolean>(false);

  // Target coordinates for challenge
  const targetX = 140;
  const targetY = 130;

  // Compute FK
  const rad1 = (theta1 * Math.PI) / 180;
  const rad2 = (theta2 * Math.PI) / 180;
  const joint1X = l1 * Math.cos(rad1);
  const joint1Y = l1 * Math.sin(rad1);
  const endX = joint1X + l2 * Math.cos(rad1 + rad2);
  const endY = joint1Y + l2 * Math.sin(rad1 + rad2);

  // Check challenge proximity
  useEffect(() => {
    const dist = Math.hypot(endX - targetX, endY - targetY);
    if (dist < 10 && !targetHit) {
      setTargetHit(true);
      onTaskComplete();
    }
  }, [endX, endY, targetHit]);

  // Draw Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const originX = 60;
    const originY = height - 60;

    // Clear
    ctx.clearRect(0, 0, width, height);

    // Draw coordinate grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(width - 20, originY);
    ctx.moveTo(originX, originY);
    ctx.lineTo(originX, 20);
    ctx.stroke();

    // Target circle
    ctx.fillStyle = targetHit ? '#10b981' : '#f59e0b';
    ctx.beginPath();
    ctx.arc(originX + targetX, originY - targetY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px monospace';
    ctx.fillText(`Target (${targetX}, ${targetY})`, originX + targetX + 12, originY - targetY + 4);

    // Link 1
    const p1x = originX + joint1X;
    const p1y = originY - joint1Y;
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(originX, originY);
    ctx.lineTo(p1x, p1y);
    ctx.stroke();

    // Link 2
    const p2x = originX + endX;
    const p2y = originY - endY;
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(p1x, p1y);
    ctx.lineTo(p2x, p2y);
    ctx.stroke();

    // Joints
    ctx.fillStyle = '#0f172a';
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 2;

    // Base joint
    ctx.beginPath();
    ctx.arc(originX, originY, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Elbow joint
    ctx.beginPath();
    ctx.arc(p1x, p1y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // End-Effector Gripper
    ctx.fillStyle = targetHit ? '#10b981' : '#ec4899';
    ctx.beginPath();
    ctx.arc(p2x, p2y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

  }, [joint1X, joint1Y, endX, endY, targetHit]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Visual Stage (7 cols) */}
      <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="text-xs font-mono font-semibold text-slate-200 uppercase">
            2R Planar Arm Visualizer
          </div>
          <div className="text-xs font-mono text-amber-400">
            End-Effector: ({endX.toFixed(1)}, {endY.toFixed(1)}) mm
          </div>
        </div>

        <div className="bg-slate-950 rounded-xl border border-slate-800 p-2 flex items-center justify-center overflow-hidden">
          <canvas
            ref={canvasRef}
            width={440}
            height={320}
            className="w-full h-auto max-w-[440px] block"
          />
        </div>

        {/* Target Challenge callout */}
        <div className={`p-3 rounded-lg border text-xs font-mono flex items-center justify-between ${
          targetHit 
            ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300' 
            : 'bg-amber-500/10 border-amber-500/20 text-amber-300'
        }`}>
          <span>
            {targetHit ? '✓ Target Position Reached! +100 XP' : `Challenge: Adjust θ1 and θ2 to reach target (${targetX}, ${targetY})`}
          </span>
          <span className="text-[10px] opacity-80">Dist: {Math.hypot(endX - targetX, endY - targetY).toFixed(1)} mm</span>
        </div>
      </div>

      {/* Control Deck (5 cols) */}
      <div className="lg:col-span-5 space-y-5 bg-slate-900 border border-slate-800 rounded-xl p-5">
        <div className="text-xs font-mono font-semibold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
          Joint Parameters & Kinematic Equations
        </div>

        {/* Sliders */}
        <div className="space-y-4 text-xs font-mono">
          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>Joint Angle 1 (θ1):</span>
              <strong className="text-sky-400">{theta1}°</strong>
            </div>
            <input
              type="range"
              min={-90}
              max={120}
              value={theta1}
              onChange={e => setTheta1(Number(e.target.value))}
              className="w-full accent-sky-400"
            />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>Joint Angle 2 (θ2):</span>
              <strong className="text-amber-400">{theta2}°</strong>
            </div>
            <input
              type="range"
              min={-150}
              max={150}
              value={theta2}
              onChange={e => setTheta2(Number(e.target.value))}
              className="w-full accent-amber-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div>
              <span className="text-slate-400 text-[11px]">Link 1 (l1): </span>
              <strong className="text-slate-200">{l1} mm</strong>
            </div>
            <div>
              <span className="text-slate-400 text-[11px]">Link 2 (l2): </span>
              <strong className="text-slate-200">{l2} mm</strong>
            </div>
          </div>
        </div>

        {/* Analytical Math Table */}
        <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2 text-xs">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
            Forward Kinematic Equations
          </div>
          <div className="text-slate-200 font-mono space-y-1 text-[11px]">
            <div><KaTeXRenderer content="$x = l_1 \cos\theta_1 + l_2 \cos(\theta_1 + \theta_2)$" /></div>
            <div><KaTeXRenderer content="$y = l_1 \sin\theta_1 + l_2 \sin(\theta_1 + \theta_2)$" /></div>
            <div className="text-amber-400 pt-1">
              <KaTeXRenderer content={`$\\phi = \\theta_1 + \\theta_2 = ${theta1 + theta2}^\\circ$`} />
            </div>
          </div>
        </div>

        {/* DH Parameter Table */}
        <div className="space-y-1.5">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
            Denavit-Hartenberg (DH) Table
          </div>
          <table className="w-full text-[11px] font-mono text-slate-300 border border-slate-800 rounded">
            <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
              <tr>
                <th className="p-1.5 text-left"><KaTeXRenderer content="Link $i$" /></th>
                <th className="p-1.5 text-left"><KaTeXRenderer content="$a_i$" /></th>
                <th className="p-1.5 text-left"><KaTeXRenderer content="$\alpha_i$" /></th>
                <th className="p-1.5 text-left"><KaTeXRenderer content="$d_i$" /></th>
                <th className="p-1.5 text-left"><KaTeXRenderer content="$\theta_i$" /></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="p-1.5 text-slate-400">1</td>
                <td className="p-1.5">{l1}</td>
                <td className="p-1.5">0°</td>
                <td className="p-1.5">0</td>
                <td className="p-1.5 text-sky-400">{theta1}°</td>
              </tr>
              <tr>
                <td className="p-1.5 text-slate-400">2</td>
                <td className="p-1.5">{l2}</td>
                <td className="p-1.5">0°</td>
                <td className="p-1.5">0</td>
                <td className="p-1.5 text-amber-400">{theta2}°</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 2. RA: PID CONTROLLER STEP RESPONSE SIM
// ==========================================
function PidStepResponseSim({ onTaskComplete }: { onTaskComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [kp, setKp] = useState<number>(3.5);
  const [ki, setKi] = useState<number>(1.2);
  const [kd, setKd] = useState<number>(1.8);
  const [tuned, setTuned] = useState<boolean>(false);

  // Compute metrics: overshoot, rise time, settling time
  const damping = (0.5 * (kp + kd)) / Math.sqrt(Math.max(0.1, kp));
  const overshoot = damping < 1 ? Math.round(Math.exp((-Math.PI * damping) / Math.sqrt(1 - damping * damping)) * 100) : 0;
  const steadyError = Math.max(0, parseFloat((1 / (1 + kp + ki * 10)).toFixed(3)));

  useEffect(() => {
    // Tuning goal: overshoot < 10% and steady error < 0.05
    if (overshoot < 10 && steadyError < 0.05 && kp > 2 && !tuned) {
      setTuned(true);
      onTaskComplete();
    }
  }, [overshoot, steadyError, kp, tuned]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    // Grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    const setpointY = height * 0.45;

    // Desired setpoint line
    ctx.strokeStyle = '#94a3b8';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(40, setpointY);
    ctx.lineTo(width - 20, setpointY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px monospace';
    ctx.fillText('Setpoint r(t) = 1.0', width - 120, setpointY - 6);

    // Response curve y(t) simulation
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2.5;
    ctx.beginPath();

    const originX = 40;
    const originY = height - 40;
    ctx.moveTo(originX, originY);

    const omega = Math.sqrt(Math.max(0.2, kp));
    const zeta = Math.max(0.1, (kp * 0.2 + kd * 0.6) / (2 * omega));

    for (let t = 0; t <= 10; t += 0.05) {
      const screenX = originX + (t / 10) * (width - 70);
      let val = 1;
      if (zeta < 1) {
        const wd = omega * Math.sqrt(1 - zeta * zeta);
        val = 1 - Math.exp(-zeta * omega * t) * (Math.cos(wd * t) + (zeta / Math.sqrt(1 - zeta * zeta)) * Math.sin(wd * t));
      } else {
        val = 1 - Math.exp(-omega * t) * (1 + omega * t);
      }
      // Add steady state bias based on Ki
      val = val * (1 - steadyError * Math.exp(-ki * t * 0.5));

      const screenY = originY - val * (originY - setpointY);
      ctx.lineTo(screenX, screenY);
    }
    ctx.stroke();
  }, [kp, ki, kd, steadyError]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="text-xs font-mono font-semibold text-slate-200 uppercase">
            Closed-Loop Step Response y(t)
          </div>
          <div className="text-xs font-mono text-amber-400">
            Overshoot: {overshoot}% · Ess: {steadyError}
          </div>
        </div>

        <div className="bg-slate-950 rounded-xl border border-slate-800 p-2 flex items-center justify-center">
          <canvas ref={canvasRef} width={440} height={280} className="w-full h-auto max-w-[440px] block" />
        </div>

        <div className={`p-3 rounded-lg border text-xs font-mono flex items-center justify-between ${
          tuned ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300' : 'bg-slate-950 border-slate-800 text-slate-300'
        }`}>
          <span>
            {tuned ? '✓ Optimal PID Tuning Achieved! (Overshoot < 10%, Ess ≈ 0)' : 'Task: Tune Kp, Ki, Kd to achieve Overshoot < 10% and Ess < 0.05'}
          </span>
        </div>
      </div>

      <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
        <div className="text-xs font-mono font-semibold text-white uppercase border-b border-slate-800 pb-2">
          PID Parameter Controls
        </div>

        <div className="space-y-4 text-xs font-mono">
          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>Proportional Gain (Kp):</span>
              <strong className="text-sky-400">{kp}</strong>
            </div>
            <input type="range" min={0.5} max={10} step={0.1} value={kp} onChange={e => setKp(Number(e.target.value))} className="w-full accent-sky-400" />
            <span className="text-[10px] text-slate-500">Decreases rise time, increases overshoot.</span>
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>Integral Gain (Ki):</span>
              <strong className="text-amber-400">{ki}</strong>
            </div>
            <input type="range" min={0} max={5} step={0.1} value={ki} onChange={e => setKi(Number(e.target.value))} className="w-full accent-amber-400" />
            <span className="text-[10px] text-slate-500">Eliminates steady-state error, worsens stability.</span>
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>Derivative Gain (Kd):</span>
              <strong className="text-emerald-400">{kd}</strong>
            </div>
            <input type="range" min={0} max={5} step={0.1} value={kd} onChange={e => setKd(Number(e.target.value))} className="w-full accent-emerald-400" />
            <span className="text-[10px] text-slate-500">Adds damping, suppresses overshoot.</span>
          </div>
        </div>

        <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs font-mono space-y-1 text-slate-300">
          <div className="text-[10px] text-slate-400 uppercase font-bold">Transfer Function:</div>
          <div>
            <KaTeXRenderer content={`$G_c(s) = ${kp} + \\frac{${ki}}{s} + ${kd}s$`} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. DA: PCA EIGENVECTOR SIMULATION
// ==========================================
function PcaEigenvectorSim({ onTaskComplete }: { onTaskComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [covariance, setCovariance] = useState<number>(0.8);
  const [varianceX, setVarianceX] = useState<number>(1.5);
  const [varianceY, setVarianceY] = useState<number>(1.0);

  // Compute 2x2 eigenvalues
  // Tr = VarX + VarY, Det = VarX * VarY - Cov^2
  const trace = varianceX + varianceY;
  const det = varianceX * varianceY - covariance * covariance;
  const disc = Math.sqrt(Math.max(0, trace * trace - 4 * det));
  const lambda1 = (trace + disc) / 2;
  const lambda2 = (trace - disc) / 2;

  // Eigenvector angle
  const angle = 0.5 * Math.atan2(2 * covariance, varianceX - varianceY);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;

    // Grid
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(width, cy);
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, height);
    ctx.stroke();

    // Generate scatter points based on covariance
    ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
    const count = 80;
    for (let i = 0; i < count; i++) {
      const u1 = (Math.sin(i * 12.3) + Math.cos(i * 4.7)) * Math.sqrt(varianceX);
      const u2 = (Math.cos(i * 9.1) + Math.sin(i * 3.2)) * Math.sqrt(varianceY);
      const x = u1;
      const y = covariance * u1 * 0.5 + u2 * 0.7;

      ctx.beginPath();
      ctx.arc(cx + x * 35, cy - y * 35, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Principal Component 1 (Eigenvector 1)
    const len1 = Math.sqrt(lambda1) * 60;
    const v1x = Math.cos(angle) * len1;
    const v1y = Math.sin(angle) * len1;

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx - v1x, cy + v1y);
    ctx.lineTo(cx + v1x, cy - v1y);
    ctx.stroke();

    // Principal Component 2 (Eigenvector 2)
    const len2 = Math.sqrt(lambda2) * 60;
    const v2x = -Math.sin(angle) * len2;
    const v2y = Math.cos(angle) * len2;

    ctx.strokeStyle = '#ec4899';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(cx - v2x, cy + v2y);
    ctx.lineTo(cx + v2x, cy - v2y);
    ctx.stroke();

  }, [covariance, varianceX, varianceY, lambda1, lambda2, angle]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="text-xs font-mono font-semibold text-slate-200 uppercase">
            PCA Scatter & Principal Axis Decomposition
          </div>
          <div className="text-xs font-mono text-amber-400">
            λ1: {lambda1.toFixed(2)} · λ2: {lambda2.toFixed(2)}
          </div>
        </div>

        <div className="bg-slate-950 rounded-xl border border-slate-800 p-2 flex items-center justify-center">
          <canvas ref={canvasRef} width={440} height={280} className="w-full h-auto max-w-[440px] block" />
        </div>

        <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs font-mono flex items-center justify-between text-slate-300">
          <span className="text-amber-400 font-bold">First Principal Vector (λ1): Explains {((lambda1 / (lambda1 + lambda2)) * 100).toFixed(1)}% variance</span>
          <span className="text-pink-400 font-bold">Second (λ2): {((lambda2 / (lambda1 + lambda2)) * 100).toFixed(1)}%</span>
        </div>
      </div>

      <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
        <div className="text-xs font-mono font-semibold text-white uppercase border-b border-slate-800 pb-2">
          Covariance Matrix Configuration
        </div>

        <div className="space-y-4 text-xs font-mono">
          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>Covariance σxy (Correlation):</span>
              <strong className="text-amber-400">{covariance}</strong>
            </div>
            <input type="range" min={-1.4} max={1.4} step={0.1} value={covariance} onChange={e => setCovariance(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>Variance X (σx²):</span>
              <strong className="text-sky-400">{varianceX}</strong>
            </div>
            <input type="range" min={0.5} max={3.0} step={0.1} value={varianceX} onChange={e => setVarianceX(Number(e.target.value))} className="w-full accent-sky-400" />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>Variance Y (σy²):</span>
              <strong className="text-emerald-400">{varianceY}</strong>
            </div>
            <input type="range" min={0.5} max={3.0} step={0.1} value={varianceY} onChange={e => setVarianceY(Number(e.target.value))} className="w-full accent-emerald-400" />
          </div>
        </div>

        <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs font-mono space-y-2 text-slate-300">
          <div className="text-[10px] text-slate-400 uppercase font-bold">Covariance Matrix:</div>
          <div>
            <KaTeXRenderer content={`$\\Sigma = \\begin{bmatrix} ${varianceX} & ${covariance} \\\\ ${covariance} & ${varianceY} \\end{bmatrix}$`} />
          </div>
          <div className="text-[11px] text-slate-400 pt-1">
            <KaTeXRenderer content="Characteristic Equation: $\det(\Sigma - \lambda I) = 0$" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. DA: PROBABILITY DISTRIBUTION SIM
// ==========================================
function ProbabilityDistributionSim({ onTaskComplete }: { onTaskComplete: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mean, setMean] = useState<number>(0);
  const [std, setStd] = useState<number>(1.2);
  const [samplesCount, setSamplesCount] = useState<number>(150);

  const handleDrawSamples = () => {
    setSamplesCount(prev => prev + 50);
    onTaskComplete();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    const originX = width / 2;
    const originY = height - 40;

    // Axis
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(30, originY);
    ctx.lineTo(width - 30, originY);
    ctx.stroke();

    // Gaussian bell curve: f(x) = 1/(std * sqrt(2pi)) * exp(-0.5 * ((x-mean)/std)^2)
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.beginPath();

    const scaleX = 40;
    const scaleY = 320;

    for (let x = -5; x <= 5; x += 0.05) {
      const px = originX + x * scaleX;
      const exponent = -0.5 * Math.pow((x - mean) / std, 2);
      const pdf = (1 / (std * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
      const py = originY - pdf * scaleY;

      if (x === -5) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Draw empirical sample pins
    ctx.fillStyle = 'rgba(245, 158, 11, 0.6)';
    for (let i = 0; i < samplesCount; i++) {
      // Box-muller transform
      const u1 = Math.random();
      const u2 = Math.random();
      const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
      const sample = mean + z0 * std;

      if (sample >= -5 && sample <= 5) {
        const sx = originX + sample * scaleX;
        ctx.beginPath();
        ctx.arc(sx, originY - 4 - (i % 6) * 5, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }, [mean, std, samplesCount]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="text-xs font-mono font-semibold text-slate-200 uppercase">
            Gaussian Normal PDF & Random Variable Sampling
          </div>
          <div className="text-xs font-mono text-amber-400">
            N({mean}, {std}²) · {samplesCount} Samples
          </div>
        </div>

        <div className="bg-slate-950 rounded-xl border border-slate-800 p-2 flex items-center justify-center">
          <canvas ref={canvasRef} width={440} height={260} className="w-full h-auto max-w-[440px] block" />
        </div>

        <div className="flex items-center justify-between text-xs font-mono text-slate-300">
          <span>68-95-99.7 Rule: 95% of data lies within $[\mu - 2\sigma, \mu + 2\sigma]$</span>
          <button
            onClick={handleDrawSamples}
            className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded text-xs transition-colors"
          >
            +50 Samples
          </button>
        </div>
      </div>

      <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
        <div className="text-xs font-mono font-semibold text-white uppercase border-b border-slate-800 pb-2">
          Distribution Parameters
        </div>

        <div className="space-y-4 text-xs font-mono">
          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>Mean (μ):</span>
              <strong className="text-sky-400">{mean}</strong>
            </div>
            <input type="range" min={-2.5} max={2.5} step={0.1} value={mean} onChange={e => setMean(Number(e.target.value))} className="w-full accent-sky-400" />
          </div>

          <div>
            <div className="flex justify-between text-slate-300 mb-1">
              <span>Standard Deviation (σ):</span>
              <strong className="text-amber-400">{std}</strong>
            </div>
            <input type="range" min={0.4} max={2.5} step={0.1} value={std} onChange={e => setStd(Number(e.target.value))} className="w-full accent-amber-400" />
          </div>
        </div>

        <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs font-mono space-y-2 text-slate-300">
          <div className="text-[10px] text-slate-400 uppercase font-bold">Gaussian Probability Density Function:</div>
          <div>
            <KaTeXRenderer content="$f(x) = \frac{1}{\sigma \sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x - \mu}{\sigma}\right)^2}$" />
          </div>
        </div>
      </div>
    </div>
  );
}
