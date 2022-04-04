# API

The API used AWS API Gateway with Lambda using Go. The infrastructure is described using the AWS CDK.

## Prerequisites

* Docker
* Node.js
* TypeScript
* [AWS cli V2](https://aws.amazon.com/cli/)
* [AWS CDK toolkit](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html)

### Install dependencies

```
(cd api && npm install)
```

## .ENV

A `.env` file is required in the `api/` folder. It must specify the following parameters:
```
AWS_REGION=ca-central-1
DYNAMODB_TABLE=gix
TEST_API_PORT=8001
TEST_CONTAINER_NAME=dynamodb-gix-test
TEST_CONTAINER_PORT=8000
TEST_ENDPOINT=http://localhost:8000
```

## Tests

The Lambda functions require a DB instance to query. The test configuration will create a DB instance in a Docker container running on the `TEST_CONTAINER_PORT` and populate the `DYNAMODB_TABLE` with data from the `api/test/gix-test.json` file. When the tests complete, the temporary database container is removed. It is critical to use this temporary DB for tests as the tests expect a specific response from the database.

Run tests:
```
npm run test-lambda
```

## Local api

A local API that passes requests to the Lambda functions can be started on `TEST_API_PORT`. This is great for testing a development version of the extension. The npm script will use a DynamoDB instance running on `TEST_CONTAINER_PORT` if it is already available. Otherwise, a temporary database will be created in a Docker container and the data from the `api/test/gix-test.json` file will be loaded into the database.

Start local DynamoDB instance. Only use this if it has been populated with data.
```
MY_UID="$(id -u)" MY_GID="$(id -g)" docker-compose -f database/docker-compose.yaml up -d dynamodb-local
```

Start dev API.
```
npm run dev-api
```

## Deployment

The infrastructure is deployed using the AWS CDK toolkit. Run these commands from the `api/` folder.

1. Compile the CDK app.
```
npm run build
```

2. Synthesize the CloudFormation template
```
cdk synth
```

3. Boostrap the stack, if necessary. Only needs to be done once on the first deployment.
```
cdk bootstrap
```

4. Deploy the stack
```
cdk deploy
```

To destroy the stack:
```
cdk destroy
```