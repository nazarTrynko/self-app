# Export Instructions - Prompt Craft Studio

## Current Location

The project is currently located at:
```
/Users/nazartrynko/.cursor/worktrees/self-app/uqu/projects/prompt-craft-studio/
```

## Option 1: Copy to New Location (Recommended)

To save this as a completely separate project, run:

```bash
# Choose your destination directory
DEST_DIR="$HOME/prompt-craft-studio"  # or wherever you want it

# Copy the entire project
cp -r /Users/nazartrynko/.cursor/worktrees/self-app/uqu/projects/prompt-craft-studio "$DEST_DIR"

# Navigate to the new location
cd "$DEST_DIR"

# Install dependencies
npm install

# You're ready to go!
npm run dev
```

## Option 2: Use the Archive

An archive has been created at:
```
/tmp/prompt-craft-studio.tar.gz
```

To extract it to a new location:

```bash
# Choose your destination directory
DEST_DIR="$HOME/prompt-craft-studio"

# Extract the archive
tar -xzf /tmp/prompt-craft-studio.tar.gz -C "$(dirname "$DEST_DIR")"
mv "$(dirname "$DEST_DIR")/prompt-craft-studio" "$DEST_DIR"

# Navigate and install
cd "$DEST_DIR"
npm install
npm run dev
```

## Option 3: Initialize as Git Repository

If you want to version control it:

```bash
cd /path/to/prompt-craft-studio
git init
git add .
git commit -m "Initial commit: Prompt Craft Studio MVP"
```

## What's Included

✅ Complete Next.js 14 application
✅ All source files (25+ files)
✅ Database schema
✅ Configuration files
✅ Documentation
✅ Implementation status

## Next Steps After Export

1. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   # Add your API keys
   ```

2. **Set up Supabase**:
   - Create project at https://supabase.com
   - Run `src/db/schema.sql` in SQL editor
   - Copy credentials to `.env.local`

3. **Add OpenAI API key** to `.env.local`

4. **Run the project**:
   ```bash
   npm run dev
   ```

## Project is Ready!

The project is structurally complete and ready to use. Just add API keys and you're good to go!

