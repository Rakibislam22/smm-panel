# SMM Panel Landing Page

A responsive marketing landing page for TrendEvo, built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- Responsive hero, services, stats, process, payments, growth, advantages, FAQ, CTA, and footer sections
- Locally served assets from `public/assets`
- Parkinsans for headings and Inter for body text
- Motion effects with Framer Motion
- Inertial scrolling with Lenis, initialized after the page becomes idle to avoid first-load scroll jank

## Requirements

- Node.js `20.9.0` or later
- npm (included with Node.js)

## Setup

1. Clone the repository and enter the project directory.

   ```bash
   git clone https://github.com/Rakibislam22/smm-panel.git
   cd smm-panel
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

## Run locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Changes to files under `src/` are applied automatically during development.

## Production build

Create an optimized production build:

```bash
npm run build
```

Run the production server after a successful build:

```bash
npm run start
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server. |
| `npm run build` | Creates an optimized production build and runs TypeScript checks. |
| `npm run start` | Starts the production server after building. |
| `npm run lint` | Runs ESLint checks. |

## Project structure

```text
src/
  app/           # App Router layout, page, and global styles
  components/    # Reusable landing-page sections and UI components
  data/          # Landing-page content data
public/assets/   # Images and SVG assets used by the page
```
