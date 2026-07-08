# curriculum-vitae — Qiaodan Ju

Deployed at **[cv.shimmerjordan.eu.org](https://cv.shimmerjordan.eu.org)**.

This repo holds the **built, self-contained** portfolio site: a single
`index.html` with all JS / CSS / fonts / images / video / résumé PDF inlined,
so Vercel just serves it statically (no build step).

- Bilingual (EN / 中文) with a language toggle
- Cursor-spotlight hero, scroll animations, dark theme
- `中文CV_Ju Qiaodan.pdf` — the résumé (also embedded in the page)

## Editing

The **source project** lives in `personal_web/cv-portfolio/` (React + Vite +
Tailwind). To update this site:

```bash
cd ../cv-portfolio
# edit src/content.ts (all text lives there)
npm run build
cp dist/index.html ../curriculum-vitae/index.html
# then commit & push this repo
```
