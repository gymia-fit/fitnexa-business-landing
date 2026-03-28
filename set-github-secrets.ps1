# Set GitHub Secrets using gh CLI (PowerShell)
# Run this in PowerShell after installing gh: https://cli.github.com/

$REPO = "gymia-fit/fitnexa-business-landing"

# Prompt for values
Write-Host "=== GitHub Secrets Setup ===" -ForegroundColor Cyan
Write-Host ""

# Generate random secrets
$JWT_SECRET = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes([System.Guid]::NewGuid().ToString() + [System.Guid]::NewGuid().ToString()))
$SERVICE_SECRET = [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes([System.Guid]::NewGuid().ToString() + [System.Guid]::NewGuid().ToString()))

# Collect secrets
$secrets = @{
    # Common
    "DATABASE_URL" = (Read-Host "Enter DATABASE_URL (postgresql://...)")
    "REDIS_URL" = (Read-Host "Enter REDIS_URL (redis://...)")
    "JWT_SECRET" = $JWT_SECRET
    "SERVICE_SECRET" = $SERVICE_SECRET
    
    # Auth service
    "SMTP_HOST" = (Read-Host "Enter SMTP_HOST (e.g., smtp.gmail.com)")
    "SMTP_PORT" = (Read-Host "Enter SMTP_PORT (e.g., 587)")
    "SMTP_SECURE" = (Read-Host "Enter SMTP_SECURE (true/false)")
    "SMTP_USER" = (Read-Host "Enter SMTP_USER")
    "SMTP_PASS" = (Read-Host "Enter SMTP_PASS")
    "EMAIL_FROM" = (Read-Host "Enter EMAIL_FROM (e.g., noreply@gymia.fit)")
    "APP_BASE_URL" = (Read-Host "Enter APP_BASE_URL (e.g., https://gymia.fit)")
    
    # Tracker service
    "GEMINI_API_KEY" = (Read-Host "Enter GEMINI_API_KEY")
    
    # CI/CD
    "NPM_TOKEN" = (Read-Host "Enter NPM_TOKEN (GitHub PAT)")
    "KUBECONFIG" = (Read-Host "Enter KUBECONFIG (base64 encoded)")
    "INFRA_TOKEN" = (Read-Host "Enter INFRA_TOKEN (GitHub PAT)")
    
    # Gateway (auto-filled)
    "AUTH_SERVICE_URL" = "http://auth-service:3001"
    "GYM_SERVICE_URL" = "http://gym-service:3002"
    "TRACKER_SERVICE_URL" = "http://tracker-service:3003"
    "WIZARD_SERVICE_URL" = "http://wizard-service:3004"
}

# Set each secret
foreach ($secret in $secrets.GetEnumerator()) {
    Write-Host "Setting $($secret.Key)..." -ForegroundColor Yellow
    gh secret set $secret.Key --body="$($secret.Value)" --repo=$REPO
}

Write-Host ""
Write-Host "✅ All secrets configured!" -ForegroundColor Green
Write-Host ""
Write-Host "Generated secrets (save these securely):" -ForegroundColor Cyan
Write-Host "JWT_SECRET: $JWT_SECRET"
Write-Host "SERVICE_SECRET: $SERVICE_SECRET"
