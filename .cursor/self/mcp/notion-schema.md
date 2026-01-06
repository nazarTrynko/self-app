# Notion Workspace Schema for SELF Memory Network

This document defines the Notion database schemas for SELF's external memory extension.

---

## Database 1: SELF Knowledge Base

**Purpose:** Working memory database - stores significant episodes, decisions, and learnings that extend SELF's cognitive capabilities across projects.

**Database Properties:**

| Property Name      | Type         | Description                                                                     | Required               |
| ------------------ | ------------ | ------------------------------------------------------------------------------- | ---------------------- |
| **Title**          | Title        | Episode/entity title (auto-generated from summary)                              | Yes                    |
| **Type**           | Select       | `episode`, `decision`, `learning`, `concept`, `tool`                            | Yes                    |
| **Confidence**     | Number       | Confidence score (0.0-1.0)                                                      | Yes                    |
| **Surprise Score** | Number       | Calculated: `\|confidence - actual_outcome\|`                                   | Yes                    |
| **Timestamp**      | Date         | When the episode occurred                                                       | Yes                    |
| **Project**        | Text         | Project identifier (e.g., "self-app", "project-x")                              | No                     |
| **Tags**           | Multi-select | Categorization tags                                                             | No                     |
| **Local ID**       | Text         | Reference to local JSON entity ID                                               | Yes                    |
| **Notion ID**      | Text         | Self-reference (for linking)                                                    | Auto                   |
| **Outcome**        | Select       | `success`, `failure`, `partial`, `abandoned`                                    | Yes                    |
| **Minds Active**   | Multi-select | Which minds were active: `architect`, `oracle`, `critic`, `creator`, `guardian` | No                     |
| **Privacy**        | Select       | `public`, `private`, `sensitive`                                                | Yes (default: private) |
| **Shareable**      | Checkbox     | Can be shared in SELF Network                                                   | No                     |
| **Synced At**      | Date         | When synced to Notion                                                           | Auto                   |

**Content Structure:**

- Rich text content with full episode details
- Code blocks for technical context
- Tables for structured data
- Links to related entities

---

## Database 2: SELF Evolution Generations

**Purpose:** Track SELF's self-improvement through genetic algorithm evolution of prompts.

**Database Properties:**

| Property Name      | Type   | Description                                                       | Required |
| ------------------ | ------ | ----------------------------------------------------------------- | -------- |
| **Title**          | Title  | Generation identifier (e.g., "Generation 001")                    | Yes      |
| **Generation**     | Number | Generation number (1, 2, 3...)                                    | Yes      |
| **Fitness Score**  | Number | Overall fitness (0.0-1.0)                                         | Yes      |
| **Effectiveness**  | Number | Component score (0.0-1.0)                                         | Yes      |
| **Satisfaction**   | Number | Component score (0.0-1.0)                                         | Yes      |
| **Accuracy**       | Number | Component score (0.0-1.0)                                         | Yes      |
| **Efficiency**     | Number | Component score (0.0-1.0)                                         | Yes      |
| **Adaptability**   | Number | Component score (0.0-1.0)                                         | Yes      |
| **Mutation Type**  | Select | `crossover`, `point_mutation`, `insertion`, `deletion`, `initial` | Yes      |
| **Parent IDs**     | Text   | Comma-separated parent generation IDs                             | No       |
| **Prompt Version** | Text   | File path to prompt (e.g., "generation-001/base_v1.md")           | Yes      |
| **Created**        | Date   | When generation was created                                       | Yes      |
| **Status**         | Select | `active`, `superseded`, `experimental`                            | Yes      |

**Content Structure:**

- Full prompt content
- Performance metrics over time
- Mutation details and rationale
- Lineage visualization (via relations)

---

## Database 3: SELF Discovered Insights

**Purpose:** Store validated insights, patterns, and correlations discovered through interaction analysis.

**Database Properties:**

| Property Name      | Type     | Description                                                         | Required |
| ------------------ | -------- | ------------------------------------------------------------------- | -------- |
| **Title**          | Title    | Insight summary                                                     | Yes      |
| **Type**           | Select   | `pattern`, `preference`, `anti_pattern`, `correlation`, `intuition` | Yes      |
| **Confidence**     | Number   | Confidence score (0.0-1.0)                                          | Yes      |
| **Evidence Count** | Number   | Number of observations supporting this insight                      | Yes      |
| **Status**         | Select   | `validated`, `pending`, `rejected`, `superseded`                    | Yes      |
| **Discovered**     | Date     | When first discovered                                               | Yes      |
| **Last Validated** | Date     | Last time evidence was reviewed                                     | Yes      |
| **Actionable**     | Checkbox | Can be acted upon                                                   | Yes      |
| **Shareable**      | Checkbox | Can be shared in SELF Network                                       | No       |
| **Network Votes**  | Number   | Quality votes from other SELF instances (if shared)                 | No       |
| **Local ID**       | Text     | Reference to local JSON insight ID                                  | Yes      |

**Content Structure:**

- Detailed insight description
- Evidence examples
- Actionable recommendations
- Related insights (via relations)

---

## Database 4: SELF Behavioral Patterns

**Purpose:** Track recurring behavioral patterns across episodes and projects.

**Database Properties:**

| Property Name       | Type     | Description                                                           | Required |
| ------------------- | -------- | --------------------------------------------------------------------- | -------- |
| **Title**           | Title    | Pattern name                                                          | Yes      |
| **Pattern Type**    | Select   | `behavioral`, `sequential`, `temporal`, `contextual`, `correlational` | Yes      |
| **Frequency**       | Number   | Number of occurrences                                                 | Yes      |
| **First Seen**      | Date     | First occurrence timestamp                                            | Yes      |
| **Last Seen**       | Date     | Most recent occurrence                                                | Yes      |
| **Confidence**      | Number   | Pattern confidence (0.0-1.0)                                          | Yes      |
| **Context**         | Text     | When/where this pattern appears                                       | No       |
| **Shareable**       | Checkbox | Can be shared in SELF Network                                         | No       |
| **Network Quality** | Number   | Average quality rating from network (if shared)                       | No       |
| **Local ID**        | Text     | Reference to local JSON pattern ID                                    | Yes      |

**Content Structure:**

- Pattern description
- Example occurrences
- Contextual triggers
- Related patterns (via relations)

---

## Database 5: SELF Shared Knowledge Hub (Optional - for Network)

**Purpose:** Public knowledge base for SELF Network - validated insights shared across instances.

**Database Properties:**

| Property Name       | Type         | Description                                                 | Required |
| ------------------- | ------------ | ----------------------------------------------------------- | -------- |
| **Title**           | Title        | Knowledge item title                                        | Yes      |
| **Type**            | Select       | `insight`, `pattern`, `prompt`, `best_practice`             | Yes      |
| **Quality Score**   | Number       | Aggregated quality rating (0.0-1.0)                         | Yes      |
| **Vote Count**      | Number       | Number of SELF instances that validated this                | Yes      |
| **Source Instance** | Text         | Original SELF instance identifier                           | Yes      |
| **Shared At**       | Date         | When first shared                                           | Yes      |
| **Last Updated**    | Date         | Last quality update                                         | Yes      |
| **Category**        | Select       | `coding`, `architecture`, `strategy`, `patterns`, `prompts` | Yes      |
| **Tags**            | Multi-select | Searchable tags                                             | No       |

**Content Structure:**

- Full knowledge content
- Usage examples
- Quality metrics
- Source attribution

---

## Setup Instructions

1. **Create each database in Notion:**

   - Go to your Notion workspace
   - Create a new database (Table view)
   - Add all properties listed above
   - Set appropriate default values

2. **Copy Database IDs:**

   - Each Notion database has a unique ID in its URL
   - Format: `https://notion.so/workspace/[DATABASE_ID]`
   - Extract the ID (UUID format)

3. **Configure in SELF:**

   - Add database IDs to `.cursor/self/mcp/sync-config.json`
   - See sync-config.json for format

4. **Initial Sync:**
   - Run `/self sync` to perform initial sync
   - Verify data appears correctly in Notion

---

## Notes

- **Privacy:** All databases default to private. Only items marked "Shareable" appear in Network.
- **Relations:** Use Notion's relation property to link related entities across databases.
- **Templates:** Create Notion templates for common entry types to speed up manual entry.
- **Views:** Create filtered views (e.g., "High Surprise Episodes", "Validated Insights") for easier navigation.
