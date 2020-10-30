import React from 'react';

const ListingsPage = () => (
    <div className='listings-page'>
        <div className='search-header-container'>
            <div className='search-box-row'>
                <div className='search-box'></div>
                <div className='search-btn'></div>
            </div>
            <div className='search-filters-row'>
                <div className='filter-btn'>House</div>
                <div className='filter-btn'>Price</div>
                <div className='filter-btn'>Filters</div>
            </div>
            <div className='results'>
                53 Results Found
            </div>
        </div>
        <div className='search-results-container'>
            <div className='listing-container'>
                <div className='listing-image-container'>
                    <div className='for-sale-btn'>For Sale</div>
                    <div className='listing-name'>Clinton Villa</div>
                    <div className='city-name'>Los Angeles</div>
                    <div className='sq-footage'>2,456 sq / m</div>
                    <div className='price'>$3,500.00</div>
                    <div className='reviews'>4.4 Reviews</div>
                </div>
            </div>
        </div>
        

    </div>
);

export default ListingsPage;