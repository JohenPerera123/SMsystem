const express = require('express');
const { createCRM, getCRMs, getCRMById, updateCRM, deleteCRM } = require('../controllers/crmController');
const router = express.Router();

router.post('/crms', createCRM);
router.get('/crms', getCRMs);
router.get('/crms/:id', getCRMById);
router.put('/crms/:id', updateCRM);
router.delete('/crms/:id', deleteCRM);

module.exports = router;
