import React from 'react';
import './App.css';
// Import Browser Router and Pages
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Home from './containers/Home';
import Work from './containers/Work';
import About from './containers/About';
//Import Components

function App() {
  return (
    <BrowserRouter basename="/portfolio"> 
    <div className="App">
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;