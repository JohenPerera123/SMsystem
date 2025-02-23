const Admin = require('../models/Admin');

// Create a new Admin
const createAdmin = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const newAdmin = new Admin({ username, password, role });
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (err) {
    res.status(500).json({ message: 'Error creating admin', error: err });
  }
};

// Get all admins
const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching admins', error: err });
  }
};
 // Get an admin by ID
const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching admin', error: err });
  }
};

// Update an admin
const updateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json({ message: 'Error updating admin', error: err });
  }
};

// Delete an admin
const deleteAdmin = async (req, res) => {
    try {
      const admin = await Admin.findByIdAndDelete(req.params.id);
      if (!admin) return res.status(404).json({ message: 'Admin not found' });
      res.status(200).json({ message: 'Admin deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error deleting admin', error: err });
    }
  };
  
  module.exports = { createAdmin, getAdmins, getAdminById, updateAdmin, deleteAdmin };
  