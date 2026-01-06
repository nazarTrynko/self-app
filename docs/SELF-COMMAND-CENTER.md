# SELF Command Center — The Masterpiece Web App

> **A web interface that implements the SELF framework vision, triggers Cursor API cycles, and evolves prompts automatically.**

---

## Important Note

**The `.cursor/self/` folder contains specifications and blueprints, not working implementations.** The files there (evolution-engine.md, blending.md, ideation-engine-v3.md, etc.) are the _design documents_ that describe how the system should work.

This Command Center would be **the actual implementation** that brings those specifications to life.

```
.cursor/self/           →    SELF Command Center
(Specifications)              (Implementation)

evolution-engine.md     →    Evolution loop code
blending.md             →    Mind blending algorithm
memory.json schema      →    Working memory system
ideation-engine-v3.md   →    Automated ideation pipeline
```

---

## The Vision

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        SELF COMMAND CENTER                                   │
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │   IDEATE     │  │   EVOLVE     │  │   COUNCIL    │  │   MEMORY     │    │
│  │   💡         │  │   🧬         │  │   🧠         │  │   📚         │    │
│  │  Run idea    │  │  Run N       │  │  Summon      │  │  View &      │    │
│  │  generation  │  │  cycles of   │  │  all 5       │  │  edit        │    │
│  │  pipeline    │  │  evolution   │  │  minds       │  │  knowledge   │    │
│  └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                     ACTIVE PROCESS                                    │    │
│  │  Evolution Cycle: 47/100  █████████████████░░░░░░░░░░░░ 47%          │    │
│  │  Current Fitness: 7.2 → 7.8 → 8.1 → 8.4                              │    │
│  │  Active Mind Blend: Architect (0.8) + Guardian (0.5)                 │    │
│  └─────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              WEB APP                                         │
│                                                                              │
│  ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐         │
│  │   Frontend      │    │   Backend       │    │   Reference     │         │
│  │   (HTML/JS)     │◄──►│   (Node/Bun)    │◄──►│   Specs         │         │
│  │                 │    │                 │    │ (.cursor/self)  │         │
│  │  - UI Controls  │    │  - API Routes   │    │                 │         │
│  │  - Process View │    │  - Cursor API   │    │  SPECS TO       │         │
│  │  - Live Updates │    │  - Evolution    │    │  IMPLEMENT:     │         │
│  └─────────────────┘    │    Engine       │    │  - evolution.md │         │
│                         │  - Mind Blend   │    │  - blending.md  │         │
│                         │    Algorithm    │    │  - ideation.md  │         │
│                         └────────┬────────┘    └─────────────────┘         │
│                                  │                                          │
│                                  ▼                                          │
│                         ┌─────────────────┐                                 │
│                         │ Cursor Background│                                 │
│                         │   Agent API      │                                 │
│                         └─────────────────┘                                 │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Key Insight:** The `.cursor/self/` folder provides the _blueprints_. This app provides the _implementation_.

---

## Core Processes (The Buttons)

### 1. 💡 IDEATE — Run Ideation Pipeline

**What it does:**

- Loads `ideation-engine-v3.md` prompt
- Runs through all 5 phases automatically
- Each phase is a Cursor API call
- Outputs structured idea document

**UI:**

```
┌────────────────────────────────────────────────────────────┐
│  💡 IDEATION ENGINE                                        │
│                                                            │
│  Constraints (from memory):                                │
│  ┌────────────────────────────────────────────────────┐   │
│  │ Time: 20hrs/week | Skills: Web, AI | Goal: $10K MRR│   │
│  └────────────────────────────────────────────────────┘   │
│                                                            │
│  Problem Space (optional):                                 │
│  ┌────────────────────────────────────────────────────┐   │
│  │ AI coding tools for developers                      │   │
│  └────────────────────────────────────────────────────┘   │
│                                                            │
│  Phases to Run:                                            │
│  ☑ Phase 0: Know Thyself                                  │
│  ☑ Phase 1: Pain Discovery                                │
│  ☑ Phase 2: Pre-Validation                                │
│  ☑ Phase 3: Positioning                                   │
│  ☑ Phase 4: MVP Scoping                                   │
│  ☑ Phase 5: Launch Strategy                               │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │              ▶ START IDEATION                        │  │
│  └─────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

**Flow:**

```
User Input → Phase 0 API Call → Phase 1 API Call → ... → Phase 5 → Output Ideas
                    ↓                   ↓
             Store in memory     Track in patterns.json
```

---

### 2. 🧬 EVOLVE — Run Evolution Cycles

**What it does:**

- Takes any prompt as input
- Runs N cycles through Cursor API
- Each cycle: Execute → Evaluate → Mutate → Store
- Uses `evolution-engine.md` rules
- Tracks fitness in `fitness.json`

**UI:**

```
┌────────────────────────────────────────────────────────────┐
│  🧬 EVOLUTION ENGINE                                       │
│                                                            │
│  Select Prompt to Evolve:                                  │
│  ┌────────────────────────────────────────────────────┐   │
│  │ ▼ [dropdown]                                        │   │
│  │   • base_v1.md (Generation 1)                       │   │
│  │   • ideation-engine-v3.md                           │   │
│  │   • Custom prompt...                                │   │
│  └────────────────────────────────────────────────────┘   │
│                                                            │
│  Or paste custom prompt:                                   │
│  ┌────────────────────────────────────────────────────┐   │
│  │                                                      │   │
│  │                                                      │   │
│  └────────────────────────────────────────────────────┘   │
│                                                            │
│  Goal/Task to Test Against:                                │
│  ┌────────────────────────────────────────────────────┐   │
│  │ Generate a React component with TypeScript...       │   │
│  └────────────────────────────────────────────────────┘   │
│                                                            │
│  Cycles: [10] [25] [50] [100] [___]                       │
│                                                            │
│  Mutation Settings:                                        │
│  ├─ Word Substitution:   ████████░░ 80%                   │
│  ├─ Sentence Reorder:    █████░░░░░ 50%                   │
│  ├─ Emphasis Shift:      ███████░░░ 70%                   │
│  └─ Detail Adjustment:   ██████░░░░ 60%                   │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │              ▶ START EVOLUTION                       │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
│  ─────────────────────────────────────────────────────────│
│                                                            │
│  Evolution Progress:                                       │
│  Cycle: 47/100  █████████████████░░░░░░░░░░░░ 47%         │
│                                                            │
│  Fitness History:                                          │
│  ┌────────────────────────────────────────────────────┐   │
│  │  8.5│      ●                                        │   │
│  │  8.0│    ●   ●                                      │   │
│  │  7.5│  ●       ●                                    │   │
│  │  7.0│●                                              │   │
│  │     └────────────────────────────────────────       │   │
│  │       0   10   20   30   40   50                    │   │
│  └────────────────────────────────────────────────────┘   │
│                                                            │
│  Latest Mutations Applied:                                 │
│  • Cycle 45: Word substitution "implement" → "build"       │
│  • Cycle 46: Emphasis shift to error handling              │
│  • Cycle 47: Detail adjustment (more verbose)              │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Flow:**

```
Prompt + Goal + Cycles
       │
       ▼
   ┌───────────────────────────────────────┐
   │             EVOLUTION LOOP             │
   │                                        │
   │  1. Build full prompt with evaluation  │
   │  2. Call Cursor API                    │
   │  3. Extract score + suggestion         │
   │  4. Apply mutation based on suggestion │
   │  5. Log to fitness.json                │
   │  6. Update UI                          │
   │  7. Repeat until N cycles              │
   │                                        │
   └───────────────────────────────────────┘
       │
       ▼
   Save best variant to prompts/generation-00X/
```

---

### 3. 🧠 COUNCIL — Summon All 5 Minds

**What it does:**

- Takes a problem/question as input
- Simultaneously queries with each mind's context
- Uses `cognition/modes/*.md` for each mind
- Blends output according to `blending.md`
- Shows all perspectives + synthesis

**UI:**

```
┌────────────────────────────────────────────────────────────┐
│  🧠 MIND COUNCIL                                           │
│                                                            │
│  Your Question/Problem:                                    │
│  ┌────────────────────────────────────────────────────┐   │
│  │ Should I build this feature now or wait for more    │   │
│  │ user feedback?                                      │   │
│  └────────────────────────────────────────────────────┘   │
│                                                            │
│  Council Mode:                                             │
│  ○ Quick Council (parallel, fastest)                      │
│  ● Full Deliberation (sequential with cross-reference)    │
│  ○ Single Mind: [dropdown]                                │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │              ▶ SUMMON COUNCIL                        │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
│  ─────────────────────────────────────────────────────────│
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ 🏗️ ARCHITECT                              Weight: 0.6 │  │
│  │ "From a technical perspective, the feature would... │  │
│  │  I recommend building a minimal version first..."   │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ 🔮 ORACLE                                 Weight: 0.8 │  │
│  │ "Strategically, waiting for feedback has value but  │  │
│  │  carries opportunity cost. The key question is..."  │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ ⚖️ CRITIC                                 Weight: 0.7 │  │
│  │ "Let me challenge both assumptions. You're assuming │  │
│  │  the feedback will be actionable, but..."           │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ 🎨 CREATOR                                Weight: 0.4 │  │
│  │ "What if you didn't have to choose? Consider a      │  │
│  │  third option: ship a feature flag that..."         │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ 🛡️ GUARDIAN                               Weight: 0.5 │  │
│  │ "Before deciding, consider the risks: shipping too  │  │
│  │  fast could lead to technical debt, but waiting..." │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
│  ═══════════════════════════════════════════════════════  │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ ✨ SYNTHESIS (Confidence: 0.78)                      │  │
│  │                                                      │  │
│  │ Based on the council's deliberation, the            │  │
│  │ recommendation is to **build a minimal version      │  │
│  │ behind a feature flag** while collecting feedback.  │  │
│  │                                                      │  │
│  │ This approach satisfies:                             │  │
│  │ • Architect's need for incremental building         │  │
│  │ • Oracle's strategic timing consideration           │  │
│  │ • Creator's alternative solution                    │  │
│  │ • Guardian's risk mitigation                        │  │
│  │                                                      │  │
│  │ Next steps: [1] [2] [3]                             │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Flow:**

```
Question
    │
    ├─► Architect API Call ─► Response
    ├─► Oracle API Call ────► Response
    ├─► Critic API Call ────► Response
    ├─► Creator API Call ───► Response
    └─► Guardian API Call ──► Response
                                │
                                ▼
                    Blend & Synthesize (using blending.md rules)
                                │
                                ▼
                    Output + Save to memory.json episodes
```

---

### 4. 📚 MEMORY — View & Edit Knowledge

**What it does:**

- Visual interface to `memory.json`
- Shows entities, relationships, episodes
- Allows manual edits
- Displays insights and patterns
- Shows prediction accuracy

**UI:**

```
┌────────────────────────────────────────────────────────────┐
│  📚 MEMORY EXPLORER                                        │
│                                                            │
│  Tabs: [Entities] [Episodes] [Insights] [Predictions]     │
│                                                            │
│  ═══════════════════════════════════════════════════════  │
│                                                            │
│  🔍 Search: [________________________] [Filter ▼]          │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ ENTITIES (12)                                        │  │
│  │                                                      │  │
│  │ 👤 Users                                             │  │
│  │    └─ Primary User                                   │  │
│  │       • Risk tolerance: medium                       │  │
│  │       • Expertise: [web, AI, design]                 │  │
│  │                                                      │  │
│  │ 📁 Projects (3)                                      │  │
│  │    ├─ self-app                                       │  │
│  │    ├─ landing-pages                                  │  │
│  │    └─ cursor-tools                                   │  │
│  │                                                      │  │
│  │ 💡 Concepts (8)                                      │  │
│  │    ├─ prompt-evolution                               │  │
│  │    ├─ mind-blending                                  │  │
│  │    └─ ...                                            │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ RECENT EPISODES (5)                                  │  │
│  │                                                      │  │
│  │ • [2h ago] Task: Created landing page                │  │
│  │   Outcome: success | Confidence: 0.9                 │  │
│  │   Minds: architect (0.8), creator (0.5)              │  │
│  │                                                      │  │
│  │ • [5h ago] Query: Best AI agent tools                │  │
│  │   Outcome: success | Confidence: 0.85                │  │
│  │   Minds: oracle (0.9), architect (0.4)               │  │
│  │                                                      │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ INSIGHTS (3 pending)                                 │  │
│  │                                                      │  │
│  │ 💡 "User prefers concise responses"                  │  │
│  │    Confidence: 0.72 | Evidence: 8                    │  │
│  │    [Accept] [Dismiss]                                │  │
│  │                                                      │  │
│  │ 💡 "Oracle + Architect blend works best for coding"  │  │
│  │    Confidence: 0.68 | Evidence: 5                    │  │
│  │    [Accept] [Dismiss]                                │  │
│  │                                                      │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                            │
│  ─────────────────────────────────────────────────────────│
│  Prediction Accuracy: 73% (22/30)                         │
│  Memory Health: Good | Decay Rate: Normal                 │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

### 5. ⚡ QUICK ACTIONS (Always Visible)

```
┌────────────────────────────────────────────────────────────┐
│  ⚡ QUICK ACTIONS                                          │
│                                                            │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐             │
│  │ /think     │ │ /architect │ │ /oracle    │             │
│  │ Deep       │ │ Lock to    │ │ Lock to    │             │
│  │ reasoning  │ │ architect  │ │ oracle     │             │
│  └────────────┘ └────────────┘ └────────────┘             │
│                                                            │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐             │
│  │ /critic    │ │ /creator   │ │ /guardian  │             │
│  └────────────┘ └────────────┘ └────────────┘             │
│                                                            │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐             │
│  │ /self      │ │ /evolve    │ │ /sync      │             │
│  │ status     │ │ status     │ │ to Notion  │             │
│  └────────────┘ └────────────┘ └────────────┘             │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## Technical Implementation

### File Structure

```
landings/self-command-center/
├── index.html           # Main app shell
├── styles.css           # UI styling
├── app.js               # Main application logic
├── modules/
│   ├── ideation.js      # Ideation engine runner
│   ├── evolution.js     # Evolution cycle runner
│   ├── council.js       # Mind council summoner
│   ├── memory.js        # Memory explorer
│   └── cursor-api.js    # Cursor Background Agent API wrapper
└── components/
    ├── process-viewer.js  # Real-time process display
    ├── fitness-chart.js   # Evolution fitness visualization
    └── mind-cards.js      # Mind response cards
```

### Backend (Simple Node/Bun Server)

```
server/
├── index.js              # Express/Hono server
├── routes/
│   ├── api.js            # API endpoints
│   ├── cursor.js         # Cursor API proxy
│   └── files.js          # File system access
└── services/
    ├── evolution.js      # Evolution engine logic
    ├── blending.js       # Mind blending calculations
    └── memory.js         # Memory CRUD operations
```

### Cursor API Integration

```javascript
// cursor-api.js
class CursorAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.cursor.sh/v1"; // hypothetical
  }

  async createBackgroundTask(prompt, context = {}) {
    const response = await fetch(`${this.baseUrl}/background-agent`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        context,
        options: {
          maxTokens: 4000,
          model: "claude-sonnet",
        },
      }),
    });
    return response.json();
  }

  async waitForCompletion(taskId, pollInterval = 2000) {
    while (true) {
      const status = await this.getTaskStatus(taskId);
      if (status.completed) return status.result;
      await sleep(pollInterval);
    }
  }
}
```

### Evolution Loop Implementation

```javascript
// evolution.js
async function runEvolutionCycle(prompt, goal, cycles, callbacks) {
  let currentPrompt = prompt;
  const history = [];

  for (let i = 0; i < cycles; i++) {
    // 1. Build evaluation prompt
    const fullPrompt = buildEvaluationPrompt(currentPrompt, goal);

    // 2. Execute via Cursor API
    const result = await cursorAPI.execute(fullPrompt);

    // 3. Parse response
    const { score, improvement, output } = parseEvaluationResponse(result);

    // 4. Apply mutation
    const mutationType = selectMutation(score);
    const mutatedPrompt = applyMutation(
      currentPrompt,
      improvement,
      mutationType
    );

    // 5. Record
    history.push({
      cycle: i + 1,
      prompt: currentPrompt,
      score,
      improvement,
      mutationType,
      output,
    });

    // 6. Update fitness.json
    await updateFitnessFile(i + 1, score, mutationType);

    // 7. Callback for UI update
    callbacks.onCycleComplete({
      cycle: i + 1,
      score,
      improvement,
      fitnessHistory: history.map((h) => h.score),
    });

    // 8. Prepare for next cycle
    currentPrompt = mutatedPrompt;
  }

  // Save best variant
  const best = findBestByScore(history);
  await saveNewGeneration(best);

  return { history, best, finalPrompt: currentPrompt };
}
```

---

## Data Flow

### 1. App Startup

```
1. Load .cursor/self/ specification files as reference
2. Initialize memory.json, fitness.json (create if not exist)
3. Calculate initial mind blend weights
4. Display dashboard
5. Connect to Cursor API (verify credentials)
```

Note: The app **creates and manages** the JSON data files. The `.md` files in `.cursor/self/` are read as specifications that define the algorithms to implement.

### 2. Running a Process

```
User clicks "START EVOLUTION"
        │
        ▼
    Validate inputs
        │
        ▼
    Create process ID
        │
        ▼
    Start background loop
        │
        ├──► Update UI every cycle (WebSocket/SSE)
        ├──► Write to fitness.json every cycle
        └──► Log to mutations.log
        │
        ▼
    On completion:
        ├──► Save best prompt to prompts/
        ├──► Update memory.json with episode
        └──► Show final results
```

### 3. Memory Sync

```
Every significant event:
        │
        ▼
    Check sync thresholds (confidence, surprise)
        │
        ├──► Above threshold: Queue for Notion sync
        └──► Below threshold: Local only
        │
        ▼
    Background sync worker:
        ├──► Read sync-queue.json
        ├──► Send to Notion via MCP
        └──► Update mcp_integration.notion_synced_ids
```

---

## MVP Feature List

### Phase 1 (Weekend Build)

- [ ] Basic UI with 4 process buttons
- [ ] Evolution engine with 10-cycle support
- [ ] Simple fitness chart
- [ ] Read/display memory.json
- [ ] Mock Cursor API (use local LLM or simple echo)

### Phase 2 (Week 1)

- [ ] Real Cursor Background Agent API integration
- [ ] Full ideation pipeline runner
- [ ] Mind council with 5 parallel calls
- [ ] Memory editing UI
- [ ] Process history view

### Phase 3 (Week 2+)

- [ ] Notion MCP sync
- [ ] Advanced evolution settings
- [ ] Prompt library manager
- [ ] Analytics dashboard
- [ ] Export/import configurations

---

## Why This Is A Masterpiece

### 1. Brings Specifications to Life

You've designed the SELF framework in `.cursor/self/`. This app **implements those designs** as a working system.

### 2. Visual Evolution

Watching prompts evolve in real-time with fitness graphs is **mesmerizing** and **educational**.

### 3. Mind Council is Unique

No one else has a visual interface to summon 5 cognitive perspectives simultaneously.

### 4. Full Automation

Press a button, walk away, come back to evolved prompts. **Zero manual effort.**

### 5. Memory Persistence

Every interaction feeds back into the system. It **learns from itself**.

### 6. Simple but Deep

Four buttons on the surface, but each one triggers a sophisticated system underneath.

### 7. Reference Implementation

The `.cursor/self/` specs become reusable patterns — build once, document the implementation, use everywhere.

---

## The Tagline

> **"SELF Command Center — Your AI Framework, One Click Away"**

Or:

> **"Run the loop. Watch it evolve. See it think."**

Or:

> **"The control panel for your cognitive architecture."**

---

## Next Steps

1. **Confirm Cursor API access** — Do you have API credentials?
2. **Choose stack** — Pure HTML/JS? React? Svelte?
3. **Start with Evolution** — It's the most visually impressive
4. **Build minimal backend** — Node/Bun server for file access
5. **Iterate** — Use the app to evolve its own prompts (meta!)

---

_Document created: January 2026_
_Part of: SELF — Synthetic Emergent Learning Framework_
