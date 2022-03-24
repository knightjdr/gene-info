package extension

import (
	"testing"

	"github.com/aws/aws-lambda-go/events"
	"github.com/stretchr/testify/assert"
)

func TestGetFields(t *testing.T) {
	tests := map[string]struct {
		identifier string
		species    string
		term       string
		expected   Fields
	}{
		"should return fields": {
			identifier: "symbol",
			species:    "Homo-sapiens",
			term:       "ABC",
			expected: Fields{
				identifier: "SYMBOL",
				species:    "homosapiens",
				term:       "abc",
			},
		},
		"should handle missing identifier": {
			identifier: "",
			species:    "Homo-sapiens",
			term:       "ABC",
			expected: Fields{
				identifier: "",
				species:    "homosapiens",
				term:       "abc",
			},
		},
		"should handle missing species": {
			identifier: "symbol",
			species:    "",
			term:       "ABC",
			expected: Fields{
				identifier: "SYMBOL",
				species:    "",
				term:       "abc",
			},
		},
		"should handle missing term": {
			identifier: "symbol",
			species:    "Homo-sapiens",
			term:       "",
			expected: Fields{
				identifier: "SYMBOL",
				species:    "homosapiens",
				term:       "",
			},
		},
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
			assert.Equal(t, test.expected, actual)
		})
	}
}

func TestParseIdentifier(t *testing.T) {
	tests := map[string]struct {
		identifier string
		expected   string
	}{
		"should make uppercase":          {identifier: "symbol", expected: "SYMBOL"},
		"should remove dashses":          {identifier: "ensembl-gene", expected: "ENSEMBLGENE"},
		"should remove extra whitespace": {identifier: " symbol ", expected: "SYMBOL"},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			actual := parseIdentifier(test.identifier)
			assert.Equal(t, test.expected, actual)
		})
	}
}
func TestParseSpecies(t *testing.T) {
	tests := map[string]struct {
		species  string
		expected string
	}{
		"should remove dashes":                                  {species: "Homo-sapiens", expected: "homosapiens"},
		"should remove brackets":                                {species: "Escherichia-coli-(K12)", expected: "escherichiacolik12"},
		"should remove dashses, brackets and extra white space": {species: " Escherichia-coli-(K12) ", expected: "escherichiacolik12"},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			actual := parseSpecies(test.species)
			assert.Equal(t, test.expected, actual)
		})
	}
}

func ParseTerm(t *testing.T) {
	tests := map[string]struct {
		term     string
		expected string
	}{
		"should make lowercase":           {term: "ABC", expected: "abc"},
		"should remove extra white space": {term: " ABC ", expected: "abc"},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			actual := parseTerm(test.term)
			assert.Equal(t, test.expected, actual)
		})
	}
}
