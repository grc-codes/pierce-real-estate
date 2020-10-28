import React from 'react';
import {
    ServicesContainer,
    ServicesTitle
} from './services.styles';

const Services = () => (
    <ServicesContainer>
        <ServicesTitle>
            Our Services
        </ServicesTitle>
        <div className='services-tables'>
            <div className='services-table'>
                <div className='image'></div>
                <div className='service-title'></div>
                <div className='service-description'></div>
            </div>
            <div className='services-table'>
                <div className='image'></div>
                <div className='service-title'></div>
                <div className='service-description'></div>
            </div>
            <div className='services-table'>
                <div className='image'></div>
                <div className='service-title'></div>
                <div className='service-description'></div>
            </div>
        </div>
    </ServicesContainer>
);

export default Services;