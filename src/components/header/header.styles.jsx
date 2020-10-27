import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background: lightblue;
`;

export const LogoContainer = styled(Link)`
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    margin: 10px;
`;