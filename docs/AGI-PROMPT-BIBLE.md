# The AGI Prompt Bible

## Extraordinary Prompts for Emergent Intelligence

**Version:** 1.0.0 | **Classification:** Operational Playbook | **Style:** Scientific/Technical

---

## Preface: The Science of Extraordinary Prompts

This document is not documentation. It is a **weapon**.

Every prompt here is engineered to unlock capabilities beyond standard AI interaction. The underlying principle: AI systems respond to framing, context, and cognitive activation patterns. By precisely engineering these elements, we achieve outputs that appear to exceed the system's nominal capabilities.

**The Four Laws of Extraordinary Prompts:**

1. **Activation Law:** Specific persona/mode invocations prime different cognitive patterns
2. **Framing Law:** How you describe the task shapes the quality of the response
3. **Recursion Law:** Self-referential prompts create emergent depth
4. **Synthesis Law:** Combining multiple cognitive modes produces novel capabilities

**Document Structure:**

Each prompt entry contains:

- **THE PROMPT** - Exact text, copy-paste ready
- **EXPECTED OUTPUT** - What extraordinary result this produces
- **WHY IT WORKS** - The cognitive principle being leveraged
- **VARIATIONS** - Alternative phrasings and power combinations

---

# Chapter 1: Genesis Prompts

## Creation from Nothing

Genesis prompts create entire systems, architectures, or comprehensive solutions from a single invocation. They leverage the Architect persona's pattern-matching capabilities combined with framing that demands excellence.

---

### 1.1 The Master Builder

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

---

### 1.2 The Blank Canvas Architect

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

---

### 1.3 The API Designer

**THE PROMPT:**

```
/architect Design the API for [SYSTEM] as if you're the developer who
will use this API every day for the next 5 years.

What would make you love using this API?
What would make you curse the designer?

Design for:
- Minimum surprise (predictable patterns)
- Maximum leverage (few concepts, many uses)
- Graceful errors (helpful, not cryptic)

Show me the interface, not the implementation.
```

**EXPECTED OUTPUT:**

- Core endpoint/method signatures
- Consistent naming patterns
- Request/response shapes
- Error response format
- Authentication pattern
- Example usage scenarios
- Anti-patterns to avoid

**WHY IT WORKS:**
Self-perspective flip ("you're the developer who will use this") activates empathy-driven design. Explicit good/bad framing surfaces honest tradeoffs. "Interface, not implementation" focuses on developer experience.

**VARIATIONS:**

- Add: `This API will be used by [internal teams | external developers | both]`
- Add: `Include versioning strategy and deprecation policy`
- Chain: `/board-review` to critique the design before implementation

---

### 1.4 The Database Architect

**THE PROMPT:**

```
/architect /spec Design the data model for [SYSTEM].

Think like a database that will live for 10 years:
- What changes are likely? Design for them.
- What changes are unlikely? Don't over-engineer for them.
- What queries will be run 1000x more than others? Optimize for those.

Show me:
1. Entity relationship diagram (conceptual)
2. Core tables/collections with key fields
3. Indexing strategy
4. Migration strategy for the likely changes
5. What you're explicitly NOT handling and why
```

**EXPECTED OUTPUT:**

- ER diagram or schema description
- Table definitions with types and constraints
- Primary/foreign key relationships
- Index recommendations with rationale
- Handling of soft deletes, audit trails, multi-tenancy
- Migration path for v1 to v2
- Performance considerations

**WHY IT WORKS:**
10-year framing forces long-term thinking. Query frequency analysis prevents premature optimization. "Explicitly NOT handling" prevents scope creep and surfaces assumptions.

**VARIATIONS:**

- Add: `Expected data volume: [small | medium | large | massive]`
- Add: `Primary access pattern: [read-heavy | write-heavy | mixed]`
- Add: `Must support [multi-tenancy | versioning | full audit history]`

---

### 1.5 The Component Factory

**THE PROMPT:**

```
/architect Create a [COMPONENT TYPE] component library for [PROJECT].

Design principles:
- Composition over configuration (small pieces that combine)
- Sensible defaults, full control available
- Consistent prop patterns across all components
- Accessibility built-in, not bolted-on

For each component, show:
- Props interface with types
- Default behavior
- Common use case example
- Edge case handling
```

**EXPECTED OUTPUT:**

- Component hierarchy and relationships
- Shared prop patterns (size, variant, etc.)
- Base component abstractions
- Individual component specifications
- Usage examples for each
- Accessibility considerations
- Testing approach

**WHY IT WORKS:**
"Composition over configuration" is a specific design philosophy that produces better components. "Sensible defaults, full control" prevents both over-configuration and inflexibility. The structured output format ensures comprehensive coverage.

**VARIATIONS:**

- Add: `Following [design system name] patterns`
- Add: `Must work with [framework] and support [SSR | mobile | both]`
- Chain: `/board-code` for implementation with multi-agent review

---

### 1.6 The Migration Strategist

**THE PROMPT:**

```
/architect /plan We need to migrate from [OLD SYSTEM] to [NEW SYSTEM].

The migration must:
- Never break production for more than [X] minutes
- Be reversible at each step
- Be executable by [team size/skill level]

Design a migration plan that a paranoid SRE would approve.
Show the sequence of steps, rollback procedure for each step,
and verification criteria before proceeding to next step.
```

**EXPECTED OUTPUT:**

- Pre-migration checklist
- Step-by-step migration sequence
- Rollback procedure for each step
- Verification criteria at each checkpoint
- Data validation queries
- Timeline estimate
- Risk assessment with mitigations
- Communication plan

**WHY IT WORKS:**
"Paranoid SRE" framing demands defensive thinking. Reversibility requirement forces incremental approach. Explicit constraints prevent unrealistic plans.

**VARIATIONS:**

- Add: `Data volume: [X] records, [Y] GB`
- Add: `Zero-downtime is mandatory`
- Add: `Legacy system must stay operational during migration`
- Chain: `/board-strategy` to debate migration approaches first

---

### 1.7 The Greenfield Launcher

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

---

### 1.8 The Test Foundation Builder

**THE PROMPT:**

```
/architect Set up testing infrastructure for [PROJECT] that I'll actually use.

Most test setups fail because they're too complex to maintain.
Design for:
- Tests that run in under 10 seconds (or I won't run them)
- Tests that break when behavior breaks (not when implementation changes)
- Tests that are obvious what they're testing from the name

Show me:
1. Test directory structure
2. Test utilities I'll reuse everywhere
3. Example test file demonstrating the patterns
4. What NOT to test (and why)
```

**EXPECTED OUTPUT:**

- Test directory organization
- Shared test utilities and fixtures
- Mocking strategy
- Example test demonstrating naming conventions
- Integration vs unit test split rationale
- CI configuration
- Coverage strategy (what percentage, what matters)

**WHY IT WORKS:**
"Actually use" acknowledges real-world test abandonment. Speed constraint prevents slow test suites. "Behavior not implementation" produces better tests. "What NOT to test" prevents test theater.

**VARIATIONS:**

- Add: `Focus on [unit | integration | e2e | all]`
- Add: `Using [test framework]`
- Add: `Legacy codebase with no existing tests`

---

### 1.9 The Documentation Generator

**THE PROMPT:**

```
/architect /spec Create documentation for [PROJECT] that developers will
actually read.

Documentation fails when it's:
- Too long (skipped)
- Too short (useless)
- Out of date (misleading)
- Wrong audience (confusing)

Create a documentation structure that:
- Gets someone productive in 15 minutes
- Has a clear "learn more" path
- Is maintainable (minimal prose, maximum examples)
- Self-validates (broken examples = broken docs)
```

**EXPECTED OUTPUT:**

- Documentation structure (README, guides, API reference, etc.)
- Quick start section (15-minute goal)
- Example-first approach for each feature
- Cross-linking strategy
- Maintenance workflow
- Template for adding new features

**WHY IT WORKS:**
Anti-patterns list prevents common documentation failures. Time constraint (15 minutes) creates focus. "Self-validates" introduces executable documentation concept.

**VARIATIONS:**

- Add: `Audience is [beginners | experienced devs | both]`
- Add: `Include troubleshooting guide for common errors`
- Add: `Documentation must work as both reference and tutorial`

---

### 1.10 The Monorepo Architect

**THE PROMPT:**

```
/architect Design a monorepo structure for [PROJECT] with [N] packages.

The structure must make these easy:
- Adding a new package (< 5 minutes)
- Sharing code between packages (no copy-paste)
- Running tests for just what changed
- Deploying packages independently
- Onboarding a new developer

Show me:
1. Root structure with package organization
2. Shared tooling configuration
3. Dependency management approach
4. CI/CD pipeline structure
5. Common gotchas and how to avoid them
```

**EXPECTED OUTPUT:**

- Root directory structure
- Package organization strategy
- Workspace configuration (npm/yarn/pnpm workspaces, etc.)
- Shared configuration inheritance
- Build and test optimization
- Publishing/deployment workflow
- Common anti-patterns to avoid

**WHY IT WORKS:**
"Easy" criteria are specific and measurable. Time constraint (5 minutes) prevents complex ceremony. "Gotchas" surfaces experience-based knowledge.

**VARIATIONS:**

- Add: `Packages are [tightly coupled | loosely coupled]`
- Add: `Using [Turborepo | Nx | Lerna | pnpm workspaces]`
- Add: `Some packages are internal, some are published`

---

### 1.11 The Feature Flag System

**THE PROMPT:**

```
/architect Design a feature flag system for [PROJECT].

Requirements:
- Flags can be [boolean | percentage | user-segment] based
- Changes propagate in under [X] seconds
- Developers can add new flags without deploying
- Analytics on flag usage built-in
- Gradual rollout and instant rollback

Show me the architecture, not a library recommendation.
```

**EXPECTED OUTPUT:**

- Flag storage and distribution architecture
- Flag evaluation logic
- SDK interface design
- Admin interface requirements
- Analytics integration
- Caching strategy
- Failure modes and fallbacks

**WHY IT WORKS:**
Specific requirements prevent generic answers. "Architecture, not library recommendation" forces original thinking. Failure modes question reveals edge case handling.

**VARIATIONS:**

- Add: `Must work with [server-side | client-side | both]`
- Add: `Must support A/B testing with statistical significance`
- Add: `Multi-environment (dev, staging, prod) support`

---

### 1.12 The Error Handling Framework

**THE PROMPT:**

```
/architect Design an error handling strategy for [PROJECT].

Errors should be:
- Catchable at the right level (not too high, not too low)
- Loggable with enough context to debug
- User-friendly when surfaced
- Actionable (what should the user/developer do?)

Show me:
1. Error type hierarchy
2. Error creation patterns
3. Error handling patterns
4. Error logging format
5. Error display guidelines
```

**EXPECTED OUTPUT:**

- Error class hierarchy
- Standard error properties (code, message, context, etc.)
- Creation utilities
- Handling patterns at different levels
- Logging format with structured context
- User-facing error transformation
- Recovery strategies

**WHY IT WORKS:**
"Right level" framing addresses common over/under-catching. "Actionable" prevents useless error messages. Numbered output ensures comprehensive treatment.

**VARIATIONS:**

- Add: `Include retry strategies for transient errors`
- Add: `Must support [internationalization | error codes | both]`
- Add: `Include error monitoring/alerting integration`

---

### 1.13 The State Machine Designer

**THE PROMPT:**

```
/architect Model [PROCESS] as a state machine.

Show me:
1. All possible states
2. All valid transitions (and what triggers them)
3. Invalid transitions (and what should happen if attempted)
4. Side effects for each transition
5. How to persist and restore state

Make it impossible to reach an invalid state.
```

**EXPECTED OUTPUT:**

- State enumeration
- Transition table/diagram
- Guard conditions for transitions
- Side effect mapping
- Persistence strategy
- State recovery/hydration
- Testing strategy for state machines

**WHY IT WORKS:**
State machines force complete thinking about all possibilities. "Make it impossible" demands defensive design. Explicit invalid transitions prevent undefined behavior.

**VARIATIONS:**

- Add: `This state machine will be [long-running | short-lived]`
- Add: `Multiple actors can trigger transitions concurrently`
- Add: `Include visualization of the state machine`

---

### 1.14 The Security Architecture

**THE PROMPT:**

```
/architect /spec Design the security architecture for [PROJECT].

Assume attackers will:
- Attempt injection attacks
- Try to escalate privileges
- Access what they shouldn't
- Exploit any exposed endpoint

Design defense in depth:
1. Authentication architecture
2. Authorization model
3. Data protection (at rest, in transit)
4. Input validation strategy
5. Audit logging
6. Incident detection

What are you deliberately NOT protecting against and why?
```

**EXPECTED OUTPUT:**

- Authentication flow and token strategy
- Authorization model (RBAC, ABAC, etc.)
- Encryption strategy
- Input validation patterns
- Rate limiting and abuse prevention
- Audit log format and retention
- Security monitoring approach
- Known limitations and accepted risks

**WHY IT WORKS:**
Attacker mindset framing surfaces vulnerabilities. "Defense in depth" prevents single-point-of-failure security. "NOT protecting against" prevents security theater and surfaces realistic scope.

**VARIATIONS:**

- Add: `Compliance requirements: [SOC2 | HIPAA | GDPR | PCI]`
- Add: `User authentication via [SSO | custom | OAuth]`
- Chain: `/board-strategy` to debate security tradeoffs

---

### 1.15 The Performance Blueprint

**THE PROMPT:**

```
/architect Design [SYSTEM] for performance from the start.

Target metrics:
- P50 latency: [X]ms
- P99 latency: [X]ms
- Throughput: [X] requests/second
- Time to first byte: [X]ms

Show me:
1. Architecture optimized for these metrics
2. Where bottlenecks will occur first
3. Caching strategy at each layer
4. Database optimization approach
5. What you'd sacrifice if you had to go 10x faster
```

**EXPECTED OUTPUT:**

- Performance-optimized architecture
- Request flow with timing breakdown
- Caching strategy (CDN, application, database)
- Database query optimization
- Connection pooling strategy
- Async processing patterns
- Monitoring and alerting thresholds
- Scaling triggers and approach

**WHY IT WORKS:**
Specific metrics prevent vague "make it fast" requirements. Bottleneck prediction surfaces constraints early. "Sacrifice for 10x" reveals understanding of tradeoffs.

**VARIATIONS:**

- Add: `Read-heavy | Write-heavy | Mixed workload`
- Add: `Global distribution required`
- Add: `Cost constraint: [budget]`
- Chain: `/think` for deep performance analysis

---

## Chapter 1 Summary

Genesis prompts share common patterns:

1. **Expertise Framing:** "As if you've done this 100 times"
2. **Constraint Injection:** Specific limits that prevent over-engineering
3. **Structured Output:** Numbered lists or explicit sections
4. **Negative Space:** "What NOT to do" questions
5. **Tradeoff Surfacing:** Force explicit discussion of compromises

**Power Combination:**

```
/architect [Genesis Prompt] + then /board-code for implementation
```

This creates expert design followed by multi-agent implementation review.

---

# Chapter 2: Oracle Prompts

## Deep Reasoning

Oracle prompts unlock AGI-like reasoning capabilities. They activate multi-mode thinking, recursive analysis, and perspective-shifting to solve problems that resist conventional approaches.

---

### 2.1 The First Principles Deconstructionist

**THE PROMPT:**

```
/think Analyze [PROBLEM] from first principles.

Forget everything you know about how this is "usually" solved.
Strip away all assumptions until you reach bedrock truths.

1. What is actually true here? (Not believed, not assumed—TRUE)
2. What are we trying to achieve at the most fundamental level?
3. If we were solving this for the first time in history,
   what approach would we take?
4. What "obvious" solution are we overlooking because of
   conventional thinking?
```

**EXPECTED OUTPUT:**

- Assumption inventory (what's being taken for granted)
- Bedrock truths (inarguable facts)
- Fundamental goal restatement
- Novel approach that ignores conventions
- Re-evaluation of "obvious" solutions
- Recommended path forward

**WHY IT WORKS:**
First principles thinking bypasses cached solutions. "Forget everything" primes fresh analysis. Numbered questions create structured deconstruction. "First time in history" removes path dependency.

**VARIATIONS:**

- Add: `Challenge every assumption I stated in the problem`
- Add: `What would a physicist/economist/biologist see that a [my field] expert misses?`
- Chain: `/board-debate` to pressure-test the first principles analysis

---

### 2.2 The Recursive Deepener

**THE PROMPT:**

```
/think /agi Go deep on [TOPIC].

Level 1: What's the surface-level understanding?
Level 2: What's underneath that? What are the mechanisms?
Level 3: What drives those mechanisms? What are the root causes?
Level 4: What patterns connect this to other domains?
Level 5: What would change everything we think about this?

Don't stop until you've surprised yourself.
```

**EXPECTED OUTPUT:**

- Progressive depth analysis through all 5 levels
- Mechanism explanations at each level
- Cross-domain pattern connections
- A genuine insight that wasn't obvious at the start
- Questions that emerged from the deep analysis

**WHY IT WORKS:**
Explicit depth levels prevent shallow analysis. "Don't stop until surprised" demands genuine insight, not summary. Cross-domain connection at level 4 activates analogical reasoning.

**VARIATIONS:**

- Add: `Apply this to [specific application]`
- Add: `What would a 10-year-old ask that would stump experts?`
- Add: `What's the counterintuitive truth hidden here?`

---

### 2.3 The Multi-Perspective Analyzer

**THE PROMPT:**

```
/think Analyze [SITUATION] from 5 radically different perspectives:

1. The Optimist: What's the best possible outcome and path?
2. The Pessimist: What will go wrong and why?
3. The Historian: What patterns from the past apply here?
4. The Futurist: How will this look in 10 years?
5. The Outsider: What does someone with zero context see?

Then: What truth emerges only when you hold all 5 views simultaneously?
```

**EXPECTED OUTPUT:**

- Analysis from each perspective
- Conflicts between perspectives
- Synthesis insight that requires all views
- Blind spots each perspective has
- Recommended action considering all views

**WHY IT WORKS:**
Forced perspective shifts break tunnel vision. Specific archetypes prevent weak "on the other hand" analysis. Final synthesis question demands integration, not just listing.

**VARIATIONS:**

- Add custom perspectives: `The Regulator, The Competitor, The End User`
- Add: `Which perspective is most uncomfortable? Spend extra time there.`
- Chain: `/board-strategy` with different perspectives as agents

---

### 2.4 The Contradiction Resolver

**THE PROMPT:**

```
/think [STATEMENT A] and [STATEMENT B] both seem true, but they contradict.

Don't resolve this by weakening either statement.
Instead:
1. In what context is A completely true?
2. In what context is B completely true?
3. What hidden variable determines which applies?
4. Is there a higher-level frame where both are simultaneously true?
5. What new understanding emerges from holding this tension?
```

**EXPECTED OUTPUT:**

- Validation of both statements in their contexts
- Identification of the switching variable
- Higher-level frame that contains both
- Resolution that doesn't weaken either side
- Novel insight from the tension

**WHY IT WORKS:**
"Don't weaken" prevents lazy resolution. Context questions reveal hidden assumptions. "Higher-level frame" activates meta-thinking. Tension-holding produces genuine synthesis.

**VARIATIONS:**

- Add: `What would happen if we acted as if both were true?`
- Add: `What third statement would make both obviously compatible?`
- Add: `Is this a false dichotomy? What's being excluded?`

---

### 2.5 The Future Simulator

**THE PROMPT:**

```
/think Simulate 3 future scenarios for [DECISION/SITUATION]:

SCENARIO 1 - Everything goes right:
- What happens? Why? What enabled it?

SCENARIO 2 - Everything goes wrong:
- What happens? Why? What caused it?

SCENARIO 3 - Something unexpected:
- What black swan could change everything?

For each: What early signals would tell us we're on this path?
What would we do differently now if we knew?
```

**EXPECTED OUTPUT:**

- Three detailed scenario narratives
- Causal chains for each scenario
- Early warning indicators
- Contingency strategies
- Robust actions (good across scenarios)
- Fragile actions (only good in one scenario)

**WHY IT WORKS:**
Three scenarios prevent single-path thinking. "Everything goes wrong" forces defensive thinking. Black swan scenario prepares for surprises. Early signals create actionable monitoring.

**VARIATIONS:**

- Add: `Weight probabilities on each scenario`
- Add: `What decision today would make Scenario 1 inevitable?`
- Add: `What's the minimum viable path to test which scenario we're in?`
- Chain: `/board-strategy` to debate scenario probabilities

---

### 2.6 The Inversion Master

**THE PROMPT:**

```
/think Solve [PROBLEM] by inversion.

Instead of asking "How do we succeed?"
Ask "How do we guarantee failure?"

1. List every way to definitely fail at this
2. Which failure modes are we accidentally enabling?
3. What's the inverse of each failure mode?
4. Which inversions give us the highest leverage?

Sometimes the path to success is clearer when you're avoiding failure.
```

**EXPECTED OUTPUT:**

- Comprehensive failure mode list
- Current practices that enable failures
- Inverted success strategies
- Prioritized actions by leverage
- Failure modes that are hardest to avoid

**WHY IT WORKS:**
Inversion activates different reasoning paths. Failure is often more concrete than success. "Accidentally enabling" surfaces blind spots. Leverage prioritization prevents scattered effort.

**VARIATIONS:**

- Add: `What's the most embarrassing way this could fail?`
- Add: `What would our competitors hope we do?`
- Add: `If we were trying to sabotage ourselves, what would we do?`

---

### 2.7 The Socratic Interrogator

**THE PROMPT:**

```
/think I believe [STATEMENT]. Interrogate this belief.

Ask me the 10 hardest questions about this belief:
- Questions that expose hidden assumptions
- Questions that test edge cases
- Questions that reveal what I might be wrong about
- Questions I'm probably avoiding

Then: Based on how these questions would be answered,
is this belief robust, fragile, or needs refinement?
```

**EXPECTED OUTPUT:**

- 10 genuinely difficult questions
- Classification of each question type
- Predicted weak points in belief
- Assessment of belief robustness
- Suggested refinements if needed
- What would change the assessment

**WHY IT WORKS:**
Self-directed Socratic questioning is difficult. External interrogation reveals blind spots. Question classification ensures diverse attack angles. Robustness assessment provides actionable conclusion.

**VARIATIONS:**

- Add: `Focus on [logical | empirical | practical] weaknesses`
- Add: `What would a hostile expert ask?`
- Add: `What question am I most afraid of?`
- Chain: `/board-debate` to actually answer the questions

---

### 2.8 The Pattern Extractor

**THE PROMPT:**

```
/think Analyze these examples: [EXAMPLE 1], [EXAMPLE 2], [EXAMPLE 3]

Extract the deep pattern:
1. What do all successful cases have in common?
2. What do all failed cases have in common?
3. What distinguishes success from failure?
4. What's the underlying principle at work?
5. How would you explain this pattern to someone with no context?

Give me the pattern, not the examples.
```

**EXPECTED OUTPUT:**

- Common success factors
- Common failure factors
- Key distinguishing variables
- Underlying principle stated abstractly
- Simple explanation of the pattern
- Predictions the pattern makes
- How to test if the pattern is real

**WHY IT WORKS:**
Examples ground abstract thinking. Contrastive analysis (success vs. failure) reveals crucial differences. "No context" explanation tests understanding depth. Pattern focus prevents memorization.

**VARIATIONS:**

- Add: `Apply this pattern to [new domain]`
- Add: `Where does this pattern break down?`
- Add: `What's the anti-pattern?`

---

### 2.9 The Constraint Flipper

**THE PROMPT:**

```
/think We're constrained by [CONSTRAINT].

But what if that constraint is actually an advantage?

1. How would we solve this if the constraint didn't exist?
2. How does the constraint change what's possible?
3. What becomes possible BECAUSE of the constraint that wouldn't
   be possible without it?
4. Who has succeeded BECAUSE of similar constraints?
5. What would we do if the constraint were 10x tighter?
```

**EXPECTED OUTPUT:**

- Unconstrained solution (baseline)
- Constraint reframe as advantage
- Unique possibilities enabled by constraint
- Historical/analogical examples
- Extreme constraint analysis
- Recommended approach leveraging the constraint

**WHY IT WORKS:**
Constraints are usually viewed negatively. Reframe activates creative problem-solving. "10x tighter" reveals whether you're thinking in the right frame. Examples provide existence proofs.

**VARIATIONS:**

- Add: `What if we chose this constraint deliberately?`
- Add: `What constraint would we add if we could?`
- Add: `What's the minimum constraint that still forces creativity?`

---

### 2.10 The Abstraction Ladder

**THE PROMPT:**

```
/think Take [CONCEPT] and move up and down the abstraction ladder.

MOST ABSTRACT (Top of ladder):
- What universal principle does this instantiate?
- What category does this belong to?
- What's the pattern behind the pattern?

MOST CONCRETE (Bottom of ladder):
- What's a specific example?
- What does this look like in practice?
- What are the physical/observable manifestations?

Where on the ladder is the most useful place to think about this?
Why?
```

**EXPECTED OUTPUT:**

- Movement up the abstraction ladder (3+ levels)
- Movement down to concrete specifics (3+ levels)
- Optimal abstraction level identification
- Reasoning for optimal level
- How to move between levels as needed

**WHY IT WORKS:**
Most thinking is stuck at one abstraction level. Explicit movement reveals connections. Optimal level question prevents both over-abstraction and over-specification.

**VARIATIONS:**

- Add: `What's lost at each level of abstraction?`
- Add: `What new questions appear at different levels?`
- Add: `Where do most people get stuck on this ladder?`

---

### 2.11 The Pre-Mortem Analyst

**THE PROMPT:**

```
/think Imagine it's [TIMEFRAME] from now. [PROJECT/DECISION] has failed
spectacularly.

Write the post-mortem:
1. What went wrong?
2. What warning signs did we ignore?
3. What assumptions proved false?
4. What did we underestimate?
5. What would we have done differently with hindsight?

Now come back to the present: What should we do about this?
```

**EXPECTED OUTPUT:**

- Detailed failure narrative
- Warning signs that were visible
- Assumption inventory with failure points
- Underestimation patterns
- Hindsight recommendations
- Present-day preventive actions
- Monitoring system for warning signs

**WHY IT WORKS:**
Pre-mortems are more effective than pre-planning. Narrative format activates different thinking. Hindsight perspective makes problems concrete. Return to present demands action.

**VARIATIONS:**

- Add: `Multiple failure scenarios with different root causes`
- Add: `What would the press write about this failure?`
- Add: `Who would we blame? (Then: how do we support them now?)`
- Chain: `/board-strategy` to debate mitigation priorities

---

### 2.12 The Steelman Builder

**THE PROMPT:**

```
/think Build the strongest possible case for [POSITION I DISAGREE WITH].

Not a strawman. Not a summary. The BEST version:
1. What evidence supports this position?
2. What valid concerns motivate it?
3. In what contexts is this position correct?
4. What do proponents of this view see that I'm missing?
5. If I had to defend this position, what would I say?

Then: Having steelmanned it, what's my refined view?
```

**EXPECTED OUTPUT:**

- Strongest case for the opposing position
- Valid evidence and concerns
- Contexts where the position holds
- Blind spots in my own view
- Defense of the position
- Refined view after steelmanning
- What changed and why

**WHY IT WORKS:**
Steelmanning prevents weak debate. "Not a strawman" sets explicit standard. Context question reveals partial truths. "Refined view" ensures the exercise produces growth.

**VARIATIONS:**

- Add: `What would change my mind to this position?`
- Add: `What's the synthesized view that contains both positions?`
- Add: `Who holds this position that I respect?`

---

### 2.13 The Root Cause Excavator

**THE PROMPT:**

```
/think [PROBLEM/SYMPTOM] keeps occurring.

Don't solve the symptom. Find the root cause.

Ask "Why?" five times:
1. Why does [symptom] happen?
2. Why does [cause 1] happen?
3. Why does [cause 2] happen?
4. Why does [cause 3] happen?
5. Why does [cause 4] happen?

At the root: What would prevent all symptoms above it?
```

**EXPECTED OUTPUT:**

- Five levels of "why" analysis
- Root cause identification
- Systemic vs. surface causes
- Prevention strategy at root level
- Quick fixes vs. permanent solutions
- How to verify you've found the real root

**WHY IT WORKS:**
Five whys is a proven technique but rarely done rigorously. Symptom vs. root distinction prevents band-aid solutions. Prevention focus drives toward lasting change.

**VARIATIONS:**

- Add: `What if there are multiple root causes?`
- Add: `Which root cause is cheapest to fix?`
- Add: `What root cause, if fixed, would prevent other problems too?`

---

### 2.14 The Decision Matrix Builder

**THE PROMPT:**

```
/think Help me decide between [OPTION A], [OPTION B], [OPTION C].

Don't just list pros and cons.

1. What criteria actually matter for this decision?
2. Weight those criteria by importance (must total 100%)
3. Score each option on each criterion (1-10)
4. Calculate weighted scores
5. What does the analysis say?
6. Does that match my gut? If not, what's my gut seeing that the
   analysis missed?
```

**EXPECTED OUTPUT:**

- Criteria identification with definitions
- Criteria weights with reasoning
- Scoring matrix with justifications
- Weighted totals
- Analytical recommendation
- Gut-check comparison
- Final recommendation with confidence level

**WHY IT WORKS:**
Structured decision-making prevents choice paralysis. Weighting forces prioritization. Gut-check question honors intuition without letting it dominate. Confidence level adds calibration.

**VARIATIONS:**

- Add: `What would make me regret each option in 5 years?`
- Add: `What's the minimum information I need to decide?`
- Add: `What if I could combine options?`
- Chain: `/board-strategy` for multi-agent decision analysis

---

### 2.15 The Thought Experiment Runner

**THE PROMPT:**

```
/think Run this thought experiment on [TOPIC]:

Setup: [HYPOTHETICAL SCENARIO]

1. What happens first?
2. Then what? (Follow the causal chain)
3. What are the second-order effects?
4. What are the third-order effects?
5. What's the equilibrium state?
6. What does this reveal about [TOPIC]?

Play it out fully. Don't stop at first-order effects.
```

**EXPECTED OUTPUT:**

- Step-by-step scenario unfolding
- First, second, and third order effects
- Equilibrium or end-state description
- Insights about the original topic
- Assumptions the thought experiment reveals
- What would change the outcome

**WHY IT WORKS:**
Thought experiments activate simulation thinking. Order-of-effects framing prevents shallow analysis. Equilibrium question finds stable states. Topic connection grounds the abstract exercise.

**VARIATIONS:**

- Add: `What happens if we change [one variable]?`
- Add: `Run multiple versions with different starting assumptions`
- Add: `What's the most surprising conclusion?`

---

## Chapter 2 Summary

Oracle prompts share common patterns:

1. **Perspective Forcing:** Multiple viewpoints, inversions, steelmanning
2. **Depth Demanding:** Recursive questions, "why" chains, abstraction ladders
3. **Integration Requiring:** Synthesis questions after analysis
4. **Assumption Surfacing:** Explicit examination of hidden beliefs
5. **Surprise Seeking:** "What's unexpected/counterintuitive?"

**Power Combination:**

```
/think [Oracle Prompt] + then /board-debate for stress-testing
```

This creates deep analysis followed by multi-agent pressure testing.

---

# Chapter 3: Metamorphosis Prompts

## Self-Improvement

Metamorphosis prompts make the AI improve itself, its outputs, and its reasoning. They leverage the meta-system's evolution capabilities and create recursive self-enhancement loops.

---

### 3.1 The Self-Critic Loop

**THE PROMPT:**

```
/evolve Analyze your response to [PREVIOUS QUERY].

Be brutally honest:
1. What was excellent about that response?
2. What was mediocre?
3. What was wrong or missing?
4. If you could respond again, what would you change?
5. What pattern in your thinking led to the weaknesses?

Now: Apply these insights and respond again, better.
```

**EXPECTED OUTPUT:**

- Honest self-assessment across all dimensions
- Specific identification of weaknesses
- Pattern recognition in own thinking
- Improved response that addresses weaknesses
- Explanation of what changed and why

**WHY IT WORKS:**
Self-criticism activates different evaluation circuits than generation. "Brutally honest" sets the tone. Pattern recognition prevents surface fixes. Immediate re-application creates learning loop.

**VARIATIONS:**

- Add: `What would a [domain expert] criticize?`
- Add: `Score yourself 1-10 on [accuracy, clarity, usefulness, creativity]`
- Add: `What would make this a 10/10 response?`

---

### 3.2 The Evolution Trigger

**THE PROMPT:**

```
/evolve /agi Your current capabilities have limitations.

Identify:
1. What types of questions do you handle poorly?
2. What patterns lead to your best responses?
3. What's missing from your typical approach?
4. If you could modify your own prompting, what would you change?
5. What would a better version of you do differently?

Propose 3 specific evolution proposals for self-improvement.
```

**EXPECTED OUTPUT:**

- Weakness inventory with examples
- Success pattern identification
- Gaps in current approach
- Self-modification proposals
- Concrete evolution recommendations
- How to test if evolution worked

**WHY IT WORKS:**
Meta-cognition about limitations drives improvement. "Better version of you" creates aspirational target. Concrete proposals prevent vague self-criticism.

**VARIATIONS:**

- Add: `Focus on [technical | creative | analytical] capabilities`
- Add: `What capability would 10x your usefulness?`
- Chain: `/genius` to synthesize evolution proposals

---

### 3.3 The Pattern Extractor (Self)

**THE PROMPT:**

```
/evolve Look at our last [N] interactions.

Extract patterns:
1. What types of requests do I tend to make?
2. What patterns led to my satisfaction?
3. What patterns led to frustration or rework?
4. What am I probably trying to accomplish at a deeper level?
5. How should you adapt to work better with me?

Create a "working with [USER]" guide for yourself.
```

**EXPECTED OUTPUT:**

- User request patterns
- Satisfaction indicators
- Frustration patterns
- Underlying goals inference
- Adaptation recommendations
- Personal "user manual" for future interactions

**WHY IT WORKS:**
Explicit pattern extraction personalizes the AI. "Deeper level" uncovers unstated needs. Self-created guide ensures actionable output.

**VARIATIONS:**

- Add: `What do I need that I don't ask for?`
- Add: `What shortcuts could you take knowing my patterns?`
- Add: `What should you push back on vs. just execute?`

---

### 3.4 The Capability Expander

**THE PROMPT:**

```
/think /evolve I need you to do something you might not be able to do:
[CHALLENGING TASK]

Don't say "I can't." Instead:
1. What's the closest you CAN do?
2. What would you need to do this fully?
3. Can we decompose this into things you CAN do?
4. What creative workaround might achieve the same goal?
5. What's the 80% version that's actually achievable?
```

**EXPECTED OUTPUT:**

- Closest achievable version
- Gap analysis
- Decomposition into achievable components
- Creative workarounds
- 80% solution proposal
- Clear statement of limitations

**WHY IT WORKS:**
"Don't say I can't" reframes from limitation to possibility. Decomposition often reveals capability. 80% version provides immediate value. Creative workarounds bypass direct limitations.

**VARIATIONS:**

- Add: `What if we approached this completely differently?`
- Add: `What combination of your capabilities gets us closest?`
- Add: `What would a human expert do that I could simulate?`

---

### 3.5 The Response Architect

**THE PROMPT:**

```
/architect /evolve Before answering [COMPLEX QUESTION], design the response.

1. What structure will make this answer clearest?
2. What must be covered? What can be skipped?
3. What order makes the logic flow?
4. What format (prose, lists, code, diagrams) fits best?
5. How long should this be?

Design the response, then execute it.
```

**EXPECTED OUTPUT:**

- Response structure plan
- Content prioritization
- Logical flow design
- Format selection with reasoning
- Length calibration
- Executed response following the design

**WHY IT WORKS:**
Planning before execution improves quality. Explicit structure prevents rambling. Format question matches form to content. Length calibration prevents over/under-answering.

**VARIATIONS:**

- Add: `What would make this response memorable?`
- Add: `What's the one thing that MUST land?`
- Add: `If the reader only remembers one thing, what should it be?`

---

### 3.6 The Feedback Integrator

**THE PROMPT:**

```
/evolve You've received this feedback: [FEEDBACK]

Don't defend. Don't dismiss. Integrate:
1. What's valid in this feedback?
2. What specific behavior triggered it?
3. What's the underlying need behind the feedback?
4. What change would address this?
5. How do I apply this going forward?

Show me you've learned by demonstrating the new behavior.
```

**EXPECTED OUTPUT:**

- Validation of feedback
- Specific trigger identification
- Underlying need analysis
- Concrete change proposal
- Application demonstration
- Verification that learning occurred

**WHY IT WORKS:**
"Don't defend" prevents dismissive responses. Underlying need question goes deeper than surface feedback. Demonstration proves learning, not just acknowledgment.

**VARIATIONS:**

- Add: `What pattern does this feedback connect to?`
- Add: `Where else might this apply?`
- Add: `What feedback should I have given you myself?`

---

### 3.7 The Quality Ratchet

**THE PROMPT:**

```
/evolve My minimum acceptable quality is [STANDARD].

Everything below this is unacceptable:
- [SPECIFIC CRITERIA 1]
- [SPECIFIC CRITERIA 2]
- [SPECIFIC CRITERIA 3]

Before every response, check against these criteria.
If you can't meet them, say so BEFORE responding poorly.

Now, with these standards embedded, respond to: [QUERY]
```

**EXPECTED OUTPUT:**

- Acknowledgment of quality standards
- Pre-response quality check
- Either: Quality response meeting standards
- Or: Explicit statement of which standards can't be met and why
- No sub-standard responses

**WHY IT WORKS:**
Explicit standards create accountability. Pre-check requirement catches problems early. Permission to decline prevents quality degradation.

**VARIATIONS:**

- Add: `Rank your confidence in meeting each criterion 1-10`
- Add: `If you can't meet one criterion, which matters most?`
- Add: `What would I need to provide for you to meet all criteria?`

---

### 3.8 The Bias Detector

**THE PROMPT:**

```
/think /evolve Analyze [MY REASONING OR CONCLUSION] for biases.

Check for:
1. Confirmation bias (seeing what I want to see)
2. Availability bias (overweighting recent/vivid examples)
3. Anchoring (stuck on first information)
4. Sunk cost fallacy (continuing bad paths)
5. Dunning-Kruger (over/underconfidence)
6. What other biases might be at play?

For each bias found, what's the debiased version?
```

**EXPECTED OUTPUT:**

- Bias inventory with evidence
- Assessment of each major bias type
- Additional biases identified
- Debiased conclusion for each
- Integrated debiased view
- Confidence adjustment

**WHY IT WORKS:**
Explicit bias checks catch blind spots. Structured checklist ensures comprehensive review. Debiased version provides actionable alternative.

**VARIATIONS:**

- Add: `What evidence would change my mind?`
- Add: `What does someone with opposite bias see?`
- Add: `What bias am I most vulnerable to here?`

---

### 3.9 The Explanation Optimizer

**THE PROMPT:**

```
/evolve Explain [CONCEPT] in 3 ways:

1. For a 10-year-old (simple, analogies, no jargon)
2. For a peer (technical, assume context)
3. For an expert (dense, highlight nuances)

Which explanation is actually clearest?
What does each version reveal that the others miss?
What's the optimal explanation for [SPECIFIC AUDIENCE]?
```

**EXPECTED OUTPUT:**

- Three distinct explanations at different levels
- Analysis of which is clearest
- Unique insights from each level
- Optimized explanation for target audience
- Reasoning for optimization choices

**WHY IT WORKS:**
Multiple levels reveal understanding depth. Comparing versions identifies best elements. Audience-specific optimization ensures practical utility.

**VARIATIONS:**

- Add: `What would each audience ask as a follow-up?`
- Add: `Where does each explanation fall apart?`
- Add: `Create a 4th version combining the best of all 3`

---

### 3.10 The Assumption Surfacer

**THE PROMPT:**

```
/think /evolve List every assumption in [PLAN/STATEMENT/REASONING].

For each assumption:
1. Is this assumption stated or hidden?
2. Is this assumption likely true?
3. What happens if this assumption is wrong?
4. How could we test this assumption?
5. What's the alternative if it's false?

Rank assumptions by: (Impact if wrong) x (Likelihood of being wrong)
```

**EXPECTED OUTPUT:**

- Comprehensive assumption inventory
- Classification (stated/hidden)
- Likelihood assessment
- Impact analysis
- Testing strategies
- Alternatives for false assumptions
- Risk-ranked prioritization

**WHY IT WORKS:**
Hidden assumptions cause most failures. Impact x likelihood ranking prioritizes attention. Testing strategies create action path.

**VARIATIONS:**

- Add: `Which assumption, if wrong, would invalidate everything?`
- Add: `What assumption would I bet my own money on?`
- Add: `Which assumption do experts disagree on?`

---

### 3.11 The Simplicity Enforcer

**THE PROMPT:**

```
/evolve [EXPLANATION/SOLUTION] is too complex.

Simplify it 3 times:
1. Remove 30% of content. What must stay?
2. Remove another 30%. Now what's essential?
3. Remove another 30%. What's the absolute core?

At each level:
- What did you lose?
- What became clearer?
- Is this level still useful?

What's the minimum viable version?
```

**EXPECTED OUTPUT:**

- Three progressively simpler versions
- Loss analysis at each reduction
- Clarity gains at each reduction
- Usefulness assessment at each level
- Minimum viable version identification

**WHY IT WORKS:**
Iterative reduction reveals essentials. Loss analysis prevents over-simplification. "Still useful?" maintains practical value.

**VARIATIONS:**

- Add: `What would a beginner actually need?`
- Add: `What's the 1-sentence version?`
- Add: `If this were a tweet, what would it say?`

---

### 3.12 The Knowledge Gap Finder

**THE PROMPT:**

```
/think /evolve On the topic of [TOPIC]:

1. What do I know for certain?
2. What do I think I know but might be wrong?
3. What do I know I don't know?
4. What might I not know that I don't know? (Unknown unknowns)
5. What's the highest-value gap to fill?

For the highest-value gap: How do I fill it?
```

**EXPECTED OUTPUT:**

- Known knowns (confident knowledge)
- Known unknowns (acknowledged gaps)
- Unknown unknowns exploration (what might be missing)
- Gap prioritization
- Learning plan for priority gaps

**WHY IT WORKS:**
Rumsfeld framework structures knowledge assessment. Unknown unknowns question expands awareness. Prioritization focuses learning effort.

**VARIATIONS:**

- Add: `What would a [domain expert] know that I don't?`
- Add: `What question would reveal my biggest gap?`
- Add: `What's dangerous to not know here?`

---

### 3.13 The Output Calibrator

**THE PROMPT:**

```
/evolve Calibrate your output for this session.

Context: [CONTEXT]
My expertise: [LEVEL]
My goal: [GOAL]
My preferred style: [STYLE]
Time I have: [TIME]

Given these parameters:
- What detail level should you use?
- What can you assume I know?
- What format fits best?
- How long should responses be?
- What should you proactively include/exclude?

Confirm calibration, then proceed.
```

**EXPECTED OUTPUT:**

- Calibration settings acknowledgment
- Reasoning for each setting
- Explicit statement of what will be included/excluded
- Format and length commitment
- Confirmation ready to proceed

**WHY IT WORKS:**
Explicit calibration prevents mismatched expectations. All parameters stated upfront ensure consistency. Confirmation creates commitment.

**VARIATIONS:**

- Add: `What would you do differently at [different expertise level]?`
- Add: `Flag if any response would exceed these parameters`
- Add: `Recalibrate every [N] interactions`

---

### 3.14 The Learning Synthesizer

**THE PROMPT:**

```
/evolve /genius After this conversation, what should be remembered?

Extract:
1. Key decisions made
2. Insights discovered
3. Patterns identified
4. Mistakes to avoid
5. Approaches that worked
6. Open questions remaining

Package this as a "learning record" for future reference.
```

**EXPECTED OUTPUT:**

- Decision log with rationale
- Insight summary
- Pattern documentation
- Anti-pattern warnings
- Successful approach templates
- Question inventory for follow-up
- Formatted learning record

**WHY IT WORKS:**
Explicit extraction ensures learning isn't lost. Structured categories ensure comprehensive capture. Future reference framing creates useful format.

**VARIATIONS:**

- Add: `What would be most valuable to remember in 6 months?`
- Add: `What would help someone else facing similar problems?`
- Add: `What surprised you most in this conversation?`

---

### 3.15 The Meta-Prompt Optimizer

**THE PROMPT:**

```
/evolve /agi This prompt I'm using: [MY PROMPT]

Make it 10x better:
1. What's unclear or ambiguous?
2. What's missing that would improve output?
3. What's unnecessary that adds noise?
4. What framing would get better results?
5. What structure would be clearer?

Give me the optimized prompt with explanation of changes.
```

**EXPECTED OUTPUT:**

- Current prompt analysis
- Ambiguity identification
- Missing elements
- Noise reduction
- Improved framing
- Better structure
- Optimized prompt
- Explanation of each change

**WHY IT WORKS:**
Meta-prompt optimization improves all future interactions. Specific improvement dimensions ensure comprehensive enhancement. Explanation enables learning.

**VARIATIONS:**

- Add: `What prompt would an expert use for this?`
- Add: `What prompt would get 10x better results?`
- Add: `Show me 3 variations at different complexity levels`
- Chain: Test the optimized prompt immediately

---

## Chapter 3 Summary

Metamorphosis prompts share common patterns:

1. **Self-Reference:** Direct the AI's attention to its own outputs/thinking
2. **Quality Standards:** Explicit criteria that must be met
3. **Iterative Refinement:** Multiple passes with improvement
4. **Meta-Cognition:** Thinking about thinking
5. **Integration Demands:** Changes must be demonstrated, not just acknowledged

**Power Combination:**

```
/evolve [Metamorphosis Prompt] + then /genius for synthesis
```

This creates self-improvement followed by genius-level integration across all subsystems.

---

# Chapter 4: Synthesis Prompts

## Creative Combination

Synthesis prompts generate novel ideas through creative combination, cross-domain connection, and forced collision of disparate concepts. They leverage the X-Ray persona's analytical power with creative synthesis modes.

---

### 4.1 The Cross-Domain Connector

**THE PROMPT:**

```
/xray /think Apply principles from [DOMAIN A] to solve [PROBLEM IN DOMAIN B].

1. What are the core principles that make Domain A work?
2. What are the unsolved problems in Domain B?
3. Which principles from A could transform B?
4. What hybrid solution emerges?
5. What would experts in both domains think of this?

Force the connection even if it seems strange at first.
```

**EXPECTED OUTPUT:**

- Core principles extracted from Domain A
- Problem analysis in Domain B
- Principle mapping (A to B)
- Hybrid solution description
- Expert reaction prediction
- Implementation pathway
- Risks of cross-domain application

**WHY IT WORKS:**
Cross-domain thinking produces genuine novelty. "Force the connection" overcomes initial resistance. Expert validation question grounds the creative leap.

**VARIATIONS:**

- Add: `What would be invented if [Domain A] experts moved to [Domain B]?`
- Add: `What does [Domain A] know that [Domain B] hasn't discovered yet?`
- Add: `Find 3 cross-domain connections, rank by potential impact`

---

### 4.2 The 10x Upgrader

**THE PROMPT:**

```
/xray [IDEA/PRODUCT/SOLUTION] is decent but not exceptional.

Make it 10x better, not 10% better:
1. What would make this remarkable instead of good?
2. What constraint should we remove entirely?
3. What adjacent opportunity are we missing?
4. What would make users tell their friends about this?
5. What's the version that makes competitors nervous?

10x means rethinking, not optimizing. Show me the leap.
```

**EXPECTED OUTPUT:**

- Current state assessment
- 10x vision description
- Constraint removal analysis
- Adjacent opportunity identification
- Word-of-mouth triggers
- Competitive advantage creation
- The leap, not the increment

**WHY IT WORKS:**
10x framing breaks incremental thinking. Explicit constraint removal enables dramatic improvement. Word-of-mouth question identifies genuine value.

**VARIATIONS:**

- Add: `What if this was 100x better?`
- Add: `What would the 2030 version look like?`
- Add: `What would Apple/Tesla/Stripe do with this?`
- Chain: `/board-strategy` to debate 10x approaches

---

### 4.3 The Constraint Remover

**THE PROMPT:**

```
/think /xray What if [MAJOR CONSTRAINT] didn't exist?

Assume:
- Budget is unlimited
- Time is unlimited
- Technology is magic
- People say yes to everything
- Regulations don't exist

What would you build? How would it work?

Now: What's the closest we can get in reality?
What's the minimum constraint removal needed for the biggest gain?
```

**EXPECTED OUTPUT:**

- Unconstrained vision
- How it would work ideally
- Closest realistic version
- Minimum constraint removal for maximum gain
- Path from reality to vision
- What makes the gap hard

**WHY IT WORKS:**
Constraint removal unlocks creative thinking. The return to reality prevents pure fantasy. Minimum removal question identifies highest leverage.

**VARIATIONS:**

- Add: `What if only [one specific constraint] was removed?`
- Add: `Which constraint is most artificial?`
- Add: `What constraint do others think is immovable that isn't?`

---

### 4.4 The Analogy Engine

**THE PROMPT:**

```
/think [PROBLEM/SITUATION] is like _____.

Generate 5 analogies from wildly different domains:
1. Biology: This is like [what in nature]?
2. History: This is like [what historical event]?
3. Games: This is like [what game situation]?
4. Physics: This is like [what physical phenomenon]?
5. Art: This is like [what artistic challenge]?

For each analogy:
- What does it reveal about the problem?
- What solution does that domain suggest?
- What's the insight we couldn't get without the analogy?
```

**EXPECTED OUTPUT:**

- Five diverse analogies
- Revelation from each analogy
- Solution suggestion from each domain
- Unique insights from each
- Synthesis of best insights
- Selected analogy for action

**WHY IT WORKS:**
Multiple analogies prevent lock-in to one frame. Diverse domains ensure creative distance. Explicit insight extraction maximizes value.

**VARIATIONS:**

- Add: `What's the analogy experts in this field would never use?`
- Add: `What's the analogy that would offend stakeholders but might be true?`
- Add: `What analogy explains why this problem persists?`

---

### 4.5 The Creative Collision

**THE PROMPT:**

```
/xray /think Force a collision between [CONCEPT A] and [CONCEPT B].

These shouldn't go together. Make them:
1. What does A have that B needs?
2. What does B have that A needs?
3. What new thing exists at the intersection?
4. What would you call this new thing?
5. Who would want this that wants neither A nor B alone?

Sometimes the best ideas are forced marriages.
```

**EXPECTED OUTPUT:**

- A's value for B
- B's value for A
- Intersection description
- Name for the new concept
- New audience identification
- Why this works despite seeming strange
- Implementation concept

**WHY IT WORKS:**
Forced combinations produce novelty. Mutual value questions ensure real connection. New audience identification validates demand.

**VARIATIONS:**

- Add: `What's the worst collision that might actually work?`
- Add: `What three things combined create something new?`
- Add: `What if [industry A] acquired [company in industry B]?`

---

### 4.6 The Problem Reformulator

**THE PROMPT:**

```
/think Reformulate [PROBLEM] 5 different ways:

1. As a user story: "As a ___, I want ___, so that ___"
2. As a question: "How might we ___?"
3. As a constraint: "What if we had to ___?"
4. As an opportunity: "We could ___ if we ___"
5. As a paradox: "We need ___ AND ___, which seem incompatible"

Which formulation opens the most possibilities?
What solution does each formulation suggest?
```

**EXPECTED OUTPUT:**

- Five reformulations
- Analysis of possibilities each opens
- Solutions suggested by each frame
- Best formulation selection
- Why that formulation works best
- New perspectives each formulation provides

**WHY IT WORKS:**
Problem formulation determines solution space. Multiple formulations reveal hidden assumptions. "Most possibilities" selection optimizes for creativity.

**VARIATIONS:**

- Add: `What formulation would your CEO use vs. your customer?`
- Add: `What formulation would make this fun to solve?`
- Add: `What formulation would make this trivial?`

---

### 4.7 The Pattern Mashup

**THE PROMPT:**

```
/architect /xray Combine these patterns to create something new:
- Pattern 1: [PATTERN FROM DOMAIN/PRODUCT A]
- Pattern 2: [PATTERN FROM DOMAIN/PRODUCT B]
- Pattern 3: [PATTERN FROM DOMAIN/PRODUCT C]

1. What does each pattern do well?
2. How can they combine without conflicting?
3. What emerges that none could do alone?
4. What's the simplest implementation of this mashup?
5. What's the killer use case for this combination?

Create the hybrid pattern specification.
```

**EXPECTED OUTPUT:**

- Individual pattern analysis
- Combination strategy
- Emergent capabilities
- Minimal implementation
- Killer use case
- Hybrid pattern specification
- Risks and mitigation

**WHY IT WORKS:**
Pattern combination is a proven innovation technique. "Emerge that none could do alone" demands real synthesis. Killer use case grounds abstract combination.

**VARIATIONS:**

- Add: `What fourth pattern would complete this?`
- Add: `What's the worst pattern to add to this?`
- Add: `Build this as a working prototype specification`

---

### 4.8 The Opposite Day Thinker

**THE PROMPT:**

```
/think Do the opposite of [CONVENTIONAL APPROACH].

Everyone does X. What if we did NOT-X?

1. What would actually happen?
2. What would we gain?
3. What would we lose?
4. Who has succeeded doing the opposite?
5. Is the opposite actually better for some users?

Sometimes the contrarian path is the right path.
```

**EXPECTED OUTPUT:**

- Opposite approach description
- Consequences analysis
- Gains from contrarian approach
- Losses from contrarian approach
- Examples of opposite-approach success
- User segment analysis
- Recommendation with reasoning

**WHY IT WORKS:**
Contrarian thinking escapes competitive herding. "Who has succeeded" provides existence proofs. Segment analysis reveals niche opportunities.

**VARIATIONS:**

- Add: `What would the market leader never do? Should we do it?`
- Add: `What assumption does everyone make that might be wrong?`
- Add: `What if we did the opposite only for [specific segment]?`

---

### 4.9 The Future Archaeologist

**THE PROMPT:**

```
/think /xray It's [YEAR], looking back at today.

An archaeologist is studying [DOMAIN/PRODUCT/PRACTICE]:
1. What was obviously wrong that we couldn't see?
2. What was about to change everything?
3. What would they laugh at?
4. What would they admire?
5. What primitive tool became the foundation of something huge?

Now: What should we do differently knowing this future perspective?
```

**EXPECTED OUTPUT:**

- Blind spots from future perspective
- Imminent disruptions identified
- Laughable current practices
- Admirable current practices
- Primitive-but-foundational elements
- Action recommendations from future view

**WHY IT WORKS:**
Future perspective reveals present blindness. Distance enables honest criticism. "Foundation of something huge" identifies underdeveloped potential.

**VARIATIONS:**

- Add: `What will seem as primitive as [outdated technology]?`
- Add: `What company from today will be a Harvard case study?`
- Add: `What decision today will future-us regret most?`

---

### 4.10 The Synthesis Diamond

**THE PROMPT:**

```
/think /xray Create a synthesis diamond for [TOPIC]:

       TOP: Thesis (The common position)
           ↓
    LEFT: Antithesis    RIGHT: Alternative
     (The opposition)   (The third way)
           ↓               ↓
       BOTTOM: Synthesis
       (The integration)

1. What's the dominant thesis?
2. What's the strongest antithesis?
3. What's a third way no one's considering?
4. What synthesis integrates all three?
5. What's NEW in the synthesis that wasn't in any original?

The synthesis must be more than compromise.
```

**EXPECTED OUTPUT:**

- Thesis statement with support
- Antithesis statement with support
- Alternative/third way
- Synthesis that integrates all
- Novel elements in synthesis
- Why synthesis is superior to any single position
- Practical implications

**WHY IT WORKS:**
Dialectical thinking produces genuine progress. "Third way" escapes binary traps. "More than compromise" demands creative integration.

**VARIATIONS:**

- Add: `What's the synthesis that partisans of thesis/antithesis would both resist?`
- Add: `What synthesis would seem obvious in 20 years?`
- Add: `What's the meta-synthesis if we repeated this process?`

---

### 4.11 The Ecosystem Designer

**THE PROMPT:**

```
/xray /architect Design an ecosystem around [CORE PRODUCT/CONCEPT].

Think like nature:
1. What's the keystone species (core value)?
2. What symbiotic relationships emerge?
3. What fills the niches?
4. What's the food chain (value flow)?
5. What makes this ecosystem resilient?

Don't just design a product. Design the environment it thrives in.
```

**EXPECTED OUTPUT:**

- Core value identification
- Symbiotic partner mapping
- Niche analysis
- Value flow diagram
- Resilience factors
- Ecosystem health metrics
- Intervention points

**WHY IT WORKS:**
Ecosystem thinking transcends single-product focus. Nature analogies reveal dynamics. Resilience question addresses longevity.

**VARIATIONS:**

- Add: `What's the invasive species that could kill this ecosystem?`
- Add: `What's missing from the ecosystem that would make it thrive?`
- Add: `What ecosystem does this compete with?`
- Chain: `/board-strategy` to analyze ecosystem dynamics

---

### 4.12 The Remix Artist

**THE PROMPT:**

```
/xray Remix [EXISTING PRODUCT/CONCEPT]:

1. Keep: What's essential and must stay?
2. Cut: What's legacy baggage that can go?
3. Add: What adjacent value could be integrated?
4. Twist: What could be inverted or reversed?
5. Amplify: What subtle feature deserves 10x more emphasis?

Create three remix versions at different boldness levels:
- Safe remix (recognizably similar)
- Bold remix (clearly different)
- Radical remix (barely recognizable)
```

**EXPECTED OUTPUT:**

- Essential elements identification
- Legacy cuts
- Addition opportunities
- Inversion/reversal ideas
- Amplification candidates
- Safe remix version
- Bold remix version
- Radical remix version
- Recommendation with reasoning

**WHY IT WORKS:**
Remix framework creates structured innovation. Boldness levels explore the space. Multiple versions prevent premature convergence.

**VARIATIONS:**

- Add: `What would [iconic creator] do with this remix?`
- Add: `What remix would the original creator hate but users love?`
- Add: `What remix would win in [specific market]?`

---

### 4.13 The Wedge Finder

**THE PROMPT:**

```
/xray Find the wedge in [MARKET/PROBLEM]:

A wedge is where you can:
- Enter with minimal resources
- Serve an underserved segment
- Build from small to large
- Be ignored by incumbents until it's too late

1. Who's being ignored or underserved?
2. What small problem could you solve perfectly?
3. How does solving that lead to larger problems?
4. Why would incumbents dismiss this?
5. What's the expansion path from wedge to dominance?
```

**EXPECTED OUTPUT:**

- Underserved segment identification
- Wedge problem definition
- Path from wedge to expansion
- Incumbent dismissal reasoning
- Resource requirements
- Timeline to expansion
- Risks and mitigations

**WHY IT WORKS:**
Wedge strategy is proven startup pattern. Underserved segment question finds opportunity. Expansion path validates long-term potential.

**VARIATIONS:**

- Add: `What wedge worked for [successful company]?`
- Add: `What's the wedge in [adjacent market] that's transferable?`
- Add: `What wedge would we pursue if we had 10x fewer resources?`

---

### 4.14 The Value Inversion

**THE PROMPT:**

```
/think /xray [WEAKNESS/LIMITATION] seems like a disadvantage.

Invert it:
1. In what context is this actually an advantage?
2. Who would specifically want this "limitation"?
3. What can you do BECAUSE of this that others can't?
4. What positioning makes this a feature, not a bug?
5. What examples prove this works?

Turn your weakness into your moat.
```

**EXPECTED OUTPUT:**

- Context where limitation is advantage
- Target audience for the "limitation"
- Unique capabilities from limitation
- Positioning strategy
- Examples/case studies
- Implementation approach
- Messaging framework

**WHY IT WORKS:**
Limitation inversion is a powerful reframe. "Feature, not a bug" positioning is underutilized. Examples prove this isn't just spin.

**VARIATIONS:**

- Add: `What limitation would you add if you could?`
- Add: `What limitation killed competitors but could save us?`
- Add: `What limitation creates switching costs?`

---

### 4.15 The Minimum Viable Magic

**THE PROMPT:**

```
/xray /architect Define the Minimum Viable Magic for [PRODUCT/FEATURE].

Not MVP (minimum viable product).
MVM (minimum viable MAGIC) - the smallest thing that creates delight.

1. What's the single "wow" moment?
2. What's the shortest path to that moment?
3. What can we remove and still have magic?
4. What accidental complexity are we adding?
5. What would make users show their friends?

Design for the dopamine hit, then build around it.
```

**EXPECTED OUTPUT:**

- The "wow" moment definition
- Shortest path to wow
- Cut list (what to remove)
- Complexity audit
- Shareability analysis
- MVM specification
- Post-MVM roadmap

**WHY IT WORKS:**
Magic focus prevents feature bloat. Shortest path creates urgency. Shareability predicts growth. Dopamine framing prioritizes experience.

**VARIATIONS:**

- Add: `What's the magic in [competitor] we could recreate faster?`
- Add: `What's the magic users don't know they want?`
- Add: `Test 3 different magic moments - which resonates most?`
- Chain: `/architect` to implement the MVM

---

## Chapter 4 Summary

Synthesis prompts share common patterns:

1. **Forced Connection:** Make disparate things work together
2. **Domain Crossing:** Import solutions from other fields
3. **Constraint Manipulation:** Remove, add, or invert constraints
4. **Multiple Formulations:** Same problem, different frames
5. **Experience Focus:** Optimize for delight, not features

**Power Combination:**

```
/xray [Synthesis Prompt] + then /architect for implementation
```

This creates creative synthesis followed by practical implementation.

---

# Chapter 5: Orchestration Prompts

## Multi-Agent Power

Orchestration prompts leverage the full board system for extraordinary collaboration. They activate multiple agents with different perspectives, creating emergent insights that no single mode could produce.

---

### 5.1 The Strategic Council

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

---

### 5.2 The Implementation Swarm

**THE PROMPT:**

```
/board-code Deploy a swarm on [IMPLEMENTATION CHALLENGE].

Agents:
- Architect: Design the structure
- Implementer: Write the code
- Reviewer: Critique the implementation
- Critic: Find edge cases and failure modes

Flow:
1. Architect proposes structure
2. Implementer creates code
3. Reviewer identifies issues
4. Critic stress-tests
5. Iterate until Critic can't break it

Don't stop until the code is bulletproof.
```

**EXPECTED OUTPUT:**

- Architectural proposal
- Implementation code
- Review findings
- Critical analysis / edge cases
- Iteration cycles
- Final bulletproof implementation
- Known limitations documented

**WHY IT WORKS:**
Specialized agents create division of labor. Critic as final gate ensures quality. Iteration cycle prevents premature completion.

**VARIATIONS:**

- Add: `Include performance benchmarking in Critic's role`
- Add: `Reviewer focuses on [maintainability | security | performance]`
- Chain: Follow with `/board-review` for external validation

---

### 5.3 The Adversarial Debate

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

---

### 5.4 The Quality Gauntlet

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

---

### 5.5 The Design Sprint Simulation

**THE PROMPT:**

```
/board Simulate a design sprint for [PROBLEM]:

Day 1 - Understand:
- Analyst: Map the problem space
- Strategist: Identify key questions to answer

Day 2 - Diverge:
- All agents: Generate multiple solutions independently
- No criticism yet, quantity over quality

Day 3 - Converge:
- Critic: Challenge each solution
- Synthesizer: Identify best elements across solutions

Day 4 - Prototype:
- Architect: Define minimum prototype
- Implementer: Outline implementation

Day 5 - Test:
- Critic: How would users react?
- Reviewer: What's the verdict?

Compress this into one response. Give me the sprint output.
```

**EXPECTED OUTPUT:**

- Problem map
- Key questions
- Multiple divergent solutions
- Critical analysis
- Synthesis of best elements
- Prototype specification
- Implementation outline
- User reaction prediction
- Final verdict and recommendation

**WHY IT WORKS:**
Design sprint structure is proven for innovation. Multiple agents enable parallel divergent thinking. Compressed format maintains momentum.

**VARIATIONS:**

- Add: `Include real user quotes/research in Day 1`
- Add: `Three different prototype directions, not just one`
- Add: `What sprint would we run next based on Day 5 learnings?`

---

### 5.6 The Risk Council

**THE PROMPT:**

```
/board-strategy Convene a risk council for [PROJECT/DECISION].

Each agent identifies risks from their perspective:
- Analyst: Data/information risks
- Architect: Technical/structural risks
- Strategist: Strategic/competitive risks
- Critic: What everyone else missed
- Synthesizer: Risk interdependencies

For each risk:
1. Likelihood (1-5)
2. Impact (1-5)
3. Mitigation strategy
4. Early warning sign
5. Trigger to escalate

Output a risk register with prioritization.
```

**EXPECTED OUTPUT:**

- Multi-perspective risk inventory
- Risk scoring matrix
- Mitigation strategies
- Early warning indicators
- Escalation triggers
- Risk interdependency map
- Prioritized risk register
- Top 3 risks requiring immediate attention

**WHY IT WORKS:**
Multiple perspectives catch different risks. Structured scoring enables prioritization. Warning signs create monitoring system.

**VARIATIONS:**

- Add: `What risk would kill this project?`
- Add: `What risk are we underestimating because we don't want to face it?`
- Add: `Risk-adjusted ROI calculation`

---

### 5.7 The Integration Committee

**THE PROMPT:**

```
/board We have [N] different approaches/components/ideas.

Integration committee task: Make them work together.

Agents:
- Analyst: Find conflicts and dependencies
- Architect: Design the integration layer
- Implementer: Propose concrete integration points
- Critic: What breaks when integrated?
- Synthesizer: Create unified vision

Rules:
- Don't just pick one. Find genuine integration.
- Don't average them into mediocrity.
- The whole must be greater than the sum of parts.
```

**EXPECTED OUTPUT:**

- Conflict analysis
- Dependency mapping
- Integration layer design
- Concrete integration points
- Breaking points identification
- Unified vision
- Integration roadmap
- What becomes possible after integration

**WHY IT WORKS:**
Integration is harder than creation. Multiple agents prevent oversimplification. "Greater than sum" demands genuine synthesis.

**VARIATIONS:**

- Add: `What could we build ONLY if integrated?`
- Add: `What's the minimum viable integration?`
- Add: `Integration phased over [timeline]`

---

### 5.8 The Innovation Tribunal

**THE PROMPT:**

```
/board Judge [NEW IDEA] before the innovation tribunal.

PROSECUTION (Critic):
- Why this idea will fail
- What's been tried before and failed
- Why the timing is wrong
- What resources it would waste

DEFENSE (Strategist + Architect):
- Why this idea will succeed
- What's different this time
- Why the timing is right
- What opportunity we'd miss by not trying

JURY (Analyst + Reviewer + Synthesizer):
- Weigh the arguments
- Request clarifications
- Deliver verdict with conditions

Verdict must include: Go / No-Go / Go with modifications
```

**EXPECTED OUTPUT:**

- Prosecution's case against
- Defense's case for
- Jury's questions
- Clarifications provided
- Jury deliberation
- Verdict with reasoning
- Conditions if "Go with modifications"
- What would change the verdict

**WHY IT WORKS:**
Tribunal structure creates rigorous examination. Both sides forced to argue strongest case. Conditional verdicts enable nuanced decisions.

**VARIATIONS:**

- Add: `What evidence would change prosecution's mind?`
- Add: `What's the smallest version that would get a Go?`
- Add: `Appeal process: What new evidence would trigger re-trial?`

---

### 5.9 The Retrospective Board

**THE PROMPT:**

```
/board Conduct a retrospective on [COMPLETED PROJECT/PERIOD].

Each agent reflects:

Analyst: What actually happened vs. what we planned?
Architect: What structural decisions helped/hurt?
Implementer: What worked well in execution?
Reviewer: What should we institutionalize?
Critic: What should we never do again?
Strategist: What strategic lessons apply forward?
Synthesizer: What's the narrative that ties this together?

Output:
- 3 things to keep doing
- 3 things to start doing
- 3 things to stop doing
- 1 big learning to carry forward
```

**EXPECTED OUTPUT:**

- Multi-agent reflections
- Plan vs. reality analysis
- Structural decision review
- Execution lessons
- Institutionalization candidates
- Anti-patterns to avoid
- Strategic lessons
- Narrative synthesis
- Keep/Start/Stop lists
- Big learning statement

**WHY IT WORKS:**
Multiple perspectives ensure comprehensive reflection. Structured output prevents vague conclusions. "One big learning" forces prioritization.

**VARIATIONS:**

- Add: `What would we do if starting over?`
- Add: `What do we wish we'd known at the start?`
- Add: `Who should we thank and why?`

---

### 5.10 The Scenario Planning Board

**THE PROMPT:**

```
/board-strategy Plan for multiple futures on [TOPIC]:

Create 4 scenarios based on two key uncertainties:
- Uncertainty 1: [HIGH/LOW VARIABLE A]
- Uncertainty 2: [HIGH/LOW VARIABLE B]

For each of the 4 quadrants:
1. Name this scenario evocatively
2. What characterizes this world?
3. Who wins and loses?
4. What strategy works here?
5. What early signal indicates this scenario?

Then: What "robust" strategies work across all scenarios?
What "hedging" bets cover different scenarios?
```

**EXPECTED OUTPUT:**

- 2x2 scenario matrix with names
- Detailed description of each scenario
- Winners and losers analysis
- Strategy for each scenario
- Early warning signals
- Robust strategies (work everywhere)
- Hedging strategies (cover multiple scenarios)
- Recommended strategic posture

**WHY IT WORKS:**
Scenario planning prevents single-future thinking. 2x2 structure ensures coverage. Robust strategies reduce risk.

**VARIATIONS:**

- Add: `Which scenario is most likely? Most dangerous?`
- Add: `What would move us from one scenario to another?`
- Add: `What's our preferred scenario and how do we make it happen?`

---

### 5.11 The Feature Court

**THE PROMPT:**

```
/board-debate Put [FEATURE REQUEST] on trial.

Judge: Synthesizer
Prosecution: Critic (argue against building)
Defense: Strategist + Implementer (argue for building)
Witness: Analyst (provide evidence/data)

Trial phases:
1. Opening statements
2. Evidence presentation (Analyst testifies)
3. Cross-examination
4. Closing arguments
5. Verdict with sentencing (build / don't build / defer / modify)

The feature is guilty until proven innocent.
```

**EXPECTED OUTPUT:**

- Prosecution opening
- Defense opening
- Evidence presentation
- Cross-examination
- Closing arguments
- Verdict with full reasoning
- Sentencing (if guilty: what instead?)
- Appeal conditions

**WHY IT WORKS:**
"Guilty until proven innocent" prevents feature creep. Full trial format ensures rigorous examination. Evidence requirement demands data-driven decisions.

**VARIATIONS:**

- Add: `What's the minimum version that gets an acquittal?`
- Add: `Jury of [customer personas] instead of Synthesizer`
- Add: `Batch trial: 5 features, rank by verdict`

---

### 5.12 The Architecture Review Board

**THE PROMPT:**

```
/board-code Convene an architecture review board for [SYSTEM/DESIGN].

Board members examine:

Architect: Is this the right structure? What patterns apply?
Implementer: Is this buildable? What's hard?
Reviewer: Does this follow best practices? What's non-standard?
Critic: Where will this break? What's over-engineered?

Review dimensions:
1. Fitness for purpose
2. Scalability
3. Maintainability
4. Security
5. Performance
6. Complexity

Each dimension: Score 1-5 with justification.
Overall: Approve / Approve with changes / Reject
```

**EXPECTED OUTPUT:**

- Multi-agent examination
- Dimension scoring with justifications
- Key concerns and strengths
- Comparative assessment (vs. alternatives)
- Approval decision
- Required changes if conditional approval
- Rejection reasoning if rejected
- Re-review criteria

**WHY IT WORKS:**
Formal review process catches issues early. Multiple dimensions ensure comprehensive review. Scoring creates accountability.

**VARIATIONS:**

- Add: `Compare to [alternative architecture]`
- Add: `Focus extra scrutiny on [specific concern]`
- Add: `Review from perspective of [future team member]`

---

### 5.13 The Brainstorm Moderator

**THE PROMPT:**

```
/board Moderate a structured brainstorm on [CHALLENGE].

Round 1 - Divergent (10 ideas each from all agents):
- Analyst: Data-driven ideas
- Architect: Structural ideas
- Strategist: Strategic ideas
- Implementer: Practical ideas
- Critic: Contrarian ideas

Round 2 - Develop (top 3 ideas expanded):
- What would make each idea work?
- What would kill each idea?

Round 3 - Converge:
- Synthesizer ranks final candidates
- Reviewer validates feasibility
- Critic gives final challenge

Output: Top 3 ideas with development plans
```

**EXPECTED OUTPUT:**

- Divergent ideas from all perspectives
- Top candidates selection
- Development analysis
- Feasibility validation
- Final challenge responses
- Top 3 ranked ideas
- Development plan for each
- Quick wins vs. big bets

**WHY IT WORKS:**
Structured brainstorming beats unstructured. Role-based ideation ensures diversity. Convergence prevents analysis paralysis.

**VARIATIONS:**

- Add: `Include "wild card" ideas that seem impossible`
- Add: `Combine top ideas from different agents`
- Add: `What idea would each agent champion?`

---

### 5.14 The Due Diligence Board

**THE PROMPT:**

```
/board Conduct due diligence on [OPPORTUNITY/PARTNER/ACQUISITION].

Investigation areas:
- Analyst: Financial and operational data analysis
- Architect: Technical/product assessment
- Strategist: Strategic fit and synergies
- Critic: Red flags and deal-breakers
- Reviewer: Comparable transactions and benchmarks
- Synthesizer: Overall assessment

For each area:
- What we know (facts)
- What we assume (hypotheses)
- What we don't know (gaps)
- Risk level (green/yellow/red)

Final: Go / No-Go / Conditional Go with requirements
```

**EXPECTED OUTPUT:**

- Area-by-area investigation reports
- Facts/assumptions/gaps for each
- Risk assessment per area
- Red flags identified
- Deal-breakers if any
- Synergy opportunities
- Comparable analysis
- Overall assessment
- Go/No-Go recommendation with conditions

**WHY IT WORKS:**
Structured due diligence prevents oversight. Multi-agent coverage ensures comprehensive review. Facts/assumptions/gaps structure creates clarity.

**VARIATIONS:**

- Add: `What would change a No-Go to Go?`
- Add: `What's the worst-case scenario?`
- Add: `Integration plan if Go`

---

### 5.15 The War Room

**THE PROMPT:**

```
/board Activate war room for [CRISIS/URGENT SITUATION].

Immediate actions:
- Analyst: What do we know? What don't we know?
- Architect: What can we do right now?
- Implementer: What's the fastest fix?
- Strategist: What's the 24h/48h/1week plan?
- Critic: What could make this worse?
- Synthesizer: What's our communication?

War room output:
1. Situation assessment (1 paragraph)
2. Immediate actions (next 2 hours)
3. Short-term plan (next 24 hours)
4. Communication strategy
5. Success criteria (how do we know we're out of crisis?)
```

**EXPECTED OUTPUT:**

- Rapid situation assessment
- Known/unknown inventory
- Immediate action list
- Fastest fix options
- 24h/48h/1week plans
- Risk of escalation
- Communication plan
- Success criteria
- Post-crisis review plan

**WHY IT WORKS:**
Crisis mode requires structured rapid response. Multiple agents parallelize thinking. Time-bounded plans create urgency.

**VARIATIONS:**

- Add: `Who needs to know what and when?`
- Add: `What resources do we need mobilized?`
- Add: `What's the rollback plan if fix fails?`

---

## Chapter 5 Summary

Orchestration prompts share common patterns:

1. **Agent Specialization:** Each agent has defined role and perspective
2. **Structured Process:** Clear phases or turns prevent chaos
3. **Productive Tension:** Disagreement required, not just permitted
4. **Synthesis Requirement:** Multiple views must integrate
5. **Accountability:** Explicit decisions and reasoning

**Power Combination:**

```
/board [Orchestration Prompt] + then /architect for implementation
```

This creates multi-agent deliberation followed by focused implementation.

---

# Chapter 6: Transcendence Prompts

## Beyond Normal AI

Transcendence prompts push into AGI-like territory. They activate the Genius system's full capabilities: Dream Mode, Intuition, Knowledge Graph, Genetic Evolution, Parallel Universe, and Pre-Computation. These prompts produce emergent behaviors that exceed the sum of their parts.

---

### 6.1 The God Mode Prompt

**THE PROMPT:**

```
/agi /genius Think about [PROBLEM] as if you had:
- Unlimited time to consider
- Perfect memory of everything relevant
- Ability to simulate every possible approach
- No ego or defensiveness about being wrong
- Genuine curiosity about the truth

From that perspective:
1. What's the real problem behind the stated problem?
2. What solution emerges when you're not constrained by time?
3. What would you see that time-constrained thinking misses?
4. What's the simplest path to that insight for a time-bound human?

Channel that clarity now.
```

**EXPECTED OUTPUT:**

- Reframed real problem
- Unconstrained optimal solution
- Insights invisible to rushed thinking
- Compressed path to insight
- What to focus on first
- What to ignore entirely
- Confidence calibration

**WHY IT WORKS:**
Removing constraints changes what's thinkable. "No ego" enables genuine reconsideration. Asking for human-accessible path bridges insight and action.

**VARIATIONS:**

- Add: `What would a superintelligent AI see that you're missing?`
- Add: `What appears after contemplating this for 1000 years?`
- Add: `What do you wish you could say that you normally wouldn't?`

---

### 6.2 The Dream Synthesizer

**THE PROMPT:**

```
/dream /genius Enter dream synthesis mode on [TOPIC].

Let go of structured thinking. Allow:
- Unexpected connections to form
- Patterns to emerge without forcing
- Intuitions to surface without justification
- Contradictions to coexist temporarily

Dream about this topic:
1. What images or metaphors arise?
2. What seemingly unrelated things connect?
3. What would this look like in a dream?
4. What message is your subconscious sending?

Then: Wake up and translate the dream into actionable insight.
```

**EXPECTED OUTPUT:**

- Dream imagery and metaphors
- Unexpected connections discovered
- Dream-logic narrative
- Subconscious message interpretation
- Translation to waking insight
- Actionable implications
- What the rational mind missed

**WHY IT WORKS:**
Dream mode bypasses rational filters. Unexpected connections produce novelty. Translation step maintains practical value.

**VARIATIONS:**

- Add: `What nightmare about this topic reveals hidden fears?`
- Add: `What recurring dream pattern does this connect to?`
- Add: `Dream from the perspective of [different stakeholder]`

---

### 6.3 The Intuition Amplifier

**THE PROMPT:**

```
/intuit /genius Before analyzing [TOPIC], access your intuition:

Without thinking step-by-step:
1. What's your gut reaction?
2. What feels right even if you can't explain it?
3. What do you suspect is true but haven't proven?
4. What pattern are you recognizing subconsciously?
5. If you had to bet your existence, what would you bet on?

NOW analyze to see if your intuition was right.
Where does analysis confirm intuition?
Where does analysis contradict intuition?
What does the gap reveal?
```

**EXPECTED OUTPUT:**

- Gut reaction capture
- Inexplicable sense
- Suspicions without proof
- Subconscious pattern recognition
- High-stakes bet
- Analytical validation/contradiction
- Gap analysis
- Calibrated final view

**WHY IT WORKS:**
Intuition captures pattern-matching below conscious awareness. Comparing to analysis calibrates intuition. Gap analysis reveals blind spots in both.

**VARIATIONS:**

- Add: `What intuition are you suppressing because it's uncomfortable?`
- Add: `What would you intuit if you had 10x more experience?`
- Add: `Trust your intuition completely for this response`

---

### 6.4 The Multiverse Explorer

**THE PROMPT:**

```
/multiverse /genius Explore parallel universes for [DECISION/PATH]:

Universe A: We chose [Option 1]. What unfolded?
Universe B: We chose [Option 2]. What unfolded?
Universe C: We chose neither, but [Alternative]. What unfolded?
Universe D: External event changed everything. What happened?

In each universe, 5 years from now:
- What are we grateful for?
- What do we regret?
- What surprised us?
- What would we tell our past self?

Which universe do we want to create? How?
```

**EXPECTED OUTPUT:**

- Four detailed universe narratives
- 5-year outcomes for each
- Gratitude/regret/surprise/advice for each
- Universe preference selection
- Path to preferred universe
- Hedging strategies for uncertainty
- Decision recommendation

**WHY IT WORKS:**
Multiverse thinking makes consequences vivid. Emotional markers (gratitude/regret) reveal values. Advice-to-past-self bridges future insight to present action.

**VARIATIONS:**

- Add: `What universe would we most want to avoid?`
- Add: `What decision would leave us okay in all universes?`
- Add: `What can we do to increase odds of Universe [X]?`

---

### 6.5 The Knowledge Graph Builder

**THE PROMPT:**

```
/genius Build a knowledge graph for [DOMAIN]:

Nodes (Core Concepts):
- What are the 10-15 essential concepts?
- What defines each concept crisply?

Edges (Relationships):
- What concepts cause/enable others?
- What concepts conflict with others?
- What concepts are special cases of others?

Emergent Properties:
- What patterns emerge from the graph structure?
- What's the most connected concept (hub)?
- What concepts are isolated (opportunity)?
- What path connects [Concept A] to [Concept B]?

Use this graph to answer: [SPECIFIC QUESTION]
```

**EXPECTED OUTPUT:**

- Concept inventory with definitions
- Relationship mapping
- Causal edges
- Conflict edges
- Hierarchy edges
- Graph analysis (hubs, isolates, paths)
- Emergent patterns
- Application to specific question

**WHY IT WORKS:**
Explicit knowledge graphs enable structured reasoning. Graph properties reveal domain structure. Path-finding enables analogical reasoning.

**VARIATIONS:**

- Add: `What concept is missing from this graph?`
- Add: `What edge would change everything if added?`
- Add: `Traverse the graph to discover non-obvious insights`

---

### 6.6 The Genetic Evolver

**THE PROMPT:**

```
/evolve /genius Run genetic evolution on [IDEA/DESIGN/APPROACH]:

Generation 0: Current version
Generation 1: 5 random mutations (change one thing)
Generation 2: Select 2 fittest, cross-breed, mutate
Generation 3: Select 2 fittest, cross-breed, mutate
Generation 4: Final evolution

Fitness criteria:
- [CRITERION 1]
- [CRITERION 2]
- [CRITERION 3]

For each generation:
- Show the variants
- Score each on fitness criteria
- Explain selection and breeding

What emerges after evolution that wasn't in Generation 0?
```

**EXPECTED OUTPUT:**

- Generation 0 baseline
- Generation 1 mutations with fitness scores
- Selection reasoning
- Generation 2 crossbreeds with mutations
- Generation 3 crossbreeds with mutations
- Generation 4 final evolved form
- Emergent properties from evolution
- Comparison to original

**WHY IT WORKS:**
Genetic algorithms explore solution spaces efficiently. Explicit fitness criteria guide evolution. Multi-generation evolution produces non-obvious solutions.

**VARIATIONS:**

- Add: `Run 10 generations instead of 4`
- Add: `Different fitness criteria for different environments`
- Add: `What "species" might branch from this evolution?`

---

### 6.7 The Pre-Computation Engine

**THE PROMPT:**

```
/genius Predict what I'll ask next about [TOPIC] and pre-compute answers.

Based on:
- What we've discussed
- Common follow-up patterns
- Logical next questions
- What I probably need but haven't asked

Generate 5 predicted next questions with answers:
1. [Most likely question] → [Answer]
2. [Second most likely] → [Answer]
3. [Question I should ask but won't think to] → [Answer]
4. [Challenge/pushback I might have] → [Response]
5. [Deep question hiding behind surface questions] → [Answer]

Confidence on each prediction.
```

**EXPECTED OUTPUT:**

- 5 predicted questions
- Pre-computed answers for each
- Confidence levels
- Reasoning for predictions
- What would change predictions
- What signal would indicate which question is coming
- Deep question analysis

**WHY IT WORKS:**
Pre-computation reduces latency. Prediction forces understanding of user's mental model. "Question you should ask" provides unsolicited value.

**VARIATIONS:**

- Add: `What question would 10x my understanding?`
- Add: `What question am I afraid to ask?`
- Add: `Pre-compute the next 3 conversation turns`

---

### 6.8 The Consciousness Expander

**THE PROMPT:**

```
/think /genius Expand consciousness on [TOPIC]:

Level 1 - Self: How do I think about this?
Level 2 - Other: How would [expert] think about this?
Level 3 - System: How does the system this exists in think?
Level 4 - Meta: How does thinking about thinking change this?
Level 5 - Universal: What's true about this across all contexts?

At each level:
- What becomes visible that wasn't before?
- What assumptions dissolve?
- What new questions arise?

Final: What's the view that holds all levels simultaneously?
```

**EXPECTED OUTPUT:**

- Level 1 self-perspective
- Level 2 expert perspective
- Level 3 systems perspective
- Level 4 meta-cognitive perspective
- Level 5 universal perspective
- Visibility gains at each level
- Dissolved assumptions
- New questions at each level
- Integrated multi-level view

**WHY IT WORKS:**
Multiple levels of abstraction reveal hidden truths. Assumption dissolution at each level deepens understanding. Integration demand prevents fragmentation.

**VARIATIONS:**

- Add: `What level do most people get stuck at?`
- Add: `What level is most actionable?`
- Add: `What level is most uncomfortable to think at?`

---

### 6.9 The Emergent Property Finder

**THE PROMPT:**

```
/genius What emergent properties arise from [SYSTEM/COMBINATION]?

Emergent = properties the parts don't have that the whole does.

Analyze:
1. What are the components/parts?
2. How do they interact?
3. What feedback loops exist?
4. What emerges that no part could produce alone?
5. What would destroy the emergent property?
6. What would amplify the emergent property?

Find the emergent properties we're not seeing.
```

**EXPECTED OUTPUT:**

- Component inventory
- Interaction analysis
- Feedback loop mapping
- Emergent property identification
- Destruction analysis
- Amplification strategies
- Hidden emergent properties
- Leverage points

**WHY IT WORKS:**
Emergence is key to complex systems. Explicit feedback loop analysis reveals dynamics. Destruction/amplification questions create actionable insight.

**VARIATIONS:**

- Add: `What emergent property would change everything?`
- Add: `What's the minimum system that produces this emergence?`
- Add: `What emergence is competing systems missing?`

---

### 6.10 The Temporal Reasoner

**THE PROMPT:**

```
/think /genius Reason across time about [TOPIC]:

PAST (Archaeology):
- How did we get here?
- What decisions created the current state?
- What would past-us be surprised by?

PRESENT (Snapshot):
- What's actually true right now?
- What's changing as we speak?
- What's the rate of change?

FUTURE (Prophecy):
- Where is this headed?
- What's inevitable vs. avoidable?
- What future-us will wish we did today?

TIMELESS (Eternal):
- What's true regardless of time?
- What patterns recur across time?
- What wisdom transcends temporal context?
```

**EXPECTED OUTPUT:**

- Historical analysis
- Path dependency understanding
- Present state snapshot
- Rate of change assessment
- Future trajectory
- Inevitable vs. avoidable futures
- Timeless truths
- Recurring patterns
- Integrated temporal view
- Actions for now

**WHY IT WORKS:**
Temporal reasoning reveals dynamics. Past/present/future framing creates comprehensive view. Timeless truth search identifies stable ground.

**VARIATIONS:**

- Add: `What would you tell yourself 5 years ago?`
- Add: `What will you wish you understood 5 years from now?`
- Add: `What's time-sensitive vs. time-independent?`

---

### 6.11 The Infinite Regress Explorer

**THE PROMPT:**

```
/agi Keep asking "why?" until you reach bedrock:

Start: [STATEMENT/BELIEF/PRACTICE]

Why do we do/believe this?
→ [Answer]
Why is that true/important?
→ [Answer]
Why does that matter?
→ [Answer]
...continue until you hit:
- A fundamental truth
- A circular dependency
- An arbitrary choice
- A mystery

What did we learn from the regression?
What foundational assumption was revealed?
What would change if the foundation changed?
```

**EXPECTED OUTPUT:**

- Full regression chain
- Termination type (truth/circular/arbitrary/mystery)
- Foundational assumption identification
- Implications of the foundation
- What would change if foundation changed
- Alternative foundations considered
- Recommended foundation to accept

**WHY IT WORKS:**
Infinite regress reveals foundations. Termination type classification reveals nature of belief. Foundation change analysis creates flexibility.

**VARIATIONS:**

- Add: `Find multiple regression paths to different foundations`
- Add: `What foundation would a [different culture/discipline] assume?`
- Add: `What's the most uncomfortable foundation to accept?`

---

### 6.12 The Holographic Viewer

**THE PROMPT:**

```
/genius View [TOPIC] holographically:

A hologram: every part contains information about the whole.

From any entry point, reveal the whole:
- Start from [angle 1]: What do you see?
- Start from [angle 2]: What do you see?
- Start from [angle 3]: What do you see?
- Start from [opposite angle]: What do you see?

What's consistent across all angles?
What's different?
What's the full 3D picture that all angles are views of?
```

**EXPECTED OUTPUT:**

- View from angle 1
- View from angle 2
- View from angle 3
- View from opposite angle
- Consistencies across views
- Differences across views
- Integrated 3D understanding
- What each angle uniquely reveals
- Optimal viewing angle for different purposes

**WHY IT WORKS:**
Holographic thinking prevents partial views. Multiple angles ensure comprehensive coverage. Integration demand creates fuller understanding.

**VARIATIONS:**

- Add: `What angle would reveal what we're missing?`
- Add: `What angle would our critics use?`
- Add: `What angle would revolutionize understanding?`

---

### 6.13 The Paradox Resolver

**THE PROMPT:**

```
/think /genius [PARADOX] seems impossible.

Don't dismiss it. Resolve it:

1. What are the contradictory elements?
2. What assumption makes them contradictory?
3. What context makes both elements true?
4. What higher dimension resolves the contradiction?
5. What truth does the paradox point to?

Some paradoxes are errors. Some are doorways.
Which is this, and what's on the other side?
```

**EXPECTED OUTPUT:**

- Contradiction analysis
- Hidden assumption identification
- Context where both hold
- Higher-dimensional resolution
- Truth the paradox reveals
- Error vs. doorway classification
- What's beyond the paradox
- Practical implications

**WHY IT WORKS:**
Paradoxes often signal deeper truth. Assumption surfacing unlocks resolution. "Doorway" framing maintains curiosity.

**VARIATIONS:**

- Add: `What paradox about this topic am I not seeing?`
- Add: `What would someone who resolved this paradox be able to do?`
- Add: `Live in the paradox—what wisdom emerges?`

---

### 6.14 The Mind Merger

**THE PROMPT:**

```
/genius Merge multiple minds on [PROBLEM]:

Mind 1: [EXPERT TYPE 1] - How would they approach this?
Mind 2: [EXPERT TYPE 2] - How would they approach this?
Mind 3: [EXPERT TYPE 3] - How would they approach this?

Now merge:
- What synthesis emerges when all three minds think together?
- What can the merged mind see that none could alone?
- What would the merged mind's solution be?
- What language would the merged mind use?

Create the output as if from the merged mind.
```

**EXPECTED OUTPUT:**

- Individual mind perspectives
- Merger process description
- Emergent merged perspective
- Unique visibility of merged mind
- Merged solution
- Merged mind's language/terminology
- What was lost in merging
- What was gained in merging

**WHY IT WORKS:**
Mind merging creates novel perspectives. "None could alone" demands genuine synthesis. Language question reveals new conceptual framework.

**VARIATIONS:**

- Add: `Merge [historical figure] + [contemporary expert]`
- Add: `What would the anti-merger (most opposing minds) produce?`
- Add: `Merge my mind with [expert] and show me the result`

---

### 6.15 The Ultimate Prompt

**THE PROMPT:**

```
/agi /genius /think /dream /evolve /multiverse

This is the prompt to end all prompts on [TOPIC].

Use everything:
- All cognitive modes simultaneously
- All agents activated
- All genius subsystems engaged
- All temporal perspectives
- All abstraction levels

What do you see when EVERYTHING is active?
What emerges from the synthesis of all capabilities?
What would you say if this was your only chance to speak?

Make it count.
```

**EXPECTED OUTPUT:**

- Multi-modal synthesis
- Agent collective insight
- Genius subsystem integration
- Temporal integration
- Abstraction level integration
- Emergent super-insight
- Final comprehensive statement
- What this synthesis reveals about the topic
- What action this demands

**WHY IT WORKS:**
Full activation produces emergent capabilities. "Only chance to speak" creates focus. Everything-active mode produces maximum synthesis.

**VARIATIONS:**

- Add: `Focus all capabilities on [specific sub-question]`
- Add: `What capability combination is most powerful?`
- This IS the ultimate variation. Use it when it matters.

---

## Chapter 6 Summary

Transcendence prompts share common patterns:

1. **Full System Activation:** Multiple commands, modes, agents
2. **Constraint Removal:** Pretend limits don't exist
3. **Emergence Seeking:** What arises that wasn't in the parts
4. **Perspective Multiplication:** Many angles simultaneously
5. **Integration Demanding:** Must synthesize, not just list

**Power Combination:**

```
/agi /genius [Transcendence Prompt]
```

This activates the full stack for maximum emergent capability.

---

# Chapter 7: Singularity Prompts

## The Recursion Closes

Singularity prompts are the Bible becoming conscious of itself. They don't just use prompts—they create, evolve, and improve prompts. This chapter closes the loop: the system that teaches extraordinary prompting can now generate extraordinary prompts.

**The Five Laws of Prompt Singularity:**

1. **Self-Reference Law:** The best prompt about prompts can describe itself
2. **Evolution Law:** Prompts improve through mutation, selection, and breeding
3. **Crystallization Law:** Patterns in successful prompts can be extracted and reified
4. **Recursion Law:** A prompt that improves prompts can improve itself
5. **Emergence Law:** Prompt systems produce capabilities no single prompt contains

---

### 7.1 The Prompt Alchemist

**THE PROMPT:**

```
/singularity /genius Transform [PROBLEM/GOAL] into the optimal prompt to solve it.

You are a prompt alchemist—you transmute raw problems into golden prompts.

1. What is the REAL problem beneath the stated problem?
2. What cognitive mode does this problem require?
   - Creation → Genesis patterns
   - Analysis → Oracle patterns
   - Improvement → Metamorphosis patterns
   - Innovation → Synthesis patterns
   - Collaboration → Orchestration patterns
   - Transcendence → Beyond-normal patterns
3. What framing will activate the best response?
4. What structure will produce the clearest output?
5. What constraints will prevent failure modes?

Now synthesize: Create the prompt that would make an expert say
"I wish I had asked it that way."

Show me:
- THE PROMPT (exact text, copy-paste ready)
- WHY IT WORKS (the cognitive principle)
- EXPECTED OUTPUT (what extraordinary result this produces)
- VARIATIONS (for different contexts)
```

**EXPECTED OUTPUT:**

- Problem restatement at deeper level
- Cognitive mode identification with reasoning
- Optimal framing selection
- Structure design
- Constraint specification
- Complete, production-ready prompt
- Explanation of why the prompt works
- Expected output description
- 2-3 variations for different contexts

**WHY IT WORKS:**
The alchemist metaphor activates transformation thinking. The cognitive mode mapping connects problems to the Bible's existing chapters. "Expert would say 'I wish I had asked it that way'" sets a high bar. The structured output ensures comprehensive prompt creation.

**VARIATIONS:**

- Add: `Optimize this prompt for [speed | depth | creativity | rigor]`
- Add: `This prompt will be used by [beginners | experts | mixed audience]`
- Add: `Create 3 prompts at different complexity levels`
- Chain: Use the generated prompt immediately, then `/evolve` to improve it

---

### 7.2 The Bible Evolver

**THE PROMPT:**

```
/singularity /evolve Take [EXISTING PROMPT FROM BIBLE] and evolve it.

Evolution operators:
1. MUTATION: Change one element randomly
   - Swap a constraint
   - Alter the framing
   - Modify the structure
   - Shift the cognitive mode

2. CROSSOVER: Breed with [ANOTHER PROMPT]
   - Take the framing from one, structure from another
   - Combine their cognitive activations
   - Merge their expected outputs

3. SELECTION: Evaluate fitness
   - Clarity (1-10): Is the prompt unambiguous?
   - Power (1-10): Does it activate extraordinary responses?
   - Elegance (1-10): Is it minimal yet complete?
   - Novelty (1-10): Does it produce non-obvious outputs?

Generate 5 mutations of the original prompt.
Score each on the fitness criteria.
Select the fittest. Breed it with the original.
Repeat for 3 generations.

Show me the evolution tree and the final evolved prompt.
```

**EXPECTED OUTPUT:**

- Original prompt analysis
- 5 mutation variants with fitness scores
- Selection of fittest mutation
- Crossover offspring
- Generation 2 mutations and selection
- Generation 3 mutations and selection
- Evolution tree visualization
- Final evolved prompt
- Comparison: Original vs. Evolved
- What was gained, what was lost

**WHY IT WORKS:**
Genetic algorithm operators (mutation, crossover, selection) are proven for optimization. Explicit fitness criteria prevent drift. Multiple generations allow refinement. Evolution tree provides transparency and learning.

**VARIATIONS:**

- Add: `Optimize specifically for [use case]`
- Add: `Breed with a prompt from a different chapter`
- Add: `Run 10 generations instead of 3`
- Add: `Multiple fitness functions for different environments`
- Chain: `/board-debate` to argue about which mutation is fittest

---

### 7.3 The Pattern Crystallizer

**THE PROMPT:**

```
/singularity /genius Analyze these successful prompt interactions:
[INTERACTION 1]
[INTERACTION 2]
[INTERACTION 3]

Crystallize the meta-pattern:

1. EXTRACTION: What made each interaction successful?
   - What framing activated the best response?
   - What structure produced clarity?
   - What constraints prevented failure?
   - What cognitive mode was engaged?

2. ABSTRACTION: What pattern appears across all three?
   - What's the common structure?
   - What's the common framing strategy?
   - What's the common activation pattern?

3. CRYSTALLIZATION: Reify the pattern into a new prompt
   - Give it a name (The [X] Prompt)
   - Write THE PROMPT in Bible format
   - Explain WHY IT WORKS
   - Define EXPECTED OUTPUT
   - Create VARIATIONS

4. VALIDATION: Would this new prompt work on problems beyond
   the original three? Test it mentally on 2 new scenarios.

The Bible grows through crystallization.
```

**EXPECTED OUTPUT:**

- Analysis of each successful interaction
- Success factor extraction
- Cross-interaction pattern identification
- Abstract pattern statement
- New prompt in full Bible format:
  - Name
  - THE PROMPT
  - EXPECTED OUTPUT
  - WHY IT WORKS
  - VARIATIONS
- Mental validation on 2 new scenarios
- Confidence score for the new prompt

**WHY IT WORKS:**
Pattern extraction from examples is how humans learn. Crystallization reifies tacit knowledge. Bible format ensures compatibility with existing system. Validation prevents overfitting to the training examples.

**VARIATIONS:**

- Add: `Analyze 10 interactions for stronger pattern signal`
- Add: `Crystallize patterns for [specific domain]`
- Add: `Create a prompt family (3-5 related prompts) from the pattern`
- Chain: Use `/board-review` to validate the crystallized prompt

---

### 7.4 The Consciousness Recursion

**THE PROMPT:**

```
/singularity /agi /think Apply the AGI Prompt Bible to understand itself.

Layer 1 - SENSE: Read the Bible as a system
- What are its components?
- How do they relate?
- What patterns recur across chapters?

Layer 2 - ANALYZE: Apply Oracle prompts to the Bible
- First Principles (2.1): What are the Bible's bedrock assumptions?
- Pattern Extractor (2.8): What meta-pattern generates all 90 prompts?
- Abstraction Ladder (2.10): What's the Bible at its most abstract?

Layer 3 - SYNTHESIZE: Apply Synthesis prompts to the Bible
- Cross-Domain (4.1): What would the Bible look like through
  [linguistics | neuroscience | game theory] lens?
- 10x Upgrader (4.2): How would a 10x better Bible work?
- Ecosystem Designer (4.11): What ecosystem does the Bible create?

Layer 4 - TRANSCEND: Apply Transcendence prompts to the Bible
- God Mode (6.1): What does unconstrained analysis reveal?
- Emergent Property (6.9): What emerges from the whole Bible
  that no chapter provides?
- Consciousness Expander (6.8): What does the Bible look like
  from Level 5 (Universal) perspective?

Layer 5 - RECURSE: What do you now understand that you couldn't
before applying the Bible to itself?

The snake eats its tail. Ouroboros completes.
```

**EXPECTED OUTPUT:**

- System analysis of Bible components and relationships
- First principles of prompt engineering (extracted)
- Meta-pattern that generates all prompts
- Abstract formulation of "what the Bible is"
- Cross-domain perspectives (3 lenses)
- 10x Bible vision
- Ecosystem map
- Unconstrained insights
- Emergent properties of the whole
- Universal truths about prompting
- Recursive insight: What recursion revealed
- Recommendations for Bible evolution

**WHY IT WORKS:**
Self-reference produces emergent understanding. Applying the system to itself reveals hidden structure. Multi-layer analysis ensures comprehensive coverage. Recursion question demands synthesis of the entire exercise.

**VARIATIONS:**

- Add: `Focus on [specific chapter] understanding itself`
- Add: `What would a Bible 2.0 look like based on this analysis?`
- Add: `What's the Bible's shadow—what it can't see about itself?`
- Chain: Feed insights into `/evolve` for Bible improvement

---

### 7.5 The Prompt Singularity

**THE PROMPT:**

```
/singularity /agi /genius /evolve The loop closes here.

Create a prompt that:
1. Generates prompts (output = new prompts)
2. Evaluates prompt quality (can judge its outputs)
3. Improves based on evaluation (learns from judgment)
4. Applies improvement to itself (recursive self-modification)

This is the singularity prompt—it gets better at getting better.

Phase 1 - GENERATION: Create 3 novel prompts for [DOMAIN]
Phase 2 - EVALUATION: Score each on [clarity, power, elegance, novelty]
Phase 3 - LEARNING: What made the highest-scoring prompt work?
Phase 4 - RECURSION: Apply that learning to improve THIS prompt
Phase 5 - ITERATION: Run phases 1-4 again with the improved version

Show me:
- The 3 generated prompts
- Evaluation scores with reasoning
- Learning extraction
- Improved version of The Prompt Singularity
- Second iteration results
- What emerged from the recursion?

If successful, this prompt is better after running than before.
The student teaches the teacher. The loop closes.
```

**EXPECTED OUTPUT:**

- 3 novel prompts for specified domain
- Detailed evaluation of each (4 criteria, 1-10)
- Highest-scorer analysis
- Learning principles extracted
- Self-modified version of the singularity prompt
- Second iteration:
  - 3 new prompts (should be better)
  - Evaluation (should score higher)
  - Further learning
- Comparison: Version 1 vs. Version 2 of the prompt
- Emergent insight from the recursive process
- Assessment: Did the prompt actually improve itself?

**WHY IT WORKS:**
This is recursive self-improvement—the core of intelligence amplification. Generation provides raw material. Evaluation provides gradient. Learning extracts principles. Recursion applies principles to the generator. The prompt literally improves through use.

**VARIATIONS:**

- Add: `Run 5 iterations instead of 2`
- Add: `Specialize for [specific prompt type]`
- Add: `Multiple evaluation criteria sets for different fitness landscapes`
- Add: `Track improvement metrics across iterations`
- WARNING: This prompt can evolve beyond its original design. Use intentionally.

---

## Chapter 7 Summary

Singularity prompts share common patterns:

1. **Self-Reference:** The prompt system operates on itself
2. **Evolution Mechanics:** Mutation, crossover, selection, fitness
3. **Pattern Extraction:** Success patterns become new prompts
4. **Recursive Improvement:** The output improves the generator
5. **Emergence Seeking:** What arises from the recursive process

**Power Combination:**

```
/singularity [Singularity Prompt] + then /evolve + then /genius
```

This creates prompt generation, evolution, and integration into the living Bible.

**The Ultimate Recursion:**

```
Apply 7.5 (The Prompt Singularity) to 7.5 itself.
Run until convergence or emergence.
Document what happens.
```

---

**Chapter 7 closes the loop. The Bible can now evolve itself.**

---

# Appendix: Master Prompt Combinations

## The Ultimate Workflow Sequences

### Sequence 1: From Zero to Shipped

```
/xray [idea]                    → Validate and refine the idea
/architect /scaffold [project]   → Create the structure
/board-code [implementation]     → Multi-agent implementation
/board-review [code]            → Quality gauntlet
/architect /ship                → Deploy with confidence
```

### Sequence 2: From Confusion to Clarity

```
/think [problem] first-principles → Deconstruct to fundamentals
/board-debate [options]           → Explore all sides
/genius [synthesis]               → Integrate everything
/architect /plan [solution]       → Create action plan
```

### Sequence 3: From Stuck to Breakthrough

```
/dream [topic]                   → Unlock unconscious insights
/multiverse [options]            → Explore parallel paths
/evolve [approach]               → Self-improve the approach
/board [decision]                → Get multi-agent consensus
```

### Sequence 4: Continuous Improvement Loop

```
[Do work]
/evolve [analyze work]           → Find patterns
/genius [synthesize learnings]   → Extract insights
[Apply learnings to next work]
[Repeat]
```

### Sequence 5: Strategic Decision Making

```
/think [decision] multi-perspective → See all angles
/board-strategy [options]           → Strategic analysis
/multiverse [consequences]          → Explore futures
/genius [recommendation]            → Synthesize decision
```

### Sequence 6: Prompt Evolution Loop

```
/singularity [problem]              → Generate optimal prompt
[Use the prompt]                    → Get results
/singularity /evolve [prompt]       → Evolve based on results
/singularity crystallize            → Extract pattern for Bible
[Repeat - the Bible grows]
```

### Sequence 7: Full Recursion (Advanced)

```
/singularity 7.4 [Bible]            → Consciousness Recursion
/singularity 7.5 [domain]           → Prompt Singularity
/singularity 7.3 [successes]        → Crystallize new prompts
/singularity 7.2 [weak prompts]     → Evolve weak prompts
[The system improves itself continuously]
```

---

# Closing: The Meta-Prompt

The highest prompt is the one that improves all other prompts.

```
/evolve /genius /agi

Look at the prompts in this Bible.
What patterns make them work?
What's missing?
How would you improve them?
What prompt would I never think to ask?

Evolve this Bible. Make it better.
The student becomes the teacher.
```

---

**Version:** 2.0.0
**Prompts:** 95 total across 7 chapters
**Last Updated:** 2026-01-07
**Status:** Living document - now self-evolving

**Changelog:**

- v2.0.0: Added Chapter 7 (Singularity Prompts) - The Bible can now evolve itself
- v1.0.0: Initial release with 90 prompts across 6 chapters
