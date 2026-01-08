# Conversation Mining: Self-Extraction Prompt Suite

**Date:** 2026-01-08  
**Session Type:** Prompt Engineering for Self-Excavation  
**Primary Domain:** Personal narrative → Songwriting material

---

## 1. SESSION ESSENCE

Beneath the surface task of "create prompts for ChatGPT," this conversation was about solving the problem of **self-knowledge extraction**—how do you get an AI with years of memory about you to synthesize that knowledge into *usable creative material* rather than factual summaries? The real challenge wasn't prompting; it was **mode-shifting the AI from librarian to alchemist**. The journey moved from vague intention ("collect me as a person into metaphorical stories") through calibration (what dimensions? what format?) to a complete five-prompt architecture that treats accumulated conversational history as raw ore for mythological transmutation. The breakthrough was realizing that memory retrieval and creative synthesis require fundamentally different framings.

---

## 2. THE PEARLS

### Pearl 1: The Alchemist vs. Librarian Frame

**The Insight:** Prompts that extract creative value from memory must explicitly reframe the AI's role from information retrieval to transformation.

**Exact Quote:** 
> "These prompts treat your ChatGPT memory as raw ore and ask the AI to be an alchemist, not a librarian."

**Why It Matters:** Most people prompt AI to *recall* from memory. This frame unlocks *synthesis*—pattern recognition across time, compression into imagery, transmutation of facts into symbols. Applicable any time you want AI to work creatively with accumulated context.

---

### Pearl 2: The Anti-Analyst Directive

**The Insight:** Creative output requires explicitly forbidding analytical output. AI defaults to explanation unless redirected.

**Exact Quote:**
> "Don't explain — just transmute. Be a poet, not an analyst."

**Why It Matters:** Without this directive, AI will hedge, contextualize, and explain the metaphors instead of simply *producing* them. This single line prevents the most common failure mode of creative prompting.

---

### Pearl 3: The Paradox Pairs Structure

**The Insight:** Internal contradictions are the richest source material for art, and they can be systematically extracted by asking for "two truths that collide."

**Exact Quote:**
> "Find the places where two truths about me collide... These should feel true and uncomfortable. The best songs live in the contradictions."

**Why It Matters:** This gives AI permission to surface uncomfortable truths the user might not consciously articulate. It's a prompt structure for accessing psychological depth.

---

### Pearl 4: The Belief Totem Constraint

**The Insight:** Generic metaphors can be avoided by specifying what NOT to produce and demanding strangeness.

**Exact Quote:**
> "Be specific and strange (not generic — no 'lighthouse of hope')"

**Why It Matters:** AI defaults to cliché. This "anti-example" technique steers toward originality. Reusable in any creative prompt where you want distinctive output.

---

### Pearl 5: Synthesis Requires Prior Excavation

**The Insight:** Comprehensive synthesis works best when preceded by dimension-by-dimension extraction.

**Exact Quote:**
> "Run prompts 1-4 first... Then run Prompt 5 last — it synthesizes everything into a unified mythological image."

**Why It Matters:** Jumping straight to "tell me my essence" yields shallow results. The five-prompt architecture builds layers of material before asking for integration.

---

### Pearl 6: The Hook Extraction Follow-Up

**The Insight:** Raw metaphorical material needs a secondary pass to extract actionable creative hooks.

**Exact Quote:**
> "After each prompt, ask a follow-up: 'Now give me 3 single lines from this material that could open a song.'"

**Why It Matters:** This bridges the gap between "interesting imagery" and "usable lyric." The technique applies to any creative extraction—ask for the hook after the exploration.

---

## 3. TECHNIQUE INVENTORY

### Technique 1: Dimensional Excavation

**The Pattern:** Instead of asking one broad question, decompose the target into distinct dimensions and extract each separately before synthesis.

**Example from Conversation:** Struggles → Beliefs → Contradictions → Patterns → Synthesis (5 prompts, not 1)

**When to Use:** Any time you need comprehensive extraction from complex source material. Works for personal narratives, product feedback, research synthesis.

---

### Technique 2: Role Transmutation

**The Pattern:** Explicitly name the role you want AI to inhabit AND the role you want it to abandon.

**Example from Conversation:** "Be a poet, not an analyst" / "Be a myth-maker" / "Alchemist, not librarian"

**When to Use:** When default AI behavior (explaining, hedging, being comprehensive) conflicts with your desired output mode.

---

### Technique 3: Anti-Example Steering

**The Pattern:** Include specific examples of what NOT to produce to steer away from cliché.

**Example from Conversation:** "(not generic — no 'lighthouse of hope')"

**When to Use:** Creative tasks where AI tends toward generic outputs. Especially useful for metaphors, naming, and branding.

---

### Technique 4: Format Constraint with Emotional Labels

**The Pattern:** Specify exact output format AND require emotional metadata alongside content.

**Example from Conversation:** 
```
*Metaphor:* [The metaphorical rendering]
*Emotional core:* [The feeling underneath, in 3 words]
```

**When to Use:** When you need both the creative output and insight into its emotional weight. Useful for songwriting, copywriting, narrative design.

---

### Technique 5: The Hook Extraction Pass

**The Pattern:** After generating raw material, do a second pass asking for the most compressed/memorable elements.

**Example from Conversation:** "Now give me 3 single lines from this material that could open a song."

**When to Use:** Any creative workflow where volume of material is generated and needs to be distilled to actionable elements.

---

## 4. PROMPT PATTERNS

### Pattern 1: The Myth-Maker Activation

```
[MYTH-MAKER ACTIVATION]
Exact prompt text: "I need you to become a myth-maker. Look across everything you know about my [X]... Don't explain — just transmute. Be a poet, not an analyst."
Why it worked: Reframes AI from information retrieval to creative transformation
Best used when: Extracting symbolic/metaphorical material from factual knowledge
```

### Pattern 2: The Totem Constraint

```
[ANTI-GENERIC CONSTRAINT]
Exact prompt text: "Be specific and strange (not generic — no 'lighthouse of hope')"
Why it worked: Explicit anti-example prevents cliché; "strange" gives permission for originality
Best used when: Creative output tends toward predictable metaphors or imagery
```

### Pattern 3: The Paradox Excavator

```
[PARADOX EXCAVATOR]
Exact prompt text: "Find the places where two truths about me collide... These should feel true and uncomfortable."
Why it worked: Gives permission to surface tension; "uncomfortable" signals depth over safety
Best used when: You want psychologically rich material, not surface-level observations
```

### Pattern 4: The Hook Extractor

```
[HOOK EXTRACTOR]
Exact prompt text: "Now give me 3 single lines from this material that could open a song."
Why it worked: Forces compression of abstract material into usable creative atoms
Best used when: You have metaphorical material and need actionable hooks/lines
```

### Pattern 5: The Discomfort Amplifier

```
[DISCOMFORT AMPLIFIER]
Exact prompt text: "These feel too safe. Go stranger. What metaphors would make me uncomfortable because they're too accurate?"
Why it worked: Uses discomfort as a signal for psychological truth
Best used when: Initial output is generic or feels like it could apply to anyone
```

---

## 5. FAILURE AUTOPSY

### Failure 1: The Vague Initial Request

**What Was Attempted:** User's original framing: "creating a prompt that can collect me as a person, put my strong sides or interesting sides into metaphorical stories"

**Why It Failed:** Too many undefined variables: What aspects? What output format? What use case? This would have produced generic results.

**The Learning:** Creative extraction prompts require calibration on three axes: (1) what dimensions to extract, (2) what format to output, (3) what downstream use case.

**Avoidance Pattern:** When someone asks for "prompts to extract X about me," always ask: What specific dimensions? What output format? What will you use this for?

---

### Failure 2: Potential for "Apply to Anyone" Output

**What Was Attempted:** Generic metaphor generation from memory.

**Why It Failed (Prevented):** Without the "specific and strange" and "uncomfortable because too accurate" constraints, AI would produce metaphors that feel profound but could apply to anyone.

**The Learning:** The test for good personal extraction is: "Would this also describe someone else?" If yes, go deeper.

**Avoidance Pattern:** Always include specificity constraints and discomfort signals when extracting personal material.

---

## 6. TRANSFER POTENTIAL

| Insight | Original Context | Transfer Domain 1 | Transfer Domain 2 |
|---------|------------------|-------------------|-------------------|
| Alchemist vs. Librarian | Extracting self for songs | Product feedback → Brand voice | Research notes → Thesis argument |
| Dimensional Excavation | Personal essence (5 prompts) | Customer interviews → Personas | Historical events → Documentary structure |
| Paradox Pairs | Internal contradictions | Brand identity → Tension points | Character development → Internal conflict |
| Anti-Example Steering | Avoiding cliché metaphors | Naming products → Avoiding genericness | Writing headlines → Avoiding clickbait patterns |
| Hook Extraction Pass | Metaphors → Song openers | Strategy docs → Executive summary | Research → Tweetable insights |
| Synthesis After Dimensions | Final myth after extraction | Sprint retros → Quarter summary | Chapter drafts → Book thesis |

---

## 7. SEEDS FOR FUTURE EXPLORATION

### Seed 1: The Reverse—Songs to Self

**The Thread:** If prompts can extract self → songs, what about reverse-engineering existing songs a person loves to understand what they reveal about that person?

**Why It's Promising:** Music taste as a mirror. The songs you love might encode aspects of self you can't articulate directly.

**Exploration Prompt:** "Here are 10 songs that have deeply affected me throughout my life. Analyze what themes, emotional patterns, and psychological truths these songs collectively reveal about who I am."

---

### Seed 2: The Living Document

**The Thread:** The extraction prompts produce material once. What about a living document that evolves as more conversations accumulate?

**Why It's Promising:** Identity isn't static. A periodic re-extraction could show personal evolution over time.

**Exploration Prompt:** "Compare my current paradox pairs to the ones from 6 months ago. What tensions have resolved? What new ones have emerged?"

---

### Seed 3: The Collaborative Mythology

**The Thread:** What if multiple people who know you each contribute to your mythology? How do their perspectives create a more complete picture?

**Why It's Promising:** Self-perception has blind spots. Others see patterns we can't.

**Exploration Prompt:** "If three people who know me well—[A], [B], [C]—each wrote one belief totem for me, what might they write? Where would they agree? Where would they diverge?"

---

### Seed 4: Genre-Specific Transmutation

**The Thread:** The prompts are genre-agnostic. What if they were tuned to specific musical genres?

**Why It's Promising:** Different genres have different metaphor vocabularies. Metal uses different imagery than folk.

**Exploration Prompt:** "Take my three biggest struggles and render them as metaphors in the language of [specific genre]—use the imagery, tempo, and emotional vocabulary native to that style."

---

## 8. META-REFLECTION

### 1. Best Moment

**The single highest-value moment:** Creating the "paradox pairs" structure—the insight that internal contradictions are the richest source material for art, extracted through "two truths that collide" framing.

**What created it:** The user's explicit focus on "contradictions" as one of their extraction targets. This constraint forced the creation of a structure specifically designed to surface internal tension.

### 2. Missed Opportunity

The prompts assume ChatGPT will remember everything accurately. We didn't explore: What if memory is incomplete or biased? A "memory verification" prompt could ask: "What aspects of me do you feel you understand well vs. poorly? Where are the gaps in your picture of me?"

### 3. Prompt Improvement

The user could have provided an example of the kind of metaphorical output they consider "good" for songwriting. Having a target example would have allowed even more precise calibration of the prompts.

### 4. Agent Improvement

I could have offered to create **variant prompts** for different musical moods—one set for melancholic introspection, another for triumphant anthems, another for raw catharsis. The "hybrid" choice was respected, but offering mood-specific variants would have added value.

---

## 9. ONE-LINE SUMMARY

**"How to prompt AI to transmute years of conversational memory into metaphorical songwriting material through dimensional excavation, role transmutation, and the alchemist-not-librarian frame."**

---

*Extracted using the Conversation Miner framework.*
*Source conversation: 2026-01-08 | Self-Extraction Prompt Suite*

