import {CardContent, Chip} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Section from './Section';
import {bodyFontFamily, cardBorderRadius, cardShadowSize} from './theme';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
  },
  card: {
    borderRadius: cardBorderRadius,
    boxShadow: theme.shadows[cardShadowSize],
  },
  document: {
    height: '85vh',
    width: '90vw',
    border: 'none',
  },
  inline: {
    display: 'inline',
  },
  chip: {
    marginTop: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
}));

const Skills: React.FC = () => {
  const classes = useStyles();

  const renderTags = (tags: string[]) => (
    <>
      {tags.map((tag, idx) => <Chip className={classes.chip} key={idx} variant='outlined' color='primary' label={tag}/>)}
    </>
  );

  const renderListItem = (avatar: React.ReactNode, title: string, tags: string[]) => (
    <ListItem alignItems='flex-start'>
      <ListItemAvatar>
        {avatar}
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          renderTags(tags)
        }
      />
    </ListItem>
  );

  return (
    <Section className={classes.root} title='Skills'>
      <Card className={classes.card}>
        <CardContent>
          <List className={classes.root}>
            {renderListItem(
              <Avatar alt='Lambda' style={{fontSize: '2rem', fontFamily: bodyFontFamily}}>
                λ
              </Avatar>,
              'Programming Languages',
              ['C++', 'Go', 'Java', 'Python', 'JavaScript', 'TypeScript'],
            )}
            <Divider variant='inset' component='li' />
            {renderListItem(
              <Avatar>
                <img className='iconImage' alt='Frontend Development' src='/img/monitor.png'/>
              </Avatar>,
              'Frontend Web Development',
              ['HTML', 'CSS', 'React', 'Webpack'],
            )}
            <Divider variant='inset' component='li' />
            {renderListItem(
              <Avatar>
                <img className='iconImage' alt='Frontend Development' src='/img/server.png'/>
              </Avatar>,
              'Backend Web Development',
              ['Spring', 'Django', 'Node.js', 'Firebase', 'RabbitMQ'],
            )}
            <Divider variant='inset' component='li' />
            {renderListItem(
              <Avatar>
                <img className='iconImage' alt='Frontend Development' src='/img/database.png'/>
              </Avatar>,
              'Databases',
              ['SQL', 'PostgreSQL', 'Redis', 'MongoDB', 'Spark', 'Solr'],
            )}
            <Divider variant='inset' component='li' />
            {renderListItem(
              <Avatar>
                <img className='iconImage' alt='Frontend Development' src='/img/devops.png'/>
              </Avatar>,
              'DevOps & Others',
              ['AWS', 'Docker', 'GCP', 'Git', 'Nginx', 'Kubernetes', 'Linux'],
            )}
          </List>
        </CardContent>
      </Card>
    </Section>
  );
};

export default Skills;
