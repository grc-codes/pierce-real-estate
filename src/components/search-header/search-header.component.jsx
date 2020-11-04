import React from 'react';
import {
    SearchHeaderContainer,
    SearchHeaderFilterButton,
    SearchHeaderFiltersContainer,
    SearchHeaderInput,
    SearchHeaderInputButton,
    SearchHeaderInputContainer,
    SearchHeaderFilterButtons,
    SearchHeaderMoreFilters
} from './search-header.styles';

const SearchHeader = () => (
    <SearchHeaderContainer>
        <SearchHeaderInputContainer>
            <SearchHeaderInput placeholder='Address, neighborhood, city, ZIP' />
            <SearchHeaderInputButton>
                <i className='fas fa-search'></i>
            </SearchHeaderInputButton>
        </SearchHeaderInputContainer>
        <SearchHeaderFiltersContainer>
            <SearchHeaderFilterButtons>
                <SearchHeaderFilterButton>
                    Home
                </SearchHeaderFilterButton>
                <SearchHeaderFilterButton>
                    Price
                </SearchHeaderFilterButton>
            </SearchHeaderFilterButtons>
            <SearchHeaderMoreFilters>
                Filters
            </SearchHeaderMoreFilters>
        </SearchHeaderFiltersContainer>
    </SearchHeaderContainer>
);

export default SearchHeader;