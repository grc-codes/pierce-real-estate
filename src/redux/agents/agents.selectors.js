import { createSelector } from 'reselect';

const selectAgents = state => state.agents;

export const selectFilterHidden = createSelector(
    [selectAgents],
    (agents) => agents.filterHidden
);

export const selectSortDropdownHidden = createSelector(
    [selectAgents],
    (agents) => agents.sortDropdownHidden
);