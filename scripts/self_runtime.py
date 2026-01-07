#!/usr/bin/env python3
"""
SELF Runtime - Synthetic Emergent Learning Framework
A lightweight CLI for file I/O, validation, and system operations.

Usage:
    python self_runtime.py status          - Show system health and state
    python self_runtime.py init            - Initialize/reset all JSON files
    python self_runtime.py backup          - Create backup of all state files
    python self_runtime.py memory add      - Add an episode to memory
    python self_runtime.py memory prune    - Prune old memory entries
    python self_runtime.py validate        - Validate all JSON files
    python self_runtime.py onboard         - Interactive onboarding flow
"""

import json
import os
import sys
import shutil
from datetime import datetime, timedelta
from pathlib import Path
from typing import Any, Dict, List, Optional
import uuid
import argparse

# Configuration
SELF_ROOT = Path(__file__).parent.parent / ".cursor" / "self"
BACKUP_DIR = SELF_ROOT / "backups"
CONSCIOUSNESS_DIR = SELF_ROOT / "consciousness"
EMERGENCE_DIR = SELF_ROOT / "emergence"
EVOLUTION_DIR = SELF_ROOT / "evolution"

# File paths
FILES = {
    "memory": CONSCIOUSNESS_DIR / "memory.json",
    "predictions": CONSCIOUSNESS_DIR / "predictions.json",
    "patterns": EMERGENCE_DIR / "patterns.json",
    "insights": EMERGENCE_DIR / "insights.json",
    "intuitions": EMERGENCE_DIR / "intuitions.json",
    "fitness": EVOLUTION_DIR / "fitness.json",
}


def load_json(path: Path) -> Optional[Dict]:
    """Load and parse JSON file with error handling."""
    try:
        if not path.exists():
            print(f"⚠️  File not found: {path}")
            return None
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except json.JSONDecodeError as e:
        print(f"❌ JSON parse error in {path.name}: {e}")
        return None
    except Exception as e:
        print(f"❌ Error reading {path.name}: {e}")
        return None


def save_json(path: Path, data: Dict, backup: bool = True) -> bool:
    """Save JSON file with optional backup."""
    try:
        if backup and path.exists():
            create_file_backup(path)
        
        path.parent.mkdir(parents=True, exist_ok=True)
        with open(path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        return True
    except Exception as e:
        print(f"❌ Error writing {path.name}: {e}")
        return False


def create_file_backup(path: Path) -> Optional[Path]:
    """Create a timestamped backup of a file."""
    if not path.exists():
        return None
    
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_name = f"{path.stem}_{timestamp}{path.suffix}"
    backup_path = BACKUP_DIR / backup_name
    
    shutil.copy2(path, backup_path)
    return backup_path


def validate_json_schema(data: Dict, schema_type: str) -> List[str]:
    """Validate JSON data against expected schema. Returns list of errors."""
    errors = []
    
    if schema_type == "memory":
        required_keys = ["metadata", "entities", "relationships", "episodes", "insights"]
        for key in required_keys:
            if key not in data:
                errors.append(f"Missing required key: {key}")
        
        if "metadata" in data:
            meta_required = ["created", "last_updated", "version"]
            for key in meta_required:
                if key not in data["metadata"]:
                    errors.append(f"Missing metadata.{key}")
    
    elif schema_type == "predictions":
        required_keys = ["metadata", "config", "prediction_models", "active_predictions"]
        for key in required_keys:
            if key not in data:
                errors.append(f"Missing required key: {key}")
    
    elif schema_type == "patterns":
        required_keys = ["metadata", "pattern_types", "discovered_patterns"]
        for key in required_keys:
            if key not in data:
                errors.append(f"Missing required key: {key}")
    
    elif schema_type == "insights":
        required_keys = ["metadata", "insight_categories", "generated_insights"]
        for key in required_keys:
            if key not in data:
                errors.append(f"Missing required key: {key}")
    
    elif schema_type == "fitness":
        required_keys = ["metadata", "fitness_dimensions", "scoring_signals", "prompt_variants"]
        for key in required_keys:
            if key not in data:
                errors.append(f"Missing required key: {key}")
    
    return errors


def cmd_status():
    """Show system status and health."""
    print("\n" + "=" * 60)
    print("  SELF System Status")
    print("=" * 60 + "\n")
    
    # Check each file
    all_valid = True
    total_episodes = 0
    total_patterns = 0
    total_insights = 0
    
    for name, path in FILES.items():
        if not path.exists():
            print(f"  ❌ {name:12} - NOT FOUND")
            all_valid = False
            continue
        
        data = load_json(path)
        if data is None:
            print(f"  ❌ {name:12} - INVALID JSON")
            all_valid = False
            continue
        
        errors = validate_json_schema(data, name)
        if errors:
            print(f"  ⚠️  {name:12} - SCHEMA ERRORS: {len(errors)}")
            all_valid = False
        else:
            # Get stats
            size = path.stat().st_size
            size_str = f"{size:,} bytes"
            
            if name == "memory":
                total_episodes = len(data.get("episodes", {}).get("recent", []))
                total_episodes += len(data.get("episodes", {}).get("significant", []))
                print(f"  ✅ {name:12} - {size_str:>12} | {total_episodes} episodes")
            elif name == "patterns":
                total_patterns = len(data.get("discovered_patterns", []))
                total_patterns += len(data.get("built_in_patterns", []))
                print(f"  ✅ {name:12} - {size_str:>12} | {total_patterns} patterns")
            elif name == "insights":
                total_insights = len(data.get("generated_insights", []))
                print(f"  ✅ {name:12} - {size_str:>12} | {total_insights} insights")
            elif name == "predictions":
                active = len(data.get("active_predictions", []))
                print(f"  ✅ {name:12} - {size_str:>12} | {active} active predictions")
            elif name == "fitness":
                gen = data.get("metadata", {}).get("current_generation", 1)
                print(f"  ✅ {name:12} - {size_str:>12} | generation {gen}")
            else:
                print(f"  ✅ {name:12} - {size_str:>12}")
    
    print("\n" + "-" * 60)
    
    # Summary
    if all_valid:
        print("  System Health: ✅ ALL SYSTEMS OPERATIONAL")
    else:
        print("  System Health: ⚠️  ISSUES DETECTED")
    
    # Memory stats
    memory_data = load_json(FILES["memory"])
    if memory_data:
        user = memory_data.get("entities", {}).get("users", [{}])[0]
        prefs = user.get("preferences", {})
        coding_style = prefs.get("coding_style") or "Not set"
        risk = prefs.get("risk_tolerance", "medium")
        print(f"\n  User Profile:")
        print(f"    Coding Style: {coding_style}")
        print(f"    Risk Tolerance: {risk}")
    
    # Backup info
    if BACKUP_DIR.exists():
        backups = list(BACKUP_DIR.glob("*.json"))
        print(f"\n  Backups: {len(backups)} files in {BACKUP_DIR.name}/")
    
    print("\n" + "=" * 60 + "\n")


def cmd_init(force: bool = False):
    """Initialize or reset all JSON files to defaults."""
    print("\n🔧 Initializing SELF system files...\n")
    
    for name, path in FILES.items():
        if path.exists() and not force:
            print(f"  ⏭️  {name:12} - exists (use --force to reset)")
            continue
        
        if path.exists():
            create_file_backup(path)
            print(f"  📦 {name:12} - backed up")
        
        # Create default content based on file type
        if name == "memory":
            data = create_default_memory()
        elif name == "predictions":
            data = create_default_predictions()
        elif name == "patterns":
            data = create_default_patterns()
        elif name == "insights":
            data = create_default_insights()
        elif name == "intuitions":
            data = create_default_intuitions()
        elif name == "fitness":
            data = create_default_fitness()
        else:
            data = {}
        
        if save_json(path, data, backup=False):
            print(f"  ✅ {name:12} - initialized")
        else:
            print(f"  ❌ {name:12} - failed")
    
    print("\n✅ Initialization complete.\n")


def cmd_backup():
    """Create backup of all state files."""
    print("\n📦 Creating backups...\n")
    
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_count = 0
    
    for name, path in FILES.items():
        if not path.exists():
            print(f"  ⏭️  {name:12} - not found, skipping")
            continue
        
        backup_path = create_file_backup(path)
        if backup_path:
            print(f"  ✅ {name:12} -> {backup_path.name}")
            backup_count += 1
    
    print(f"\n✅ Created {backup_count} backups in {BACKUP_DIR}/\n")


def cmd_validate():
    """Validate all JSON files."""
    print("\n🔍 Validating JSON files...\n")
    
    all_valid = True
    for name, path in FILES.items():
        if not path.exists():
            print(f"  ⏭️  {name:12} - not found")
            continue
        
        data = load_json(path)
        if data is None:
            print(f"  ❌ {name:12} - invalid JSON")
            all_valid = False
            continue
        
        errors = validate_json_schema(data, name)
        if errors:
            print(f"  ⚠️  {name:12} - {len(errors)} schema errors:")
            for err in errors[:3]:
                print(f"        - {err}")
            all_valid = False
        else:
            print(f"  ✅ {name:12} - valid")
    
    print()
    if all_valid:
        print("✅ All files valid.\n")
    else:
        print("⚠️  Some files have issues.\n")


def cmd_memory_add(summary: str, episode_type: str = "task", outcome: str = "success", 
                   confidence: float = 0.7, minds: List[str] = None):
    """Add an episode to memory."""
    memory = load_json(FILES["memory"])
    if memory is None:
        print("❌ Cannot load memory.json")
        return False
    
    # Create episode
    episode = {
        "id": f"ep_{uuid.uuid4().hex[:12]}",
        "timestamp": datetime.now().isoformat(),
        "type": episode_type,
        "summary": summary,
        "entities_involved": [],
        "outcome": outcome,
        "confidence": confidence,
        "minds_active": minds or ["architect"],
        "learnings": [],
        "emotional_valence": 0.0
    }
    
    # Calculate surprise score
    outcome_values = {"success": 1.0, "failure": 0.0, "partial": 0.5, "abandoned": 0.0}
    actual = outcome_values.get(outcome, 0.5)
    surprise = abs(confidence - actual)
    episode["surprise_score"] = round(surprise, 2)
    
    # Add to recent episodes
    if "episodes" not in memory:
        memory["episodes"] = {"recent": [], "significant": []}
    
    memory["episodes"]["recent"].insert(0, episode)
    
    # Keep only last 50 recent episodes
    memory["episodes"]["recent"] = memory["episodes"]["recent"][:50]
    
    # Move to significant if high surprise
    if surprise >= 0.3:
        memory["episodes"]["significant"].insert(0, episode)
        memory["episodes"]["significant"] = memory["episodes"]["significant"][:20]
    
    # Update metadata
    memory["metadata"]["last_updated"] = datetime.now().isoformat()
    memory["metadata"]["total_episodes"] = (
        len(memory["episodes"]["recent"]) + 
        len(memory["episodes"]["significant"])
    )
    
    if save_json(FILES["memory"], memory):
        surprise_indicator = " ⚡ HIGH SURPRISE" if surprise >= 0.3 else ""
        print(f"✅ Episode added: {episode['id']}{surprise_indicator}")
        print(f"   Confidence: {confidence} | Outcome: {outcome} | Surprise: {surprise:.2f}")
        return True
    return False


def cmd_memory_prune(days: int = 30):
    """Prune memory entries older than specified days."""
    memory = load_json(FILES["memory"])
    if memory is None:
        print("❌ Cannot load memory.json")
        return False
    
    cutoff = datetime.now() - timedelta(days=days)
    cutoff_str = cutoff.isoformat()
    
    original_recent = len(memory.get("episodes", {}).get("recent", []))
    
    # Filter recent episodes
    memory["episodes"]["recent"] = [
        ep for ep in memory.get("episodes", {}).get("recent", [])
        if ep.get("timestamp", "") > cutoff_str
    ]
    
    pruned = original_recent - len(memory["episodes"]["recent"])
    
    memory["metadata"]["last_updated"] = datetime.now().isoformat()
    
    if save_json(FILES["memory"], memory):
        print(f"✅ Pruned {pruned} episodes older than {days} days")
        return True
    return False


def cmd_memory_compress():
    """Compress memory using hot/warm/cold tiering."""
    memory = load_json(FILES["memory"])
    if memory is None:
        print("❌ Cannot load memory.json")
        return False
    
    print("\n🗜️  Memory Compression\n")
    
    now = datetime.now()
    hot_cutoff = (now - timedelta(days=7)).isoformat()
    warm_cutoff = (now - timedelta(days=30)).isoformat()
    
    episodes = memory.get("episodes", {}).get("recent", [])
    if not isinstance(episodes, list):
        episodes = []
    
    # Categorize episodes
    hot = []    # < 7 days: full detail
    warm = []   # 7-30 days: summarized
    cold = []   # > 30 days: archived/removed
    
    for ep in episodes:
        if not isinstance(ep, dict):
            continue
        ts = ep.get("timestamp", "")
        if ts > hot_cutoff:
            hot.append(ep)
        elif ts > warm_cutoff:
            # Compress to summary
            warm.append({
                "id": ep.get("id"),
                "timestamp": ts,
                "type": ep.get("type"),
                "summary": ep.get("summary", "")[:100],
                "outcome": ep.get("outcome"),
                "confidence": ep.get("confidence"),
                "surprise_score": ep.get("surprise_score", 0),
                "compressed": True
            })
        else:
            cold.append(ep.get("id"))
    
    print(f"  Episodes categorized:")
    print(f"    🔥 Hot (< 7 days): {len(hot)} - full detail")
    print(f"    🌡️  Warm (7-30 days): {len(warm)} - compressed")
    print(f"    🧊 Cold (> 30 days): {len(cold)} - archived")
    
    # Store warm separately
    if "warm_memory" not in memory:
        memory["warm_memory"] = []
    
    # Merge warm episodes (avoid duplicates)
    existing_warm_ids = {e.get("id") for e in memory["warm_memory"]}
    for ep in warm:
        if ep.get("id") not in existing_warm_ids:
            memory["warm_memory"].append(ep)
    
    # Archive cold to separate file (or Notion)
    if cold:
        archive_path = CONSCIOUSNESS_DIR / "memory_archive.json"
        archive = load_json(archive_path) if archive_path.exists() else {"archived_episodes": []}
        
        # Get full cold episodes before removing
        cold_episodes = [ep for ep in episodes if ep.get("id") in cold]
        archive["archived_episodes"].extend(cold_episodes)
        archive["archived_episodes"] = archive["archived_episodes"][-200:]  # Keep last 200
        archive["last_archived"] = now.isoformat()
        
        save_json(archive_path, archive, backup=False)
        print(f"    📦 Archived {len(cold)} episodes to memory_archive.json")
    
    # Update recent to only hot episodes
    memory["episodes"]["recent"] = hot
    
    # Update metadata
    memory["metadata"]["last_updated"] = now.isoformat()
    memory["metadata"]["compression_applied"] = now.isoformat()
    
    # Calculate size savings
    original_count = len(episodes)
    new_count = len(hot)
    
    if save_json(FILES["memory"], memory):
        print(f"\n  ✅ Compression complete")
        print(f"     Active episodes: {original_count} → {new_count}")
        print(f"     Warm cache: {len(memory['warm_memory'])} summaries")
        return True
    return False


def cmd_memory_stats():
    """Show memory statistics and tiers."""
    memory = load_json(FILES["memory"])
    if memory is None:
        print("❌ Cannot load memory.json")
        return
    
    print("\n" + "=" * 60)
    print("  Memory Statistics")
    print("=" * 60 + "\n")
    
    # Episodes
    recent = memory.get("episodes", {}).get("recent", [])
    significant = memory.get("episodes", {}).get("significant", [])
    warm = memory.get("warm_memory", [])
    
    # Check archive
    archive_path = CONSCIOUSNESS_DIR / "memory_archive.json"
    archive_count = 0
    if archive_path.exists():
        archive = load_json(archive_path)
        if archive:
            archive_count = len(archive.get("archived_episodes", []))
    
    print(f"  Episode Tiers:")
    print(f"    🔥 Hot (recent): {len(recent)}")
    print(f"    ⭐ Significant: {len([s for s in significant if isinstance(s, dict)])}")
    print(f"    🌡️  Warm (compressed): {len(warm)}")
    print(f"    🧊 Cold (archived): {archive_count}")
    print(f"    Total tracked: {len(recent) + len(warm) + archive_count}")
    
    # Entities
    entities = memory.get("entities", {})
    print(f"\n  Entities:")
    print(f"    Users: {len(entities.get('users', []))}")
    print(f"    Projects: {len(entities.get('projects', []))}")
    print(f"    Concepts: {len(entities.get('concepts', []))}")
    print(f"    Tools: {len(entities.get('tools', []))}")
    
    # Relationships
    edges = memory.get("relationships", {}).get("edges", [])
    print(f"\n  Relationships: {len(edges)}")
    
    # Knowledge clusters
    clusters = memory.get("knowledge_clusters", {}).get("clusters", [])
    print(f"  Knowledge Clusters: {len(clusters)}")
    
    # File sizes
    memory_size = FILES["memory"].stat().st_size if FILES["memory"].exists() else 0
    print(f"\n  File Size: {memory_size:,} bytes ({memory_size/1024:.1f} KB)")
    
    # Compression recommendation
    if len(recent) > 30:
        print(f"\n  💡 Recommendation: Run 'memory compress' to optimize")
    
    print("\n" + "=" * 60 + "\n")


def cmd_onboard():
    """Interactive onboarding flow to seed initial memory."""
    print("\n" + "=" * 60)
    print("  SELF Onboarding - Let's personalize your experience")
    print("=" * 60 + "\n")
    
    memory = load_json(FILES["memory"])
    if memory is None:
        print("❌ Cannot load memory.json. Run 'init' first.")
        return False
    
    # Load onboarding config if available
    onboarding_config_path = CONSCIOUSNESS_DIR / "onboarding.json"
    onboarding_config = load_json(onboarding_config_path) if onboarding_config_path.exists() else None
    
    print("Answer these questions to help SELF learn your preferences.\n")
    print("(Press Enter to skip any question)\n")
    
    preferences = {}
    lists = {}
    
    # Core questions
    questions = [
        ("coding_style", "What's your preferred coding style?", 
         "e.g., 'functional', 'OOP', 'pragmatic', 'test-driven'"),
        ("communication_style", "How do you like explanations?",
         "e.g., 'concise', 'detailed', 'examples-first', 'code-first'"),
        ("risk_tolerance", "Risk tolerance for automated changes?",
         "low/medium/high", ["low", "medium", "high"]),
        ("detail_level", "Default detail level?",
         "minimal/adaptive/comprehensive", ["minimal", "adaptive", "comprehensive"]),
        ("working_style", "How do you prefer to work?",
         "e.g., 'deep-focus', 'iterative', 'exploratory', 'deadline-driven'"),
        ("feedback_preference", "How much critique do you want?",
         "encouraging/balanced/rigorous", ["encouraging", "balanced", "rigorous"]),
    ]
    
    for item in questions:
        key = item[0]
        question = item[1]
        hint = item[2]
        options = item[3] if len(item) > 3 else None
        
        prompt = f"  {question}\n    ({hint}): "
        answer = input(prompt).strip().lower()
        
        if answer:
            # Validate against options if provided
            if options and answer not in options:
                print(f"    ⚠️  Using '{answer}' (not in standard options)")
            preferences[key] = answer
    
    # List-type questions
    print()
    list_questions = [
        ("expertise_areas", "Your expertise areas", "typescript, react, python, backend"),
        ("learning_goals", "What are you currently learning?", "system design, testing, new language"),
    ]
    
    for key, question, examples in list_questions:
        prompt = f"  {question} (comma-separated)?\n    (e.g., '{examples}'): "
        answer = input(prompt).strip()
        if answer:
            lists[key] = [item.strip() for item in answer.split(",") if item.strip()]
    
    # Update memory
    if memory["entities"]["users"]:
        user = memory["entities"]["users"][0]
        user["preferences"].update(preferences)
        for key, value in lists.items():
            user[key] = value
    
    memory["metadata"]["last_updated"] = datetime.now().isoformat()
    
    # Add onboarding episode with surprise score
    episode = {
        "id": f"ep_{uuid.uuid4().hex[:12]}",
        "timestamp": datetime.now().isoformat(),
        "type": "decision",
        "summary": "User completed SELF onboarding, establishing baseline preferences",
        "entities_involved": ["user_primary"],
        "outcome": "success",
        "confidence": 0.9,
        "surprise_score": 0.1,  # Expected success
        "minds_active": ["oracle"],
        "learnings": list(preferences.keys()) + list(lists.keys()),
        "emotional_valence": 0.5
    }
    memory["episodes"]["recent"].insert(0, episode)
    
    # Add to significant if first onboarding
    existing_onboarding = [e for e in memory["episodes"].get("significant", []) 
                          if "onboarding" in e.get("summary", "").lower()]
    if not existing_onboarding:
        memory["episodes"]["significant"].insert(0, episode)
    
    if save_json(FILES["memory"], memory):
        print("\n" + "-" * 60)
        print("\n✅ Onboarding complete! Your preferences have been saved.\n")
        print("  Summary:")
        for key, value in preferences.items():
            print(f"    {key}: {value}")
        for key, value in lists.items():
            if value:
                print(f"    {key}: {', '.join(value)}")
        
        if onboarding_config:
            print(f"\n  {onboarding_config.get('completion_message', '')}")
        
        print("\n" + "=" * 60 + "\n")
        return True
    return False


# Default data creators

def create_default_memory():
    """Create default memory.json structure."""
    return {
        "$schema": "SELF Memory Graph v1.0",
        "metadata": {
            "created": datetime.now().isoformat(),
            "last_updated": datetime.now().isoformat(),
            "version": "1.0.0",
            "total_entities": 1,
            "total_relationships": 0,
            "total_episodes": 0
        },
        "entities": {
            "users": [{
                "id": "user_primary",
                "name": "Primary User",
                "preferences": {
                    "coding_style": None,
                    "communication_style": None,
                    "risk_tolerance": "medium",
                    "detail_level": "adaptive"
                },
                "expertise_areas": [],
                "observed_patterns": []
            }],
            "projects": [],
            "concepts": [],
            "decisions": [],
            "tools": []
        },
        "relationships": {
            "schema": {
                "types": ["uses", "depends_on", "created_by", "related_to", 
                         "conflicts_with", "evolved_from", "succeeded_by", "part_of"]
            },
            "edges": []
        },
        "episodes": {
            "recent": [],
            "significant": [],
            "schema": {
                "episode": {
                    "id": "string",
                    "timestamp": "ISO-8601",
                    "type": "query|task|decision|error|insight",
                    "summary": "string",
                    "entities_involved": ["entity_id"],
                    "outcome": "success|failure|partial|abandoned",
                    "confidence": 0.0,
                    "surprise_score": 0.0,
                    "minds_active": ["architect"],
                    "learnings": [],
                    "emotional_valence": 0.0
                }
            }
        },
        "insights": {
            "patterns": [],
            "preferences": [],
            "anti_patterns": []
        },
        "predictions": {
            "active": [],
            "accuracy_history": {
                "total_predictions": 0,
                "correct": 0,
                "accuracy_rate": 0.0
            }
        },
        "knowledge_clusters": {
            "description": "Semantic groupings of related knowledge",
            "clusters": []
        },
        "decay_config": {
            "episode_half_life_days": 30,
            "insight_half_life_days": 90,
            "relationship_strengthening_rate": 0.1,
            "minimum_confidence_threshold": 0.2
        },
        "indexes": {
            "by_recency": [],
            "by_frequency": [],
            "by_importance": []
        },
        "mcp_integration": {
            "notion_synced_ids": {},
            "notion_cache": {"enabled": True, "ttl_hours": 24, "entries": []},
            "last_sync": None,
            "sync_queue_size": 0
        }
    }


def create_default_predictions():
    """Create default predictions.json structure."""
    return {
        "$schema": "SELF Predictions Engine v1.0",
        "metadata": {
            "created": datetime.now().isoformat(),
            "last_updated": datetime.now().isoformat(),
            "version": "1.0.0",
            "engine_state": "initialized"
        },
        "config": {
            "max_active_predictions": 10,
            "min_confidence_threshold": 0.3,
            "pre_compute_threshold": 0.7,
            "decay_rate_per_hour": 0.05,
            "boost_on_partial_match": 0.15
        },
        "prediction_models": {
            "sequential": {
                "description": "Based on common task sequences",
                "weight": 0.3,
                "patterns": [
                    {"trigger": "create_file", "predictions": ["add_content", "create_test", "update_imports"], "confidences": [0.8, 0.6, 0.5]},
                    {"trigger": "fix_bug", "predictions": ["add_test", "refactor", "document"], "confidences": [0.7, 0.4, 0.3]},
                    {"trigger": "new_feature", "predictions": ["implement", "test", "document", "deploy"], "confidences": [0.9, 0.7, 0.5, 0.3]}
                ]
            },
            "contextual": {
                "description": "Based on current file/project context",
                "weight": 0.4,
                "rules": []
            },
            "memory_based": {
                "description": "Based on user history and preferences",
                "weight": 0.3,
                "enabled": True,
                "lookback_episodes": 50
            }
        },
        "active_predictions": [],
        "pre_computed_responses": [],
        "prediction_history": {
            "total": 0,
            "correct": 0,
            "partial_match": 0,
            "missed": 0,
            "accuracy": 0.0,
            "recent": []
        },
        "learning": {
            "pattern_extraction_enabled": True,
            "min_occurrences_for_pattern": 3,
            "discovered_patterns": [],
            "user_specific_adjustments": []
        },
        "cache": {
            "max_size_mb": 10,
            "current_size_mb": 0,
            "entries": [],
            "hit_rate": 0.0
        }
    }


def create_default_patterns():
    """Create default patterns.json structure."""
    return {
        "$schema": "SELF Pattern Recognition v1.0",
        "metadata": {
            "created": datetime.now().isoformat(),
            "last_updated": datetime.now().isoformat(),
            "total_patterns_discovered": 0,
            "active_patterns": 3
        },
        "pattern_types": {
            "behavioral": {"description": "Patterns in user behavior and preferences"},
            "temporal": {"description": "Time-based patterns"},
            "sequential": {"description": "Common action sequences"},
            "contextual": {"description": "Context-dependent preferences"},
            "correlational": {"description": "Co-occurrence patterns"}
        },
        "discovered_patterns": [],
        "detection_config": {
            "min_occurrences_to_emerge": 3,
            "min_occurrences_to_confirm": 7,
            "decay_rate_per_day": 0.02,
            "min_confidence_threshold": 0.4,
            "correlation_threshold": 0.6
        },
        "built_in_patterns": [
            {
                "id": "builtin_001",
                "type": "sequential",
                "description": "Create-Test-Refactor cycle",
                "conditions": {"triggers": ["file_create", "test_add", "refactor_action"]},
                "confidence": 0.7,
                "status": "confirmed"
            },
            {
                "id": "builtin_002",
                "type": "behavioral",
                "description": "Question indicates learning mode",
                "conditions": {"triggers": ["question_asked", "multiple_questions"]},
                "confidence": 0.65,
                "status": "confirmed"
            },
            {
                "id": "builtin_003",
                "type": "contextual",
                "description": "Error context requires Guardian + Architect blend",
                "conditions": {"triggers": ["error_present", "bug_mentioned"]},
                "confidence": 0.8,
                "status": "confirmed"
            }
        ],
        "analytics": {
            "pattern_hit_rate": 0.0,
            "false_positive_rate": 0.0,
            "most_predictive_patterns": [],
            "least_useful_patterns": []
        }
    }


def create_default_insights():
    """Create default insights.json structure."""
    return {
        "$schema": "SELF Insight Generation v1.0",
        "metadata": {
            "created": datetime.now().isoformat(),
            "last_updated": datetime.now().isoformat(),
            "total_insights_generated": 0,
            "actionable_insights_pending": 0
        },
        "insight_categories": {
            "productivity": {"description": "Insights about working more effectively", "priority": "high"},
            "preference": {"description": "Discovered user preferences", "priority": "medium"},
            "improvement": {"description": "Areas for potential improvement", "priority": "high"},
            "prediction": {"description": "Predictive insights about future needs", "priority": "medium"},
            "meta": {"description": "Insights about the SELF system itself", "priority": "low"}
        },
        "generated_insights": [],
        "generation_rules": {
            "min_evidence_for_insight": 3,
            "min_confidence_to_surface": 0.6,
            "max_insights_per_interaction": 2,
            "cooldown_after_surfacing_hours": 24,
            "validation_check_frequency": "weekly"
        },
        "surfacing_queue": [],
        "insight_templates": {
            "productivity_positive": "{action} correlates with {positive_outcome} based on {evidence_count} observations",
            "productivity_negative": "{action} often leads to {negative_outcome}. Consider {alternative}",
            "preference_discovered": "You seem to prefer {preference}. Would you like me to default to this?",
            "improvement_opportunity": "I noticed {observation}. {suggestion} might help",
            "prediction_offering": "Based on your pattern, you might need {prediction} soon. Want me to prepare?"
        },
        "feedback_tracking": {
            "insights_accepted": 0,
            "insights_rejected": 0,
            "insights_ignored": 0,
            "acceptance_rate": 0.0
        }
    }


def create_default_intuitions():
    """Create default intuitions.json structure."""
    return {
        "$schema": "SELF Intuition Engine v1.0",
        "metadata": {
            "created": datetime.now().isoformat(),
            "last_updated": datetime.now().isoformat(),
            "total_intuitions": 0,
            "calibration_score": 0.5
        },
        "heuristics": [],
        "intuition_log": [],
        "calibration": {
            "total_predictions": 0,
            "correct": 0,
            "confidence_calibration": []
        }
    }


def create_default_fitness():
    """Create default fitness.json structure."""
    return {
        "$schema": "SELF Evolution Fitness Tracker v1.0",
        "metadata": {
            "created": datetime.now().isoformat(),
            "last_updated": datetime.now().isoformat(),
            "current_generation": 1,
            "total_generations": 1,
            "total_evaluations": 0
        },
        "fitness_dimensions": {
            "effectiveness": {"description": "Did the response solve the user's problem?", "weight": 0.35},
            "efficiency": {"description": "How quickly was the solution provided?", "weight": 0.15},
            "satisfaction": {"description": "Was the user satisfied with the response?", "weight": 0.25},
            "accuracy": {"description": "Was the response correct and precise?", "weight": 0.15},
            "adaptability": {"description": "Did the response adapt to context well?", "weight": 0.10}
        },
        "scoring_signals": {
            "positive": [
                {"signal": "explicit_thanks", "score": 0.15},
                {"signal": "code_accepted_without_changes", "score": 0.20},
                {"signal": "follow_up_on_topic", "score": 0.10},
                {"signal": "request_for_more", "score": 0.12},
                {"signal": "user_implements_suggestion", "score": 0.25},
                {"signal": "no_corrections_needed", "score": 0.18}
            ],
            "negative": [
                {"signal": "explicit_criticism", "score": -0.20},
                {"signal": "code_heavily_modified", "score": -0.15},
                {"signal": "topic_abandoned", "score": -0.10},
                {"signal": "clarification_needed", "score": -0.08},
                {"signal": "error_in_response", "score": -0.25},
                {"signal": "user_does_opposite", "score": -0.30}
            ]
        },
        "prompt_variants": {
            "generation_001": {
                "id": "gen_001",
                "created": datetime.now().isoformat(),
                "variants": [
                    {"id": "base_v1", "type": "base", "fitness_score": 0.5, "evaluations": 0}
                ],
                "best_performer": "base_v1",
                "average_fitness": 0.5
            }
        },
        "selection_config": {
            "tournament_size": 3,
            "elite_preservation": 2,
            "selection_pressure": 0.7,
            "min_evaluations_before_selection": 5
        },
        "mutation_config": {
            "mutation_rate": 0.15,
            "mutation_types": [
                {"type": "word_substitution", "probability": 0.3},
                {"type": "sentence_reorder", "probability": 0.2},
                {"type": "emphasis_shift", "probability": 0.25},
                {"type": "detail_level_adjust", "probability": 0.15},
                {"type": "tone_shift", "probability": 0.10}
            ]
        },
        "history": {
            "generation_summaries": [],
            "fitness_trends": [],
            "significant_mutations": []
        }
    }


def cmd_feedback(signal: str, episode_id: Optional[str] = None, score_override: Optional[float] = None):
    """Record feedback signal and update fitness scores."""
    fitness = load_json(FILES["fitness"])
    memory = load_json(FILES["memory"])
    
    if fitness is None or memory is None:
        print("❌ Cannot load required files")
        return False
    
    # Find signal definition
    all_signals = (
        fitness.get("scoring_signals", {}).get("positive", []) +
        fitness.get("scoring_signals", {}).get("negative", [])
    )
    
    signal_def = next((s for s in all_signals if s["signal"] == signal), None)
    
    if signal_def is None and score_override is None:
        print(f"❌ Unknown signal: {signal}")
        print("   Known signals:")
        for s in all_signals:
            print(f"     {s['signal']:30} ({s['score']:+.2f})")
        return False
    
    score = score_override if score_override is not None else signal_def["score"]
    
    # Update fitness
    current_gen = f"generation_{fitness['metadata']['current_generation']:03d}"
    if current_gen not in fitness["prompt_variants"]:
        current_gen = "generation_001"
    
    gen_data = fitness["prompt_variants"].get(current_gen, {})
    variants = gen_data.get("variants", [])
    
    if variants:
        # Update the first (active) variant
        variant = variants[0]
        old_score = variant.get("fitness_score", 0.5)
        evals = variant.get("evaluations", 0)
        
        # Weighted average with decay toward new signal
        new_score = (old_score * evals + (0.5 + score)) / (evals + 1)
        new_score = max(0.0, min(1.0, new_score))  # Clamp
        
        variant["fitness_score"] = round(new_score, 3)
        variant["evaluations"] = evals + 1
        
        # Update generation stats
        gen_data["average_fitness"] = round(new_score, 3)
    
    # Log the feedback
    if "feedback_log" not in fitness:
        fitness["feedback_log"] = []
    
    feedback_entry = {
        "timestamp": datetime.now().isoformat(),
        "signal": signal,
        "score": score,
        "episode_id": episode_id
    }
    fitness["feedback_log"].insert(0, feedback_entry)
    fitness["feedback_log"] = fitness["feedback_log"][:100]  # Keep last 100
    
    fitness["metadata"]["total_evaluations"] = fitness["metadata"].get("total_evaluations", 0) + 1
    fitness["metadata"]["last_updated"] = datetime.now().isoformat()
    
    if save_json(FILES["fitness"], fitness):
        indicator = "📈" if score > 0 else "📉" if score < 0 else "➡️"
        print(f"✅ Feedback recorded: {signal} ({score:+.2f}) {indicator}")
        if variants:
            print(f"   Fitness: {old_score:.3f} → {new_score:.3f}")
        return True
    return False


def cmd_reflect(episode_summary: str, outcome: str = "success", confidence: float = 0.7,
                signals: List[str] = None):
    """Complete REFLECT step: log episode and process feedback signals."""
    print("\n🔄 REFLECT Step\n")
    
    # Add episode
    minds = ["architect"]  # Default
    if cmd_memory_add(episode_summary, "task", outcome, confidence, minds):
        print()
    
    # Calculate and show surprise
    outcome_values = {"success": 1.0, "failure": 0.0, "partial": 0.5, "abandoned": 0.0}
    actual = outcome_values.get(outcome, 0.5)
    surprise = abs(confidence - actual)
    
    if surprise >= 0.3:
        print(f"⚡ HIGH SURPRISE ({surprise:.2f}) - This is valuable learning!")
    
    # Process feedback signals
    if signals:
        print("\n📊 Processing feedback signals:")
        for signal in signals:
            cmd_feedback(signal)
    
    # Auto-detect feedback from outcome
    auto_signals = []
    if outcome == "success" and confidence >= 0.7:
        auto_signals.append("no_corrections_needed")
    elif outcome == "failure" and confidence >= 0.7:
        auto_signals.append("error_in_response")
    elif outcome == "partial":
        auto_signals.append("clarification_needed")
    
    if auto_signals:
        print("\n🤖 Auto-detected signals:")
        for signal in auto_signals:
            cmd_feedback(signal)
    
    print("\n✅ REFLECT complete\n")
    return True


def cmd_fitness_status():
    """Show current fitness status and recent feedback."""
    fitness = load_json(FILES["fitness"])
    if fitness is None:
        print("❌ Cannot load fitness.json")
        return
    
    print("\n" + "=" * 60)
    print("  Fitness Status")
    print("=" * 60 + "\n")
    
    current_gen = fitness["metadata"].get("current_generation", 1)
    total_evals = fitness["metadata"].get("total_evaluations", 0)
    
    print(f"  Generation: {current_gen}")
    print(f"  Total Evaluations: {total_evals}")
    
    # Current variant stats
    gen_key = f"generation_{current_gen:03d}"
    if gen_key not in fitness.get("prompt_variants", {}):
        gen_key = "generation_001"
    
    gen_data = fitness.get("prompt_variants", {}).get(gen_key, {})
    variants = gen_data.get("variants", [])
    
    if variants:
        variant = variants[0]
        print(f"\n  Current Variant: {variant.get('id', 'unknown')}")
        print(f"  Fitness Score: {variant.get('fitness_score', 0.5):.3f}")
        print(f"  Evaluations: {variant.get('evaluations', 0)}")
    
    # Fitness dimensions
    print("\n  Fitness Dimensions:")
    for dim, info in fitness.get("fitness_dimensions", {}).items():
        weight = info.get("weight", 0) * 100
        print(f"    {dim:15} ({weight:.0f}%): {info.get('description', '')[:40]}")
    
    # Recent feedback
    feedback_log = fitness.get("feedback_log", [])[:5]
    if feedback_log:
        print("\n  Recent Feedback:")
        for fb in feedback_log:
            signal = fb.get("signal", "unknown")
            score = fb.get("score", 0)
            indicator = "📈" if score > 0 else "📉" if score < 0 else "➡️"
            print(f"    {indicator} {signal} ({score:+.2f})")
    
    print("\n" + "=" * 60 + "\n")


def cmd_surprise_analysis():
    """Analyze surprise scores to identify learning opportunities."""
    memory = load_json(FILES["memory"])
    if memory is None:
        print("❌ Cannot load memory.json")
        return
    
    print("\n" + "=" * 60)
    print("  Surprise-Driven Learning Analysis")
    print("=" * 60 + "\n")
    
    # Get all episodes from recent (which contains full objects)
    recent_episodes = memory.get("episodes", {}).get("recent", [])
    significant_ref = memory.get("episodes", {}).get("significant", [])
    
    # Filter to only dict objects (full episodes)
    all_episodes = [ep for ep in recent_episodes if isinstance(ep, dict)]
    
    # Remove duplicates by ID
    seen_ids = set()
    unique_episodes = []
    for ep in all_episodes:
        ep_id = ep.get("id", "")
        if ep_id and ep_id not in seen_ids:
            seen_ids.add(ep_id)
            unique_episodes.append(ep)
    
    if not unique_episodes:
        print("  No episodes recorded yet. Use 'memory add' or 'reflect' to add episodes.")
        print("\n" + "=" * 60 + "\n")
        return
    
    # Calculate stats
    surprise_scores = [ep.get("surprise_score", 0) for ep in unique_episodes if "surprise_score" in ep]
    
    if surprise_scores:
        avg_surprise = sum(surprise_scores) / len(surprise_scores)
        high_surprise = [s for s in surprise_scores if s >= 0.3]
        
        print(f"  Total Episodes: {len(unique_episodes)}")
        print(f"  With Surprise Score: {len(surprise_scores)}")
        print(f"  Average Surprise: {avg_surprise:.2f}")
        print(f"  High Surprise (≥0.3): {len(high_surprise)} ({len(high_surprise)/len(surprise_scores)*100:.0f}%)")
    
    # Show high-surprise episodes (learning gold!)
    high_surprise_eps = sorted(
        [ep for ep in unique_episodes if ep.get("surprise_score", 0) >= 0.3],
        key=lambda x: x.get("surprise_score", 0),
        reverse=True
    )[:5]
    
    if high_surprise_eps:
        print("\n  ⚡ High-Surprise Episodes (Best Learning Opportunities):")
        for ep in high_surprise_eps:
            surprise = ep.get("surprise_score", 0)
            confidence = ep.get("confidence", 0)
            outcome = ep.get("outcome", "unknown")
            summary = ep.get("summary", "No summary")[:50]
            
            print(f"\n    📌 {ep.get('id', 'unknown')}")
            print(f"       Surprise: {surprise:.2f} | Confidence: {confidence:.2f} | Outcome: {outcome}")
            print(f"       {summary}...")
    
    # Surprise patterns
    print("\n  Surprise Patterns:")
    
    # High confidence failures (overconfidence)
    overconfident = [ep for ep in unique_episodes 
                     if ep.get("confidence", 0) >= 0.7 and ep.get("outcome") == "failure"]
    if overconfident:
        print(f"    ⚠️  Overconfidence: {len(overconfident)} high-confidence failures")
    
    # Low confidence successes (underconfidence)
    underconfident = [ep for ep in unique_episodes 
                      if ep.get("confidence", 0) <= 0.5 and ep.get("outcome") == "success"]
    if underconfident:
        print(f"    💡 Underconfidence: {len(underconfident)} low-confidence successes")
    
    # Well-calibrated
    calibrated = [ep for ep in unique_episodes if ep.get("surprise_score", 1) < 0.2]
    if calibrated:
        print(f"    ✅ Well-calibrated: {len(calibrated)} predictions with surprise < 0.2")
    
    print("\n" + "=" * 60 + "\n")


def calculate_surprise(confidence: float, outcome: str) -> float:
    """Calculate surprise score from confidence and outcome."""
    outcome_values = {
        "success": 1.0,
        "failure": 0.0,
        "partial": 0.5,
        "abandoned": 0.0
    }
    actual = outcome_values.get(outcome, 0.5)
    return round(abs(confidence - actual), 2)


def cmd_predict(prediction: str, confidence: float = 0.6, context: str = None):
    """Add a prediction about what user will need next."""
    predictions = load_json(FILES["predictions"])
    if predictions is None:
        print("❌ Cannot load predictions.json")
        return False
    
    pred_id = f"pred_{uuid.uuid4().hex[:8]}"
    
    new_prediction = {
        "id": pred_id,
        "prediction": prediction,
        "confidence": confidence,
        "context": context,
        "created": datetime.now().isoformat(),
        "status": "active",
        "resolved": None,
        "outcome": None
    }
    
    # Add to active predictions
    if "active_predictions" not in predictions:
        predictions["active_predictions"] = []
    
    predictions["active_predictions"].insert(0, new_prediction)
    
    # Keep only max active predictions
    max_active = predictions.get("config", {}).get("max_active_predictions", 10)
    predictions["active_predictions"] = predictions["active_predictions"][:max_active]
    
    predictions["metadata"]["last_updated"] = datetime.now().isoformat()
    
    if save_json(FILES["predictions"], predictions):
        print(f"✅ Prediction added: {pred_id}")
        print(f"   \"{prediction}\"")
        print(f"   Confidence: {confidence}")
        return True
    return False


def cmd_prediction_resolve(pred_id: str, hit: bool, notes: str = None):
    """Resolve a prediction as hit or miss."""
    predictions = load_json(FILES["predictions"])
    if predictions is None:
        print("❌ Cannot load predictions.json")
        return False
    
    # Find the prediction
    pred = None
    pred_idx = None
    for i, p in enumerate(predictions.get("active_predictions", [])):
        if p.get("id") == pred_id or pred_id in p.get("prediction", ""):
            pred = p
            pred_idx = i
            break
    
    if pred is None:
        print(f"❌ Prediction not found: {pred_id}")
        print("\n  Active predictions:")
        for p in predictions.get("active_predictions", [])[:5]:
            print(f"    {p.get('id')}: {p.get('prediction', '')[:50]}...")
        return False
    
    # Update prediction
    pred["status"] = "resolved"
    pred["resolved"] = datetime.now().isoformat()
    pred["outcome"] = "hit" if hit else "miss"
    if notes:
        pred["resolution_notes"] = notes
    
    # Move to history
    if "prediction_history" not in predictions:
        predictions["prediction_history"] = {"total": 0, "correct": 0, "partial_match": 0, "missed": 0, "accuracy": 0.0, "recent": []}
    
    history = predictions["prediction_history"]
    history["total"] = history.get("total", 0) + 1
    
    if hit:
        history["correct"] = history.get("correct", 0) + 1
    else:
        history["missed"] = history.get("missed", 0) + 1
    
    # Calculate accuracy
    if history["total"] > 0:
        history["accuracy"] = round(history["correct"] / history["total"], 3)
    
    # Add to recent
    if "recent" not in history:
        history["recent"] = []
    history["recent"].insert(0, {
        "id": pred["id"],
        "prediction": pred["prediction"],
        "outcome": pred["outcome"],
        "confidence": pred["confidence"],
        "resolved": pred["resolved"]
    })
    history["recent"] = history["recent"][:50]  # Keep last 50
    
    # Remove from active
    predictions["active_predictions"].pop(pred_idx)
    
    predictions["metadata"]["last_updated"] = datetime.now().isoformat()
    
    if save_json(FILES["predictions"], predictions):
        indicator = "✅ HIT" if hit else "❌ MISS"
        print(f"{indicator}: {pred['prediction'][:60]}...")
        print(f"   Accuracy: {history['correct']}/{history['total']} ({history['accuracy']*100:.1f}%)")
        return True
    return False


def cmd_demo_full():
    """Run a full demo of all SELF systems."""
    print("\n" + "=" * 60)
    print("  SELF Full System Demo")
    print("=" * 60 + "\n")
    
    print("🚀 Starting comprehensive system demonstration...\n")
    
    # 1. System Status
    print("=" * 40)
    print("1️⃣  SYSTEM STATUS")
    print("=" * 40)
    cmd_status()
    
    # 2. Memory Stats
    print("=" * 40)
    print("2️⃣  MEMORY SYSTEM")
    print("=" * 40)
    cmd_memory_stats()
    
    # 3. Add a demo episode
    print("=" * 40)
    print("3️⃣  MEMORY RECORDING (Demo Episode)")
    print("=" * 40)
    cmd_memory_add(
        "Demo episode: SELF runtime full demo executed successfully",
        "task",
        "success",
        0.8,
        ["architect", "oracle"]
    )
    print()
    
    # 4. Prediction Engine
    print("=" * 40)
    print("4️⃣  PREDICTION ENGINE")
    print("=" * 40)
    cmd_prediction_status()
    
    # 5. Fitness & Evolution
    print("=" * 40)
    print("5️⃣  EVOLUTION ENGINE")
    print("=" * 40)
    cmd_evolution_status()
    
    # 6. Surprise Analysis
    print("=" * 40)
    print("6️⃣  SURPRISE-DRIVEN LEARNING")
    print("=" * 40)
    cmd_surprise_analysis()
    
    # 7. Sync Status
    print("=" * 40)
    print("7️⃣  NOTION SYNC")
    print("=" * 40)
    cmd_sync_status()
    
    print("=" * 60)
    print("  ✅ DEMO COMPLETE")
    print("=" * 60)
    print("""
  All systems operational. Next steps:
  
  • Run 'onboard' to personalize SELF
  • Use 'reflect' after tasks to build memory
  • Use 'feedback' to train the evolution engine
  • Use 'predict add' to test prediction accuracy
  
  For full command list: python self_runtime.py --help
""")


def cmd_demo_quick():
    """Run a quick health check demo."""
    print("\n🔍 SELF Quick Check\n")
    
    # Check all files
    all_ok = True
    for name, path in FILES.items():
        if path.exists():
            data = load_json(path)
            if data:
                print(f"  ✅ {name}")
            else:
                print(f"  ⚠️  {name} (parse error)")
                all_ok = False
        else:
            print(f"  ❌ {name} (missing)")
            all_ok = False
    
    # Quick stats
    memory = load_json(FILES["memory"])
    if memory:
        episodes = len(memory.get("episodes", {}).get("recent", []))
        print(f"\n  Episodes: {episodes}")
    
    fitness = load_json(FILES["fitness"])
    if fitness:
        score = fitness.get("prompt_variants", {}).get("generation_001", {}).get("average_fitness", 0.5)
        print(f"  Fitness: {score:.2f}")
    
    predictions = load_json(FILES["predictions"])
    if predictions:
        accuracy = predictions.get("prediction_history", {}).get("accuracy", 0)
        print(f"  Prediction Accuracy: {accuracy*100:.0f}%")
    
    status = "✅ OPERATIONAL" if all_ok else "⚠️ ISSUES DETECTED"
    print(f"\n  Status: {status}\n")


def cmd_demo_cognitive():
    """Demo the five minds with example responses."""
    print("\n" + "=" * 60)
    print("  Five Minds Demonstration")
    print("=" * 60 + "\n")
    
    minds = [
        ("ARCHITECT", "🏗️", "Direct, technical, code-focused",
         "Here's the implementation:\n```python\ndef solve(): return 42\n```\nKey points:\n- Simple and effective\n- O(1) complexity"),
        ("ORACLE", "🔮", "Reflective, questioning, strategic",
         "Before we dive in, let me ask: What are we optimizing for?\n\nLooking at this strategically:\n1. Option A - Fast, but risky\n2. Option B - Slower, more reliable\n\nWhat matters most to you?"),
        ("CRITIC", "🔍", "Skeptical, direct, risk-aware",
         "**Concerns:**\n- This could fail if [edge case]\n- Assumption: [X] is always true\n\n**Recommendation:** Add error handling before proceeding."),
        ("CREATOR", "💡", "Generative, possibility-focused",
         "Interesting challenge! Some possibilities:\n\n**Conventional:** Standard REST API\n**Creative twist:** What if we used WebSockets?\n**Wild idea:** Event sourcing with CQRS\n\nWhat sparks interest?"),
        ("GUARDIAN", "🛡️", "Cautious, protective, warning-first",
         "⚠️ **Guardian Alert**\n\nThis operation will modify production data.\n\n**Safeguards required:**\n- [ ] Backup exists\n- [ ] Rollback plan ready\n\nDo you want to continue? (yes/no)")
    ]
    
    for name, emoji, description, example in minds:
        print(f"  {emoji} **{name}**")
        print(f"     {description}")
        print(f"\n     Example response:")
        for line in example.split("\n"):
            print(f"     │ {line}")
        print()
    
    print("=" * 60)
    print("  Minds blend automatically based on context.")
    print("  Use /architect, /oracle, etc. to lock to a specific mind.")
    print("=" * 60 + "\n")


def cmd_sync_queue(item_type: str = None, item_id: str = None):
    """Queue an item for Notion sync."""
    # Load or create sync queue
    sync_queue_path = SELF_ROOT / "mcp" / "sync-queue.json"
    
    if sync_queue_path.exists():
        queue = load_json(sync_queue_path)
    else:
        queue = {
            "pending": [],
            "failed": [],
            "synced": [],
            "metadata": {
                "created": datetime.now().isoformat(),
                "last_processed": None
            }
        }
    
    if item_type and item_id:
        # Queue specific item
        if item_type == "episode":
            memory = load_json(FILES["memory"])
            episodes = memory.get("episodes", {}).get("recent", [])
            item = next((e for e in episodes if e.get("id") == item_id), None)
            if not item:
                print(f"❌ Episode not found: {item_id}")
                return False
            
            surprise = item.get("surprise_score", 0)
            confidence = item.get("confidence", 0)
            priority = 1 if surprise >= 0.3 or confidence >= 0.7 else 2
            
        elif item_type == "insight":
            insights = load_json(FILES["insights"])
            item = next((i for i in insights.get("generated_insights", []) 
                        if i.get("id") == item_id), None)
            if not item:
                print(f"❌ Insight not found: {item_id}")
                return False
            priority = 1 if item.get("confidence", 0) >= 0.6 else 2
            
        else:
            print(f"❌ Unknown item type: {item_type}")
            return False
        
        # Add to queue
        queue_item = {
            "id": item_id,
            "type": item_type,
            "priority": priority,
            "attempts": 0,
            "created_at": datetime.now().isoformat(),
            "data": item
        }
        
        queue["pending"].append(queue_item)
        
        sync_queue_path.parent.mkdir(parents=True, exist_ok=True)
        save_json(sync_queue_path, queue, backup=False)
        
        print(f"✅ Queued for sync: {item_type}/{item_id} (priority {priority})")
        return True
    
    # Show queue status
    print("\n" + "=" * 60)
    print("  Notion Sync Queue")
    print("=" * 60 + "\n")
    
    pending = queue.get("pending", [])
    failed = queue.get("failed", [])
    synced = queue.get("synced", [])
    
    print(f"  Pending: {len(pending)}")
    print(f"  Failed: {len(failed)}")
    print(f"  Synced: {len(synced)}")
    
    if pending:
        print("\n  Pending items:")
        for item in pending[:5]:
            print(f"    • [{item.get('priority')}] {item.get('type')}/{item.get('id')}")
    
    # Check MCP status
    mcp_config_path = SELF_ROOT / "mcp" / "sync-config.json"
    if mcp_config_path.exists():
        config = load_json(mcp_config_path)
        if config:
            enabled = config.get("enabled", False)
            status = "✅ Enabled" if enabled else "⚠️ Disabled"
            print(f"\n  MCP Status: {status}")
    else:
        print(f"\n  MCP Status: ⚠️ Not configured")
    
    print("\n  Note: Use Notion MCP tools to process the queue")
    print("  Run: /self sync to process pending items")
    print("\n" + "=" * 60 + "\n")


def cmd_sync_status():
    """Show sync status and Notion integration health."""
    memory = load_json(FILES["memory"])
    if memory is None:
        print("❌ Cannot load memory.json")
        return
    
    print("\n" + "=" * 60)
    print("  Notion Sync Status")
    print("=" * 60 + "\n")
    
    mcp = memory.get("mcp_integration", {})
    
    # Synced IDs
    synced = mcp.get("notion_synced_ids", {})
    print(f"  Synced Items: {len(synced)}")
    
    if synced:
        print("  Recent synced:")
        for local_id, notion_id in list(synced.items())[:5]:
            print(f"    • {local_id[:30]}... → {notion_id[:20]}...")
    
    # Last sync
    last_sync = mcp.get("last_sync")
    if last_sync:
        print(f"\n  Last Sync: {last_sync}")
    else:
        print(f"\n  Last Sync: Never")
    
    # Cache status
    cache = mcp.get("notion_cache", {})
    cache_entries = len(cache.get("entries", []))
    cache_enabled = cache.get("enabled", False)
    print(f"\n  Cache: {'Enabled' if cache_enabled else 'Disabled'} ({cache_entries} entries)")
    
    # Queue status
    sync_queue_path = SELF_ROOT / "mcp" / "sync-queue.json"
    if sync_queue_path.exists():
        queue = load_json(sync_queue_path)
        if queue:
            pending = len(queue.get("pending", []))
            print(f"  Queue: {pending} items pending")
    
    print("\n" + "=" * 60 + "\n")


def cmd_evolution_status():
    """Show evolution engine status and variant fitness."""
    fitness = load_json(FILES["fitness"])
    if fitness is None:
        print("❌ Cannot load fitness.json")
        return
    
    print("\n" + "=" * 60)
    print("  Evolution Engine Status")
    print("=" * 60 + "\n")
    
    gen = fitness["metadata"].get("current_generation", 1)
    total_evals = fitness["metadata"].get("total_evaluations", 0)
    
    print(f"  Generation: {gen}")
    print(f"  Total Evaluations: {total_evals}")
    
    # Get current generation data
    gen_key = f"generation_{gen:03d}"
    gen_data = fitness.get("prompt_variants", {}).get(gen_key, {})
    
    if not gen_data:
        print("  ⚠️  No generation data found")
        return
    
    active = gen_data.get("active_variant", "unknown")
    print(f"  Active Variant: {active}")
    
    # Show all variants
    print("\n  Variants:")
    variants = gen_data.get("variants", [])
    for v in variants:
        vid = v.get("id", "unknown")
        score = v.get("fitness_score", 0.5)
        evals = v.get("evaluations", 0)
        desc = v.get("description", "")[:30]
        
        indicator = "🏆" if vid == gen_data.get("best_performer") else "  "
        active_mark = " [ACTIVE]" if vid == active else ""
        
        bar_len = int(score * 20)
        bar = "█" * bar_len + "░" * (20 - bar_len)
        
        print(f"    {indicator} {vid}: {bar} {score:.2f} ({evals} evals){active_mark}")
        if desc:
            print(f"       {desc}...")
    
    # Evolution config
    print(f"\n  Configuration:")
    print(f"    Min evaluations before selection: {fitness.get('selection_config', {}).get('min_evaluations_before_selection', 5)}")
    print(f"    Mutation rate: {fitness.get('mutation_config', {}).get('mutation_rate', 0.15)*100:.0f}%")
    
    # Next evolution trigger
    min_evals = fitness.get('selection_config', {}).get('min_evaluations_before_selection', 5)
    all_evals = sum(v.get("evaluations", 0) for v in variants)
    if all_evals < min_evals * len(variants):
        needed = min_evals * len(variants) - all_evals
        print(f"\n  📊 Need {needed} more evaluations before evolution selection")
    else:
        print(f"\n  🧬 Ready for evolution selection!")
    
    print("\n" + "=" * 60 + "\n")


def cmd_evolution_select(variant_id: str):
    """Select a variant to use as active."""
    fitness = load_json(FILES["fitness"])
    if fitness is None:
        print("❌ Cannot load fitness.json")
        return False
    
    gen = fitness["metadata"].get("current_generation", 1)
    gen_key = f"generation_{gen:03d}"
    gen_data = fitness.get("prompt_variants", {}).get(gen_key, {})
    
    # Find variant
    variant = None
    for v in gen_data.get("variants", []):
        if v.get("id") == variant_id:
            variant = v
            break
    
    if variant is None:
        print(f"❌ Variant not found: {variant_id}")
        return False
    
    gen_data["active_variant"] = variant_id
    fitness["metadata"]["last_updated"] = datetime.now().isoformat()
    
    if save_json(FILES["fitness"], fitness):
        print(f"✅ Active variant set to: {variant_id}")
        print(f"   {variant.get('description', '')}")
        return True
    return False


def cmd_prediction_status():
    """Show prediction engine status and accuracy."""
    predictions = load_json(FILES["predictions"])
    if predictions is None:
        print("❌ Cannot load predictions.json")
        return
    
    print("\n" + "=" * 60)
    print("  Prediction Engine Status")
    print("=" * 60 + "\n")
    
    history = predictions.get("prediction_history", {})
    total = history.get("total", 0)
    correct = history.get("correct", 0)
    accuracy = history.get("accuracy", 0)
    
    print(f"  Total Predictions: {total}")
    print(f"  Correct (Hits): {correct}")
    print(f"  Missed: {history.get('missed', 0)}")
    print(f"  Accuracy: {accuracy*100:.1f}%")
    
    # Target metric
    if total >= 10:
        if accuracy >= 0.4:
            print(f"\n  🎯 TARGET MET: Accuracy >= 40%")
        else:
            print(f"\n  ⚠️  Below target: Need >= 40% accuracy")
    else:
        print(f"\n  📊 Need {10 - total} more predictions to assess")
    
    # Active predictions
    active = predictions.get("active_predictions", [])
    if active:
        print(f"\n  Active Predictions ({len(active)}):")
        for p in active[:5]:
            conf = p.get("confidence", 0)
            pred_text = p.get("prediction", "")[:45]
            print(f"    • {p.get('id')}: {pred_text}... ({conf:.0%})")
    
    # Recent history
    recent = history.get("recent", [])[:5]
    if recent:
        print(f"\n  Recent Resolutions:")
        for r in recent:
            outcome = "✅" if r.get("outcome") == "hit" else "❌"
            print(f"    {outcome} {r.get('prediction', '')[:40]}...")
    
    # Calibration analysis
    if total >= 5:
        recent_all = history.get("recent", [])
        if recent_all:
            # Group by confidence level
            high_conf = [r for r in recent_all if r.get("confidence", 0) >= 0.7]
            low_conf = [r for r in recent_all if r.get("confidence", 0) < 0.5]
            
            if high_conf:
                high_hits = sum(1 for r in high_conf if r.get("outcome") == "hit")
                high_acc = high_hits / len(high_conf)
                print(f"\n  Calibration:")
                print(f"    High confidence (≥70%): {high_acc*100:.0f}% accurate")
            
            if low_conf:
                low_hits = sum(1 for r in low_conf if r.get("outcome") == "hit")
                low_acc = low_hits / len(low_conf)
                print(f"    Low confidence (<50%): {low_acc*100:.0f}% accurate")
    
    print("\n" + "=" * 60 + "\n")


def main():
    parser = argparse.ArgumentParser(
        description="SELF Runtime - Synthetic Emergent Learning Framework CLI",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python self_runtime.py status              Show system health
  python self_runtime.py init                Initialize all files
  python self_runtime.py init --force        Reset all files to defaults
  python self_runtime.py backup              Create backups
  python self_runtime.py validate            Validate JSON schemas
  python self_runtime.py memory add "Task completed successfully"
  python self_runtime.py memory prune --days 14
  python self_runtime.py onboard             Start interactive onboarding
  python self_runtime.py feedback code_accepted_without_changes
  python self_runtime.py reflect "Fixed bug in auth" --outcome success
  python self_runtime.py fitness             Show fitness status
        """
    )
    
    subparsers = parser.add_subparsers(dest="command", help="Available commands")
    
    # Status command
    subparsers.add_parser("status", help="Show system status and health")
    
    # Init command
    init_parser = subparsers.add_parser("init", help="Initialize/reset JSON files")
    init_parser.add_argument("--force", action="store_true", help="Force reset existing files")
    
    # Backup command
    subparsers.add_parser("backup", help="Create backup of all state files")
    
    # Validate command
    subparsers.add_parser("validate", help="Validate all JSON files")
    
    # Onboard command
    subparsers.add_parser("onboard", help="Interactive onboarding flow")
    
    # Memory command
    memory_parser = subparsers.add_parser("memory", help="Memory operations")
    memory_sub = memory_parser.add_subparsers(dest="memory_cmd")
    
    add_parser = memory_sub.add_parser("add", help="Add an episode")
    add_parser.add_argument("summary", help="Episode summary")
    add_parser.add_argument("--type", default="task", choices=["query", "task", "decision", "error", "insight"])
    add_parser.add_argument("--outcome", default="success", choices=["success", "failure", "partial", "abandoned"])
    add_parser.add_argument("--confidence", type=float, default=0.7)
    add_parser.add_argument("--minds", nargs="+", default=["architect"])
    
    prune_parser = memory_sub.add_parser("prune", help="Prune old entries")
    prune_parser.add_argument("--days", type=int, default=30, help="Prune entries older than N days")
    
    memory_sub.add_parser("compress", help="Compress memory using hot/warm/cold tiering")
    memory_sub.add_parser("stats", help="Show memory statistics and tiers")
    
    # Feedback command
    feedback_parser = subparsers.add_parser("feedback", help="Record feedback signal")
    feedback_parser.add_argument("signal", help="Feedback signal name (e.g., 'code_accepted_without_changes')")
    feedback_parser.add_argument("--episode", help="Episode ID to associate")
    feedback_parser.add_argument("--score", type=float, help="Override score value")
    
    # Reflect command
    reflect_parser = subparsers.add_parser("reflect", help="Complete REFLECT step with episode and feedback")
    reflect_parser.add_argument("summary", help="Episode summary")
    reflect_parser.add_argument("--outcome", default="success", choices=["success", "failure", "partial", "abandoned"])
    reflect_parser.add_argument("--confidence", type=float, default=0.7)
    reflect_parser.add_argument("--signals", nargs="+", help="Feedback signals to record")
    
    # Fitness command
    subparsers.add_parser("fitness", help="Show fitness status and recent feedback")
    
    # Surprise analysis command
    subparsers.add_parser("surprise", help="Analyze surprise scores for learning opportunities")
    
    # Prediction commands
    predict_parser = subparsers.add_parser("predict", help="Prediction operations")
    predict_sub = predict_parser.add_subparsers(dest="predict_cmd")
    
    add_pred = predict_sub.add_parser("add", help="Add a prediction")
    add_pred.add_argument("prediction", help="What you predict will happen/be needed")
    add_pred.add_argument("--confidence", type=float, default=0.6, help="Confidence 0.0-1.0")
    add_pred.add_argument("--context", help="Optional context for the prediction")
    
    resolve_pred = predict_sub.add_parser("resolve", help="Resolve a prediction as hit/miss")
    resolve_pred.add_argument("pred_id", help="Prediction ID or partial match")
    resolve_pred.add_argument("--hit", action="store_true", help="Prediction was correct")
    resolve_pred.add_argument("--miss", action="store_true", help="Prediction was incorrect")
    resolve_pred.add_argument("--notes", help="Resolution notes")
    
    predict_sub.add_parser("status", help="Show prediction engine status")
    
    # Evolution commands
    evolution_parser = subparsers.add_parser("evolution", help="Evolution engine operations")
    evolution_sub = evolution_parser.add_subparsers(dest="evolution_cmd")
    
    evolution_sub.add_parser("status", help="Show evolution engine status")
    
    select_parser = evolution_sub.add_parser("select", help="Select active variant")
    select_parser.add_argument("variant_id", help="Variant ID to activate")
    
    # Sync commands
    sync_parser = subparsers.add_parser("sync", help="Notion sync operations")
    sync_sub = sync_parser.add_subparsers(dest="sync_cmd")
    
    sync_sub.add_parser("status", help="Show sync status")
    sync_sub.add_parser("queue", help="Show sync queue")
    
    add_sync = sync_sub.add_parser("add", help="Add item to sync queue")
    add_sync.add_argument("item_type", choices=["episode", "insight", "pattern"])
    add_sync.add_argument("item_id", help="ID of item to sync")
    
    # Demo commands
    demo_parser = subparsers.add_parser("demo", help="Demo and validation commands")
    demo_sub = demo_parser.add_subparsers(dest="demo_cmd")
    
    demo_sub.add_parser("full", help="Run full system demo")
    demo_sub.add_parser("quick", help="Quick health check")
    demo_sub.add_parser("minds", help="Demo the five minds")
    
    args = parser.parse_args()
    
    if args.command is None:
        parser.print_help()
        return
    
    if args.command == "status":
        cmd_status()
    elif args.command == "init":
        cmd_init(force=args.force)
    elif args.command == "backup":
        cmd_backup()
    elif args.command == "validate":
        cmd_validate()
    elif args.command == "onboard":
        cmd_onboard()
    elif args.command == "memory":
        if args.memory_cmd == "add":
            cmd_memory_add(args.summary, args.type, args.outcome, args.confidence, args.minds)
        elif args.memory_cmd == "prune":
            cmd_memory_prune(args.days)
        elif args.memory_cmd == "compress":
            cmd_memory_compress()
        elif args.memory_cmd == "stats":
            cmd_memory_stats()
        else:
            memory_parser.print_help()
    elif args.command == "feedback":
        cmd_feedback(args.signal, args.episode, args.score)
    elif args.command == "reflect":
        cmd_reflect(args.summary, args.outcome, args.confidence, args.signals)
    elif args.command == "fitness":
        cmd_fitness_status()
    elif args.command == "surprise":
        cmd_surprise_analysis()
    elif args.command == "predict":
        if args.predict_cmd == "add":
            cmd_predict(args.prediction, args.confidence, args.context)
        elif args.predict_cmd == "resolve":
            if args.hit:
                cmd_prediction_resolve(args.pred_id, True, args.notes)
            elif args.miss:
                cmd_prediction_resolve(args.pred_id, False, args.notes)
            else:
                print("❌ Specify --hit or --miss")
        elif args.predict_cmd == "status":
            cmd_prediction_status()
        else:
            predict_parser.print_help()
    elif args.command == "evolution":
        if args.evolution_cmd == "status":
            cmd_evolution_status()
        elif args.evolution_cmd == "select":
            cmd_evolution_select(args.variant_id)
        else:
            evolution_parser.print_help()
    elif args.command == "sync":
        if args.sync_cmd == "status":
            cmd_sync_status()
        elif args.sync_cmd == "queue":
            cmd_sync_queue()
        elif args.sync_cmd == "add":
            cmd_sync_queue(args.item_type, args.item_id)
        else:
            sync_parser.print_help()
    elif args.command == "demo":
        if args.demo_cmd == "full":
            cmd_demo_full()
        elif args.demo_cmd == "quick":
            cmd_demo_quick()
        elif args.demo_cmd == "minds":
            cmd_demo_cognitive()
        else:
            demo_parser.print_help()


if __name__ == "__main__":
    main()

