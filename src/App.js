import React from 'react';
import './App.css';
// Import Browser Router and Pages
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Work from './containers/Work';
import About from './containers/About';
//Import Components
import Header from './components/header';

function App() {
  return (
    <BrowserRouter basename="/portfolio"> 
    <div className="App font-body">
      <Header />
      <Switch>
          <Route exact path="/">
            <Work />
          </Route>
          <Route path="/about">
            <About />
          </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;