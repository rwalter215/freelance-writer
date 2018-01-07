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
              <a href="https://www.linkedin.com/in/carla-cino-028432110/" className='fa fa-linkedin' target='_blank'></a>
              <a href="https://www.instagram.com/carlacpro/" className='fa fa-instagram' target='_blank'></a>
              <a href="https://twitter.com/carlacpro" className='fa fa-twitter' target='_blank'></a>
              <a href="https://www.pinterest.com/carlacpro/" className='fa fa-pinterest' target='_blank'></a>
              <a href="https://www.facebook.com/carla.c.pro" className='fa fa-facebook' target='_blank'></a>
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
