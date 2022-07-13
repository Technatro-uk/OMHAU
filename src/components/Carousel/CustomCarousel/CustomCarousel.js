import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { sliderSettings } from "../../../Data/Carousel/CarouselData";
import { Row, Button, Section } from "../../../globalStyles";
import {
  CarouselContainer,
  SectionHeading,
  ButtonContainer,
  ReviewSlider,
  Card,
  CardInformation,
  CardHeading,
  CardDatePublished,
  CardCategory,
  CardInfo,
} from './CustomCarousel.Elements';

const CustomCarousel = ({ dataSource }) => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <CarouselContainer>
      <Section margin="auto" maxWidth="100%" padding="10px 10px" inverse>
        <Row justify="space-between" margin="0.5rem" wrap="nowrap">
          <SectionHeading>
            Recently added
          </SectionHeading>
          <ButtonContainer>
            <IconContext.Provider
              value={{ size: "1.3rem", color: "dodgerblue" }}
            >
              <FaArrowLeft onClick={sliderRef?.slickPrev} />
              <FaArrowRight onClick={sliderRef?.slickNext} />
            </IconContext.Provider>
          </ButtonContainer>
        </Row>

        <ReviewSlider {...sliderSettings} ref={setSliderRef}>
          {dataSource.map((ds, id) => {
            return (
              <Card key={id}>
                    <CardInfo>
                      <CardHeading>{ds.storyTitle} written by {ds.storyAuthor}</CardHeading>
                      <CardInformation>
                        <CardCategory>
                          {ds.storyCategory}
                        </CardCategory>
                      </CardInformation>
                      <a
                        href={ds.storySourceURL ? ds.storySourceURL : ""}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button primary>Read story</Button>
                      </a>
                      <CardDatePublished>
                        (Added {ds.datePublished ? ds.datePublished : "today"})
                      </CardDatePublished>
                    </CardInfo>
                  </Card>
            );
          })}
        </ReviewSlider>
      </Section>
    </CarouselContainer>
  );
};

export default CustomCarousel;
