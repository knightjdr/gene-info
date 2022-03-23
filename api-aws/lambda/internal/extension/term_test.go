package extension

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestParseStringID(t *testing.T) {
	tests := map[string]struct {
		identifier string
		term       string
		expected   interface{}
	}{
		"gene returned as string":            {identifier: "gene", term: "PDCD10", expected: "pdcd10"},
		"whitespace trimmed":                 {identifier: "gene", term: " PDCD10 ", expected: "pdcd10"},
		"geneid returned as string":          {identifier: "geneid", term: "1234", expected: "1234"},
		"nextprot converted to uniprot":      {identifier: "nextprot", term: "NX_Q9BUL8", expected: "q9bul8"},
		"refseq should have version removed": {identifier: "refseq", term: "NM_001234.2", expected: "nm_001234"},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			actual := parseTerm(test.term, test.identifier)
			assert.Equal(t, test.expected, actual)
		})
	}
}
