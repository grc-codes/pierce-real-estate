import React from 'react';
import {
    ListingsContainer
} from './listings.styles';
import Listing from '../listing/listing.component';

const Listings = () => (
    <ListingsContainer>
        <Listing imageUrl='../../assets/listing/listing-1.jpeg'/>
        <Listing imageUrl='../../assets/listing/listing-2.jpeg' />
        <Listing imageUrl='../../assets/listing/listing-3.jpeg' />
        <Listing imageUrl='../../assets/listing/listing-4.jpeg' />
    </ListingsContainer>
);

export default Listings;