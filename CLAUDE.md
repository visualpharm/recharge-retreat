# Recharge Retreat — recharge.com.ar

Marketing site for the Recharge Retreat shelter: a self-sufficient cabin on 9 private hectares of dunes near Faro Querandí, Argentina. Trilingual (es/en/pt) Next.js app hosted on Vercel.

## Principles

- Content has a single source of truth: the canonical site copy (Spanish + English, page by page) lives in `docs/rules/content.md`; page components implement that spec — change them together.
- Trilingual parity: every route renders in es/en/pt from `messages/*.json`, with localized (not literal) text; unknown locales fall back to Spanish.
- SEO is emitted, not hardcoded: canonical + hreflang alternates come from `middleware.ts` as HTTP `Link` headers pointing at `https://recharge.com.ar`; every page names itself as canonical.
- Real features only: marketing copy — including the SEO landing pages — never invents shelter/bunker features the property doesn't have.
- No new dependencies without a reason; the v0/shadcn scaffold already ships unused ones.
- The site stays static: no database, no user data, no API routes; all state is the message files and static assets.

## Ivan decides

- Property facts and business claims: prices, sale status and banner, booking channels (Airbnb, WhatsApp number).
- Cross-links to his other projects (Il Buco, Mar Azul, Inglés con Jenny) and their wording.
- Whether the booking welcome message gets sent — currently explicitly on hold (see "Welcome message" below).
- Anything that touches another project's site or accounts.
- Agent decides (log it in `docs/decisions.md`, don't ask): components, styling, dependency updates, copy refactors inside an agreed slice.

## Work

- Dev: `npm run dev` → http://localhost:3010 (port fixed in package.json).
- Build: `npm run build` · Lint: `npm run lint`.
- Test: no automated suite — the gate is lint + build, then rendered review of every touched page in all three locales (commands in README.md).
- Deploy: Vercel builds `main` (github.com/visualpharm/recharge-retreat); done = verified on the live recharge.com.ar URL.
- Decisions: append to `docs/decisions.md`; grep it before changing logged behavior — contradicting a logged Ivan decision needs his Yes.

## Pointers

- `docs/rules/content.md` — the full site copy spec (Spanish + English, pages 1–5), moved verbatim from this file.
- `docs/decisions.md` — append-only decisions log, newest last.
- `design-plans/` — per-feature requirement docs (e.g. `project-links-requirements-2026-09-05.md`).

## Image policy

Galleries of images are done with the simple grid. They should be responsive. 

Images smaller than 500x500px should be zoomable with some library that allows to browse them one by one with left and right arrows and preferably previews on the bottom.

Exception: Aerial images are always zoomable regardless of size, as they contain interesting details worth examining closely.

## Language policy
The site is available in English, Spanish, and Portuguese. The content is the same in all languages, but the text is localized to each language.

There's the language switcher in the top right corner of the header. The language is stored in a cookie, so it will be remembered for the next visit. The spanish version in the switcher has the flag of Argentina, the english version has the flag of the United States, and the portuguese version has the flag of Brazil.

The default language is Spanish. The / opens Spanish. English is in /en and Portuguese in /pt.

We use IP geolocation to determine the language for the first visit, but it can be changed later. Spanish speaking countries resolve to Spanish, English speaking countries to English, and Portuguese speaking countries to Portuguese. If the country is not recognized or speaks some other language, it defaults to English.

Spanish is argentinian, portuguese is brazilian, and english is american. The text is localized to each language, so it may not be a direct translation.

## Welcome message (don't send it for now)

¡Gracias por reservar Recharge! 🌿

Es un refugio autónomo entre el mar y la reserva.

📍Cómo llegar:
https://recharge.com.ar/es/location

🧳 Traé por favor:
	•	Sábanas y toallas
	•	Comida y bebida

💡 Tip: fijate qué hacer en la zona https://recharge.com.ar/es/activities


## SEO Landing pages
create landing pages for these keywords, only for english version:

argentina shelter 
survival shelters argentina 
survival bunker argentina 
bunker argentina

Use the content from the rest of the website, but rewrite it. Relink these pages in the footer, 3 links per footer, so each of the pages has incoming links. Make these pages the same design as the rest of the website. Don't add them in the top menu.

Don't invent the features bunkers/shelters have, use the real features of the Recharge Retreat.