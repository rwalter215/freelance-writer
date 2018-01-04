import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import { Menu, Grid, Sticky} from 'semantic-ui-react'
import Intro from '../../components/Intro/Intro.js'
import Portfolio from '../Portfolio/Portfolio.js'
import Contact from '../Contact/Contact.js'
import Bio from '../../components/Bio/Bio.js'
import './Navigation.css'

export default class Navigation extends Component {
  state = {}

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state

    return (
      <Grid columns={3} id='clue'>
        <Router>

            <Grid.Row centered>
              <Grid.Column width={3}>
                <Sticky>
                <Menu text vertical size='massive' inverted  className='nav1'>
                  <Link to='/'><Menu.Item  active={activeItem === 'closest'} onClick={this.handleItemClick}>home</Menu.Item></Link>
                  {/* <Link to='/portfolio'><Menu.Item  active={activeItem === 'portfolio'} onClick={this.handleItemClick}>portfolio</Menu.Item></Link> */}
                  <Link to='/bio'><Menu.Item  active={activeItem === 'bio'} onClick={this.handleItemClick}>about us</Menu.Item></Link>
                  <Link to='/contact'><Menu.Item  active={activeItem === 'contact'} onClick={this.handleItemClick}>contact</Menu.Item></Link>
                </Menu>
                </Sticky>
              </Grid.Column>

              <Grid.Column width={10} textAlign='middle'>
                <Route exact path="/" component={Intro}/>
                {/* <Route path="/portfolio" component={Portfolio}/> */}
                <Route path="/bio" component={Bio}/>
                <Route path="/contact" component={Contact}/>
              </Grid.Column>

              <Grid.Column width={3}>
              </Grid.Column>
            </Grid.Row>

        </Router>
      </Grid>
    )
  }
}
