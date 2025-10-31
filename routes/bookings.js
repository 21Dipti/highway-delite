const express = require("express");
const Booking = require("../models/Booking");
const Experience = require("../models/Experience");
const router = express.Router();

router.post("/", async (req, res) => {
  const { experienceId, slotDate, quantity, customer } = req.body;
  const exp = await Experience.findById(experienceId);
  const slot = exp.slots.find(s => s.date === slotDate);

  if (!slot || slot.available < quantity) {
    return res.status(409).json({ message: "Slot sold out or not enough availability" });
  }

  slot.available -= quantity;
  await exp.save();

  const booking = await Booking.create({
    experienceId, slotDate, quantity, customer,
    status: "confirmed", price: exp.price * quantity
  });

  res.json({ booking, refId: booking._id });
});

module.exports = router;
