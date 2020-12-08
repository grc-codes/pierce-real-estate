import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.div`
    width: 100%;
    height: calc(100vh - 90px);

    @media screen and (min-width: 1200px) {
        display: flex;
        max-width: 1200px;
        margin: 0 auto;
    }
`;

export const HeroImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
    background-size: cover;

    @media screen and (min-width: 1200px) {
        display: none;
    }
`;


export const HeroGradientContainer = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(0,0,0);
    background: -moz-linear-gradient(180deg, rgba(0,0,0,.65) 0%, rgba(0,0,0,0) 100%);
    background: -webkit-linear-gradient(180deg, rgba(0,0,0,.65) 0%, rgba(0,0,0,0) 100%);
    background: linear-gradient(180deg, rgba(0,0,0,.65) 0%, rgba(0,0,0,0) 100%);
    padding: 175px 0;

    @media screen and (min-width: 1200px) {
        padding: 50% 0;
        display: none;
    }
`;

export const HeroTextContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 10%;
    flex-direction: column;
    justify-content: center;
`;

export const HeroTitle = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-size: 2.25em;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
    margin-bottom: .6em;
    text-align: center;
`;

export const HeroSubtitle = styled.h3`
    width: 80%;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    font-size: 1.25em;
    color: #fff;
    text-align: center;
    line-height: 1.5;
    margin-bottom: 1.25em;
`;

export const HeroButton = styled.div`
    padding: 15px 30px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #4ba4db;
    min-width: 200px;
    margin: 0 auto;
    border: 2px solid #4ba4db;
    &:hover {
        cursor: pointer;
        background: #fff;
        & :first-child {
            color: #4ba4db;
        }
    }

`;

export const HeroLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1em;
    letter-spacing: .09em;
    text-transform: uppercase;
    white-space: nowrap;
`;

export const HeroDesktopImageContainer = styled.div`
    background: darkgrey;
    width: 100%;
    height: 100%;
    display: none;
    background-position: center;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
    background-size: cover;

    @media screen and (min-width: 1200px) {
        display: block;
    }
`;

export const HeroDesktopTextContainer = styled.div`
    display: none;
    width: 100%;
    height: 100%;
    background: lightgrey;
    
    @media screen and (min-width: 1200px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const HeroDesktopBackdrop = styled.div`
    position: absolute;
    top: 10%;
    background: #cecece;
    width: 900px;
    height: 900px;
    border-radius: 50%;
    display: flex;
    opacity: .6;
    z-index: 1;
`;

export const HeroDesktopTitle = styled.h2`
    position: relative;
    font-family: 'Raleway', sans-serif;
    font-size: 3.75em;
    font-weight: 900;
    color: #4ba4db;
    margin-bottom: .35em;
`;

export const HeroDesktopSubtitle = styled.h3`
    position: relative;
    font-family: 'Roboto', sans-serif;
    color: #1c1d21;
    font-size: 2.25em;
    margin-bottom: .5em;
`;

export const HeroDesktopButton = styled.div`
    position: relative;
    padding: 20px;
    background: #4ba4db;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 200px;
    border-radius: 5px;
    border: 2px solid #4ba4db;
    transition: all .3s ease-in-out;
    &:hover {
        cursor: pointer;
        background: transparent;
        & :first-child {
            color: #4ba4db;
        }
    }
`;

export const HeroDesktopLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 1em;
    letter-spacing: .09em;
    text-transform: uppercase;
    white-space: nowrap;
`;

export const HeroDesktopText = styled.div`
    width: 85%;
    height: 85%;
    display: flex;
    position: relative;
    top: 25%;
    flex-direction: column;
    z-index: 4;
`;