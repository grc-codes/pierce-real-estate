import styled from 'styled-components';

export const ServicesContainer = styled.div`
    padding: 80px 10%;
    background: #1C1D21;
    width: 100%;
    z-index: 20;
    display: flex;
    flex-direction: column;
    position: relative;

    @media screen and (min-width: 1200px) {
        padding: 80px 0;
    }
`;

export const ServicesDesktopWrapper = styled.div`
    @media screen and (min-width: 1024px) {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
    }
`;

export const ServicesCTA = styled.div`
    width: 100%;
    
    @media screen and (min-width: 1024px) {
        align-self: center;
        margin-right: 10%;
    }
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
    @media screen and (min-width: 600px) {
        display: grid;
        flex-direction: unset;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;
    }
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
