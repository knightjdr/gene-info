package main

import (
	"context"
	"encoding/json"
	"os"
	"testing"

	"knightjdr/gene-info/api-aws/lambda/internal/extension"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/stretchr/testify/assert"
)

func TestExtensionHandler(t *testing.T) {
	sessConfig := &aws.Config{
		Endpoint: aws.String(os.Getenv("DYNAMODB_ENDPOINT")),
		Region:   aws.String(os.Getenv("AWS_REGION")),
	}
	sess := session.Must(session.NewSession(sessConfig))
	dbClient := dynamodb.New(sess)

	handler := ExtensionHandler(dbClient, extension.Request)

	type expected struct {
		code  int
		items extension.Items
		err   error
	}
	tests := map[string]struct {
		ctx      context.Context
		e        events.APIGatewayV2HTTPRequest
		expected expected
	}{
		"should return successfully with found item": {
			ctx: context.Background(),
			e: events.APIGatewayV2HTTPRequest{
				QueryStringParameters: map[string]string{
					"identifier": "auto",
					"species":    "Homo-sapiens",
					"term":       "PDCD10",
				},
			},
			expected: expected{
				code: 200,
				items: extension.Items{
					extension.Item{
						Fullname: "Programmed cell death protein 10",
						Gene:     "PDCD10",
						Geneid:   11235,
					},
				},
				err: nil,
			},
		},
		"should return successfully with no item found": {
			ctx: context.Background(),
			e: events.APIGatewayV2HTTPRequest{
				QueryStringParameters: map[string]string{
					"identifier": "auto",
					"species":    "Homo-sapiens",
					"term":       "ABC",
				},
			},
			expected: expected{
				code:  200,
				items: extension.Items{},
				err:   nil,
			},
		},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			items, _ := json.Marshal(test.expected.items)
			expectedBody := string(items)

			resp, err := handler(test.ctx, test.e)
			assert.Equal(t, expectedBody, resp.Body)
			assert.Equal(t, test.expected.code, resp.StatusCode)
			assert.Equal(t, test.expected.err, err)
		})
	}
}
