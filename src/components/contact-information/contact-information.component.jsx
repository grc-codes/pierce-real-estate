import React from 'react';
import {
    ContactInformationContainer,
    ContactInformationBox,
    ContactInformationBoxContainer,
    ContactInformationAddressTitle,
    ContactInformationAddressText,
    ContactInformationPhoneTitle,
    ContactInformationPhoneText,
    ContactInformationHoursTitle,
    ContactInformationHoursText,
    ContactInformationButton
} from './contact-information.styles';

const ContactInformation = () => (
    <ContactInformationContainer backgroundImageUrl='https://i.ibb.co/CMxwcjj/avi-waxman-f9q-Zu-Ko-ZYo-Y-unsplash.jpg'>
        <ContactInformationBox>
            <ContactInformationBoxContainer>
                <ContactInformationAddressTitle>
                    Address
                </ContactInformationAddressTitle>
                <ContactInformationAddressText>
                    219 1st Avenue South #320
                    <br />
                    Seattle, Washington 98104
                </ContactInformationAddressText>
                <ContactInformationPhoneTitle>
                    Phone
                </ContactInformationPhoneTitle>
                <ContactInformationPhoneText>
                    <a href='tel:12069625110'>+1.206.962.5110</a>
                </ContactInformationPhoneText>
                <ContactInformationHoursTitle>
                    Assistance Hours:
                </ContactInformationHoursTitle>
                <ContactInformationHoursText>
                    Monday - Friday
                    <br />
                    9AM to 5PM PST
                </ContactInformationHoursText>
                <ContactInformationButton>
                    <a href='#'>Get in Touch</a>
                </ContactInformationButton>
            </ContactInformationBoxContainer>
        </ContactInformationBox>
    </ContactInformationContainer>
);

export default ContactInformation;