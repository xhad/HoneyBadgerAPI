## HoneyBadger API

*honeybadger.services

This is a serverless reference app for authentication using:

[API GATEWAY]
[COGNITO USER POOLS]
[COGNITO FEDERATED IDENTITIES]
[DYNAMODB]
[LAMBDA]


```
npm i 
cd api
npm i
cd ./lambda
npm i

aws confgure <enter your cred>
npm run gulp deploy
```


### Client
```
brew install swagger-codegen
mkdir client 
swagger-codegen swagger-codegen generate -i http://petstore.swagger.io/v2/swagger.json -l ruby -o /tmp/test/

To generate the Swagger SDK for Client

This is based on https://github.com/awslabs/aws-serverless-auth-reference-app
