import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Button } from '../../globalStyles';
import Icon1 from '../../images/img04.svg';
import Icon2 from '../../images/img05.svg';
import Icon3 from '../../images/img06.svg';
import { 
    HealthContainer,
    HealthWrapper,
    HealthCard,
    HealthIcon,
    // HealthH1,
    HealthH2,
    HealthP,
    HealthLink
 } from './Health.Elements';

const Health = () => {
  return (
    <HealthContainer>
        <HealthWrapper>
            <HealthCard>
                <HealthIcon src={Icon3} />
                <HealthH2>Health & Wellbeing</HealthH2>
                <HealthP>We help to reduce your fees and increase your overall revenue</HealthP>
                <HealthLink to='/'>
                    <Button><BsFillArrowRightCircleFill /></Button>
                </HealthLink>
            </HealthCard>
            <HealthCard>
                <HealthIcon src={Icon2} />
                <HealthH2>Activities & Exercise</HealthH2>
                <HealthP>We help to reduce your fees and increase your overall revenue</HealthP>
                <HealthLink to='/exercise'>
                    <Button><BsFillArrowRightCircleFill /></Button>
                </HealthLink>
            </HealthCard>
            <HealthCard>
                <HealthIcon src={Icon1} />
                <HealthH2>Healthy Environment</HealthH2>
                <HealthP>We help to reduce your fees and increase your overall revenue</HealthP>
                <HealthLink to='/'>
                    <Button><BsFillArrowRightCircleFill /></Button>
                </HealthLink>
            </HealthCard>
        </HealthWrapper>
    </HealthContainer>
  )
}

export default Health;