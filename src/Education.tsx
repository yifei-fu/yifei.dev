import {Avatar, Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core/styles';
import SchoolIcon from '@material-ui/icons/School';
import React from 'react';
import InfoCard from './InfoCard';
import Section from './Section';

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
  document: {
    height: '85vh',
    width: '90vw',
    border: 'none',
  },
});

const Education: React.FC = () => {
  const classes = useStyles();
  return (
    <Section className={classes.root} title='Education'>
      <InfoCard icon={<SchoolIcon />} title='University of California, Los Angeles' location='Los Angeles, CA' time='Aug 2017 - Dec 2019'>
        <Typography variant='body1'>
          B.S. in Computer Science, GPA: 3.74; UPE Honor Society
        </Typography>
      </InfoCard>
    </Section>
  );
};

export default Education;
