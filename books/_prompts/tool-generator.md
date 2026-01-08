# Reflection Tool Generator Prompt

## Purpose
Use this prompt to create new mini-reflection tools for book landing pages, inspired by the "perspectives" design pattern—quick, powerful exercises that deliver immediate value.

---

## Tool Design Philosophy

Great reflection tools share these qualities:

1. **Fast** — Complete in 30-90 seconds
2. **Immediate Value** — Insight happens during the exercise
3. **Personal** — User provides their own content
4. **Visual** — Results are shown, not just told
5. **Shareable** — Users want to tell others about it
6. **Gateway** — Creates hunger for the full methodology

---

## The Tool Anatomy

```
┌─────────────────────────────────────────┐
│ TOOL CARD                               │
├─────────────────────────────────────────┤
│ ┌─────┐                                 │
│ │ 🎯  │ Tool Name                       │
│ └─────┘ Time: 30 seconds                │
├─────────────────────────────────────────┤
│                                         │
│ Brief description of what user will     │
│ discover (1-2 sentences max)            │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│ [INTERACTIVE ELEMENT]                   │
│ - Input field(s)                        │
│ - Buttons/toggles                       │
│ - Sliders/selectors                     │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│ [RESULT DISPLAY]                        │
│ - Personalized insight                  │
│ - Visual representation                 │
│ - "Aha" moment delivery                 │
│                                         │
└─────────────────────────────────────────┘
```

---

## Tool Generator Prompt Template

```
I need a new reflection tool for my book landing page.

## Book Context
- **Book Title**: [Title]
- **Core Theme**: [What transformation does the book enable?]
- **Target Audience**: [Who uses this?]

## Tool Requirements
- **Time to Complete**: [30/45/60/90 seconds]
- **Core Insight**: [What should the user discover?]
- **Interaction Type**: [Choose one or combine]
  - Text input (user writes something)
  - Selection (user chooses from options)
  - Slider (user indicates a position)
  - Drag-and-drop (user arranges elements)
  - Toggle (user switches between views)
  - Timed response (user answers quickly)

## Design Constraints
- Must work on mobile
- Single-file implementation (HTML/CSS/JS inline)
- No external dependencies
- Accessible (keyboard navigation, screen readers)
- Follows existing design system (see rewriting-your-self.html)

## Output
Please generate:
1. Tool concept with clear user flow
2. Complete HTML/CSS/JS implementation
3. Suggested placement in existing page structure
4. Variations for A/B testing
```

---

## Tool Pattern Library

### Pattern 1: The Binary Revealer
**Interaction**: User makes quick binary choices
**Example**: "Story Type" tool (redemptive vs contamination)

```html
<div class="binary-tool">
    <div class="binary-question active" data-q="1">
        <p class="question">A friend cancels plans. You think:</p>
        <div class="binary-options">
            <button data-value="a">They probably need rest</button>
            <button data-value="b">They don't value me</button>
        </div>
    </div>
    <!-- More questions... -->
    <div class="binary-result">
        <h4 class="result-type"></h4>
        <p class="result-desc"></p>
    </div>
</div>
```

**Best For**: Revealing patterns, identifying tendencies, binary categorization

---

### Pattern 2: The Reframe Engine
**Interaction**: User inputs negative thought, system reframes it
**Example**: "Voice Detector" tool

```html
<div class="reframe-tool">
    <input type="text" placeholder="What does your inner critic say?">
    <button class="reframe-btn">Reveal Positive Intention</button>
    <div class="reframe-result">
        <span class="reframe-label">Positive Intention</span>
        <p class="reframe-text"></p>
    </div>
</div>
```

**Best For**: Cognitive reframes, perspective shifts, meaning-making

---

### Pattern 3: The Spectrum Mapper
**Interaction**: User places themselves on a slider, system reveals meaning
**Example**: "Timeline Emotion" tool

```html
<div class="spectrum-tool">
    <div class="spectrum-labels">
        <span>Beginning</span>
        <span>Now</span>
    </div>
    <input type="range" min="0" max="100" value="50">
    <div class="spectrum-markers"></div>
    <div class="spectrum-insight">
        <span class="insight-label">Your Arc</span>
        <p class="insight-text"></p>
    </div>
</div>
```

**Best For**: Life timelines, emotional ranges, position awareness

---

### Pattern 4: The Triple Toggle
**Interaction**: User sees same content through different lenses
**Example**: "Narrative Prism" demo

```html
<div class="toggle-tool">
    <div class="toggle-scenario">
        <p>The Situation</p>
        <p class="scenario-text">[Fixed scenario text]</p>
    </div>
    <div class="toggle-buttons">
        <button data-lens="a" class="active">Lens A</button>
        <button data-lens="b">Lens B</button>
        <button data-lens="c">Lens C</button>
    </div>
    <div class="toggle-result">
        <p class="result-text"></p>
    </div>
</div>
```

**Best For**: Perspective demonstration, showing transformation, before/after

---

### Pattern 5: The Quick Map
**Interaction**: User names/labels elements that get visualized
**Example**: "Inner Voices" constellation

```html
<div class="map-tool">
    <div class="map-inputs">
        <input placeholder="Voice 1 name">
        <input placeholder="Voice 2 name">
        <input placeholder="Voice 3 name">
    </div>
    <button class="map-generate">Map My Voices</button>
    <div class="map-visual">
        <!-- Canvas or positioned divs -->
    </div>
</div>
```

**Best For**: Relationship mapping, system visualization, parts work

---

### Pattern 6: The Timed Prompt
**Interaction**: User responds to prompts with time pressure
**Example**: "Gut Check" (30 seconds to answer 5 questions)

```html
<div class="timed-tool">
    <div class="timer">30</div>
    <div class="prompt-card">
        <p class="prompt-text">What matters most right now?</p>
        <input type="text" class="quick-input">
    </div>
    <div class="timed-results">
        <h4>Your Unfiltered Truth</h4>
        <ul class="responses"></ul>
    </div>
</div>
```

**Best For**: Bypassing conscious filters, accessing intuition, revealing priorities

---

## Tool Generation Examples

### Example 1: "The Value Anchor"
**Book**: Rewriting Your Self
**Purpose**: Quick values identification
**Time**: 45 seconds

```
Prompt for generation:

Create a "Value Anchor" tool that:
1. Shows 12 value words in a grid (growth, security, freedom, connection, etc.)
2. User clicks their top 3 (timer adds gentle pressure)
3. After selection, tool reveals:
   - "Your anchor values"
   - A one-sentence identity statement using those values
   - "When your story conflicts with [value], you feel [emotion]"

This teaches the Identity Anchoring approach from the book.
```

---

### Example 2: "The Plot Twist"
**Book**: Rewriting Your Self
**Purpose**: Demonstrate story restructuring
**Time**: 60 seconds

```
Prompt for generation:

Create a "Plot Twist" tool that:
1. User writes a short "stuck" story (e.g., "I never finish what I start")
2. Tool shows 3 "plot twist" templates:
   - "What if this is the beginning, not the end?"
   - "What if this challenge is preparing you for something?"
   - "What if the real story is about something else entirely?"
3. User picks one, sees their story rewritten using that frame
4. Reveal: "This is the Milton Model pattern called [X]"

This demonstrates the Story Restructuring approach.
```

---

### Example 3: "The Council Vote"
**Book**: Related to dialogical self
**Purpose**: Decision-making through inner voices
**Time**: 90 seconds

```
Prompt for generation:

Create a "Council Vote" tool that:
1. User types a decision they're facing
2. Tool presents 5 "inner council members":
   - The Practical One
   - The Dreamer
   - The Protector
   - The Child
   - The Wise Elder
3. For each member, user clicks "Approve" or "Oppose"
4. Results show:
   - Vote tally
   - "Your inner council is [united/divided]"
   - Which voice is being ignored and why that matters

This introduces dialogical self work from the book.
```

---

## Implementation Checklist

When generating a new tool:

- [ ] **Concept Clear**: Can explain in one sentence
- [ ] **Time Verified**: Actually completable in stated time
- [ ] **Mobile First**: Works on small screens
- [ ] **Touch Friendly**: Buttons big enough (44px min)
- [ ] **Keyboard Accessible**: Tab navigation works
- [ ] **Result Visible**: Insight appears without scrolling
- [ ] **State Managed**: Can restart/redo the tool
- [ ] **Styled Consistently**: Matches existing page design
- [ ] **Fallback Works**: Graceful degradation if JS fails
- [ ] **Analytics Ready**: Events can be tracked

---

## Tool Metrics

Track these for each tool:

| Metric | Target | How to Measure |
|--------|--------|----------------|
| Start Rate | >80% | Clicks/Views of tool section |
| Completion Rate | >60% | Completed/Started |
| Time to Complete | Within stated time | Timestamp tracking |
| Re-engagement | >10% | Same user completes again |
| Conversion Lift | +5% vs no tools | A/B test |

---

## Advanced: Tool Customization

For future personalization:

```javascript
// Tool that adapts to assessment results
const customizeTool = (userType) => {
    const toolVariants = {
        redemptive: {
            prompt: "What challenge are you grateful for?",
            insight: "You naturally find silver linings..."
        },
        contamination: {
            prompt: "What experience still weighs on you?",
            insight: "Acknowledging impact is the first step..."
        },
        progressive: {
            prompt: "What are you currently learning?",
            insight: "You see life as continuous growth..."
        }
    };
    
    return toolVariants[userType];
};
```

---

## Quick Tool Ideas Bank

For future landing pages:

1. **The Mirror**: User describes themselves, sees it reflected back transformed
2. **The Time Capsule**: Write a message to future self, get one "back"
3. **The Energy Audit**: Where does your energy go? Pie chart visualization
4. **The Fear Inverter**: Name a fear, see its opposite as a desire
5. **The Story Headline**: Your life as a news headline—now vs ideal
6. **The Belief Detector**: Complete sentences, reveal hidden beliefs
7. **The Metaphor Finder**: Describe a problem, get metaphor alternatives
8. **The Gratitude Lens**: Same day through complaint vs gratitude lens
9. **The Future Memory**: Describe a goal as if already achieved
10. **The Pattern Spotter**: Series of quick choices reveals a pattern

---

## Integration with Book Content

Each tool should:

1. **Demonstrate** a concept from the book
2. **Provide** a taste of the full methodology
3. **Create** desire for deeper exploration
4. **Offer** immediate, tangible value
5. **Build** trust through competence demonstration

The tool IS a miniature version of the book's transformation.

