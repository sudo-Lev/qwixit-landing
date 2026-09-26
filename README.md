# qwixit-landing

Marketing site for [Qwixit](https://qwixit.app) — Next.js 15 (App Router), Tailwind v4, Motion, next-intl. Deployed on Vercel.

```sh
pnpm install
pnpm dev        # http://localhost:3000 → redirects to /en, /uk or /pl
pnpm build && pnpm start
pnpm lint && pnpm typecheck
```

- Copy & demo cases: `messages/{en,uk,pl}.json` (`demo.cases[]`).
- Design tokens & keyframes: `app/globals.css`.
- Hero demo: `components/demo/` — `controller.ts` runs the loop on a pausable clock; `SweepText` / `WaveWord` animate via refs + rAF.
- The demo is fully mocked: no API routes, no network calls, no env vars.
- OG image fonts live in `assets/fonts/` (read at build time).
