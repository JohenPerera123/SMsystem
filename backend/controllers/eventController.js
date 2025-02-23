const Event = require('../models/Event');

// Create a new Event
const createEvent = async (req, res) => {
  try {
    const { eventID, eventName, location, startTime, endTime, date, status } = req.body;
    if (!eventID || !eventName || !location || !startTime || !endTime || !date) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newEvent = new Event({
      eventID,
      eventName,
      location,
      startTime,
      endTime,
      date,
      status: status || 'Scheduled', // Default to "Scheduled" if not provided
    });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ message: 'Error creating event', error: err });
  }
};

// Get all events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching events', error: err });
  }
};

// Get a single event by ID
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json(event);
  } catch (err) {
res.status(500).json({ message: 'Error fetching event', error: err });
  }
};

// Update an event
const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ message: 'Error updating event', error: err });
  }
};

// Delete an event
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting event', error: err });
  }
};

module.exports = { createEvent, getEvents, getEventById, updateEvent, deleteEvent };