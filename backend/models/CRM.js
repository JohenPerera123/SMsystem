const mongoose = require('mongoose');

const crmSchema = new mongoose.Schema({
  crmID: { type: String, required: true, unique: true },
  feedback: { type: String, required: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }
});

module.exports = mongoose.model('CRM', crmSchema);