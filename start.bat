@echo off
echo ===================================================
echo Starting Campus Event Hub Servers...
echo ===================================================

start "Campus Event Hub - Backend" cmd /k "cd /d %~dp0backend && node server.js"
start "Campus Event Hub - Frontend" cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo Both servers have been launched in separate windows!
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:5173
echo.
pause
