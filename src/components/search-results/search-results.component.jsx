import React from 'react';
import {
    SearchResultsContainer,
    SearchResultsTotalContainer,
    SearchResultsTotalText
} from './search-results.styles';
import Listings from '../listings/listings.component';

const SearchResults = () => (
    <SearchResultsContainer>
        <SearchResultsTotalContainer>
            <SearchResultsTotalText>
                <span>53</span> Results Found
            </SearchResultsTotalText>
        </SearchResultsTotalContainer>
        <Listings />
    </SearchResultsContainer>
);

export default SearchResults;