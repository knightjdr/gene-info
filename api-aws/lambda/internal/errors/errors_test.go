package errors

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestError(t *testing.T) {
	err := New(400, "Bad Request")
	assert.Equal(t, 400, err.Code)
	assert.Equal(t, "Bad Request", err.Message)
}
