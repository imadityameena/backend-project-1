// A custom error class for handling API-related errors in a structured way
class ApiError extends Error {
  constructor(
    statuscode,                      // HTTP status code (e.g., 400, 404, 500)
    message = "Something went wrong", // Default error message
    errors = [],                     // Array to hold detailed validation or other errors
    stack = ""                       // Optional stack trace (usually for debugging)
  ) {
    super(message); // Call the parent Error class constructor with the message

    this.statuscode = statuscode; // HTTP status code for the error
    this.data = null;             // Keeping it null to match error structure (optional field)
    this.message = message;      // Error message (redefined for clarity, though already in `super`)
    this.success = false;        // Always false for errors
    this.errors = errors;        // Any additional error details

    // If a custom stack trace is provided, use it
    if (stack) {
      this.stack = stack;
    } else {
      // Otherwise, generate and attach the stack trace from where the error was created
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError }
