#!/bin/bash
# FitNexa Platform — Local Development Startup
# Usage: ./dev.sh
# Stop:  ./dev-stop.sh

export MSYS_NO_PATHCONV=1
ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

echo -e "\n\033[1;36m========================================\033[0m"
echo -e "\033[1;36m  FitNexa Platform — Starting Dev Stack\033[0m"
echo -e "\033[1;36m========================================\n\033[0m"

# ── Step 1: Start Docker infrastructure ──
echo -e "\033[1;33m[1/5] Starting Docker containers (5x Postgres + Redis)...\033[0m"
docker compose up -d

# ── Step 2: Wait for healthy ──
echo -e "\033[1;33m[2/5] Waiting for databases to be healthy...\033[0m"
SERVICES=("postgres-auth" "postgres-gateway" "postgres-gym" "postgres-tracker" "postgres-wizard" "redis")
MAX_WAIT=30
WAITED=0
ALL_HEALTHY=false

while [ "$ALL_HEALTHY" = false ] && [ "$WAITED" -lt "$MAX_WAIT" ]; do
    ALL_HEALTHY=true
    for SVC in "${SERVICES[@]}"; do
        STATUS=$(docker inspect --format '{{.State.Health.Status}}' "fitnexa-platform-$SVC-1" 2>/dev/null || echo "missing")
        if [ "$STATUS" != "healthy" ]; then
            ALL_HEALTHY=false
            break
        fi
    done

    if [ "$ALL_HEALTHY" = false ]; then
        sleep 2
        WAITED=$((WAITED + 2))
        echo -e "\033[1;30m  Waiting... (${WAITED}s)\033[0m"
    fi
done

if [ "$ALL_HEALTHY" = false ]; then
    echo -e "\033[1;33mWARNING: Not all containers healthy after ${MAX_WAIT}s. Continuing anyway...\033[0m"
else
    echo -e "\033[1;32m  All containers healthy!\033[0m"
fi

# ── Step 3: Prisma db push ──
echo -e "\033[1;33m[3/5] Pushing Prisma schemas...\033[0m"
BACKENDS=(
    "auth-service|fitnexa-auth-service"
    "gateway|fitnexa-gateway"
    "gym-service|fitnexa-gym-service"
    "tracker|fitnexa-tracker-service"
    "wizard|fitnexa-wizard-service"
)

for BE in "${BACKENDS[@]}"; do
    NAME="${BE%%|*}"
    DIR="${BE##*|}"
    echo -e "\033[1;30m  Pushing schema for $NAME...\033[0m"
    cd "$ROOT_DIR/$DIR"
    npx prisma db push --skip-generate >/dev/null 2>&1 || echo -e "\033[1;33m  WARNING: prisma db push failed for $NAME\033[0m"
done
echo -e "\033[1;32m  Schemas pushed!\033[0m"

# ── Step 4: Build nestjs-common and link to all services ──
echo -e "\033[1;33m[4/5] Building @gymia-fit/nestjs-common and linking...\033[0m"
cd "$ROOT_DIR/fitnexa-nestjs-common"
npm install >/dev/null 2>&1
npm run build >/dev/null 2>&1 || echo -e "\033[1;33m  WARNING: nestjs-common build failed\033[0m"

npm link >/dev/null 2>&1
echo -e "\033[1;30m  Build complete. Linking to services...\033[0m"

for BE in "${BACKENDS[@]}"; do
    DIR="${BE##*|}"
    cd "$ROOT_DIR/$DIR"
    npm link @gymia-fit/nestjs-common >/dev/null 2>&1
done
echo -e "\033[1;32m  Linked!\033[0m"

# ── Step 5: Start all services ──
echo -e "\033[1;33m[5/5] Starting services...\033[0m"

export NODE_OPTIONS="--preserve-symlinks"
PID_FILE="$ROOT_DIR/.dev-pids"
> "$PID_FILE"

# Backend services
for BE in "${BACKENDS[@]}"; do
    NAME="${BE%%|*}"
    DIR="${BE##*|}"
    cd "$ROOT_DIR/$DIR"
    npm run start:dev >/dev/null 2>&1 &
    PID=$!
    echo "$PID|$NAME" >> "$PID_FILE"
    echo -e "\033[1;30m  Started $NAME (PID: $PID)\033[0m"
done

# Frontend apps
FRONTENDS=(
    "gym-admin|fitnexa-gym-admin|5173"
    "super-admin|fitnexa-super-admin|5174"
    "onboarding|fitnexa-onboarding|5175"
    "landing|fitnexa-landing|3005"
)

for FE in "${FRONTENDS[@]}"; do
    IFS='|' read -r NAME DIR PORT <<< "$FE"
    cd "$ROOT_DIR/$DIR"
    npm run dev >/dev/null 2>&1 &
    PID=$!
    echo "$PID|$NAME" >> "$PID_FILE"
    echo -e "\033[1;30m  Started $NAME (PID: $PID)\033[0m"
done

cd "$ROOT_DIR"

echo -e "\n\033[1;32m========================================\033[0m"
echo -e "\033[1;32m  All services starting!\033[0m"
echo -e "\033[1;32m========================================\n\033[0m"

echo -e "\033[1;36m  Backend:\033[0m"
echo "    Gateway:  http://localhost:3000/health"
echo "    Auth:     http://localhost:3001/health"
echo "    Gym:      http://localhost:3002/health"
echo "    Tracker:  http://localhost:3003/health"
echo "    Wizard:   http://localhost:3004/health"
echo ""
echo -e "\033[1;36m  Frontend:\033[0m"
echo "    Gym Admin:   http://localhost:5173"
echo "    Super Admin: http://localhost:5174"
echo "    Onboarding:  http://localhost:5175"
echo "    Landing:     http://localhost:3005"
echo ""
echo -e "\033[1;30m  Stop with: ./dev-stop.sh\033[0m\n"
