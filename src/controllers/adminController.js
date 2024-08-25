const User = require('../models/userModel');
const Exercise = require('../models/exerciseModel');

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a user
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const user = await User.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a workout
const addWorkout = async (req, res) => {
  try {
    const workout = await Exercise.create(req.body);
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a workout
const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const workout = await Exercise.findByIdAndUpdate(id, updates, { new: true });
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a workout
const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    await Exercise.findByIdAndDelete(id);
    res.status(200).json({ message: 'Workout deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUsers, deleteUser, updateUser, addWorkout, updateWorkout, deleteWorkout };
