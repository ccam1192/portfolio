# Charles Camisasca — Portfolio Website

Personal portfolio website built with **Next.js**, **React**, and **Tailwind CSS**.

## Features

- Responsive design (desktop, tablet, mobile)
- Dark / light mode toggle with system preference detection
- Smooth scrolling navigation with sticky header
- Scroll-triggered fade-in animations
- Sections: Hero, About, Projects, Experience, Contact
- SEO-optimized meta tags and Open Graph data
- Ready for Vercel deployment

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [next-themes](https://github.com/pacocoursey/next-themes) for dark mode
- [Lucide React](https://lucide.dev/) for icons
- TypeScript

## Getting Started

### Prerequisites

- Node.js 20+ and npm

### Install dependencies

```bash
cd portfolio
npm install
```

### Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel will auto-detect Next.js and configure the build. Set the **Root Directory** to `portfolio` if the repo root contains other folders.
4. Click **Deploy**.

Or use the Vercel CLI:

```bash
npx vercel --prod
```

## Customization

- **Photo**: Replace the `CC` initials placeholder in `src/components/Hero.tsx` with an `<Image>` component pointing to your photo in `public/`.
- **Contact form**: The form currently shows a success state client-side. Connect it to [Formspree](https://formspree.io/), [EmailJS](https://www.emailjs.com/), or a Next.js API route for real submissions.
- **Links**: Update LinkedIn, GitHub, and project URLs in the respective components.
- **Favicon**: Replace `src/app/favicon.ico` with your own.

## Project Structure

```
portfolio/
├── public/                  # Static assets
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind v4 config & global styles
│   │   ├── layout.tsx       # Root layout with metadata & ThemeProvider
│   │   ├── page.tsx         # Main page composing all sections
│   │   └── favicon.ico
│   └── components/
│       ├── Header.tsx       # Sticky nav with dark mode toggle
│       ├── Hero.tsx         # Hero / landing section
│       ├── About.tsx        # About, tech stack, education
│       ├── Projects.tsx     # Project cards grid
│       ├── ProjectCard.tsx  # Individual project card
│       ├── Experience.tsx   # Professional experience timeline
│       ├── Contact.tsx      # Contact info & form
│       ├── ContactForm.tsx  # Contact form component
│       ├── Footer.tsx       # Site footer
│       ├── FadeIn.tsx       # Scroll-triggered animation wrapper
│       └── ThemeProvider.tsx # Dark/light mode provider
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts       # (not needed — Tailwind v4 uses CSS config)
├── tsconfig.json
└── package.json
```
