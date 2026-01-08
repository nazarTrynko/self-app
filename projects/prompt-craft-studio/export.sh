#!/bin/bash

# Export Script for Prompt Craft Studio
# This script copies the project to a new standalone location

set -e

SOURCE_DIR="/Users/nazartrynko/.cursor/worktrees/self-app/uqu/projects/prompt-craft-studio"
DEFAULT_DEST="$HOME/prompt-craft-studio"

# Get destination from user or use default
DEST_DIR="${1:-$DEFAULT_DEST}"

echo "🚀 Exporting Prompt Craft Studio..."
echo "Source: $SOURCE_DIR"
echo "Destination: $DEST_DIR"
echo ""

# Check if source exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "❌ Error: Source directory not found: $SOURCE_DIR"
    exit 1
fi

# Check if destination already exists
if [ -d "$DEST_DIR" ]; then
    echo "⚠️  Warning: Destination already exists: $DEST_DIR"
    read -p "Overwrite? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Cancelled."
        exit 1
    fi
    rm -rf "$DEST_DIR"
fi

# Create destination directory
mkdir -p "$(dirname "$DEST_DIR")"

# Copy project
echo "📦 Copying files..."
cp -r "$SOURCE_DIR" "$DEST_DIR"

# Remove .git if it exists (to make it a fresh project)
if [ -d "$DEST_DIR/.git" ]; then
    rm -rf "$DEST_DIR/.git"
fi

echo "✅ Project exported successfully!"
echo ""
echo "📝 Next steps:"
echo "   cd $DEST_DIR"
echo "   npm install"
echo "   cp .env.example .env.local"
echo "   # Add your API keys to .env.local"
echo "   npm run dev"
echo ""
echo "🎉 Happy coding!"

