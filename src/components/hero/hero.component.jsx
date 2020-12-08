import React from 'react';
import {
    HeroContainer,
    HeroGradientContainer,
    HeroImageContainer,
    HeroTextContainer,
    HeroTitle,
    HeroSubtitle,
    HeroButton,
    HeroLink,
    HeroDesktopImageContainer,
    HeroDesktopTextContainer,
    HeroDesktopBackdrop,
    HeroDesktopTitle,
    HeroDesktopSubtitle,
    HeroDesktopButton,
    HeroDesktopLink,
    HeroDesktopText
} from './hero.styles';

const Hero = () => (
    <HeroContainer>
        <HeroDesktopImageContainer imageUrl='../../assets/hero.jpg' />
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
        <HeroDesktopTextContainer>
            <HeroDesktopBackdrop />
            <HeroDesktopText>
                <HeroDesktopTitle>
                    Reimagine home
                </HeroDesktopTitle>
                <HeroDesktopSubtitle>
                    We'll help you find a place you'll love.
                </HeroDesktopSubtitle>
                <HeroDesktopButton>
                    <HeroDesktopLink to='/search'>
                        Are You Ready?
                    </HeroDesktopLink>
                </HeroDesktopButton>
            </HeroDesktopText>
        </HeroDesktopTextContainer>
    </HeroContainer>
);

export default Hero;