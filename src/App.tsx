import {createMuiTheme, CssBaseline, makeStyles} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React, {useState} from 'react';
import './App.css';
import Education from './Education';
import Experiences from './Experiences';
import Footer from './Footer';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';
import {theme} from './theme';

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
  const [scrollToProjects, setScrollToProjects] = useState<() => void>(() => {});
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className='App'>
        {/*<SimpleAppBar/>*/}
        <Header scrollToProjects={scrollToProjects}/>
        {/*<div className={classes.buttons}>*/}
          {/*{['Info', 'Projects', 'Contacts'].map(name => <Button className={classes.button}>{name}</Button>)}*/}
        {/*</div>*/}
        <div className={classes.main}>
          <Education/>
          <Experiences/>
          <Skills/>
        </div>
        <Projects setScrollToProjects={setScrollToProjects}/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
};

export default App;
