import {IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React, {useEffect, useState} from 'react';
import {socialLinks} from './social';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 20,
  },
}));

export interface Props {
  className?: string;
}

const SocialButtons: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const {className} = props;
  return (
    <div className={className}>
      {socialLinks.map((socialLink, idx) => (
        <IconButton href={socialLink.url} key={idx} className={classes.button} aria-label={socialLink.name}>
          {socialLink.icon}
        </IconButton>
      ))}
    </div>
  );
};

export default SocialButtons;
