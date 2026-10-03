# `npm run lint` was documented as the gate but is interactive

**Symptom:** README/CLAUDE.md said the gate is `npm run lint` + `npm run build`. Running lint headless prints "How would you like to configure ESLint?" and waits on stdin, so any agent or CI that follows the docs hangs or silently skips it.

**Cause:** `next lint` with no ESLint config launches the setup wizard. `eslint` is not installed. `next.config.mjs` also sets `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors`, so the build never lints or type-checks either.

**Fix:** the gate is `scripts/local_ci.sh` (production build + 36-route smoke across es/en/pt), wired in `.local-ci.json`. Adding ESLint is a dependency decision left to Ivan.

**Check before trusting a documented gate:** run it with `< /dev/null` and a timeout; a prompt means it is not a gate. `tsc --noEmit` baseline: 4 errors (`masonry-layout`/`imagesloaded` types, `i18n/request.ts`).
