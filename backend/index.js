const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

// CORS setup
app.use(cors({
    origin: "https://nestech-e-commerce-store-frontend.vercel.app" || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
}));
app.get('/api', (req, res) => {
  // Your API logic here
  res.status(200).json({ message: 'Product is running!' });
});
app.options('*', cors()); 
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
