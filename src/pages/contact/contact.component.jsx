import React from 'react';
import ContactHeader from '../../components/contact-header/contact-header.component';
import ContactInformation from '../../components/contact-information/contact-information.component';

const ContactPage = () => (
    <div className='contact-page'>
        <ContactHeader />
        <ContactInformation />
    </div>
);

export default ContactPage;