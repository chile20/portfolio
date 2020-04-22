// src/Work.js
import React from "react";
// Import Components
import Footer from '../components/footer';
import Stats from '../components/stats';
import Articles from '../components/articles';

function Work(props) {
  return (
    <div className="App">
        <Stats />
        <Articles />
      <Footer />
    </div>
  );
}
 
export default Work;