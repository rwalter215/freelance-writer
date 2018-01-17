import React, { Component } from 'react';
import logo from './icon.png';
import Navigation from './containers/Navigation/Navigation.js';
import './App.css';

class App extends Component {
  render() {
    return <Navigation icon={logo} />;
  }
}

export default App;
