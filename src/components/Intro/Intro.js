import React, { Component } from 'react';
import style from './Intro.css';

class Intro extends Component {
  constructor(props){
    super(props)

    this.pic = '../../../public/test.jpg'
  }
  render() {
    return (
      <div style={style}>
        <img src='http://engineering.unl.edu/images/staff/Kayla_Person-small.jpg' className="circular--portrait"/>
        <div className='intro__description'>
          <h3>Writer</h3>
          <h3>French</h3>
          <h3>Go Away</h3>
        </div>
      </div>
    );
  }
}

export default Intro;
