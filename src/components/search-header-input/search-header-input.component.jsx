import React from 'react';
import {
    SearchHeaderInputContainer
} from './search-header.styles';
import { searchChange, searchClicked } from '../../redux/listings/listings.actions';
import { connect } from 'react-redux';

const SearchHeaderInput = ({ searchChange, searchClicked }) => (
    <SearchHeaderInputContainer
        id='search-input'
        placeholder={`(New York City NY) or (10040)`}
        onChange={searchChange}
        onKeyDown={(e) => {
            const input = document.getElementById('search-input');
            if (e.key === "Enter") {
                searchClicked(input.value);
            };
        }}
    />
);

const mapDispatchToProps = dispatch => ({
    searchChange: () => dispatch(searchChange()),
    searchClicked: (api_input) => dispatch(searchClicked(api_input))
});



export default connect(null, mapDispatchToProps)(SearchHeaderInput);