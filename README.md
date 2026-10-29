# A.R. ASCENDANCY — Homepage Concept 02

Second, independent homepage concept for **Alina Rogall / A.R. ASCENDANCY** (Berlin), prepared by
**PENAXIS (Private) Limited**. Confidential — covered by the mutual NDA. Concept 01 lives in its own
repository and is untouched by this one.

## Direction

Clean, contemporary, agency-grade: warm ivory ground, charcoal navigation and panels, oversized Geist
headlines with grey second lines, white cards with restrained radii, champagne gold (`#D6C1A3`) used
sparingly for buttons, the headline mark, labels and hover states. No serif, no beige, no decoration.

- **Hero** — centred typographic headline with a staggered word reveal and a gold mark; beneath it a
  split composition: charcoal editorial panel (grid texture, inner card) + art-directed portrait panel
  with two quiet offer cards. Typographic discipline strip instead of client logos.
- **Haltung** — her claim "Think consciously. Change everything." with three principle cards
  (Clarity · Decision · Ascent) and line icons.
- **Leistungen** — charcoal panel, four large-type service rows with hover states (gold title, rotating
  arrow, drawing rule, description lift).
- **Ablauf** — sticky heading + three numbered steps, mono-graded interior photograph with mask reveal.
- **Über Alina** — one portrait, editorial two-column panel, her own words.
- **Speaking & Podcasts**, **final CTA** (charcoal card with a code-drawn ascent line), **footer**.

Copy is German-first draft copy written for this concept and **requires client approval**. It reuses
the client's own phrases where they exist (claim, CTAs, FAQ-derived principle wording) and invents no
testimonials, numbers, logos or credentials.

## Imagery

Two photographs of Alina (hero panel, founder section) and her own interior photography (mono-graded),
all served through `/api/img/[id]` from her current website's CDN with sharp (resize, 4:5 / 16:10 crop,
`grade=portrait|mono|warm`). No third-party stock. The ascent line in the final CTA is code-built SVG.

## Motion

GSAP 3 + ScrollTrigger (`components/Motion.tsx`), driven by data attributes:
`.hero-word` / `.hero-mark` / `[data-hero-after]` (load sequence), `[data-reveal]`, `[data-reveal-group]`
(staggered children), `[data-mask]` (clip-path image reveal + settle), `[data-ascent]` (line draws),
`[data-panel]` (dark sections lift in). `prefers-reduced-motion` renders everything static.

## Access

`middleware.ts` + `ACCESS_KEY`: open `https://<host>/?key=<ACCESS_KEY>` once → 30-day cookie; everyone
else sees `/zugang`. `X-Robots-Tag`, `robots.txt` and meta robots block indexing. `/api/img` is not
gated (the photos are public on her live site).

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · GSAP · sharp · Geist + Plus Jakarta Sans
(self-hosted, OFL).

```bash
npm install && echo "ACCESS_KEY=your-key" > .env.local && npm run dev
```

## Repositories & deployment

- **Canonical:** `Penaxis/v2-ar-ascendancy-homepage-concept` (this repo)
- **Vercel mirror:** `adeelaslam4/v2-ar-homepage-concept-02` — Vercel Hobby cannot link a private
  organisation-owned repository, so the Vercel project `v2-ar-ascendancy-homepage-concept` (penaxis team)
  deploys from this mirror. Push every change to both: `git push origin main && git push mirror main`.
