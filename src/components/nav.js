import React, { Component } from 'react';
// Import Browser Router and Pages
import { NavLink } from 'react-router-dom'; 
import DarkModeButton from '../actions/darkMode';

class Nav extends Component {
  render() {
    return (
      <header className="body-font">
  <div className="container max-w-4xl mx-auto flex flex-wrap pt-8 flex-col lg:flex-row items-center justify-end">
    <a className="flex order-first lg:order-none lg:w-1/5 title-font items-center sm:items-center sm:justify-center mb-4 md:mb-0">
      <span className=" sm:text-3xl text-2xl logo">CHILE</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <DarkModeButton />
    </div>
  </div>
              <div className="container max-w-4xl mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center"> 
              <nav className="body-font md:m-auto flex flex-wrap items-center text-base justify-center">  
                <NavLink exact to="/" activeClassName="active" className="mr-16 lg:p-4 py-3 px-0 border-transparent border-b-2 hover:border-orange-400">Work</NavLink>
                <NavLink exact to="/about" activeClassName="active" className="lg:p-4 py-3 border-transparent border-b-2 hover:border-orange-400">About</NavLink>
              </nav>
            </div>
</header>




      //   <div className="App"> 
      //     <header className="body-font">
      //     <a class="container max-w-4xl mx-auto flex flex-wrap pt-16 flex-col items-center">
      // <span class="sm:text-3xl text-2xl">CHILE</span>
      //     </a>
      //       <div className="container max-w-4xl mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center"> 
      //         <nav className="body-font md:m-auto flex flex-wrap items-center text-base justify-center">  
      //           <NavLink exact to="/" activeClassName="active" className="mr-16 lg:p-4 py-3 px-0 border-transparent border-b-2 hover:border-orange-400">Work</NavLink>
      //           <NavLink exact to="/about" activeClassName="active" className="lg:p-4 py-3 border-transparent border-b-2 hover:border-orange-400">About</NavLink>
      //         </nav>
      //       </div>
      //     </header>
      //     </div>
    
    );
  }
}

export default Nav;