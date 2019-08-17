import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import './App.css';
import './App.css';
import Cursor from './Cursor';
import Typewriter from './Typewriter';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    padding: '30px',
    paddingTop: '10vh',
    marginBottom: 50,
  },
  container: {
    maxWidth: 800,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
  },
  text: {
    marginBottom: 50,
  },
  title: {
    width: 300,
    height: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttons: {
    marginTop: 100,
  },
  button: {
    width: 200,
    height: 75,
    marginRight: 20,
    marginTop: 20,
  },
});

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root + ' backgroundGradient'}>
      <div className={classes.container}>
        <Typography className={classes.text} style={{fontWeight: 500}} variant='h1'>
          Yifei Fu
        </Typography>
        <div>
          <Typography style={{  fontFamily: 'monospace'}} className={classes.text} variant='h3'>
            <Typewriter/>
            <Cursor/>
          </Typography>
        </div>
        <Typography className={classes.text} variant='h5'>
          Looking for a full-time SDE position starting Jan 2020.
        </Typography>
        <div className={classes.buttons}>
          <Button className={classes.button} color='primary' variant='contained'>Resume</Button>
          <Button className={classes.button} color='default' variant='outlined'>Projects</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
