// A class to format API responses in a clean and consistent way
class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode; // The HTTP status code (like 200 OK, 404 Not Found, etc.)
    this.data = data;             // The main data you want to send in the response
    this.message = message;       // Optional message (default is "Success")
    this.success = statusCode < 400; // success is true if statusCode is less than 400 (meaning no error)
  }
}

// Exporting the ApiResponse class so it can be used in other files
export { ApiResponse }
