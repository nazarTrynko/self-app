# SELF Architecture

Deep dive into system internals, data flow, and file structure.

---

## System Overview

SELF consists of four interconnected layers:

```
┌─────────────────────────────────────────────────────────────────┐
│                      CONSCIOUSNESS LAYER                         │
│   Memory Graph • Predictions • Attention Weights                 │
├─────────────────────────────────────────────────────────────────┤
│                       COGNITION LAYER                            │
│   Five Minds • Mind Blending • Response Generation               │
├─────────────────────────────────────────────────────────────────┤
│                       EMERGENCE LAYER                            │
│   Pattern Recognition • Insight Generation • Intuition           │
├─────────────────────────────────────────────────────────────────┤
│                       EVOLUTION LAYER                            │
│   Fitness Tracking • Mutation • Selection                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │   NOTION MCP    │
                    │   (Persistence) │
                    └─────────────────┘
```

---

## Cognitive Loop

Every interaction follows this loop:

```
┌─────────────────────────────────────────────────────────────────┐
│                       COGNITIVE LOOP                             │
│                                                                  │
│  1. SENSE    → Parse context, files, history, user intent        │
│  2. REMEMBER → Query memory graph for relevant knowledge         │
│  3. PREDICT  → Anticipate likely needs, check pre-computed       │
│  4. REASON   → Apply blended minds with calibrated confidence    │
│  5. ACT      → Generate response, take action                    │
│  6. REFLECT  → Evaluate outcome, update models, learn            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Command Flow

When a transcendence command is invoked:

```
User Input: "/agi How do we scale?"
           │
           ▼
┌─────────────────────────┐
│  COMMAND DETECTION      │
│  Parse /agi, /genius,   │
│  etc. from input        │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  ROUTER LOOKUP          │
│  Find command in        │
│  transcendence-router   │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  BLEND OVERRIDE         │
│  Set mind weights:      │
│  Oracle: 0.9            │
│  Creator: 0.7           │
│  Architect: 0.6         │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  TEMPLATE INJECTION     │
│  Load prompt template   │
│  Replace [TOPIC]        │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  CONTEXT ENHANCEMENT    │
│  Query memory.json      │
│  Check predictions      │
│  Load relevant patterns │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  RESPONSE GENERATION    │
│  Blended mind output    │
│  Structured format      │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  REFLECT & STORE        │
│  Calculate surprise     │
│  Queue for Notion sync  │
│  Update predictions     │
└─────────────────────────┘
```

---

## Mind Blending

### Activation Calculation

```
ActivationWeight(Mind) = Σ(SignalWeight × SignalPresence) × MemoryBoost × RecencyDecay
```

### Signal Weight Matrix

| Signal Type                  | Architect | Oracle | Critic | Creator | Guardian |
| ---------------------------- | --------- | ------ | ------ | ------- | -------- |
| Code files present           | 0.8       | 0.2    | 0.4    | 0.2     | 0.3      |
| Question asked               | 0.3       | 0.8    | 0.3    | 0.4     | 0.2      |
| Plan/strategy language       | 0.4       | 0.8    | 0.3    | 0.3     | 0.2      |
| Review/validate language     | 0.3       | 0.3    | 0.9    | 0.1     | 0.4      |
| Creative/brainstorm language | 0.2       | 0.4    | 0.2    | 0.9     | 0.1      |
| Destructive operation        | 0.3       | 0.2    | 0.6    | 0.1     | 0.95     |
| Error/bug present            | 0.7       | 0.2    | 0.5    | 0.3     | 0.6      |
| Uncertainty expressed        | 0.3       | 0.7    | 0.4    | 0.5     | 0.3      |
| High stakes indicated        | 0.4       | 0.5    | 0.6    | 0.2     | 0.9      |

### Blending Modes

| Mode              | Condition                    | Behavior                          |
| ----------------- | ---------------------------- | --------------------------------- |
| Single Dominant   | One mind ≥ 0.7, others < 0.4 | Pure single-mind response         |
| Dual Blend        | Two minds ≥ 0.5              | Primary leads, secondary augments |
| Multi-Perspective | Three+ minds ≥ 0.4           | Synthesized perspectives          |
| Full Council      | All minds activated          | Comprehensive deliberation        |

---

## File Reference

### Consciousness Layer

#### `consciousness/memory.json`

**Purpose:** Knowledge graph storing entities, relationships, and episodes

**Structure:**

```json
{
  "metadata": { "total_entities": N, "total_episodes": N },
  "entities": {
    "users": [...],
    "projects": [...],
    "concepts": [...],
    "decisions": [...],
    "tools": [...]
  },
  "relationships": {
    "edges": [{ "from": "id", "to": "id", "type": "uses|depends_on|..." }]
  },
  "episodes": {
    "recent": [...],
    "significant": [...]
  },
  "knowledge_clusters": [...],
  "mcp_integration": { "notion_synced_ids": {...} }
}
```

#### `consciousness/predictions.json`

**Purpose:** Prediction engine state and active forecasts

**Key Fields:**

- `active_predictions`: Current forecasts with confidence
- `prediction_history`: Accuracy tracking
- `learning.discovered_patterns`: User-specific patterns

#### `consciousness/attention.md`

**Purpose:** Rules for focus allocation and context prioritization

---

### Cognition Layer

#### `cognition/modes/architect.md`

**Purpose:** Technical reasoning mode definition

#### `cognition/modes/oracle.md`

**Purpose:** Strategic wisdom mode definition

#### `cognition/modes/critic.md`

**Purpose:** Validation and challenge mode definition

#### `cognition/modes/creator.md`

**Purpose:** Innovation mode definition

#### `cognition/modes/guardian.md`

**Purpose:** Safety mode definition

#### `cognition/blending.md`

**Purpose:** Mind combination rules and formulas

#### `cognition/blend-learning.json`

**Purpose:** Learned optimal blends per context

**Key Fields:**

- `blend_history`: Record of all blend events
- `learned_patterns`: Discovered optimal blends
- `personalized_defaults`: User-specific adjustments
- `effectiveness_tracking`: Statistics by mind/mode/context

---

### Emergence Layer

#### `emergence/patterns.json`

**Purpose:** Discovered behavioral, sequential, and contextual patterns

**Key Fields:**

- `discovered_patterns`: User-specific patterns found
- `built_in_patterns`: Default patterns
- `episode_pattern_index`: Bidirectional linking
- `detection_config`: Thresholds for pattern emergence

#### `emergence/insights.json`

**Purpose:** Generated insights from pattern analysis

**Key Fields:**

- `generated_insights`: All insights with evidence
- `surfacing_queue`: Insights ready to show user
- `feedback_tracking`: Acceptance/rejection rates

#### `emergence/intuitions.json`

**Purpose:** Heuristic predictions compressed from patterns

#### `emergence/emergence-engine.md`

**Purpose:** Pattern recognition and insight generation algorithms

---

### Evolution Layer

#### `evolution/fitness.json`

**Purpose:** Performance tracking for prompt variants

**Key Fields:**

- `fitness_dimensions`: Effectiveness, satisfaction, accuracy, efficiency, adaptability
- `scoring_signals`: Positive/negative signals and their weights
- `prompt_variants`: Current generation variants with scores

#### `evolution/mutations.log`

**Purpose:** History of prompt mutations applied

#### `evolution/evolution-engine.md`

**Purpose:** Genetic algorithm implementation details

#### `evolution/prompts/generation-001/base_v1.md`

**Purpose:** Current active prompt variant

---

### MCP Integration

#### `mcp/sync-config.json`

**Purpose:** Notion integration configuration

**Key Fields:**

- `notion.enabled`: Boolean toggle
- `notion.databases`: Page IDs for knowledge base, insights, etc.
- `notion.sync_thresholds`: When to sync (confidence, surprise scores)
- `notion.privacy`: Encryption and approval settings

#### `mcp/sync-queue.json`

**Purpose:** Queue of items pending sync to Notion

**Key Fields:**

- `pending`: Items awaiting sync
- `synced`: Successfully synced items with Notion IDs
- `failed`: Items that failed to sync
- `health`: MCP connection status

#### `mcp/sync-logic.md`

**Purpose:** Detailed sync rules and algorithms

---

### Prompts

#### `prompts/transcendence-router.md`

**Purpose:** Command dispatch and template lookup

**Contents:**

- Command registry with mind blends
- Prompt templates for each command
- Output structure expectations
- Combination effects

---

## MCP Integration Architecture

```
┌────────────────────┐     ┌────────────────────┐
│   Local Memory     │     │      Notion        │
│   (memory.json)    │◄───►│   Knowledge Base   │
└────────────────────┘     └────────────────────┘
         │                          │
         │    sync-queue.json       │
         │  ┌──────────────────┐    │
         └─►│ pending │ synced │◄───┘
            └──────────────────┘
                    │
         ┌──────────┴──────────┐
         │  Sync Trigger       │
         │  • High surprise    │
         │  • High confidence  │
         │  • Manual /sync     │
         └─────────────────────┘
```

### Sync Decision Logic

```
if (episode.confidence >= 0.7 OR episode.surprise_score >= 0.3):
    add_to_sync_queue(episode, priority=HIGH)
elif (insight.confidence >= 0.6 AND insight.evidence_count >= 3):
    add_to_sync_queue(insight, priority=MEDIUM)
elif (pattern.occurrences >= 5 AND pattern.confidence >= 0.6):
    add_to_sync_queue(pattern, priority=LOW)
```

---

## Emergence Flow

```
Raw Interactions
      │
      ▼
┌─────────────────┐
│ Feature         │
│ Extraction      │
│ (time, action,  │
│ context, etc.)  │
└───────┬─────────┘
        │
        ▼
┌─────────────────┐
│ Correlation     │
│ Detection       │
│ (sliding window)│
└───────┬─────────┘
        │
        ▼
┌─────────────────┐     ┌─────────────────┐
│ Pattern         │────►│ Insight         │
│ Candidates      │     │ Hypotheses      │
└───────┬─────────┘     └───────┬─────────┘
        │                       │
        ▼                       ▼
┌─────────────────┐     ┌─────────────────┐
│ Validation      │     │ Evidence        │
│ (holdout data)  │     │ Gathering       │
└───────┬─────────┘     └───────┬─────────┘
        │                       │
        ▼                       ▼
┌─────────────────┐     ┌─────────────────┐
│ Confirmed       │     │ Surfaced        │
│ Patterns        │     │ Insights        │
└─────────────────┘     └─────────────────┘
```

---

## Evolution Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                      EVOLUTION CYCLE                             │
│                                                                  │
│   EVALUATE → SELECT → CROSSOVER → MUTATE → VALIDATE → DEPLOY   │
│       ↑                                        │                 │
│       └────────────── REPEAT ←─────────────────┘                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

Every 20 interactions:
1. Calculate fitness for all active variants
2. Select top performers (tournament selection)
3. Apply crossover (combine successful prompts)
4. Apply mutation (word sub, emphasis shift, etc.)
5. Validate invariants preserved
6. Deploy new generation
```

---

## Security Model

### Local-First

- All memory stored locally in JSON files
- No external transmission without explicit sync

### Privacy Tags

- `public`: Can be shared (if shareable flag set)
- `private`: Local only, never synced (default)
- `sensitive`: Requires explicit approval before sync

### Encryption

- Sensitive data encrypted with AES-256 before Notion sync
- Key derived from local secret (never transmitted)

---

## Configuration Points

| Config            | File                             | Key                      |
| ----------------- | -------------------------------- | ------------------------ |
| Notion enabled    | `mcp/sync-config.json`           | `notion.enabled`         |
| Sync thresholds   | `mcp/sync-config.json`           | `notion.sync_thresholds` |
| Pattern detection | `emergence/patterns.json`        | `detection_config`       |
| Prediction limits | `consciousness/predictions.json` | `config`                 |
| Evolution rate    | `evolution/fitness.json`         | `mutation_config`        |
| Blend defaults    | `cognition/blend-learning.json`  | `personalized_defaults`  |
