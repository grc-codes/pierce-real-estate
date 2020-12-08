import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MobileMenuContainer = styled.div`
    width: 100%;
    position: absolute;
    right: 0;
    top: 90px;
    z-index: 10;
    height: 0vh;
    background: #fff;
    transition: height .5s ease-in-out;
    overflow: hidden;
    &.active {
        height: 100vh;
    }

`;

export const OptionsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const OptionLink = styled(Link)`
    padding: 40px;
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #000;
    font-size: 1.2em;
    font-weight: 900;
    font-family: 'Raleway', sans-serif;

    &:hover {
        color: #4ba4db;
    }
`;