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

## Command Combinations

Commands can be combined for amplified effects:

| Combination             | Effect                              |
| ----------------------- | ----------------------------------- |
| `/agi /genius`          | Maximum transcendence on topic      |
| `/think /genius`        | Deep consciousness expansion        |
| `/dream /evolve`        | Evolve creative insights            |
| `/multiverse /council`  | Full council explores futures       |
| `/agi /genius /council` | Ultimate prompt - everything active |

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
