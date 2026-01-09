#!/bin/bash
# Add bridge navigation to all index.html files
# Usage: ./scripts/add-bridge-nav.sh [dry-run]

DRY_RUN=${1:-""}
BRIDGE_CSS='<link rel="stylesheet" href="/_shared/css/bridge-nav.css">'
BRIDGE_JS='<script src="/_shared/js/bridge-nav.js"></script>'
BRIDGE_HTML="\n  <!-- Bridge Navigation -->\n  ${BRIDGE_CSS}\n  ${BRIDGE_JS}"

# Function to add bridge nav to a file
add_bridge_nav() {
  local file=$1
  
  # Skip if already has bridge nav
  if grep -q "bridge-nav" "$file"; then
    echo "⏭️  Skipping $file (already has bridge nav)"
    return
  fi
  
  # Check if file has </body> tag
  if ! grep -q "</body>" "$file"; then
    echo "⚠️  Skipping $file (no </body> tag)"
    return
  fi
  
  if [ "$DRY_RUN" = "dry-run" ]; then
    echo "🔍 Would update: $file"
  else
    # Use sed to add before </body>
    # macOS requires empty string after -i
    if [[ "$OSTYPE" == "darwin"* ]]; then
      sed -i '' "s|</body>|${BRIDGE_HTML}\n</body>|" "$file"
    else
      sed -i "s|</body>|${BRIDGE_HTML}\n</body>|" "$file"
    fi
    echo "✅ Updated: $file"
  fi
}

echo "🚀 Bridge Navigation Batch Update"
echo "=================================="
echo ""

# Process landings directory
echo "📁 Processing landings/..."
find landings -name "index.html" -not -path "*/node_modules/*" | while read file; do
  add_bridge_nav "$file"
done

# Process books directory (except _hub which is already done)
echo ""
echo "📁 Processing books/..."
find books -name "index.html" -not -path "*/_hub/*" -not -path "*/node_modules/*" | while read file; do
  add_bridge_nav "$file"
done

# Process self-discovery-app sub-pages
echo ""
echo "📁 Processing self-discovery-app/..."
FILE_BRIDGE_CSS='<link rel="stylesheet" href="/assets/bridge-nav.css">'
FILE_BRIDGE_JS='<script src="/assets/bridge-nav.js"></script>'
FILE_BRIDGE_HTML="\n  <!-- Bridge Navigation -->\n  ${FILE_BRIDGE_CSS}\n  ${FILE_BRIDGE_JS}"

find self-discovery-app -name "index.html" -not -path "self-discovery-app/index.html" | while read file; do
  if grep -q "bridge-nav" "$file"; then
    echo "⏭️  Skipping $file (already has bridge nav)"
    continue
  fi
  
  if ! grep -q "</body>" "$file"; then
    echo "⚠️  Skipping $file (no </body> tag)"
    continue
  fi
  
  if [ "$DRY_RUN" = "dry-run" ]; then
    echo "🔍 Would update: $file"
  else
    if [[ "$OSTYPE" == "darwin"* ]]; then
      sed -i '' "s|</body>|${FILE_BRIDGE_HTML}\n</body>|" "$file"
    else
      sed -i "s|</body>|${FILE_BRIDGE_HTML}\n</body>|" "$file"
    fi
    echo "✅ Updated: $file"
  fi
done

echo ""
echo "✨ Done!"
if [ "$DRY_RUN" = "dry-run" ]; then
  echo ""
  echo "This was a dry run. Run without 'dry-run' to apply changes."
fi

