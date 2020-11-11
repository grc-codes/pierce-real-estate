import React from 'react';
import {
    MenuIconContainer
} from './menu-icon.styles';
import { connect } from 'react-redux';
import { toggleMobileMenuHidden } from '../../redux/menu/menu.actions';
import { selectMobileMenuHidden } from '../../redux/menu/menu.selectors';
import { createStructuredSelector } from 'reselect';

const MenuIcon = ({ toggleMobileMenuHidden, mobileMenuHidden }) => (
    <MenuIconContainer onClick={toggleMobileMenuHidden}>
        <i className={`fas ${mobileMenuHidden ? `fa-bars` : `fa-times`}`} />
    </MenuIconContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleMobileMenuHidden: () => dispatch(toggleMobileMenuHidden())
});

const mapStateToProps = createStructuredSelector({
    mobileMenuHidden: selectMobileMenuHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuIcon);