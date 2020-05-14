// src/About.js
import React from "react";
// Import Components
import Footer from '../components/footer';
// Import Assets
import bannerAbout from '../assets/images/img-about-banner.png';
import Resume from '../assets/chile-resume.pdf';

function About(props) {
  return (
    <div className="App"> 
      <div className="max-w-4xl mx-auto p-4">

      <div className="md:relative h-64 sm:h-64">
          <img alt="gallery" className="md:inset-0 w-full md:w-5/6 h-40 md:h-64 object-cover md:rounded-lg md:float-right" src={bannerAbout} />
            <div className="md:absolute md:top-0 py-6 md:py-24">  
              <h1 className="text-base sm:text-4xl font-semibold text-left py-1"><span className="">Hi there</span><span className="md:px-2"></span> <span className="md:text-white">I'm Chi</span></h1>
              <p className="text-left text-base font-semibold pb-2">product designer <span className="md:px-3"></span><span className="md:text-white">from Long Beach, CA</span></p>
            </div>
      </div>

<div className="sm:flex max-w-4xl mx-auto py-4 sm:py-16">
    <h1 className="sm:w-1/2 pb-1 text-left text-base sm:text-4xl font-semibold">I am also a</h1>
      <div className="sm:w-1/2 text-left text-base sm:text-lg font-regular">
      <p className="py-1 sm:py-4">• <span className="px-1"></span>College student in Cypress College</p>
      <p className="py-1 sm:py-4">• <span className="px-1"></span>Learning front-end developer</p>
      <p className="py-1 sm:py-4">• <span className="px-1"></span>Aspiring baker with a huge sweet tooth</p>
      </div>
</div>

<div className="sm:flex max-w-4xl mx-auto py-4 sm:py-16">
    <h1 className="sm:w-1/2 pb-1 text-left text-base sm:text-4xl font-semibold">What I am doing</h1>
      <div className="sm:w-1/2 text-left text-base sm:text-lg font-regular">
      <p className="py-1 sm:py-4">• <span className="px-1"></span>Revise my portfolio using Gatsby</p>
      <p className="py-1 sm:py-4">• <span className="px-1"></span>Look for an internship or part-time job</p>
      </div>
</div>


      </div>

    
      <Footer />
    </div>
  );
}
 
export default About;