# Music Rehearsal Evidence (Band-Proof)

**ID:** 116
**Category:** Creative
**Tier:** Premium ($10-50)
**APIs:** Microphone, Files, Local DB
**Offline:** Full

---

## One-Liner

Rehearsal recorder that splits takes, tags mistakes, and exports set reports.

## Problem

Bands waste rehearsal time repeating the wrong sections because sessions aren’t structured or searchable.

## Solution

Record rehearsals, drop quick markers (timing, pitch, arrangement), and export a setlist report for the next session.

## Target User

Bands, music directors, solo performers practicing sets.

## Key Features

- Long-form rehearsal recording with markers
- Take splitting + setlist tagging
- Mistake taxonomy (timing, pitch, lyrics, arrangement)
- Session summary + next-actions list
- Export: audio clips + PDF session report

## Monetization

**Model:** One-time
**Price:** $14.99
**Strategy:** App Store targeting “rehearsal recorder”; musician demos.

## Visualization Concept

```
┌─────────────────────────────────────┐
│                                     │
│     [Record] → [Markers] → [Session R│
│                                     │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Microphone: long recording sessions
- Files: export clips and reports

**Offline Strategy:**
All recordings local; exports via Files.

**Data Handling:**
No cloud; user-managed storage and cleanup.

## Competition & Differentiation

**Existing Solutions:** Generic multitrack recorders and voice memo apps.
**Our Edge:** Session intelligence + markers + rehearsal-specific reporting.

## Development Estimate

**Complexity:** Medium
**Timeline:** 2-3 weeks
**Key Challenges:** Audio file management, marker UX, export pipelines
