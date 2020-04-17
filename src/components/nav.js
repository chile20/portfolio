import React, { Component } from 'react';
// Import Browser Router and Pages
import { NavLink } from 'react-router-dom'; 

class Nav extends Component {
  render() {
    return (
        <div className="App"> 
          <header class="text-gray-700 body-font">
            <div class="container max-w-4xl mx-auto flex flex-wrap p-8 flex-col md:flex-row items-center">
              <nav class="md:m-auto flex flex-wrap items-center text-base justify-center">
                
                <NavLink to="/" activeClassName="active" className="mr-16 lg:p-4 py-3 px-0 border-transparent border-b-2 hover:border-orange-400">Home</NavLink>
                <NavLink to="/work" activeClassName="active" className="mr-16 lg:p-4 py-3 px-0 border-transparent border-b-2 hover:border-orange-400">Work</NavLink>
                <NavLink to="/about" activeClassName="active" className="lg:p-4 py-3 px-0 border-transparent border-b-2 hover:border-orange-400">About</NavLink>
              
              </nav>
            </div>
          </header>
          </div>
    
    );
  }
}

export default Nav;