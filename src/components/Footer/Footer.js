import React, {Component} from 'react'
import {Grid, Segment} from 'semantic-ui-react'
import './Footer.css'

export default class Footer extends Component {
  state = {}

  render() {

    return (
      <Grid columns='equal' divided inverted padded>
        <Grid.Row className='footer' color='black' textAlign='center'>
          <Grid.Column>
            <Segment color='black' inverted></Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment color='black' inverted>
              <a href="https://www.facebook.com/carla.c.pro" className='fa fa-linkedin'></a>
              <a href="https://www.facebook.com/carla.c.pro" className='fa fa-instagram'></a>
              <a href="https://www.facebook.com/carla.c.pro" className='fa fa-twitter'></a>
              <a href="https://www.facebook.com/carla.c.pro" className='fa fa-pinterest'></a>
              <a href="https://www.facebook.com/carla.c.pro" className='fa fa-facebook'></a>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment color='black' inverted></Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
