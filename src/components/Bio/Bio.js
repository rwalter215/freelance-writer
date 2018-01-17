import React from 'react';
import { Grid, Image, Header, Container } from 'semantic-ui-react';
import photo from './carla2.jpg';
import './Bio.css';

const Bio = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={3} />

      <Grid.Column width={10}>
        <Container text>
          <Header as="h2">About Me</Header>
          <Image src={photo} size="medium" shape="rounded" floated="left" />
          <p>
            Professional freelance writer with a degree in Journalism and
            Communication from Paris 3 - Sorbonne Nouvelle University, I’ve been
            in this field for over 10 years.{' '}
          </p>
          <p>
            Although I first began as a PR, I rapidly switched to writing and
            copywriting. Back then, I also started getting more curious about
            other cultures, influenced by a travel expert, my mentor at the
            time.
          </p>
          <p>
            Later, while working for entertainment papers, I participated
            actively in pitching and creating two magazines, including a
            successful bimonthly with sparkly and quirky themes for young women.
            Late 2008, Japan LifeStyle was born. My responsibilities grew with
            the readership, and I went from copy editor to editor in chief.
            Those were six, sometimes challenging but always so unique, years.
          </p>
          <p>
            In 2016, after a year in South Korea, I decided to embrace the
            freelance road and to center on subjects I always enjoyed: travel,
            lifestyle, entertainment and IT.
          </p>
          <p>
            In my free time, I wrote and published three non-fiction books: one
            for a young audience and the other two focused on travel and
            lifestyle.
          </p>
        </Container>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Bio;
