import React, { Component } from 'react';
import SampleCard from './sampleCard';

class Articles extends Component {
  render() {
    return (
<section className="body-font">

  <div className="container max-w-4xl mx-auto py-8 sm:py-4 sm:pb-4 px-4">
    <div className="flex flex-col text-center w-full mb-8">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2">Featured Projects</h1>
    </div>
    <div className="flex flex-wrap -m-4">

    <SampleCard 
        cardSubtitle={"UI-UX"}
        cardTitle={"Travaria"}
        cardDescription={"A travel platform" }
    /> 

<SampleCard 
        cardSubtitle={"UI-UX"}
        cardTitle={"Travaria"}
        cardDescription={"A travel platform" }
    /> 


<SampleCard 
        cardSubtitle={"UI-UX"}
        cardTitle={"Travaria"}
        cardDescription={"A travel platform" }
    /> 

<SampleCard 
        cardSubtitle={"UI-UX"}
        cardTitle={"Travaria"}
        cardDescription={"A travel platform" }
    /> 

    </div>
  </div>
</section>


    );
}
}


export default Articles;
