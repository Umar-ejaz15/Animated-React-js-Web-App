import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed text-white z-50 w-full px-4 sm:px-20 py-2 flex flex-wrap justify-between items-center">
      <div>
        <h1 className="font-semibold text-xl">OCHI</h1>
      </div>
      <button
        className="sm:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:flex w-full sm:w-auto mt-4 sm:mt-0`}>
        <div className="flex flex-col sm:flex-row gap-4">
          {["Services", "About", "Our Work", "insights", "contact"].map((item, index) => (
            <div key={index} className="flex capitalize">
              <a className={`text-sm ${index === 4 ? "sm:ml-32" : ""}`}>{item}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;