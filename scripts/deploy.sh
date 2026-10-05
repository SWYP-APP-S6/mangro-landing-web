#!/usr/bin/env bash
# 서버에서 직접 실행하는 배포 스크립트.
#
#   ssh root@api.mangro.cloud
#   deploy-landing
#
# admin-web 의 scripts/deploy.sh 와 같은 모양이다. API 를 부르지 않아 빌드 환경변수가 없다.
set -euo pipefail

cd "$(dirname "$0")/.."

WEB_ROOT="${WEB_ROOT:-/var/www/landing}"

if [ ! -d "$WEB_ROOT" ]; then
	echo "error: $WEB_ROOT 이 없다. root 로 만들고 deploy 소유로 넘겨야 한다:" >&2
	echo "       mkdir -p $WEB_ROOT && chown deploy:deploy $WEB_ROOT" >&2
	exit 1
fi

BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "==> deploying branch: $BRANCH"
if [ "$BRANCH" != "main" ]; then
	echo "warning: not on main" >&2
fi

echo "==> pulling"
git pull --ff-only

echo "==> installing dependencies"
npm ci

echo "==> building"
npm run build

echo "==> publishing to $WEB_ROOT"
rm -rf "${WEB_ROOT:?}"/* "${WEB_ROOT:?}"/.[!.]* 2>/dev/null || true
cp -a dist/. "$WEB_ROOT/"

echo "==> done"
