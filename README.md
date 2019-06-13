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

## Step 2 :: Building Product service with Docker

```
$cd services/product
$docker image build -t product .
$docker container run --rm -p 3000:3000 \
 -e PROCESS_TYPE=web \
 -e NODE_ENV=production \
 -e DB_HOST=xxx \
 -e DB_USER=xxx \
 -e DB_PASSWORD=xxx \
 -e DB_DATABASE=xxx \
 -e DB_PORT=3306 \
 product
```

### Working with docker compose
* Create database 
* Seeding data to database (create tables)
* Start product service

```
// Create
$docker-compose up -d

// Delete
$docker-compose down
```

### API Testing with Postman by using [newman](https://www.npmjs.com/package/newman) command
```
$cd testing
$newman run product-service.postman_collection.json
```

## Step 3 :: Building API gateway for User services with Docker
```
$cd gateway
$docker image build -t gateway .
$docker container run --rm -p 3001:3000 \
 -e JWT_SECRET=secret \
 -e USER_WEB_SERVICE_HOST=xxx \
 -e USER_WEB_SERVICE_PORT=3000 \
 -e PRODUCT_WEB_SERVICE_HOST=yyy \
 -e PRODUCT_WEB_SERVICE_PORT=3000 \
 gateway
```

Call API from Gateway
* http://localhost:3001/api/users/register
* http://localhost:3001/api/login


## Step 4 :: Building Frontend with Docker

```
$cd frontend
$docker image build -t frontend .
$docker container run --rm -p 3002:3000 frontend
```
Open url=http://localhost:3002/login in browser



## Step 5 :: Run All-in-one with Docker compose

Build and deploy
```
$docker-compose -f docker-compose-build.yml build
$docker-compose -f docker-compose-build.yml up

// Delete all
$docker-compose -f docker-compose-build.yml down

```

Deploy only
```
$docker-compose -f docker-compose-deploy.yml up

// Delete all
$docker-compose -f docker-compose-deploy.yml down
```

Open url=http://localhost:3002/login in browser


## Next ==> [Deploy with Kubernetes on Google Kubernetes Engine (GKE)](https://github.com/up1/demo-docker-k8s/blob/master/K8S_README.md)

