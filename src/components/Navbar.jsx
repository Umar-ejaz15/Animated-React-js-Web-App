import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed text-white z-50 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-xl">OCHI</h1>
          </div>
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {["Services", "About", "Our Work", "insights", "contact"].map((item, index) => (
              <a key={index} href="#" className={`text-sm capitalize hover:text-gray-300 transition-colors duration-200 ${index === 4 ? "ml-8 lg:ml-32" : ""}`}>
                {item}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-white focus:outline-none"
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
        </div>
      </div>
      {(isMenuOpen || windowWidth >= 768) && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col py-2">
            {["Services", "About", "Our Work", "insights", "contact"].map((item, index) => (
              <a key={index} href="#" className="text-sm capitalize text-gray-800 hover:bg-gray-100 px-4 py-2 transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;