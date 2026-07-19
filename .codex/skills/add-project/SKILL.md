---
name: add-project
description: Add a new project to the portfolio using the canonical one-viewport case-study template (project-emgenisys.html), wire it into the homepage, gallery, and pager chain, and verify the no-scroll layout. Use whenever the user asks to add/create a new project or case study.
---

# Add a new portfolio project

Follow these steps exactly. The goal: every project page is indistinguishable
in structure and polish from `project-emgenisys.html` (the canonical template).

## 1. Gather content (ask the user for anything missing — NEVER invent)

Required:
- Project name + short slug (e.g. `boveye`)
- Eyebrow: `Domain · Context/Country` (e.g. `Sports Analytics · Switzerland`)
- Lede: 2–3 lines, one `<strong>` key phrase
- Meta chips: ROLE / CLIENT (or TYPE) / STATUS
- The challenge: exactly 3 items (bold lead + 1–2 line description)
- The approach: exactly 4 numbered steps (mono num + title + 1–2 lines)
- Outcomes: exactly 3 items — big-number/keyword lead (`.o-num`) + title + one
  line. **Only verified facts; no invented metrics.**
- Stack: 6–9 keyword tags
- Preview media: image path from user, or YouTube embed URL

Optional (default when absent):
- GitHub repo URL → otherwise show `Confidential`
- Client website URL → otherwise show `Not available`

## 2. Preview image

- If the source is >300KB or mis-formatted: `ffmpeg -y -i <src> -q:v 3 <slug>-preview.jpg`
  (crop with `-vf "crop=W:H:X:Y,scale=900:-1"` if it's a multi-panel composite).
- Save as BOTH `./<slug>-preview.jpg` and `./public/<slug>-preview.jpg`.
- Delete the raw source file from the repo root afterwards.

## 3. Create the page

- Copy `project-emgenisys.html` → `project-<slug>.html`.
- Replace ONLY: `<title>`, `<meta name="description">`, and the `<main>` content
  (hero band, meta chips, project-links row, three panels, case-foot strip).
- Keep the `<style>` block byte-identical to the template — if a style change is
  needed, change the template (emgenisys) first, then propagate to ALL project
  pages so their CSS stays identical (verify with
  `sed -n '/<style>/,/<\/style>/p' project-*.html | md5sum` per file).
- Media panel: `<img src="<slug>-preview.jpg">` or the YouTube `<iframe>` pattern.

## 4. Wire it in

- Endpoint: `src/pages/project-<slug>.html.ts` (copy an existing one, change the
  import path).
- Pager chain (wraps): CalibrX → Emgenisys → BovEye → CrackFinder → Satellite →
  Padel → CalibrX. Insert the new project where the user wants (default: before
  CalibrX, i.e. at the end) and update the prev/next links of BOTH neighbors.
- Gallery `projects.html`: add a card (media `<a>`, eyebrow, linked `<h3>`,
  blurb, tags, `Read more →`), add a `.<slug>-card{--preview:url("...")}` rule,
  and give it the right `data-domains` for the filter chips.
- Homepage `portfolio-home (3).html`: only if the user wants it in Selected
  work (ask). Featured spotlight stays Emgenisys unless told otherwise.

## 5. Verify (mandatory)

- `npm run build` — all routes emit.
- Playwright check at 1440×900 AND 1366×768:
  `document.documentElement.scrollHeight === clientHeight` (no scroll), plus a
  viewport screenshot reviewed visually.
- Check every link on the new page resolves (pager neighbors, back link, CTAs).

## 6. Ship

- Commit only the files belonging to this change (page, endpoint, previews,
  gallery/homepage edits). Conventional short commit message.
- **Do NOT push/deploy unless the user explicitly approves.**
