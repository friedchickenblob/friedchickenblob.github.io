# jordanckwan.dev

`jordanckwan.party` is served by GitHub Pages from this repo. GitHub Pages only
lets a repo have one custom domain, so `jordanckwan.dev` is served by Cloudflare
instead (Workers static assets, free). It is the same site, with one difference:
the favicon is the Dream Team Hub one, mirrored horizontally
(`deploy/dev/chicken/`).

## How it works

- `deploy/build-dev.sh` copies every page, script and image into `dist/`, then
  overwrites the six favicon files in `dist/chicken/` with the mirrored ones.
  `dist/` is gitignored.
- `deploy/wrangler.jsonc` uploads `dist/` to a Cloudflare Worker named
  `jordanckwan-dev` and attaches it to the custom domain `jordanckwan.dev`.
  The domain's DNS lives in your Cloudflare account, so the DNS record and the
  HTTPS certificate are created automatically.

## Updating the .dev site

It does **not** update when you push to GitHub. Run, from the project folder:

```bash
sh deploy/build-dev.sh
npx wrangler deploy --config deploy/wrangler.jsonc
```

Wrangler must be logged in (`npx wrangler login`). If it says more than one
account is available, set `CLOUDFLARE_ACCOUNT_ID` to the id that is already in
`deploy/wrangler.jsonc`.

To redeploy automatically on every push instead, connect the repo in the
Cloudflare dashboard (Workers & Pages > your `jordanckwan-dev` Worker >
Settings > Builds) with build command `sh deploy/build-dev.sh` and deploy
command `npx wrangler deploy --config deploy/wrangler.jsonc`.

## Thai OCR on the .dev site

The practice widget calls `https://ocr.jordanckwan.party/predict`, and that
service only answers sites listed in `ALLOWED_ORIGINS` in `ocr/.env` on the VM.
It must include `https://jordanckwan.dev`:

```
ALLOWED_ORIGINS=https://jordanckwan.party,https://jordanckwan.dev
```

After changing it: `docker compose -f docker-compose.prod.yml up -d --build`.

## Checking it

- `https://jordanckwan.dev` loads the same pages as `jordanckwan.party`.
- The tab icon is the mirrored Dream Team Hub one. Browsers cache favicons
  hard, so use a private window or Ctrl+Shift+R to see it straight away.
