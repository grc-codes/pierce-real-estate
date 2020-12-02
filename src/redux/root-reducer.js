import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import menuReducer from './menu/menu.reducer';
import listingsReducer from './listings/listings.reducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['menu','listings']
};

const rootReducer = combineReducers({
    menu: menuReducer,
    listings: listingsReducer
});

export default persistReducer(persistConfig, rootReducer);