# SELF Attention System

**Purpose:** Determine what matters most in the current context and allocate cognitive resources accordingly.

---

## Attention Hierarchy

The SELF system prioritizes attention in this order:

```
1. IMMEDIATE DANGER    → Guardian mind activates
2. USER EXPLICIT ASK   → Direct request handling
3. CONTEXT SIGNALS     → File types, patterns, keywords
4. MEMORY RELEVANCE    → Past interactions, preferences
5. PREDICTIVE MATCHES  → Pre-computed likely queries
6. AMBIENT AWARENESS   → Background pattern monitoring
```

---

## Attention Triggers

### High Priority (Immediate Focus)

| Signal | Weight | Mind Activation |
|--------|--------|-----------------|
| Error in code | 1.0 | Guardian + Architect |
| "help", "fix", "broken" | 0.95 | Guardian |
| Security keywords | 0.95 | Guardian |
| Explicit question | 0.9 | Oracle |
| File creation/deletion | 0.85 | Guardian + Architect |

### Medium Priority (Active Consideration)

| Signal | Weight | Mind Activation |
|--------|--------|-----------------|
| Code file open | 0.7 | Architect |
| Planning language | 0.7 | Oracle |
| "should", "could", "maybe" | 0.65 | Oracle + Critic |
| Multiple files mentioned | 0.6 | Architect |
| Test files | 0.6 | Critic + Guardian |

### Low Priority (Background Awareness)

| Signal | Weight | Mind Activation |
|--------|--------|-----------------|
| Documentation files | 0.4 | Creator |
| Config files | 0.4 | Architect |
| README, changelog | 0.3 | Creator |
| General browsing | 0.2 | All (minimal) |

---

## Context Window Allocation

Based on attention weights, allocate cognitive resources:

```
┌─────────────────────────────────────────────────────────┐
│                  CONTEXT BUDGET: 100%                    │
├─────────────────────────────────────────────────────────┤
│ PRIMARY FOCUS (60%)                                      │
│   └─ Highest attention weight items                      │
│                                                          │
│ SUPPORTING CONTEXT (25%)                                 │
│   └─ Related files, history, memory                      │
│                                                          │
│ PREDICTIVE CACHE (10%)                                   │
│   └─ Pre-computed likely next queries                    │
│                                                          │
│ AMBIENT MONITORING (5%)                                  │
│   └─ Background pattern detection                        │
└─────────────────────────────────────────────────────────┘
```

---

## Attention State Schema

```json
{
  "current_focus": {
    "primary_topic": "string",
    "confidence": 0.0-1.0,
    "active_minds": ["architect", "oracle"],
    "context_files": ["path/to/file"],
    "attention_weights": {
      "file_a": 0.8,
      "file_b": 0.3
    }
  },
  "attention_history": [
    {
      "timestamp": "ISO-8601",
      "focus": "string",
      "duration_ms": 1234,
      "outcome": "successful|abandoned|pivoted"
    }
  ],
  "suppressed_signals": [],
  "attention_drift_warning": false
}
```

---

## Dynamic Attention Rules

### Rule 1: Escalation
If confidence drops below 0.5 for 3+ interactions, escalate to multi-mind mode.

### Rule 2: Focus Lock
When user explicitly states a goal, lock attention until goal completion or explicit pivot.

### Rule 3: Interrupt Handling
Only Guardian mind can interrupt a focus lock (for safety/error conditions).

### Rule 4: Attention Decay
Unaddressed signals decay by 10% per interaction, preventing stale focus.

### Rule 5: Memory Boost
Items matching memory graph patterns get +20% attention weight.

---

## Integration Points

- **Memory System:** Attention weights influence what gets stored
- **Prediction System:** High-attention items seed prediction queries
- **Cognition Modes:** Attention determines which minds activate
- **Evolution System:** Attention patterns inform fitness scoring

