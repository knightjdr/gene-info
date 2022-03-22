package extension

import (
	"regexp"
	"strconv"
)

var ensgRe = regexp.MustCompile(`(?i)^ENS[A-Z]*G\d{11}$`)
var enspRe = regexp.MustCompile(`(?i)^ENS[A-Z]*P\d{11}$`)
var nextprotRe = regexp.MustCompile(`(?i)^NX_[OPQ][0-9][A-Z0-9]{3}[0-9]$|^NX_[A-NR-Z][0-9]([A-Z][A-Z0-9]{2}[0-9]){1,2}$`)
var refseqRe = regexp.MustCompile(`(?i)^\w{2}_`)
var uniprotRe = regexp.MustCompile(`(?i)^[OPQ][0-9][A-Z0-9]{3}[0-9]$|^[A-NR-Z][0-9]([A-Z][A-Z0-9]{2}[0-9]){1,2}$`)

var ceORFRe = regexp.MustCompile(`(?i)^\w+\.\w+(?::wp\d+)?$`)
var ceWBRe = regexp.MustCompile(`(?i)^WBGene\d+$`)
var dmORFRe = regexp.MustCompile(`(?i)^CG\d{4,5}$`)
var scLocusRe = regexp.MustCompile(`(?i)^Y\w{6,}$`)

func getIdentifier(fields Fields) string {
	if fields.identifier != "auto" {
		return fields.identifier
	}
	return detectIdentifier(fields.term, fields.species)
}

func detectIdentifier(term string, species string) string {
	if ensgRe.MatchString(term) {
		return "ensembl-gene"
	}
	if enspRe.MatchString(term) {
		return "ensembl-protein"
	}
	if nextprotRe.MatchString(term) {
		return "nextprot"
	}
	if refseqRe.MatchString(term) {
		return "refseq"
	}
	if uniprotRe.MatchString(term) {
		return "uniprot"
	}
	if _, ok := strconv.Atoi(term); ok == nil {
		return "geneid"
	}

	// Organism specific identifiers.
	if species == "CaenorhabditisElegans" && ceORFRe.MatchString(term) {
		return "orf"
	}
	if species == "CaenorhabditisElegans" && ceWBRe.MatchString(term) {
		return "wormbase"
	}
	if species == "DrosophilaMelanogaster" && dmORFRe.MatchString(term) {
		return "orf"
	}
	if species == "SaccharomycesCerevisiae" && scLocusRe.MatchString(term) {
		return "locus"
	}

	return "gene"
}
