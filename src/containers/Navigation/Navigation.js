import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {List, Menu, Grid} from 'semantic-ui-react'
import Intro from '../../components/Intro/Intro.js'
import Portfolio from '../Portfolio/Portfolio.js'
import Contact from '../Contact/Contact.js'
import Bio from '../../components/Bio/Bio.js'
import Footer from '../../components/Footer/Footer.js'
import style from './Navigation.css'

export default class Navigation extends Component {
  state = {}

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state

    return (
      <Grid columns={3} id='clue'>
        <Router>

            <Grid.Row >
              <Grid.Column width={3}>
                <Menu text vertical size='massive' inverted  className='nav1'>
                  <Link to='/'><Menu.Item  active={activeItem === 'closest'} onClick={this.handleItemClick}>HOME</Menu.Item></Link>
                  <Link to='/portfolio'><Menu.Item  active={activeItem === 'portfolio'} onClick={this.handleItemClick}>PORTFOLIO</Menu.Item></Link>
                  <Link to='/bio'><Menu.Item  active={activeItem === 'bio'} onClick={this.handleItemClick}>BIO</Menu.Item></Link>
                </Menu>
              </Grid.Column>

              <Grid.Column width={10}>
                <Route exact path="/" component={Intro}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/bio" component={Bio}/>
                <Route path="/contact" component={Contact}/>
              </Grid.Column>
            </Grid.Row>

        </Router>
      </Grid>
    )
  }
}
