import {Typography} from '@material-ui/core';
import React from 'react';

export interface Project {
  name: string;
  description: string;
  tags: string[];
  body: React.ReactNode;
  imageURLs: string[];
  links: Array<{
    display: React.ReactNode;
    url: string;
  }>;
}

export const projects = [
  {
    name: 'InQuizitive',
    description: 'A Progressive Web App for online quizzes and class discussion.',
    tags: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    body: (
      <>
        <Typography variant='body1'>
          Led a team of six to rapidly develop a full-stack web app with Scrum.
        </Typography>
        <Typography variant='body1'>
          Designed a <a href='https://app.swaggerhub.com/apis-docs/yifei-fu/InQuizitive/1.0.0'>Swagger API documentation</a> for better team coordination.
        </Typography>
        <Typography variant='body1'>
          Developed a responsive frontend with real-time data and push notifications.
        </Typography>
        <Typography variant='body1'>
          Deployed the system to AWS EC2 with Docker Compose; Reduced latency by 23% with Nginx load balancing.
        </Typography>
      </>

    ),
    imageURLs: ['img/inquizitive-1.jpg', 'img/inquizitive-2.jpg', 'img/inquizitive-3.jpg'],
    links: [
      {
        display: 'Repo',
        url: 'https://github.com/yifei-fu/classroom',
      },
    ],
  },
  {
    name: 'Quickey',
    description: 'A time-saving Chrome New Tab extension.',
    tags: ['JavaScript', 'React', 'Redux', 'Firebase'],
    body: (
      <>
        <Typography variant='body1'>
          Introduced Firebase to the existing codebase to build account management and user settings syncing.
        </Typography>
        <Typography variant='body1'>
          Developed a subscription payment flow with Stripe and React.
        </Typography>
      </>

    ),
    imageURLs: ['img/quickey-1.jpg'],
    links: [
      {
        display: 'Visit',
        url: 'https://www.quickey.co',
      },
    ],
  },
];
