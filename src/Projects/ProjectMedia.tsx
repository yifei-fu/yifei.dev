import {makeStyles} from '@material-ui/core/styles';
import React, {useEffect, useState} from 'react';
import {cardBorderRadius} from '../theme';
import {projects} from './projects';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container: {
    right: 0,
    paddingLeft: 30,
    paddingTop: 30,
    paddingBottom: 30,
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    borderRadius: cardBorderRadius,
    boxShadow: theme.shadows[11],
    height: '85vh',
    marginRight: 20,
  },
}));

export interface Props {
  projectInfoRef: React.RefObject<HTMLDivElement>;
}

const ProjectMedia: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const {projectInfoRef} = props;
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (projectInfoRef.current) {
        const newCurrentProjectIndex = Math.min(projects.length - 1, Math.max(0, Math.round((window.scrollY - projectInfoRef.current.offsetTop) / window.innerHeight)));
        setCurrentProjectIndex(newCurrentProjectIndex);
        console.log(newCurrentProjectIndex);
      }
    });
  }, []);
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {projects[currentProjectIndex].imageURLs.map((url, idx) => (
          <img className={classes.image} key={idx} src={url} alt={'Project showcase'} />
        ))}
      </div>
    </div>
  );
};

export default ProjectMedia;
