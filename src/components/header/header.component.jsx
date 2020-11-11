import React from 'react';
import {
    HeaderContainer,
    LogoContainer,
    HeaderRow
} from './header.styles';
import MenuIcon from '../menu-icon/menu-icon.component';
import MobileMenu from '../mobile-menu/mobile-menu.component';

const Header = () => (
    <HeaderContainer>
        <HeaderRow>
            <LogoContainer to='/'>
                <p>Pierce Real Estate</p>
            </LogoContainer>
            <MenuIcon />
        </HeaderRow>
        <MobileMenu />
    </HeaderContainer>
);


export default (Header);