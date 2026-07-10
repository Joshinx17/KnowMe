# Joshin K Saju — Portfolio

A dark, minimal personal portfolio site built with plain HTML, CSS, and JavaScript — no frameworks, no build step, no dependencies to install. Open `index.html` and it just works.

**Live site:** _add your deployed URL here_

---

## About

This is the personal site of **Joshin K Saju**, a final-year B.Tech Information Technology student and full-stack developer / ML engineer. The site covers his background, work experience, technical skills, projects, published research, and writing, with a way to get in touch.

The design goal was a quiet, editorial, "internet native" feel — dark navy background, soft accent gradients, monospace labels, and understated motion — rather than a busy template-style portfolio.

## Features

- **Single-page, section-based layout** — Hero, About, Experience, Skills, Projects, Publication, Blogs, and Contact, each reachable via anchor links.
- **Responsive navigation** — inline nav links on desktop that collapse into a slide-in hamburger menu on mobile, with a tap-to-close backdrop.
- **One-time decrypt/glitch intro animation** — the name and title scramble through random characters and resolve into place once, on first load.
- **Animated skill bars** — fill in with a smooth transition the first time the About section scrolls into view.
- **Ambient starfield background** — a `<canvas>`-based layer of small, softly twinkling, slowly drifting dots for a subtle space/zen atmosphere. Fully decorative and `pointer-events: none`, so it never interferes with interaction.
- **Scroll-reveal animations** — sections fade and rise into view as the user scrolls, powered by `IntersectionObserver`.
- **One-click email copy** — clicking the email button (or pressing <kbd>C</kbd> anywhere on the page) copies the contact email to the clipboard, with an inline confirmation state.
- **Fully responsive** — from large desktop widths down to small mobile screens, including a centered hero layout on mobile.
- **No build tools, no dependencies** — just static HTML/CSS/JS, deployable anywhere that serves static files.

## Tech stack

| Layer      | Choice                                             |
|------------|-----------------------------------------------------|
| Markup     | Semantic HTML5                                      |
| Styling    | Plain CSS3 (custom properties / CSS variables, Grid, Flexbox, no preprocessor) |
| Behavior   | Vanilla JavaScript (ES6+), no libraries or frameworks |
| Fonts      | [Inter](https://fonts.google.com/specimen/Inter) (body) and [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (labels/mono UI), loaded via Google Fonts |
| Icons      | [Simple Icons](https://simpleicons.org/) CDN for tech stack logos |
| Hosting    | Any static host (GitHub Pages, Netlify, Vercel, etc.) |

## Project structure

```
.
├── index.html      # All page markup and section content
├── styles.css      # Theme variables, layout, and component styles
├── script.js       # Nav toggle, starfield, glitch intro, skill-bar fill, scroll reveal, email copy
├── assets/         # Images — avatar, hero background orb, etc. (not tracked in this snippet)
└── README.md       # This file
```

Everything lives in three files by design — there's no bundler, no `node_modules`, and no build step to break.

## Sections

1. **Hero** — profile photo, name, role, and a short intro.
2. **About** — a longer bio on the left, paired with animated skill-proficiency bars on the right.
3. **Experience** — a timeline of internships and roles.
4. **Skills** — a grid of tools and technologies (via Simple Icons).
5. **Projects** — cards for featured builds, each linking out, with a "View more on GitHub" button.
6. **Publication** — peer-reviewed research, linking directly to IEEE Xplore.
7. **Blogs** — recent Medium articles, with a "Read more on Medium" button.
8. **Contact** — one-click email copy and social links.

## Getting started

Clone the repo and open the file directly:

```bash
git clone <this-repo-url>
cd <repo-folder>
open index.html   # or just double-click it
```

Or serve it locally (recommended, since some browsers restrict `fetch`/clipboard APIs on `file://`):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customizing

All content lives in `index.html` — there's no CMS or data file to edit separately.

- **Name / role / bio** — edit the text inside the Hero and About sections directly.
- **Email** — update the `EMAIL` constant at the top of `script.js`, and the visible text inside `#emailBtn` in `index.html`.
- **Skill bars** — duplicate a `.skill-bar` block; set the label, the displayed `%`, and the `data-fill` attribute (0–100) on `.skill-bar-fill`.
- **Experience** — duplicate a `.exp-item` block inside `.exp-list`.
- **Tech stack icons** — duplicate a `.tech-icon` block inside `.tech-grid`; icons are pulled from `cdn.simpleicons.org/<slug>/<hexcolor>`.
- **Projects** — duplicate a `<a class="stack-card">` block inside `.stack-list`.
- **Blog posts** — duplicate a `.write-item` block inside `.write-list`.
- **Theme colors** — everything runs off CSS custom properties in the `:root` block at the top of `styles.css` (`--background`, `--accent`, `--accent-2`, etc.).
- **Starfield density/brightness** — tune the `createStars()` and `draw()` functions in `script.js` (star count, radius, opacity, twinkle speed, drift speed).

## Deployment

Because this is fully static, it deploys anywhere without configuration:

- **GitHub Pages** — push to a repo, enable Pages on the `main` branch (root), done.
- **Netlify / Vercel** — drag-and-drop the folder or connect the repo; no build command needed.
