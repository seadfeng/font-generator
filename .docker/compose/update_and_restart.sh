#!/usr/bin/env bash

# Pull the latest images
docker compose pull

# Rebuild and start the app
docker compose up -d --no-deps --build app

# Clean up unused Docker resources
docker system prune -f