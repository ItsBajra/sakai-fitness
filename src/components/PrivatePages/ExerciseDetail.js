import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Dumbbell, MoveRight } from "lucide-react";

const ExerciseDetailPage = () => {
  const params = useParams();
  console.log("Params:", params); // Debug all parameters
  const bodyPart = params.bodypart; // Extract bodypart

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (!bodyPart) {
      console.error("Body part is undefined");
      return;
    }

    const fetchExercises = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/exercises/${bodyPart}`
        );
        const data = await response.json();

        if (response.ok) {
          setExercises(data);
        } else {
          console.error("Failed to fetch exercises:", data.error);
        }
      } catch (error) {
        console.error("Failed to fetch exercises:", error);
      }
    };

    fetchExercises();
  }, [bodyPart]);

  return (
    <div
      id="exercise-details"
      className="w-full h-auto flex items-center justify-center flex-col lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4"
    >
      <h6 className="text-lg font-medium text-gray-700 flex items-center gap-x-2 mb-6">
        <Dumbbell className="w-4 h-4 -rotate-45 text-red-600" />
        {bodyPart
          ? bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)
          : "Exercises"}
      </h6>
      <div className="w-full h-auto flex items-center justify-center gap-x-4 gap-y-5 flex-wrap mb-10">
        {exercises.length > 0 ? (
          exercises.map((exercise) => (
            <div
              key={exercise._id}
              className="lg:w-[24%] md:w-[48%] sm:w-[48%] w-full lg:h-[45vh] md:h-[53vh] sm:h-[58vh] h-[60vh] rounded-xl bg-black relative overflow-hidden cursor-pointer z-10 hover:-translate-y-2 ease-out duration-500"
              style={{
                backgroundImage: `url('https://www.bhmpics.com/downloads/background-black-and-red-Wallpapers/24.216efb13d0b597439346a7b1511adb30.jpg')`,
              }}
            >
              <div className="w-full h-full bg-black/70 absolute top-0 left-0 -z-10"></div>
              {exercise.videoLink && (
                <div className="w-[90%] h-[40%] relative m-auto md:w-full md:h-[50%] md:m-0">
                  {/* <iframe
                    src={exercise.videoLink}
                    title={exercise.name}
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  ></iframe> */}
                  <video autoPlay muted loop>
                    <source src={exercise.videoLink} />
                  </video>
                </div>
              )}
              <div className="w-full h-[85%] md:h-[50%] flex flex-col items-center justify-center text-white p-4">
                <h1 className="text-xl text-white font-semibold text-center mb-4">
                  {exercise.name}
                </h1>
                <p className="text-base text-white font-normal text-center mb-4">
                  Focus: {exercise.focus}
                </p>
                {exercise.videoLink && (
                  <a
                    href={exercise.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-red-600 bg-transparent font-medium px-3 py-1.5 rounded flex items-center justify-center gap-x-1 hover:text-red-600/70 ease-out duration-500"
                  >
                    Watch Video
                    <MoveRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No exercises found for this body part.</p>
        )}
      </div>
    </div>
  );
};

export default ExerciseDetailPage;
