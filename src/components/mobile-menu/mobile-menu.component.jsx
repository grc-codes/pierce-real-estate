import React from 'react';
import {
    MobileMenuContainer,
    OptionsContainer,
    OptionLink
} from './mobile-menu.styles';
import { toggleMobileMenuHidden } from '../../redux/menu/menu.actions';
import { connect } from 'react-redux';
import { selectMobileMenuHidden } from '../../redux/menu/menu.selectors';
import { createStructuredSelector } from 'reselect';

const MobileMenu = ({ toggleMobileMenuHidden }) => (
    <MobileMenuContainer id='mobile-menu'>
        <OptionsContainer>
            <OptionLink to='/' onClick={toggleMobileMenuHidden}>
                HOME
            </OptionLink>
            <OptionLink to='/search' onClick={toggleMobileMenuHidden}>
                SEARCH
            </OptionLink>
            <OptionLink to='/contact' onClick={toggleMobileMenuHidden}>
                CONTACT
            </OptionLink>
        </OptionsContainer>
    </MobileMenuContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleMobileMenuHidden: () => dispatch(toggleMobileMenuHidden())
});

const mapStateToProps = createStructuredSelector({
    mobileMenuHidden: selectMobileMenuHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileMenu);