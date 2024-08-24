import React, { useState, useEffect } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { useAuthContext } from "../../hooks/useAuthContext";

const WorkoutLog = () => {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState({
    title: "",
    load: "",
    reps: "",
  });
  const [editWorkout, setEditWorkout] = useState(null);

  const { user } = useAuthContext();

  // Fetch workouts from the server
  useEffect(() => {
    if (user) {
      fetchWorkouts();
    }
    else {
      alert("You are not logged in!");
      return
    }
  }, [user]);

  const fetchWorkouts = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/workouts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch workouts");
      }
      const data = await response.json();
      setWorkouts(data);
    } catch (err) {
      console.error("Failed to fetch workouts:", err);
    }
  };

  const handleChange = (e) => {
    setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("You are not logged in!");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(newWorkout),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to add workout");
      }

      const addedWorkout = await response.json();
      setWorkouts([addedWorkout, ...workouts]);
      setNewWorkout({ title: "", load: "", reps: "" });
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("You are not logged in!");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:4000/api/workouts/${editWorkout._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify(editWorkout),
        }
      );

      if (!response.ok) {
        const text = await response.text();
        try {
          const errorData = JSON.parse(text);
          throw new Error(errorData.error || "Failed to update workout");
        } catch {
          throw new Error(
            "Failed to update workout: Server returned an unexpected response."
          );
        }
      }

      // Fetch the updated list of workouts after the update
      fetchWorkouts();
      setEditWorkout(null);
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!user) {
      alert("You are not logged in!");
      return;
    }

    try {
      const response = await fetch(`http://localhost:4000/api/workouts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete workout");
      }

      setWorkouts(workouts.filter((workout) => workout._id !== id));
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  };

  const handleEditChange = (e) => {
    setEditWorkout({ ...editWorkout, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center lg:px-24 md:px-16 sm:px-6 px-4 mt-5">
      {/* Left Side - Display Workouts */}
      <div className="w-full lg:w-2/3 h-full p-6 bg-black/80 rounded-l-lg overflow-y-auto">
        <h2 className="text-xl text-white font-semibold mb-4">Your Workouts</h2>
        {workouts.length > 0 ? (
          workouts.map((workout) => (
            <div
              key={workout._id}
              className="bg-gray-800 p-4 mb-4 rounded-lg text-white relative"
            >
              <h3 className="text-lg font-semibold">{workout.title}</h3>
              <p className="text-sm">Load: {workout.load}</p>
              <p className="text-sm">Reps: {workout.reps}</p>
              <div className="absolute top-2 right-2 flex space-x-2">
                <button onClick={() => setEditWorkout(workout)}>
                  <PencilIcon className="h-5 w-5 text-yellow-400" />
                </button>
                <button onClick={() => handleDelete(workout._id)}>
                  <TrashIcon className="h-5 w-5 text-red-600" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No workouts logged yet.</p>
        )}
      </div>

      {/* Right Side - Workout Form */}
      <div className="w-full lg:w-1/3 h-full p-6 bg-gray-900 rounded-r-lg">
        <h2 className="text-xl text-white font-semibold mb-4">
          {editWorkout ? "Update Workout" : "Log a New Workout"}
        </h2>
        <form
          onSubmit={editWorkout ? handleUpdate : handleSubmit}
          className="space-y-4"
        >
          <div>
            <label className="block text-white mb-2">Workout Name</label>
            <input
              type="text"
              name="title"
              value={editWorkout ? editWorkout.title : newWorkout.title}
              onChange={editWorkout ? handleEditChange : handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Enter workout name"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Load</label>
            <input
              type="text"
              name="load"
              value={editWorkout ? editWorkout.load : newWorkout.load}
              onChange={editWorkout ? handleEditChange : handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="e.g., 100kg"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Reps</label>
            <input
              type="text"
              name="reps"
              value={editWorkout ? editWorkout.reps : newWorkout.reps}
              onChange={editWorkout ? handleEditChange : handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Enter number of reps"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition ease-out duration-500"
          >
            {editWorkout ? "Update Workout" : "Add Workout"}
          </button>
          {editWorkout && (
            <button
              type="button"
              onClick={() => setEditWorkout(null)}
              className="w-full p-2 bg-gray-600 text-white font-semibold rounded mt-2 hover:bg-gray-700 transition ease-out duration-500"
            >
              Cancel
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default WorkoutLog;
