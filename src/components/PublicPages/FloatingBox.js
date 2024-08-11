import React from "react";
import { BicepsFlexed } from "lucide-react";
import { Dumbbell } from "lucide-react";
import { HeartHandshake } from "lucide-react";

const FloatingBox = () => {
  return (
    <div className="relative text-center bg-white">
      <div
        className="absolute top-[-10rem] w-full sm:w-3/5 lg:w-1/2 mx-auto h-40 left-0 right-0 shadow-lg rounded-lg
          flex flex-row items-center justify-center sm:justify-evenly space-y-4 sm:space-y-0 sm:space-x-4
          z-20 bg-white p-4"
      >
        <div className="flex flex-col px-5 pt-5 sm:pt-1 lg:px-10 lg:pt-2 items-center ">
          <BicepsFlexed className="w-10 h-10 text-red-500" />
          <h2 className="text-2xl font-bold mt-2 ">FITNESS TRACKING</h2>
        </div>
        <div className="flex flex-col px-5 pt-1 lg:px-10 lg:pt-2 items-center">
          <Dumbbell className="w-10 h-10 text-red-500" />
          <h2 className="text-2xl font-bold mt-2">WORKOUT PLANS</h2>
        </div>
        <div className="flex flex-col px-5 pt-1 lg:px-10 lg:pt-2 items-center">
          <HeartHandshake className="w-10 h-10 text-red-500" />
          <h2 className="text-2xl font-bold mt-2">COMMUNITY HELP</h2>
        </div>
      </div>
    </div>
  );
};

export default FloatingBox;
