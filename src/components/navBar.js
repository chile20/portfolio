import React, { Component } from 'react';
// Import Browser Router and Pages
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Home from './Home';
import Work from './Work';
import About from './About';

class Nav extends Component {
  render() {
    return (
        <BrowserRouter>
        <div className="App"> 
          <header class="text-gray-700 body-font">
            <div class="container max-w-4xl mx-auto flex flex-wrap p-8 flex-col md:flex-row items-center">
              <nav class="md:m-auto flex flex-wrap items-center text-base justify-center">
                
                <Link to="/" className="mr-16 lg:p-4 py-3 px-0 border-transparent border-b-2 hover:border-orange-400">Home</Link>
                <Link to="/work" className="mr-16 lg:p-4 py-3 px-0 border-transparent border-b-2 hover:border-orange-400">Work</Link>
                <Link to="/about" className="lg:p-4 py-3 px-0 border-transparent border-b-2 hover:border-orange-400">About</Link>
              
              </nav>
            </div>
          </header>
            <Route exact path="/" component={Home} />
            <Route path="/work" component={Work} />
            <Route path="/about" component={About} />
  
        </div>
      </BrowserRouter>
    
    );
  }
}

export default Nav;