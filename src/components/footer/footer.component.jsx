import React from 'react';
import {
    FooterContainer,
    AppStoresContainer,
    SocialContainer,
    LinksContainer,
    AppStoreIconContainer,
    PlayStoreIconContainer,
    FooterLinks,
    FooterLink
} from './footer.styles';
import { ReactComponent as AppStore } from '../../assets/app-store.svg';
import { ReactComponent as PlayStore } from '../../assets/google-play.svg';

const Footer = () => (
    <FooterContainer>
        <AppStoresContainer>
            <AppStoreIconContainer>
                <AppStore />
            </AppStoreIconContainer>
            <PlayStoreIconContainer>
                <PlayStore />
            </PlayStoreIconContainer>
        </AppStoresContainer>
        <SocialContainer>
            <i className='fab fa-facebook-square'></i>
            <i className='fab fa-pinterest-square'></i>
            <i className='fab fa-twitter-square'></i>
            <i className='fab fa-youtube-square'></i>
        </SocialContainer>
        <LinksContainer>
            <FooterLinks>
                <FooterLink to='/'>
                    HOME
                </FooterLink>
                |
                <FooterLink to='/search'>
                    SEARCH LISTINGS
                </FooterLink>
                |
                <FooterLink to='/agents'>
                    AGENTS
                </FooterLink>
                |
                <FooterLink to='/contact'>
                    CONTACT
                </FooterLink>
            </FooterLinks>
            <span>
                &copy; 2020 Pierce Real Estate
            </span>
        </LinksContainer>
    </FooterContainer>
);

export default Footer;