package extension

import (
	"errors"
	"knightjdr/gene-info/api-aws/lambda/internal/utils"
)

var availableSpecies = []string{
	"Arabidopsis thaliana",
	"Caenorhabditis elegans",
	"Danio rerio",
	"Dictyostelium discoideum",
	"Drosophila melanogaster",
	"Gallus gallus",
	"Homo sapiens",
	"Mus musculus",
	"Escherichia coli (K12)",
	"Salmonella Typhimurium (LT2)",
	"Saccharomyces cerevisiae",
	"Schizosaccharomyces pombe",
	"Xenopus laevis",
}

var availableIdentifiers = []string{
	"auto",
	"ensembl-gene",
	"ensembl-protein",
	"gene",
	"geneid",
	"locus",
	"nextprot",
	"orf",
	"refseq",
	"uniprot",
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
		return "", errors.New("missing identifier")
	}
	if !utils.Contains(availableIdentifiers, identifier) {
		return "", errors.New("unrecognized identifier")
	}

	return identifier, nil
}

func validateSpecies(species string) (string, error) {
	if species == "" {
		return "", errors.New("missing species")
	}
	if !utils.Contains(availableSpecies, species) {
		return "", errors.New("unrecognized species")
	}
	return species, nil
}

func validateTerm(term string) (string, error) {
	if term == "" {
		return "", errors.New("missing query term")
	}
	return term, nil
}
