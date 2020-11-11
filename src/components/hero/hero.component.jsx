import React from 'react';
import {
    HeroContainer,
    HeroGradientContainer,
    HeroImageContainer,
    HeroTextContainer,
    HeroTitle,
    HeroSubtitle,
    HeroButton,
    HeroLink
} from './hero.styles';

const Hero = () => (
    <HeroContainer>
        <HeroImageContainer imageUrl='../../assets/hero.jpg'>
            <HeroGradientContainer>
                <HeroTextContainer>
                    <HeroTitle>
                        Reimagine home
                    </HeroTitle>
                    <HeroSubtitle>
                        We'll help you find a place you'll love.
                    </HeroSubtitle>
                    <HeroButton>
                        <HeroLink to='/search'>
                            Are You Ready?
                        </HeroLink>
                    </HeroButton>
                </HeroTextContainer>
            </HeroGradientContainer>
        </HeroImageContainer>
    </HeroContainer>
);

export default Hero;