import React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
import { homeObj1, homeObj2 } from './Data';

const Signup = () => {
  return (
    <>
        <InfoSection {...homeObj1} />
        <InfoSection {...homeObj2} />
    </>
  )
}

export default Signup;