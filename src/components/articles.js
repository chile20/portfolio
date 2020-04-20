import React, { Component } from 'react';
// Import Components
import SampleCard from './sampleCard';
// Import Photos
import coverDoyou from '../assets/images/img-cover-doyou.png';
import coverTravaria from '../assets/images/img-cover-travaria.png';
import coverDoyou2 from '../assets/images/img-cover-doyou2.png';
import coverLeap from '../assets/images/img-cover-leap.png';

class Articles extends Component {
  render() {
    return (
<section className="text-gray-700 body-font">

  <div className="container max-w-4xl mx-auto py-8 sm:py-4 sm:pb-4 px-4">
    <div className="flex flex-wrap -m-4">

    <SampleCard 
        cardLink={"https://www.behance.net/gallery/95472757/Travaria-Case-Study"}
        cardImage={coverTravaria}
        cardTitle={"Travaria"}
        tagFirst={"MVP"}
        tagSecond={"Web Design"}
        tagThird={"Travel"}
    /> 

<SampleCard 
        cardLink={"https://www.behance.net/gallery/89141261/DoYou-User-Interface-Breakdown"}
        cardImage={coverDoyou2}
        cardTitle={"DOYOU UI"}
        tagFirst={"UI"}
        tagSecond={"Mobile App"}
        tagThird={"Wellness"}
    /> 


<SampleCard 
        cardLink={"https://www.behance.net/gallery/85092555/DoYouYoga-Add-to-Favorites"}
        cardImage={coverDoyou}
        cardTitle={"DOYOU"}
        tagFirst={"Redesign"}
        tagSecond={"Mobile App"}
        tagThird={"Wellness"}
    /> 

<SampleCard 
        cardLink={"https://www.behance.net/gallery/89141269/LeapXpert-Integrated-Chats"}
        cardImage={coverLeap}
        cardTitle={"LeapXpert"}
        tagFirst={"UI - UX"}
        tagSecond={"Web Design"}
        tagThird={"Communication"}
    /> 

    </div>
  </div>
</section>


    );
}
}


export default Articles;
