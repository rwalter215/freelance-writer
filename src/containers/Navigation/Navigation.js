import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {List, Menu} from 'semantic-ui-react'
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
      <Router>
        <div>
          <Menu text vertical>
            <Link to='/'><Menu.Item name='closest' active={activeItem === 'closest'} onClick={this.handleItemClick} /></Link>
            <Link to='/portfolio'><Menu.Item name='portfolio' active={activeItem === 'portfolio'} onClick={this.handleItemClick} /></Link>
            <Link to='/bio'><Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} /></Link>
          </Menu>

          <Route exact path="/" component={Intro}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/bio" component={Bio}/>
          <Route path="/contact" component={Contact}/>

          <Footer />
        </div>
      </Router>
    )
  }
}
