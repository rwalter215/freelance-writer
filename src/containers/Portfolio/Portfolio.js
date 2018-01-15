import React, { Component } from 'react';
import { Header, List, Grid } from 'semantic-ui-react';
import './Portfolio.css';
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection.js';
import data from '../../portfolio.json';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        ['Interview', 'interview'],
        ['Series & Features', 's&f'],
        ['Travel', 'travel'],
        ['Blog', 'blog'],
        ['Press Releases & Advertorial', 'advert'],
        ['Book', 'book']
      ]
    };
  }

  componentWillMount() {
    this.portfolioItems = this.state.categories.map(category => {
      let items = data.Portfolio.filter(item => {
        return item.category === category[1];
      });

      return <PortfolioSection category={category[0]} items={items} />;
    });
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={3} />

          <Grid.Column width={10}>
            <List size="big" as="ol">
              <List.Item>
                <List.Content>
                  <Header size="huge" className="page__title">
                    Portfolio
                  </Header>
                  <List.List as="ol" children={this.portfolioItems} />
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
