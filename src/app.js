import express from "express"           // Express framework
import cors from "cors"                 // For cross-origin requests
import cookieParser from "cookie-parser" // To parse cookies

const app = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN,     // Allow requests from this origin
  credentials: true                    // Send cookies with requests
}))

app.use(express.json({ limit: "16kb" }))       // Parse JSON (limit: 16kb)
app.use(express.urlencoded({ extended: true, limit: "16kb" })) // Parse form data
app.use(express.static("public"))              // Serve static files
app.use(cookieParser())                        // Parse cookies


//router import

import userRouter from './routes/user.routes.js'


//routes declaration

app.use("/api/v1/users", userRouter)


//http://localhost:8000/api/v1/users/register

export { app }
