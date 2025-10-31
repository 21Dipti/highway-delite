const mongoose = require("mongoose");
const SlotSchema = new mongoose.Schema({
  date: String,
  available: Number
});
const ExperienceSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  price: Number,
  image: String,
  slots: [SlotSchema]
});
module.exports = mongoose.model("Experience", ExperienceSchema);
