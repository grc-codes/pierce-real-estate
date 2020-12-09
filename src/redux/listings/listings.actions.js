import ListingsActionTypes from './listings.types';
import axios from 'axios';
import turnInputToParams from './listings.util';

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

export const fetchListingsStartAsync = (input) => {
    return dispatch => {
        const params = turnInputToParams(input);
        const options = {
            method: 'GET',
            url: 'https://realtor.p.rapidapi.com/properties/v2/list-for-sale',
            params: params,
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': 'realtor.p.rapidapi.com'
            }
        };

        dispatch(fetchListingsStart());
        
        axios.request(options)
        .then(res => {
            const listings = res.data.properties;
            dispatch(fetchListingsSuccess(listings));
        }).catch(err => {
            dispatch(fetchListingsFailure(err.message));
        });
    };
};

export const storeInput = (input) => ({
    type: ListingsActionTypes.STORE_INPUT,
    payload: input
});

export const searchChange = () => {
    return dispatch => {
        const el = document.getElementById('search-input');
        const val = el.value;
        dispatch(storeInput(val));
    };
};

export const searchClicked = (api_input) => {
    return dispatch => {
        dispatch(storeApiInput(api_input));
        dispatch(fetchListingsStartAsync(api_input));
    };
};

export const storeApiInput = (api_input) => ({
    type: ListingsActionTypes.STORE_API_INPUT,
    payload: api_input
});