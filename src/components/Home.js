// src/Home.js
import React from "react";
// Import Components
import Nav from './nav';
import Footer from './footer';
import Hero from './hero';

function Home(props) {
  return (
    <div className="App"> 
      <Nav />
        <Hero />
      <Footer />
    </div>
  );
}
 
export default Home;