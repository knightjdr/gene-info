package extension

import (
	"os"
	"testing"

	"knightjdr/gene-info/api/lambda/internal/errors"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/stretchr/testify/assert"
)

func TestQuery(t *testing.T) {
	sessConfig := &aws.Config{
		Endpoint: aws.String(os.Getenv("TEST_ENDPOINT")),
		Region:   aws.String(os.Getenv("AWS_REGION")),
	}
	sess := session.Must(session.NewSession(sessConfig))
	dbClient := dynamodb.New(sess)

	type expected struct {
		items Items
		err   errors.Error
	}
	tests := map[string]struct {
		fields   Fields
		dbClient *dynamodb.DynamoDB
		expected expected
	}{
		"should get an item found in the database": {
			fields: Fields{
				identifier: "GENE",
				species:    "homosapiens",
				term:       "pdcd10",
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
		"should return an empty list if no item found": {
			fields: Fields{
				identifier: "GENE",
				species:    "homosapiens",
				term:       "abc",
			},
			dbClient: dbClient,
			expected: expected{
				items: Items{},
				err:   nil,
			},
		},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			items, err := query(test.fields, test.dbClient)
			assert.Equal(t, test.expected.items, items)
			assert.Equal(t, test.expected.err, err)
		})
	}
}

func TestMapIdentifier(t *testing.T) {
	type expected struct {
		ids []string
		err errors.Error
	}
	tests := map[string]struct {
		fields   Fields
		table    string
		expected expected
	}{
		"should get single item by GENE": {
			fields: Fields{
				identifier: "GENE",
				species:    "homosapiens",
				term:       "pdcd10",
			},
			table: "gix-identifiers",
			expected: expected{
				ids: []string{"q9bul8"},
				err: nil,
			},
		},
		"should get single item by UNIPROT": {
			fields: Fields{
				identifier: "UNIPROT",
				species:    "homosapiens",
				term:       "q9bul8",
			},
			table: "gix-identifiers",
			expected: expected{
				ids: []string{"q9bul8"},
				err: nil,
			},
		},
		"should get multiple items by GENE": {
			fields: Fields{
				identifier: "GENE",
				species:    "homosapiens",
				term:       "mst1",
			},
			table: "gix-identifiers",
			expected: expected{
				ids: []string{"p26927", "q13043"},
				err: nil,
			},
		},
		"should return empty list if no item found": {
			fields: Fields{
				identifier: "GENE",
				species:    "homosapiens",
				term:       "xxxx",
			},
			table: "gix-identifiers",
			expected: expected{
				ids: []string{},
				err: nil,
			},
		},
	}

	sessConfig := &aws.Config{
		Endpoint: aws.String(os.Getenv("TEST_ENDPOINT")),
		Region:   aws.String(os.Getenv("AWS_REGION")),
	}
	sess := session.Must(session.NewSession(sessConfig))
	dbClient := dynamodb.New(sess)

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			ids, err := mapIdentifier(test.fields, dbClient)
			assert.Equal(t, test.expected.ids, ids)
			assert.Equal(t, test.expected.err, err)
		})
	}
}

func TestGetItems(t *testing.T) {
	type expected struct {
		items Items
		err   errors.Error
	}
	tests := map[string]struct {
		ids      []string
		expected expected
	}{
		"should get single item": {
			ids: []string{"q9bul8"},
			expected: expected{
				items: Items{
					Item{
						Fullname: "Programmed cell death protein 10",
						Geneid:   11235,
						Gene:     "PDCD10",
					},
				},
				err: nil,
			},
		},
		"should get multiple items": {
			ids: []string{"p26927", "q13043"},
			expected: expected{
				items: Items{
					Item{
						Fullname: "Serine/threonine-protein kinase 4",
						Geneid:   6789,
						Gene:     "STK4",
					},
					Item{
						Fullname: "Hepatocyte growth factor-like protein",
						Geneid:   4485,
						Gene:     "MST1",
					},
				},
				err: nil,
			},
		},
		"should return empty list for missing item": {
			ids: []string{"q00001"},
			expected: expected{
				items: Items{},
				err:   nil,
			},
		},
	}

	sessConfig := &aws.Config{
		Endpoint: aws.String(os.Getenv("TEST_ENDPOINT")),
		Region:   aws.String(os.Getenv("AWS_REGION")),
	}
	sess := session.Must(session.NewSession(sessConfig))
	dbClient := dynamodb.New(sess)

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			items, err := getItems(test.ids, dbClient)
			assert.Equal(t, test.expected.items, items)
			assert.Equal(t, test.expected.err, err)
		})
	}
}
