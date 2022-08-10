import React from "react";
import { Information1, Information3 } from "./Data";
import InfoSection from "../../components/InfoSection/InfoSection";
import Health from "../../components/Health/Health";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import { homeData } from "../../Data/Home/HomepageResources";
import CardCarousel from "../../components/CardCarousel/CardCarousel";
import { supportData } from "../../Data/Carousel/CarouselData";
import SupportCarousel from "../../components/SupportCarousel/SupportCarousel";

const Home = () => {
  return (
    <>
      <InfoSection {...Information1} />
      <Health />
      <CardCarousel data={homeData} />
      <InfoSection {...Information3} />
		<SupportCarousel data={supportData} />
      <Footer />
    </>
  );
};

export default Home;
