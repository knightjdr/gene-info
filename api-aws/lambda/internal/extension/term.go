package extension

import (
	"strings"
)

func parseTerm(term string, identifier string) string {
	parsed := strings.TrimSpace(term)
	parsed = strings.ToLower(parsed)

	if identifier == "nextprot" {
		return strings.TrimPrefix(parsed, "nx_")
	}
	if identifier == "refseq" {
		return strings.Split(parsed, ".")[0]
	}

	return parsed
}
