import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import {
    HeaderContainer,
    LogoContainer
} from './header.styles';
import { createStructuredSelector } from 'reselect';
import { selectMobileMenuHidden } from '../../redux/menu/menu.selectors';
import MenuIcon from '../menu-icon/menu-icon.component';
import MobileMenu from '../mobile-menu/mobile-menu.component';
import { connect } from 'react-redux';


const Header = ({ mobileMenuHidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className='logo' />
        </LogoContainer>
        <MenuIcon />
        {
            (mobileMenuHidden) ?
            null :
            <MobileMenu />
        }
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    mobileMenuHidden: selectMobileMenuHidden
});

export default connect(mapStateToProps)(Header);