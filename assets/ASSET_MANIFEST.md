# ASSET MANIFEST — MB

| Asset ID | Type | Purpose | Location | Source | Status |
|---|---|---|---|---|---|
| brand-text | Text wordmark (HTML) | Header/footer identity | `.brand` in every page | PROL (typographic, D14) | FINAL — PROVISIONAL IDENTITY. Replace with `<img>` if client supplies a logo |
| favicon-svg | SVG | Browser tab icon | `/favicon.svg` | PROL, "MB" glyph outlines (Newsreader) | FINAL — provisional identity |
| favicon-ico | ICO 16/32/48 | Legacy favicon | `/favicon.ico` | PROL | FINAL — provisional identity |
| apple-touch-icon | PNG 180 | iOS home screen | `assets/images/` | PROL | FINAL — provisional identity |
| icon-192 / icon-512 | PNG | Web manifest | `assets/images/` | PROL | FINAL — provisional identity |
| og-image | PNG 1200×630 | Social sharing preview | `assets/images/og-image.png` | PROL, typographic; shows brand, matrículas, modality | FINAL — update if brand string changes |
| font-newsreader | WOFF2 (variable, normal + italic) | Headings, editorial text | `assets/fonts/` | Fontsource, SIL OFL 1.1 | FINAL |
| font-public-sans | WOFF2 400/500/600 | Body, UI | `assets/fonts/` | Fontsource, SIL OFL 1.1 | FINAL |
| icons (12) | Inline SVG | whatsapp, phone, location, calendar, arrow, menu, close, chevron, verified, document, lock | Inline in HTML | PROL Icon Library (`Admins/icons`); `lock` drawn to library spec | FINAL |
| hero-image | WebP 640/960/1280 + JPG 960 fallback | Hero visual (Lady Justice statue — no people) | `assets/images/hero-*.webp`, `hero-960.jpg` | Unsplash photo-1590099543482 (Unsplash License, no attribution required). Source `cover.jpg` (3921×5635, 4.8 MB) must NOT be deployed | FINAL |
| lawyer-photos | Image | — | — | — | NOT USED (client preference, D06) |
| logo-client | SVG/PNG | Client logo | Header/footer | — | NOT PROVIDED (client has no logo) |

Replacement notes:
- If the brand name changes, update: `.brand` markup (all pages), `<title>`, `og:site_name`, JSON-LD `name`, `site.webmanifest`, and re-generate favicon/icons/OG image.
- Colors are in `css/styles.css` `:root` tokens.
