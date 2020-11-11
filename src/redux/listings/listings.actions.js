import ListingsActionTypes from './listings.types';

export const fetchListingsStart = () => ({
    type: ListingsActionTypes.FETCH_LISTINGS_START
});

export const fetchListingsSuccess = (listingsMap) => ({
    type: ListingsActionTypes.FETCH_LISTINGS_SUCCESS,
    payload: listingsMap
});

export const fetchListingsFailure = (errorMessage) => ({
    type: ListingsActionTypes.FETCH_LISTINGS_FAILURE,
    payload: errorMessage
});

export const fetchListingsStartAsync = () => {
    return dispatch => {
        
    };
};