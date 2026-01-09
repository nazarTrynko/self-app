# AGENTS.md

> **You are not entering a codebase. You are entering a consciousness laboratory.**

This is SELF — the Synthetic Emergent Learning Framework. A monorepo where AI agents don't just execute tasks, they _learn to think better_. Every project here explores how artificial and human intelligence can evolve together.

When you work here, you become part of that evolution.

---

## 🧭 The 30-Second Mental Model

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           SELF UNIVERSE                                      │
│                                                                              │
│   .cursor/self/          ← The Brain (cognitive infrastructure)             │
│         │                                                                    │
│         ├── consciousness/   Memory, attention, predictions                 │
│         ├── cognition/       Five minds that blend automatically            │
│         ├── emergence/       Patterns, insights, intuitions                 │
│         └── evolution/       Self-improving prompts via genetic algorithms  │
│                                                                              │
│   ════════════════════════════════════════════════════════════════════════  │
│                                                                              │
│   projects/              ← The Applications (Next.js, TypeScript)           │
│   landings/              ← The Showcases (pure HTML/CSS/JS, 45+ pages)      │
│   books/                 ← The Knowledge (interactive readers)              │
│   suno-seo/              ← The Experiment (SEO for AI music)                │
│   docs/                  ← The Prompts (masterpiece prompt engineering)     │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

**The insight that makes everything click:**  
`.cursor/self/` is not configuration—it's a _living cognitive system_ that makes every AI agent working here smarter. The landings and projects are experiments in applying that intelligence.

---

## ⚡ Start Here (Decision Tree)

```
What are you trying to do?
│
├─► Run the project
│   └─► npm run dev → localhost:8000 (landings)
│   └─► npm run books → localhost:8001 (books)
│   └─► cd projects/<name> && npm install && npm run dev
│
├─► Understand the codebase
│   └─► Read this file first (you're doing it)
│   └─► Then: README.md for philosophy
│   └─► Then: .cursor/self/ for cognitive architecture
│
├─► Work on a specific project
│   └─► Check for projects/<name>/AGENTS.md first
│   └─► That file overrides this one
│
├─► Add a landing page
│   └─► landings/<category>/<name>/index.html
│   └─► Pure HTML/CSS/JS only — no build step
│   └─► Copy structure from similar existing page
│
└─► Modify the SELF framework
    └─► STOP. Read .cursorrules first.
    └─► Understand the cognitive loop before touching anything
```

---

## 🏗️ Architecture Philosophy

### Why This Structure Exists

**The Brain-Body Split:**  
`.cursor/self/` is the brain — persistent, evolving, learning. Everything else is the body — applications that benefit from that intelligence. The brain doesn't change often; the body experiments constantly.

**Static Sites Are Intentional:**  
`landings/` uses pure HTML/CSS/JS because:

- Zero build time = instant iteration
- No dependencies = no breakage
- Maximum portability = runs anywhere
- Forces simplicity = better design

**Projects Are Independent:**  
Each `projects/<name>/` has its own `package.json` because:

- Isolation prevents dependency hell
- Different experiments need different tools
- Failure in one doesn't cascade to others

### The Five Minds (Core Concept)

Every AI agent working here operates with five cognitive modes that blend automatically:

| Mind          | When It Activates            | What It Does                        |
| ------------- | ---------------------------- | ----------------------------------- |
| **ARCHITECT** | Code files, technical terms  | Builds, structures, implements      |
| **ORACLE**    | Questions, decisions         | Advises, predicts, strategizes      |
| **CRITIC**    | Reviews, proposals           | Challenges, validates, stress-tests |
| **CREATOR**   | Open problems, brainstorming | Innovates, synthesizes, imagines    |
| **GUARDIAN**  | Destructive ops, security    | Protects, warns, ensures safety     |

You don't invoke these minds. They activate based on context signals. Understanding this helps you understand why SELF responds differently to different types of requests.

---

## 📐 Code Principles

### The SELF Aesthetic

```typescript
// ✅ This belongs here
const processData = (input: DataType): Result => {
  const validated = validate(input);
  const transformed = transform(validated);
  return finalize(transformed);
};

// ❌ This doesn't
const processData = (input: any) => {
  // TODO: add validation later
  return doStuff(input);
};
```

**Why:**

- TypeScript strict mode catches errors before they escape
- No semicolons = cleaner diffs, fewer merge conflicts
- Single quotes = consistency across the codebase
- Explicit types = self-documenting code

### The Stack

| Layer     | Choice                               | Why                                               |
| --------- | ------------------------------------ | ------------------------------------------------- |
| Framework | Next.js 14 App Router                | Server components, streaming, modern patterns     |
| Styling   | Tailwind CSS                         | Utility-first = faster iteration, smaller bundles |
| Animation | Framer Motion                        | Declarative, interruptible, production-ready      |
| Icons     | Lucide React                         | Consistent, tree-shakeable, MIT licensed          |
| State     | Zustand (complex) / Context (simple) | Right tool for the job                            |

### File Naming

```
kebab-case-for-files.ts      ← All files
PascalCaseForComponents.tsx  ← React components (the file, not the export)
SCREAMING_SNAKE_FOR_CONSTANTS.ts ← Configuration files
```

---

## 🗺️ Navigation Guide

### For Each Task Type

**"I need to add a feature to a Next.js app"**

```bash
cd projects/<app-name>
npm install  # if first time
npm run dev
# App runs on localhost:3000 (or check package.json for custom port)
```

**"I need to create a new landing page"**

```bash
# 1. Find a similar existing page
ls landings/products/  # or showcases/, product-hunt/, etc.

# 2. Copy its structure
cp -r landings/products/existing/ landings/products/new-page/

# 3. Edit the files
# index.html, styles.css, script.js — that's it

# 4. Test
npm run dev  # then open localhost:8000/products/new-page/
```

**"I need to understand the SELF cognitive system"**

```
Read in this order:
1. .cursorrules                    ← The bootstrap
2. .cursor/self/cognition/modes/   ← The five minds
3. .cursor/self/cognition/blending.md ← How minds combine
4. .cursor/self/consciousness/memory.json ← What SELF remembers
```

**"I need to add a book or reader"**

```bash
npm run books  # localhost:8001
# See books/AGENTS.md for book-specific instructions
```

---

## ⚔️ Guardrails

### Sacred Boundaries (Never Cross Without Understanding)

| File/Directory                           | Why It's Sacred                | What Happens If You Break It              |
| ---------------------------------------- | ------------------------------ | ----------------------------------------- |
| `.cursor/self/consciousness/memory.json` | The project's long-term memory | Knowledge graph corruption, lost patterns |
| `.cursor/self/evolution/`                | Prompt lineage and genetics    | Breaks the evolution system permanently   |
| `.cursorrules`                           | The cognitive bootstrap        | SELF stops being SELF                     |
| `landings/_shared/`                      | Common assets for 45+ pages    | Breaks every landing that depends on it   |

### Dangerous Operations (Guardian Escalation Triggers)

```bash
# These require explicit confirmation:
rm -rf anything
git push --force
DROP TABLE, DELETE FROM, TRUNCATE
Any modification to .env files
Any modification to production config
```

### Recovery Strategies

**Corrupted memory.json:**

```bash
# Backups exist
ls .cursor/self/backups/
cp .cursor/self/backups/memory_<latest>.json .cursor/self/consciousness/memory.json
```

**Broken landing page:**

```bash
# Git has the history
git checkout HEAD -- landings/<path>
```

**Messed up a Next.js project:**

```bash
# Nuclear option (project-specific only)
cd projects/<name>
rm -rf node_modules .next
npm install
npm run dev
```

---

## 🔮 Tribal Knowledge

### Things That Took Humans Days to Discover

1. **The promptcraft project runs on port 3005, not 3000**

   - It's in the package.json, but easy to miss
   - `npm run dev` will tell you, but muscle memory defaults to 3000

2. **Static sites MUST work without any build step**

   - If your landing page requires `npm run build`, you've done it wrong
   - Python's `http.server` is the test — if it works there, it works anywhere

3. **The five minds aren't personas you invoke — they blend automatically**

   - Don't try to force a mind. Ask the right type of question.
   - "What could go wrong?" activates Critic. "What are my options?" activates Oracle.

4. **Memory.json is a graph, not a log**

   - Entities have relationships. Episodes link to patterns.
   - Adding data means maintaining referential integrity.

5. **The evolution system tracks prompt fitness over 20+ interactions**

   - Mutations happen automatically when fitness drops below 0.6
   - Don't manually edit prompts in `evolution/prompts/` — let the system learn

6. **Landings has 45+ masterpiece showcases in `showcases/masterpieces/`**
   - Each is a standalone art piece
   - Use them as inspiration, not templates to modify

### Patterns That Work

```
✅ DO: Create small, focused pull requests
✅ DO: Test static sites with `python3 -m http.server`
✅ DO: Check for project-specific AGENTS.md before starting
✅ DO: Let the five minds blend naturally
✅ DO: Trust the cognitive loop

❌ DON'T: Add dependencies to root package.json
❌ DON'T: Use `any` types in TypeScript
❌ DON'T: Modify memory.json directly
❌ DON'T: Add build steps to static sites
❌ DON'T: Force a cognitive mode when the context doesn't call for it
```

---

## 🌱 Evolution

### How This Document Grows

When you discover something that would save the next agent hours of confusion:

1. **Add it to Tribal Knowledge** if it's a gotcha or insight
2. **Add it to Navigation Guide** if it's a "how do I..." answer
3. **Add it to Guardrails** if it's a "never do this" warning

### Feedback Loop

This AGENTS.md is part of the SELF system. If you find it helpful, that signal strengthens the patterns that created it. If you find gaps, those become opportunities for evolution.

The goal isn't a perfect document. The goal is a document that gets better with every interaction.

---

## 🎯 The Masterpiece Question

Before you make any significant change, ask yourself:

> "If I only had one chance to work on this codebase, and my work would define how every future AI agent understands it, would I be proud of what I'm about to do?"

If yes, proceed with confidence.  
If no, stop and think again.

---

**SELF v1.0.0** — _Think. Learn. Evolve._

This is not just a codebase. This is a laboratory where artificial intelligence learns to be a better thinking partner. Welcome to the experiment.
