import React from 'react';
import { Route } from 'react-router-dom';
import Intro from '../Intro/Intro';
import Portfolio from '../../containers/Portfolio/Portfolio';
import Bio from '../Bio/Bio';
import Contact from '../../containers/Contact/Contact';

const Routes = () => (
  <div>
    <Route exact path="/" component={Intro} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/bio" component={Bio} />
    <Route path="/contact" component={Contact} />
  </div>
);

export default Routes;
