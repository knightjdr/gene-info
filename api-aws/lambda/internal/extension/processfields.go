package extension

import (
	"regexp"
	"strconv"
	"strings"
)

func processFields(fields Fields) Fields {
	// If the input identifier is AUTO, the identifier needs to be determined.
	// NEXTPROT is simply a special case of UNIPROT, and so gets changed to that type.
	// Query terms also need to be further parsed for some identifiers.
	identifier := processIdentifier(fields)
	return Fields{
		identifier: identifier,
		species:    fields.species,
		term:       processTerm(fields.term, identifier),
	}
}

func processIdentifier(fields Fields) string {
	if fields.identifier == "AUTO" {
		return detectIdentifier(fields.term, fields.species)
	}
	if fields.identifier == "NEXTPROT" {
		return "UNIPROT"
	}
	return fields.identifier
}

var ensgRe = regexp.MustCompile(`(?i)^ens[a-z]*g\d{11}$`)
var enspRe = regexp.MustCompile(`(?i)^ens[a-z]*p\d{11}$`)
var nextprotRe = regexp.MustCompile(`(?i)^nx_[opq][0-9][a-z0-9]{3}[0-9]$|^nx_[a-nr-z][0-9]([a-z][a-z0-9]{2}[0-9]){1,2}$`)
var refseqRe = regexp.MustCompile(`(?i)^\w{2}_`)
var uniprotRe = regexp.MustCompile(`(?i)^[opq][0-9][a-z0-9]{3}[0-9]$|^[a-nr-z][0-9]([a-z][a-z0-9]{2}[0-9]){1,2}$`)

var ceORFRe = regexp.MustCompile(`(?i)^\w+\.\w+(?::wp\d+)?$`)
var ceWBRe = regexp.MustCompile(`(?i)^wbgene\d+$`)
var dmORFRe = regexp.MustCompile(`(?i)^cg\d{4,5}$`)
var scLocusRe = regexp.MustCompile(`(?i)^y\w{6,}$`)

func detectIdentifier(term string, species string) string {
	if ensgRe.MatchString(term) {
		return "ENSEMBLGENE"
	}
	if enspRe.MatchString(term) {
		return "ENSEMBLPROTEIN"
	}
	if nextprotRe.MatchString(term) {
		return "UNIPROT"
	}
	if refseqRe.MatchString(term) {
		return "REFSEQ"
	}
	if uniprotRe.MatchString(term) {
		return "UNIPROT"
	}
	if _, ok := strconv.Atoi(term); ok == nil {
		return "GENEID"
	}

	// Organism specific identifiers.
	if species == "caenorhabditiselegans" && ceORFRe.MatchString(term) {
		return "ORF"
	}
	if species == "caenorhabditiselegans" && ceWBRe.MatchString(term) {
		return "WORMBASE"
	}
	if species == "drosophilamelanogaster" && dmORFRe.MatchString(term) {
		return "ORF"
	}
	if species == "saccharomycescerevisiae" && scLocusRe.MatchString(term) {
		return "LOCUS"
	}

	return "GENE"
}

func processTerm(term string, identifier string) string {
	if identifier == "UNIPROT" {
		return strings.TrimPrefix(term, "nx_")
	}
	if identifier == "REFSEQ" {
		return strings.Split(term, ".")[0]
	}

	return term
}
