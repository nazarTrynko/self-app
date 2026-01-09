# Metal Finder

**ID:** 007
**Category:** Sensor Tools
**Tier:** Micro ($4)
**APIs:** Magnetometer, Haptics, Audio
**Offline:** Full

---

## One-Liner

Detect ferrous metals and magnetic fields using your phone's magnetometer for finding studs, pipes, and buried objects.

## Problem

Dedicated metal detectors cost $50-500. Stud finders are another $20-40. People occasionally need to find metal objects (studs in walls, buried pipes, lost keys in grass) but can't justify specialized equipment.

## Solution

Use the phone's built-in magnetometer to detect ferrous metals and magnetic field disturbances, with audio/haptic feedback that intensifies as you get closer to metal objects.

## Target User

- DIY home improvers finding wall studs
- Plumbers locating buried pipes
- People searching for lost metal objects
- Treasure hunting hobbyists
- Electricians tracing conduit

## Key Features

- Real-time magnetic field strength display
- Audio tone that changes pitch near metal
- Haptic feedback intensity scaling
- Calibration for ambient magnetic field
- Peak detection with distance estimation
- Sensitivity adjustment
- Detection history with location marking
- Field strength graph over time

## Monetization

**Model:** One-time purchase
**Price:** $3.99
**Strategy:** DIY and home improvement communities, YouTube tool review channels, hardware store partnerships

## Visualization Concept

```
┌─────────────────────────────────────┐
│  Metal Finder           ⚙️  🔊 ON  │
├─────────────────────────────────────┤
│                                     │
│           FIELD STRENGTH            │
│                                     │
│    ░░░░░░░░░░░░░░░░░░░░░░░░░░░     │
│    ▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░     │
│                                     │
│              48 µT                  │
│         (Baseline: 32 µT)           │
│                                     │
│       ◄──── METAL NEARBY ────►      │
│                                     │
├─────────────────────────────────────┤
│  │ ▲                                │
│  │ │  ╭╮    ╭────╮                  │
│  │ ╰──╯╰────╯    ╰──────            │
│  └──────────────────────▶ Scan path │
├─────────────────────────────────────┤
│  [Calibrate]  [Mark 📍]  [History]  │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Magnetometer API: Continuous magnetic field readings
- Web Audio API: Variable frequency tone generation
- Vibration API: Haptic feedback scaling
- Geolocation API: Optional location tagging for finds

**Offline Strategy:**
Entirely local operation. No calibration data needed from network. History stored in IndexedDB.

**Data Handling:**
Location only used if user enables find marking. All data local.

## Competition & Differentiation

**Existing Solutions:** Free metal detector apps (ad-heavy, basic), dedicated stud finders ($30+)
**Our Edge:** Clean interface, audio + haptic feedback, no ads, includes stud-finding guidance, reasonably priced

## Development Estimate

**Complexity:** Low
**Timeline:** 2-3 weeks
**Key Challenges:** Magnetometer sensitivity varies by device, handling magnetic interference, clear detection feedback UX







