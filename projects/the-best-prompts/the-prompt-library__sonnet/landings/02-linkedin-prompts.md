# Landing Concept #2: LinkedIn & Professional Writing Prompts

**Status:** Phase 2 Concept  
**Priority:** #2 (Build Second)  
**Type:** Interactive Landing  
**Target Launch:** Week 9-10

---

## NICHE OVERVIEW

**Problem Solved:** LinkedIn content anxiety, professional brand building, thought leadership paralysis

**Target Audience:**

- Mid-career professionals building personal brand (30-50 age range)
- Job seekers needing to stand out
- Founders/executives establishing thought leadership
- Career pivoters repositioning themselves
- B2B marketers creating content

**Primary Keyword:** "LinkedIn post prompts"  
**Estimated Search Volume:** 30-50K/mo combined  
**Competition Level:** MEDIUM (55/100 difficulty)  
**Pain Intensity:** 8/10 (career advancement anxiety)

**Mind-Blowing Moment:**  
When users input their expertise area and instantly get 10 headline variations using proven formulas (question hook, stat hook, contrarian hook, story hook, etc.). They copy one, use it on LinkedIn, and it performs 3x better than their usual posts. They return weekly for more.

---

## DESIGN DIRECTION

### Color Palette

```css
/* Primary: Corporate Elegance with Creative Edge */
--bg-void: #0a0a0f; /* Deep navy background */
--bg-surface: #13131a; /* Card backgrounds */
--bg-elevated: #1a1a25; /* Elevated elements */

--text-primary: #f5f5f7; /* Clean white */
--text-secondary: #a0a0ab; /* Professional gray */
--text-tertiary: #70707a; /* Muted gray */

--accent-authority: #0077b5; /* LinkedIn blue (subtle nod) */
--accent-creative: #ff6b35; /* Coral - creative spark, standout */
--accent-success: #00c896; /* Teal - engagement, growth */
--accent-premium: #c9a55a; /* Gold - premium positioning */

--border-subtle: rgba(160, 160, 171, 0.12);
--glow-authority: 0 0 50px rgba(0, 119, 181, 0.15);
```

**Vibe:** Corporate credibility meets creative confidence. Think: corner office + creative agency.

### Typography

```css
/* Display Font: Strong, Authoritative */
@import "Sora" (weights: 600, 700, 800);

/* Body Font: Professional, Polished */
@import "Manrope" (weights: 400, 500, 600);

/* Mono Font: Tech, Data */
@import "Fira Code" (weights: 400, 500);
```

**Hierarchy:**

- Hero headline: Sora 800, 3.25rem
- Section titles: Sora 700, 2.25rem
- Subheadings: Sora 600, 1.5rem
- Body text: Manrope 400, 1.0625rem
- Prompt text: Manrope 500, 1.125rem
- Tool output: Fira Code 400

### Visual Motif

**Primary Motif:** **The Professional Network Web**

- Background: Subtle interconnected nodes and lines (representing connections)
- On interaction: Nodes pulse and new connections form
- Visual language: Clean lines, professional geometry, subtle depth
- Profile avatars: Circular elements with soft glows

**Visual Language:**

- Connection over isolation
- Professionalism with personality
- Structure with creative freedom
- Authority without arrogance

### Atmospheric Background

**Concept:** "The Network Effect"

```javascript
// Animated network of nodes representing professional connections
- Base: Subtle gradient (top: #0a0a0f, bottom: #13131a)
- Connection lines: Thin lines (#0077b5 at 8% opacity)
- Nodes: Small circles that pulse on scroll
- On tool interaction: New connections form, network expands
- Parallax: Background moves slower than content (depth)
```

**Feel:** Like watching your professional network grow in real-time.

### Animation Strategy

**Key Animations:**

1. **Entry:** Headline types in letter-by-letter (subtle typewriter effect)
2. **Tool interaction:** Formula cards flip to reveal structure
3. **Headline generation:** Text types out at 60 WPM
4. **Copy success:** Checkmark animation + confetti burst (micro-celebration)
5. **Network nodes:** Pulse on scroll, connect on interaction

**Performance:** GPU-accelerated transforms, < 40KB JS

---

## COMPLETE PROMPT FLOW

### Opening Prompt: "The Authentic Authority Primer"

**Purpose:** Frame LinkedIn as thought leadership, not self-promotion

```
I want to build my professional brand on LinkedIn, but I don't want to sound like a generic influencer or self-promoter.

I need your help creating content that:
- Establishes authority in my field
- Shares genuine insights, not platitudes
- Engages my network without being salesy
- Sounds like ME, not a corporate robot

My expertise: [YOUR FIELD/ROLE]
What I want to be known for: [YOUR POSITIONING]

Let's create content that builds credibility and connection.

Ready?
```

**What It Does:** Sets authentic tone, prevents generic "hustle culture" advice, activates insight mode

---

### Prompt 1: "The Authority Positioning Statement"

**Excavates:** Your unique professional positioning (what you uniquely offer)

**Copy-Ready Prompt:**

```
Based on my expertise in [FIELD] and what I want to be known for [POSITIONING], help me craft my authority positioning statement.

This is NOT a generic bio. It's a sharp, memorable statement of what I uniquely bring to my field.

Answer these questions first:
1. What problem do I solve that others in my field don't address?
2. What perspective do I have that's different?
3. What combination of skills/experience makes me unique?
4. Who specifically benefits from my expertise?

Then craft 3 positioning statement variations:
- **The Direct:** One clear sentence (what I do + who for + unique angle)
- **The Story:** 2-3 sentences that hint at my journey
- **The Provocative:** A contrarian take that makes people curious

Each should be LinkedIn bio-ready (under 200 chars).
```

**Expected Output:**

- 4 diagnostic questions answered
- 3 positioning statement variations
- Each under 200 characters
- Distinct approaches (direct, story, provocative)
- ~300-400 words total

---

### Prompt 2: "The Thought Leadership Pillars"

**Excavates:** 3-5 core themes for consistent content

**Copy-Ready Prompt:**

```
I can't post about everything. I need focus.

Based on my expertise in [FIELD] and my positioning as [POSITIONING], help me identify 3-5 "content pillars" — recurring themes I can return to again and again.

For each pillar:
- **Name:** What's the theme? (2-4 words)
- **Why it matters:** What problem does this address?
- **My unique take:** What's my angle that others miss?
- **Content ideas:** 5 specific post ideas within this pillar
- **Audience hook:** Why my network cares

These pillars should:
- Reinforce my positioning
- Be broad enough for many posts
- Be specific enough to show expertise
- Appeal to my target audience

Give me themes that could sustain 2-3 posts per week for a year.
```

**Expected Output:**

- 3-5 content pillars with full breakdowns
- 15-25 specific post ideas (5 per pillar)
- Rationale for each pillar
- Audience relevance justification
- ~600-800 words

---

### Prompt 3: "The Hook Formula Library"

**Excavates:** Proven opening hooks for high engagement

**Copy-Ready Prompt:**

```
LinkedIn attention span is 3 seconds. The first line either hooks them or loses them.

Generate 10 different opening hooks for a post about: [YOUR TOPIC]

Use these proven formulas:

1. **The Question:** Ask something they can't help answering
2. **The Stat:** Lead with a shocking number
3. **The Story:** Open with "Last week I..."
4. **The Contrarian:** Challenge common wisdom
5. **The Observation:** "Most people don't realize..."
6. **The Confession:** "I used to believe [X]. I was wrong."
7. **The Timeline:** "3 years ago → Today:"
8. **The Pattern:** "I've noticed something..."
9. **The Mistake:** "The biggest mistake in [FIELD]..."
10. **The Secret:** "What [successful people] know about [X]..."

For each, write the actual first 1-2 sentences. Make them scroll-stoppers.
```

**Expected Output:**

- 10 opening hooks using different formulas
- Each 1-2 sentences (30-50 words)
- Variations on the same topic
- Formula name labeled for learning
- ~400-500 words

---

### Prompt 4: "The Post Structure Templates"

**Excavates:** Frameworks for different post types

**Copy-Ready Prompt:**

```
I need post structure templates I can reuse.

Create 5 LinkedIn post templates for different goals:

**Template 1: The Insight Post**
Goal: Share a professional insight
Structure:
- Hook (observation or question)
- The insight (what you realized)
- Why it matters
- Actionable takeaway
- Engagement question

**Template 2: The Story Post**
Goal: Share a lesson through narrative
Structure:
- Scene-setting (context)
- The challenge/turning point
- What you learned
- How others can apply it
- Call to reflection

**Template 3: The List Post**
Goal: Quick value delivery
Structure:
- Hook (promise of value)
- 5-7 bullets (insights/tips)
- Brief explanation per bullet
- Summary
- CTA

**Template 4: The Debate Post**
Goal: Spark discussion
Structure:
- Contrarian statement
- Common belief (what most think)
- Why you disagree
- Your alternative view
- Question to audience

**Template 5: The Case Study Post**
Goal: Prove expertise through results
Structure:
- The problem (before state)
- The solution (what you did)
- The results (specific outcomes)
- Key lesson
- Offer to help others

For each template, show the structure AND write one example using my expertise in [FIELD].
```

**Expected Output:**

- 5 post structure templates
- Each with labeled sections
- One filled example per template
- Different purposes/tones
- ~800-1000 words

---

### Prompt 5: "The Engagement Optimizer"

**Excavates:** Specific edits to boost post performance

**Copy-Ready Prompt:**

```
I'm about to post this on LinkedIn:

[PASTE YOUR DRAFT POST]

Before I hit publish, optimize it for engagement using these criteria:

**Hook Strength:**
- Does the first line make them stop scrolling?
- Suggested improvement:

**Readability:**
- Are paragraphs short (2-3 lines max)?
- Is it skimmable?
- Suggested edits:

**Value Delivery:**
- Is there a clear takeaway?
- Will they be smarter after reading?
- How to sharpen:

**Call to Action:**
- Does it invite engagement?
- Is the ask clear?
- Better CTA:

**Authenticity:**
- Does it sound like ME?
- Any corporate speak to cut?
- Voice improvements:

Give me a before/after showing the optimized version.
```

**Expected Output:**

- Analysis across 5 criteria
- Specific suggested edits
- Before/after comparison
- Rationale for each change
- ~400-600 words

---

### Prompt 6: "The Content Calendar Generator"

**Excavates:** 30 days of planned posts

**Copy-Ready Prompt:**

```
Generate a 30-day LinkedIn content calendar using my 3-5 content pillars: [LIST PILLARS]

For each of the 30 days, provide:
- **Date:** Day [1-30]
- **Pillar:** Which theme this falls under
- **Post Type:** Insight/Story/List/Debate/Case Study
- **Topic:** Specific focus (one sentence)
- **Hook Formula:** Which opening approach to use
- **Goal:** Engagement/Authority/Connection/Offer

Mix it up — don't cluster all "List" posts together. Vary the pillars. Create a rhythm.

Present as a table I can copy into a spreadsheet.

Then note: Which days are "relationship posts" (pure value, no ask) vs. "opportunity posts" (soft CTA or offer).
```

**Expected Output:**

- 30-day table with all columns filled
- Varied post types and pillars
- Strategic distribution
- Relationship vs. opportunity balance noted
- ~600-800 words (table format)

---

### Capstone Prompt: "The LinkedIn Growth Strategy"

**Excavates:** 90-day plan for measurable growth

**Copy-Ready Prompt:**

```
Synthesize everything into a 90-day LinkedIn growth strategy.

Based on:
- My positioning as [POSITIONING]
- My content pillars [LIST]
- Post templates and hooks we've developed

Create a strategic plan:

**MONTH 1: Foundation**
- Posting frequency: [X per week]
- Primary goal: [Establish authority/Build connections/etc.]
- Key metrics: [What to track]
- Success looks like: [Observable outcomes]

**MONTH 2: Consistency**
- Posting adjustments: [Based on Month 1 data]
- Engagement strategy: [How to interact with comments]
- Network growth: [Who to connect with]
- Success looks like:

**MONTH 3: Amplification**
- Content evolution: [What to add/change]
- Collaboration: [Guest posts, comments, shares]
- Conversion: [How to move from followers to conversations/clients]
- Success looks like:

**Key Metrics to Track:**
- Impressions, engagement rate, followers, profile views, DMs

**Weekly Routine:**
- [Specific schedule for creating and posting content]

**Red Flags (When to Pivot):**
- If [X metric] drops below [Y]
- If engagement drops for [Z] consecutive posts

This is my roadmap. Make it specific and actionable.
```

**Expected Output:**

- 90-day phased strategy
- Month-by-month breakdown
- Metrics and success criteria
- Weekly routine template
- Pivot signals
- ~700-900 words

---

## INTERACTIVE TOOL SPECIFICATION

### Tool Name: **LinkedIn Headline Formula Engine**

**What It Does:**  
Generates 10 variations of LinkedIn headlines using proven high-performing formulas. Users input their role, expertise, and value proposition. Tool applies formulas and outputs copy-ready headlines.

### User Input Fields

```javascript
// Step 1: Profile Basics
- role: string (e.g., "Product Designer")
- industry: string (e.g., "SaaS")
- yearsExperience: number (for credibility context)

// Step 2: Expertise & Value
- coreSkill: string (e.g., "user research")
- targetAudience: string (e.g., "B2B startups")
- uniqueValue: string (e.g., "data-driven design")

// Step 3: Optional
- achievement: string (e.g., "Shipped 50+ products")
- philosophy: string (e.g., "Form follows function")
```

### Processing Logic

```javascript
const headlineFormulas = [
  {
    name: "The Authority",
    template: "{role} helping {targetAudience} {outcome} through {coreSkill}",
    example:
      "Product Designer helping B2B startups increase conversion through data-driven design",
  },
  {
    name: "The Specialist",
    template: "{coreSkill} specialist | {achievement} | {industry}",
    example: "User research specialist | Shipped 50+ products | SaaS",
  },
  {
    name: "The Problem-Solver",
    template:
      "I help {targetAudience} solve {problem} | {role} @ {company/status}",
    example:
      "I help B2B startups solve conversion problems | Product Designer @ Freelance",
  },
  {
    name: "The Teacher",
    template:
      "Teaching {targetAudience} how to {skill} | {role} | {philosophy}",
    example:
      "Teaching B2B founders how to design for conversion | Product Designer | Form follows function",
  },
  {
    name: "The Connector",
    template: "{role} bridging {X} and {Y} for {targetAudience}",
    example:
      "Product Designer bridging user needs and business goals for B2B startups",
  },
  {
    name: "The Achiever",
    template: "{achievement} | {role} focused on {coreSkill}",
    example:
      "Shipped 50+ products | Product Designer focused on data-driven design",
  },
  {
    name: "The Evangelist",
    template: "Believer in {philosophy} | {role} helping {targetAudience}",
    example:
      "Believer in data-driven design | Product Designer helping B2B startups",
  },
  {
    name: "The Niche Expert",
    template:
      "{industry} {role} specializing in {coreSkill} for {targetAudience}",
    example:
      "SaaS Product Designer specializing in user research for B2B startups",
  },
  {
    name: "The Storyteller",
    template: "From {past} to {present} | {role} | {philosophy}",
    example:
      "From engineer to designer | Product Designer | Form follows function",
  },
  {
    name: "The Simplifier",
    template:
      "{role} | {coreSkill} | Making {complex thing} simple for {targetAudience}",
    example:
      "Product Designer | User research | Making B2B SaaS simple for startups",
  },
];

function generateHeadlines(userInput) {
  return headlineFormulas.map((formula) => ({
    formula: formula.name,
    headline: applyTemplate(formula.template, userInput),
    charCount: headline.length,
    withinLimit: headline.length <= 220,
  }));
}
```

### Output Display

**Visual Layout:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  YOUR LINKEDIN HEADLINE VARIATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. THE AUTHORITY (218 chars) ✓
   "Product Designer helping B2B startups increase
    conversion through data-driven design"
   [Copy] [Edit]

2. THE SPECIALIST (156 chars) ✓
   "User research specialist | Shipped 50+ products | SaaS"
   [Copy] [Edit]

[... 8 more variations ...]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PRO TIPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Test 2-3 variations over 30 days
• Track profile views to see what works
• Update every 3-6 months as you evolve
• Use keywords recruiters search for
```

### Export Options

- **Copy Single Headline** — Click to copy individual variation
- **Copy All** — Get all 10 in text format
- **Download as Text File** — `.txt` with all variations
- **A/B Test Tracker** — CSV with columns for headline, start date, end date, profile views

### Why It Works Without AI

**Pure template substitution:**

- No API calls
- Instant generation (< 10ms)
- 10 proven formulas stored locally
- Simple string interpolation
- All processing client-side

**Deterministic output:**

- Same inputs → same outputs
- Users can see the formula logic
- Fully transparent (no black box)

---

## PAGE STRUCTURE

### 1. Hero Section

**Headline:**  
"Build Your LinkedIn Brand Without Sounding Like Everyone Else"

**Subheadline:**  
"Structured prompts + headline formula engine to create authentic thought leadership content that gets noticed."

**Visual:**  
Animated network of professional avatars connecting, with glowing lines forming between them as they engage.

**CTA:**  
"Generate Your Headline ↓" (jumps to tool)

**Supporting Text:**  
"Used by 2,800+ professionals to build authority, land opportunities, and grow their network."

---

### 2. Why This Approach Works

**Section Title:** "Why Most LinkedIn Content Fails"

**Content:**

```markdown
**The Problem:**  
Generic motivational quotes, humble brags, and "10 habits of successful people" posts that sound like everyone else's posts.

**Our Approach:**

1. **Define Your Positioning** — You can't be all things. Pick your lane.
2. **Establish Content Pillars** — Consistent themes, not random thoughts.
3. **Master Proven Formulas** — Hooks and structures that work.
4. **Optimize for Engagement** — Specific edits that boost performance.
5. **Plan Strategically** — 90 days of focused growth, not sporadic posting.

**The Result:**  
You build a recognizable brand. Your posts get saved, shared, and commented on. Opportunities find you.

**Based on:**

- LinkedIn algorithm analysis (2024-2025)
- Viral post pattern recognition
- Professional brand positioning methodology
- Thought leadership content strategy
```

---

### 3. The Headline Generator Tool

**Section Title:** "Start Here: Generate Your LinkedIn Headline"

**Intro Text:**  
"Your headline is the first thing people see. Make it count."

**Tool Placement:**  
Above the fold, immediately accessible, can't miss it

**Instructions:**

1. Enter your role and expertise
2. Add your target audience
3. Optional: achievement or philosophy
4. Click "Generate Headlines"
5. Get 10 variations using proven formulas
6. Copy your favorite, test it

---

### 4. The Prompt Suite

**Section Title:** "The 7 Prompts for LinkedIn Growth"

**Layout:**  
Accordion-style cards (click to expand)

**Each Prompt Card Shows:**

- Prompt name and number
- What it generates
- Estimated time to complete
- Copy button for full prompt
- Example output (collapsed, expandable)

---

### 5. Pro Tips

**Section Title:** "Maximize Your Results"

**Tips:**

1. **Post Consistently** — 2-3x per week minimum. Algorithm rewards consistency.
2. **First 60 Minutes Matter** — Engage with comments immediately after posting.
3. **Avoid the Hard Sell** — 80% value, 20% ask. Build trust first.
4. **Use Line Breaks** — Dense paragraphs kill readability. 2-3 lines max.
5. **Tag Strategically** — Mention people, but don't overdo it (spam signal).
6. **Test Headlines** — Use the tool to A/B test your profile headline every 30 days.

---

### 6. What You'll Build

**Section Title:** "Expected Outcomes"

**Grid:**

- 📊 **Clear Positioning** — You'll know exactly what you're known for
- 📝 **Content System** — 3-5 pillars you can return to endlessly
- 🎯 **Proven Hooks** — 10+ formulas for high-engagement openings
- 📅 **30-Day Calendar** — Never stare at a blank screen again
- 📈 **Growth Strategy** — 90-day plan with trackable metrics
- 💼 **Opportunities** — Inbound messages, connections, visibility

---

### 7. FAQ

**Questions:**

1. **How often should I post?**  
   2-3x per week minimum. More is fine if you maintain quality.

2. **Do I need LinkedIn Premium?**  
   No. Organic reach is still strong if your content is good.

3. **What if I'm not a thought leader?**  
   You don't need to be. You just need to share what you know with people who need it.

4. **How long until I see results?**  
   Profile views in week 1, meaningful engagement in 30-60 days, opportunities in 90+ days.

5. **Can I use AI to write my posts?**  
   The prompts help you structure ideas. Write the final post in your own voice.

6. **What if my posts get low engagement?**  
   Run Prompt 5 (Engagement Optimizer). Usually it's hook weakness or poor readability.

7. **Should I connect with everyone who sends a request?**  
   No. Be selective. Quality > quantity for network health.

8. **How do I measure success?**  
   Track profile views, post impressions, meaningful DMs, and real opportunities.

---

### 8. Related Chambers

**Cross-Links:**

- → [Resume & Cover Letter Prompts](#) — Job search content
- → [Interview Preparation Prompts](#) — Next step after visibility
- → [Personal Branding Prompts](#) — Broader brand strategy
- → [Networking Conversation Prompts](#) — Turn connections into relationships

---

## SEO STRATEGY

### Target Keywords

**Primary:**

- "LinkedIn post prompts" (15K/mo, difficulty: 55/100)

**Secondary:**

- "LinkedIn headline examples" (10K/mo, 50/100)
- "professional bio prompts" (5K/mo, 45/100)
- "AI prompts for LinkedIn" (3K/mo, growing)
- "LinkedIn content ideas" (8K/mo, 60/100)

**Long-Tail:**

- "how to write LinkedIn posts that get engagement"
- "LinkedIn headline formula"
- "thought leadership content prompts"
- "LinkedIn bio generator free"
- "professional brand building prompts"
- "LinkedIn content calendar template"
- "how to get noticed on LinkedIn"
- "LinkedIn algorithm 2025"
- "best LinkedIn post structure"
- "LinkedIn hook examples"

### Meta Tags

**Title (59 chars):**  
"LinkedIn Post Prompts + Headline Generator | Best Prompts"

**Description (154 chars):**  
"Build your LinkedIn brand with 7 structured prompts + free headline generator. Create thought leadership content that stands out and drives results."

**OG Image:**  
Screenshot of Headline Generator showing 10 variations

### Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Build Your LinkedIn Professional Brand",
  "description": "7-step framework for creating authentic thought leadership content",
  "tool": {
    "@type": "SoftwareApplication",
    "name": "LinkedIn Headline Formula Engine",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0"
    }
  }
}
```

### Internal Linking

**From this page:**

- Interview Preparation (same audience)
- Resume Prompts (job seekers)
- Personal Branding (broader positioning)

**To this page:**

- Homepage
- Career Planning prompts
- Blog: "LinkedIn algorithm changes 2025"

---

## DESIGN RATIONALE

### Why This Visual System?

**Network Web Metaphor:**

- LinkedIn IS networking → direct visual metaphor
- Nodes = people, lines = connections
- Growth visualization = your network expanding

**Color Psychology:**

- LinkedIn blue (authority) = professional credibility
- Coral (creative) = stand out, be memorable
- Teal (success) = engagement, growth metrics
- Gold (premium) = high-value positioning

**Typography:**

- Sora = strong, modern authority
- Manrope = professional polish without corporate stiffness
- Fira Code = tech credibility for tools

### Differentiation

**From Decision-Making:**

- That's cool/analytical → This is warm/professional
- That's contemplative → This is active/energetic
- That uses grids → This uses networks

**Screenshot-Worthy:**

- The 10 headline variations output
- Users share: "Used this tool to refresh my LinkedIn headline. Which one should I use? [Poll]"

---

## MIND-BLOWING MOMENT

**The Moment:**  
User fills out the headline tool, clicks "Generate," and instantly sees 10 variations — all professional, all different, all ready to copy.

**What Happens:**

1. Headline variations type out sequentially (100ms delay each)
2. Character counts show in real-time (green if under 220)
3. Each formula is labeled so they learn the pattern
4. Copy buttons glow on hover

**Why It's Powerful:**

- **Time Saved:** What took hours now takes 30 seconds
- **Quality:** Uses proven formulas, not guesswork
- **Options:** 10 variations = can choose what resonates
- **Learning:** Labels teach them the formulas for future use

**The User Thought:**  
"Holy crap, these are actually good. Better than what I had. I'm using #3 right now."

**The Share:**  
Screenshot of all 10 headlines → "Which headline should I use? Vote below 👇"  
(Engagement bait that promotes the tool)

---

**Concept Status:** ✅ Complete  
**Ready for:** Design mockups + technical build  
**Estimated Build Time:** 35-50 hours (simpler tool than Decision Matrix)  
**Priority:** Build SECOND (high search volume, proven demand)

---

_Concept created by SELF Council (Architect + Oracle + Creator)_  
_Confidence: 0.75 (strong niche, moderate competition)_
