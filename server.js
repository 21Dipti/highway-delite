require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/experiences", require("./routes/experiences"));
app.use("/api/bookings", require("./routes/bookings"));
app.use("/api/promo", require("./routes/promo"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log("Server started at port 5000")));
