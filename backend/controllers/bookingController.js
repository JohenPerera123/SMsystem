const Booking = require('../models/Booking');

// Create a new Booking
const createBooking = async (req, res) => {
  try {
    const { bookingID, bookingDate, paymentStatus, customer, event, tickets } = req.body;
    const newBooking = new Booking({ bookingID, bookingDate, paymentStatus, customer, event, tickets });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ message: 'Error creating booking', error: err });
  }
};

// Get all bookings
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching bookings', error: err });
  }
};

// Get a single booking by ID
const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching booking', error: err });
  }
};

// Update a booking
const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ message: 'Error updating booking', error: err });
  }
};

// Delete a booking
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting booking', error: err });
  }
};

module.exports = { createBooking, getBookings, getBookingById, updateBooking, deleteBooking };