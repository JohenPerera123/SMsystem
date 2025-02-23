const express = require('express');
const { createEvent, getEvents, getEventById, updateEvent, deleteEvent } = require('../controllers/eventController');
const { protect } = require('../middleware/authMiddleware');
const { roleCheck } = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/events', protect ,roleCheck('admin'),createEvent);
router.get('/events', getEvents);
router.get('/events/:id', getEventById);
router.put('/events/:id', protect, roleCheck('admin'), updateEvent);
router.delete('/events/:id',protect, roleCheck('admin'), deleteEvent);

module.exports = router;