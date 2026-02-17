# AI Navigation & Documentation

This document serves as a guide for AI agents working on this codebase to ensure consistency and correct deployment practices.

## Deployment Strategy
- **Branch**: Always push to `main` for production deployments.
- **Workflow**: Use the [deploy workflow](file:///Users/andreschuler/Scondbelllab%20Website/Second-Bell-Lab-Website/.agent/workflows/deploy.md) after every set of changes.

## UI/UX Principles
- **Aesthetics**: Premium, "sexy", lean. Use glassmorphism and smooth micro-animations.
- **Color Palette**: 
  - Navy: `#0f172a`
  - Gold: `#fbbf24`
  - Slate for text: `#475569`
- **Typography**: Inter (sans) and Montserrat (heading).

## SEO Best Practices
- Keep meta tags updated in `index.html`.
- **Asset Optimization**: Ensure static assets (images, fonts) are placed in the `public/` directory so they are correctly served in production.
- **Image Referencing**: Reference public assets using absolute paths like `/images/logo.png`.
- **Favicon**: The favicon should be in `public/images/Icon.png`.
- Ensure all interactive elements have `aria-label` or `title` for better crawling and accessibility.

## Ongoing Tasks
- Hide/Add features as requested, ensuring the code remains in the repository for future landing page use.
