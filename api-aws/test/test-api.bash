#!/bin/bash

set -o allexport
source .env
set +o allexport

if ( nc -zv localhost $TEST_CONTAINER_PORT > /dev/null 2>&1 ); then
  echo "PORT $TEST_CONTAINER_PORT is in use; assuming test container is already running"
else
  echo "Starting docker container for dynamodb called $TEST_CONTAINER_NAME on port $TEST_CONTAINER_PORT"
  docker run --name $TEST_CONTAINER_NAME -d -p $TEST_CONTAINER_PORT:$TEST_CONTAINER_PORT amazon/dynamodb-local > /dev/null

  echo "Creating table and populating with minimal data"
  aws dynamodb create-table --no-cli-pager --endpoint-url $TEST_ENDPOINT --table-name $DYNAMODB_TABLE --attribute-definitions AttributeName=pk,AttributeType=S AttributeName=sk,AttributeType=S --key-schema AttributeName=pk,KeyType=HASH AttributeName=sk,KeyType=Range --billing-mode PAY_PER_REQUEST > /dev/null 2>&1
  (cd test && aws dynamodb batch-write-item --endpoint-url $TEST_ENDPOINT --request-items file://gix-test.json > /dev/null 2>&1)
fi

echo "Server listenting on $TEST_API_PORT. CTRL-C to stop."
(cd lambda && go run cmd/testserver/main.go)

if ( docker container inspect -f '{{.State.Running}}' $TEST_CONTAINER_NAME > /dev/null 2>&1 ); then
  printf "\nStopping docker container\n"
  docker container stop $TEST_CONTAINER_NAME > /dev/null
  docker container rm $TEST_CONTAINER_NAME > /dev/null
fi
