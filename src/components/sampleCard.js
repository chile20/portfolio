
import React from 'react';

const SampleCard = (props) => {
return(

<div className="lg:w-1/2 sm:w-1/2 p-4">
<div className="flex relative text-center lg:h-64">
  <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center rounded-lg" src="https://source.unsplash.com/collection/225/800x600" />
  <div className="px-8 py-20 relative z-10 w-full rounded-lg p-6 bg-black opacity-0 hover:opacity-75">
            {/* <h2 class="card-subtitle" className="text-2xl tracking-widest text-xs title-font font-medium text-gray-500 mb-0">{ props.cardSubtitle}</h2> */}
            <h1 class="card-title" className="text-4xl text-lg font-bold text-white">{ props.cardTitle }</h1>
            <div className="font-semibold text-gray-500">
            <span className="inline-block px-2 py-1 text-sm mr-2">UI-UX</span>
            <span className="inline-block py-1 text-sm mr-2">|</span>
            <span className="inline-block px-2 py-1 text-sm">Web Design</span>

  </div>
  </div>
</div>
</div>
    )
}

export default SampleCard;

