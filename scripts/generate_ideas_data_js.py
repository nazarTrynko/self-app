from __future__ import annotations

import json
import re
from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class CategoryMeta:
    name: str
    icon: str
    color: str


CATEGORY_META: dict[str, CategoryMeta] = {
    "01-sensor-tools": CategoryMeta(name="Sensor Tools", icon="📡", color="#10b981"),
    "02-camera-vision": CategoryMeta(name="Camera & Vision", icon="📷", color="#8b5cf6"),
    "03-audio-sound": CategoryMeta(name="Audio & Sound", icon="🎵", color="#f472b6"),
    "04-offline-ai": CategoryMeta(name="Offline AI", icon="🤖", color="#06b6d4"),
    "05-data-vaults": CategoryMeta(name="Data Vaults", icon="🔐", color="#eab308"),
    "06-health-body": CategoryMeta(name="Health & Body", icon="❤️", color="#ef4444"),
    "07-productivity": CategoryMeta(name="Productivity", icon="⚡", color="#f97316"),
    "08-creative": CategoryMeta(name="Creative", icon="🎨", color="#a855f7"),
    "09-professional": CategoryMeta(name="Professional", icon="💼", color="#64748b"),
    "10-education": CategoryMeta(name="Education", icon="📚", color="#22c55e"),
    "11-gaming": CategoryMeta(name="Gaming", icon="🎮", color="#ec4899"),
    "12-communication": CategoryMeta(name="Communication", icon="💬", color="#3b82f6"),
    "13-finance": CategoryMeta(name="Finance", icon="💰", color="#84cc16"),
    "14-travel": CategoryMeta(name="Travel", icon="✈️", color="#14b8a6"),
    "15-home-life": CategoryMeta(name="Home & Life", icon="🏠", color="#f59e0b"),
    "16-security": CategoryMeta(name="Security", icon="🛡️", color="#0ea5e9"),
    "17-accessibility": CategoryMeta(name="Accessibility", icon="♿", color="#a3e635"),
    "18-developer": CategoryMeta(name="Developer", icon="👨‍💻", color="#94a3b8"),
    "19-niche-pro": CategoryMeta(name="Niche Pro", icon="🎯", color="#fb7185"),
    "20-experimental": CategoryMeta(name="Experimental", icon="🧪", color="#22d3ee"),
    "21-platforms": CategoryMeta(name="Platforms", icon="🧱", color="#c084fc"),
}


ID_RE = re.compile(r"^(\d{3})-.*\.md$")


def parse_md_title(md_path: Path) -> str:
    for line in md_path.read_text(encoding="utf-8").splitlines():
        if line.startswith("# "):
            return line[2:].strip()
    return md_path.stem


def parse_md_tier(md_path: Path) -> str:
    for line in md_path.read_text(encoding="utf-8").splitlines():
        if line.startswith("**Tier:**"):
            return line.split("**Tier:**", 1)[1].strip()
    return "Premium"


def main() -> None:
    ideas_dir = Path("/workspace/landings/ideas")
    out_file = ideas_dir / "ideas-data.js"

    categories: list[dict] = []

    for cat_dir in sorted([p for p in ideas_dir.iterdir() if p.is_dir()]):
        cat_id = cat_dir.name
        if cat_id not in CATEGORY_META:
            # Ignore unexpected folders rather than guessing UI metadata.
            continue

        meta = CATEGORY_META[cat_id]

        ideas: list[dict] = []
        for md in sorted(cat_dir.glob("*.md")):
            m = ID_RE.match(md.name)
            if not m:
                continue
            idea_id = m.group(1)
            ideas.append(
                {
                    "id": idea_id,
                    "file": md.name,
                    "name": parse_md_title(md),
                    "tier": parse_md_tier(md),
                }
            )

        categories.append(
            {
                "id": cat_id,
                "name": meta.name,
                "icon": meta.icon,
                "color": meta.color,
                "ideas": ideas,
            }
        )

    payload = {"categories": categories}

    # Write JS in the same style as the existing file.
    lines: list[str] = []
    lines.append("// Auto-generated ideas data for the browser")
    lines.append("const IDEAS_DATA = {")
    lines.append("  categories: [")

    for c_idx, cat in enumerate(payload["categories"]):
        lines.append("    {")
        lines.append(f"      id: {json.dumps(cat['id'])},")
        lines.append(f"      name: {json.dumps(cat['name'])},")
        lines.append(f"      icon: {json.dumps(cat['icon'])},")
        lines.append(f"      color: {json.dumps(cat['color'])},")
        lines.append("      ideas: [")

        for i_idx, idea in enumerate(cat["ideas"]):
            suffix = "," if i_idx != len(cat["ideas"]) - 1 else ""
            lines.append(
                "        { id: "
                + json.dumps(idea["id"])
                + ", file: "
                + json.dumps(idea["file"])
                + ", name: "
                + json.dumps(idea["name"])
                + ", tier: "
                + json.dumps(idea["tier"])
                + f" }}{suffix}"
            )

        lines.append("      ]")
        lines.append("    }" + ("," if c_idx != len(payload["categories"]) - 1 else ""))

    lines.append("  ]")
    lines.append("};")
    lines.append("")
    lines.append("// Calculate total")
    lines.append(
        "IDEAS_DATA.totalIdeas = IDEAS_DATA.categories.reduce((sum, cat) => sum + cat.ideas.length, 0);"
    )
    lines.append("")

    out_file.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {out_file} with {sum(len(c['ideas']) for c in categories)} ideas.")


if __name__ == "__main__":
    main()

