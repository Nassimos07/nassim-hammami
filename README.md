# Nassim Hammami — Portfolio

Personal portfolio of **Nassim Hammami**, Machine Learning & Computer Vision Engineer.
Built with [Astro](https://astro.build), zero client framework, deployed to GitHub Pages.

🔗 **Live:** https://nassimos07.github.io/nassim-hammami

![Built with Astro](https://img.shields.io/badge/built%20with-Astro-2fd9a3?style=flat-square)
![Deployed on GitHub Pages](https://img.shields.io/badge/deployed-GitHub%20Pages-080b0a?style=flat-square)

---

## ✨ Highlights

- **Dark technical theme** — emerald/teal accents, dot-grid backdrop, terminal hero card.
- **Single source of content** — everything you'd edit lives in [`src/data/`](src/data/) as typed TypeScript.
- **Fully static & fast** — ships ~0 KB of framework JS; only a few KB of hand-written vanilla JS (scroll reveal, scrollspy, typed role).
- **SEO ready** — Open Graph + Twitter cards, JSON-LD `Person` schema, sitemap, robots.txt.
- **Accessible** — skip link, reduced-motion support, semantic landmarks, keyboard-friendly.

## 🧱 Tech stack

| | |
|---|---|
| Framework | Astro 5 (static output) |
| Styling | Hand-written CSS with design tokens |
| Fonts | Inter + JetBrains Mono (self-hosted via Fontsource) |
| Hosting | GitHub Pages via GitHub Actions |

## 🚀 Local development

```bash
npm install        # install dependencies
npm run dev        # start dev server → http://localhost:4321/nassim-hammami
npm run build      # production build → dist/
npm run preview    # preview the production build locally
```

> Requires Node 18+ (Node 20 recommended — see `.nvmrc`).

## ✏️ Editing your content

All content is data-driven. Edit these files and rebuild:

| File | What it controls |
|------|------------------|
| [`src/data/profile.ts`](src/data/profile.ts) | Name, role, bio, stats, **social links**, email |
| [`src/data/experience.ts`](src/data/experience.ts) | Work history timeline |
| [`src/data/projects.ts`](src/data/projects.ts) | Featured projects |
| [`src/data/skills.ts`](src/data/skills.ts) | Skill groups & languages |
| [`src/data/education.ts`](src/data/education.ts) | Education |

Replace `public/resume.pdf` with your latest CV at any time.

### Regenerating the social preview image

The Open Graph image (`public/og-image.png`) is generated from
[`scripts/og-image.svg`](scripts/og-image.svg):

```bash
node scripts/generate-og.mjs
```

## 🌐 Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds with Astro and deploys to GitHub Pages.

**One-time setup:** in the repo, go to **Settings → Pages → Build and deployment → Source**
and select **GitHub Actions**.

### Custom domain (optional)

1. Add a `CNAME` file in `public/` containing your domain.
2. In `astro.config.mjs`, set `site` to your domain and `base` to `'/'`.
3. Point your DNS at GitHub Pages.

## 📄 License

Code is MIT licensed. Content, resume, and personal branding © Nassim Hammami.
