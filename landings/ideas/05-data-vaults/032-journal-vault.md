# Private Journal

**ID:** 032
**Category:** Personal Data Vaults
**Tier:** Premium ($12)
**APIs:** Biometrics, Web Crypto API, File System, Camera
**Offline:** Full

---

## One-Liner

End-to-end encrypted personal journal with photos, voice notes, and mood tracking—completely private and local.

## Problem

Digital journals are either unencrypted (searchable by anyone with device access) or cloud-synced (privacy concerns). People writing about personal struggles, therapy insights, or private thoughts need true privacy.

## Solution

A fully encrypted personal journal that protects your innermost thoughts with biometric access, local-only storage, and no cloud sync—what you write stays truly private.

## Target User

- People processing difficult life events
- Therapy patients journaling between sessions
- Those documenting private experiences
- Anyone wanting truly private digital diary
- People in sensitive situations (domestic issues, etc.)

## Key Features

- AES-256 encrypted entries
- Biometric unlock required
- Rich text with photos and voice notes
- Mood and emotion tracking
- Custom tags and search
- Decoy/duress PIN option
- Export encrypted backup
- Writing prompts and templates

## Monetization

**Model:** One-time purchase
**Price:** $11.99
**Strategy:** Mental health communities, therapy apps recommendations, privacy advocate channels, self-help forums

## Visualization Concept

```
┌─────────────────────────────────────┐
│  Private Journal       📅  🔒  ⚙️  │
├─────────────────────────────────────┤
│  January 2026                       │
│  ┌─┬─┬─┬─┬─┬─┬─┐                    │
│  │M│T│W│T│F│S│S│                    │
│  ├─┼─┼─┼─┼─┼─┼─┤                    │
│  │●│●│ │●│●│ │●│ ← Entries          │
│  └─┴─┴─┴─┴─┴─┴─┘                    │
├─────────────────────────────────────┤
│  TODAY - January 15                 │
│  Mood: 😊 Good                      │
│                                     │
│  "Had a breakthrough in therapy     │
│  today. Finally understood why..."  │
│                                     │
│  📷 1 photo │ 🎤 1 voice note      │
│  🏷️ therapy, growth, insight       │
├─────────────────────────────────────┤
│  🔐 256-bit encrypted               │
│  Never synced • Never shared        │
├─────────────────────────────────────┤
│  [+ New Entry] [📊 Insights] [🔒]  │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Web Crypto API: Per-entry encryption
- Biometrics: Journal unlock
- Camera API: Photo attachments
- MediaRecorder: Voice notes
- File System: Encrypted storage

**Offline Strategy:**
Each entry encrypted separately. Database encrypted at rest. Zero cloud features.

**Data Handling:**
Maximum privacy. Decoy PIN shows fake journal. Real journal only accessible with real credentials.

## Competition & Differentiation

**Existing Solutions:** Day One (cloud sync), Journey (cloud sync), basic notes apps (unencrypted)
**Our Edge:** True encryption, decoy feature, local-only, biometric protection, one-time purchase

## Development Estimate

**Complexity:** Medium
**Timeline:** 6-8 weeks
**Key Challenges:** Encryption UX (no perceptible delay), decoy mode implementation, search within encrypted content

