# Mijbahur | Developer Portfolio

Live site: https://portfolio-sigma-flax-99.vercel.app/

A responsive single-page portfolio built with React, Vite, Tailwind CSS, and Motion.

## Project overview

This portfolio showcases:

- Hero section with animated role text and CTA buttons
- About, skills, projects, education, and contact sections
- Social links and a footer with navigation
- Lightweight motion effects and responsive layout

## Tech stack

- React
- Vite
- Tailwind CSS
- Motion
- React Icons

## Getting started

From the repository root:

```bash
cd portfolio
npm install
npm run dev
```

Then open the local URL Vite prints in the terminal, typically `http://localhost:5173`.

## Useful commands

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Project structure

```text
portfolio/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── DotGrid.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionHeading.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── socialLinks.js
│   ├── assets/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── vite-env.d.ts
├── public/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── .gitignore
```

## Notes

- The portfolio content is primarily configured through files in `src/data/`.
- The footer and navigation labels use clear, descriptive naming for maintainability.
- The app is ready to deploy as a static site to services like Vercel or Netlify.

