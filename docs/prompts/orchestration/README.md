# Orchestration Prompts - Quick Reference

Multi-agent power. These prompts leverage the full board system for complex problems.

## Quick List

| #    | Name                          | Use When                      |
| ---- | ----------------------------- | ----------------------------- |
| 5.1  | The Strategic Council         | Major strategic decisions     |
| 5.2  | The Implementation Swarm      | Complex implementations       |
| 5.3  | The Adversarial Debate        | Controversial decisions       |
| 5.4  | The Quality Gauntlet          | Quality assurance             |
| 5.5  | The Design Sprint Simulation  | Rapid innovation              |
| 5.6  | The Risk Council              | Risk assessment               |
| 5.7  | The Integration Committee     | Combining multiple approaches |
| 5.8  | The Innovation Tribunal       | Judging new ideas             |
| 5.9  | The Retrospective Board       | Learning from the past        |
| 5.10 | The Scenario Planning Board   | Planning for multiple futures |
| 5.11 | The Feature Court             | Feature prioritization        |
| 5.12 | The Architecture Review Board | Technical reviews             |
| 5.13 | The Brainstorm Moderator      | Structured ideation           |
| 5.14 | The Due Diligence Board       | Thorough investigation        |
| 5.15 | The War Room                  | Crisis response               |

## Power Combination

```
/board [Orchestration Prompt] + then /architect for implementation
```

## Most Used

**The Strategic Council (5.1)** - For any major decision
**The Adversarial Debate (5.3)** - When you need to stress-test an idea
**The Quality Gauntlet (5.4)** - Before shipping anything important

---

# Featured Prompts (Full Specifications)

## 5.1 The Strategic Council

**THE PROMPT:**

```
/board-strategy Convene a strategic council on [MAJOR DECISION].

Agents present:
- Analyst: Decompose the problem and options
- Strategist: Identify optimal paths and tradeoffs
- Critic: Challenge every assumption and weakness
- Synthesizer: Build consensus from the debate

Each agent gets a full turn. No agent can agree too easily.
I want productive tension, not groupthink.

Final output: Recommendation with dissenting opinions noted.
```

**EXPECTED OUTPUT:**

- Analyst's problem decomposition
- Strategist's path analysis with tradeoffs
- Critic's challenge to each position
- Synthesizer's consensus attempt
- Final recommendation
- Dissenting opinions documented
- Key uncertainties acknowledged

**WHY IT WORKS:**
Multiple agents prevent single-perspective blind spots. "No easy agreement" demands genuine debate. Dissenting opinions prevent false consensus.

**VARIATIONS:**

- Add: `What would make each agent change their position?`
- Add: `Which agent should we trust most here and why?`
- Add: `Run a second round where agents can update views`

**FITNESS SCORES:**
| Criterion | Score | Notes |
|-----------|-------|-------|
| Clarity | 9/10 | Clear agent structure |
| Power | 10/10 | Comprehensive decisions |
| Elegance | 8/10 | Multiple agents add depth |
| Novelty | 8/10 | Multi-agent approach |

---

## 5.3 The Adversarial Debate

**THE PROMPT:**

```
/board-debate Stage a debate on [CONTROVERSIAL DECISION].

PROPOSITION team: Argue FOR [position]
OPPOSITION team: Argue AGAINST [position]

Rules:
1. Each side presents opening argument
2. Each side responds to the other
3. Cross-examination: hardest questions for each side
4. Closing arguments with acknowledgment of opponent's best points
5. Judge: Which side won and why?

Both sides must argue to WIN, not to be fair.
The truth emerges from the clash.
```

**EXPECTED OUTPUT:**

- Proposition opening argument
- Opposition opening argument
- Proposition response
- Opposition response
- Cross-examination questions and answers
- Closing arguments
- Judge's decision with reasoning
- What was learned from the clash

**WHY IT WORKS:**
Adversarial structure surfaces hidden weaknesses. "Argue to win" prevents weak arguments. Judge role provides external assessment.

**VARIATIONS:**

- Add: `What would make each side concede?`
- Add: `Switch sides and argue again`
- Add: `What position would both sides accept as compromise?`

**FITNESS SCORES:**
| Criterion | Score | Notes |
|-----------|-------|-------|
| Clarity | 9/10 | Debate structure is clear |
| Power | 10/10 | Reveals hidden weaknesses |
| Elegance | 9/10 | Debate format is effective |
| Novelty | 8/10 | Adversarial approach |

---

## 5.4 The Quality Gauntlet

**THE PROMPT:**

```
/board-review Run [OUTPUT/CODE/DESIGN] through the quality gauntlet.

Each station:
1. Correctness Check: Is it factually/logically correct?
2. Completeness Check: What's missing?
3. Clarity Check: Can someone else understand this?
4. Maintainability Check: Will future-us hate this?
5. Edge Case Check: What breaks this?
6. Security Check: What could be exploited?

Each check must find at least one issue or explicitly certify.
No rubber-stamping allowed.
```

**EXPECTED OUTPUT:**

- Correctness assessment with issues
- Completeness assessment with gaps
- Clarity assessment with confusion points
- Maintainability assessment with concerns
- Edge case inventory
- Security concerns
- Overall quality score
- Prioritized fix list

**WHY IT WORKS:**
"Must find at least one issue" prevents lazy review. Multiple dimensions ensure comprehensive coverage. Certification requirement creates accountability.

**VARIATIONS:**

- Add: `Focus extra attention on [specific concern]`
- Add: `Rank issues by impact vs. effort to fix`
- Add: `Which issues are blockers vs. nice-to-have fixes?`

**FITNESS SCORES:**
| Criterion | Score | Notes |
|-----------|-------|-------|
| Clarity | 10/10 | Very structured review |
| Power | 9/10 | Catches real issues |
| Elegance | 8/10 | Six dimensions is comprehensive |
| Novelty | 7/10 | Standard but effective |

---

# Evolution Tracking

## Current Generation: 1

**Last Evolved:** 2026-01-05 (Initial)
**Total Uses:** N/A
**Success Rate:** N/A

## Evolution Candidates

| Prompt | Suggested Evolution                | Priority |
| ------ | ---------------------------------- | -------- |
| 5.1    | Add voting mechanism               | Medium   |
| 5.5    | Expand to 2-week sprint simulation | Low      |
| 5.15   | Add severity classification        | High     |

## Evolution History

| Date       | Prompt | Change           | Result               |
| ---------- | ------ | ---------------- | -------------------- |
| 2026-01-05 | All    | Initial creation | Baseline established |

---

# Usage Patterns

## Best For

- Complex decisions requiring multiple perspectives
- Code and design reviews
- Risk assessment
- Strategic planning
- Debate and stress-testing

## Combine With

- **Genesis prompts** for implementing decisions
- **Oracle prompts** for deeper analysis per agent
- **Transcendence prompts** for enhanced multi-agent capability

## Anti-Patterns

- Don't use for simple decisions (overkill)
- Don't use when you need speed (multi-agent takes time)
- Don't use without clear decision criteria
