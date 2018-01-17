import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import './Footer.css';

const Footer = () => (
  <Grid columns="equal" divided inverted padded>
    <Grid.Row className="footer" color="black" textAlign="center">
      <Grid.Column>
        <Segment color="black" inverted />
      </Grid.Column>
      <Grid.Column>
        <Segment color="black" inverted>
          <a
            href="https://www.linkedin.com/in/carla-cino-028432110/"
            className="fa fa-linkedin"
            target="_blank"
          />
          <a
            href="https://www.instagram.com/carlacpro/"
            className="fa fa-instagram"
            target="_blank"
          />
          <a
            href="https://twitter.com/carlacpro"
            className="fa fa-twitter"
            target="_blank"
          />
          <a
            href="https://www.pinterest.com/carlacpro/"
            className="fa fa-pinterest"
            target="_blank"
          />
          <a
            href="https://www.facebook.com/carla.c.pro"
            className="fa fa-facebook"
            target="_blank"
          />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color="black" inverted />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Footer;
