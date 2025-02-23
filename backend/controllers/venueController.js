const Venue = require('../models/Venue');

// Create a new Venue
const createVenue = async (req, res) => {
  try {
    const { venueID, venueName, location, venueCapacity } = req.body;
    const newVenue = new Venue({ venueID, venueName, location, venueCapacity });
    await newVenue.save();
    res.status(201).json(newVenue);
  } catch (err) {
    res.status(500).json({ message: 'Error creating venue', error: err });
  }
};

// Get all venues
const getVenues = async (req, res) => {
  try {
    const venues = await Venue.find();
    res.status(200).json(venues);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching venues', error: err });
  }
};

// Get a venue by ID
const getVenueById = async (req, res) => {
  try {
const venue = await Venue.findById(req.params.id);
    if (!venue) return res.status(404).json({ message: 'Venue not found' });
    res.status(200).json(venue);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching venue', error: err });
  }
};

// Update a venue
const updateVenue = async (req, res) => {
  try {
    const venue = await Venue.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!venue) return res.status(404).json({ message: 'Venue not found' });
    res.status(200).json(venue);
  } catch (err) {
    res.status(500).json({ message: 'Error updating venue', error: err });
  }
};

// Delete a venue
const deleteVenue = async (req, res) => {
    try {
      const venue = await Venue.findByIdAndDelete(req.params.id);
      if (!venue) return res.status(404).json({ message: 'Venue not found' });
      res.status(200).json({ message: 'Venue deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error deleting venue', error: err });
    }
  };
  
  module.exports = { createVenue, getVenues, getVenueById, updateVenue, deleteVenue };
  