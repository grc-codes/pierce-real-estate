import React from 'react';
import {
    ListingContainer,
    ListingImageContainer,
    ListingGradientContainer,
    ForTag,
    ListingOverlayContainer,
    ListingDescriptionContainer,
    ListingPricingContainer,
    ListingTitle,
    ListingLocationText,
    ListingPriceText,
    ListingRatingText
} from './listing.styles';

const Listing = ({ property_id, thumbnail, client_display_flags, address, price }) => (
    <ListingContainer onClick={() => console.log(property_id)}>
        <ListingImageContainer imageUrl={thumbnail}>
            <ListingGradientContainer>
                {
                    (client_display_flags.is_new_listing) ?
                        (
                            <ForTag>
                                New
                            </ForTag>
                        )
                        :
                        ''
                }
                <ListingOverlayContainer>
                    <ListingDescriptionContainer>
                        <ListingTitle>
                            {address.line}
                        </ListingTitle>
                        <ListingLocationText>
                            <i className='fas fa-map-marker-alt'></i>
                            {`${address.city} ${address.state_code}`}
                        </ListingLocationText>
                    </ListingDescriptionContainer>
                    <ListingPricingContainer>
                        <ListingPriceText>
                            $ {Number(price).toLocaleString()}
                        </ListingPriceText>
                        <ListingRatingText>
                            <i className='fas fa-star' />{(Math.random() * (4 - 2 + 1) + 2).toFixed(1)} Reviews
                        </ListingRatingText>
                    </ListingPricingContainer>
                </ListingOverlayContainer>
            </ListingGradientContainer>
        </ListingImageContainer>
    </ListingContainer>
);

export default Listing;