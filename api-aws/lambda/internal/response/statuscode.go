package response

// StatusCode returns the HTTP status code for the given error.
func StatusCode(err error) int {
	if err != nil {
		return 400
	}
	return 200
}
