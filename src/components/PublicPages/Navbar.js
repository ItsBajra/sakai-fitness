import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuthContext();

  // Determine if the user is an admin based on email
  const isAdmin = user && user.email === "admin@admin.com";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignInClick = () => {
    navigate("/login");
  };

  const handleInternalLinkClick = (id) => {
    if (location.pathname === "/") {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <nav className="bg-black text-white py-4 px-8 flex justify-between items-center relative z-20">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="SakaiFitness" className="h-8" />
        <span className="text-2xl font-bold">SAKAIFITNESS</span>
      </div>

      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? (
          <AiOutlineClose size={24} />
        ) : (
          <AiOutlineMenu size={24} />
        )}
      </div>

      <div className="hidden md:flex space-x-6 items-center transition-transform duration-500">
        {!user ? (
          <>
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
              onClick={() => handleInternalLinkClick("services")}
              className="cursor-pointer hover:text-red-500 transition-colors duration-500"
            >
              Our Services
            </a>
            <a
              onClick={() => handleInternalLinkClick("about")}
              className="cursor-pointer hover:text-red-500 transition-colors duration-500"
            >
              About Us
            </a>
            <a
              onClick={() => handleInternalLinkClick("contact")}
              className="cursor-pointer hover:text-red-500 transition-colors duration-500"
            >
              Contact Us
            </a>
            <button
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-500"
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          </>
        ) : isAdmin ? (
          <>
            <a
              href="/workoutpage"
              className="hover:text-red-500 transition-colors duration-500"
            >
              Workouts
            </a>
            <a
              href="/admin/workouts"
              className="hover:text-red-500 transition-colors duration-500"
            >
              Manage Workouts
            </a>
            <a
              href="/admin/users"
              className="hover:text-red-500 transition-colors duration-500"
            >
              Manage Users
            </a>
            <button
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-500"
              onClick={handleLogoutClick}
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <a
              href="/"
              className="hover:text-red-500 transition-colors duration-500"
            >
              Home
            </a>
            <a
              href="/workoutpage"
              className="hover:text-red-500 transition-colors duration-500"
            >
              Workouts
            </a>
            <a
              href="/workoutlog"
              className="hover:text-red-500 transition-colors duration-500"
            >
              Workout Log
            </a>
            <a
              href="/history"
              className="hover:text-red-500 transition-colors duration-500"
            >
              History
            </a>
            <a
              onClick={() => handleInternalLinkClick("contact")}
              className="cursor-pointer hover:text-red-500 transition-colors duration-500"
            >
              Contact
            </a>
            <button
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-500"
              onClick={handleLogoutClick}
            >
              Log Out
            </button>
          </>
        )}
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-black transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-50`}
        style={{ zIndex: 9999 }}
      >
        <div className="flex flex-col space-y-6 p-8 text-center">
          {!user ? (
            <>
              <a
                href="/"
                className="hover:text-red-500 transition-colors duration-500"
              >
                Home
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
            </>
          ) : isAdmin ? (
            <>
              <a
                href="/workoutpage"
                className="hover:text-red-500 transition-colors duration-500"
              >
                Workouts
              </a>
              <a
                href="/admin/workouts"
                onClick={() => {
                  toggleMenu();
                }}
                className="hover:text-red-500 transition-colors duration-500"
              >
                Manage Workouts
              </a>
              <a
                href="/admin/users"
                onClick={() => {
                  toggleMenu();
                }}
                className="hover:text-red-500 transition-colors duration-500"
              >
                Manage Users
              </a>
              <button
                onClick={() => {
                  toggleMenu();
                  handleLogoutClick();
                }}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-500"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <a
                href="/workoutpage"
                onClick={() => {
                  toggleMenu();
                }}
                className="hover:text-red-500 transition-colors duration-500"
              >
                Workouts
              </a>
              <a
                href="/workoutlog"
                onClick={() => {
                  toggleMenu();
                }}
                className="hover:text-red-500 transition-colors duration-500"
              >
                Workout Log
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
                  handleInternalLinkClick("contact");
                }}
                className="cursor-pointer hover:text-red-500 transition-colors duration-500"
              >
                Contact
              </a>
              <button
                onClick={() => {
                  toggleMenu();
                  handleLogoutClick();
                }}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-500"
              >
                Log Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
