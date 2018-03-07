import React, { Component } from 'react';
import logo from './icon.png';

import Navigation from './containers/Navigation/Navigation.js';
import Footer from './components/Footer/Footer';
import Routes from './components/Routes/Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navigation icon={logo} />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
