package extension

import (
	"bytes"
	"encoding/json"
	"errors"
	custom_errors "knightjdr/gene-info/api-aws/lambda/internal/errors"
	"os"
	"testing"

	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
	"github.com/stretchr/testify/assert"
)

type logMessage struct {
	Error      string
	Identifier string
	Known      bool
	Level      string
	Message    string
	Species    string
	Term       string
}

func TestLogError(t *testing.T) {
	logBuffer := new(bytes.Buffer)
	log.Logger = log.Output(zerolog.SyncWriter(logBuffer))
	t.Cleanup(func() {
		log.Logger = log.Output(os.Stderr)
	})

	err := errors.New("test error")
	err_message := "error message"
	fields := Fields{
		identifier: "GENE",
		species:    "homosapiens",
		term:       "abc",
	}

	expected := logMessage{
		Error:      "test error",
		Identifier: "GENE",
		Known:      false,
		Level:      "error",
		Message:    "error message",
		Species:    "homosapiens",
		Term:       "abc",
	}

	logError(fields, err, err_message)
	actual := logMessage{}
	json.Unmarshal(logBuffer.Bytes(), &actual)

	assert.Equal(t, expected, actual)
}

func TestLogInfo(t *testing.T) {
	tests := map[string]struct {
		fields   Fields
		items    Items
		err      custom_errors.Error
		expected logMessage
	}{
		"should log query term and message when there is an error": {
			fields: Fields{
				identifier: "GENE",
				species:    "unknown",
				term:       "abc",
			},
			items: nil,
			err:   custom_errors.New(400, "unrecognized species: unknown"),
			expected: logMessage{
				Error:      "",
				Identifier: "GENE",
				Known:      false,
				Level:      "info",
				Message:    "unrecognized species: unknown",
				Species:    "unknown",
				Term:       "abc",
			},
		},
		"should not log query term or message when there is no error": {
			fields: Fields{
				identifier: "GENE",
				species:    "homosapiens",
				term:       "abc",
			},
			items: Items{},
			err:   nil,
			expected: logMessage{
				Error:      "",
				Identifier: "GENE",
				Known:      false,
				Level:      "info",
				Message:    "",
				Species:    "homosapiens",
				Term:       "",
			},
		},
		"should log query is known when there is at least one item": {
			fields: Fields{
				identifier: "GENE",
				species:    "homosapiens",
				term:       "pdcd10",
			},
			items: Items{
				Item{
					Gene:   "PDCD10",
					Geneid: 11235,
				},
			},
			err: nil,
			expected: logMessage{
				Error:      "",
				Identifier: "GENE",
				Known:      true,
				Level:      "info",
				Message:    "",
				Species:    "homosapiens",
				Term:       "",
			},
		},
	}

	logBuffer := new(bytes.Buffer)
	log.Logger = log.Output(zerolog.SyncWriter(logBuffer))
	t.Cleanup(func() {
		log.Logger = log.Output(os.Stderr)
	})

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			logInfo(test.fields, test.items, test.err)
			actual := logMessage{}
			json.Unmarshal(logBuffer.Bytes(), &actual)

			assert.Equal(t, test.expected, actual)
			logBuffer.Reset()
		})
	}
}
