const express = require("express");
const router = express.Router();

// Define your routes here
router.get("/", (req, res) => {
  res.send("Topic routes");
});

module.exports = router;
