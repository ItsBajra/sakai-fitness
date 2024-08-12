import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignInClick = () => {
    navigate("/login");
  };

  const handleInternalLinkClick = (id) => {
    // Check if we're on the home page
    if (location.pathname === "/") {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home and scroll to the section
      navigate("/", { state: { scrollTo: id } });
    }
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
          href="/"
          className="hover:text-red-500 transition-colors duration-500"
        >
          Home
        </a>
        <a
          onClick={() => handleInternalLinkClick("bmi")}
          className="cursor-pointer hover:text-red-500 transition-colors duration-500"
        >
          BMI
        </a>
        <a
          href="/workoutlog"
          className="hover:text-red-500 transition-colors duration-500"
        >
          WorkoutLog
        </a>
        <a
          href="/history"
          className="hover:text-red-500 transition-colors duration-500"
        >
          History
        </a>
        <a
          href="/workoutpage"
          className="hover:text-red-500 transition-colors duration-500"
        >
          Workouts
        </a>
        <a
          onClick={() => handleInternalLinkClick("services")}
          className="cursor-pointer hover:text-red-500 transition-colors duration-500"
        >
          Our Services
        </a>
        <a
          onClick={() => handleInternalLinkClick("about")}
          className="cursor-pointer hover:text-red-500 transition-colors duration-500"
        >
          About
        </a>
        <a
          onClick={() => handleInternalLinkClick("contact")}
          className="cursor-pointer hover:text-red-500 transition-colors duration-500"
        >
          Contact
        </a>
        <button
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-500"
          onClick={handleSignInClick}
        >
          Sign In
        </button>
      </div>

      {/* Slide-In Menu for Smaller Screens */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-black transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-20`}
      >
        <div className="flex flex-col space-y-6 p-8 text-center">
          <a
            href="/"
            onClick={() => {
              toggleMenu();
              navigate("/");
            }}
            className="hover:text-red-500 transition-colors duration-500"
          >
            Home
          </a>
          <a
            onClick={() => {
              toggleMenu();
              handleInternalLinkClick("bmi");
            }}
            className="cursor-pointer hover:text-red-500 transition-colors duration-500"
          >
            BMI
          </a>
          <a
            href="/workoutlog"
            onClick={() => {
              toggleMenu();
            }}
            className="hover:text-red-500 transition-colors duration-500"
          >
            WorkoutLog
          </a>
          <a
            href="/history"
            onClick={() => {
              toggleMenu();
            }}
            className="hover:text-red-500 transition-colors duration-500"
          >
            History
          </a>
          <a
            onClick={() => {
              toggleMenu();
              handleInternalLinkClick("services");
            }}
            className="cursor-pointer hover:text-red-500 transition-colors duration-500"
          >
            Our Services
          </a>
          <a
            onClick={() => {
              toggleMenu();
              handleInternalLinkClick("about");
            }}
            className="cursor-pointer hover:text-red-500 transition-colors duration-500"
          >
            About
          </a>
          <a
            onClick={() => {
              toggleMenu();
              handleInternalLinkClick("contact");
            }}
            className="cursor-pointer hover:text-red-500 transition-colors duration-500"
          >
            Contact
          </a>
          <button
            onClick={() => {
              toggleMenu();
              handleSignInClick();
            }}
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
