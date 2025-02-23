const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Import routes
const eventRoutes = require('./routes/eventRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const customerRoutes = require('./routes/customerRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const venueRoutes = require('./routes/venueRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const adminRoutes = require('./routes/adminRoutes');
const crmRoutes = require('./routes/crmRoutes');

const authRoutes = require('./routes/authRoutes');
// const eventRoutes = require('./routes/eventRoutes');

// Load environment variables
require('dotenv').config();

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // For parsing application/json
app.use(cors()); // Enable CORS if necessary

// Database connection (MongoDB)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));


// Use Routes
app.use('/api', eventRoutes);
app.use('/api', ticketRoutes);
app.use('/api', customerRoutes);
app.use('/api', bookingRoutes);
app.use('/api', venueRoutes);
app.use('/api', resourceRoutes);
app.use('/api', adminRoutes);
app.use('/api', crmRoutes);

// Routes
app.use('/api/auth', authRoutes); // Auth Routes
app.use('/api/events', eventRoutes);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

