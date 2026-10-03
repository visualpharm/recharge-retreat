# Decisions

Append-only, newest last. Every technical decision later work depends on, and every decision Ivan made (his words + date).
Format: `## YYYY-MM-DD · <title>` then `Decided: … · Why: … · Rejected: … · Undo: … · By: Ivan | agent`.
Grep this file before changing an existing behavior; contradicting a logged Ivan decision needs his Yes.

## 2025-06-12 · Stack: Next.js App Router + next-intl on a v0/shadcn scaffold
Decided: build the site as a Next.js App Router project exported from v0 (package name `my-v0-project`), with next-intl for locales, Tailwind + shadcn/ui for the UI · Why: not recorded · Rejected: not recorded · Undo: not recorded · By: Ivan
Source: commit `4b6b374` "Initialized repository for project Recharge Retreat website"; `package.json`, `components.json`.

## 2025-06-13 · Trilingual site: Spanish default, cookie persistence
Decided: serve Spanish (default) at `/` → `/es`, English at `/en`, Portuguese at `/pt`; persist the visitor's choice in a cookie; localize text per language rather than translate literally · Why: not recorded · Rejected: not recorded · Undo: not recorded · By: Ivan
Source: commit `98a6f39` "Language detector is working"; `middleware.ts`, `i18n/request.ts`, Language policy in `CLAUDE.md`.

## 2025-06-13 · Host on Vercel
Decided: deploy on Vercel; the repo builds there on push · Why: a Vercel build failure forced removing the unused masonry dependencies · Rejected: keeping unused masonry dependencies · Undo: not recorded · By: agent
Source: commit `2c50297` "Remove unused masonry dependencies to fix Vercel build".

## 2025-06-17 · SEO landing pages for shelter/bunker keywords, English only
Decided: add four English-only landing pages (argentina-shelter, survival-shelters-argentina, survival-bunker-argentina, bunker-argentina), rewritten from site content, linked from the footer (3 links per footer), same design as the rest of the site, not in the top menu, using only the Retreat's real features · Why: not recorded · Rejected: not recorded · Undo: not recorded · By: Ivan
Source: commit `1a90579` "feat: add SEO landing pages for Argentina shelter variants"; "SEO Landing pages" section in `CLAUDE.md`.

## 2025-06-23 · Add the Mar Azul cabin rental page
Decided: add `alquiler-cabana-mar-azul` with its own metadata and images, advertising the Mar Azul cabin · Why: not recorded · Rejected: not recorded · Undo: not recorded · By: Ivan
Source: commit `1bd78d8` "feat: add Mar Azul cabin rental page with metadata and images".

## 2026-04-22 · Sale/restructuring banner in navigation
Decided: property temporarily not available for rent — "en proceso de reestructuración", for sale at USD 400.000 with a MercadoLibre listing link, shown as a banner in the navigation in all three languages · Why: the property was put up for sale (stated in the banner copy) · Rejected: not recorded · Undo: remove the `saleBanner` keys from `messages/*.json` and their rendering in `components/navigation.tsx` · By: Ivan
Source: commit `f9e1fed` "Add sale/restructuring banner to navigation"; `saleBanner` in `messages/{es,en,pt}.json`.

## 2026-09-05 · Cross-link related public projects from public pages
Decided: link Bruno, Lira, Human Rounds, Inglés con Jenny and Finda from the public footers of the owned sites (this one included), using canonical public URLs and plain project names; preserve existing product copy (especially Jenny's verbatim introduction); keep links out of private accounts, checkout, clinical workflows and installer-branded customer sites · Why: Ivan's request to surface the project family across the owned sites, recorded in the design plan · Rejected: self-links; new banners or illustrations · Undo: not recorded · By: Ivan
Source: commit `851e3ed` "Link related public projects from public pages"; `design-plans/project-links-requirements-2026-09-05.md`.

## 2026-09-06 · Jenny links use inglesconjenny.com
Decided: point the Inglés con Jenny links at the `inglesconjenny.com` domain · Why: not recorded · Rejected: not recorded · Undo: not recorded · By: agent
Source: commit `3f0ae29` "fix: use inglesconjenny.com for Jenny links".

## 2026-10-01 · Canonical + hreflang as HTTP Link headers on recharge.com.ar
Decided: middleware emits every page's own canonical plus es/en/pt alternates (and `x-default` → `/es`) as an HTTP `Link` header pointing at `https://recharge.com.ar`; redirect responses (e.g. `/` → `/es`) carry no header · Why: Google reads `rel=canonical` and hreflang from the `Link` header, and every page should name itself as canonical instead of one shared canonical · Rejected: hardcoded per-page canonical tags; headers on redirects · Undo: not recorded · By: agent
Source: commits `72ded12` "Point canonical, hreflang and Open Graph URLs at recharge.com.ar", `2a38984` "Give every page its own canonical and hreflang"; `middleware.ts`.

## 2026-10-03 · Local gate = production build + 36-route smoke (no lint, no tsc)
Decided: `.local-ci.json` runs `scripts/local_ci.sh`: `next build`, then every `app/[locale]/**/page.tsx` in es/en/pt must return 200 with a `<title>` from `next start` · Why: the documented gate `npm run lint` is not runnable (no ESLint config, interactive prompt), so the repo had no working gate; the smoke catches runtime render failures the build alone misses · Rejected: adding ESLint (new dependency, needs Ivan's call per CLAUDE.md); `tsc --noEmit` (4 existing errors, red from day one; `next.config.mjs` sets `ignoreBuildErrors`) · Undo: delete `.local-ci.json` and `scripts/local_ci.sh` · By: agent
