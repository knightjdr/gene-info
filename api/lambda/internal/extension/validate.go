package extension

import (
	"fmt"
	"knightjdr/gene-info/api/lambda/internal/errors"
	"knightjdr/gene-info/api/lambda/internal/utils"
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
	"salmonellatyphimuriumlt2",
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

func validateFields(fields Fields) (Fields, errors.Error) {
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

func validateIdentifier(identifier string) (string, errors.Error) {
	if identifier == "" {
		return "", errors.New(400, "missing identifier type")
	}
	if !utils.Contains(availableIdentifiers, identifier) {
		return "", errors.New(400, fmt.Sprintf("unrecognized identifier: %s", identifier))
	}

	return identifier, nil
}

func validateSpecies(species string) (string, errors.Error) {
	if species == "" {
		return "", errors.New(400, "missing species")
	}
	if !utils.Contains(availableSpecies, species) {
		return "", errors.New(400, fmt.Sprintf("unrecognized species: %s", species))
	}
	return species, nil
}

func validateTerm(term string) (string, errors.Error) {
	if term == "" {
		return "", errors.New(400, fmt.Sprintf("missing query term"))
	}
	return term, nil
}
