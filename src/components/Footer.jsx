import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-screen bg-black text-white flex justify-center items-center">
      <div className="w-1/2 p-10 h-screen flex flex-col justify-between  items-between">
        <div className="uppercase text-6xl leading-none tracking-tighter font-bold "> 
          <h3 className="text-xl font-light">Ouchi</h3>
          <h1>Eye</h1>
          <h1>Opening</h1>
        </div>
        <div className="">
          <h1>ouchi</h1>
        </div>
      </div>
      <div className="w-1/2 p-10 h-screen flex flex-col justify-center gap-20 items-between">
        <div className="uppercase text-6xl leading-none tracking-tighter font-bold "> 
         
          <h1>Presentation</h1>
         
        </div>
        <div className="">
         {["facebook", "twitter", "instagram", "linkedin"].map((icon) => (
            <div key={icon} className="flex items-center">
              <a href={`https://www.${icon}.com`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
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
