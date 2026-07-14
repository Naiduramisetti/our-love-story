import "./App.css";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Ending from "./components/Ending";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import LoveLetter from "./components/LoveLetter";
import Story from "./components/Story";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 120,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="app">

      {/* Hero */}
      <Hero />

      {/* Story */}
      <Story />

      {/* Gallery */}
      <Gallery />

      {/* Love Letter */}
      <LoveLetter />

      {/* Ending */}
      <Ending />

    </div>
  );
}

export default App;