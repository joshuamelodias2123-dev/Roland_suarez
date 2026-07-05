# Roland C. Suarez — Remedial Therapeutic Massage

Marketing site for Roland C. Suarez's massage therapy practice in Regina, SK, built on the "Pressure & Release" brand system (deep pine, sage, and warm clay palette; Fraunces/Inter type pairing; the "release ripple" logo mark).

## Stack

React + Vite.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Structure

- `src/components/RippleMark.jsx` — the signature ripple logo mark (light/dark/mono variants)
- `src/components/Nav.jsx`, `Hero.jsx`, `Concept.jsx`, `Services.jsx`, `Contact.jsx`, `Footer.jsx` — page sections
- `src/index.css` — brand colors, fonts, base styles
- `src/App.css` — layout and component styles

## To edit later

- Session lengths, pricing, and clinic hours are placeholders — update in `Services.jsx` / `Contact.jsx` once finalized.
- Phone number and address are wired in from the brand guide; update `tel:` links and `Contact.jsx` if they change.
