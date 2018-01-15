import React, { Component } from 'react';
import 'whatwg-fetch';
import {
  Grid,
  Header,
  Segment,
  Form,
  Button,
  TextArea,
  Loader,
  Dimmer,
  Message
} from 'semantic-ui-react';
import './Contact.css';

export default class Contact extends Component {
  state = {
    name: '',
    email: '',
    emailAddress: '',
    emailSubject: '',
    emailContent: '',
    loading: false,
    submitted: 'Not Submitted'
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    this.setState({ loading: true });
    fetch('/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        test: this.state.email,
        email: this.state.emailAddress,
        name: this.state.name,
        subject: this.state.emailSubject,
        message: this.state.emailContent
      })
    })
      .then(response => {
        console.log('we are bsck in react', response);
        this.setState({ loading: false, submitted: 'Successful' });
      })
      .catch(error => {
        console.error(error);
        this.setState({ loading: false, submitted: 'Unsuccessful' });
      });
    this.setState({
      name: '',
      emailAddress: '',
      emailSubject: '',
      emailContent: ''
    });
  };

  handleLoader = () => {
    if (this.state.loading) {
      return (
        <Dimmer active inverted>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    }
  };

  handleSuccess = () => {
    if (this.state.submitted === 'Successful') {
      return (
        <Message
          success
          header="Form Submitted"
          content="You have contacted Carla!"
        />
      );
    } else if (this.state.success === 'Unsuccessful') {
      return (
        <Message
          error
          header="Sorry, there was an error"
          content="Please refresh the page and try again, or contact me on social media."
        />
      );
    }
  };

  render() {
    const {
      name,
      email,
      emailAddress,
      emailSubject,
      emailContent
    } = this.state;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={3} />

          <Grid.Column width={10}>
            {this.handleLoader()}
            <Header size="huge">Contact Me</Header>
            <Segment className="form" inverted>
              <Form onSubmit={this.handleSubmit} inverted>
                <Form.Group widths="equal">
                  <Form.Input
                    required
                    label="Name"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    label="Email"
                    className="test"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    required
                    label="Email"
                    placeholder="Email"
                    name="emailAddress"
                    type="email"
                    value={emailAddress}
                    onChange={this.handleChange}
                  />
                </Form.Group>
                <Form.Input
                  label="Subject"
                  placeholder="Subject"
                  name="emailSubject"
                  value={emailSubject}
                  onChange={this.handleChange}
                />
                <TextArea
                  required
                  autoHeight
                  placeholder="What can I do for you?"
                  name="emailContent"
                  value={emailContent}
                  onChange={this.handleChange}
                  style={{
                    minHeight: 100
                  }}
                />
                {this.handleSuccess()}
                <Button className="button--submit" type="submit">
                  Submit
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
