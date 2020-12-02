import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsListingsFetching } from '../../redux/listings/listings.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import SearchOverview from './search-overview.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsListingsFetching
});

const SearchOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(SearchOverview);

export default SearchOverviewContainer;