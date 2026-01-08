# PromptCraft - Composer Bulk Reference

**Use Cursor Composer for:** Multi-file changes, bulk updates, refactoring

---

## Bulk Operations Completed

### Initial Setup (All files created at once)
- package.json
- next.config.js
- tailwind.config.js
- tsconfig.json
- postcss.config.js
- src/app/layout.tsx
- src/app/globals.css

### Analysis Engine (Multiple interconnected files)
- src/lib/analysis/types.ts
- src/lib/analysis/patterns.ts
- src/lib/analysis/analyzer.ts
- src/lib/analysis/transformer.ts
- src/lib/analysis/index.ts

## Common Composer Tasks

### Rename across project
```
Find: oldName
Replace: newName
Files: src/**/*.{ts,tsx}
```

### Add import to multiple files
```typescript
// Add to all page files
import { motion } from 'framer-motion';
```

### Update component props
```typescript
// Before
interface Props {
  title: string;
}

// After (add to all components using this pattern)
interface Props {
  title: string;
  subtitle?: string;
}
```

## File Dependencies Map

```
page.tsx (landing)
└── No external dependencies

alchemist/page.tsx
├── @/lib/analysis (transformPrompt)
├── @/lib/analysis/types
├── @/lib/stripe (canTransform, recordTransformation)
└── @/components/ShareModal

history/page.tsx
└── Uses localStorage directly

pricing/page.tsx
└── No external dependencies

ShareModal.tsx
└── @/lib/analysis/types
```

## Refactoring Opportunities

### Extract shared layout
Current: Each page has its own nav
Target: Shared navigation component

### Extract card component
Current: glass-card class repeated
Target: `<GlassCard>` component

### Extract animation variants
Current: fadeInUp defined in each file
Target: Shared animation config

## Quick Commands

```bash
# Find all TODO comments
grep -r "TODO" src/

# Find all console.logs
grep -r "console.log" src/

# Check for unused imports
npx eslint src/ --rule 'no-unused-vars: error'
```

