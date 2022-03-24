package extension

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestProcessFields(t *testing.T) {
	tests := map[string]struct {
		fields   Fields
		expected Fields
	}{
		"should return fields as is that need no processing": {
			fields: Fields{
				identifier: "GENEID",
				species:    "homosapiens",
				term:       "1234",
			},
			expected: Fields{
				identifier: "GENEID",
				species:    "homosapiens",
				term:       "1234",
			},
		},
		"should detect identifier": {
			fields: Fields{
				identifier: "AUTO",
				species:    "homosapiens",
				term:       "1234",
			},
			expected: Fields{
				identifier: "GENEID",
				species:    "homosapiens",
				term:       "1234",
			},
		},
		"should convert NEXTPROT and proccess query term": {
			fields: Fields{
				identifier: "NEXTPROT",
				species:    "homosapiens",
				term:       "nx_q9bul8",
			},
			expected: Fields{
				identifier: "UNIPROT",
				species:    "homosapiens",
				term:       "q9bul8",
			},
		},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			actual := processFields(test.fields)
			assert.Equal(t, test.expected, actual)
		})
	}
}

func TestProcessIdentifier(t *testing.T) {
	tests := map[string]struct {
		fields   Fields
		expected string
	}{
		"should detect identifier for AUTO": {
			fields: Fields{
				identifier: "AUTO",
				species:    "homosapiens",
				term:       "ensg00000114209",
			},
			expected: "ENSEMBLGENE",
		},
		"should convert NEXTPROT to UNIPROT": {
			fields: Fields{
				identifier: "NEXTPROT",
				species:    "homosapiens",
				term:       "nx_q9bul8",
			},
			expected: "UNIPROT",
		},
		"should return input identifier for other types": {
			fields: Fields{
				identifier: "ENSEMBLGENE",
				species:    "homosapiens",
				term:       "ensg00000114209",
			},
			expected: "ENSEMBLGENE",
		},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			actual := processIdentifier(test.fields)
			assert.Equal(t, test.expected, actual)
		})
	}
}

func TestDetectIdentifier(t *testing.T) {
	tests := map[string]struct {
		species  string
		term     string
		expected string
	}{
		"should detect ENSEMBLGENE (homosapiens)":                  {species: "homosapiens", term: "ensg00000114209", expected: "ENSEMBLGENE"},
		"should detect ENSEMBLGENE (daniorerio)":                   {species: "daniorerio", term: "ensdarg00000114209", expected: "ENSEMBLGENE"},
		"should detect ensembl protein (homosapiens)":              {species: "homosapiens", term: "ensp00000376506", expected: "ENSEMBLPROTEIN"},
		"should detect ensembl protein (daniorerio)":               {species: "daniorerio", term: "ensdarp00000376506", expected: "ENSEMBLPROTEIN"},
		"should detect GENE (pdcd10)":                              {species: "homosapiens", term: "pdcd10", expected: "GENE"},
		"should detect GENE (eif4ebp1)":                            {species: "homosapiens", term: "eif4ebp1", expected: "GENE"},
		"should detect GENEID":                                     {species: "homosapiens", term: "11235", expected: "GENEID"},
		"should detect LOCUS (saccharomycescerevisiae)":            {species: "saccharomycescerevisiae", term: "ygl190c", expected: "LOCUS"},
		"should detect LOCUS intepreteted as GENE in homosapiens ": {species: "homosapiens", term: "ygl190c", expected: "GENE"},
		"should detect NEXTPROT Q type as UNIPROT":                 {species: "homosapiens", term: "nx_q9bul8", expected: "UNIPROT"},
		"should detect NEXTPROT other type as UNIPROT":             {species: "homosapiens", term: "nx_a2bc19", expected: "UNIPROT"},
		"should detect NEXTPROT long type as UNIPROT":              {species: "homosapiens", term: "nx_a0a022ywf9", expected: "UNIPROT"},
		"should detect ORF (6 character drosophilamelanogaster)":   {species: "drosophilamelanogaster", term: "cg1217", expected: "ORF"},
		"should detect ORF (7 character drosophilamelanogaster)":   {species: "drosophilamelanogaster", term: "cg12217", expected: "ORF"},
		"should detect ORF (caenorhabditiselegans)":                {species: "caenorhabditiselegans", term: "zc395.2", expected: "ORF"},
		"should detect ORF (wp suffix caenorhabditiselegans)":      {species: "caenorhabditiselegans", term: "y46c8al.9a:wp261", expected: "ORF"},
		"should detect ORF interpreted as GENE in homosapiens":     {species: "homosapiens", term: "cg12217", expected: "GENE"},
		"should detect REFSEQ protein":                             {species: "homosapiens", term: "np_009148", expected: "REFSEQ"},
		"should detect REFSEQ gene":                                {species: "homosapiens", term: "nm_007217", expected: "REFSEQ"},
		"should detect REFSEQ xp":                                  {species: "homosapiens", term: "xp_005247144", expected: "REFSEQ"},
		"should detect REFSEQ xm":                                  {species: "homosapiens", term: "xm_005247087", expected: "REFSEQ"},
		"should detect UNIPROT Q type":                             {species: "homosapiens", term: "q9bul8", expected: "UNIPROT"},
		"should detect UNIPROT other type":                         {species: "homosapiens", term: "a2bc19", expected: "UNIPROT"},
		"should detect UNIPROT long type":                          {species: "homosapiens", term: "a0a022ywf9", expected: "UNIPROT"},
		"should detect WORMBASE":                                   {species: "caenorhabditiselegans", term: "wbgene00007561", expected: "WORMBASE"},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			actual := detectIdentifier(test.term, test.species)
			assert.Equal(t, test.expected, actual)
		})
	}
}

func TestProcessTerm(t *testing.T) {
	tests := map[string]struct {
		identifier string
		term       string
		expected   interface{}
	}{
		"should return query term as is that needs no processing": {identifier: "GENEID", term: "1234", expected: "1234"},
		"should remove NEXTPROT prefix from UNIPROT terms":        {identifier: "UNIPROT", term: "nx_q9bul8", expected: "q9bul8"},
		"should remove version from REFSEQ":                       {identifier: "REFSEQ", term: "nm_001234.2", expected: "nm_001234"},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			actual := processTerm(test.term, test.identifier)
			assert.Equal(t, test.expected, actual)
		})
	}
}
