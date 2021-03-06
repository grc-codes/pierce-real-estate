import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    background: #f8f8f8;
    padding: 60px 0 0 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

export const FooterDesktopWrapper = styled.div`
    @media screen and (min-width: 1024px) {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    display: unset;
    margin: unset;
`;

export const HR = styled.hr`
    width: 80%;
    border: 2px solid #dfdfdf;
    margin: 0;

    @media screen and (min-width: 1024px) {
        width: 100%;
    }
`;

export const FooterTestimonialsContainer = styled.div`
    width: 100%;
    display: flex;
    padding: 0 20px;
    flex-wrap: wrap;
    margin-bottom: 8.3em;
`;

export const FooterTestimonialsTitle = styled.h3`
    font-family: 'Roboto', sans-serif;
    color: #232323;
    font-size: 1.4em;
    text-align: center;
    margin: 0 0 1.5em 0;
    font-weight: 500;
    text-transform: uppercase;
    width: 100%;
    padding-top: 1.5em;
    border-top: 4px solid #dfdfdf;
`;

export const FooterTestimonialsText = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: .9em;
    color: #232323;
    text-align: center;
    line-height: 1.5em;
    width: 100%;
    padding: 0 10px;
`;

export const FooterTestimonialsSpan = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: .8em;
    margin-top: 1em;
    color: #232323;
    text-align: center;
    font-weight: 300;
    width: 100%;
    padding: 0 10px;
`;

export const AppStoresContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid #dfdfdf;
    border-top: 1px solid #dfdfdf;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    overflow: hidden;
    @media screen and (min-width: 1024px) {
        width: 100%;
    }
`;

export const AppStoreIconContainer = styled.div`
    height: 70px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2em;
    padding: 10px;
`;

export const PlayStoreIconContainer = styled.div`
    height: 70px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2em;
    padding: 10px;
`;


export const SocialContainer = styled.div`
    width: 100%;
    border-bottom: 1px solid #dfdfdf;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;
    & .fab {
        color: #232323;
        font-size: 2.5em;
    }
    & .fa-facebook-square {
        color: #4267B2;
    }
    & .fa-pinterest-square {
        color: #BD081C;
    }
    & .fa-twitter-square {
        color: #1DA1F2;
    }
    & .fa-youtube-square {
        color: #FF0000;
    }
`;

export const LinksContainer = styled.div`
    width: 100%;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    color: #1c1d21;
    
    span {
        font-family: 'Roboto', sans-serif;
        font-size: 1em;
        text-align: center;
        color: #1c1d21;
        opacity: .6;
        text-transform: uppercase;
        font-weight: 700;
    }
`;

export const FooterLinks = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5em;
`;

export const FooterLink = styled(Link)`
    color: #1c1d21;
    opacity: .6;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    font-weight: 700;
    margin: 0 .5em;
    text-transform: uppercase;
    transition: all .3s ease-in-out;
    &:hover {
        cursor: pointer;
        color: #4ba4db;
        opacity: 1;
    }
    &:first-of-type {
        margin-left: 0;
    }
    &:last-of-type {
        margin-right: 0;
    }
`;