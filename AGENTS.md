# AGENTS.md — Portfolio / CV Website

## Project Overview

A personal portfolio and CV website designed to showcase projects, skills, and
experience to recruiters. Hosted on **GitHub Pages** as a statically exported
**Next.js** application.

---

## Tech Stack

| Layer              | Technology                          |
| ------------------ | ----------------------------------- |
| Framework          | Next.js 14 (App Router, TypeScript) |
| Styling            | Vanilla CSS (CSS custom properties) |
| Animations         | Framer Motion                       |
| Internationalization | Custom JSON-based i18n system      |
| Icons              | React Icons                         |
| Deployment         | GitHub Pages via GitHub Actions     |

---

## Coding Standards

### 1. Documentation

- Every **exported function/component** must have a JSDoc comment explaining
  its purpose, parameters, and return value.
- Every **file** must begin with a one-line comment describing what it contains.
- Variable and function names must be self-documenting
  (`projectCards` not `pc`).

### 2. SOLID Principles

| Principle                  | How it applies here                                          |
| -------------------------- | ------------------------------------------------------------ |
| **Single Responsibility**  | One component = one job; no god-components.                  |
| **Open/Closed**            | Sections and pages are configured via data files, not by editing component internals. |
| **Liskov Substitution**    | Shared component interfaces (e.g. `SectionProps`) must be interchangeable. |
| **Interface Segregation**  | Props types are granular; components never receive props they don't use. |
| **Dependency Inversion**   | Components depend on abstractions (hooks, context) not concrete implementations. |

### 3. Code Style

- Use **TypeScript strict mode** (`"strict": true` in `tsconfig.json`).
- Prefer `const` over `let`; never use `var`.
- Use **arrow functions** for components and callbacks.
- Keep files under **200 lines**; split into smaller modules when they grow.
- Use **named exports** (avoid `export default` except for pages).

---

## Internationalization (i18n)

### Architecture

```
/public/locales
  /en
    common.json      ← shared keys (nav, footer, buttons)
    hero.json         ← hero section text
    about.json        ← about section text
    skills.json       ← skills section text
    projects.json     ← projects section text
    experience.json   ← experience section text
    education.json    ← education section text
    contact.json      ← contact section text
  /tr
    common.json
    hero.json
    about.json
    skills.json
    projects.json
    experience.json
    education.json
    contact.json
```

### Rules

1. **Default language** is English (`en`).
2. Language switcher must be **always visible** in the navigation bar and use
   recognisable **country flag icons** (🇬🇧 / 🇹🇷) so that even users who
   cannot read the current language can switch.
3. **Adding a new language** requires only:
   - Creating a new folder under `/public/locales/<code>/` with the same JSON files.
   - Adding the locale code + flag to a single config array in
     `src/config/i18n.ts`.
4. All user-facing strings must come from locale files — **no hard-coded text**
   in components.

---

## Theming

### Colour Tokens

Themes are defined via CSS custom properties in `:root` / `[data-theme="dark"]`.

#### Dark Theme (JetBrains Darcula-inspired)

| Token                  | Value       | Usage                        |
| ---------------------- | ----------- | ---------------------------- |
| `--bg-primary`         | `#1e1f22`   | Main background              |
| `--bg-secondary`       | `#2b2d30`   | Cards, sidebars              |
| `--bg-tertiary`        | `#393b40`   | Hover states, borders        |
| `--text-primary`       | `#dfe1e5`   | Body text                    |
| `--text-secondary`     | `#9da0a8`   | Muted text                   |
| `--accent-primary`     | `#6b9fed`   | Links, active states         |
| `--accent-secondary`   | `#c77dbb`   | Secondary highlights         |
| `--accent-success`     | `#6aab73`   | Positive indicators          |
| `--accent-warning`     | `#e8bf6a`   | Warnings, stars              |
| `--accent-error`       | `#f75464`   | Errors                       |
| `--border`             | `#43454a`   | Borders                      |

#### Light Theme

| Token                  | Value       | Usage                        |
| ---------------------- | ----------- | ---------------------------- |
| `--bg-primary`         | `#f7f8fa`   | Main background              |
| `--bg-secondary`       | `#ffffff`   | Cards, sidebars              |
| `--bg-tertiary`        | `#e8eaed`   | Hover states, borders        |
| `--text-primary`       | `#1e1f22`   | Body text                    |
| `--text-secondary`     | `#5e6168`   | Muted text                   |
| `--accent-primary`     | `#3574e0`   | Links, active states         |
| `--accent-secondary`   | `#a854a0`   | Secondary highlights         |
| `--accent-success`     | `#4a8c57`   | Positive indicators          |
| `--accent-warning`     | `#c49a3a`   | Warnings, stars              |
| `--accent-error`       | `#d93848`   | Errors                       |
| `--border`             | `#d1d3d8`   | Borders                      |

### Rules

1. Theme toggle must be **always visible** in the navigation bar (sun/moon
   icon).
2. Selected theme persists across sessions via `localStorage`.
3. Default to **dark theme** unless the user's OS preference is light.
4. All colour references in CSS must use `var(--token)` — never raw hex values.

---

## Project Structure

```
cv-site/
├── public/
│   ├── images/              ← project thumbnails, profile photo
│   ├── flags/               ← language flag SVGs
│   └── resumes/             ← Ege_Resume_EN.pdf, Ege_Resume_TR.pdf
├── src/
│   ├── app/
│   │   ├── layout.tsx       ← root layout (providers, nav, footer)
│   │   └── page.tsx         ← single-page home (all sections)
│   ├── components/
│   │   ├── layout/          ← Header, Footer, Navigation, ThemeToggle, LanguageSwitcher
│   │   ├── sections/        ← Hero, About, Skills, Projects, Experience, Education, Contact
│   │   └── ui/              ← Button, Card, SectionWrapper, Badge, IconLink
│   ├── config/
│   │   ├── i18n.ts          ← supported locales, default locale
│   │   ├── navigation.ts    ← nav links config
│   │   └── site.ts          ← site-wide metadata (name, description, socials)
│   ├── context/
│   │   ├── ThemeContext.tsx  ← theme provider + hook
│   │   └── I18nContext.tsx   ← i18n provider + hook
│   ├── data/
│   │   ├── projects.ts      ← project card data (title key, image, repo URL)
│   │   ├── skills.ts        ← skills data
│   │   └── experience.ts    ← experience data
│   ├── hooks/
│   │   ├── useTranslation.ts
│   │   └── useTheme.ts
│   ├── types/
│   │   └── index.ts         ← shared TypeScript interfaces
│   └── styles/
│       ├── globals.css       ← CSS reset, theme variables, typography
│       ├── layout.css        ← header, footer, nav styles
│       ├── sections.css      ← section-specific styles
│       └── components.css    ← reusable component styles
├── .github/
│   └── workflows/
│       └── deploy.yml        ← GitHub Pages deploy action
├── AGENTS.md
├── README.md
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Modularity Rules

### Adding / Removing a Section

1. Create or delete the component in `src/components/sections/`.
2. Add or remove the corresponding locale keys in each `/public/locales/<lang>/` file.
3. Add or remove the section from the page composition in `src/app/page.tsx`.
4. Optionally update `src/config/navigation.ts` to show/hide the nav link.

### Adding a New Page

1. Create a new folder under `src/app/<page-name>/` with a `page.tsx`.
2. Add the route to `src/config/navigation.ts`.
3. Add locale keys under a new JSON file per language folder.

### Adding a New Language

1. Copy `/public/locales/en/` to `/public/locales/<code>/` and translate the values.
2. Add the locale entry (code + flag) to the array in `src/config/i18n.ts`.

---

## Animations

- Use **Framer Motion** for all section entrance animations and page
  transitions.
- Sections should animate in on scroll (fade-up with stagger).
- Navigation transitions should have a smooth cross-fade.
- Keep animations subtle and professional — this is a recruitment-facing site,
  not a game.

---

## Deployment (GitHub Pages)

1. `next.config.js` must set `output: 'export'` for static HTML generation.
2. A GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically
   builds and deploys on push to `main`.
3. The repo must have GitHub Pages enabled under **Settings → Pages → Source:
   GitHub Actions**.

---

## Agent Behavioural Rules

1. **Ask before acting** — if any user requirement is ambiguous, ask for
   clarification before writing code.
2. **No hallucination** — only reference real APIs, libraries, and techniques.
   If unsure, research first.
3. **Document everything** — every function, component, and config must have
   clear comments or JSDoc.
4. **Follow SOLID** — keep components small, configurable, and decoupled.
5. **Use semantic HTML** — proper heading hierarchy, landmarks, alt text, ARIA
   labels.
6. **Accessibility** — keyboard navigable, sufficient colour contrast, screen-
   reader friendly.
