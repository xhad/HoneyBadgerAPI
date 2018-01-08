## HoneyBadger API

<h4>honeybadger.services</h4>

This is a serverless reference app for authentication using:

- API GATEWAY
- COGNITO USER POOLS
- COGNITO FEDERATED IDENTITIES
- DYNAMODB
- S3 BUCKETS
- LAMBDA


```
cd api
npm i
cd ./lambda
npm i

aws configure <enter your cred>
npm run gulp deploy
```


### Client

To generate the Swagger SDK for Client:

```
brew install swagger-codegen
mkdir client 
swagger-codegen generate -i ./api/swagger/HoneyBadgerAPI.yml -l javascript -o ./client/honeybadger-sdk
```


 https://github.com/awslabs/aws-serverless-auth-reference-app
