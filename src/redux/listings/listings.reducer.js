import ListingsActionTypes from './listings.types';

const INITIAL_STATE = {
    listings: null,
    isFetching: false,
    errorMessage: undefined
};

const listingsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case ListingsActionTypes.FETCH_LISTINGS_START:
            return {
                ...state,
                isFetching: true
            };
        case ListingsActionTypes.FETCH_LISTINGS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                listings: action.payload
            };
        case ListingsActionTypes.FETCH_LISTINGS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload 
            };
        default:
            return state;
    };
};

export default listingsReducer;