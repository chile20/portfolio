// src/Home.js
import React from "react";
// Import Components
import Nav from '../components/nav';
import Footer from '../components/footer';
import Hero from '../components/hero';

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