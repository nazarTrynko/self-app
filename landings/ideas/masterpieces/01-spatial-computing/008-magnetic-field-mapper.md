# Magnetic Field Mapper

**ID:** M008
**Category:** Spatial Computing
**Tier:** Pro ($34.99)
**APIs:** Magnetometer, ARKit/ARCore, GPS, Accelerometer, LiDAR
**Offline:** Full

---

## One-Liner

Create detailed 3D magnetic field maps of indoor spaces to locate hidden wiring, detect EMI sources, verify shielded room integrity, and find buried metal objects with professional visualization and reporting.

## Problem

Finding hidden electrical wiring before drilling costs electricians and contractors time and risks dangerous mistakes. EMI engineers need to map interference sources in facilities. Archaeology and construction need to detect buried metal. Professional magnetometers cost $2,000+ and lack spatial mapping. Consumer "stud finders" are crude and unreliable.

## Solution

A sophisticated magnetometer mapping system that captures magnetic field measurements as you move through space, builds 3D field maps overlaid on real geometry, identifies anomalies indicating wiring/metal/interference sources, and provides professional documentation for engineering assessments.

## Target User

- Electricians and contractors locating hidden wiring
- EMI/EMC engineers assessing facility interference
- IT professionals finding network cable runs
- Shielded room certification engineers
- Archaeology survey teams
- Construction companies avoiding utilities
- Data center engineers mapping magnetic environments
- MRI facility planners

## Key Features

- **3D Field Mapping**: Walk through space while building volumetric magnetic field model
- **AR Visualization**: See field strength as color gradients overlaid on camera view
- **Anomaly Detection**: Automatic identification of wiring runs, metal objects, EMI sources
- **Wiring Path Tracing**: Follow detected wiring through walls with directional guidance
- **Field Vector Display**: Show magnitude AND direction of magnetic field
- **Shielding Effectiveness**: Calculate attenuation in shielded enclosures
- **Time-Varying Analysis**: Capture and analyze AC magnetic field frequencies
- **Comparison Mode**: Before/after mapping for verification
- **Export to CAD**: Generate DXF overlays for architectural plans
- **Professional Reports**: PDF documentation with field maps and measurements
- **Reference Standards**: Compare against IEEE, MIL-STD EMI limits

## Monetization

**Model:** One-time professional purchase
**Price:** $34.99 (Standard) / $99.99 (Professional with CAD export, standards)
**Strategy:**
- Electrician trade publications and forums
- EMC engineering conference presence
- YouTube tutorials for contractors
- Partnership with construction safety organizations
- Facility management company licensing

## Visualization Concept

```
┌─────────────────────────────────────────────────────────────────┐
│  🧲 Magnetic Mapper         Project: Office 3B       📤 Export │
├─────────────────────────────────────────────────────────────────┤
│  Mode: Wiring Detection     Coverage: 73%                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│    ┌─────────────────────────────────────────────────────┐      │
│    │                                                      │      │
│    │           AR VIEW WITH MAGNETIC FIELD               │      │
│    │               COLOR OVERLAY                          │      │
│    │                                                      │      │
│    │     ┌──────────────────────────────────┐            │      │
│    │     │          WALL                     │            │      │
│    │     │    ════════════════════          │  ← Wiring  │      │
│    │     │    ↑ Detected wiring run          │    Run     │      │
│    │     │                                   │            │      │
│    │     │        🔴                         │  ← Strong  │      │
│    │     │    (EMI source:                   │    field   │      │
│    │     │     likely transformer)           │            │      │
│    │     │                                   │            │      │
│    │     └──────────────────────────────────┘            │      │
│    │                                                      │      │
│    └─────────────────────────────────────────────────────┘      │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  CURRENT READING                                                 │
│  ─────────────────────────────────────                           │
│  Total Field:     47.2 μT    (Earth + local)                    │
│  DC Anomaly:      +12.3 μT   ⚠️ Metal/magnetic source           │
│  AC Component:    0.8 μT     @ 60 Hz (wiring proximity)         │
│  Vector:          N: 23°, Down: 62°                             │
│                                                                  │
│  DETECTED FEATURES                                               │
│  • Wiring run: 2.1m length, ~1.2m height, NE direction          │
│  • Point source: 0.4m ahead, likely transformer/motor           │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  [🎯 Scan]  [🗺️ 3D Map]  [📊 Analysis]  [📄 Report]             │
└─────────────────────────────────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Core Motion Magnetometer: 3-axis magnetic field sensing at 100Hz
- ARKit/ARCore: Spatial positioning for map building
- LiDAR: Room geometry for accurate overlay
- Accelerate Framework: FFT for AC field analysis
- SceneKit: 3D field visualization

**Offline Strategy:**
All processing and mapping on-device. Field data stored locally in efficient spatial database. Reports generated locally. No cloud dependency.

**Data Handling:**
- Field measurements: Spatial database with efficient queries
- Room geometry: Local ARKit world map storage
- Projects: SQLite database with export capability
- Reports: Local PDF generation
- Optional DXF/CAD export

## Competition & Differentiation

**Existing Solutions:**
- Professional magnetometers ($2,000-10,000, no mapping)
- Stud finders ($20-100, crude, no visualization)
- Basic magnetometer apps (single point, no mapping)
- EMF detector apps (fear-based marketing, not professional)

**Our Edge:**
- Spatial mapping creates actionable intelligence
- AR visualization for intuitive understanding
- Professional reporting for documentation
- Fraction of professional equipment cost
- Combines detection with localization

## Development Estimate

**Complexity:** High
**Timeline:** 12-16 weeks
**Key Challenges:**
- Separating Earth's field from local anomalies
- Accurate spatial registration of measurements
- AC field frequency analysis with consumer magnetometer
- Calibration for device-to-device variation
- Handling magnetic interference from phone components

---

## Council Assessment

**🏗️ ARCHITECT:** "Phone magnetometers are surprisingly capable but require careful calibration. Key challenge is the phone's own magnetic signature—motors, speakers. Recommend calibration routine that characterizes device."

**🔮 ORACLE:** "Construction safety is increasingly regulated. Tool that documents hazard assessment has liability value. Electricians already use phones extensively—app fits workflow."

**⚖️ CRITIC:** "Phone magnetometer accuracy and range are limited compared to professional tools. Clear about capabilities vs dedicated equipment. Some wiring detection scenarios may exceed sensor capability."

**🎨 CREATOR:** "The AR overlay of invisible magnetic fields is inherently fascinating. Videos of 'seeing through walls' are highly shareable. The detective-like wiring tracing has engagement appeal."

**🛡️ GUARDIAN:** "Include clear warnings that this aids but doesn't replace professional utility location services for digging/drilling near critical infrastructure. Liability disclaimer essential."

**Verdict:** GO — Clear professional utility, accessible price, validated market
