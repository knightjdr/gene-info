package extension

import (
	custom_errors "knightjdr/gene-info/api-aws/lambda/internal/errors"

	"github.com/rs/zerolog"
	"github.com/rs/zerolog/log"
)

func logError(fields Fields, err error, err_message string) {
	log.Err(err).
		Bool("known", false).
		Str("identifier", fields.identifier).
		Str("species", fields.species).
		Str("term", fields.term).
		Msg(err_message)
}

func logInfo(fields Fields, items Items, err custom_errors.Error) {
	var logger zerolog.Logger
	if len(items) > 0 {
		logger = log.With().
			Bool("known", true).
			Logger()
	} else {
		logger = log.With().
			Bool("known", false).
			Logger()
	}

	// The query term only needs to be logged when there is a problem with the request.
	if err != nil {
		logger.Info().
			Str("identifier", fields.identifier).
			Str("species", fields.species).
			Str("term", fields.term).
			Msg(err.Message)
	} else {
		logger.Info().
			Str("identifier", fields.identifier).
			Str("species", fields.species).
			Msg("")
	}
}
