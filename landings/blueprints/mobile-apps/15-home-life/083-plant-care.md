# Plant Care

**ID:** 083
**Category:** Home Life
**Tier:** Premium ($8)
**APIs:** Camera, Notifications, Local Storage
**Offline:** Full

---

## One-Liner

Never kill a plant again—personalized watering schedules and care reminders for every plant in your home.

## Problem

People love plants but kill them from overwatering, underwatering, or forgetting care routines. Generic advice doesn't account for specific plant needs, pot size, or home conditions.

## Solution

Add your plants (photo + identification), and get customized care schedules based on plant type, pot size, light conditions, and season. Smart reminders adapt to your actual care patterns.

## Target User

- Plant parents (especially new ones)
- People who've killed plants before
- Indoor gardening enthusiasts

## Key Features

- Plant identification via camera
- Custom watering schedules by plant type
- Light requirement guidance
- Seasonal care adjustments
- Care history tracking
- Multi-plant dashboard

## Monetization

**Model:** One-time purchase
**Price:** $7.99
**Strategy:** Plant parent communities, gardening subreddits, plant shop partnerships

## Visualization Concept

```
┌─────────────────────────────────────┐
│  🌿 Plant Care           [+ Plant]  │
├─────────────────────────────────────┤
│  Today's Tasks                      │
│  ┌─────────────────────────────┐    │
│  │ 💧 Water: Monstera, Pothos  │    │
│  │ 🌞 Rotate: Fiddle Leaf      │    │
│  └─────────────────────────────┘    │
│                                     │
│  My Plants (8)                      │
│  🪴🪴🪴🪴🪴🪴🪴🪴                    │
│                                     │
│  [View Schedule] [Plant Health]     │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Camera API: Plant photos
- Notifications: Care reminders
- CoreML: Plant identification

**Offline Strategy:**
Full offline operation. Notification scheduling works offline.

**Data Handling:**
All plant data stays on device. No cloud required.

## Competition & Differentiation

**Existing Solutions:** Planta, Vera, Greg
**Our Edge:** One-time payment vs subscription, simpler UX, offline-first

## Development Estimate

**Complexity:** Medium
**Timeline:** 5 weeks
**Key Challenges:** Accurate plant identification, smart schedule algorithms

