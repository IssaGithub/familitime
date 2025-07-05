# 🚀 GitHub Pages Deployment Guide

## Schnelle Einrichtung

### Schritt 1: Repository erstellen
1. Gehe zu [GitHub](https://github.com)
2. Erstelle ein neues Repository namens `familitime`
3. Wähle **Public** (für GitHub Pages kostenlos)
4. **Nicht** README, .gitignore oder Lizenz hinzufügen

### Schritt 2: Code hochladen

**Option A: Automatisches Script (Windows)**
```bash
# Einfach das bereitgestellte Script ausführen
deploy.bat
```

**Option B: Manuell**
```bash
# Git initialisieren
git init

# Alle Dateien hinzufügen
git add .
git commit -m "Initial commit: HerzZeit Familienspiel"

# Remote Repository hinzufügen (URL anpassen!)
git remote add origin https://github.com/DEIN-USERNAME/familitime.git

# Code hochladen
git push -u origin main
```

### Schritt 3: GitHub Pages aktivieren
1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** (oben rechts)
3. Scrolle runter zu **Pages** (linke Seitenleiste)
4. Bei **Source** wähle: **GitHub Actions**
5. Speichern - fertig! 🎉

## Was passiert dann?

### Automatisches Deployment
- Bei jedem `git push` wird automatisch deployed
- Der Workflow dauert etwa 2-3 Minuten
- Du erhältst eine E-Mail bei Erfolg/Fehlern

### Deine Website-URL
```
https://DEIN-USERNAME.github.io/familitime
```

### Deployment-Status prüfen
- Gehe zu deinem Repository
- Klicke auf **Actions** Tab
- Sieh den Status des letzten Deployments

## Konfiguration anpassen

### Andere Repository-Namen
Falls dein Repository nicht `familitime` heißt:

1. **astro.config.mjs** bearbeiten:
```javascript
export default defineConfig({
  site: 'https://DEIN-USERNAME.github.io',
  base: '/DEIN-REPO-NAME',  // ← Hier anpassen
  // ...
});
```

2. **Neu deployen:**
```bash
git add .
git commit -m "Config Update"
git push
```

### Custom Domain
Falls du eine eigene Domain verwendest:

1. **astro.config.mjs** anpassen:
```javascript
export default defineConfig({
  site: 'https://deine-domain.com',
  base: '/',  // ← Basis-Pfad entfernen
  // ...
});
```

2. **CNAME-Datei** erstellen:
```bash
echo "deine-domain.com" > public/CNAME
```

## Fehlerbehebung

### ❌ Deployment schlägt fehl
1. Prüfe den **Actions** Tab für Fehlerdetails
2. Stelle sicher, dass alle Dateien committed sind
3. Prüfe die astro.config.mjs Konfiguration

### ❌ Seite lädt nicht richtig
1. Prüfe die `base` Konfiguration in astro.config.mjs
2. Stelle sicher, dass der Repository-Name stimmt
3. Warte 5-10 Minuten nach dem Deployment

### ❌ Änderungen erscheinen nicht
1. Prüfe ob der neueste Commit deployed wurde
2. Lösche Browser-Cache (Strg+F5)
3. Prüfe den Actions Tab für Deployment-Status

## Erweiterte Konfiguration

### Deployment-Branches ändern
In `.github/workflows/deploy.yml`:
```yaml
on:
  push:
    branches: [ main, develop ]  # ← Weitere Branches hinzufügen
```

### Build-Optionen
```yaml
- name: Install, build, and upload your site
  uses: withastro/action@v2
  with:
    node-version: 18  # ← Node.js Version ändern
    package-manager: pnpm@latest  # ← Package Manager ändern
```

## Tipps

✅ **Immer testen** - Teste lokal mit `npm run build && npm run preview`
✅ **Kleine Commits** - Häufige, kleine Änderungen sind besser
✅ **Branch-Strategie** - Nutze feature-branches für größere Änderungen
✅ **Backup** - GitHub ist dein Backup, aber lokal sichern schadet nie

## Support

Bei Problemen:
1. Prüfe die [GitHub Actions Dokumentation](https://docs.github.com/en/actions)
2. Schaue in den [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/github/)
3. Erstelle ein Issue im Repository

---

**Viel Erfolg beim Deployment! 🚀💝** 