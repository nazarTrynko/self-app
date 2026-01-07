# Genesis Prompts - Quick Reference

Creation from nothing. These prompts build entire systems, architectures, and solutions.

## Quick List

| #    | Name                         | Use When                                         |
| ---- | ---------------------------- | ------------------------------------------------ |
| 1.1  | The Master Builder           | Building complex systems with accumulated wisdom |
| 1.2  | The Blank Canvas Architect   | Starting projects from scratch                   |
| 1.3  | The API Designer             | Designing developer-friendly APIs                |
| 1.4  | The Database Architect       | Designing long-lived data models                 |
| 1.5  | The Component Factory        | Creating component libraries                     |
| 1.6  | The Migration Strategist     | Planning safe system migrations                  |
| 1.7  | The Greenfield Launcher      | Getting to production fast                       |
| 1.8  | The Test Foundation Builder  | Setting up testing infrastructure                |
| 1.9  | The Documentation Generator  | Creating docs devs will read                     |
| 1.10 | The Monorepo Architect       | Designing multi-package structures               |
| 1.11 | The Feature Flag System      | Building feature management                      |
| 1.12 | The Error Handling Framework | Designing error strategies                       |
| 1.13 | The State Machine Designer   | Modeling processes as state machines             |
| 1.14 | The Security Architecture    | Designing defense in depth                       |
| 1.15 | The Performance Blueprint    | Designing for performance from start             |

## Power Combination

```
/architect [Genesis Prompt] + then /board-code for implementation
```

## Most Used

**The Master Builder (1.1)** - When you need a complete system architecture
**The Blank Canvas Architect (1.2)** - When starting any new project
**The Greenfield Launcher (1.7)** - When speed to production matters most

---

# Featured Prompts (Full Specifications)

## 1.1 The Master Builder

**THE PROMPT:**

```
/architect Build [SYSTEM] as if you are the engineer who has built this
exact system 100 times across 100 companies. You've seen every mistake,
every elegant solution, every scaling challenge. Channel that accumulated
wisdom. Think in systems and flows, not files and functions.

What is the minimal, beautiful architecture that handles the 80% case
perfectly and gracefully degrades for the 20%?
```

**EXPECTED OUTPUT:**

- System architecture diagram (conceptual)
- Core data flows and state management approach
- 3-5 key abstractions that do 80% of the work
- Explicit tradeoffs made and why
- Implementation sequence with dependencies
- Known limitations stated upfront

**WHY IT WORKS:**
The "100 times" framing activates deep pattern matching. "Think in systems, not files" elevates from implementation details to architecture. The 80/20 frame prevents over-engineering. Asking for tradeoffs signals you want honest assessment, not sales pitch.

**VARIATIONS:**

- Add: `...optimizing for [speed-to-market | maintainability | performance | team onboarding]`
- Add: `Start with the data model. Everything flows from the shape of the data.`
- Chain: Follow with `/board-code` for multi-agent implementation review

**FITNESS SCORES:**
| Criterion | Score | Notes |
|-----------|-------|-------|
| Clarity | 9/10 | Clear structure and expectations |
| Power | 9/10 | Produces comprehensive architectures |
| Elegance | 8/10 | Minimal yet complete |
| Novelty | 7/10 | Well-established pattern |

---

## 1.2 The Blank Canvas Architect

**THE PROMPT:**

```
/architect /scaffold I'm building [PROJECT] from scratch.

Before writing any code, think through:
1. What are the 3-5 core concepts this system is really about?
2. What operations does each concept support?
3. How do concepts relate to each other?
4. What is the minimal directory structure that reflects this conceptual model?

Make the file structure a map of the mental model, not a dump of technologies.
```

**EXPECTED OUTPUT:**

- Domain concept identification
- Concept relationship diagram
- Directory structure with rationale for each top-level folder
- Naming convention recommendations
- Core interface definitions
- Suggested implementation order

**WHY IT WORKS:**
Forces domain-driven thinking before implementation. "Map of mental model" prevents generic structures. Numbered questions create structured thinking. The scaffold subcommand activates creation mode.

**VARIATIONS:**

- Add: `This project will be maintained by [junior devs | a distributed team | just me]`
- Add: `Optimize the structure for [easy testing | fast iteration | clear onboarding]`
- Prefix: `/think` for deeper domain analysis first

**FITNESS SCORES:**
| Criterion | Score | Notes |
|-----------|-------|-------|
| Clarity | 9/10 | Very structured output |
| Power | 8/10 | Strong domain-first approach |
| Elegance | 9/10 | Minimal, focused |
| Novelty | 8/10 | Mental model framing is distinctive |

---

## 1.7 The Greenfield Launcher

**THE PROMPT:**

```
/architect /scaffold I'm starting [PROJECT TYPE] from absolute zero.

Give me the minimal viable foundation:
1. Directory structure (explain each folder in one sentence)
2. Essential config files with inline comments
3. Core dependencies (only what's truly necessary, justify each)
4. Development workflow (how do I run, test, deploy)
5. First three files I should create and why

Optimize for: getting to "hello world" in production in under 1 hour.
```

**EXPECTED OUTPUT:**

- Minimal directory structure with rationale
- Package.json / requirements.txt / go.mod with only essentials
- Config files with explanatory comments
- Local development setup commands
- Deployment configuration
- First three implementation files with purpose
- Timeline to production

**WHY IT WORKS:**
"Absolute zero" prevents assumptions. "Minimal viable" prevents over-scaffolding. "1 hour to production" creates urgency that cuts scope. Numbered list ensures structured output.

**VARIATIONS:**

- Add: `Using [specific tech stack]`
- Add: `Deploying to [platform]`
- Add: `This will eventually scale to [scope], but start minimal`

**FITNESS SCORES:**
| Criterion | Score | Notes |
|-----------|-------|-------|
| Clarity | 10/10 | Crystal clear structure |
| Power | 8/10 | Gets you started fast |
| Elegance | 9/10 | Ruthlessly minimal |
| Novelty | 7/10 | Standard but effective |

---

# Evolution Tracking

## Current Generation: 1

**Last Evolved:** 2026-01-05 (Initial)
**Total Uses:** N/A
**Success Rate:** N/A

## Evolution Candidates

| Prompt | Suggested Evolution                    | Priority |
| ------ | -------------------------------------- | -------- |
| 1.1    | Add cloud-native architecture patterns | Medium   |
| 1.4    | Include NoSQL/hybrid patterns          | Low      |
| 1.14   | Update for zero-trust architecture     | High     |

## Evolution History

| Date       | Prompt | Change           | Result               |
| ---------- | ------ | ---------------- | -------------------- |
| 2026-01-05 | All    | Initial creation | Baseline established |

---

# Usage Patterns

## Best For

- Starting new projects
- Designing system architecture
- Creating technical foundations
- Setting up infrastructure

## Combine With

- **Oracle prompts** for deeper analysis before creation
- **Orchestration prompts** for multi-agent implementation
- **Metamorphosis prompts** for improving created systems

## Anti-Patterns

- Don't use for small changes to existing systems
- Don't use when you need analysis, not creation
- Don't use for non-technical problems
