import React from 'react';
import {
    HeaderContainer,
    LogoContainer,
    HeaderRow,
    HeaderWrapper
} from './header.styles';
import MenuIcon from '../menu-icon/menu-icon.component';
import MobileMenu from '../mobile-menu/mobile-menu.component';
import MenuLinks from '../menu-links/menu-links.component';

const Header = () => (
    <HeaderContainer>
        <HeaderWrapper>
            <HeaderRow>
                <LogoContainer to='/'>
                    <p>Pierce Real Estate</p>
                </LogoContainer>
                <MenuIcon />
                <MenuLinks />
            </HeaderRow>
            <MobileMenu />
        </HeaderWrapper>
    </HeaderContainer>
);


export default (Header);