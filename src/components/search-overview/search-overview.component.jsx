import React from 'react';
import SearchHeader from '../search-header/search-header.component';
import SearchResultsContainer from '../search-results/search-results.container';
import {
    SearchOverviewContainer
} from './search-overview.styles';

const SearchOverviewComponent = () => (
    <SearchOverviewContainer>
        <SearchHeader />
        <SearchResultsContainer />
    </SearchOverviewContainer>
);


export default SearchOverviewComponent;