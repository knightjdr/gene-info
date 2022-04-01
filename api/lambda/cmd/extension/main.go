package main

import (
	"context"

	custom_errors "knightjdr/gene-info/api/lambda/internal/errors"
	"knightjdr/gene-info/api/lambda/internal/extension"
	"knightjdr/gene-info/api/lambda/internal/response"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
)

type ExtensionFn func(e events.APIGatewayV2HTTPRequest, dbClient *dynamodb.DynamoDB) (string, custom_errors.Error)
type HandlerFn func(context.Context, events.APIGatewayV2HTTPRequest) (events.APIGatewayV2HTTPResponse, error)

func ExtensionHandler(dbClient *dynamodb.DynamoDB, extensionHandler ExtensionFn) HandlerFn {
	return func(ctx context.Context, e events.APIGatewayV2HTTPRequest) (events.APIGatewayV2HTTPResponse, error) {
		body, err := extensionHandler(e, dbClient)

		code, err_message := response.StatusCode(err)
		return events.APIGatewayV2HTTPResponse{
			Body:       body,
			StatusCode: code,
		}, err_message
	}
}

func main() {
	sess := session.Must(session.NewSession())
	dbClient := dynamodb.New(sess)

	lambda.Start(ExtensionHandler(dbClient, extension.Request))
}
