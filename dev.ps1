# FitNexa Platform — Local Development Startup (Clean pnpm Edition)
$ErrorActionPreference = "Stop"
$root = $PSScriptRoot

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   FitNexa Platform - pnpm Workspace" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

# --- 1. Service Definitions ---
$backends = @(
    @{ id = "auth"; name = "auth-service"; dir = "fitnexa-auth-service"; type = "backend" },
    @{ id = "gateway"; name = "gateway"; dir = "fitnexa-gateway"; type = "backend" },
    @{ id = "gym"; name = "gym-service"; dir = "fitnexa-gym-service"; type = "backend" },
    @{ id = "tracker"; name = "tracker-service"; dir = "fitnexa-tracker-service"; type = "backend" },
    @{ id = "wizard"; name = "wizard-service"; dir = "fitnexa-wizard-service"; type = "backend" }
)
$frontends = @(
    @{ id = "admin"; name = "gym-admin"; dir = "fitnexa-gym-admin"; type = "frontend" }
)
$allAvailable = $backends + $frontends

# --- 2. Selection ---
$selection = Read-Host "Enter IDs (comma-separated) or press ENTER for ALL"
$toRun = if ([string]::IsNullOrWhiteSpace($selection)) { $allAvailable } else {
    $selection.Split(",").Trim() | ForEach-Object { $id = $_; $allAvailable | Where-Object { $_.id -eq $id } }
}

# --- 3. Infrastructure & Dependencies ---
Write-Host "[1/3] Warming up engines..." -ForegroundColor Yellow
docker compose up -d
pnpm install --silent

# --- 3b. Generate Prisma clients for backend services ---
$prismaServices = @("fitnexa-auth-service", "fitnexa-gym-service", "fitnexa-tracker-service", "fitnexa-wizard-service")
foreach ($svcDir in $prismaServices) {
    $svcPath = Join-Path $root $svcDir
    if (Test-Path (Join-Path $svcPath "prisma")) {
        Push-Location $svcPath
        npx prisma generate | Out-Null
        Pop-Location
    }
}

# --- 4. Prepare Shared Libraries ---
Write-Host "[2/3] Building shared libraries..." -ForegroundColor Yellow
$libs = @("fitnexa-shared", "fitnexa-nestjs-common")
foreach ($lib in $libs) {
    Push-Location (Join-Path $root $lib)
    if (Test-Path "prisma") { npx prisma generate | Out-Null }
    pnpm run build | Out-Null
    Pop-Location
}

# --- 5. Launch Terminals ---
Write-Host "[3/3] Launching services..." -ForegroundColor Green
$jobs = @()
foreach ($svc in $toRun) {
    $svcPath = Join-Path $root $svc.dir
    $script = if ($svc.type -eq "backend") { "start:dev" } else { "dev" }
    
    $job = Start-Process -FilePath "cmd.exe" -ArgumentList "/k", "title $($svc.name) && pnpm run $script" `
           -WorkingDirectory $svcPath -PassThru
    $jobs += @{ name = $svc.name; pid = $job.Id }
}

$jobs | ForEach-Object { "$($_.pid)|$($_.name)" } | Set-Content (Join-Path $root ".dev-pids")
Write-Host "Done! Services are spinning up in separate windows." -ForegroundColor Green