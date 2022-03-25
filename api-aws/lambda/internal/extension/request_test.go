package extension

import (
	"encoding/json"
	"knightjdr/gene-info/api-aws/lambda/internal/errors"
	"os"
	"testing"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/stretchr/testify/assert"
)

func TestRequest(t *testing.T) {
	sessConfig := &aws.Config{
		Endpoint: aws.String(os.Getenv("DYNAMODB_ENDPOINT")),
		Region:   aws.String(os.Getenv("AWS_REGION")),
	}
	sess := session.Must(session.NewSession(sessConfig))
	dbClient := dynamodb.New(sess)

	type expected struct {
		items Items
		err   errors.Error
	}
	tests := map[string]struct {
		request  events.APIGatewayV2HTTPRequest
		dbClient *dynamodb.DynamoDB
		expected expected
	}{
		"should return stringified results for valid request with AUTO identifier": {
			request: events.APIGatewayV2HTTPRequest{
				QueryStringParameters: map[string]string{
					"identifier": "auto",
					"species":    "Homo-sapiens",
					"term":       "PDCD10",
				},
			},
			dbClient: dbClient,
			expected: expected{
				items: Items{
					Item{
						Fullname: "Programmed cell death protein 10",
						Gene:     "PDCD10",
						Geneid:   11235,
					},
				},
				err: nil,
			},
		},
		"should return stringified results for valid request with specified identifier": {
			request: events.APIGatewayV2HTTPRequest{
				QueryStringParameters: map[string]string{
					"identifier": "gene",
					"species":    "Homo-sapiens",
					"term":       "PDCD10",
				},
			},
			dbClient: dbClient,
			expected: expected{
				items: Items{
					Item{
						Fullname: "Programmed cell death protein 10",
						Gene:     "PDCD10",
						Geneid:   11235,
					},
				},
				err: nil,
			},
		},
		"should return empty stringified array for an unmatched identifier": {
			request: events.APIGatewayV2HTTPRequest{
				QueryStringParameters: map[string]string{
					"identifier": "gene",
					"species":    "Homo-sapiens",
					"term":       "ABC",
				},
			},
			dbClient: dbClient,
			expected: expected{
				items: Items{},
				err:   nil,
			},
		},
		"should return an error for unknown identifier": {
			request: events.APIGatewayV2HTTPRequest{
				QueryStringParameters: map[string]string{
					"identifier": "id",
					"species":    "Homo-sapiens",
					"term":       "PDCD10",
				},
			},
			dbClient: dbClient,
			expected: expected{
				items: Items{},
				err:   errors.New(400, "unrecognized identifier: ID"),
			},
		},
		"should return an error for missing identifier": {
			request: events.APIGatewayV2HTTPRequest{
				QueryStringParameters: map[string]string{
					"identifier": "",
					"species":    "Homo-sapiens",
					"term":       "PDCD10",
				},
			},
			dbClient: dbClient,
			expected: expected{
				items: Items{},
				err:   errors.New(400, "missing identifier type"),
			},
		},
		"should return an error for unknown species": {
			request: events.APIGatewayV2HTTPRequest{
				QueryStringParameters: map[string]string{
					"identifier": "auto",
					"species":    "Humans",
					"term":       "PDCD10",
				},
			},
			dbClient: dbClient,
			expected: expected{
				items: Items{},
				err:   errors.New(400, "unrecognized species: humans"),
			},
		},
		"should return an error for missing species": {
			request: events.APIGatewayV2HTTPRequest{
				QueryStringParameters: map[string]string{
					"identifier": "auto",
					"species":    "",
					"term":       "PDCD10",
				},
			},
			dbClient: dbClient,
			expected: expected{
				items: Items{},
				err:   errors.New(400, "missing species"),
			},
		},
		"should return an error for missing query term": {
			request: events.APIGatewayV2HTTPRequest{
				QueryStringParameters: map[string]string{
					"identifier": "auto",
					"species":    "Homo-sapiens",
					"term":       "",
				},
			},
			dbClient: dbClient,
			expected: expected{
				items: Items{},
				err:   errors.New(400, "missing query term"),
			},
		},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			items, _ := json.Marshal(test.expected.items)
			expectedBody := string(items)

			body, err := Request(test.request, test.dbClient)
			assert.Equal(t, expectedBody, body)
			assert.Equal(t, test.expected.err, err)
		})
	}
}
