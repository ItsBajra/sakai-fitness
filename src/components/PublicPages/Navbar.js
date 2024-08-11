import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white py-4 px-8 flex justify-between items-center relative z-10">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="SakaiFitness" className="h-8" />
        <span className="text-2xl font-bold">SAKAIFITNESS</span>
      </div>

      {/* Menu Icon for Smaller Screens */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? (
          <AiOutlineClose size={24} />
        ) : (
          <AiOutlineMenu size={24} />
        )}
      </div>

      {/* Main Menu for Larger Screens */}
      <div className="hidden md:flex space-x-6 items-center transition-transform duration-500">
        <a
          href="#home"
          className="hover:text-red-500 transition-colors duration-500"
        >
          Home
        </a>
        <a
          href="#bmi"
          className="hover:text-red-500 transition-colors duration-500"
        >
          BMI
        </a>
        <a
          href="#workout"
          className="hover:text-red-500 transition-colors duration-500"
        >
          Workout
        </a>
        <a
          href="#services"
          className="hover:text-red-500 transition-colors duration-500"
        >
          Our Services
        </a>
        <a
          href="#about"
          className="hover:text-red-500 transition-colors duration-500"
        >
          About
        </a>
        <a
          href="#contact"
          className="hover:text-red-500 transition-colors duration-500"
        >
          Contact
        </a>
        <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-500">
          Sign In
        </button>
      </div>

      {/* Slide-In Menu for Smaller Screens */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-black transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-20`}
      >
        <div className="flex flex-col space-y-6 p-8">
          <a
            href="#home"
            onClick={toggleMenu}
            className="hover:text-red-500 transition-colors duration-500"
          >
            Home
          </a>
          <a
            href="#bmi"
            onClick={toggleMenu}
            className="hover:text-red-500 transition-colors duration-500"
          >
            BMI
          </a>
          <a
            href="#workout"
            onClick={toggleMenu}
            className="hover:text-red-500 transition-colors duration-500"
          >
            Workout
          </a>
          <a
            href="#services"
            onClick={toggleMenu}
            className="hover:text-red-500 transition-colors duration-500"
          >
            Our Services
          </a>
          <a
            href="#about"
            onClick={toggleMenu}
            className="hover:text-red-500 transition-colors duration-500"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="hover:text-red-500 transition-colors duration-500"
          >
            Contact
          </a>
          <button
            onClick={toggleMenu}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-500"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
