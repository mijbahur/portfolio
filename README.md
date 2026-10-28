# Mijbahur | Developer Portfolio
Live site: https://your-name.vercel.app

A single-page portfolio for Hacin Mijbahur Rahman (Mijbahur), a web developer and CSE student at AIUB. Built with React, Tailwind CSS and Motion.

## Features

- Sections: Hero, About, Skills, Projects, Education, Contact, Footer
- Hero with staggered entrance, typing role text and a profile photo inside rotating shapes
- Interactive background: a slowly rotating dot grid where dots near the cursor glow, with a rotating viewfinder cursor
- Scroll-triggered reveal animations, hover effects on cards and buttons, animated nav underline, smooth mobile menu
- Scroll progress bar
- Skills shown as categorized badges (no fake percentages)
- Every project has a Source code button
- Respects `prefers-reduced-motion`
- Responsive layout

## Tech stack

- [React](https://react.dev) + [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion](https://motion.dev) (`motion/react`)
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting started

```bash
cd frontend
npm install
npm run dev
```

Open the local URL that Vite prints (usually `http://localhost:5173`).

| Command           | What it does                      |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the dev server              |
| `npm run build`   | Create a production build (`dist`) |
| `npm run preview` | Preview the production build      |
| `npm run lint`    | Run the linter                    |

## Project structure

```
frontend/src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── SectionHeading.jsx   # heading + shared reveal animations
│   └── DotGrid.jsx          # rotating dot grid + cursor reticle
├── data/
│   ├── projects.js
│   ├── skills.js
│   └── socialLinks.js
├── assets/images/
├── App.jsx
├── index.css                # theme colors and body background
└── main.jsx
```

## Customizing

| What to change                | Where                                                       |
| ----------------------------- | ----------------------------------------------------------- |
| Projects, links, images       | `src/data/projects.js`                                      |
| Skills                        | `src/data/skills.js`                                        |
| Social links and email        | `src/data/socialLinks.js`                                   |
| Theme colors                  | `@theme` block in `src/index.css`                           |
| Page background and glow      | `body` and `body::before` in `src/index.css`                |
| Dot grid size, speed, glow    | Constants at the top of `src/components/DotGrid.jsx`        |
| Typing role text              | `roles` array in `src/components/Hero.jsx`                  |
| Profile photo                 | `src/assets/images/` and the import in `Hero.jsx`           |
| Education entries             | `items` array in `src/components/Education.jsx`             |
| Page title and meta           | `frontend/index.html`                                       |

### Adding project images

1. Put the image in `src/assets/images/`.
2. Import it in `src/data/projects.js` and set it as the project's `image`:

```js
import bazardor from "../assets/images/bazardor.png";

{ id: "bazardor", title: "BazarDor", image: bazardor, source: "https://github.com/...", live: "https://..." }
```

Projects without an image show an initials placeholder. The Live demo button appears only when `live` is set.

### Contact form

The form has no backend. Submitting it opens the visitor's email app with the message filled in. To receive messages directly, connect a form service or your own API in `Contact.jsx`.

## Accessibility

- Animations use transform and opacity only.
- `MotionConfig reducedMotion="user"` disables movement for users who prefer less motion. The dot grid then stays still and the cursor reticle is hidden.
- Decorative elements are hidden from screen readers.

## Deployment

Build the project and deploy the `frontend/dist` folder to any static host (Vercel, Netlify, GitHub Pages):

```bash
cd frontend
npm run build
```

If deploying with Vercel or Netlify, set the root directory to `frontend`, the build command to `npm run build` and the output directory to `dist`.

## To do before publishing

- Replace the placeholder email and social URLs in `socialLinks.js`
- Replace the `#` links in `projects.js` and add project screenshots
- Update the Education dates and college name
- Add a resume file and link it from the Hero Resume button
