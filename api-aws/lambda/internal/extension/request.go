package extension

import "github.com/aws/aws-lambda-go/events"

// Request handles API requests.
func Request(e events.APIGatewayV2HTTPRequest) (string, error) {
	fields := getFields(e)
	fields, err := validateFields(fields)
	if err != nil {
		return "", err
	}

	return "", nil
}
