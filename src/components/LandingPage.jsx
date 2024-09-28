import { motion } from "framer-motion";
import React from "react";

const LandingPage = () => {
  
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 text-white pt-1 flex flex-col justify-between">
<<<<<<< HEAD
        <div className="textstructure mt-10 sm:mt-20 md:mt-30 lg:mt-40 px-2 sm:px-4 md:px-10 lg:px-20">
          {["we Create", "Eye Opening", "Presentations"].map((item, index) => (
            <motion.div
              key={index}
              className="flex capitalize gap-2 sm:gap-3 md:gap-4 font-bold"
=======
        <div className="textstructure mt-20 md:mt-40 px-4 md:px-20">
          {["we Create", "Eye Opening", "Presentations"].map((item, index) => (
            <motion.div
              key={index}
              className="flex capitalize gap-4 font-bold"
>>>>>>> 8cc5f1b (final)
              data-scroll
              data-scroll-speed={index === 0 ? "0.1" : index === 1 ? "0.2" : "0.3"}
            >
              <a
<<<<<<< HEAD
                className={`text-2xl sm:text-3xl md:text-5xl lg:text-7xl uppercase tracking-tighter ${
                  (index === 1 && "ml-0 sm:ml-5 md:ml-10 lg:ml-20") || (index === 2 && "ml-0 sm:ml-3 md:ml-6 lg:ml-10")
=======
                className={`text-4xl md:text-7xl uppercase tracking-tighter ${
                  (index === 1 && "ml-0 md:ml-20") || (index === 2 && "ml-0 md:ml-10")
>>>>>>> 8cc5f1b (final)
                }`}
              >
                {item}
              </a>
            </motion.div>
          ))}
        </div>
<<<<<<< HEAD
        <div className="border-t-[1px] border-zinc-600 mt-5 sm:mt-10 md:mt-15 lg:mt-20 flex flex-col sm:flex-row justify-evenly py-2 uppercase text-xs sm:text-sm">
          {["For public and private companies", "from the first pitch to IPO"].map((item, index) => (
            <motion.p
              key={index}
              className="text-center sm:text-left mb-2 sm:mb-0"
=======
        <div className="border-t-[1px] border-zinc-600 mt-10 md:mt-20 flex flex-col md:flex-row justify-evenly py-2 uppercase text-xs md:text-sm">
          {["For public and private companies", "from the first pitch to IPO"].map((item, index) => (
            <motion.p
              key={index}
              className="text-center md:text-left mb-2 md:mb-0"
>>>>>>> 8cc5f1b (final)
              data-scroll
              data-scroll-speed={index === 0 ? "0.1" : "0.2"}
            >
              {item}
            </motion.p>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
