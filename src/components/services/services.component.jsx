import React from 'react';
import {
    ServicesContainer,
    ServicesTitle,
    ServicesTables,
    ServicesTable,
    ServicesIconContainer,
    ServicesTableTitle,
    ServicesText
} from './services.styles';

const Services = () => (
    <ServicesContainer>
        <ServicesTitle>
            Our Services
        </ServicesTitle>
        <ServicesTables>
            <ServicesTable>
                <ServicesIconContainer>
                    <i className='fas fa-search-location fa-lg'></i>
                </ServicesIconContainer>
                <ServicesTableTitle>
                    Search Property
                </ServicesTableTitle>
                <ServicesText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit explicabo iusto molestias quas reiciendis tempore dolorem libero, unde eius earum expedita aliquid eaque amet alias provident, asperiores nulla! Soluta, eius.
                </ServicesText>
            </ServicesTable>
            <ServicesTable>
                <ServicesIconContainer>
                    <i className='fas fa-chart-pie fa-lg'></i>
                </ServicesIconContainer>
                <ServicesTableTitle>
                    Asset Management
                </ServicesTableTitle>
                <ServicesText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit explicabo iusto molestias quas reiciendis tempore dolorem libero, unde eius earum expedita aliquid eaque amet alias provident, asperiores nulla! Soluta, eius.
                </ServicesText>
            </ServicesTable>
            <ServicesTable>
                <ServicesIconContainer>
                    <i className='fas fa-dollar-sign fa-lg'></i>
                </ServicesIconContainer>
                <ServicesTableTitle>
                    Cost Management
                </ServicesTableTitle>
                <ServicesText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit explicabo iusto molestias quas reiciendis tempore dolorem libero, unde eius earum expedita aliquid eaque amet alias provident, asperiores nulla! Soluta, eius.
                </ServicesText>
            </ServicesTable>
        </ServicesTables>
    </ServicesContainer>
);

export default Services;