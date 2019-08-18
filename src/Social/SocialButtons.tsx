import {IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React, {useEffect, useState} from 'react';
import {socialLinks} from './social';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    margin: 20,
  },
}));

export interface Props {
}

const SocialButtons: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {socialLinks.map((socialLink, idx) => (
        <IconButton href={socialLink.url} key={idx} className={classes.button} aria-label={socialLink.name}>
          {socialLink.icon}
        </IconButton>
      ))}
    </div>
  );
};

export default SocialButtons;
