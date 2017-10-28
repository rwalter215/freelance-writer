import React, {Component} from 'react';
//import 'whatwg-fetch';
import axios from 'axios'
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
import './Contact.css'

export default class Contact extends Component {
  state = {
    name: '',
    email: '',
    emailAddress: '',
    emailSubject: '',
    emailContent: '',
    loading: false,
    submitted: 'Not Submitted'
  }

  handleChange = (e, {name, value}) => this.setState({[name]: value})

  handleSubmit = () => {
    this.setState({loading: true})
    axios.post('/contact', {
        test: this.state.email,
        email: this.state.emailAddress,
        name: this.state.name,
        subject: this.state.emailSubject,
        message: this.state.emailContent
    }).then(response => {
      console.log("we are hitting it: react ", response);
      this.setState({loading: false, submitted: 'Successful'})
    }).catch(error => {
      console.error("we are hitting it: react ", error);
      this.setState({loading: false, submitted: 'Unsuccessful'})
    });
    this.setState({name: '', emailAddress: '', emailSubject: '', emailContent: ''})
  }

  handleLoader = () => {
    if(this.state.loading) {
      return (
        <Dimmer active>
         <Loader>Loading</Loader>
        </Dimmer>)
    }
  }

  handleSuccess = () => {
    if(this.state.submitted === "Successful") {
      return <Message
              success
              header='Form Submitted'
              content="You have contacted Orca!"/>
    } else if(this.state.success === "Unsuccessful") {
      return <Message
              error
              header='Sorry, there was an error'
              content='Please refresh the page and try again.' />
    }
  }

  render() {
    const {name, email, emailAddress, emailSubject, emailContent} = this.state;

    return (
        <Grid.Row>
            {this.handleLoader()}
            <Header size='huge' className='page_header' >contact us</Header>
            <Segment className='form' inverted>
              <Form onSubmit={this.handleSubmit} >
                <Form.Group widths='equal'>
                  <Form.Input required  placeholder='Name' name='name' value={name} onChange={this.handleChange}/>
                  <Form.Input  className='test' placeholder='Email' name='email' value={email} onChange={this.handleChange}/>
                  <Form.Input required placeholder='Email' name='emailAddress' type='email' value={emailAddress} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Input  placeholder='Subject' name='emailSubject' value={emailSubject} onChange={this.handleChange}/>
                <TextArea required autoHeight placeholder='What can we do for you?' name='emailContent' value={emailContent} onChange={this.handleChange} style={{
                  minHeight: 200
                }}/>
                {this.handleSuccess()}
                <Button className='button--submit' floated='left' type='submit'>Submit</Button>
              </Form>
            </Segment>
        </Grid.Row>
    )
  }
}
