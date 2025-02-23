const express = require('express');
const { createAdmin, getAdmins, getAdminById, updateAdmin, deleteAdmin } = require('../controllers/adminController');
const router = express.Router();

router.post('/admins', createAdmin);
router.get('/admins', getAdmins);
router.get('/admins/:id', getAdminById);
router.put('/admins/:id', updateAdmin);
router.delete('/admins/:id', deleteAdmin);

module.exports = router;