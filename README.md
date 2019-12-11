# node-docker

## How to run
- docker-compose up -d --build - will build a new image with name specified in the docker-compose.yml
([detached vs interactive](https://stackoverflow.com/questions/47753047/docker-detached-and-interactive#:~:targetText=%2Di%20(interactive)%20is%20about,orthogornal%20and%20not%20inherently%20contradictory) )
- docker run -it -p 8000:8080 docker-node - will Run the container in interactive mode
- docker run -d -p 8000:8080 docker-node - will run container in detached mode

## Hot loading with nodemon
- $ docker build -t live-app .
- $ docker run --rm -it -p 8001:8080 -v $(pwd):/app live-app
