import React from 'react';
import {
    ListingsContainer,
    EmptyListingMessage
} from './listings.styles';
import Listing from '../listing/listing.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectResults } from '../../redux/listings/listings.selectors';

const Listings = ({ results }) => (
    <ListingsContainer>
        {
            (results.length !== 0) ?
            results
            .filter(({property_id, ...otherProps}, idx) => idx < 10)
            .map(({ property_id, ...otherProps }) => (
                <Listing key={property_id} property_id={property_id} {...otherProps} />
            ))
            :
            (
                <EmptyListingMessage>
                    There are no results for your search.<br/> Please try using another zip code or city.
                </EmptyListingMessage>
            )
        }
    </ListingsContainer>
);

const mapStateToProps = createStructuredSelector({
    results: selectResults
});

export default connect(mapStateToProps)(Listings);