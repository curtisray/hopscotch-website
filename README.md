# Hopscotch

Website project for Hopscotch, a full-service D2C agency for product brands.

## Development

```sh
npm install
npm run dev
```

Create the static production build with `npm run build`.

## Project structure

- `src/pages/` — Astro pages
- `src/components/` — reusable site components
- `src/styles/` — global design system and responsive styles
- `src/assets/images/` — source images optimized by Astro at build time
- `src/prototypes/` — untouched original site prototype source
- `public/fonts/` — locally hosted production fonts
- `tools/agent-skills/` — local agent workflow skills

The original `.dc.html` prototype is preserved as-is and will be used as the basis for future site development.
