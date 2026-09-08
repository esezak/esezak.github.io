# cv-site — Personal Portfolio Website

A modern, responsive portfolio website to showcase projects, skills, and
experience to recruiters. Built with **Next.js 14**, **TypeScript**, and
**Framer Motion**, deployed on **GitHub Pages**.

## ✨ Features

- **Dark / Light theme** — JetBrains Darcula-inspired dark theme with a clean
  light alternative. Toggleable via a sun/moon icon; persists across sessions.
- **Multi-language support (i18n)** — English 🇬🇧 and Turkish 🇹🇷 out of the
  box. Add new languages by copying a locale folder and adding one config line.
- **Smooth animations** — Framer Motion scroll-triggered section entrances and
  staggered hero intro.
- **Modular architecture** — Each section is an independent component. Add or
  remove sections by editing a single page file.
- **Resume download** — Two CTA buttons in the hero section link to your EN/TR
  resume PDFs.
- **Responsive** — Mobile-first design with a hamburger menu and fluid grids.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 18 — [Download](https://nodejs.org/)
- **npm** (comes with Node.js)

### Install & Run

```bash
# 1. Clone the repo (replace with your URL)
git clone https://github.com/your-username/cv-site.git
cd cv-site

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static export is written to `./out/`.

---

## 📁 Project Structure

```
cv-site/
├── public/            ← Static assets (images, flags, resumes)
├── src/
│   ├── app/           ← Next.js App Router pages
│   ├── components/
│   │   ├── layout/    ← Header, Footer, ThemeToggle, LanguageSwitcher
│   │   ├── sections/  ← Hero, About, Skills, Projects, Experience, Education, Contact
│   │   └── ui/        ← Button, Badge, SectionWrapper
│   ├── config/        ← i18n, navigation, site metadata
│   ├── context/       ← Theme & i18n React context providers
│   ├── data/          ← Project, skill, and experience data
│   ├── hooks/         ← useTranslation, useTheme
│   ├── styles/        ← CSS files (globals, layout, sections, components)
│   └── types/         ← Shared TypeScript interfaces
└── locales/           ← i18n JSON files (en/, tr/)
```

---

## 🌍 Adding a New Language

1. Copy the `locales/en/` folder to `locales/<code>/` (e.g. `locales/de/`).
2. Translate all JSON values in the new folder.
3. Add the locale to the array in `src/config/i18n.ts`:
   ```ts
   { code: "de", label: "Deutsch", flagIcon: "/flags/de.svg" }
   ```
4. Add a flag SVG to `public/flags/de.svg`.

---

## ➕ Adding / Removing a Section

1. Create or delete the component in `src/components/sections/`.
2. Import (or remove the import) in `src/app/page.tsx`.
3. Add or remove locale keys in each `locales/<lang>/` folder.
4. Optionally update `src/config/navigation.ts` for the nav bar.

---

## 🎨 Customisation

| What                  | Where                                |
| --------------------- | ------------------------------------ |
| Your name & bio       | `locales/en/hero.json`, `about.json` |
| Social links          | `src/config/site.ts`                 |
| Projects              | `src/data/projects.ts` + locale JSON |
| Skills                | `src/data/skills.ts` + locale JSON   |
| Experience / Education | `src/data/experience.ts` + locale JSON |
| Theme colours         | `src/styles/globals.css`             |
| Resume sources        | Private `esezak/autoCV` repository  |

---

## 🚢 Deploying to GitHub Pages

1. **Create a GitHub repository** and push this code to the `main` branch.
2. Go to **Settings → Pages → Source** and select **GitHub Actions**.
3. Add an Actions secret named `AUTOCV_READ_TOKEN`. Use a fine-grained token
   restricted to `esezak/autoCV` with read-only Contents permission.
4. The included `.github/workflows/deploy.yml` workflow deploys on pushes to
   `main`, manual runs, and `cv_updated` events from `autoCV`. Every deployment
   retrieves the latest successful English and Turkish PDFs before building.
5. Your site will be live at `https://esezak.github.io/`.

---

## 📜 Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| Framework   | Next.js 14 (App Router, TypeScript) |
| Styling     | Vanilla CSS (CSS custom properties) |
| Animations  | Framer Motion                       |
| i18n        | Custom JSON-based system            |
| Icons       | React Icons                         |
| Deployment  | GitHub Pages via GitHub Actions     |

---

## 📄 Licence

MIT — feel free to fork and customise for your own portfolio.
