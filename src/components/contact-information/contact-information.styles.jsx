import styled from 'styled-components';

export const ContactInformationContainer = styled.div`
    width: 100%;
    padding: 80px 0;
    background-image: ${({backgroundImageUrl}) => `url(${backgroundImageUrl})`};
    background-size: cover;
    background-position: center center;
    @media screen and (min-width: 600px) {
        display: flex;
        justify-content: flex-end;
    }
`;

export const ContactInformationBox = styled.div`
    padding: 0 20px;
    width: 100%;
    @media screen and (min-width: 600px) {
        padding: 0 10%;
        width: 60%;
    }
`;

export const ContactInformationBoxContainer = styled.div`
    width: 100%;
    background: #fff;
    border-radius: 5px;
    box-shadow: #000 0 3px 14px -5px;
    padding: 40px;
    display: flex;
    flex-direction: column;
`;

export const ContactInformationAddressTitle = styled.h3`
    width: 100%;
    font-family: 'Raleway', sans-serif;
    font-size: 1.5em;
    font-weight: 700;
    color: #1c1d21;
    margin-bottom: .75em;
`;

export const ContactInformationAddressText = styled.p`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    font-weight: 400;
    color: #1c1d21;
    margin-bottom: 1.5em;
    line-height: 1.5;
`;

export const ContactInformationPhoneTitle = styled.h3`
    width: 100%;
    font-family: 'Raleway', sans-serif;
    font-size: 1.5em;
    font-weight: 700;
    color: #1c1d21;
    margin-bottom: .75em;
`;

export const ContactInformationPhoneText = styled.p`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    font-weight: 400;
    margin-bottom: 1.5em;
    line-height: 1.5;
    a {
        color: #4ba4db;
    }
`;

export const ContactInformationHoursTitle = styled.h3`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    font-weight: 700;
    color: #1c1d21;
    margin-bottom: 1.5em;
    line-height: 1.5;
`;

export const ContactInformationHoursText = styled.p`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    font-weight: 400;
    color: #1c1d21;
    margin-bottom: 1.5em;
    line-height: 1.5;
`;

export const ContactInformationButton = styled.div`
    width: 150px;
    padding: 0 30px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #4ba4db;
    &:hover {
        cursor: pointer;
    }
    & a {
        color: #fff;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-size: .75em;
        font-weight: 600;
        letter-spacing: .09em;
        text-transform: uppercase;
        white-space: nowrap;
    }
`;