const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  venueID: { type: String, required: true, unique: true },
  venueName: { type: String, required: true },
  location: { type: String, required: true },
  venueCapacity: { type: Number, required: true },
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }] // Events hosted at this venue
});

module.exports = mongoose.model('Venue', venueSchema);