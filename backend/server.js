require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5001;
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Import Routes
const bootcampRoutes = require('./routes/bootcampRoutes');

connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/bootcamps', bootcampRoutes);

// Error Handler
app.use(errorHandler);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Example app listening on ${PORT} port!`));
