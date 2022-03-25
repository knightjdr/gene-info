package extension

import (
	"encoding/json"

	"knightjdr/gene-info/api-aws/lambda/internal/errors"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-sdk-go/service/dynamodb"
)

// Request handles API requests.
func Request(e events.APIGatewayV2HTTPRequest, dbClient *dynamodb.DynamoDB) (string, errors.Error) {
	fields := getFields(e)
	fields, err := validateFields(fields)
	if err != nil {
		return "[]", err
	}

	fields = processFields(fields)

	items, err := query(fields, dbClient)
	if err != nil {
		return "[]", err
	}

	orderItems(fields.term, &items)

	bytesBody, marshall_err := json.Marshal(items)
	if marshall_err != nil {
		return "", errors.New(500, "could not create response body")
	}

	return string(bytesBody), nil
}
