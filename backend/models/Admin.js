const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  adminID: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Admin','Manager'], default: 'Admin' },
  venues: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Venue' }],
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
  resources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }]
});

module.exports = mongoose.model('Admin', adminSchema);