package response

import (
	"errors"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestStatusCode(t *testing.T) {
	tests := map[string]struct {
		err      error
		expected int
	}{
		"nil error":     {err: nil, expected: 200},
		"non-nil error": {err: errors.New("test error"), expected: 400},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			actual := StatusCode(test.err)
			assert.Equal(t, test.expected, actual)
		})
	}
}
