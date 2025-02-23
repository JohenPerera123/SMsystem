const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  eventID: { type: String, required: true, unique: true },
  eventName: { type: String, required: true },
  location: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled'], default: 'Scheduled' },
  date: { type: Date, required: true }
});

module.exports = mongoose.model('Event', eventSchema);