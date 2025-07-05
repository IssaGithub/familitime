# 💝 HerzZeit - Das Familienspiel der Liebe

Ein interaktives Familienspiel, das entwickelt wurde, um Familienmitglieder näher zusammenzubringen, Wertschätzung zu fördern und gemeinsam zu wachsen.

## 🎮 Über das Spiel

**HerzZeit** ist ein digitales Familienspiel mit:
- 2-10 Spielern (ab 5 Jahren)
- 20-45 Minuten Spielzeit
- 50 verschiedene Karten in 3 Kategorien:
  - 💝 **Herzensfragen** - Tiefere Gespräche und Verbindungen
  - 🤗 **Liebesaktionen** - Körperliche Nähe und Zuneigung
  - 🎉 **Lustige Aufgaben** - Spaß und Lachen für die ganze Familie

## 🌟 Spielziel

- Familienmitglieder besser kennenlernen
- Wertschätzung und Liebe ausdrücken
- Echte Gespräche fördern
- Gemeinsam wachsen und Spaß haben

## 🛠️ Technologie

- **Astro.js** - Modernes Web-Framework
- **Tailwind CSS** - Responsive Design
- **TypeScript** - Typsichere Entwicklung

## 🚀 Lokale Entwicklung

### Voraussetzungen
- Node.js (Version 18 oder höher)
- npm oder yarn

### Installation
```bash
# Repository klonen
git clone https://github.com/izayt/familitime.git
cd familitime

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Das Spiel ist dann unter `http://localhost:4321` verfügbar.

## 📦 Deployment zu GitHub Pages

### Automatisches Deployment

Das Projekt ist für automatisches Deployment zu GitHub Pages konfiguriert:

1. **Repository auf GitHub erstellen**
2. **Code pushen:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **GitHub Pages aktivieren:**
   - Gehe zu Repository → Settings → Pages
   - Source: "GitHub Actions" auswählen
   - Das Deployment startet automatisch bei jedem Push

### Manuelle GitHub Pages Konfiguration

Falls Sie die Konfiguration anpassen möchten:

1. **astro.config.mjs anpassen:**
   ```js
   export default defineConfig({
     site: 'https://DEIN-USERNAME.github.io',
     base: '/DEIN-REPO-NAME',
     // ...
   });
   ```

2. **Repository Settings:**
   - Settings → Pages → Source: "GitHub Actions"

### Deployment-Workflow

Das `.github/workflows/deploy.yml` Script:
- Triggert bei Push auf `main` oder `master` Branch
- Installiert Abhängigkeiten
- Baut die Astro-Site
- Deployed automatisch zu GitHub Pages

## 🎯 Verfügbare Scripts

```bash
# Entwicklungsserver
npm run dev

# Produktions-Build
npm run build

# Build vorschau
npm run preview

# Astro CLI
npm run astro
```

## 🎨 Anpassungen

### Eigene Karten hinzufügen

Bearbeiten Sie `src/data/cards.ts`:

```typescript
export const cards: Card[] = [
  {
    id: 51,
    type: 'herzensfrage',
    text: 'Ihre neue Frage hier',
    icon: '💝'
  },
  // ... weitere Karten
];
```

### Design anpassen

- Farben: Tailwind-Klassen in `src/pages/index.astro`
- Layout: `src/layouts/Layout.astro`
- Styles: `src/styles/global.css`

## 🎪 Spielregeln

1. **Vorbereitung:** Spieleranzahl und Dauer wählen
2. **Spielablauf:** Reihum Karten aus dem "Herzglas" ziehen
3. **Aufgaben:** Fragen beantworten oder Aktionen ausführen
4. **Respekt:** Einander zuhören und wertschätzen
5. **Abschluss:** Liebessterne vergeben

## 🌈 Wirkung

- Fördert echte Familiengespräche
- Stärkt emotionale Verbindungen
- Bringt Spaß und Tiefe in den Alltag
- Lässt jedes Familienmitglied sich gesehen fühlen

## 🤝 Beitragen

Gerne können Sie das Spiel erweitern:
- Neue Karten vorschlagen
- Bugs melden
- Features anfragen
- Pull Requests erstellen

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe `LICENSE` für Details.

## ❤️ Danksagung

Erstellt mit Liebe für Familien überall. Das Spiel basiert auf den Prinzipien der gewaltfreien Kommunikation und positiven Psychologie.

---

**Viel Spaß beim Spielen und Verbinden! 💝**

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
