import React from 'react';
import {
    ServicesContainer,
    ServicesCTA,
    ServicesSubtitle,
    ServicesTitle,
    ServicesTables,
    ServicesTable,
    ServicesIconContainer,
    ServicesTableTitle,
    ServicesText,
    ServicesDesktopWrapper
} from './services.styles';

const Services = () => (
    <ServicesContainer>
        <ServicesDesktopWrapper>
            <ServicesCTA>
                <ServicesSubtitle>
                    Discover a place you'll love
                </ServicesSubtitle>
                <ServicesTitle>
                    We have the most listings and constant updates. So you'll never miss out.
                </ServicesTitle>
            </ServicesCTA>
            <ServicesTables>
                <ServicesTable>
                    <ServicesIconContainer>
                        <i className='fas fa-home fa-lg'></i>
                    </ServicesIconContainer>
                    <ServicesTableTitle>
                        Buy a home
                    </ServicesTableTitle>
                    <ServicesText>
                        With over 1 million+ homes for sale available on the website, Pierce Real Estate can match you with a house you will want to call home.
                    </ServicesText>
                </ServicesTable>
                <ServicesTable>
                    <ServicesIconContainer>
                        <i className='fab fa-houzz fa-lg'></i>
                    </ServicesIconContainer>
                    <ServicesTableTitle>
                        Rent a home
                    </ServicesTableTitle>
                    <ServicesText>
                        With 35+ filters and custom keyword search, Pierce Real Estate can help you easily find a home or apartment for rent that you'll love.
                    </ServicesText>
                </ServicesTable>
                <ServicesTable>
                    <ServicesIconContainer>
                        <i className='fas fa-users fa-lg'></i>
                    </ServicesIconContainer>
                    <ServicesTableTitle>
                        See neighborhoods
                    </ServicesTableTitle>
                    <ServicesText>
                        With more neighborhood insights than any other real estate website, we've captured the color and diversity of communities.
                    </ServicesText>
                </ServicesTable>
            </ServicesTables>
        </ServicesDesktopWrapper>
    </ServicesContainer>
);

export default Services;