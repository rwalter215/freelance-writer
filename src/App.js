import React, { Component } from 'react';
import logo from './icon.png';
import Intro from './components/Intro/Intro.js'
import Navigation from './containers/Navigation/Navigation.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <Navigation icon={logo}/>
    );
  }
}

export default App;
