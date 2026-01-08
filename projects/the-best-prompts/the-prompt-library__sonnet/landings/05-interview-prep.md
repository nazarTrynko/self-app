# Landing Concept #5: Interview Preparation Prompts

**Status:** Phase 2 Concept  
**Priority:** #5 (Build Fifth)  
**Type:** Interactive Landing  
**Target Launch:** Week 15-16

---

## NICHE OVERVIEW

**Problem Solved:** Interview anxiety, generic answers, inability to articulate value compellingly

**Target Audience:**
- Job seekers preparing for interviews (25-45 age range)
- Career pivoters needing to reframe experience
- Recent grads lacking professional stories
- Professionals interviewing for promotions
- Anyone facing high-stakes conversations

**Primary Keyword:** "interview preparation prompts"  
**Estimated Search Volume:** 20-30K/mo combined  
**Competition Level:** MEDIUM (50/100 difficulty)  
**Pain Intensity:** 9/10 (high-stakes anxiety)

**Mind-Blowing Moment:**  
When users input a vague achievement ("led a team project") into the STAR Builder and it outputs a compelling, specific story with situation, task, action, and result clearly structured. They copy it word-for-word into their prep doc and use it in the interview. It lands. They get the job.

---

## DESIGN DIRECTION

### Color Palette

```css
/* Primary: Confident Professionalism with Creative Edge */
--bg-void: #0e1015;           /* Deep navy-black */
--bg-surface: #16191f;        /* Professional dark */
--bg-elevated: #1e2229;       /* Elevated confidence */

--text-primary: #f4f5f7;      /* Crisp white */
--text-secondary: #a8abb2;    /* Professional gray */
--text-tertiary: #72757e;     /* Subtle gray */

--accent-confidence: #3b82f6; /* Strong blue - confidence, clarity */
--accent-success: #10b981;    /* Green - win, achievement */
--accent-preparation: #f59e0b;/* Amber - readiness, energy */
--accent-premium: #8b5cf6;    /* Purple - executive level */

--border-subtle: rgba(168, 171, 178, 0.15);
--glow-confidence: 0 0 50px rgba(59, 130, 246, 0.15);
```

**Vibe:** Boardroom confidence meets preparation excellence. Think: executive suite + TED Talk prep + winning interview.

### Typography

```css
/* Display Font: Strong, Confident */
@import 'Outfit' (weights: 500, 600, 700, 800);

/* Body Font: Clear, Professional */
@import 'Nunito Sans' (weights: 400, 600, 700);

/* Mono Font: Data, Precision */
@import 'Source Code Pro' (weights: 400, 600);
```

**Hierarchy:**
- Hero headline: Outfit 800, 3.5rem
- Section titles: Outfit 700, 2.25rem
- Subheadings: Outfit 600, 1.5rem
- Body text: Nunito Sans 400, 1.0625rem
- Prompt text: Nunito Sans 600, 1.125rem
- STAR output: Source Code Pro 400

### Visual Motif

**Primary Motif:** **The Prepared Path**

- Background: Subtle upward-trending lines (representing growth, success)
- Visual elements: Steps, stages, progression markers
- Symbolism: Preparation as a clear path to success
- Interactive: Elements "level up" on scroll

**Visual Language:**
- Progression over stagnation
- Clarity over confusion
- Confidence over anxiety
- Preparation over panic

### Atmospheric Background

**Concept:** "The Success Trajectory"

```javascript
// Animated ascending lines representing career progression
- Base: Gradient (bottom-left: #0e1015, top-right: #1e2229)
- Ascending lines: Thin diagonal lines (#3b82f6 at 6% opacity)
- Success nodes: Small glowing points along the path
- On scroll: Lines extend upward (visual progress)
- Parallax: Background moves with scroll (journey feeling)
```

**Feel:** Like ascending steps toward your goal interview.

### Animation Strategy

**Key Animations:**

1. **Entry:** Confident fade-in with upward movement
2. **STAR Builder:** Sections fill sequentially (S→T→A→R)
3. **Success stories:** Checkmark animations when complete
4. **Scroll progression:** Progress bar fills as you prepare
5. **Copy success:** Confident pulse + success color flash

**Performance:** GPU-accelerated, < 30KB JS

---

## COMPLETE PROMPT FLOW

### Opening Prompt: "The Interview Mindset Primer"

**Purpose:** Frame interview as conversation about value, not interrogation

```
I have an interview coming up, and I want to be genuinely prepared — not just rehearsed.

I don't want to memorize scripts. I want to understand my own value so clearly that I can communicate it naturally.

Help me prepare by:
- Identifying my most compelling achievements
- Structuring them as stories (not lists)
- Anticipating tough questions
- Crafting authentic, confident answers

This isn't about being someone I'm not. It's about articulating who I am at my best.

The interview is for: [ROLE/COMPANY]
My background: [BRIEF SUMMARY]

Let's prepare with intention.

Ready?
```

**What It Does:** Sets authentic tone, prevents script memorization, frames preparation as clarity work

---

### Prompt 1: "The Achievement Inventory"

**Excavates:** Concrete accomplishments worth talking about

**Copy-Ready Prompt:**

```
List 8-10 professional achievements from the past 3-5 years that demonstrate:
- Problem-solving ability
- Leadership or initiative
- Impact/results
- Skills relevant to [TARGET ROLE]

For each achievement, write 2-3 sentences covering:
- **Context:** What was the situation?
- **Action:** What did YOU specifically do?
- **Result:** What changed because of your work?

Don't be modest. Be specific. Use numbers where possible.

Examples of good achievements:
- "Redesigned onboarding process, reducing time-to-productivity from 6 weeks to 3, saving $120K annually"
- "Led cross-functional team of 8 to ship product 2 weeks ahead of schedule despite scope expansion"

NOT: "Worked on many successful projects"

After listing, help me identify:
- Which achievements are most impressive?
- Which demonstrate skills [TARGET ROLE] requires?
- Which show growth/learning?
```

**Expected Output:**
- 8-10 specific achievements
- Each with context, action, result
- Quantified where possible
- Ranked by relevance to target role
- ~600-800 words

---

### Prompt 2: "The STAR Story Builder"

**Excavates:** Structured, interview-ready stories (feeds the tool)

**Copy-Ready Prompt:**

```
Take one achievement from my list: [ACHIEVEMENT]

Help me structure it using the STAR method:

**SITUATION:**
- What was the context?
- What challenge existed?
- Why did this matter?
(2-3 sentences setting the scene)

**TASK:**
- What was your specific responsibility?
- What goal were you working toward?
- What was at stake?
(1-2 sentences clarifying your role)

**ACTION:**
- What specific steps did YOU take?
- What skills did you use?
- What decisions did you make?
(3-5 sentences showing your process)

**RESULT:**
- What changed?
- What was the measurable impact?
- What did you learn?
(2-3 sentences with quantifiable outcomes)

Format this as a 60-90 second story I can tell naturally in an interview.

Then suggest:
- Which interview questions this story answers well
- How to adapt it for different questions
```

**Expected Output:**
- Complete STAR story (200-250 words)
- Structured for ~60-90 sec telling
- Specific, quantified, compelling
- Mapped to relevant interview questions
- ~400-500 words total

**Note:** This prompt feeds data to the STAR Builder tool below

---

### Prompt 3: "The Behavioral Question Prep"

**Excavates:** Answers to common behavioral interview questions

**Copy-Ready Prompt:**

```
Prepare me for the most common behavioral interview questions.

For each question, suggest:
1. Which of my achievements (from Prompt 1) fits best
2. Key points to emphasize
3. What the interviewer is really asking

**Common Behavioral Questions:**

1. "Tell me about a time you faced a significant challenge."
2. "Describe a situation where you had to work with a difficult team member."
3. "Give an example of when you showed leadership."
4. "Tell me about a time you failed and what you learned."
5. "Describe a situation where you had to meet a tight deadline."
6. "Tell me about a time you had to persuade someone."
7. "Give an example of when you went above and beyond."
8. "Describe a time you had to make a difficult decision."

For each, provide:
- **Best Achievement Match:** [Which story from my list]
- **Key Emphasis:** [What aspect to highlight]
- **Underlying Question:** [What they're really assessing]
- **Answer Skeleton:** [2-3 sentence framework]

I'll use the STAR Builder tool below to expand the strongest matches.
```

**Expected Output:**
- 8 behavioral questions mapped
- Achievement matches suggested
- What interviewers really want to know
- Answer frameworks provided
- ~700-900 words

---

### Prompt 4: "The Weakness Reframe"

**Excavates:** How to answer "What's your greatest weakness?" authentically

**Copy-Ready Prompt:**

```
"What's your greatest weakness?" is a trap question if answered poorly.

Bad answers:
- "I'm a perfectionist" (cliché)
- Fake weakness that's actually a strength
- Actual critical flaw with no plan to improve

Good framework:
1. Real weakness that won't disqualify you
2. Awareness of why it's a weakness
3. Concrete steps you're taking to improve
4. Evidence of progress

Help me craft an authentic weakness answer:

**Consider weaknesses like:**
- Delegation (learning to trust team)
- Public speaking (taking courses, practicing)
- Certain technical skills (actively learning)
- Saying no (setting better boundaries)

For each potential weakness I share, evaluate:
- **Risk Level:** Would this disqualify me for [ROLE]?
- **Authenticity:** Does this feel true to who I am?
- **Growth Story:** Can I show I'm actively improving?

Then draft 2-3 complete answers using this structure:
"Early in my career, I struggled with [WEAKNESS]. I realized this was holding me back when [SPECIFIC EXAMPLE]. Since then, I've [CONCRETE ACTIONS]. For example, [EVIDENCE OF PROGRESS]. I'm not perfect at it yet, but I'm significantly better than I was a year ago."
```

**Expected Output:**
- 2-3 weakness answer drafts
- Each with real weakness + growth narrative
- Specific examples of improvement
- Honest but strategic
- ~500-700 words

---

### Prompt 5: "The Question Reversal Prep"

**Excavates:** Insightful questions to ask the interviewer

**Copy-Ready Prompt:**

```
"Do you have any questions for me?" is not a formality. It's your chance to:
1. Demonstrate strategic thinking
2. Assess culture/role fit
3. Show genuine interest
4. Stand out from other candidates

Generate 10-12 questions I should ask, categorized:

**ROLE CLARITY (3-4 questions):**
- What does success look like in the first 30/60/90 days?
- What are the biggest challenges this role will face?
- How will my performance be measured?

**TEAM DYNAMICS (2-3 questions):**
- How would you describe the team's working style?
- What do you wish someone had told you when you joined?
- What's one thing you'd change about the team if you could?

**COMPANY TRAJECTORY (2-3 questions):**
- What's the company's biggest priority right now?
- How has the company culture evolved in the past year?
- What makes people stay here long-term?

**STRATEGIC INSIGHT (2-3 questions):**
- What's something you're excited about that isn't public yet?
- If I'm successful, what new opportunities might this lead to?
- What's the biggest risk the company is navigating?

For each question, note:
- **Why it's good:** What it reveals about you
- **When to ask:** Early in interview vs. final round
- **Who to ask:** Hiring manager vs. peer vs. exec
```

**Expected Output:**
- 10-12 categorized questions
- Strategic rationale for each
- Timing and audience guidance
- Questions tailored to [TARGET COMPANY/ROLE]
- ~600-800 words

---

### Prompt 6: "The Salary Negotiation Prep"

**Excavates:** How to handle compensation conversations confidently

**Copy-Ready Prompt:**

```
Salary negotiation makes most people uncomfortable. Let's prepare.

**MY CONTEXT:**
- Current/most recent salary: [AMOUNT]
- Target salary for this role: [RANGE]
- Market rate research: [DATA if you have it]
- Leverage: [Competing offers, specialized skills, etc.]

**PREP ME FOR THESE SCENARIOS:**

**Scenario 1: "What are your salary expectations?"**
Early in process, before you know their range.

Draft 2-3 deflection responses that:
- Don't name a number first
- Keep conversation open
- Maintain leverage

**Scenario 2: They make an offer below your target**
How to:
- Acknowledge it professionally
- Request time to consider
- Research data to support your counter
- Make a counteroffer confidently

**Scenario 3: "That's our final offer"**
How to:
- Evaluate if it's actually final
- Negotiate non-salary benefits
- Make a decision framework

For each scenario, provide:
- **Exact phrasing:** What to say verbatim
- **Tone guidance:** Confident, not desperate
- **What NOT to say:** Common mistakes
- **Backup plan:** If negotiation fails

Help me feel prepared, not panicked.
```

**Expected Output:**
- 3 scenarios with scripted responses
- Specific phrasing for each
- Negotiation strategies
- Decision frameworks
- ~700-900 words

---

### Capstone Prompt: "The Interview Game Plan"

**Excavates:** Day-of strategy and confidence boosters

**Copy-Ready Prompt:**

```
The interview is [DATE/TIME]. Create my game plan.

**24 HOURS BEFORE:**
- Final prep checklist
- What to review (not memorize)
- How to manage anxiety
- Logistics (route, outfit, materials)

**1 HOUR BEFORE:**
- Warm-up routine
- Energy management
- Confidence anchors
- Mental framing

**DURING INTERVIEW:**
- Opening strong (first impression)
- Listening actively (not just waiting to talk)
- Handling curveballs (unexpected questions)
- Reading the room (engagement signals)
- Closing powerfully (final impression)

**IMMEDIATELY AFTER:**
- Thank you email timing and content
- Self-assessment (what went well, what to improve)
- Next steps tracking
- Follow-up strategy

For each phase, provide:
- **Specific actions:** What to DO
- **Mental game:** How to THINK
- **Recovery plan:** If something goes wrong

Make this feel like a coach in my corner.
```

**Expected Output:**
- Hour-by-hour game plan
- Specific actions for each phase
- Anxiety management techniques
- Confidence strategies
- ~700-900 words

---

## INTERACTIVE TOOL SPECIFICATION

### Tool Name: **STAR Method Story Builder**

**What It Does:**  
Transforms vague achievements into structured, compelling STAR (Situation, Task, Action, Result) stories ready for interviews. Users input raw achievement, tool prompts for STAR components, generates polished 60-90 second story.

### User Input Fields

```javascript
// Step 1: Raw Achievement
achievement: string (e.g., "Led team project that finished early")

// Step 2: STAR Components (guided prompts)
situation: {
  context: string ("What was happening?"),
  challenge: string ("What problem existed?"),
  stakes: string ("Why did this matter?")
}

task: {
  responsibility: string ("What was YOUR role?"),
  goal: string ("What were you trying to achieve?")
}

action: {
  steps: array of strings ("What specific actions did YOU take?"),
  skills: array of strings ("What skills did you use?"),
  decisions: string ("What key decisions did you make?")
}

result: {
  outcome: string ("What changed?"),
  metrics: string ("Quantifiable impact?"),
  learning: string ("What did you learn?")
}
```

### Processing Logic

```javascript
function buildSTARStory(input) {
  // Validate completeness
  if (!input.situation || !input.task || !input.action || !input.result) {
    return { error: "Complete all sections" };
  }
  
  // Generate story structure
  const story = {
    opening: generateOpening(input.situation),
    task: generateTask(input.task),
    actions: generateActions(input.action),
    conclusion: generateConclusion(input.result),
    full: ""
  };
  
  // Stitch together
  story.full = `${story.opening} ${story.task} ${story.actions} ${story.conclusion}`;
  
  // Calculate metrics
  const wordCount = story.full.split(' ').length;
  const estimatedSeconds = Math.round(wordCount / 2.5); // ~150 wpm speaking
  
  // Generate variations
  const variations = {
    short: generateShortVersion(story, 45), // 45-second version
    long: generateLongVersion(story, 120)   // 2-minute version
  };
  
  // Map to interview questions
  const questionMatches = suggestQuestions(input);
  
  return {
    story: story.full,
    wordCount,
    estimatedSeconds,
    variations,
    questionMatches,
    breakdown: {
      situation: story.opening,
      task: story.task,
      action: story.actions,
      result: story.conclusion
    }
  };
}

function generateOpening(situation) {
  return `${situation.context} ${situation.challenge} ${situation.stakes}`.trim();
}

function generateTask(task) {
  return `My role was to ${task.responsibility}, with the goal of ${task.goal}.`;
}

function generateActions(action) {
  const steps = action.steps.map((step, i) => 
    i === 0 ? `I ${step}` : `then ${step}`
  ).join(', ');
  
  return `${steps}. This required ${action.skills.join(', ')}.`;
}

function generateConclusion(result) {
  let conclusion = `As a result, ${result.outcome}.`;
  if (result.metrics) {
    conclusion += ` Specifically, ${result.metrics}.`;
  }
  if (result.learning) {
    conclusion += ` This experience taught me ${result.learning}.`;
  }
  return conclusion;
}

function suggestQuestions(input) {
  const questions = [];
  
  // Map based on content
  if (input.situation.challenge.includes('conflict|difficult')) {
    questions.push("Tell me about a time you faced a challenge");
  }
  if (input.action.skills.includes('leadership|led|managed')) {
    questions.push("Give an example of when you showed leadership");
  }
  if (input.result.metrics) {
    questions.push("Describe a time you delivered measurable results");
  }
  
  return questions;
}
```

### Output Display

**Visual Layout:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  YOUR STAR STORY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Story Metrics:
• Word Count: 187 words
• Estimated Time: ~75 seconds
• Target Length: ✓ PERFECT (60-90 sec range)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📖 FULL STORY (Copy-Ready):

[Situation]
Our product team was facing a 40% customer churn rate, 
primarily due to confusing onboarding. Leadership wanted 
this fixed before Q4, as we were at risk of missing 
revenue targets.

[Task]
My role was to redesign the entire onboarding flow, 
with the goal of reducing churn to under 20% within 
3 months.

[Action]
I started by conducting user interviews with 30 recent 
churned customers to identify pain points, then created 
5 prototypes and ran A/B tests. The data showed users 
needed in-app guidance, not documentation. I worked 
with engineering to implement contextual tooltips and 
built an interactive product tour.

[Result]
As a result, churn dropped to 18% within 2 months. 
Specifically, we saved an estimated $480K in annual 
recurring revenue. This experience taught me that 
assumptions about users are often wrong—data reveals 
the truth.

[Copy Story] [Edit] [Save to Library]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 BEST FOR THESE QUESTIONS:
• "Tell me about a time you faced a significant challenge"
• "Describe a situation where you delivered measurable results"
• "Give an example of data-driven decision making"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 VARIATIONS:

Short Version (45 sec):
[Condensed to key points]

Long Version (2 min):
[Expanded with more detail]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Export Options

- **Copy to Clipboard** — Full story, ready to paste
- **Download as Doc** — .docx with all variations
- **Save to Library** — Store multiple stories for different questions
- **Print Prep Sheet** — PDF with story + question matches

### Why It Works Without AI

**Pure template assembly:**
- Structured input fields guide completeness
- Story stitching follows proven STAR formula
- Word count / time calculation (math)
- Question matching (keyword detection)
- No API calls needed

**Deterministic structure:**
- Same inputs → same output
- Transparent formula (users see the logic)
- Educational (teaches STAR method through use)

---

## PAGE STRUCTURE

### 1. Hero Section

**Headline:**  
"Ace Your Interview with Preparation, Not Luck"

**Subheadline:**  
"Structured prompts + STAR story builder to transform vague achievements into compelling interview answers. Get the offer."

**Visual:**  
Ascending steps visual with "Interview Success" at the top, glowing achievement markers along the path

**CTA:**  
"Build Your First STAR Story ↓"

**Supporting Text:**  
"Used by 3,100+ job seekers to land roles at Google, Meta, startups, and beyond."

---

### 2. Why This Approach Works

**Section Title:** "Why Most Interview Prep Fails"

**Content:**

```markdown
**The Problem:**  
Generic "Tell me about yourself" scripts. Memorized answers that sound robotic. No real preparation, just hope.

**Our Approach:**

1. **Inventory Achievements** — Start with concrete wins
2. **Structure Stories** — Use proven STAR method
3. **Anticipate Questions** — Prep for 80% of interviews
4. **Authentic Answers** — Sound like you, not a script
5. **Build Confidence** — Preparation eliminates anxiety

**The Result:**  
You walk into the interview clear on your value, ready with stories, confident in your preparation. You get the offer.

**Based on:**
- STAR behavioral interview methodology
- Interviewer perspective research
- Negotiation best practices
- Performance psychology
```

---

### 3. The STAR Story Builder Tool

**Section Title:** "Turn Achievements into Interview Stories"

**Intro:**  
"Most people can't articulate their wins compellingly. This tool structures your achievements using the STAR method—the format interviewers love."

**Tool Placement:**  
Prominent, above the fold, can't miss it

**Instructions:**
1. Enter a raw achievement
2. Answer guided prompts (S-T-A-R)
3. Get a polished 60-90 second story
4. See which questions it answers
5. Copy and practice

---

### 4. The Prompt Suite

**Section Title:** "The 7 Interview Prep Prompts"

**Layout:**  
Progressive disclosure (accordion or tabs)

**Prompts:**
1. Achievement Inventory
2. STAR Story Builder (feeds tool)
3. Behavioral Question Prep
4. Weakness Reframe
5. Question Reversal Prep
6. Salary Negotiation Prep
7. Interview Game Plan

---

### 5. Pro Tips

**Section Title:** "Interview Like a Pro"

**Tips:**

1. **Practice Out Loud** — Stories sound different when spoken
2. **Record Yourself** — Video practice reveals filler words
3. **2-3 Core Stories** — Cover 80% of questions with variation
4. **Specificity Wins** — "Increased by 40%" beats "made improvements"
5. **Ask Great Questions** — Shows strategic thinking
6. **Follow Up Fast** — Thank you email within 24 hours

---

### 6. What You'll Gain

**Section Title:** "Expected Outcomes"

**Grid:**

- 💼 **Compelling Stories** — 8-10 STAR stories for any interview
- 🎯 **Behavioral Prep** — Answers to 20+ common questions
- 💬 **Authentic Confidence** — Sound like you, not a script
- 💰 **Negotiation Strategy** — Handle salary talks professionally
- 📋 **Game Plan** — Day-of strategy to reduce anxiety
- ✨ **Stand Out** — Memorable answers that get offers

---

### 7. FAQ

**Questions:**

1. **How many STAR stories do I need?**  
   3-5 core stories that you can adapt for different questions.

2. **What if I don't have impressive achievements?**  
   Start smaller. Even "improved team process" counts if you structure it well.

3. **Should I memorize my answers?**  
   No. Internalize the structure, not the script. Sound natural.

4. **How do I handle questions I didn't prepare for?**  
   Use the STAR framework on the fly. Buy time: "That's a great question. Let me think..."

5. **What about phone vs. video vs. in-person?**  
   Same prep, different delivery. Video = make eye contact with camera. Phone = stand up (energy).

6. **How long before the interview should I start?**  
   1-2 weeks minimum. More for senior roles.

7. **What if they ask illegal questions?**  
   Redirect gracefully or answer the intent. Flag it if offered the role.

8. **How do I know if the interview went well?**  
   Engaged conversation, time went long, next steps discussed. But don't overthink it.

---

### 8. Related Chambers

**Cross-Links:**

- → [Resume & Cover Letter Prompts](#) — Before the interview
- → [LinkedIn Prompts](#) — Professional brand building
- → [Career Planning Prompts](#) — Long-term strategy
- → [Salary Negotiation Prompts](#) — Deep dive on compensation

---

## SEO STRATEGY

### Target Keywords

**Primary:**
- "interview preparation prompts" (10K/mo, difficulty: 50/100)

**Secondary:**
- "STAR method examples" (8K/mo, 45/100)
- "behavioral interview questions" (15K/mo, 60/100)
- "interview questions to ask" (12K/mo, 55/100)
- "how to prepare for interview" (20K/mo, 65/100)

**Long-Tail:**
- "STAR method story builder"
- "behavioral interview prep"
- "how to answer weakness question"
- "interview questions for employer"
- "salary negotiation script"
- "interview prep checklist"
- "STAR interview examples"
- "common interview questions answers"
- "how to stand out in interview"
- "interview confidence tips"

### Meta Tags

**Title (59 chars):**  
"Interview Prep Prompts + STAR Story Builder | Best Prompts"

**Description (154 chars):**  
"Ace your interview with 7 prep prompts + free STAR story builder. Transform achievements into compelling answers. Build confidence, get the offer."

**OG Image:**  
STAR Story Builder output (polished story example)

### Structured Data

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Prepare for a Job Interview",
  "description": "7-step interview preparation framework with STAR stories",
  "tool": {
    "@type": "SoftwareApplication",
    "name": "STAR Method Story Builder",
    "applicationCategory": "BusinessApplication"
  }
}
```

### Internal Linking

**From this page:**
- LinkedIn Prompts (same job-seeking audience)
- Resume Prompts (pre-interview)
- Career Planning (broader context)

**To this page:**
- Homepage
- Blog: "STAR method explained"
- Blog: "Common interview mistakes"

---

## DESIGN RATIONALE

### Why This Visual System?

**Ascending Path Metaphor:**
- Interview success IS a journey → upward trajectory
- Steps = preparation stages
- Confidence = upward momentum

**Color Psychology:**
- Blue (confidence) = professionalism, trust, clarity
- Green (success) = achievement, winning, offers
- Amber (preparation) = readiness, energy, action
- Purple (premium) = executive level, high value

**Typography:**
- Outfit = strong, confident, modern
- Nunito Sans = professional clarity
- Source Code Pro = structured data (STAR)

### Differentiation

**From Decision-Making:**
- That's contemplative → This is action-oriented
- That's internal → This is external performance

**From LinkedIn:**
- That's ongoing brand → This is one-time high-stakes
- That's content creation → This is conversation prep

**Screenshot-Worthy:**
- STAR Story Builder output
- Users share: "Used this to prep. Nailed the interview. Got the offer 🎉"

---

## MIND-BLOWING MOMENT

**The Moment:**  
User inputs vague achievement ("managed a project") into STAR Builder, answers guided prompts, clicks "Generate Story," and sees a polished, compelling 75-second story with specific metrics and clear structure.

**What Happens:**
1. STAR sections fill sequentially (visual progression)
2. Word count and time display (shows it's interview-ready)
3. Question matches appear (shows versatility)
4. User reads it and thinks: "This sounds WAY better than what I would've said"
5. Copies it directly into prep doc

**Why It's Powerful:**
- **Instant Transformation:** Vague → Specific → Compelling
- **Time Estimate:** "75 seconds" = immediately usable
- **Question Mapping:** Shows this one story answers 3+ questions
- **Copy-Ready:** No editing needed, use as-is

**The User Thought:**  
"I've been underselling this achievement for years. THIS is how I should talk about it."

**The Share:**  
After getting the offer: "Prepped for my interview using this STAR story builder. Walked in confident, answered every question with a real story. Got the offer. 10/10."

---

## VALIDATION CHECKLIST

- [ ] Keyword research confirms 20K+ monthly searches
- [ ] STAR Builder generates high-quality stories (test with 10+ users)
- [ ] Prompts cover 80% of common interview scenarios
- [ ] Salary negotiation scripts are professionally sound
- [ ] Tool works on mobile (candidates prep on phones)
- [ ] Export functions work (copy, download, save)
- [ ] Game plan reduces actual anxiety (user feedback)

---

## SUCCESS METRICS

### Launch Targets (Month 1)

- 1,500+ organic pageviews
- 200+ STAR stories generated
- 100+ email signups
- 30+ social shares (success stories)
- 3+ testimonials (got the job)

### Growth Targets (Month 6)

- Rank top 5 for "interview preparation prompts"
- 10,000+ monthly pageviews
- 1,500+ STAR stories generated monthly
- 500+ email subscribers
- Featured in 3+ career advice newsletters

### Long-Term Success

- Rank #1-3 for "STAR method examples"
- 25,000+ monthly pageviews
- Recognized as THE interview prep resource
- Testimonials: "Used this, got the job at [Company]"

---

**Concept Status:** ✅ Complete  
**Ready for:** Design mockups + technical build  
**Estimated Build Time:** 40-55 hours (tool + prompts)  
**Priority:** Build FIFTH (proven demand, competitive differentiation through tool)

---

_Concept created by SELF Council (Architect + Oracle + Creator)_  
_Confidence: 0.75 (strong niche, tool provides clear value)_

