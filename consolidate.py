#!/usr/bin/env python3
"""
SELF Project Consolidator
Recursively combines all project files into a single text file.
"""

import os
from pathlib import Path
from datetime import datetime

# Configuration
ROOT_DIR = Path(__file__).parent
OUTPUT_FILE = ROOT_DIR / "CONSOLIDATED_PROJECT.txt"

# Directories to skip
SKIP_DIRS = {
    'node_modules',
    '.git',
    '__pycache__',
    '.venv',
    'venv',
    '.DS_Store',
    'dist',
    'build',
}

# File extensions to include
INCLUDE_EXTENSIONS = {
    '.md', '.json', '.html', '.css', '.js', '.ts', '.py',
    '.txt', '.yaml', '.yml', '.toml', '.sh', '.log'
}

# Files to skip
SKIP_FILES = {
    'CONSOLIDATED_PROJECT.txt',
    'consolidate.py',
    'package-lock.json',
}


def should_skip_dir(dir_name: str) -> bool:
    return dir_name in SKIP_DIRS or dir_name.startswith('.')


def should_include_file(file_path: Path) -> bool:
    if file_path.name in SKIP_FILES:
        return False
    return file_path.suffix.lower() in INCLUDE_EXTENSIONS


def get_file_tree(root: Path) -> list[str]:
    """Generate a tree structure of the project."""
    tree = []
    
    def walk(path: Path, prefix: str = ""):
        entries = sorted(path.iterdir(), key=lambda x: (x.is_file(), x.name.lower()))
        
        dirs = [e for e in entries if e.is_dir() and not should_skip_dir(e.name)]
        files = [e for e in entries if e.is_file() and should_include_file(e)]
        
        for i, entry in enumerate(dirs + files):
            is_last = i == len(dirs) + len(files) - 1
            connector = "└── " if is_last else "├── "
            tree.append(f"{prefix}{connector}{entry.name}")
            
            if entry.is_dir():
                extension = "    " if is_last else "│   "
                walk(entry, prefix + extension)
    
    tree.append(root.name + "/")
    walk(root)
    return tree


def collect_files(root: Path) -> list[Path]:
    """Collect all files to include."""
    files = []
    
    for dirpath, dirnames, filenames in os.walk(root):
        # Filter out skipped directories
        dirnames[:] = [d for d in dirnames if not should_skip_dir(d)]
        
        for filename in sorted(filenames):
            file_path = Path(dirpath) / filename
            if should_include_file(file_path):
                files.append(file_path)
    
    return files


def main():
    print("🔍 Scanning project...")
    
    # Get file tree
    tree = get_file_tree(ROOT_DIR)
    
    # Collect all files
    files = collect_files(ROOT_DIR)
    
    print(f"📁 Found {len(files)} files to consolidate")
    
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as out:
        # Header
        out.write("=" * 80 + "\n")
        out.write("SELF PROJECT - CONSOLIDATED SOURCE FILES\n")
        out.write(f"Generated: {datetime.now().isoformat()}\n")
        out.write(f"Total files: {len(files)}\n")
        out.write("=" * 80 + "\n\n")
        
        # Project structure
        out.write("=" * 80 + "\n")
        out.write("PROJECT STRUCTURE\n")
        out.write("=" * 80 + "\n\n")
        for line in tree:
            out.write(line + "\n")
        out.write("\n")
        
        # File contents
        out.write("=" * 80 + "\n")
        out.write("FILE CONTENTS\n")
        out.write("=" * 80 + "\n\n")
        
        for file_path in files:
            relative_path = file_path.relative_to(ROOT_DIR)
            
            # File header
            out.write("\n" + "#" * 80 + "\n")
            out.write(f"# FILE: {relative_path}\n")
            out.write("#" * 80 + "\n\n")
            
            try:
                content = file_path.read_text(encoding='utf-8')
                out.write(content)
                if not content.endswith('\n'):
                    out.write('\n')
            except Exception as e:
                out.write(f"[ERROR READING FILE: {e}]\n")
            
            print(f"  ✓ {relative_path}")
    
    print(f"\n✅ Done! Output: {OUTPUT_FILE}")
    print(f"   Size: {OUTPUT_FILE.stat().st_size / 1024:.1f} KB")


if __name__ == "__main__":
    main()

