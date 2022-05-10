import React from 'react';
import { Button } from '../../globalStyles';
import Icon1 from '../../images/img04.svg';
import Icon2 from '../../images/img05.svg';
import Icon3 from '../../images/img06.svg';
import { 
    HealthContainer,
    HealthH1,
    HealthWrapper,
    HealthCard,
    HealthIcon,
    HealthH2,
    HealthP,
    HealthLink
 } from './Health.Elements';

const Health = () => {
  return (
    <HealthContainer>
        <HealthH1>Take me to..</HealthH1>
        <HealthWrapper>
            <HealthCard>
                <HealthIcon src={Icon3} />
                <HealthH2>Health & Wellbeing</HealthH2>
                <HealthP>We help to reduce your fees and increase your overall revenue</HealthP>
                <HealthLink to='/'>
                    <Button>Go to <i class="fa-solid fa-arrow-right"></i></Button>
                </HealthLink>
            </HealthCard>
            <HealthCard>
                <HealthIcon src={Icon2} />
                <HealthH2>Activities & Exercise</HealthH2>
                <HealthP>We help to reduce your fees and increase your overall revenue</HealthP>
                <HealthLink to='/'>
                    <Button>Go to <i class="fa-solid fa-arrow-right"></i></Button>
                </HealthLink>
            </HealthCard>
            <HealthCard>
                <HealthIcon src={Icon1} />
                <HealthH2>Healthy Environment</HealthH2>
                <HealthP>We help to reduce your fees and increase your overall revenue</HealthP>
                <HealthLink to='/'>
                    <Button>Go to <i class="fa-solid fa-arrow-right"></i></Button>
                </HealthLink>
            </HealthCard>
        </HealthWrapper>
    </HealthContainer>
  )
}

export default Health;