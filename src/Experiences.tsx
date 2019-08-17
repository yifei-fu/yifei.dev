import {Avatar, List, ListItem} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core/styles';
import SchoolIcon from '@material-ui/icons/School';
import React from 'react';
import InfoCard from './InfoCard';
import Section from './Section';

const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
    borderRadius: 10,
  },
  document: {
    height: '85vh',
    width: '90vw',
    border: 'none',
  },
});

const Experiences: React.FC = () => {
  const classes = useStyles();
  return (
    <Section className={classes.root} title='Experiences'>
      <InfoCard icon={<img className='iconImage' alt='TripAdvisor logo' src='/img/tripadvisor.png'/>} title='TripAdvisor' subtitle='Intern at Experiences Search & Personalization team' location='El Segundo, CA' time='Summer 2019'>
        <List>
          <ListItem>
            Created personalized navigation links on the home page with 8M daily views; Reduced bounce rate by 2.6\%.
          </ListItem>
          <ListItem>
            Integrated and A/B tested a new recommendation microservice on product details page.
          </ListItem>
          <ListItem>
            Improved Solr schema for product search index and migrated 241K documents to enable faceted query.
          </ListItem>
        </List>
      </InfoCard>
      <InfoCard icon={<img className='iconImage' alt='TripAdvisor logo' src='/img/risk-sciences.png'/>} title='TripAdvisor' location='El Segundo, CA' time='Summer 2019'>
        <List>
          <ListItem>
            Created a responsive sidebar and search UI in React for probabilistic risk assessment web applications.
          </ListItem>
          <ListItem>
            Developed model quantification and full-text search API in Django.
          </ListItem>
          <ListItem>
            Reduced production crashes by 44\% by deploying Sentry full-stack error tracking.
          </ListItem>
        </List>
      </InfoCard>
    </Section>
  );
};

export default Experiences;