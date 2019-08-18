import React from 'react';

import MailOutlineIcon from '@material-ui/icons/MailOutline';
export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:yifeifu2@gmail.com',
    icon: <MailOutlineIcon/>,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/yifei-fu',
    icon: <img className='iconButton' src={'img/github.svg'} alt={'GitHub logo'}/>,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yifei-fu/',
    icon: <img className='iconButton' src={'img/linkedin.svg'} alt={'LinkedIn logo'}/>,
  },
];
