# Vivek Ramanan — Artist Website

A static one-page portfolio site (HTML/CSS/JS, no build step, no backend).

## Files
- `index.html` — all page content
- `styles.css` — the dark + gold aesthetic
- `script.js` — nav, scroll animations, performances list + filtering, booking form
- `images/` — optimized performance photos (web-ready, ~1.4 MB total)
- `favicon.ico` / `favicon.png`
- `render.yaml` — optional one-click config for Render

## Run locally
Just open `index.html` in a browser. (Or `python3 -m http.server` from this folder, then visit http://localhost:8000.)

## Deploy to Render (free Static Site)

### Option A — connect a Git repo (recommended)
1. Create a new GitHub repo and push the contents of this folder to it.
2. In the Render dashboard: **New → Static Site**.
3. Connect the repo.
4. Settings:
   - **Build Command:** leave blank
   - **Publish Directory:** `.`  (a single dot — the repo root)
5. Click **Create Static Site**. Render gives you a free `…onrender.com` URL.

(If Render detects `render.yaml`, it will fill these in for you via **New → Blueprint**.)

### Option B — no Git
Render Static Sites require a Git repo. If you'd rather not use Git, Netlify Drop (drag-and-drop the folder) or Cloudflare Pages are good free alternatives. The same files work on all of them.

## Point vivekramanan.com at it
1. In Render → your static site → **Settings → Custom Domains → Add Custom Domain**.
2. Add both:
   - `vivekramanan.com`
   - `www.vivekramanan.com`
3. Render shows you the DNS records to create. At your domain registrar (where you bought the domain), add:
   - For the root `vivekramanan.com`: an **ALIAS / ANAME** record (or Render's provided A record) pointing as Render specifies.
   - For `www`: a **CNAME** pointing to your `…onrender.com` hostname.
4. Wait for DNS to propagate (minutes to a couple hours). Render issues a free SSL certificate automatically — no extra step.

## Updating content later
- **Performances:** edit the `PERFORMANCES` array at the top of `script.js`.
- **Photos:** drop new optimized JPGs into `images/` and update the `src` in `index.html`. Keep images under ~300 KB each for speed.
- **Booking form:** currently opens the visitor's email app pre-filled to vivek.ramanan14@gmail.com (works on any static host, no server). If you later want submissions to arrive as form entries instead, services like Formspree or Render + a tiny function can do that — ask and it can be wired in.
