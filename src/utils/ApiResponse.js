// A class to structure API responses in a consistent format
class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode; // HTTP status code (e.g., 200, 404, 500)
    this.data = data;             // The actual data returned from the API
    this.message = message;       // Optional message, default is "Success"
    this.success = statusCode < 400; // Auto-set success: true if status code is less than 400
  }
}

export { ApiResponse }
