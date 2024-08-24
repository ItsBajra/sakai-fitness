import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { TrashIcon } from "@heroicons/react/outline";
import { useAuthContext } from "../../hooks/useAuthContext";

const WorkoutHistory = () => {
  const [workouts, setWorkouts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { user } = useAuthContext();
  // Function to fetch workouts based on the selected date
  useEffect(() => {
    // Format the selected date as YYYY-MM-DD
    const formattedDate = selectedDate.toISOString().split("T")[0];

    const fetchWorkouts = async () => {
      if (!user) {
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:4000/api/workouts?date=${formattedDate}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        const data = await response.json();

        if (response.ok) {
          setWorkouts(data);
        } else {
          console.error("Failed to fetch workouts:", data.error);
        }
      } catch (error) {
        console.error("Failed to fetch workouts:", error);
      }
    };

    fetchWorkouts();
  }, [selectedDate]);

  // Function to handle workout deletion
  const handleDelete = async (id) => {
    if (!user) {
      alert("You are not logged in!");
      return;
    }
    try {
      const response = await fetch(`http://localhost:4000/api/workouts/${id}`, {
        method: "DELETE",
        Authorization: `Bearer ${user.token}`,
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

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center lg:px-24 md:px-16 sm:px-6 px-4 mt-5">
      {/* Left Side - Display Workouts */}
      <div className="w-full lg:w-2/3 h-full p-6 bg-black/80 rounded-lg overflow-y-auto lg:rounded-l-lg lg:rounded-r-none">
        <h2 className="text-xl text-white font-semibold mb-4">
          Workouts on {selectedDate.toDateString()}
        </h2>
        {workouts.length > 0 ? (
          workouts.map((workout) => (
            <div
              key={workout._id}
              className="bg-gray-800 p-4 mb-4 rounded-lg text-white relative"
            >
              <h3 className="text-lg font-semibold">{workout.title}</h3>
              <p className="text-sm">Volume: {workout.load}</p>
              <p className="text-sm">Reps: {workout.reps}</p>
              <button
                onClick={() => handleDelete(workout._id)}
                className="absolute top-2 right-2 p-2 transition ease-out duration-300"
              >
                <TrashIcon className="h-5 w-5 text-red-600" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-white">No workouts logged on this date.</p>
        )}
      </div>

      {/* Right Side - Calendar */}
      <div className="w-full lg:w-1/3 h-full p-6 bg-gray-900 rounded-lg lg:rounded-l-none lg:rounded-r-lg flex justify-center items-center">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          className="bg-white rounded-lg p-4 w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default WorkoutHistory;
