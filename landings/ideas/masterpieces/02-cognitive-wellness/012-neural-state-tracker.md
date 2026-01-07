# Neural State Tracker

**ID:** M012
**Category:** Cognitive Wellness
**Tier:** Pro ($39.99)
**APIs:** Camera (PPG), Accelerometer, Microphone, HealthKit, Core ML
**Offline:** Full

---

## One-Liner

A comprehensive cognitive state monitoring system that uses phone sensors to measure heart rate variability, voice stress patterns, and micro-movement analysis to provide real-time awareness of your mental state and intervention suggestions.

## Problem

We're often unaware of our mental state—building stress goes unnoticed until breakdown, focus degrades without recognition, emotional dysregulation catches us off-guard. Traditional mood tracking is retrospective and subjective. Wearables provide physiological data without psychological interpretation.

## Solution

A multi-modal sensing system that passively monitors physiological signals throughout the day and uses machine learning to classify cognitive/emotional states (focused, anxious, fatigued, flow, stressed). Provides real-time awareness and evidence-based micro-intervention suggestions tailored to your detected state.

## Target User

- Knowledge workers optimizing productivity and wellbeing
- Executives managing high-stress roles
- People with anxiety wanting early warning signals
- Athletes tracking mental readiness
- Meditators deepening awareness practice
- Therapists tracking client patterns between sessions
- Parents monitoring stress in demanding phases
- Remote workers struggling with work-life boundaries

## Key Features

- **HRV Monitoring**: Camera-based photoplethysmography for heart rate variability throughout the day
- **Voice Stress Analysis**: Detects stress biomarkers in voice during calls and recordings
- **Movement Pattern Analysis**: Micro-movement signatures correlate with cognitive states
- **State Classification**: ML model identifies focus, stress, fatigue, flow, calm states
- **Trend Visualization**: Daily, weekly, monthly patterns in cognitive states
- **Intervention Library**: Evidence-based techniques matched to current state
- **Smart Notifications**: Alert when stress accumulates before you notice
- **Recovery Tracking**: Monitor bounce-back after stressful events
- **Integration**: HealthKit, calendar, location correlation
- **Privacy Modes**: Control when and how much monitoring occurs
- **Export for Therapy**: Share patterns with mental health professionals
- **Baseline Calibration**: Learn YOUR normal for personalized detection

## Monetization

**Model:** Freemium with Pro features
**Price:** Free (basic tracking, daily summary) → $39.99/year (real-time, interventions, history)
**Strategy:**
- Corporate wellness program integration
- Mental health influencer partnerships
- Psychology researcher collaborations
- Integration with therapy apps
- Productivity content creator partnerships

## Visualization Concept

```
┌─────────────────────────────────────────────────────────────────┐
│  🧠 Neural State       Today: Tue         ⚙️ Privacy: Work     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  CURRENT STATE:  🎯 DEEP FOCUS                                  │
│                  ──────────────────────────────                  │
│                  HRV: 58ms (elevated coherence)                 │
│                  Voice: N/A (no recent audio)                   │
│                  Movement: Minimal, rhythmic typing              │
│                  Duration: 47 minutes                            │
│                                                                  │
│  💡 Tip: You're in flow. Protect this state—decline            │
│     interruptions if possible.                                   │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  TODAY'S STATE TIMELINE                                         │
│                                                                  │
│  6AM     9AM      12PM      3PM       6PM      9PM              │
│   │       │         │        │         │        │               │
│   ░░░░▓▓▓▓▓▓████████▓▓▓░░░░████████░░░░░░░░░░░│               │
│   │   │    │        │      │                    │               │
│  wake │  focus    lunch   meeting             current           │
│      commute     (stress)  (recovery)                           │
│                                                                  │
│  Legend: ░ Calm │ ▓ Alert │ █ Focus │ ▒ Stress │ ░ Fatigue     │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  INSIGHTS                                                        │
│  ─────────────────────────────────────────                       │
│  📈 Pattern: Your best focus follows morning exercise           │
│  ⚠️ Alert: Stress accumulated pre-lunch—consider breaks        │
│  ✓ Recovery: Good bounce-back from 3PM meeting                  │
│                                                                  │
│  SUGGESTED INTERVENTION:                                         │
│  In ~15 min, HRV patterns suggest focus may decline.            │
│  → [Take 2-min break] [Box breathing] [Dismiss]                 │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  [📊 History]  [🧘 Intervene]  [📈 Trends]  [🔬 Details]        │
└─────────────────────────────────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Camera (AVFoundation): PPG heart rate via finger or face
- Core Motion: Micro-movement analysis
- Speech Framework: Voice feature extraction
- Core ML: State classification model
- HealthKit: Data integration and storage
- BackgroundTasks: Periodic passive monitoring

**Offline Strategy:**
All sensing and ML inference runs on-device. State history stored locally in encrypted database. Intervention library cached locally. No cloud dependency.

**Data Handling:**
- Physiological data: Never raw—only derived metrics stored
- Audio: Processed for features, never recorded
- State classifications: Encrypted local storage
- Sharing: User-initiated export only
- Complete deletion on request

## Competition & Differentiation

**Existing Solutions:**
- Apple Watch HRV (hardware required, no psychological interpretation)
- Mood tracking apps (subjective, retrospective)
- Meditation apps (intervention only, no monitoring)
- Stress apps (single metric, not multimodal)

**Our Edge:**
- Multi-modal sensor fusion for robust detection
- Phone-only, no additional hardware
- Real-time awareness, not just logging
- Personalized interventions based on detected state
- Privacy-first architecture
- Longitudinal pattern recognition

## Development Estimate

**Complexity:** Very High
**Timeline:** 18-24 weeks
**Key Challenges:**
- Camera-based PPG accuracy and reliability
- State classification model training and validation
- Balancing monitoring frequency vs battery
- Avoiding notification fatigue
- Handling individual variation in physiological baselines
- Clinical validation of state detection

---

## Council Assessment

**🏗️ ARCHITECT:** "Multi-modal sensor fusion is technically feasible. Camera PPG is established. Voice stress analysis is more experimental but documented. The ML model for state classification needs careful training data curation."

**🔮 ORACLE:** "Mental health tech is a massive growth area. Preventive/awareness tools complement therapy. Corporate wellness budgets are expanding. The quantified self movement creates ready adopters."

**⚖️ CRITIC:** "Psychological state classification is complex and individual. Risk of overconfident predictions affecting user behavior. Need extensive validation and clear uncertainty communication."

**🎨 CREATOR:** "The real-time state awareness concept is compelling. The timeline visualization makes invisible patterns visible. The predictive intervention suggestion is the key differentiator."

**🛡️ GUARDIAN:** "Mental health data is extremely sensitive. Robust privacy architecture is essential. Consider implications of detecting states user may not want to know. Include mental health disclaimers."

**Verdict:** GO — Large market, clear need, technically feasible with careful execution
