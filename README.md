# Portfolio Website

A modern, professional, fully responsive portfolio built with React. Single-page layout with Home, About, Projects, Skills, Experience, and Contact sections. Mobile-first, accessible, with a dark/light theme toggle and smooth scroll navigation.

## Tech Stack

- **React 18** — functional components, hooks
- **Vite 5** — build tool and dev server
- **Plain CSS / CSS Modules** — no Tailwind, no inline styles
- **CSS variables** — theme colors (light/dark)

## Deployment (Render)

1. Push your project to **GitHub** (all files committed).

2. Go to [render.com](https://render.com) and sign in with GitHub.

3. Click **New +** → **Static Site**.

4. Connect your GitHub account if needed, then select your **repository**.

5. Configure the static site:
   - **Name:** e.g. `portfolio-website`
   - **Branch:** `main` (or your default branch)
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`

6. Click **Create Static Site**. Render will install dependencies, run the build, and deploy the `dist` folder.

7. Your site will be live at `https://your-site-name.onrender.com`. You can change the name in **Settings** and add a custom domain if you want.

**Updates:** Push changes to your GitHub branch; Render will redeploy automatically.
