# LiDAR Site Twin Lite

**ID:** 102
**Category:** Camera & Vision
**Tier:** Premium ($10-50)
**APIs:** LiDAR/AR, Camera, Files, PDF
**Offline:** Full

---

## One-Liner

Quick as-built scans with measurement anchors, issue pins, and contractor-ready exports.

## Problem

Remodelers and inspectors argue over dimensions and site conditions because measurements and photos aren’t captured in a single coherent artifact.

## Solution

Scan a space, drop measurement anchors, attach annotated photos to “issue pins,” then export an as-built packet (floor snapshot + pin list + measurements).

## Target User

Remodelers, property managers, home inspectors, and real estate professionals.

## Key Features

- Guided LiDAR scan with confidence/coverage meter
- Measurement anchors + reference scale checks
- Issue pins with photo + note + severity
- As-built export packet (PDF + shareable images)
- Project library with offline search

## Monetization

**Model:** One-time
**Price:** $24.99
**Strategy:** Free “demo scan” mode; pay to export and save unlimited projects.

## Visualization Concept

```
┌─────────────────────────────────────┐
│                                     │
│     [Scan] → [Pin Issues] → [Export A│
│                                     │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- ARKit/LiDAR: depth mesh + measurements
- Files: export project packets

**Offline Strategy:**
Projects stored locally; exports rendered on-device; no network required.

**Data Handling:**
No uploads; optional passcode/biometric lock for client projects.

## Competition & Differentiation

**Existing Solutions:** Full CAD scanners and cloud-first scanning apps.
**Our Edge:** Fast, lightweight, field-friendly workflow optimized for “good enough” contractor documentation.

## Development Estimate

**Complexity:** High
**Timeline:** 3-4 weeks
**Key Challenges:** Measurement accuracy UX, LiDAR edge cases, robust export formatting
