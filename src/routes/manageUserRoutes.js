const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const requireAuth = require("../middleware/requireAuth");

// Middleware to protect routes
router.use(requireAuth);

// Get all users or search by name
router.get("/", async (req, res) => {
  try {
    const searchQuery = req.query.name || ""; // Get search query from request
    const regex = new RegExp(searchQuery, "i"); // Create a regex for case-insensitive search

    // Find users that match the search query
    const users = await User.find({ name: regex }).select("-password");

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }

    res.status(200).json(users); // Return the users if found
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Get a single user by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

// Update an existing user
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (updates.password) {
    return res.status(400).json({ error: "Password cannot be updated here" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    }).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: "Failed to update user" });
  }
});

// Delete an existing user
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id).select("-password");

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Failed to delete user" });
  }
});

module.exports = router;
