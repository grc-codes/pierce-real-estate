import React from 'react';
import {
    SearchResultsContainer
} from './search-results.styles';
import ListingsContainer from '../listings/listings.container';

const SearchResults = () => (
    <SearchResultsContainer>
        <ListingsContainer />
    </SearchResultsContainer>
);

export default SearchResults;