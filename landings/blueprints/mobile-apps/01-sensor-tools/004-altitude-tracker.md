# Altitude Tracker

**ID:** 004
**Category:** Sensor Tools
**Tier:** Premium ($12)
**APIs:** Barometer, GPS, Accelerometer, File System
**Offline:** Full

---

## One-Liner

Barometric altimeter with GPS calibration, elevation profiling, and ascent/descent tracking for mountaineers and pilots.

## Problem

GPS altitude is notoriously inaccurate (±10-30m). Dedicated altimeters cost $100+. Hikers, pilots, and mountaineers need reliable elevation data for safety, training, and documentation but lack affordable precision tools.

## Solution

A dual-source altimeter combining barometric pressure (±1m accuracy) with GPS calibration, providing real-time elevation, rate of climb/descent, and detailed trip profiles—all working offline in remote areas.

## Target User

- Mountain climbers and peak baggers
- Paraglider and hang glider pilots
- Backcountry skiers tracking vertical
- Trail runners measuring elevation gain
- Aviation enthusiasts

## Key Features

- Barometric altitude with automatic calibration
- Rate of climb/descent display (variometer)
- Trip recorder with elevation profile graphs
- Peak detection and logging
- Pressure trend for weather indication
- Multiple reference settings (MSL, AGL, QNH)
- Altitude alerts (ceiling/floor warnings)
- Export GPX with accurate elevation data

## Monetization

**Model:** One-time purchase
**Price:** $11.99
**Strategy:** Mountain sports forums, pilot communities, outdoor app review sites, Strava integration promotion

## Visualization Concept

```
┌─────────────────────────────────────┐
│  Mt. Whitney Climb      ⚙️  📊     │
├─────────────────────────────────────┤
│                                     │
│         ALTITUDE                    │
│      ╔═══════════════╗              │
│      ║   3,842 m     ║              │
│      ║   12,605 ft   ║              │
│      ╚═══════════════╝              │
│                                     │
│    ▲ +2.4 m/s    ⟳ Calibrated      │
│                                     │
├─────────────────────────────────────┤
│  ▲ Elevation Profile                │
│  │      ╭────╮                      │
│  │    ╭─╯    ╰╮                     │
│  │  ╭─╯       ╰─────                │
│  └──────────────────▶ 4.2 km        │
├─────────────────────────────────────┤
│  [Calibrate]  [Record]  [History]   │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Barometer API: Pressure readings converted to altitude
- Geolocation API: GPS altitude for calibration reference
- Accelerometer: Motion detection for auto-record triggering

**Offline Strategy:**
All calculations local. Standard atmosphere model embedded. Trip data stored in IndexedDB. GPX export to local files.

**Data Handling:**
GPS used only for calibration. No continuous tracking unless user starts recording. All data local.

## Competition & Differentiation

**Existing Solutions:** My Altitude (basic, ad-supported), Altimeter GPS (cluttered UI)
**Our Edge:** Clean variometer display, trip profiling, accurate barometric readings, pilot-friendly QNH settings, no ads

## Development Estimate

**Complexity:** Medium
**Timeline:** 3-4 weeks
**Key Challenges:** Barometric altitude formula accuracy, handling pressure changes (weather vs altitude), calibration UX

