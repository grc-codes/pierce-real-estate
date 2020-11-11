import { takeLatest, call, put, all } from 'redux-saga/effects';
import ListingsActionTypes from './listings.types';
import {
    fetchListingsSuccess,
    fetchListingsFailure
} from './listings.actions';

export function* fetchListingsAsync() {
    
}

export function* fetchListingsStart() {
    yield takeLatest(
        ListingsActionTypes.FETCH_LISTINGS_START,
        fetchListingsAsync
    );
};

export function* listingsSaga() {
    yield all([
        call(fetchListingsStart)
    ]);
};