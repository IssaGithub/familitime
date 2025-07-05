#!/bin/bash

# HerzZeit - GitHub Pages Deployment Script
# Dieses Script hilft beim initialen Setup und Deployment

echo "💝 HerzZeit - GitHub Pages Deployment Setup"
echo "========================================="

# Prüfe ob Git initialisiert ist
if [ ! -d ".git" ]; then
    echo "🔧 Git Repository initialisieren..."
    git init
    echo "📝 Erste Dateien hinzufügen..."
    git add .
    git commit -m "Initial commit: HerzZeit Familienspiel"
else
    echo "✅ Git Repository bereits vorhanden"
fi

# Prüfe ob Remote Origin existiert
if ! git remote get-url origin > /dev/null 2>&1; then
    echo ""
    echo "🔗 GitHub Repository URL eingeben:"
    echo "   Beispiel: https://github.com/username/familitime.git"
    read -p "   Repository URL: " REPO_URL
    
    if [ ! -z "$REPO_URL" ]; then
        git remote add origin $REPO_URL
        echo "✅ Remote Origin hinzugefügt: $REPO_URL"
    else
        echo "❌ Keine Repository URL eingegeben"
        exit 1
    fi
else
    echo "✅ Remote Origin bereits konfiguriert"
fi

# Aktuelle Änderungen committen
echo ""
echo "📦 Aktuelle Änderungen committen..."
git add .
git commit -m "Update: GitHub Pages Deployment konfiguriert"

# Zum GitHub Repository pushen
echo ""
echo "🚀 Code zu GitHub pushen..."
git push -u origin main

echo ""
echo "✅ Deployment Setup abgeschlossen!"
echo ""
echo "🎉 Nächste Schritte:"
echo "   1. Gehe zu deinem GitHub Repository"
echo "   2. Settings → Pages → Source: 'GitHub Actions'"
echo "   3. Warte auf das automatische Deployment"
echo "   4. Deine Seite wird verfügbar sein unter:"
echo "      https://DEIN-USERNAME.github.io/familitime"
echo ""
echo "💝 Viel Spaß mit HerzZeit!" 