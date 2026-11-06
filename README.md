# Jade Jason Miral | Portfolio

React + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide icons.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into /dist
npm run preview    # serve the production build locally
```

## Publish on GitHub Pages

Every push to `main` builds and deploys the portfolio through GitHub Actions.
After the first push, open the repository's **Settings → Pages** and set
**Source** to **GitHub Actions** if it is not already selected.

The published site will be available at:
`https://jadelangni.github.io/jademiral-portfolio/`

## Edit your content (no UI code needed)

| What | File |
| --- | --- |
| Name, headline, email, LinkedIn, GitHub, location | `src/data/profile.ts` |
| Skills (`used` vs `learning`) | `src/data/skills.ts` |
| Internship dates, earlier roles, graduation date | `src/data/experience.ts` |
| Projects, role description, live/repo links | `src/data/projects.ts` |
| Résumé download | replace `public/Jade-Jason-Miral-Resume.pdf` |
| Profile photo | replace `public/jade.jpg` |

Items marked with a dashed amber outline on the site (internship dates, graduation date, LinkedIn, GitHub, Live Demo, GitHub Repository) are placeholders. They disappear as soon as you fill in the real value.

## Add the system screenshots

Export the figures from your capstone document as PNG files and save them in `public/screenshots/` with these names:

| File | Capstone figure |
| --- | --- |
| `dashboard.png` | Figure 16, Admin dashboard |
| `products.png` | Figure 17, Product list |
| `recipes.png` | Figure 20, Recipe configuration |
| `inventory.png` | Figure 22, Ingredient inventory |
| `forecast.png` | Figure 24, Inventory forecast |
| `reports.png` | Figure 30, Daily sales report |
| `attendance.png` | Figure 35, Staff attendance |
| `employee-login.png` | Figure 36, Employee QR login |

They appear in the gallery automatically and open in a full-size viewer. Crop out any real customer or employee data first.

## Add another project

Append an object to the array in `src/data/projects.ts`. The `ProjectCard` component renders it.

## Contact form

The site is static, so the form opens the visitor's email app with the message prefilled. To receive messages directly, replace the body of `onSubmit` in `src/components/Contact.tsx` with a `fetch()` to a service such as Formspree or EmailJS.

## Deploy

Vercel, Netlify, or Cloudflare Pages: import the repo, build command `npm run build`, output directory `dist`.
GitHub Pages under a sub-path: set `base: '/your-repo/'` in `vite.config.ts`.
