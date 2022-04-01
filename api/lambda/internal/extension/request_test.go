package extension

import (
	"bytes"
	"encoding/json"
	"knightjdr/gene-info/api/lambda/internal/errors"
	"os"
	"testing"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"github.com/stretchr/testify/assert"
)

func TestRequest(t *testing.T) {
	sessConfig := &aws.Config{
		Endpoint: aws.String(os.Getenv("TEST_ENDPOINT")),
		Region:   aws.String(os.Getenv("AWS_REGION")),
	}
	sess := session.Must(session.NewSession(sessConfig))
	dbClient := dynamodb.New(sess)

	type expected struct {
		items Items
		err   errors.Error
		log   logMessage
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
				log: logMessage{
					Error:      "",
					Identifier: "GENE",
					Known:      true,
					Level:      "info",
					Message:    "",
					Species:    "homosapiens",
					Term:       "",
				},
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
				log: logMessage{
					Error:      "",
					Identifier: "GENE",
					Known:      true,
					Level:      "info",
					Message:    "",
					Species:    "homosapiens",
					Term:       "",
				},
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
				log: logMessage{
					Error:      "",
					Identifier: "GENE",
					Known:      false,
					Level:      "info",
					Message:    "",
					Species:    "homosapiens",
					Term:       "",
				},
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
				log: logMessage{
					Error:      "",
					Identifier: "ID",
					Known:      false,
					Level:      "info",
					Message:    "unrecognized identifier: ID",
					Species:    "homosapiens",
					Term:       "pdcd10",
				},
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
				log: logMessage{
					Error:      "",
					Identifier: "",
					Known:      false,
					Level:      "info",
					Message:    "missing identifier type",
					Species:    "homosapiens",
					Term:       "pdcd10",
				},
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
				log: logMessage{
					Error:      "",
					Identifier: "AUTO",
					Known:      false,
					Level:      "info",
					Message:    "unrecognized species: humans",
					Species:    "humans",
					Term:       "pdcd10",
				},
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
				log: logMessage{
					Error:      "",
					Identifier: "AUTO",
					Known:      false,
					Level:      "info",
					Message:    "missing species",
					Species:    "",
					Term:       "pdcd10",
				},
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
				log: logMessage{
					Error:      "",
					Identifier: "AUTO",
					Known:      false,
					Level:      "info",
					Message:    "missing query term",
					Species:    "homosapiens",
					Term:       "",
				},
			},
		},
	}

	logBuffer := new(bytes.Buffer)
	log.Logger = log.Output(zerolog.SyncWriter(logBuffer))
	t.Cleanup(func() {
		log.Logger = log.Output(os.Stderr)
	})

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			items, _ := json.Marshal(test.expected.items)
			expectedBody := string(items)

			body, err := Request(test.request, test.dbClient)
			actualMessage := logMessage{}
			json.Unmarshal(logBuffer.Bytes(), &actualMessage)

			assert.Equal(t, expectedBody, body)
			assert.Equal(t, test.expected.err, err)
			assert.Equal(t, test.expected.log, actualMessage)

			logBuffer.Reset()
		})
	}
}
