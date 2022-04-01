package extension

import (
	"regexp"
	"strings"

	"github.com/aws/aws-lambda-go/events"
)

type Fields struct {
	identifier string
	species    string
	term       string
}

func getFields(e events.APIGatewayV2HTTPRequest) Fields {
	fields := Fields{
		identifier: parseIdentifier(e.QueryStringParameters["identifier"]),
		species:    parseSpecies(e.QueryStringParameters["species"]),
		term:       parseTerm(e.QueryStringParameters["term"]),
	}
	return fields
}

var reParse = regexp.MustCompile("[\\s()-]")

func parseIdentifier(identifier string) string {
	parsed := strings.TrimSpace(identifier)
	parsed = strings.ToUpper(parsed)
	parsed = reParse.ReplaceAllString(parsed, "")
	return parsed
}

func parseSpecies(species string) string {
	parsed := strings.TrimSpace(species)
	parsed = strings.ToLower(parsed)
	parsed = reParse.ReplaceAllString(parsed, "")
	return parsed
}

func parseTerm(term string) string {
	parsed := strings.TrimSpace(term)
	parsed = strings.ToLower(parsed)
	return parsed
}
