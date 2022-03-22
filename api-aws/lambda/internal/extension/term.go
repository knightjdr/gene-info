package extension

import (
	"strings"
)

func parseTerm(term string, identifier string) string {
	trimmed := strings.TrimSpace(term)

	if identifier == "nextprot" {
		return strings.TrimPrefix(trimmed, "NX_")
	}
	if identifier == "refseq" {
		return strings.Split(trimmed, ".")[0]
	}

	return trimmed
}
