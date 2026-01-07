# API Opportunity Map (Web + Mobile)

This document is a **technical “palette”**: the most monetizable **mobile capabilities** and **web APIs** you can combine (or use standalone) to build product ideas.

It’s grounded in your existing 100 ideas library (see “Ground truth from your ideas” below).

---

## Ground truth from your ideas (Phase 0: Ingestion snapshot)

- **Ideas parsed**: 100 (`landings/ideas/**.md`, excluding `_template.md`)
- **Categories**: 21
- **Most common mobile capabilities already used** (canonicalized):
  - **On-device Storage** (80)
  - **Camera** (37)
  - **Notifications** (25)
  - **On-device ML** (15)
  - **Audio** (13)
  - **Haptics** (12)
  - **Accelerometer** (10), **Microphone** (10)
  - **Biometrics** (9), **Clipboard** (9)
  - **GPS** (8), **Gyroscope** (7)
  - **Graphics/Canvas** (6), **Sharing** (6)
  - **Calendar** (5), **Contacts** (5), **Web Crypto** (5)

Artifacts (machine-readable):
- `.cursor_agent_artifacts/ideas_index.json`
- `.cursor_agent_artifacts/apis_normalized.json`
- `.cursor_agent_artifacts/category_api_summary.json`

---

## Mobile API “palette” (what to build magic with)

### Sensors & context (high “mobile-only” defensibility)
- **Motion**: accelerometer, gyroscope, step counter, pedometer
- **Location**: GPS, geofencing, significant location change
- **Orientation & environment**: magnetometer/compass, barometer/altimeter, ambient light
- **Proximity**: proximity sensor, ultrasonic (limited), **UWB** (supported devices)
- **Health**: HealthKit / Health Connect (sleep, HR, workouts, mindfulness)

### Camera & vision (high conversion, strong premium)
- **Camera capture**: autofocus, burst, macro, torch control
- **Vision pipeline**: QR/barcode, document edge detect, perspective correction
- **On-device OCR**: VisionKit / ML Kit / Tesseract
- **Redaction & privacy**: face blur, PII detection, background removal
- **AR**: ARKit/ARCore, plane detection, measurement, anchors
- **Depth/LiDAR** (supported devices): room scan, object dimensions

### Audio (sticky, frequent use, good subscriptions)
- **Recording & analysis**: amplitude, FFT/spectrogram, pitch, BPM/key, voice activity detect
- **Speech**: speech-to-text, diarization (often web), text-to-speech

### OS integrations (makes products feel “native” and charge more)
- **Widgets / Lock screen widgets**
- **Shortcuts/App Intents / Siri**
- **Share extensions** (scan→save, highlight→send, “save to vault”)
- **Files integration** (import/export), document providers
- **Background tasks** (scheduled sync, processing queues)
- **Notifications**: critical alerts, action buttons, summaries

### Security & trust (lets you price higher)
- **Biometrics** + secure enclave keystore
- **On-device encryption** (e.g., WebCrypto-like primitives natively)
- **Passkeys / device-bound auth**

### Connectivity (bridge to the real world)
- **Bluetooth LE** (sensors, beacons, wearables)
- **NFC** (tags, ID-lite flows, device pairing)
- **Local network discovery** (mDNS/Bonjour), Wi‑Fi info (platform-limited)

---

## Web API “palette” (the monetization multipliers)

### Payments, billing, and tax (turn utility into business)
- **Payments**: Stripe, Paddle, Adyen
- **Subscriptions & invoices**: Stripe Billing, Chargebee
- **Tax/VAT**: Stripe Tax, TaxJar

### Identity, auth, and trust
- **Auth**: OAuth (Google/Microsoft), Auth0/Clerk
- **Passkeys / WebAuthn** (web side)
- **KYC / verification** (if needed): Persona, Veriff

### Messaging & comms
- **SMS/WhatsApp/voice**: Twilio, Vonage
- **Email**: SendGrid, Postmark
- **Transactional + templates**: customer comms pipelines

### Productivity ecosystem connectors (high WTP B2B)
- **Calendar**: Google Calendar, Microsoft Graph
- **Email + inbox automation**: Microsoft Graph / Gmail
- **Docs & storage**: Google Drive, Dropbox, OneDrive
- **Team chat**: Slack, Teams, Discord

### Business systems (where money lives)
- **Accounting**: QuickBooks, Xero
- **CRM**: HubSpot, Salesforce
- **E‑sign**: Dropbox Sign, DocuSign

### Commerce & logistics
- **Stores/POS**: Shopify, Square
- **Shipping**: Shippo, EasyPost
- **Address validation**: Google, Loqate

### Maps, places, travel
- **Maps/places**: Google Maps, Mapbox
- **Weather**: OpenWeather, Tomorrow.io

### Finance and market data
- **Bank connections**: Plaid
- **FX**: Open Exchange Rates
- **Market data**: Polygon, Alpha Vantage

### AI and content intelligence
- **LLM**: OpenAI, Anthropic, Gemini
- **Speech**: Deepgram, AssemblyAI (STT), ElevenLabs (TTS)
- **Vision**: OCR/labels (cloud) if you choose hybrid
- **Vector search**: Pinecone, Weaviate, pgvector

### Backend primitives (boring, but unlock “pro”)
- **Object storage**: S3/R2
- **Queues**: SQS, Cloud Tasks
- **Analytics**: PostHog, Amplitude
- **Error monitoring**: Sentry
- **Push**: FCM/APNs (server-driven)

---

## High-leverage API combos (turn “good utilities” into products)

Each combo below is a reusable “recipe” you can plug into many of your existing ideas.

1. **Camera + OCR + On-device Storage + Web Crypto + Biometrics**
   - Product: privacy-first “scan-to-vault” for professionals
   - Monetization: premium one-time + “secure sync” subscription add-on

2. **GPS + Camera + PDF + e‑sign + payments**
   - Product: “proof of work” + signed delivery/job completion
   - Monetization: per-seat Pro + per-document fee

3. **Camera (barcode) + inventory + Shopify/Square + CSV export**
   - Product: micro-warehouse scanner for small shops
   - Monetization: subscription + usage-based API calls

4. **Camera (receipts) + OCR + QuickBooks/Xero + rules engine**
   - Product: receipt-to-books autoposter
   - Monetization: monthly subscription (high WTP)

5. **Microphone + Audio analysis + compliance rules dataset**
   - Product: workplace noise compliance kit
   - Monetization: Pro tier (reports, audits, team sharing)

6. **HealthKit/Health Connect + notifications + personalization ML**
   - Product: hyper-specific health micro-coach (sleep/posture/breathing)
   - Monetization: subscription

7. **Screen Time/Usage + calendar + focus modes + coaching**
   - Product: attention “firewall” with measurable outcomes
   - Monetization: subscription + team plan

8. **Offline-first core + optional cloud sync (S3/R2) + sharing links**
   - Product: “offline by default, share when needed” for any vault/workflow tool
   - Monetization: base purchase + sync/storage add-on

9. **AR measurement + quote builder + payment links**
   - Product: instant estimate generator for trades
   - Monetization: Pro price + per-quote fee

10. **Bluetooth LE + on-device storage + dashboards**
   - Product: lightweight companion apps for niche hardware (gyms, labs, makers)
   - Monetization: B2B licensing or per-device activation

---

## 20 monetizable “masterpiece candidates” (API-driven)

These are intentionally **API-forward**: each is a clear API bundle with a direct business model.

1. **DocVault Pro** — Camera + OCR + Crypto + Biometrics + (optional) S3 sync  
   Monetization: $19.99 + $4.99/mo secure sync.

2. **JobProof** — GPS + Camera + timestamping + PDF + e‑sign + Stripe  
   Monetization: $29/mo per crew (B2B).

3. **ReceiptPilot** — Camera OCR + QuickBooks/Xero + rules + audit trail  
   Monetization: $19–49/mo.

4. **ARQuote** — AR measure + photo log + quote templates + payment link  
   Monetization: $49–99/mo per trade.

5. **Inventory Snap** — Barcode scan + Shopify/Square + offline mode + export  
   Monetization: $15/mo store.

6. **Privacy Checkup Agent** — permissions audit + trackers DB + recommendations  
   Monetization: $9.99 one-time + $2/mo “new tracker alerts”.

7. **Offline Translator Pro** — camera OCR + STT/TTS + offline packs + payments  
   Monetization: base app + paid language packs.

8. **Noise Compliance Kit** — mic analysis + geotag + report PDFs + team sharing  
   Monetization: Pro subscription.

9. **Delivery Proof Pro** — camera + signature + contact sync + PDF + messaging  
   Monetization: $25/mo driver.

10. **Field Forms Sync** — offline forms + photo evidence + calendar + CRM export  
    Monetization: $15–50/mo.

11. **Bird ID Journal** — mic ML + offline field guide + eBird-style web API sync  
    Monetization: $12.99 + premium packs.

12. **Plant Care Autopilot** — camera ML + reminders + seasonal rules by location  
    Monetization: subscription + affiliate commerce.

13. **Home Maintenance Ledger** — calendar + reminders + doc vault + contractor share links  
    Monetization: $29 lifetime + $3/mo family sync.

14. **Wi‑Fi Inspector** — local network scans + report export + best-practice checklists  
    Monetization: $49 one-time + “fleet mode” subscription.

15. **Meeting Prep Copilot** — calendar + email (Graph/Gmail) + note templates + action export  
    Monetization: $10–20/mo.

16. **Invoice + Estimate Suite** — client CRM + invoicing + payments + templates  
    Monetization: $19–39/mo.

17. **Focus Score** — Screen Time + notifications + goals + coaching loops  
    Monetization: $4.99/mo + team plan.

18. **Secure Contact Backup** — contacts + encryption + “restore kit”  
    Monetization: $9.99 + optional sync.

19. **Portable QA Toolkit** — HTTP client + JSON viewer + auth flows + OpenAPI import  
    Monetization: $9.99 + Pro features (collections sync).

20. **Identity-lite NFC Tags** — NFC + encrypted payloads + emergency card + vault  
    Monetization: app + physical tag bundle.

