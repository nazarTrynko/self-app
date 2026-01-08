# Prompt Craft Studio

The unified platform for prompt crafters. Design, transform, teach, and monetize your prompt craft.

## Features

### Phase 1 MVP (Current)
- **Studio**: Visual prompt builder with component-based design
- **Alchemist**: Prompt analysis and transformation engine
- **Workshop Landing**: Beautiful entry point to all pillars

### Phase 2 (Planned)
- **Journeys**: Guided prompt experiences
- **DNA**: Prompt science and pattern library

### Phase 3 (Planned)
- **Marketplace**: Creator economy for selling prompts

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Supabase** (Database & Auth)
- **OpenAI API** (Prompt testing & transformation)
- **Stripe** (Payments)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
# Fill in your Supabase, OpenAI, and Stripe keys
```

3. Set up Supabase:
- Create a new Supabase project
- Run the SQL schema from `src/db/schema.sql`
- Copy your Supabase URL and anon key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── page.tsx      # Workshop landing
│   ├── studio/       # Visual prompt builder
│   ├── alchemist/    # Prompt transformer
│   ├── journeys/    # Guided experiences (Phase 2)
│   ├── dna/         # Prompt science (Phase 2)
│   └── marketplace/  # Creator marketplace (Phase 3)
├── components/       # React components
├── lib/             # Utilities and helpers
│   └── supabase/    # Supabase client setup
├── types/           # TypeScript type definitions
├── store/           # Zustand state management
└── db/              # Database schema and migrations
```

## Development Status

- ✅ Project setup
- ✅ Landing page (Workshop)
- ✅ Studio MVP (visual prompt builder)
- ✅ Alchemist MVP (prompt analysis & transformation)
- ⏳ Supabase integration (needs API keys)
- ⏳ OpenAI integration (needs API keys)
- ⏳ User authentication
- ⏳ Database persistence

## Next Steps

1. Set up Supabase project and run schema
2. Integrate OpenAI API for prompt testing
3. Add user authentication
4. Implement database persistence for prompts
5. Add live prompt testing in Studio
6. Enhance Alchemist with real AI analysis

