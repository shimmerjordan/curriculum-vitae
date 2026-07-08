# Qiaodan Ju — Portfolio / CV

Source of **[cv.shimmerjordan.eu.org](https://cv.shimmerjordan.eu.org)**.
A single-file, self-contained portfolio — React + Vite + Tailwind + Framer
Motion, bilingual (EN / 中文), dark theme, cursor-spotlight hero.

## How deployment works

- **`main`** branch = the full source project (this branch).
- On every push to `main`, a **GitHub Action** (`.github/workflows/deploy.yml`)
  runs `npm ci && npm run build` and publishes the built `dist/` to the
  **`web-page`** branch (a clean, source-less static build).
- **Vercel** deploys the **`web-page`** branch — it's already-built static HTML,
  so Vercel needs **no build step** (Framework: *Other*, empty build command).

So: edit on `main` → push → Action builds → `web-page` updates → Vercel redeploys.

## Edit the content — one file

**All text lives in [`src/content.ts`](src/content.ts)** — edit the strings there.
It is organised as:

| Section | What it controls |
| --- | --- |
| `ASSETS` | hero images · résumé PDF · background video (files in `src/assets/`) |
| `LINKS` | email + GitHub / blog / portal / online-CV URLs |
| `MARQUEE_A` / `MARQUEE_B` | the two scrolling tech-tag rows |
| `PROJECTS_META` | per-project accent colour · icon · preview image · link |
| `CONTENT.en` / `CONTENT.zh` | every translatable string, one block per language |

- Keep `CONTENT.en` and `CONTENT.zh` in sync.
- To add an item, copy an existing `{ … }` block and edit it in **both** languages
  (for a project, also add a row to `PROJECTS_META`, matched by order).
- `PROJECTS_META.icon` ∈ `Package · Bot · Gamepad2 · Cpu · LineChart`.

Type definitions are split into `src/content.types.ts`.

## Local development

```bash
npm install
npm run dev      # local dev server
npm run build    # → dist/index.html (one self-contained file)
```

## Chinese fonts (only if you add new Chinese characters)

Big titles use a **pixel** font, company/project names a **brush** font — both
*subset* to the characters currently used (body text uses the system font).
If you add new Chinese characters to a heading or a company/project name:

```bash
cd fonts-src && python3 subset.py    # needs: pip install fonttools brotli
```

## Query-string helpers

`?lang=zh|en` · `?demo` (park hero spotlight) · `?nofx` (no entrance animation) ·
`?only=about|experience|projects|skills`
