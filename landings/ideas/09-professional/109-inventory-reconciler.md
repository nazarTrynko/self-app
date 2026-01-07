# Offline Inventory Reconciler (Barcode + Batches)

**ID:** 109
**Category:** Professional
**Tier:** Pro ($50+)
**APIs:** Camera (barcode), Local DB, Files, CSV
**Offline:** Full

---

## One-Liner

Fast stocktakes with batch rules, discrepancy audits, and cycle-count plans—offline.

## Problem

Small warehouses and sellers lose money due to Excel-based stocktakes with poor auditability and frequent scanning mistakes.

## Solution

Scan SKUs, count by batch/location, auto-flag discrepancies, and export reconciliation reports that are easy to act on.

## Target User

Shop owners, resellers, small warehouses, backroom retail managers.

## Key Features

- Barcode scan + manual SKU fallback
- Batch/location counting mode (cycle counts)
- Discrepancy engine (expected vs actual)
- Audit trail of who/when counted
- Exports: CSV + printable discrepancy sheets

## Monetization

**Model:** One-time
**Price:** $59.99
**Strategy:** Paid from day one; strong value framing vs. shrink and time.

## Visualization Concept

```
┌─────────────────────────────────────┐
│                                     │
│     [Scan] → [Count] → [Discrepancy R│
│                                     │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Camera: barcode scanning
- Local database: SKU catalog + counts

**Offline Strategy:**
Local SKU catalog + counts; import/export via CSV.

**Data Handling:**
No accounts; optional encrypted catalog if sensitive.

## Competition & Differentiation

**Existing Solutions:** Cloud inventory suites, generic barcode apps.
**Our Edge:** Reconciliation logic + auditability + offline reliability.

## Development Estimate

**Complexity:** High
**Timeline:** 3-4 weeks
**Key Challenges:** Ergonomic scanning UX, reconciliation edge cases, CSV compatibility
