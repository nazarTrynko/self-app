# Evolution Automation — Weekly Optimization Cycles

> **Purpose**: Automate the continuous improvement of book landing pages using the SELF framework's evolution engine and user interaction data.

---

## The Evolution Philosophy

Landing pages are living organisms, not static documents. They should:
- **Sense** user behavior through analytics
- **Remember** what worked and what didn't
- **Predict** what changes will improve metrics
- **Act** on high-confidence improvements
- **Reflect** on outcomes to calibrate future changes

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       WEEKLY EVOLUTION CYCLE                                 │
│                                                                              │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌────────┐│
│  │  SENSE   │ →  │ ANALYZE  │ →  │  PROPOSE │ →  │  TEST    │ →  │REFLECT ││
│  │ Collect  │    │ Pattern  │    │ Changes  │    │ Implement│    │ Learn  ││
│  │ Data     │    │ Detect   │    │ (A/B)    │    │ Winner   │    │        ││
│  └──────────┘    └──────────┘    └──────────┘    └──────────┘    └────────┘│
│                                                                              │
│  Runs: Every Monday | Duration: Automated | Human: Review only              │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Evolution Data Schema

Store evolution data in `books/_analytics/evolution.json`:

```json
{
    "book_id": "01-transition-rite",
    "current_version": "1.2.3",
    "evolution_cycles": [
        {
            "cycle_id": "evo_001",
            "date": "2026-01-08",
            "metrics_before": {
                "email_capture_rate": 12.5,
                "tool_completion_rate": 58.2,
                "avg_time_on_page": 185,
                "scroll_depth_75": 42.1,
                "offer_click_rate": 8.3
            },
            "changes_made": [
                {
                    "element": "hero_headline",
                    "from": "Transform Your Story",
                    "to": "Rewrite Your Identity",
                    "hypothesis": "Identity-focused language resonates more with target audience",
                    "confidence": 0.72
                }
            ],
            "metrics_after": {
                "email_capture_rate": 14.1,
                "tool_completion_rate": 61.5,
                "avg_time_on_page": 198,
                "scroll_depth_75": 45.8,
                "offer_click_rate": 9.1
            },
            "fitness_delta": +0.15,
            "learnings": [
                "Identity language outperforms transformation language",
                "Headline changes have 1.5x impact on scroll depth"
            ]
        }
    ],
    "patterns_discovered": [],
    "pending_tests": [],
    "rejected_changes": []
}
```

---

## Weekly Evolution Prompt

Use this prompt every Monday to run an evolution cycle:

```markdown
# Weekly Evolution Analysis for {{BOOK_NAME}}

## Context
- Book: {{BOOK_NAME}}
- Landing page: {{FILE_PATH}}
- Current version: {{VERSION}}
- Last evolution: {{LAST_EVOLUTION_DATE}}

## This Week's Data

### Traffic & Engagement
- Unique visitors: {{VISITORS}}
- Avg time on page: {{TIME_ON_PAGE}} seconds (target: >180)
- Scroll depth to 75%: {{SCROLL_75}}% (target: >50%)
- Bounce rate: {{BOUNCE_RATE}}% (target: <40%)

### Tool Performance
- Prism interactions: {{PRISM_INTERACTIONS}} (target: >60%)
- Assessment starts: {{ASSESSMENT_STARTS}}
- Assessment completes: {{ASSESSMENT_COMPLETES}} ({{ASSESSMENT_RATE}}%)
- Tool 1 completion: {{TOOL_1_RATE}}%
- Tool 2 completion: {{TOOL_2_RATE}}%
- Tool 3 completion: {{TOOL_3_RATE}}%

### Conversion
- Email capture rate: {{EMAIL_RATE}}% (target: >15%)
- Offer section views: {{OFFER_VIEWS}}
- Essential clicks: {{ESSENTIAL_CLICKS}}
- Complete clicks: {{COMPLETE_CLICKS}}
- Immersive clicks: {{IMMERSIVE_CLICKS}}

### Segment Data
- Mobile vs Desktop: {{MOBILE_PCT}}% / {{DESKTOP_PCT}}%
- New vs Returning: {{NEW_PCT}}% / {{RETURNING_PCT}}%
- Traffic sources: {{TOP_SOURCES}}

## Previous Evolution
{{PREVIOUS_CHANGES_SUMMARY}}

## SELF Mind Analysis Request

Please analyze this data through each SELF mind:

### Oracle (Strategy)
- What patterns emerge from this data?
- What opportunities are we missing?
- What would 10x our metrics?

### Critic (Validation)  
- What's the most likely cause of underperformance?
- What assumptions might be wrong?
- What would disprove our current approach?

### Creator (Innovation)
- What novel changes could we test?
- What unconventional approaches might work?
- What can we learn from other domains?

### Architect (Implementation)
- What's the highest-impact, lowest-effort change?
- What's the optimal test sequence?
- What dependencies exist between changes?

### Guardian (Safety)
- What could these changes break?
- What's the rollback plan?
- What's the minimum viable test duration?

## Output Request

1. **Priority Change** (High confidence, implement now)
   - Element to change
   - From → To
   - Hypothesis
   - Expected impact
   - Implementation code

2. **A/B Test** (Medium confidence, split test)
   - Control vs Variant
   - Success metric
   - Test duration
   - Sample size needed

3. **Future Investigation** (Low confidence, gather more data)
   - Question to answer
   - Data to collect
   - Timeline

4. **Learnings to Record**
   - Pattern discovered
   - Confidence level
   - Evidence
```

---

## Automated Metrics Collection

### Analytics Dashboard Data

```javascript
// Collect weekly metrics automatically
const WeeklyMetrics = {
    async collect(bookId) {
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 7);
        
        return {
            period: {
                start: startDate.toISOString(),
                end: new Date().toISOString()
            },
            traffic: await this.getTrafficMetrics(bookId, startDate),
            engagement: await this.getEngagementMetrics(bookId, startDate),
            conversion: await this.getConversionMetrics(bookId, startDate),
            segments: await this.getSegmentData(bookId, startDate)
        };
    },
    
    async getTrafficMetrics(bookId, since) {
        // Integrate with your analytics provider
        return {
            visitors: 0,
            pageviews: 0,
            bounceRate: 0
        };
    },
    
    async getEngagementMetrics(bookId, since) {
        return {
            avgTimeOnPage: 0,
            scrollDepth: { 25: 0, 50: 0, 75: 0, 100: 0 },
            toolInteractions: {}
        };
    },
    
    async getConversionMetrics(bookId, since) {
        return {
            emailCaptures: 0,
            emailRate: 0,
            offerClicks: { essential: 0, complete: 0, immersive: 0 }
        };
    },
    
    async getSegmentData(bookId, since) {
        return {
            device: { mobile: 0, desktop: 0 },
            visitors: { new: 0, returning: 0 },
            sources: []
        };
    }
};
```

### Fitness Score Calculation

```javascript
// Calculate overall fitness of landing page
function calculateFitness(metrics) {
    const weights = {
        emailCapture: 0.25,      // Most important for lead gen
        toolCompletion: 0.20,   // Engagement depth
        timeOnPage: 0.15,       // Interest level
        scrollDepth: 0.15,      // Content consumption
        bounceRate: 0.15,       // Initial hook
        offerClicks: 0.10       // Purchase intent
    };
    
    const scores = {
        emailCapture: normalize(metrics.emailRate, 15, 25),    // 15% baseline, 25% excellent
        toolCompletion: normalize(metrics.toolRate, 40, 70),
        timeOnPage: normalize(metrics.avgTime, 120, 240),
        scrollDepth: normalize(metrics.scrollDepth75, 40, 70),
        bounceRate: 1 - normalize(metrics.bounceRate, 30, 50), // Inverted
        offerClicks: normalize(metrics.offerClickRate, 5, 15)
    };
    
    let fitness = 0;
    for (const [metric, weight] of Object.entries(weights)) {
        fitness += scores[metric] * weight;
    }
    
    return Math.round(fitness * 100) / 100;
}

function normalize(value, min, max) {
    return Math.max(0, Math.min(1, (value - min) / (max - min)));
}
```

---

## A/B Test Implementation

### Test Configuration

```javascript
// A/B test configuration schema
const testConfig = {
    testId: 'test_headline_001',
    element: 'hero-title',
    variants: [
        { id: 'control', content: 'Transform Your Story' },
        { id: 'variant_a', content: 'Rewrite Your Identity' }
    ],
    allocation: 0.5,  // 50/50 split
    metric: 'email_capture_rate',
    minSampleSize: 500,
    maxDuration: 14, // days
    confidenceThreshold: 0.95
};
```

### Client-Side Test Implementation

```javascript
// Simple A/B testing framework
const ABTest = {
    init(testConfig) {
        // Get or assign variant
        const variant = this.getVariant(testConfig);
        
        // Apply variant
        this.applyVariant(testConfig.element, variant);
        
        // Track assignment
        if (typeof BookAnalytics !== 'undefined') {
            BookAnalytics.track('ab_test_assignment', {
                test: testConfig.testId,
                variant: variant.id
            });
        }
        
        return variant;
    },
    
    getVariant(config) {
        // Check for existing assignment
        const stored = localStorage.getItem(`ab_${config.testId}`);
        if (stored) {
            return config.variants.find(v => v.id === stored);
        }
        
        // Random assignment
        const variant = Math.random() < config.allocation
            ? config.variants[0]
            : config.variants[1];
        
        localStorage.setItem(`ab_${config.testId}`, variant.id);
        return variant;
    },
    
    applyVariant(elementId, variant) {
        const element = document.getElementById(elementId);
        if (element && variant.content) {
            element.innerHTML = variant.content;
        }
    },
    
    trackConversion(testId, metric) {
        const variant = localStorage.getItem(`ab_${testId}`);
        if (typeof BookAnalytics !== 'undefined') {
            BookAnalytics.track('ab_test_conversion', {
                test: testId,
                variant,
                metric
            });
        }
    }
};
```

---

## Change Implementation Patterns

### High-Confidence Changes (Auto-Deploy)

Changes with confidence >0.85 can be auto-deployed:

```javascript
const AutoDeploy = {
    threshold: 0.85,
    
    async applyChange(change) {
        if (change.confidence < this.threshold) {
            console.log('Confidence too low for auto-deploy');
            return false;
        }
        
        // Create backup
        await this.backup(change.file);
        
        // Apply change
        const success = await this.modify(change);
        
        if (!success) {
            await this.rollback(change.file);
            return false;
        }
        
        // Log deployment
        await this.log(change);
        
        return true;
    },
    
    async backup(file) {
        // Save current version
    },
    
    async modify(change) {
        // Apply the change
    },
    
    async rollback(file) {
        // Restore from backup
    },
    
    async log(change) {
        // Record in evolution.json
    }
};
```

### Medium-Confidence Changes (A/B Test)

Changes with confidence 0.5-0.85 should be A/B tested:

```javascript
const TestQueue = {
    queue: [],
    
    add(change) {
        this.queue.push({
            ...change,
            status: 'pending',
            addedAt: new Date().toISOString()
        });
    },
    
    getNext() {
        return this.queue.find(t => t.status === 'pending');
    },
    
    startTest(test) {
        test.status = 'running';
        test.startedAt = new Date().toISOString();
        // Initialize A/B test
    },
    
    endTest(testId, winner) {
        const test = this.queue.find(t => t.id === testId);
        test.status = 'completed';
        test.winner = winner;
        test.endedAt = new Date().toISOString();
    }
};
```

---

## Evolution Report Template

Generate after each cycle:

```markdown
# Evolution Report: {{BOOK_NAME}}
## Cycle {{CYCLE_NUMBER}} — {{DATE}}

### Summary
- **Fitness Before**: {{FITNESS_BEFORE}}
- **Fitness After**: {{FITNESS_AFTER}}
- **Delta**: {{FITNESS_DELTA}}

### Changes Made
1. {{CHANGE_1_DESCRIPTION}}
   - Impact: {{CHANGE_1_IMPACT}}

### Key Metrics
| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Email Capture | {{EC_BEFORE}}% | {{EC_AFTER}}% | {{EC_CHANGE}} |
| Tool Completion | {{TC_BEFORE}}% | {{TC_AFTER}}% | {{TC_CHANGE}} |
| Time on Page | {{TOP_BEFORE}}s | {{TOP_AFTER}}s | {{TOP_CHANGE}} |

### Learnings
{{LEARNINGS_LIST}}

### Next Cycle Focus
{{NEXT_FOCUS}}

### Pending Tests
{{PENDING_TESTS_LIST}}
```

---

## Automation Schedule

### Monday: Collect & Analyze
1. Gather previous week's metrics
2. Run evolution prompt
3. Generate recommendations
4. Queue changes for review

### Tuesday: Review & Approve
1. Human reviews proposed changes
2. Approve high-confidence auto-deploys
3. Configure A/B tests
4. Document decisions

### Wednesday-Sunday: Monitor
1. A/B tests run
2. Metrics collected
3. Anomaly detection
4. Automated alerts

### Weekly Cadence

```
Week 1: Baseline metrics established
Week 2: First evolution cycle
Week 3: Analyze Week 2 changes, new cycle
Week 4: Monthly review, strategic adjustments
```

---

## Integration with SELF Framework

### Memory System

Store evolution learnings in SELF memory:

```json
{
    "type": "evolution_pattern",
    "book_id": "01-transition-rite",
    "pattern": "identity_language_outperforms_transformation",
    "evidence": [
        { "test": "headline_001", "lift": 0.12 },
        { "test": "cta_003", "lift": 0.08 }
    ],
    "confidence": 0.82,
    "first_observed": "2026-01-08",
    "last_reinforced": "2026-01-22"
}
```

### Prediction Engine

Pre-compute likely successful changes:

```json
{
    "prediction_id": "pred_001",
    "book_id": "01-transition-rite",
    "predicted_change": {
        "element": "assessment_question_3",
        "hypothesis": "Shorter options increase completion rate"
    },
    "confidence": 0.71,
    "based_on": ["pattern_assessment_length", "similar_book_data"],
    "created": "2026-01-15"
}
```

---

## Safety Guardrails

### Auto-Rollback Triggers

```javascript
const SafetyChecks = {
    thresholds: {
        bounceRateIncrease: 0.20,    // 20% increase
        emailCaptureDecrease: 0.15,   // 15% decrease
        errorRateThreshold: 0.01      // 1% error rate
    },
    
    check(currentMetrics, baselineMetrics) {
        const issues = [];
        
        if (currentMetrics.bounceRate > baselineMetrics.bounceRate * (1 + this.thresholds.bounceRateIncrease)) {
            issues.push('Bounce rate increased significantly');
        }
        
        if (currentMetrics.emailRate < baselineMetrics.emailRate * (1 - this.thresholds.emailCaptureDecrease)) {
            issues.push('Email capture decreased significantly');
        }
        
        if (currentMetrics.errorRate > this.thresholds.errorRateThreshold) {
            issues.push('Error rate exceeds threshold');
        }
        
        return issues;
    },
    
    async triggerRollback(issues) {
        // Notify human
        // Revert to last known good state
        // Log incident
    }
};
```

---

**Version**: 1.0.0
**Schedule**: Every Monday, 9 AM
**Human Override**: Required for >0.5 fitness drop


