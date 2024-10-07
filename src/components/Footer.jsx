import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white flex flex-col md:flex-row justify-center items-center">
      <div className="w-full md:w-1/2 p-4 md:p-10 flex flex-col justify-between items-between">
        <div className="uppercase text-3xl md:text-6xl leading-none tracking-tighter font-bold">
          <h3 className="text-base md:text-xl font-light">Ouchi</h3>
          <h1>Eye</h1>
          <h1>Opening</h1>
        </div>
        <div className="mt-4 md:mt-0">
          <h1 className="text-xl md:text-2xl">ouchi</h1>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 md:p-10 flex flex-col justify-center gap-6 md:gap-20 items-between">
        <div className="uppercase text-3xl md:text-6xl leading-none tracking-tighter font-bold">
          <h1>Presentation</h1>
        </div>
        <div className="flex flex-wrap gap-4">
          {["facebook", "twitter", "instagram", "linkedin"].map((icon) => (
            <div key={icon} className="flex items-center">
              <a href={`https://www.${icon}.com`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 text-sm md:text-base">
                {icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
