import React, {Component} from 'react';
import {Grid, Image} from 'semantic-ui-react'
import style from './Intro.css';

class Intro extends Component {
  constructor(props) {
    super(props)

    this.pic = '../../../public/test.jpg'
  }
  render() {
    return (
      <Grid style={style} textAlign='center' verticalAlign='center' centered columns={1}>
        <Grid.Column>
          <h1 className='intro__header'>Carla Cino</h1>
        </Grid.Column>
        <Grid.Column>
          <img src='http://engineering.unl.edu/images/staff/Kayla_Person-small.jpg' className="circular--portrait"/>
        </Grid.Column>
        <Grid.Column>
          <div>
            <h3 className='intro__description'>Writer</h3>
            <div className='intro__description intro__divider'>
              .
            </div>
            <h3 className='intro__description'>French</h3>
            <div className='intro__description intro__divider'>
              .
            </div>
            <h3 className='intro__description'>Go Away</h3>
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Intro;
