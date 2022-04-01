package extension

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestOrderItems(t *testing.T) {
	tests := map[string]struct {
		items    Items
		term     string
		expected Items
	}{
		"should return empty items list": {
			items:    Items{},
			term:     "abc123",
			expected: Items{},
		},
		"should return single item list": {
			items: Items{
				Item{
					Geneid: 11235,
					Gene:   "PDCD10",
				},
			},
			term: "pdcd10",
			expected: Items{
				Item{
					Geneid: 11235,
					Gene:   "PDCD10",
				},
			},
		},
		"should order multiple items so that an exact GENE match is swapped to the first index": {
			items: Items{
				Item{
					Geneid: 6789,
					Gene:   "STK4",
					Synonyms: []string{
						"KRS2",
						"MST1",
						"YSK3",
					},
				},
				Item{
					Geneid: 1234,
					Gene:   "ABC",
					GeneAlternateSymbols: []string{
						"MST1",
					},
				},
				Item{
					Geneid: 4485,
					Gene:   "MST1",
				},
			},
			term: "mst1",
			expected: Items{
				Item{
					Geneid: 4485,
					Gene:   "MST1",
				},
				Item{
					Geneid: 1234,
					Gene:   "ABC",
					GeneAlternateSymbols: []string{
						"MST1",
					},
				},
				Item{
					Geneid: 6789,
					Gene:   "STK4",
					Synonyms: []string{
						"KRS2",
						"MST1",
						"YSK3",
					},
				},
			},
		},
		"should leave an exact GENE match in first": {
			items: Items{
				Item{
					Geneid: 4485,
					Gene:   "MST1",
				},
				Item{
					Geneid: 6789,
					Gene:   "STK4",
					Synonyms: []string{
						"KRS2",
						"MST1",
						"YSK3",
					},
				},
				Item{
					Geneid: 1234,
					Gene:   "ABC",
					GeneAlternateSymbols: []string{
						"MST1",
					},
				},
			},
			term: "mst1",
			expected: Items{
				Item{
					Geneid: 4485,
					Gene:   "MST1",
				},
				Item{
					Geneid: 6789,
					Gene:   "STK4",
					Synonyms: []string{
						"KRS2",
						"MST1",
						"YSK3",
					},
				},
				Item{
					Geneid: 1234,
					Gene:   "ABC",
					GeneAlternateSymbols: []string{
						"MST1",
					},
				},
			},
		},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			orderItems(test.term, &test.items)
			assert.Equal(t, test.expected, test.items)
		})
	}
}
