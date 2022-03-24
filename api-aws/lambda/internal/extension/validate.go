package extension

import (
	"errors"
	"fmt"
	"knightjdr/gene-info/api-aws/lambda/internal/utils"
)

var availableSpecies = []string{
	"arabidopsisthaliana",
	"caenorhabditiselegans",
	"daniorerio",
	"dictyosteliumdiscoideum",
	"drosophilamelanogaster",
	"gallusgallus",
	"homosapiens",
	"musmusculus",
	"escherichiacolik12",
	"salmonellatyphimuriumlT2",
	"saccharomycescerevisiae",
	"schizosaccharomycespombe",
	"xenopuslaevis",
}

var availableIdentifiers = []string{
	"AUTO",
	"ENSEMBLGENE",
	"ENSEMBLPROTEIN",
	"GENE",
	"GENEID",
	"LOCUS",
	"NEXTPROT",
	"ORF",
	"REFSEQ",
	"UNIPROT",
	"WORMBASE",
}

func validateFields(fields Fields) (Fields, error) {
	identifier, err := validateIdentifier(fields.identifier)
	if err != nil {
		return fields, err
	}

	species, err := validateSpecies(fields.species)
	if err != nil {
		return fields, err
	}

	term, err := validateTerm(fields.term)
	if err != nil {
		return fields, err
	}

	return Fields{
		identifier: identifier,
		species:    species,
		term:       term,
	}, nil
}

func validateIdentifier(identifier string) (string, error) {
	if identifier == "" {
		return "", errors.New("missing identifier type")
	}
	if !utils.Contains(availableIdentifiers, identifier) {
		return "", errors.New(fmt.Sprintf("unrecognized identifier: %s", identifier))
	}

	return identifier, nil
}

func validateSpecies(species string) (string, error) {
	if species == "" {
		return "", errors.New("missing species")
	}
	if !utils.Contains(availableSpecies, species) {
		return "", errors.New(fmt.Sprintf("unrecognized species: %s", species))
	}
	return species, nil
}

func validateTerm(term string) (string, error) {
	if term == "" {
		return "", errors.New("missing query term")
	}
	return term, nil
}
