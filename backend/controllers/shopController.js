const Sheep = require('../models/Sheep');

// GET all sheep
exports.getSheep = async (req, res) => {
  const sheep = await Sheep.find();
  res.json(sheep);
};

// POST add new sheep
exports.addSheep = async (req, res) => {
  try {
    const newSheep = new Sheep(req.body);
    const saved = await newSheep.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Invalid sheep data' });
  }
};

// DELETE sheep
exports.deleteSheep = async (req, res) => {
  try {
    await Sheep.findByIdAndDelete(req.params.id);
    res.json({ message: 'Sheep deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
};

// PUT update sheep
exports.updateSheep = async (req, res) => {
  try {
    const updated = await Sheep.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Update failed' });
  }
};
