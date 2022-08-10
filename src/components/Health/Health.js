import React from "react";
import Icon1 from "../../images/img04.svg";
import Icon2 from "../../images/img05.svg";
import Icon3 from "../../images/img07.svg";
import Icon4 from "../../images/img06.svg";
import {
  HealthContainer,
  HealthWrapper,
  HealthCard,
  HealthIcon,
  HealthH2,
  HealthP,
} from "../styles/Health.Elements";

const Health = () => {
  return (
    <HealthContainer>
      <HealthWrapper>
        <HealthCard to="/">
          <HealthIcon src={Icon1} />
          <HealthH2>Healthy Environment</HealthH2>
          <HealthP>
            Spending time in green space or bringing nature into your everyday
            life can benefit both your mental and physical wellbeing. Growing food or flowers, 
            exercising outdoors or being around animals can have lots of positive effects.
          </HealthP>
        </HealthCard>
        <HealthCard to="/exercise">
          <HealthIcon src={Icon2} />
          <HealthH2>Activities & Exercise</HealthH2>
          <HealthP>
            Regular physical activity, such as walking, cycling, doing sports or
            active recreation, provides significant health benefits
          </HealthP>
        </HealthCard>
        <HealthCard to="/">
          <HealthIcon src={Icon3} />
          <HealthH2>Healthy Diet</HealthH2>
          <HealthP>
            A healthy diet is essential for good health and nutrition. It
            protects you against many chronic noncommunicable diseases, such as
            heart disease, diabetes and cancer.
          </HealthP>
        </HealthCard>
        <HealthCard to="/">
          <HealthIcon src={Icon4} />
          <HealthH2>Health & Wellbeing</HealthH2>
          <HealthP>
            Health and wellbeing can be described as the achievement and
            maintenance of physical fitness and mental stability
          </HealthP>
        </HealthCard>
      </HealthWrapper>
    </HealthContainer>
  );
};

export default Health;
