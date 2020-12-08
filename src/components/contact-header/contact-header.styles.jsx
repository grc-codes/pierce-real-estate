import styled from 'styled-components';

export const ContactHeaderContainer = styled.div`
    width: 100%;
    background: #fff;
    padding: 100px 20px 60px;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 600px) {
        padding: 100px 10% 60px;
    }
`;

export const ContactTitle = styled.h2`
    width: 100%;
    font-family: 'Raleway', sans-serif;
    font-size: 2.5em;
    font-weight: 700;
    color: #1c1d21;
    margin-bottom: .5em;

    @media screen and (min-width: 600px) {
        font-size: 3.5em;
        font-weight: 900;
        margin-bottom: .4em;
    }
`;

export const ContactSubtitle = styled.h4`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 1.25em;
    font-weight: 400;
    color: #1c1d21;
    line-height: 1.5;
    margin-bottom: 1em;
    @media screen and (min-width: 600px) {
        opacity: .6;
    }
`;

export const ContactEmailButton = styled.div`
    width: 175px;
    padding: 10px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #4ba4db;
    border: 2px solid #4ba4db;
    flex-wrap: nowrap;
    &:hover {
        cursor: pointer;
        background: #fff;
        & a {
            color: #4ba4db;
        }
    }
    & a {
        width: 100%;
        height: 100%;
        text-align: center;
        color: #fff;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-size: .75em;
        font-weight: 600;
        letter-spacing: .1em;
        text-transform: uppercase;
        display: inline-block;
    }
    & .fas {
        margin-left: 10px;
    }
`;