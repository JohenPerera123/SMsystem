const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  customerID: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }] // Array of bookings made by the customer
});

module.exports = mongoose.model('Customer', customerSchema);