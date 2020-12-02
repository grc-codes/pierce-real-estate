import React from 'react';
import SearchHeader from '../search-header/search-header.component';
import SearchResultsContainer from '../search-results/search-results.container';

const SearchOverviewComponent = () => (
    <div className='search-overview'>
        <SearchHeader />
        <SearchResultsContainer />
    </div>
);


export default SearchOverviewComponent;