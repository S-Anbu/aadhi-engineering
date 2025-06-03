const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

dotenv.config();
const dbConnect  = require('./db.js')
const PORT = process.env.PORT || 4000;
const pricRroute= require('./Routes/priceRoutes.js');
const login= require('./Routes/adminRoutes.js');

dbConnect()

app.use(cors({
  httpOnly:true,
  origin: 'https://aadhi-engineering-client.onrender.com',
  // origin: process.env.FRONTEND_URL,
  credentials: true,
 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', pricRroute);
app.use('/api', login);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});