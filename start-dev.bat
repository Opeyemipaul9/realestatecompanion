@echo off
echo Starting Real Estate Website in Development Mode...
set NODE_ENV=development
npx tsx server/index.ts
pause