# Workshop Docker and Kubernetes

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

API Testing
```
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