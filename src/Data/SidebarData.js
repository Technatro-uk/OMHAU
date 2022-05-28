import React from 'react';
import { BsListStars } from 'react-icons/bs';
import { MdOndemandVideo } from 'react-icons/md';
import { RiMentalHealthFill } from 'react-icons/ri';
import { GiHealthNormal } from 'react-icons/gi';
const iconStyle = (Icon) => <Icon size="1.5rem" color='#333' />;

export const SidebarData = [  
  {
    menuIcon: iconStyle(MdOndemandVideo),
    menuTitle: 'Library Home',
    menuLink: ''
  },
  {
    menuIcon: iconStyle(BsListStars),
    menuTitle: 'Featured',
    menuLink: ''
  },
  {
    menuIcon: iconStyle(GiHealthNormal),
    menuTitle: "Health & Wellbeing",
    menuLink: ''
  },
  {
    menuIcon: iconStyle(RiMentalHealthFill),
    menuTitle: 'Mental Health',
    menuLink: ''
  }
];