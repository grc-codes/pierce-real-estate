import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsResultsLoaded } from '../../redux/listings/listings.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import Listings from './listings.component';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsResultsLoaded(state)
});

const ListingContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Listings);

export default ListingContainer;