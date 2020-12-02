import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsListingsFetching } from '../../redux/listings/listings.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import SearchResults from './search-results.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsListingsFetching
});

const SearchResultsContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(SearchResults);

export default SearchResultsContainer;