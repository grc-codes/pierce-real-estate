import React from 'react';
import {
    ListingContainer,
    ListingImageContainer,
    ForTag,
    ListingOverlayContainer,
    ListingDescriptionContainer,
    ListingPricingContainer,
    ListingTitle,
    ListingLocationText,
    ListingPriceText,
    ListingRatingText
} from './listing.styles';

const Listing = ({ imageUrl }) => (
    <ListingContainer>
        <ListingImageContainer imageUrl={imageUrl}>
            <ListingOverlayContainer>
                <ListingDescriptionContainer>
                    <ListingTitle>
                        Clinton Villa
                    </ListingTitle>
                    <ListingLocationText>
                        <i className='fas fa-map-marker-alt'></i>
                        Los Angeles
                        &nbsp;&nbsp;
                        <i className='fas fa-border-none'></i>
                        2,456 sq/m
                    </ListingLocationText>
                </ListingDescriptionContainer>
                <ListingPricingContainer>
                    <ListingPriceText>
                        $3,500.00
                    </ListingPriceText>
                    <ListingRatingText>
                        <i className='fas fa-star' />4.4 Reviews
                    </ListingRatingText>
                </ListingPricingContainer>
            </ListingOverlayContainer>
        </ListingImageContainer>
    </ListingContainer>
);

export default Listing;