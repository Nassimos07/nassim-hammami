# Nassim Hammami — Portfolio

Personal portfolio of Nassim Hammami (Machine Learning & Computer Vision Engineer).
Deployed to GitHub Pages at `https://nassimos07.github.io/nassim-hammami/` on every
push to `main` via `.github/workflows/deploy.yml`.

## Architecture (important quirk)

The live site is **raw hand-written HTML files at the repo root**, served through
thin Astro endpoints — NOT the Astro component architecture in `src/`:

- `src/pages/index.astro` renders `portfolio-home (3).html` via `?raw` import.
- Every other page is `src/pages/<name>.html.ts` → `GET()` returning the matching
  root-level `<name>.html` via `?raw` import.
- `src/components/`, `src/data/`, `src/layouts/Base.astro`, `src/styles/global.css`
  are **dead code** (kept intentionally, do not wire them up or delete without asking).

To add a page: create `<name>.html` at repo root + `src/pages/<name>.html.ts` endpoint.

## Design language (all pages)

- Fonts: Poppins (UI), JetBrains Mono (labels/eyebrows/tags), Silkscreen (pixel
  accents, e.g. the STACK label).
- Palette: `--ink:#0d0d0d`, `--white:#fff`, `--gray-text:#6f6f6f`,
  `--gray-card:#f4f4f4`. Whisper tints: `#f6f1ef` (rose), `#f1f4ef` (sage).
- Neo-brutalist buttons: white/ink face + hard offset shadow (`Npx Npx 0 #e1e1e1`)
  with press-down hover (`translate(2px,2px)` + shrink shadow). Stack tags reuse
  this at small scale.
- Section dividers: center-weighted gradient hairline + three-dot motif.
- Nav brand: round animated avatar `nassim-avatar-detect (1).gif` + "Nassim".
- Favicon: `favicon.png` + `apple-touch-icon.png` (linked in every page head).
- Fixed footer (54px) with GitHub/LinkedIn/Upwork/Email socials.

## Project case-study template (canonical: `project-emgenisys.html`)

Every project page uses the **one-viewport, no-scroll** case-study layout.
`project-emgenisys.html` is the single source of truth — when creating a new
project page, copy it and replace only `<title>`, `<meta name="description">`,
and the `<main>` content. Use the `/add-project` skill.

Layout contract:
- Desktop (`min-width:1000px` + `min-height:640px`): `body{overflow:hidden}` —
  the entire case study fits one viewport. Verify `scrollHeight == clientHeight`
  at 1440×900 AND 1366×768 after any change.
- Below 1000px: falls back to a normal scrolling single column.
- Sections: hero band (back link, eyebrow, h1, 2–3 line lede, meta chips
  ROLE/CLIENT/STATUS, project-links row, media panel) → three panels
  (Challenge `.panel-red`, Approach `.panel-green`, Outcomes plain `.panel`) →
  `.case-foot` strip (pixel STACK label + button-style tags, pager links,
  Book a call).
- Challenge: exactly 3 items (bold lead + 1–2 line description).
- Approach: exactly 4 numbered steps (01–04).
- Outcomes: exactly 3 items with `.o-num` big-number leads — **verified facts
  only, never invent metrics**.
- Project links row: GitHub → real link or "Confidential"; Client website →
  real link or "Not available". Never fabricate URLs.
- Pager chain (wraps around): CalibrX → Emgenisys → BovEye → CrackFinder →
  Satellite → Padel → CalibrX. Insert new projects into this chain and update
  both neighbors.

## Content rules

- Copy is concise and concrete; no filler, no invented numbers, no fake client
  names. Confidential clients are "Confidential · <Country>".
- Tech keywords grouped and visible (recruiters skim).
- CTAs: Calendly `https://calendly.com/nassimhammemiwork/ml-computer-vision-project-call`
  and `mailto:hello@calibrx.io`.

## Images

- Project previews: `<slug>-preview.jpg`, stored at BOTH repo root (for direct
  file preview) and `public/` (served by Astro). Compress sources >300KB with
  ffmpeg (`-q:v 3`, target ≲150KB). Prefer real model-output imagery
  (detections/masks/overlays) over abstract placeholders.
- Raw source images dropped in the repo root are temporary — process them into
  `<slug>-preview.jpg` and delete the source.

## Workflow

- Build: `npm run build`. Dev: `npm run dev` (base path `/nassim-hammami`).
- Verify visually with Playwright chromium at
  `~/.cache/ms-playwright/chromium-*/chrome-linux64/chrome` (playwright-core
  scripts; screenshot + `scrollHeight` check for case pages).
- Deploy = push to `main`. **Never deploy without explicit user approval.**
- Commit only files relevant to the change; leave `src/layouts/Base.astro` and
  `src/styles/global.css` local modifications uncommitted (abandoned migration).
