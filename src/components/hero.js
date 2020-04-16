import React, { Component } from 'react';


class Hero extends Component {
  render() {
    return (

<section className="text-gray-700 body-font">
  <div className="container max-w-4xl mx-auto py-8 sm:py-8 sm:pb-8 px-8">

    <div className="flex flex-col text-center w-full mb-8">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Hi there</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">This portfolio site was designed and coded during the Covid-19 pandemic.</p>
    </div>

    <div className="border border-gray-300 p-6 rounded-lg">
      <div className="flex flex-wrap -m-4 text-center">
        <div className="p-8 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">3</h2>
          <p className="leading-relaxed">Years</p>
        </div>
        <div className="p-8 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">15</h2>
          <p className="leading-relaxed">Projects</p>
        </div>
        <div className="p-8 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
          <p className="leading-relaxed">Products</p>
        </div>
        <div className="p-8 sm:w-1/4 w-1/2">
          <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">3</h2>
          <p className="leading-relaxed">Jobs</p>
        </div>
      </div>
    </div>

  </div>
</section>

    

          // <section className="text-gray-700 body-font">
          //   <div className="container mx-auto flex flex-wrap p-8 flex-col md:flex-row items-center">
          //         <h1 className="title-font sm:text-5xl text-3xl mr-16 lg:p-4 py-3 px-0 font-medium text-gray-900">Hello, I'm Chi.
          //         </h1>
                  
          //   </div>
          // </section>

    );
  }
}

export default Hero;
