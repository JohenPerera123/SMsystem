const Resource = require('../models/Resource');

// Create a new Resource
const createResource = async (req, res) => {
try {
    const { resourceID, resourceType, quantity, location } = req.body;
    const newResource = new Resource({ resourceID, resourceType, quantity, location });
    await newResource.save();
    res.status(201).json(newResource);
  } catch (err) {
    res.status(500).json({ message: 'Error creating resource', error: err });
  }
};

// Get all resources
const getResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching resources', error: err });
  }
};

// Get a resource by ID
const getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ message: 'Resource not found' });
    res.status(200).json(resource);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching resource', error: err });
  }
};

// Update a resource
const updateResource = async (req, res) => {
  try {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!resource) return res.status(404).json({ message: 'Resource not found' });
    res.status(200).json(resource);
  } catch (err) {
res.status(500).json({ message: 'Error updating resource', error: err });
  }
};

// Delete a resource
const deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) return res.status(404).json({ message: 'Resource not found' });
    res.status(200).json({ message: 'Resource deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting resource', error: err });
  }
};

module.exports = { createResource, getResources, getResourceById, updateResource, deleteResource };