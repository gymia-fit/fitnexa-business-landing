$ErrorActionPreference = "Continue"
$root = $PSScriptRoot

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  FitNexa Platform - Stopping Dev Stack" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

$pidFile = Join-Path $root ".dev-pids"
if (Test-Path $pidFile) {
    Write-Host "[1/2] Stopping application processes..." -ForegroundColor Yellow
    Get-Content $pidFile | ForEach-Object {
        $parts = $_ -split '\|'
        $jobPid = [int]$parts[0]
        $name = $parts[1]
        try {
            $proc = Get-Process -Id $jobPid -ErrorAction SilentlyContinue
            if ($proc) {
                Stop-Process -Id $jobPid -Force -ErrorAction SilentlyContinue
                Get-CimInstance Win32_Process | Where-Object { $_.ParentProcessId -eq $jobPid } | ForEach-Object {
                    Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue
                }
                Write-Host "  Stopped $name (PID: $jobPid)" -ForegroundColor DarkGray
            }
        }
        catch {}
    }
    Remove-Item $pidFile -Force
}

$ports = @(3000, 3001, 3002, 3003, 3004, 3005, 5173, 5174, 5175)
foreach ($port in $ports) {
    $netstat = netstat -ano | Select-String ":$port\s" | Select-String "LISTENING"
    if ($netstat) {
        $jobPid = ($netstat -split '\s+')[-1]
        if ($jobPid -and $jobPid -ne "0") {
            Stop-Process -Id ([int]$jobPid) -Force -ErrorAction SilentlyContinue
            Write-Host "  Stopped leftover process (PID: $jobPid) on port $port" -ForegroundColor DarkGray
        }
    }
}

Write-Host "[2/2] Stopping Docker containers..." -ForegroundColor Yellow
docker compose down

Write-Host "========================================" -ForegroundColor Green
Write-Host "  Dev stack stopped!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
