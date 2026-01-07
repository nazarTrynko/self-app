# Tattoo Preview

**ID:** 096
**Category:** Niche Pro
**Tier:** Premium ($10)
**APIs:** Camera, ARKit, Image Processing
**Offline:** Full

---

## One-Liner

Preview tattoo designs on your body in AR before committing to ink—resize, reposition, and see how it looks from every angle.

## Problem

Getting a tattoo is permanent, but you can't truly visualize how a design will look on your body until it's done. Paper stencils and imagination aren't enough.

## Solution

Upload any tattoo design, position it on your body using AR, adjust size and placement, and see exactly how it will look—move around to see different angles.

## Target User

- People considering tattoos
- Tattoo artists showing clients
- Tattoo studios for consultations

## Key Features

- AR placement on any body part
- Resize and rotate controls
- Skin tone adaptation
- Save previews as photos/videos
- Design library with folders
- Before/after comparison

## Monetization

**Model:** One-time purchase
**Price:** $9.99
**Strategy:** Tattoo subreddits, tattoo artist partnerships, body art publications

## Visualization Concept

```
┌─────────────────────────────────────┐
│  🎨 Tattoo Preview                  │
├─────────────────────────────────────┤
│  ┌─────────────────────────────┐    │
│  │                             │    │
│  │    [AR CAMERA VIEW]         │    │
│  │      with tattoo overlay    │    │
│  │                             │    │
│  └─────────────────────────────┘    │
│                                     │
│  Size: ────●──────                  │
│  Rotate: ───●─────                  │
│                                     │
│  [📸 Capture] [📂 Designs] [Reset]  │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- ARKit: Body tracking and overlay
- Core Image: Skin tone blending
- Photos: Save captures

**Offline Strategy:**
Full offline. All processing on-device.

**Data Handling:**
Designs stored locally. No cloud upload.

## Competition & Differentiation

**Existing Solutions:** InkHunter, INKHUNTER PRO
**Our Edge:** Better AR tracking, skin tone adaptation, no watermarks

## Development Estimate

**Complexity:** Medium
**Timeline:** 5 weeks
**Key Challenges:** Realistic skin blending, stable AR tracking on curved surfaces

