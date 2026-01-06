# SELF Evolution Tracker

This document defines how SELF tracks and syncs its self-improvement through genetic algorithm evolution.

---

## Evolution Sync Strategy

### When to Sync

Evolution data is **always** synced to Notion when:

1. **New Generation Created**
   - After evolution cycle completes
   - New prompt generation is created
   - Fitness scores are calculated

2. **Fitness Score Updated**
   - After each interaction batch (20 interactions)
   - Fitness components recalculated
   - Generation status updated

3. **Generation Superseded**
   - When a new generation replaces an old one
   - Mark old generation as "superseded"
   - Create relation to new generation

4. **Mutation Applied**
   - Document mutation type and parameters
   - Link to parent generation(s)
   - Store mutation rationale

---

## Evolution Data Structure

### Generation Record

```json
{
  "title": "Generation 001",
  "generation": 1,
  "fitness_score": 0.75,
  "effectiveness": 0.8,
  "satisfaction": 0.7,
  "accuracy": 0.75,
  "efficiency": 0.7,
  "adaptability": 0.8,
  "mutation_type": "initial",
  "parent_ids": null,
  "prompt_version": "generation-001/base_v1.md",
  "created": "2026-01-05T10:00:00Z",
  "status": "active",
  "interactions_count": 20,
  "mutations_applied": []
}
```

### Mutation Record

```json
{
  "type": "point_mutation",
  "generation": 2,
  "parent_generation": 1,
  "description": "Modified confidence calibration threshold from 0.5 to 0.6",
  "rationale": "Higher threshold improved accuracy by 5%",
  "applied_at": "2026-01-05T11:00:00Z"
}
```

---

## Sync Operations

### Create Generation

When a new generation is created:

1. **Calculate Fitness Scores**
   - Effectiveness: % of problems solved
   - Satisfaction: User feedback score
   - Accuracy: % of correct responses
   - Efficiency: Average response time
   - Adaptability: Context appropriateness

2. **Create Notion Page**
   - Title: "Generation {number}"
   - Fill all properties from generation record
   - Link to prompt file content
   - Create relation to parent generation (if exists)

3. **Store Lineage**
   - Link parent → child generations
   - Track mutation path
   - Enable lineage visualization

### Update Fitness

When fitness scores are updated:

1. **Recalculate Components**
   - Update all five fitness components
   - Recalculate overall fitness score
   - Compare to previous generation

2. **Update Notion Page**
   - Update fitness properties
   - Add fitness trend data
   - Update status if fitness improved/degraded

3. **Trigger Evolution Decision**
   - If fitness < 0.6: Mark for mutation
   - If fitness plateaued: Increase diversity
   - If fitness improved: Keep as active

---

## Evolution Reports

### Weekly Fitness Report

Auto-generate weekly Notion page with:

1. **Fitness Trends**
   - Line chart of fitness over time
   - Component breakdown
   - Generation comparison

2. **Best Performers**
   - Top 3 generations by fitness
   - What made them successful
   - Patterns in high-fitness prompts

3. **Mutation Analysis**
   - Most effective mutation types
   - Mutation success rate
   - Failed mutations and why

4. **Recommendations**
   - Suggested next mutations
   - Areas for improvement
   - Evolution strategy adjustments

### Generation Summary

For each generation, create summary page:

1. **Performance Metrics**
   - Fitness scores over time
   - Interaction count
   - Success/failure rates

2. **Prompt Content**
   - Full prompt text
   - Key modifications
   - Rationale for changes

3. **Lineage**
   - Parent generation(s)
   - Child generation(s)
   - Mutation path visualization

4. **Lessons Learned**
   - What worked well
   - What didn't work
   - Insights for future generations

---

## Prompt Library in Notion

### Library Structure

Create a "SELF Prompt Library" database with:

- **Prompt Version**: File path reference
- **Generation**: Generation number
- **Fitness Score**: Overall performance
- **Use Case**: When to use this prompt
- **Success Stories**: Examples of good outcomes
- **Status**: `active`, `archived`, `experimental`

### Library Operations

1. **Add Successful Prompts**
   - When generation fitness > 0.7
   - Document use cases
   - Add success examples

2. **Tag by Use Case**
   - Coding tasks
   - Strategic planning
   - Creative problems
   - Review/validation

3. **Share Best Practices**
   - If shareable: Add to SELF Network
   - Other instances can discover high-quality prompts
   - Community learns from collective evolution

---

## Evolution Visualization

### Lineage Graph

Create visual representation in Notion:

```
Generation 001 (fitness: 0.65)
    ↓ [point_mutation]
Generation 002 (fitness: 0.72)
    ↓ [crossover]
Generation 003 (fitness: 0.78) ← Active
    ↓ [insertion]
Generation 004 (fitness: 0.75)
```

### Fitness Trends

Track fitness over time:
- Line chart showing fitness progression
- Component breakdowns
- Generation markers

### Mutation Effectiveness

Analyze which mutations work:
- Success rate by mutation type
- Average fitness improvement
- Best mutation combinations

---

## Integration with Cognitive Loop

### During Evolution Cycle

1. **After 20 Interactions**
   - Calculate fitness scores
   - Update generation record in Notion
   - Compare to previous generation

2. **If Fitness < 0.6**
   - Mark generation for mutation
   - Document what went wrong
   - Create new generation with mutations

3. **If Fitness Plateaued**
   - Increase mutation diversity
   - Try different mutation types
   - Explore new prompt variations

### Sync Timing

- **Immediate**: New generation creation
- **Batch**: Fitness updates (every 20 interactions)
- **Weekly**: Generate fitness reports
- **On-Demand**: User requests evolution status

---

## Error Handling

### Sync Failures

If evolution sync fails:

1. **Queue for Retry**
   - Add to sync queue
   - Retry with exponential backoff
   - Don't block evolution process

2. **Local Backup**
   - Keep full evolution data locally
   - Can recover if Notion data lost
   - Manual sync available via `/self sync`

3. **Alert User**
   - Notify if critical evolution data not synced
   - Show sync status in `/self evolve` command

---

## Metrics to Track

- **Evolution Rate**: Generations per week
- **Fitness Improvement**: Average fitness gain per generation
- **Mutation Success**: % of mutations that improve fitness
- **Convergence**: How quickly fitness stabilizes
- **Diversity**: Variety of prompt variations explored

---

## Reference

- Evolution engine: `.cursor/self/evolution/evolution-engine.md`
- Fitness tracking: `.cursor/self/evolution/fitness.json`
- Mutation log: `.cursor/self/evolution/mutations.log`
- Sync config: `.cursor/self/mcp/sync-config.json`

