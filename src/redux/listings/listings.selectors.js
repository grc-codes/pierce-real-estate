import { createSelector } from 'reselect';

const selectListings = state => state.listings;

export const selectResults = createSelector(
    [selectListings],
    (listings) => listings.results
);

export const selectIsListingsFetching = createSelector(
    [selectListings],
    (listings) => listings.isFetching
);

export const selectIsResultsLoaded = createSelector(
    [selectListings],
    (listings) => !!listings.results
);

export const selectInput = createSelector(
    [selectListings],
    (listings) => listings.api_input
);

export const selectError = createSelector(
    [selectListings],
    (listings) => listings.errorMessage
);