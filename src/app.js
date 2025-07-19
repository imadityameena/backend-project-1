import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

// Create an instance of an Express app
const app = express()

// Enable CORS (Cross-Origin Resource Sharing) with:
// - `origin`: the allowed frontend origin, usually from environment variable
// - `credentials: true`: allows cookies and authorization headers to be sent
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

// Middleware to parse incoming JSON payloads (up to 16kb in size)
app.use(express.json({ limit: "16kb" }))

// Middleware to parse URL-encoded form data (also with 16kb limit)
// `extended: true` allows nested objects (rich objects) in form data
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

// Serve static files (like images, CSS, JS) from the "public" directory
app.use(express.static("public"))

// Middleware to parse cookies from the incoming request headers
app.use(cookieParser())

// Export the app instance so it can be used elsewhere (like in your main server file)
export { app }
