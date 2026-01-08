# PromptCraft - Codex Scaffolding Reference

**Use GPT Codex for:** Boilerplate, repetitive code, type definitions

---

## Type Definitions

```typescript
// src/lib/analysis/types.ts

export interface PromptAnalysis {
  score: number;
  issues: AnalysisIssue[];
  improvements: Improvement[];
  patterns: PatternMatch[];
  metrics: PromptMetrics;
}

export interface AnalysisIssue {
  id: string;
  type: IssueType;
  severity: 'low' | 'medium' | 'high';
  message: string;
  suggestion: string;
}

export type IssueType = 
  | 'missing_role'
  | 'missing_context'
  | 'missing_format'
  | 'missing_constraints'
  | 'too_vague'
  | 'too_short'
  | 'missing_audience'
  | 'missing_tone';

export interface Improvement {
  id: string;
  category: ImprovementCategory;
  original: string | null;
  improved: string;
  explanation: string;
  impact: 'low' | 'medium' | 'high';
}

export type ImprovementCategory = 
  | 'role_assignment'
  | 'context_addition'
  | 'format_specification'
  | 'constraint_setting'
  | 'audience_targeting'
  | 'tone_definition';

export interface TransformationResult {
  originalPrompt: string;
  transformedPrompt: string;
  analysis: PromptAnalysis;
  sections: TransformedSection[];
}
```

## Scaffolding Patterns

### New Analysis Pattern
```typescript
{
  id: 'pattern_name',
  name: 'Human Readable Name',
  description: 'What this pattern does',
  indicators: ['keyword1', 'keyword2', 'phrase'],
  weight: 10, // 0-20
}
```

### New Transformation Rule
```typescript
const TEMPLATES: Record<string, string> = {
  type1: 'Template for type 1 prompts',
  type2: 'Template for type 2 prompts',
  default: 'Fallback template',
};
```

### New Page Route
```typescript
// src/app/[route]/page.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PageName() {
  return (
    <div className="min-h-screen pt-24 section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Content */}
      </motion.div>
    </div>
  );
}
```

## Config Files

### package.json scripts
```json
{
  "dev": "next dev -p 3005",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

### Tailwind custom colors
```javascript
// tailwind.config.js
colors: {
  gold: { 400: '#fbbf24', 500: '#f59e0b' },
  arcane: { 400: '#c084fc', 500: '#a855f7' },
  obsidian: { 900: '#0f172a', 950: '#020617' },
}
```

