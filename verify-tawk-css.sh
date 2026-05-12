#!/bin/bash
# Verification script: checks that tawk.to CSS resets exist in the compiled output
# and that no overly aggressive resets (border/outline/box-shadow/background-image: none !important) remain.

set -e

echo "=== Building project ==="
npm run build 2>&1 | tail -5

echo ""
echo "=== Checking compiled CSS ==="

CSS_FILE=$(find out/_next/static/chunks -name "*.css" | head -1)

if [ -z "$CSS_FILE" ]; then
    echo "ERROR: No compiled CSS file found in out/_next/static/chunks/"
    exit 1
fi

echo "Using: $CSS_FILE"
echo ""

# Check 1: Our targeted resets exist
echo "--- Check 1: Targeted tawk.to resets exist ---"
for prop in "border-color" "border-style" "border-radius" "background-color"; do
    if grep -q "div\[id\^=\"tawk\"\].*${prop}" "$CSS_FILE" || grep -q "${prop}.*unset" "$CSS_FILE"; then
        echo "  PASS: ${prop} unset rule found"
    else
        echo "  WARN: ${prop} unset rule NOT found in compiled CSS"
    fi
done

# Check 2: No nuclear resets remain (the old bad fix)
echo ""
echo "--- Check 2: No aggressive 'border: none !important' on tawk ---"
if grep -q 'div\[id\^="tawk"\].*border.*none' "$CSS_FILE" 2>/dev/null; then
    echo "  FAIL: Found 'border: none' on tawk.to selector — this will break the widget!"
    exit 1
else
    echo "  PASS: No 'border: none' on tawk.to selector"
fi

if grep -q 'div\[id\^="tawk"\].*outline.*none' "$CSS_FILE" 2>/dev/null; then
    echo "  FAIL: Found 'outline: none' on tawk.to selector — accessibility violation!"
    exit 1
else
    echo "  PASS: No 'outline: none' on tawk.to selector"
fi

if grep -q 'div\[id\^="tawk"\].*box-shadow.*none' "$CSS_FILE" 2>/dev/null; then
    echo "  FAIL: Found 'box-shadow: none' on tawk.to selector — removes widget shadows!"
    exit 1
else
    echo "  PASS: No 'box-shadow: none' on tawk.to selector"
fi

# Check 3: No global * { border } rules that would affect tawk.to
echo ""
echo "--- Check 3: No global * border rules ---"
if grep -oP '\*[^{]*\{[^}]*border[^}]*\}' "$CSS_FILE" 2>/dev/null | head -3; then
    echo "  WARN: Found global * border rules — verify these don't leak into tawk.to"
else
    echo "  PASS: No global * border rules found"
fi

# Check 4: Tailwind preflight border rule exists (confirms preflight is loaded)
echo ""
echo "--- Check 4: Tailwind preflight is present ---"
PREFLIGHT_COUNT=$(grep -c "border:0 solid" "$CSS_FILE" 2>/dev/null || echo "0")
if [ "$PREFLIGHT_COUNT" -gt 0 ]; then
    echo "  PASS: Tailwind preflight 'border:0 solid' found ($PREFLIGHT_COUNT occurrence(s))"
else
    echo "  INFO: Tailwind preflight 'border:0 solid' not found as exact string (may be minified differently)"
fi

echo ""
echo "=== Verification complete ==="
echo "Deploy to Vercel and manually check the tawk.to widget:"
echo "  1. Chat bubble should appear in bottom-right corner with proper styling"
echo "  2. Click the bubble — chat window should open with correct layout"
echo "  3. All buttons inside the chat window should have rounded corners and backgrounds"
echo "  4. No plain 'box' outlines around widget elements"