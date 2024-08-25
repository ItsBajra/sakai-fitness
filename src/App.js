import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/PublicPages/Navbar";
import Authentication from "./components/PublicPages/Authentication";
import Home from "./components/PublicPages/Home";
import WorkoutLog from "./components/PrivatePages/WorkoutLogger";
import WorkoutHistory from "./components/PrivatePages/WorkoutHistory";
import WorkoutPage from "./components/PrivatePages/WorkoutPage";
import ExerciseDetailPage from "./components/PrivatePages/ExerciseDetail";
import ManageUsers from "./components/AdminPages/ManageUser"; // Add import for ManageUsers
import ManageWorkouts from "./components/AdminPages/ManageWorkouts"; // Add import for ManageWorkouts
import { useAuthContext } from "./hooks/useAuthContext";
import ScrollToTop from "./components/Functionality/ScrollToTop";

function App() {
  const { user } = useAuthContext();
  const isAdmin = user && user.email === "admin@admin.com";

  console.log("Current User: ", user);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={!user ? <Authentication /> : <Navigate to="/workoutpage" />}
        />
        <Route
          path="/workoutlog"
          element={user ? <WorkoutLog /> : <Authentication />}
        />
        <Route
          path="/history"
          element={user ? <WorkoutHistory /> : <Authentication />}
        />
        <Route
          path="/workoutpage"
          element={user ? <WorkoutPage /> : <Authentication />}
        />
        <Route
          path="/workoutpage/:bodypart"
          element={user ? <ExerciseDetailPage /> : <Authentication />}
        />
        <Route
          path="/admin/users"
          element={isAdmin ? <ManageUsers /> : <Authentication />}
        />
        <Route
          path="/admin/workouts"
          element={isAdmin ? <ManageWorkouts /> : <Authentication />}
        />
      </Routes>
    </>
  );
}

export default App;
