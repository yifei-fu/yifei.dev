import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider} from '@material-ui/styles';
import React from 'react';
import './App.css';
import SocialButtons from './Social/SocialButtons';
import {darkTheme} from './theme';

const useStyles = makeStyles({
  root: {
    height: '20vh',
    paddingTop: 20,
    color: 'white',
    textAlign: 'center',
  },
  item: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.root + ' gradientWithPattern'}>
        <Typography className={classes.item} variant='h5'>
          Yifei Fu, 2019
        </Typography>
        <SocialButtons/>
      </div>
    </ThemeProvider>
  );
};

export default Footer;
