#!/bin/sh
# Builds the jordanckwan.dev copy of the site into ./dist.
#
# It is the same site as jordanckwan.party: every page, script and image is
# copied as is, and then the favicon set in chicken/ is replaced with the
# mirrored Dream Team Hub one from deploy/dev/chicken/.
#
# Cloudflare Pages settings: build command `sh deploy/build-dev.sh`,
# build output directory `dist`.
set -e

cd "$(dirname "$0")/.."

rm -rf dist
mkdir dist

# Everything except repo plumbing, the OCR server and this folder.
for item in *; do
  case "$item" in
    dist|deploy|ocr|Dockerfile|docker-compose.yml|README.md|CNAME|"New folder") ;;
    *) cp -R "$item" dist/ ;;
  esac
done

# Swap in the .dev favicon files (same names, so every page's <link> tags
# keep working untouched).
cp deploy/dev/chicken/* dist/chicken/

echo "Built dist/ ($(find dist -type f | wc -l) files)"
