import ListingsActionTypes from './listings.types';

const INITIAL_STATE = {
    results: null,
    isFetching: false,
    errorMessage: undefined,
    input: 'new york ny',
    api_input: 'new york ny'
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
                results: action.payload
            };
        case ListingsActionTypes.FETCH_LISTINGS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload 
            };
        case ListingsActionTypes.STORE_INPUT:
            return {
                ...state,
                input: action.payload
            };
        case ListingsActionTypes.STORE_API_INPUT:
            return {
                ...state,
                api_input: action.payload
            };
        default:
            return state;
    };
};

export default listingsReducer;