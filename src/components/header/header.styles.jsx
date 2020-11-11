import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 90px;
    width: 100%;
    background: #fff;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .15);
`;

export const HeaderRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
`;


export const LogoContainer = styled(Link)`
    height: 70px;
    // width: 70px;
    // display: flex;
    // align-items: center;
    // background-image: url('../../assets/pierce-logo.png');
    // background-position: center center;
    // background-size: cover;
    display: flex;
    align-items: center;
    text-decoration: none;
    & p {
        text-decoration: none;
        color: #4ba4db;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 1.7em;
    }
`;