# Hi-Med Training Center Website

Website for Hi-Med, a Cameroon-based training center helping students
prepare for medical school, engineering school, and other national
entrance examinations. Built with Next.js (Pages Router), TypeScript,
Tailwind CSS, and daisyUI.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/pages/index.tsx` — assembles the one-page site from the section
  components below.
- `src/components/` — one folder per section (nav, landing, about, goals,
  programs, value, speech, success, gallery, contact, footer, card).
- `src/lib/basePath.js` — helper that prefixes `/images/...` asset paths
  with the site's basePath so they resolve correctly both locally and
  when deployed to a GitHub Pages project subpath.
- `public/images/` — all site imagery and the director's message video.

## Editable placeholder content

Search the components for these and replace with real information before
going live:

- Phone/WhatsApp numbers (`+237 6XX XXX XXX`) in `Contact.jsx` and
  `Footer.jsx`.
- Email address (`contact@himed.cm`).
- Physical address (`Yaoundé, Cameroon`).
- Social media links (`#` placeholders in `Footer.jsx`).
- Stats in the hero section (`Landing.jsx`) — years, students coached.
- Testimonials in `Success.jsx` — currently sample quotes.
- YouTube channel link in `Speech.jsx`.

## Building for production

```bash
npm run build
```

This produces a static export in `out/` (configured via `output: "export"`
in `next.config.js`) — no Node.js server required.

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In the repo settings, go to **Pages** and set the source to
   **GitHub Actions**.
3. Push to the `main` branch. The workflow in
   `.github/workflows/deploy.yml` builds and deploys automatically.
4. The site will be published at `https://<username>.github.io/<repo>/`.

`next.config.js` automatically detects the repository name from GitHub
Actions' `GITHUB_REPOSITORY` environment variable and configures the
correct `basePath`/`assetPrefix` — no manual editing needed, even if you
rename the repository.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
