const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const dotenv = require('dotenv');
dotenv.config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
});

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/availability', require('./routes/availabilityRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
