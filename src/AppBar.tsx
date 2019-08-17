import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React, {useEffect, useState} from 'react';

const useStyles = makeStyles({
});

export default function SimpleAppBar() {
  const classes = useStyles();
  const [opacity, setOpacity] = useState<number>(0);
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setOpacity(Math.min(1, Math.max(0, 2 * (window.scrollY - 200) / window.innerHeight)));
    });
  }, []);
  return (
      <AppBar position='fixed' style={{opacity, display: opacity === 0 ? 'none' : 'block'}}>
        <Toolbar>
          <Typography variant='h6' color='inherit'>
            Yifei Fu
          </Typography>
        </Toolbar>
      </AppBar>
  );
}
