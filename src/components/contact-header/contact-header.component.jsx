import React from 'react';
import {
    ContactHeaderContainer,
    ContactTitle,
    ContactSubtitle,
    ContactEmailButton
} from './contact-header.styles';

const ContactHeader = () => (
    <ContactHeaderContainer>
        <ContactTitle>
            Let's connect.
        </ContactTitle>
        <ContactSubtitle>
            Leave us a little info, and we'll be in touch.
        </ContactSubtitle>
        <ContactEmailButton>
            <a href='#'>Email Us <i className='fas fa-arrow-right' /></a>
        </ContactEmailButton>
    </ContactHeaderContainer>
);

export default ContactHeader;