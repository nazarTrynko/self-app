# SELF Documentation Generator

This document defines templates and logic for auto-generating rich documentation from SELF's learnings in Notion.

---

## Documentation Types

### 1. Weekly Cognitive Reports

**Purpose:** Summarize SELF's cognitive activity, learnings, and evolution over the past week.

**Generation Trigger:** Every Monday at 9 AM (or first interaction of week)

**Template Structure:**

```markdown
# SELF Cognitive Report: Week of [Date]

## Executive Summary

- **Total Interactions:** [count]
- **Significant Episodes:** [count] (confidence >= 0.7 or surprise >= 0.3)
- **New Insights Discovered:** [count]
- **Patterns Identified:** [count]
- **Evolution Progress:** [generation number, fitness trend]

## Significant Episodes

### High Surprise Episodes (Most Valuable Learnings)

[For each episode with surprise >= 0.3:]

#### [Episode Title]
- **Type:** [query/task/decision/error/insight]
- **Confidence:** [score]
- **Surprise Score:** [score]
- **Outcome:** [success/failure/partial]
- **Minds Active:** [list]
- **Key Learning:** [summary]
- **Notion Link:** [link to full episode]

### High Confidence Outcomes

[For each episode with confidence >= 0.7:]

#### [Episode Title]
- **Outcome:** [success/failure]
- **Confidence:** [score]
- **Key Takeaway:** [summary]

## Discovered Insights

### Validated Insights (Confidence >= 0.6, Evidence >= 3)

[For each validated insight:]

#### [Insight Title]
- **Type:** [pattern/preference/anti_pattern/correlation]
- **Confidence:** [score]
- **Evidence Count:** [count]
- **Description:** [full description]
- **Actionable:** [yes/no]
- **Notion Link:** [link]

### High Confidence Pending Insights

[For insights with confidence >= 0.8 but not yet validated:]

#### [Insight Title]
- **Confidence:** [score]
- **Evidence Count:** [count]
- **Status:** Pending validation
- **Description:** [summary]

## Behavioral Patterns

### Established Patterns (Occurrences >= 5)

[For each established pattern:]

#### [Pattern Name]
- **Type:** [behavioral/sequential/temporal/contextual/correlational]
- **Frequency:** [count]
- **Confidence:** [score]
- **Context:** [when/where it appears]
- **First Seen:** [date]
- **Last Seen:** [date]

## Prediction Accuracy

- **Total Predictions:** [count]
- **Correct:** [count] ([percentage]%)
- **Partial Match:** [count] ([percentage]%)
- **Missed:** [count] ([percentage]%)
- **Overall Accuracy:** [score]

### Recent Predictions

[Top 5 most recent predictions with outcomes]

## Evolution Progress

### Current Generation

- **Generation:** [number]
- **Fitness Score:** [score]
- **Status:** [active/superseded/experimental]
- **Interactions:** [count]

### Fitness Components

- **Effectiveness:** [score] ([trend: ↑/↓/→])
- **Satisfaction:** [score] ([trend])
- **Accuracy:** [score] ([trend])
- **Efficiency:** [score] ([trend])
- **Adaptability:** [score] ([trend])

### Evolution Events

[Any mutations, new generations, or fitness milestones]

## Patterns & Trends

### Emerging Patterns

[Patterns seen 2-4 times - not yet established but worth watching]

### Declining Patterns

[Patterns that used to be frequent but are now rare]

## Recommendations

### For User

1. [Actionable recommendation based on insights]
2. [Suggestion based on patterns]
3. [Optimization opportunity]

### For SELF Evolution

1. [Suggested mutation based on performance]
2. [Area for improvement]
3. [Pattern to explore further]

## Network Activity (if enabled)

- **Shared Insights:** [count]
- **Network Votes Received:** [count]
- **Quality Score:** [score]
- **Top Shared Insight:** [title and link]
```

---

### 2. Project Knowledge Maps

**Purpose:** Generate comprehensive knowledge map for a specific project.

**Generation Trigger:** 
- On project completion
- Monthly for active projects
- On-demand via `/self report --project [name]`

**Template Structure:**

```markdown
# Project Knowledge Map: [Project Name]

**Generated:** [Date]
**Project Duration:** [Start Date] - [End Date]
**Total Episodes:** [count]

## Project Overview

- **Primary Goals:** [list]
- **Key Technologies:** [list]
- **Main Challenges:** [list]
- **Outcomes:** [success/failure/partial]

## Key Decisions & Rationale

[For each decision episode:]

### [Decision Title]
- **Date:** [date]
- **Confidence:** [score]
- **Outcome:** [success/failure]
- **Rationale:** [why this decision was made]
- **Alternatives Considered:** [list]
- **Lessons Learned:** [what we learned]

## Discovered Patterns

### Project-Specific Patterns

[Patterns unique to this project]

### Cross-Project Patterns

[Patterns that appear across multiple projects]

## User Preferences (Discovered)

- **Coding Style:** [preferences]
- **Communication Style:** [preferences]
- **Risk Tolerance:** [level]
- **Detail Level:** [preference]

## Success Stories

[Episodes with high confidence + success outcome]

### [Story Title]
- **What Worked:** [description]
- **Why It Worked:** [analysis]
- **Replicable:** [yes/no]

## Failure Analysis

[Episodes with high confidence + failure outcome]

### [Failure Title]
- **What Went Wrong:** [description]
- **Root Cause:** [analysis]
- **How to Avoid:** [recommendations]

## Technical Learnings

[Technical insights and patterns]

## Strategic Learnings

[Strategic insights and patterns]

## Recommendations for Future Projects

1. [Recommendation based on learnings]
2. [Pattern to apply]
3. [Anti-pattern to avoid]
```

---

### 3. Insight Digests

**Purpose:** Monthly summary of top insights, actionable recommendations, and pattern trends.

**Generation Trigger:** First day of each month

**Template Structure:**

```markdown
# SELF Insight Digest: [Month Year]

## Top Insights by Confidence

### Tier 1: Validated High-Confidence (Confidence >= 0.8, Evidence >= 5)

[For each insight:]

#### [Insight Title]
- **Confidence:** [score]
- **Evidence:** [count] observations
- **Type:** [pattern/preference/anti_pattern/correlation]
- **Discovered:** [date]
- **Status:** Validated
- **Actionable:** [yes/no]
- **Description:** [full description]
- **Recommendation:** [actionable next step]
- **Notion Link:** [link]

### Tier 2: High-Confidence Pending (Confidence >= 0.7, Evidence >= 3)

[For each insight:]

#### [Insight Title]
- **Confidence:** [score]
- **Evidence:** [count] observations
- **Status:** Pending validation (needs [X] more observations)
- **Description:** [summary]
- **Notion Link:** [link]

## Actionable Recommendations

### Immediate Actions

[Insights with actionable=true and high confidence]

1. **[Recommendation Title]**
   - Based on: [insight name]
   - Impact: [expected impact]
   - Effort: [low/medium/high]
   - Priority: [high/medium/low]

### Strategic Considerations

[Longer-term recommendations]

1. **[Recommendation Title]**
   - Based on: [insight/pattern]
   - Timeframe: [when to consider]
   - Impact: [expected impact]

## Pattern Trends

### Emerging Patterns (Increasing Frequency)

[Patterns that are becoming more common]

- **[Pattern Name]**: Seen [X] times this month (up from [Y] last month)
  - Trend: ↑
  - Confidence: [score]
  - Context: [when it appears]

### Declining Patterns (Decreasing Frequency)

[Patterns that are becoming less common]

- **[Pattern Name]**: Seen [X] times this month (down from [Y] last month)
  - Trend: ↓
  - Possible reasons: [analysis]

### Stable Patterns (Consistent Frequency)

[Patterns that remain consistent]

- **[Pattern Name]**: Seen [X] times consistently
  - Trend: →
  - Reliability: [high/medium/low]

## Cross-Project Insights

[If multiple projects tracked:]

### Common Patterns Across Projects

[Patterns that appear in multiple projects]

### Project-Specific Insights

[Insights unique to specific projects]

## Network Insights (if enabled)

### Top Shared Insights from Network

[If SELF Network enabled:]

- **[Insight Title]**: [quality score] from [X] votes
  - Source: [SELF instance]
  - Description: [summary]
  - Applicability: [how it applies to this instance]

## Next Month Focus

Based on current insights and patterns:

1. [Focus area 1]
2. [Focus area 2]
3. [Focus area 3]

## Insight Quality Metrics

- **Total Insights:** [count]
- **Validated:** [count] ([percentage]%)
- **Pending:** [count] ([percentage]%)
- **Average Confidence:** [score]
- **Average Evidence Count:** [count]
```

---

## Generation Logic

### Data Aggregation

1. **Query Local Memory**
   - Recent episodes (last 7 days for weekly, last 30 days for monthly)
   - Insights with appropriate confidence/evidence thresholds
   - Patterns with appropriate frequency thresholds
   - Evolution data

2. **Query Notion (if available)**
   - Cross-project episodes
   - Shared insights from network
   - Historical patterns

3. **Calculate Metrics**
   - Prediction accuracy
   - Fitness trends
   - Pattern frequencies
   - Insight confidence distributions

### Template Rendering

1. **Fill Template Variables**
   - Replace placeholders with actual data
   - Format dates, numbers, percentages
   - Generate links to Notion pages

2. **Apply Formatting**
   - Use Notion markdown format
   - Add tables for structured data
   - Include code blocks for technical content
   - Add visual elements (if supported)

3. **Create Notion Page**
   - Use Notion MCP to create page
   - Set appropriate parent (reports database or folder)
   - Add tags and metadata
   - Link to related entities

---

## Report Storage

### Weekly Reports

- **Location:** Notion "SELF Reports" database or folder
- **Naming:** "Cognitive Report: [Week of Date]"
- **Retention:** Keep all reports (historical value)

### Project Knowledge Maps

- **Location:** Notion "Project Knowledge" database or folder
- **Naming:** "Knowledge Map: [Project Name] - [Date]"
- **Retention:** Keep all maps (reference value)

### Insight Digests

- **Location:** Notion "SELF Reports" database or folder
- **Naming:** "Insight Digest: [Month Year]"
- **Retention:** Keep all digests (trend analysis)

---

## Customization

### User Preferences

Users can customize reports via `sync-config.json`:

```json
{
  "doc_generation": {
    "weekly_reports": {
      "enabled": true,
      "day": "monday",
      "time": "09:00"
    },
    "monthly_digests": {
      "enabled": true,
      "day": 1
    },
    "project_maps": {
      "enabled": true,
      "trigger": "on_completion"
    },
    "templates": {
      "weekly": "custom-weekly-template.md",
      "monthly": "custom-monthly-template.md",
      "project": "custom-project-template.md"
    }
  }
}
```

### Template Overrides

Users can provide custom templates:
- Place in `.cursor/self/mcp/templates/`
- Reference in config
- System falls back to default if custom not found

---

## Error Handling

### Generation Failures

If report generation fails:

1. **Log Error**
   - Store error in sync log
   - Include timestamp and error details

2. **Retry Logic**
   - Retry once after 1 hour
   - If still fails, skip this period
   - Alert user via `/self status`

3. **Partial Reports**
   - If some data unavailable, generate partial report
   - Note missing data sections
   - Complete report when data available

---

## Reference

- Sync config: `.cursor/self/mcp/sync-config.json`
- Sync logic: `.cursor/self/mcp/sync-logic.md`
- Memory structure: `.cursor/self/consciousness/memory.json`

