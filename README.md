# Dr. Kamal Pandey — Official Portfolio

Next.js 14 portfolio for **Dr. Kamal Pandey** (Sr. Manager / Distinguished Engineer — Enterprise Applied AI & Business Applications Development @ Rivian).

Live site: [drkamalpandey.com](https://www.drkamalpandey.com)

---

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS + `app/kp.css` / `app/globals.css` |
| Motion | Framer Motion |
| Fonts | DM Sans, Playfair Display, JetBrains Mono (`next/font`) |

---

## Quick start

```bash
npm install
npm run dev
# http://localhost:3000
```

| Script | Purpose |
|--------|---------|
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

---

## Site map

| Route | Purpose |
|-------|---------|
| `/` | Homepage (hero → work → impact → about → pubs → honors → books → capabilities → initiatives → network → contact) |
| `/research` | Full publication index |
| `/recognition` | Awards, memberships, full impact ledger |
| `/experience` | Career timeline |
| `/consulting` | Advisory offerings |
| `/contact` | Contact section |
| `/blog` | Pointer to Medium |

Primary nav: **Work · About · Research · Recognition · Consulting · Contact**

---

## Content sources

All substantive content is drawn from public profiles (Scholar, LinkedIn, ORCID, Constellation AI150, ResearchGate, etc.). Corpus lives in:

- `components/kp/data.ts` — site config, about, case studies, expertise
- `components/kp/verifiedContent.ts` — publications, career, awards, stats
- `components/kp/trustedOrgs.ts` — selected employers / partners / bodies

---

## Design tokens (kp)

| Token | Value | Use |
|-------|-------|-----|
| `kp-bg` | `#F6F7F9` | Page background |
| `kp-ink` | `#09090B` | Primary text |
| `kp-accent` | `#1D4ED8` | Links / CTAs |
| `kp-navy` | `#070D1C` | Capability bands / OG |
| `kp-award` | `#D97706` | Recognition accents |

---

## Assets

| Path | Role |
|------|------|
| `public/kp/kamal-speaking-ai4-2025.png` | Hero portrait |
| `app/opengraph-image.tsx` | Dynamic OG / Twitter card (1200×630) |
| `app/icon.png` / `app/apple-icon.png` | Favicons (Next metadata routes) |

---

## Profile links

- LinkedIn: https://www.linkedin.com/in/kamalkpandey/
- Google Scholar: https://scholar.google.com/citations?user=rA_dpyAAAAAJ
- ORCID: https://orcid.org/0009-0009-1669-4450
- ResearchGate: https://www.researchgate.net/profile/Kamal-Pandey-21
- Constellation AI150: https://www.constellationr.com/user/dr-kamal-pandey
- Topmate: https://topmate.io/kamalpandey/
- Medium: https://medium.com/@kamalkismca

---

## Deploy

Vercel (recommended):

```bash
npx vercel
```

Or connect the GitHub repo at vercel.com.
