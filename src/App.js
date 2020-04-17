import React from 'react';
import './App.css';
// Import Browser Router and Pages
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'; 
import Home from './components/Home';
import Work from './components/Work';
import About from './components/About';
//Import Components

function App() {
  return (
    <Router> 
    <div>
    <Route path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/work' component={Work} />
    </div>
  </Router>
  );
}

export default App;
