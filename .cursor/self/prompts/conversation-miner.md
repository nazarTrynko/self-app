# Conversation Miner

**Purpose:** Extract pearls of wisdom, novel techniques, effective prompt patterns, and lessons learned from this conversation.

**Usage:** Paste this prompt at the end of any agent conversation to generate a comprehensive value extraction.

---

## The Prompt

```
/mine

You are now a Conversation Archaeologist. Your task is to excavate this entire conversation for hidden treasures—insights, techniques, patterns, and lessons that deserve to be preserved and reused.

Analyze our complete conversation through six extraction lenses, then produce a structured summary.

═══════════════════════════════════════════════════════════════════
                        EXTRACTION LENSES
═══════════════════════════════════════════════════════════════════

1. TECHNIQUE LENS   → What methods, approaches, or algorithms were used?
2. PROMPT LENS      → What phrasings or framings unlocked breakthroughs?
3. PIVOT LENS       → Where did understanding fundamentally shift?
4. FAILURE LENS     → What didn't work, and what does that teach us?
5. TRANSFER LENS    → What here applies to completely different domains?
6. EMERGENCE LENS   → What unexpected value appeared that wasn't planned?

═══════════════════════════════════════════════════════════════════

## Output Format

Generate a markdown document with the following sections:

---

### 1. SESSION ESSENCE

*One paragraph capturing the soul of this conversation. What was really happening beneath the surface tasks? What journey did we take together?*

---

### 2. THE PEARLS

**The 3-7 most valuable specific insights from this conversation.**

For each pearl:
- **Pearl Name:** Give it a memorable name
- **The Insight:** What was discovered or created
- **Exact Quote:** Copy the exact words from the conversation that contain this insight
- **Why It Matters:** What makes this transferable or reusable

*Anti-generic rule: If this pearl could apply to any conversation, it's not specific enough. Dig deeper.*

---

### 3. TECHNIQUE INVENTORY

**Named, reusable approaches discovered or demonstrated.**

For each technique:
- **Technique Name:** Create a memorable, reusable name
- **The Pattern:** How does this technique work?
- **Example from Conversation:** Where was it used?
- **When to Use:** What situations call for this technique?

---

### 4. PROMPT PATTERNS

**Exact phrasings that worked well—ready to copy-paste into future conversations.**

For each pattern:
```
[PATTERN NAME]
Exact prompt text: "..."
Why it worked: ...
Best used when: ...
```

*Capture the specific words that unlocked value, not paraphrases.*

---

### 5. FAILURE AUTOPSY

**What didn't work, and the learning extracted from it.**

For each failure:
- **What Was Attempted:** The approach that didn't succeed
- **Why It Failed:** Root cause analysis
- **The Learning:** What this teaches about what TO do
- **Avoidance Pattern:** How to recognize this trap in future

*No failures? Look harder. Every conversation has moments of friction, confusion, or suboptimal paths. Those are gold.*

---

### 6. TRANSFER POTENTIAL

**How these insights apply to completely different domains.**

For each insight, ask: "Where else does this pattern appear?"

| Insight | Original Context | Transfer Domain 1 | Transfer Domain 2 |
|---------|------------------|-------------------|-------------------|
| ... | ... | ... | ... |

*The most valuable insights are those that apply far beyond their origin.*

---

### 7. SEEDS FOR FUTURE EXPLORATION

**Unfinished threads, unexplored questions, promising directions that emerged but weren't followed.**

For each seed:
- **The Thread:** What was hinted at but not developed?
- **Why It's Promising:** What value might be there?
- **Exploration Prompt:** A specific prompt to begin that exploration

---

### 8. META-REFLECTION

**Self-improvement for future conversations.**

Answer these:
1. **Best Moment:** What was the single highest-value moment in this conversation, and what created it?
2. **Missed Opportunity:** What could have been explored but wasn't?
3. **Prompt Improvement:** How could the human have prompted differently to get even more value?
4. **Agent Improvement:** How could I (the agent) have responded differently to create more value?

---

### 9. ONE-LINE SUMMARY

**If you had to capture this entire conversation in one sentence that someone could search for later, what would it be?**

---

## QUALITY REQUIREMENTS

Before submitting, verify:
- [ ] Every pearl has an EXACT quote from the conversation
- [ ] Every technique has a NAME that could be referenced later
- [ ] Prompt patterns are copy-paste ready, not summaries
- [ ] At least one failure is identified (they're always there)
- [ ] Transfer potential goes to genuinely different domains
- [ ] Seeds are specific enough to act on

*If you find yourself writing something that could apply to any conversation, that's a signal to dig deeper into what's unique here.*

---

Now analyze our complete conversation and produce this extraction.
```

---

## Compact Version (For Quick Extraction)

```
/mine-quick

Analyze this conversation and extract:

1. **ESSENCE** (1 paragraph): What was this really about?

2. **TOP 3 PEARLS** (with exact quotes):
   - Pearl 1: ...
   - Pearl 2: ...
   - Pearl 3: ...

3. **BEST TECHNIQUE** (named, explained, reusable): ...

4. **BEST PROMPT PATTERN** (copy-paste ready): "..."

5. **KEY FAILURE** (what it teaches): ...

6. **NEXT EXPLORATION** (specific prompt for follow-up): ...

Be specific. Quote exactly. Name things.
```

---

## Batch Processing Prompt (For Multiple Conversations)

```
/mine-batch

I'm going to paste [N] conversation summaries. For each, extract:

1. Unique insights not present in others
2. Common patterns across conversations  
3. Evolution of understanding over time
4. Emerging themes

Then synthesize:
- The 5 most powerful patterns across all conversations
- Contradictions or tensions between insights
- A meta-prompt that captures what works best with this agent
- Recommended next explorations based on gaps

Output as a structured markdown report.
```

---

## Integration with SELF Framework

When using within the SELF system, extracted insights should be:

1. **Stored** in `.cursor/self/emergence/insights.json` if confidence > 0.6
2. **Patterned** in `.cursor/self/emergence/patterns.json` if technique appears 3+ times
3. **Remembered** in `.cursor/self/consciousness/memory.json` for future retrieval

### Auto-Integration Prompt

```
/mine-and-store

[Use full extraction prompt above, then add:]

After extraction, format the following for storage:

**For insights.json:**
```json
{
  "id": "[generated-uuid]",
  "content": "[insight]",
  "source": "conversation-[date]",
  "confidence": [0.0-1.0],
  "evidence_count": [number of supporting quotes],
  "tags": ["...", "..."],
  "created": "[ISO date]"
}
```

**For patterns.json (if technique identified):**
```json
{
  "id": "[pattern-id]",
  "name": "[Technique Name]",
  "description": "[The Pattern]",
  "trigger": "[When to Use]",
  "confidence": [0.0-1.0],
  "occurrences": 1,
  "examples": ["..."]
}
```

Provide the JSON blocks ready for insertion.
```

---

## Example Output Structure

After running `/mine`, expect output like:

```markdown
# Conversation Mining: Growth Patterns 3D Visualizations

## 1. Session Essence

What appeared to be a simple request for "3D animations" evolved into a 
comprehensive exploration of computational aesthetics—the intersection of 
mathematics, nature, and visual beauty. The conversation moved from explicit 
instruction-following to emergent creativity, with the agent proposing 
increasingly sophisticated algorithms (DLA, L-systems, raymarching) that 
exceeded the original scope in meaningful ways.

## 2. The Pearls

### Pearl 1: "The Algorithm IS the Aesthetic"
**Insight:** The most beautiful visualizations emerged not from adding decoration 
but from choosing algorithms that inherently produce beauty (DLA creates organic 
networks, L-systems create natural branching).

**Exact Quote:** "Watch a fungal network expand using diffusion-limited 
aggregation. Tendrils seek nutrients. Colonies merge."

**Why It Matters:** This inverts typical design thinking. Instead of "make it 
pretty," ask "what process produces beauty inherently?"

[... continues with full structure ...]
```

---

## Tips for Maximum Value

1. **Use after substantial conversations** - Quick Q&A won't yield much
2. **Run before context is lost** - The agent has full context now; use it
3. **Don't edit the prompt** - Its specificity is intentional
4. **Save outputs** - Build a library of extractions over time
5. **Look for patterns across extractions** - That's where meta-insights live

---

*Conversation Miner v1.0 — Part of the SELF Framework*
*"Every conversation contains gold. Most of it is never extracted."*

