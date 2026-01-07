# Structural Vibration Monitor Pro

**ID:** M006
**Category:** Spatial Computing
**Tier:** Pro ($89.99)
**APIs:** Accelerometer, Gyroscope, FFT Processing, Core ML, File System
**Offline:** Full

---

## One-Liner

Engineering-grade structural vibration analysis that detects building resonance, machinery imbalance, bridge oscillations, and early warning signs of structural fatigue using phone accelerometers with professional reporting.

## Problem

Structural engineers and inspectors need vibration analysis to assess building health, machinery condition, and infrastructure integrity. Professional vibration analyzers cost $5,000-50,000. Visual inspections miss internal issues. Many structures are under-monitored due to cost. Small engineering firms and inspectors in developing regions can't afford proper equipment.

## Solution

A professional vibration analysis system using phone sensors, calibrated with known reference standards, that performs FFT analysis, identifies resonant frequencies, calculates displacement and velocity from acceleration, compares against ISO and building code standards, and generates engineering-grade reports suitable for professional documentation.

## Target User

- Structural engineers and inspectors
- Building maintenance professionals
- HVAC and mechanical engineers
- Bridge and infrastructure inspectors
- Property managers monitoring building health
- Manufacturing facility engineers
- Earthquake engineering researchers
- Insurance adjusters assessing structural claims

## Key Features

- **Multi-Axis FFT Analysis**: Real-time frequency spectrum with peak identification
- **Displacement/Velocity Calculation**: Double integration with drift correction algorithms
- **ISO Standard Comparison**: Automatic comparison against ISO 2631 (human exposure), ISO 10816 (machinery)
- **Natural Frequency Detection**: Identify structural resonant frequencies and mode shapes
- **Long-Term Monitoring**: Multi-hour/day recording with triggered capture on threshold events
- **Calibration Protocol**: Reference standard calibration with uncertainty calculation
- **Report Generator**: Professional PDF/DXF reports with graphs, data tables, compliance statements
- **Historical Trending**: Track vibration signatures over time for degradation monitoring
- **Alert Thresholds**: Configurable alerts when vibration exceeds limits
- **Multi-Phone Array**: Use multiple devices for synchronized multi-point measurement
- **Export Formats**: CSV, MATLAB, Universal File Format (UFF) for professional software
- **Reference Library**: Built-in database of typical vibration signatures

## Monetization

**Model:** One-time professional license
**Price:** $89.99 (Individual) / $299.99 (Team with sync features)
**Strategy:**
- Engineering society partnerships (ASCE, ASME)
- Engineering school educational licenses
- Building inspection company bulk licensing
- YouTube technical education content
- Conference presence at structural engineering events

## Visualization Concept

```
┌─────────────────────────────────────────────────────────────────┐
│  📊 Vibration Monitor Pro    🔴 Recording    📄 Report    ⚙️    │
├─────────────────────────────────────────────────────────────────┤
│  Project: Warehouse #47 Floor   │  Duration: 00:15:32          │
│  Mode: Long-term monitoring     │  Samples: 932,400            │
├─────────────────────────────────────────────────────────────────┤
│  TIME DOMAIN                                                     │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  +2 ─┬───────────────────────────────────────────────┬─   │  │
│  │ mm/s │  ╱╲   ╱╲   ╱╲   ╱╲   ╱╲   ╱╲   ╱╲   ╱╲   ╱╲  │    │  │
│  │   0 ─┼─╳──╳─╳──╳─╳──╳─╳──╳─╳──╳─╳──╳─╳──╳─╳──╳─╳──┼─   │  │
│  │  -2 ─┼───────────────────────────────────────────────┼─   │  │
│  │      └───────────────────────────────────────────────┘    │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  FREQUENCY DOMAIN (FFT)                                         │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  40 ─┬─────────────────────────────────────────────────┬─ │  │
│  │  dB  │        █                                        │  │  │
│  │  20 ─┼────────█─────█────────────────────────────────┼─ │  │
│  │      │   █    █     █   █                             │  │  │
│  │   0 ─┼───█────█─────█───█──────────────────────────────│  │  │
│  │      └───┴────┴─────┴───┴────────────────────────────┘│  │  │
│  │       10   25   50   75  100  150  200  300  500 Hz   │  │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ⚠️ DOMINANT FREQUENCY: 25 Hz (likely HVAC fan imbalance)        │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  MEASUREMENTS                                                    │
│  ─────────────────────────────────────                           │
│  Peak Velocity:     4.2 mm/s   [ISO 10816: ⚠️ Alert]            │
│  RMS Velocity:      1.8 mm/s   [ISO 10816: ✓ Good]              │
│  Peak Displacement: 0.15 mm    [Building Code: ✓ OK]            │
│  Crest Factor:      2.3        [Normal machinery range]          │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  [▶ Start/Stop]  [📊 Analysis]  [📈 Trends]  [📄 Report]        │
└─────────────────────────────────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Core Motion: 100+ Hz accelerometer sampling
- Accelerate Framework: FFT computation with vDSP
- Core ML: Pattern recognition for vibration signatures
- File System: Large dataset storage and export

**Offline Strategy:**
All processing on-device using Accelerate framework for DSP. Data stored locally in efficient binary format. Reports generated locally as PDF. No cloud dependency.

**Data Handling:**
- Raw data: Compressed binary time-series files
- Analysis results: SQLite project database
- Reports: Local PDF/DXF generation
- Export: Industry-standard formats
- No cloud sync—professional users need data sovereignty

## Competition & Differentiation

**Existing Solutions:**
- Brüel & Kjær analyzers ($10,000+)
- PCB Piezotronics systems ($5,000+)
- Basic vibration apps (no professional features)
- VibSensor (limited, hobbyist focus)

**Our Edge:**
- Professional features at 1% of hardware analyzer cost
- Standards compliance checking built-in
- Engineering-grade reporting for professional use
- Multi-device array capability
- Calibration protocol for traceability

## Development Estimate

**Complexity:** Very High
**Timeline:** 16-20 weeks
**Key Challenges:**
- Accelerometer calibration and uncertainty quantification
- Double integration drift correction algorithms
- FFT optimization for long recordings
- Professional report template system
- Multi-device synchronization for arrays
- Validation against reference instruments

---

## Council Assessment

**🏗️ ARCHITECT:** "DSP requirements are significant but Accelerate framework handles it. Key technical risk is sensor calibration—phone accelerometers vary significantly. Consider optional calibration accessory or reference measurement service."

**🔮 ORACLE:** "Infrastructure monitoring is a growing field post-bridge collapses. Democratizing professional tools is a proven model. Target developing regions where professional equipment is unaffordable but engineers exist."

**⚖️ CRITIC:** "The 'engineering-grade' claim needs careful handling—phone sensors have limitations. Clear documentation of measurement uncertainty is essential. Could face liability concerns if used for life-safety decisions."

**🎨 CREATOR:** "Less visually exciting than other ideas but the professional report generation is the key deliverable. Engineers share tools that make their reports look better. The ISO comparison is highly shareable for compliance documentation."

**🛡️ GUARDIAN:** "Include prominent disclaimers that this supplements but doesn't replace professional instruments for critical measurements. Also consider liability insurance implications."

**Verdict:** GO — Clear professional market, validated price tolerance, measurable ROI
