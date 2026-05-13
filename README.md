# Knoxville Roofing — Daniel Hood Roofing Systems

Static Astro site for **Daniel Hood Roofing Systems** — Knoxville, TN roofing contractor.
Replaces the legacy `danielhoodroofingsystems.com` WordPress site.

- **Stack:** Astro 6 (static) · vanilla CSS · zero framework
- **Hosting:** Cloudflare Pages
- **Domain:** danielhoodroofingsystems.com (after DNS swap)

## Local dev

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Project structure

```
src/
├── data/site.ts              # single source of truth for business info, services, areas, reviews, FAQs
├── layouts/Layout.astro      # shared HTML shell + SEO + JSON-LD schema
├── components/
│   ├── Header.astro          # sticky nav, top trust bar, mobile menu
│   ├── Footer.astro          # multi-column footer
│   ├── Hero.astro            # dark hero + inline quote form
│   ├── TrustBar.astro        # license/reviews/hours row
│   ├── ServicesGrid.astro    # featured services
│   ├── StatsBar.astro        # 4-up stats callouts
│   ├── AboutOwner.astro      # Daniel Hood bio
│   ├── AreasServed.astro     # county cards
│   ├── Process.astro         # 3-step process
│   ├── Reviews.astro         # testimonials
│   ├── FAQ.astro             # accordion
│   └── CTASection.astro      # bottom phone/email CTA
├── pages/
│   ├── index.astro           # homepage
│   ├── services.astro        # /services
│   └── areas.astro           # /areas
└── styles/global.css         # design tokens + base styles
public/
├── favicon.svg
├── robots.txt
└── _redirects                # Cloudflare Pages redirect rules
```

## Editing business info

All copy, services, counties, reviews, and FAQs live in [`src/data/site.ts`](src/data/site.ts).
Update there and rebuild — no need to touch components.

## Cloudflare Pages deployment

When connecting the repo in the Cloudflare Pages dashboard:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` (set via env var `NODE_VERSION=22`) |

Push to `main` triggers an auto-deploy. Cloudflare will provision a `*.pages.dev` preview URL; point the custom domain `danielhoodroofingsystems.com` at the Pages project once the design is approved.

## Reference

Visual reference: [icareaircare-astro.pages.dev](https://icareaircare-astro.pages.dev/) — same hub-and-spoke local-service pattern (hero, services, owner, reviews, areas, FAQ, CTA).
