# Veterinary Diagnostic Aid

**ID:** M027
**Category:** Professional Domain
**Tier:** Pro ($149.99)
**APIs:** Camera, Core ML, NLP, Speech Recognition, File System
**Offline:** Full

---

## One-Liner

An evidence-based veterinary clinical decision support system providing differential diagnosis, drug dosing by species and weight, toxicology reference, and case documentation—designed for the unique challenges of veterinary medicine across multiple species.

## Problem

Veterinarians treat dozens of species with vastly different pharmacokinetics, diseases, and normal values. Drug dosing errors are common due to species-specific calculations. Rural and emergency vets lack specialist access. Existing veterinary software is desktop-bound and expensive. Mobile references are fragmented—vets juggle multiple apps and books.

## Solution

A unified veterinary clinical support platform with species-specific differential diagnosis, multi-species drug formulary with weight-based dosing, toxicology database, normal values by species, and clinical case documentation—all working offline for field and emergency situations.

## Target User

- General practice veterinarians seeking clinical support
- Emergency veterinarians needing quick drug references
- Large animal/equine practitioners in field settings
- Exotic animal veterinarians with uncommon species
- Veterinary technicians supporting clinical decisions
- Veterinary students on clinical rotations
- Rural veterinarians with limited specialist access
- Shelter veterinarians handling high volume

## Key Features

- **Multi-Species Differential**: Input symptoms, select species, get ranked differentials
- **Drug Formulary**: 1,500+ drugs with species-specific dosing and contraindications
- **Weight-Based Calculator**: Instant dose calculations with concentration options
- **Toxicology Database**: Common toxins by species with treatment protocols
- **Normal Values Reference**: Lab values, vitals, by species/breed/age
- **Clinical Calculator Suite**: GFR, fluid rates, anesthesia protocols, nutrition
- **Case Documentation**: SOAP notes with species-specific templates
- **Image Library**: Dermatology, radiology, cytology reference images
- **Drug Interaction Checker**: Species-aware interaction alerts
- **Anesthesia Protocols**: Weight-based protocols by species and procedure
- **CPR Protocols**: RECOVER guidelines with drug doses by weight
- **Emergency Drug Sheet**: Pre-calculated emergency doses for current patient

## Monetization

**Model:** Subscription
**Price:** $149.99/year (individual) / $399/year (clinic 5 users)
**Strategy:**
- Veterinary conference exhibition
- Veterinary school partnerships
- State VMA sponsorships
- Veterinary CE integration
- Emergency hospital group licensing

## Visualization Concept

```
┌─────────────────────────────────────────────────────────────────┐
│  🐾 Vet Diagnostic Aid      Quick Access       📚 References   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  CURRENT PATIENT                                                │
│  ─────────────────────────────────────────                       │
│  Species: Canine │ Breed: Labrador │ Weight: 32.5 kg           │
│  Age: 7 years │ Sex: MN                                         │
│  [Change patient] [Emergency drugs for this patient]            │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  💊 DRUG LOOKUP: Metronidazole                                  │
│  ─────────────────────────────────────────                       │
│  CANINE DOSING:                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ Indication: Anaerobic infections, Giardia, IBD            │  │
│  │                                                            │  │
│  │ Standard: 10-15 mg/kg PO BID                              │  │
│  │ For THIS PATIENT (32.5 kg):                               │  │
│  │   → 325-487.5 mg PO BID                                   │  │
│  │   → Using 500mg tablets: ½-1 tablet BID                   │  │
│  │                                                            │  │
│  │ Giardia protocol: 25 mg/kg PO BID x 5-7 days              │  │
│  │ For THIS PATIENT: 812.5 mg (1.5 tablets) PO BID           │  │
│  │                                                            │  │
│  │ ⚠️ CAUTIONS:                                              │  │
│  │ • Neurotoxicity at high doses (>60 mg/kg/day)             │  │
│  │ • Reduce dose with hepatic disease                        │  │
│  │ • GI upset common - give with food                        │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  🔍 DIFFERENTIAL DIAGNOSIS                                      │
│  ─────────────────────────────────────────                       │
│  Symptoms: vomiting, diarrhea, lethargy │ Species: Canine      │
│                                                                  │
│  TOP DIFFERENTIALS:                                             │
│  1. Gastroenteritis (dietary/infectious)     ████████████ 85%  │
│  2. Pancreatitis                             ████████░░░░ 68%  │
│  3. Foreign body obstruction                 ██████░░░░░░ 52%  │
│  4. Parvovirus (if unvaccinated)            █████░░░░░░░ 45%  │
│  5. Toxin ingestion                         ████░░░░░░░░ 38%  │
│                                                                  │
│  [Add symptoms] [View diagnostic workup] [Toxin check]         │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│  [💊 Drugs]  [🔍 DDx]  [☠️ Toxins]  [📊 Values]  [📝 Notes]    │
└─────────────────────────────────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- Speech Framework: Voice-activated drug lookup
- Core ML: Differential diagnosis ranking
- Camera: Patient photo documentation
- File System: Drug database and references
- NaturalLanguage: Symptom extraction from notes

**Offline Strategy:**
Complete drug database and references stored locally (~1GB). All calculations run on-device. Works fully offline for field and emergency situations. Updates via differential sync.

**Data Handling:**
- Drug database: Local encrypted storage
- Patient data: Local only, clinic-controlled
- Case notes: Encrypted, exportable to PIMS
- Never transmit patient or client data
- VCPR compliance by architecture

## Competition & Differentiation

**Existing Solutions:**
- Plumb's Veterinary Drugs (app, drug-only, expensive)
- VetGRAM (dated interface)
- Veterinary Partner (consumer-focused)
- VIN (requires membership, web-based)

**Our Edge:**
- Unified platform (not separate drug/DDx/calculator apps)
- Weight-based calculations with patient context
- Multi-species coverage including exotic
- Offline operation for field and emergencies
- Modern mobile-first interface
- Emergency protocols integrated

## Development Estimate

**Complexity:** Very High
**Timeline:** 22-28 weeks
**Key Challenges:**
- Veterinary drug database completeness and accuracy
- Species-specific dosing verification
- Multi-species differential diagnosis model
- Keeping drug information current (formulary changes)
- Exotic species coverage
- Clinical validation with veterinarians

---

## Council Assessment

**🏗️ ARCHITECT:** "Drug database is the core asset—consider licensing from Plumb's or building with veterinary pharmacologist oversight. Differential diagnosis by species is complex but achievable with good training data."

**🔮 ORACLE:** "Veterinary profession has embraced mobile tools. One-health initiatives increase vet scope. Emergency and rural vets have acute need. The consolidation of corporate vet practices creates procurement channels."

**⚖️ CRITIC:** "Drug dosing accuracy is critical—errors can be fatal. Need extensive verification of calculations. Multi-species coverage means broad surface area for errors. Start with common species, expand carefully."

**🎨 CREATOR:** "The 'for THIS patient' calculations are the key value moment. Emergency drug sheet generation is powerful. Clean interface differentiates from dated competitors."

**🛡️ GUARDIAN:** "Drug dosing information must be verified by veterinary professionals. Include liability disclaimers. Consider veterinary pharmacist review process for database updates."

**Verdict:** GO — Clear professional need, validated market, mobile-first is differentiated
