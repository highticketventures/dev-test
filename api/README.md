# HTV API

### Getting Started
```sh
git clone https://github.com/highticketventures/dev-test-anthony-budd
cd dev-test-anthony-budd/api

# Private RSA key for JWT signing
openssl genrsa -out private.pem 2048
openssl rsa -in private.pem -outform PEM -pubout -out public.pem

# Start app
cp .env.example .env
npm install
docker compose up
npm run exec:db:refresh
npm run exec:test
```
