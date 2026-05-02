# mtb-site

Static single-page React site for the Edmond United youth mountain bike team.

## Tech

- Vite + React
- Plain CSS (no Tailwind)
- No backend

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - create production build
- `npm run preview` - preview production build locally
- `npm run deploy` - publish `dist/` to GitHub Pages via `gh-pages`

## GitHub Pages

`vite.config.js` is configured with:

- `base: "/mtb-site/"`

If the repository name changes, update `base` to match the new repo path.
