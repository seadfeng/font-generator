
## Docker Build For Local

```sh
sh ./bin/docker.sh

# Start
docker run -p 3000:3000 font-generator:latest
```

## Start with online image

```sh

docker pull seadfeng/font-generator
docker run -p 3000:3000 seadfeng/font-generator

# or

cd .docker/compose && docker compose up -d
```



