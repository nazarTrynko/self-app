# Book Landing Evolution Prompt

## Purpose
Use this prompt to evolve and iterate on the "Rewriting Your Self" landing page based on data, feedback, and new insights.

---

## Evolution Framework

### Phase 1: Data Collection
Before evolving, gather:

1. **Analytics Data**
   - Time on page (target: >3 minutes)
   - Scroll depth (target: >75%)
   - Tool completion rates (target: >60%)
   - Prism interaction count
   - Assessment completion rate
   - Email capture conversion (target: >15%)
   - Offer click-through by tier

2. **User Feedback**
   - Direct feedback from users
   - Support questions indicating confusion
   - Social mentions and sentiment
   - Beta reader insights

3. **A/B Test Results**
   - Headline variations
   - CTA button copy
   - Pricing display
   - Social proof placement

---

## Evolution Prompt Template

```
I need to evolve the book landing page based on recent data.

## Current State
- File: landings/books/rewriting-your-self.html
- Current conversion rate: [X]%
- Average time on page: [X] seconds
- Tool completion rate: [X]%

## Data Insights
[Paste your analytics data here]

## Observed Issues
1. [Describe issue 1]
2. [Describe issue 2]
3. [etc.]

## User Feedback Themes
[List recurring feedback patterns]

## Evolution Goals
1. Increase [specific metric] by [percentage]
2. Address [specific user pain point]
3. Improve [specific section performance]

## Constraints
- Maintain single-file architecture
- Preserve core messaging and positioning
- Keep page load time under 2 seconds
- Ensure mobile-first responsiveness

## Request
Please analyze the landing page and propose specific changes to achieve the evolution goals while respecting the constraints. Show code changes with clear before/after context.
```

---

## Common Evolution Scenarios

### Scenario 1: Low Prism Engagement
**Symptoms**: Users scroll past the Prism demo without interacting

**Potential Fixes**:
- Add micro-animation on load to draw attention
- Make scenario more relatable (test different scenarios)
- Add explicit instruction: "Click to see the same event differently"
- Consider auto-cycling with pause on hover

**Prompt Addition**:
```
The Narrative Prism section has [X]% interaction rate (target: >60%).
Users are scrolling past without clicking toggles.
Propose 3 different approaches to increase engagement, ranked by implementation complexity.
```

### Scenario 2: Assessment Abandonment
**Symptoms**: Users start but don't finish the 5-question assessment

**Potential Fixes**:
- Show progress more prominently
- Reduce to 3 questions
- Add value preview ("See your type →")
- Make questions feel faster (better UX)

**Prompt Addition**:
```
Assessment starts: [X]
Assessment completes: [Y]
Drop-off rate: [Z]%

The biggest drop-off happens at question [N].
Propose changes to reduce abandonment while maintaining assessment accuracy.
```

### Scenario 3: Low Offer Conversion
**Symptoms**: Users engage with content but don't click offer buttons

**Potential Fixes**:
- Test different pricing anchors
- Add urgency/scarcity elements
- Improve value proposition clarity
- Add money-back guarantee badge
- Test offer card order

**Prompt Addition**:
```
Users reaching offer section: [X]
Offer button clicks: [Y]
Conversion rate: [Z]%

Preferred tier: [Essential/Complete/Immersive]
Propose 3 variations to test for higher conversion.
```

### Scenario 4: Mobile Performance Issues
**Symptoms**: Mobile users bounce faster, lower engagement

**Potential Fixes**:
- Reduce particle count on mobile
- Simplify tool interactions for touch
- Increase touch targets
- Reduce image/asset sizes
- Test vertical scroll vs horizontal swipe

**Prompt Addition**:
```
Desktop conversion: [X]%
Mobile conversion: [Y]%
Mobile bounce rate: [Z]%

Propose mobile-specific optimizations that maintain the premium feel.
```

---

## Evolution Checklist

Before deploying any evolution:

- [ ] Tested on desktop (Chrome, Firefox, Safari)
- [ ] Tested on mobile (iOS Safari, Chrome Android)
- [ ] Page load time < 2 seconds
- [ ] All interactive elements functional
- [ ] Email capture form works
- [ ] Analytics tracking intact
- [ ] Accessibility basics (contrast, focus states)
- [ ] SEO meta tags updated if needed
- [ ] Old analytics data archived

---

## Version History Tracking

Track each evolution:

```markdown
## Version 1.0.0 (Launch)
- Initial release
- All core sections complete
- Three reflection tools

## Version 1.1.0 (Date)
- Changed: [what]
- Reason: [why]
- Result: [metric change]
```

---

## Regression Testing

After each evolution, verify:

1. **Hero Section**
   - Title renders correctly
   - CTAs link to correct sections
   - Animation plays smoothly

2. **Narrative Prism**
   - All three lenses work
   - Text updates correctly
   - Insight appears after 2+ interactions

3. **Assessment**
   - All 5 questions accessible
   - Progress dots update
   - Results display correctly
   - CTA links to offer section

4. **Three Portals**
   - All cards render
   - Hover effects work
   - Mobile layout correct

5. **Offer Section**
   - All three tiers visible
   - Buttons trigger modal
   - Modal works (open/close/submit)

6. **Reflection Tools**
   - Story Type: All questions work, result displays
   - Voice Detector: Input works, result generates
   - Timeline: Slider marks, arc updates

7. **Footer**
   - All links work
   - Mobile layout correct

---

## Advanced Evolution: Personalization

For future iterations, consider:

1. **URL Parameter Personalization**
   - `?from=nlp` → Emphasize NLP content
   - `?from=therapy` → Emphasize clinical applications
   - `?from=coaching` → Emphasize professional tools

2. **Return Visitor Recognition**
   - LocalStorage to detect returns
   - Show "Welcome back" messaging
   - Skip to where they left off

3. **Geographic Personalization**
   - Pricing in local currency
   - Region-specific testimonials
   - Timezone-aware launch dates

---

## Evolution Philosophy

> Every change should be measurable.
> Every measurement should inform action.
> Every action should serve the visitor's transformation.

The landing page IS the methodology. Evolution should make the transformation experience more powerful, not just improve metrics.

