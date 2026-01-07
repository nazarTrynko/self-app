# Film Production Assistant Pro

**ID:** M028
**Category:** Professional Domain
**Tier:** Pro ($79.99)
**APIs:** Camera, GPS, Light Sensor, Compass, Calendar, File System, Core ML
**Offline:** Full

---

## One-Liner

A comprehensive film/video production toolkit combining script breakdown, shot planning, continuity tracking, sun position/golden hour calculation, color checker calibration, and production document generation—everything a director or DP needs on set.

## Problem

Film and video production involves complex logistics—continuity across shots, sun tracking for exteriors, color calibration between setups, script coverage tracking, and endless production documents. Currently, professionals juggle multiple apps, spreadsheets, and paper systems. Indie filmmakers can't afford dedicated script supervisors or expensive production software.

## Solution

An all-in-one production assistant that handles the technical and organizational aspects of filmmaking—from pre-production planning through principal photography—enabling smaller crews to work like professional productions.

## Target User

- Independent filmmakers and directors
- Directors of photography planning shots
- Script supervisors tracking continuity
- Assistant directors managing schedules
- Documentary producers in the field
- Commercial production crews
- Content creators producing high-end video
- Film students learning production workflows

## Key Features

- **Script Breakdown**: Import scripts, tag elements, generate breakdown sheets
- **Shot List Builder**: Plan shots with framing, lens, movement notes
- **Sun Calculator**: Golden hour, sun position, shadow direction by date/time/location
- **Continuity Tracker**: Photo documentation with notes for each setup/take
- **Color Checker Tool**: Capture calibration references for color matching
- **Lens Calculator**: DOF, angle of view, sensor crop factor calculations
- **Call Sheet Generator**: Create professional call sheets from contacts/schedule
- **Location Scout**: GPS-tagged photos with sun data and notes
- **Daily Progress Tracker**: Script coverage, scenes completed, schedule status
- **Slate Log**: Digital slate with take notes and sync markers
- **Weather Integration**: Forecast for shooting days with continuity implications
- **Storyboard Integration**: Reference storyboards linked to shot list

## Monetization

**Model:** One-time purchase with optional subscription
**Price:** $79.99 (full app) or $9.99/month
**Strategy:**
- Film school educational licensing
- Film festival presence and partnerships
- YouTube filmmaker community marketing
- Camera manufacturer partnerships
- Indie film community outreach

## Visualization Concept

```
┌─────────────────────────────────────────────────────────────────┐
│  🎬 Production Pro      Project: "Desert Light"    📁 Docs     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  TODAY: Shoot Day 7 of 12       Location: Red Rock Canyon       │
│  ═══════════════════════════════════════════════════════════    │
│                                                                  │
│  ☀️ SUN TRACKING                                                │
│  ─────────────────────────────────────────                       │
│  Current: 2:34 PM │ Azimuth: 215° │ Altitude: 42°              │
│  Golden Hour: 5:47 PM - 6:23 PM                                 │
│  Sunset: 6:23 PM │ Civil Twilight ends: 6:51 PM                │
│                                                                  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │      N                                                     │  │
│  │      │     ☀️ ← Current sun position                      │  │
│  │  W ──┼── E                                                 │  │
│  │      │        ╲ Shadow direction: 35° NE                  │  │
│  │      S          ╲                                          │  │
│  │                  [Character shadow angle for continuity]  │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  📋 SHOT LIST: Scene 23 - Desert Confrontation                  │
│  ─────────────────────────────────────────                       │
│  ☑️ 23A - Wide establishing (completed, 3 takes)               │
│  ☑️ 23B - OTS Sarah to Mike (completed, 5 takes)               │
│  ☐ 23C - MCU Sarah reaction (⬅️ CURRENT)                       │
│  ☐ 23D - OTS Mike to Sarah                                      │
│  ☐ 23E - CU Mike reveal                                         │
│                                                                  │
│  Scene progress: ████████░░ 40%                                 │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  📷 CONTINUITY: Scene 23C, Take 2                               │
│  ─────────────────────────────────────────                       │
│  ┌─────────┐  Hair: Down, left side                             │
│  │  PHOTO  │  Wardrobe: Blue shirt, sleeves rolled              │
│  │  REF    │  Props: Water bottle in left hand                  │
│  └─────────┘  Lens: 50mm @ f/2.8                                │
│               Position: Mark C                                   │
│               Sun: 2:30 PM (shadow 35° NE)                      │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  [🎬 Slate]  [📷 Continuity]  [☀️ Sun]  [📋 Shots]  [📄 Docs]  │
└─────────────────────────────────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Camera: Photo documentation with EXIF
- Core Location + Compass: Sun position calculation
- Light Sensor: Exposure metering
- Calendar: Schedule integration
- File System: Script import, document storage
- Core ML: Script element tagging

**Offline Strategy:**
All calculations (sun position, lens math) run offline. Documents stored locally. Scripts and shot lists accessible offline. Sun ephemeris data cached for date range. Full production functionality without connectivity.

**Data Handling:**
- Project files: Local encrypted storage
- Reference photos: Local with optional cloud backup
- Scripts: Local import and storage
- Generated documents: Local PDF creation
- Share via AirDrop or export

## Competition & Differentiation

**Existing Solutions:**
- Movie Magic (expensive, desktop only)
- Celtx (web-based, limited mobile)
- Sun Seeker (sun only)
- Artemis (director's viewfinder only)
- Scattered individual tools

**Our Edge:**
- Unified production toolkit in one app
- Mobile-first for on-set use
- Affordable for indie productions
- Offline operation for remote locations
- Continuity tracking with photos
- Professional document generation

## Development Estimate

**Complexity:** High
**Timeline:** 16-20 weeks
**Key Challenges:**
- Script import and parsing (FDX, PDF formats)
- Sun position calculation accuracy
- Continuity photo organization UX
- Call sheet template flexibility
- Shot list ↔ script linkage
- Document export formatting

---

## Council Assessment

**🏗️ ARCHITECT:** "Sun calculation algorithms are well-established. Script parsing is the main challenge—FDX format is standard but varied. Consider partnering with existing script software for import."

**🔮 ORACLE:** "Content creation explosion drives demand. Indie film production is more accessible than ever. Professional tools at prosumer prices is a winning formula. Film school market is significant."

**⚖️ CRITIC:** "Feature scope is broad—risk of being mediocre at everything. Consider MVP focused on sun tracking + continuity, expand from there. Competition in individual tool space is intense."

**🎨 CREATOR:** "The sun tracking visualization is beautiful and functional. Continuity photo grid is immediately useful. The 'director's dashboard' view of daily progress is satisfying."

**🛡️ GUARDIAN:** "Script content may be contractually protected. Ensure clear data ownership. On-set photos may contain sensitive information—no cloud without explicit consent."

**Verdict:** GO — Clear market, fragmented competition, film school distribution channel
