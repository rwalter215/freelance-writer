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
      <h1 className='intro__header'>Carla Cino</h1>
        <img src='http://engineering.unl.edu/images/staff/Kayla_Person-small.jpg' className="circular--portrait"/>
        <div>
          <h3 className='intro__description'>Writer</h3>
            <div className='intro__description intro__divider'> . </div>
          <h3 className='intro__description'>French</h3>
            <div className='intro__description intro__divider'> . </div>
          <h3 className='intro__description'>Go Away</h3>
        </div>
      </div>
    );
  }
}

export default Intro;
