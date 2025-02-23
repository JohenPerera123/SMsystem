 const Ticket = require('../models/Ticket');

// Create a new Ticket
const createTicket = async (req, res) => {
  try {
    const { ticketID, price, status, seatNumber, event, customer } = req.body;
    const newTicket = new Ticket({ ticketID, price, status, seatNumber, event, customer });
 await newTicket.save();
    res.status(201).json(newTicket);
  } catch (err) {
    res.status(500).json({ message: 'Error creating ticket', error: err });
  }
};

// Get all tickets
const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tickets', error: err });
  }
};

// Get a single ticket by ID
const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching ticket', error: err });
  }
};

// Update a ticket
const updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).json({ message: 'Error updating ticket', error: err });
  }
};

// Delete a ticket
const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.status(200).json({ message: 'Ticket deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting ticket', error: err });
  }
};

module.exports = { createTicket, getTickets, getTicketById, updateTicket, deleteTicket }