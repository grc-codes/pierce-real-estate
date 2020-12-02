import React from 'react';
import SearchOverview from '../../components/search-overview/search-overview.component';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchListingsStartAsync } from '../../redux/listings/listings.actions';
import { createStructuredSelector } from 'reselect';
import { selectInput } from '../../redux/listings/listings.selectors';

class SearchPage extends React.Component {
    componentDidMount() {
        const { fetchListingsStartAsync, input } = this.props;
        fetchListingsStartAsync(input);
    };

    render() {
        const { match } = this.props;
        return (
            <div className='search-page'>
                <Route
                    exact
                    path={`${match.path}`}
                    component={SearchOverview}
                />
            </div>
        );
    };
};

const mapDispatchToProps = dispatch => ({
    fetchListingsStartAsync: (input) => dispatch(fetchListingsStartAsync(input))
});

const mapStateToProps = createStructuredSelector({
    input: selectInput
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);