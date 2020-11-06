import { AgentsActionTypes } from './agents.types';

const INITIAL_STATE = {
    filterHidden: true
};

const agentsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case AgentsActionTypes.TOGGLE_FILTER_HIDDEN:
            return {
                ...state,
                filterHidden: !state.filterHidden
            };
        default:
            return state;
    };
};

export default agentsReducer;