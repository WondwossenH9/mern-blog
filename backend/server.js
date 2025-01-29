const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
const connectDB = require("./config/db");


const app = express();

// Middleware
app.use(express.json());
app.use(cors());

console.log("MONGO_URI:", process.env.MONGO_URI); //Debugging
connectDB(); // Connect to MongoDB

// Default route
app.get("/", (req, res) => {
    res.send("MERN Blog API is running...");
});

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
