import React from 'react';
import { Information1, Information3 } from './Data';
import InfoSection from '../../components/InfoSection/InfoSection';
import Health from '../../components/Health/Health';
import Carousel from '../../components/Carousel/Carousel';
import QuickEscapes from '../../components/Library/QuickEscapes/QuickEscapes';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <>
        <InfoSection {...Information1} />
        <Health />
        <QuickEscapes />
        <Carousel />
        <InfoSection {...Information3} />
        <Footer />
    </>
  )
}

export default Home;