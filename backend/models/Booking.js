const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  bookingID: { type: String, required: true, unique: true },
  bookingDate: { type: Date, default: Date.now },
  paymentStatus: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true }, // Event associated with the booking
  tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }] // Tickets bought for this booking
});

module.exports = mongoose.model('Booking', bookingSchema);