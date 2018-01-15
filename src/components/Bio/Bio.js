import React, { Component } from 'react';
import { Grid, Image, Header, Container } from 'semantic-ui-react';
import './Bio.css';

export default class Bio extends Component {
  state = {};

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={3} />

          <Grid.Column width={10}>
            <Container text>
              <Header as="h2">About Me</Header>
              <Image
                src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/13450305_10154251214157020_1625726689388621712_n.jpg?oh=e905fc37bd7ce87fb502e13e35f534b0&oe=5A7F3C4E"
                size="medium"
                shape="rounded"
                floated="left"
              />
              <p>
                Professional freelance writer with a degree in Journalism and
                Communication from Paris 3 - Sorbonne Nouvelle University, I’ve
                been in this field for over 10 years.{' '}
              </p>
              <p>
                Although I first began as a PR, I rapidly switched to writing
                and copywriting. Back then, I also started getting more curious
                about other cultures, influenced by a travel expert, my mentor
                at the time.
              </p>
              <p>
                Later, while working for entertainment papers, I participated
                actively in pitching and creating two magazines, including a
                successful bimonthly with sparkly and quirky themes for young
                women. Late 2008, Japan LifeStyle was born. My responsibilities
                grew with the readership, and I went from copy editor to editor
                in chief. Those were six, sometimes challenging but always so
                unique, years.
              </p>
              <p>
                In 2016, after a year in South Korea, I decided to embrace the
                freelance road and to center on subjects I always enjoyed:
                travel, lifestyle, entertainment and IT.
              </p>
              <p>
                In my free time, I wrote and published three non-fiction books:
                one for a young audience and the other two focused on travel and
                lifestyle.
              </p>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
