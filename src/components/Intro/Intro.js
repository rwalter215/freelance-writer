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

        <Grid.Row centered columns={2}>
          <h1 className='intro__header'>Carla Cino</h1>
        </Grid.Row>

        <Grid.Row centered columns={2}>
          <img src='carla.jpg' className="circular--portrait"/>
        </Grid.Row>

        <Grid.Row centered columns={2}>
          <div>
            <h3 className='intro__description'>Journalist</h3>
            <div className='intro__description intro__divider'>
               |
            </div>
            <h3 className='intro__description'>Copywriter</h3>
            <div className='intro__description intro__divider'>
               |
            </div>
            <h3 className='intro__description'>Writer</h3>
          </div>
        </Grid.Row>

      </Grid>
    );
  }
}

export default Intro;
