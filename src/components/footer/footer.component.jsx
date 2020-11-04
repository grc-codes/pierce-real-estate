import React from 'react';
import {
    FooterContainer,
    FooterTestimonialsContainer,
    FooterTestimonialsText,
    AppStoresContainer,
    SocialContainer,
    LinksContainer,
    FooterTestimonialsTitle,
    FooterTestimonialsSpan,
    HR,
    AppStoreIconContainer,
    PlayStoreIconContainer,
    FooterLinks,
    FooterLink
} from './footer.styles';
import { ReactComponent as AppStore } from '../../assets/app-store-1.svg';
import { ReactComponent as PlayStore } from '../../assets/google-play-5.svg';

const Footer = () => (
    <FooterContainer>
        <FooterTestimonialsContainer>
            <FooterTestimonialsTitle>
                Home Buyer Testimonials
            </FooterTestimonialsTitle>
            <FooterTestimonialsText>
                "I had an amazing experience from inception to move in day. The team went above and beyond the call of duty to present me with a beautiful home. Every day, I feel like I am on vacation. When buying a new home, we all have choices. I chose Pierce Real Estate and they have made the choice right."
            </FooterTestimonialsText>
            <FooterTestimonialsSpan>
                Customer Review from MONA STEELE - Morristown NJ
            </FooterTestimonialsSpan>
        </FooterTestimonialsContainer>
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
                <FooterLink to='/listings'>
                    SEARCH LISTINGS
                </FooterLink>
                |
                <FooterLink to='/agents'>
                    AGENTS
                </FooterLink>
                |
                <FooterLink to='/about'>
                    ABOUT
                </FooterLink>
            </FooterLinks>
            <span>
                &copy; 2020 Pierce Real Estate
            </span>
        </LinksContainer>
    </FooterContainer>
);

export default Footer;