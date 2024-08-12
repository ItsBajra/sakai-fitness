const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  focus: { type: String, required: true }, // e.g., upper chest, lower chest
  videoLink: { type: String, required: false }, // URL for exercise video
  image: { type: String, required: false }, // URL for exercise image
  bodyPart: { type: String, required: true } // e.g., chest, biceps
});

module.exports = mongoose.model('Exercise', exerciseSchema);
