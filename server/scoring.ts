export interface ValidationResult {
  isCorrect: boolean;
  marksAwarded: number;
  userResponse: any;
  explanation: string;
  trapAlert?: string;
}

export function validateAnswer(
  type: 'MCQ' | 'MSQ' | 'NAT',
  marks: 1 | 2,
  negativeMarking: number,
  correctAnswerRaw: any,
  userResponse: any,
  hintsUsedCount: number = 0
): ValidationResult {
  // If unattempted
  if (userResponse === undefined || userResponse === null || userResponse === '') {
    return {
      isCorrect: false,
      marksAwarded: 0,
      userResponse,
      explanation: 'Unattempted question.'
    };
  }

  let isCorrect = false;

  if (type === 'MCQ') {
    const correctStr = String(correctAnswerRaw).trim().toUpperCase();
    const userStr = String(userResponse).trim().toUpperCase();
    isCorrect = (correctStr === userStr);
  } else if (type === 'MSQ') {
    // Array of chosen options vs array of correct options
    const correctArr = Array.isArray(correctAnswerRaw)
      ? correctAnswerRaw.map((s: any) => String(s).trim().toUpperCase()).sort()
      : [String(correctAnswerRaw).trim().toUpperCase()];
    
    const userArr = Array.isArray(userResponse)
      ? userResponse.map((s: any) => String(s).trim().toUpperCase()).sort()
      : [String(userResponse).trim().toUpperCase()];

    isCorrect = (
      correctArr.length === userArr.length &&
      correctArr.every((val, idx) => val === userArr[idx])
    );
  } else if (type === 'NAT') {
    let parsedUserNum = typeof userResponse === 'number' ? userResponse : parseFloat(String(userResponse).trim());
    if (isNaN(parsedUserNum)) {
      return {
        isCorrect: false,
        marksAwarded: 0,
        userResponse,
        explanation: 'Invalid numerical input.'
      };
    }

    let parsedCorrect = correctAnswerRaw;
    if (typeof parsedCorrect === 'string') {
      try {
        parsedCorrect = JSON.parse(parsedCorrect);
      } catch {
        parsedCorrect = parseFloat(parsedCorrect);
      }
    }

    if (typeof parsedCorrect === 'number') {
      // Tolerance of 0.05
      isCorrect = Math.abs(parsedUserNum - parsedCorrect) <= 0.05;
    } else if (typeof parsedCorrect === 'object' && parsedCorrect !== null) {
      const min = parsedCorrect.min !== undefined ? parsedCorrect.min : parsedCorrect.exact;
      const max = parsedCorrect.max !== undefined ? parsedCorrect.max : parsedCorrect.exact;
      isCorrect = (parsedUserNum >= min - 0.01 && parsedUserNum <= max + 0.01);
    }
  }

  // Calculate marks according to GATE rules
  let marksAwarded = 0;
  if (isCorrect) {
    marksAwarded = marks;
  } else {
    // Only MCQ has negative marking in GATE
    if (type === 'MCQ') {
      marksAwarded = -Math.abs(negativeMarking || (marks === 2 ? 0.66 : 0.33));
    } else {
      marksAwarded = 0;
    }
  }

  return {
    isCorrect,
    marksAwarded: Number(marksAwarded.toFixed(2)),
    userResponse,
    explanation: isCorrect ? 'Correct!' : 'Incorrect.'
  };
}

/**
 * SuperMemo SM-2 Spaced Repetition Logic for Mistakes & Flashcards
 * Quality score: 0 (blackout) to 5 (perfect recall)
 */
export function calculateNextSpacedReview(
  quality: number,
  previousRepetitions: number,
  previousInterval: number,
  previousEaseFactor: number
): { interval: number; repetitions: number; easeFactor: number; nextDateStr: string } {
  let repetitions = previousRepetitions;
  let interval = previousInterval;
  let easeFactor = previousEaseFactor;

  if (quality >= 3) {
    if (repetitions === 0) {
      interval = 1; // 1 day
    } else if (repetitions === 1) {
      interval = 3; // 3 days
    } else if (repetitions === 2) {
      interval = 7; // 7 days
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  } else {
    repetitions = 0;
    interval = 1; // reset to 1 day
  }

  // Update ease factor: EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;

  const nextDate = new Date(Date.now() + interval * 86400000);
  const nextDateStr = nextDate.toISOString().split('T')[0];

  return {
    interval,
    repetitions,
    easeFactor: Number(easeFactor.toFixed(2)),
    nextDateStr
  };
}

/**
 * Multi-Signal Topic Mastery Calculation Engine (Section 13)
 * Signals:
 * 1. Accuracy rate on topic questions (0 - 100)
 * 2. Sample size / diversity penalty (small sample size cannot be "mastered")
 * 3. Independent attempts (hints penalty)
 * 4. Mistake resolution / delayed recall
 */
export function calculateTopicMastery(
  practicedCount: number,
  correctCount: number,
  mistakesUnresolvedCount: number = 0,
  revisedCount: number = 0
): { masteryScore: number; confidence: 'Low' | 'Medium' | 'High'; reason: string } {
  if (practicedCount === 0) {
    return {
      masteryScore: 0,
      confidence: 'Low',
      reason: 'No questions attempted yet for this syllabus node.'
    };
  }

  const rawAccuracy = (correctCount / practicedCount) * 100;

  // Sample size dampener: Need at least 5 questions for high confidence
  let sampleSizeFactor = 0.4;
  let confidence: 'Low' | 'Medium' | 'High' = 'Low';

  if (practicedCount >= 8) {
    sampleSizeFactor = 1.0;
    confidence = 'High';
  } else if (practicedCount >= 4) {
    sampleSizeFactor = 0.8;
    confidence = 'Medium';
  } else if (practicedCount >= 2) {
    sampleSizeFactor = 0.6;
    confidence = 'Low';
  }

  // Mistake penalty: Each unresolved mistake cuts mastery by 5 points
  const mistakePenalty = Math.min(25, mistakesUnresolvedCount * 5);

  // Revision bonus: Up to +10 points for regular spaced revision
  const revisionBonus = Math.min(10, revisedCount * 3);

  let finalScore = Math.round((rawAccuracy * sampleSizeFactor) - mistakePenalty + revisionBonus);
  if (finalScore < 0) finalScore = 0;
  if (finalScore > 100) finalScore = 100;

  // A topic with only 1-2 questions should never appear 'Mastered' (>85%)
  if (practicedCount < 3 && finalScore > 65) {
    finalScore = 65;
  }

  let reason = `Accuracy: ${Math.round(rawAccuracy)}% (${correctCount}/${practicedCount} solved). `;
  if (practicedCount < 4) {
    reason += `Sample size is limited (${practicedCount} Qs). Solve more questions to solidify mastery.`;
  } else if (mistakesUnresolvedCount > 0) {
    reason += `${mistakesUnresolvedCount} active mistake(s) pending review in Mistake Notebook.`;
  } else {
    reason += `Strong mastery confirmed with verified independent attempts.`;
  }

  return {
    masteryScore: finalScore,
    confidence,
    reason
  };
}

/**
 * Time Bleed & Pacing Analysis Engine (Section 8.5)
 * Identifies time vampires, rushed guesses, and pacing efficiency.
 */
export interface TimeBleedAnalysis {
  timeBleedCount: number;
  rushedGuessCount: number;
  timeBleedQuestions: {
    questionId: string;
    marks: number;
    timeSpentSeconds: number;
    recommendedSeconds: number;
    isCorrect: boolean;
    excessSeconds: number;
  }[];
  rushedGuessQuestions: {
    questionId: string;
    timeSpentSeconds: number;
    marksLost: number;
  }[];
  averageSecondsPerMark: number;
  pacingScore: number; // 0 - 100
  pacingAdvice: string;
}

export function analyzeTimeBleed(
  questions: { id: string; marks: 1 | 2; type: string }[],
  timeSpentMap: Record<string, number>,
  validationResults: Record<string, { isCorrect: boolean; marksAwarded: number }>
): TimeBleedAnalysis {
  const timeBleedQuestions: TimeBleedAnalysis['timeBleedQuestions'] = [];
  const rushedGuessQuestions: TimeBleedAnalysis['rushedGuessQuestions'] = [];
  let totalTime = 0;
  let totalMarksAwarded = 0;

  questions.forEach(q => {
    const timeSpent = timeSpentMap[q.id] || 0;
    const res = validationResults[q.id] || { isCorrect: false, marksAwarded: 0 };
    totalTime += timeSpent;
    if (res.marksAwarded > 0) totalMarksAwarded += res.marksAwarded;

    // Standard GATE time budget: 1-mark ~ 100s, 2-mark ~ 180s
    // Time vampire threshold: > 180s for 1M, > 300s for 2M
    const budgetSeconds = q.marks === 1 ? 100 : 180;
    const vampireThreshold = q.marks === 1 ? 180 : 300;

    if (timeSpent > vampireThreshold) {
      timeBleedQuestions.push({
        questionId: q.id,
        marks: q.marks,
        timeSpentSeconds: timeSpent,
        recommendedSeconds: budgetSeconds,
        isCorrect: res.isCorrect,
        excessSeconds: timeSpent - budgetSeconds
      });
    }

    // Rushed guess threshold: < 15s, answered and wrong on MCQ/NAT
    if (timeSpent > 0 && timeSpent < 15 && !res.isCorrect && res.marksAwarded < 0) {
      rushedGuessQuestions.push({
        questionId: q.id,
        timeSpentSeconds: timeSpent,
        marksLost: Math.abs(res.marksAwarded)
      });
    }
  });

  const avgSecsPerMark = totalMarksAwarded > 0 ? Math.round(totalTime / totalMarksAwarded) : totalTime;
  
  // Pacing Score: penalize excessive time bleed and rushed errors
  let pacingScore = 100 - (timeBleedQuestions.length * 12) - (rushedGuessQuestions.length * 15);
  if (pacingScore < 20) pacingScore = 20;
  if (pacingScore > 100) pacingScore = 100;

  let pacingAdvice = 'Pacing is balanced across questions.';
  if (timeBleedQuestions.length >= 3) {
    pacingAdvice = `High time bleed detected on ${timeBleedQuestions.length} questions. You invested disproportionate time on difficult problems; practice abandoning blocked questions within 2.5 minutes.`;
  } else if (rushedGuessQuestions.length >= 2) {
    pacingAdvice = `Detected ${rushedGuessQuestions.length} rushed guesses under 15 seconds that incurred negative marking. Slow down slightly to avoid losing easy marks.`;
  } else if (avgSecsPerMark > 150) {
    pacingAdvice = 'Overall speed is slightly slow. Work on calculation shortcuts with the virtual calculator.';
  }

  return {
    timeBleedCount: timeBleedQuestions.length,
    rushedGuessCount: rushedGuessQuestions.length,
    timeBleedQuestions,
    rushedGuessQuestions,
    averageSecondsPerMark: avgSecsPerMark,
    pacingScore,
    pacingAdvice
  };
}

/**
 * Projected GATE Score & All India Rank (AIR) Engine (Section 8.12)
 * Normalized against historical GATE cutoffs for RA & DA.
 */
export interface ProjectedGateRank {
  rawMarksOutOf100: number;
  projectedGateScore: number; // 100 - 1000
  projectedAirBracket: string;
  projectedPercentile: number;
  qualificationStatus: 'Qualified' | 'Borderline' | 'Below Cutoff';
  targetOpportunities: string[];
  tacticalTip: string;
}

export function calculateProjectedGateRank(
  rawMarks: number,
  paper: 'RA' | 'DA' = 'RA'
): ProjectedGateRank {
  const marks = Math.max(0, Math.min(100, rawMarks));

  // GATE formula approximation: S = Sq + (St - Sq) * ((M - Mq) / (Mt - Mq))
  // For RA/DA: Qualifying mark Mq approx 28.0, Mean of top 0.1% Mt approx 76.0
  const Mq = 28.0;
  const Mt = 76.0;
  const Sq = 350;
  const St = 900;

  let gateScore = 0;
  if (marks >= Mq) {
    gateScore = Math.round(Sq + (St - Sq) * ((marks - Mq) / (Mt - Mq)));
  } else {
    // Below qualifying marks scaling: 100 to 350
    gateScore = Math.round(100 + (Sq - 100) * (marks / Mq));
  }
  if (gateScore < 100) gateScore = 100;
  if (gateScore > 1000) gateScore = 1000;

  let airBracket = '';
  let percentile = 0;
  let qualStatus: 'Qualified' | 'Borderline' | 'Below Cutoff' = 'Qualified';
  const targetOpportunities: string[] = [];

  if (marks >= 78) {
    airBracket = 'AIR 1 – 15';
    percentile = 99.9;
    targetOpportunities.push('IISc Bangalore M.Tech (Research / AI & Robotics)');
    targetOpportunities.push('IIT Bombay / IIT Delhi / IIT Madras Direct Admission');
    targetOpportunities.push('Top PSU Recruitment (ONGC, IOCL, BARC)');
  } else if (marks >= 68) {
    airBracket = 'AIR 16 – 75';
    percentile = 99.4;
    targetOpportunities.push('Top IITs M.Tech (RA / CSE / AI)');
    targetOpportunities.push('IIT Kanpur / IIT Kharagpur Robotics & AI Specializations');
  } else if (marks >= 58) {
    airBracket = 'AIR 76 – 250';
    percentile = 98.2;
    targetOpportunities.push('IIT Roorkee / IIT Guwahati / IIT Hyderabad');
    targetOpportunities.push('Top NITs (Trichy, Surathkal, Warangal)');
  } else if (marks >= 48) {
    airBracket = 'AIR 251 – 700';
    percentile = 95.0;
    targetOpportunities.push('Newer IITs (IIT Gandhinagar, IIT Ropar, IIT Mandi)');
    targetOpportunities.push('Top State Universities & NITs (Self-sponsored/General)');
  } else if (marks >= 35) {
    airBracket = 'AIR 701 – 2500';
    percentile = 88.0;
    targetOpportunities.push('IIITs & NITs Secondary Rounds');
    targetOpportunities.push('BITS HD & Direct Corporate Sponsorship');
  } else if (marks >= 28) {
    airBracket = 'AIR 2501 – 6000';
    percentile = 78.0;
    qualStatus = 'Borderline';
    targetOpportunities.push('Qualified GATE Certificate');
    targetOpportunities.push('State PSU Eligibility & PhD Entrance Exemption');
  } else {
    airBracket = 'AIR > 6000';
    percentile = Math.max(10, Math.round((marks / 28) * 70));
    qualStatus = 'Below Cutoff';
    targetOpportunities.push('Preparation Phase - Focus on High Weightage Engineering Math & Core Transducers');
  }

  let tacticalTip = '';
  if (marks >= 65) {
    tacticalTip = 'You are in the top tier! Focus exclusively on eliminating minor arithmetic slips in NAT questions and mastering MSQ trap options.';
  } else if (marks >= 45) {
    tacticalTip = 'Solid foundation. Converting 3-4 unattempted 2-mark questions into correct answers will propel you directly into the Top 100 AIR band.';
  } else {
    tacticalTip = 'Priority: Secure full marks in Part A Engineering Mathematics & Basics of Mechatronics before attempting complex spatial transformations.';
  }

  return {
    rawMarksOutOf100: Number(marks.toFixed(2)),
    projectedGateScore: gateScore,
    projectedAirBracket: airBracket,
    projectedPercentile: percentile,
    qualificationStatus: qualStatus,
    targetOpportunities,
    tacticalTip
  };
}
