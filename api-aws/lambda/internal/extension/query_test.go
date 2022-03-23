package extension

import (
	"testing"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/stretchr/testify/assert"
)

func TestGetGene(t *testing.T) {
	fields := Fields{
		identifier: "gene",
		species:    "gixTest",
		term:       "pdcd10",
	}

	sessConfig := &aws.Config{
		Endpoint: aws.String("http://localhost:8000"),
		Region:   aws.String("ca-central-1"),
	}
	sess := session.Must(session.NewSession(sessConfig))
	dbClient := dynamodb.New(sess)

	expected := Items{
		Item{
			GeneKey: "pdcd10",
			Gene:    "PDCD10",
		},
	}

	items, err := getGene(fields, dbClient)
	assert.NoError(t, err)
	assert.Len(t, items, len(expected))
	assert.Equal(t, expected[0].Gene, items[0].Gene)
}
