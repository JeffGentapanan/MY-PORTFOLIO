# 🛠️ The Ultimate Step-By-Step Tutorial: Recreating Jeff's Portfolio
*A complete, granular guide from an empty folder to a professional production-ready portfolio.*

This guide is designed for anyone who wants to understand exactly how every piece of this project was put together. Follow these steps in order to recreate the entire experience.

---

## 🏗️ Phase 1: The Foundation (Initial Setup)

### Step 1: Environment Preparation
1.  Install **Node.js** (LTS version) from [nodejs.org](https://nodejs.org/).
2.  Open your terminal/command prompt.

### Step 2: Project Scaffolding
Run the following command to create the project structure using Vite:
```bash
npm create vite@latest jeff-portfolio -- --template react-ts
```
*Note: Choose 'y' if prompted to install the create-vite package.*

### Step 3: Entering the Project
Navigate into your new folder:
```bash
cd jeff-portfolio
```

### Step 4: Installing the "Engine" (Dependencies)
Install the specific libraries that power our animations, icons, and PDF generation:
```bash
npm install framer-motion react-icons @react-pdf/renderer
```

### Step 5: Project Cleanup
1.  Delete everything inside the `src/` folder **except** `main.tsx` and `vite-env.d.ts`.
2.  Create two new folders inside `src/`: `components` and `styles`.

---

## 🎨 Phase 2: Design System & Global Rules

### Step 6: Create the Global Stylesheet
Create `src/styles/global.css` and paste the core design variables:
```css
:root {
  --bg: #000000;
  --accent: #ffffff;
  --text-muted: #888888;
  --header-height: 90px;
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: var(--bg); color: #fff; font-family: 'Inter', sans-serif; }
```

### Step 7: Connect the entry point
Update `src/main.tsx` to import your global styles and render the App:
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

## ✨ Phase 3: Building the Animation Engine

### Step 8: Setup Animation Components
Create a folder: `src/components/animations/`.

### Step 9: Build the "Waves" Background
Create `Waves.tsx` in that folder. This uses HTML5 Canvas to create the flowing lines seen in the background. It calculates mouse distance to "push" the lines away.

### Step 10: Build the "Magnet" Wrapper
Create `Magnet.tsx`. This component wraps any element (like a button) and uses `framer-motion` to move it toward the cursor when it's nearby.

### Step 11: Build the "Decrypted Text" Effect
Create `DecryptedText.tsx`. This logic loops through random characters and slowly "locks" onto the correct letter of your name over a set duration.

---

## 🛠️ Phase 4: Building the Visible UI

### Step 12: The Header (Navigation + GitHub Link)
1.  Create `src/components/Header.tsx`.
2.  Import `FaGithub` from `react-icons/fa`.
3.  Add the logic to detect scrolling (to add a background blur).
4.  Add the link to `https://github.com/JeffGentapanan/MY_PORTFOLIO.git` next to your name.

### Step 13: The Hero Section (The "First Impression")
Create `src/components/Hero.tsx`. Use the `Magnet` and `DecryptedText` components here to make your name interactive.

### Step 14: The Projects Gallery
1.  Create `src/components/Projects.tsx`.
2.  Define an array of your projects with titles, descriptions, and GitHub links.
3.  Build the **Browser Frame** CSS (the three dots) to make screenshots look like a website.

### Step 15: The Skills Section
Create `src/components/Skills.tsx`. Group your skills into categories (Languages, Tools, etc.) and use `react-icons` for the official logos.

### Step 16: The PDF Resume Generator
1.  Create `src/components/ResumePDF.tsx`. This file defines the layout of your PDF (Font sizes, colors, sections).
2.  Create `src/components/Resume.tsx` and use the `@react-pdf/renderer`'s `PDFDownloadLink` to connect the generator to a button.

---

## 🔗 Phase 5: Final Assembly & Launch

### Step 17: Connect everything in App.tsx
Create `src/App.tsx` and stack your components:
```tsx
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
// ... import others
import './styles/global.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Projects />
        {/* ... add others */}
      </main>
    </div>
  )
}
```

### Step 18: Testing and Debugging
Run your project locally to see it in action:
```bash
npm run dev
```
Open the provided link (usually `http://localhost:5173`) in your browser.

### Step 19: The Final Build
When you are ready to publish, run:
```bash
npm run build
```
This creates a `dist` folder. Upload the contents of this folder to Netlify, Vercel, or GitHub Pages.

---
**Congratulations! You've followed every technical step to build a world-class React portfolio.**
