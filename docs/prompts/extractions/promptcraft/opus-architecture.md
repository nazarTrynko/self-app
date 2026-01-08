# PromptCraft - Opus Architecture Reference

**Use Claude Opus for:** Strategic decisions, complex reasoning, high-stakes planning

---

## Core Architecture

```
PromptCraft Platform
├── The Alchemist (Phase 1) ✅ COMPLETE
│   └── Prompt transformation with explanations
├── Prompt DNA (Phase 2)
│   └── Educational courses on prompt science
├── Prompt Studio (Phase 3)
│   └── Figma-like workspace for prompts
└── Marketplace (Phase 4)
    └── Buy/sell prompt systems
```

## Key Technical Decisions

### Analysis Engine Design
- **Choice:** Client-side heuristics first, AI-powered as premium
- **Rationale:** Zero API costs for free tier, instant results, works offline
- **Trade-off:** Less sophisticated than AI, but sufficient for 80% of use cases

### Pattern Detection System
7 core patterns identified:
1. Role Assignment (15% weight)
2. Context Setting (15% weight)
3. Clear Task Definition (20% weight)
4. Format Specification (10% weight)
5. Constraints & Boundaries (10% weight)
6. Audience Targeting (10% weight)
7. Tone & Style (10% weight)

### Transformation Pipeline
```
Input → Analyze → Detect Type → Apply Templates → Build Output → Explain
```

## Strategic Questions for Opus

1. **Monetization timing:** When to introduce paywall without killing growth?
2. **AI integration:** Claude API for premium - cost vs. value analysis
3. **Community building:** How to create network effects around prompts?
4. **Differentiation:** What makes this better than PromptPerfect, PromptBase?

## File References

- `src/lib/analysis/analyzer.ts` - Core analysis logic
- `src/lib/analysis/transformer.ts` - Transformation engine
- `src/lib/analysis/patterns.ts` - The 7 patterns
- `src/app/page.tsx` - Landing page with positioning

