import { Dumbbell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import React from "react";

const Aboutus = () => {
  const navigate = useNavigate();
  const user = useAuthContext();

  const handleClick = () => {
    if (user) {
      navigate("/workoutpage");
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      id="about"
      className="w-full h-auto flex items-center justify-between gap-7 lg:py-16
        md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4 flex-wrap-reverse"
    >
      <div className="lg:w-[38%] xl:ml-20 md:w-full sm:w-full w-full h-auto relative overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About image"
          className="w-full lg:h-[70vh] md:h-[68vh] sm:h-[60vh] h-[55vh] object-cover"
        />
      </div>
      <div
        className="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start
          md:text-start sm:text-start text-center xl:mr-5"
      >
        <h6
          className="text-lg md:text-2xl font-medium text-gray-600 flex items-center 
                      lg:justify-start md:justify-start sm:justify-center justify-center 
                      gap-x-2 mb-3"
        >
          <Dumbbell className="w-10 h-10 -rotate-45 text-red-600" />
          About Us
        </h6>
        <h1
          className="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold text-gray-600 mb-4 
                      leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0"
        >
          Effortless Strength, Timely Gains: Building Better Bodies, Faster
        </h1>
        <p className="lg:text-xl md:text-base sm:text-sm text-sm text-gray-400 font-medium mb-4">
          Our journey with SakaiFitness began with a quest for balance and
          mastery. The name "SakaiFitness" was inspired by the legendary samurai
          of Ghost of Tsushima, Jin Sakai, who embodies discipline, strength,
          and the pursuit of excellence. Just as Jin Sakai navigated his world
          with precision and focus, we aim to guide you on a journey to fitness
          with the same dedication and clarity.
        </p>
        <p className="lg:text-xl md:text-base sm:text-sm text-sm text-gray-400 font-medium mb-4">
          SakaiFitness is more than just an app; it’s your personal guide to
          achieving your fitness goals. With our app, you can explore a diverse
          range of workouts tailored to target specific body parts, from
          strengthening your core to enhancing your endurance. Each workout is
          carefully crafted to help you achieve balanced and effective results.
        </p>
        <p className="lg:text-xl md:text-base sm:text-sm text-sm text-gray-400 font-medium mb-4">
          Our intuitive interface allows you to log your workouts effortlessly.
          You can track your progress with organized entries by date, ensuring
          that every session is accounted for and easily accessible. Whether
          you're hitting new personal records or simply maintaining your
          routine, SakaiFitness provides a clear overview of your journey.
        </p>
        <button
          className="text-base  font-medium flex text-white
                      items-center border  gap-x-1 ease-out lg:w-auto md:w-auto sm:w-full w-full
                      px-7 py-2 uppercase justify-center bg-red-500 rounded hover:bg-red-600 transition-colors duration-700"
          onClick={handleClick}
        >
          Become a Member
        </button>
      </div>
    </div>
  );
};

export default Aboutus;
