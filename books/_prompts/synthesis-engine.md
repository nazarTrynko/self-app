# Synthesis Engine Prompt

## Purpose
Transform two source books/frameworks into a novel synthesis with unique protocols, interactive tools, and a complete product system.

---

## The Synthesis Creation Workflow

```
┌─────────────────────────────────────────────────────────────────┐
│                    SYNTHESIS ENGINE                              │
│                                                                  │
│  INPUT: Two source frameworks with complementary tension         │
│                                                                  │
│  PROCESS:                                                        │
│  ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐         │
│  │ Extract │ → │  Map    │ → │ Design  │ → │ Package │         │
│  │ Concepts│   │ Bridges │   │Protocols│   │ System  │         │
│  └─────────┘   └─────────┘   └─────────┘   └─────────┘         │
│                                                                  │
│  OUTPUT: Named system + 5-7 protocols + 3 tools + landing copy   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Master Synthesis Prompt

Use this prompt to generate a complete synthesis:

```markdown
You are a Synthesis Architect creating a novel transformation framework.

## SOURCE MATERIALS

### Source A: [THEORY/WHAT]
- **Title**: [Book/Framework name]
- **Author**: [Name]
- **Core Thesis**: [One sentence - what is the main argument?]
- **Key Concepts**: [List 3-5 main concepts]
- **Transformation Promise**: [What change does it enable?]
- **Limitation**: [What doesn't it address?]

### Source B: [TECHNIQUE/HOW]
- **Title**: [Book/Framework name]
- **Author**: [Name]
- **Core Thesis**: [One sentence - what is the main argument?]
- **Key Mechanics**: [List 3-5 practical techniques]
- **Transformation Promise**: [What change does it enable?]
- **Limitation**: [What doesn't it address?]

## TARGET AUDIENCE
- **Who specifically**: [Be precise - role, situation, trigger]
- **Their current pain**: [What frustrates them?]
- **Their desired state**: [What do they want?]
- **Why existing solutions fail them**: [Gap in the market]

## SYNTHESIS REQUIREMENTS

Generate a complete synthesis including:

### 1. SYNTHESIS THESIS
- One powerful sentence capturing the novel insight
- Why BOTH sources are needed (not just one)
- What becomes possible that neither enables alone

### 2. SYSTEM NAME
- Memorable, evocative name for the synthesis
- Follow pattern: "The [Noun] [Noun]" or "The [Adjective] [Noun]"
- Must imply transformation

### 3. PROTOCOLS (5-7)
For each protocol:
- **Name**: [Evocative 2-3 words]
- **Source A Concept**: [What theoretical foundation]
- **Source B Mechanic**: [What technique enables it]
- **Novel Contribution**: [What's new in this synthesis]
- **Time Required**: [X minutes]
- **Inputs**: [What user provides]
- **Steps**: [3-5 clear actions]
- **Outputs**: [What user gets]
- **Transformation**: [From X state → To Y state]

### 4. INTERACTIVE TOOLS (3)
Design three web-based tools:

**Tool 1: Mapper** (60-90 seconds)
- Helps user visualize their current state
- Input → Visual output

**Tool 2: Analyzer** (45-60 seconds)
- Provides insight on user's input
- Text → Analysis with scores/categories

**Tool 3: Generator** (30-60 seconds)
- Creates personalized output
- Selections → Custom script/ritual/plan

### 5. LANDING PAGE COPY
- **Hero Headline**: [Powerful, transformation-focused]
- **Hero Subheadline**: [Clarifies who and what]
- **Core Insight**: [The "aha" that hooks them]
- **Three Portals**: [Names for the 3 main approaches]
- **Social Proof**: [What would testimonials say?]
- **CTA**: [Action phrase]

### 6. POSITIONING
- **Category**: [What shelf does this sit on?]
- **Competitive Alternative**: [What do people do today?]
- **Unique Angle**: [Why choose this?]
- **Positioning Statement**: "For [WHO], [PRODUCT] is [CATEGORY] that [BENEFIT] unlike [ALTERNATIVES] which [LIMITATION]."

## OUTPUT FORMAT

Provide the complete synthesis in structured markdown with clear sections for each requirement above.
```

---

## Phase 1: Source Evaluation Prompt

Before committing to a synthesis, evaluate the sources:

```markdown
I'm considering synthesizing these frameworks. Evaluate the synthesis potential:

## Source A
- Title: [Name]
- Core Thesis: [Summary]

## Source B
- Title: [Name]  
- Core Thesis: [Summary]

## Evaluation Questions

1. **TENSION**: What's the productive disagreement or gap between them?
   - If they agree completely → weak synthesis (just a summary)
   - If they contradict completely → forced synthesis (incoherent)
   - IDEAL: They address different aspects of the same transformation

2. **BRIDGE**: How could they complement each other?
   - Source A provides [X], Source B provides [Y]
   - Together they enable [Z] that neither does alone

3. **AUDIENCE**: Who specifically needs this synthesis?
   - Not just "people who want to change"
   - Specific: [Role] + [Situation] + [Trigger]

4. **TRANSFORMATION**: What becomes possible?
   - Before: [Specific state]
   - After: [Specific state]
   - Through: [The mechanism your synthesis enables]

5. **DIFFERENTIATION**: What exists already?
   - Similar books/approaches:
   - Your unique angle:
   - Why someone would choose yours:

## Verdict
- [ ] PROCEED: Strong tension, clear bridge, specific audience, novel value
- [ ] REFINE: Potential but needs [X] adjustment
- [ ] KILL: Weak synthesis, no clear differentiation
```

---

## Phase 2: Deep Extraction Prompt

Once sources are selected, extract fully:

```markdown
Complete a deep extraction for this source:

## Source: [Title]
## Author: [Name]

### CORE THESIS (one powerful sentence)
[What is the central argument?]

### KEY CONCEPTS (5-7)
For each concept:
1. **[Concept Name]**
   - Definition: [What is it?]
   - Mechanism: [How does it work?]
   - Application: [When/how to use it?]
   - Evidence: [What supports it?]

### CORE MECHANICS (3-5 techniques)
For each technique:
1. **[Technique Name]**
   - What you do: [Specific actions]
   - What happens: [Expected outcome]
   - Duration: [Time required]
   - Prerequisites: [What's needed first]

### TRANSFORMATION PROMISE
- FROM: [Before state - be specific and emotional]
- TO: [After state - be specific and emotional]
- THROUGH: [The mechanism of change]

### LIMITATIONS (honest assessment)
- What it doesn't address:
- Where it breaks down:
- Who it doesn't serve:
- Common criticisms:

### INTEGRATION HOOKS
- Concepts that could connect to other frameworks:
- Techniques that could combine:
- Gaps that need filling:

### QUOTABLE INSIGHTS
- [Quote that captures essence]
- [Quote that would resonate with readers]
```

---

## Phase 3: Protocol Design Prompt

Design individual protocols:

```markdown
Design a synthesis protocol with these components:

## PROTOCOL CONTEXT
- Synthesis Name: [Name]
- Source A Concept: [Concept being integrated]
- Source B Mechanic: [Technique being applied]
- Protocol Number: [X of Y]

## PROTOCOL DESIGN

### Name
[Evocative 2-3 word name that implies transformation]

### Positioning in Sequence
- Prerequisites: [Any earlier protocols needed?]
- Follows naturally from: [What comes before?]
- Leads naturally to: [What comes after?]

### The Promise
[One sentence: What will the user be able to do/experience after?]

### Time & Difficulty
- Duration: [X minutes]
- Difficulty: [Beginner/Intermediate/Advanced]
- Modality: [Written/Spoken/Physical/Meditative]

### Inputs Required
- [What user must provide or prepare]
- [Materials/space/time needed]

### Step-by-Step Process
1. **[Step Name]** (X minutes)
   - Instruction: [Exactly what to do]
   - Purpose: [Why this step matters]
   - Cues: [How to know you're doing it right]

2. **[Step Name]** (X minutes)
   - Instruction: [Exactly what to do]
   - Purpose: [Why this step matters]
   - Cues: [How to know you're doing it right]

[Continue for all steps...]

### Outputs
- Tangible: [What they'll have created/written/done]
- Experiential: [What they'll feel/understand]
- Preparatory: [What this sets up for next]

### Transformation Statement
> "Before this protocol, you [old state]. After, you [new state]."

### Common Obstacles & Solutions
- If [problem]: Try [solution]
- If [problem]: Try [solution]

### Variations
- Shorter version (for validation landing): [Compressed approach]
- Deeper version (for book): [Extended approach]
- Group version (for workshops): [Adapted approach]
```

---

## Phase 4: Tool Design Prompt

Design interactive web tools:

```markdown
Design an interactive web tool for the synthesis landing page:

## TOOL CONTEXT
- Synthesis Name: [Name]
- Tool Type: [Mapper/Analyzer/Generator]
- Related Protocol: [Which protocol does this sample?]

## TOOL DESIGN

### Name
[Short, evocative name - e.g., "Transition Map", "Story Analyzer", "State Script"]

### Purpose
[One sentence: What insight does user gain?]

### Time to Complete
[30/45/60/90 seconds]

### User Flow

**1. Introduction (5 seconds)**
- Headline: [What they'll discover]
- Subtext: [Brief instruction]

**2. Input Collection**
- Input Type: [Text field/Dropdown/Slider/Multiple choice]
- Input 1: [Label + Placeholder]
- Input 2: [Label + Placeholder]
- Input 3: [Label + Placeholder]

**3. Processing**
- Show loading state? [Yes/No]
- Processing message: [e.g., "Mapping your transition..."]

**4. Results Display**
- Visual Component: [Chart/Map/Cards/Highlighted text]
- Key Insight: [What to emphasize]
- Personalized Element: [How it uses their input]
- Action Prompt: [What to do with this insight]

### Result Logic

```javascript
// Pseudocode for result generation
function generateResult(inputs) {
    // Describe the logic that transforms inputs to outputs
    // What patterns are you detecting?
    // What categories might users fall into?
    // What personalized insights emerge?
}
```

### Shareability
- Shareable output format: [Image/Text/Link]
- Share prompt: [What message encourages sharing?]

### Connection to Full System
- This tool demonstrates: [Which concept from the synthesis]
- Full version in book includes: [What's the upgrade?]
- CTA after completion: [What do you want them to do next?]
```

---

## Phase 5: Landing Copy Prompt

Generate landing page copy:

```markdown
Generate landing page copy for this synthesis:

## SYNTHESIS SUMMARY
- Name: [System name]
- Thesis: [One-sentence synthesis]
- Audience: [Specific who]
- Transformation: [From → To]

## LANDING PAGE SECTIONS

### 1. HERO
- Badge: [e.g., "A Manifesto for People in Transition"]
- Headline: [Powerful, action-oriented]
- Subheadline: [Clarifies transformation]
- CTA Button: [Action phrase]

### 2. CORE INSIGHT
- Label: [e.g., "The Core Insight"]
- Statement: [The "aha" moment in one paragraph]

### 3. RESEARCH FOUNDATION
- Label: [e.g., "Built on Decades of Science"]
- Source A Card: [Icon, Title, Author, Description]
- Source B Card: [Icon, Title, Author, Description]
- Synthesis Statement: [How they combine]

### 4. THE PROTOCOLS
- Section Title: [e.g., "What This Book Teaches"]
- Subtitle: [e.g., "Six Synthesis Protocols"]
For each protocol:
- Number: [01, 02, etc.]
- Name: [Protocol name]
- Description: [One sentence]

### 5. TESTIMONIALS (hypothetical)
Three testimonials that would resonate:
1. "[Quote]" — [Name], [Title/Context]
2. "[Quote]" — [Name], [Title/Context]  
3. "[Quote]" — [Name], [Title/Context]

### 6. CALL TO ACTION
- Headline: [Urgency/value proposition]
- Subtext: [What they get]
- Email placeholder: [e.g., "your@email.com"]
- Button text: [Action phrase]
- Trust text: [e.g., "Join X others. No spam."]

### 7. DISCLAIMER
[Appropriate hedging about claims, not therapy, etc.]
```

---

## Quick Synthesis Checklist

Before launching a synthesis:

### Source Selection
- [ ] Two sources with complementary tension
- [ ] Clear bridge between them
- [ ] Specific target audience identified
- [ ] Novel transformation articulated

### Extraction
- [ ] Core thesis extracted for each source
- [ ] Key concepts mapped (5-7 each)
- [ ] Core mechanics documented (3-5 each)
- [ ] Limitations acknowledged

### Synthesis
- [ ] System named (memorable, evocative)
- [ ] 5-7 protocols designed
- [ ] Each protocol has clear transformation
- [ ] Protocols build on each other

### Tools
- [ ] Mapper tool designed (visualize state)
- [ ] Analyzer tool designed (provide insight)
- [ ] Generator tool designed (create output)
- [ ] Each tool takes <90 seconds

### Landing
- [ ] Hero copy written
- [ ] Core insight articulated
- [ ] Protocols previewed
- [ ] Email capture designed
- [ ] Disclaimer included

### Validation
- [ ] Validation landing built
- [ ] Analytics tracking set up
- [ ] Traffic plan ready
- [ ] Kill gates defined

---

## Example Synthesis: The Transition Rite

**Source A**: McAdams' Narrative Identity Theory
- Thesis: Identity is the story we tell about ourselves
- Key concepts: Redemption sequences, contamination, nuclear episodes
- Promise: Understand how your story shapes your identity

**Source B**: Bandler's NLP State-Change
- Thesis: States can be changed through specific techniques
- Key mechanics: Anchoring, submodalities, state elicitation
- Promise: Shift your emotional/physiological state at will

**Synthesis**: The Transition Rite
- Thesis: You can't write a new story from an old state—change state first, then rewrite the narrative
- Novel insight: State precedes story
- Protocols: Transition Map, State Anchor, Story Rewrite, Redemption Flip, Identity Bridge, 60-Second Ritual

---

**Synthesis Engine v1.0**
*Create. Validate. Transform.*


