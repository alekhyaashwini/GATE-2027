@echo off
title GATE Quest 2027 Server
cd /d "%~dp0"
echo ========================================================
echo   GATE QUEST 2027 - Gamified Preparation Platform
echo ========================================================
echo Starting local development server...
echo.
npm run dev
if %errorlevel% neq 0 (
  echo.
  echo Server stopped or encountered an error.
  pause
)
