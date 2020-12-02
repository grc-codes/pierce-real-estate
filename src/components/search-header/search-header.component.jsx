import React from 'react';
import {
    SearchHeaderContainer,
    SearchHeaderInputButton,
    SearchHeaderInputContainer
} from './search-header.styles';
import { connect } from 'react-redux';
import { searchClicked } from '../../redux/listings/listings.actions';
import SearchHeaderInput from '../search-header-input/search-header-input.component';

class SearchHeader extends React.Component {
    render() {
        const { searchClicked } = this.props;
        return (
            <SearchHeaderContainer>
                <SearchHeaderInputContainer>
                    <SearchHeaderInput />
                    <SearchHeaderInputButton onClick={() => {searchClicked(document.getElementById('search-input').value)}}>
                        <i className='fas fa-search' />
                    </SearchHeaderInputButton>
                </SearchHeaderInputContainer>
            </SearchHeaderContainer>
        );
    };
};

const mapDispatchToProps = dispatch => ({
    searchClicked: (api_input) => dispatch(searchClicked(api_input))
});

export default connect(null, mapDispatchToProps)(SearchHeader);