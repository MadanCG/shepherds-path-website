require("dotenv").config();
const express = require('express');
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const shopRoutes = require('./routes/shop');
const path = require('path');
const authRoutes = require('./routes/auth');
const cors=require('cors');
dotenv.config();
connectDB();



const app = express();
app.use(express.json());
app.use(cors());

// Serve frontend (optional, adjust if needed)
app.use(express.static(path.join(__dirname, '../frontend')));

// API route
app.use('/api/shop', shopRoutes);
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
