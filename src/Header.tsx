import {Button, createMuiTheme} from '@material-ui/core';
import indigo from '@material-ui/core/colors/indigo';
import cyan from '@material-ui/core/colors/teal';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider} from '@material-ui/styles';
import React from 'react';
import './App.css';
import Cursor from './Cursor';
import {monospaceFontFamily, titleFontFamily} from './theme';
import Typewriter from './Typewriter';

const headerTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: indigo.A200,
      main: indigo.A400,
      dark: indigo.A700,
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: titleFontFamily,
    button: {
      fontSize: '1.2rem',
    },
  },
});

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
    color: 'white',
  },
  buttons: {
    marginTop: 100,
  },
  button: {
    width: 200,
    height: 75,
    marginRight: 50,
    marginTop: 20,
    borderRadius: 10,
  },
  code: {
    fontFamily: monospaceFontFamily,
    color: cyan.A100,
  },
});

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={headerTheme}>
      <div className={classes.root + ' backgroundGradient'}>
        <div className={classes.container}>
          <Typography className={classes.text} style={{fontWeight: 500}} variant='h1'>
            Yifei Fu
          </Typography>
          <div>
            <Typography className={classes.text + ' ' + classes.code} variant='h3'>
              <Typewriter/>
              <Cursor/>
            </Typography>
          </div>
          <Typography className={classes.text} variant='h5'>
            Looking for a full-time SDE position starting Jan 2020.
          </Typography>
          <div className={classes.buttons}>
            <Button className={classes.button} style={{
              boxShadow: '0px 0px 16px 5px rgba(61,90,254,0.8)',
            }} color='primary' variant='contained'>Resume</Button>
            <Button className={classes.button} style={{
              boxShadow: '0px 0px 16px 5px rgba(255,255,255,0.04)',
            }} color='default' variant='outlined'>Projects</Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Header;
