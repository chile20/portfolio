import React from 'react';
import './App.css';
// Import Browser Router and Pages
import { BrowserRouter, Route, NavLink } from 'react-router-dom'; 
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
//Import Components
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
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
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />

      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
