#!/bin/sh
# Local gate (no hosted CI): production build, then every page in every locale
# must answer 200 with a <title> from a real `next start` server.
# Not included on purpose: `npm run lint` (no ESLint config, it prompts) and
# `tsc --noEmit` (4 existing errors; the build ignores them) — see docs/decisions.md.
set -eu
cd "$(dirname "$0")/.."

npx next build

PORT=$(python3 -c 'import socket; s=socket.socket(); s.bind(("127.0.0.1",0)); print(s.getsockname()[1])')
LOG=$(mktemp)
npx next start -p "$PORT" >"$LOG" 2>&1 &
SERVER=$!
trap 'kill "$SERVER" 2>/dev/null || true; rm -f "$LOG"' EXIT

i=0
until curl -fsS -o /dev/null "http://127.0.0.1:$PORT/es" 2>/dev/null; do
  i=$((i + 1))
  if [ "$i" -gt 60 ]; then echo "server did not come up:" >&2; cat "$LOG" >&2; exit 1; fi
  sleep 1
done

FAILED=0
CHECKED=0
for locale in es en pt; do
  for page in app/\[locale\]/page.tsx app/\[locale\]/*/page.tsx; do
    route=$(printf '%s' "$page" | sed -e 's#^app/\[locale\]##' -e 's#/\{0,1\}page\.tsx$##')
    body=$(mktemp)
    code=$(curl -sS -o "$body" -w '%{http_code}' "http://127.0.0.1:$PORT/$locale$route" || echo 000)
    if [ "$code" != 200 ] || ! grep -q '<title>' "$body"; then
      echo "FAIL /$locale$route -> $code" >&2
      FAILED=$((FAILED + 1))
    fi
    CHECKED=$((CHECKED + 1))
    rm -f "$body"
  done
done

echo "route smoke: $((CHECKED - FAILED))/$CHECKED ok"
[ "$FAILED" -eq 0 ]
