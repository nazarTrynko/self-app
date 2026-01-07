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


def cmd_onboard():
    """Interactive onboarding flow to seed initial memory."""
    print("\n" + "=" * 60)
    print("  SELF Onboarding - Let's personalize your experience")
    print("=" * 60 + "\n")
    
    memory = load_json(FILES["memory"])
    if memory is None:
        print("❌ Cannot load memory.json. Run 'init' first.")
        return False
    
    # Questions
    print("Answer these questions to help SELF learn your preferences.\n")
    print("(Press Enter to skip any question)\n")
    
    questions = {
        "coding_style": "What's your preferred coding style? (e.g., 'functional', 'OOP', 'pragmatic'): ",
        "communication_style": "How do you like explanations? (e.g., 'concise', 'detailed', 'examples-first'): ",
        "risk_tolerance": "Risk tolerance for automated changes? (low/medium/high): ",
        "detail_level": "Default detail level? (minimal/adaptive/comprehensive): ",
    }
    
    expertise_prompt = "Your expertise areas (comma-separated, e.g., 'typescript, react, backend'): "
    
    preferences = {}
    for key, prompt in questions.items():
        answer = input(f"  {prompt}").strip()
        if answer:
            preferences[key] = answer
    
    expertise = input(f"\n  {expertise_prompt}").strip()
    expertise_list = [e.strip() for e in expertise.split(",") if e.strip()] if expertise else []
    
    # Update memory
    if memory["entities"]["users"]:
        user = memory["entities"]["users"][0]
        user["preferences"].update(preferences)
        user["expertise_areas"] = expertise_list
    
    memory["metadata"]["last_updated"] = datetime.now().isoformat()
    
    # Add onboarding episode
    episode = {
        "id": f"ep_{uuid.uuid4().hex[:12]}",
        "timestamp": datetime.now().isoformat(),
        "type": "decision",
        "summary": "User completed onboarding, preferences captured",
        "entities_involved": ["user_primary"],
        "outcome": "success",
        "confidence": 0.9,
        "minds_active": ["oracle"],
        "learnings": list(preferences.keys()),
        "emotional_valence": 0.5
    }
    memory["episodes"]["recent"].insert(0, episode)
    
    if save_json(FILES["memory"], memory):
        print("\n" + "-" * 60)
        print("\n✅ Onboarding complete! Your preferences have been saved.\n")
        print("  Summary:")
        for key, value in preferences.items():
            print(f"    {key}: {value}")
        if expertise_list:
            print(f"    expertise: {', '.join(expertise_list)}")
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
        else:
            memory_parser.print_help()


if __name__ == "__main__":
    main()

