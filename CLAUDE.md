# CLAUDE.md — Center for Good Works

Project context and working notes for Claude Code sessions.

---

## What This Project Is

A single-page website for **Center for Good Works**, a physical retreat and gathering sanctuary in **Kankakee, Illinois**. The site is designed to feel sacred, cinematic, and emotionally resonant — positioned for men's and women's retreats, meditation, transformational inner work, and community healing.

**Live site:** https://rpulagala.github.io/0613-center-for-good-works/  
**GitHub repo:** https://github.com/rpulagala/0613-center-for-good-works.git

---

## Stack

- Vanilla HTML5 / CSS3 / JavaScript — no framework, no build step
- **Fonts:** Cormorant Garamond (serif, headings/quotes) + Lato (sans, body/nav) via Google Fonts
- **Images:** Pexels CDN (free license — stand-in photography, to be replaced with real photos)
- **Hosting:** GitHub Pages (`main` branch, `/` path)
- **Form:** Contact form is simulated (no backend wired yet)

---

## File Structure

```
/
├── CLAUDE.md           ← this file
├── README.md           ← project overview and pending items
├── index.html          ← full single-page site
├── css/
│   └── styles.css      ← all styles, animations, responsive layout
├── js/
│   └── main.js         ← scroll reveals, nav, form handler, animations
└── images/             ← 17 Pexels photos (stand-ins for real photography)
    ├── hero2.jpg
    ├── arrive.jpg
    ├── enter.jpg
    ├── circle-room.jpg
    ├── speak.jpg
    ├── speak-moment.jpg
    ├── silence.jpg
    ├── leave.jpg
    ├── altar.jpg
    ├── carpet.jpg
    ├── fire.jpg
    ├── zendo.jpg
    ├── teaching.jpg
    ├── quiet.jpg
    ├── walking.jpg
    ├── exterior.jpg
    └── hero.jpg        ← original attempt, not in use
```

---

## Design Tokens (CSS custom properties in styles.css)

| Token | Value | Role |
|---|---|---|
| `--ink` | `#0e0c0a` | darkest text / page bg |
| `--deep` | `#161210` | journey section bg |
| `--dark` | `#1e1812` | contact section bg |
| `--warm-dark` | `#2a2018` | spaces / host bg |
| `--earth` | `#7a5030` | eyebrows on light bg |
| `--gold` | `#b8943c` | accents, CTAs |
| `--gold-bright` | `#d4aa4a` | hover states, hero eyebrow |
| `--ivory` | `#faf7f2` | primary text on dark |
| `--ivory-dim` | `#ede6da` | secondary text on dark |
| `--parchment` | `#f5f0e8` | light section backgrounds |
| `--serif` | Cormorant Garamond | headings, titles, quotes |
| `--sans` | Lato | body, labels, nav |

---

## Accessibility Target

**Primary audience: visitors over 60, many with poor eyesight.**  
All font sizes have been deliberately set large. Do not reduce them.

Current base sizes (after last accessibility pass):
- Body / paragraphs: `1.35rem` desktop → `1.4rem` mobile
- Buttons: `0.88rem`
- Form inputs: `1.25rem` desktop → `1.3rem` mobile
- Form labels: `1rem`
- Hero title: `clamp(4rem, 9.5vw, 8rem)`
- Hero subtitle: `clamp(1.45rem, 2.7vw, 1.85rem)`

---

## Legal Constraint — Must Preserve

> Do not imply official affiliation with MKP (Mankind Project), Landmark Worldwide, Soto Zen, or Spirit Rock Meditation Center. Mention them only as inspiration for the type of inner work and atmosphere, not as partners or affiliates.

This disclaimer appears in the **site footer** and in **README.md**. Do not remove it.

---

## Site Sections (in order)

1. **Hero** — Full-screen, Ken Burns animated background (hero2.jpg + gradients), layered overlay, white headline, gold CTA buttons
2. **Sanctuary Intro** — Two-column, parchment bg, "A place to put down the armor" heading, circle-room image
3. **The Journey** — 6 alternating dark/light stops: *Arrive → Enter → Sit in Circle → Speak What Is True → Return to Silence → Leave Changed*
4. **Sacred Spaces** — 7-card masonry grid (altar, carpet, fire, zendo, teaching, quiet, walking)
5. **Designed for Deep Work** — 8 retreat types (men's, women's, meditation, transformational, spiritual, healing, leadership, teacher-led)
6. **Pull Quote** — Full-bleed dark atmospheric section with fire.jpg background
7. **Host a Retreat** — Feature list + CTA, exterior.jpg image
8. **Contact / Inquiry Form** — Name, email, org, retreat type, dates, message
9. **Footer** — Nav links, tagline, legal disclaimer

---

## Images — How to Swap

All 17 image slots are CSS-controlled at the bottom of `css/styles.css` in the `REAL IMAGES` block. Each rule is a `.img-ph--{name}` class.

To replace any image:
1. Drop the new file into `images/`
2. Update `url('../images/filename.jpg')` in that class in `styles.css`
3. Each slot also has an `<!-- IMAGE PROMPT: ... -->` comment in `index.html` describing exactly what to photograph or generate

---

## What Is Complete

- [x] Full single-page HTML site built and live on GitHub Pages
- [x] All 15 image slots filled with Pexels stand-in photography
- [x] Responsive layout (desktop, tablet, mobile)
- [x] Ken Burns / parallax hero animation
- [x] Scroll-reveal animations (Intersection Observer)
- [x] Mobile hamburger navigation
- [x] Contact form with validation (simulated submission)
- [x] Accessibility pass — large fonts for 60+ audience
- [x] Three rounds of font size / contrast increases based on mobile testing
- [x] Space card descriptions always visible (not hover-only) for touch devices
- [x] Hero overlay darkened for text legibility over busy background
- [x] Legal disclaimer in footer (no affiliation with named orgs)
- [x] README.md with project structure, design tokens, and pending items
- [x] Mobile verification via Python Playwright at iPhone 12 viewport (390px)
- [x] GitHub Pages enabled and live

---

## What Is Pending

### High Priority

- [ ] **Replace placeholder images with real photography**
  - Shoot or commission original photos of the actual Kankakee space
  - Each slot has a detailed `<!-- IMAGE PROMPT -->` comment in `index.html`
  - Swap via `css/styles.css` REAL IMAGES block

- [ ] **Wire up the contact form**
  - Currently simulates submission — no data goes anywhere
  - Options: [Netlify Forms](https://www.netlify.com/products/forms/), [Formspree](https://formspree.io/), Typeform embed
  - The form `#contactForm` in `index.html` needs `action=` or fetch to an endpoint

- [ ] **Add real contact information**
  - Phone number, email address, and/or physical address
  - Add to footer and contact section in `index.html`

- [ ] **Custom domain**
  - Purchase and point a domain (e.g. `centerforgoodworks.com`)
  - Recommended: move hosting to Netlify (free tier, drag-and-drop, built-in forms)
  - Or add CNAME file to GitHub Pages

### Medium Priority

- [ ] **Testimonials section**
  - 2–4 short quotes from past retreat leaders or participants
  - Insert between Sacred Spaces and Retreats sections

- [ ] **Favicon**
  - Minimal sacred mark or "CGW" initials
  - Add `<link rel="icon">` in `index.html` `<head>`

- [ ] **SEO metadata**
  - Add `og:image`, `og:title`, `og:description` to `index.html` `<head>`
  - Add LocalBusiness structured data (JSON-LD)
  - Add `sitemap.xml` and `robots.txt`

- [ ] **Pricing / availability**
  - Basic rental rates, group capacity, availability calendar
  - Or a Calendly link in the contact section

- [ ] **Hero video (optional)**
  - Replace still photo with a short looping video of the actual space
  - HTML slot is pre-structured — add `<video autoplay muted loop playsinline>` inside `.hero__bg`

### Low Priority

- [ ] Gallery page (`/gallery`)
- [ ] Blog / reflections section
- [ ] Analytics — Plausible or Fathom (privacy-respecting)
- [ ] Performance audit — Lighthouse, further image compression
- [ ] Multi-language (Spanish)

---

## Known Issues / Watch Points

- **Contact form screenshot** in mobile testing missed the form (scroll offset landed in footer). Manually verify contact form renders correctly on phone.
- **Mobile nav overlay** — Playwright test was ambiguous. Tap hamburger on a real device to confirm menu opens cleanly over content.
- `hero.jpg` in `images/` is unused (replaced by `hero2.jpg`). Safe to delete.

---

## Session History (key decisions)

- Images sourced from Pexels CDN (not Unsplash — source.unsplash.com is deprecated, direct IDs were unreliable)
- Python Playwright used for mobile testing (not Node.js — npm playwright not installed in this environment)
- Font sizes increased three separate times in response to feedback about readability for older visitors
- Space card text made always-visible (removed hover-only pattern that broke on touch devices)
- Hero overlay opacity increased from 0.15 to 0.45 at midpoint to prevent background bleed through text
