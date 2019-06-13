# Workshop Docker and Kubernetes

## Software requirements
* [NodeJS](https://nodejs.org/en/)
* [Docker](https://www.docker.com/)
* [Docker compose](https://docs.docker.com/compose/)
* [Postman](https://www.getpostman.com/) and [newman](https://www.npmjs.com/package/newman)
* [Kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) : Kubernetes manager CLI


## Step 1 :: Building User service with Docker

```
$cd services/user
$docker image build -t user .
$docker container run --rm -p 3000:3000 \
 -e PROCESS_TYPE=web \
 -e NODE_ENV=production \
 -e DB_HOST=xxx \
 -e DB_USER=xxx \
 -e DB_PASSWORD=xxx \
 -e DB_DATABASE=xxx \
 -e DB_PORT=3306 \
 user
```

### Working with docker compose
* Create database 
* Seeding data to database (create tables)
* Start user service

```
// Create
$docker-compose up -d

// Delete
$docker-compose down
```

### API Testing with Postman by using [newman](https://www.npmjs.com/package/newman) command
```
$cd testing
$newman run user-service.postman_collection.json
```


## Step 2


## Step 3


## Step 4




## Frone end

$cd frontent
$yarn install
$yarn start

http://localhost:3000



cd services/user
docker image build -t user .
