import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-8 flex justify-between items-center relative z-10 ">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="SakaiFitness" className="h-8" />
        <span className="text-2xl font-bold">SAKAIFITNESS</span>
      </div>
      <div className="hidden md:flex space-x-6 items-center transition-transform duration-500">
        <a href="#home" className="hover:text-red-500 transition-colors duration-500">Home</a>
        <a href="#workout" className="hover:text-red-500 transition-colors duration-500">Workout</a>
        <a href="#about" className="hover:text-red-500 transition-colors duration-500">About</a>
        <a href="#contact" className="hover:text-red-500 transition-colors duration-500">Contact</a>
        <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-500">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;
