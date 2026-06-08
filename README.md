# SolutionCraft - An Enterprise Solution-Architecture & Delivery Platform

A platform for a custom-development consultancy serving European SMEs: a public marketing site, a free competitive-insights capture for lead generation, consultation booking, a client project-tracking view, and an internal team operations area - all in one single-page app.

> **Status:** Pre-launch MVP. Public site, lead capture, and dashboard views are implemented; live integrations are in progress.

## Overview

SolutionCraft models the full journey of a solution-architecture firm: a prospect lands on the public site, captures free competitive insights, books a paid consultation, and then tracks the resulting engagement - while the team runs sales, projects, and collaboration from an internal area.

It is built as a typed Vite + React single-page application with a shared design system, smooth motion, and a Supabase backend.

## Core Features

- **Public site** - homepage, services, about, contact, and legal pages built to establish trust without fabricated metrics.
- **Lead intelligence** - free competitive-insights capture that doubles as a lead funnel.
- **Consultation booking** - the primary conversion flow: landing to booking to engagement.
- **Client view** - post-engagement project tracking.
- **Team area** - internal sales pipeline, project management, and collaboration.

## Architecture

| Layer | Technology |
|-------|------------|
| Frontend | Vite, React 18, TypeScript |
| Styling | Tailwind CSS, Framer Motion |
| Icons | lucide-react |
| Backend | Supabase (Postgres, Auth) |

## Screenshots

<p align="center">
  <img src="screenshots/01.png" width="800" /><br/><br/>
  <img src="screenshots/02.png" width="800" /><br/><br/>
  <img src="screenshots/03.png" width="800" /><br/><br/>
  <img src="screenshots/04.png" width="800" /><br/><br/>
</p>

## Getting Started

```bash
npm install
npm run dev
```

## Roadmap

- CRM / booking integrations
- Partner-network coordination tooling
- Client billing and reporting

## Notes

Shared as a portfolio artifact demonstrating product and system design. Pre-launch prototype.

