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
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className="w-full h-screen" data-scroll-container>
        <Navbar />
        <LandingPage />
        <Marquee />
        <About />
        <Eyes />
        <Featured />
        <Cards />
        <Footer />
        <Analytics />
      </div>
    </>
  );
};

export default App;
