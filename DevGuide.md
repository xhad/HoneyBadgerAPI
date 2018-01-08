# HoneyBadger Developer Guide

This Developer Guide provides instructions on setting up the project pre-requisites manually in your developer environment.


## Backend API

HoneyBadger uses a Serverless API built using Amazon API Gateway, Lambda, DynamoDB, and CloudFormation. The API has the following REST methods, and some methods can only be called by users with "Admin" privileges.

![HoneyBadger API]

For full visibility into how everything works, you're able to setup the backend API in a fully automated way in your personal AWS account, which will then allow you to tweak settings and better understand the key interactions.

### Installing the prerequisites

The framework relies on [Node.js] and [npm].

    # install the latest Gulp CLI tools globally (you will need a newer version of Gulp CLI which supports Gulp v4)
    npm install gulpjs/gulp-cli -g

    # Checkout the git repo
    git clone https://github.com/horangi-ir/HoneyBadgerAPI.git
    
    # install the Node modules for the bootstrapping process 
    cd HoneyBadgerAPI/api
    npm install
    
    # install the Node modules for the Lambda run-time
    cd ./lambda
    npm install
    
    # Optional: Update the API config file if you'd like to use a specific non-default AWS profile or different region than us-east-1 to install to.
    # vi HoneyBadgerAPI/api/config.js

    # Run the API automated bootstrapping process to deploy all AWS resources to your account
    # gulp commands need to be run from 'api' directory
    cd ..
    npm run gulp deploy
    
    # Bootstrap your application with Sample data
    npm run gulp bootstrap



### Uninstallation

When you're through testing and using the application, you may run the following command to delete any previously created backend resources that are hosted in your AWS account.

    cd HoneyBadgerAPI/api
    npm run gulp undeploy

[AWS Cognito]:https://aws.amazon.com/cognito/
[AWS Lambda]:https://aws.amazon.com/lambda/ 
[Amazon DynamoDB]:https://aws.amazon.com/dynamodb/
[Amazon API Gateway]:https://aws.amazon.com/api-gateway/
[AWS CloudFormation]:https://aws.amazon.com/cloudformation/
[Vysor]:https://www.vysor.io/
[Chrome's remote debugger tool]:https://developers.google.com/web/tools/chrome-devtools/remote-debugging/
[Node.js]:https://nodejs.org/en/download/
[npm]:https://www.npmjs.com/
[Apache Cordova]:https://cordova.apache.org/
[HoneyBadger Mobile app]:/app/docs/images/screenshot-small.png?raw=true
[HoneyBadger API]:/api/docs/images/HoneyBadger-api.png?raw=true
[HoneyBadger Mobile App architecture]:/app/docs/images/HoneyBadger-app-architecture.png?raw=true
[Ionic2 framework]:http://ionicframework.com/docs/v2/
[Angular 2]:https://angular.io/
[TypeScript 2.0]:https://www.typescriptlang.org/index.html
[AWS re:Invent 2016: Serverless Authentication and Authorization: Identity Management for Serverless Architectures (MBL306)]:https://www.youtube.com/watch?v=n4hsWVXCuVI&list=PLhr1KZpdzukdAg4bXtTfICuFeZFC_H2Xq&index=6
[AWS re:Invent 2016]: https://reinvent.awsevents.com/
[User Groups]:http://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-user-groups.html
