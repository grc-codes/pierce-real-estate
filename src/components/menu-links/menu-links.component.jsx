import React from 'react';
import {
    MenuLinksContainer,
    OptionsContainer,
    OptionLink
} from './menu-links.styles';

const MenuLinks = () => (
    <MenuLinksContainer>
        <OptionsContainer>
            <OptionLink to='/'>
                Home
            </OptionLink>
            <OptionLink to='/search'>
                Search
            </OptionLink>
            <OptionLink to='/contact'>
                Contact
            </OptionLink>
        </OptionsContainer>
    </MenuLinksContainer>
);

export default MenuLinks;