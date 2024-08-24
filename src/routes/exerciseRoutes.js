const express = require("express");
const router = express.Router();
const Exercise = require("../models/exerciseModel");

const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

// Get exercises by body part
router.get("/:bodyPart", async (req, res) => {
  try {
    const exercises = await Exercise.find({ bodyPart: req.params.bodyPart });
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch exercises" });
  }
});

// Add more routes if needed, e.g., for adding, updating, or deleting exercises

module.exports = router;
