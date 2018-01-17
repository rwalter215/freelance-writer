import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import './PortfolioSection.css';

export default class Portfolio extends Component {
  state = {};

  render() {
    const categoryItems = this.props.items.map(item => {
      return (
        <List.Item className="list__item" as="li" value="-">
          <List.Content>
            <List.Header as="a">{item.header}</List.Header>
            <List.Description className="list__item__description">
              {item.description}
            </List.Description>
          </List.Content>
        </List.Item>
      );
    });
    return (
      <List.Item>
        <List.Content>
          <List.Header className="list__header">
            {this.props.category}
          </List.Header>
          <List.List as="ol">{categoryItems}</List.List>
        </List.Content>
      </List.Item>
    );
  }
}
