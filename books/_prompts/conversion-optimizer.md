# Conversion Optimizer Prompt

## Purpose
Use this prompt to systematically improve conversion rates on book landing pages through data-driven A/B testing, copy optimization, and psychological triggers.

---

## The Conversion Funnel

```
┌─────────────────────────────────────────────────────────┐
│                    VISITOR JOURNEY                       │
├─────────────────────────────────────────────────────────┤
│                                                          │
│   100% ─────> Land on Page                              │
│    │                                                     │
│    ├─── Bounce (target: <40%)                           │
│    │                                                     │
│   60% ─────> Scroll to Prism                            │
│    │                                                     │
│    ├─── Exit without interaction                        │
│    │                                                     │
│   45% ─────> Interact with Prism/Tools                  │
│    │                                                     │
│    ├─── Exit without assessment                         │
│    │                                                     │
│   30% ─────> Complete Assessment                        │
│    │                                                     │
│    ├─── Exit without viewing offer                      │
│    │                                                     │
│   25% ─────> View Offer Section                         │
│    │                                                     │
│    ├─── Exit without clicking                           │
│    │                                                     │
│   15% ─────> Email Capture                              │
│    │                                                     │
│   5-8% ────> Pre-order/Purchase                         │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## A/B Testing Framework

### Test Priority Matrix

| Impact | Effort | Priority | Example |
|--------|--------|----------|---------|
| High | Low | 🔥 Do First | Headline copy, CTA button text |
| High | High | 📅 Schedule | Page restructure, new section |
| Low | Low | 🎯 Quick Win | Button color, icon changes |
| Low | High | ❌ Skip | Redesigns that don't address core issue |

---

## A/B Test Prompt Template

```
I need to run an A/B test on my book landing page.

## Current State
- Metric to improve: [Conversion rate / Scroll depth / Tool completion / etc.]
- Current value: [X%]
- Target value: [Y%]
- Traffic available: [Visits per day/week]

## Hypothesis
I believe that [CHANGE] will [IMPROVE METRIC] because [REASONING].

## Constraints
- Minimum detectable effect: [e.g., 10% improvement]
- Test duration: [e.g., 2 weeks minimum]
- Can modify: [List what can be changed]
- Cannot modify: [List what must stay fixed]

## Request
Please generate:
1. Control version description (current state)
2. Variant A description (proposed change)
3. Optional Variant B (alternative approach)
4. Implementation code changes
5. Success metrics and measurement plan
6. Statistical significance requirements
```

---

## High-Impact Test Ideas

### 1. Hero Section Tests

**Headline Variations**:
```
Control: "Transform Your Story, Transform Your Life"

Variant A (Problem-focused):
"The Stories You Tell Yourself Are Holding You Back"

Variant B (Curiosity-focused):
"What If You Could Rewrite Your Past?"

Variant C (Outcome-focused):
"Change Your Narrative in 21 Days"
```

**CTA Button Tests**:
```
Control: "Experience the Prism"

Variant A: "See How It Works (Free)"
Variant B: "Take the 60-Second Test"
Variant C: "Start Your Transformation"
```

**Badge/Social Proof Tests**:
```
Control: "A Synthesis of Narrative Identity & NLP"

Variant A: "Based on 40+ Years of Research"
Variant B: "2,847 Readers Transformed"
Variant C: "Featured in [Publication]"
```

---

### 2. Prism Section Tests

**Scenario Variations**:
```
Control: Job promotion scenario

Variant A: Relationship ending scenario
Variant B: Health diagnosis scenario
Variant C: User-provided scenario (input field)
```

**Interaction Design**:
```
Control: Click buttons to toggle

Variant A: Auto-cycle with pause on hover
Variant B: Swipe/carousel on mobile
Variant C: Side-by-side comparison (2 lenses at once)
```

---

### 3. Assessment Tests

**Length Variations**:
```
Control: 5 questions

Variant A: 3 questions (faster completion)
Variant B: 7 questions (more personalized result)
Variant C: Adaptive (stops when confident in result)
```

**Progress Display**:
```
Control: Dots

Variant A: Progress bar with percentage
Variant B: "Question X of Y" text
Variant C: Estimated time remaining
```

---

### 4. Offer Section Tests

**Pricing Display**:
```
Control: Show all three tiers

Variant A: Default to middle tier, others expandable
Variant B: Show only "Complete" tier with upsell/downsell
Variant C: Quiz-based tier recommendation
```

**Urgency Elements**:
```
Control: "Launch Special - Limited Time"

Variant A: Countdown timer
Variant B: "X copies remaining at this price"
Variant C: "Price increases in Y days"
```

**Risk Reversal**:
```
Control: None

Variant A: "30-Day Money-Back Guarantee" badge
Variant B: "Free chapter preview before purchase"
Variant C: "Pay what you want for first 100 buyers"
```

---

## Copy Optimization Prompts

### Headline Optimizer

```
Analyze this headline for a book landing page:

Current: "[Your headline]"

Book theme: [Brief description]
Target audience: [Who they are]
Main benefit: [What they get]
Emotional trigger: [Fear/Aspiration/Curiosity]

Please generate:
1. 5 alternative headlines
2. For each, explain the psychological trigger used
3. Rank them by likely effectiveness
4. Suggest which to A/B test first
```

### CTA Optimizer

```
Analyze these call-to-action buttons:

Current CTAs:
- Hero section: "[CTA text]"
- After Prism: "[CTA text]"
- After Assessment: "[CTA text]"
- Offer section: "[CTA text]"

User journey stage for each:
- Hero: [Awareness/Curiosity/Ready to act]
- After Prism: [...]
- After Assessment: [...]
- Offer: [...]

Please generate:
1. Alternative CTAs for each position
2. Ensure progression (low commitment → higher commitment)
3. A/B test recommendations
```

### Value Proposition Optimizer

```
Review this offer card copy:

Tier: [Essential/Complete/Immersive]
Current copy:
- Price: $X
- Features: [List]

Target buyer: [Who specifically buys this tier]
Key objection: [What holds them back]
Desired outcome: [What they really want]

Please generate:
1. Reframed feature descriptions (benefits, not features)
2. Headline for the card that speaks to desire
3. One-liner that addresses the objection
4. Suggested order of features for this tier
```

---

## Psychological Triggers Reference

### Cialdini's Principles in Action

| Principle | Current Implementation | Optimization Ideas |
|-----------|----------------------|-------------------|
| **Reciprocity** | Free reflection tools | Add downloadable PDF, free chapter |
| **Commitment** | Small interactions (prism, assessment) | Add "I'm ready to transform" checkbox |
| **Social Proof** | 3 testimonials | Add numbers ("2,847 readers"), logos |
| **Authority** | Research synthesis mention | Add credentials, media mentions |
| **Liking** | Beautiful design | Add author story, personal touches |
| **Scarcity** | "Launch special" badge | Add countdown, limited spots |

### Implementation Prompt

```
I want to strengthen [PRINCIPLE] on my landing page.

Current implementation: [Description]
Goal: [What behavior I want to trigger]
Constraints: [What I can't change]

Please suggest:
1. 3 ways to implement this principle more effectively
2. Copy changes needed
3. Design/layout changes needed
4. Potential risks/backfire possibilities
```

---

## Form Optimization

### Email Capture Improvements

```
Current email form analysis:

Location: [Modal / Inline / Floating]
Fields: [Email only / Email + Name / Email + Preferences]
Incentive: [What they get for signing up]
Current conversion: [X%]

Please suggest:
1. Field reduction opportunities
2. Incentive improvements
3. Copy for submit button
4. Microcopy for trust (e.g., "No spam, unsubscribe anytime")
5. Social proof near form
6. Exit-intent considerations
```

### Multi-Step Form Test

```
Test whether breaking the offer into steps improves conversion:

Control: Single modal with email → submit

Variant A: 
Step 1: "Which tier interests you?" (buttons)
Step 2: Email capture (personalized to tier)

Variant B:
Step 1: "What's your biggest narrative challenge?" (selection)
Step 2: Email capture with personalized promise

Track:
- Step 1 completion rate
- Step 2 completion rate
- Overall conversion comparison
```

---

## Mobile-Specific Optimization

### Mobile Conversion Issues

```
Analyze mobile conversion gap:

Desktop conversion: [X%]
Mobile conversion: [Y%]
Mobile traffic share: [Z%]

Observed issues:
- [Issue 1]
- [Issue 2]

Please suggest:
1. Mobile-specific copy adjustments
2. Touch-friendly interaction changes
3. Simplified mobile offer flow
4. Sticky CTA considerations
5. Performance optimizations
```

### Thumb Zone Optimization

```
Review CTA placement for mobile:

Current primary CTA position: [Above/Below fold]
Secondary CTAs: [Positions]

Ensure:
- Primary CTA in thumb-friendly zone
- Minimum touch target 44x44px
- Adequate spacing between touch targets
- Visible without scrolling after key interactions
```

---

## Analytics Setup

### Essential Events to Track

```javascript
// Page performance
trackEvent('page', 'load', 'book_landing');
trackEvent('page', 'visible_time', seconds);
trackEvent('page', 'scroll_depth', percentage);

// Interactive elements
trackEvent('prism', 'interact', lens_name);
trackEvent('prism', 'insight_revealed', true);
trackEvent('assessment', 'start', question_1);
trackEvent('assessment', 'complete', result_type);
trackEvent('tool', 'complete', tool_name);

// Conversion events
trackEvent('offer', 'view', 'section_visible');
trackEvent('offer', 'click', tier_name);
trackEvent('modal', 'open', trigger_source);
trackEvent('email', 'capture', success);
trackEvent('purchase', 'initiate', tier_name);
```

### Funnel Visualization Prompt

```
Based on this event data, identify conversion blockers:

Events (last 7 days):
- page_load: [X]
- prism_interact: [Y]
- assessment_start: [Z]
- assessment_complete: [W]
- offer_view: [V]
- email_capture: [U]

Calculate:
1. Drop-off percentage at each stage
2. Biggest leak in the funnel
3. Benchmarks for this type of page
4. Priority fix recommendations
```

---

## Quick Win Checklist

Before running complex A/B tests, verify these basics:

- [ ] Page loads in under 2 seconds
- [ ] Hero CTA visible without scrolling (mobile)
- [ ] Form has minimal fields (email only)
- [ ] Value proposition clear in 5 seconds
- [ ] Social proof visible early
- [ ] Price visible before clicking
- [ ] Mobile interactions work smoothly
- [ ] No broken links or errors
- [ ] Trust signals present (guarantee, testimonials)
- [ ] Clear next step at every stage

---

## Test Documentation Template

```markdown
## Test: [Name]
**Date**: [Start - End]
**Hypothesis**: [Statement]

### Control
- Description: [What current state is]
- Screenshot/Code: [Reference]

### Variant
- Description: [What changed]
- Screenshot/Code: [Reference]

### Results
- Control conversion: [X%] (n=[sample size])
- Variant conversion: [Y%] (n=[sample size])
- Lift: [+/- Z%]
- Statistical significance: [p-value]
- Confidence: [95%/99%]

### Decision
- Winner: [Control/Variant]
- Implement: [Yes/No]
- Learn: [What we learned]

### Follow-up
- Next test: [What to test next based on learnings]
```

---

## Optimization Philosophy

> Conversion optimization is not about manipulation.
> It's about removing friction between someone who wants transformation
> and the transformation you offer.

Every test should ask:
1. Does this help the right person find us?
2. Does this help them understand the value?
3. Does this help them take the next step with confidence?

If yes to all three, run the test. If any are no, reconsider.

