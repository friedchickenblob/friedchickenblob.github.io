# jordan 🐔 kwan

A personal site built with plain HTML, CSS, and JavaScript, no frameworks or build step.

## Pages

- **Home** — landing page with a hero image that swaps between a light and dark variant
- **Projects** — CaloBro, SnowSocial, and Hire Power, each with its own detail page (screenshots and/or an embedded video)
- **Blog** — short dated posts
- **Experience** — work history
- **Fun** — sub-tabs for:
  - **Languages** — flag cards linking to short fact pages, covering 30+ languages/dialects
  - **Music** — a "plus sign" layout (Seasons / Albums / EP / Singles / Luv(sic) Hexalogy), each linking to a page of embedded Spotify/YouTube tracks
  - **Games** — cards linking to a blurb + screenshot for each game
  - **Food** — a recipe card

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

## Structure

```
.
├── *.html            # one file per page/route
├── css/style.css      # all styles, including dark mode via CSS variables
├── js/script.js       # nav, tabs, dark mode, and data for languages/games/music/projects
├── assets/            # images
├── chicken/            # favicon set
├── Dockerfile
└── docker-compose.yml
```

Data-driven sub-pages (`facts.html`, `game.html`, `music.html`, `project.html`, `recipe.html`) read a `?query=` param and look up their content from an object in `js/script.js`, so adding a new entry is usually just adding one object to a data map plus a linking card.
