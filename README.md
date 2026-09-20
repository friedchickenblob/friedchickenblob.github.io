# jordan 🐔 kwan

A personal site built with plain HTML, CSS, JavaScript, and a bit of vibe coding. No frameworks or build step.

## Pages

- **Home** ~ landing page with a hero image that swaps between a light and dark variant
- **Projects** ~ CaloBro, SnowSocial, and Hire Power, each with its own detail page (screenshots and/or an embedded video)
- **Blog** ~ short dated posts
- **Experience** ~ work history
- **Fun** ~ sub-tabs for:
  - **Languages** ~ flag cards linking to short fact pages, covering 30+ languages/dialects
  - **Music** ~ a "plus sign" layout (Seasons / Albums / EP / Singles / Luv(sic) Hexalogy), each linking to a page of embedded Spotify/YouTube tracks
  - **Games** ~ cards linking to a blurb + screenshot for each game
  - **Food** ~ a recipe card

Other features: a dark mode toggle (bottom-left, persisted via `localStorage`) that swaps in a night-mode hero image and an animated firefly overlay, and an animated floral background pattern in light mode.

## Running locally

This is a static site served by nginx via Docker.

```bash
docker compose up -d
```

Then open [http://localhost:8090](http://localhost:8090). If port 8090 is already in use, change the host port in `docker-compose.yml`.

To stop:

```bash
docker compose down
```

### Thai handwriting practice (optional, local only)

The Thai language page (`/facts/?lang=thai`, Writing & Basics → Practice tab) has a
"draw the word, check it against a real OCR model" widget. It calls a small Flask
service in `ocr/` running a pretrained Thai handwriting model
([openthaigpt/thai-trocr](https://huggingface.co/openthaigpt/thai-trocr)). It's
behind a Docker Compose profile since it pulls in PyTorch/transformers and isn't
needed for normal site work, and it only runs locally ~ there's no backend once
the site is deployed to GitHub Pages, so the widget just shows a friendly
"can't reach the practice server" message there.

```bash
docker compose --profile ocr up -d
```

First run downloads model weights (cached in a named volume afterward). The
widget expects the service at `http://localhost:5050`.

## Structure

```
.
├── index.html          # home, served at /
├── projects/index.html # served at /projects/
├── blog/index.html     # served at /blog/
├── experience/index.html
├── fun/index.html
├── facts/index.html    # data-driven, e.g. /facts/?lang=thai
├── game/index.html     # data-driven, e.g. /game/?game=celeste
├── music/index.html    # data-driven, e.g. /music/?category=seasons
├── project/index.html  # data-driven, e.g. /project/?project=calobro
├── recipe/index.html   # data-driven, e.g. /recipe/?dish=chicken-noodle-soup
├── css/style.css       # all styles, including dark mode via CSS variables
├── js/script.js        # nav, tabs, dark mode, and data for languages/games/music/projects
├── assets/             # images
├── chicken/            # favicon set
├── Dockerfile
└── docker-compose.yml
```

Every page lives at its own folder with an `index.html`, so URLs are clean (`/projects/` instead of `/projects.html`) both locally (nginx serves directory `index.html` by default) and on GitHub Pages. All internal links and asset references use absolute root paths (e.g. `/css/style.css`) rather than relative ones, since pages now live at different folder depths.

Data-driven sub-pages (`facts/`, `game/`, `music/`, `project/`, `recipe/`) read a `?query=` param and look up their content from an object in `js/script.js`, so adding a new entry is usually just adding one object to a data map plus a linking card.
