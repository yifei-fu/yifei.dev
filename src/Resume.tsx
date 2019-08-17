import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import Iframe from 'react-iframe';
import Section from './Section';

const useStyles = makeStyles({
  paper: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90vw',
    borderRadius: 10,
  },
  document: {
    height: '85vh',
    width: '90vw',
    border: 'none',
  },
});

const Resume: React.FC = () => {
  const classes = useStyles();
  return (
    <Section title='Resume'>
      <Card className={classes.paper}>
        <Iframe url='resume-web.pdf'
                overflow='hidden'
                className={classes.document}
        />
      </Card>
    </Section>
  );
};

export default Resume;
