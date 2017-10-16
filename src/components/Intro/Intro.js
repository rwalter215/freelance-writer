import React, {Component} from 'react';
import {Grid, Image} from 'semantic-ui-react'
import style from './Intro.css';

class Intro extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
        <Grid.Row centered columns={2}>
          <img src='orca-logo-white.png' alt='Not working today' className='logo'/>
        </Grid.Row>

    );
  }
}

export default Intro;
