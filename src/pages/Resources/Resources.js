import React from 'react';
import Features from '../../components/Features/Features';
import InfoSection from '../../components/InfoSection/InfoSection';
import { Resource1, Resource3 } from './Data';

const Resources = () => {
  return (
    <>
        <Features />
        <InfoSection {...Resource1} />
        <InfoSection {...Resource3} />
    </>
  )
}

export default Resources;