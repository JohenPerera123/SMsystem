const express = require('express');
const { createBooking, getBookings, getBookingById, updateBooking, deleteBooking } = require('../controllers/bookingController');
const router = express.Router();

router.post('/bookings', createBooking);
router.get('/bookings', getBookings);
router.get('/bookings/:id', getBookingById);
router.put('/bookings/:id', updateBooking);
router.delete('/bookings/:id', deleteBooking);

module.exports = router;
