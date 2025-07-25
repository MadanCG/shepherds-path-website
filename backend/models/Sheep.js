const mongoose = require('mongoose');

const sheepSchema = new mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Sheep', sheepSchema);
