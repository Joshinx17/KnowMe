# Portfolio — Editable Version

Plain HTML / CSS / JS. No build step. Just open `index.html` in a browser.

## Files
- **index.html** — all content (name, roles, experience, projects, writing, contact). Edit text here.
- **styles.css** — colors, fonts, spacing. Change the `:root` variables at the top for theme.
- **script.js** — copy-email button and scroll animations. Change `EMAIL` at the top.
- **assets/** — swap these image files (keep the same filenames, or update the `src` in `index.html`):
  - `avatar.jpg` — your profile photo (square works best)
  - `hero-orb.jpg` — background glow at the top
  - `personal-1.jpg`, `personal-2.jpg` — photos in the Personal section

## Common edits
- **Change name / role**: search for "Joshin K Saju" in `index.html`.
- **Change email**: update `EMAIL` in `script.js` AND the visible text in `#emailBtn` inside `index.html`.
- **Add a project**: duplicate one `<a class="stack-card">` block in the STACK section.
- **Add a job**: duplicate one `.exp-item` block in the EXPERIENCE section.
- **Change accent color**: edit `--accent` and `--accent-2` at the top of `styles.css`.

## Run
Just double-click `index.html`, or run a tiny local server:
```
python3 -m http.server 8000
```
