// A custom class to handle API errors in a consistent way
class ApiError extends Error {
  constructor(
    statuscode,                      // HTTP status code (like 400, 404, 500)
    message = "Something went wrong", // Default error message if none is given
    errors = [],                     // Optional list of extra error details (like validation errors)
    stack = ""                       // Optional stack trace (for debugging)
  ) {
    super(message); // Call the built-in Error class with the message

    this.statuscode = statuscode; // Set the HTTP status code
    this.data = null;             // Set data to null (since it's an error)
    this.message = message;      // Set the error message again (for clarity)
    this.success = false;        // Always false, since this is an error
    this.errors = errors;        // Save any extra error info (e.g. invalid fields)

    // If a custom stack trace is given, use it
    if (stack) {
      this.stack = stack;
    } else {
      // Otherwise, automatically generate a stack trace
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

// Export the ApiError class so it can be used elsewhere
export { ApiError }
