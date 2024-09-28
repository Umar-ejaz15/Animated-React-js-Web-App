import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
<<<<<<< HEAD
import { Analytics } from "@vercel/analytics/react"
=======
>>>>>>> 8cc5f1b (final)

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="w-full h-screen" data-scroll-container>
<<<<<<< HEAD
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
        <Cards />
        <Footer />
        <Analytics />
=======
        <Navbar  />
        <LandingPage  />
        <Marquee  />
        <About  />
        <Eyes  />
        <Featured  />
        <Cards  />
        <Footer  />
>>>>>>> 8cc5f1b (final)
      </div>
    </>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 8cc5f1b (final)
