# Acoustic Leak Finder (Guided Sweep)

**ID:** 104
**Category:** Audio & Sound
**Tier:** Premium ($10-50)
**APIs:** Microphone, DSP/FFT, Haptics
**Offline:** Full

---

## One-Liner

Find air/water leaks by spectral fingerprint with a guided “sweep mode.”

## Problem

Maintenance techs waste hours hunting small leaks; the sound is there, but it’s hard to localize and document.

## Solution

A guided sweep that highlights leak-like frequency bands, gives hotter/colder feedback, and saves an evidence clip + notes.

## Target User

HVAC techs, plumbers, facility maintenance, DIY homeowners.

## Key Features

- Sweep mode with real-time spectral heatmap
- Leak fingerprints (air vs. water vs. mechanical) presets
- Hotter/colder haptic guidance based on signal strength
- Evidence clips + photo + notes for handoff
- Job history with before/after comparison

## Monetization

**Model:** One-time
**Price:** $19.99
**Strategy:** App Store SEO for “leak detector”; demo mode limited to 2 saved jobs.

## Visualization Concept

```
┌─────────────────────────────────────┐
│                                     │
│     [Sweep] → [Lock Target] → [Save P│
│                                     │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Microphone: high-sample audio input
- Haptics: feedback cues

**Offline Strategy:**
On-device DSP; all jobs stored locally with optional export.

**Data Handling:**
Audio clips stay on device; user-controlled retention policy.

## Competition & Differentiation

**Existing Solutions:** Hardware detectors and generic spectrum analyzers.
**Our Edge:** Task-specific UX + leak presets + guided sweep workflow.

## Development Estimate

**Complexity:** High
**Timeline:** 3 weeks
**Key Challenges:** DSP tuning, device mic differences, false positives
