// src/About.js
import React from "react";
// Import Components
import Footer from '../components/footer';
// Import Assets
import bannerAbout from '../assets/images/img-about-banner.png';

function About(props) {
  return (
    <div className="App"> 
      <div className="max-w-4xl mx-auto sm:p-4">
      <div className="flex relative h-40 sm:h-64">
  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover sm:rounded-lg" src={bannerAbout} />
  <div className="px-4 py-12 relative z-10 rounded-lg p-6">  
            <h1 className="text-2xl text-lg font-semibold text-left text-white">Hi there, I'm Chi</h1>
            <p className="text-white text-left text-sm">a product designer from Long Beach</p>
  </div>
</div>
<div className="lg:h-64 max-w-4xl mx-auto p-4">
    <h1 className="text-left text-2xl ">I am</h1>
    </div>
      </div>

    
      <Footer />
    </div>
  );
}
 
export default About;