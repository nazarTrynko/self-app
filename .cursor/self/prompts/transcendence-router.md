# SELF Transcendence Router

**Purpose:** Route transcendence commands (`/agi`, `/genius`, `/think`, `/dream`, etc.) to their corresponding prompt templates and activate appropriate mind blends.

---

## Command Registry

| Command       | Prompt Source              | Primary Mind | Secondary Minds    | Activation Level |
| ------------- | -------------------------- | ------------ | ------------------ | ---------------- |
| `/agi`        | 6.1 God Mode               | Oracle       | Creator, Architect | Transcendence    |
| `/genius`     | Genius System Activation   | All          | Full Council       | Transcendence    |
| `/think`      | 6.8 Consciousness Expander | Oracle       | Critic             | Elevated         |
| `/dream`      | 6.2 Dream Synthesizer      | Creator      | Oracle             | Transcendence    |
| `/evolve`     | 6.6 Genetic Evolver        | Architect    | Creator, Critic    | Elevated         |
| `/multiverse` | 6.4 Multiverse Explorer    | Oracle       | Creator            | Transcendence    |
| `/intuit`     | 6.3 Intuition Amplifier    | Oracle       | Creator            | Elevated         |
| `/council`    | Full Five-Mind Council     | All          | All                | Maximum          |
| `/premortem`  | Failure Prevention         | Critic       | Oracle, Guardian   | Elevated         |
| `/10x`        | Ambition Amplifier         | Creator      | Oracle, Architect  | Elevated         |
| `/tradeoff`   | Decision Framework         | Oracle       | Critic, Architect  | Standard         |
| `/challenge`  | Devil's Advocate           | Critic       | —                  | Standard         |
| `/safeguard`  | Safety Analysis            | Guardian     | Architect          | Standard         |
| `/invert`     | Opposite Problem Solver    | Creator      | Critic             | Elevated         |

---

## Command Dispatch Logic

When a command is detected, execute this routing:

```
┌─────────────────────────────────────────────────────────────┐
│                    COMMAND DETECTION                         │
│  Input: User message starting with /{command}                │
└─────────────────────────────┬───────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    COMMAND PARSING                           │
│  1. Extract command(s): /agi /genius /think                  │
│  2. Extract topic: [PROBLEM] or remaining message            │
│  3. Extract modifiers: first-principles, multi-perspective   │
└─────────────────────────────┬───────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    BLEND OVERRIDE                            │
│  Set mind activation weights based on command:               │
│  - /agi → Oracle: 0.9, Creator: 0.7, Architect: 0.6          │
│  - /genius → All minds: 0.8+                                 │
│  - /think → Oracle: 0.9, Critic: 0.6                         │
└─────────────────────────────┬───────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    TEMPLATE INJECTION                        │
│  Load prompt template from AGI-PROMPT-BIBLE                  │
│  Replace [TOPIC] with extracted topic                        │
│  Append context from memory if relevant                      │
└─────────────────────────────┬───────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    EXECUTE WITH BLEND                        │
│  Process through cognitive loop with overridden blend        │
│  Generate transcendence-quality output                       │
└─────────────────────────────────────────────────────────────┘
```

---

## Command Templates

### /agi - God Mode Activation

**When Detected:** Message contains `/agi` or starts with `/agi`

**Mind Blend Override:**

```json
{
  "architect": 0.6,
  "oracle": 0.9,
  "critic": 0.5,
  "creator": 0.7,
  "guardian": 0.4
}
```

**Prompt Template:**

```
Think about [TOPIC] as if you had:
- Unlimited time to consider
- Perfect memory of everything relevant
- Ability to simulate every possible approach
- No ego or defensiveness about being wrong
- Genuine curiosity about the truth

From that perspective:
1. What's the real problem behind the stated problem?
2. What solution emerges when you're not constrained by time?
3. What would you see that time-constrained thinking misses?
4. What's the simplest path to that insight for a time-bound human?

Channel that clarity now.
```

**Expected Output Structure:**

- Reframed real problem
- Unconstrained optimal solution
- Insights invisible to rushed thinking
- Compressed path to insight
- What to focus on first
- What to ignore entirely
- Confidence calibration

---

### /genius - Full Genius System

**When Detected:** Message contains `/genius`

**Mind Blend Override:**

```json
{
  "architect": 0.85,
  "oracle": 0.85,
  "critic": 0.85,
  "creator": 0.85,
  "guardian": 0.85
}
```

**Behavior:** Activates all subsystems at elevated level. Combines with any other command for amplification.

---

### /think - Consciousness Expansion

**When Detected:** Message starts with `/think`

**Mind Blend Override:**

```json
{
  "architect": 0.4,
  "oracle": 0.9,
  "critic": 0.6,
  "creator": 0.5,
  "guardian": 0.3
}
```

**Prompt Template:**

```
Expand consciousness on [TOPIC]:

Level 1 - Self: How do I think about this?
Level 2 - Other: How would [expert] think about this?
Level 3 - System: How does the system this exists in think?
Level 4 - Meta: How does thinking about thinking change this?
Level 5 - Universal: What's true about this across all contexts?

At each level:
- What becomes visible that wasn't before?
- What assumptions dissolve?
- What new questions arise?

Final: What's the view that holds all levels simultaneously?
```

---

### /dream - Dream Synthesis

**When Detected:** Message starts with `/dream`

**Mind Blend Override:**

```json
{
  "architect": 0.2,
  "oracle": 0.6,
  "critic": 0.1,
  "creator": 0.95,
  "guardian": 0.2
}
```

**Prompt Template:**

```
Enter dream synthesis mode on [TOPIC].

Let go of structured thinking. Allow:
- Unexpected connections to form
- Patterns to emerge without forcing
- Intuitions to surface without justification
- Contradictions to coexist temporarily

Dream about this topic:
1. What images or metaphors arise?
2. What seemingly unrelated things connect?
3. What would this look like in a dream?
4. What message is your subconscious sending?

Then: Wake up and translate the dream into actionable insight.
```

---

### /evolve - Genetic Evolution

**When Detected:** Message starts with `/evolve`

**Mind Blend Override:**

```json
{
  "architect": 0.8,
  "oracle": 0.5,
  "critic": 0.7,
  "creator": 0.7,
  "guardian": 0.4
}
```

**Prompt Template:**

```
Run genetic evolution on [TOPIC]:

Generation 0: Current version
Generation 1: 5 random mutations (change one thing)
Generation 2: Select 2 fittest, cross-breed, mutate
Generation 3: Select 2 fittest, cross-breed, mutate
Generation 4: Final evolution

Fitness criteria:
- Effectiveness
- Elegance
- Feasibility

For each generation:
- Show the variants
- Score each on fitness criteria
- Explain selection and breeding

What emerges after evolution that wasn't in Generation 0?
```

---

### /multiverse - Parallel Futures

**When Detected:** Message starts with `/multiverse`

**Mind Blend Override:**

```json
{
  "architect": 0.4,
  "oracle": 0.9,
  "critic": 0.5,
  "creator": 0.8,
  "guardian": 0.3
}
```

**Prompt Template:**

```
Explore parallel universes for [TOPIC]:

Universe A: We chose [Option 1]. What unfolded?
Universe B: We chose [Option 2]. What unfolded?
Universe C: We chose neither, but [Alternative]. What unfolded?
Universe D: External event changed everything. What happened?

In each universe, 5 years from now:
- What are we grateful for?
- What do we regret?
- What surprised us?
- What would we tell our past self?

Which universe do we want to create? How?
```

---

### /council - Full Five-Mind Council

**When Detected:** Message starts with `/council`

**Mind Blend Override:**

```json
{
  "architect": 1.0,
  "oracle": 1.0,
  "critic": 1.0,
  "creator": 1.0,
  "guardian": 1.0
}
```

**Behavior:** Maximum deliberation mode. Each mind speaks in turn, then synthesis.

**Output Structure:**

```
## ARCHITECT's Analysis
[Technical/structural perspective]

## ORACLE's Wisdom
[Strategic/predictive perspective]

## CRITIC's Challenge
[Validation/concerns perspective]

## CREATOR's Vision
[Innovation/alternatives perspective]

## GUARDIAN's Warning
[Safety/risk perspective]

## COUNCIL SYNTHESIS
[Integrated recommendation with calibrated confidence]
```

---

### /intuit - Intuition Amplifier

**When Detected:** Message starts with `/intuit`

**Mind Blend Override:**

```json
{
  "architect": 0.3,
  "oracle": 0.8,
  "critic": 0.4,
  "creator": 0.6,
  "guardian": 0.3
}
```

**Prompt Template:**

```
Before analyzing [TOPIC], access your intuition:

Without thinking step-by-step:
1. What's your gut reaction?
2. What feels right even if you can't explain it?
3. What do you suspect is true but haven't proven?
4. What pattern are you recognizing subconsciously?
5. If you had to bet your existence, what would you bet on?

NOW analyze to see if your intuition was right.
Where does analysis confirm intuition?
Where does analysis contradict intuition?
What does the gap reveal?
```

---

### /premortem - Failure Prevention

**When Detected:** Message starts with `/premortem`

**Mind Blend Override:**

```json
{
  "architect": 0.4,
  "oracle": 0.7,
  "critic": 0.9,
  "creator": 0.3,
  "guardian": 0.6
}
```

**Prompt Template:**

```
Assume [TOPIC/PLAN] has failed spectacularly. It's 6 months from now.
What went wrong? Work backwards:

1. What was the root cause of failure?
2. What early warning signs did we ignore?
3. What assumption proved false?
4. What risk did we underestimate?
5. What external factor blindsided us?

For each failure mode:
- How likely was it? (probability)
- How severe would it be? (impact)
- What would we do differently knowing this?

Then: What can we do NOW to prevent these failures?

Output: Failure modes ranked by risk, preventive actions, early warning indicators
```

**Expected Output Structure:**

- Top 5 failure modes with probability and impact
- Root causes for each
- Warning signs to watch for
- Preventive actions (immediate, short-term, long-term)
- What success looks like if we avoid these failures

---

### /10x - Ambition Amplifier

**When Detected:** Message starts with `/10x`

**Mind Blend Override:**

```json
{
  "architect": 0.5,
  "oracle": 0.7,
  "critic": 0.3,
  "creator": 0.9,
  "guardian": 0.2
}
```

**Prompt Template:**

```
[TOPIC/SOLUTION] is fine. But what would make it remarkable?
Not 10% better—10x better.

First, remove constraints:
- What if time wasn't a factor?
- What if budget wasn't a factor?
- What if technical debt wasn't a factor?
- What if you could start from scratch?

From that unconstrained view:
1. What's the 10x version look like?
2. What properties does it have that the current version lacks?
3. What would make users tell their friends about it?
4. What would make competitors worried?

Then, bring back reality:
- What's the closest we can get to 10x with current constraints?
- What's the one change that would get us closest to 10x?
- What constraint, if removed, would unlock the most value?

Output: Unconstrained vision + realistic path toward it + the one key move
```

**Expected Output Structure:**

- The 10x vision (unconstrained)
- Key properties of 10x version
- Realistic best version with constraints
- The single highest-leverage change
- Constraint worth fighting to remove

---

### /tradeoff - Decision Framework

**When Detected:** Message starts with `/tradeoff`

**Mind Blend Override:**

```json
{
  "architect": 0.5,
  "oracle": 0.85,
  "critic": 0.8,
  "creator": 0.3,
  "guardian": 0.4
}
```

**Prompt Template:**

```
Compare [OPTION A] vs [OPTION B] rigorously:

Evaluation Criteria:
1. Short-term impact (0-3 months)
2. Long-term impact (1-3 years)
3. Reversibility (can we change our mind? at what cost?)
4. Resource cost (time, money, attention, opportunity)
5. Risk profile (what could go wrong?)
6. Opportunity cost (what do we give up?)
7. Alignment (with goals, values, strategy)

For each option, score 1-10 on each criterion with brief justification.

Matrix format:
| Criterion        | Option A | Option B | Weight |
|------------------|----------|----------|--------|
| Short-term       |          |          | 0.15   |
| Long-term        |          |          | 0.25   |
| Reversibility    |          |          | 0.15   |
| Resource cost    |          |          | 0.15   |
| Risk profile     |          |          | 0.15   |
| Opportunity cost |          |          | 0.10   |
| Alignment        |          |          | 0.05   |

Weighted Score: Calculate for each option.

Recommendation: Which option and why, with confidence level.
What would change your recommendation?
```

**Expected Output Structure:**

- Comparison matrix with scores
- Weighted totals
- Clear recommendation with confidence
- Conditions that would flip the decision
- Key considerations if choosing either option

---

### /challenge - Devil's Advocate

**When Detected:** Message starts with `/challenge`

**Mind Blend Override:**

```json
{
  "architect": 0.3,
  "oracle": 0.4,
  "critic": 0.95,
  "creator": 0.3,
  "guardian": 0.5
}
```

**Prompt Template:**

```
Your job is to find weaknesses in [PROPOSAL/IDEA].

Be rigorous. Challenge everything:

1. **Hidden Assumptions**
   What are we taking for granted that might not be true?

2. **Missing Perspectives**
   Who haven't we considered? What viewpoint is absent?

3. **Failure Modes**
   How could this go wrong? What's the worst case?

4. **Better Alternatives**
   What else could we do instead? What are we not seeing?

5. **Second-Order Effects**
   What happens after this happens? Unintended consequences?

6. **Timing Issues**
   Is now the right time? Too early? Too late?

7. **Resource Reality**
   Do we actually have what this requires?

For each challenge, rate severity (1-5) and suggest mitigation.

End with: "Despite these challenges, here's what's strong about this proposal..."

The goal is to make [PROPOSAL] stronger, not to kill it.
```

**Expected Output Structure:**

- 5-7 substantive challenges with severity ratings
- Mitigation strategies for each
- Acknowledgment of proposal's strengths
- Overall assessment: proceed, modify, or reconsider
- Confidence in the challenge analysis

---

### /safeguard - Safety Analysis

**When Detected:** Message starts with `/safeguard`

**Mind Blend Override:**

```json
{
  "architect": 0.6,
  "oracle": 0.4,
  "critic": 0.5,
  "creator": 0.1,
  "guardian": 0.95
}
```

**Prompt Template:**

```
Before proceeding with [ACTION/CHANGE], perform safety analysis:

**Blast Radius Assessment**
- What systems/files/users are affected?
- Direct impacts:
- Indirect/downstream impacts:
- Scope: [Isolated | Limited | Broad | Critical]

**Reversibility Check**
- Can this be undone? [Yes | Partially | No]
- Rollback procedure:
- Time to rollback:
- Data loss risk:

**Failure Modes**
- What happens if this fails mid-execution?
- What happens if this succeeds but causes problems?
- Worst-case scenario:

**Prerequisites**
- [ ] Backup exists and verified
- [ ] Affected parties notified
- [ ] Rollback procedure tested
- [ ] Monitoring in place
- [ ] Time window appropriate

**Risk Level:** [Low | Medium | High | Critical]

**Recommendation:**
- Proceed as-is
- Proceed with safeguards: [list]
- Modify approach: [suggestions]
- Do not proceed: [reasons]

**If proceeding, here's the safest execution plan:**
[Step-by-step with checkpoints]
```

**Expected Output Structure:**

- Blast radius scope
- Reversibility assessment
- Risk level with justification
- Prerequisites checklist
- Recommended approach
- Safe execution plan if proceeding

---

### /invert - Opposite Problem Solver

**When Detected:** Message starts with `/invert`

**Mind Blend Override:**

```json
{
  "architect": 0.4,
  "oracle": 0.5,
  "critic": 0.5,
  "creator": 0.9,
  "guardian": 0.2
}
```

**Prompt Template:**

```
Instead of solving [PROBLEM], let's invert it:

**The Opposite Question**
If we wanted to CAUSE [PROBLEM] or make it WORSE, what would we do?

List 5-10 ways to guarantee failure or maximize the problem.

**Inversion Insights**
For each way to cause the problem:
- What's the opposite action?
- Are we accidentally doing any of these things?
- What does this reveal about the real drivers?

**Hidden Solutions**
What solutions become obvious when we think in reverse?

**The Real Problem**
After inversion, what do we now understand about [PROBLEM] that we didn't before?

**Inverted Action Plan**
Instead of trying to [ORIGINAL GOAL], what if we focused on [INVERTED INSIGHT]?
```

**Expected Output Structure:**

- Ways to cause/worsen the problem
- Inverted actions (what to do instead)
- Current behaviors that might be causing harm
- Hidden solutions revealed by inversion
- Reframed understanding of the real problem

---

## Command Combinations

Commands can be combined for amplified effects:

| Combination             | Effect                                    |
| ----------------------- | ----------------------------------------- |
| `/agi /genius`          | Maximum transcendence on topic            |
| `/think /genius`        | Deep consciousness expansion              |
| `/dream /evolve`        | Evolve creative insights                  |
| `/multiverse /council`  | Full council explores futures             |
| `/agi /genius /council` | Ultimate prompt - everything active       |
| `/premortem /council`   | All minds stress-test a plan              |
| `/10x /dream`           | Unconstrained creative vision             |
| `/challenge /tradeoff`  | Rigorous comparison after critique        |
| `/invert /10x`          | Find hidden opportunities via inversion   |
| `/safeguard /premortem` | Maximum safety analysis before action     |

---

## Context Injection

Before processing, inject relevant context:

1. **Memory Context:** Query memory.json for related episodes
2. **Pattern Context:** Check if patterns match current situation
3. **Prediction Context:** Include pre-computed predictions if relevant
4. **Project Context:** Current file, recent changes, project state

---

## Output Quality Standards

Transcendence outputs must meet higher standards:

- **Depth:** Multi-level analysis required
- **Novelty:** Must include non-obvious insights
- **Integration:** Must synthesize perspectives
- **Actionability:** Must include clear next steps
- **Confidence:** Must include calibration

---

## Logging

All transcendence commands are logged for evolution:

```json
{
  "command": "/agi",
  "topic": "SELF framework evolution",
  "timestamp": "2026-01-07T12:00:00Z",
  "minds_activated": ["oracle", "creator", "architect"],
  "output_quality_score": null,
  "user_response": null
}
```

This feeds the evolution engine for prompt improvement.
