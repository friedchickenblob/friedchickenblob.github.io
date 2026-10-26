# Deploying the Thai OCR service on a Cybera VM

The static site lives on GitHub Pages (behind Cloudflare). Only the OCR service
needs a real server. This runs it on a Cybera Rapid Access Cloud VM and
publishes it at `https://ocr.jordanckwan.party` through a Cloudflare Tunnel, so
no ports have to be opened to the internet.

```
browser (jordanckwan.party)
   |  https://ocr.jordanckwan.party/predict
   v
Cloudflare  ->  tunnel  ->  VM: cloudflared  ->  ocr container (gunicorn + model)
```

## 1. The VM

- Ubuntu 22.04/24.04, at least 4 GB RAM (the model is ~400 MB on disk but
  PyTorch needs a couple of GB while running). 2 vCPUs or more is better.
- A key pair for SSH, and a security group that allows **SSH (22) only**.
  Nothing else needs to be open, since the tunnel only makes outgoing
  connections.

```bash
ssh ubuntu@<the VM's public IP>
```

## 2. Install Docker

```bash
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER
exit   # log out and back in so the group change applies
```

## 3. Create the Cloudflare Tunnel

In the Cloudflare dashboard: **Zero Trust > Networks > Tunnels > Create a
tunnel > Cloudflared**.

1. Name it (e.g. `thai-ocr`) and save.
2. Under "Install and run", choose **Docker** and copy just the long token
   (the part after `--token`).
3. Add a **public hostname**:
   - Subdomain `ocr`, domain `jordanckwan.party`
   - Service type `HTTP`, URL `ocr:5000`

Zero Trust has a free plan, but it may ask for a payment method on file.

## 4. Start it

```bash
git clone https://github.com/friedchickenblob/friedchickenblob.github.io.git
cd friedchickenblob.github.io/ocr
cp .env.example .env
nano .env        # paste the tunnel token after TUNNEL_TOKEN=
docker compose -f docker-compose.prod.yml up -d --build
docker compose -f docker-compose.prod.yml logs -f ocr
```

Wait for `Model loaded.` in the logs (the first run downloads the weights,
which are then cached in a Docker volume). Press Ctrl+C to stop following.

## 5. Check it

```bash
curl https://ocr.jordanckwan.party/health
# {"status":"ok"}
```

Then open the Thai practice tab on the live site, draw a word and press
"Check my writing".

## 6. Protect it

Anyone can reach a public endpoint, and each check uses CPU. In Cloudflare, add
a rate-limiting rule for `ocr.jordanckwan.party` (Security > WAF > Rate
limiting rules), for example 20 requests per minute per IP. The server also
only answers browsers on the allowed sites (`ALLOWED_ORIGINS`) and rejects
uploads over 1 MB.

## Updating

```bash
cd friedchickenblob.github.io && git pull
cd ocr && docker compose -f docker-compose.prod.yml up -d --build
```

## Cybera terms

Rapid Access Cloud is meant for development and prototyping, with access
granted for about a year at a time. Ask rac-admin@cybera.ca that this is
fine, and expect to renew it.
