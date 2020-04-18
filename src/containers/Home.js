// src/Home.js
import React from "react";
// Import Components
import Nav from '../components/nav';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Articles from '../components/articles';

function Home(props) {
  return (
    <div className="App"> 
      <Nav />
        <Hero />
        <Articles />
      <Footer />
    </div>
  );
}
 
export default Home;