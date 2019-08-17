import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import './App.css';
import Typewriter from './Typewriter';

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    marginLeft: '0.3rem',
    height: '2rem',
    width: '1rem',
    backgroundColor: 'white',
    animation: 'blink 0.5s ease alternate infinite',
    boxShadow: '0px 0px 10px 2px rgba(255,255,255,0.1)',
  },
});

const Cursor: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>

    </div>
  );
};

export default Cursor;
