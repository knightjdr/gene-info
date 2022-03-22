package extension

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGetIDentifier(t *testing.T) {
	tests := map[string]struct {
		identifier string
		species    string
		term       string
		expected   string
	}{
		"auto":         {identifier: "auto", species: "HomoSapiens", term: "ENSG00000114209", expected: "ensembl-gene"},
		"ensembl gene": {identifier: "ensembl-gene", species: "HomoSapiens", term: "ENSG00000114209", expected: "ensembl-gene"},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			fields := Fields{identifier: test.identifier, species: test.species, term: test.term}
			actual := getIdentifier(fields)
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
		"ensembl gene (Homo sapiens)":                 {species: "HomoSapiens", term: "ENSG00000114209", expected: "ensembl-gene"},
		"ensembl gene (Danio rerio)":                  {species: "DanioRerio", term: "ENSDARG00000114209", expected: "ensembl-gene"},
		"ensembl protein (Homo sapiens)":              {species: "HomoSapiens", term: "ENSP00000376506", expected: "ensembl-protein"},
		"ensembl protein (Danio rerio)":               {species: "DanioRerio", term: "ENSDARP00000376506", expected: "ensembl-protein"},
		"gene symbol (PDCD10)":                        {species: "HomoSapiens", term: "PDCD10", expected: "gene"},
		"gene symbol (EIF4EBP1)":                      {species: "HomoSapiens", term: "EIF4EBP1", expected: "gene"},
		"gene id":                                     {species: "HomoSapiens", term: "11235", expected: "geneid"},
		"locus (Saccharomyces cerevisiae)":            {species: "SaccharomycesCerevisiae", term: "YGL190C", expected: "locus"},
		"locus intepreteted as gene in Homo sapiens ": {species: "HomoSapiens", term: "YGL190C", expected: "gene"},
		"nextprot Q type":                             {species: "HomoSapiens", term: "NX_Q9BUL8", expected: "nextprot"},
		"nextprot other type":                         {species: "HomoSapiens", term: "NX_A2BC19", expected: "nextprot"},
		"nextprot long type":                          {species: "HomoSapiens", term: "NX_A0A022YWF9", expected: "nextprot"},
		"orf (6 character Drosophila melanogaster)":   {species: "DrosophilaMelanogaster", term: "CG1217", expected: "orf"},
		"orf (7 character Drosophila melanogaster)":   {species: "DrosophilaMelanogaster", term: "CG12217", expected: "orf"},
		"orf (Caenorhabditis elegans)":                {species: "CaenorhabditisElegans", term: "ZC395.2", expected: "orf"},
		"orf (wp suffix Caenorhabditis elegans)":      {species: "CaenorhabditisElegans", term: "Y46C8AL.9a:wp261", expected: "orf"},
		"orf interpreted as gene in Homo sapiens":     {species: "HomoSapiens", term: "CG12217", expected: "gene"},
		"refseq protein":                              {species: "HomoSapiens", term: "NP_009148", expected: "refseq"},
		"refseq gene":                                 {species: "HomoSapiens", term: "NM_007217", expected: "refseq"},
		"refseq xp":                                   {species: "HomoSapiens", term: "XP_005247144", expected: "refseq"},
		"refseq xm":                                   {species: "HomoSapiens", term: "XM_005247087", expected: "refseq"},
		"uniprot Q type":                              {species: "HomoSapiens", term: "Q9BUL8", expected: "uniprot"},
		"uniprot other type":                          {species: "HomoSapiens", term: "A2BC19", expected: "uniprot"},
		"uniprot long type":                           {species: "HomoSapiens", term: "A0A022YWF9", expected: "uniprot"},
		"wormbase":                                    {species: "CaenorhabditisElegans", term: "WBGene00007561", expected: "wormbase"},
	}

	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			actual := detectIdentifier(test.term, test.species)
			assert.Equal(t, test.expected, actual)
		})
	}
}
