import React, { Component } from 'react';
// Import Browser Router and Pages
import { NavLink } from 'react-router-dom'; 
import DarkModeButton from './darkMode';

class Nav extends Component {
  render() {
    return (
        <div className="App"> 
          <header class="text-gray-500 body-font">
            <div class="container max-w-4xl mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
              <nav class="md:m-auto flex flex-wrap items-center text-base justify-center">
                
                <NavLink exact to="/" activeClassName="active" className="mr-16 lg:p-4 py-3 px-0 border-transparent border-b-2 hover:border-orange-400">Home</NavLink>
                <NavLink exact to="/work" activeClassName="active" className="mr-16 lg:p-4 py-3 px-0 border-transparent border-b-2 hover:border-orange-400">Work</NavLink>
                <NavLink exact to="/about" activeClassName="active" className="mr-16 lg:p-4 py-3 border-transparent border-b-2 hover:border-orange-400">About</NavLink>
                <DarkModeButton />
              </nav>
            </div>
          </header>
          </div>
    
    );
  }
}

export default Nav;