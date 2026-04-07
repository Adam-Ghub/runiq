# Runiq - Běžecký Průvodce (Next.js Project)

## Project Overview
Runiq is a comprehensive Czech-language web application and guide for runners. It provides tools and information to help runners of all levels, featuring a heart rate zone calculator, a running shoe recommendation engine, and various informational sections.

### Main Technologies
- **Framework:** Next.js (App Router, v16.1.6)
- **Language:** TypeScript
- **UI & Styling:**
  - React 19
  - Tailwind CSS v4 (using `@tailwindcss/postcss`)
  - Framer Motion (Animations)
  - Lucide React (Icons)
- **Email Service:** Resend
- **Analytics:** Google Analytics (`@next/third-parties`)
- **Metadata:** Extensive SEO optimization with metadata and JSON-LD (Schema.org)

## Architecture & Structure
- `app/`: Contains the main application routes and components.
  - `api/contact/`: API route for handling contact form submissions via Resend.
  - `components/`: Shared UI components (Container, Header, Footer, Heading, etc.).
  - `galerie/`: Equipment gallery with Framer Motion animations.
  - `kontakt/`: Contact page and its components.
  - `tepove-zony/`: Heart rate zone calculator (Karvonen formula).
  - `vybaveni/`: Running shoe recommendation engine (Quiz-based).
  - `_components/`: Directory-specific components (e.g., `app/vybaveni/_components`).
  - `_lib/`: Directory-specific logic and data (e.g., `app/vybaveni/_lib/data.ts`).
- `public/`: Static assets, including shoe images and icons.

## Building and Running
The project uses standard npm scripts:

- **Development:** `npm run dev` - Starts the development server at `http://localhost:3000`.
- **Build:** `npm run build` - Creates an optimized production build.
- **Start:** `npm run start` - Runs the production server after building.
- **Lint:** `npm run lint` - Runs ESLint for code quality checks.

## Development Conventions
- **Client Components:** Use the `'use client';` directive for interactive components (animations, state, forms).
- **SEO & Accessibility:**
  - Every page should define its `metadata` export for better SEO.
  - Use JSON-LD (Schema.org) for structured data on relevant pages (Layout, Calculator).
  - Images should have descriptive `alt` tags and proper `sizes` for optimization.
- **Styling:**
  - Prefer Tailwind CSS v4 utility classes.
  - Global styles are located in `app/globals.css`.
  - Custom colors (like `blue`, `foreground`, `gray`) are likely defined in the Tailwind configuration or `globals.css`.
- **Naming Conventions:**
  - Files typically use `PascalCase` for components (e.g., `Container.tsx`) and `lowercase` or `kebab-case` for directory routes.
  - Directory-specific components are kept in `_components` to keep the route structure clean.
- **Data Management:**
  - Static data for tools (like the shoe database) is kept in `_lib/data.ts` within the respective feature directory.
- **Internationalization:** The project is currently focused on the Czech (`cs-CZ`) market.
