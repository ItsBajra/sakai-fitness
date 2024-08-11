import { Dumbbell } from "lucide-react";
import React from "react";

const Aboutus = () => {
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
        class="lg:w-[50%] md:w-full sm:w-full w-full h-auto lg:text-start
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
          class="lg:text-3xl md:text-3xl sm:text-2xl text-xl font-semibold text-gray-600 mb-4 
                      leading-normal lg:pe-5 md:pe-4 sm:pe-1 pe-0"
        >
          Effortless Strength, Timely Gains: Building Better Bodies, Faster
        </h1>
        <p class="lg:text-xl md:text-base sm:text-sm text-sm text-gray-400 font-medium mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque a,
          necessitatibus id rerum ex velit officia eum autem quo nemo expedita
          temporibus cumque impedit numquam fuga labore veniam earum itaque.
        </p>
        <p class="lg:text-xl md:text-base sm:text-sm text-sm text-gray-400 font-medium mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque a,
          necessitatibus id rerum ex velit officia eum autem quo nemo expedita
          temporibus cumque impedit numquam fuga labore veniam earum itaque.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          voluptatem, repellat sed fuga a officiis quis minima, facilis dolores
          aspernatur deserunt? Earum, reprehenderit dicta cum minus sequi quam
          in optio?
        </p>
        <p class="lg:text-xl md:text-base sm:text-sm text-sm text-gray-400 font-medium mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque a,
          necessitatibus id rerum ex velit officia eum autem quo nemo expedita
          temporibus cumque impedit numquam fuga labore veniam earum itaque.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
          voluptatem, repellat sed fuga a officiis quis minima, facilis dolores
          aspernatur deserunt? Earum, reprehenderit dicta cum minus sequi quam
          in optio?
        </p>
        <button
          className="text-base  font-medium flex text-white
                      items-center border  gap-x-1 ease-out lg:w-auto md:w-auto sm:w-full w-full
                      px-7 py-2 uppercase justify-center bg-red-500 rounded hover:bg-red-600 transition-colors duration-700"
        >
          Become a Member
        </button>
      </div>
    </div>
  );
};

export default Aboutus;
