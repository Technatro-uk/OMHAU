import React from 'react';
import { BsListStars } from 'react-icons/bs';
import { MdOndemandVideo } from 'react-icons/md';
import { RiMentalHealthFill } from 'react-icons/ri';
import { GiHealthNormal } from 'react-icons/gi';
const iconStyle = (Icon) => <Icon size="1.5rem" />;

export const MenuSortData = [  
  {
    menuIcon: iconStyle(MdOndemandVideo),
    menuTitle: 'Home'
  },
  {
    menuIcon: iconStyle(BsListStars),
    menuTitle: 'Featured'
  },
  {
    menuIcon: iconStyle(GiHealthNormal),
    menuTitle: "Health & Wellbeing"
  },
  {
    menuIcon: iconStyle(RiMentalHealthFill),
    menuTitle: 'Mental Health'
  }
];