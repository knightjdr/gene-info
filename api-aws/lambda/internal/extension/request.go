package extension

import (
	"encoding/json"
	"errors"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-sdk-go/service/dynamodb"
)

// Request handles API requests.
func Request(e events.APIGatewayV2HTTPRequest, dbClient *dynamodb.DynamoDB) (string, error) {
	fields := getFields(e)
	fields, err := validateFields(fields)
	if err != nil {
		return "", err
	}

	items, err := query(fields, dbClient)
	if err != nil {
		return "", err
	}

	b, err := json.Marshal(items)
	if err != nil {
		return "", errors.New("error creating response body")
	}

	return string(b), nil
}
