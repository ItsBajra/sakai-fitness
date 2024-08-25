const express = require("express");
const router = express.Router();
const Exercise = require("../models/exerciseModel");
const requireAuth = require("../middleware/requireAuth");

// Middleware to protect routes
router.use(requireAuth);

// Get all exercises or search by name
router.get("/", async (req, res) => {
  try {
    const searchQuery = req.query.name || ""; // Get search query from request
    const regex = new RegExp(searchQuery, "i"); // Create a regex for case-insensitive search

    // Find exercises that match the search query
    const exercises = await Exercise.find({ name: regex });

    if (exercises.length === 0) {
      return res.status(404).json({ message: "No exercises found" });
    }

    res.status(200).json(exercises); // Return the exercises if found
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch exercises" });
  }
});

// Get exercises by body part
router.get("/:bodyPart", async (req, res) => {
  try {
    const exercises = await Exercise.find({ bodyPart: req.params.bodyPart });

    if (exercises.length === 0) {
      return res.status(404).json({ message: `No exercises found for body part: ${req.params.bodyPart}` });
    }

    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch exercises" });
  }
});

// Create a new exercise
router.post("/", async (req, res) => {
  const { name, focus, videoLink, image, bodyPart } = req.body;

  try {
    const exercise = new Exercise({
      name,
      focus,
      videoLink,
      image,
      bodyPart,
    });

    const savedExercise = await exercise.save();
    res.status(201).json(savedExercise);
  } catch (error) {
    res.status(400).json({ error: "Failed to create exercise" });
  }
});

// Update an exercise
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedExercise = await Exercise.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedExercise) {
      return res.status(404).json({ error: "Exercise not found" });
    }

    res.status(200).json(updatedExercise);
  } catch (error) {
    res.status(400).json({ error: "Failed to update exercise" });
  }
});

// Delete an exercise
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedExercise = await Exercise.findByIdAndDelete(id);

    if (!deletedExercise) {
      return res.status(404).json({ error: "Exercise not found" });
    }

    res.status(200).json({ message: "Exercise deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete exercise" });
  }
});

module.exports = router;
