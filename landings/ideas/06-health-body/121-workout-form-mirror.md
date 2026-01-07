# Workout Form Mirror (On-Device)

**ID:** 121
**Category:** Health & Body
**Tier:** Premium ($10-50)
**APIs:** Camera, On-device ML, Local DB
**Offline:** Full

---

## One-Liner

Private form checks and consistency scoring—no video uploads.

## Problem

People get injured or stall due to bad form, but don’t want to upload workout videos or pay ongoing coaching fees.

## Solution

Record a set, analyze posture/angles on-device, then output simple cues and a consistency score over time.

## Target User

Gym-goers, home fitness users, physiotherapy rehab routines.

## Key Features

- Set recording + rep segmentation
- Angle tracking + range-of-motion scoring
- Cue cards for common faults
- Progress timeline + “consistency” metric
- Privacy-first storage + easy deletion

## Monetization

**Model:** One-time
**Price:** $29.99
**Strategy:** Sell as privacy-first alternative to cloud fitness apps.

## Visualization Concept

```
┌─────────────────────────────────────┐
│                                     │
│     [Record Set] → [Form Score] → [Cu│
│                                     │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Camera: video capture
- On-device ML: pose estimation

**Offline Strategy:**
All pose analysis on-device; no accounts required.

**Data Handling:**
Local-only videos; optional automatic cleanup after scoring.

## Competition & Differentiation

**Existing Solutions:** Cloud coaching apps and subscription fitness platforms.
**Our Edge:** Offline privacy + clean cues + long-term consistency metric.

## Development Estimate

**Complexity:** High
**Timeline:** 4-6 weeks
**Key Challenges:** Pose estimation reliability, performance, UX for cues
