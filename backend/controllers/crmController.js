const CRM = require('../models/CRM');

// Create a new CRM
const createCRM = async (req, res) => {
  try {
    const { crmID, feedback } = req.body;
    const newCRM = new CRM({ crmID, feedback });
    await newCRM.save();
    res.status(201).json(newCRM);
  } catch (err) {
    res.status(500).json({ message: 'Error creating CRM', error: err });
  }
};

// Get all CRMs
const getCRMs = async (req, res) => {
  try {
    const crms = await CRM.find();
    res.status(200).json(crms);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching CRMs', error: err });
  }
};

// Get a CRM by ID
const getCRMById = async (req, res) => {
  try {
    const crm = await CRM.findById(req.params.id);
    if (!crm) return res.status(404).json({ message: 'CRM not found' });
    res.status(200).json(crm);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching CRM', error: err });
  }
};

// Update a CRM
const updateCRM = async (req, res) => {
  try {
    const crm = await CRM.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!crm) return res.status(404).json({ message: 'CRM not found' });
    res.status(200).json(crm);
  } catch (err) {
    res.status(500).json({ message: 'Error updating CRM', error: err });
  }
};

// Delete a CRM
const deleteCRM = async (req, res) => {
  try {
const crm = await CRM.findByIdAndDelete(req.params.id);
    if (!crm) return res.status(404).json({ message: 'CRM not found' });
    res.status(200).json({ message: 'CRM deleted successfully'})
    } catch (err) {res.status(500).json({ message: 'Error deleting Crm', error: err });
}
};

module.exports = { createCRM, getCRMs, getCRMById, updateCRM, deleteCRM };
