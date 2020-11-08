import { AgentsActionTypes } from './agents.types';

const INITIAL_STATE = {
    filterHidden: true,
    sortDropdownHidden: true
};

const agentsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case AgentsActionTypes.TOGGLE_FILTER_HIDDEN:
            return {
                ...state,
                filterHidden: !state.filterHidden
            };
        case AgentsActionTypes.TOGGLE_SORT_DROPDOWN_HIDDEN:
            return {
                ...state,
                sortDropdownHidden: !state.sortDropdownHidden
            };
        default:
            return state;
    };
};

export default agentsReducer;