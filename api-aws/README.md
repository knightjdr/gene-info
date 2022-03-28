# GIX API depolyed to AWS

This API using AWS HTTP API Gateway, with Lambda and DynamoDB as backend. Lambda functions are in GO.

## Testing

Requirements:
  * [AWS CLI](https://aws.amazon.com/cli/)
  * [Docker](https://www.docker.com/)
  * `.env.test` file

The `.env.test` file should specify the below parameters. The endpoint refers to the endpoint of the Docker container that uses the specified port and container name. There is one table created in the DynamoDB container containing both gene identifier mappings and gene metadata. This table will be created in the Docker container and referenced by the testing scripts. The region can be set to any valid AWS region.
```
AWS_REGION=ca-central-1
DYNAMODB_TABLE=gix-test
DYNAMODB_ENDPOINT=http://localhost:8000
TEST_CONTAINER_NAME=dynamodb-gix-test
TEST_PORT=8000
```

Run the tests from this directory.
```
npm run gotest
```
