const WorkoutPlan = require('../Models/workoutPlanModel');

const createWorkoutPlan = async (req, res) => {
    try {
        const { name, exercises } = req.body;

        const newWorkoutPlan = new WorkoutPlan({
            name,
            exercises,
            user: req.user.id
        });

        const savedWorkoutPlan = await newWorkoutPlan.save();

        res.status(201).json(savedWorkoutPlan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllWorkoutPlans = async (req, res) => {
    try {
        const workoutPlans = await WorkoutPlan.find();
        res.status(200).json(workoutPlans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getWorkoutPlanById = async (req, res) => {
    try {
        const workoutPlan = await WorkoutPlan.findById(req.params.id);
        if (!workoutPlan) {
            return res.status(404).json({ message: 'Workout plan not found' });
        }
        res.status(200).json(workoutPlan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateWorkoutPlan = async (req, res) => {
    try {
        const { name, exercises } = req.body;

        const workoutPlan = await WorkoutPlan.findById(req.params.id);
        if (!workoutPlan) {
            return res.status(404).json({ message: 'Workout plan not found' });
        }

        workoutPlan.name = name || workoutPlan.name;
        workoutPlan.exercises = exercises || workoutPlan.exercises;

        const updatedWorkoutPlan = await workoutPlan.save();

        res.status(200).json(updatedWorkoutPlan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteWorkoutPlan = async (req, res) => {
    try {
        const workoutPlan = await WorkoutPlan.findById(req.params.id);
        if (!workoutPlan) {
            return res.status(404).json({ message: 'Workout plan not found' });
        }

        await workoutPlan.remove();

        res.status(200).json({ message: 'Workout plan removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createWorkoutPlan,
    getAllWorkoutPlans,
    getWorkoutPlanById,
    updateWorkoutPlan,
    deleteWorkoutPlan
};
