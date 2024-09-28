import { motion } from "framer-motion";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";

const Marquee = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div
      className="w-full py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 bg-green-800 text-white"
      data-scroll={!isMobile ? true : undefined}
      data-scroll-speed={!isMobile ? "-0.1" : undefined}
    >
      <div className="text uppercase font-black border-t-2 border-b-2 border-zinc-200 gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 overflow-hidden flex whitespace-nowrap tracking-tighter">
=======
import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-6 sm:py-10 md:py-16 lg:py-20 bg-green-800 text-white" data-scroll data-scroll-speed="-0.1">
      <div className="text uppercase font-black border-t-2 border-b-2 border-zinc-200 gap-1 sm:gap-2 md:gap-3 lg:gap-5 overflow-hidden flex whitespace-nowrap tracking-tighter">
>>>>>>> 8cc5f1b (final)
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex"
        >
<<<<<<< HEAD
          <h1 className="text-[4vw] sm:text-[5vw] md:text-[6vw] lg:text-[7vw] xl:text-[8vw] leading-none mr-2 sm:mr-3 md:mr-4">
            We are Ochi
          </h1>
          <h1 className="text-[4vw] sm:text-[5vw] md:text-[6vw] lg:text-[7vw] xl:text-[8vw] leading-none mr-2 sm:mr-3 md:mr-4">
            We are Ochi
          </h1>
          <h1 className="text-[4vw] sm:text-[5vw] md:text-[6vw] lg:text-[7vw] xl:text-[8vw] leading-none mr-2 sm:mr-3 md:mr-4">
=======
          <h1 className="text-[6vw] sm:text-[7vw] md:text-[8vw] lg:text-[9vw] -leading-6 mr-4">
            We are Ochi
          </h1>
          <h1 className="text-[6vw] sm:text-[7vw] md:text-[8vw] lg:text-[9vw] -leading-6 mr-4">
            We are Ochi
          </h1>
          <h1 className="text-[6vw] sm:text-[7vw] md:text-[8vw] lg:text-[9vw] -leading-6 mr-4">
>>>>>>> 8cc5f1b (final)
            We are Ochi
          </h1>
        </motion.div>
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex"
        >
<<<<<<< HEAD
          <h1 className="text-[4vw] sm:text-[5vw] md:text-[6vw] lg:text-[7vw] xl:text-[8vw] leading-none mr-2 sm:mr-3 md:mr-4">
            We are Ochi
          </h1>
          <h1 className="text-[4vw] sm:text-[5vw] md:text-[6vw] lg:text-[7vw] xl:text-[8vw] leading-none mr-2 sm:mr-3 md:mr-4">
            We are Ochi
          </h1>
          <h1 className="text-[4vw] sm:text-[5vw] md:text-[6vw] lg:text-[7vw] xl:text-[8vw] leading-none mr-2 sm:mr-3 md:mr-4">
=======
          <h1 className="text-[6vw] sm:text-[7vw] md:text-[8vw] lg:text-[9vw] -leading-6 mr-4">
            We are Ochi
          </h1>
          <h1 className="text-[6vw] sm:text-[7vw] md:text-[8vw] lg:text-[9vw] -leading-6 mr-4">
            We are Ochi
          </h1>
          <h1 className="text-[6vw] sm:text-[7vw] md:text-[8vw] lg:text-[9vw] -leading-6 mr-4">
>>>>>>> 8cc5f1b (final)
            We are Ochi
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;