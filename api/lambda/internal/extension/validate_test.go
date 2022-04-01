package extension

import (
	"testing"

	"knightjdr/gene-info/api/lambda/internal/errors"

	"github.com/stretchr/testify/assert"
)

func TestValidateFields(t *testing.T) {
	type expected struct {
		fields Fields
		err    errors.Error
	}
	tests := map[string]struct {
		fields   Fields
		expected expected
	}{
		"should return error for missing identifier": {
			fields: Fields{identifier: "", species: "homosapiens", term: "abc"},
			expected: expected{
				fields: Fields{identifier: "", species: "homosapiens", term: "abc"},
				err:    errors.New(400, "missing identifier type"),
			},
		},
		"should return error for missing species": {
			fields: Fields{identifier: "GENE", species: "", term: "abc"},
			expected: expected{
				fields: Fields{identifier: "GENE", species: "", term: "abc"},
				err:    errors.New(400, "missing species"),
			},
		},
		"should return error for missing term": {
			fields: Fields{identifier: "GENE", species: "homosapiens", term: ""},
			expected: expected{
				fields: Fields{identifier: "GENE", species: "homosapiens", term: ""},
				err:    errors.New(400, "missing query term"),
			},
		},
		"should validate fields": {
			fields: Fields{identifier: "GENE", species: "homosapiens", term: "abc"},
			expected: expected{
				fields: Fields{identifier: "GENE", species: "homosapiens", term: "abc"},
				err:    nil,
			},
		},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			fields, err := validateFields(test.fields)
			assert.Equal(t, test.expected.fields, fields)
			assert.Equal(t, test.expected.err, err)
		})
	}
}

func TestValidateIdentifier(t *testing.T) {
	type expected struct {
		value string
		err   errors.Error
	}
	tests := map[string]struct {
		identifier string
		expected   expected
	}{
		"should return error for missing identifier": {identifier: "", expected: expected{value: "", err: errors.New(400, "missing identifier type")}},
		"should return error for invalid identifier": {identifier: "UNKNOWN", expected: expected{value: "", err: errors.New(400, "unrecognized identifier: UNKNOWN")}},
		"should validate identifier":                 {identifier: "GENE", expected: expected{value: "GENE", err: nil}},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			value, err := validateIdentifier(test.identifier)
			assert.Equal(t, test.expected.value, value)
			assert.Equal(t, test.expected.err, err)
		})
	}
}

func TestValidateSpecies(t *testing.T) {
	type expected struct {
		value string
		err   errors.Error
	}
	tests := map[string]struct {
		species  string
		expected expected
	}{
		"should return error for missing species": {species: "", expected: expected{value: "", err: errors.New(400, "missing species")}},
		"should return error for invalid species": {species: "unknown", expected: expected{value: "", err: errors.New(400, "unrecognized species: unknown")}},
		"should validate species":                 {species: "homosapiens", expected: expected{value: "homosapiens", err: nil}},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			value, err := validateSpecies(test.species)
			assert.Equal(t, test.expected.value, value)
			assert.Equal(t, test.expected.err, err)
		})
	}
}

func TestValidateTerm(t *testing.T) {
	type expected struct {
		value string
		err   errors.Error
	}
	tests := map[string]struct {
		term     string
		expected expected
	}{
		"should return error for missing term": {term: "", expected: expected{value: "", err: errors.New(400, "missing query term")}},
		"should validate term":                 {term: "abc", expected: expected{value: "abc", err: nil}},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			value, err := validateTerm(test.term)
			assert.Equal(t, test.expected.value, value)
			assert.Equal(t, test.expected.err, err)
		})
	}
}
