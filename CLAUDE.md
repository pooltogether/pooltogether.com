# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the PoolTogether landing page - a Next.js application that serves as the main website for the PoolTogether Hyperstructure protocol. It's a static site with internationalization support for 12 languages.

## Development Commands

```bash
# Install dependencies (use pnpm)
pnpm install

# Start development server on port 3000
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Note: This project uses `pnpm` as the package manager. No test or lint scripts are currently defined.

## Architecture Overview

### Tech Stack
- **Next.js 13.3** with React 18.2 and TypeScript
- **Tailwind CSS** with custom PoolTogether design system (purple/teal/pink theme)
- **Jotai** for state management
- **@tanstack/react-query** for server state
- **next-intl** for i18n (12 languages)
- **Framer Motion** for animations

### Key Directories
- `src/pages/` - Next.js page routes
- `src/components/` - Feature-based component organization (Builders/, Community/, Ecosystem/, Help/, Home/, Interfaces/)
- `src/shared/` - Monorepo shared packages (this appears to be part of a larger monorepo)
- `messages/` - i18n translation files
- `public/` - Static assets (backgrounds/, fonts/, graphics/, icons/)

### Important Files
- `src/constants.tsx` - App-wide constants and configuration
- `next.config.js` - Next.js config with i18n setup and redirects
- `tailwind.config.js` - Custom design tokens and theme

## Development Guidelines

### Component Structure
Components are organized by feature/page section. When creating new components:
- Place them in the appropriate feature directory
- Follow existing patterns for imports and exports
- Use TypeScript interfaces for props
- Leverage the existing design system tokens from Tailwind config

### Styling
- Use Tailwind CSS utilities
- Custom colors are defined in tailwind.config.js (pt-purple, pt-teal, pt-pink color scales)
- The app supports dark mode
- Custom fonts: Averta and Inter

### State Management
- Use Jotai atoms for global state
- Use React Query for server state and API calls
- Component-level state with useState/useReducer

### Internationalization
The app supports 12 locales. Translation files are in the `messages/` directory. Default locale is English.

### Static Generation
The site uses Next.js static generation with ISR (Incremental Static Regeneration). Protocol stats are fetched and cached with 24-hour revalidation.

## Environment Variables

Create a `.env.local` file for local development. See `.env.example` for reference. The main environment variable is for Fathom analytics.

## Deployment

The site is deployed on Netlify. Check the deploy status badge in README.md for current deployment status.