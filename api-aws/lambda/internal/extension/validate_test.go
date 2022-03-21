package extension

import (
	"errors"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestValidateFields(t *testing.T) {
	type expected struct {
		fields Fields
		err    error
	}
	tests := map[string]struct {
		fields   Fields
		expected expected
	}{
		"missing identifier": {
			fields: Fields{identifier: "", species: "Homo sapiens", term: "ABC123"},
			expected: expected{
				fields: Fields{identifier: "", species: "Homo sapiens", term: "ABC123"},
				err:    errors.New("missing identifier"),
			},
		},
		"missing species": {
			fields: Fields{identifier: "gene", species: "", term: "ABC123"},
			expected: expected{
				fields: Fields{identifier: "gene", species: "", term: "ABC123"},
				err:    errors.New("missing species"),
			},
		},
		"missing term": {
			fields: Fields{identifier: "gene", species: "Homo sapiens", term: ""},
			expected: expected{
				fields: Fields{identifier: "gene", species: "Homo sapiens", term: ""},
				err:    errors.New("missing query term"),
			},
		},
		"valid fields": {
			fields: Fields{identifier: "gene", species: "Homo sapiens", term: "ABC123"},
			expected: expected{
				fields: Fields{identifier: "gene", species: "Homo sapiens", term: "ABC123"},
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
		err   error
	}
	tests := map[string]struct {
		identifier string
		expected   expected
	}{
		"missing identifier": {identifier: "", expected: expected{value: "", err: errors.New("missing identifier")}},
		"invalid identifier": {identifier: "unknown", expected: expected{value: "", err: errors.New("unrecognized identifier")}},
		"valid identifier":   {identifier: "gene", expected: expected{value: "gene", err: nil}},
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
		err   error
	}
	tests := map[string]struct {
		species  string
		expected expected
	}{
		"missing species": {species: "", expected: expected{value: "", err: errors.New("missing species")}},
		"invalid species": {species: "unknown", expected: expected{value: "", err: errors.New("unrecognized species")}},
		"valid species":   {species: "Homo sapiens", expected: expected{value: "Homo sapiens", err: nil}},
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
		err   error
	}
	tests := map[string]struct {
		term     string
		expected expected
	}{
		"missing term": {term: "", expected: expected{value: "", err: errors.New("missing query term")}},
		"valid term":   {term: "ABC123", expected: expected{value: "ABC123", err: nil}},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			value, err := validateTerm(test.term)
			assert.Equal(t, test.expected.value, value)
			assert.Equal(t, test.expected.err, err)
		})
	}
}
