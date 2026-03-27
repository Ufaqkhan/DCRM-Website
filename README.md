# DCRM-ViT project website

This is a lightweight static website package for the paper:

**Keep It Frozen: Domain-Routed Conditional Residual Modulation for Multi-Domain Vision Transformers**

## Files

- `index.html` - page structure
- `styles.css` - light-theme styling
- `script.js` - editable links, metrics, results tables, and BibTeX
- `assets/paper.pdf` - bundled paper PDF
- `assets/*.png` - figures cropped from the uploaded paper for the website

## Quick start

Serve the folder with any static web server. For example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## What to edit before deployment

Open `script.js` and update:

- `projectConfig.links` for code, arXiv, poster, and video
- `projectConfig.bibtex` if you want final camera-ready citation metadata
- Any descriptive text or summary cards if you want to further tailor the presentation

## Deployment

This site works directly on:

- GitHub Pages
- Netlify
- Vercel static hosting
- Any standard web server

## Notes

The paper PDF is already wired to the `Paper PDF` button.
