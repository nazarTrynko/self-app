# Offline Meeting Decision Log (Decision Ledger)

**ID:** 124
**Category:** Productivity
**Tier:** Premium ($10-50)
**APIs:** Local DB, Calendar (optional), Files
**Offline:** Full

---

## One-Liner

Capture decisions and owners in meetings, then auto-build a searchable decision ledger.

## Problem

Teams forget decisions; individuals get blamed; meeting notes don’t surface commitments clearly.

## Solution

A decision-first note flow that extracts “Decision / Owner / Due / Rationale” into a ledger export.

## Target User

Managers, product leads, freelancers juggling multiple clients.

## Key Features

- Ultra-fast decision capture (one-hand mode)
- Owner + due date + confidence level fields
- Decision ledger timeline + filters
- Weekly “decision digest” export
- Meeting templates + action review ritual

## Monetization

**Model:** One-time
**Price:** $19.99
**Strategy:** Target productivity communities and App Store “meeting notes decisions”.

## Visualization Concept

```
┌─────────────────────────────────────┐
│                                     │
│     [Meeting] → [Decision Cards] → [L│
│                                     │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Local database: decisions and metadata
- Files: export ledger

**Offline Strategy:**
All data local; optional calendar link without sync requirements.

**Data Handling:**
No accounts; optional encryption for client work.

## Competition & Differentiation

**Existing Solutions:** Notes apps and team wikis.
**Our Edge:** Decision-centric UX + ledger outputs + weekly digest ritual.

## Development Estimate

**Complexity:** Medium
**Timeline:** 2 weeks
**Key Challenges:** Fast capture UX, exports, avoiding feature creep
