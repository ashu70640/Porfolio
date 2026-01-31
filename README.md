# Portfolio Website

A modern, professional, fully responsive portfolio built with **React** (functional components + hooks) and **plain CSS / CSS Modules**. No Tailwind or inline styles. Mobile-first, accessible, and themeable (dark/light).

## Features

- **Sections:** Home, About, Projects, Skills, Experience, Contact
- **Responsive:** Mobile, tablet, desktop with hamburger menu on small screens
- **Theme:** Dark/light toggle with CSS variables; preference persisted in `localStorage`
- **Smooth scroll** for in-page navigation
- **Accessibility:** Semantic HTML, ARIA labels, skip link, focus styles
- **SEO:** Meta description, keywords, author in `index.html`

## Project Structure

```
Portfolio Website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar/          # Sticky nav + hamburger + theme toggle
│   │   ├── Footer/
│   │   └── sections/        # Home, About, Projects, Skills, Experience, Contact
│   ├── context/
│   │   └── ThemeContext.jsx  # Dark/light theme state
│   ├── data/
│   │   ├── projects.js      # Edit to add/update projects
│   │   ├── experience.js    # Edit work history
│   │   └── skills.js        # Edit skills by category
│   ├── styles/
│   │   └── index.css        # Global styles + CSS variables
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## How to Run

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** (or yarn/pnpm)

### Commands

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   Open the URL shown in the terminal (e.g. `http://localhost:5173`).

3. **Build for production**
   ```bash
   npm run build
   ```
   Output is in the `dist/` folder.

4. **Preview production build**
   ```bash
   npm run preview
   ```

## Deployment

**Best options for this project:** **Vercel** (recommended) or **Netlify**. Both are free, support Vite out of the box, and deploy from Git with automatic HTTPS and preview URLs.

| Platform   | Best for              | Free tier | Setup        |
|-----------|------------------------|-----------|-------------|
| **Vercel** | React/SPA, fastest DX  | Yes       | Connect repo |
| **Netlify**| Portfolios, forms      | Yes       | Connect repo |
| GitHub Pages | Free, no account elsewhere | Yes   | GitHub Actions |

### Deploy with Vercel (recommended)

1. Push your project to **GitHub** (or GitLab/Bitbucket).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project** and import your repo.
4. Leave defaults: **Build Command** `npm run build`, **Output Directory** `dist`, **Framework Preset** Vite.
5. Click **Deploy**. Your site will be live at `https://your-project.vercel.app`.

Updates: push to your main branch and Vercel redeploys automatically.

### Deploy with Netlify

1. Push your project to **GitHub**.
2. Go to [netlify.com](https://netlify.com) and sign in with GitHub.
3. **Add new site → Import an existing project** → choose your repo.
4. Set **Build command:** `npm run build`, **Publish directory:** `dist`.
5. Click **Deploy**. Your site will be at `https://random-name.netlify.app` (you can change it in Site settings).

### Deploy with GitHub Pages

1. Install the deploy workflow: use **gh-pages** or a GitHub Action that runs `npm run build` and uploads the `dist/` folder to the `gh-pages` branch (or to the same repo’s GitHub Pages source).
2. Enable GitHub Pages in the repo **Settings → Pages** and select the branch/folder that contains the built files.

For a custom domain, configure it in your chosen platform’s dashboard (Vercel/Netlify/GitHub Pages all support it).

## Customization

- **Profile photo:** Add your photo as `public/profile.jpg` (square works best). If missing, a placeholder is shown.
- **Content:** Update name, role, and copy in:
  - `src/components/sections/Home/Home.jsx`
  - `src/components/sections/About/About.jsx`
- **Projects:** Edit `src/data/projects.js` (title, description, tech stack, GitHub/Live URLs).
- **Experience:** Edit `src/data/experience.js` (company, role, duration, responsibilities).
- **Skills:** Edit `src/data/skills.js` (Frontend, Backend, Tools).
- **Contact:** In `src/components/sections/Contact/Contact.jsx`, set your email, LinkedIn, and GitHub URLs. The form is UI-only; wire it to Formspree, Netlify Forms, or your backend as needed.
- **SEO:** Update `index.html` meta tags (description, keywords, author, title).

## Tech Stack

- **React 18** (functional components, hooks)
- **Vite 5** (build tool)
- **Plain CSS** + **CSS Modules** (no Tailwind, no inline styles)
- **CSS variables** for theming (light/dark)

## Browser Support

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- Responsive and no horizontal scroll on mobile

## License

MIT (or your choice).
