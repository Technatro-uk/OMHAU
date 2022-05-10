import React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
import { homeObj2, homeObj3 } from './Data';

const Products = () => {
  return (
    <>
        <InfoSection {...homeObj2} />
        <InfoSection {...homeObj3} />
    </>
  )
}

export default Products