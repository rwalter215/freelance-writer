import React from 'react';
import { Grid } from 'semantic-ui-react';
import './Intro.css';

const Intro = () => (
  <Grid textAlign="center" verticalAlign="center" centered columns={1}>
    <Grid.Row centered columns={2}>
      <h1 className="intro__header">Carla Cino</h1>
    </Grid.Row>

    <Grid.Row centered columns={2}>
      <img src="carla.jpg" className="circular--portrait" alt="not today" />
    </Grid.Row>

    <Grid.Row centered columns={2}>
      <div>
        <h3 className="intro__description">Journalist</h3>
        <div className="intro__description intro__divider">&nbsp;|&nbsp;</div>
        <h3 className="intro__description">Copywriter</h3>
        <div className="intro__description intro__divider">&nbsp;|&nbsp;</div>
        <h3 className="intro__description">Writer</h3>
      </div>
    </Grid.Row>

    <Grid.Row centered columns={2}>
      <div>
        <h5 className="intro__sub-description">Lifestyle</h5>
        <div className="intro__sub-description">&nbsp;&diams;&nbsp;</div>
        <h5 className="intro__sub-description">Entertainment</h5>
        <div className="intro__sub-description">&nbsp;&diams;&nbsp;</div>
        <h5 className="intro__sub-description">Travel</h5>
      </div>
    </Grid.Row>
  </Grid>
);

export default Intro;
