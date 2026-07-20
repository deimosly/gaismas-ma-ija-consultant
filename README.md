# LightGuide

An offline-first, installable phone web app for guided lighting consultations in a store.

## Included features

- Guided decision flow by room, purpose, lamp type, room size, ceiling height, style, colour temperature, budget, features and availability
- Estimated lumen target and ranked product recommendations
- Explanations and warnings for each recommendation
- Searchable/filterable product catalogue
- Add, edit and delete products directly on the phone
- CSV import and JSON backup/export
- Product comparison, favourites and consultation history
- Customer-facing mode and copyable consultation summary
- English, Latvian and Russian interface
- Dark mode, compact cards and optional price hiding
- Progressive Web App manifest and service worker for home-screen installation and offline use

## Important starter-catalogue note

The included catalogue is a **starter/demo catalogue**, not a verified live Gaismas Maģija inventory feed. A few familiar model names were preloaded to make setup easier, but prices, stock and technical specifications must be verified and completed before relying on them during a sale.

## Files

- `index.html` — interface
- `styles.css` — mobile-first design
- `app.js` — consultation, scoring, catalogue and offline logic
- `products.js` — starter products
- `manifest.webmanifest` — installable-app metadata
- `sw.js` — offline cache
- `sample-products.csv` — import example
- `INSTALL.md` — publishing and phone installation guide

## Running locally on a computer

A service worker does not run from a normal `file://` URL. Start a local server instead:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Data storage

Catalogue edits, favourites, settings and consultation history are stored in the browser's local storage on that device. Use **Settings → Export catalogue backup** regularly.
