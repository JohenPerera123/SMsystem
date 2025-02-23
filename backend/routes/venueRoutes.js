const express = require('express');
const { createVenue, getVenues, getVenueById, updateVenue, deleteVenue } = require('../controllers/venueController');
const router = express.Router();

router.post('/venues', createVenue);
router.get('/venues', getVenues);
router.get('/venues/:id', getVenueById);
router.put('/venues/:id', updateVenue);
router.delete('/venues/:id', deleteVenue);

module.exports = router;