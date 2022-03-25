package response

import (
	"errors"
	"testing"

	custom_errors "knightjdr/gene-info/api-aws/lambda/internal/errors"

	"github.com/stretchr/testify/assert"
)

func TestStatusCode(t *testing.T) {
	type expected struct {
		code    int
		message error
	}
	tests := map[string]struct {
		err      custom_errors.Error
		expected expected
	}{
		"nil error": {
			err: nil,
			expected: expected{
				code:    200,
				message: nil,
			},
		},
		"non-nil error": {
			err: custom_errors.New(400, "test error"),
			expected: expected{
				code:    400,
				message: errors.New("test error"),
			},
		},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			code, err := StatusCode(test.err)
			assert.Equal(t, test.expected.code, code)
			assert.Equal(t, test.expected.message, err)
		})
	}
}
