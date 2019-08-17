import {Button, createMuiTheme, CssBaseline, makeStyles} from '@material-ui/core';
import {Edit} from '@material-ui/icons';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import './App.css';
import SimpleAppBar from './AppBar';
import Education from './Education';
import Experiences from './Experiences';
import Header from './Header';
import logo from './logo.svg';
import Resume from './Resume';
import Section from './Section';
import Skills from './Skills';

const theme = createMuiTheme({
  palette: {
  },
  typography: {
    fontFamily: [
      'Oxygen',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

const useStyles = makeStyles({
  buttons: {
    position: 'sticky',
    top: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    zIndex: 1101,
  },
  button: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 17, // 32 - 15
  },
  main: {
    width: '90vw',
    maxWidth: 1200,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        <SimpleAppBar/>
        <Header/>
        {/*<div className={classes.buttons}>*/}
          {/*{['Info', 'Projects', 'Contacts'].map(name => <Button className={classes.button}>{name}</Button>)}*/}
        {/*</div>*/}
        <div className={classes.main}>
          <Education/>
          <Experiences/>
          <Skills/>
        </div>
        <div style={{height: 1200}}/>
      </div>
    </ThemeProvider>
  );
};

export default App;
