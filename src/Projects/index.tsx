import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React, {useRef} from 'react';
import Section from '../Section';
import ProjectInfo from './ProjectInfo';
import ProjectMedia from './ProjectMedia';
import {projects} from './projects';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  sticky: {
    position: 'sticky',
    top: 0,
  },
  projectsContainer: {
    scrollSnapType: 'y mandatory',
  },
});

const Projects: React.FC = () => {
  const classes = useStyles();
  const projectInfoRef = useRef<HTMLDivElement>(null);

  return (
    <Section className={classes.root} title='Projects'>
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='flex-start'
      >
        <Grid item className={classes.projectsContainer} xs={12} sm={6} md={5} ref={projectInfoRef}>
          {projects.map((project, idx) => <ProjectInfo project={project} key={idx}/>)}
        </Grid>
        <Grid item className={classes.sticky} xs={12} sm={6} md={7}>
          <ProjectMedia projectInfoRef={projectInfoRef}/>
        </Grid>
      </Grid>
    </Section>
  );
};

export default Projects;
