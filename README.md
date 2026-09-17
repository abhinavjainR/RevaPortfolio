# Reva Thakur — Portfolio

A personal portfolio site for Reva Thakur (HR & Talent Acquisition), built with React, Vite, Material UI and Framer Motion, using her real résumé and employment-verification certificates as content.

## Stack

- **React 18** + **Vite** — fast dev server and build
- **Material UI (MUI) v5** — component library, themed with a custom palette (see `src/theme.js`)
- **Framer Motion** — hero entrance sequence, scroll-triggered reveals, hover/expand interactions
- **Google Fonts** — Fraunces (display serif) + Work Sans (body sans)

## Design system

- Palette: pale sage paper (`#ECEFE9`), pine-black ink (`#16231C`), pine-green primary (`#2F5D50`), brass accent (`#C08A3E`)
- Layout: ledger-style fact rows and a real chronological timeline instead of generic card grids
- Certificates section uses her actual verification letters (Dream Weavers Edutrack, WinSpark/PlanetSpark, LPU) as document images with a lightbox

## Getting started

```bash
npm install
npm run dev
```

The dev server opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview
```

Output goes to `dist/`, ready to deploy to Vercel, Netlify, GitHub Pages, or any static host.

## Project structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── theme.js
    ├── index.css
    ├── data/
    │   └── resumeData.js       # all content lives here — edit this to update the site
    ├── assets/
    │   ├── profile.jpg
    │   ├── cert-dreamweavers.jpg
    │   ├── cert-planetspark.jpg
    │   └── cert-lpu.jpg
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── ExperienceTimeline.jsx
        ├── Projects.jsx
        ├── Certifications.jsx
        ├── Education.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Updating content

Everything text-based — name, tagline, experience, projects, certificates, education, contact info — lives in `src/data/resumeData.js`. Update that file and the whole site reflects the change; no need to touch component code for content edits.

## Deploying to Vercel

1. Push this project to a GitHub repo
2. Import the repo at vercel.com
3. Framework preset: **Vite** (auto-detected)
4. Deploy — no extra configuration needed
