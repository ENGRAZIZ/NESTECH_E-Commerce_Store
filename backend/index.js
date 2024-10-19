const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

// CORS setup
app.use(cors({
    origion:'https://nestech-e-commerce-store.vercel.app/api/signin' || 'http:localhost:3000',
    credentials: true, // this will disable CORS checks    // additional options...
});
console.log("server is running")
// Middleware setup
app.use(express.json());
app.use(cookieParser());

// Routes setup
app.use("/api", router);

// Port setup
const PORT = process.env.PORT || 8000;

// Database connection and server startup
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log error stack
    res.status(500).json({
        message: 'Internal Server Error',
        error: true,
        success: false,
    });
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log("Shutting down server...");
    mongoose.connection.close(() => {
        console.log("Database connection closed.");
        process.exit(0);
    });
});
