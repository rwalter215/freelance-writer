import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './Navigation.css';

export default class Navigation extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu className="nav1 fixed" size="massive" stackable>
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
    );
  }
}
