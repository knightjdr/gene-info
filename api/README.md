# GIX API depolyed to AWS

This API using AWS HTTP API Gateway, with Lambda and DynamoDB as backend. Lambda functions are in GO.

## Testing

Requirements:
  * [AWS CLI](https://aws.amazon.com/cli/)
  * [Docker](https://www.docker.com/)
  * `.env` file

The `.env` file should specify the below parameters. The endpoint refers to the endpoint of the Docker container that uses the specified port and container name. There is one table created in the DynamoDB container containing both gene identifier mappings and gene metadata. This table will be created in the Docker container and referenced by the testing scripts. The region can be set to any valid AWS region. The test API port refers to the port used by the development API, which is simply a GO server wrapper around the lambda functions.
```
AWS_REGION=ca-central-1
DYNAMODB_TABLE=gix
TEST_API_PORT=8001
TEST_CONTAINER_NAME=dynamodb-gix-test
TEST_CONTAINER_PORT=8000
TEST_ENDPOINT=http://localhost:8000
```

Run the tests from this directory.
```
npm run test-lambda
```
