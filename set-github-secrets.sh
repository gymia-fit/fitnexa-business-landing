#!/bin/bash

# Set GitHub Secrets using gh CLI
# Run this from your terminal after installing gh: https://cli.github.com/

REPO="gymia-fit/fitnexa-business-landing"

# Generate random secrets if not provided
JWT_SECRET=${JWT_SECRET:-$(openssl rand -base64 32)}
SERVICE_SECRET=${SERVICE_SECRET:-$(openssl rand -base64 32)}

# Common secrets
gh secret set DATABASE_URL --body="$DATABASE_URL" --repo=$REPO
gh secret set REDIS_URL --body="$REDIS_URL" --repo=$REPO
gh secret set JWT_SECRET --body="$JWT_SECRET" --repo=$REPO
gh secret set SERVICE_SECRET --body="$SERVICE_SECRET" --repo=$REPO

# Auth service secrets
gh secret set SMTP_HOST --body="$SMTP_HOST" --repo=$REPO
gh secret set SMTP_PORT --body="$SMTP_PORT" --repo=$REPO
gh secret set SMTP_SECURE --body="$SMTP_SECURE" --repo=$REPO
gh secret set SMTP_USER --body="$SMTP_USER" --repo=$REPO
gh secret set SMTP_PASS --body="$SMTP_PASS" --repo=$REPO
gh secret set EMAIL_FROM --body="$EMAIL_FROM" --repo=$REPO
gh secret set APP_BASE_URL --body="$APP_BASE_URL" --repo=$REPO

# Gateway secrets
gh secret set AUTH_SERVICE_URL --body="http://auth-service:3001" --repo=$REPO
gh secret set GYM_SERVICE_URL --body="http://gym-service:3002" --repo=$REPO
gh secret set TRACKER_SERVICE_URL --body="http://tracker-service:3003" --repo=$REPO
gh secret set WIZARD_SERVICE_URL --body="http://wizard-service:3004" --repo=$REPO

# Tracker service
gh secret set GEMINI_API_KEY --body="$GEMINI_API_KEY" --repo=$REPO

# CI/CD secrets
gh secret set NPM_TOKEN --body="$NPM_TOKEN" --repo=$REPO
gh secret set KUBECONFIG --body="$KUBECONFIG" --repo=$REPO
gh secret set INFRA_TOKEN --body="$INFRA_TOKEN" --repo=$REPO

echo "✅ All secrets configured!"
