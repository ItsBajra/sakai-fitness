import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-black text-white flex flex-col items-center space-y-6 py-8 transition-transform duration-500 ease-in-out z-20">
          <a href="#home" className="text-xl md:text-2xl hover:text-red-500 transition-colors duration-500" onClick={toggleMenu}>Home</a>
          <a href="#workout" className="text-xl md:text-2xl hover:text-red-500 transition-colors duration-500" onClick={toggleMenu}>Workout</a>
          <a href="#about" className="text-xl md:text-2xl hover:text-red-500 transition-colors duration-500" onClick={toggleMenu}>About</a>
          <a href="#contact" className="text-xl md:text-2xl hover:text-red-500 transition-colors duration-500" onClick={toggleMenu}>Contact</a>
          <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-500 text-xl md:text-2xl" onClick={toggleMenu}>Sign In</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
