import { motion } from "framer-motion";
import React from "react";

const LandingPage = () => {
  
  return (
    <>
      <div className="w-full min-h-screen bg-zinc-900 text-white pt-1 flex flex-col justify-between">
        <div className="textstructure mt-20 md:mt-40 px-4 md:px-20">
          {["we Create", "Eye Opening", "Presentations"].map((item, index) => (
            <motion.div
              key={index}
              className="flex capitalize gap-4 font-bold"
              data-scroll
              data-scroll-speed={index === 0 ? "0.1" : index === 1 ? "0.2" : "0.3"}
            >
              <a
                className={`text-4xl md:text-7xl uppercase tracking-tighter ${
                  (index === 1 && "ml-0 md:ml-20") || (index === 2 && "ml-0 md:ml-10")
                }`}
              >
                {item}
              </a>
            </motion.div>
          ))}
        </div>
        <div className="border-t-[1px] border-zinc-600 mt-10 md:mt-20 flex flex-col md:flex-row justify-evenly py-2 uppercase text-xs md:text-sm">
          {["For public and private companies", "from the first pitch to IPO"].map((item, index) => (
            <motion.p
              key={index}
              className="text-center md:text-left mb-2 md:mb-0"
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
