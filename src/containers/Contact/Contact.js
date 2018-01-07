import React, {Component} from 'react';
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
      this.setState({loading: false, submitted: 'Successful'})
    }).catch(error => {
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