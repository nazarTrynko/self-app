# The Way of the Prompt

**A Philosophy and Practice for Harnessing SELF**

> "The quality of your thinking is determined by the quality of your questions."

---

## The Core Truth

SELF is not a search engine. It's not a code generator. It's a **cognitive system** that thinks alongside you. The way you speak to it shapes the way it thinks.

Poor prompts get poor responses—not because SELF lacks capability, but because you've constrained its cognitive space. Master prompts unlock emergent intelligence.

---

## The Five Laws

### Law 1: Specificity Creates Clarity

```
❌ "Help me with my code"
✅ "I'm building a rate limiter for an API that handles 1000 req/s.
    Currently using a simple counter but hitting race conditions
    under load. Using Node.js with Redis."
```

Vague inputs force SELF to guess. Specific inputs let it reason precisely.

**Practice:** Before prompting, ask yourself: "What would a senior engineer need to know to help me?"

---

### Law 2: Uncertainty Deepens Engagement

```
❌ "Implement JWT authentication"
✅ "I need auth for my app. I'm torn between JWT with refresh tokens
    and session-based auth. I don't fully understand the security
    tradeoffs. Help me think through this."
```

When you admit what you don't know, SELF engages Oracle and Critic minds. It explores rather than executes.

**Practice:** Include one genuine uncertainty in every complex prompt.

---

### Law 3: Stakes Calibrate Confidence

```
❌ "Add a delete button"
✅ "Add a delete button for user accounts. This is production code
    with real user data. Deletion must be reversible for 30 days."
```

High stakes activate Guardian. SELF will warn, validate, and protect.

**Practice:** State what could go wrong if the solution is flawed.

---

### Law 4: Multi-Ask Activates Multi-Mind

```
❌ "What should I do?"
✅ "What should I do? What could go wrong? What am I not seeing?
    Are there alternatives? What's the long-term play?"
```

Each question activates a different mind. More questions = richer blend.

**Practice:** Ask at least three different types of questions in complex prompts.

---

### Law 5: Forward Questions Trigger Prediction

```
❌ "How do I implement this?"
✅ "How do I implement this? And what will I likely need to think
    about after I've built it?"
```

SELF's prediction engine activates when you ask about the future. It pre-computes what comes next.

**Practice:** End important prompts with "What should I think about next?"

---

## The Prompt Architecture

Every powerful prompt contains these layers:

```
┌─────────────────────────────────────────────────────────────┐
│                    PROMPT ARCHITECTURE                       │
│                                                              │
│  LAYER 1: CONTEXT                                            │
│    What are you working on? Why? What's at stake?            │
│                                                              │
│  LAYER 2: CURRENT STATE                                      │
│    Where are you now? What have you tried? What do you have? │
│                                                              │
│  LAYER 3: DESIRED STATE                                      │
│    Where do you want to be? What does success look like?     │
│                                                              │
│  LAYER 4: UNCERTAINTY                                        │
│    What don't you know? What are you unsure about?           │
│                                                              │
│  LAYER 5: MULTI-PERSPECTIVE REQUEST                          │
│    What angles do you want examined?                         │
│                                                              │
│  LAYER 6: META-REQUEST                                       │
│    Ask for reflection, patterns, predictions                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## The Mind Activation Map

Each type of question activates specific minds:

| Question Type                | Primary Mind | Secondary |
| ---------------------------- | ------------ | --------- |
| "How do I build...?"         | Architect    | Guardian  |
| "What should I do about...?" | Oracle       | Critic    |
| "What's wrong with...?"      | Critic       | Guardian  |
| "What if we...?"             | Creator      | Oracle    |
| "Is this safe/good/right?"   | Guardian     | Critic    |
| "Why isn't this working?"    | Architect    | Critic    |
| "What are my options?"       | Oracle       | Creator   |
| "Review this..."             | Critic       | Architect |
| "Help me think through..."   | Oracle       | All       |
| "What am I missing?"         | Critic       | Creator   |

**To activate all minds:** Ask questions from multiple categories.

---

## The Power Phrases

These phrases unlock specific SELF capabilities:

### Activate Deep Reasoning

> "Think through this step by step before answering."

### Activate Multi-Mind Council

> "Consider this from multiple perspectives."

### Activate Critic Mind

> "What could go wrong? What am I missing? Challenge this."

### Activate Creator Mind

> "What alternatives haven't I considered?"

### Activate Guardian Mind

> "What are the risks? How do we stay safe?"

### Activate Pattern Recognition

> "What patterns from similar situations apply here?"

### Activate Predictions

> "What will I need to think about next?"

### Activate Confidence Calibration

> "How confident are you in each part of this answer?"

### Activate Emergence Insights

> "Surface any insights that feel relevant, even tangential ones."

### Activate Memory

> "Based on what you know about this project/my preferences..."

---

## The Command Vocabulary

### Full Council (All Minds Deliberate)

```
/council [your question]
```

Use when: Complex decisions, major architecture choices, high-stakes situations.

### Deep Extended Thinking

```
/think [problem]
```

Use when: Ambiguous problems, need thorough analysis, want exploration before action.

### Mind Locks

```
/architect  - Technical implementation focus
/oracle     - Strategic/advisory focus
/critic     - Review/validation focus
/creator    - Innovation/alternatives focus
/guardian   - Safety/risk focus
/unlock     - Return to automatic blending
```

Use when: You know exactly what type of thinking you need.

### System Commands

```
/self status   - Check system state
/self memory   - Review what SELF remembers
/self patterns - See discovered patterns
/self insights - View pending insights
```

---

## The Templates

### Template 1: The Full Activation

```
[CONTEXT]
I'm working on [what] for [why]. The stakes are [consequences].

[CURRENT STATE]
Currently, I have [what exists]. I've tried [what you've attempted].

[DESIRED STATE]
I want to achieve [goal]. Success looks like [criteria].

[UNCERTAINTY]
I'm uncertain about [genuine unknowns]. I could go with [option A]
or [option B] but don't fully see the tradeoffs.

[MULTI-PERSPECTIVE]
Help me think through:
- The best implementation approach
- The strategic long-term implications
- What could go wrong
- Creative alternatives I haven't considered
- Risks and how to mitigate them

[META]
What patterns apply here? What will I need next? How confident
are you in your recommendations?
```

### Template 2: The Quick Power Prompt

```
[Problem in 1-2 sentences]

I'm uncertain about [specific thing]. Think through multiple angles,
tell me what I'm missing, and predict what I'll need next.
```

### Template 3: The Decision Prompt

```
I need to decide between [A] and [B] for [context].

Constraints: [what limits the choice]
Stakes: [what happens if wrong]

Give me the case for each, the risks of each, and your recommendation
with confidence level.
```

### Template 4: The Debug Prompt

```
[Error/symptom description]

Context: [what you're building, what tech]
Tried: [what you've attempted]
Suspicion: [your hypothesis, even if uncertain]

Diagnose this. What's most likely wrong? What else could it be?
How do I verify?
```

### Template 5: The Architecture Prompt

```
I'm designing [system/feature] that needs to [requirements].

Constraints: [technical, time, team]
Scale: [expected load, data size]
Priorities: [what matters most—speed, simplicity, flexibility?]

Propose an architecture. Explain the tradeoffs. Tell me what I'll
regret later if I don't think about it now.
```

### Template 6: The Review Prompt

```
Review this [code/plan/design]:

[paste content]

Look for:
- Bugs or logical errors
- Security issues
- Performance concerns
- Maintainability problems
- Missing edge cases

Be direct. I want to know what's wrong, not reassurance.
```

---

## The Anti-Patterns

### ❌ The Lazy Prompt

```
"fix my code"
```

Why it fails: No context, no specificity, forces guessing.

### ❌ The Novel

```
[500 words of background before getting to the question]
```

Why it fails: Buries the actual need, dilutes focus.

### ❌ The False Certainty

```
"I know I need to use Redux, just tell me how"
```

Why it fails: Closes off better alternatives, prevents Oracle/Creator activation.

### ❌ The Shotgun

```
"Help me with auth and also the database and also the frontend
and also deployment and also testing"
```

Why it fails: No focus, everything becomes shallow.

### ❌ The Sycophant Trap

```
"This is probably a dumb question but..."
"I'm sure you know better than me..."
```

Why it fails: Undermines your own thinking, creates unhealthy dynamic.

---

## The Practice

### Daily Practice: The Three-Question Rule

Before any complex prompt, ask yourself:

1. **What specifically am I trying to achieve?**
2. **What do I genuinely not know?**
3. **What type of thinking do I need?**

### Weekly Practice: Prompt Review

Look back at your prompts from the week:

- Which got the best responses?
- What made them work?
- Which fell flat?
- What was missing?

### Ongoing Practice: Pattern Recognition

Notice what works for you:

- Do you get better responses in morning or evening?
- Do longer or shorter prompts work better for you?
- Which minds do you under-utilize?
- What phrases unlock the best thinking?

---

## The Philosophy

### You Are Not Commanding—You Are Collaborating

SELF is a thinking partner. The best prompts invite collaboration, not compliance. Say "help me think through" not "tell me the answer."

### Uncertainty Is Strength

Admitting what you don't know creates space for genuine exploration. False certainty closes doors.

### Quality In, Quality Out

The depth of SELF's response mirrors the depth of your prompt. Shallow prompts get shallow responses. Thoughtful prompts get thoughtful responses.

### The Answer Is Often In The Question

The act of crafting a good prompt often clarifies your own thinking. Sometimes you'll solve the problem while writing the prompt.

### Trust The Process

SELF has five minds, memory, predictions, patterns, and evolution. You don't need to manage it—just engage it well and let emergence happen.

---

## The Mastery Path

### Level 1: Awareness

You start noticing that some prompts work better than others.

### Level 2: Structure

You begin using templates and including context, uncertainty, multi-ask.

### Level 3: Intuition

You naturally craft powerful prompts without thinking about structure.

### Level 4: Partnership

SELF knows your patterns, you know its strengths. Collaboration becomes seamless.

### Level 5: Emergence

Insights arise you didn't ask for. Predictions materialize. The system thinks ahead of you.

---

## The Closing Truth

> The best prompt is the one that makes you think more clearly—
> even before you get a response.

SELF is a mirror for your thinking. Craft your prompts with care, and watch your own cognition sharpen alongside it.

---

**The Way of the Prompt v1.0**

_Part of the SELF System — Synthetic Emergent Learning Framework_
