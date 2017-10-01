import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {Grid, Image, Header, Container, Segment, Form, Button, TextArea} from 'semantic-ui-react'
import style from './Contact.css'

export default class Contact extends Component {
  state = {}

  render() {

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>

          <Grid.Column width={10}>
            <Header size='huge'>Contact Me</Header>
            <Segment className='form' inverted>
              <Form inverted>
                <Form.Group widths='equal'>
                  <Form.Input label='Name' placeholder='Name' />
                  <Form.Input label='Subject' placeholder='Subject' />
                </Form.Group>
                <TextArea autoHeight placeholder='What can I do for you?' style={{ minHeight: 100 }} />
                <Button className='button--submit' type='submit'>Submit</Button>
              </Form>
            </Segment>
          </Grid.Column>

        </Grid.Row>

      </Grid>
    )
  }
}
