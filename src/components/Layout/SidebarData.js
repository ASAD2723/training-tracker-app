import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as ImIcons from 'react-icons/im';
import * as BsIcons from 'react-icons/bs';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Audience',
    path: '/',
    icon: <BsIcons.BsPeopleFill />,
    cName: 'nav-text'
  },
  {
    title: 'Trainer',
    path: '/trainer',
    icon: <FaIcons.FaChalkboardTeacher />,
    cName: 'nav-text'
  },
  {
    title: 'Resources',
    path: '/resources',
    icon: <GiIcons.GiMaterialsScience />,
    cName: 'nav-text'
  },
  {
    title: 'Curriculum',
    path: '/curriculum',
    icon: <ImIcons.ImBooks />,
    cName: 'nav-text'
  }
];