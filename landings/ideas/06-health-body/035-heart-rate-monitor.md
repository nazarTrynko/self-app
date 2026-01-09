# Pulse Check

**ID:** 035
**Category:** Health & Body
**Tier:** Premium ($12)
**APIs:** Camera, Web Audio API, File System
**Offline:** Full

---

## One-Liner

Measure heart rate and HRV using just your phone's camera and flashlight—with trend tracking and health insights.

## Problem

Dedicated heart rate monitors and smartwatches are expensive. People want to track their resting heart rate and HRV for health insights without buying additional hardware.

## Solution

Use photoplethysmography (PPG) via the phone's camera and flash to measure heart rate, heart rate variability, and stress levels—with historical tracking and health insights, all offline.

## Target User

- Health-conscious individuals without wearables
- Athletes tracking recovery via HRV
- People monitoring stress levels
- Those with heart conditions doing daily checks
- Meditation practitioners tracking calm states

## Key Features

- Heart rate measurement via camera
- HRV (Heart Rate Variability) analysis
- Stress level estimation
- Historical trend charts
- Morning readiness score
- Measurement reminders
- Export health data
- Apple Health / Google Fit export

## Monetization

**Model:** One-time purchase
**Price:** $11.99
**Strategy:** Fitness communities, meditation groups, biohacking forums, health optimization influencers

## Visualization Concept

```
┌─────────────────────────────────────┐
│  Pulse Check           📊  ⚙️      │
├─────────────────────────────────────┤
│  Place finger over camera + flash   │
│                                     │
│  ┌─────────────────────────────┐    │
│  │      ♥️ MEASURING...         │    │
│  │                             │    │
│  │  ∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿∿    │    │
│  │                             │    │
│  │         72 BPM              │    │
│  └─────────────────────────────┘    │
├─────────────────────────────────────┤
│  RESULTS                            │
│  Heart Rate:  72 BPM (Normal)       │
│  HRV:         48 ms (Good)          │
│  Stress:      Low 😌                │
│                                     │
│  vs Yesterday: HR -3, HRV +5        │
├─────────────────────────────────────┤
│  ▲ 7-Day Trend                      │
│  │    ╭─╮                           │
│  │ ╭──╯ ╰──╮╭─╮                     │
│  │─╯       ╰╯ ╰─                    │
│  └──────────────▶ 68-75 BPM range   │
├─────────────────────────────────────┤
│  [💾 Save] [📊 History] [📤 Export]│
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Camera API: PPG signal capture with flash
- Canvas API: Signal processing visualization
- File System: Measurement history storage

**Offline Strategy:**
All PPG processing local. Signal analysis algorithms embedded. History stored locally.

**Data Handling:**
Video feed analyzed in real-time, never stored. Only numerical results saved. Export to standard health formats.

## Competition & Differentiation

**Existing Solutions:** Instant Heart Rate (ad-heavy), Cardiogram (needs watch), Welltory (subscription)
**Our Edge:** HRV included, no ads, one-time purchase, comprehensive insights, offline operation

## Development Estimate

**Complexity:** Medium
**Timeline:** 5-6 weeks
**Key Challenges:** PPG signal quality across devices, HRV algorithm accuracy, handling motion artifacts







