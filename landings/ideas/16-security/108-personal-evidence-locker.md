# Personal Evidence Locker

**ID:** 108
**Category:** Security
**Tier:** Premium ($10-50)
**APIs:** Camera, Microphone, Local encryption, Files, Biometrics
**Offline:** Full

---

## One-Liner

Capture incidents with tamper-evident timestamps and export a single evidence packet.

## Problem

In disputes (landlord, workplace, insurance), evidence is scattered and credibility is questioned.

## Solution

Bundle photos, audio, and notes into locked incident entries with hash-chained logs, then export an evidence packet.

## Target User

Tenants, caregivers, gig workers, anyone needing documentation for disputes.

## Key Features

- Incident capture: photo/audio/note bundles
- Tamper-evident timeline (hash chain)
- Witness/contact notes + optional signatures
- Export “evidence packet” (PDF + attachments ZIP)
- Biometric lock + panic “hide mode”

## Monetization

**Model:** One-time
**Price:** $24.99
**Strategy:** Free capture for 1 incident; pay to unlock unlimited incidents and exports.

## Visualization Concept

```
┌─────────────────────────────────────┐
│                                     │
│     [Capture] → [Lock] → [Export Pack│
│                                     │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Biometrics: secure access
- Files: export packet

**Offline Strategy:**
Encrypted local storage; exports generated offline.

**Data Handling:**
No cloud; user controls exports; optional auto-delete policy.

## Competition & Differentiation

**Existing Solutions:** Notes apps, generic vaults, cloud evidence services.
**Our Edge:** Court/insurance-style packet generator + provenance logging.

## Development Estimate

**Complexity:** High
**Timeline:** 3 weeks
**Key Challenges:** Secure encryption UX, export integrity, “hide mode” safety
