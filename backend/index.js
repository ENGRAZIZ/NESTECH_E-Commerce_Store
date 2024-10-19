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
    methods: ['GET', 'POST','OPTIONS'],
    header: { "Access-Control-Allow-Origin":"https://nestech-e-commerce-store-frontend.vercel.app"},
    credentials: true,
}));
export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://nestech-e-commerce-store-frontend.vercel.app'); // Allow only your frontend domain
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allowed methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
  
  // Handle preflight requests (OPTIONS)
  if (req.method === 'OPTIONS') {
    // Respond to preflight request
    res.status(200).end();
    return;
  }

  // Handle actual request logic here
  if (req.method === 'POST') {
    // Example: Handle sign-in
    res.status(200).json({ message: 'Signin successful' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}


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
