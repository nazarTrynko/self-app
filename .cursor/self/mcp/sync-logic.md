# SELF MCP Sync Logic

This document defines the sync rules, thresholds, and operational logic for SELF's Memory Extension Protocol.

---

## Core Principles

1. **Memory Extension, Not Sync**: Notion is part of working memory, not a separate archive
2. **Surprise-Driven Learning**: Sync unexpected outcomes (high value), skip expected ones (low value)
3. **Local-First**: Always check local first, extend to Notion when needed
4. **Graceful Degradation**: If MCP unavailable, work seamlessly in local-only mode
5. **Privacy-First**: Encrypt sensitive data, require approval for sensitive sync

---

## Sync Triggers

### Episode Sync

An episode is synced to Notion Knowledge Base when **ANY** of these conditions are met:

1. **High Confidence Success/Failure**
   - `confidence >= 0.7` AND `outcome IN (success, failure)`
   - Rationale: Significant outcomes are valuable regardless of surprise

2. **High Surprise Score**
   - `surprise_score >= 0.3` (calculated as `|confidence - actual_outcome_value|`)
   - Where `actual_outcome_value`: success=1.0, failure=0.0, partial=0.5, abandoned=0.0
   - Rationale: Unexpected outcomes are the most valuable learning opportunities

3. **User Explicit Request**
   - User runs `/self sync` with episode ID
   - Rationale: User knows what's valuable

**Sync Priority:**
- High surprise + high confidence = Priority 1 (sync immediately)
- High surprise OR high confidence = Priority 2 (sync in next batch)
- Low surprise + low confidence = Skip (not valuable)

### Insight Sync

An insight is synced to Notion Insights DB when:

1. **Validated Insight**
   - `confidence >= 0.6` AND `evidence_count >= 3` AND `status = validated`
   - Rationale: Only validated insights are worth preserving

2. **High Confidence Pending**
   - `confidence >= 0.8` AND `evidence_count >= 2` AND `status = pending`
   - Rationale: Very high confidence insights are valuable even if not fully validated

**Sync Priority:**
- Validated insights = Priority 1
- High confidence pending = Priority 2

### Pattern Sync

A pattern is synced to Notion Patterns DB when:

1. **Established Pattern**
   - `occurrences >= 5` AND `confidence >= 0.6`
   - Rationale: Patterns need multiple observations to be reliable

2. **High Frequency Pattern**
   - `occurrences >= 10` (regardless of confidence)
   - Rationale: Frequent patterns are worth tracking even if confidence is lower

**Sync Priority:**
- High frequency (>=10) = Priority 1
- Established (>=5, >=0.6) = Priority 2

### Evolution Sync

Evolution generations are **always** synced when:

- A new generation is created
- Fitness scores are updated
- A generation is superseded

**Rationale:** Evolution tracking is critical for understanding self-improvement.

---

## Surprise Score Calculation

```python
def calculate_surprise_score(episode):
    """
    Calculate how surprising an episode outcome was.
    Higher surprise = more valuable to sync.
    """
    confidence = episode.confidence
    outcome = episode.outcome
    
    # Map outcome to numeric value
    outcome_values = {
        'success': 1.0,
        'failure': 0.0,
        'partial': 0.5,
        'abandoned': 0.0
    }
    actual_outcome = outcome_values.get(outcome, 0.0)
    
    # Surprise = absolute difference between confidence and actual outcome
    surprise = abs(confidence - actual_outcome)
    
    return surprise
```

**Examples:**
- High confidence (0.9) + Success (1.0) = Low surprise (0.1) → Skip sync
- High confidence (0.9) + Failure (0.0) = High surprise (0.9) → **Sync immediately**
- Low confidence (0.3) + Success (1.0) = High surprise (0.7) → **Sync immediately**
- Low confidence (0.3) + Failure (0.0) = Low surprise (0.3) → Skip sync

---

## Sync Queue Management

### Queue Structure

```json
{
  "pending": [
    {
      "id": "episode_123",
      "type": "episode",
      "priority": 1,
      "attempts": 0,
      "created_at": "2026-01-05T10:00:00Z",
      "data": { ... }
    }
  ],
  "failed": [
    {
      "id": "episode_456",
      "type": "episode",
      "last_attempt": "2026-01-05T10:05:00Z",
      "attempts": 3,
      "error": "Notion API rate limit",
      "data": { ... }
    }
  ],
  "synced": [
    {
      "id": "episode_789",
      "type": "episode",
      "notion_id": "notion_page_abc123",
      "synced_at": "2026-01-05T10:10:00Z"
    }
  ]
}
```

### Queue Operations

1. **Add to Queue**
   - When sync trigger conditions met, add to `pending` queue
   - Assign priority based on surprise/confidence
   - Store full episode/insight/pattern data

2. **Process Queue**
   - Process Priority 1 items immediately (if MCP healthy)
   - Process Priority 2 items in batches (every 5 minutes)
   - Retry failed items with exponential backoff

3. **Retry Logic**
   - First retry: 1 minute
   - Second retry: 5 minutes
   - Third retry: 30 minutes
   - After 3 retries: Move to `failed`, alert user

4. **Cleanup**
   - Remove synced items older than 7 days
   - Archive failed items older than 30 days

---

## Memory Query Strategy

### Hybrid Memory Retrieval

When SELF needs to retrieve memory:

1. **Check Local JSON First**
   - Query `.cursor/self/consciousness/memory.json`
   - Check recent episodes (< 7 days)
   - Check active predictions
   - Check cached Notion results

2. **If Local Miss or Low Confidence**
   - Check if Notion MCP is healthy
   - If healthy: Query Notion Knowledge Base
   - Use semantic search for similar episodes/insights
   - Cache results locally for future speed

3. **Confidence-Aware Query**
   - **Low confidence (< 0.5)**: Query Notion immediately (might find critical context)
   - **High confidence (>= 0.7)**: Query Notion in background (validation)
   - **Medium confidence (0.5-0.7)**: Query Notion if local miss

### Query Caching

- Cache Notion search results in local JSON
- TTL: 24 hours (configurable)
- Invalidate cache when:
  - New sync occurs for related entity
  - User explicitly requests refresh
  - Cache is older than TTL

---

## Privacy & Security

### Privacy Tags

Every episode/insight/pattern has a privacy tag:

- **Public**: Can be shared in SELF Network (if shareable flag set)
- **Private**: Local only, never synced (default)
- **Sensitive**: Requires explicit user approval before sync

### Encryption

Sensitive data is encrypted before sync:

- Use AES-256 encryption
- Key derived from user's local secret (never synced)
- Encrypted fields: episode content, user preferences, any PII

### Approval Workflow

For sensitive episodes:

1. Calculate surprise score
2. If high surprise AND sensitive: Request user approval
3. Show preview of what will sync (sanitized)
4. Wait for explicit approval
5. Encrypt and sync if approved

---

## Health Checks & Failover

### Health Check Logic

Every 5 minutes (configurable):

1. **Ping Notion API**
   - Test connection with lightweight query
   - Check response time
   - Verify authentication

2. **Check Rate Limits**
   - Monitor API rate limit headers
   - Track remaining requests
   - Throttle if approaching limits

3. **Validate Schema**
   - Verify database schemas match expected structure
   - Check for schema changes
   - Alert if schema mismatch detected

### Failover Behavior

If Notion MCP is unhealthy:

1. **Immediate**: Switch to local-only mode
2. **Queue**: Continue adding to sync queue (will retry when healthy)
3. **Notify**: Inform user of MCP degradation (non-blocking)
4. **Graceful**: All cognitive operations continue normally

### Recovery

When Notion MCP recovers:

1. Run health check
2. Process pending queue (prioritized)
3. Resume normal sync operations
4. Notify user of recovery

---

## Sync Operations

### Episode Sync

```json
{
  "operation": "create_episode",
  "data": {
    "title": "Episode: [summary]",
    "type": "episode",
    "confidence": 0.85,
    "surprise_score": 0.75,
    "timestamp": "2026-01-05T10:00:00Z",
    "project": "self-app",
    "tags": ["coding", "architecture"],
    "local_id": "episode_123",
    "outcome": "failure",
    "minds_active": ["architect", "critic"],
    "privacy": "private",
    "shareable": false,
    "content": "[full episode details in markdown]"
  }
}
```

### Insight Sync

```json
{
  "operation": "create_insight",
  "data": {
    "title": "[insight summary]",
    "type": "pattern",
    "confidence": 0.75,
    "evidence_count": 5,
    "status": "validated",
    "discovered": "2026-01-05T10:00:00Z",
    "last_validated": "2026-01-05T10:00:00Z",
    "actionable": true,
    "shareable": false,
    "local_id": "insight_456",
    "content": "[full insight description]"
  }
}
```

### Pattern Sync

```json
{
  "operation": "create_pattern",
  "data": {
    "title": "[pattern name]",
    "pattern_type": "behavioral",
    "frequency": 8,
    "first_seen": "2026-01-01T10:00:00Z",
    "last_seen": "2026-01-05T10:00:00Z",
    "confidence": 0.7,
    "context": "When user opens test files",
    "shareable": false,
    "local_id": "pattern_789",
    "content": "[pattern description]"
  }
}
```

---

## Error Handling

### Common Errors

1. **Notion API Rate Limit**
   - Action: Queue item, retry after rate limit window
   - Backoff: Exponential (1min, 5min, 30min)

2. **Notion Schema Mismatch**
   - Action: Alert user, pause sync until schema fixed
   - Recovery: User updates schema, resume sync

3. **Authentication Failure**
   - Action: Alert user, disable Notion sync
   - Recovery: User updates API token, re-enable

4. **Network Timeout**
   - Action: Retry with exponential backoff
   - After 3 failures: Move to failed queue

5. **Data Validation Error**
   - Action: Log error, skip sync for this item
   - Alert: Notify user of validation failure

---

## Monitoring & Metrics

### Track These Metrics

- **Sync Success Rate**: % of syncs that succeed
- **Surprise Sync Rate**: % of synced episodes that were surprises (target: >60%)
- **Memory Extension Hit Rate**: % of queries that found value in Notion (target: >30%)
- **Queue Depth**: Number of pending items
- **Average Sync Latency**: Time from trigger to completion
- **MCP Uptime**: % of time Notion MCP is healthy

### Logging

Log all sync operations:
- Sync attempts (success/failure)
- Queue operations
- Health check results
- Error details

Store in: `.cursor/self/mcp/sync-log.json` (rotated weekly)

---

## Configuration Reference

See `.cursor/self/mcp/sync-config.json` for all configurable thresholds and settings.

