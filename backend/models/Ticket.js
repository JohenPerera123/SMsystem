const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  ticketID: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  status: { type: String, enum: ['Available', 'Sold'], default: 'Available' },
  seatNumber: { type: String, required: true },
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true }, // Event this ticket is associated with
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' } // Customer who purchased the ticket
});

module.exports = mongoose.model('Ticket', ticketSchema);