import React from 'react';
import {
    HeroContainer,
    HeroImageContainer,
    HeroTextContainer,
    NeighborhoodText,
    CityText,
    RightArrowContainer,
    LeftArrowContainer
} from './hero.styles';

const Hero = () => (
    <HeroContainer>
        <HeroImageContainer imageUrl='https://i.ibb.co/phdZ7hM/toa-heftiba-nr-Sz-RUWqmo-I-unsplash.jpg'>
            <HeroTextContainer>
                <NeighborhoodText>
                    Hidden Hills
                </NeighborhoodText>
                <CityText>
                    Los Angeles
                </CityText>
            </HeroTextContainer>
            <LeftArrowContainer>
                <i className='fas fa-caret-left'></i>
            </LeftArrowContainer>
            <RightArrowContainer>
                <i className='fas fa-caret-right'></i>
            </RightArrowContainer>
        </HeroImageContainer>
    </HeroContainer>
);

export default Hero;