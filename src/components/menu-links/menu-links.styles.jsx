import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuLinksContainer = styled.div`
    display: none;
    justify-content: flex-end;
    align-items: center;

    @media screen and (min-width: 1024px) {
        display: flex;
    }
`;

export const OptionsContainer = styled.div``;

export const OptionLink = styled(Link)`
    padding: 15px;
    color: #000;
    font-size: 1em;
    font-weight: 900;
    text-decoration: none;
    font-family: 'Raleway', sans-serif;
    transition: all .3s ease-in-out;

    &:hover {
        color: #4ba4db;
    }
`;