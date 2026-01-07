# Light Quality Profiler Pro

**ID:** M009
**Category:** Spatial Computing
**Tier:** Premium ($29.99)
**APIs:** Camera, ARKit, Spectral Analysis, Core ML, HealthKit
**Offline:** Full

---

## One-Liner

Professional lighting analysis that measures illuminance, color temperature, CRI, flicker, and circadian impact using advanced camera spectral analysis—replacing $500+ light meters for photographers, designers, and wellness professionals.

## Problem

Photographers need accurate color temperature and CRI readings. Interior designers need to verify lighting specifications. Wellness-focused individuals want to optimize circadian lighting. Video producers must match lighting across scenes. Professional light meters cost $200-2000. Existing apps give inaccurate single-metric readings.

## Solution

A sophisticated light analysis system using multi-exposure camera techniques to accurately measure lux, color temperature, CRI, flicker frequency, and calculate circadian stimulus (CS) and melanopic EDI—metrics that matter for health, photography, and design—with professional reporting and spatial mapping.

## Target User

- Photographers and cinematographers matching lighting
- Interior designers verifying lighting specifications
- Circadian health consultants and biohackers
- Workplace wellness professionals
- Architects doing lighting design
- Horticulturists optimizing grow lights
- Video production teams ensuring consistency
- Building inspectors verifying lighting codes

## Key Features

- **Accurate Lux Measurement**: Multi-exposure HDR technique for wide range (0.1 to 100,000 lux)
- **Color Temperature Analysis**: CCT in Kelvin with ±100K accuracy
- **CRI Calculation**: Color Rendering Index estimation from spectral analysis
- **Flicker Detection**: Measure flicker frequency, percent, and index
- **Circadian Metrics**: Melanopic EDI, Circadian Stimulus (CS) calculation
- **Spatial Light Mapping**: Walk through space building illuminance maps
- **Light Recipe Comparison**: Compare current conditions to target specifications
- **Time-of-Day Profiles**: Track how lighting changes throughout the day
- **AR Light Visualization**: See lux levels as color overlay in space
- **Professional Reports**: PDF documentation for clients and compliance
- **Reference Standards**: Compare against WELL Building, LEED, IES standards
- **Calibration Support**: Optional calibration against reference meters

## Monetization

**Model:** One-time purchase
**Price:** $29.99 (Standard) / $79.99 (Professional with standards, mapping, reports)
**Strategy:**
- Photography community forums and YouTube
- Interior design software integration partnerships
- WELL Building certification consultant network
- Circadian health influencer partnerships
- Grow light and horticulture communities

## Visualization Concept

```
┌─────────────────────────────────────────────────────────────────┐
│  💡 Light Profiler Pro      📍 Office East     📄 Report    ⚙️ │
├─────────────────────────────────────────────────────────────────┤
│  Mode: Circadian Assessment   Time: 2:34 PM                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│    ┌─────────────────────────────────────────────────────┐      │
│    │                                                      │      │
│    │            CAMERA VIEW WITH LIGHT                   │      │
│    │               ANALYSIS OVERLAY                       │      │
│    │                                                      │      │
│    │     ┌─ 520 lux ─┐    ┌─ 890 lux ─┐                 │      │
│    │     │    ░░░    │    │    ███    │                 │      │
│    │     │   Desk    │    │  Window   │                 │      │
│    │     └───────────┘    └───────────┘                 │      │
│    │                                                      │      │
│    │     Point measurement: 680 lux @ 4200K              │      │
│    │                        CRI: 82                       │      │
│    │                                                      │      │
│    └─────────────────────────────────────────────────────┘      │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  CURRENT MEASUREMENTS                                            │
│  ─────────────────────────────────────────                       │
│  Illuminance:       680 lux       (✓ Office: 300-500 rec.)      │
│  Color Temp:        4200K         (Neutral white)                │
│  CRI:               82            (⚠️ Below 90 rec. for tasks)  │
│  Flicker:           8% @ 120Hz    (✓ Imperceptible)             │
│                                                                  │
│  CIRCADIAN METRICS                                               │
│  ─────────────────────────────────────────                       │
│  Melanopic EDI:     412 lux       (✓ Good for alertness)        │
│  M/P Ratio:         0.61          (Daylight-like spectrum)       │
│  Circadian Stimulus: 0.38         (Moderate alerting)            │
│  ──────────────────────────────────────────────                  │
│  ℹ️ Recommendation: Increase to 500+ melanopic EDI for          │
│     optimal afternoon alertness                                   │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  [📷 Measure]  [🗺️ Map Space]  [📊 Spectrum]  [📈 24h Track]   │
└─────────────────────────────────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Camera (RAW): Access to unprocessed sensor data for accurate measurement
- AVFoundation: Multi-exposure capture for HDR luminance
- Core Image: Spectral analysis and color science calculations
- ARKit: Spatial mapping for light distribution
- HealthKit: Store circadian exposure data

**Offline Strategy:**
All camera processing and analysis on-device. Light maps stored locally. Reports generated locally. No cloud dependency.

**Data Handling:**
- Measurements: SQLite time-series database
- Light maps: Efficient spatial storage
- Spectrum data: Compressed local storage
- Reports: PDF generation
- HealthKit: Circadian metrics sync

## Competition & Differentiation

**Existing Solutions:**
- Sekonic light meters ($200-800, no circadian)
- Lux light meter apps ($5-10, inaccurate, single metric)
- WELL Building assessors (expensive consulting)
- Basic light measurement apps (no spectral analysis)

**Our Edge:**
- Multi-metric analysis including circadian
- Spatial mapping capability
- Camera-based technique allows spectral estimation
- Standards compliance checking
- Professional reporting at consumer price

## Development Estimate

**Complexity:** High
**Timeline:** 12-16 weeks
**Key Challenges:**
- Accurate absolute lux measurement from camera
- Spectral estimation from RGB camera (limited but possible)
- CRI estimation accuracy
- Device-to-device calibration
- Handling diverse lighting conditions

---

## Council Assessment

**🏗️ ARCHITECT:** "Camera-based light measurement is an established technique but requires careful calibration. RAW camera access is key. The spectral estimation from RGB is approximate but useful."

**🔮 ORACLE:** "Circadian lighting is a major trend—WELL Building certification is growing 40%/year. Photography market is huge. The intersection of wellness + professional tools is perfect positioning."

**⚖️ CRITIC:** "CRI from RGB camera is an estimation, not true measurement. Be clear about accuracy limitations. Some professionals will still need true spectroradiometers for specification work."

**🎨 CREATOR:** "The circadian angle is highly marketable to wellness audiences. 24-hour light profile tracking has strong engagement potential. Comparison to standards creates shareable results."

**🛡️ GUARDIAN:** "Health claims around circadian lighting should be carefully worded. Reference peer-reviewed research. Include disclaimer that this is guidance, not medical advice."

**Verdict:** GO — Multiple valuable markets, clear differentiation, reasonable price point
