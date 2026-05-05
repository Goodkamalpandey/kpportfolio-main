# Dr. Kamal Pandey — Official Portfolio Website

A fully personalised Next.js 14 portfolio for **Dr. Kamal Pandey**, 
built on the structural template of [ericwadkins.com](http://www.ericwadkins.com/)
with 100% real content sourced from his public profiles.

---

## 🧠 Data Sources Used

All content is sourced from Dr. Kamal Pandey's real public profiles:

| Source | URL | Used For |
|--------|-----|----------|
| Google Scholar | https://scholar.google.com/citations?user=rA_dpyAAAAAJ | Publications, citation count, research areas |
| LinkedIn | https://www.linkedin.com/in/kamalkpandey/ | Work history, roles, organisations |
| Constellation Research AI 150 | https://constellationr.com/communities/artificial-intelligence-150/ai150-executives/2025-2026 | AI 150 recognition, bio |
| ResearchGate | https://www.researchgate.net/profile/Kamal-Pandey-21 | Publications, degrees, bio |
| IJSRCSE Journal | https://ijsrcse.isroset.org/index.php/j/article/view/607 | Paper details + citation |
| Journal JCSTS | https://doi.org/10.32996/jcsts.2025.7.10.33 | Paper details + DOI |
| ESS Open Archive | https://essopenarchive.org/users/942841-kamal-pandey | Preprints |
| ORCID | https://orcid.org/0009-0009-1669-4450 | Researcher identifier |

---

## 🏗 Project Structure

```
kamal-portfolio-v2/
├── app/
│   ├── globals.css         # Design tokens, CSS variables, utility classes
│   ├── layout.tsx          # Root layout — Lato + Montserrat fonts, SEO metadata
│   └── page.tsx            # Assembles all 10 section components
│
├── components/
│   ├── Navbar.tsx          # Fixed nav, smooth-scroll, mobile hamburger, active highlight
│   ├── Hero.tsx            # Full-screen — AI-150 badge, profile photo, org logos
│   ├── About.tsx           # Real bio, DBA/MTech degrees, ORCID, quick-links
│   ├── Skills.tsx          # 8 real skill categories — expandable accordion
│   ├── Projects.tsx        # 8 real research/professional projects with modal detail
│   ├── Papers.tsx          # 7 real peer-reviewed publications with real DOIs
│   ├── Timeline.tsx        # Real career: Rivian → Goodyear → LTI (2013–present)
│   ├── Boards.tsx          # AI-150, Google Scholar, ORCID, ESS Open Archive
│   ├── Contact.tsx         # Real LinkedIn/Scholar links + contact form
│   └── Footer.tsx          # All real profile links, copyright
│
├── public/
│   ├── img/                # Place profile photos and org logos here (see below)
│   └── doc/
│       └── resume.pdf      # Place Dr. Pandey's resume here
│
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open
open http://localhost:3000
```

---

## 🖼 Images Required

Place the following images in `public/img/`:

### Profile Photos
| File | Description |
|------|-------------|
| `kamal_profile.jpg` | Circular headshot — Hero section (400×400px recommended) |
| `kamal_about.jpg` | Professional photo — About section (600×750px recommended) |

### Organisation Logos (Hero strip — grayscale → colour on hover)
| File | Organisation |
|------|-------------|
| `rivian.png` | Rivian Automotive |
| `goodyear.png` | Goodyear Tire & Rubber |
| `lti.png` | Larsen & Toubro Infotech |
| `azure.png` | Microsoft Azure |
| `google.png` | Google |
| `constellation.png` | Constellation Research |

### Organisation Logos (Timeline — square icons)
| File | Organisation |
|------|-------------|
| `rivian_sq.png` | Rivian (square) |
| `goodyear_sq.png` | Goodyear (square) |
| `lti_sq.png` | LTI (square) |
| `global_sq.png` | Generic globe icon |

### Project Thumbnails (optional — fallback gradients shown if missing)
`proj_rivian.png`, `proj_workplace.png`, `proj_ev.png`, `proj_goodyear.png`,
`proj_ethics.png`, `proj_labor.png`, `proj_lowcode.png`, `proj_lti.png`

> **Note:** All images have fallback states. Missing images show
> initialised placeholder gradients or text — the site works without any images.

---

## 📄 Resume

Place Dr. Pandey's resume at:
```
public/doc/resume.pdf
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--accent` | `#18bc9c` | Teal-green — links, highlights, borders |
| `--bg-dark` | `#0d1117` | Primary dark background |
| `--bg-card` | `#161d2b` | Card / section backgrounds |
| `--gold` | `#f59e0b` | AI-150 recognition badges |
| Font — Body | Lato (Google Fonts) | Paragraphs, descriptions |
| Font — Heading | Montserrat (Google Fonts) | Titles, nav, badges |

---

## 🔗 Real Profile Links (already wired into the site)

- **LinkedIn:** https://www.linkedin.com/in/kamalkpandey/
- **Google Scholar:** https://scholar.google.com/citations?user=rA_dpyAAAAAJ
- **ORCID:** https://orcid.org/0009-0009-1669-4450
- **ResearchGate:** https://www.researchgate.net/profile/Kamal-Pandey-21
- **Constellation AI 150:** https://www.constellationr.com/user/dr-kamal-pandey
- **ESS Open Archive:** https://essopenarchive.org/users/942841-kamal-pandey
- **Website:** https://drkamalpandey.com

---

## 🌍 Deployment

### Vercel (recommended — zero config)
```bash
npx vercel
# or connect GitHub repo at vercel.com
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci && npm run build
CMD ["npm", "start"]
EXPOSE 3000
```

---

## 📋 Sections Map

| # | Section | Component | Content |
|---|---------|-----------|---------|
| 1 | Hero | `Hero.tsx` | AI-150 badge, profile photo, title, org logos |
| 2 | About | `About.tsx` | Real bio, DBA/MTech, ORCID, quick-links |
| 3 | Skills | `Skills.tsx` | Azure, M365, AI/ML, GenAI, SharePoint, RPA… |
| 4 | Research | `Projects.tsx` | 8 real projects with modal detail views |
| 5 | Papers | `Papers.tsx` | 7 real publications with real DOIs |
| 6 | Timeline | `Timeline.tsx` | Rivian → Goodyear → LTI (real dates) |
| 7 | Boards | `Boards.tsx` | AI-150, Scholar, ORCID, open archive |
| 8 | Contact | `Contact.tsx` | Real links + contact form |
| 9 | Footer | `Footer.tsx` | All real profiles |
