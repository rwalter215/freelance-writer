import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {
  Grid,
  Image,
  Header,
  Container,
  Segment,
  Form,
  Button,
  TextArea
} from 'semantic-ui-react';
import style from './Contact.css'

export default class Contact extends Component {
  state = {
    name: '',
    emailAddress: '',
    emailSubject: '',
    emailContent: ''
  }

  handleChange = (e, {name, value}) => this.setState({[name]: value})

  handleSubmit = () => {
    console.log('state: ', this.state)

    axios.post('/contact', {
      email: 'r.walter215@gmail.com',
      name: 'Ryan Walter',
      message: 'No! Go Away!'
    }).then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    const {name, emailAddress, emailSubject, emailContent} = this.state;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}></Grid.Column>

          <Grid.Column width={10}>
            <Header size='huge'>Contact Me</Header>
            <Segment className='form' inverted>
              <Form onSubmit={this.handleSubmit} inverted>
                <Form.Group widths='equal'>
                  <Form.Input label='Name' placeholder='Name' name='name' value={name} onChange={this.handleChange}/>
                  <Form.Input label='Email' placeholder='Email' name='emailAddress' value={emailAddress} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Input label='Subject' placeholder='Subject' name='emailSubject' value={emailSubject} onChange={this.handleChange}/>
                <TextArea autoHeight placeholder='What can I do for you?' name='emailContent' value={emailContent} onChange={this.handleChange} style={{ minHeight: 100 }}/>
                <Button className='button--submit' type='submit'>Submit</Button>
              </Form>
            </Segment>
          </Grid.Column>

        </Grid.Row>

      </Grid>
    )
  }
}
