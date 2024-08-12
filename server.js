require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const workoutRoutes = require("./src/routes/workouts");
const exerciseRoutes = require("./src/routes/exerciseRoutes");

// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// Log the requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/exercises", exerciseRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB & listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });

//   Error handling middleware for production
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
