import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Header} from 'semantic-ui-react'
import style from './Portfolio.css'
import PortfolioSection from '../../components/PortfolioSection/PortfolioSection.js'
import data from '../../portfolio.json'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        ["Interview", "interview"],
        ["Series & Features", "s&f"],
        ["Travel", "travel"],
        ["Blog", "blog"],
        ["Press Releases & Advertorial", "advert"],
        ["Book", "book"]
      ]
    }
  }

  componentWillMount() {
    this.portfolioItems = this.state.categories.map((category) => {
      let items = data.Portfolio.filter((item) => {
        return item.category === category[1];
      });

      return (
        <PortfolioSection category={category[0]} items={items} />
      );
    });
  }

  render() {

    return (
      <div>
        <Header size='huge'>Portfolio</Header>
        {this.portfolioItems}
      </div>
    )
  }
}
