import {Avatar, Card, CardContent, CardHeader, Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 15,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export interface Props {
  icon: React.ReactNode;
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  time?: string;
  location?: string;
}

const InfoCard: React.FC<Props> = (props: Props) => {
  const {icon, children, title, subtitle, time, location} = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.header}>
          <div className={classes.left}>
            <Avatar className={classes.avatar}>{icon}</Avatar>
            <Typography variant='h5'>
              {title}
            </Typography>
            {
              subtitle && (
                <>
                  <br/>
                  <Typography variant='body1'>
                    {subtitle}
                  </Typography>
                </>
                )
            }
          </div>
          <Typography variant='body2' color='textSecondary' component='p'>
            {time && (
              <><DateRangeIcon/> {time}</>
            )}
            <br/>
            {time && (
              <><LocationOnIcon/> {location}</>
            )}
          </Typography>
        </div>
        <Divider className={classes.divider}/>
        {children}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
