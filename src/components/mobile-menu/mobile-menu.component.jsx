import React from 'react';
import {
    MobileMenuContainer,
    OptionsContainer,
    OptionLink
} from './mobile-menu.styles';
import { toggleMobileMenuHidden } from '../../redux/menu/menu.actions';
import { connect } from 'react-redux';

const MobileMenu = ({ toggleMobileMenuHidden }) => (
    <MobileMenuContainer>
        <OptionsContainer>
            <OptionLink to='/' onClick={toggleMobileMenuHidden}>
                HOME
            </OptionLink>
            <OptionLink to='/listings' onClick={toggleMobileMenuHidden}>
                SEARCH
            </OptionLink>
            <OptionLink to='/agents' onClick={toggleMobileMenuHidden}>
                AGENTS
            </OptionLink>
            <OptionLink to='/about' onClick={toggleMobileMenuHidden}>
                ABOUT
            </OptionLink>
        </OptionsContainer>
    </MobileMenuContainer>
);

const mapDispatchToProps = dispatch => ({
    toggleMobileMenuHidden: () => dispatch(toggleMobileMenuHidden())
});

export default connect(null, mapDispatchToProps)(MobileMenu);