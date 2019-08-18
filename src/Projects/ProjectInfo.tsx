import {Button, Divider, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import Tags from '../Tags';
import {Project} from './projects';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    scrollSnapAlign: 'start',
  },
  container: {
    marginLeft: 20,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
  body: {
    marginTop: 10,
  },
  buttons: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    marginRight: 10,
  },
});

export interface Props {
  project: Project;
}

const ProjectInfo: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const {project} = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant='h3'>
          {project.name}
        </Typography>
        <Typography variant='h6'>
          {project.description}
        </Typography>
        <Divider className={classes.divider}/>
        <Tags tags={project.tags}/>
        <div className={classes.body}>
          {project.body}
        </div>
        <div className={classes.buttons}>
          {project.links.map((link, idx) => (
            <Button
              className={classes.button}
              key={idx}
              href={link.url}
              variant='outlined'
              color={idx === 0 ? 'primary' : 'default'}
            >
              {link.display}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
