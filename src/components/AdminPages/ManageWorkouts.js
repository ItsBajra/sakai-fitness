import React, { useState, useEffect } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { useAuthContext } from "../../hooks/useAuthContext";

const ManageWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Add state for search query
  const [newWorkout, setNewWorkout] = useState({
    name: "",
    focus: "",
    videoLink: "",
    image: "",
    bodyPart: "",
  });
  const [editWorkout, setEditWorkout] = useState(null);
  const { user } = useAuthContext();

  // Fetch workouts function
  const fetchWorkouts = async (query = "") => {
    try {
      const url = `http://localhost:4000/api/exercises?name=${query}`;
      const response = await fetch(url, {
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
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchWorkouts();
    } else {
      alert("You are not logged in!");
    }
  }, [user]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    fetchWorkouts(e.target.value); // Fetch workouts with the search query
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
      const response = await fetch("http://localhost:4000/api/exercises", {
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
      setNewWorkout({
        name: "",
        focus: "",
        videoLink: "",
        image: "",
        bodyPart: "",
      });
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
        `http://localhost:4000/api/exercises/${editWorkout._id}`,
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

      fetchWorkouts(); // Fetch the updated list of workouts after the update
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
      const response = await fetch(
        `http://localhost:4000/api/exercises/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

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
      {/* Left Side - Search and Display Workouts */}
      <div className="w-full lg:w-2/3 h-full p-6 bg-black/85 rounded-l-lg overflow-y-auto">
        <h2 className="text-xl text-white font-semibold mb-4">Exercises</h2>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full mb-4 p-2 rounded bg-gray-800 text-white"
          placeholder="Search by exercise name"
        />
        {workouts.length > 0 ? (
          workouts.map((workout) => (
            <div
              key={workout._id}
              className="bg-gray-800 p-4 mb-4 rounded-lg text-white relative"
            >
              <h3 className="text-lg font-semibold">{workout.name}</h3>
              <p className="text-sm">Focus: {workout.focus}</p>
              <p className="text-sm">Body Part: {workout.bodyPart}</p>
              {workout.videoLink && (
                <p className="text-sm">
                  <a
                    href={workout.videoLink}
                    className="text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Video Link
                  </a>
                </p>
              )}
              {workout.image && (
                <img
                  src={workout.image}
                  alt={workout.name}
                  className="w-full mt-2 rounded-lg"
                />
              )}
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
          <p className="text-white">No workouts found.</p>
        )}
      </div>

      {/* Right Side - Workout Form */}
      <div className="w-full lg:w-1/3 h-full p-6 bg-gray-900 rounded-r-lg">
        <h2 className="text-xl text-white font-semibold mb-4">
          {editWorkout ? "Update an exercise" : "Add new exercise"}
        </h2>
        <form
          onSubmit={editWorkout ? handleUpdate : handleSubmit}
          className="space-y-4"
        >
          <div>
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={editWorkout ? editWorkout.name : newWorkout.name}
              onChange={editWorkout ? handleEditChange : handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Enter workout name"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Focus</label>
            <input
              type="text"
              name="focus"
              value={editWorkout ? editWorkout.focus : newWorkout.focus}
              onChange={editWorkout ? handleEditChange : handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Enter focus area"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Body Part</label>
            <input
              type="text"
              name="bodyPart"
              value={editWorkout ? editWorkout.bodyPart : newWorkout.bodyPart}
              onChange={editWorkout ? handleEditChange : handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Enter body part"
            />
          </div>
          <div>
            <label className="block text-white mb-2">
              Video Link (optional)
            </label>
            <input
              type="text"
              name="videoLink"
              value={editWorkout ? editWorkout.videoLink : newWorkout.videoLink}
              onChange={editWorkout ? handleEditChange : handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Enter video URL"
            />
          </div>
          <div>
            <label className="block text-white mb-2">
              Image URL (optional)
            </label>
            <input
              type="text"
              name="image"
              value={editWorkout ? editWorkout.image : newWorkout.image}
              onChange={editWorkout ? handleEditChange : handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white"
              placeholder="Enter image URL"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded bg-red-600 hover:bg-red-700 text-white font-semibold"
          >
            {editWorkout ? "Update Workout" : "Add Workout"}
          </button>
          {editWorkout && (
            <button
              type="button"
              className="w-full py-2 px-4 rounded bg-gray-500 hover:bg-gray-600 text-white font-semibold mt-2"
              onClick={() => setEditWorkout(null)}
            >
              Cancel
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ManageWorkouts;
