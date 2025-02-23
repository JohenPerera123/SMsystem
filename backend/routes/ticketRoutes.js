const express = require('express');
const { createTicket, getTickets, getTicketById, updateTicket, deleteTicket } = require('../controllers/ticketController');
const router = express.Router();

router.post('/tickets', createTicket);
router.get('/tickets', getTickets);
router.get('/tickets/:id', getTicketById);
router.put('/tickets/:id', updateTicket);
router.delete('/tickets/:id', deleteTicket);

module.exports = router;