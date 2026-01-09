# Vocab Builder

**ID:** 064
**Category:** Education
**Tier:** Premium ($12)
**APIs:** File System, TTS, Camera
**Offline:** Full

---

## One-Liner

Build vocabulary in any language with context-based learning, spaced repetition, and offline dictionary access.

## Problem

Language learners struggle to build vocabulary effectively. Word lists lack context. Dictionary apps require internet. Existing solutions are either too simple (flashcards only) or require subscriptions.

## Solution

A comprehensive vocabulary builder with contextual sentences, native audio, image associations, spaced repetition, and offline dictionary—everything needed to master words in any language.

## Target User

- Language students at any level
- Travelers preparing for trips
- Professionals learning for work
- Immigrants building new language skills
- Test prep (TOEFL, IELTS, etc.)

## Key Features

- 10,000+ word databases per language
- Contextual example sentences
- Native speaker audio (downloaded)
- Personal word lists and tags
- Spaced repetition scheduling
- Photo-to-word lookup (scan text)
- Progress by CEFR level
- Offline dictionary included

## Monetization

**Model:** Base app + language packs
**Price:** $11.99 base with 1 language, $4.99 per additional language
**Strategy:** Language learning forums, expat communities, university language departments, polyglot communities

## Visualization Concept

```
┌─────────────────────────────────────┐
│  Vocab Builder         📚  🔍  ⚙️  │
├─────────────────────────────────────┤
│  Learning: Spanish │ Level: B1      │
├─────────────────────────────────────┤
│                                     │
│         ╔═══════════════╗           │
│         ║  conseguir    ║           │
│         ║  (verb)       ║           │
│         ╚═══════════════╝           │
│                                     │
│  🔊 "con-se-GHEER"                  │
│                                     │
│  📝 to get, to obtain, to achieve   │
│                                     │
│  💬 "Necesito conseguir un trabajo" │
│     "I need to get a job"           │
├─────────────────────────────────────┤
│  CEFR: B1 │ Frequency: Top 500      │
│  Due for review: Tomorrow           │
├─────────────────────────────────────┤
│  [✓ Know It] [📖 Study] [+ My List]│
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- File System: Word databases, progress
- Web Speech API: Pronunciation playback
- Camera API: OCR for word lookup

**Offline Strategy:**
Language packs downloaded (50-100MB each). All lookups local. Progress stored locally.

**Data Handling:**
All learning data local. No cloud sync. Progress exportable.

## Competition & Differentiation

**Existing Solutions:** Duolingo (gamified, subscription features), Anki (manual card creation), Babbel (subscription)
**Our Edge:** Pre-built comprehensive vocab, offline audio, context-rich, one-time purchase

## Development Estimate

**Complexity:** Medium-High
**Timeline:** 8-10 weeks
**Key Challenges:** Quality word databases, native audio sourcing, efficient offline search







