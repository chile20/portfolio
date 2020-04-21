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

      <div className="relative h-40 sm:h-64">
          <img alt="gallery" className="inset-0 w-full sm:w-10/12 h-full object-cover sm:rounded-lg float-right" src={bannerAbout} />
            <div className="absolute top-0 rounded-lg py-12 sm:py-24 px-4">  
              <h1 className="text-2xl sm:text-3xl font-semibold text-left"><span className="">Hi there</span><span className="sm:px-3"></span> <span className="sm:text-white">I'm Chi</span></h1>
              <p className="text-left text-sm font-semibold">product designer <span className="sm:px-3"></span><span className="text-white">from Long Beach</span></p>
            </div>
      </div>
      
      {/* <div className="flex relative h-48 sm:h-64">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover sm:rounded-lg" src={bannerAbout} />
            <div className="px-4 py-16 relative z-10 rounded-lg p-6">  
              <h1 className="text-2xl text-lg font-semibold text-left text-white">Hi there, I'm Chi</h1>
              <p className="text-white text-left text-sm font-semibold">product designer from Long Beach</p>
            </div>
      </div> */}


<div className="max-w-4xl mx-auto p-4">
    <h1 className="pt-4 pb-1 text-left text-2xl font-semibold">I am a</h1>
    <div className="text-left text-base font-regular text-gray-500">
    <p className="py-3">Innovative product designer</p>
    <p className="py-3">Learning front-end developer</p>
    <p className="py-3">Passionate cook with a huge sweet tooth</p>
    </div>
    <h1 className="pt-4 pb-1 text-left text-2xl font-semibold">What I'm doing</h1>
    <div className="text-left text-base font-regular text-gray-500">
    <p className="py-3">Design and code my portfolio using ReactJS</p>
    </div>
    </div>
      </div>

    
      <Footer />
    </div>
  );
}
 
export default About;