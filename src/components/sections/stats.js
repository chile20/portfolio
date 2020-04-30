import React, { Component } from 'react';


class Stats extends Component {
  render() {
    return (

<section className="body-font">
  <div className="max-w-6xl mx-auto py-4 px-4">

    <div className="border border-gray-300 p-2 sm:py-4 rounded-lg">
      <div className="flex flex-wrap tex-center w-full">
        <div className="p-2 w-1/3">
          <h2 className="title-font font-semibold text-lg">3</h2>
          <p className="leading-relaxed uppercase text-xs font-medium">Years</p>
        </div>
        <div className="p-2 w-1/3">
          <h2 className="title-font font-semibold text-lg">12</h2>
          <p className="leading-relaxed uppercase text-xs font-medium">Projects</p>
        </div>
        <div className="p-2 w-1/3">
          <h2 className="title-font font-semibold text-lg">4</h2>
          <p className="leading-relaxed uppercase text-xs font-medium">Products</p>
        </div>
      </div>
    </div>

  </div>
</section>


    );
  }
}

export default Stats;
