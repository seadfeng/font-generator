
## Docker Build For Local

```sh
sh ./bin/docker.sh

# Start
docker run -p 3000:3000 font-generator:latest
```

## Start with online image

```sh

docker pull seadfeng/favicon-downloader
docker run -p 3000:3000 seadfeng/favicon-downloader

# or

cd .docker/compose && docker compose up -d
```



