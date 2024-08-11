import React from 'react';
import heroImage from '../../assets/hero.jpg';
import '../../App.css';

const Hero = () => {
  return (
    <div className="relative text-white bg-black w-full h-screen quadrilateral">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hero" 
          className="
            object-cover 
            w-full h-full           /* Default size for small screens */
            sm:w-[90%] sm:h-[90%]   /* Slightly larger on small screens */
            md:w-[100%] md:h-[100%]   /* Larger on medium screens */
            lg:w-[100%] lg:h-[100%] /* Full size on large screens */
            xl:w-[110%] xl:h-[110%] /* Extra large on extra large screens */
            sm:ml-0                 /* No margin on small screens */
            xl:ml-[24rem]           /* Custom large margin on large screens */
          " 
        />
      </div>
      <div className="
        absolute inset-0 flex flex-col items-start 
        px-8 md:px-16 lg:px-24 z-10 text-center md:text-left xl:justify-center
      ">
        <h1 className="pt-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight lg:pt-32 xl:pt-0">
          TRACK. ACHIEVE. REPEAT.
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4 text-red-500 xl:pb-24">
          WELCOME TO SAKAIFITNESS
        </p>
      </div>
    </div>
  );
}




export default Hero;
