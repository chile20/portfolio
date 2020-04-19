import React, { Component } from 'react';
import SampleCard from './sampleCard';

class Articles extends Component {
  render() {
    return (
<section className="text-gray-700 body-font">

  <div className="container max-w-4xl mx-auto py-8 sm:py-4 sm:pb-4 px-4">
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
