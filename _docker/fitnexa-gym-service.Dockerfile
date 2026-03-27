# syntax=docker/dockerfile:1

# Stage 1: Builder
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY .npmrc* ./

RUN --mount=type=secret,id=npm_token \
    echo "//npm.pkg.github.com/:_authToken=$(cat /run/secrets/npm_token)" >> .npmrc \
    && echo "@gymia-fit:registry=https://npm.pkg.github.com" >> .npmrc \
    && npm ci \
    && rm -f .npmrc

COPY . .
RUN npx prisma generate 2>/dev/null || true
RUN mkdir -p node_modules/.prisma prisma
RUN npm run build

# Stage 2: Runner
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
COPY .npmrc* ./

RUN --mount=type=secret,id=npm_token \
    echo "//npm.pkg.github.com/:_authToken=$(cat /run/secrets/npm_token)" >> .npmrc \
    && echo "@gymia-fit:registry=https://npm.pkg.github.com" >> .npmrc \
    && npm ci --omit=dev \
    && rm -f .npmrc

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/prisma ./prisma

USER node

EXPOSE 3002

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:3002/health || exit 1

CMD ["node", "dist/main"]
