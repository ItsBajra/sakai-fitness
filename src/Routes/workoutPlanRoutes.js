const express = require('express');
const router = express.Router();
const {
    createWorkoutPlan,
    getAllWorkoutPlans,
    getWorkoutPlanById,
    updateWorkoutPlan,
    deleteWorkoutPlan
} = require('../Controllers/workoutPlanControllers');
const { protect } = require('../Middleware/authMiddleware');
const { roleMiddleware } = require('../Middleware/roleMiddleware');

router.route('/')
    .get(getAllWorkoutPlans)
    .post(protect, createWorkoutPlan);

router.route('/:id')
    .get(getWorkoutPlanById)
    .put(protect, updateWorkoutPlan)
    .delete(protect, roleMiddleware(['admin']), deleteWorkoutPlan);

module.exports = router;
