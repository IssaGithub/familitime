@echo off
chcp 65001 > nul
echo.
echo 💝 HerzZeit - GitHub Pages Deployment Setup
echo =========================================

REM Prüfe ob Git initialisiert ist
if not exist ".git" (
    echo 🔧 Git Repository initialisieren...
    git init
    echo 📝 Erste Dateien hinzufügen...
    git add .
    git commit -m "Initial commit: HerzZeit Familienspiel"
) else (
    echo ✅ Git Repository bereits vorhanden
)

REM Prüfe ob Remote Origin existiert
git remote get-url origin > nul 2>&1
if errorlevel 1 (
    echo.
    echo 🔗 GitHub Repository URL eingeben:
    echo    Beispiel: https://github.com/username/familitime.git
    set /p REPO_URL="   Repository URL: "
    
    if not "!REPO_URL!"=="" (
        git remote add origin !REPO_URL!
        echo ✅ Remote Origin hinzugefügt: !REPO_URL!
    ) else (
        echo ❌ Keine Repository URL eingegeben
        pause
        exit /b 1
    )
) else (
    echo ✅ Remote Origin bereits konfiguriert
)

REM Aktuelle Änderungen committen
echo.
echo 📦 Aktuelle Änderungen committen...
git add .
git commit -m "Update: GitHub Pages Deployment konfiguriert"

REM Zum GitHub Repository pushen
echo.
echo 🚀 Code zu GitHub pushen...
git push -u origin main

echo.
echo ✅ Deployment Setup abgeschlossen!
echo.
echo 🎉 Nächste Schritte:
echo    1. Gehe zu deinem GitHub Repository
echo    2. Settings → Pages → Source: 'GitHub Actions'
echo    3. Warte auf das automatische Deployment
echo    4. Deine Seite wird verfügbar sein unter:
echo       https://DEIN-USERNAME.github.io/familitime
echo.
echo 💝 Viel Spaß mit HerzZeit!
echo.
pause 