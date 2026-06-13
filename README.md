# Center for Good Works

A sacred sanctuary website for retreats, inner work, meditation, and transformation — located in Kankakee, Illinois.

**Live site:** [GitHub Pages / custom domain — pending]  
**Repo:** https://github.com/rpulagala/0613-center-for-good-works

---

## What This Is

A modern, emotionally powerful single-page website for a physical retreat and gathering sanctuary. Designed to position the space as a sacred container for men's and women's retreats, meditation, transformational work, spiritual inquiry, and community healing.

The site is built as clean semantic HTML, CSS, and vanilla JavaScript — no framework dependencies, fast to load, easy to maintain.

---

## Project Structure

```
/
├── index.html          # Full single-page website
├── css/
│   └── styles.css      # All styles, animations, responsive layout
├── js/
│   └── main.js         # Scroll reveals, nav, form handling, animations
└── images/             # Placeholder photography (Pexels free license)
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
    └── exterior.jpg
```

---

## Sections

1. **Hero** — Full-screen cinematic background with Ken Burns animation and layered overlays
2. **Sanctuary Intro** — Two-column warm ivory section with grounding copy
3. **The Journey** — Six alternating dark/light scroll narrative stops (*Arrive, Enter, Sit in Circle, Speak What Is True, Return to Silence, Leave Changed*)
4. **Sacred Spaces** — Masonry image grid (7 cards: altar, circle room, fire circle, meditation hall, teaching space, quiet corners, walking path)
5. **Designed for Deep Work** — 8-type retreat grid (men's, women's, meditation, transformational, spiritual, healing, leadership, teacher-led)
6. **Pull Quote** — Full-bleed atmospheric quote section
7. **Host a Retreat** — Features list with CTA
8. **Contact / Inquiry Form** — Full form with retreat type selector
9. **Footer** — Nav, brand, legal disclaimer

---

## Design Tokens

| Token | Value | Use |
|---|---|---|
| Primary dark | `#0e0c0a` | Page background |
| Warm dark | `#2a2018` | Section backgrounds |
| Gold | `#b8943c` | Eyebrows, CTAs, accents |
| Ivory | `#f0ebe0` | Body text on dark |
| Parchment | `#f5f0e8` | Light section backgrounds |
| Serif font | Cormorant Garamond | Headings, titles, quotes |
| Sans font | Lato | Body, labels, navigation |

---

## What's Pending

### High Priority

- [ ] **Replace placeholder images with real photography**
  - Current images are free Pexels photos used as stand-ins
  - Ideal: original documentary photography of the actual space — the altar, the circle room, the fire circle, the walking path, the exterior
  - Each image slot has a detailed prompt in the HTML comments describing exactly what to shoot or generate
  - To swap: replace `url('../images/filename.jpg')` at the bottom of `css/styles.css`

- [ ] **Wire up the contact form**
  - Currently the form simulates submission (no data is sent)
  - Options: Netlify Forms, Formspree, Typeform embed, or custom backend
  - The form collects: name, email, organization, retreat type, preferred dates, message

- [ ] **Custom domain**
  - Point a domain (e.g. `centerforgoodworks.com`) to hosting
  - Recommended hosting: Netlify (drag-and-drop deploy, free tier, built-in form handling)

- [ ] **Real contact information**
  - Add phone number, email address, and/or physical address to the footer and contact section
  - Consider adding Google Maps embed or directions

### Medium Priority

- [ ] **Add actual video to hero** (optional)
  - The hero is currently CSS-animated gradients + a still photo
  - For maximum cinematic impact, replace with a short looping video of the space (10–30 sec, muted, autoplay)
  - HTML slot is already structured for this — add `<video autoplay muted loop playsinline>` inside `.hero__bg`

- [ ] **Testimonials section**
  - Add 2–4 short quotes from past retreat leaders or participants
  - Placed between the Sacred Spaces and Retreats sections for social proof

- [ ] **Pricing / availability page or section**
  - Add basic rental rates, group size capacity, availability calendar
  - Or simply route to a Calendly / scheduling link

- [ ] **SEO metadata**
  - Add `og:image`, `og:title`, `og:description` for social sharing
  - Add structured data (LocalBusiness schema) for Google search
  - Add `sitemap.xml` and `robots.txt`

- [ ] **Favicon**
  - Add a simple favicon — ideally a minimal sacred mark or the initials "CGW"

### Low Priority / Future

- [ ] **Gallery page** — A dedicated `/gallery` page with full photography of the space
- [ ] **Blog / reflections** — Optional: writing from the space or retreat leaders
- [ ] **Multi-language** — Spanish translation if the community warrants it
- [ ] **Analytics** — Add privacy-respecting analytics (Plausible or Fathom)
- [ ] **Performance audit** — Run Lighthouse; compress images further if needed

---

## How to Swap Images

All 15 image slots are controlled by CSS classes at the bottom of `css/styles.css` in the `REAL IMAGES` block. Each `.img-ph--{name}` rule has a `background-image: url('../images/filename.jpg')` declaration.

To replace any image:
1. Drop the new photo into the `images/` folder
2. Update the `url()` path in `css/styles.css`
3. Each image slot also has an `<!-- IMAGE PROMPT: ... -->` comment in `index.html` describing exactly what should go there

---

## Legal Note

This site makes no claim of affiliation with, endorsement by, or partnership with MKP (Mankind Project), Landmark Worldwide, Spirit Rock Meditation Center, Soto Zen, or any other named organization. Those names appear only as contextual references to the *type* of inner work the space is designed to support. This disclaimer is also included in the site footer.

---

## Built With

- Semantic HTML5
- CSS custom properties, Grid, Flexbox, Intersection Observer animations
- Vanilla JavaScript (no framework)
- [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) + [Lato](https://fonts.google.com/specimen/Lato) via Google Fonts
- Photography: [Pexels](https://www.pexels.com) (free license, replace with original photography)
