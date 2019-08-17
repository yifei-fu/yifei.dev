import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, {useEffect, useState} from 'react';

const useStyles = makeStyles({});

const inverseLerp = (from: number, to: number, value: number) => (value - from) / (to - from);

export default function SimpleAppBar() {
  const classes = useStyles();
  const [opacity, setOpacity] = useState<number>(0);
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setOpacity(Math.min(1, Math.max(0, inverseLerp(window.innerHeight - 64 * 3, window.innerHeight - 64, window.scrollY))));
    });
  }, []);
  return (
    <AppBar position='fixed' style={{opacity, display: opacity === 0 ? 'none' : 'block'}}>
      <Toolbar className='gradient'>
        <Typography variant='h6' color='inherit'>
          Yifei Fu
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
