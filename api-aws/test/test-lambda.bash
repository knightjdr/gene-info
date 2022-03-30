#!/bin/bash

set -o allexport
source .env
set +o allexport

echo "Starting docker container for dynamodb called $TEST_CONTAINER_NAME on port $TEST_PORT"
docker run --name $TEST_CONTAINER_NAME -d -p $TEST_PORT:$TEST_PORT amazon/dynamodb-local > /dev/null

echo "Creating table"
aws dynamodb create-table --no-cli-pager --endpoint-url $TEST_ENDPOINT --table-name $DYNAMODB_TABLE --attribute-definitions AttributeName=pk,AttributeType=S AttributeName=sk,AttributeType=S --key-schema AttributeName=pk,KeyType=HASH AttributeName=sk,KeyType=Range --billing-mode PAY_PER_REQUEST > /dev/null 2>&1
(cd test && aws dynamodb batch-write-item --endpoint-url $TEST_ENDPOINT --request-items file://gix-test.json > /dev/null 2>&1)

printf "\nRunning tests\n"
# (cd lambda && godotenv -f ../.env.test go test -run TestGetItems ./internal/extension/query_test.go ./internal/extension/query.go ./internal/extension/fields.go ./internal/extension/items.go)
(cd lambda && godotenv -f ../.env.test go test ./...)

printf "\nStopping docker container\n"
docker container stop $TEST_CONTAINER_NAME > /dev/null
docker container rm $TEST_CONTAINER_NAME > /dev/null
