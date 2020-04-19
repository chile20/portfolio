// src/Work.js
import React from "react";
// Import Components
import Footer from '../components/footer';
import Hero from '../components/hero';
import Articles from '../components/articles';

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