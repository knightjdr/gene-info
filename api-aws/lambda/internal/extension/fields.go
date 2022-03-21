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
		identifier: e.QueryStringParameters["identifier"],
		species:    parseSpecies(e.QueryStringParameters["species"]),
		term:       e.QueryStringParameters["term"],
	}
	return fields
}

var re = regexp.MustCompile("[\\s()]")

func parseSpecies(species string) string {
	parsed := strings.ReplaceAll(species, "-", " ")
	parsed = strings.Title(parsed)

	parsed = re.ReplaceAllString(parsed, "")
	return parsed
}
