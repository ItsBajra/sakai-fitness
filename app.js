const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/Config/db');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

const authRoutes = require('./src/Routes/authRoutes');
const userRoutes = require('./src/Routes/userRoutes');
const workoutPlanRoutes = require('./src/Routes/workoutPlanRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/workout-plans', workoutPlanRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
