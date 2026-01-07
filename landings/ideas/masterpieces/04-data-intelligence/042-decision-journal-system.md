# Decision Journal System

**ID:** M042
**Category:** Data Intelligence
**Tier:** Premium ($29.99)
**APIs:** Speech Recognition, NLP, Core ML, Calendar, Notifications
**Offline:** Full

---

## One-Liner

A systematic decision tracking and analysis platform that captures your decisions at the moment of making them, tracks outcomes over time, identifies decision-making biases, and helps you calibrate your judgment through evidence.

## Problem

We make thousands of decisions but never learn from them systematically. We remember outcomes but forget our original reasoning. Hindsight bias makes us think we "knew all along." Without decision journals, we repeat the same mistakes and never calibrate our confidence. Good decision-making is learnable but requires systematic feedback.

## Solution

A decision journaling system that captures your reasoning and confidence at decision time, tracks outcomes, analyzes your decision-making patterns, identifies biases, and provides feedback loops to improve judgment calibration over time.

## Target User

- Executives making high-stakes decisions
- Investors tracking investment theses
- Entrepreneurs evaluating opportunities
- Managers making personnel decisions
- Professionals seeking judgment improvement
- Poker players and probabilistic thinkers
- Anyone wanting to learn from their decisions
- Researchers studying their own judgment

## Key Features

- **Decision Capture**: Voice/text recording of decision, reasoning, confidence
- **Outcome Tracking**: Follow up on decisions with actual results
- **Calibration Analysis**: Are your confidence levels accurate?
- **Bias Detection**: Identify patterns like overconfidence, anchoring, confirmation
- **Reasoning Quality**: Track what reasoning led to good vs bad outcomes
- **Decision Categories**: Group decisions by type for pattern analysis
- **Brier Score Tracking**: Quantified prediction accuracy over time
- **Pre-Mortem Prompts**: "What could go wrong?" before deciding
- **Counterfactual Analysis**: Track paths not taken
- **Decision Templates**: Structured frameworks for common decisions
- **Time-to-Outcome**: Track how long until decisions resolve
- **Historical Review**: See past decisions before making similar ones

## Monetization

**Model:** One-time purchase
**Price:** $29.99
**Strategy:**
- Executive coaching integration
- Investment education partnerships
- MBA program relationships
- Decision science content marketing
- Poker/trading community presence

## Visualization Concept

```
┌─────────────────────────────────────────────────────────────────┐
│  📊 Decision Journal        Calibration         📈 Improvement │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  YOUR DECISION-MAKING CALIBRATION                               │
│  ═══════════════════════════════════════════════════════════    │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ Confidence vs Accuracy (last 100 decisions)               │  │
│  │                                                            │  │
│  │ 100% ─┬───────────────────────────────────────────────┬─  │  │
│  │       │                                        ╱      │   │  │
│  │  80% ─┼──────────────────────────────────────╱●──────┼─  │  │
│  │       │                                    ╱          │   │  │
│  │  60% ─┼────────────────────────────────●╱────────────┼─  │  │
│  │       │                              ╱                │   │  │
│  │  40% ─┼────────────────────────●───╱─────────────────┼─  │  │
│  │       │              Perfect ╱   ●                    │   │  │
│  │  20% ─┼──────────────●─────╱─────────────────────────┼─  │  │
│  │       │            ╱                                  │   │  │
│  │   0% ─┼──●───────╱───────────────────────────────────┼─  │  │
│  │       └──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴─┘   │  │
│  │ Confidence: 0%  20%  40%  60%  80%  100%                  │  │
│  │                                                            │  │
│  │ ● = Your actual accuracy at each confidence level         │  │
│  │ ╱ = Perfect calibration line                              │  │
│  │                                                            │  │
│  │ Verdict: Overconfident at high confidence (80%+ conf →    │  │
│  │ only 68% accurate). Well-calibrated at moderate levels.   │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  📋 RECENT DECISION                                             │
│  ─────────────────────────────────────────                       │
│  Decision: "Hire candidate A over candidate B"                  │
│  Made: Dec 15, 2025 │ Confidence: 75%                          │
│                                                                  │
│  Your reasoning (captured at decision time):                    │
│  "A has more relevant experience and better culture fit.       │
│   B is technically stronger but seemed less motivated.         │
│   I'm 75% confident A is the right choice."                    │
│                                                                  │
│  Status: Pending outcome │ Review scheduled: Mar 15, 2026      │
│  [Record outcome] [Add notes]                                   │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  🔍 BIAS PATTERNS DETECTED                                      │
│  ─────────────────────────────────────────                       │
│  ⚠️ Confirmation bias: When researching decisions, you cite    │
│     supporting evidence 3x more than contradicting evidence.    │
│                                                                  │
│  ⚠️ Overconfidence: Your 90%+ confidence predictions are       │
│     accurate only 72% of the time.                             │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  [📝 New Decision]  [📊 Calibration]  [🔍 Patterns]  [📖 Review]│
└─────────────────────────────────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Speech Framework: Voice capture of decision reasoning
- NaturalLanguage: Reasoning analysis
- Core ML: Bias pattern detection
- Notifications: Outcome follow-up reminders
- Calendar: Decision timeline tracking

**Offline Strategy:**
All decision capture and analysis runs locally. No cloud dependency. Works completely offline.

**Data Handling:**
- Decision records: Encrypted local storage
- Reasoning transcripts: Local only
- Analysis results: Local database
- Never upload decision data
- Full export for personal analysis

## Competition & Differentiation

**Existing Solutions:**
- Generic journaling apps (no structure)
- Note apps (no calibration tracking)
- Betting apps (entertainment, not learning)
- Generic decision frameworks (no tracking)

**Our Edge:**
- Structured decision capture with reasoning
- Calibration tracking (confidence vs accuracy)
- Bias pattern detection
- Long-term outcome tracking
- Decision-specific analysis
- Improvement feedback loops
- Probabilistic thinking support

## Development Estimate

**Complexity:** Medium-High
**Timeline:** 12-16 weeks
**Key Challenges:**
- Outcome tracking workflow (getting users to close loops)
- Calibration calculation with small sample sizes
- Meaningful bias detection
- Decision categorization
- Long outcome timelines (months to resolve)
- Avoiding discouragement from poor calibration

---

## Council Assessment

**🏗️ ARCHITECT:** "The core functionality is straightforward. The challenge is the follow-through—getting users to record outcomes. Push notifications and calendar integration are critical."

**🔮 ORACLE:** "Decision science is having a moment (Kahneman, Tetlock). High performers recognize calibration value. Executive coaching commonly includes decision journaling."

**⚖️ CRITIC:** "Cold start is challenging—need many decisions before calibration is meaningful. Risk of analysis paralysis. Not all decisions warrant this overhead."

**🎨 CREATOR:** "The calibration chart is powerful and humbling. Seeing your overconfidence quantified is impactful. Bias detection provides actionable improvement areas."

**🛡️ GUARDIAN:** "Decision reasoning can be extremely sensitive (firing decisions, investment theses). Strong privacy essential. Consider what happens if device is compromised."

**Verdict:** GO — Clear value for target audience, scientifically grounded, achievable scope
