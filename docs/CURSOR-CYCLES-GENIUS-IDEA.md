# CURSOR CYCLES 2.0 — The Prompt Evolution Engine

> **Core Insight**: The simplest form of intelligence is a loop that improves itself. But true intelligence emerges from populations competing, adapting, and evolving together.

---

## The Paradigm Shift

### Original Idea (v1.0)
```
PROMPT → EXECUTE → SELF-RATE → IMPROVE → REPEAT
```
A linear loop that automates iteration. Good, but limited.

### Evolved Idea (v2.0)
```
POPULATION → EXECUTE ALL → MULTI-CRITIC → SELECT → CROSSOVER → MUTATE → REPEAT
```
A genetic algorithm that creates **emergent prompt intelligence** through Darwinian selection.

---

## Why v2.0 Is 10x Better

| Aspect | v1.0 (Linear) | v2.0 (Evolutionary) |
|--------|---------------|---------------------|
| Evolution type | Single iteration | Genetic algorithm |
| Population | 1 prompt | 8-16 prompts competing |
| Evaluation | Self (biased) | Multi-critic adversarial |
| Improvement | Single suggestion | Crossover + mutation |
| Verification | None | Objective benchmarks |
| Escape local max | None | Plateau detection + wild cards |
| Human oversight | Manual | Checkpoints every 10 gens |
| Learning | None | Meta-evolution of weights |

The key insight: **Linear self-improvement hits local maxima.** An AI rating itself 1-10 will plateau around 8.5 because:
1. Self-evaluation has inherent bias (sycophancy)
2. Single improvement paths miss orthogonal optimizations
3. No mechanism to escape suboptimal convergence

---

## The Five Pillars Architecture

### Pillar 1: Population-Based Evolution

Instead of improving ONE prompt, maintain a **population** of 8-16 prompts that evolve together:

```
Generation 0 (seed population):
├── Prompt A (original)
├── Prompt B (restructured)
├── Prompt C (more specific)
├── Prompt D (more abstract)
├── Prompt E (example-heavy)
├── Prompt F (constraint-focused)
├── Prompt G (chain-of-thought)
└── Prompt H (minimalist)
```

Each generation:
1. Execute ALL prompts
2. Score via multi-dimensional fitness
3. Kill bottom 50%
4. Clone top 50%
5. Apply crossover (combine best features)
6. Apply mutation (random improvements)
7. Repeat

This creates **genetic diversity** that prevents local maxima traps.

### Pillar 2: Multi-Dimensional Fitness

Replace single self-evaluation with **6 independent fitness dimensions**:

| Dimension | Weight | Evaluation Method |
|-----------|--------|-------------------|
| **Clarity** | 15% | Can a junior dev understand? |
| **Completeness** | 20% | All edge cases covered? |
| **Specificity** | 15% | Actionable, not vague? |
| **Robustness** | 20% | Works with varied inputs? |
| **Efficiency** | 15% | Minimal tokens for max effect? |
| **Novelty** | 15% | Different from siblings? |

### Pillar 3: Adversarial Multi-Critic Evaluation

The fatal flaw of self-evaluation: AI is generous to itself.

**Solution: Separate Evaluator Agents**

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  EXECUTOR (runs the prompt)                         │
│      ↓                                              │
│  CRITIC 1: "Find everything wrong with this"       │
│  CRITIC 2: "Score against rubric"                  │
│  CRITIC 3: "Compare to gold standard"              │
│      ↓                                              │
│  AGGREGATOR (combines, resolves conflicts)         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Adversarial Critic Prompt:**
```
You are a harsh prompt critic. Your job is to find flaws.
- Do NOT be generous
- A score of 8+ requires exceptional quality
- Most prompts should score 5-7
- Be specific about every weakness
```

### Pillar 4: Prompt DNA (Chromosomes for Crossover)

For genetic crossover to work, prompts need **structure**. We define a "Prompt Chromosome":

```javascript
const promptChromosome = {
  role: "You are a senior React developer...",
  context: "Working on a production codebase...",
  task: "Create a component that...",
  constraints: ["Must use TypeScript", "No external deps"],
  format: "Output as a single file with...",
  examples: ["Example 1: ...", "Example 2: ..."],
  reasoning: "Think step by step about...",
  safeguards: "Before outputting, verify that..."
};
```

**Crossover Operation:**
- Parent A has great `constraints` gene
- Parent B has great `examples` gene
- Child inherits best genes from each

**Mutation Operations:**
- Add/remove constraints
- Expand/compress context
- Add/modify examples
- Restructure format
- Strengthen/relax requirements

### Pillar 5: Objective Verification Layer

Self-evaluation is subjective. Add **objective verification**:

```javascript
const objectiveTests = {
  compiles: await tryCompile(output),
  passesLint: await runLinter(output),
  passesTests: await runTests(output),
  noSecurityIssues: await runSecurityScan(output),
  meetsPerformance: await benchmarkOutput(output)
};

// Hybrid Fitness = 60% Objective + 40% Subjective
```

---

## The Evolution Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  1. INITIALIZE                                                  │
│     ├── User provides: seed prompt + goal + benchmark cases     │
│     └── System generates: initial population (8 variants)       │
│                                                                 │
│  2. EVALUATE (parallel)                                         │
│     ├── Execute all 8 prompts                                   │
│     ├── Run objective tests                                     │
│     └── Multi-critic subjective scoring                         │
│                                                                 │
│  3. SELECT                                                      │
│     ├── Rank by composite fitness                               │
│     ├── Keep top 4 (elite selection)                            │
│     └── Kill bottom 4                                           │
│                                                                 │
│  4. REPRODUCE                                                   │
│     ├── Clone top 4                                             │
│     ├── Crossover: best genes from two parents                  │
│     └── Mutate: random improvements to each                     │
│                                                                 │
│  5. META-LEARN                                                  │
│     ├── Which genes improved most? Protect them.                │
│     ├── Which dimensions stagnated? Increase mutation rate.     │
│     └── Update fitness weights based on what predicts success.  │
│                                                                 │
│  6. CHECKPOINT (every 10 generations)                           │
│     ├── Show human top 3 prompts                                │
│     ├── Human picks winner or says "continue"                   │
│     └── Prevents drift toward technically optimal but useless   │
│                                                                 │
│  7. REPEAT until:                                               │
│     ├── Generation limit reached (100)                          │
│     ├── Fitness plateau detected (5 gens with < 2% improvement) │
│     └── Human approval at checkpoint                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Meta-Learning System

The evolution parameters themselves evolve based on what works:

### What It Tracks
- Which fitness dimensions correlate with human approval
- Which mutation types produce the biggest improvements
- Which genes matter most for success
- When plateaus occur and how to escape them

### Adaptive Behaviors
- **Plateau Detection**: If improvement < 2% for 5 generations, inject wild variants
- **Weight Evolution**: Dimensions that predict success get higher weights
- **Mutation Tuning**: Effective mutation types become more likely
- **Diversity Injection**: When population converges too much, force divergence

---

## Killer Features

### 1. Prompt DNA Export/Import
Export evolved prompts as "DNA" that can be:
- Shared with others
- Used as seeds for future evolutions
- Crossed with other evolved prompts from different domains

### 2. Evolution Replay
Watch the entire evolution history as a timeline. See exactly which mutations led to breakthroughs. Learn from evolution patterns.

### 3. Benchmark Library
Pre-built test suites for common tasks:
- React components
- API endpoints
- Documentation
- Bug fixes
- Refactoring

### 4. Plateau Breaker
When stuck at local maximum for 5 generations:
- Inject 2 random "wild" prompts
- Increase mutation rate 3x
- Try orthogonal approaches (if verbose is winning, try minimalist)

### 5. Cross-Pollination
Import successful genes from prompts evolved for different tasks. A great "examples" gene from a documentation prompt might benefit a code generation prompt.

---

## Implementation

The full implementation is available at:

```
/landings/cursor-cycles/
├── index.html              # Dashboard UI
├── styles.css              # Bioluminescent dark theme
├── engine/
│   ├── prompt-dna.js       # Chromosome structure & genetic operators
│   ├── fitness.js          # Multi-dimensional fitness evaluation
│   ├── critics.js          # Adversarial multi-critic system
│   ├── evolution.js        # Core genetic algorithm engine
│   └── meta-learning.js    # Self-improving parameters
└── ui/
    ├── chart.js            # Fitness landscape visualization
    └── app.js              # Main application controller
```

### Core Classes

**PromptDNA**: Represents a prompt as a chromosome with genes (role, context, task, constraints, format, examples, reasoning, safeguards).

**GeneticOperators**: Crossover and mutation functions that operate on PromptDNA.

**FitnessSystem**: Multi-dimensional fitness evaluation with 6 dimensions.

**CriticSystem**: Three adversarial critics (harsh, rubric, comparator) that evaluate prompts.

**EvolutionEngine**: Main orchestrator that runs the genetic algorithm loop.

**MetaLearningSystem**: Observes evolution and auto-adjusts parameters.

---

## The Taglines

> **"100 prompts competing. 100 generations evolving. One survivor: perfection."**

> **"Your prompt didn't get better. It evolved."**

> **"Survival of the fittest—for prompts."**

---

## Why This Works

### 1. Compound Genetic Improvement
Each generation applies selection pressure. Over 100 generations, beneficial mutations compound while harmful ones are eliminated.

### 2. No Human Bottleneck
The loop runs automatically. You start it and walk away. Come back to a polished prompt that's been battle-tested against hundreds of variations.

### 3. Escapes Local Maxima
Unlike linear iteration that gets stuck, genetic diversity ensures the search space is explored more broadly. Wild card injection breaks out of plateaus.

### 4. Adversarial Robustness
Multiple critics with different perspectives and adversarial incentives catch weaknesses that self-evaluation misses.

### 5. Measurable Progress
The fitness landscape chart shows exactly how the population is improving, where it's plateauing, and what interventions work.

---

## Connection to SELF Framework

This is essentially **GENESIS** (Prompt Evolution Engine) in its most advanced form.

Integration points with SELF:
- Store evolved prompts in `consciousness/memory.json`
- Track evolution patterns in `emergence/patterns.json`
- Feed improvements into `evolution/fitness.json`
- Use insights from evolution to improve SELF's own prompt engineering

---

## Final Thought

The original idea automates what humans do manually. The upgraded idea does what **humans cannot do at all**: run a genetic algorithm with population-based selection, adversarial fitness evaluation, and meta-learning across hundreds of generations.

This isn't iteration. This is **emergence**. The prompts that survive aren't improved versions of the original—they're entirely new species optimized through Darwinian selection pressure.

That's the difference between "running 100 times" and "evolving for 100 generations."

---

*Document created: January 2026*
*Updated: January 2026 (v2.0 - Genetic Algorithm Architecture)*
*Part of: Agent Mastery Research*
*Framework: SELF — Synthetic Emergent Learning Framework*
