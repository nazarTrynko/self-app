# DJ BPM & Key

**ID:** 095
**Category:** Niche Pro
**Tier:** Premium ($10)
**APIs:** Audio Analysis, Microphone
**Offline:** Full

---

## One-Liner

Detect BPM and musical key of any song in real-time—essential for DJs mixing tracks on the fly.

## Problem

DJs need to know BPM and key to mix songs smoothly. Analyzing tracks requires desktop software. When playing live, DJs need instant analysis of unknown tracks.

## Solution

Point your phone at any audio source—speakers, headphones, turntables—and get instant BPM and key detection. Build a library of analyzed tracks.

## Target User

- Club and event DJs
- Mobile DJs
- Music producers
- Beatmatching learners

## Key Features

- Real-time BPM detection via microphone
- Musical key detection (Camelot/standard)
- Tap tempo for manual override
- Track library with saved analyses
- Compatible key suggestions for mixing
- Setlist planning with key matching

## Monetization

**Model:** One-time purchase
**Price:** $9.99
**Strategy:** DJ forums, music production communities, DJ equipment retailers

## Visualization Concept

```
┌─────────────────────────────────────┐
│  🎧 DJ BPM & Key          [Listen]  │
├─────────────────────────────────────┤
│                                     │
│         ♫ LISTENING...              │
│                                     │
│         BPM: 128                    │
│         Key: 4A (F minor)           │
│                                     │
│  Compatible Keys:                   │
│  3A • 4A • 5A • 4B                  │
│                                     │
│  [Tap Tempo] [Save Track] [Library] │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- AVAudioEngine: Audio capture
- Accelerate: DSP for BPM detection
- Custom algorithms: Key detection

**Offline Strategy:**
Full offline. All analysis on-device.

**Data Handling:**
Track library stored locally. No audio uploaded.

## Competition & Differentiation

**Existing Solutions:** BPM Counter apps (basic), Rekordbox (desktop)
**Our Edge:** Key detection + BPM, Camelot wheel integration

## Development Estimate

**Complexity:** Medium-High
**Timeline:** 6 weeks
**Key Challenges:** Accurate key detection, noise handling in live environments

