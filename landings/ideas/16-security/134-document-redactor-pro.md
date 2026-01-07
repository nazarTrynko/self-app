# On-Device Document Redactor Pro

**ID:** 134
**Category:** Security
**Tier:** Premium ($10-50)
**APIs:** Files, OCR/ML, PDF
**Offline:** Full

---

## One-Liner

Redact IDs/addresses locally with verified overlays and permanent PDF exports.

## Problem

People overshare sensitive documents; basic “blur” edits are reversible or inconsistent.

## Solution

Detect likely PII on-device, apply permanent redactions, and export a verifiably redacted PDF.

## Target User

Anyone sharing leases, IDs, medical docs, financial statements.

## Key Features

- Import PDF/image docs
- On-device PII detection (names, addresses, IDs)
- Permanent redaction tool (not blur)
- Verification view (what’s removed)
- Audit note + export PDF

## Monetization

**Model:** One-time
**Price:** $24.99
**Strategy:** Target privacy communities and App Store “PDF redaction”.

## Visualization Concept

```
┌─────────────────────────────────────┐
│                                     │
│     [Import] → [Detect PII] → [Export│
│                                     │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Files: import documents
- PDF: render and export

**Offline Strategy:**
All detection and export on-device; no uploads.

**Data Handling:**
Docs never leave device; clear privacy labeling.

## Competition & Differentiation

**Existing Solutions:** Cloud PDF editors and scanner apps.
**Our Edge:** Verified permanent redaction offline.

## Development Estimate

**Complexity:** High
**Timeline:** 4-6 weeks
**Key Challenges:** PDF text extraction, safe redaction, ML detection tuning
