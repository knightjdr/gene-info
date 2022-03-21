package extension

import (
	"testing"

	"github.com/aws/aws-lambda-go/events"
	"github.com/stretchr/testify/assert"
)

func TestGetFields(t *testing.T) {
	type expected struct {
		species string
	}
	tests := map[string]struct {
		identifier string
		species    string
		term       string
		expected   expected
	}{
		"all fields valid":   {identifier: "symbol", species: "Homo-sapiens", term: "ABC", expected: expected{species: "HomoSapiens"}},
		"missing identifier": {identifier: "", species: "Homo-sapiens", term: "ABC", expected: expected{species: "HomoSapiens"}},
		"missing species":    {identifier: "symbol", species: "", term: "ABC", expected: expected{species: ""}},
		"missing term":       {identifier: "symbol", species: "Homo-sapiens", term: "", expected: expected{species: "HomoSapiens"}},
	}
	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			e := events.APIGatewayV2HTTPRequest{
				QueryStringParameters: map[string]string{
					"identifier": test.identifier,
					"species":    test.species,
					"term":       test.term,
				},
			}
			actual := getFields(e)
			assert.Equal(t, test.identifier, actual.identifier)
			assert.Equal(t, test.expected.species, actual.species)
			assert.Equal(t, test.term, actual.term)
		})
	}
}

func TestParseSpecies(t *testing.T) {
	tests := map[string]struct {
		species  string
		expected string
	}{
		"species with only dashes": {species: "Homo-sapiens", expected: "HomoSapiens"},
		"species with brackets":    {species: "Escherichia coli (K12)", expected: "EscherichiaColiK12"},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			actual := parseSpecies(test.species)
			assert.Equal(t, test.expected, actual)
		})
	}
}
