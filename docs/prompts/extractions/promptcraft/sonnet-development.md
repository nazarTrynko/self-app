# PromptCraft - Sonnet Development Reference

**Use Sonnet for:** Daily coding, UI components, bug fixes, iteration

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **State:** React hooks (useState, useEffect, useCallback)
- **Storage:** LocalStorage for history

## Project Structure

```
projects/promptcraft/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing
│   │   ├── layout.tsx            # Root layout
│   │   ├── globals.css           # Tailwind + custom styles
│   │   ├── alchemist/
│   │   │   ├── page.tsx          # Main tool
│   │   │   └── history/page.tsx  # History view
│   │   └── pricing/page.tsx      # Pricing
│   ├── components/
│   │   └── ShareModal.tsx        # Share functionality
│   └── lib/
│       ├── analysis/
│       │   ├── index.ts          # Exports
│       │   ├── types.ts          # TypeScript types
│       │   ├── analyzer.ts       # Analysis engine
│       │   ├── transformer.ts    # Transformation logic
│       │   └── patterns.ts       # Pattern definitions
│       └── stripe.ts             # Rate limiting
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Common Tasks

### Add a new component
```tsx
'use client';
import { motion } from 'framer-motion';

export default function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass-card p-6"
    >
      Content
    </motion.div>
  );
}
```

### Add a new route
Create `src/app/[route]/page.tsx`

### Style classes available
- `glass-card` - Glassmorphism card
- `btn-primary` - Gold gradient button
- `btn-secondary` - Outlined button
- `gradient-text` - Gold/purple gradient text
- `input-field` - Styled input

## Color Palette

```css
gold-400: #fbbf24
gold-500: #f59e0b
arcane-400: #c084fc
arcane-500: #a855f7
obsidian-900: #0f172a
obsidian-950: #020617
```

## Running Locally

```bash
cd projects/promptcraft
npm install
npm run dev  # Port 3005
```

