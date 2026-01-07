# Packaging Dimensioner (AR + Catalog)

**ID:** 130
**Category:** Camera & Vision
**Tier:** Premium ($10-50)
**APIs:** AR, Camera, Local DB, CSV
**Offline:** Full

---

## One-Liner

Measure boxes fast and keep a reusable catalog to reduce shipping costs.

## Problem

Sellers waste money due to incorrect package dimensions and inconsistent packing choices.

## Solution

AR-measure packages, store common box presets, and export dimensions for shipping workflows.

## Target User

Online sellers, small warehouses, resellers.

## Key Features

- AR measurement with confidence indicator
- Box catalog with presets and photos
- Packing notes per SKU (fits/doesn’t fit)
- Dimension exports (CSV)
- Quick “best box” suggestions from history

## Monetization

**Model:** One-time
**Price:** $14.99
**Strategy:** Sell to seller communities; App Store “box measurement” keywords.

## Visualization Concept

```
┌─────────────────────────────────────┐
│                                     │
│     [Measure] → [Save Preset] → [Expo│
│                                     │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- AR: distance/size measurement
- Local database: box catalog

**Offline Strategy:**
All presets stored locally; exports offline.

**Data Handling:**
No account; no data upload.

## Competition & Differentiation

**Existing Solutions:** Generic AR measure apps.
**Our Edge:** Shipping-centric catalog + decision help + reliable exports.

## Development Estimate

**Complexity:** High
**Timeline:** 3 weeks
**Key Challenges:** Measurement UX, catalog design, CSV compatibility
