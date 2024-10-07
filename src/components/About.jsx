import React from "react";

const About = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-speed="-0.1"
        className="bg-blue-900 text-black py-10 sm:py-20"
      >
        <h1 className="text-2xl sm:text-3xl md:text-[3vw] px-4 sm:px-10 leading-tight sm:leading-none w-full sm:w-[90vw] md:w-[80vw] tracking-tight sm:tracking-tighter">
          ouchi is a creative agency that helps startups and companies to create
          and design their brand and products. We are a team of creative and
          passionate people who are dedicated to helping our clients achieve
          their goals.
        </h1>
        <div className="border-b-2 mt-6 sm:mt-10 border-lime-500 mb-6 sm:mb-10"></div>
        <div className="flex flex-col md:flex-row justify-between items-center py-8 sm:py-12 px-4 md:px-8">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 order-2 md:order-none">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
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
