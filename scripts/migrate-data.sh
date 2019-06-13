#!/bin/bash
function get_pod () {
  kubectl get pods -l app="$1" -o go-template --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}' | head -1
}

product_pod_name=$(get_pod product)
user_pod_name=$(get_pod user)
echo $product_pod_name
echo $user_pod_name

kubectl exec $user_pod_name npm run db-migrate
kubectl exec $product_pod_name npm run db-migrate
kubectl exec $product_pod_name npm run db-seed