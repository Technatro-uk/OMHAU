import React from "react";
// import { Button } from '../../globalStyles';
import Icon1 from "../../images/img04.svg";
import Icon2 from "../../images/img05.svg";
import Icon3 from "../../images/img06.svg";
import ArrowRight from "../../images/arrow-right.svg";
import {
  HealthContainer,
  HealthWrapper,
  HealthCard,
  HealthIcon,
  HealthH2,
  HealthP,
  HealthButtonIcon,
  HealthLink,
} from "../styles/Health.Elements";

const Health = () => {
  return (
    <HealthContainer>
      <HealthWrapper>
        <HealthCard to="/">
          <HealthIcon src={Icon3} />
          <HealthH2>Health & Wellbeing</HealthH2>
          <HealthP>
            Health and wellbeing can be described as the achievement and
            maintenance of physical fitness and mental stability
          </HealthP>
          <HealthLink>
            <HealthButtonIcon src={ArrowRight} />
          </HealthLink>
        </HealthCard>
        <HealthCard to="/exercise">
          <HealthIcon src={Icon2} />
          <HealthH2>Activities & Exercise</HealthH2>
          <HealthP>
            Regular physical activity, such as walking, cycling, doing sports or
            active recreation, provides significant health benefits
          </HealthP>
          <HealthLink>
            <HealthButtonIcon src={ArrowRight} />
          </HealthLink>
        </HealthCard>
        <HealthCard to="/">
          <HealthIcon src={Icon1} />
          <HealthH2>Healthy Environment</HealthH2>
          <HealthP>
            The environment can influence either positively or negatively a
            person's mental well-being
          </HealthP>
          <HealthLink>
            <HealthButtonIcon src={ArrowRight} />
          </HealthLink>
        </HealthCard>
      </HealthWrapper>
    </HealthContainer>
  );
};

export default Health;