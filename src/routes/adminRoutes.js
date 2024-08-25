const express = require('express');
const { getUsers, deleteUser, updateUser, addWorkout, updateWorkout, deleteWorkout } = require('../controllers/adminController');
const requireAdmin = require('../middleware/requireAdmin');

const router = express.Router();

// Admin User Management Routes
router.get('/users', requireAdmin, getUsers);
router.delete('/users/:id', requireAdmin, deleteUser);
router.patch('/users/:id', requireAdmin, updateUser);

// Admin Workout Management Routes
router.post('/workouts', requireAdmin, addWorkout);
router.patch('/workouts/:id', requireAdmin, updateWorkout);
router.delete('/workouts/:id', requireAdmin, deleteWorkout);

module.exports = router;
