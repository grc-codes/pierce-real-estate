import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MobileMenuContainer = styled.div`
    width: 40%;
    position: absolute;
    right: 0;
    top: 70px;
    z-index: 10;
    height: 30vh;
`;

export const OptionsContainer = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
`;

export const OptionLink = styled(Link)`
    padding: 15px 10px;
    width: 100%;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: .7em;
    font-family: 'Roboto', sans-serif;

    &:hover {
        background: orange;
    }
`;