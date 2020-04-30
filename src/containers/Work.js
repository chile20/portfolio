// src/Work.js
import React from "react";
// Import Components
import Footer from "../components/footer";
import Articles from "../components/sections/articles";
import Hero from "../components/sections/hero";

function Work(props) {
  return (
    <div className="App">
      <Hero />
      <Articles />
      <Footer />
    </div>
  );
}

export default Work;
