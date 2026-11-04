# Nebula Juris LLP — website

Static one-page site for Nebula Juris LLP (LLPIN ADD-8580), a law and accounting firm in Bangalore. Plain HTML/CSS/JS, no build step, so it runs on GitHub Pages as is.

## Files
- `index.html` — the page (disclaimer, about, practice areas, accounting & tax, why us, contact)
- `assets/style.css`, `assets/main.js`, `assets/logo.svg`
- `.nojekyll` — tells GitHub Pages to serve the files without Jekyll

## Before going live
Replace the placeholder email and phone (search for `TODO`) in `index.html` and `assets/main.js`.

## Publish on GitHub Pages
1. Create an empty public repository on GitHub, e.g. `nebula-juris-website`.
2. Push this folder:
   ```bash
   git remote add origin https://github.com/<your-username>/nebula-juris-website.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`, Save.
4. After a minute the site is at `https://<your-username>.github.io/nebula-juris-website/`.

### Custom domain (optional)
Add your domain in **Settings → Pages → Custom domain** (GitHub creates a `CNAME` file), then at your domain registrar add a `CNAME` record for `www` pointing to `<your-username>.github.io`, and A records for the root domain pointing to 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153. Tick **Enforce HTTPS** once the certificate is issued.

## Contact form
GitHub Pages has no server, so the form opens the visitor's email app with the message filled in. To receive submissions directly instead, point the form at a service such as Formspree.

## Preview locally
```bash
python3 -m http.server 8000
```
Then open http://localhost:8000.
