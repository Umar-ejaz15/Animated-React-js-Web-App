import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-6 sm:py-10 md:py-16 lg:py-20 bg-green-800 text-white" data-scroll data-scroll-speed="-0.1">
      <div className="text uppercase font-black border-t-2 border-b-2 border-zinc-200 gap-1 sm:gap-2 md:gap-3 lg:gap-5 overflow-hidden flex whitespace-nowrap tracking-tighter">
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex"
        >
          <h1 className="text-[6vw] sm:text-[7vw] md:text-[8vw] lg:text-[9vw] -leading-6 mr-4">
            We are Ochi
          </h1>
          <h1 className="text-[6vw] sm:text-[7vw] md:text-[8vw] lg:text-[9vw] -leading-6 mr-4">
            We are Ochi
          </h1>
          <h1 className="text-[6vw] sm:text-[7vw] md:text-[8vw] lg:text-[9vw] -leading-6 mr-4">
            We are Ochi
          </h1>
        </motion.div>
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex"
        >
          <h1 className="text-[6vw] sm:text-[7vw] md:text-[8vw] lg:text-[9vw] -leading-6 mr-4">
            We are Ochi
          </h1>
          <h1 className="text-[6vw] sm:text-[7vw] md:text-[8vw] lg:text-[9vw] -leading-6 mr-4">
            We are Ochi
          </h1>
          <h1 className="text-[6vw] sm:text-[7vw] md:text-[8vw] lg:text-[9vw] -leading-6 mr-4">
            We are Ochi
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;