import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MobileMenuContainer = styled.div`
    width: 100%;
`;

export const OptionsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export const OptionLink = styled(Link)`
    padding: 15px 30px;
    width: 100%;
    background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 1.2em;
`;