# Budget “Receipt Truth” (Local Rules)

**ID:** 136
**Category:** Finance
**Tier:** Premium ($10-50)
**APIs:** Camera (OCR), Local DB, CSV
**Offline:** Full

---

## One-Liner

Offline expense tracking that reads line items and learns your categories locally.

## Problem

Manual budgeting fails; generic auto-categorization is wrong; people don’t trust cloud finance apps.

## Solution

Scan receipts, categorize line items via transparent local rules, and export clean monthly summaries.

## Target User

Budgeters who want privacy and accuracy (YNAB fans, frugal households).

## Key Features

- Receipt scanning + line-item extraction
- Local categorization rules (editable and explainable)
- Split transactions by category from one receipt
- Monthly summaries + trends
- Export: CSV compatible with spreadsheets

## Monetization

**Model:** One-time
**Price:** $24.99
**Strategy:** Position as privacy-first alternative to cloud budgeting apps.

## Visualization Concept

```
┌─────────────────────────────────────┐
│                                     │
│     [Scan] → [Split + Categorize] → [│
│                                     │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Camera/OCR: receipt capture
- Local database: rules + transactions

**Offline Strategy:**
All processing and storage local; exports offline.

**Data Handling:**
No accounts; no bank connections; user owns data.

## Competition & Differentiation

**Existing Solutions:** Budgeting apps with bank sync and subscriptions.
**Our Edge:** Line-item truth + transparent local rules + full privacy.

## Development Estimate

**Complexity:** High
**Timeline:** 4 weeks
**Key Challenges:** OCR variability, rule UX, data model
