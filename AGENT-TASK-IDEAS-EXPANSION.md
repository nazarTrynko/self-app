# AGENT TASK: Ideas Audit & Expansion to 100

## MISSION

Transform the app ideas collection from 81 mediocre ideas to 100 masterpiece-quality, highly monetizable app specifications. Quality over quantity - remove weak ideas, create strong new ones, elevate all remaining.

---

## CURRENT STATE

```
Location: /Users/nazartrynko/self-app/landings/ideas/
Ideas: 81 documented (001-081)
Categories with content: 14
Empty categories: 6 (15-home-life, 16-security, 17-accessibility, 18-developer, 19-niche-pro, 20-experimental)
Orphaned: 21-platforms/100-proven.md (not in data file)
```

---

## PHASE 1: REMOVE WEAK IDEAS

### Removal Criteria (must meet 2+ to remove)

| Red Flag | Description |
|----------|-------------|
| Commoditized | 10+ quality free alternatives exist |
| No Premium Angle | No clear reason to pay vs free |
| Low Price Ceiling | Max viable price under $3 |
| Saturated | Market leader has >10M users |
| No Retention | One-use, no recurring need |

### IDEAS TO DELETE (files to remove)

```bash
# Execute these deletions:
rm landings/ideas/06-health-body/037-water-tracker.md
rm landings/ideas/11-gaming/066-puzzle-daily.md
rm landings/ideas/11-gaming/067-word-games.md
rm landings/ideas/11-gaming/068-chess-trainer.md
rm landings/ideas/11-gaming/069-trivia-master.md
rm landings/ideas/11-gaming/070-brain-age.md
rm landings/ideas/12-communication/073-anniversary-reminder.md
rm landings/ideas/13-finance/079-tip-calculator.md
rm landings/ideas/14-travel/080-packing-list.md
rm landings/ideas/14-travel/081-travel-journal.md
```

**Total removals: 10 ideas**

After removal: 71 ideas remain. Need 29 new ideas to reach 100.

---

## PHASE 2: UPDATE TEMPLATE

Update `landings/ideas/_template.md` to include these NEW sections at the end:

```markdown
## Why This Wins

**Unique Value:** [One sentence on why this beats free alternatives]
**Price Anchor:** [What else costs this much that provides similar value?]
**Viral Hook:** [How do users spread the word?]

## Revenue Projection

| Scenario | Monthly Revenue | Downloads/Month | Conversion |
|----------|-----------------|-----------------|------------|
| Conservative | $X | Y | Z% |
| Target | $X | Y | Z% |
| Optimistic | $X | Y | Z% |
```

---

## PHASE 3: CREATE NEW IDEAS

### Distribution Plan

| Category | Folder | New Ideas | IDs |
|----------|--------|-----------|-----|
| Home Life | 15-home-life | 5 | 082-086 |
| Security | 16-security | 5 | 087-091 |
| Accessibility | 17-accessibility | 4 | 092-095 |
| Developer | 18-developer | 6 | 096-101 |
| Niche Pro | 19-niche-pro | 5 | 102-106 |
| Experimental | 20-experimental | 4 | 107-110 |

**Total new: 29 ideas (reaching exactly 100)**

---

### NEW IDEAS SPECIFICATIONS

#### 15-HOME-LIFE (5 ideas)

**082 - Home Inventory Pro** ($15)
- Photograph and catalog all possessions
- Insurance documentation ready
- Replacement value tracking
- Room-by-room organization
- Receipt/warranty storage
- Target: Homeowners, renters with valuables

**083 - Maintenance Schedule** ($10)
- Track home maintenance tasks
- Seasonal reminders (HVAC, gutters, etc.)
- Service history logging
- Contractor contact storage
- Cost tracking over time
- Target: Homeowners wanting to protect investment

**084 - Utility Monitor** ($8)
- Manual entry of utility bills
- Usage trend visualization
- Cost comparison month-over-month
- Budget alerts
- Seasonal pattern detection
- Target: Cost-conscious homeowners

**085 - Pantry Manager** ($6)
- Scan barcodes to add items
- Expiration date tracking
- Shopping list generation
- Waste reduction insights
- Recipe suggestions from inventory
- Target: Families, meal planners

**086 - Plant Care** ($8)
- Indoor plant tracking
- Watering schedules by plant type
- Light requirement reminders
- Growth photo journal
- Problem diagnosis guide
- Target: Plant parents, indoor gardeners

---

#### 16-SECURITY (5 ideas)

**087 - Privacy Audit** ($12)
- Analyze app permissions on device
- Risk scoring for each app
- Permission change alerts
- Data exposure report
- Recommended actions
- Target: Privacy-conscious users

**088 - Secure Notes** ($10)
- Military-grade AES-256 encryption
- Biometric unlock only
- No cloud, no sync
- Self-destruct options
- Decoy vault feature
- Target: Journalists, activists, privacy advocates

**089 - Network Scanner** ($15)
- See all devices on your network
- Unknown device alerts
- Port scanning
- Security vulnerability check
- Historical connection log
- Target: Home network admins, security pros

**090 - Metadata Scrubber** ($8)
- Remove EXIF from photos
- Strip document metadata
- Batch processing
- Before/after comparison
- Auto-scrub on share
- Target: Privacy advocates, whistleblowers

**091 - Breach Checker** ($10)
- Offline haveibeenpwned database
- Check passwords without sending to cloud
- Breach history for accounts
- Strength scoring
- Remediation guidance
- Target: Security-conscious users

---

#### 17-ACCESSIBILITY (4 ideas)

**092 - Voice Magnifier** ($12)
- Real-time voice amplification
- Background noise reduction
- Directional audio focus
- Conversation transcription
- Works with any headphones
- Target: Hard of hearing, elderly

**093 - Text Enlarger** ($8)
- Camera-based text magnification
- High contrast modes
- Freeze frame for reading
- Color inversion options
- Reading guide overlay
- Target: Low vision users

**094 - Colorblind Assist** ($10)
- Real-time color identification
- Camera overlay filters
- Color naming on tap
- Palette simulation
- Accessibility checker for designers
- Target: Colorblind individuals, designers

**095 - Speech Practice** ($15)
- Speech therapy exercises
- Pronunciation feedback
- Progress tracking
- Customizable word lists
- Therapist export reports
- Target: Speech therapy patients, ESL learners

---

#### 18-DEVELOPER (6 ideas)

**096 - Regex Playground** ($10)
- Live regex testing
- Visual match highlighting
- Pattern explanation in plain English
- Common regex library
- Test case saving
- Target: Developers, data analysts

**097 - JSON Surgeon** ($12)
- View/edit JSON files
- Path navigation
- Validation and formatting
- JSONPath queries
- Transform and export
- Target: Backend developers, API users

**098 - API Mocker** ($15)
- Create mock API responses
- Run local mock server
- Response templates
- Delay simulation
- Request logging
- Target: Frontend developers, QA engineers

**099 - SQLite Studio** ($12)
- Browse SQLite databases
- Run SQL queries
- Schema visualization
- Data export (CSV, JSON)
- Query history
- Target: Mobile developers, data analysts

**100 - Log Analyzer** ($10)
- Parse log file formats
- Pattern matching
- Timeline visualization
- Error highlighting
- Filter and search
- Target: DevOps, backend developers

**101 - HTTP Inspector** ($12)
- Capture HTTP traffic
- Request/response viewer
- Header analysis
- Timing breakdown
- Export as cURL
- Target: API developers, QA engineers

---

#### 19-NICHE-PRO (5 ideas)

**102 - Real Estate Calculator** ($20)
- Cap rate, ROI, cash-on-cash
- Mortgage comparison
- Rental income projector
- Deal analyzer
- PDF reports for investors
- Target: Real estate investors, agents

**103 - Fitness Assessor** ($25)
- Professional client assessments
- Body composition estimates
- Progress tracking
- Workout programming
- Client management
- Target: Personal trainers, fitness coaches

**104 - Legal Timer** ($25)
- Billable hours tracking
- Matter/client organization
- 6-minute increment rounding
- Invoice generation
- Trust account tracking
- Target: Lawyers, paralegals

**105 - Wine Cellar** ($18)
- Wine inventory management
- Tasting notes
- Drinking window tracking
- Valuation estimates
- Label scanning
- Target: Wine collectors, sommeliers

**106 - Auction Tracker** ($15)
- Collectibles inventory
- Value tracking (cards, coins, art)
- Condition grading
- Market price lookup
- Insurance documentation
- Target: Collectors, antique dealers

---

#### 20-EXPERIMENTAL (4 ideas)

**107 - Dream Journal AI** ($12)
- Voice recording on wake
- Offline transcription
- Pattern analysis
- Symbol dictionary
- Dream statistics
- Target: Dream enthusiasts, therapists

**108 - Habit DNA** ($15)
- Genetic habit formation
- Personality-based strategies
- Micro-habit chains
- Failure pattern analysis
- Adaptive coaching
- Target: Self-improvement enthusiasts

**109 - Emotion Tracker** ($10)
- Granular emotion logging
- Trigger identification
- Pattern visualization
- Mood prediction
- Therapy export
- Target: Mental health conscious, therapy patients

**110 - Life Dashboard** ($20)
- Unified life metrics
- Custom KPI tracking
- Goal progress visualization
- Weekly/monthly reviews
- Trend analysis
- Target: Quantified self enthusiasts

---

## PHASE 4: INTEGRATE PLATFORMS

Move and renumber the existing proven.md:

```bash
# Rename 100-proven.md to fit numbering
mv landings/ideas/21-platforms/100-proven.md landings/ideas/21-platforms/111-proven.md
```

Update the ID inside the file from 100 to 111.

---

## PHASE 5: UPDATE ideas-data.js

Replace the entire content of `landings/ideas/ideas-data.js` with the complete new structure including:

1. All original categories (01-14) minus deleted ideas
2. New categories (15-21) with new ideas
3. Correct idea counts and file references

The new structure should have:
- 21 categories total
- 100 ideas total
- Proper ID sequencing

---

## PHASE 6: UPDATE index.html

Update the `CATEGORY_GROUPS` constant in `landings/ideas/index.html`:

```javascript
const CATEGORY_GROUPS = [
    {
        id: 'tools',
        name: 'Tools & Sensors',
        icon: '🛠️',
        subcategories: ['01-sensor-tools', '02-camera-vision', '03-audio-sound']
    },
    {
        id: 'intelligence',
        name: 'AI & Privacy',
        icon: '🧠',
        subcategories: ['04-offline-ai', '05-data-vaults', '16-security']
    },
    {
        id: 'life',
        name: 'Life & Wellness',
        icon: '💚',
        subcategories: ['06-health-body', '07-productivity', '13-finance', '15-home-life']
    },
    {
        id: 'creative',
        name: 'Creative & Learning',
        icon: '✨',
        subcategories: ['08-creative', '10-education', '17-accessibility']
    },
    {
        id: 'professional',
        name: 'Professional',
        icon: '💼',
        subcategories: ['09-professional', '18-developer', '19-niche-pro']
    },
    {
        id: 'frontier',
        name: 'Frontier',
        icon: '🚀',
        subcategories: ['11-gaming', '12-communication', '14-travel', '20-experimental', '21-platforms']
    }
];
```

---

## MASTERPIECE TEMPLATE

Every new idea file MUST follow this exact structure:

```markdown
# [App Name]

**ID:** [XXX]
**Category:** [Category Name]
**Tier:** Micro ($1-5) | Premium ($10-50) | Pro ($50+)
**APIs:** [List of mobile APIs used]
**Offline:** Full | Partial | Sync-optional

---

## One-Liner

[Compelling pitch in one sentence - must create desire]

## Problem

[Specific, relatable pain point. Be concrete, not abstract.]

## Solution

[How this app solves it. Focus on outcomes, not features.]

## Target User

- [Specific persona 1 - job title or life situation]
- [Specific persona 2]
- [Specific persona 3]
- [Specific persona 4]

## Key Features

- [Feature 1 - outcome focused]
- [Feature 2]
- [Feature 3]
- [Feature 4]
- [Feature 5]
- [Feature 6]
- [Feature 7]

## Monetization

**Model:** One-time purchase | Subscription | Freemium
**Price:** $X.XX
**Strategy:** [Specific channels - subreddits, forums, communities, partnerships]

## Visualization Concept

```
┌─────────────────────────────────────┐
│  [App Name]              [Icons]    │
├─────────────────────────────────────┤
│                                     │
│     [Main UI element]               │
│                                     │
│     [Key information display]       │
│                                     │
├─────────────────────────────────────┤
│  [Secondary info]                   │
├─────────────────────────────────────┤
│  [Action buttons]                   │
└─────────────────────────────────────┘
```

## Technical Notes

**Primary APIs:**
- [API 1]: [Specific purpose]
- [API 2]: [Specific purpose]
- [API 3]: [Specific purpose]

**Offline Strategy:**
[Detailed explanation of how data is stored, what works offline]

**Data Handling:**
[Privacy approach, encryption, what data is collected]

## Competition & Differentiation

**Existing Solutions:** [Name 2-3 real competitors with their weakness]
**Our Edge:** [3 specific advantages we have]

## Development Estimate

**Complexity:** Low | Medium | High
**Timeline:** X weeks
**Key Challenges:** [2-3 technical hurdles to solve]

## Why This Wins

**Unique Value:** [One sentence on why this beats free alternatives]
**Price Anchor:** [What else costs this much that provides similar value?]
**Viral Hook:** [How do users spread the word?]

## Revenue Projection

| Scenario | Monthly Revenue | Downloads/Month | Conversion |
|----------|-----------------|-----------------|------------|
| Conservative | $XXX | XXX | X% |
| Target | $X,XXX | X,XXX | X% |
| Optimistic | $X,XXX | XX,XXX | X% |
```

---

## EXECUTION CHECKLIST

Execute in this exact order:

### Step 1: Delete weak ideas (10 files)
- [ ] Delete 037-water-tracker.md
- [ ] Delete 066-puzzle-daily.md
- [ ] Delete 067-word-games.md
- [ ] Delete 068-chess-trainer.md
- [ ] Delete 069-trivia-master.md
- [ ] Delete 070-brain-age.md
- [ ] Delete 073-anniversary-reminder.md
- [ ] Delete 079-tip-calculator.md (Note: it's called 079-tip-calculator.md but contains "Split Check")
- [ ] Delete 080-packing-list.md
- [ ] Delete 081-travel-journal.md

### Step 2: Update template
- [ ] Add "Why This Wins" section to _template.md
- [ ] Add "Revenue Projection" section to _template.md

### Step 3: Create new idea files (29 files)
- [ ] Create 15-home-life/082-home-inventory.md
- [ ] Create 15-home-life/083-maintenance-schedule.md
- [ ] Create 15-home-life/084-utility-monitor.md
- [ ] Create 15-home-life/085-pantry-manager.md
- [ ] Create 15-home-life/086-plant-care.md
- [ ] Create 16-security/087-privacy-audit.md
- [ ] Create 16-security/088-secure-notes.md
- [ ] Create 16-security/089-network-scanner.md
- [ ] Create 16-security/090-metadata-scrubber.md
- [ ] Create 16-security/091-breach-checker.md
- [ ] Create 17-accessibility/092-voice-magnifier.md
- [ ] Create 17-accessibility/093-text-enlarger.md
- [ ] Create 17-accessibility/094-colorblind-assist.md
- [ ] Create 17-accessibility/095-speech-practice.md
- [ ] Create 18-developer/096-regex-playground.md
- [ ] Create 18-developer/097-json-surgeon.md
- [ ] Create 18-developer/098-api-mocker.md
- [ ] Create 18-developer/099-sqlite-studio.md
- [ ] Create 18-developer/100-log-analyzer.md
- [ ] Create 18-developer/101-http-inspector.md
- [ ] Create 19-niche-pro/102-real-estate-calc.md
- [ ] Create 19-niche-pro/103-fitness-assessor.md
- [ ] Create 19-niche-pro/104-legal-timer.md
- [ ] Create 19-niche-pro/105-wine-cellar.md
- [ ] Create 19-niche-pro/106-auction-tracker.md
- [ ] Create 20-experimental/107-dream-journal.md
- [ ] Create 20-experimental/108-habit-dna.md
- [ ] Create 20-experimental/109-emotion-tracker.md
- [ ] Create 20-experimental/110-life-dashboard.md

### Step 4: Handle platforms
- [ ] Rename 100-proven.md to 111-proven.md
- [ ] Update ID inside proven.md from 100 to 111

### Step 5: Update ideas-data.js
- [ ] Remove deleted ideas from data
- [ ] Add all new categories (15-21)
- [ ] Add all new ideas to appropriate categories
- [ ] Verify total count equals 100

### Step 6: Update index.html
- [ ] Update CATEGORY_GROUPS with 6 groups
- [ ] Ensure all 21 subcategories are included

### Step 7: Verify
- [ ] Count total ideas (should be 100)
- [ ] Open in browser, verify all categories appear
- [ ] Click through to verify ideas load

---

## QUALITY STANDARDS

Every idea file must:

1. **Have a specific target user** - Not "everyone" or "people who..."
2. **Name real competitors** - Not "other apps" or "existing solutions"
3. **Price above $5** - Micro-pricing doesn't work
4. **Include ASCII visualization** - Must show the UI concept
5. **Specify acquisition channels** - Specific subreddits, forums, communities
6. **Have offline capability** - This is core to the brand
7. **Include revenue projections** - Make the money path obvious

---

## NOTES FOR EXECUTING AGENT

1. **Be thorough** - Each idea file should be 80-120 lines
2. **Be specific** - No vague language like "various features" or "multiple options"
3. **Be realistic** - Development timelines should match complexity
4. **Be creative** - ASCII visualizations should show actual UI, not placeholders
5. **Be consistent** - Follow the template exactly, same section order every time

This task should result in:
- 10 deleted files
- 29 new idea files
- 1 renamed file
- 1 updated template
- 1 regenerated ideas-data.js
- 1 updated index.html

Final count: **100 masterpiece-quality app ideas**

---

*Task created for Claude/Cursor agent execution*

