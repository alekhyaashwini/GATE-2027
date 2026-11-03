# 🚀 GATE QUEST 2027

> **The Ultimate High-Yield Preparation Platform for GATE Robotics & Automation (RA) and Data Science & Artificial Intelligence (DA).**  
> Complete with interactive roadmaps, 930+ verified practice questions, textbook-grade notes, formula cheat sheets, error diagnostic dashboards, and a dedicated 15-mark General Aptitude workspace.

---

## 🌐 Quick Access & Website Links

| Resource | Link | Description |
| :--- | :--- | :--- |
| 🚀 **Live Web App (AI Studio)** | [**ai.studio/apps/3af4aacf-0ec7-4f07-ae58-c126210bff8f**](https://ai.studio/apps/3af4aacf-0ec7-4f07-ae58-c126210bff8f) | Cloud deployment on Google AI Studio |
| 💻 **Local Development Server** | [**http://localhost:3000**](http://localhost:3000) | Local server endpoint when running `npm run dev` |
| 🏛️ **Official GATE 2027 Portal** | [**gate2027.iitm.ac.in**](https://gate2027.iitm.ac.in/) | Official organizing institute (IIT Madras) updates & notifications |

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [General Aptitude (15 Marks)](#-general-aptitude-15-marks-workspace)
- [Exam Architecture & Scoring Rules](#-exam-architecture--scoring-rules)
- [Tech Stack](#-tech-stack)
- [Quick Start Guide](#-quick-start-guide)
- [Project Structure](#-project-structure)
- [Verification & Testing](#-verification--testing)
- [Contributing & License](#-license)

---

## 🌟 Overview

**GATE Quest 2027** is an all-in-one, highly disciplined preparation environment built specifically for:
1. **Robotics & Automation (RA)** — Kinematics, Dynamics, Actuators, Sensors, Control Systems, CIM, and Mechanics.
2. **Data Science & Artificial Intelligence (DA)** — Probability & Statistics, Linear Algebra, Multivariable Calculus & Optimization, DSA, DBMS & SQL, Machine Learning, and AI Search/Logic.
3. **General Aptitude (GA)** — The mandatory 15-mark foundation covering Quantitative, Spatial, Analytical, and Verbal Aptitude.

No fluff. No distracting gimmicks. Just deep mathematical rigor, official TCS iON exam simulation, and actionable diagnostics.

---

## ✨ Key Features

### 1. 🗺️ Guided Syllabus Quest & Marks Roadmaps
- **15 Exhaustive Syllabus Nodes** covering 100% of the official GATE RA and DA syllabi.
- Visual milestone progressions with weightage indicators (**High**, **Medium**, **Foundational**).
- Direct access to interactive 4-step study guides for each node (Mental Model $\to$ Governing Formulas $\to$ GATE Traps $\to$ Diagnostic Check).

### 2. 📚 Textbook-Grade Notes Workspace
- Deep derivations rendered in KaTeX mathematics ($\LaTeX$).
- Worked GATE exam problems with step-by-step solutions.
- Python code implementations for robotic transformations and ML algorithms.
- Common candidate misconceptions and exam pitfall alerts.

### 3. 📑 Printable Formula Cheat Sheets
- 25+ high-yield formulas with full symbol variable glossaries, boundary conditions, and exam shortcuts.
- 1-click **Copy LaTeX** button for easy export.
- Print-optimized CSS layout for offline PDF study sheets.

### 4. 🎯 Practice Arena (930+ Authentic Questions)
- Comprehensive question bank seeded directly in SQLite (`gate_quest_2027.db`).
- Official GATE question archetypes:
  - **MCQ** (Multiple Choice): +1 / +2 marks, $-0.33$ / $-0.66$ negative marking.
  - **MSQ** (Multiple Select): Multi-option credit with zero negative marking.
  - **NAT** (Numerical Answer Type): Free-form decimal entry with tolerance validation ($\pm 0.05$).
- Step-by-step solutions, exam shortcuts, and pitfall alerts.

### 5. ⏱️ Full-Length & Sectional Mock Tests
- Authentic 180-minute / 65-question mock test environment.
- Integrated **Official GATE Virtual Calculator** with trigonometric, logarithmic, and exponential operations conforming to TCS iON specs.
- Real-time time-bleed analytics highlighting questions where pacing stalled.

### 6. 🩺 Mistake Analyzer & Error Diagnostic Doctor
- **3-Circle Radial Visual Dashboard**:
  - Circle 1: Accuracy vs Error Rate.
  - Circle 2: Root-Cause Donut breakdown (*Concept Gap*, *Calculation Slip*, *Formula Recall*, *Option Trap*).
  - Circle 3: Top Priority Bleed Topic severity ring.
- **Focus Matrix**: Direct 1-click CTAs to review specific notes and practice targeted weakness questions.

### 7. 🎬 Curated Video Masterclasses
- Multi-lecture in-modal selector for each topic (Derivations, Visual Intuition, Exam Problem Solving).
- Privacy-enhanced player (`youtube-nocookie.com`) with direct **Watch on YouTube** and **Search on YouTube** 1-click launchers.
- Built-in live lecture scratchpad that persists your derivation notes to browser storage.

---

## 🎯 General Aptitude (15 Marks) Workspace

General Aptitude carries **15% of the total GATE score** across all branches. The platform includes a dedicated, standalone **General Aptitude Preparation** suite with **250 questions**:

```
General Aptitude (15 Marks)
├── 📐 Quantitative Aptitude (80 Qs)
│   ├── Number Systems, Divisibility & Remainders
│   ├── Percentages, Profit, Loss & Discount
│   ├── Ratio, Proportion, Mixtures & Dilution
│   ├── Time & Work, Alternate Days & Pipes
│   ├── Time, Speed, Distance, Trains & Relative Speed
│   └── P&C, Probability, Mensuration & Data Interpretation
├── 🧩 Spatial Aptitude (60 Qs)
│   ├── 2D & 3D Shape Rotations & Handedness (Chirality)
│   ├── Paper Folding, Creasing & Hole Punching Patterns
│   ├── Cube & Dice Net Unfolding (Opposite Face Rules)
│   ├── Orthogonal Projections, Elevations & Hidden Cavities
│   └── Painted Cube Slicing & Polygon Cross-Sections
├── 🧠 Analytical Aptitude (60 Qs)
│   ├── Syllogisms & Deductive Logic (Euler-Venn Method)
│   ├── Number, Letter & Alphanumeric Series Completion
│   ├── Blood Relations & Family Tree Branching
│   ├── Circular & Linear Seating Arrangements
│   └── Direction Sense & Pythagorean Net Displacement
└── 📖 Verbal Aptitude (50 Qs)
    ├── Subject-Verb Agreement (Proximity Rule)
    ├── Contextual Vocabulary (Affect vs Effect, RAVEN rule)
    ├── Conditional Sentences & Subjunctive Mood
    ├── Prepositions, Phrasal Verbs & Collocations
    └── Para-Jumbles & Critical Reading Comprehension
```

### Modes in General Aptitude:
1. **Interactive Practice Arena**: Filter by pillar, type, marks, difficulty, or keyword search.
2. **15-Mark Rapid Sectional Mock**: Official 10-question test (5 $\times$ 1-mark + 5 $\times$ 2-mark) timed to 15 minutes with instant scorecards.
3. **Formula & Shortcut Rulebook**: High-yield KaTeX summary cards for all 4 pillars.
4. **Curated Video Masterclasses**: In-app streaming of top aptitude lectures.

---

## 📐 Exam Architecture & Scoring Rules

| Section | Question Numbers | Marks per Q | Negative Marking (MCQ) | Section Total |
| :--- | :---: | :---: | :---: | :---: |
| **General Aptitude (GA)** | Q1 – Q5 | 1 Mark | $-0.33$ | 5 Marks |
| **General Aptitude (GA)** | Q6 – Q10 | 2 Marks | $-0.66$ | 10 Marks |
| **Subject Core (RA / DA)** | Q11 – Q35 | 1 Mark | $-0.33$ | 25 Marks |
| **Subject Core (RA / DA)** | Q36 – Q65 | 2 Marks | $-0.66$ | 60 Marks |
| **Total** | **65 Questions** | — | — | **100 Marks** |

*Note: MSQ (Multiple Select) and NAT (Numerical Answer Type) questions carry **ZERO** negative marking.*

---

## 💻 Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Lucide React, Motion, Canvas-Confetti
- **Math Rendering**: KaTeX 0.19 ($\LaTeX$ formatting for all equations)
- **Backend / API**: Express 4.21, Node.js (`tsx`)
- **Database**: SQLite (`node:sqlite` DatabaseSync) with Write-Ahead Logging (WAL)
- **Build Tool**: Vite 8.3

---

## 🚀 Quick Start Guide

### Prerequisites
- [Node.js](https://nodejs.org/) (version 20 or higher recommended)
- `npm` (comes with Node.js)

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/gate-quest-2027.git
   cd gate-quest-2027
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the application:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [**http://localhost:3000**](http://localhost:3000).

---

## 📁 Project Structure

```
GATE 2027/
├── src/
│   ├── components/
│   │   ├── aptitude/         # General Aptitude (15M) Workspace (250 Qs, Mock, Formulas)
│   │   ├── common/           # Header, Countdown, Calculator, VideoModal, KaTeXRenderer
│   │   ├── formulas/         # Formula Cheat Sheets View & LaTeX Exporter
│   │   ├── mistakes/         # Mistake Analyzer & Error Diagnostic Doctor Modal
│   │   ├── mock/             # Full 180-Min & Sectional GATE Mock Tests
│   │   ├── notes/            # Structured Notes Workspace & Diagnostic Checkpoints
│   │   ├── practice/         # Practice Arena (Filters, Question Player, Solutions)
│   │   ├── simulations/      # Interactive Physics & Robotic Visualizers
│   │   └── syllabus/         # Syllabus Quest, Guided Roadmaps & Milestones
│   ├── context/              # AppContext (Mastery, Progress, Bookmarks, Test Sessions)
│   ├── data/                 # 930+ Question Bank, Formulas, Notes, Syllabus Data
│   └── types/                # TypeScript Interfaces (Question, SyllabusNode, etc.)
├── server/
│   ├── routes/               # Express REST APIs (questions, syllabus, notes, mistakes, mock)
│   └── db.ts                 # SQLite Database initialization, schemas & WAL configuration
├── gate_quest_2027.db        # SQLite Database (seeded with 933 questions & 15 syllabus nodes)
├── test_backend.ts           # Complete backend verification suite (8 test categories)
├── package.json              # Scripts & dependencies
├── vite.config.ts            # Vite & Tailwind configuration
└── README.md                 # Project documentation
```

---

## 🧪 Verification & Testing

To verify the platform's database, scoring rules, and analytics engines:

```bash
# 1. Run the 8 backend verification test suites
npx tsx test_backend.ts

# 2. Type-check TypeScript codebase
npx tsc --noEmit

# 3. Build production distribution bundle
npm run build
```

---

## 📜 License

This project is created for educational preparation for the **Graduate Aptitude Test in Engineering (GATE 2027)**. Free to use, adapt, and learn from.

Built with academic rigor for future IIT and IISc scholars. 🎓
