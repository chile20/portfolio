// src/Work.js
import React from "react";
// Import Components
import Footer from "../components/footer";
import CaseStudy from "../components/sections/caseStudy";
import VisualDesign from "../components/sections/visualDesign";
import Others from "../components/sections/otherDesign";
import Hero from "../components/sections/hero";

function Work(props) {
  return (
    <div className="App">
      <Hero />
      <CaseStudy />
      <VisualDesign />
      <Others />
      <Footer />
    </div>
  );
}

export default Work;
