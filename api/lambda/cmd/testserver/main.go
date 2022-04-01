package main

import (
	"fmt"
	"net/http"
	"os"

	custom_errors "knightjdr/gene-info/api/lambda/internal/errors"
	"knightjdr/gene-info/api/lambda/internal/extension"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
)

type ExtensionFn func(e events.APIGatewayV2HTTPRequest, dbClient *dynamodb.DynamoDB) (string, custom_errors.Error)
type HandlerFn func(http.ResponseWriter, *http.Request)

func ExtensionHandler(dbClient *dynamodb.DynamoDB, extensionHandler ExtensionFn) HandlerFn {
	return func(w http.ResponseWriter, req *http.Request) {
		query := req.URL.Query()
		identifier := query.Get("identifier")
		species := query.Get("species")
		term := query.Get("term")

		request := events.APIGatewayV2HTTPRequest{
			QueryStringParameters: map[string]string{
				"identifier": identifier,
				"species":    species,
				"term":       term,
			},
		}

		body, _ := extensionHandler(request, dbClient)
		fmt.Fprintf(w, body)
	}
}

func main() {
	sessConfig := &aws.Config{
		Endpoint: aws.String(os.Getenv("TEST_ENDPOINT")),
		Region:   aws.String(os.Getenv("AWS_REGION")),
	}
	sess := session.Must(session.NewSession(sessConfig))
	dbClient := dynamodb.New(sess)

	http.HandleFunc("/extension", ExtensionHandler(dbClient, extension.Request))

	http.ListenAndServe(fmt.Sprintf(":%s", os.Getenv("TEST_API_PORT")), nil)
}
