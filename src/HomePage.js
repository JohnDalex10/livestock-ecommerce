import React from "react";
import Header from "./Header.js";
import Slider from "./slider/Slider.js";
import Home from "./Home.js";

function HomePage() {
  return (
    <div className="bg-black">
      <Header />  
      <Slider />
      <Home />
    </div>
  );
}

export default HomePage;
