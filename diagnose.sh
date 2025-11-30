#!/bin/bash

OUTPUT_FILE="diagnostic_report.txt"

echo "=== MANSUS PROJECT DIAGNOSTIC REPORT ===" > $OUTPUT_FILE
echo "Generated at: $(date)" >> $OUTPUT_FILE
echo "" >> $OUTPUT_FILE

echo "=== 1. PHP VERSION ===" >> $OUTPUT_FILE
php -v >> $OUTPUT_FILE 2>&1
echo "" >> $OUTPUT_FILE

echo "=== 2. COMPOSER VERSION ===" >> $OUTPUT_FILE
composer --version >> $OUTPUT_FILE 2>&1
echo "" >> $OUTPUT_FILE

echo "=== 3. NODE VERSION ===" >> $OUTPUT_FILE
node -v >> $OUTPUT_FILE 2>&1
npm -v >> $OUTPUT_FILE 2>&1
echo "" >> $OUTPUT_FILE

echo "=== 4. LARAVEL VERSION ===" >> $OUTPUT_FILE
php artisan --version >> $OUTPUT_FILE 2>&1
echo "" >> $OUTPUT_FILE

echo "=== 5. DATABASE CONFIG ===" >> $OUTPUT_FILE
php artisan config:show database 2>&1 | head -30 >> $OUTPUT_FILE
echo "" >> $OUTPUT_FILE

echo "=== 6. MIGRATION STATUS ===" >> $OUTPUT_FILE
php artisan migrate:status >> $OUTPUT_FILE 2>&1
echo "" >> $OUTPUT_FILE

echo "=== 7. RECENT ERRORS (Last 50 lines of laravel.log) ===" >> $OUTPUT_FILE
tail -50 storage/logs/laravel.log >> $OUTPUT_FILE 2>&1
echo "" >> $OUTPUT_FILE

echo "=== 8. RUNNING PROCESSES ===" >> $OUTPUT_FILE
ps aux | grep -E "(php|node|npm)" | grep -v grep >> $OUTPUT_FILE 2>&1
echo "" >> $OUTPUT_FILE

echo "=== 9. PORT 8000 STATUS ===" >> $OUTPUT_FILE
lsof -i :8000 >> $OUTPUT_FILE 2>&1
echo "" >> $OUTPUT_FILE

echo "=== 10. PORT 5173 STATUS (Vite) ===" >> $OUTPUT_FILE
lsof -i :5173 >> $OUTPUT_FILE 2>&1
echo "" >> $OUTPUT_FILE

echo "=== 11. ENV FILE CHECK ===" >> $OUTPUT_FILE
if [ -f .env ]; then
    echo "✓ .env file exists" >> $OUTPUT_FILE
    echo "DB_CONNECTION=$(grep '^DB_CONNECTION=' .env | cut -d'=' -f2)" >> $OUTPUT_FILE
    echo "DB_DATABASE=$(grep '^DB_DATABASE=' .env | cut -d'=' -f2)" >> $OUTPUT_FILE
else
    echo "✗ .env file NOT found" >> $OUTPUT_FILE
fi
echo "" >> $OUTPUT_FILE

echo "=== 12. DATABASE FILE CHECK ===" >> $OUTPUT_FILE
if [ -f database/database.sqlite ]; then
    ls -lh database/database.sqlite >> $OUTPUT_FILE
else
    echo "✗ database.sqlite NOT found" >> $OUTPUT_FILE
fi
echo "" >> $OUTPUT_FILE

echo "=== 13. VENDOR DIRECTORY ===" >> $OUTPUT_FILE
if [ -d vendor ]; then
    echo "✓ vendor directory exists" >> $OUTPUT_FILE
else
    echo "✗ vendor directory NOT found - run 'composer install'" >> $OUTPUT_FILE
fi
echo "" >> $OUTPUT_FILE

echo "=== 14. NODE_MODULES DIRECTORY ===" >> $OUTPUT_FILE
if [ -d node_modules ]; then
    echo "✓ node_modules directory exists" >> $OUTPUT_FILE
else
    echo "✗ node_modules directory NOT found - run 'npm install'" >> $OUTPUT_FILE
fi
echo "" >> $OUTPUT_FILE

echo "=== 15. PUBLIC/BUILD DIRECTORY ===" >> $OUTPUT_FILE
if [ -d public/build ]; then
    echo "✓ public/build exists (frontend built)" >> $OUTPUT_FILE
    ls -lh public/build >> $OUTPUT_FILE 2>&1
else
    echo "✗ public/build NOT found - run 'npm run build'" >> $OUTPUT_FILE
fi
echo "" >> $OUTPUT_FILE

echo "=== DIAGNOSTIC COMPLETE ===" >> $OUTPUT_FILE
echo "Report saved to: $OUTPUT_FILE" >> $OUTPUT_FILE

cat $OUTPUT_FILE
