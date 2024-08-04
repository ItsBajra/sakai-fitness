const mongoose = require('mongoose');

const workoutPlanSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    days: [
        {
            day: { type: Number, required: true },
            exercises: [
                {
                    name: { type: String, required: true },
                    sets: { type: Number, required: true },
                    reps: { type: Number, required: true }
                }
            ]
        }
    ],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('WorkoutPlan', workoutPlanSchema);
