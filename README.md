# Cows Invaders – Website

Official website for **Cows Invaders**, the mobile game where cows fight back against alien abductors.

> Catch the aliens. Avenge the cows. Save the galaxy.

## About the game

On planet MOO42, the cows have had enough of being abducted by aliens. Pick your hero cow, set the difficulty level and catch as many aliens as you can. Available on iOS and Android.

## Tech stack

- [Astro](https://astro.build/) v5
- SCSS (with global mixins via Vite)
- [Biome](https://biomejs.dev/) for linting/formatting
- i18n support via custom translation layer

## Project structure

```
src/
├── assets/          # Images and icons
├── components/
│   ├── blocks/      # Page sections (Hero, MediaText, CallToAction…)
│   ├── layouts/     # Layout, Header, Footer, Section
│   └── typography/  # Text rendering components
├── i18n/            # Translations
├── pages/           # Astro pages (index, privacy, credits)
├── styles/          # SCSS (reset, colors, typography, layout, mixins)
├── types/           # TypeScript types
└── utils/           # Utilities (smooth scroll, dropdown)
```

## Getting started

```bash
# Install dependencies
bun install

# Start dev server (localhost:4321)
bun dev

# Build for production
bun build

# Preview production build
bun preview
```

## Credits

Designed and developed by [Pixelcutter](https://www.pixelcutter.io/).

## License

All rights reserved. This source code is provided for reference purposes only.
