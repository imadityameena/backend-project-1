// Custom class to handle API errors
class ApiError extends Error {
  constructor(
    statuscode,                      // HTTP status code
    message = "Something went wrong", // Default error message
    errors = [],                     // Extra error details
    stack = ""                       // Optional stack trace
  ) {
    super(message);                 // Call base Error class

    this.statuscode = statuscode;  // Set status code
    this.data = null;              // No data on error
    this.message = message;        // Set error message
    this.success = false;          // Always false
    this.errors = errors;          // Save extra errors

    this.stack = stack || Error.captureStackTrace(this, this.constructor); // Stack trace
  }
}

export { ApiError };               // Export the class
