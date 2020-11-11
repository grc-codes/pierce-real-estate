import styled from 'styled-components';

export const ServicesContainer = styled.div`
    padding: 80px 20px;
    background: #1C1D21;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ServicesCTA = styled.div`
    width: 100%;
`;

export const ServicesSubtitle = styled.h4`
    font-family: 'Roboto', sans-serif;
    font-size: 1.25em;
    font-weight: 700;
    text-transform: uppercase;
    color: #ececec;
    opacity: .6;
    letter-spacing: 1px;
    margin-right: 20%;
    line-height: 1.5;
    margin-bottom: 1em;
`;

export const ServicesTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 2.25em;
    font-weight: 700;
    color: #fff;
    line-height: 1.5;
    margin-bottom: .6em;
`;

export const ServicesTables = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ServicesTable = styled.div`
    width: 100%;
    padding: 20px 0;
`;

export const ServicesIconContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    margin-bottom: .6em;
    & .fas,.fab {
        color: #A4A5A6;
        font-size: 3em;
    }
`;

export const ServicesTableTitle = styled.h3`
    font-family: 'Raleway', sans-serif;
    font-size: 1.4em;
    margin-bottom: .9em;
    color: #fff;
    font-weight: 900;
`;

export const ServicesText = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: .9em;
    line-height: 1.5;
    color: #fff;
`;
