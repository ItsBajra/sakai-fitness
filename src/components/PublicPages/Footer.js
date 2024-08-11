import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 text-center">
      <p className="text-xl">Ready to Transform Your Fitness Routine?</p>
      <p className="text-2xl font-bold mt-2">JOIN SAKAIFITNESS TODAY!</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="#privacy" className="hover:text-red-500">
          Privacy and Policy
        </a>
        <a href="#terms" className="hover:text-red-500">
          Terms & Conditions
        </a>
      </div>
      <div className="mt-4">
        <a href="mailto:info@sakaifitness.com" className="hover:text-red-500">
          info@sakaifitness.com
        </a>
      </div>
      <div className="mt-4 space-x-4">
        <a href="#facebook" className="hover:text-red-500">
          Facebook
        </a>
        <a href="#instagram" className="hover:text-red-500">
          Instagram
        </a>
        <a href="#youtube" className="hover:text-red-500">
          YouTube
        </a>
      </div>
    </footer>
  );
};

export default Footer;
