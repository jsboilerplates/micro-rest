echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push jsboilerplates/micro-rest
docker push jsboilerplates/micro-rest:0.0.0
