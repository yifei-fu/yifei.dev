import {Avatar, Card, CardContent, CardHeader, Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import React from 'react';
import {cardBorderRadius, cardShadowSize} from './theme';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 15,
    borderRadius: cardBorderRadius,
    boxShadow: theme.shadows[cardShadowSize],
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing(1.25),
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  iconText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    marginBottom: theme.spacing(0.25),
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
            <div>
              <Typography variant='h5'>
                {title}
              </Typography>
              {
                subtitle && (
                  <Typography variant='body1'>
                    {subtitle}
                  </Typography>
                )
              }
            </div>
          </div>
          <Typography variant='body2' color='textSecondary' component='p'>
            {time && (
              <div className={classes.iconText}><DateRangeIcon className={classes.icon}/> {time}</div>
            )}
            {time && (
              <div className={classes.iconText}><LocationOnIcon className={classes.icon}/> {location}</div>
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
