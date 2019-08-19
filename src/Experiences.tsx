import {List, ListItem} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import InfoCard from './InfoCard';
import Section from './Section';

const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
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
    <Section className={classes.root} title='Work Experience'>
      <InfoCard icon={<img className='iconImage' alt='TripAdvisor logo' src='/img/tripadvisor.png'/>} title='TripAdvisor' subtitle='SDE Intern at Experiences Search & Personalization team' location='El Segundo, CA' time='Summer 2019'>
        <List>
          <ListItem>
            Created personalized navigation links on the home page with 8M daily views; Reduced bounce rate by 2.6%.
          </ListItem>
          <ListItem>
            Integrated and A/B tested a new recommendation microservice on product details page.
          </ListItem>
          <ListItem>
            Improved Solr schema for product search index and migrated 4.1M documents to enable faceted query.
          </ListItem>
        </List>
      </InfoCard>
      <InfoCard icon={<img className='iconImage' alt='Risk Sciences logo' src='/img/risk-sciences.png'/>} title='The B. John Garrick Institute for the Risk Sciences at UCLA' subtitle='Part-time Software Engineer' location='Los Angeles, CA' time='Dec 2018 - Jun 2019'>
        <List>
          <ListItem>
            Created a responsive sidebar and search UI in React for probabilistic risk assessment web applications.
          </ListItem>
          <ListItem>
            Developed model quantification and full-text search API in Django.
          </ListItem>
          <ListItem>
            Reduced production crashes by 44% by deploying Sentry error tracking.
          </ListItem>
        </List>
      </InfoCard>
    </Section>
  );
};

export default Experiences;
