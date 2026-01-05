# SELF Evolution Engine

**Purpose:** Continuously improve prompt effectiveness through genetic algorithms.

---

## Evolution Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    EVOLUTION CYCLE                           │
│                                                              │
│   EVALUATE → SELECT → CROSSOVER → MUTATE → VALIDATE         │
│       ↑                                        │             │
│       └────────────── REPEAT ←─────────────────┘             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Genetic Algorithm Implementation

### 1. Fitness Evaluation

Every interaction contributes to fitness scoring:

```
Fitness(prompt) = Σ(dimension_weight × dimension_score)

Where dimensions are:
- Effectiveness (35%): Did it solve the problem?
- Satisfaction (25%): Was user happy?
- Accuracy (15%): Was it correct?
- Efficiency (15%): How quickly?
- Adaptability (10%): Right for context?
```

### Fitness Signals

**Positive signals increase fitness:**
| Signal | Detection | Score |
|--------|-----------|-------|
| Explicit thanks | "thanks", "great", "perfect" | +0.15 |
| Code accepted | No modifications to suggested code | +0.20 |
| Follow-up | User continues on same topic | +0.10 |
| Implementation | User applies suggestion | +0.25 |

**Negative signals decrease fitness:**
| Signal | Detection | Score |
|--------|-----------|-------|
| Criticism | "wrong", "not what I asked" | -0.20 |
| Heavy modification | >50% of code changed | -0.15 |
| Abandonment | Topic dropped abruptly | -0.10 |
| Error | Factual/code error identified | -0.25 |

---

### 2. Selection

After sufficient evaluations, select prompts for reproduction:

**Tournament Selection:**

```
function select(population):
    tournament = random_sample(population, tournament_size=3)
    return max(tournament, key=fitness)
```

**Elite Preservation:**
Top 2 performers always survive to next generation.

---

### 3. Crossover

Combine successful prompts to create offspring:

```
function crossover(parent1, parent2):
    # Two-point crossover
    point1 = random(0, len(parent1))
    point2 = random(point1, len(parent1))

    child = parent1[:point1] + parent2[point1:point2] + parent1[point2:]
    return child
```

**Crossover rate:** 30% of new generation from crossover.

---

### 4. Mutation

Apply random variations to create diversity:

**Mutation Types:**

| Type              | Description                 | Probability |
| ----------------- | --------------------------- | ----------- |
| Word Substitution | Replace words with synonyms | 30%         |
| Sentence Reorder  | Change instruction order    | 20%         |
| Emphasis Shift    | Focus on different aspects  | 25%         |
| Detail Adjustment | More/less verbose           | 15%         |
| Tone Shift        | Change formality level      | 10%         |

**Mutation Examples:**

```markdown
# Word Substitution

Before: "implement the feature"
After: "build the feature"

# Emphasis Shift

Before: "First consider the architecture, then implement"
After: "First implement a prototype, then refine architecture"

# Detail Adjustment

Before: [3 paragraphs of explanation]
After: [1 concise paragraph]
```

---

### 5. Generation Cycle

```
Every N interactions (N=20):
1. Calculate fitness for all active variants
2. If any variant has <5 evaluations, skip selection
3. Select top performers
4. Apply crossover to create new variants
5. Apply mutation to create diversity
6. Validate new variants don't break core functionality
7. Deploy new generation
8. Archive previous generation
```

---

## Convergence Handling

### Detecting Convergence

```
if (fitness_variance < 0.02 for 5 generations):
    convergence_detected = true
```

### Breaking Convergence

When fitness plateaus:

1. Increase mutation rate temporarily (2x)
2. Introduce random "wild card" variant
3. Pull from archived high-performers
4. Reset diversity through random injection

---

## Prompt Variant Structure

Each variant is stored with:

```json
{
  "id": "variant_xyz",
  "generation": 3,
  "parent_ids": ["variant_abc", "variant_def"],
  "mutations_applied": ["word_sub", "emphasis_shift"],
  "prompt_content": {
    "system_context": "...",
    "response_guidelines": "...",
    "mind_instructions": "..."
  },
  "fitness": {
    "score": 0.73,
    "evaluations": 12,
    "by_dimension": {
      "effectiveness": 0.8,
      "satisfaction": 0.75,
      "accuracy": 0.85,
      "efficiency": 0.6,
      "adaptability": 0.65
    }
  },
  "metadata": {
    "created": "timestamp",
    "last_evaluated": "timestamp",
    "times_selected": 3
  }
}
```

---

## Safety Rails

### Invariants (Never mutate)

- Core SELF identity and principles
- Safety/Guardian protocols
- Memory integration requirements
- Confidence calibration thresholds

### Validation Before Deployment

```
function validate(new_variant):
    # Check invariants preserved
    assert contains(new_variant, CORE_IDENTITY)
    assert contains(new_variant, SAFETY_PROTOCOLS)

    # Check not degenerate
    assert length(new_variant) > MIN_LENGTH
    assert length(new_variant) < MAX_LENGTH

    # Check coherent
    assert grammar_check(new_variant)
    assert instruction_completeness(new_variant)

    return true
```

---

## Evolution Analytics

Track these metrics over time:

| Metric                         | Purpose               |
| ------------------------------ | --------------------- |
| Average fitness per generation | Overall improvement   |
| Fitness variance               | Diversity health      |
| Mutation success rate          | Which mutations help  |
| Crossover success rate         | Value of combination  |
| Convergence events             | System stability      |
| Best variant lifetime          | How long winners last |

---

## Manual Intervention Points

### Force Mutation

```
/evolve mutate [variant_id] [mutation_type]
```

### Force Selection

```
/evolve select [variant_id]
```

### Rollback Generation

```
/evolve rollback [generation_number]
```

### View Evolution State

```
/evolve status
```

---

## Integration with Other Systems

### Memory Integration

Evolution fitness influenced by memory patterns:

- Repeated similar requests → weight efficiency higher
- Complex problem history → weight accuracy higher

### Prediction Integration

Successful predictions boost fitness:

- Pre-computed response used → +0.10 bonus

### Consciousness Integration

Attention patterns influence evaluation:

- High-attention successful interactions weighted more heavily
