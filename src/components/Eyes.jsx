import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  const [blackEyePosition, setBlackEyePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = (Math.atan2(deltaY, deltaX) * 180) / Math.PI;
      setRotate(angle - 180);

      // Calculate black eye movement (reduced by a factor)
      const movementFactor = 0.05; // Reduced factor for slower movement
      const maxMovement = 12; // Maximum movement in pixels (half of 24, which is the black eye size)
      setBlackEyePosition({
        x: Math.min(Math.max(deltaX * movementFactor, -maxMovement), maxMovement),
        y: Math.min(Math.max(deltaY * movementFactor, -maxMovement), maxMovement),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
<<<<<<< HEAD
    <div className="w-full h-screen bg-black text-white flex justify-center items-center">
      <div className="flex space-x-4 sm:space-x-8 md:space-x-16 lg:space-x-24">
        <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 relative bg-white rounded-full flex justify-center items-center">
          <div 
            className="w-8 sm:w-12 md:w-20 lg:w-24 relative h-8 sm:h-12 md:h-20 lg:h-24 bg-black rounded-full"
            style={{
              transform: `translate(${blackEyePosition.x * 0.75}px, ${blackEyePosition.y * 0.75}px)`,
=======
    <div  className="w-full h-screen bg-black text-white flex justify-center items-center">
      <div  className="flex space-x-24">
        <div className="w-48 h-48 relative bg-white rounded-full flex justify-center items-center">
          <div 
            className="w-24 relative h-24 bg-black rounded-full"
            style={{
              transform: `translate(${blackEyePosition.x}px, ${blackEyePosition.y}px)`,
>>>>>>> 8cc5f1b (final)
            }}
          >
            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              className="w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
            >
<<<<<<< HEAD
              <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40 lg:w-48 lg:h-48 relative bg-white rounded-full flex justify-center items-center">
          <div 
            className="w-8 sm:w-12 md:w-20 lg:w-24 relative h-8 sm:h-12 md:h-20 lg:h-24 bg-black rounded-full"
            style={{
              transform: `translate(${blackEyePosition.x * 0.75}px, ${blackEyePosition.y * 0.75}px)`,
=======
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-48 h-48 bg-white rounded-full flex justify-center items-center">
          <div 
            className="w-24 relative h-24 bg-black rounded-full"
            style={{
              transform: `translate(${blackEyePosition.x}px, ${blackEyePosition.y}px)`,
>>>>>>> 8cc5f1b (final)
            }}
          >
            <div
              style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
              className="w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
            >
<<<<<<< HEAD
              <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-white rounded-full"></div>
=======
              <div className="w-8 h-8 bg-white rounded-full"></div>
>>>>>>> 8cc5f1b (final)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;