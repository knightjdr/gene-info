package response

import (
	"errors"

	custom_errors "knightjdr/gene-info/api-aws/lambda/internal/errors"
)

// StatusCode returns the HTTP status code for the given error.
func StatusCode(err custom_errors.Error) (int, error) {
	if err != nil {
		return err.Code, errors.New(err.Message)
	}
	return 200, nil
}
