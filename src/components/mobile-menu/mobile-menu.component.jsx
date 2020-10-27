import React from 'react';
import {
    MobileMenuContainer,
    OptionsContainer,
    OptionLink
} from './mobile-menu.styles';

const MobileMenu = () => (
    <MobileMenuContainer>
        <OptionsContainer>
            <OptionLink to='/'>
                HOME
            </OptionLink>
            <OptionLink to='/services'>
                SERVICES
            </OptionLink>
            <OptionLink to='/listings'>
                SEARCH
            </OptionLink>
            <OptionLink to='/agents'>
                AGENTS
            </OptionLink>
            <OptionLink to='/about'>
                ABOUT
            </OptionLink>
        </OptionsContainer>
    </MobileMenuContainer>
);

export default MobileMenu;