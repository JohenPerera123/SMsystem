const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  resourceID: { type: String, required: true, unique: true },
  resourceType: { type: String, required: true },
  quantity: { type: Number, required: true },
  location: { type: String, required: true },
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' }, // Event associated with the resource
  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' } // Admin who manages the resource
});

module.exports = mongoose.model('Resource', resourceSchema);