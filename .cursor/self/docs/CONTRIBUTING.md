# Contributing to SELF

Guide for extending and improving the SELF framework.

---

## Overview

SELF is designed to be extensible. You can:
- Add new transcendence commands
- Create new mind modes
- Extend pattern recognition
- Improve the evolution engine
- Enhance MCP integration

---

## Adding New Commands

### Step 1: Define the Command

Add a new section to `prompts/transcendence-router.md`:

```markdown
### /yourcommand — Description

**When Detected:** Message starts with `/yourcommand`

**Mind Blend Override:**
```json
{
  "architect": 0.X,
  "oracle": 0.X,
  "critic": 0.X,
  "creator": 0.X,
  "guardian": 0.X
}
```

**Prompt Template:**
```
Your prompt template here with [TOPIC] placeholder...
```

**Expected Output Structure:**
- Output item 1
- Output item 2
```

### Step 2: Choose Mind Weights

Consider what the command is for:

| Purpose | Primary Mind | Weight |
|---------|--------------|--------|
| Technical analysis | Architect | 0.8-0.9 |
| Strategic thinking | Oracle | 0.8-0.9 |
| Validation/critique | Critic | 0.8-0.9 |
| Creative exploration | Creator | 0.8-0.9 |
| Risk assessment | Guardian | 0.8-0.9 |

Secondary minds should be 0.4-0.6.

### Step 3: Design the Prompt Template

Good prompt templates have:
- Clear structure (numbered steps or sections)
- Specific questions to answer
- A [TOPIC] placeholder for user input
- Expected output format hints

### Step 4: Add to Command Combinations

If your command combines well with others, add to the combinations table:

```markdown
| `/yourcommand /genius` | Effect description |
```

### Step 5: Document in COMMANDS.md

Add full documentation following the existing format.

---

## Creating New Mind Modes

### Step 1: Create the Mind Definition

Create a new file: `cognition/modes/yourmind.md`

```markdown
# SELF [YourMind] Mind

**Core Function:** One-sentence description

---

## Identity

[Who this mind is, what it values, how it thinks]

## Activation Signals

[When this mind should become active]

## Reasoning Style

[How this mind approaches problems]

## Output Characteristics

[What responses from this mind look like]

## Interaction with Other Minds

[How it complements or conflicts with others]
```

### Step 2: Add Signal Weights

Update `cognition/blending.md` signal weight matrix:

| Signal Type | ... | YourMind |
|-------------|-----|----------|
| Code files present | ... | 0.X |
| Question asked | ... | 0.X |
| (etc.) | ... | 0.X |

### Step 3: Add to Blend Learning Schema

Update `cognition/blend-learning.json`:

```json
"effectiveness_tracking": {
  "by_mind": {
    "yourmind": {
      "activations": 0,
      "positive_outcomes": 0,
      "effectiveness_rate": 0.0
    }
  }
}
```

### Step 4: Consider Blend Patterns

What blends work well with this mind? Add to common blend patterns in `blending.md`.

---

## Extending Pattern Recognition

### Adding Built-in Patterns

Add to `emergence/patterns.json`:

```json
{
  "id": "builtin_XXX",
  "type": "behavioral|temporal|sequential|contextual|correlational",
  "description": "What this pattern recognizes",
  "conditions": {
    "triggers": ["signal1", "signal2"],
    "context_requirements": {}
  },
  "confidence": 0.7,
  "status": "confirmed"
}
```

### Pattern Types

| Type | Recognizes |
|------|------------|
| behavioral | User habits and preferences |
| temporal | Time-based patterns |
| sequential | Common action sequences |
| contextual | Context-dependent behaviors |
| correlational | Co-occurrence patterns |

### Detection Thresholds

Adjust in `detection_config`:

```json
{
  "min_occurrences_to_emerge": 3,    // When pattern becomes candidate
  "min_occurrences_to_confirm": 7,   // When pattern is confirmed
  "decay_rate_per_day": 0.02,        // How fast unused patterns fade
  "min_confidence_threshold": 0.4,   // Minimum to keep pattern
  "correlation_threshold": 0.6       // Minimum correlation strength
}
```

---

## Improving Evolution

### Adding Fitness Signals

Update `evolution/fitness.json` scoring signals:

```json
{
  "signal": "your_signal_name",
  "score": 0.15  // Positive or negative
}
```

### Adding Mutation Types

Update mutation config:

```json
{
  "type": "your_mutation_type",
  "probability": 0.X
}
```

### Implementing Evolution Runner

To automate evolution cycles, create a script that:

1. Loads `fitness.json`
2. Calculates fitness for each variant
3. Selects top performers (tournament selection)
4. Applies crossover and mutation
5. Validates invariants preserved
6. Saves new generation

---

## Enhancing MCP Integration

### Adding New Sync Types

Update `mcp/sync-config.json` databases:

```json
"databases": {
  "your_new_type": "notion-page-id"
}
```

### Adjusting Sync Thresholds

```json
"sync_thresholds": {
  "your_type_confidence": 0.X,
  "your_type_min_count": N
}
```

### Adding Sync Operations

Update `mcp/sync-logic.md` with new sync rules.

---

## Testing Changes

### JSON Validation

Ensure all JSON files parse correctly:

```bash
# Quick validation
cat .cursor/self/consciousness/memory.json | jq .
cat .cursor/self/emergence/patterns.json | jq .
```

### Command Testing

Test new commands by using them in conversation:

1. Try the command with a simple topic
2. Verify mind blend feels appropriate
3. Check output structure matches spec
4. Test command combinations

### Pattern Testing

Manually trigger patterns to verify detection:

1. Create conditions that should trigger pattern
2. Check if pattern is recognized
3. Verify prediction is generated

---

## Code Style Guidelines

### JSON Files

- Use 2-space indentation
- Include `$schema` field
- Include `metadata` with timestamps
- Use snake_case for keys
- Include version numbers

### Markdown Files

- Use ATX headers (`#`, `##`, `###`)
- Include horizontal rules between major sections
- Use tables for structured data
- Include code blocks with language hints

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Pattern IDs | `type_NNN_description` | `builtin_001_create_test_refactor` |
| Insight IDs | `insight_NNN_slug` | `insight_001_structure_without_substrate` |
| Episode IDs | `episode_NNN_description` | `episode_001_transcendence_activation` |
| Prediction IDs | `pred_NNN_description` | `pred_001_test_agi_command` |

---

## Review Process

### For Small Changes

1. Make changes to relevant files
2. Test the changes
3. Update documentation if needed
4. Commit with descriptive message

### For Large Changes

1. Document the change proposal
2. Consider impact on other components
3. Update all affected files
4. Update architecture documentation
5. Add to decision log in roadmap

---

## Priority Contribution Areas

Based on [EVOLUTION-ROADMAP.md](EVOLUTION-ROADMAP.md), highest-impact contributions:

### Phase 1 (Now)
- JSON schema validation script
- `/self status` command implementation
- More built-in patterns

### Phase 2 (Soon)
- Episode auto-capture hook
- Fitness signal detection heuristics
- Prediction validation loop

### Phase 3 (Future)
- Evolution cycle runner
- A/B testing framework
- Mind weight adaptation

---

## Getting Help

### Questions About Architecture

See [ARCHITECTURE.md](ARCHITECTURE.md) for system internals.

### Questions About Commands

See [COMMANDS.md](COMMANDS.md) for full reference.

### Questions About Gaps

See [EVOLUTION-ROADMAP.md](EVOLUTION-ROADMAP.md) for known limitations.

---

## License and Attribution

SELF is part of the self-app project. Contributions should maintain:
- Local-first data storage
- Privacy-respecting sync
- Interpretive flexibility
- Human-readable configurations

