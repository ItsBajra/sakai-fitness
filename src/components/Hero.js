import React from 'react';
import heroImage from '../assets/hero.jpg';
import '../App.css';

const Hero = () => {

  // const styles = {
  //   width: '1200px',
  //   height: '670px'
  // }

  return (
    <div className="relative text-white bg-black w-full h-screen quadrilateral"> 
      <div className="absolute inset-0">
        <img src={heroImage} alt="Hero" className="ml-96 object-cover w-full h-full" />
      </div>
      <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 z-10">
        <h1 className="text-4xl md:text-6xl font-bold">TRACK. ACHIEVE. REPEAT.</h1>
        <p className="text-2xl md:text-4xl mt-4 text-red-500">WELCOME TO SAKAIFITNESS</p>
      </div>
    </div>
  );
}

export default Hero;
