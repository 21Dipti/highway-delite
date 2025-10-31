const express = require("express");
const Experience = require("../models/Experience");
const router = express.Router();

router.get("/", async (req, res) => {
  const exps = await Experience.find();
  res.json(exps);
});

router.get("/:id", async (req, res) => {
  const exp = await Experience.findById(req.params.id);
  res.json(exp);
});

module.exports = router;
