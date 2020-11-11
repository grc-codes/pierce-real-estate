import styled from 'styled-components';

export const ContactHeaderContainer = styled.div`
    width: 100%;
    background: #fff;
    padding: 100px 20px 60px;
    display: flex;
    flex-direction: column;
`;

export const ContactTitle = styled.h2`
    width: 100%;
    font-family: 'Raleway', sans-serif;
    font-size: 2.5em;
    font-weight: 700;
    color: #1c1d21;
    margin-bottom: .5em;
`;

export const ContactSubtitle = styled.h4`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 1.25em;
    font-weight: 400;
    color: #1c1d21;
    line-height: 1.5;
    margin-bottom: 1em;
`;

export const ContactEmailButton = styled.div`
    width: 150px;
    padding: 0 30px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: #ea2f46;
    &:hover {
        cursor: pointer;
    }
    & a {
        color: #fff;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-size: .75em;
        font-weight: 600;
        letter-spacing: .1em;
        text-transform: uppercase;
    }
    & .fas {
        margin-left: 10px;
    }
`;