import React from 'react';
import {
    MenuIconContainer,
    MenuIconImage
} from './menu-icon.styles';
import { connect } from 'react-redux';
import { toggleMobileMenuHidden } from '../../redux/menu/menu.actions';

const MenuIcon = ({ toggleMobileMenuHidden }) => (
    <MenuIconContainer>
        <MenuIconImage className='menu-icon' onClick={toggleMobileMenuHidden} />
    </MenuIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleMobileMenuHidden: () => dispatch(toggleMobileMenuHidden())
});

export default connect(null, mapDispatchToProps)(MenuIcon);