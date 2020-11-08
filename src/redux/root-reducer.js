import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import menuReducer from './menu/menu.reducer';
import agentsReducer from './agents/agents.reducer';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['menu', 'agents']
};

const rootReducer = combineReducers({
    menu: menuReducer,
    agents: agentsReducer
});

export default persistReducer(persistConfig, rootReducer);