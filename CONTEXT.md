# FitNexa — fitnexa-landing — Cursor AI Context

## What this repo is
Marketing landing page for FitNexa. Next.js 15 with Partial Pre-rendering + Sanity CMS for content.

## Stack (non-negotiable)
- Runtime: Node.js 22 / TypeScript 5.8 strict
- Framework: Next.js 15 (App Router, PPR)
- CMS: Sanity v3
- Deploy: Vercel

## Non-negotiable rules
1. TypeScript strict: true. No `any`.
2. Use server components by default — only add 'use client' when needed.
3. No API data fetching in client components — use Server Components or RSC fetch.
4. Images must use next/image.
5. All CMS content comes from Sanity — no hardcoded copy.
6. Conventional commits only.

## File structure
src/app/               — Next.js App Router pages
src/components/        — Reusable UI components
src/lib/sanity.ts      — Sanity client configuration
