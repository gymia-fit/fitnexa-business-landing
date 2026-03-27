#!/bin/bash
# FitNexa Platform — Stop all local dev services
# Usage: ./dev-stop.sh

export MSYS_NO_PATHCONV=1
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

echo -e "\n\033[1;36m========================================\033[0m"
echo -e "\033[1;36m  FitNexa Platform — Stopping Dev Stack\033[0m"
echo -e "\033[1;36m========================================\n\033[0m"

# ── Stop application processes ──
echo -e "\033[1;33m[1/2] Stopping node processes on known ports...\033[0m"
PID_FILE="$ROOT_DIR/.dev-pids"

# Fallback robust kill by port checking
PORTS=(3000 3001 3002 3003 3004 3005 5173 5174 5175)
for PORT in "${PORTS[@]}"; do
    PID=$(netstat -ano | grep ":$PORT\s" | grep LISTENING | awk '{print $NF}' | head -n 1)
    if [ -n "$PID" ] && [ "$PID" != "0" ]; then
        taskkill //PID "$PID" //F //T >/dev/null 2>&1 || true
        echo -e "\033[1;30m  Killed process on port $PORT (PID: $PID)\033[0m"
    fi
done

if [ -f "$PID_FILE" ]; then
    rm -f "$PID_FILE"
fi

# ── Stop Docker containers ──
echo -e "\033[1;33m[2/2] Stopping Docker containers...\033[0m"
docker compose down
if [ $? -eq 0 ]; then
    echo -e "\033[1;32m  Docker containers stopped!\033[0m"
else
    echo -e "\033[1;33m  WARNING: Docker compose down failed\033[0m"
fi

echo -e "\n\033[1;32m========================================\033[0m"
echo -e "\033[1;32m  Dev stack stopped!\033[0m"
echo -e "\033[1;32m========================================\n\033[0m"
