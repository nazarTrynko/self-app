# Mesh Chat

**ID:** 071
**Category:** Communication
**Tier:** Micro ($5)
**APIs:** Bluetooth, WiFi Direct, File System
**Offline:** Full

---

## One-Liner

Peer-to-peer messaging via Bluetooth and WiFi Direct—communicate when there's no internet or cell service.

## Problem

Disasters, festivals, remote areas, and underground locations have no connectivity. Groups need to communicate but all messaging apps require internet. Emergency communication is impossible.

## Solution

A mesh messaging app using device-to-device connections (Bluetooth, WiFi Direct) to send messages without any internet—perfect for emergencies, events, and off-grid situations.

## Target User

- Festival and concert attendees
- Hikers and outdoor groups
- Emergency preparedness planners
- People in areas with poor connectivity
- Protest organizers

## Key Features

- Bluetooth mesh messaging
- WiFi Direct for larger groups
- Message relay through nearby devices
- Encrypted communications
- Group creation without internet
- Location sharing (GPS only)
- Offline file/image sharing
- Emergency broadcast mode

## Monetization

**Model:** One-time purchase
**Price:** $4.99
**Strategy:** Prepper communities, festival-goer forums, hiking groups, emergency preparedness channels

## Visualization Concept

```
┌─────────────────────────────────────┐
│  Mesh Chat             📶  🔒  ⚙️  │
├─────────────────────────────────────┤
│  NETWORK: 7 devices in range        │
│  Mode: Bluetooth Mesh               │
├─────────────────────────────────────┤
│  GROUP: Festival Squad              │
│                                     │
│  Sarah (direct) 2:34 PM             │
│  "Meet at the food trucks?"         │
│                                     │
│  Mike (2 hops) 2:35 PM              │
│  "On my way, near stage B"          │
│                                     │
│  You 2:36 PM                        │
│  "I'm at the entrance, heading      │
│   to food court now"                │
│                                     │
│  ┌─────────────────────────────┐    │
│  │ Type message...          📎│    │
│  └─────────────────────────────┘    │
├─────────────────────────────────────┤
│  📍 Share Location │ 🚨 Emergency  │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Bluetooth API: Device discovery and messaging
- WiFi Direct: Higher bandwidth local networking
- Geolocation: GPS-only location sharing
- Web Crypto: End-to-end encryption

**Offline Strategy:**
100% offline by design. All communication peer-to-peer. Messages stored locally.

**Data Handling:**
Messages encrypted. No server involvement. All data stays on devices in the mesh.

## Competition & Differentiation

**Existing Solutions:** Bridgefy (now enterprise focused), FireChat (discontinued)
**Our Edge:** Still available, focused on consumer use, encrypted, simple UX

## Development Estimate

**Complexity:** High
**Timeline:** 10-12 weeks
**Key Challenges:** Reliable mesh routing, cross-platform Bluetooth, message delivery confirmation






