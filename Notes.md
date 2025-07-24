### My Notes

```sh
export KUBECONFIG=/Users/anthonybudd/Development/htv-dev-test/kubeconfig.yaml

docker buildx build --platform linux/amd64 --push -t registry.digitalocean.com/mycc/ab-test:latest . 

kubectl rollout restart deployment htv-api && \
kubectl get pods -w
``