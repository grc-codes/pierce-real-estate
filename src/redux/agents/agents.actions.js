import { AgentsActionTypes } from './agents.types';

export const toggleFilterHidden = () => ({
    type: AgentsActionTypes.TOGGLE_FILTER_HIDDEN
});

export const toggleSortDropdown = () => ({
    type: AgentsActionTypes.TOGGLE_SORT_DROPDOWN_HIDDEN
});