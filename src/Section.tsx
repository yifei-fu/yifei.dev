import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
  header: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export interface Props {
  className?: string;
  children: React.ReactNode;
  title: string;
}

const Section: React.FC<Props> = (props: Props) => {
  const {children, className, title} = props;
  const classes = useStyles();
  return (
    <div className={className}>
      <Typography className={classes.header} variant='h4'>
        {title}
      </Typography>
      {children}
    </div>
  );
};

export default Section;
