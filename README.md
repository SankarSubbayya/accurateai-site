# accurateai.org

Portfolio hub for [Sankar Subbayya's](https://github.com/SankarSubbayya) AI
projects. Linked from `accurateai.org` (apex), out to per-project landings:
[pathtocare.pages.dev](https://pathtocare.pages.dev),
[sentinel-health.pages.dev](https://sentinel-health.pages.dev), and
[Agent Sentinel](https://github.com/SankarSubbayya/agent_sentinel).

Built with Next.js 16 (App Router, static export) + Tailwind v4.
Deployed to Cloudflare Pages.

## Local dev

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # writes static export to ./out
```

## Deploy — Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create application → Pages → Connect to Git**.
3. Pick the repo. Build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
4. Save & Deploy. You get `<project>.pages.dev` after the first build.
5. **Custom domains → Set up a custom domain → `accurateai.org`** (and optionally `www.accurateai.org`). Cloudflare creates the records itself since DNS is already in the zone.

Every push to `main` auto-redeploys.

## Why static export

Cloudflare Pages serves static files out of the `out/` directory directly from
the CDN — no runtime, no cold start, no Functions quota. The site is a
portfolio hub with no API routes or server-rendered content, so static is the
right tier.

If we later need API routes or middleware, switch to
[@cloudflare/next-on-pages](https://github.com/cloudflare/next-on-pages)
without changing the source tree.
