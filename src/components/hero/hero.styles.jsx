import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.div`
    width: 100%;
    height: calc(100vh - 90px);
`;

export const HeroImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
    background-size: cover;
`;


export const HeroGradientContainer = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(0,0,0);
    background: -moz-linear-gradient(180deg, rgba(0,0,0,.65) 0%, rgba(0,0,0,0) 100%);
    background: -webkit-linear-gradient(180deg, rgba(0,0,0,.65) 0%, rgba(0,0,0,0) 100%);
    background: linear-gradient(180deg, rgba(0,0,0,.65) 0%, rgba(0,0,0,0) 100%);
    padding: 50% 0;
`;

export const HeroTextContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0 10%;
    flex-direction: column;
    align-items: center;
`;

export const HeroTitle = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-size: 2.25em;
    font-weight: 700;
    color: #4ba4db;
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
    margin-bottom: auto;
`;

export const HeroButton = styled.div`
    padding: 0 30px;
    height: 38px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #4ba4db;
    &:hover {
        cursor: pointer;
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