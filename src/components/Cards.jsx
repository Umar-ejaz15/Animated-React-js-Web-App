import React from "react";

const Cards = () => {
  const card = [
    {
      h1: "ouchi",
      lowertext: "2019-2023",
    },
    {
      h1: "Clutch",
      lowertext: "Rating 5.0 On clutch",
    },
    {
      h1: "Business Books",
      lowertext: "2019-2023",
    },
  ];
  return (
    <div className=" w-full h-screen flex items-center flex-wrap justify-center gap-6">
      {card.map((card, index) => (
        <div
          key={index}
          className={` shadow-lg rounded-lg p-6 w-64 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 
           ${
             (index === 0 && "bg-black text white w-[40vw] h-[70vh] ") ||
             (index === 1 && "bg-zinc-500 text white w-[20vw] h-[70vh] ") ||
             (index === 2 && "bg-red-500 text white w-[20vw] h-[70vh] ")

           }`}
        >
          <h1 className="text-2xl font-bold text-white mb-2">{card.h1}</h1>
          <p className="text-lg text-white">{card.lowertext}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
