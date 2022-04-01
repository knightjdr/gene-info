package utils

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestContains(t *testing.T) {
	tests := map[string]struct {
		slice    []string
		value    string
		expected bool
	}{
		"slice contains string value":         {slice: []string{"a", "b", "c"}, value: "b", expected: true},
		"slice does not contain string value": {slice: []string{"a", "b", "c"}, value: "d", expected: false},
	}
	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			actual := Contains(test.slice, test.value)
			assert.Equal(t, test.expected, actual)
		})
	}

}
