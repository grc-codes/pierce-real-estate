import React from 'react';
import {
    FeaturedContainer,
    FeaturedTitle,
    FeaturedListingContainer,
    FeaturedListingCity,
    FeaturedListingPrice,
    FeaturedListingsContainer
} from './featured.styles';

const Featured = () => (
    <FeaturedContainer>
        <FeaturedTitle>
            Featured Properties
        </FeaturedTitle>
        <FeaturedListingsContainer>
            <FeaturedListingContainer imageUrl='https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80'>
                <FeaturedListingCity>
                    Verona Twp.
                </FeaturedListingCity>
                <FeaturedListingPrice>
                    $579,000
                </FeaturedListingPrice>
            </FeaturedListingContainer>
            <FeaturedListingContainer imageUrl='https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'>
                <FeaturedListingCity>
                    Milburn Twp.
                </FeaturedListingCity>
                <FeaturedListingPrice>
                    $648,000
                </FeaturedListingPrice>
            </FeaturedListingContainer>
            <FeaturedListingContainer imageUrl='https://images.unsplash.com/photo-1505843795480-5cfb3c03f6ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2091&q=80'>
                <FeaturedListingCity>
                    Bloomfield Twp.
                </FeaturedListingCity>
                <FeaturedListingPrice>
                    $119,911
                </FeaturedListingPrice>
            </FeaturedListingContainer>
            <FeaturedListingContainer imageUrl='https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80'>
                <FeaturedListingCity>
                    Bloomfield Twp.
                </FeaturedListingCity>
                <FeaturedListingPrice>
                    $365,000
                </FeaturedListingPrice>
            </FeaturedListingContainer>
        </FeaturedListingsContainer>
    </FeaturedContainer>
);

export default Featured;