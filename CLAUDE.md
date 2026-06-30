# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static one-page portfolio site for Bharatanatyam artist Vivek Ramanan. No build step, no framework, no backend — plain HTML/CSS/JS served from the repo root.

## Running locally

```
python3 -m http.server
# visit http://localhost:8000
```

Or just open `index.html` directly in a browser.

## Architecture

Three files do all the work:

- **`index.html`** — all page content and markup. Sections in order: nav, hero, stats, about, work (original works + commissions), divider/quote, performances, press, media (videos + photos), contact/booking form, footer.
- **`styles.css`** — dark + gold aesthetic, all layout and animation styles.
- **`script.js`** — all interactivity: nav scroll behavior, scroll-reveal animations, counter animations, video gallery (lazy YouTube embed on click), booking form (mailto fallback), and the performances list with filter + pagination.

## Content update patterns

**Performances list:** edit the `PERFORMANCES` array at the top of `script.js`. Each entry is `{year, name, loc, type}` where `type` is `"solo"`, `"trio"`, or `"music"`. Keep entries in reverse-chronological order; the JS renders and filters them automatically.

**Videos:** add/edit `.vcard` elements in the `#videoGrid` div in `index.html`. Set `data-id` to the YouTube video ID — thumbnails and embeds are loaded automatically by `script.js`.

**Photos:** drop optimized JPGs (target < 300 KB each) into `images/` and add `<figure>` elements in the `.media__photos` section.

**Commissions/grants:** edit the `.comm-list` and `.grants` elements in the `#work` section of `index.html`.

**Stats:** the `.stat__num` elements in `index.html` use `data-count` for the animated counter target value.

## Deployment

Hosted on Render as a static site (configured via `render.yaml`). Pushing to `main` on GitHub triggers an automatic redeploy. No build command — Render serves the repo root directly.
