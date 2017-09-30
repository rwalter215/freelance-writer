import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Header, List} from 'semantic-ui-react'
import style from './PortfolioSection.css'

export default class Portfolio extends Component {
  state = {}

  render() {
    const categoryItems = this.props.items.map((item) => {
      // let hasUrl = 'a';
      // if (item.url === "") {
      //   hasUrl = false;
      // }
      return (
        <List.Item>
          <List.Content>
            <List.Header as='a'>{item.header}</List.Header>
            <List.Description>{item.description}</List.Description>
          </List.Content>
        </List.Item>
      );
    });
    return (
      <div>
        <Header size='large'>{this.props.category}</Header>
          <List>
            {categoryItems}
          </List>
      </div>
    )
  }
}
