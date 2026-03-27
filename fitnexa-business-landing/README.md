# fitnexa-business-landing

Gymia Business marketing landing page. Next.js 15 + Tailwind 4 + Dark theme.

## Environments

| Environment | Branch | URL |
|-------------|--------|-----|
| Production | main | [business.gymia.fit](https://business.gymia.fit) |
| UAT | develop | [uat.business.gymia.fit](https://uat.business.gymia.fit) |

## Setup

```bash
cp .env.example .env.local
npm install
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3006 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

## Deploy

Push to `main` branch to trigger production deployment via GitHub Actions.

## Docker

Build and run locally:

```bash
docker build -t fitnexa-business-landing .
docker run -p 3006:3006 fitnexa-business-landing
```
