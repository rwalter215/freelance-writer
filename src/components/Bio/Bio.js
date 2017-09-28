import React, { Component } from 'react'
import {Grid, Image} from 'semantic-ui-react'
import style from './Bio.css'

export default class Bio extends Component {
  state = {}

  render() {

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <img src='carla.jpg' />
          </Grid.Column>

          <Grid.Column width={10}>
          
          </Grid.Column>

        </Grid.Row>

      </Grid>
    )
  }
}
