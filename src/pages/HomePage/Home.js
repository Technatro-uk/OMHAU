import React from 'react';
import { Information1, Information3 } from './Data';
import InfoSection from '../../components/InfoSection/InfoSection';
import Health from '../../components/Health/Health';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';
import { homeData } from '../../Data/Home/HomepageResources';


const Home = () => {
  return (
    <>
        <InfoSection {...Information1} />
        <Health />
        <CustomCarousel dataSource={homeData}/>
        <InfoSection {...Information3} />
        <Carousel />
        <Footer />
    </>
  )
}

export default Home;