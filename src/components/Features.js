import React from 'react';
import fitnessImage from '../assets/fitness_image.jpg'; 

const Features = () => {
  return (
    <div className="relative text-center py-16 bg-white">
      <div className="absolute top-[-10rem] w-1/2 mx-auto h-40 left-0 right-0 shadow-lg rounded-lg flex justify-center space-x-4 z-20 bg-white p-4">
        <div className="flex flex-col px-10 pt-2 items-center">
          <div className="text-4xl">💪</div>
          <h2 className="text-2xl font-bold mt-2">FITNESS TRACKING</h2>
        </div>
        <div className="flex flex-col px-10 pt-2 items-center">
          <div className="text-4xl">🏋️</div>
          <h2 className="text-2xl font-bold mt-2">WORKOUT PLANS</h2>
        </div>
        <div className="flex flex-col px-10 pt-2 items-center">
          <div className="text-4xl">🧑‍🤝‍🧑</div>
          <h2 className="text-2xl font-bold mt-2">COMMUNITY HELP</h2>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 mt-24">
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
          <div className="w-4/6 h-80 ml-96">
            <img src={fitnessImage} alt="Fitness" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 text-left px-4 lg:px-0">
          <h2 className="text-3xl font-bold">Your Path to Fitness Excellence Begins Here</h2>
          <ul className="mt-4 text-xl list-disc list-inside">
            <li>Personalized Fitness Tracking</li>
            <li>Customizable Workout Plans</li>
            <li>Community and Support</li>
            <li>User-Friendly Interface</li>
            <li>Motivational Challenges and Rewards</li>
          </ul>
          <button className="bg-red-500 px-6 py-3 mt-6 rounded text-white">Start Your Journey</button>
        </div>
      </div>
    </div>
  );
}

export default Features;
