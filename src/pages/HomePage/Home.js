import React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
import { Information1, Information2, Information3 } from './Data';
import Health from '../../components/Health/Health';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import Features from '../../components/Features/Features';


const Home = () => {
  return (
    <>
        <InfoSection {...Information1} />
        <InfoSection {...Information2} />
        <Features />

        <InfoSection {...Information3} />
        <Health />
        <Carousel />
        <Footer />
    </>
  )
}

export default Home;