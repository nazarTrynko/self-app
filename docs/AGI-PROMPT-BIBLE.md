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

