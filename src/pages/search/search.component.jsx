import React from 'react';
import SearchHeader from '../../components/search-header/search-header.component';
import SearchResults from '../../components/search-results/search-results.component';

const SearchPage = () => (
    <div className='search-page'>
        <SearchHeader />
        <SearchResults />
    </div>
);

export default SearchPage;