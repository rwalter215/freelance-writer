import React, { Component } from 'react'
import {Grid, Header, Container} from 'semantic-ui-react'
import './Bio.css'
import BioSection from '../BioSection/BioSection'
// import bio from '../../bio.txt'

const Bio = () => (
  <Grid.Column>
    <Container text>
      <Header as='h1'>About Us</Header>
      <BioSection 
        text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.'
        url='https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/13450305_10154251214157020_1625726689388621712_n.jpg?oh=e905fc37bd7ce87fb502e13e35f534b0&oe=5A7F3C4E'
        name='Jack Hall'
      />
      <BioSection 
        text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.'
        url='https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/13450305_10154251214157020_1625726689388621712_n.jpg?oh=e905fc37bd7ce87fb502e13e35f534b0&oe=5A7F3C4E'
        name='Ryan Walter'
      />
    </Container>
  </Grid.Column>
)

export default Bio;
