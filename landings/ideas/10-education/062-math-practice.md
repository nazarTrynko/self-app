# Math Trainer

**ID:** 062
**Category:** Education
**Tier:** Micro ($5)
**APIs:** File System, Haptics
**Offline:** Full

---

## One-Liner

Adaptive math practice from arithmetic to calculus—build speed and accuracy with personalized difficulty progression.

## Problem

Math requires practice but generic worksheets don't adapt to skill level. Kids either get frustrated with too-hard problems or bored with too-easy ones. No offline solution provides adaptive practice.

## Solution

An intelligent math practice app that adapts difficulty in real-time, tracks mastery by topic, and provides focused practice on weak areas—making math improvement measurable and engaging.

## Target User

- Students K-12 practicing math
- Adults refreshing math skills
- Parents supplementing school education
- Test prep (SAT, GRE math)
- Anyone wanting to improve mental math

## Key Features

- Adaptive difficulty algorithm
- Topics from basic arithmetic to calculus
- Timed challenges and practice modes
- Mastery tracking by topic
- Detailed error analysis
- Daily practice streaks
- Progress reports for parents
- Competition mode (self vs past)

## Monetization

**Model:** One-time purchase
**Price:** $4.99
**Strategy:** Homeschool communities, parent forums, tutoring supplement, math education blogs

## Visualization Concept

```
┌─────────────────────────────────────┐
│  Math Trainer          📊  🏆  ⚙️  │
├─────────────────────────────────────┤
│  Topic: Multiplication              │
│  Level: 4 (Adaptive)                │
├─────────────────────────────────────┤
│                                     │
│           47 × 8 = ?                │
│                                     │
│        ┌─────────────┐              │
│        │    376      │              │
│        └─────────────┘              │
│                                     │
│  ⏱️ 0:04.2  │  Streak: 7 ✓        │
├─────────────────────────────────────┤
│  SESSION: 23/25 correct (92%)       │
│  ░░░░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓░░ 92%    │
├─────────────────────────────────────┤
│  [Hint] [Skip] [Submit ✓]          │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- File System: Progress and mastery data
- Haptics: Correct/incorrect feedback
- Canvas API: Math rendering

**Offline Strategy:**
All problem generation algorithmic (not pre-made). Progress stored locally.

**Data Handling:**
Student progress stored locally. Optional export for parents/teachers.

## Competition & Differentiation

**Existing Solutions:** Khan Academy (requires internet), IXL (subscription), Kumon (expensive)
**Our Edge:** Adaptive offline, one-time purchase, comprehensive topic coverage, no account needed

## Development Estimate

**Complexity:** Medium
**Timeline:** 5-6 weeks
**Key Challenges:** Adaptive difficulty algorithm, comprehensive problem generation, engaging UX for kids

