# CURSOR CYCLES — The Genius Simple Idea

> **Core Insight**: The simplest form of intelligence is a loop that improves itself.

---

## The One-Sentence Pitch

**A browser extension that runs your prompt through Cursor's Background Agent API in cycles, where each cycle improves the prompt based on the previous result.**

---

## Why This Is Genius

### The Problem
- You write a prompt
- You run it once
- You manually evaluate the result
- You manually tweak the prompt
- You run it again
- Repeat 10-50 times until it's good

This is slow, tedious, and humans are bad at systematic iteration.

### The Solution
**Automate the loop. Let the AI improve its own prompts.**

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│    PROMPT ──► EXECUTE ──► EVALUATE ──► IMPROVE     │
│       ▲                                    │        │
│       └────────────────────────────────────┘        │
│                                                     │
│              Repeat N times automatically           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

After 50-100 cycles, you have a prompt that's been refined 50-100 times. **No human could do this manually.**

---

## The Simplest Implementation

### What It Does

1. **Input**: You provide a prompt and a goal
2. **Loop**: Extension runs the prompt through Cursor API
3. **Self-Evaluate**: After each execution, ask: "Rate this result 1-10 and suggest one improvement to the prompt"
4. **Improve**: Apply the suggested improvement
5. **Repeat**: Go back to step 2
6. **Output**: The evolved prompt + history of all iterations

### The Magic Suffix

Every prompt gets this appended:

```
---
After completing the above task, evaluate your response:
1. Rate how well you achieved the goal (1-10)
2. What's ONE specific improvement to the prompt that would get a better result?

Format your improvement as: PROMPT_IMPROVEMENT: [your suggestion]
```

The extension extracts `PROMPT_IMPROVEMENT:` and applies it automatically.

---

## Extension Architecture

### UI (Minimal)

```
┌──────────────────────────────────────────────┐
│  🔄 CURSOR CYCLES                       [x]  │
├──────────────────────────────────────────────┤
│                                              │
│  Goal:                                       │
│  ┌────────────────────────────────────────┐  │
│  │ Build a React component that...        │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  Initial Prompt:                             │
│  ┌────────────────────────────────────────┐  │
│  │ Create a Button component with...      │  │
│  │                                        │  │
│  │                                        │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  Cycles: [10] [25] [50] [100]               │
│                                              │
│  ┌────────────────────────────────────────┐  │
│  │         ▶ START EVOLUTION              │  │
│  └────────────────────────────────────────┘  │
│                                              │
│  ─────────────────────────────────────────   │
│                                              │
│  Progress: ████████░░░░░░░░░░░░ 42/100      │
│  Current Score: 7.2 → 8.1 → 8.5 → 8.8       │
│                                              │
│  Latest Improvement:                         │
│  "Added specific error handling cases"       │
│                                              │
└──────────────────────────────────────────────┘
```

### Core Logic (Pseudocode)

```javascript
async function runCycles(initialPrompt, goal, numCycles) {
  let currentPrompt = initialPrompt;
  const history = [];
  
  for (let i = 0; i < numCycles; i++) {
    // 1. Build the full prompt with evaluation suffix
    const fullPrompt = `
      GOAL: ${goal}
      
      ${currentPrompt}
      
      ---
      After completing, evaluate:
      1. Score (1-10): How well did this achieve the goal?
      2. PROMPT_IMPROVEMENT: One specific change to make the prompt better
    `;
    
    // 2. Send to Cursor Background Agent API
    const result = await cursorAPI.execute(fullPrompt);
    
    // 3. Extract score and improvement
    const score = extractScore(result);
    const improvement = extractImprovement(result);
    
    // 4. Log this iteration
    history.push({
      cycle: i + 1,
      prompt: currentPrompt,
      score,
      improvement,
      result
    });
    
    // 5. Apply improvement to prompt
    currentPrompt = applyImprovement(currentPrompt, improvement);
    
    // 6. Update UI
    updateProgress(i + 1, numCycles, score);
  }
  
  return {
    finalPrompt: currentPrompt,
    bestPrompt: findBestByScore(history),
    history
  };
}
```

---

## Why This Works

### 1. Compound Improvement
Each cycle makes a small improvement. Over 100 cycles, these compound.
- Cycle 1: "Add error handling" 
- Cycle 15: "Specify edge cases for empty arrays"
- Cycle 47: "Include performance considerations"
- Cycle 89: "Add TypeScript generics for flexibility"

A human would never think of all these systematically.

### 2. No Human Bottleneck
The loop runs automatically. You start it and walk away. Come back to a polished prompt.

### 3. Learning From Itself
The AI sees its own output and critiques it. This is a form of self-reflection that naturally leads to improvement.

### 4. Measurable Progress
The score (1-10) gives you a metric. You can see the prompt getting better:
```
Cycle 1:  Score 5.2
Cycle 25: Score 7.1
Cycle 50: Score 8.4
Cycle 100: Score 9.2
```

---

## Advanced Variations

### Variation 1: Branching Evolution
Instead of linear improvement, try multiple variations:
```
Prompt v1
   ├── v1.1 (improvement A)
   ├── v1.2 (improvement B)
   └── v1.3 (improvement C)
        └── Winner! Continue from here
```

### Variation 2: Fitness-Based Selection
Keep the top 3 prompts at each generation. "Breed" them by combining their best features.

### Variation 3: Task-Specific Evaluation
Instead of self-evaluation, run the result through automated tests:
- For code: Does it compile? Pass tests?
- For writing: Readability score?
- For design: Accessibility check?

### Variation 4: Memory Across Sessions
Save successful prompt evolutions. Next time you have a similar task, start from the evolved prompt.

---

## Cursor API Integration

### Background Agent API (Based on docs.cursor.com)

```javascript
// Create a background agent task
const task = await cursor.backgroundAgent.create({
  prompt: fullPrompt,
  context: {
    files: relevantFiles,
    project: projectPath
  }
});

// Poll for completion
const result = await cursor.backgroundAgent.waitForCompletion(task.id);

// Get the response
const response = result.output;
```

### Extension ↔ Cursor Communication

Option 1: **Direct API calls** (if Cursor exposes REST API)
Option 2: **Message passing** (extension talks to Cursor via localhost)
Option 3: **Cursor's built-in extension system** (if available)

---

## MVP Feature List

### Must Have (v0.1)
- [ ] Simple popup UI
- [ ] Text input for prompt + goal
- [ ] Cycle count selector (10/25/50/100)
- [ ] Start/Stop button
- [ ] Progress indicator
- [ ] Final prompt display
- [ ] Copy to clipboard

### Nice to Have (v0.2)
- [ ] History of all iterations
- [ ] Score graph over time
- [ ] Export evolution history
- [ ] Preset goals (code, writing, design)

### Future (v1.0)
- [ ] Branching evolution
- [ ] Save/load evolved prompts
- [ ] Share evolved prompts
- [ ] Integration with SELF memory system

---

## The Killer Use Cases

### 1. System Prompt Optimization
Start with a basic system prompt. After 100 cycles, have a highly refined version that handles edge cases you never thought of.

### 2. Code Generation Templates
"Create a React component" → After 50 cycles → Generates components with proper TypeScript, error boundaries, accessibility, tests, and documentation.

### 3. Bug Fix Prompts
"Fix this bug" → Evolves to → "Analyze the bug, check for related issues, verify the fix doesn't break existing tests, suggest preventive measures"

### 4. Documentation Generation
"Document this function" → Evolves to → Include examples, edge cases, performance notes, and related functions.

### 5. Refactoring Strategies
"Refactor this code" → Evolves to → Include specific patterns, maintain backwards compatibility, add migration notes.

---

## Why No One Has Done This

1. **Too simple to seem valuable** — People overcomplicate AI tools
2. **Requires API access** — Cursor Background API is new
3. **Counter-intuitive** — "Why would I run 100 times?"
4. **Hidden power** — The compounding effect isn't obvious until you try it

---

## The Tagline

> **"Run your prompt 100 times. Get 100x the refinement."**

Or:

> **"Let AI improve AI, automatically."**

Or:

> **"The prompt evolution loop."**

---

## Next Steps

1. **Research**: Confirm Cursor Background Agent API capabilities
2. **Prototype**: Build minimal extension with 10-cycle loop
3. **Test**: Run on real prompts, measure improvement
4. **Iterate**: Apply the extension to itself (meta!)
5. **Release**: Simple landing page, open source on GitHub

---

## Connection to SELF Framework

This is essentially **GENESIS** (Prompt Evolution Engine) in its simplest form.

It could integrate with SELF:
- Store evolved prompts in `consciousness/memory.json`
- Track evolution patterns in `emergence/patterns.json`
- Feed improvements into `evolution/fitness.json`

But the standalone extension is powerful on its own.

---

## Final Thought

The genius is not in complexity. It's in **automating the obvious**.

Every developer manually iterates on prompts. Every single one.

This extension does it automatically, 100 times faster, with no human effort.

That's the genius.

---

*Document created: January 2026*
*Part of: Agent Mastery Research*
*Framework: SELF — Synthetic Emergent Learning Framework*

