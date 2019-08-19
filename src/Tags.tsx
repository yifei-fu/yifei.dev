import {Chip} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  chip: {
    marginTop: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
}));

export interface Props {
  tags: string[];
}

const Tags: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const {tags} = props;

  return (
    <div>
      {tags.map((tag, idx) => <Chip className={classes.chip} key={idx} variant='outlined' color='primary' label={tag}/>)}
    </div>
  );
};

export default Tags;
