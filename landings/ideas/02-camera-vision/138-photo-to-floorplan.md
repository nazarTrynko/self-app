# Offline Photo-to-Floorplan (Lightweight)

**ID:** 138
**Category:** Camera & Vision
**Tier:** Premium ($10-50)
**APIs:** Camera, AR, Local processing, PDF
**Offline:** Full

---

## One-Liner

Capture rooms and produce a simple floorplan with annotated measurements—offline.

## Problem

Landlords and realtors need quick layouts without paying for full CAD or cloud tools.

## Solution

Guided capture + AR measurements generate a simple plan and a photo-linked measurement sheet.

## Target User

Realtors, landlords, property managers, remodelers.

## Key Features

- Guided capture flow (corners, walls, doors)
- AR measurement assistance + confidence checks
- Simple floorplan generation + labels
- Photo-to-wall linking for context
- Export: floorplan PDF + images

## Monetization

**Model:** One-time
**Price:** $24.99
**Strategy:** App Store “floor plan maker offline” keywords.

## Visualization Concept

```
┌─────────────────────────────────────┐
│                                     │
│     [Capture] → [Plan] → [Export PDF]│
│                                     │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- AR: measurements
- Camera: room capture

**Offline Strategy:**
All processing local; exports offline.

**Data Handling:**
No uploads; optional project lock.

## Competition & Differentiation

**Existing Solutions:** Cloud floorplan creators and CAD tools.
**Our Edge:** Lightweight offline workflow + good-enough exports for listings.

## Development Estimate

**Complexity:** High
**Timeline:** 4-6 weeks
**Key Challenges:** Geometry edge cases, measurement UX, export quality
