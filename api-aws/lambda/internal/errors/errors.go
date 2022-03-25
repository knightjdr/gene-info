package errors

// Error contains an error message and HTTP status code.
type Error *ErrorP

type ErrorP struct {
	Code    int
	Message string
}

// New returns a pointer to an Error.
func New(code int, message string) Error {
	return &ErrorP{
		Code:    code,
		Message: message,
	}
}
