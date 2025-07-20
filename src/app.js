// Import required packages
import express from "express"         // Main framework for building APIs
import cors from "cors"               // Middleware to allow frontend-backend communication
import cookieParser from "cookie-parser" // Middleware to read cookies from requests

// Create an Express app instance
const app = express()

// Enable Cross-Origin Resource Sharing (CORS)
// This allows the frontend (from another domain or port) to talk to this backend
app.use(cors({
  origin: process.env.CORS_ORIGIN,  // Only allow requests from this origin (usually your frontend URL)
  credentials: true                 // Allow cookies, tokens, or headers to be sent in requests
}))

// Middleware to accept JSON data from requests
// Limit is set to 16kb to avoid huge data uploads
app.use(express.json({ limit: "16kb" }))

// Middleware to accept form submissions (URL-encoded data)
// `extended: true` allows form data to contain nested objects
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

// Serve static files (images, HTML, CSS, JS) from the "public" folder
app.use(express.static("public"))

// Middleware to read cookies from incoming HTTP requests
app.use(cookieParser())

// Export the app so it can be used in another file like index.js or server.js
export { app }
