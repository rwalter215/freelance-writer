import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Menu, Sticky } from 'semantic-ui-react';
import Intro from '../../components/Intro/Intro.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Contact from '../Contact/Contact.js';
import Bio from '../../components/Bio/Bio.js';
import Footer from '../../components/Footer/Footer.js';
import './Navigation.css';

export default class Navigation extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Router>
        <div className="App">
          <Menu className="nav1" size="massive" stackable>
            <Menu.Item>
              <img className="logo" src={this.props.icon} alt="not today" />
            </Menu.Item>

            <Link to="/">
              <Menu.Item
                name="home"
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
              >
                Home
              </Menu.Item>
            </Link>

            <Link to="/portfolio">
              <Menu.Item
                name="portfolio"
                active={activeItem === 'portfolio'}
                onClick={this.handleItemClick}
              >
                Portfolio
              </Menu.Item>
            </Link>

            <Link to="/bio">
              <Menu.Item
                name="bio"
                active={activeItem === 'bio'}
                onClick={this.handleItemClick}
              >
                Bio
              </Menu.Item>
            </Link>

            <Link to="/contact">
              <Menu.Item
                name="contact"
                active={activeItem === 'contact'}
                onClick={this.handleItemClick}
              >
                Contact
              </Menu.Item>
            </Link>
          </Menu>

          <Route exact path="/" component={Intro} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/bio" component={Bio} />
          <Route path="/contact" component={Contact} />

          <Footer />
        </div>
      </Router>
    );
  }
}
