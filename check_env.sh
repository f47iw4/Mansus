#!/bin/bash

echo "=== Checking .env for problematic variables ==="
echo ""

# Check for DB_PREFIX
if grep -q "^DB_PREFIX" .env; then
    echo "⚠️  Found DB_PREFIX in .env:"
    grep "^DB_PREFIX" .env
    echo ""
    echo "SOLUTION: Remove or comment out this line"
else
    echo "✓ No DB_PREFIX found"
fi

echo ""
echo "=== All DB_ variables in .env ==="
grep "^DB_" .env

echo ""
echo "=== Checking for array-like syntax ==="
grep -E "DB_.*=\[" .env || echo "✓ No array syntax found"

echo ""
echo "=== Checking for duplicate variables ==="
sort .env | uniq -d | grep "^DB_" || echo "✓ No duplicates found"
