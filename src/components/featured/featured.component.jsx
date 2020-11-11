import React from 'react';
import {
    FeaturedContainer,
    FeaturedListingContainer,
    FeaturedListingGradientContainer,
    FeaturedListingCity,
    FeaturedListingPrice,
    FeaturedListingsContainer
} from './featured.styles';

const Featured = () => (
    <FeaturedContainer>
        <FeaturedListingsContainer>
            <FeaturedListingContainer imageUrl='../../assets/listing/listing-1.jpeg'>
                <FeaturedListingGradientContainer>
                    <FeaturedListingCity>
                        Verona Twp.
                    </FeaturedListingCity>
                    <FeaturedListingPrice>
                        $579,000
                    </FeaturedListingPrice>
                </FeaturedListingGradientContainer>
            </FeaturedListingContainer>
            <FeaturedListingContainer imageUrl='../../assets/listing/listing-2.jpeg'>
                <FeaturedListingGradientContainer>
                    <FeaturedListingCity>
                        Milburn Twp.
                    </FeaturedListingCity>
                    <FeaturedListingPrice>
                        $648,000
                    </FeaturedListingPrice>                
                </FeaturedListingGradientContainer>
            </FeaturedListingContainer>
            <FeaturedListingContainer imageUrl='../../assets/listing/listing-3.jpeg'>
                <FeaturedListingGradientContainer>
                    <FeaturedListingCity>
                        Bloomfield Twp.
                    </FeaturedListingCity>
                    <FeaturedListingPrice>
                        $119,911
                    </FeaturedListingPrice>
                </FeaturedListingGradientContainer>
            </FeaturedListingContainer>
            <FeaturedListingContainer imageUrl='../../assets/listing/listing-4.jpeg'>
                <FeaturedListingGradientContainer>
                    <FeaturedListingCity>
                        Bloomfield Twp.
                    </FeaturedListingCity>
                    <FeaturedListingPrice>
                        $365,000
                    </FeaturedListingPrice>                    
                </FeaturedListingGradientContainer>
            </FeaturedListingContainer>
        </FeaturedListingsContainer>
    </FeaturedContainer>
);

export default Featured;