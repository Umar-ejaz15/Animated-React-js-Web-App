import React from "react";

const About = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-speed="-0.1"
<<<<<<< HEAD
        className="bg-blue-400 text-black py-8 sm:py-12 md:py-16 lg:py-20"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[3vw] px-4 sm:px-6 md:px-8 lg:px-10 leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed w-full sm:w-[95vw] md:w-[90vw] lg:w-[80vw] tracking-tight sm:tracking-tighter">
=======
        className="bg-lime-300 text-black py-10 sm:py-20"
      >
        <h1 className="text-2xl sm:text-3xl md:text-[3vw] px-4 sm:px-10 leading-tight sm:leading-none w-full sm:w-[90vw] md:w-[80vw] tracking-tight sm:tracking-tighter">
>>>>>>> 8cc5f1b (final)
          ouchi is a creative agency that helps startups and companies to create
          and design their brand and products. We are a team of creative and
          passionate people who are dedicated to helping our clients achieve
          their goals.
        </h1>
<<<<<<< HEAD
        <div className="border-b-2 mt-4 sm:mt-6 md:mt-8 lg:mt-10 border-lime-500 mb-4 sm:mb-6 md:mb-8 lg:mb-10"></div>
        <div className="flex flex-col md:flex-row justify-between items-center py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 order-2 md:order-none">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
=======
        <div className="border-b-2 mt-6 sm:mt-10 border-lime-500 mb-6 sm:mb-10"></div>
        <div className="flex flex-col md:flex-row justify-between items-center py-8 sm:py-12 px-4 md:px-8">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 order-2 md:order-none">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
>>>>>>> 8cc5f1b (final)
              Our Approach
            </h1>
            <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-zinc-600 transition duration-300">
              Read More
            </button>
          </div>
          <div className="w-full md:w-1/2 mb-6 md:mb-0 order-1 md:order-none">
            <img
              src="https://cdn.hswstatic.com/gif/modal-fabric.jpg"
              alt=""
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
