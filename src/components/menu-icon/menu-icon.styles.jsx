import styled from 'styled-components';
import { ReactComponent as MenuIconSVG } from '../../assets/menu-icon.svg';

export const MenuIconContainer = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const MenuIconImage = styled(MenuIconSVG)`
    width: 55px;
    height: 55px;
    padding: 10px;
    cursor: pointer;
`;