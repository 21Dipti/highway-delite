const express = require("express");
const router = express.Router();

router.post("/validate", (req, res) => {
  const { code } = req.body;
  let discount = 0;
  if (code === "SAVE10") discount = 10;
  if (code === "FLAT100") discount = 100;
  res.json({ valid: discount > 0, discount });
});

module.exports = router;
