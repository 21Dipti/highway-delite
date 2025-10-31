const mongoose = require("mongoose");
const BookingSchema = new mongoose.Schema({
  experienceId: mongoose.Types.ObjectId,
  slotDate: String,
  quantity: Number,
  customer: { name: String, email: String },
  status: String,
  price: Number
});
module.exports = mongoose.model("Booking", BookingSchema);
