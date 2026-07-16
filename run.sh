#!/usr/bin/env bash

set -e

if ! systemctl is-active --quiet docker; then
    echo "Iniciando Docker..."
    sudo systemctl start docker
fi

echo "Asegurando que MongoDB esté iniciado..."
docker start mongodb >/dev/null 2>&1 || echo "El contenedor mongodb no existe."

echo "Iniciando aplicación..."
pnpm dev
