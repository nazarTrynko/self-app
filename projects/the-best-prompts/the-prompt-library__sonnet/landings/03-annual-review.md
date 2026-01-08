# Landing Concept #3: Annual Review & Life Audit Prompts

**Status:** Phase 2 Concept  
**Priority:** #3 (Seasonal Launch - November 15)  
**Type:** Interactive Landing  
**Target Launch:** November 15, 2026 (capture Dec-Jan spike)

---

## NICHE OVERVIEW

**Problem Solved:** Year-end reflection paralysis, life direction uncertainty, inability to see growth patterns

**Target Audience:**
- Reflective professionals (27-45) wanting clarity
- High achievers seeking intentional growth
- People at transition points (new year, birthday, life milestone)
- Self-optimization enthusiasts
- Anyone feeling "stuck" or directionless

**Primary Keyword:** "annual review prompts"  
**Estimated Search Volume:** 8-12K/mo (SPIKES to 30K+ in Nov-Jan)  
**Competition Level:** LOW (35/100 difficulty)  
**Pain Intensity:** 9/10 (existential clarity seeking)

**Mind-Blowing Moment:**  
When users complete the Life Wheel Visualizer and see their life balance (or imbalance) rendered as an actual wheel shape. Unbalanced areas visually "wobble." They screenshot it, realize "My career is a 9 but my health is a 3," and commit to change.

---

## DESIGN DIRECTION

### Color Palette

```css
/* Primary: Contemplative Warmth with Clarity */
--bg-void: #0f0e13;           /* Deep purple-black */
--bg-surface: #1a1821;        /* Warm charcoal */
--bg-elevated: #24212b;       /* Elevated surfaces */

--text-primary: #faf8f5;      /* Warm white */
--text-secondary: #b8b3ab;    /* Warm gray */
--text-tertiary: #8a8580;     /* Muted warmth */

--accent-reflection: #9b87f5; /* Soft purple - introspection */
--accent-growth: #6ee7b7;     /* Mint green - progress, renewal */
--accent-wisdom: #fbbf24;     /* Amber - insights gained */
--accent-endings: #e879f9;    /* Magenta - letting go, transitions */

--border-subtle: rgba(184, 179, 171, 0.15);
--glow-reflection: 0 0 60px rgba(155, 135, 245, 0.12);
```

**Vibe:** Contemplative warmth. Think: candlelit journal + winter solstice + turning inward.

### Typography

```css
/* Display Font: Elegant, Timeless */
@import 'Playfair Display' (weights: 500, 600, 700);

/* Body Font: Warm, Readable */
@import 'Lora' (weights: 400, 500, 600);

/* Accent Font: Clean Data */
@import 'IBM Plex Mono' (weights: 400, 500);
```

**Hierarchy:**
- Hero headline: Playfair Display 700, 3.75rem (elegant serif)
- Section titles: Playfair Display 600, 2.5rem
- Body text: Lora 400, 1.0625rem (readable serif)
- Prompt text: Lora 500, 1.125rem
- Data/scores: IBM Plex Mono 500

### Visual Motif

**Primary Motif:** **The Turning Wheel**

- Background: Subtle circular motion (representing the year completing)
- Visual elements: Circular progress indicators, wheel segments, orbital paths
- Symbolism: Cycles, seasons, completion and renewal
- Interactive: Wheel spins slowly, segments pulse as you scroll

**Visual Language:**
- Cycles over lines
- Wholeness over fragments
- Reflection over action
- Warmth over starkness

### Atmospheric Background

**Concept:** "The Year Turning"

```javascript
// Animated circular gradient that rotates slowly
- Base: Radial gradient (center: #1a1821, edge: #0f0e13)
- Orbital rings: Faint concentric circles (representing time cycles)
- Particle system: Slow-falling "year fragments" (like snow/embers)
- On scroll: Rings rotate clockwise (1 full rotation = full page scroll)
- Seasonal colors: Subtle shift (winter → spring → summer → fall → winter)
```

**Feel:** Like watching a year complete its cycle from above.

### Animation Strategy

**Key Animations:**

1. **Entry:** Fade in with gentle rotation (5° clockwise)
2. **Life Wheel:** Segments fill radially (like a clock filling up)
3. **Year progress:** Circular progress bar (365 days → current day)
4. **Scroll reveals:** Elements orbit in from edges
5. **Reflection moments:** Pause animations (stillness = contemplation)

**Performance:** CSS animations, Canvas for Life Wheel, < 35KB JS

---

## COMPLETE PROMPT FLOW

### Opening Prompt: "The Year-End Ritual Primer"

**Purpose:** Frame annual review as sacred ritual, not productivity checklist

```
Another year is ending (or has ended).

Before you rush into goals for the next year, let's honor this one. Not with generic gratitude lists or highlight reels. With honest reflection.

This is a ritual, not a performance. No one sees this but you.

I'll guide you through excavating:
- What this year taught you
- Who you became
- What you're carrying forward
- What you're leaving behind

This isn't about productivity. It's about clarity.

The year [YEAR]. Let's look back with honesty.

Ready?
```

**What It Does:** Sets contemplative tone, prevents surface-level reflection, honors the weight of a full year

---

### Prompt 1: "The Year in Seasons"

**Excavates:** Emotional arc and pivotal moments across 12 months

**Copy-Ready Prompt:**

```
Let's map the emotional landscape of [YEAR].

Divide the year into 4 seasons (Q1, Q2, Q3, Q4 or Winter/Spring/Summer/Fall).

For each season, describe:

**[SEASON 1: Jan-Mar]**
- **The Dominant Feeling:** One word that captures the emotional tone
- **Key Events:** 2-3 things that shaped this period
- **What I Was Becoming:** The version of me emerging
- **The Lesson:** What this season taught me

[Repeat for all 4 seasons]

Then reflect:
- Which season was hardest? Why?
- Which season do I want to carry forward?
- What pattern do I see across all four?

Write like you're narrating your own story. Be specific. Name the moments.
```

**Expected Output:**
- 4 seasonal summaries (150-200 words each)
- Dominant feelings identified
- Key moments named
- Patterns across year revealed
- ~700-900 words total

---

### Prompt 2: "The Life Wheel Audit"

**Excavates:** Current life balance across 8 dimensions (feeds the tool)

**Copy-Ready Prompt:**

```
Rate yourself (1-10) across these 8 dimensions of life as of today, end of [YEAR]:

1. **Career/Work** — Fulfillment, growth, challenge, satisfaction
   - Score: [1-10]
   - Why this score?
   - What would make it a 10?

2. **Health/Physical** — Energy, fitness, nutrition, sleep
   - Score: [1-10]
   - Why this score?
   - What would make it a 10?

3. **Relationships/Love** — Connection, intimacy, support
   - Score: [1-10]
   - Why this score?
   - What would make it a 10?

4. **Personal Growth** — Learning, development, evolution
   - Score: [1-10]
   - Why this score?
   - What would make it a 10?

5. **Fun/Recreation** — Joy, play, adventure, hobbies
   - Score: [1-10]
   - Why this score?
   - What would make it a 10?

6. **Finances** — Security, freedom, progress toward goals
   - Score: [1-10]
   - Why this score?
   - What would make it a 10?

7. **Environment** — Home, workspace, physical surroundings
   - Score: [1-10]
   - Why this score?
   - What would make it a 10?

8. **Purpose/Contribution** — Meaning, impact, legacy
   - Score: [1-10]
   - Why this score?
   - What would make it a 10?

After rating, identify:
- Which area grew most this year?
- Which area needs most attention?
- Which areas are blocking others?

Then use the Life Wheel tool below to visualize this.
```

**Expected Output:**
- 8 scores with justifications
- Gap analysis (current vs. ideal)
- Interconnection insights
- Ready for tool visualization
- ~600-800 words

---

### Prompt 3: "The Wins & Losses Inventory"

**Excavates:** Honest accounting of victories and setbacks

**Copy-Ready Prompt:**

```
List your wins and losses for [YEAR]. Be brutally honest.

**WINS (Things I'm Proud Of):**
List 5-10 wins. Not just achievements. Include:
- Hard decisions that took courage
- Relationships I invested in
- Times I stayed true to myself
- Moments I grew
- Things I created or contributed

For each, note: Why does this matter to me?

**LOSSES (Things That Didn't Go as Planned):**
List 5-10 losses. Not failures. Just things that didn't work out. Include:
- Opportunities I missed
- Risks that didn't pay off
- Relationships that ended or faded
- Goals I didn't hit
- Mistakes I made

For each, note: What did this cost me? What did it teach me?

**THE RATIO:**
Looking at your lists, what's the emotional weight?
Are you holding onto losses more than celebrating wins?

**THE REFRAME:**
Pick one "loss" and find the hidden win inside it. What did this make possible?
```

**Expected Output:**
- 5-10 wins with emotional significance
- 5-10 losses with lessons learned
- Emotional ratio acknowledgment
- At least one reframe
- ~700-900 words

---

### Prompt 4: "The Relationships Audit"

**Excavates:** Who you spent time/energy with and what it cost/gave

**Copy-Ready Prompt:**

```
Relationships shape years more than achievements do.

**Map your relationships in [YEAR]:**

**DEEPENED:**
- Who did I grow closer to?
- What made these relationships richer?
- How did they change me?

**FADED:**
- Which relationships drifted?
- Was this intentional or accidental?
- Do I grieve this or accept it?

**TOXIC/DRAINING:**
- Who took more than they gave?
- Why did I allow this?
- What boundary do I need?

**NEW:**
- Who entered my life this year?
- Which connections have potential?
- What pattern do I notice in who I attract?

**INVESTMENT NEEDED:**
- Which relationships am I neglecting?
- Who deserves more of my time/energy?
- What's one specific action I'll take?

Then reflect:
**If my relationships are a portfolio, how's my allocation?**
Am I investing in the right people?
```

**Expected Output:**
- Relationship categories mapped
- Specific people/dynamics named
- Patterns identified
- Action items for realignment
- ~500-700 words

---

### Prompt 5: "The Identity Shift"

**Excavates:** How you've changed (who you were → who you are)

**Copy-Ready Prompt:**

```
You are not the same person you were in January [YEAR].

**Write two character sketches:**

**WHO I WAS (Beginning of [YEAR]):**
- What I believed about myself
- What I was afraid of
- What I prioritized
- How I spent my time
- What I thought I wanted

**WHO I AM NOW (End of [YEAR]):**
- What I now know about myself
- What I'm no longer afraid of
- What I actually prioritize
- How I actually spend my time
- What I really want

**THE SHIFT:**
- Name the 2-3 most significant changes
- What caused each shift?
- Which changes do I want to continue?
- Which old patterns am I still carrying that no longer fit?

Write in third person if it helps create distance.
"She started the year believing... but ended it knowing..."
```

**Expected Output:**
- Two distinct identity portraits (200-300 words each)
- 2-3 major shifts identified
- Causality explored
- Forward momentum assessed
- ~600-800 words

---

### Prompt 6: "The Incompletion Inventory"

**Excavates:** What's unfinished and what to do with it

**Copy-Ready Prompt:**

```
Not everything gets finished. That's okay. But unfinished things drain energy.

**List 5-10 things you started in [YEAR] but didn't complete:**
- Projects, goals, intentions, promises, relationships

For each, ask:

**1. Why didn't this get done?**
- Lack of time/resources?
- Lost interest/motivation?
- Fear or resistance?
- Wrong priority?

**2. Do I still want this?**
- Yes, it matters → [Carry forward to next year]
- No, it doesn't → [Give myself permission to release it]
- Maybe, unclear → [Set a decision deadline]

**3. What's the cost of leaving it incomplete?**
- Guilt? Energy drain? Missed opportunity?

**THE RITUAL:**
For each "release," write one sentence of closure:
"I release [X] because [reason]. I don't need this anymore."

For each "carry forward," write one sentence of commitment:
"I'm bringing [X] into [NEXT YEAR] because [reason]. I commit to [specific action]."
```

**Expected Output:**
- 5-10 incomplete items listed
- Decision for each (carry forward/release/decide)
- Closure statements for releases
- Commitment statements for carries
- ~500-700 words

---

### Capstone Prompt: "The Year in One Page"

**Excavates:** Synthesis of everything into shareable artifact

**Copy-Ready Prompt:**

```
Synthesize [YEAR] into one page you can revisit.

**Format:**

**[YEAR] IN ESSENCE**

**The Year Was:** [One sentence that captures the whole year]

**I Learned:** [3 most significant lessons]

**I Became:** [How I changed, in 2-3 sentences]

**I'm Grateful For:** [3 specific things/people/moments]

**I Release:** [3 things I'm leaving in [YEAR]]

**I Carry Forward:** [3 things I'm bringing into [NEXT YEAR]]

**The Word for This Year:** [One word that names it]

**The Intention for Next Year:** [One clear intention, not a goal]

---

**To my future self reading this:**

[Write a message to yourself one year from now. What do you want them to remember about this year? What advice do you have? What do you hope has happened?]

---

This is your year, distilled. Print it. Save it. Revisit it.
```

**Expected Output:**
- Complete one-page synthesis
- All sections filled thoughtfully
- Message to future self (100-200 words)
- Artifact-quality writing
- ~500-700 words total

---

## INTERACTIVE TOOL SPECIFICATION

### Tool Name: **Life Wheel Visualizer**

**What It Does:**  
Transforms 8 life dimension scores (from Prompt 2) into a visual wheel chart. Shows balance/imbalance graphically. Unbalanced wheels visually "wobble." Generates shareable image and personalized insights.

### User Input Fields

```javascript
// 8 Dimension Scores (from Prompt 2)
const dimensions = [
  { name: "Career/Work", score: 0 },           // 1-10
  { name: "Health/Physical", score: 0 },       // 1-10
  { name: "Relationships/Love", score: 0 },    // 1-10
  { name: "Personal Growth", score: 0 },       // 1-10
  { name: "Fun/Recreation", score: 0 },        // 1-10
  { name: "Finances", score: 0 },              // 1-10
  { name: "Environment", score: 0 },           // 1-10
  { name: "Purpose/Contribution", score: 0 }   // 1-10
];

// Optional: Year (for labeling)
const year = 2025;
```

### Processing Logic

```javascript
function generateLifeWheel(scores) {
  const average = scores.reduce((sum, s) => sum + s.score, 0) / 8;
  const variance = calculateVariance(scores);
  const imbalance = variance > 2.5; // High variance = imbalanced
  
  // Identify areas
  const strong = scores.filter(s => s.score >= 8);
  const weak = scores.filter(s => s.score <= 4);
  const medium = scores.filter(s => s.score > 4 && s.score < 8);
  
  // Calculate "wobble" (visual imbalance indicator)
  const wobbleFactor = variance / 10; // 0-1 scale
  
  return {
    average: average.toFixed(1),
    imbalance,
    wobbleFactor,
    insights: generateInsights(scores, average, strong, weak),
    chartData: scores.map(s => ({ label: s.name, value: s.score }))
  };
}

function generateInsights(scores, avg, strong, weak) {
  const insights = [];
  
  // Overall assessment
  if (avg >= 7.5) {
    insights.push("Your life is well-balanced overall. Focus on maintaining this.");
  } else if (avg < 5) {
    insights.push("Multiple areas need attention. Start with one dimension.");
  }
  
  // Imbalance detection
  if (weak.length >= 3) {
    insights.push(`${weak.length} areas scoring below 5 are dragging you down.`);
  }
  
  // Specific callouts
  if (weak.length > 0) {
    insights.push(`Weakest area: ${weak[0].name} (${weak[0].score}/10). This needs focus.`);
  }
  if (strong.length > 0) {
    insights.push(`Strongest area: ${strong[0].name} (${strong[0].score}/10). Leverage this.`);
  }
  
  // Interconnection insights
  const career = scores.find(s => s.name === "Career/Work").score;
  const health = scores.find(s => s.name === "Health/Physical").score;
  if (career >= 8 && health <= 4) {
    insights.push("Career thriving but health suffering. Classic imbalance.");
  }
  
  return insights;
}
```

### Output Display

**Visual Wheel Chart (Canvas):**

```
        10 ────────────────
       /│\
      / │ \
   8 /  │  \ 8
    /   │   \
   /    │    \
  /   Career  \
 /       ↓     \
─────────○───────── Health: 3 (LOW)
         │
      Purpose
         7
```

**Rendered as:**
- 8-segment radar/spider chart
- Each dimension labeled on perimeter
- Filled area shows current state
- Perfect circle (all 10s) shown as outline
- Color-coded: Green (8-10), Yellow (5-7), Red (1-4)
- Animation: Wheel "wobbles" if imbalanced (rotate slightly)

**Insights Panel:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  YOUR LIFE WHEEL ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Overall Balance: 6.4/10
Status: ⚠️ Imbalanced (variance: 3.2)

✅ STRENGTHS:
• Career/Work: 9/10 — Leverage this
• Personal Growth: 8/10 — Keep momentum

⚠️ NEEDS ATTENTION:
• Health/Physical: 3/10 — Priority #1
• Fun/Recreation: 4/10 — Burnout risk

💡 KEY INSIGHTS:
• 3 areas scoring below 5 are dragging you down
• Career thriving but health suffering (classic imbalance)
• Weakest area: Health (3/10). This needs focus.

🎯 RECOMMENDATION:
Focus on Health next quarter. Even +2 points
would reduce wobble and improve energy for other areas.
```

### Export Options

- **Download as Image** — PNG of wheel chart (1080×1080, social-ready)
- **Copy Scores** — Text format for journaling
- **Print PDF** — Full page with wheel + insights
- **Share Link** — URL-encoded (optional, privacy-aware)
- **Track Progress** — Save to compare next year

### Why It Works Without AI

**Pure mathematical visualization:**
- Canvas API for chart rendering
- Statistical calculations (mean, variance, std dev)
- Conditional logic for insights
- No API calls needed
- Deterministic output

**Pattern matching, not intelligence:**
- If health low + career high → classic imbalance
- If variance > 2.5 → wobble effect
- If avg < 5 → crisis signal

---

## PAGE STRUCTURE

### 1. Hero Section

**Headline:**  
"The Annual Review You'll Actually Complete"

**Subheadline:**  
"7 structured prompts + Life Wheel visualizer to close the year with clarity and step into the next with intention."

**Visual:**  
Slowly rotating Life Wheel (all segments at 10) → glows warmly → then morphs to show imbalanced wheel (some high, some low) → title fades in

**CTA:**  
"Begin Your Review ↓"

**Supporting Text:**  
"Join 4,500+ people who used this to close [YEAR] with honesty and intention."

**Seasonal Urgency:**  
"[YEAR] is ending. Take 2 hours to reflect before it's gone."

---

### 2. Why This Approach Works

**Section Title:** "Why Generic Year-End Reviews Fail"

**Content:**

```markdown
**The Problem:**  
Highlight reels on social media. Vague "gratitude lists." Generic goal-setting. No real reflection.

**Our Approach:**

1. **Honor the Full Year** — All 4 seasons, not just wins
2. **Honest Accounting** — Wins AND losses, both matter
3. **Life Balance Check** — 8 dimensions visualized
4. **Identity Shifts** — Who you became, not just what you did
5. **Intentional Closure** — Release what doesn't serve, carry forward what does

**The Result:**  
You close the year with clarity. You know what mattered, what changed you, what to release, and what to carry forward.

**Based on:**
- Life Wheel coaching methodology
- Reflective practice research
- Narrative identity theory
- Intentional living frameworks
```

---

### 3. The Prompt Suite

**Section Title:** "The 7 Reflection Prompts"

**Layout:**  
Vertical timeline (representing the year passing)

**Prompts appear as milestones:**
1. The Year in Seasons → Q1, Q2, Q3, Q4
2. Life Wheel Audit → 8 dimensions
3. Wins & Losses → Honest inventory
4. Relationships → Who shaped the year
5. Identity Shift → Who you became
6. Incompletion → What to release/carry
7. One Page Synthesis → The artifact

---

### 4. The Life Wheel Tool

**Section Title:** "Visualize Your Life Balance"

**Intro:**  
"After completing Prompt 2, use this tool to see your balance (or imbalance) as an actual wheel."

**Tool Placement:**  
Between Prompt 2 and Prompt 3

**Instructions:**
1. Enter your 8 dimension scores (from Prompt 2)
2. Click "Generate Wheel"
3. See your balance visualized
4. Read personalized insights
5. Download the image
6. Use insights to set priorities for next year

---

### 5. Pro Tips

**Section Title:** "Make This Meaningful"

**Tips:**

1. **Block 2 Hours** — Do this in one sitting. Light candles. Create ritual.
2. **Be Ruthlessly Honest** — This is for you, not performance.
3. **Write by Hand** — Or type, but don't just think. Writing reveals truth.
4. **Compare to Last Year** — If you did this last year, reread it first.
5. **Share Selectively** — Your One Page Synthesis can be shared. The rest is sacred.
6. **Revisit Quarterly** — Check your Life Wheel every 3 months.

---

### 6. What You'll Gain

**Section Title:** "Expected Outcomes"

**Grid:**

- 🔍 **Honest Assessment** — See the year for what it was, not what you wish
- 📊 **Life Balance Clarity** — Visual proof of what needs attention
- 💪 **Growth Recognition** — Acknowledge how much you've changed
- 🎯 **Intentional Closure** — Release guilt, carry forward what matters
- 🗺️ **Clear Direction** — Know your priorities for next year
- 📜 **Shareable Artifact** — One-page synthesis you can revisit

---

### 7. FAQ

**Questions:**

1. **When should I do this?**  
   Late December or early January. Anytime you need closure on a period.

2. **How long does it take?**  
   2-3 hours. Don't rush it.

3. **What if my year was terrible?**  
   This process helps you find meaning in hard years. Acknowledge loss, find lessons.

4. **Do I need to set goals after this?**  
   No. This is about reflection, not goal-setting. But it informs better goals.

5. **Can I do this mid-year?**  
   Absolutely. Birthday reviews, 6-month check-ins, quarterly audits all work.

6. **What if I've never done this before?**  
   Perfect time to start. You'll wish you'd started years ago.

7. **Should I share my Life Wheel?**  
   Only if you want. Many share it to say "Here's what I'm working on next year."

8. **How do I use this to plan next year?**  
   Look at your Life Wheel. The lowest scores = your priorities.

---

### 8. Related Chambers

**Cross-Links:**

- → [Decision-Making Prompts](#) — For big life choices
- → [Journaling Prompts](#) — For daily reflection
- → [Goal-Setting Prompts](#) — To plan next year
- → [Values Clarification Prompts](#) — To define what matters

---

## SEO STRATEGY

### Target Keywords

**Primary:**
- "annual review prompts" (8-12K/mo baseline, **30K+ in Nov-Jan**)

**Secondary:**
- "year end reflection" (10K/mo, spike in Dec)
- "life wheel assessment" (5K/mo, steady)
- "life balance wheel" (4K/mo, steady)
- "life audit questions" (3K/mo)

**Long-Tail:**
- "how to do annual review"
- "year end reflection questions"
- "life wheel tool free"
- "balance wheel assessment"
- "end of year prompts"
- "yearly reflection template"
- "life balance visualizer"
- "annual reflection questions"
- "how to close out the year"
- "new year reflection prompts"

### Meta Tags

**Title (58 chars):**  
"Annual Review Prompts + Life Wheel Tool | Best Prompts"

**Description (155 chars):**  
"Close the year with clarity using 7 reflection prompts + free Life Wheel visualizer. Honor the full year, see your balance, step forward with intention."

**OG Image:**  
Life Wheel visualization (balanced and beautiful)

### Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Complete an Annual Review",
  "description": "7-step reflection framework for year-end clarity",
  "tool": {
    "@type": "SoftwareApplication",
    "name": "Life Wheel Visualizer",
    "applicationCategory": "LifestyleApplication"
  }
}
```

### Internal Linking

**From this page:**
- Goal Setting prompts
- Values Clarification prompts
- Decision-Making prompts
- Journaling prompts

**To this page:**
- Homepage (featured in November-January)
- Blog: "Annual review best practices"
- Email: November 15 launch announcement

---

## DESIGN RATIONALE

### Why This Visual System?

**Turning Wheel Metaphor:**
- Years ARE cycles → direct metaphor
- Wheel = balance (or lack thereof)
- Circular motion = time completing and renewing

**Color Psychology:**
- Purple (reflection) = introspection, depth, wisdom
- Mint (growth) = renewal, fresh starts, progress
- Amber (wisdom) = insights gained, lessons learned
- Magenta (endings) = letting go, transformation

**Typography:**
- Playfair Display = timeless elegance, reflective
- Lora = warm readability, journal-like
- IBM Plex Mono = data credibility for wheel

### Differentiation

**From Decision-Making:**
- That's cool/analytical → This is warm/contemplative
- That's present-focused → This is past-reflective

**From LinkedIn:**
- That's professional/external → This is personal/internal
- That's growth-focused → This is closure-focused

**Screenshot-Worthy:**
- The Life Wheel visualization (imbalanced wheel visually wobbles)
- Users share with caption: "My life in [YEAR]. Time to focus on [weak area]."

---

## MIND-BLOWING MOMENT

**The Moment:**  
User inputs all 8 scores, clicks "Generate Wheel," watches the wheel render segment by segment, and sees their life imbalance as a SHAPE.

**What Happens:**
1. Wheel segments fill radially (0→score, animated)
2. If imbalanced, wheel subtly wobbles (visual metaphor)
3. Insights generate below with specific callouts
4. User sees: "Oh shit, my career is a 9 but my health is a 3"
5. Immediate clarity about what needs attention

**Why It's Powerful:**
- **Visceral Recognition:** Abstract → Visual → Undeniable
- **Metaphor Made Literal:** "Unbalanced life" = actually wobbly wheel
- **Shareable Vulnerability:** Screenshot + "Working on this in [NEXT YEAR]"
- **Action Clarity:** Lowest scores = obvious priorities

**The User Thought:**  
"I KNEW my health was suffering, but seeing it as a 3 next to my 9 career... damn. That's my focus next year."

**The Share:**  
Life Wheel screenshot → "This is my [YEAR]. That health score is embarrassing. Who wants to be my accountability partner for [NEXT YEAR]?"

---

## SEASONAL LAUNCH STRATEGY

### Pre-Launch (November 1-14)

- Build page
- Test Life Wheel tool
- Create OG images
- Write launch email
- Prepare social posts

### Launch (November 15)

- **Why November 15?**
  - 6 weeks before year-end (enough time to reflect)
  - Catches Thanksgiving reflection energy
  - Ahead of the chaos (Dec rush)
  - Captures early planners

- **Launch Channels:**
  - Email list announcement
  - Product Hunt (if applicable)
  - Twitter thread: "How to close [YEAR] with clarity"
  - Reddit: r/productivity, r/selfimprovement
  - Hacker News (if relevant)

### Peak Season (December 15 - January 15)

- **Traffic spike expected:** 3-5x normal
- Publish blog: "Annual review best practices"
- Guest posts on productivity blogs
- Reach out to newsletter writers
- Update homepage to feature this prominently

### Post-Season (January 16+)

- Keep live year-round
- Quarterly reminder emails
- "Mid-year review" content (June)
- Birthday review marketing
- Prepare for next November

---

## VALIDATION CHECKLIST

- [ ] Keyword research confirms November spike (Google Trends)
- [ ] Life Wheel rendering works on mobile
- [ ] Prompts tested with real users (5+ people)
- [ ] Export/download functions work
- [ ] Page loads < 2s (even with Canvas)
- [ ] Seasonal content calendar planned
- [ ] Email sequence written for launch
- [ ] Social assets created (OG images, graphics)

---

## SUCCESS METRICS

### Launch Targets (Nov 15 - Jan 15)

- 5,000+ pageviews (seasonal spike)
- 500+ Life Wheel generations
- 200+ email signups
- 50+ social shares (wheel screenshots)
- Featured in 3+ productivity newsletters

### Long-Term Success

- Rank #1-3 for "annual review prompts"
- Return visits every November (recurring need)
- 10,000+ yearly pageviews
- Recognized as THE annual review resource

---

**Concept Status:** ✅ Complete  
**Ready for:** Design mockups + technical build  
**Estimated Build Time:** 45-60 hours (Canvas wheel = complexity)  
**Priority:** Build THIRD, **launch November 15** to capture seasonal demand

---

_Concept created by SELF Council (Architect + Oracle + Creator)_  
_Confidence: 0.80 (high conviction, clear seasonal opportunity)_

