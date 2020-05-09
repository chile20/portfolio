import React, { Component } from "react";
// Import Components
// Import Photos
import coverDoyou from "../../assets/images/img-cover-doyou.png";
import coverTravaria from "../../assets/images/img-cover-travaria.png";
import coverDoyou2 from "../../assets/images/img-cover-doyou2.png";
import coverLeap from "../../assets/images/img-cover-leap.png";
import coverSB from "../../assets/images/starbucks-2x.png";

class CaseStudy extends Component {
  render() {
    return (
      <section className="max-w-6xl mx-auto px-4 sm:flex">
        <div className="sm:w-1/7">
          <h1 className="font-semibold tracking-widest text-2xl text-center py-10 sm:hidden">
            Case Study
          </h1>
          <h1 className="font-semibold text-gray-400 tracking-widest text-2xl vertical-rl hidden sm:block pl-10">
            Case Study
          </h1>
          <div className=" border-1" />
        </div>
        <div className="sm:flex sm:w-6/7">
          <div className="sm:w-1/2 pt-4 sm:pt-0 pb-10 sm:mt-0 sm:mx-10">
            <img src={coverSB} />
            <h1 className="font-light text-center pt-10">Starbucks Redesign</h1>
            <h1 className="font-light text-center text-gray-500 pt-1">
              Interaction Design
            </h1>
          </div>
          <div className="sm:w-1/2 pt-10 pb-10 sm:mx-10">
            <img src={coverSB} />
            <h1 className="font-light text-center pt-10">Starbucks Redesign</h1>
            <h1 className="font-light text-center text-gray-500 pt-1">
              Interaction Design
            </h1>
          </div>
        </div>
      </section>
    );
  }
}

export default CaseStudy;
