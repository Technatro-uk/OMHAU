import React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
import { Information1, Information2, Information3 } from './Data';
import Health from '../../components/Health/Health';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';


const Home = () => {
  return (
    <>
        <InfoSection {...Information1} />
        <Health />
        <InfoSection {...Information2} />
        <Carousel />
        <InfoSection {...Information3} />
        <Footer />
    </>
  )
}

export default Home;