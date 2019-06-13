# Working with Kubernetes on GKE (Google Kubernetes Engine)

* [Google Cloud](https://console.cloud.google.com)
* Enable your billing (Free 300USD or one year)
* [Google Cloud SKD](https://cloud.google.com/sdk/)
* [Create Kubernestes cluster](https://console.cloud.google.com/kubernetes)


## Step 1 :: Basic command
```
// Get all nodes in cluster
$kubectl get node
$kubectl get node -o wide

// Get all resources in cluster
$kubectl get all

// Get all Pods
$kubectl get pod

// Get all Deployments
$kubectl get deploy

// Get all ReplicaSet
$kubectl get rs
$kubectl get replicaset

// Get all Services
$kubectl get service
$kubectl get svc

// Get all Secrets
$kubectl get secret

// Get all Ingress
$kubectl get ingress
$kubectl get ing
```

## Step 2 :: Deploy user service in cluster
```
$kubectl create -f services/user/k8s
```

## Step 3 :: Deploy product service in cluster
```
$kubectl create -f services/user/k8s
```

## Step 4 :: Deploy gateway in cluster
```
$kubectl create -f gateway/k8s
```

## Step 5 :: Deploy fronend in cluster
```
$kubectl create -f frontend/k8s

// Waiting for Public IP (Dynamic Load Balance IP from Google Cloud)
$kubectl get ing -w
```

Open url=<Public IP> in browser


## Delete all resources
```
$kubectl delete -f services/user/k8s
$kubectl delete -f services/product/k8s
$kubectl delete -f gateway/k8s
$kubectl delete -f frontend/k8s
```